/**
 * The search-intent landing pages: one per framework, CMS or job that people
 * actually search for ("Next.js AI editor", "Sanity AI editing", "MCP server
 * for a website", "Builder.io alternative"). Nobody searches for the product's
 * name before they know it, so these pages are how they find it.
 *
 * Each page's facts come from the published @avocadostudio-ai/* READMEs and
 * docs.avocadostudio.dev. Keep them in step with the homepage and
 * public/llms.txt when support changes.
 *
 * This list feeds the "More integrations" links at the foot of every one of
 * those pages and the footer column, so a new page is linked the moment it is
 * listed here.
 */
export const INTENT_PAGES = [
  { href: '/nextjs', label: 'Next.js', footer: 'AI editor for Next.js' },
  { href: '/astro', label: 'Astro', footer: 'AI editor for Astro' },
  { href: '/sanity', label: 'Sanity', footer: 'AI editing for Sanity' },
  { href: '/contentful', label: 'Contentful', footer: 'AI editing for Contentful' },
  { href: '/strapi', label: 'Strapi', footer: 'AI editing for Strapi' },
  { href: '/mcp', label: 'MCP server', footer: 'MCP server' },
  { href: '/alternatives/builder-io', label: 'vs Builder.io', footer: 'Builder.io alternative' },
] as const;
