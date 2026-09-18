import { getPermalink } from './utils/permalinks';
import { SHOW_GITHUB_LINKS } from './site';

const GITHUB_URL = 'https://github.com/avocadostudio-ai/avocado';
const DOCS_URL = 'https://docs.avocadostudio.dev';
const BLOG_URL = 'https://yurybuilds.com';
const CONTACT_MAILTO = 'mailto:hello@avocadostudio.dev?subject=Avocado%20Studio%20inquiry';

export const headerData = {
  /*
   * No "Components" here. The page behind it lists the generic blocks that
   * ship in the box, and a top-level nav item called Components states that
   * those are the product's parts — the opposite of the pitch, which is that
   * your own components become the blocks. It stays one click away in the
   * footer, named for what it actually is.
   */
  links: [
    { text: 'Capabilities', href: getPermalink('/#capabilities') },
    { text: 'How it works', href: getPermalink('/#how-it-works') },
    { text: 'Docs', href: DOCS_URL },
    { text: 'Blog', href: BLOG_URL },
  ],
  /*
   * One primary action, and not a second way to say "Docs" — that link is two
   * items to its left.
   *
   * Not "Early access" either: the product is free to use and self-hostable,
   * and a header button offering *access* says the opposite — that there is a
   * gate, and that reading the docs is the queue for it. Talking to us is an
   * invitation, not a turnstile.
   */
  actions: SHOW_GITHUB_LINKS
    ? [
        {
          text: 'View on GitHub',
          href: GITHUB_URL,
          icon: 'tabler:brand-github',
          variant: 'primary' as const,
          target: '_blank',
          rel: 'noopener',
        },
      ]
    : [
        {
          text: 'Contact us',
          href: getPermalink('/#contact'),
          variant: 'primary' as const,
        },
      ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Capabilities', href: getPermalink('/#capabilities') },
        { text: 'How it works', href: getPermalink('/#how-it-works') },
        { text: 'Use cases', href: getPermalink('/#use-cases') },
        { text: 'Built-in blocks', href: getPermalink('/components') },
      ],
    },
    {
      title: 'Developers',
      links: [
        { text: 'Documentation', href: DOCS_URL },
        // Same flag as the header: these three all land on the repository.
        ...(SHOW_GITHUB_LINKS
          ? [
              { text: 'Source on GitHub', href: GITHUB_URL },
              { text: 'Report an issue', href: `${GITHUB_URL}/issues` },
              { text: 'Releases', href: `${GITHUB_URL}/releases` },
            ]
          : []),
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'Contact', href: getPermalink('/#contact') },
        { text: 'Blog', href: BLOG_URL },
        { text: 'Product Hunt', href: 'https://www.producthunt.com/products/avocado-studio' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    ...(SHOW_GITHUB_LINKS ? [{ ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: GITHUB_URL }] : []),
    { ariaLabel: 'Contact', icon: 'tabler:mail', href: CONTACT_MAILTO },
  ],
  footNote: `
    Free and open source. Built by <a class="text-link underline" href="https://yurybuilds.com">Yury Horbach</a>.
  `,
};
