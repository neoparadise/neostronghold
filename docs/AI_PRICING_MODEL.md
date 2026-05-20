# AI Pricing Model — Citadel Evolve

**Document Status:** Final  
**Date:** May 2026  
**Prepared for:** NeoParadise (Pty) Ltd  
**Classification:** Confidential — Investor / Board Review

---

## 1. Executive Summary

Citadel Evolve is positioned at the intersection of two high-growth markets: home automation and consumer AI. The pricing model outlined in this document is designed to capture maximum value from four distinct customer segments (consumers, families, power users, and installers) while building a defensible moat through an agent marketplace network effect.

The recommended pricing architecture follows a freemium-to-premium funnel with five tiers: Free, Plus, Pro, Installer, and Enterprise. The anchor consumer tier (Plus at R189/mo) sits within the SA entertainment budget band (R69–R199) that has proven mass-market acceptance. The Pro tier (R349/mo) targets power users willing to spend above Netflix Premium pricing for unlimited agents and camera AI. The Installer tier (R499–R999/mo) opens a B2B channel with white-label capabilities.

The Agent Marketplace introduces a 20% platform fee — undercutting Apple (15–30%) and Salesforce (15–25%) while remaining sustainable. Free agents drive adoption; paid agents create revenue. Verified publishers attract third-party developers. The marketplace transforms Citadel Evolve from a home automation product into an "invention platform" where users create agents, share them, and generate compounding network effects.

Projected conservative ARR within 36 months of launch: R8.2M from consumer tiers, R3.6M from marketplace fees, and R2.1M from installer/enterprise deals — yielding total ARR of approximately R13.9M at 35% gross margin, with a blended churn rate below 4% monthly for paid tiers.

---

## 2. Global AI Pricing Benchmarks

The following table captures the current (May 2026) subscription pricing for major consumer AI products globally. All prices converted to ZAR at the prevailing market rate (approximately R18/USD).

| Product | Price (USD) | Price (ZAR) | Tier / Capabilities |
|---|---|---|---|
| ChatGPT Plus (OpenAI) | $20/mo | R360/mo | GPT-4o, 80 msg/3h, DALL-E, voice, no ads |
| ChatGPT Pro | $200/mo | R3,600/mo | Unlimited GPT-4o, advanced voice, o1-pro |
| Claude Pro (Anthropic) | $20/mo | R360/mo | Sonnet 4, 5x usage cap, projects, artifacts |
| Claude Team | $25/seat/mo | R450/seat/mo | Sonnet 4, higher caps, admin console, usage analytics |
| Claude Enterprise | Custom | Custom | Expanded context, SSO, security integrations |
| GitHub Copilot | $10/mo | R180/mo | Individual, code completions, chat |
| GitHub Copilot Business | $19/seat/mo | R342/seat/mo | Org management, IP indemnity, policy controls |
| GitHub Copilot Enterprise | $39/seat/mo | R702/seat/mo | Custom models, knowledge bases, PR summaries |
| Google One AI Premium | $20/mo | R360/mo | Gemini Advanced, 2TB storage, Google Apps integration |
| Microsoft Copilot Pro | $20/mo | R360/mo | AI in Office apps, priority access, 300 boosts/day |
| Perplexity Pro | $20/mo | R360/mo | Unlimited searches, file uploads, API access |
| Midjourney Standard | $30/mo | R540/mo | 15h GPU time, relax mode, upscale |
| Claude Max | $100/mo | R1,800/mo | Extended usage, priority bandwidth, extended thinking |
| Nabu Casa (Home Assistant) | $6.50/mo | R117/mo | Remote access, voice, 30d history, cloud backup |

**Key observations:**

- The consumer AI market has standardised around **$20/mo (R360/mo)** for premium individual subscriptions. ChatGPT, Claude, Google, Microsoft, and Perplexity all converge at this price point.
- The home automation benchmark (Nabu Casa at $6.50/mo) is significantly lower but offers limited AI capabilities — primarily remote access and basic voice.
- GitHub Copilot demonstrates that developer-adjacent AI can command $10–$39/seat/mo, establishing precedent for AI tools targeting technical users (our installer segment).
- None of the major consumer AI products offer local-first, privacy-preserving AI combined with physical home automation — this is Citadel Evolve's differentiation.

