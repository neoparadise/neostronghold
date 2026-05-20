"use client"

import { useState, FormEvent } from "react"
import { X, Send, Check, Loader2 } from "lucide-react"

// Set your form endpoint here.
// For Formspree: create a free account at formspree.io, get your form ID, then:
//   FORM_ENDPOINT = "https://formspree.io/f/your_form_id"
// For Web3Forms: create an account at web3forms.com, get your access key, then:
//   FORM_ENDPOINT = "https://api.web3forms.com/submit"
const FORM_ENDPOINT = ""

interface ContactDialogProps {
  open: boolean
  onClose: () => void
}

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [interest, setInterest] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  if (!open) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in name, email, and message.")
      return
    }

    if (!FORM_ENDPOINT) {
      // Demo mode: show instructions
      setError("Form endpoint not configured. See ContactDialog.tsx to set up Formspree or Web3Forms.")
      return
    }

    setSending(true)
    setError("")

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone, interest, message }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        const data = await res.json()
        setError(data?.error || data?.message || "Something went wrong. Please email us directly at support@neoparadise.co.za")
      }
    } catch {
      setError("Network error. Please email us directly at support@neoparadise.co.za")
    } finally {
      setSending(false)
    }
  }

  const reset = () => {
    setName("")
    setEmail("")
    setPhone("")
    setInterest("")
    setMessage("")
    setSent(false)
    setError("")
    setSending(false)
  }

  const close = () => {
    reset()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div
        className="relative w-full sm:max-w-lg bg-card border border-border/50 rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/30 bg-card">
          <div>
            <h2 className="font-heading text-lg font-semibold">Get in Touch</h2>
            <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
          </div>
          <button
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {sent ? (
          <div className="p-12 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Check size={32} className="text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold">Message sent!</h3>
            <p className="text-sm text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
            <button
              onClick={close}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Name *</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full h-10 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-10 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+27 XX XXX XXXX"
                className="w-full h-10 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">I&apos;m interested in</label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full h-10 px-4 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
              >
                <option value="">Select an option</option>
                <option value="Pulse">Pulse (Core hub)</option>
                <option value="Nexus">Nexus (Pro AI hub)</option>
                <option value="Installation">Installation services</option>
                <option value="Subscription">Subscription</option>
                <option value="Investment">Investment opportunity</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-cosmic-surface border border-border/50 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            {error && (
              <div className="text-xs text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 rounded-full text-white font-medium h-12 px-6 text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300 disabled:opacity-60"
            >
              {sending ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {sending ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Or email us directly at{" "}
              <a href="mailto:support@neoparadise.co.za" className="text-primary hover:underline">
                support@neoparadise.co.za
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
