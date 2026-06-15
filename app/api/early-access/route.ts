import { NextResponse } from "next/server"
import { hasDatabase, storeSignup } from "./store"

export const runtime = "nodejs"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: { email?: unknown; company?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 })
  }

  // Honeypot: real users never see the "company" field; bots fill everything.
  // Pretend success and drop the submission silently.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 },
    )
  }

  try {
    if (hasDatabase()) {
      await storeSignup(email)
    } else {
      // Local/preview without a DB connected — keep the form working.
      console.log(`[early-access] signup (no database configured): ${email}`)
    }
  } catch (err) {
    console.error("[early-access] store failed:", err)
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 502 },
    )
  }

  // Optional best-effort ping so you hear about signups in real time.
  // Never fails the request — the signup is already safely stored.
  await notify(email).catch((err) => console.error("[early-access] notify failed:", err))

  return NextResponse.json({ ok: true })
}

// Set ONE of these to get notified (storage above is independent of this):
//   • EARLY_ACCESS_WEBHOOK_URL — POSTs JSON (Slack/Zapier/Make/your own endpoint)
//   • RESEND_API_KEY + EARLY_ACCESS_NOTIFY_EMAIL — emails you via Resend
async function notify(email: string) {
  const webhook = process.env.EARLY_ACCESS_WEBHOOK_URL
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text: `New early-access signup: ${email}`, email }),
    })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    return
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.EARLY_ACCESS_NOTIFY_EMAIL
  const from = process.env.EARLY_ACCESS_FROM_EMAIL ?? "Avocado Studio <onboarding@resend.dev>"
  if (resendKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "New early-access signup",
        text: `New early-access signup: ${email}`,
      }),
    })
    if (!res.ok) throw new Error(`Resend responded ${res.status}`)
  }
}
