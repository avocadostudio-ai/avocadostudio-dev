# avocadostudio.dev

Marketing / landing site for [Avocado Studio](https://github.com/avocadostudio-ai/avocado).

Stack: Astro 7 · Tailwind CSS v4 · TypeScript, built on the
[AstroWind](https://github.com/arthelokyo/astrowind) template.

## Local dev

Requires Node >= 22.22.3.

```bash
pnpm install
pnpm dev
# http://localhost:4321
```

`@avocadostudio-ai/*` are published to the GitHub package registry, so
installing needs `NODE_AUTH_TOKEN` set to a token with `read:packages`
(`.npmrc` reads it from the environment).

## Environment

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` (or `POSTGRES_URL`) | Neon Postgres for early-access signups. Without it the form still works locally but stores nothing; in production the endpoint returns 503 rather than silently dropping a signup. |
| `EARLY_ACCESS_WEBHOOK_URL` | Optional. POSTs each signup as JSON (Slack/Zapier/your own endpoint). |
| `RESEND_API_KEY` + `EARLY_ACCESS_NOTIFY_EMAIL` | Optional alternative to the webhook: emails you via Resend. |

## Generated assets

```bash
pnpm og         # src/assets/images/default.png — the Open Graph card
pnpm favicons   # favicon.ico + apple-touch-icon.png from favicon.svg
```

Both are committed. Re-run `pnpm og` when the homepage headline changes.

## Deploy

Connected to Vercel. Pushes to `main` deploy automatically.
The site is static apart from `/api/early-access`, which the Vercel adapter
builds as a serverless function.
The custom domain `avocadostudio.dev` is configured in the Vercel project settings.