**Pricing strategy implication:** Citadel Evolve cannot command $20/mo in the South African consumer market without localisation. Our anchor tier at R189/mo represents a 47% discount to ChatGPT Plus while delivering home automation AI — a differentiated value proposition that aligns with SA willingness to pay.

---

## 3. SA Consumer Willingness to Pay

South African household entertainment spending provides the most relevant proxy for AI pricing. Entertainment subscriptions compete for the same discretionary budget as home automation AI.

### SA Entertainment Subscription Benchmarks

| Service | Monthly Price (ZAR) | Household Penetration | Notes |
|---|---|---|---|
| DStv Premium | R929 | ~1.2M | Legacy satellite, full channel lineup |
| DStv Compact | R519 | ~2.5M | Mid-tier satellite |
| DStv Access | R139 | ~4.0M | Entry-level satellite |
| Netflix Premium | R199 | ~3.5M | 4K, 4 screens, spatial audio |
| Netflix Standard | R139 | ~5.0M+ | HD, 2 screens |
| Netflix Basic with Ads | R49 | New | Budget entry |
| Showmax Premium | R99 | ~1.5M | Full catalogue + mobile |
| Showmax Entertainment | R69 | ~1.0M | Limited catalogue |
| Amazon Prime Video | R79 | ~2.0M | Included with Prime delivery |
| Spotify Premium | R90 | ~3.0M+ | Individual |
| Apple Music Voice | R55 | ~1.0M | Limited tier |
| YouTube Premium | R80 | ~500K | Ad-free, background play |
| Disney+ | R119 | ~1.0M | Standard tier |

### Price Band Analysis

**R0–R69:** Mass adoption zone. Showmax Entertainment (R69), Amazon Prime (R79), Showmax Premium (R99). These prices drive high-volume but low-revenue-per-user. Acceptable for freemium and loss-leader strategies.

**R69–R199:** The sweet spot. Netflix Standard (R139), Netflix Premium (R199), DStv Access (R139). This is where South Africans demonstrate willingness to pay for premium digital services. The top of this band (R199) matches Netflix Premium — the most successful subscription product in SA history with minimal churn.

**R200–R519:** Early adopter / niche premium. DStv Compact (R519), fibre internet add-ons. Adoption drops significantly. Requires clear differentiated value.

**R519+:** Enterprise / high-end consumer. DStv Premium (R929). Very limited market. Only viable for installer/B2B pricing or bundled hardware.

### Where AI Fits in the Budget Stack

South African households typically allocate 2–4 subscription services in their entertainment stack. A typical mid-income household might spend:

- Fibre internet: R699–R1,199/mo
- Netflix Premium: R199/mo
- Showmax: R99/mo
- Spotify: R90/mo
- **Total entertainment: ~R388–R488/mo (excluding fibre)**

An AI home automation subscription at R189/mo represents:
- **4.7% of a typical R4,000/mo technology budget** (fibre + subscriptions)
- **Less than a Netflix Premium subscription**
- **20–33% of the total entertainment subscription stack**

**Pricing strategy implication:** The R69–R199 band is proven for mass-market digital subscriptions in SA. Citadel Evolve Plus at R189/mo sits at the top of this band — justified by the convergence of AI, home automation, and remote access that replaces or augments multiple point solutions.

---

## 4. Recommended Pricing Architecture

### Tier Overview

