import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { AIAgent } from "@/components/sections/ai-agent"
import { Features } from "@/components/sections/features"
import { Competition } from "@/components/sections/competition"
import { Market } from "@/components/sections/market"
import { Pricing } from "@/components/sections/pricing"
import { OpenSource } from "@/components/sections/open-source"
import { Roadmap } from "@/components/sections/roadmap"
import { Team } from "@/components/sections/team"
import { CTA } from "@/components/sections/cta"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"
import { Starfield } from "@/components/effects/starfield"
import { CosmicDivider } from "@/components/effects/cosmic-divider"

export default function Home() {
  return (
    <>
      <Nav />
      <Starfield />

      <main>
        <Hero />
        <CosmicDivider />
        <Problem />
        <CosmicDivider />
        <HowItWorks />
        <CosmicDivider />
        <AIAgent />
        <CosmicDivider />
        <Features />
        <CosmicDivider />
        <Competition />
        <CosmicDivider />
        <Market />
        <CosmicDivider />
        <Pricing />
        <CosmicDivider />
        <OpenSource />
        <CosmicDivider />
        <Roadmap />
        <CosmicDivider />
        <Team />
        <CosmicDivider />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
