# Hardware Strategy — Citadel Evolve

**Revision 1.0**
**Classification: Internal — Strategic**

---

## 1. Executive Summary

Citadel Evolve will launch a three-tier hardware line that mirrors the "Tesla Roadster" playbook: start premium to define the category, then expand downmarket. The strategy positions Citadel Evolve as the premium, design-forward, prosumer alternative in the smart home controller space — a category currently split between mass-market plastic hubs (Home Assistant Green, Homey Pro) and enterprise-grade integrated systems (Control4, Crestron, Josh.ai).

| Tier | Product Name | Target Price | Target Margin | Role |
|---|---|---|---|---|
| Core | Citadel Evolve Core | R1,499 | 46% | Entry-level cloud router, Wi-Fi only, plastic enclosure, managed subscription. Competes with Home Assistant Green at a premium but with better design and local support. |
| Pro | Citadel Evolve Pro | R5,999 | 46% | Local AI hub. CNC aluminum unibody, translucent polycarbonate accent, custom PCB, modular compute slot. The halo product that defines the brand. |
| Pro+ | Citadel Evolve Pro+ | R9,999 | 45% | Hardened industrial hub. IP65, DIN-rail, dual PoE Ethernet. Designed for solar installers, security integrators, and off-grid deployments. |

---

## 2. Market Gap Analysis

### 2.1 Mass-Market Segment (Sub-R2,000)

| Product | Price | Weakness | Citadel Opportunity |
|---|---|---|---|
| Home Assistant Green | ~R1,800 (USD $99) | Plastic, no local AI, cloud-dependent, no SA warranty/support | Core matches price but adds local managed support, premium aesthetic, subscription bundling |
| Homey Pro | ~R8,000 (EUR 449) | Plastic enclosure, no modular compute, cloud-reliant for many features | Core undercuts at R1,499, Pro competes at R5,999 with superior materials |
| Amazon Echo / Google Nest Hub | R1,000–R3,000 | Closed ecosystems, data-mining business model, limited local control | Privacy-first positioning, local processing, open architecture |

**Gap:** No product in this segment offers premium industrial design AND local-first architecture with South African regulatory approval and local warranty support.

### 2.2 Prosumer Segment (R4,000–R8,000)

| Product | Price | Weakness | Citadel Opportunity |
|---|---|---|---|
| Home Assistant Yellow | ~R2,700 (USD $149) | Plastic translucent case, limited compute (CM4/CM5), no CNC, no local support | Pro offers CNC aluminum, better thermals, upgradeable compute module, SA support |
| Homey Pro (Bridge) | ~R8,000 | Plastic, closed app store model, cloud-dependent | Pro at R5,999 undercuts by 25% with open architecture and superior build quality |

**Gap:** The "tech you want to display" segment is empty. No smart home hub uses CNC aluminum, modular compute, or design-forward materials. Home Assistant Yellow proved demand (USD $1.67M raised on Crowd Supply) with a translucent polycarbonate case. The market is ready for the next step up in materials and modularity.

### 2.3 Enterprise / Integration Segment (R8,000+)

| Product | Price | Weakness | Citadel Opportunity |
|---|---|---|---|
| Control4 Core 5 | ~R15,000–R25,000 | Closed ecosystem, dealer-only install, proprietary hardware | Pro+ at R9,999 with open architecture, no dealer lock-in, DIN-rail for solar/security |
| Crestron Pyng | ~R20,000–R40,000 | Proprietary, dealer-only, extortionate licensing | Pro+ open-source, no licensing fees, direct-to-installer model |
| Josh.ai Nano | ~R15,000+ | Cloud-dependent for NLP, limited hardware I/O | Pro+ runs local LLM/voice, no cloud dependency, richer I/O |
| Home Assistant (DIY) | ~R3,000–R6,000 (RPi + accessories) | No warranty, no case, no support, not DIN-railable | Pro+ is a complete, supported, certified product |

**Gap:** No open-source smart home controller exists in a hardened, DIN-rail-mountable, IP65-rated form factor. Solar installers and security integrators currently wire Raspberry Pis into junction boxes or pay 2x–3x for Control4/Crestron.

---

## 3. Product Specifications

### 3.1 Citadel Evolve Core (Cloud Router)

| Specification | Detail |
|---|---|
| **Processor** | Realtek RTD1319 or MediaTek MT7981 (dual-core ARM Cortex-A55, 1.5 GHz) |
| **Memory** | 2 GB DDR4 |
| **Storage** | 32 GB eMMC |
| **Networking** | Wi-Fi 6 (802.11ax), 1x Gigabit Ethernet WAN, 2x Gigabit Ethernet LAN |
| **Z-Wave / Zigbee** | Optional USB dongle (not integrated) |
| **Bluetooth** | Bluetooth 5.2 LE |
| **AI Acceleration** | None (cloud-dependent for voice/NLP) |
| **Power** | 12V DC, 2A (USB-C input) |
| **Enclosure** | ABS plastic, textured matte finish, ventilated top surface |
| **Dimensions** | 140 x 100 x 30 mm |
| **Weight** | ~250 g |
| **Mounting** | Desktop |
| **Operating System** | OpenWrt-based with Citadel Evolve supervisor layer |
| **Management** | Cloud-managed via Citadel Mobile App, optional local web UI |
| **Subscription** | Required for cloud features (remote access, AI, backups) |
| **Target COGS** | ~R800 |
| **Target Retail** | R1,499 |

