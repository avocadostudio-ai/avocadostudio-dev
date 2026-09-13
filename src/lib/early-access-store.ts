import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

// The Neon-native Vercel integration injects DATABASE_URL; the legacy Vercel
// Postgres integration injects POSTGRES_URL. Accept either so it "just works".
//
// Astro exposes non-PUBLIC_ variables through import.meta.env at build time and
// process.env at runtime; read both so the endpoint works on Vercel, on Node
// self-hosting, and under `astro dev`.
function connectionString(): string | null {
  const env = import.meta.env as Record<string, string | undefined>;
  const proc = typeof process !== 'undefined' ? process.env : ({} as Record<string, string | undefined>);
  return env.DATABASE_URL ?? proc.DATABASE_URL ?? env.POSTGRES_URL ?? proc.POSTGRES_URL ?? null;
}

export function hasDatabase() {
  return Boolean(connectionString());
}

let _sql: NeonQueryFunction<false, false> | null = null;
function db() {
  if (!_sql) {
    const cs = connectionString();
    if (!cs) throw new Error('No Postgres connection string configured');
    _sql = neon(cs);
  }
  return _sql;
}

// Create the table once per warm instance. On failure we clear the cached
// promise so the next request retries instead of failing forever.
let _ensured: Promise<void> | null = null;
function ensureTable() {
  if (!_ensured) {
    _ensured = db()`
      CREATE TABLE IF NOT EXISTS early_access_signups (
        id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        email      TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `
      .then(() => undefined)
      .catch((err: unknown) => {
        _ensured = null;
        throw err;
      });
  }
  return _ensured;
}

export async function storeSignup(email: string) {
  await ensureTable();
  await db()`
    INSERT INTO early_access_signups (email)
    VALUES (${email})
    ON CONFLICT (email) DO NOTHING
  `;
}
