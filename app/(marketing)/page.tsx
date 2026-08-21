import type { Metadata } from "next"
import { EarlyAccessForm } from "./components/early-access-form"
import { MODIFIED_DATE, PUBLISHED_DATE, SITE_URL } from "@/app/site"

const DESCRIPTION =
  "Open-source AI editing for Next.js sites. Change content in plain language, self-host it, and bring your own LLM keys. No six-figure platform contract."

// Page-scoped: lives here, not in the shared (marketing) layout, so sibling
// routes in the group do not inherit the homepage's canonical and identity.
export const metadata: Metadata = {
  title: {
    absolute: "Avocado Studio: open-source AI editing for Next.js",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Avocado Studio",
    description:
      "Open-source AI editing for Next.js sites. Self-hostable, bring your own LLM keys.",
    url: "/",
  },
  twitter: {
    title: "Avocado Studio",
    description: "Open-source AI editing for Next.js sites.",
  },
}

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "Avocado Studio",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      url: SITE_URL,
      author: {
        "@type": "Person",
        name: "Yury Horbach",
        url: "https://yurybuilds.com",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Avocado Studio: open-source AI editing for Next.js",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      author: {
        "@type": "Person",
        name: "Yury Horbach",
        url: "https://yurybuilds.com",
      },
    },
  ],
}

const FEATURES = [
  {
    title: "AI-assisted editing",
    body: "Agents update real website content: components, metadata, and publishing steps. Not just generated paragraphs.",
  },
  {
    title: "Live preview",
    body: "See changes instantly in your Next.js application while agents modify content and layouts in real time.",
  },
  {
    title: "Works with your stack",
    body: "Use your existing CMS, DAM, design system, frontend, and AI providers. No proprietary lock-in.",
  },
  {
    title: "Multi-model",
    body: "Bring your own models from Anthropic, OpenAI, or Gemini for text, images, and multimodal work. Route different tasks to different models.",
  },
  {
    title: "Self-hostable",
    body: "Deploy on your own infrastructure with full control over data, APIs, prompts, and integrations.",
  },
  {
    title: "Connected workflows",
    body: "Link editing, approvals, publishing, media, and localization into one workflow you control.",
  },
]

const USE_CASES = [
  {
    title: "Edit your website with AI",
    body: "Change website content in plain language while keeping your components, schema, and review rules intact.",
  },
  {
    title: "Marketing operations",
    body: "Coordinate publishing workflows across CMS, DAM, localization, and approval systems.",
  },
  {
    title: "Images and copy together",
    body: "Generate and edit images with Claude, OpenAI, or Gemini alongside your structured content.",
  },
  {
    title: "Your own editorial stack",
    body: "Build AI editing into your own workflows instead of buying a heavyweight enterprise platform.",
  },
]

const DX_BULLETS = [
  "API-first architecture",
  "Git-friendly workflows",
  "Self-hostable deployment",
  "Extensible adapters",
  "Streaming workflows",
  "Bring your own AI providers",
  "Works alongside existing CMS platforms",
  "Open source core",
]