| Feature | Free | Plus | Pro | Installer | Enterprise |
|---|---|---|---|---|---|
| **Price (ZAR/mo)** | R0 | R189 | R349 | R499–R999 | Custom |
| **Price (USD/mo)** | $0 | $10 | $19 | $28–$55 | Custom |
| **AI Agents** | 3 basic | 10 advanced | Unlimited | Unlimited | Unlimited |
| **AI Model** | Local-only | Cloud + local | Cloud + local | Cloud + local | Dedicated inference |
| **Remote Access** | — | Yes | Yes | Yes | Yes |
| **Cloud Backup** | 7 days | 30 days | 90 days | 365 days | Custom SLA |
| **Energy Dashboard** | Basic | Full | Full + projections | Full + multi-home | Full + API |
| **Camera AI** | — | — | Yes (up to 8 cams) | Yes (unlimited) | Yes (unlimited) |
| **Agent Builder** | — | Template-based | Full visual builder | Full + API | SDK + dedicated |
| **Family Accounts** | 1 user | 3 users | 5 users | 10+ users | Unlimited |
| **Voice Assistant** | Basic | Advanced | Advanced + custom | White-label | White-label |
| **Community Library**| Browse only | Browse + install | Browse + install + publish | Publish + analytics | Private registry |
| **White-Label** | — | — | — | Yes | Yes |
| **Multi-Client Dashboard** | — | — | — | Yes | Yes |
| **Priority Support** | — | Email (48h) | Email (24h) + chat | Phone + Slack | Dedicated CSM |
| **Data Retention**| 7 days | 30 days | 90 days | 12 months | Custom |

### Plus Tier — R189/mo — Justification

The anchor consumer tier. Priced at the top of the proven SA subscription band (R69–R199). Compares favourably to:
- Nabu Casa at R117/mo (no AI agents, no energy dashboard)
- ChatGPT Plus at R360/mo (no home automation, no hardware)
- Netflix Premium at R199/mo (entertainment only, no utility)

The 10-agent limit provides sufficient scope for a modern smart home (lights, security, climate, energy, entertainment, presence, voice, scenes, automations, health) while creating upgrade pressure to Pro for power users.

Cloud AI access is the primary value driver: local models cannot match GPT-4o/Claude-class reasoning. The energy dashboard adds hard-dollar savings (estimated 15–25% energy reduction) that partially or fully offset the subscription cost.

### Pro Tier — R349/mo — Justification

The power user and family tier. Priced between Showmax + Netflix combined (R298) and DStv Compact (R519). The key differentiators are:
- **Camera AI:** Person/pet/vehicle detection, zone alerts, facial recognition. Replaces or augments standalone camera subscription services (e.g., Eufy HomeBase at ~$30/yr for basic AI; Ring Protect at R50/camera/mo).
- **Unlimited agents:** No artificial cap for complex home setups.
- **Agent Builder:** Empowers users to create custom agents and publish to the marketplace — the "invention platform" enabler.
- **Family accounts (5 users):** Covers the average SA household size (4.7 people per StatsSA).

At R349/mo, Pro replaces the need for separate camera AI subscriptions (typically R50–R100/mo per camera) and energy monitoring services (R100–R200/mo), representing net savings for a fully-equipped smart home.

### Free Tier — R0 — Justification

The acquisition funnel. Three basic agents (e.g., "Lights," "Thermostat," "Presence") with local-only AI provide enough utility to demonstrate value without incurring cloud inference costs. The community library browse-only access creates pull toward paid tiers. Estimated conversion rate: **8–12% of free users to Plus within 90 days**, based on SaaS freemium benchmarks (HubSpot, Canva, Dropbox).

### Feature-Gating Rationale

- **Cloud AI** is the primary gating mechanism because cloud inference is the largest marginal cost (approximately R15–R25/user/mo for Plus usage patterns). Local-only AI keeps free tier COGS near zero.
- **Camera AI** is gated to Pro because it requires GPU-backed inference (higher cost) and addresses the highest-value use case (home security).
- **Agent Builder** is gated to Pro because publishing agents to the marketplace generates ecosystem value and attracts third-party developers.
- **Data retention scaling** follows a classic SaaS pattern — 7 days is sufficient for evaluation, 30 days for daily use, 90 days for power users, 365 days for professionals.

---

## 5. Hardware + AI Bundle Pricing

Citadel Evolve hardware is a one-time purchase with a subsidised option for annual subscription commitment. This model mirrors Tesla (one-time hardware + optional FSD subscription) and Amazon Echo (hardware at cost or loss, monetised through services).

