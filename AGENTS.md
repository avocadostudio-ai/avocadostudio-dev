# avocadostudio.dev

Marketing site for [Avocado Studio](https://github.com/avocadostudio-ai/avocado).
Astro 7 + Tailwind CSS v4, built on the [AstroWind](https://github.com/arthelokyo/astrowind)
template. It was a Next.js App Router site until the Astro rebuild; anything
that still reads like Next (`app/`, `next/font`, route handlers) is out of date.

## Layout

- `src/pages/` — routes. `index.astro` is the homepage, `api/early-access.ts` is
  the only non-static route (`export const prerender = false`).
- `src/components/widgets/` — AstroWind's section widgets. Prefer composing
  these over writing new sections; the homepage is mostly widget calls with
  props.
- `src/components/CustomStyles.astro` — the palette. Every colour in the site
  resolves to an `--aw-color-*` variable defined here, for light and `.dark`.
- `src/assets/styles/tailwind.css` — theme tokens and the `btn` utilities. The
  built-in `gray-*` and `slate-*` scales are redefined here as warm neutrals so
  stock widgets land on-palette without being edited individually.
- `src/config.yaml` — site name, canonical origin, default SEO metadata.
- `src/navigation.ts` — header and footer links.
- `vendor/integration/` — the AstroWind integration that loads `config.yaml`.

## Conventions

- Colours come from tokens (`text-muted`, `bg-sunk`, `border-line`,
  `text-primary`), never from raw Tailwind palette classes. Anything hardcoded
  will look wrong in one of the two themes.
- Both themes are real: check a change in light *and* dark before calling it
  done. `WidgetWrapper`'s `isDark` makes its background transparent in dark
  mode, so a band that must stay distinct needs its own `bg` slot.
- The blog is present but disabled (`apps.blog.isEnabled: false` and no
  `src/pages/[...blog]/`). Re-enabling means restoring both.

## Gotchas

- `@avocadostudio-ai/blocks` is published for Next.js and imports `next/image`.
  `astro.config.ts` aliases that to `src/shims/next-image.tsx`.
- `@avocadostudio-ai/*` live on public npm from 0.1.0 onward. GitHub Packages
  only ever held 0.0.x, so the repo must NOT carry an `.npmrc` pinning that
  scope to `npm.pkg.github.com` — it makes every 0.1.0+ version unresolvable
  (metadata 404s on the tarball) and breaks CI while a warm local pnpm store
  hides it.
- Product facts are stated in three places that must agree: the homepage copy
  (Integrations and FAQs, which also feed the JSON-LD), the `SoftwareApplication`
  node in `src/pages/index.astro`, `public/llms.txt`, and the search-intent
  pages listed in `src/data/intents.ts` (`/nextjs`, `/sanity`, `/mcp`, …). They are checked
  against the npm package READMEs and docs.avocadostudio.dev — change them
  together when support changes.
- The OG card and the raster favicons are generated, not hand-made:
  `pnpm og` and `pnpm favicons`. Re-run `pnpm og` if the homepage headline
  changes.
- Node >= 22.22.3 (AstroWind's floor).

## Commands

```bash
pnpm dev         # http://localhost:4321
pnpm build
pnpm typecheck   # astro check
pnpm lint
```
