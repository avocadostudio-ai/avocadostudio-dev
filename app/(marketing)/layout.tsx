import type { Metadata } from "next"
import "../globals.css"

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

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
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
              <a
                href="https://docs.avocadostudio.dev"
                className="inline-flex items-center gap-2 hover:text-avocado-700 transition"
              >
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
                  <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5H6.5A2.5 2.5 0 0 0 4 19.5Z" />
                </svg>
                Docs
              </a>
              <a
                href="https://yurybuilds.com"
                rel="me noopener"
                className="inline-flex items-center gap-2 hover:text-avocado-700 transition"
              >
                <svg
                  aria-hidden
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
                Blog
              </a>
              <a
                href="https://github.com/avocadostudio-ai/avocado"
                className="inline-flex items-center gap-2 hover:text-avocado-700 transition"
              >
                <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
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