### 3.2 Citadel Evolve Pro (Local AI Hub) — The Roadster

| Specification | Detail |
|---|---|
| **Processor** | Custom carrier board; accepts removable compute module (see Section 10) |
| **Default Compute** | Raspberry Pi CM5 or compatible (purchased separately or bundled) |
| **Memory** | Dependent on compute module (8–32 GB LPDRR4X) |
| **Storage** | M.2 2230 NVMe slot (user-installable) |
| **Networking** | Wi-Fi 6E, 1x 2.5 GbE, 1x Gigabit Ethernet |
| **Z-Wave / Zigbee** | Integrated Silicon Labs MGM210 (Z-Wave 800 series + Zigbee/Thread) |
| **Matter / Thread** | Integrated Thread radio (via MGM210 or dedicated nRF52840) |
| **Bluetooth** | Bluetooth 5.2 LE (integrated) |
| **AI Acceleration** | M.2 key B slot for NPU (e.g., Hailo-8L / Coral TPU) |
| **Local Voice** | Dual digital MEMS microphones (Knowles SPH0645LM4H), 3.5mm audio out |
| **Display** | 1.28" round AMOLED (optional status display — like the Nothing Phone glyph area) |
| **Expansion** | 2x USB 3.0 Type-A, 1x USB-C (data + power), 40-pin GPIO header (internal) |
| **Power** | 12V DC, 3A (barrel jack) with USB-C PD fallback (optional) |
| **Cooling** | Passive heatsink through aluminum unibody (fanless), optional active fan for NPU load |
| **Enclosure** | CNC machined aluminum 6061 unibody, translucent polycarbonate accent band (side-lit with addressable RGB for status indication), anodized finish |
| **Colors** | Space Grey, Silver, Midnight Blue (limited run: Translucent Smoke) |
| **Dimensions** | 160 x 110 x 35 mm |
| **Weight** | ~650 g |
| **Mounting** | Desktop (rubber feet), optional VESA mount bracket |
| **Operating System** | Citadel Evolve OS (forked Home Assistant OS + private components) |
| **Management** | Local-first, cloud-optional |
| **Subscription** | Optional (cloud backups, remote relay, advanced AI) |
| **Target COGS (no CM)** | ~R3,200 |
| **Target Retail (no CM)** | R5,999 |

### 3.3 Citadel Evolve Pro+ (Hardened Industrial Hub)

| Specification | Detail |
|---|---|
| **Processor** | MediaTek MT8395 or Rockchip RK3588 (octa-core, 4x A76 + 4x A55) |
| **Memory** | 8 GB LPDDR4X (soldered) |
| **Storage** | 64 GB eMMC + M.2 2280 NVMe slot |
| **Networking** | 2x 2.5 GbE with PoE PD (802.3af/at) on both ports, Wi-Fi 6E |
| **Z-Wave / Zigbee** | Integrated Silicon Labs MGM210 |
| **Matter / Thread** | Integrated nRF52840 (Thread, BLE, Matter) |
| **Bluetooth** | Bluetooth 5.2 LE |
| **AI Acceleration** | Integrated 6 TOPS NPU (RK3588 NPU) + M.2 key M for add-on |
| **Local Voice** | Far-field microphone array (3x PDM MEMS), speaker out, line-in |
| **Display** | None (headless) |
| **I/O** | 2x USB 3.0 Type-A, 1x USB-C (OTG), isolated RS-485, 2x isolated dry-contact relay outputs, 4x isolated digital inputs (12–24V) |
| **Power** | PoE PD (802.3af/at) + 12–24V DC terminal block (redundant input) |
| **Cooling** | Passive (finned aluminum enclosure) |
| **Enclosure** | CNC aluminum, IP65-rated with gasketed seals, powder-coated, DIN-rail mount (TS35) with integrated clips, tool-less cover removal |
| **Colors** | Industrial White, Signal Black |
| **Dimensions** | 180 x 110 x 55 mm |
| **Weight** | ~1,200 g |
| **Mounting** | DIN-rail TS35 (included), optional wall-mount bracket |
| **Operating System** | Citadel Evolve OS (industrial variant) |
| **Management** | Local-first with remote fleet management for installers |
| **Subscription** | Required for fleet management, remote monitoring, centralized backup |
| **Target COGS** | ~R5,500 |
| **Target Retail** | R9,999 |
| **Target B2B (installers)** | R7,500 (bulk 10+) |

---

