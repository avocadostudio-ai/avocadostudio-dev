export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-avocado-50 border border-avocado-200 text-xs sm:text-sm font-semibold tracking-wide text-avocado-700">
          Open-source AI editor for Next.js websites
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-avocado-900 leading-tight">
          Open, agentic, composable
          <br />
          <span className="text-avocado-500">content operations.</span>
        </h1>

        <p className="text-lg text-avocado-900/70 leading-relaxed max-w-xl mx-auto">
          Bring AI-native editing to any Next.js website. Free and open source,
          self-hostable, BYO LLM keys — composable with the CMS, DAM, and stack
          you already have.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
          <a
            href="#demo"
            className="inline-flex items-center gap-1.5 px-3 py-3 text-avocado-700/80 font-medium hover:text-avocado-900 transition"
          >
            <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch demo
          </a>
        </div>

        <div className="pt-6 flex flex-col items-center gap-2">
          <p className="text-sm text-avocado-900/70">
            Be an early adopter — we&apos;ll help you onboard your site.
          </p>
          <a
            href="mailto:hello@avocadostudio.dev?subject=Onboarding%20help"
            className="inline-flex items-center gap-1.5 text-avocado-700 font-medium hover:text-avocado-900 underline underline-offset-4 decoration-avocado-300 hover:decoration-avocado-700 transition"
          >
            Get onboarding help
            <span aria-hidden>→</span>
          </a>
        </div>

        <p className="text-xs text-avocado-900/50 pt-6">
          Early access · Apache 2.0 · Self-hosted
        </p>
      </div>

      <section
        id="demo"
        aria-label="Product demo"
        className="max-w-4xl w-full mx-auto pt-20 sm:pt-28"
      >
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
      </section>
    </main>
  )
}
