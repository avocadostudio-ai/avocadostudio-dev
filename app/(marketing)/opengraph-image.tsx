import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Avocado Studio: open-source AI editing for Next.js"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// next/og only bundles Geist Regular, and satori does no synthetic bolding, so
// any weight we don't supply here silently renders as regular. Load the real
// faces so the card matches the site's type. This route is prerendered, so the
// reads happen at build time.
async function loadFonts() {
  const dir = join(process.cwd(), "assets", "fonts")
  const [display, body] = await Promise.all([
    readFile(join(dir, "SchibstedGrotesk-SemiBold.ttf")),
    readFile(join(dir, "InstrumentSans-Regular.ttf")),
  ])
  return [
    { name: "Schibsted Grotesk", data: display, weight: 600 as const, style: "normal" as const },
    { name: "Instrument Sans", data: body, weight: 400 as const, style: "normal" as const },
  ]
}

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #16241A 0%, #1F4A2C 58%, #2F6B3F 100%)",
          color: "#FBFAF7",
          fontFamily: "Instrument Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "72px",
              height: "84px",
              borderRadius: "36px 36px 44px 44px",
              background: "#7FA86A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#7A5230",
              }}
            />
          </div>
          <div style={{ fontFamily: "Schibsted Grotesk", fontSize: "44px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            Avocado Studio
          </div>
        </div>

        <div
          style={{
            marginTop: "56px",
            fontFamily: "Schibsted Grotesk",
            fontWeight: 600,
            fontSize: "76px",
            lineHeight: 1.08,
            letterSpacing: "-1px",
            maxWidth: "940px",
          }}
        >
          Edit your Next.js site in plain language.
        </div>

        <div
          style={{
            marginTop: "32px",
            fontSize: "28px",
            lineHeight: 1.4,
            color: "#D2DACB",
            maxWidth: "880px",
          }}
        >
          Open source AI editing. Self-host it. Bring your own LLM keys.
        </div>
      </div>
    ),
    { ...size, fonts: await loadFonts() },
  )
}
