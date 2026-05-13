import type { Metadata } from "next"
import ComponentsCatalogue from "./catalogue-client"

export const metadata: Metadata = {
  title: "Components — Avocado Studio",
  description:
    "Browse Avocado Studio's built-in blocks: hero, feature grid, testimonials, FAQ, CTA, and more. Live previews with editable props.",
  openGraph: {
    title: "Avocado Studio — Components",
    description: "20 production-ready blocks with live previews. Drop-in for any Next.js site.",
    url: "https://avocadostudio.dev/components",
  },
}

export default function ComponentsPage() {
  return <ComponentsCatalogue />
}
