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
      <body>{children}</body>
    </html>
  )
}
