export const COMPANY = {
  name: "neostronghold",
  tagline: "Intelligent homes, open to everyone.",
  description:
    "Premium smart home platform built on open-source technology. We make intelligent, AI-powered homes accessible to every South African.",
  company: "NeoParadise",
  location: "Cape Town, South Africa",
  founded: 2026,
  email: "hello@neostronghold.co.za",
  github: "github.com/neoparadise/neostronghold",
} as const

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Agent", href: "#ai-agent" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
] as const

export const ROTATING_WORDS = [
  "intelligent.",
  "secure.",
  "effortless.",
  "energy-smart.",
  "open.",
  "yours.",
]

export const PAIN_POINTS = [
  {
    title: "Fragmented Ecosystem",
    description:
      "Dozens of incompatible apps, brands, and protocols. No single system ties your home together.",
    icon: "Grid3X3",
  },
  {
    title: "Cloud Dependency",
    description:
      "Load-shedding or internet goes down, so does your smart home. Local control should be the standard.",
    icon: "CloudOff",
  },
  {
    title: "Luxury Price or DIY",
    description:
      "Control4 starts at R100k+. The alternative? Fumbling with Sonoff and forum posts. Nothing in between.",
    icon: "ZapOff",
  },
  {
    title: "No Local AI",
    description:
      "Google and Alexa don't understand load-shedding, Eskom schedules, or your inverter. South Africa needs a home-grown solution.",
    icon: "Brain",
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Order Your Kit",
    description:
      "Choose your package online. Your neostronghold hub arrives pre-loaded with our intelligent operating system.",
    icon: "Package",
  },
  {
    step: 2,
    title: "Install & Connect",
    description:
      "Plug in the hub, pair sensors in minutes — or let our team handle the full installation for you.",
    icon: "Zap",
  },
  {
    step: 3,
    title: "Your Home, Intelligent",
    description:
      "Your AI agent learns your routines, manages your energy, and responds via WhatsApp, voice, or app.",
    icon: "Sparkles",
  },
]

export const FEATURES = [
  {
    title: "neostronghold Hub",
    description:
      "The brain of your smart home. Pre-loaded with our OS, Zigbee/Thread built-in, and our AI agent. Runs locally, works without internet.",
    icon: "Cpu",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Sensor Ecosystem",
    description:
      "Door, motion, temperature, leak, and presence sensors. Premium materials, multiple color options, seamless pairing.",
    icon: "Radio",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Solar Integration",
    description:
      "One-click setup for Sunsynk, Deye, GoodWe, and Victron inverters. Smart load management. Battery optimization during load-shedding.",
    icon: "Sun",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "AI Agent",
    description:
      "Meet your home's brain. Natural language control via WhatsApp, Telegram, or voice. Proactive, not reactive. Runs entirely on-device for privacy.",
    icon: "Bot",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Open-Source Core",
    description:
      "Built on Home Assistant with thousands of integrations. Freedom to customize. No vendor lock-in. Ever.",
    icon: "Code2",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "We Manage",
    description:
      "Optional subscription. We monitor, update, and optimise your smart home 24/7. Premium support when you need it.",
    icon: "Shield",
    gradient: "from-cyan-500 to-teal-600",
  },
]

export const COMPETITION_MATRIX = {
  quadrants: [
    {
      label: "Closed / Premium",
      companies: ["Control4", "Loxone", "Crestron"],
      x: 0,
      y: 0,
    },
    {
      label: "Closed / DIY",
      companies: ["Sonoff", "Tuya", "Ring"],
      x: 1,
      y: 0,
    },
    {
      label: "Open / DIY",
      companies: ["Home Assistant"],
      x: 1,
      y: 1,
    },
    {
      label: "Open / Premium",
      companies: ["neostronghold"],
      x: 0,
      y: 1,
      highlight: true,
    },
  ],
}

