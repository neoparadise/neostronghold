"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { DIASPORA_MARKETS } from "@/lib/constants"
import { Globe, Shield, MapPin, ArrowRight, Users } from "lucide-react"

export function Diaspora() {
  return (
    <section id="diaspora" className="relative py-24 sm:py-32 bg-cosmic-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-4">
              <Globe size={14} />
              SA-born. Global-ready.
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Everywhere you go, bring{" "}
              <span className="text-gradient">SA-grade security</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              900,000+ South Africans live abroad — and they all miss the one
              thing their new countries can&apos;t provide: peace of mind.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {DIASPORA_MARKETS.map((market, i) => (
            <ScrollReveal key={market.country} delay={i * 0.1}>
              <div className="group rounded-[var(--radius)] border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${market.gradient}`}
                    >
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">
                        {market.country}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {market.cities}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    {market.tier}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users size={14} />
                    <span>{market.community}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Shield size={14} className="mt-0.5 text-primary" />
                    <span>{market.gap}</span>
                  </div>
                </div>

                <Button variant="link" size="sm" className="mt-3 px-0 text-xs" asChild>
                  <a href="#cta">
                    Learn more <ArrowRight size={12} className="ml-1" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              SA expats in the UK pay 15-30% premiums for homes with SA-grade
              security. We bring that standard — anywhere.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="#cta">International enquiries</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
