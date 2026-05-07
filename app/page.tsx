export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-2xl w-full mx-auto text-center space-y-10">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-avocado-900 leading-tight">
          Open, agentic, composable
          <br />
          <span className="text-avocado-500">content operations.</span>
        </h1>

        <p className="text-lg text-avocado-900/70 leading-relaxed max-w-xl mx-auto">
          Free and open source. Agentic-first. Self-hostable, BYO LLM keys,
          composable with the stack you already have.
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
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/80 text-avocado-700 font-semibold border border-avocado-200 hover:bg-white transition"
          >
            Watch demo
          </a>
        </div>

        <p className="text-xs text-avocado-900/50 pt-8">
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
