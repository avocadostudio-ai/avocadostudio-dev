import type { APIRoute } from 'astro';
import { hasDatabase, storeSignup } from '~/lib/early-access-store';

// The site is otherwise static; this one route becomes a serverless function.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TIMEOUT_MS = 3000;

function env(name: string): string | undefined {
  const fromImport = (import.meta.env as Record<string, string | undefined>)[name];
  if (fromImport) return fromImport;
  return typeof process !== 'undefined' ? process.env[name] : undefined;
}

// Vercel sets VERCEL_ENV; fall back to NODE_ENV for self-hosted deploys.
function isProduction() {
  return (env('VERCEL_ENV') ?? env('NODE_ENV')) === 'production';
}

// Never write raw addresses to function logs.
function redact(email: string) {
  const [user, domain] = email.split('@');
  return `${user.slice(0, 2)}***@${domain ?? '?'}`;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot: real users never see the "company" field; bots fill everything.
  // Pretend success and drop the submission silently.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return json({ ok: true });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'Enter a valid email address.' }, 400);
  }

  if (!hasDatabase()) {
    // In production a missing binding means the signup has nowhere to go.
    // Failing loudly beats telling the user they are on a list that does not
    // exist, which is unrecoverable once the request is over.
    if (isProduction()) {
      console.error('[early-access] no database configured; rejecting signup');
      return json({ ok: false, error: 'Signups are temporarily unavailable. Please try again later.' }, 503);
    }
    // Local/preview without a DB connected: keep the form usable.
    console.log(`[early-access] signup (no database configured): ${redact(email)}`);
    return json({ ok: true });
  }

  try {
    await storeSignup(email);
  } catch (err) {
    console.error('[early-access] store failed:', err);
    return json({ ok: false, error: 'Something went wrong. Please try again.' }, 502);
  }

  // The signup is durably stored, so notification must never be able to turn
  // this into a user-visible failure. Hand it to waitUntil where the platform
  // offers one, so a slow webhook can no longer stall the response; the
  // 3s abort keeps the worst case bounded either way.
  await runAfterResponse(async () => {
    try {
      await notify(email);
    } catch (err) {
      console.error('[early-access] notify failed:', err);
    }
  });

  return json({ ok: true });
};

// Vercel exposes waitUntil through @vercel/functions. Off-platform (astro dev,
// self-hosted Node) there is no such hook, so fall back to awaiting — the work
// is already error-swallowing and timeout-bounded.
async function runAfterResponse(task: () => Promise<void>) {
  try {
    const { waitUntil } = await import('@vercel/functions');
    waitUntil(task());
  } catch {
    await task();
  }
}

// Set ONE of these to get notified (storage above is independent of this):
//   • EARLY_ACCESS_WEBHOOK_URL: POSTs JSON (Slack/Zapier/Make/your own endpoint)
//   • RESEND_API_KEY + EARLY_ACCESS_NOTIFY_EMAIL: emails you via Resend
async function notify(email: string) {
  const webhook = env('EARLY_ACCESS_WEBHOOK_URL');
  if (webhook) {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: `New early-access signup: ${email}`, email }),
      signal: AbortSignal.timeout(NOTIFY_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return;
  }

  const resendKey = env('RESEND_API_KEY');
  const to = env('EARLY_ACCESS_NOTIFY_EMAIL');
  const from = env('EARLY_ACCESS_FROM_EMAIL') ?? 'Avocado Studio <onboarding@resend.dev>';
  if (resendKey && to) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${resendKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: 'New early-access signup',
        text: `New early-access signup: ${email}`,
      }),
      signal: AbortSignal.timeout(NOTIFY_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  }
}