| Bundle | Hardware Inclusions | Upfront Price (ZAR) | AI Subscription | Monthly Equivalent (36mo) |
|---|---|---|---|---|
| **Core Bundle** | Hub, 1x sensor pack, 1x smart plug | R2,999 | Plus included for 12mo | R83 (hardware) + R0 (AI) = R83/mo |
| **Core Bundle + AI** | Core bundle + voice assistant puck | R3,999 | Plus included for 12mo | R111 (hardware) + R0 (AI) = R111/mo |
| **Pro Bundle** | Hub, 2x sensor packs, 3x plugs, 1x camera | R5,999 | Pro included for 12mo | R167 (hardware) + R0 (AI) = R167/mo |
| **Pro Bundle + Cam AI** | Pro bundle + 2x cameras + NVR | R8,999 | Pro included for 12mo | R250 (hardware) + R0 (AI) = R250/mo |
| **Installer Kit** | 5x hubs, 20x sensor packs, 15x plugs, 8x cameras | R24,999 | Installer included for 12mo | R694 (hardware) + R0 (AI) = R694/mo |

### Monthly Conversion After Bundled Period

After 12 months, the customer transitions to the standard monthly subscription rate for their tier:

- **Core Bundle → Plus (R189/mo):** Customer has used the product for a year. Switching costs include: all automations, agent configurations, energy history, and device ecosystem lock-in. Expected retention: **>90%**.
- **Pro Bundle → Pro (R349/mo):** Higher switching costs due to cameras, agent builder usage, and family accounts. Expected retention: **>95%**.

### Why Include AI for 12 Months

- **Reduces churn during the critical first year.** Home automation products have high abandonment rates (industry estimates: 30–40% within 6 months). Including AI increases daily engagement, which drives retention.
- **Demonstrates the full value proposition.** A user who only experiences local AI cannot appreciate the cloud AI upgrade. Free access for 12 months creates the "downgrade aversion" effect.
- **Defers revenue recognition** in a favourable way — hardware revenue is recognised upfront; subscription revenue begins in month 13, smoothing ARR growth.

### Hardware COGS and Margin

| Bundle | COGS (ZAR) | Inbound Freight | Total Cost | Sell Price | Gross Margin |
|---|---|---|---|---|---|
| Core Bundle | R1,200 | R150 | R1,350 | R2,999 | 55% |
| Core Bundle + AI | R1,550 | R180 | R1,730 | R3,999 | 57% |
| Pro Bundle | R2,400 | R250 | R2,650 | R5,999 | 56% |
| Pro Bundle + Cam AI | R3,800 | R350 | R4,150 | R8,999 | 54% |
| Installer Kit | R10,000 | R1,200 | R11,200 | R24,999 | 55% |

---

## 6. The Agent Marketplace

The Agent Marketplace is the strategic centrepiece of the pricing model. It transforms Citadel Evolve from a vertically integrated product into a platform with third-party supply. This creates network effects that are extremely difficult for competitors to replicate.

### Platform Fee Model

| Fee Type | Rate | Paid By | Example |
|---|---|---|---|
| **Paid Agent Platform Fee** | 20% of transaction | Developer | R50 agent → developer receives R40, platform retains R10 |
| **Free Agent Listing** | R0 | Developer | Free agent → no transaction fee; developer benefits from exposure |
| **Subscription Agent Platform Fee** | 20% of recurring | Developer | R20/mo agent → developer receives R16/mo, platform retains R4/mo |
| **In-App Purchase (one-time)** | 20% | Developer | R100 voice pack → developer receives R80 |
| **In-App Purchase (consumable)** | 20% | Developer | R5/10 credits → developer receives R4 |

### Comparative Platform Fee Analysis

| Platform | Fee Rate | Notes |
|---|---|---|
| Apple App Store | 15–30% | 30% standard; 15% for small businesses (<$1M) |
| Google Play Store | 15–30% | 30% standard; 15% for first $1M revenue |
| Salesforce AppExchange | 15–25% | Revenue share; varies by deal size |
| Shopify App Store | 0% transaction; 20% if using Shopify Payments | Revenue share on app transactions only |
| HACS (Home Assistant) | 0% (free) | No monetisation; community-driven |
| **Citadel Evolve Marketplace** | **20%** | **Competitive with major platforms; below Apple/Google standard** |

### Free Agent Strategy

