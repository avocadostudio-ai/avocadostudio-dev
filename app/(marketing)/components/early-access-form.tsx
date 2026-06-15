"use client"

import { useState } from "react"

type Status = "idle" | "submitting" | "success" | "error"

export function EarlyAccessForm() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("") // honeypot — stays empty for humans
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "submitting") return
    setStatus("submitting")
    setError(null)
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, company }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-base font-medium text-avocado-900">
        🥑 You&apos;re on the list — we&apos;ll be in touch about onboarding your site.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="early-access-email" className="sr-only">
          Email address
        </label>
        <input
          id="early-access-email"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "submitting"}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" && error ? "early-access-error" : undefined}
          className="flex-1 rounded-lg border border-avocado-200 bg-white px-4 py-3 text-avocado-900 placeholder:text-avocado-900/40 shadow-sm outline-none transition focus:border-avocado-500 focus:ring-2 focus:ring-avocado-500/30 disabled:opacity-60"
        />
        {/* Honeypot: hidden from users and assistive tech, catches bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
          aria-hidden
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-avocado-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-avocado-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Joining…" : "Join early access"}
          {status !== "submitting" && <span aria-hidden>→</span>}
        </button>
      </div>
      <div aria-live="polite">
        {status === "error" && error ? (
          <p id="early-access-error" className="mt-2 text-center text-sm text-red-600">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  )
}
