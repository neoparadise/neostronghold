"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { ROADMAP_ITEMS } from "@/lib/constants"

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Our <span className="text-gradient">roadmap</span> to
              intelligent homes
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From humble beginnings in Cape Town to a global smart home
              platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {ROADMAP_ITEMS.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.1}>
                <div className="relative pl-0 md:pl-12">
                  <div className="absolute left-0 top-1.5 hidden md:flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/50 bg-card">
                    <div
                      className={`h-3 w-3 rounded-full ${phase.active ? "bg-primary animate-glow-pulse" : "bg-muted"}`}
                    />
                  </div>

                  <div className="rounded-[var(--radius)] border border-border/50 bg-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant={phase.active ? "default" : "outline"}>
                        {phase.phase}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {phase.timeframe}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