Free agents are the discovery engine. Every free agent installed increases the user's reliance on the Citadel Evolve platform and creates opportunities for upsell. Categories of free agents:

- **Community Ports:** Existing Home Assistant integrations ported to the Citadel Evolve agent framework. Reduces friction for migrating users.
- **Promotional Agents:** Time-limited free agents sponsored by third-party hardware partners (e.g., "Philips Hue Agent Pro" free for 90 days).
- **Platform Foundational Agents:** Energy monitor, presence detection, voice assistant basis — provided free to establish the platform baseline.

### Verified Publisher Program

A tiered publisher trust system that mirrors the Apple Developer Program and Salesforce AppExchange:

| Level | Requirements | Benefits | Fee |
|---|---|---|---|
| **Standard** | Valid email, identity verification | List free/paid agents, 20% fee | R0 |
| **Verified** | Business registration, SA ID/company, insurance | Verified badge, priority listing, 17.5% fee | R499/yr |
| **Premium** | Revenue >R50k/yr, annual security audit | Premium badge, featured placement, 15% fee, dedicated publisher manager | R2,499/yr |

### Marketplace Revenue Projection (Conservative)

| Year | Active Market Agents | Monthly Transactions | Avg Transaction Value | Annual Platform Fee Revenue |
|---|---|---|---|---|
| Year 1 | 50 | 2,000 | R40 | R192,000 |
| Year 2 | 200 | 12,000 | R45 | R1,296,000 |
| Year 3 | 500 | 40,000 | R50 | R4,800,000 |

Assumptions: 20% platform fee, 45% take rate of installed base transacting at least once per year.

---

## 7. B2B Installer Pricing

The installer channel addresses electricians, security companies, and home automation integrators who deploy Citadel Evolve in client homes. This is a high-value, low-touch cohort with very different price sensitivity than consumers.

### Installer Tier — R499–R999/mo

| Feature | Basic Installer (R499/mo) | Pro Installer (R999/mo) |
|---|---|---|
| White-Label Dashboard | Branded client portal | Branded client portal + mobile app |
| Per-Home Agent Count | 10 homes, unlimited agents each | 25 homes, unlimited agents each |
| Multi-Client Dashboard | Yes | Yes + bulk operations |
| Remote Access | Included | Included |
| Cloud Backup | 365 days per home | 365 days per home + offsite |
| AI Per Home | Plus-level AI (R189 value) per home | Pro-level AI (R349 value) per home |
| Support | Email, 24h response | Slack channel, 4h response |
| API Access | REST API | REST + GraphQL + Webhooks |
| Billing Integration | — | Stripe Connect / PayFast |
| Onboarding | Documentation + 2x 1hr calls | Dedicated onboarding + training |
| Revenue Pass-Through | 100% of home subscription retained by installer | 100% retained; optional platform billing |

### Per-Home Pass-Through Economics

The installers' primary variable cost is the per-home AI cost. Citadel Evolve absorbs the cloud inference cost within the flat monthly fee up to the agent/home limit:

| Growth Stage | Homes Managed | Installer Fee (ZAR/mo) | Per-Home Cost | Retail Equivalent Value | Installer Margin |
|---|---|---|---|---|---|
| Starter (Basic) | 10 homes | R499 | R49.90 | R1,890 (10x R189) | 74% |
| Growth (Pro) | 25 homes | R999 | R39.96 | R8,725 (25x R349) | 89% |
| Scale (>25 homes) | Custom | Negotiated | ~R30–R35 | R8,725+ | 91%+ |

This creates a compelling value proposition for installers: centralised management, brandable interface, and a 74–91% margin on the AI component when resold to end clients.

### Installer White-Label Opportunity

The white-label dashboard allows electricians and security companies to present Citadel Evolve as their own product. This is critical because:
- SA homeowners trust their electrician/security company more than an unknown software brand.
- Installers can bundle Citadel Evolve with new construction (R2–5k/home hardware margin).
- Installer-sold customers have lower churn (estimated <2%/mo) than direct-to-consumer (estimated 5%/mo).

---

## 8. Enterprise Pricing

Enterprise pricing is for future commercial clients: office buildings, hotels, retirement villages, and property developers. This segment is not the immediate focus but the pricing architecture must accommodate it.

