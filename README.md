# 🏰 neostronghold

**Intelligent homes, open to everyone.**

> Your home's AI operating system. ⚡ Local-first. 🧠 AI-powered. 🔓 Open-source.

[![Website](https://img.shields.io/badge/neostronghold.com-06b6d4?style=flat-square)](https://neostronghold.com)
[![GitHub](https://img.shields.io/badge/github-neoparadise-8b5cf6?style=flat-square)](https://github.com/neoparadise/neostronghold)
[![License](https://img.shields.io/badge/license-Apache%202.0-22c55e?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square)](https://nextjs.org)

---

## 🌌 What is neostronghold?

neostronghold is a **premium open-source smart home platform** built by **[NeoParadise](https://neoparadise.co.za)** in Cape Town, South Africa. We make AI-powered, local-first home automation that works for everyone — from DIY enthusiasts to luxury estates.

### ✨ The Pitch Deck / Brand Website

This repository contains our **brand website** — a single-page scrollable pitch deck designed to showcase neostronghold to customers, partners, and investors.

| 🔗 | Link |
|---|---|
| 🌐 | **[neostronghold.com](https://neostronghold.com)** |
| 📧 | support@neoparadise.co.za |
| 🐙 | github.com/neoparadise/neostronghold |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.9+ (we recommend 22+)
- **pnpm** 8+

### Run the website locally

```bash
cd web
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### Build for production

```bash
cd web
pnpm build
pnpm start
```

---

## 🗂️ What's Inside

```
neostronghold/
├── web/                    # 🌐 Brand website (Next.js 16 + Tailwind v4 + Three.js)
│   ├── src/
│   │   ├── app/            # Pages (/, /contact)
│   │   ├── components/     # React components
│   │   │   ├── ui/         # shadcn-themed UI primitives
│   │   │   ├── sections/   # Pitch deck sections (20 total)
│   │   │   ├── layout/     # Nav, Footer
│   │   │   └── effects/    # Starfield, scroll-reveal, glass, 3D
│   │   └── lib/            # Constants, fonts, utilities
│   └── public/             # Icons, SVG logo, manifests
│
├── docs/                   # 📚 Strategy & business documents
│   ├── BUSINESS_PLAN.md    # Full business plan (15 sections)
│   ├── PATH_TO_1B.md       # Roadmap from zero to billion-dollar exit
│   ├── HARDWARE_STRATEGY.md
│   ├── AI_PRICING_MODEL.md
│   ├── SOLAR_PARTNERSHIP.md
│   ├── ELON_X_STRATEGY.md  # How to demo on X for @elonmusk
│   ├── YC_APPLICATION.md   # Pre-filled Y Combinator application
│   ├── ARCHITECT_CHANNEL.md
│   ├── DIASPORA_GTM.md
│   └── MARK2_WEBSITE_SPEC.md
│
└── scripts/
    └── convert_logo.py     # 🔄 One-time: PNG → SVG logo converter
```

---

## 🧩 The Product Line

### Hardware

| 🌟 | Product | Codename | Price |
|---|---|---|---|
| 🌐 | Core (cloud router) | **Pulse** | R1,499 |
| 🧠 | Pro (local AI hub) | **Nexus** | R5,999 |
| 🏰 | Pro+ (hardened) | **Bastion** | R9,999 |

### AI Agents

| 🤖 | Agent | Codename | Role |
|---|---|---|---|
| ☀️ | Energy Manager | **Helios** | Solar + battery + grid optimization |
| 🛡️ | Security Guard | **Aegis** | Cameras, gates, armed response |
| 🎩 | Concierge | **Oberon** | Deliveries, guests, intercom |
| 🌬️ | Climate Master | **Zephyr** | HVAC, blinds, comfort |
| 💧 | Water Keeper | **Nereus** | Leaks, irrigation, pools |
| 🚗 | Vehicle Integrator | **Transit** | Tesla Fleet API, charging |

---

## 🎨 Design

| Feature | Detail |
|---|---|
| 🎭 | **Theme** — Cosmic dark, glassmorphism, aurora gradients |
| 🔤 | **Fonts** — Space Grotesk (headings), Inter (body) |
| 🎯 | **3D** — Three.js wireframe globe, canvas starfield, parallax |
| 🪟 | **Glass** — Apple-style `backdrop-filter` with saturation boost |
| 📱 | **Mobile** — Hamburger nav, responsive grids, touch optimization |

---

## 📄 License

Apache 2.0 — see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>🏰 neostronghold</strong> — built with ❤️ in Cape Town, South Africa<br>
  <sub><a href="https://neostronghold.com">neostronghold.com</a> · <a href="mailto:support@neoparadise.co.za">support@neoparadise.co.za</a></sub>
</p>
