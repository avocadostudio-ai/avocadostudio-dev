import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://avocadostudio.dev"),
}

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
