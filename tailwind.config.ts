import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm paper ground rather than pure white.
        paper: {
          DEFAULT: "#FBFAF7",
          sunk: "#F3F1EA",
        },
        // Text colours are real values, not black-at-an-opacity.
        ink: {
          DEFAULT: "#16241A",
          muted: "#5C665C",
          faint: "#666E66",
        },
        line: {
          DEFAULT: "#E2DFD4",
          strong: "#CFCBBC",
        },
        avocado: {
          50: "#F2F5EF",
          100: "#E4EADF",
          200: "#D2DACB",
          400: "#7FA86A",
          500: "#2F6B3F",
          700: "#1F4A2C",
          900: "#16241A",
        },
        pit: "#7A5230",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        label: "0.08em",
      },
    },
  },
  plugins: [],
}

export default config
