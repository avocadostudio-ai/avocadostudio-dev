// Single source of truth for the canonical origin. Canonicals and JSON-LD
// @ids must always point at production, even when rendered on a preview
// deployment, so previews never declare themselves canonical.
//
// This MUST match the host the site actually serves on: the apex 307s to www,
// so an apex canonical points every page at a URL that redirects away.
export const SITE_URL = "https://www.avocadostudio.dev"

// Absolute dates power the JSON-LD freshness signals.
export const PUBLISHED_DATE = "2026-05-07"
export const MODIFIED_DATE = "2026-08-21"
