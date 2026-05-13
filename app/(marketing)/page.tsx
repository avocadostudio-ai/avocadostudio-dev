const FEATURES = [
  {
    title: "Agentic Editing",
    body: "AI-assisted editing for structured website content, components, metadata, and publishing workflows. Not just text generation — real content operations.",
  },
  {
    title: "Live Preview",
    body: "See changes instantly in your Next.js application while AI agents modify content and layouts in real time.",
  },
  {
    title: "Open Architecture",
    body: "Use your existing CMS, DAM, design system, frontend stack, and AI providers. No proprietary lock-in.",
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
    title: "Composable Workflows",
    body: "Connect editing, approvals, publishing, media operations, localization, and governance into one AI-native workflow layer.",
  },
]

const USE_CASES = [
  {
    title: "AI-assisted website editing",
    body: "Update structured website content using natural language while preserving components, schema, and governance.",
  },
  {
    title: "Marketing operations",
    body: "Coordinate publishing workflows across CMS, DAM, localization, and approval systems.",
  },
  {
    title: "Multimodal content workflows",
    body: "Use Gemini/OpenAI image capabilities together with structured content editing and asset orchestration.",
  },
  {
    title: "Composable AI infrastructure",
    body: "Build your own AI-native editorial workflows without depending on a monolithic enterprise platform.",
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
  "Open source core (Apache 2.0)",
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
                Open, agentic, composable
                <br />
                <span className="text-avocado-500">content operations.</span>
              </h1>

              <p className="text-base sm:text-lg text-avocado-900/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Bring AI-native editing to any Next.js website. Free and open
                source, self-hostable, BYO LLM keys.
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
                  Be an early adopter — we&apos;ll help you onboard your site.
                </p>
                <a
                  href="mailto:hello@avocadostudio.dev?subject=Onboarding%20help"
                  className="group inline-flex items-baseline gap-1.5 text-avocado-700 font-medium hover:text-avocado-900 transition"
                >
                  <span className="underline underline-offset-4 decoration-avocado-300 group-hover:decoration-avocado-700 transition">
                    Get onboarding help
                  </span>
                  <span aria-hidden>→</span>
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
          <SectionHeading eyebrow="Why Avocado" title="Built for the modern composable web." />
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
            title="Designed as an open orchestration layer."
            sub="Avocado Studio sits between AI models and your existing content systems. Instead of replacing your stack, it orchestrates workflows across it."
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
            Start with Next.js websites today. Extend to any composable architecture tomorrow.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-20 sm:py-24 bg-avocado-50/60 border-y border-avocado-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <SectionHeading eyebrow="Use cases" title="What teams use Avocado for." />
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
            Avocado Studio is an AI-native orchestration layer for modern content operations.
          </p>
          <p className="text-base text-white/70 leading-relaxed">
            It helps teams manage websites, content workflows, and multimodal publishing using
            AI agents — while keeping their existing stack, infrastructure, and governance
            model intact.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-avocado-900">
            Build AI-native content operations on your own terms.
          </h2>
          <p className="text-lg text-avocado-900/70 leading-relaxed">
            Open. Composable. Self-hostable.
          </p>
          <p className="text-base text-avocado-900/65 leading-relaxed">
            Start with Next.js websites today — and extend across your entire content
            ecosystem tomorrow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://github.com/avocadostudio-ai/avocado"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-avocado-500 text-white font-semibold shadow-sm hover:bg-avocado-700 transition"
            >
              View on GitHub <span aria-hidden>→</span>
            </a>
            <a
              href="https://docs.avocadostudio.dev"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/80 text-avocado-700 font-semibold border border-avocado-200 hover:bg-white transition"
            >
              Read the docs
            </a>
            <a
              href="https://github.com/avocadostudio-ai/avocado/discussions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/80 text-avocado-700 font-semibold border border-avocado-200 hover:bg-white transition"
            >
              Join early access
            </a>
          </div>
          <p className="text-xs text-avocado-900/50 pt-6">
            Early access · Apache 2.0 · Self-hosted
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
