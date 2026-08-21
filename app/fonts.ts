import { Instrument_Sans, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google"

// Display: a modern grotesque with real personality in its terminals, but no
// calligraphic or italic character. Body: a quieter humanist companion.
// Mono is reserved for small technical labels.
export const display = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

export const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
})

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`
