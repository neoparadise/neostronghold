"use client"

import { X, ArrowRight, Mail } from "lucide-react"

interface ContactDialogProps {
  open: boolean
  onClose: () => void
}

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full sm:max-w-md bg-card border border-border/50 rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/30">
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

        <div className="p-6 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Fill in the form and we&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full text-white font-medium h-12 px-8 text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] animate-gradient-rotate shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300"
          >
            Open Contact Form
            <ArrowRight size={16} />
          </a>
          <p className="text-xs text-muted-foreground">
            Or email{" "}
            <a href="mailto:support@neoparadise.co.za" className="text-primary hover:underline">
              support@neoparadise.co.za
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
