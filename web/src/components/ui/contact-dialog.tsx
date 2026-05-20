"use client"

import { useState } from "react"
import { Mail, Send, X, Check } from "lucide-react"
import { COMPANY } from "@/lib/constants"

interface ContactDialogProps {
  open: boolean
  onClose: () => void
}

const TEMPLATE = `Hi neostronghold team,

I'm interested in learning more about your smart home solutions.

A few details about my project:
- Location: [Cape Town / International]
- Property type: [House / Apartment / New build / Retrofit]
- I'm interested in: [Pulse / Nexus / Installation / Subscription / Investment]
- Timeline: [Immediate / 1-3 months / 3-6 months / Just researching]

Tell me more about:
- 
- 
- 

Best regards,
[Your name]
[Your phone number]`

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  const [sent, setSent] = useState(false)

  if (!open) return null

  const subject = encodeURIComponent("New enquiry — neostronghold")
  const body = encodeURIComponent(TEMPLATE)
  const mailto = `mailto:support@neoparadise.co.za?subject=${subject}&body=${body}`

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full sm:max-w-lg bg-card border border-border/50 rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/30 bg-card">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold">Get in Touch</h2>
              <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Email CTA */}
          <div className="rounded-xl border border-border/50 bg-cosmic-surface p-5">
            <p className="text-sm text-foreground mb-3">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <a
              href={mailto}
              onClick={() => setSent(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            >
              <Send size={16} />
              Open Email Draft
            </a>
            {sent && (
              <div className="flex items-center gap-2 mt-3 text-sm text-accent">
                <Check size={14} />
                Draft opened in your email client
              </div>
            )}
          </div>

          {/* Quick info */}
          <div className="space-y-3">
            <h3 className="font-heading text-sm font-semibold">What to include in your message</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                Your location and property type
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                Which product you're interested in (Pulse, Nexus, or subscription)
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                Whether you need installation or self-install
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                Your timeline and budget
              </li>
            </ul>
          </div>

          {/* Email & Company info */}
          <div className="rounded-xl border border-border/50 bg-card p-4 text-sm text-muted-foreground space-y-1">
            <p><span className="text-foreground font-medium">Email:</span> support@neoparadise.co.za</p>
            <p><span className="text-foreground font-medium">Location:</span> Cape Town, South Africa</p>
            <p><span className="text-foreground font-medium">Response:</span> Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