### Enterprise Tier — Custom Pricing

| Component | Pricing Model | Typical Range |
|---|---|---|
| **Platform License** | Per-building, per-month | R1,000–R5,000/building/mo |
| **Device Management** | Per-100-devices, per-month | R500/100 devices/mo |
| **AI Inference** | Per-1000 agent invocations | R50/1k invocations |
| **Dedicated Inference** | GPU instance (cloud or on-prem) | R3,000–R15,000/mo |
| **On-Prem Deploy** | On-premise hub + inference node | R50,000–R150,000 one-time |
| **Support SLA** | 24/7, 1h response, dedicated CSM | R5,000–R20,000/mo |
| **Custom Integration** | Per integration, per-month | R1,000–R5,000/integration/mo |
| **Data Residency** | SA-based cloud or on-prem | R2,000–R10,000/mo |
| **Training & Onboarding** | Per-session | R5,000–R25,000/session |

### Enterprise Deal Structure

- **Annual contract commitment** required (12–36 months).
- **Volume discounts** at 100+ buildings or 1,000+ devices.
- **Proof of concept** (4–8 weeks) at reduced rate or free with paid deployment commitment.
- **Self-hosted option** for security-sensitive clients (e.g., government, defence installations) at 2x–3x cloud pricing.

### Target Enterprise Verticals (Future)

1. **Retirement villages:** 50–500 units per village. Agent-driven wellness monitoring, fall detection, energy management.
2. **Hotel groups:** per-room automation, energy optimisation, guest experience agents.
3. **Property developers:** New-build developments with Citadel Evolve pre-installed. Hardware cost amortised into bond; subscription managed by body corporate.
4. **Office parks:** meeting room booking, occupancy optimisation, HVAC agent control.

---

## 9. The "Invention Platform" Flywheel

The agent marketplace creates a self-reinforcing cycle of value creation that makes Citadel Evolve increasingly difficult to displace. This is the model that made Salesforce (AppExchange), Shopify (app ecosystem), and Roblox (UGC platform) dominant.

### The Flywheel

```
                         ┌──────────────────────────────────────┐
                         │  MORE USERS → MORE AGENT DEMAND      │
                         │         ↓                    ↑        │
                         │  MORE AGENTS ← MORE DEVELOPERS       │
                         │    ↓                          ↑       │
                         │  MORE VALUE ← MORE AGENT VARIETY     │
                         │    ↓                                   │
                         │  MORE SATISFACTION → LOWER CHURN     │
                         │    ↓                                   │
                         │  MORE FREE AGENTS → MORE ADOPTION    │
                         │    ↓                                   │
                         │  MORE PAID AGENTS → PLATFORM REVENUE  │
                         │    ↓                                   │
                         │  MORE INVESTMENT IN PLATFORM          │
                         │    ↓                                   │
                         └────── BETTER TOOLS FOR DEVELOPERS ───┘
```

### Defensibility Mechanisms

**1. Agent Library Moats**
A user who has configured 8 custom agents (lights, blinds, security, energy, presence, voice, health, entertainment) faces a significant switching cost. Recreating this in another ecosystem takes hours to days of configuration. The more agents on the platform, the deeper the moat.

**2. Data Network Effects**
Every agent invocation generates data that improves the platform's AI models for presence detection, energy optimisation, and anomaly detection. More users = better models = better agent performance = more users. This is the critical loop that competitors cannot replicate without a comparable installed base.

**3. Developer Ecosystem Switching Costs**
A developer who has published 5 agents, built a customer base, and accumulated an average of 3.8 stars across 200 ratings has invested dozens of hours in the platform. Publishing on a competing platform means rebuilding reputation from zero. Verified and Premium publisher status further increase these costs.

**4. Hardware + AI Lock-In**
Unlike pure-software AI products, Citadel Evolve requires physical hardware (hubs, sensors, cameras). Replacing these devices costs R3,000–R10,000+ — a powerful retention mechanism even if a competitor offered superior AI.