const STACK_LAYERS = [
  { label: "Claude, OpenAI, Gemini", tone: "muted" as const },
  { label: "Avocado Orchestrator", tone: "primary" as const },
  { label: "Next.js, CMS, DAM, Design System", tone: "muted" as const, wide: true },
  { label: "Preview, Review, Publish", tone: "muted" as const },
]

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* HERO
          Mobile order is deliberate: headline, one-line promise, video, actions,
          Product Hunt. Everything else is pushed below the fold so the demo and
          the badge are both visible without scrolling on a small screen. */}
      <section className="px-6 pt-5 pb-14 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-28">
        <div
          className="page-w flex flex-col gap-y-5 sm:gap-y-7 lg:grid
                     lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-10"
        >
          <div className="lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:self-start">
            <h1 className="display font-display text-[2rem] font-semibold leading-[1.08] text-ink sm:text-[2.75rem] lg:text-[2.75rem] lg:leading-[1.07] 2xl:text-[3rem]">
              Edit your Next.js site
              <br />
              <span className="text-avocado-500">in plain language.</span>
            </h1>

            <p className="mt-3.5 max-w-lg text-[0.9375rem] leading-6 text-ink-muted sm:mt-6 sm:text-lg sm:leading-8 lg:mt-7">
              Describe the change you want. AI agents update the content,
              components, and SEO metadata, and create or modify media assets
              with GenAI.
            </p>
          </div>

          <div
            id="demo"
            className="lg:col-start-6 lg:col-span-7 lg:row-start-1 lg:row-span-2 lg:self-start"
          >
            <figure className="overflow-hidden rounded-xl border border-line bg-paper-sunk shadow-[0_1px_2px_rgba(22,36,26,0.05),0_12px_32px_-12px_rgba(22,36,26,0.18)]">
              <div className="relative aspect-[1280/702] w-full">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  poster="/demo-poster.jpg"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                </video>
              </div>
            </figure>
          </div>

          <div className="lg:col-start-1 lg:col-span-5 lg:row-start-2 lg:self-start">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://github.com/avocadostudio-ai/avocado"
                className="group inline-flex items-center gap-2 rounded-lg bg-avocado-500 px-4 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-avocado-700 sm:px-5 sm:py-3 sm:text-base"
              >
                View on GitHub
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
              <a
                href="https://docs.avocadostudio.dev"
                className="inline-flex items-center rounded-lg border border-line-strong bg-paper px-4 py-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink hover:bg-paper-sunk sm:px-5 sm:py-3 sm:text-base"
              >
                Read the docs
              </a>
            </div>

            <a
              className="mt-4 inline-block sm:mt-6"
              href="https://www.producthunt.com/products/avocado-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-avocado-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Avocado Studio, AI-native content operations for any Next.js website. Featured on Product Hunt"
                width={250}
                height={54}
                className="h-8 w-auto sm:h-9"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1172664&theme=light&t=1781621968305"
              />
            </a>

            <p className="mt-6 max-w-md text-sm leading-6 text-ink-muted sm:mt-8">
              You get a preview before anything ships. Free and open source,
              self-hostable, bring your own LLM keys. Early adopters and
              cofounders welcome.{" "}
              <a
                href="mailto:hello@avocadostudio.dev?subject=Avocado%20Studio%20early%20access"
                className="font-medium text-avocado-500 underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-avocado-500"
              >
                Get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WHY AVOCADO */}
      <Section tone="sunk">
        <SectionHeading label="Capabilities" title="Built for the modern web." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="bg-paper p-6">
              <h3 className="font-medium text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ARCHITECTURE */}
      <Section>
        <SectionHeading
          label="Architecture"
          title="An open layer between AI and your stack."
          sub="Avocado Studio sits between AI models and your existing content systems. Instead of replacing your stack, it coordinates work across it."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-line bg-paper p-8 sm:p-12">
          <ol className="flex flex-col items-center gap-4">
            {STACK_LAYERS.map((layer, i) => (
              <li
                key={layer.label}
                className="flex w-full flex-col items-center gap-4"
              >
                <Layer {...layer} />
                {i < STACK_LAYERS.length - 1 ? (
                  <span aria-hidden className="h-5 w-px bg-line-strong" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-x-8 gap-y-2 text-sm text-ink-muted sm:grid-cols-2 lg:grid-cols-3">
          {[
            "websites",
            "headless CMSs",
            "DAMs",
            "design systems",
            "localization tools",
            "publishing pipelines",
          ].map((item) => (
            <li key={item} className="border-b border-line py-2">
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-ink-muted">
          Start with Next.js sites today. Extend to the rest of your stack
          tomorrow.
        </p>
      </Section>

      {/* USE CASES */}
      <Section tone="sunk">
        <SectionHeading label="Use cases" title="What Avocado is built for." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <article key={u.title} className="bg-paper p-6 sm:p-8">
              <h3 className="font-medium text-ink">{u.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{u.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* DEVELOPER EXPERIENCE */}
      <Section>
        <SectionHeading
          label="Developer experience"
          title="Built for developers and platform teams."
        />
        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {DX_BULLETS.map((b, i) => (
            <li
              key={b}
              className="flex items-baseline gap-3 border-b border-line py-3 text-sm text-ink"
            >
              <span
                aria-hidden
                className="font-mono text-xs tabular-nums text-ink-faint"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {b}
            </li>
          ))}
        </ul>
      </Section>

      {/* POSITIONING */}
      <section className="bg-avocado-900 px-6 py-20 text-paper sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display text-balance font-display text-3xl font-semibold leading-[1.12] sm:text-[2.5rem]">
            Not another CMS.
            <br />
            Not another AI writing tool.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-7 text-paper/75">
            Avocado Studio is an open AI layer for editing and publishing across
            the tools you already use.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-paper/60">
            It helps teams edit websites and publish content with AI agents
            while keeping their existing stack, infrastructure, and controls
            intact.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-balance font-display text-3xl font-semibold leading-[1.12] text-ink sm:text-[2.5rem]">
            AI editing you actually own.
          </h2>
          <p className="mt-5 text-lg leading-7 text-ink-muted">
            Not rented from a platform, not locked behind a seat count. Run it
            on your own infrastructure with your own model keys. Start with
            Next.js sites today, extend across the rest of your stack tomorrow.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-xl border border-line bg-paper p-6 sm:p-8">
          <EarlyAccessForm />
        </div>

        <div className="mx-auto mt-8 flex max-w-xl items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs tracking-label text-ink-faint">
            or
          </span>
          <span aria-hidden className="h-px flex-1 bg-line" />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/avocadostudio-ai/avocado"
            className="inline-flex items-center rounded-lg border border-line-strong bg-paper px-5 py-3 font-medium text-ink transition-colors hover:border-ink hover:bg-paper-sunk"
          >
            View on GitHub
          </a>
          <a
            href="https://docs.avocadostudio.dev"
            className="inline-flex items-center rounded-lg border border-line-strong bg-paper px-5 py-3 font-medium text-ink transition-colors hover:border-ink hover:bg-paper-sunk"
          >
            Read the docs
          </a>
        </div>
      </Section>
    </main>
  )
}

function Section({
  children,
  tone = "paper",
}: {
  children: React.ReactNode
  tone?: "paper" | "sunk"
}) {
  return (
    <section
      className={`border-t border-line px-6 py-20 sm:py-28 lg:py-36 ${
        tone === "sunk" ? "bg-paper-sunk" : "bg-paper"
      }`}
    >
      <div className="page-w">{children}</div>
    </section>
  )
}

function SectionHeading({
  label,
  title,
  sub,
}: {
  label?: string
  title: string
  sub?: string
}) {
  return (
    <div className="max-w-2xl">
      {label ? (
        <span className="mb-4 block font-mono text-xs tracking-label text-ink-muted">
          {label}
        </span>
      ) : null}
      <h2 className="display text-balance font-display text-[1.75rem] font-semibold leading-[1.15] text-ink sm:text-[2.25rem]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 text-lg leading-7 text-ink-muted">{sub}</p>
      ) : null}
    </div>
  )
}

function Layer({
  label,
  tone,
  wide = false,
}: {
  label: string
  tone: "primary" | "muted"
  wide?: boolean
}) {
  const styles =
    tone === "primary"
      ? "bg-avocado-500 text-paper border-avocado-500"
      : "bg-paper-sunk text-ink border-line"
  return (
    <div
      className={`rounded-lg border px-5 py-3 text-center text-sm ${styles} ${
        wide ? "w-full" : "w-full max-w-xs"
      }`}
    >
      {label}
    </div>
  )
}
