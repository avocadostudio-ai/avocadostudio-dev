import { getPermalink } from './utils/permalinks';
import { SHOW_GITHUB_LINKS } from './site';

const GITHUB_URL = 'https://github.com/avocadostudio-ai/avocado';
const DOCS_URL = 'https://docs.avocadostudio.dev';
const BLOG_URL = 'https://yurybuilds.com';
const CONTACT_MAILTO = 'mailto:hello@avocadostudio.dev?subject=Avocado%20Studio%20inquiry';

export const headerData = {
  links: [
    { text: 'Capabilities', href: getPermalink('/#capabilities') },
    { text: 'How it works', href: getPermalink('/#how-it-works') },
    { text: 'Components', href: getPermalink('/components') },
    { text: 'Docs', href: DOCS_URL },
    { text: 'Blog', href: BLOG_URL },
  ],
  /*
   * One primary action. It was "View on GitHub"; with SHOW_GITHUB_LINKS off the
   * header would otherwise be left with no call to action at all, so the docs
   * take the slot — the next thing we actually want a visitor to open.
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
          text: 'Read the docs',
          href: DOCS_URL,
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
        { text: 'Components', href: getPermalink('/components') },
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
        { text: 'Early access', href: getPermalink('/#early-access') },
        { text: 'Contact', href: CONTACT_MAILTO },
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