**5. Installer Channel Lock-In**
Installers who have deployed Citadel Evolve across 20+ homes have trained their technicians, built custom dashboards, and integrated with their billing systems. Switching platforms means retraining staff, redesigning dashboards, and managing two platforms during transition.

### Marketplace Critical Mass Targets

| Metric | Launch | 6 Months | 12 Months | 24 Months | 36 Months |
|---|---|---|---|---|---|
| Published agents | 25 | 75 | 200 | 500 | 1,000+ |
| Active developers | 10 | 30 | 80 | 200 | 400+ |
| Verified publishers | 0 | 3 | 12 | 30 | 60+ |
| Free agent installs | 500 | 5,000 | 25,000 | 100,000 | 400,000+ |
| Paid agent transactions/mo | 0 | 500 | 2,000 | 15,000 | 50,000+ |
| Platform fee revenue/mo | R0 | R4,500 | R16,000 | R108,000 | R400,000+ |

---

## 10. Financial Projections

### ARR Per Tier (Projected — Conservative Scenario)

**Assumptions:**
- Hardware launch: Q3 2026
- Total addressable market (SA): 500,000 smart-home-interested households
- Free tier conversion to paid: 10% within 90 days
- Market penetration at 36 months: 2.5% of TAM (12,500 households)
- Churn rates: Free 20%/mo (inactive users cleaned), Plus 5%/mo, Pro 3%/mo, Installer 1.5%/mo

| Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| **Free users** | 5,000 | 15,000 | 30,000 |
| **Plus subscribers** | 400 | 1,200 | 2,500 |
| **Pro subscribers** | 100 | 400 | 800 |
| **Installer accounts** | 15 | 40 | 80 |
| **Installer-managed homes** | 75 | 400 | 1,200 |
| **Enterprise clients** | 0 | 2 | 5 |

### ARR Breakdown

| Revenue Source | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Plus subscriptions | 400 x R189 x 12 = R907,200 | 1,200 x R189 x 12 = R2,721,600 | 2,500 x R189 x 12 = R5,670,000 |
| Pro subscriptions | 100 x R349 x 12 = R418,800 | 400 x R349 x 12 = R1,675,200 | 800 x R349 x 12 = R3,350,400 |
| Subtotal Consumer ARR | R1,326,000 | R4,396,800 | R9,020,400 |
| Installer (flat fee) | 10 x R499 + 5 x R999 x 12 = R119,880 | 20 x R499 + 20 x R999 x 12 = R359,520 | 30 x R499 + 50 x R999 x 12 = R779,040 |
| Marketplace fees | R0 (ramp-up) | R1,296,000 | R4,800,000 |
| Hardware margin (one-time) | 500 bundles x ~R1,500 avg margin = R750,000 | 2,000 bundles x R1,500 = R3,000,000 | 4,000 bundles x R1,500 = R6,000,000 |
| **Total Revenue** | **R2,195,880** | **R9,052,320** | **R20,599,440** |
| **Recurring ARR (excl. hardware)** | **R1,445,880** | **R6,052,320** | **R14,599,440** |

### Churn Analysis

| Tier | Monthly Churn | Annual Churn | Avg Lifetime (months) | LTV (at tier price) |
|---|---|---|---|---|
| Free → Plus | N/A (conversion) | 90% transition or churn | 3 | R0 (acquisition cost) |
| Plus (consumer, direct) | 5.0% | 46% | 20 | R189 x 20 = R3,780 |
| Plus (installer-sold) | 2.0% | 22% | 50 | R189 x 50 = R9,450 |
| Plus (post-bundle) | 1.5% | 17% | 67 | R189 x 67 = R12,663 |
| Pro (consumer, direct) | 3.0% | 31% | 33 | R349 x 33 = R11,517 |
| Pro (installer-sold) | 1.5% | 17% | 67 | R349 x 67 = R23,383 |
| Installer | 1.5% | 17% | 67 | R749 avg x 67 = R50,183 |
| Enterprise | <1.0% | <11% | 100+ | R5,000+ x 100+ = R500,000+ |

### LTV / CAC Ratios

