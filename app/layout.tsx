import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://avocadostudio.dev"),
  title: "Avocado Studio — open agentic content operations",
  description:
    "Open, agentic, composable content operations. A modern AI-native content layer for teams who want agentic editing without a six-figure platform contract.",
  openGraph: {
    title: "Avocado Studio",
    description:
      "Open, agentic, composable content operations. Self-hosted, MIT-licensed, BYO LLM keys.",
    url: "https://avocadostudio.dev",
    siteName: "Avocado Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avocado Studio",
    description: "Open agentic content operations.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="px-6 pt-6 sm:pt-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" aria-label="Avocado Studio home" className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Avocado Studio" className="h-8 sm:h-9 w-auto" />
            </a>
            <nav className="flex items-center gap-5 text-sm font-medium text-avocado-900/75">
              <a href="https://docs.avocadostudio.dev" className="hover:text-avocado-700 transition">
                Docs
              </a>
              <a
                href="https://github.com/avocadostudio-ai/avocado"
                className="hover:text-avocado-700 transition"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
