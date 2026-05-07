export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full text-center space-y-10">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-avocado-900 leading-tight">
          Open, agentic, composable
          <br />
          <span className="text-avocado-500">content operations.</span>
        </h1>

        <p className="text-lg text-avocado-900/70 leading-relaxed max-w-xl mx-auto">
          A modern AI-native content layer for teams who want agentic editing
          without a six-figure platform contract. Self-hostable, BYO LLM keys,
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
        </div>

        <p className="text-xs text-avocado-900/50 pt-8">
          Early access · Apache 2.0 · Self-hosted
        </p>
      </div>
    </main>
  )
}