## 4. Industrial Design Language

### 4.1 Design Philosophy

Citadel Evolve hardware follows three principles:

1. **Considered Industrial** — Every detail serves function. Vents are designed for airflow. Chamfers guide cable routing. The device looks like it was engineered, not molded.
2. **Tech Transparency** — The translucent polycarbonate accent band is a deliberate reference to the "see the tech" aesthetic (Nothing, Home Assistant Yellow, Framework's expansion cards). It signals openness. Addressable RGB behind the band indicates system status at a glance (green = healthy, amber = updating, red = fault).
3. **Material Honesty** — Aluminum is machined, not spray-painted plastic. Polycarbonate is transparent, not tinted to hide. The device communicates its quality through material choice, not surface finishing alone.

### 4.2 Materials Palette

| Material | Application | Rationale |
|---|---|---|
| 6061-T6 Aluminum | Pro chassis, Pro+ chassis, Core internal shield | Machinable, anodizable, excellent thermal conductivity for passive cooling |
| Polycarbonate (Makrolon 2456) | Pro accent band, Core front panel | Impact-resistant, translucent, flame-retardant rating UL94 V-0 |
| ABS (Cycolac MG94) | Core chassis | Cost-effective, good surface finish, UL94 HB |
| Silicone (gasketed) | Pro+ sealing IP65, Core/Pro rubber feet | UV-stable, compression-set resistant |
| Tempered Glass | Pro optional display cover | Scratch-resistant, optical clarity for AMOLED |
| Stainless Steel | Fasteners, DIN-rail clips, internal standoffs | Corrosion resistance, threaded insert compatibility for aluminum |

### 4.3 Colorways

| Tier | Standard Colors | Limited Edition |
|---|---|---|
| Core | Matte Black, Satin White | — |
| Pro | Space Grey, Silver | Translucent Smoke (1st run), Midnight Blue |
| Pro+ | Industrial White (RAL 9016), Signal Black (RAL 9004) | — |

### 4.4 Branding

The Citadel Evolve logo is laser-etched on the aluminum surface (Pro/Pro+) or pad-printed (Core). No adhesive badges. The translucent band glows with the Citadel mark subtly debossed.

### 4.5 Packaging

Unboxing is a deliberate experience. The Pro ships in a two-piece rigid box with a magnetic closure, die-cut EVA foam insert, and a "welcome card" with setup instructions printed on 300gsm recycled stock with soy-based ink. The device is presented face-up with the translucent band visible through a cutout.

Core ships in retail-ready printed carton (FSC-certified, 80% recycled) with a molded pulp tray. No plastic wrap.

Pro+ ships in corrugated carton with foam inlay, suitable for reshipment by installers.

---

## 5. Manufacturing Plan

### 5.1 Stage 1: Prototyping (Q2 2026 – Q3 2026)

| Activity | Duration | Cost Estimate | Notes |
|---|---|---|---|
| 3D-printed form-factor models (SLA) | 2 weeks | R15,000 | Validate ergonomics, thermal mockup, button feel |
| PCB prototyping (4-layer, JLCPCB) | 3 weeks | R25,000 per rev | 3 revs expected: bringup, validation, pre-production |
| CNC sample (single-unit, China Prototype Lab) | 3 weeks | R12,000 | Validate machining tolerances, anodizing match |
| Polycarbonate sample (vacuum cast) | 2 weeks | R8,000 | Confirm light bleed, RGB diffuser test |
| Regulatory pre-scan (FCC/ICASA prescan) | 4 weeks | R35,000 | Identify emissions issues before production tooling |
| **Total Stage 1** | **~14 weeks** | **~R95,000** | |

**Deliverable:** 10 hand-assembled units, 2 per tier, for internal validation and photography.

### 5.2 Stage 2: Pilot Run — 50 Units (Q4 2026)

| Activity | Duration | Cost Estimate | Notes |
|---|---|---|---|
| CNC: soft tooling (jig/fixture) + 50 units | 6 weeks | R120,000 | Single MIM or jig-based machining, not hard tooling |
| PCB: 50-unit run (full turnkey) | 4 weeks | R85,000 | Includes stencil, pick-and-place, reflow |
| Polycarbonate: RIM (reaction injection molding) | 3 weeks | R35,000 | Low-volume tool for accent band |
| Assembly: hand assembly (local workshop) | 2 weeks | R20,000 | Cape Town electronics assembly house |
| Firmware: production bringup | 6 weeks | R40,000 | PCB rev C, bootloader, OTA, factory test suite |
| **Total Stage 2** | **~10 weeks (parallel flows)** | **~R300,000** | |

**Deliverable:** 50 fully assembled units (30 Pro, 10 Pro+, 10 Core) for beta testers, media, certification samples, and photography.

### 5.3 Stage 3: Low-Volume Production — 500 Units (Q1 2027)

| Activity | Duration | Cost Estimate | Notes |
|---|---|---|---|
| CNC: hard tooling (4-spindle CNC, 6061 billet) | 8 weeks | R180,000 | Tooling amortized over 500 units = R360/unit |
| Injection mold: polycarbonate accent band | 6 weeks | R85,000 | Single-cavity mold, steel P20 |
| Injection mold: Core ABS enclosure | 6 weeks | R120,000 | Two-cavity mold (top + bottom) |
| PCB: 500-unit turnkey | 4 weeks | R165,000 | R330/unit at component cost ~R170 |
| Assembly: semi-automated line | ongoing | R55,000 | Labor + test + packing at R110/unit |
| Certification (FCC/CE/ICASA/NRCS) | 12 weeks | R250,000 | Concurrent with production |
| **Total Stage 3** | **~14 weeks (to first ship)** | **~R855,000 (tooling) + ~R250/unit COGS** | |

**Deliverable:** 500 sellable units, fully certified, boxed, with documentation.

### 5.4 Stage 4: Scale Production — 2,000+ Units (Q2 2027)

| Activity | Cost Estimate |
|---|---|
| CNC: transfer to multi-axis CNC mill (production line) | Tooling already paid; unit cost drops to ~R180 |
| Injection mold: add second cavity for Pro accent band | R55,000 additional |
| PCB: scale to 1,000-unit batch pricing | R290/unit |
| Assembly: dedicated line with automated test | R75/unit |
| **Unit COGS at 2,000/mo** | See Section 6 |

### 5.5 Manufacturing Timeline Summary

| Phase | Period | Units | Cumulative |
|---|---|---|---|
| Prototyping | Q2–Q3 2026 | 10 | 10 |
| Pilot | Q4 2026 | 50 | 60 |
| Low-volume | Q1 2027 | 500 | 560 |
| Scale | Q2 2027+ | 2,000/mo | Ongoing |

---

## 6. BOM Breakdown

### 6.1 Core (Cloud Router) — Bill of Materials

| Component | Part Number / Source | Price (R, 500 units) | Price (R, 2,000 units) |
|---|---|---|---|
| SoC + RAM + eMMC | MediaTek MT7981 (integrated package) | 285 | 245 |
| Wi-Fi 6 module | MT7976 (internal, on PCB) | 75 | 60 |
| Ethernet PHY | Realtek RTL8211F (x3) | 60 | 50 |
| Power management | MP8859 + discrete | 45 | 38 |
| Flash | 32 GB eMMC + 128 Mb SPI NOR | 55 | 48 |
| PCB (4-layer, 1.6 mm FR4) | JLCPCB or PCBWay | 45 | 28 |
| Passive components | Resistors, caps, inductors — Yageo/Murata | 35 | 28 |
| Connectors | RJ45 (x3), USB-C, barrel jack | 30 | 22 |
| Enclosure — ABS top + bottom | Injection-molded, local or China | 55 | 38 |
| Heatsink | Stamped aluminum, adhesive | 18 | 12 |
| Antenna | 2x PCB trace + external (optional) | 10 | 8 |
| PSU | 12V/2A, wall wart, SA plug | 42 | 35 |
| Packaging + manual | Printed cardboard + insert | 25 | 18 |
| **Total BOM** | | **R780** | **R630** |
| **Overhead (test, scrap, logistics 12%)** | | R94 | R76 |
| **Total COGS** | | **R874** | **R706** |
| **Target Retail** | | **R1,499** | **R1,499** |
| **Margin** | | **42%** | **53%** |

### 6.2 Pro (Local AI Hub) — Bill of Materials

| Component | Part Number / Source | Price (R, 500 units) | Price (R, 2,000 units) |
|---|---|---|---|
| Custom carrier PCB (8-layer, ENIG) | PCBWay or domestic | 145 | 95 |
| Compute module | Raspberry Pi CM5 (4 GB) — pass-through | 0 (pass-through) | 0 (pass-through) |
| Z-Wave/Zigbee module | Silicon Labs MGM210P | 145 | 120 |
| Wi-Fi/BT module | AzureWave AW-CU427 (BCM43752) | 85 | 70 |
| Ethernet PHY | RTL8221B (2.5 GbE) + RTL8211F (1 GbE) | 85 | 70 |
| M.2 connectors (NVMe + B-key) | 2x M.2 sockets | 22 | 16 |
| USB 3.0 hub | Genesys GL3523 | 28 | 22 |
| Display | 1.28" round AMOLED (LCD variant optional) | 145 | 110 |
| Power management | MP5470 + USB-C PD controller | 75 | 60 |
| Analog audio | DAC (TLV320AIC3104) + op-amps | 48 | 38 |
| MEMS mics | 2x Knowles SPH0645LM4H | 25 | 18 |
| Passive + discrete | Capacitors, resistors, inductors, ferrites | 65 | 48 |
| Connectors | RJ45 (x2), USB-A (x2), USB-C, barrel, GPIO header, display FFC | 55 | 40 |
| CNC aluminum unibody | CNC-machined 6061, anodized | 580 | 380 |
| Polycarbonate accent band | Injection-molded, translucent | 65 | 42 |
| Addressable RGB LEDs | 8x SK6812MINI + diffuser | 22 | 16 |
| Heatsink (CNC integral) | Part of unibody | — | — |
| Internal bracket + fasteners | Stainless steel, threaded inserts | 38 | 28 |
| PSU | 12V/3A, barrel jack + USB-C cable | 55 | 42 |
| Packaging | Rigid box + EVA foam + welcome card | 85 | 58 |
| **Total BOM** | | **R1,768** | **R1,273** |
| **Compute module (retail pass-through, CM5 4GB)** | | ~R900 | ~R850 |
| **Total BOM with CM** | | **R2,668** | **R2,123** |
| **Overhead (test, scrap, logistics 15%)** | | R400 | R318 |
| **Total COGS (bundled)** | | **R3,068** | **R2,441** |
| **Target Retail (bundled w/ CM5 4GB)** | | **R5,999** | **R5,499** |
| **Target Retail (carrier only)** | | **R4,499** | **R3,999** |
| **Margin (bundled)** | | **48.9%** | **55.6%** |

### 6.3 Pro+ (Hardened Industrial Hub) — Bill of Materials

| Component | Part Number / Source | Price (R, 500 units) | Price (R, 2,000 units) |
|---|---|---|---|
| SoC + PMU | Rockchip RK3588 + RK806 | 420 | 350 |
| LPDDR4X | 8 GB, soldered (4x Samsung K4U6E3S4AM) | 280 | 230 |
| eMMC | 64 GB Kingston EMMC64G-M627 | 95 | 75 |
| Z-Wave/Zigbee | Silicon Labs MGM210P | 145 | 120 |
| Thread/Matter | nRF52840 module | 65 | 50 |
| Wi-Fi/BT | AzureWave AW-CU427 | 85 | 70 |
| Ethernet PHY + PoE | 2x RTL8221B + 2x PoE PD controller (TPS2373) | 180 | 145 |
| M.2 slot | M.2 2280 (PCIe 3.0 x4) | 12 | 8 |
| RS-485 transceiver | SP3485 (isolated, + ADuM1201) | 58 | 45 |
| Relay outputs | 2x G5V-2-H1 (Omron) + driver | 45 | 35 |
| Digital inputs | Optocoupler (TCLT1019) + TVS | 32 | 24 |
| Far-field mics | 3x PDM MEMS (Knowles) | 35 | 26 |
| Audio | I2S DAC + amp (MAX98357) | 28 | 20 |
| PCB | 10-layer, ENIG, 2 oz copper, thicker stack | 195 | 130 |
| Passive + discrete | Industrial temp range (-40 to +85C) | 95 | 75 |
| Connectors | M12 vs RJ45 (2x), terminal block, USB-C, USB-A | 95 | 72 |
| CNC aluminum enclosure | IP65-rated, gasketed, powder-coated, DIN-rail clip | 920 | 650 |
| Gaskets + seals | Silicone, custom extrusion | 45 | 30 |
| DIN-rail clip | Steel, spring-loaded (included) | 18 | 12 |
| Thermal management | Aluminum finned heatsink (integral to enclosure) | — | — |
| PSU | None (PoE powered); optional 12V DC terminal block | 0 | 0 |
| Packaging | Corrugated carton + foam inlay + install sheet | 45 | 32 |
| **Total BOM** | | **R2,893** | **R2,199** |
| **Overhead (test, scrap, logistics 15%)** | | R434 | R330 |
| **Total COGS** | | **R3,327** | **R2,529** |
| **Target Retail** | | **R9,999** | **R8,999** |
| **Target B2B (bulk 10+)** | | **R7,500** | **R6,500** |
| **Margin (retail)** | | **66.7%** | **71.9%** |
| **Margin (B2B)** | | **55.5%** | **61.1%** |

### 6.4 Sourcing Strategy

| Category | Tier | Primary Source | Secondary Source | Local (SA) Option |
|---|---|---|---|---|
| Compute modules | Pro | Raspberry Pi (direct, authorized reseller) | Seeed Studio, Mouser | PiShop (Johannesburg) — stock CM5 |
| Wireless modules | All | Mouser / DigiKey (Silicon Labs, AzureWave) | LCSC, Alibaba | — |
| PCB fabrication | Pro/Pro+ | PCBWay (China) — 8-layer, ENIG | JLCPCB (6-layer, cost-optimized for Core) | Myriad PCB (Cape Town) — 4-layer only |
| CNC machining | Pro/Pro+ | Shenzhen prototyping cluster (3–5 day turnaround) | Dongguan CNC factory (1000+ unit runs) | Local CNC workshop (Cape Town) — premium but SA-made badge |
| Injection molding | Core/Pro band | China tooling + local molding (with SA mold) | — | Tooltech (Johannesburg) — mold-making + production |
| Passive components | All | Yageo (via Mouser/Digikey) | Walsin, Uniohm (via LCSC) | — |
| PSU / wall warts | All | Shenzhen supplier (custom branding) | Alibaba generic (safety certified) | SA plug certification required |
| Packaging | All | Local (Cape Town printer) | — | Printed纸业 (Cape Town), box factory (Pinetown) |
| Assembly | Pro/Pro+ | Local (Cape Town EMS) | China turnkey (for Core at scale) | Cape Electronics Manufacturing, 30dB Electronics |

---

## 7. Supply Chain

### 7.1 Risk Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| CM5 shortage | Pro delayed, carrier-only sales only | Stockpile 6 months of CM5 at PiShop; offer carrier-only SKU; maintain RK3588-based alternative carrier design |
| Silicon lead times | Wireless module (MGM210) shortage | Design for MGM210 + MGM210L (lower cost) + MGM240 (Thread) pin-compatibility; hold 3-month buffer |
| CNC capacity | Pro/Pro+ enclosure delay | Dual-source with two CNC factories pre-qualified; maintain soft tooling for alternative machine shop |
| Geopolitical (Taiwan strait) | All silicon supply disrupted | Hold 6-month buffer on all active components; maintain BOM variant using Chinese-manufactured alternatives (e.g., Loongson or Rockchip replacing Broadcom) |
| SA customs delays | All inbound components delayed | Use CPT (Cape Town) sea freight + air bridge for critical components; maintain 2-month safety stock at local warehouse |
| Tooling damage | Injection mold breaks | Insure molds; maintain mold repair contract with toolmaker; specify P20/H13 steel (not aluminium) |

### 7.2 Dual Sourcing Commitment

Every active component on the Pro and Pro+ BOM has a qualified second source. Where possible, the PCB layout includes alternate footprint options (e.g., dual pad pattern for two regulator ICs). This increases PCB cost ~5% but eliminates single-point-of-failure risk.

### 7.3 Local Assembly (SA)

All Pro and Pro+ assembly will be done in Cape Town through a contract electronics manufacturer (EMS). This enables:

- **"Assembled in South Africa"** branding (tariff benefit, market differentiation)
- **Lower air freight cost** (PCB + components shipped flat, assembled locally)
- **Quality control** (direct factory visits, no language barrier)
- **Local warranty repair** (same facility handles RMA)

Core, being higher volume and lower margin, may move to China turnkey assembly at scale (Stage 4+).

### 7.4 Logistics

| Route | Mode | Transit | Cost/kg | Notes |
|---|---|---|---|---|
| Shenzhen → CPT | Sea (FCL 20 ft) | 25–30 days | $0.50–0.80 | Component-level, 2-month cycle |
| Shenzhen → CPT | Air | 5–7 days | $4–6 | Emergency top-up only |
| Local (CPT assembly → JHB warehouse) | Road | 2 days | R1.50/kg | Weekly distribution run |
| CPT → International | Air (DDP) | 3–5 days | $8–12 | Direct-to-customer for global sales |

---

## 8. Regulatory Roadmap

### 8.1 Required Approvals

| Market | Approval | Body | Cost (R) | Timeline | Notes |
|---|---|---|---|---|---|
| South Africa | Type Approval | ICASA | 35,000 | 8–12 weeks | Required for any wireless device sold in SA; includes RF testing at approved lab (SABS, Akhani, or CSIR) |
| South Africa | Safety | NRCS (SANS 60950-1 / SANS 62368-1) | 25,000 | 6–8 weeks | Mandatory for PSU; loop-in with ICASA submission |
| South Africa | EMC | NRCS (SANS 55032 / SANS 55024) | 20,000 | 4–6 weeks | Often bundled with ICASA test |
| USA | Wireless | FCC (Part 15) | 60,000 | 8–12 weeks | Via FCC-recognized lab (e.g., Curtis-Straus, UL) |
| USA | Safety | UL / ETL | 40,000 | 8–10 weeks | Optional but strongly recommended for US retail |
| EU | Wireless + EMC | CE (RED Directive 2014/53/EU) | 45,000 | 8–12 weeks | Via EU Notified Body; self-declaration for some modules |
| EU | Safety | CE (LVD) | 20,000 | 4–6 weeks | |
| UK | Wireless + Safety | UKCA | 25,000 | 6–8 weeks | Post-Brexit; separate from CE |
| RoHS | All | Self-declaration | 5,000 | Ongoing | Required for EU; SA follows voluntarily |
| WEEE | EU | Registration | 3,000/yr | Per country | E-waste compliance |

### 8.2 Total Regulatory Budget

| Phase | Cost (R) | Milestone |
|---|---|---|
| Pre-scan (FCC + ICASA) | 35,000 | Before pilot run — ensures no design re-spin needed |
| Full certification (SA first) | 80,000 | ICASA + NRCS safety + NRCS EMC |
| FCC | 60,000 | US launch (Stage 3) |
| CE + UKCA | 70,000 | EU/UK launch (Stage 3–4) |
| **Total (all markets)** | **~R245,000** | |
| **Annual maintenance** | ~R15,000 | ICASA annual license, FCC renewal, CE DoC updates |

### 8.3 Strategy

1. **Certify SA first** — The primary market. ICASA type approval is the gating item for domestic sales.
2. **Leverage modular certification** — The Silicon Labs MGM210P has pre-certification (FCC/CE/ICASA) as a module. This significantly reduces per-product testing cost for the wireless subsystem.
3. **FCC/CE via pre-scanned design** — The pre-scan in Stage 1 identifies any emissions issues before production tooling is cut, avoiding costly re-spins.
4. **Self-declaration where possible** — For CE, use the RED self-declaration route (Annex III) if the radio module is pre-certified and the host meets harmonized standards.

---

## 9. Pricing & Margin Strategy

### 9.1 Retail Pricing

| Tier | SKU | Price (incl. VAT) | COGS (500 units) | Margin | COGS (2,000 units) | Margin (scale) |
|---|---|---|---|---|---|---|
| Core | Core (no subscription) | R1,499 | R874 | 41.7% | R706 | 52.9% |
| Core | Core + 1yr Managed | R2,099 | R874 + R180 (subscription COGS) | 49.8% bundle | R706 + R150 | 59.2% bundle |
| Pro | Carrier only (no CM) | R4,499 | R2,128 | 52.7% | R1,611 | 64.2% |
| Pro | Bundled w/ CM5 4GB | R5,999 | R3,068 | 48.9% | R2,441 | 59.3% |
| Pro | Bundled w/ CM5 8GB | R6,999 | R3,268 | 53.3% | R2,641 | 62.3% |
| Pro+ | Pro+ | R9,999 | R3,327 | 66.7% | R2,529 | 74.7% |

### 9.2 B2B Pricing

| Tier | Volume | Price (ex VAT) | Margin |
|---|---|---|---|
| Pro+ | 10–49 units | R7,500 | 55.5% (500 unit COGS) |
| Pro+ | 50+ units | R6,500 | 61.1% (2,000 unit COGS) |
| Pro (carrier only) | 50+ units | R3,200 | 50.3% (500 unit) |
| Core | 100+ units | R1,100 | 20.5% (500 unit) — volume strategy |

### 9.3 Subscription Bundles

| Tier | Subscription | Price/mo | Annual | COGS (cloud infra) | Margin |
|---|---|---|---|---|---|
| Core | Managed (remote access, cloud AI, backup, VPN) | R49 | R499 | R18/mo | 63% |
| Pro | Cloud Sync (off-site backup, remote relay, advanced NLP) | R29 | R299 | R10/mo | 65% |
| Pro+ | Fleet Manager (multi-site monitoring, central backup, config push) | R79/device | R799/device | R22/device/mo | 72% |
| Pro+ | Installer Partner (fleet + NOC + white-label mobile app) | R199/account | R1,999/account | R45/account/mo | 77% |

### 9.4 Margin Strategy by Tier

- **Core**: Thin margin on hardware (42–53%), fat on subscription (63%). The Core is a subscription acquisition vehicle. Break even on hardware in 6–8 months of managed subscription.
- **Pro**: Strong hardware margin (49–64%) + optional high-margin subscription (65%). The product carries its own weight on hardware alone.
- **Pro+**: Exceptional hardware margin (67–75%) + high-value B2B subscription (72–77%). This is the profit engine.

---

## 10. Upgrade / Modular Path (Framework Model)

### 10.1 Compute Module Slot — The Framework Strategy

The Pro is designed around a **removable compute module** — initially the Raspberry Pi CM5, with a roadmap for CM6, and an internal alternative based on Rockchip RK3582. This mirrors the Framework laptop's approach: the carrier board is the investment; the compute is replaceable.

**Why this matters:**

- **Upgrade revenue**: Customer buys the Pro carrier at R4,499. In 2–3 years, they upgrade to a CM6 for ~R1,200 instead of replacing the whole unit. Citadel sells the CM upgrade at 20% margin (vs 50% on a new unit) but with zero incremental manufacturing cost.
- **Lower entry price**: The carrier-only SKU at R4,499 is the lowest-cost entry to premium hardware. Customers can bring their own CM5 or buy later.
- **Risk reduction**: If the CM5 is backordered, customers can still buy the carrier and install a CM later. Citadel is not bottlenecked by the Pi supply chain.

### 10.2 Compute Module Roadmap

| Generation | SoC | RAM Options | AI Acceleration | Target Release | Upgrade Price |
|---|---|---|---|---|---|
| CM5 (Pi) | BCM2712 (Cortex-A76, 4x) | 4 / 8 GB LPDDR4X | Via M.2 B-key | Launch (Q1 2027) | R900–R1,400 (retail, pass-through) |
| CE-CM1 (Citadel custom) | RK3582 (Cortex-A76, 4x + A55, 4x) | 8 / 16 GB LPDDR5 | Integrated 6 TOPS NPU | Q3 2028 | R1,800–R2,800 |
| CE-CM2 (Citadel custom) | Next-gen ARM (TBA) | 16 / 32 GB LPDDR5X | Integrated 20+ TOPS NPU | Q3 2029 | R2,800–R3,800 |
| CE-CM3 (Citadel custom) | TBA | 32 / 64 GB | TBA — AI-focused | 2030+ | TBA |

### 10.3 Modular Accessories

The Pro's M.2 slots and GPIO header enable a family of first-party accessories:

| Accessory | Price (R) | Margin | Description |
|---|---|---|---|
| Hailo-8L NPU module (M.2 B-key) | 1,200 | 35% | 26 TOPS AI accelerator for local LLM, vision |
| PoE Hat (M.2 form factor) | 499 | 50% | Adds PoE input to Pro (bridges Pro+ gap) |
| Cellular Modem (4G LTE, M.2 B-key) | 1,499 | 40% | Failover WAN for critical installs |
| NVMe SSD (2230, 1 TB) | 1,200 | 20% | Local media storage, NVR-ready |
| GPIO Breakout Board | 299 | 55% | Screw terminals for HDW input, relay output |
| VESA Mount Bracket | 249 | 60% | Under-desk mount kit |
| Pro to Pro+ Retrofit Kit | 599 | 45% | External DIN-rail housing + PoE board |

### 10.4 Econmics of Modularity

**Scenario: Pro buyer upgrades after 3 years**

| Path | Cost to Customer | Citadel Revenue | Notes |
|---|---|---|---|
| Buy new Pro | R5,999 | R5,999 | Customer replaces whole unit |
| Upgrade CM only (CM5 → CE-CM1) | R1,800 | R1,800 | Customer keeps carrier, PSU, accessories |
| Upgrade CM + NPU | R3,000 | R3,000 | Customer upgrades compute + AI |
| Upgrade to Pro+ | R9,999 (new) or R4,500 (trade-in) | R9,999 or R4,500 | Trade-in program for carrier credit |

**Customer lifetime value (CLV) comparison:**

| Model | Year 1 | Year 3 | Year 5 | 5-year CLV |
|---|---|---|---|---|
| Non-modular (competitor) | R5,999 | R0 | R5,999 (replacement) | R5,999 + subscription |
| Modular (Citadel) | R4,499 (carrier) + R900 (CM) | R1,800 (CM upgrade) | R2,800 (CM upgrade) | R9,999 + subscription |
| **Modular advantage** | | | | **R4,000 incremental** |

---

## Appendix A: Competitive Pricing Map

| Product | Retail Price (ZAR est.) | Build | AI Local | Open Source | Modular | Warranty (SA) |
|---|---|---|---|---|---|---|
| Citadel Core | R1,499 | Plastic | No | Yes | No | 1 year |
| Citadel Pro | R5,999 | CNC Al / Polycarb | Yes (add-on) | Yes | Yes (CM + M.2) | 2 years |
| Citadel Pro+ | R9,999 | CNC Al, IP65 | Yes (integrated) | Yes | Limited | 3 years |
| Home Assistant Green | ~R1,800 | Plastic | No | Yes | No | None (grey import) |
| Home Assistant Yellow | ~R2,700 | Polycarbonate | No | Yes | Yes (CM only) | None (grey import) |
| Homey Pro | ~R8,000 | Plastic | No | No | No | 1 year (EU import) |
| Hubitat C-8 | ~R3,500 | Plastic | No | No | No | None (grey import) |
| Control4 Core 5 | ~R18,000 | Plastic | No | No | No | Dealer-only |
| Crestron Pyng | ~R25,000 | Plastic | No | No | No | Dealer-only |
| Josh.ai Nano | ~R15,000+ | Aluminium | Yes (cloud) | No | No | 1 year (US import) |

## Appendix B: Glossary

| Term | Definition |
|---|---|
| BOM | Bill of Materials — the complete list of components and their costs |
| COGS | Cost of Goods Sold — total manufacturing cost per unit including BOM + overhead |
| CM | Compute Module — removable processor/memory cartridge |
| CNC | Computer Numerical Control — precision machining of metal |
| DIN-rail | Standardized metal rail (TS35) for mounting industrial control equipment |
| EMS | Electronics Manufacturing Services — contract assembly house |
| ENIG | Electroless Nickel Immersion Gold — PCB surface finish |
| ICASA | Independent Communications Authority of South Africa — wireless regulatory body |
| NRCS | National Regulator for Compulsory Specifications — SA safety/EMC regulator |
| NPU | Neural Processing Unit — dedicated AI inference accelerator |
| PoE | Power over Ethernet — power delivery over network cable |
| RIM | Reaction Injection Molding — low-volume urethane casting |
| SBC | Single-Board Computer |
