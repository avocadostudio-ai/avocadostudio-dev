import { EarlyAccessForm } from "./components/early-access-form"

const FEATURES = [
  {
    title: "AI-assisted editing",
    body: "AI updates real website content — components, metadata, and publishing steps — not just generated paragraphs.",
  },
  {
    title: "Live Preview",
    body: "See changes instantly in your Next.js application while AI agents modify content and layouts in real time.",
  },
  {
    title: "Works with your stack",
    body: "Use your existing CMS, DAM, design system, frontend, and AI providers. No proprietary lock-in.",
  },
  {
    title: "Multi-model AI",
    body: "Bring your own models from Anthropic, OpenAI, or Gemini for text, images, and multimodal workflows. Route different tasks to different models.",
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="px-6 py-12 sm:py-16">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 text-center lg:text-left space-y-6">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-avocado-50 border border-avocado-200 text-xs sm:text-sm font-semibold tracking-wide text-avocado-700">
                Open-source AI editor &amp; page builder for Next.js
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-avocado-900 leading-[1.1]">
                Edit your Next.js site
                <br />
                <span className="text-avocado-500">in plain language.</span>
              </h1>

              <p className="text-base sm:text-lg text-avocado-900/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Describe the change you want and AI agents update the content,
                components, and metadata — safely. Free and open source,
                self-hostable, bring your own LLM keys.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <a
                  href="https://github.com/avocadostudio-ai/avocado"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-avocado-500 text-white font-semibold shadow-sm hover:bg-avocado-700 transition"
                >
                  View on GitHub
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="https://docs.avocadostudio.dev"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/80 text-avocado-700 font-semibold border border-avocado-200 hover:bg-white transition"
                >
                  Read the docs
                </a>
              </div>

              <div className="pt-2 flex flex-col items-center lg:items-start gap-1.5">
                <p className="text-sm text-avocado-900/70">
                  Early adopters and cofounders welcome. Reach out for support onboarding your site.
                </p>
                <a
                  href="mailto:hello@avocadostudio.dev?subject=Avocado%20Studio%20%E2%80%94%20early%20access%20%26%20cofounders"
                  className="group inline-flex items-baseline gap-1.5 text-avocado-700 font-medium hover:text-avocado-900 transition"
                >
                  <span className="underline underline-offset-4 decoration-avocado-300 group-hover:decoration-avocado-700 transition">
                    Get in touch
                  </span>
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="https://www.producthunt.com/products/avocado-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-avocado-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Avocado - AI-native content operations for any Next.js website | Product Hunt"
                    width={250}
                    height={54}
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1172664&theme=light&t=1781621968305"
                  />
                </a>
              </div>
            </div>

            <div id="demo" className="lg:col-span-7">
              <div className="relative aspect-video w-full rounded-2xl border border-avocado-200 bg-white/70 shadow-sm overflow-hidden">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  poster="/demo-poster.svg"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AVOCADO */}
      <section className="px-6 py-20 sm:py-24 bg-avocado-50/60 border-y border-avocado-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <SectionHeading eyebrow="Why Avocado" title="Built for the modern web." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-avocado-200 bg-white p-6 space-y-2 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-avocado-900">{f.title}</h3>
                <p className="text-sm text-avocado-900/70 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="px-6 py-20 sm:py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <SectionHeading
            eyebrow="Architecture"
            title="An open layer between AI and your stack."
            sub="Avocado Studio sits between AI models and your existing content systems. Instead of replacing your stack, it coordinates work across it."
          />

          <div className="rounded-2xl border border-avocado-200 bg-white shadow-sm p-8 sm:p-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <Layer label="Claude · OpenAI · Gemini" tone="muted" />
              <Arrow />
              <Layer label="Avocado Orchestrator" tone="primary" />
              <Arrow />
              <Layer
                label="Next.js  ↔  CMS  ↔  DAM  ↔  Design System"
                tone="muted"
                wide
              />
              <Arrow />
              <Layer label="Preview · Review · Publish" tone="muted" />
            </div>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-sm text-avocado-900/75 max-w-3xl mx-auto">
            {[
              "websites",
              "headless CMSs",
              "DAMs",
              "design systems",
              "localization tools",
              "publishing pipelines",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="text-avocado-500">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-center text-avocado-900/70 max-w-2xl mx-auto">
            Start with Next.js sites today. Extend to the rest of your stack tomorrow.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-20 sm:py-24 bg-avocado-50/60 border-y border-avocado-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <SectionHeading eyebrow="Use cases" title="What Avocado is built for." />
          <div className="grid gap-6 sm:grid-cols-2">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-xl border border-avocado-200 bg-white p-6 space-y-2 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-avocado-900">{u.title}</h3>
                <p className="text-sm text-avocado-900/70 leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER EXPERIENCE */}
      <section className="px-6 py-20 sm:py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <SectionHeading
            eyebrow="Developer experience"
            title="Built for developers and platform teams."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DX_BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-lg border border-avocado-200 bg-white px-4 py-3 text-sm text-avocado-900/85"
              >
                <span aria-hidden className="text-avocado-500 font-semibold">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="px-6 py-20 sm:py-24 bg-avocado-900 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-sm font-semibold tracking-wide uppercase text-avocado-400">
            Positioning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Not another CMS. Not another AI writing tool.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Avocado Studio is an open AI layer for editing and publishing across the tools you
            already use.
          </p>
          <p className="text-base text-white/70 leading-relaxed">
            It helps teams edit websites and publish content with AI agents — while keeping
            their existing stack, infrastructure, and controls intact.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-avocado-900">
            Add AI editing to your site, on your own terms.
          </h2>
          <p className="text-lg text-avocado-900/70 leading-relaxed">
            Open source. Self-hostable. No lock-in.
          </p>
          <p className="text-base text-avocado-900/65 leading-relaxed">
            Start with Next.js sites today — and extend across the rest of your stack tomorrow.
          </p>
          <div className="pt-4 space-y-8">
            {/* Primary action — early access signup */}
            <div className="mx-auto max-w-md rounded-2xl border border-avocado-200 bg-white p-6 sm:p-7 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-avocado-500 mb-4">
                Get early access
              </p>
              <EarlyAccessForm />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-xs mx-auto">
              <span aria-hidden className="h-px flex-1 bg-avocado-200" />
              <span className="text-xs font-medium uppercase tracking-wide text-avocado-900/40">
                or
              </span>
              <span aria-hidden className="h-px flex-1 bg-avocado-200" />
            </div>

            {/* Secondary actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/avocadostudio-ai/avocado"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-avocado-700 font-semibold border border-avocado-200 hover:bg-avocado-50 transition"
              >
                View on GitHub <span aria-hidden>→</span>
              </a>
              <a
                href="https://docs.avocadostudio.dev"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-avocado-700 font-semibold border border-avocado-200 hover:bg-avocado-50 transition"
              >
                Read the docs
              </a>
            </div>
          </div>
          <p className="text-xs text-avocado-900/60 pt-6">
            Early access · Self-hosted
          </p>
        </div>
      </section>
    </main>
  )
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-4">
      {eyebrow ? (
        <div className="text-sm font-semibold tracking-wide uppercase text-avocado-500">{eyebrow}</div>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-avocado-900">{title}</h2>
      {sub ? <p className="text-lg text-avocado-900/70 leading-relaxed">{sub}</p> : null}
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
  const base =
    "px-5 py-3 rounded-lg border font-medium text-sm sm:text-base text-center"
  const styles =
    tone === "primary"
      ? "bg-avocado-500 text-white border-avocado-700 shadow-sm"
      : "bg-avocado-50 text-avocado-900 border-avocado-200"
  const width = wide ? "w-full max-w-2xl" : "min-w-[16rem]"
  return <div className={`${base} ${styles} ${width}`}>{label}</div>
}

function Arrow() {
  return (
    <div aria-hidden className="text-avocado-500 text-xl leading-none">
      ↓
    </div>
  )
}
