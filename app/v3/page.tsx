export default function HomeV3() {
  return (
    <main className="min-h-screen px-6 py-12 sm:py-16">
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

        <p className="text-xs text-avocado-900/50 pt-14 sm:pt-20 text-center">
          Early access · Apache 2.0 · Self-hosted
        </p>
      </div>
    </main>
  )
}