export const MARKET_STATS = [
  { label: "SA Smart Home Market (2024)", value: "$1.2–2.1B", suffix: "" },
  { label: "Annual Growth Rate", value: "17–31", suffix: "% CAGR" },
  { label: "Solar Adoption Surge (2022–2025)", value: "7.3", suffix: "x growth" },
  { label: "Homes Planning Solar", value: "82", suffix: "%" },
  { label: "Target Households (LSM 8–10)", value: "4–5M", suffix: "" },
  { label: "Western Cape New Builds Share", value: "38", suffix: "%" },
]

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "R5,999",
    description: "Perfect for apartments and small homes. DIY-friendly.",
    features: [
      "neostronghold Hub",
      "6 sensors (3 door, 2 motion, 1 temp)",
      "2 smart relays",
      "Mobile app + web dashboard",
      "WhatsApp AI agent",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Complete",
    price: "R35,000",
    description: "Whole-home automation, professionally installed.",
    features: [
      "Everything in Starter, plus:",
      "Full installation by our team",
      "15+ sensors",
      "Smart switches throughout",
      "Custom dashboard",
      "Solar/inverter integration",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "We Manage",
    price: "R299/mo",
    description: "Sit back. We handle everything.",
    features: [
      "Everything in Complete",
      "24/7 system monitoring",
      "Automatic updates & tuning",
      "Quarterly site visits",
      "Unlimited automations",
      "Unlimited support",
      "Extended warranty",
    ],
    highlighted: false,
  },
]

export const ROADMAP_ITEMS = [
  {
    phase: "MVP",
    timeframe: "Months 1–3",
    items: [
      "neostronghold Hub in branded enclosure",
      "Forked HA OS with pre-built dashboards",
      "Basic WhatsApp AI agent",
      "Starter Kit available for order",
      "5-10 beta homes",
    ],
    active: true,
  },
  {
    phase: "Phase 2",
    timeframe: "Months 4–9",
    items: [
      "ICASA-approved branded sensors",
      "Smart switches (SA wall box compatible)",
      "Sunsynk/Deye one-click solar setup",
      "Cape Town installer partner program",
      "Web store live",
    ],
    active: false,
  },
  {
    phase: "Phase 3",
    timeframe: "Months 10–18",
    items: [
      "Injection-molded own-brand hardware",
      "We Manage subscription live",
      "Solar installer white-label dashboard",
      "100+ installs, 50+ subscribers",
    ],
    active: false,
  },
  {
    phase: "Phase 4",
    timeframe: "Year 2+",
    items: [
      "National expansion (JHB, Durban)",
      "Global self-install e-commerce",
      "Local voice (ZA English, Afrikaans)",
      "B2B for estate developers",
    ],
    active: false,
  },
]

export const TEAM_MEMBERS = [
  {
    name: "Annekin Meyburgh",
    role: "Founder & CEO",
    description:
      "Full-stack developer and smart home enthusiast. Has been building and managing his own smart home for years. Deep expertise in the Home Assistant ecosystem and vision to bring premium smart homes to every South African.",
    initials: "AM",
  },
  {
    name: "Dad",
    role: "Head of Installation",
    description:
      "Qualified electrician with 30+ years of experience in home building and maintenance. Co-manages the family smart home. Certified to issue COCs and lead installation projects.",
    initials: "DM",
  },
  {
    name: "Brother",
    role: "Field Technician",
    description:
      "Qualified tradesman specialising in installation and customer support. Smart home enthusiast and hands-on technical problem solver.",
    initials: "BM",
  },
]

export const CTA_CONTENT = {
  heading: "Ready to make your home intelligent?",
  description:
    "Whether you're building, renovating, or ready to upgrade — we'll help you every step of the way. Based in Cape Town, serving the world.",
  buttonText: "Get in Touch",
  secondaryText: "See the code on GitHub",
}

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Hub", href: "#features" },
      { label: "Sensors", href: "#features" },
      { label: "AI Agent", href: "#ai-agent" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Contact", href: "#cta" },
      { label: "FAQ", href: "#" },
    ],
  },
]
