# AI Developer Guide — neostronghold / NeoParadise

This repository is the **monolith** for **neostronghold** — a premium open-source smart home platform by **NeoParadise** (Cape Town, South Africa).

---

## Overview

neostronghold is an AI-powered smart home platform built on a fork of Home Assistant. This repo contains:

| What | Where | Tech |
|---|---|---|
| 🌐 **Brand website / pitch deck** | `web/` | Next.js 16, Tailwind v4, Three.js, Framer Motion |
| 📚 **Strategy & business docs** | `docs/` | Markdown — business plan, funding strategy, GTM plans |
| 🐍 **Home Assistant fork (backend)** | `core/` | Python 3.14, asyncio, SQLAlchemy (git submodule) |
| 📖 **Reference implementations** | `inspiration/` | HA frontend, openclaw, opencode (git submodules) |
| 🚧 **Main app (coming soon)** | `app/` | React + shadcn + Expo — see `docs/INSPIRATION.md` |

**Do NOT write substantial code in the submodules directly from this repo.** Changes to `core/` and `frontend/` should be committed in their own repos first, then the submodule pointer is updated here.

---

## Quick Start — Website

```bash
cd web
pnpm install
pnpm dev
# → http://localhost:3000
```

### Build

```bash
cd web
pnpm build
pnpm start
```

---

## Repository Structure

```
neostronghold/
├── web/                          # 🌐 Brand website (Next.js 16)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Main landing page (20 sections)
│   │   │   ├── contact/page.tsx  # Contact form with Web3Forms
│   │   │   └── globals.css       # Cosmic theme, glass utilities
│   │   ├── components/
│   │   │   ├── sections/         # 20 pitch deck sections
│   │   │   ├── ui/               # shadcn-themed primitives
│   │   │   ├── layout/           # Nav, Footer
│   │   │   ├── effects/          # Starfield, scroll-reveal, 3D globe
│   │   │   └── contact-provider.tsx  # Contact dialog context
│   │   └── lib/
│   │       ├── constants.ts      # All site data, product info, copy
│   │       ├── fonts.ts          # Space Grotesk + Inter
│   │       └── utils.ts          # cn() helper
│   └── public/                   # SVG logo, icons, favicon, manifest
│
├── docs/                         # 📚 Strategy & business documents
│   ├── BUSINESS_PLAN.md          # Full 15-section business plan
│   ├── PATH_TO_1B.md             # Roadmap from zero to $1B exit
│   ├── HARDWARE_STRATEGY.md      # Pulse/Nexus/Bastion hardware tiers
│   ├── AI_PRICING_MODEL.md       # 4-tier subscription + marketplace
│   ├── SOLAR_PARTNERSHIP.md      # Victron/Sunsynk/Rubicon pitch
│   ├── ELON_X_STRATEGY.md        # X demo playbook for @elonmusk
│   ├── YC_APPLICATION.md         # Pre-filled Y Combinator app
│   ├── ARCHITECT_CHANNEL.md      # CPD course, trade program
│   ├── DIASPORA_GTM.md           # UK/Aus/Portugal/Dubai expansion
│   ├── MARK2_WEBSITE_SPEC.md     # Full website spec (1,044 lines)
│   └── promotions/
│       └── prototype_messages.md # Outreach message templates
│
├── core/                         # 🐍 Python backend (submodule)
├── inspiration/                  # 📖 Reference implementations (submodules)
│   ├── frontend/                 # Home Assistant frontend (Lit)
│   ├── openclaw/                 # Multi-agent orchestration
│   └── opencode/                 # AI agent interface & tool-use
├── app/                          # 🚧 Main app (coming soon)
├── scripts/
│   └── convert_logo.py           # One-time: PNG → SVG logo converter
└── README.md                     # Project readme with emojis
```

---

## Website Sections (20 total)

The landing page is a scrollable pitch deck with these sections in order:

| # | Section | Key Content |
|---|---|---|
| 1 | **Hero** | Three.js 3D globe, rotating text, role CTAs |
| 2 | **Problem** | 4 pain point cards |
| 3 | **How It Works** | 3-step journey |
| 4 | **Hardware Showcase** | Pulse (Core) + Nexus (Pro) with CSS device renders |
| 5 | **Agent Hub** | tmux-like multi-agent workspace |
| 6 | **AI Agent** | WhatsApp chat mockup demo |
| 7 | **Features** | 6 product feature cards |
| 8 | **Tesla Integration** | Fleet API features, Powerwall |
| 9 | **Agent Marketplace** | 6 category cards with agent counts |
| 10 | **For Architects** | CPD course, trade partner benefits |
| 11 | **SA Diaspora** | 4-country market expansion cards |
| 12 | **Competition** | 2×2 matrix (Open vs Closed × Premium vs DIY) |
| 13 | **Market** | 6 stat cards with market data |
| 14 | **Pricing** | 3 tiers (Plus/Pro/Installer) + quotation option |
| 15 | **Open Source** | Philosophy, GitHub CTA |
| 16 | **Roadmap** | Multi-step interactive stepper (4 phases) |
| 17 | **Alpha Community** | Neighbor testimonials |
| 18 | **Team** | Annekin (CEO) + Corrie (Installation) |
| 19 | **Investors** | 6 key metrics + deck request CTA |
| 20 | **CTA / Contact** | Email capture with Web3Forms integration |

---

## Design System

| Token | Value |
|---|---|
| **Theme** | Cosmic dark, glassmorphism |
| **Primary** | HSL 196 94% 48% (electric cyan) |
| **Secondary** | HSL 263 70% 50% (nebula purple) |
| **Background** | HSL 228 30% 6% (deep space) |
| **Glass** | `blur(20px) saturate(180%) brightness(110%)` |
| **Fonts** | Space Grotesk (headings), Inter (body), JetBrains Mono (code) |
| **Radius** | 1rem (16px) — consistent across all cards |

---

## Key Scripts

```bash
cd web
pnpm dev          # Start dev server on :3000
pnpm build        # Production build
pnpm lint         # ESLint check
```

---

## Submodule Usage

The `core/` and `inspiration/` directories contain git submodules. They are maintained separately:

```bash
# Pull latest from all submodules
git submodule update --remote --merge

# Update a specific submodule
git submodule update --remote --merge core
git submodule update --remote --merge inspiration/frontend
git submodule update --remote --merge inspiration/openclaw
git submodule update --remote --merge inspiration/opencode

# Commit submodule pointer change
git add core inspiration
git commit -m "chore: update submodules to latest main"
```

---

## Environment Variables

| Variable | Required For | Where to Set |
|---|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form email sending | `.env.local` in `web/` |

---

## Deployment

The website is deployed on **Vercel** (linked to GitHub — push to `main` auto-deploys to neostronghold.com).
