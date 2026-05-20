# neostronghold Website — Mark 2 Specification

**Document Version:** 2.0  
**Author:** Product & Engineering  
**Status:** Draft for Review  
**Date:** 2026-05-20

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Section-by-Section Spec](#2-section-by-section-spec)
3. [New Component Tree](#3-new-component-tree)
4. [Design System Updates](#4-design-system-updates)
5. [Content Requirements](#5-content-requirements)
6. [Technical Architecture](#6-technical-architecture)
7. [Implementation Order](#7-implementation-order)
8. [Success Metrics](#8-success-metrics)

---

## 1. Executive Summary

### 1.1 Purpose

The neostronghold website transitions from a **validation-stage landing page (Mark 1)** to a **growth-stage conversion platform (Mark 2)** . Mark 1 proved product-market fit via a single-thread narrative (Hero -> Problem -> Solution -> Pricing -> CTA). Mark 2 must serve multiple distinct audiences (homeowners, architects, installers, investors) with content depth commensurate with a physical product company seeking Series A.

### 1.2 What Changes

| Dimension | Mark 1 | Mark 2 |
|---|---|---|
| Sections | 12 fixed sections | 20 sections with role-based branching |
| Hardware representation | Single generic "Hub" | Dual showcase: Core vs Pro with full specs |
| AI Agent | Text description | Interactive Agent Manager Hub (tmux metaphor) |
| Community/Agents | Absent | Agent Marketplace, Alpha Community |
| Investor content | Absent | Pitch deck, YC application, funding metrics |
| SA-specific messaging | Implicit | Dedicated "SA Diaspora" section |
| Trade/Architect content | Absent | CPD course, trade partner program, spec sheets |
| Design language | Flat, clean | Translucent/glass layering, "see the tech" aesthetic |
| Interactivity | Static screenshots | Embedded video, animated state diagrams, interactive hardware comparison |
| CTAs | Single "Get Started" | Role-based: Homeowner / Architect / Installer / Investor |

### 1.3 Why These Changes

1. **Audience expansion**: Mark 1 assumed a single buyer persona. Real-world feedback reveals four distinct decision-makers with different content needs and conversion paths. A homeowner cares about security and ease-of-use; an architect cares about spec compliance and CPD points; an investor cares about traction and unit economics.
2. **Product complexity**: The hardware line has bifurcated into Core (cloud-router form factor) and Pro (local AI hub). Both need individual showcase while preserving the unified platform narrative.
3. **Community as moat**: Competitors cannot reproduce a community-built agent marketplace. Mark 2 makes the community visible and browsable, functioning as both feature demonstration and retention mechanism.
4. **Fundraising readiness**: The Mark 2 site must function as an investor qualification tool, reducing the need for a separate pitch deck landing page and enabling inbound investor interest.
5. **SA market specificity**: South African diaspora represents a high-intent, high-trust customer segment. Explicit SA positioning converts diaspora visitors who would otherwise dismiss the product as "not available internationally."

---

## 2. Section-by-Section Spec

### 2.1 Hero (Updated)

**Current (Mark 1):** Full-screen hero with product photo, headline "Intelligent homes, open to everyone," single CTA.

**Changes for Mark 2:**

| Element | Specification |
|---|---|
| Layout | Full-viewport height. Background: layered glass panel with animated circuit-board topography visible through translucent layers. |
| Headline | "Your home, intelligently." (shorter, more premium than Mark 1) |
| Subheadline | "Open-source smart home. Installed in Cape Town. Managed from anywhere." |
| Hardware element | Animated 3D model of Core device (left) and Pro device (right) floating behind glass panel. Devices rotate slowly on hover. Inner PCB traces visible through translucent enclosures. |
| Primary CTA | "I'm a homeowner" -> scrolls to Role Router |
| Secondary CTA | "See the difference" -> scrolls to Dual Hardware Showcase |
| Tertiary (ghost) | "For investors ->" -> scrolls to Investors section |
| Glass panel effect | `backdrop-filter: blur(20px)` with `rgba(255,255,255,0.05)` fill, 1px `rgba(255,255,255,0.1)` border. Animated gradient sweep across panel on page load. |
| Background | Dark (`#0a0a0f`) with subtle animated grid pattern (`opacity: 0.03`). Ambient particle system (mouse-reactive) in device layer. |
| Loading state | Skeleton glass panel with pulse animation while 3D models load. Fallback: static PNG renders with CSS glow. |

### 2.2 Problem (Refined)

**Current (Mark 1):** Three-column problem statement: "Too expensive, Too complicated, Too insecure."

**Changes for Mark 2:**

Shift from problem-agnostic to SA-specific framing. Three updated columns:

1. **"Locked out"** — Proprietary systems (Control4, Loxone) cost R80k+ and lock you into a single dealer. No freedom to choose your own devices.
2. **"Left in the dark"** — Cloud-dependent systems stop working during load shedding. Your smart home is dumb when you need it most.
3. **"DIY dead ends"** — Off-the-shelf gadgets don't talk to each other. No professional installation, no support, no COC.

Each column gets: icon (SVG animated on scroll), headline, 2-3 sentence explanation, and a subtle "pain point" stat (e.g., "82% of SA homes plan solar — but can't integrate it").

Design treatment: Dark cards with glass edges. Icons illuminate on scroll into viewport. Bottom connector line animates from column to "The neostronghold difference" bridge section.

### 2.3 How It Works (Enhanced)

**Current (Mark 1):** Three-step: "Choose your kit, Book installation, Enjoy your smart home."

**Changes for Mark 2:**

Expand to four steps with interactive state diagram:

1. **Choose** — Interactive product selector. Flip between Core and Pro. See what's in the box. Add to cart from here.
2. **Install** — Animated timeline showing what happens on installation day. Expandable detail: site survey, electrical work, configuration, handover training.
3. **Connect** — Animated network topology showing how devices talk to the hub, how the hub stays local, how the AI agent reaches you via WhatsApp/Telegram.
4. **Live** — Live dashboard preview. Animated cards showing real-ish data: temperature graph, security status, solar production, load shedding countdown.

Design treatment: Horizontal timeline with glass node markers. Each step expands vertically on click/scroll. Topology diagram uses animated path lines (stroke-dashoffset animation on scroll).

### 2.4 AI Agent (Replaced by Agent Manager Hub)

**Current (Mark 1):** Text-heavy description of AI capabilities with WhatsApp mockup screenshot.

**Changes for Mark 2:**

This section is replaced by the **Agent Manager Hub** — the visual centrepiece of Mark 2.

#### Agent Manager Hub Component

| Aspect | Specification |
|---|---|
| Metaphor | Terminal/tmux split-pane workspace. Left pane: running agent processes (agentd, whatsapp-bridge, telegram-bridge, intent-engine, solar-optimiser). Right pane: live interaction feed. |
| Visual | Full-browser-window mockup with OS-level window chrome. Inside: dark terminal background with green/cyan monospace text. Panels are resizable (draggable in prototype). |
| Left pane | Lists running agents with status indicators (green dot = active, yellow = idle). Each agent has PID, uptime, memory usage. Hover shows brief description. Click "focuses" that agent in the right pane. |
| Right pane | Live-scrolling log of agent activity. Natural-language queries and responses cycle through. Example sequence: "Good morning" -> lights turn on, blinds open, "Load shedding at 10am, pre-charging battery." Messages stream in with typing indicator. |
| Bottom bar | Tmux-style status line: `[neostronghold@hub ~]$ _` with blinking cursor. Typing animation types out sample commands: `status`, `devices`, `schedule lights 18:00-22:00`. |
| Interaction | Pre-recorded demo loop (60s) that cycles through 4-5 scenarios. User can also click "Try it" to open a simplified chat overlay with predefined queries. |
| Scroll animation | Left pane and right pane scroll independently on scroll-into-view, simulating an active system. |

**Why this works:** The tmux/terminal metaphor signals "powerful, developer-grade, transparent" to tech-savvy homeowners while the live demo shows real functionality. It makes the AI tangible rather than abstract.

### 2.5 Dual Hardware Showcase (New)

**Purpose:** Differentiate Core (cloud-router form factor, affordable, entry-level) from Pro (local AI hub, powerful, premium). Prevent confusion between the two products.

| Aspect | Core | Pro |
|---|---|---|
| Positioning | "Smart home, started." Entry-level, cloud-router aesthetic. | "Smart home, mastered." Local AI hub, no cloud dependency. |
| Form factor | Slim, vertical router-style (120x120x30mm). White/grey enclosure. | Desktop hub (150x150x50mm). Dark translucent enclosure. Visible PCB through glass top. |
| Hardware | Raspberry Pi 5 2GB, Zigbee dongle, 32GB SD | Raspberry Pi 5 8GB, NVMe SSD 256GB, Zigbee+Thread dongle, UPS hat |
| AI capability | Cloud-assisted AI agent (requires internet for NLU) | Fully local AI agent (quantised LLM, on-device inference) |
| Solar integration | Monitoring only | Monitoring + active optimisation |
| Price | R5,999 (self-install) | R12,499 (self-install) |
| Target | First-time smart home buyer | Enthusiast, solar owner, privacy-conscious |

**Design treatment:**

- Side-by-side comparison with interactive 3D models (or high-quality rendered stills with 360-degree rotation on drag).
- Core shown with solid enclosure, clean lines. Pro shown with glass/translucent top, internal components visible in low glow.
- Spec comparison table: expandable, row-highlighted on hover. Critical differentiators ("Local AI", "On-device inference") get a "Pro exclusive" badge.
- Flippable: user can click to see rear I/O ports labelled.
- Scale indicator: actual-size overlay or ruler reference so visitors understand physical size.

**CTA:** "Compare models" opens a sticky comparison drawer that persists as the user scrolls (sticky bottom bar with add-to-cart for each model).

### 2.6 Features (Updated)

**Current (Mark 1):** Grid of 6 feature cards: Local, Secure, Open, Solar-Ready, AI-Powered, Expandable.

**Changes for Mark 2:**

Restructure into three tiers:

1. **Core Features** (all plans): Local-first, Open-source foundation, Professional installation, WhatsApp/Telegram control, Zigbee mesh network, Load shedding resilient.
2. **Pro Features** (Pro only): On-device AI (no cloud), NVMe storage (no SD card failure), Thread/Matter support, Active solar optimisation, UPS-backed hub, Local voice processing.
3. **Subscription Features** ("We Manage", R299/month): Remote monitoring, Firmware & security updates, Off-site encrypted backup, Phone/WhatsApp priority support, Monthly optimisation report.

Design treatment: Tabbed interface. Default shows Core. Click "Pro" tab to see additional features highlighted with glow effect. Subscription tab shows recurring value timeline.

Each feature card gets: icon (animated on scroll), title, 1-sentence description, and a "learn more" expand arrow that reveals 2-3 bullet points.

### 2.7 Competition (Updated)

**Current (Mark 1):** 2x2 matrix (Open/Premium, Closed/Premium, Open/DIY, Closed/DIY) with neostronghold in unique quadrant.

**Changes for Mark 2:**

Keep the 2x2 but add an interactive comparison table below it. Table columns:

| Feature | neostronghold | Control4 | Loxone | Fidelity ADT | Sonoff/Tuya | Home Assistant |
|---|---|---|---|---|---|---|
| Price range | R6k-R12k | R80k+ | R150k+ | R400/mo | R1.5k-R5k | Free (DIY) |
| Professional install | Yes | Dealer | Certified | Yes | No | No |
| Open-source | Yes | No | No | No | No | Yes |
| Local AI | Core (cloud), Pro (on-device) | No | No | No | No | DIY |
| Solar integration | Native Sunsynk/Deye | Third-party | Third-party | No | No | DIY/HACS |
| Load shedding resilient | Yes | UPS-dependent | UPS-dependent | No | No | UPS-dependent |
| COC included | Yes | No | No | No | No | No |
| WhatsApp control | Native | No | No | No | No | DIY |

**Design treatment:** Table is horizontally scrollable on mobile. neostronghold column highlighted with subtle glow. Row headers sticky on scroll. Missing features show red X, present features show green checkmark with subtle animation.

CTA below table: "See why neostronghold is different" -> link to Dual Hardware Showcase.

### 2.8 Market (Updated)

**Current (Mark 1):** Static stats: "R22-38 billion SA smart home market, 17-31% CAGR."

**Changes for Mark 2:**

Interactive data visualisation section. Three rotating stat blocks:

1. **Market size**: Animated counter from R0 -> R22 billion on scroll.
2. **Growth rate**: Animated line chart showing 2024-2029 trajectory with neostronghold's projected share highlighted.
3. **The gap**: Visual representation of the R20k-R80k unserved segment. Horizontal bar chart showing competitor pricing. Empty space between R20k and R80k pulses/glows to show the opportunity.

Additional data points (below charts):
- "Fewer than 5% of SA homes have solar. 82% plan to install."
- "Western Cape = 38% of SA's new residential building value."
- "7,300 MW rooftop solar installed (up from 1,000 MW in 2022)."

Design treatment: Dark glass cards for each data point. Charts use brand accent colours. Animated on scroll with staggered reveal.

### 2.9 Agent Marketplace (New)

**Purpose:** Demonstrate the extensibility of the platform. Showcase community-built agents. Create a browse/install flow that functions as both feature demo and lead magnet.

| Element | Specification |
|---|---|
| Header | "Your hub, supercharged." Sub: "Community-built agents that add new capabilities to your neostronghold. One-click install." |
| Layout | Horizontal scrollable card grid (Carousel). 8-12 agent cards shown. |
| Card design | Glass card with agent icon (custom icon per agent), name, short description, install count, rating stars, "Install" button. |
| Featured agents | "Load Shedding Guardian" (automates battery/solar during outages), "Gate Keeper" (AI gate control with number-plate recognition), "Temperature Alchemist" (geyser scheduling + solar excess diversion), "Pool Pilot" (pool pump automation based on solar production), "Security Sentinel" (armed response integration + camera AI), "Guest Mode" (temporary access for Airbnb/staff). |
| Detail overlay | Clicking a card opens a full-screen overlay: screenshots, full description, version history, dependencies, privacy note, review count. |
| Install flow | "Install" button triggers a modal: "Enter your hub ID to install remotely" (lead capture: email + hub ID). On submit: "Your agent will be installed within 24 hours. We'll notify you via WhatsApp." This is a marketing flow in Mark 2; actual remote install is Phase 3. |
| Empty state | If no agents loaded yet, show placeholder cards with "Coming soon" badge and email signup for early access. |

**Why this works:** The marketplace makes the open-source advantage tangible. Visitors see that neostronghold isn't just a fixed product — it's a platform that grows.

### 2.10 Tesla + Powerwall Integration (New)

**Purpose:** Demonstrate premium integration capability. Signal to solar owners that neostronghold is the only platform offering Tesla Fleet API integration in SA.

| Element | Specification |
|---|---|
| Header | "Tesla + Powerwall. Managed." |
| Subheader | "Direct Fleet API integration. Monitor your Powerwall, optimise solar consumption, and let your AI agent manage energy across load shedding, TOU tariffs, and PV production." |
| Demo | Animated dashboard showing: Powerwall charge level, solar production graph, home consumption, grid import/export. The dashboard updates in real-time in the demo loop, showing a load shedding event trigger automated battery discharge. |
| Fleet API badge | Official Tesla Fleet API integration badge (once obtained). If not yet approved, use "Integration in progress" badge with email signup for notification. |
| Setup flow | Animated 3-step: "1. Authorise your Tesla account -> 2. Select your Powerwall -> 3. Automation rules activate." Each step has a glass tooltip explaining what happens. |
| Comparison | Table: "neostronghold vs Tesla App vs third-party monitoring." neostronghold wins on: multi-device orchestration (solar + geyser + pool + security), automation rules, WhatsApp alerts, load shedding pre-conditioning. |

**Design treatment:** Dark theme with Tesla-inspired red accent accents sparingly (only for Tesla-specific elements). Powerwall visual: simplified 3D render or high-quality illustration.

CTA: "Integrate your Tesla" -> scrolls to Pricing section. "I have a Powerwall" -> role-based routing to installer CTA.

### 2.11 Open Source (Updated)

**Current (Mark 1):** Simple statement: "Built on Home Assistant. Apache 2.0 licensed. Your data stays yours."

**Changes for Mark 2:**

Expanded to a full trust-building section:

1. **"Your system, your data"** — On-device processing. No cloud dependency. Encrypted backups you control.
2. **"Built on Home Assistant"** — Attribution with link to HA. Explanation that neostronghold contributes upstream. GitHub stars counter (live or cached).
3. **"No lock-in"** — If neostronghold ceases operations, your system keeps running. Full export capability. Standard protocol support (Zigbee, Z-Wave, Matter, Thread, MQTT).
4. **"Auditable by design"** — Link to public GitHub repositories. Open API documentation. Community review welcome.

Design treatment: Three-panel glass layout with GitHub-style contribution graph animation on scroll. Transparency as a feature, not an afterthought.

### 2.12 Roadmap (Updated)

**Current (Mark 1):** Simple timeline: MVP -> Phase 2 -> Phase 3 -> Phase 4.

**Changes for Mark 2:**

Interactive Gantt-style timeline with expandable milestones. Each phase clickable:

| Phase | Click reveals |
|---|---|
| MVP (Live) | "Core Hub shipping, WhatsApp AI live, 10 beta homes installed." Green checkmark. |
| Phase 2 (Q3 2026) | "Pro Hub launch, Agent Marketplace beta, Tesla integration, CPD programme launch." Expandable spec. |
| Phase 3 (Q4 2026) | "We Manage subscription, injection-moulded enclosures, installer partner network, JHB expansion." |
| Phase 4 (2027) | "National installer network, UK/EU self-ship, local voice assistant, E-ink wall panels." |

Each milestone has a "notify me" button that captures email for that specific feature.

Design treatment: Horizontal timeline on desktop, vertical on mobile. Glass node markers. Completed phases show solid fill; future phases show outline with glow. Connecting line animates on scroll.

### 2.13 Pricing (Updated)

**Current (Mark 1):** Simple table: Starter Kit, Full Home Silver/Gold/Platinum.

**Changes for Mark 2:**

Role-based pricing view. Tab switcher at top:

1. **"I'm a homeowner"** — Core vs Pro pricing with feature comparison. Monthly subscription shown as "From R299/month" with tooltip explaining what's included.
2. **"I'm an architect / developer"** — Bulk pricing for multi-unit developments. Spec compliance documentation. CPD course bundle pricing. Trade discount structure (tiers by volume).
3. **"I'm an installer"** — Partner program pricing. Hardware wholesale pricing. Revenue share on "We Manage" subscriptions. Training certification costs.

Each tab shows a hero price card (most popular highlighted) with secondary options below.

Design treatment: Glass cards with subtle price emphasis. "Most popular" badge uses brand accent colour. Toggle between monthly/annual subscription pricing.

### 2.14 Team (Updated)

**Current (Mark 1):** Three team members with photos and roles.

**Changes for Mark 2:**

Expand to include advisory board placeholder and open positions. Photo grid with glass card frames. Hover reveals bio detail and social links.

New additions:
- Advisory board section (placeholder cards: "Technical Advisor — TBD", "Solar Industry Advisor — TBD", etc.)
- "Join us" card: links to open positions (CTO, Field Technician, Support).
- Values statement: 3-4 core values with brief explanation.

### 2.15 CTA (Updated and Role-Routed)

**Current (Mark 1):** Single "Get Started" link to contact form.

**Changes for Mark 2:**

Role-based CTA section. Four distinct paths:

| Role | Headline | CTA Button | Leads to |
|---|---|---|---|
| Homeowner | "Ready to make your home intelligent?" | "Book a free consultation" | Calendly booking for site survey |
| Architect | "Spec neostronghold in your next project." | "Download spec sheets" | PDF spec sheet download (lead capture) |
| Installer | "Join the neostronghold partner network." | "Apply as a partner" | Partner application form |
| Investor | "Back the future of SA smart homes." | "View pitch deck" | Pitch deck download (lead capture) |

Each card uses the same glass design language. Icons match role. "Most popular" glow on Homeowner card (primary conversion goal).

### 2.16 SA Diaspora (New)

**Purpose:** Explicitly address the South African living abroad who want to secure their SA property or deploy a system in their current country of residence.

| Element | Specification |
|---|---|
| Header | "Wherever you go, bring SA-grade security." |
| Subheader | "Living in London, Dubai, or Sydney? neostronghold ships globally. Your SA home stays secure. Or deploy in your new country with the same platform." |
| Content | Three use cases: (1) "Secure your SA property from abroad" — remote monitoring, armed response integration, AI agent as virtual security guard. (2) "Same platform, anywhere" — neostronghold works internationally. Local AI means no regional cloud dependency. (3) "SA diaspora support" — WhatsApp-based support in your timezone. Family access management. |
| Map visual | Animated world map showing connection lines from South Africa to major diaspora cities (London, Dubai, Sydney, Toronto, Auckland, Amsterdam). Pulse animation on connection endpoints. |
| Testimonial placeholder | "Beta diaspora user" quote: "I installed neostronghold in my Cape Town holiday home. I get security alerts on WhatsApp in London. My property manager has limited access. Peace of mind." |

Design treatment: Map background with glass overlay. Connection lines use brand gradient. Subtle particle animation along lines.

CTA: "Secure from anywhere" -> role router or contact form.

### 2.17 Investors / Funding Section (New)

**Purpose:** Function as a passive investor funnel. Reduce inbound qualification burden on founder. Enable Y Combinator / VC discovery.

| Element | Specification |
|---|---|
| Header | "Intelligent homes, open to everyone." Sub: "Building the open-source smart home platform for Africa — and beyond." |
| Key metrics (animated counters) | Team size (3), Beta homes (10), Market size (R22B), Target seed round (R1.5M) |
| Pitch points | Three cards: (1) "The gap" — R20k-R80k unserved segment visualised. (2) "The traction" — Beta results: 10 homes, 100% referral rate, R299/month subscription commitment. (3) "The moat" — Open-source foundation, local AI, solar integration, diaspora market. |
| Deck download | "Download pitch deck" button. Triggers lead capture form (name, email, firm, cheque size). File hosted on DocSend or equivalent with tracking. |
| YC application | "View our Y Combinator application" — public S21-style application page (separate route or modal). Includes all questions and answers. Functions as a detailed investor memo. |
| Use of funds | Animated breakdown chart (matching BUSINESS_PLAN.md Section 14.2). Glass card with hover detail for each allocation. |
| Contact | "Interested? Email invest@neostronghold.co.za" with PGP key link. |

Design treatment: Clean, data-heavy. Dark background with glass data cards. Charts use brand colours. Numbers animate on scroll. No fluff — this is a credibility builder.

### 2.18 Alpha Community (New)

**Purpose:** Social proof through early adopter showcase. Prospective customers see real people using the product.

| Element | Specification |
|---|---|
| Header | "Join the first 50." Sub: "neostronghold is live in 10 Cape Town homes. Our first 50 installations get founding member benefits." |
| Testimonial cards | 4-6 cards with photo, name, suburb, system type, quote. Mix of property types: apartment, family home, home with solar, home without solar. |
| Founding member perks | Listed on website as "founding member." Lifetime discounted subscription (R199/month vs R299/month). Direct founder WhatsApp access. Named in "Hall of Fame" page. Invitation to annual community event. |
| Community counter | "X of 50 founding spots filled" with progress bar. Scarcity mechanism. Counter is manually updated or CMS-driven. |
| Photo grid | Grid of installation photos (permission-granted). Show real installations: hub mounted, sensors placed, switches installed. Authenticity over perfection. |
| Beta program alumni | Section for beta testers who received discounted installs. Their testimonials and photos. "Beta Tester since 2026" badge. |

Design treatment: Masonry photo grid with glass card overlays for quotes. Warm, human feel contrasted with the otherwise cool/tech aesthetic. Photo grid uses lazy loading with blur-up placeholder.

### 2.19 For Architects & Designers (New)

**Purpose:** Open the B2B channel. Architects specify neostronghold in new builds and renovations.

| Element | Specification |
|---|---|
| Header | "Design intelligence in." Sub: "Specify neostronghold in your next project. CPD-accredited training. Trade partner program. Full spec documentation." |
| CPD course card | "Smart Home Design for SA Architects — CPD Accredited." Online, self-paced, 3 CPD points. Content: smart home fundamentals, specification writing, solar integration, load shedding resilience. "Enrol now" CTA. Price: Free for trade partners, R500 for non-partners. |
| Trade partner program | Tiered partnership: Bronze (referral commission, 10%), Silver (wholesale pricing, spec support, 15%), Gold (priority support, co-marketing, custom integrations, 20%). Detail card for each tier. |
| Spec sheets | Downloadable PDFs: Core spec sheet, Pro spec sheet, Integration capabilities, Wiring diagrams, Network requirements. Each gated behind email capture. |
| Project showcase | 2-3 case studies of architect-specified installations (once available). Before/after photos. Architect quotes. |
| Compliance | Note: "All installations include COC. ICASA-approved wireless devices. NRCS-compliant switches." |

Design treatment: Clean, professional. Less glass/translucency, more structured layout with clear information hierarchy. Download buttons prominent. CPD badge (SACAP/SAIA logo if obtained).

### 2.20 Role Router (New)

**Purpose:** Floating navigation element that lets visitors self-identify and see relevant content.

| Aspect | Specification |
|---|---|
| Trigger | Floating pill button in bottom-right corner: "I am a..." |
| Expanded state | Four option cards: Homeowner, Architect, Installer, Investor. Each with icon and 1-line description. |
| Selection behaviour | Scrolls to top of relevant content path. Sets a URL parameter (`?role=homeowner`). Persists selection in `localStorage` for session duration. |
| Content filtering | On selection, non-relevant sections are de-emphasised (reduced opacity) but not hidden. Relevant sections glow subtly. |
| Mobile | Slides up as bottom sheet. Touch-friendly card selection. |

---

## 3. New Component Tree

All new components needed for Mark 2. Organised by atomic design hierarchy.

### 3.1 Atoms

| Component | File | Description |
|---|---|---|
| `GlassCard` | `components/atoms/GlassCard.tsx` | Reusable glass card with blur, border, optional glow. Props: `glow` (boolean), `glowColor` (string), `padding` (string), `children`. |
| `AnimatedCounter` | `components/atoms/AnimatedCounter.tsx` | Counts from 0 to target on scroll into viewport. Props: `target` (number), `prefix` (string), `suffix` (string), `duration` (number). |
| `RoleBadge` | `components/atoms/RoleBadge.tsx` | Small pill badge: "Homeowner", "Architect", etc. Props: `role` (enum), `active` (boolean). |
| `StatusDot` | `components/atoms/StatusDot.tsx` | Green/yellow/red dot for agent status. Props: `status` (enum: 'active'|'idle'|'error'). |
| `GlowButton` | `components/atoms/GlowButton.tsx` | CTA button with hover glow effect. Props: `variant` ('primary'|'secondary'|'ghost'), `role` (optional role colour). |
| `SpecRow` | `components/atoms/SpecRow.tsx` | Table row for spec comparison. Props: `label`, `core`, `pro`, `highlight` (boolean). |
| `ConnectionLine` | `components/atoms/ConnectionLine.tsx` | SVG animated path line. Props: `from`, `to`, `animated` (boolean). |
| `ParticleSystem` | `components/atoms/ParticleSystem.tsx` | Canvas-based particle animation. Props: `count`, `color`, `mouseReactive` (boolean). |
| `SectionHeader` | `components/atoms/SectionHeader.tsx` | Standardised section header with optional role badge. Props: `title`, `subtitle`, `role` (optional). |
| `IconCard` | `components/atoms/IconCard.tsx` | Icon + text card. Props: `icon`, `title`, `description`, `expandable` (boolean). |

### 3.2 Molecules

| Component | File | Description |
|---|---|---|
| `Hardware3DViewer` | `components/molecules/Hardware3DViewer.tsx` | 3D model viewer for Core/Pro. Uses Three.js or model-viewer web component. Props: `model` ('core'|'pro'), `autoplay` (boolean), `interactive` (boolean). |
| `AgentProcessList` | `components/molecules/AgentProcessList.tsx` | Left pane of Agent Manager. Lists running agents with status. Props: `agents` (array), `activeAgent` (string), `onSelect` (function). |
| `AgentLogFeed` | `components/molecules/AgentLogFeed.tsx` | Right pane of Agent Manager. Scrolling log output. Props: `scenarios` (array), `speed` (number). |
| `TmuxStatusBar` | `components/molecules/TmuxStatusBar.tsx` | Bottom bar of Agent Manager. Tmux-style status line. Props: `hostname`, `uptime`, `command` (optional). |
| `SpecComparisonTable` | `components/molecules/SpecComparisonTable.tsx` | Interactive comparison table for Core vs Pro. Props: `rows` (array), `stickyHeader` (boolean). |
| `PricingTabSet` | `components/molecules/PricingTabSet.tsx` | Role-based tab switcher for pricing. Props: `tabs` (array of role tabs), `activeTab`, `onTabChange`. |
| `RoleSelector` | `components/molecules/RoleSelector.tsx` | Four-option role selector component. Props: `onSelect` (function), `compact` (boolean). |
| `AgentCard` | `components/molecules/AgentCard.tsx` | Marketplace agent card. Props: `agent` (object), `onInstall` (function), `onDetail` (function). |
| `TestimonialCard` | `components/molecules/TestimonialCard.tsx` | Photo + quote card. Props: `name`, `suburb`, `quote`, `image`, `systemType`. |
| `DashboardPreview` | `components/molecules/DashboardPreview.tsx` | Animated energy dashboard demo. Props: `data` (mock dataset), `scenario` ('normal'|'loadshedding'|'solar'). |
| `PitchMetricCard` | `components/molecules/PitchMetricCard.tsx` | Investor metric with animated counter. Props: `icon`, `value`, `label`. |
| `MapConnection` | `components/molecules/MapConnection.tsx` | World map with connection lines. Props: `cities` (array of {name, lat, lng}). |
| `GanttMilestone` | `components/molecules/GanttMilestone.tsx` | Roadmap timeline node. Props: `phase`, `date`, `items`, `status` ('complete'|'current'|'future'). |

### 3.3 Organisms

| Component | File | Description |
|---|---|---|
| `HeroSection` | `components/organisms/HeroSection.tsx` | Full hero with 3D hardware, glass panel, dual CTAs. |
| `DualHardwareShowcase` | `components/organisms/DualHardwareShowcase.tsx` | Core vs Pro side-by-side with 3D models, specs, CTAs. |
| `AgentManagerHub` | `components/organisms/AgentManagerHub.tsx` | Full tmux-metaphor interactive demo. Composes AgentProcessList, AgentLogFeed, TmuxStatusBar. |
| `AgentMarketplace` | `components/organisms/AgentMarketplace.tsx` | Horizontal scrollable marketplace grid. Composes AgentCard. |
| `TeslaIntegrationDemo` | `components/organisms/TeslaIntegrationDemo.tsx` | Dashboard demo with Tesla/Powerwall integration. Composes DashboardPreview. |
| `SADiasporaSection` | `components/organisms/SADiasporaSection.tsx` | SA diaspora pitch with map visualisation. Composes MapConnection. |
| `InvestorSection` | `components/organisms/InvestorSection.tsx` | Full investor pitch section. Composes PitchMetricCard. |
| `AlphaCommunity` | `components/organisms/AlphaCommunity.tsx` | Testimonial grid with community counter. Composes TestimonialCard. |
| `ArchitectsSection` | `components/organisms/ArchitectsSection.tsx` | CPD course, trade program, spec sheets. |
| `PricingSection` | `components/organisms/PricingSection.tsx` | Role-tabbed pricing. Composes PricingTabSet. |
| `RoleRouter` | `components/organisms/RoleRouter.tsx` | Floating role selector. Composes RoleSelector. |
| `InteractiveTimeline` | `components/organisms/InteractiveTimeline.tsx` | How It Works timeline. Composes ConnectionLine. |
| `GlassComparisonTable` | `components/organisms/GlassComparisonTable.tsx` | Competition comparison table. |
| `CompetitionMatrix` | `components/organisms/CompetitionMatrix.tsx` | 2x2 matrix visual. |
| `OpenSourceSection` | `components/organisms/OpenSourceSection.tsx` | Trust-building open-source showcase. |
| `TeamSection` | `components/organisms/TeamSection.tsx` | Team grid with advisory board and values. |

### 3.4 Layouts / Templates

| Component | File | Description |
|---|---|---|
| `RoleBasedLayout` | `components/layouts/RoleBasedLayout.tsx` | Wraps page with role state management. Provides context for RoleBadge visibility and section filtering. |
| `RoleContext` | `components/layouts/RoleContext.tsx` | React context for current role. Persists in localStorage. |
| `Navbar` | `components/layouts/Navbar.tsx` | Updated navigation. Glass background on scroll. Role-aware section links. Hardware comparison sticky drawer trigger. |
| `Footer` | `components/layouts/Footer.tsx` | Updated footer with role-based quick links, investor contact, diaspora support link. |

### 3.5 Pages

| Route | File | Description |
|---|---|---|
| `/` | `pages/index.tsx` | Main landing page. All sections composed sequentially. |
| `/pitch-deck` | `pages/pitch-deck.tsx` | Dedicated pitch deck page or modal. |
| `/yc-application` | `pages/yc-application.tsx` | Public YC application page. |
| `/agents` | `pages/agents.tsx` | (Future) Full marketplace page beyond the landing section. |
| `/specs/core` | `pages/specs/core.tsx` | (Future) Full Core spec page. |
| `/specs/pro` | `pages/specs/pro.tsx` | (Future) Full Pro spec page. |
| `/architecture` | `pages/architecture.tsx` | (Future) Dedicated architect/designer portal. |

---

## 4. Design System Updates

### 4.1 Colour Palette

| Token | Mark 1 | Mark 2 | Usage |
|---|---|---|---|
| `--color-bg-primary` | `#0a0a0f` | `#0a0a0f` (unchanged) | Page background |
| `--color-bg-secondary` | `#12121a` | `#12121a` (unchanged) | Card backgrounds |
| `--color-bg-glass` | N/A | `rgba(255, 255, 255, 0.03)` | Glass card base |
| `--color-bg-glass-hover` | N/A | `rgba(255, 255, 255, 0.06)` | Glass card hover |
| `--color-glass-border` | N/A | `rgba(255, 255, 255, 0.08)` | Glass card border |
| `--color-glass-border-hover` | N/A | `rgba(255, 255, 255, 0.15)` | Glass card border hover |
| `--color-accent-primary` | `#6366f1` | `#7c6af7` (slightly warmer) | Primary CTAs, highlights |
| `--color-accent-secondary` | `#22d3ee` | `#2dd4bf` (teal shift) | Secondary accents, agent status |
| `--color-accent-glow` | N/A | `rgba(124, 106, 247, 0.3)` | Glow effect on glass cards |
| `--color-accent-pro` | N/A | `#f59e0b` (amber) | Pro-specific badges, highlights |
| `--color-text-primary` | `#f1f5f9` | `#f1f5f9` (unchanged) | Body text |
| `--color-text-secondary` | `#94a3b8` | `#94a3b8` (unchanged) | Secondary text |
| `--color-text-glass` | N/A | `rgba(241, 245, 249, 0.8)` | Text on glass backgrounds |
| `--color-success` | `#22c55e` | `#22c55e` (unchanged) | Checkmarks, online status |
| `--color-danger` | `#ef4444` | `#ef4444` (unchanged) | Errors, missing features |
| `--color-role-homeowner` | N/A | `#7c6af7` | Homeowner role colour |
| `--color-role-architect` | N/A | `#2dd4bf` | Architect role colour |
| `--color-role-installer` | N/A | `#f59e0b` | Installer role colour |
| `--color-role-investor` | N/A | `#ec4899` | Investor role colour |

### 4.2 Typography

| Token | Mark 1 | Mark 2 | Usage |
|---|---|---|---|
| Font family | Inter | Inter (primary), JetBrains Mono (mono) | Body: Inter 400/500/600/700. Mono: agent terminal, code, status lines. |
| `--font-display` | Inter 700 | Inter 700 (wider tracking: `-0.02em`) | Hero headlines, section headers |
| `--font-body` | Inter 400 | Inter 400 | Body copy |
| `--font-mono` | N/A | `'JetBrains Mono', monospace` | Agent Manager, terminal outputs, specs |
| `--font-size-hero` | `clamp(2.5rem, 5vw, 4rem)` | `clamp(2.5rem, 5vw, 4.5rem)` | Hero headline |
| `--font-size-section` | `1.5rem` | `clamp(1.5rem, 3vw, 2.25rem)` | Section headers |
| `--font-size-card-title` | `1rem` | `1.125rem` | Card titles |
| `--font-size-mono` | N/A | `0.875rem` | Agent terminal text |
| `--line-height-tight` | `1.1` | `1.1` | Headlines |
| `--line-height-body` | `1.6` | `1.7` (slightly more readable) | Body copy |

### 4.3 Glass/Translucent Design Elements

#### 4.3.1 Glass Card Defaults

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(124, 106, 247, 0.1);
}
```

#### 4.3.2 Glass Variants

- **GlassCard (default):** As above. For general content cards.
- **GlassCardInteractive:** Larger hover effect. Cursor pointer. Click feedback. For cards that open modals or navigate.
- **GlassCardGlow:** Pulsing glow border. For featured content, "most popular" pricing, CTA cards.
- **GlassPanel:** Full-width section background. For Hero, section dividers. Reduced border radius (0 on sides).
- **GlassMorphicNav:** Navbar on scroll. `backdrop-filter: blur(30px)` with stronger blur for readability.

#### 4.3.3 "See the Tech" Aesthetic

- Hardware renders use translucent enclosures (actual product design goal or artistic liberty in renders).
- Internal components (PCB, heatsink, antenna) visible through glass top on Pro model.
- Circuit-board patterns used as background topography (SVG, subtle opacity).
- Layer stacking: background grid -> particle system -> glass card -> content -> glow overlay.
- Z-index layering creates depth perception without overlapping text.

### 4.4 Animation System

| Animation | Trigger | Duration | Easing |
|---|---|---|---|
| Staggered fade-up | Each section on scroll | 600ms per element, 100ms stagger | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Counter animation | Number elements on scroll | 2000ms | `ease-out` |
| Pulse glow | GlassCardGlow, "Pro" badge | 3s loop | `ease-in-out` |
| Typing effect | Agent Manager terminal | Character by character at 50ms | N/A |
| Stroke dash offset | SVG connection lines on scroll | 1500ms | `linear` |
| Particle float | Particle system background | Continuous | Sinusoidal |
| Hardware orbit | Core/Pro 3D models | 20s loop | `linear` (CSS rotation) |
| Glass shimmer | Glass panels on page load | 2s, single pass | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Hover lift | All interactive cards | 200ms | `ease-out` |

All animations respect `prefers-reduced-motion`. Replace with static reveal on reduced motion.

### 4.5 Spacing and Grid

| Token | Value | Usage |
|---|---|---|
| `--space-section` | `6rem` desktop, `4rem` mobile | Between sections |
| `--space-card-gap` | `1.5rem` | Between cards in grid |
| `--space-content` | `clamp(1rem, 5vw, 1.5rem)` | Card padding |
| Grid columns | 12-column (desktop), 8-column (tablet), 4-column (mobile) | Standard responsive grid |
| Max content width | 1280px | Centred container |
| Glass offset | 20px from section edge | GlassPanel extends full-bleed beyond content container |

---

## 5. Content Requirements

### 5.1 Copywriting Needs

| Section | What Needs Writing | Priority | Estimated Word Count |
|---|---|---|---|
| Hero | Headline, subheadline, CTA text (3 variations) | P0 | 50 |
| Problem | 3 pain point headlines + descriptions + stats | P0 | 200 |
| How It Works | 4 step headlines + descriptions + tooltip content | P0 | 300 |
| Dual Hardware Showcase | Core positioning, Pro positioning, spec labels, comparison rows | P0 | 400 |
| Agent Manager Hub | Terminal command sequences, demo scenario scripts (4-5 scenarios), agent descriptions | P0 | 600 |
| Agent Marketplace | 8-12 agent names + descriptions + install stats | P1 | 800 |
| Tesla Integration | Header, subheader, setup steps, comparison table rows | P1 | 300 |
| SA Diaspora | Header, subheader, 3 use case descriptions, testimonial quote | P1 | 250 |
| Investors | Header, pitch points (3 cards), metric labels, YC application answers | P1 | 2000 |
| Alpha Community | Testimonial quotes (4-6), founding member perks, beta program description | P1 | 400 |
| Architects | CPD course description, trade partner tiers (3), spec sheet descriptions | P1 | 500 |
| Role Router | 4 role descriptions (1 line each) | P1 | 50 |
| Pricing | Homeowner pricing descriptions, architect pricing, installer pricing, tooltips | P0 | 400 |
| Competition | Table rows (8-10 features), comparison narrative | P1 | 200 |
| Market | Data point captions, chart labels | P1 | 100 |
| Open Source | Trust points (4), explanation, attribution text | P2 | 200 |
| Roadmap | Phase descriptions, milestone items | P1 | 300 |
| Team | Bios (3 team + 3 advisor placeholders), values (3-4) | P2 | 400 |
| CTA | 4 role-specific CTAs + form field labels | P0 | 100 |

**Total new copy:** Approximately 7,500 words.

### 5.2 Image and Render Requirements

| Asset | Type | Quantity | Specification | Priority |
|---|---|---|---|---|
| Core device — front isometric | Render (3D) | 1 | 4096x4096 PNG, transparent bg, solid enclosure | P0 |
| Core device — rear I/O | Render (3D) | 1 | 4096x4096 PNG, transparent bg | P1 |
| Core device — 360 rotation frames | Render (3D) | 36 | 2048x2048, 10-degree increments | P1 |
| Core device — exploded view | Render (3D) | 1 | 4096x4096, showing internal components | P2 |
| Pro device — front isometric | Render (3D) | 1 | 4096x4096 PNG, transparent bg, glass top | P0 |
| Pro device — rear I/O | Render (3D) | 1 | 4096x4096 PNG, transparent bg | P1 |
| Pro device — 360 rotation frames | Render (3D) | 36 | 2048x2048, 10-degree increments | P1 |
| Pro device — glass top view | Render (3D) | 1 | 4096x4096, PCB visible through glass | P0 |
| Core + Pro — size comparison | Render (3D) | 1 | 4096x4096, side by side with ruler | P1 |
| Agent Manager Hub — mockup | UI design | 1 | Full-window terminal mockup (Figma overlay on product) | P0 |
| Tesla dashboard — mockup | UI design | 1 | Energy dashboard with Tesla/Powerwall data | P1 |
| Competition 2x2 matrix — visual | Illustration | 1 | SVG/PNG matrix graphic | P1 |
| SA diaspora map — base | Illustration | 1 | SVG world map, dark theme | P1 |
| CPD badge / SACAP logo | Logo/icon | 1 | If accreditation obtained | P2 |
| WhatsApp/Telegram chat mockups | UI design | 2-3 | Chat conversation screenshots | P1 |
| Installation photos (real) | Photo | 10-20 | Real installations in beta homes | P1 |
| Team headshots | Photo | 3-6 | Professional, consistent lighting, dark background | P2 |
| Testimonial photos | Photo | 4-6 | Beta homeowner portraits (permission-granted) | P1 |
| Feature icons | SVG | 20-25 | Custom SVG icons, line-art style, consistent stroke width | P0 |
| Agent icons (marketplace) | SVG | 8-12 | Per-agent custom icons | P1 |
| How It Works step illustrations | SVG | 4 | Step-by-step flow illustrations | P0 |
| Hardware comparison thumbnails | Render | 2 | 512x512, Core and Pro thumbnails for sticky drawer | P1 |
| OG image / social card | Render | 1 | 1200x630, Core+Pro hero shot with branding | P0 |
| Investor deck preview thumbnail | Render | 1 | 1200x630, pitch deck cover slide | P1 |

### 5.3 Video and Interactive Content

| Asset | Type | Specification | Priority |
|---|---|---|---|
| Product overview video | 60s explainer | 4K, scripted, voiceover, product shots, installation footage | P1 |
| Agent Manager demo loop | Screen recording | 1080p, 60s, captures tmux mockup interaction sequence | P0 |
| Installation day timelapse | Video | 1080p, 30s, actual or staged installation | P2 |
| Testimonial videos | Video interviews | 1080p, 60-90s each, 3-4 homeowners | P2 |
| Tesla integration walkthrough | Screen recording | 1080p, 45s, dashboard demo | P1 |
| Hardware unboxing | Video | 1080p, 30s, Core and Pro side-by-side unboxing | P2 |

### 5.4 Downloadable Assets

| Asset | Format | Description | Priority |
|---|---|---|---|
| Core spec sheet | PDF | Full technical specifications, dimensions, certifications | P0 |
| Pro spec sheet | PDF | Full technical specifications, Pro-specific features highlighted | P0 |
| Integration capabilities | PDF | List of all supported integrations, protocols, solar inverters | P1 |
| Wiring diagrams | PDF | Electrical wiring diagrams for installers | P1 |
| Network requirements | PDF | Network topology, bandwidth, port forwarding, firewall rules | P1 |
| Pitch deck | PDF | Investor presentation, 12-15 slides | P0 |
| YC application | HTML | Public Y Combinator application page | P1 |
| Trade partner brochure | PDF | Partner program overview, tiers, pricing | P1 |
| CPD course syllabus | PDF | Course outline, learning objectives, accreditation details | P2 |

---

## 6. Technical Architecture

### 6.1 Framework Decisions

| Technology | Mark 1 | Mark 2 | Rationale |
|---|---|---|---|
| Framework | Next.js 14 | Next.js 15 (App Router) | App Router enables layout nesting, role-based layouts, server components for content, streaming. |
| Rendering | Static (SSG) | Hybrid: SSG for content, ISR for marketplace, dynamic for role-routed pages. | Content is mostly static. Marketplace agent list may need periodic rebuilds. Role routing uses client-side navigation. |
| 3D rendering | None | Three.js via `@react-three/fiber` or `<model-viewer>` web component | `<model-viewer>` preferred for simpler integration, lazy loading, and reduced JS bundle. Three.js fallback if custom interaction needed. |
| Animation | Framer Motion | Framer Motion (unchanged) + GSAP for scroll-triggered timeline animations | Framer Motion for UI animations. GSAP for complex scroll-linked sequences (Agent Manager, map connections). |
| State management | React context + useState | React context for role (unchanged), Zustand for animation state coordination | Lightweight. Role state is simple. Animation state needs coordination across components (section scroll triggers). |
| CSS | Tailwind CSS + styled-jsx | Tailwind CSS v4 + CSS modules for glass components | Tailwind for utility classes. CSS modules for GlassCard and animation-heavy components to keep CSS organised. |
| Media | Static images | Cloudflare Images or Imgix for optimisation, AVIF/WebP, blur-up placeholders | Multiple renders per device (3D frames, angles). Need automated optimisation pipeline. |
| Analytics | Plausible | Plausible + Heap (or PostHog) for role-based funnel tracking | Need to track which role users select, which sections they visit, where they drop off. |
| Forms | Mailgun | Mailgun + HubSpot (or Brevo) CRM integration | Lead capture forms (pitch deck, spec sheets, consultation booking) need CRM integration for follow-up. |

### 6.2 App Router Structure

```
app/
├── layout.tsx                  # Root layout: Navbar, Footer, RoleContext provider, Plausible
├── page.tsx                    # Main landing page (composes all sections)
├── loading.tsx                 # Root loading state (skeleton glass panels)
├── error.tsx                   # Error boundary
├── not-found.tsx               # 404 page
├── pitch-deck/
│   ├── page.tsx                # Pitch deck download / preview page
│   └── loading.tsx
├── yc-application/
│   └── page.tsx                # Public YC application
├── agents/
│   ├── page.tsx                # (Future) Full marketplace
│   ├── [agentId]/
│   │   └── page.tsx            # (Future) Individual agent detail
│   └── loading.tsx
├── specs/
│   ├── core/
│   │   └── page.tsx            # (Future) Core full spec page
│   └── pro/
│       └── page.tsx            # (Future) Pro full spec page
├── api/
│   ├── newsletter/
│   │   └── route.ts            # Newsletter signup endpoint
│   ├── install-agent/
│   │   └── route.ts            # Marketplace install lead capture endpoint
│   ├── spec-download/
│   │   └── route.ts            # Spec sheet download with lead capture
│   └── consultation/
│       └── route.ts            # Consultation booking webhook
└── sections/                   # Section components (page.tsx imports these)
    ├── HeroSection.tsx
    ├── ProblemSection.tsx
    ├── HowItWorksSection.tsx
    ├── DualHardwareSection.tsx
    ├── AIAgentHubSection.tsx
    ├── FeaturesSection.tsx
    ├── CompetitionSection.tsx
    ├── MarketSection.tsx
    ├── AgentMarketplaceSection.tsx
    ├── TeslaIntegrationSection.tsx
    ├── OpenSourceSection.tsx
    ├── RoadmapSection.tsx
    ├── PricingSection.tsx
    ├── TeamSection.tsx
    ├── SADiasporaSection.tsx
    ├── InvestorSection.tsx
    ├── AlphaCommunitySection.tsx
    ├── ArchitectsSection.tsx
    └── CTASection.tsx
```

### 6.3 Role Routing Mechanism

```
app/
├── layout.tsx                  # Wraps page with RoleProvider
├── context/
│   └── RoleContext.tsx         # React context for 'homeowner' | 'architect' | 'installer' | 'investor' | null
└── hooks/
    └── useRole.ts             # Hook: get/set role, persists to localStorage, syncs URL param
```

**Flow:**
1. User clicks role selector -> `useRole().setRole('architect')` -> updates context, sets `?role=architect` in URL (shallow), saves to `localStorage`.
2. RoleContext provides `role` to all section components.
3. Each section uses `role` to:
   - Show/hide role-specific content (e.g., architect section highlighted when `role=architect`).
   - Filter non-relevant sections to reduced opacity.
   - Swap CTA button variants.
4. On subsequent visits, role is restored from `localStorage`. URL param takes precedence if present (for sharing URL with specific role).

### 6.4 Performance Budget

| Metric | Target | Note |
|---|---|---|
| Lighthouse Performance | >90 | Dark theme, glass effects should not impact paint |
| Lighthouse Accessibility | >95 | Full keyboard nav, screen reader support, reduced motion |
| Lighthouse SEO | >95 | Role-based content is client-side; ensure static fallback for crawlers |
| First Contentful Paint | <1.5s | Static content prioritised; 3D models lazy-loaded |
| Largest Contentful Paint | <2.5s | Hero section loads first; below-fold content can wait |
| Total Bundle JS | <300KB gzip | Split Three.js into separate chunk, dynamic import for Agent Manager |
| Total Bundle CSS | <50KB | Purged Tailwind + minimal CSS modules for glass components |
| Cumulative Layout Shift | <0.05 | Reserve space for 3D models, counters, glass panels |
| Time to Interactive | <3.0s | Most interactions are scroll-based; click handlers use event delegation |

### 6.5 SEO and Crawlability

Since role routing and some content is client-side:

- **Metadata:** Each section wrapped in server component with appropriate `<section>` landmark, `aria-label`, and semantic heading hierarchy.
- **Canonical:** `/` is the canonical URL regardless of `?role=` param. Role param is secondary navigation, not a different page.
- **Sitemap:** Include `/pitch-deck`, `/yc-application` as separate entries.
- **Structured data:** `Organization`, `Product` (Core and Pro), `SoftwareApplication` schema.
- **Open Graph:** Hero section generates OG image with Core+Pro render. Role-specific OG tags (add `og:title` based on role if supported).

### 6.6 Glass Effect Performance Optimisation

`backdrop-filter` is expensive on some browsers/devices.

| Strategy | Implementation |
|---|---|
| Reduce blur radius on mobile | `blur(10px)` on mobile, `blur(20px)` on desktop |
| Subset of glass cards use blur | Only top-layer cards (Hero, Agent Manager, Pricing) get full blur. Lower cards use `background: rgba(...)` simulation. |
| `will-change: transform` | Only on interactive glass cards with hover animation. Removed on scroll end via Intersection Observer. |
| GPU compositing | Ensure `backdrop-filter` elements are composited on GPU. Test on mid-range Android devices (Galaxy A series). |
| Fallback for unsupported browsers | Detect `backdrop-filter` support. Fallback to solid `rgba(255,255,255,0.05)` background with no blur. |

---

## 7. Implementation Order

Phased approach based on dependency and impact.

### Phase 1: Foundation and Core Sections (Week 1-2)

**Build first because:** These sections have no dependencies on other new sections. They are the highest-traffic sections on the site.

| Order | Section | Dependencies | Effort |
|---|---|---|---|
| 1 | Design system setup (glass tokens, colours, typography) | None | 2 days |
| 2 | GlassCard atom + variants | #1 | 1 day |
| 3 | Navbar (glass on scroll) + Footer | #1 | 1 day |
| 4 | HeroSection (glass panel, dual CTA) | #2, #3 | 2 days |
| 5 | ProblemSection (new copy, glass cards) | #2 | 1 day |
| 6 | HowItWorksSection (interactive timeline) | #2 | 2 days |
| 7 | FeaturesSection (tabbed interface) | #2 | 1 day |
| 8 | PricingSection (role-tabbed, Core/Pro) | #2, RoleContext | 2 days |
| 9 | CTASection (role-based 4-card) | #2, RoleContext | 1 day |

**Milestone 1:** Mark 1 sections rebuilt with glass design system. Role routing active. Site is visually Mark 2 but missing new content sections.

### Phase 2: New Hardware and AI Content (Week 3-4)

**Build second because:** These are the marquee new features. They require 3D renders and Agent Manager assets (can be built with placeholder renders).

| Order | Section | Dependencies | Effort |
|---|---|---|---|
| 10 | RoleContext + useRole hook | None | 1 day |
| 11 | RoleRouter (floating selector) | #10 | 1 day |
| 12 | RoleBasedLayout + section filtering | #10 | 1 day |
| 13 | Hardware3DViewer atom (model-viewer wrapper) | #1 | 2 days |
| 14 | SpecComparisonTable molecule | #1 | 1 day |
| 15 | DualHardwareShowcase (Core vs Pro) | #13, #14 | 3 days |
| 16 | AgentProcessList, AgentLogFeed, TmuxStatusBar molecules | #1 | 2 days |
| 17 | AgentManagerHub organism (tmux metaphor) | #16 | 2 days |
| 18 | DashboardPreview molecule | #1 | 1 day |
| 19 | TeslaIntegrationDemo organism | #18 | 2 days |

**Milestone 2:** Hardware showcase live with 3D renders. Agent Manager interactive demo functional. Tesla/Powerwall section built.

### Phase 3: Community and Marketplace (Week 5)

**Build third because:** Marketplace and community sections depend on Phase 2 being live to feel credible (agents need the Agent Manager to exist first).

| Order | Section | Dependencies | Effort |
|---|---|---|---|
| 20 | AgentCard molecule | #1 | 1 day |
| 21 | AgentMarketplace organism | #20 | 2 days |
| 22 | TestimonialCard molecule | #1 | 1 day |
| 23 | AlphaCommunity organism | #22 | 1 day |
| 24 | MapConnection molecule | #1 | 1 day |
| 25 | SADiasporaSection organism | #24 | 2 days |

**Milestone 3:** Marketplace, community, and diaspora sections live. Site is content-complete.

### Phase 4: Investor and B2B Content (Week 6)

**Build fourth because:** These are lower-traffic but high-value conversion sections. They require polished copy and financial data accuracy.

| Order | Section | Dependencies | Effort |
|---|---|---|---|
| 26 | AnimatedCounter atom | #1 | 0.5 day |
| 27 | PitchMetricCard molecule | #26 | 0.5 day |
| 28 | InvestorSection organism | #27 | 2 days |
| 29 | PitchDeckPage | #1 | 1 day |
| 30 | YCApplicationPage | #1 | 1 day |
| 31 | ArchitectsSection organism | #1 | 2 days |
| 32 | Competition matrix + table updates | #1 | 1 day |
| 33 | MarketSection data visualisation | #26 | 1 day |
| 34 | OpenSourceSection updates | #1 | 0.5 day |
| 35 | RoadmapSection interactive Gantt | #1 | 1 day |
| 36 | TeamSection updates | #1 | 0.5 day |

**Milestone 4:** All 20 sections live. Full Mark 2 feature set deployed.

### Phase 5: Polish and Performance (Week 7)

| Order | Task | Effort |
|---|---|---|
| 37 | Performance audit and optimisation | 2 days |
| 38 | Accessibility audit (axe-core, keyboard nav, screen reader) | 2 days |
| 39 | SEO audit (structured data, metadata, sitemaps) | 1 day |
| 40 | Animation timing pass (reduce-motion support) | 1 day |
| 41 | Browser testing (Chrome, Firefox, Safari, Samsung Internet) | 2 days |
| 42 | Mobile testing (iPhone SE, iPhone 14, Galaxy S23, Galaxy A54) | 2 days |
| 43 | Load testing (if dynamic endpoints are used) | 1 day |
| 44 | Analytics event tracking QA | 1 day |

**Milestone 5:** Production launch.

### 7.1 Gantt Summary

```
Week 1    Week 2    Week 3    Week 4    Week 5    Week 6    Week 7
[Design System & Glass]    
          [Hero, Pricing, CTAs]    
                    [3D Hardware, Agent Manager]    
                              [Tesla, Dashboard]    
                                        [Marketplace, Community, Diaspora]    
                                                  [Investor, B2B, Polish]    
                                                            [QA, Launch]
```

---

## 8. Success Metrics

### 8.1 Primary KPIs

| Metric | Mark 1 Baseline (estimate) | Mark 2 Target | Measurement |
|---|---|---|---|
| Conversion rate (consultation booking) | 2.5% of unique visitors | 4.0% | Calendly booking events / unique visitor |
| Spec sheet downloads | N/A (not tracked) | 50/month by Month 3 | Download event (tracked via CRM) |
| Pitch deck downloads | N/A | 20/month by Month 3 | Download event (tracked via DocSend) |
| Time on page | 2:30 | 4:00 | Plausible / Heap session duration |
| Scroll depth | 60% average | 80% average | Plausible scroll tracking |
| Bounce rate | 55% | 40% | Plausible |
| Role selector engagement | N/A | 15% of visitors use role selector | Button click event |
| Agent Marketplace "Install" clicks | N/A | 10% of visitors click at least one | Button click event |
| Agent Marketplace email capture | N/A | 5% conversion from click | Form submission event |
| SA Diaspora section engagement | N/A | 8% of visitors scroll to section | Scroll depth by section |
| Investor section engagement | N/A | 5% of visitors view investor section | Section visible event |

### 8.2 Secondary KPIs

| Metric | Target | Measurement |
|---|---|---|
| Lighthouse Accessibility score | >95 | Automated CI check |
| Lighthouse Performance score | >90 | Automated CI check |
| Core Web Vitals (all) | Pass | CrUX / Lighthouse CI |
| 3D model load time | <3s on 4G | Custom performance marker |
| Glass effect FPS | >50fps on mid-range device | `requestAnimationFrame` profiling |
| Mobile conversion rate | >= 60% of desktop conversion rate | Plausible segment comparison |

### 8.3 Qualitative Success Indicators

- Visitors who use role selector have higher conversion rate than those who do not (by at least 2x).
- Agent Manager Hub is the most engaged section (highest average time-on-section).
- Pitch deck downloads from website generate at least 1 qualified investor meeting per month.
- SA Diaspora section drives at least 5 inbound inquiries from diaspora visitors in first 2 months.
- No section has >60% drop-off rate (measured by scroll depth heatmap).
- Support team reports reduction in "what is neostronghold?" inquiries (site answers the question before contact).

### 8.4 A/B Testing Opportunities (Post-Launch)

| Test | Variant A (Control) | Variant B | Metric | Duration |
|---|---|---|---|---|
| Hero CTA | "I'm a homeowner" | "See the difference" | Click-through to role selector | 2 weeks |
| Agent Manager placement | Above the fold (after Hero) | Below Features | Scroll depth, time on section | 2 weeks |
| Pricing tab order | Homeowner first | Architect first | Pricing section engagement | 2 weeks |
| Marketplace carousel vs grid | Horizontal scroll | Grid layout | Click-through on agents | 2 weeks |
| Glass vs solid pricing cards | Glass effect | Solid dark card | Conversion rate on pricing | 2 weeks |
| Role selector auto-prompt | Show on page load | Show after 5s delay | Role selector engagement rate | 2 weeks |

---

## Appendix A: File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── pitch-deck/page.tsx
│   ├── yc-application/page.tsx
│   ├── agents/
│   │   ├── page.tsx
│   │   └── [agentId]/page.tsx
│   ├── specs/
│   │   ├── core/page.tsx
│   │   └── pro/page.tsx
│   ├── api/
│   │   ├── newsletter/route.ts
│   │   ├── install-agent/route.ts
│   │   ├── spec-download/route.ts
│   │   └── consultation/route.ts
│   └── sections/            # Section-level components (see 3.3)
├── components/
│   ├── atoms/               # GlassCard, AnimatedCounter, RoleBadge, etc.
│   ├── molecules/           # Hardware3DViewer, AgentProcessList, etc.
│   ├── organisms/           # HeroSection, DualHardwareShowcase, etc.
│   └── layouts/             # Navbar, Footer, RoleContext, RoleBasedLayout
├── hooks/
│   └── useRole.ts
├── context/
│   └── RoleContext.tsx
├── lib/
│   ├── glass.ts             # Glass effect utility classes
│   ├── animations.ts        # Shared animation variants
│   ├── analytics.ts         # Plausible/Heap event helpers
│   └── constants.ts         # Section names, role labels, pricing data
├── data/
│   ├── agents.ts            # Agent marketplace seed data
│   ├── specs.ts             # Core/Pro spec comparison data
│   ├── testimonials.ts      # Alpha community testimonials
│   ├── pricing.ts           # Pricing tier data
│   └── roadmap.ts           # Roadmap milestone data
├── styles/
│   ├── glass.module.css     # Glass effect CSS
│   ├── animations.css       # Keyframe animations
│   └── terminal.css         # Agent Manager terminal styling
├── public/
│   ├── renders/             # 3D product renders (see 5.2)
│   ├── videos/              # Demo videos (see 5.3)
│   ├── downloads/           # PDF spec sheets, pitch deck (see 5.4)
│   └── icons/               # SVG icons (see 5.2)
└── types/
    ├── agent.ts             # Agent type definitions
    ├── hardware.ts          # Core/Pro data types
    └── role.ts              # Role enum and types
```

## Appendix B: Mark 1 to Mark 2 Section Mapping

| Order | Mark 1 Section | Mark 2 Status | Notes |
|---|---|---|---|
| 1 | Hero | Updated | Glass panel, 3D models, dual CTA |
| 2 | Problem | Updated | SA-specific framing, animated stats |
| 3 | How It Works | Enhanced | 4 steps, interactive network topology |
| 4 | AI Agent | Replaced | Replaced by Agent Manager Hub (tmux metaphor) |
| 5 | Features | Updated | Tabbed: Core / Pro / Subscription |
| 6 | Competition | Updated | Interactive comparison table added |
| 7 | Market | Updated | Animated data visualisations |
| 8 | (new) | Added | Dual Hardware Showcase |
| 9 | (new) | Added | Agent Marketplace |
| 10 | (new) | Added | Tesla + Powerwall Integration |
| 11 | (new) | Added | SA Diaspora |
| 12 | (new) | Added | Investors / Funding Section |
| 13 | (new) | Added | Alpha Community |
| 14 | (new) | Added | For Architects & Designers |
| 15 | Open Source | Updated | Expanded trust section, GitHub stats |
| 16 | Roadmap | Updated | Interactive Gantt, "Notify me" per milestone |
| 17 | Pricing | Updated | Role-tabbed, Core/Pro split |
| 18 | Team | Updated | Advisory board, values, open positions |
| 19 | CTA | Replaced | Role-based 4-card CTA section |
| — | (new — persistent) | Added | Role Router (floating navigation) |

---

*End of Mark 2 Specification Document.*
