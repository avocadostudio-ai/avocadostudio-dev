import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Avocado Studio — open-source AI editing for Next.js"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #0a2818 0%, #14532d 60%, #1f7a3a 100%)",
          color: "#f0fdf4",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <div
            style={{
              width: "96px",
              height: "112px",
              borderRadius: "48px 48px 60px 60px",
              background: "#84cc16",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#6b3e2e",
              }}
            />
          </div>
          <div style={{ fontSize: "64px", fontWeight: 700, letterSpacing: "-2px" }}>
            Avocado Studio
          </div>
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          Open-source AI editing for Next.js
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "30px",
            color: "#bbf7d0",
            maxWidth: "880px",
          }}
        >
          Change content in plain language. Self-host it. Bring your own LLM keys.
        </div>
      </div>
    ),
    { ...size },
  )
}