| Acquisition Channel | CAC (ZAR) | Avg LTV (ZAR) | LTV/CAC |
|---|---|---|---|
| Direct — search/organic | R150 | R3,780 (Plus) | 25.2x |
| Direct — paid (Google, Meta) | R450 | R3,780 (Plus) | 8.4x |
| Direct — paid (higher intent) | R350 | R11,517 (Pro) | 32.9x |
| Installer channel | R1,000 | R23,383 (Pro via installer) | 23.4x |
| Hardware bundle (retail) | R300 | R12,663 (Plus post-bundle) | 42.2x |

**Note:** All CAC estimates are conservative. LTV/CAC ratios above 3x are considered healthy in SaaS. Citadel Evolve benefits from hardware bundle attachment, which dramatically reduces effective CAC since hardware is purchased separately.

### Cost of Revenue (Cloud AI Inference)

| Tier | Avg Inference Cost/User/Mo | Price Margin | Gross Margin |
|---|---|---|---|
| Free | R2 (local only, minimal) | R0 | N/A (acquisition cost) |
| Plus | R15–R25 | R189 | 87–92% |
| Pro | R25–R50 | R349 | 86–93% |
| Basic Installer | R100 (10 homes x R10) | R499 | 80% |
| Pro Installer | R175 (25 homes x R7) | R999 | 82% |

Blended gross margin on subscription revenue: **87% consumer, 81% installer.** Hardware margin (55%) is additive and treated as a separate profit centre.

### Scenario Analysis — Year 3 ARR

| Scenario | Consumer ARR | Marketplace ARR | Installer ARR | Total Recurring ARR |
|---|---|---|---|---|
| **Conservative** (2.5% TAM, 10% conversion) | R9.0M | R4.8M | R0.8M | R14.6M |
| **Base Case** (4% TAM, 15% conversion) | R17.5M | R7.2M | R1.5M | R26.2M |
| **Optimistic** (6% TAM, 20% conversion, SA + Africa) | R32.4M | R12.0M | R2.8M | R47.2M |

### Key Financial Metrics Summary

| Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Total Revenue | R2.2M | R9.1M | R20.6M |
| Recurring ARR | R1.4M | R6.1M | R14.6M |
| Gross Margin (subscription) | 87% | 88% | 89% |
| Gross Margin (blended) | 65% | 72% | 76% |
| Monthly Churn (blended paid) | 3.8% | 3.2% | 2.8% |
| Avg LTV (consumer) | R3,780 | R5,200 | R6,800 |
| LTV/CAC (blended) | 18x | 22x | 28x |
| Installed Base (paid) | 500 | 1,600 | 3,300 |
| Marketplace Agents | 75 | 200 | 500 |
| Active Developers | 30 | 80 | 200 |

---

## Appendix A: Pricing ZAR/USD Conversion Table

For investor reference — all prices in this document are in South African Rand (ZAR) at the prevailing rate of approximately R18/USD. For international comparative analysis, use the following reference table:

| ZAR Price | USD Equivalent (R18/USD) | USD Equivalent (R16/USD) | USD Equivalent (R20/USD) |
|---|---|---|---|
| R189/mo | $10.50/mo | $11.81/mo | $9.45/mo |
| R349/mo | $19.39/mo | $21.81/mo | $17.45/mo |
| R499/mo | $27.72/mo | $31.19/mo | $24.95/mo |
| R999/mo | $55.50/mo | $62.44/mo | $49.95/mo |

## Appendix B: Competitor Reference Pricing (May 2026 Snapshot)

| Product | Price (Local) | Price (USD) | Category |
|---|---|---|---|
| Nabu Casa (Home Assistant) | R117/mo | $6.50/mo | Home automation cloud |
| SimplifyAI (Hubitat) | R162/mo | $9/mo | Home automation AI |
| Ring Protect Pro | R180/mo | $10/mo | Camera AI + alarm |
| Google Nest Aware | R270/mo | $15/mo | Camera AI + smart home |
| ChatGPT Plus | R360/mo | $20/mo | General AI |
| Claude Pro | R360/mo | $20/mo | General AI |
| **Citadel Evolve Plus** | **R189/mo** | **$10.50/mo** | **Home automation AI** |
| **Citadel Evolve Pro** | **R349/mo** | **$19.39/mo** | **Home automation AI + cameras** |
