"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Check, Cpu } from "lucide-react"
import { HARDWARE_TIERS } from "@/lib/constants"

export function HardwareShowcase() {
  return (
    <section id="hardware" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Two paths to an{" "}
              <span className="text-gradient">intelligent home</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Core for cloud-managed simplicity. Pro for local AI sovereignty.
              Both run the same neostronghold OS.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {HARDWARE_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15}>
              <div
                className={`relative group ${
                  tier.isPro ? "lg:-mt-4 lg:mb-[-1rem]" : ""
                }`}
              >
                {tier.isPro && (
                  <div className="absolute -inset-[1px] rounded-[var(--radius)] bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-hover:opacity-70 blur-md transition-all duration-700 animate-gradient-rotate bg-[length:200%_200%]" />
                )}
                <div
                  className={`relative rounded-[var(--radius)] p-8 ${
                    tier.isPro
                      ? "glass-strong"
                      : "border border-border/50 bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-2xl font-bold">
                          {tier.name}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            tier.isPro
                              ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30"
                              : "bg-muted text-muted-foreground border border-border/50"
                          }`}
                        >
                          {tier.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tier.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-3xl font-bold">
                        {tier.price}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        once-off
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {tier.description}
                  </p>

                  <div
                    className={`mb-8 h-48 rounded-xl ${
                      tier.isPro
                        ? "bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/20"
                        : "bg-muted/50 border border-border/50"
                    } flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div
                        className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl ${
                          tier.isPro
                            ? "bg-gradient-to-br from-primary/20 to-secondary/20"
                            : "bg-muted"
                        }`}
                      >
                        <Cpu
                          size={32}
                          className={
                            tier.isPro ? "text-primary" : "text-muted-foreground"
                          }
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          tier.isPro ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {tier.name} Render
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            tier.isPro ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={
                            tier.isPro ? "text-foreground" : "text-muted-foreground"
                          }
                        >
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.isPro ? "glow" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#pricing">
                      {tier.isPro ? "Get Pro" : "Get Core"}
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
