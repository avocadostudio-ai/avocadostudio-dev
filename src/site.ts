// Absolute dates power the JSON-LD freshness signals.
export const PUBLISHED_DATE = '2026-05-07';
export const MODIFIED_DATE = '2026-09-13';

export const GITHUB_URL = 'https://github.com/avocadostudio-ai/avocado';

/**
 * Whether to offer "View on GitHub" as a call to action.
 *
 * Off for now. It was the primary button in both the header and the hero, so
 * it is the first thing a visitor clicks — and the destination is not
 * currently something they can open. A CTA that leads nowhere costs more than
 * no CTA. The markup on both sides of this flag is intact; set it back to
 * `true` to restore both buttons.
 */
export const SHOW_GITHUB_LINKS = false;

export const DOCS_URL = 'https://docs.avocadostudio.dev';

/**
 * The Product Hunt badge in the footer.
 *
 * `postId` picks which launch the badge image shows; take it from the embed
 * code on the Product Hunt product page's Promote tab. Still the June launch
 * (avocado-7) until the Vercel Day launch's id is in hand.
 */
export const PRODUCT_HUNT = {
  postId: '1172664',
  campaign: 'badge-avocado-7',
  url: 'https://www.producthunt.com/products/avocado-studio',
};

/** The hosted playground: the real editor on a sample site, one session per browser. */
export const DEMO_URL = 'https://avocado-editor.vercel.app/';

/** What a developer runs to put Avocado Studio on their own machine. */
export const INSTALL_COMMAND = 'npm create avocado-site@latest';
export const AUTHOR = { name: 'Yury Horbach', url: 'https://yurybuilds.com' };
