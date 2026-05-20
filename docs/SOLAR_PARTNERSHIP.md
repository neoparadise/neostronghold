# Solar Partnership Strategy

**Version 1.0 | NeoParadise / Citadel Evolve**

---

## Table of Contents

1. Executive Summary
2. Solar Company Profiles
3. The Pitch Decks
4. Partnership Tier Framework
5. Integration Roadmap
6. Negotiation Strategy
7. Distribution Strategy
8. Timeline

---

## 1. Executive Summary

Citadel Evolve is building a unified smart home operating system. Solar and battery storage are the highest-value energy devices in the home, yet every major inverter brand ships with a terrible app, no local API, and zero smart home integration out of the box. Homeowners who buy R150 000 solar systems are forced to duct-tape together community integrations, serial-to-WiFi bridges, and cloud scrapers.

This is an unserved market that is growing at 30%+ CAGR in South Africa alone.

We propose a tiered partnership program targeting three categories of partner:

- **Primary: Victron Energy** (Netherlands, private, founded 1975). Venus OS is already open-source Linux. They publish protocol documentation. They tolerate community Home Assistant integrations. They are the closest philosophical match. The pitch: "You're already open-source. Let us build your official smart home integration."

- **Secondary: Sunsynk SA** (Ferndale, Gauteng). 500 000+ systems installed. The kellerza/sunsynk HACS add-on has 320 GitHub stars but is community-maintained with zero official support. The pitch: "Make your 500 000 installs smarter. Co-brand. Your installers sell more inverters."

- **Distribution: Rubicon** (South Africa's largest solar distributor). They stock Victron, Sunsynk, Deye, Solis, and every accessory. Every inverter sale is a potential NeoStronghold Pro+ upsell. The pitch: "Exclusive SA distribution of NeoStronghold Pro+ for 12 months. Your counter staff upsell at point of sale."

Success means:

- Tier 1 partnerships with Victron and Sunsynk within 6 months
- Rubicon exclusive distribution agreement within 3 months
- 1 000+ bundled NeoStronghold Pro+ units sold within 12 months
- Fleet data agreements enabling predictive maintenance and installer upsell

---

## 2. Solar Company Profiles

### 2.1 Victron Energy

| Attribute | Detail |
|---|---|
| HQ | Almere, Netherlands |
| Founded | 1975 |
| Ownership | Private (Eekhuis family) |
| Market Segment | Mid-to-premium off-grid, marine, mobile |
| Annual Revenue | Estimated EUR 250M+ (privately held) |
| Key Products | MultiPlus inverters, SmartSolar MPPT, Cerbo GX, Venus OS |
| South Africa Presence | Strong -- distributed via Rubicon, Volta, Solar Supply |
| Openness | **High.** Venus OS is open-source Linux (GitHub: victronenergy/venus). Protocol docs published. MQTT API exposed on all GX devices. Community Home Assistant integration tolerated. |
| Partnership Likelihood | **Very High.** Already open-source. Have not built their own smart home OS. A co-branded official integration gives them smart home presence with zero R&D cost. |
| Risk | Slow decision-making (private family company). May want exclusivity. |

**Strategic rationale:** Victron is the ideal first partner. Their engineering culture values openness and reliability. Their customers are exactly our target demographic: tech-literate homeowners who want local control. Venus OS being Linux-based means integration effort is low (we can run our agent directly on Cerbo GX hardware).

### 2.2 Sunsynk / Deye

| Attribute | Detail |
|---|---|
| HQ | Sunsynk: Ferndale, Gauteng, South Africa. Deye: Ningbo, China |
| Founded | Sunsynk 2018 (brand), Deye 2000 |
| Ownership | Sunsynk: Private (SA management). Deye: Public (SH: 605117) |
| Market Segment | Hybrid inverters, residential solar |
| Installed Base | 500 000+ systems (Sunsynk claim) |
| Key Products | 5kW, 8kW hybrid inverters, battery systems |
| South Africa Presence | HQ in Ferndale. Major installer network. Strong brand recognition. |
| Openness | **Medium.** Deye protocol is documented but not publicly published. Closed-source firmware. Cloud-dependent app. Some community reverse-engineering exists (kellerza/sunsynk). |
| Partnership Likelihood | **Medium-High.** 500 000 units sold with zero smart home story. Local SA management can make decisions. The community integration proves demand. |
| Risk | Chinese parent (Deye) may veto. App team may see us as competition. Cloud dependency limits local-control narrative. |

**Strategic rationale:** Sunsynk's local decision-making and massive installed base make them the highest-volume opportunity. The community integration (320 stars, active maintenance) proves pent-up demand. A co-branded official integration turns their weak software story into a strength.

### 2.3 GoodWe

| Attribute | Detail |
|---|---|
| HQ | Changzhou, China |
| Founded | 2010 |
| Ownership | Public (SH: 688390) |
| Market Segment | Residential hybrid inverters, commercial |
| Key Products | DNS, GW, BT, ET series inverters |
| South Africa Presence | Moderate. Distributed by Solar Guru, others. |
| Openness | **Low.** No published protocol. Cloud API only. SEMS portal is feature-poor. No local API. |
| Partnership Likelihood | **Low.** Chinese public company. Protocol secrecy is policy. Low local decision-making authority. |
| Risk | Would require NDA + reverse-engineering. Cloud dependency. Low value for our users. |

**Strategic rationale:** GoodWe is listed as a secondary option only if Sunsynk and Victron both decline. The integration effort is higher, the philosophical alignment is lower, and the installed base in SA is smaller.

### 2.4 SolaX

| Attribute | Detail |
|---|---|
| HQ | Hangzhou, China |
| Founded | 2012 |
| Ownership | Private |
| Market Segment | Residential hybrid inverters |
| Key Products | X1, X3 series, Pocket WiFi dongle |
| South Africa Presence | Growing. Distributed by Alumo, others. |
| Openness | **Very Low.** No published API. Cloud scraping only. Dongle-dependent. |
| Partnership Likelihood | **Low.** Private Chinese company. No track record of partnership. |
| Risk | Lowest priority. Small SA market share. No local decision-making. |

### 2.5 Solis

| Attribute | Detail |
|---|---|
| HQ | Hangzhou, China |
| Founded | 2005 |
| Ownership | Public (Ginlong Technologies, SZ: 300763) |
| Market Segment | Residential string inverters |
| Key Products | Solis S6, RHI series |
| South Africa Presence | Strong. Market leader in string inverters. Distributed by Rubicon, ARB, others. |
| Openness | **Low.** No published API. Cloud-dependent (Solis Cloud). |
| Partnership Likelihood | **Low.** Public company, no openness culture. High volume but low strategic fit. |
| Note | If Solis approaches us (via Rubicon), we can discuss. Not worth proactive outreach. |

### 2.6 Other Manufacturers (Low Priority)

| Manufacturer | Rationale for Low Priority |
|---|---|
| **SMA** (Germany) | Strong in commercial. Residential market share declining. No SA presence. |
| **Fronius** (Austria) | Excellent openness culture (Modbus TCP). Small SA market. High-end only. |
| **ABB** (Sweden) | Exited residential solar. Commercial only. |
| **Huawei FusionSolar** | Protocol secrecy. Political risk. No local decision-making. |
| **FoxESS** | Growing in SA but extremely closed. No API. Cloud scraping only. |

---

## 3. The Pitch Decks

### 3.1 Victron Energy Pitch

**Target:** Product Manager, Venus OS team, or CTO
**Format:** In-person or video call, 30 minutes
**Decision timeline:** 4-8 weeks (slow, family-owned)

**Pitch script (word-for-word):**

"Victron has been building energy products since 1975. You are trusted by off-grid homeowners, marine engineers, and mobile installers worldwide. You have done something unusual in this industry: you open-sourced Venus OS. You publish your protocol documentation. You tolerate community integrations. This tells us you value engineering excellence over vendor lock-in.

"Here is the problem: when a homeowner spends R150 000 on a Victron system, they expect it to work with the rest of their smart home. They want the inverter to talk to their lights, their EV charger, their geyser, their home assistant. Today, they have to find a community-written Home Assistant integration on GitHub, pray it still works after the next Venus OS update, and debug MQTT topics themselves. This is not a Victron-quality experience.

"We want to fix that. Citadel Evolve is building an open-source smart home operating system. Think of us as what Venus OS did for energy management, but for the entire home. We already have integrations for lights, locks, sensors, media, and climate. What we are missing is a world-class energy integration. You have the energy hardware. We have the smart home platform.

"We propose a co-branded, official Victron Energy integration for Citadel Evolve. This is not a community script. This is a first-class integration with:

- Auto-discovery of all Victron devices on the local network
- Installer-friendly setup wizard (scan QR code, done)
- Real-time energy flow dashboard with Victron branding
- Automation triggers for every sensor and switch your devices expose
- Fleet data opt-in for your installer network (aggregate, anonymised)

"What we need from you:

- Technical collaboration on the integration (we write the code, you review it)
- Permission to use Victron branding and logo in the integration
- A protocol endorsement -- publicly state that this integration is supported
- Optional: API access to VRM for cloud-connected features

"What you get in return:

- Zero R&D cost to enter the smart home market
- Reduced support tickets from smart home enthusiasts trying to DIY their integration
- Competitive differentiation vs. Deye, GoodWe, Solis -- you actually work with the smart home
- Installer retention: your installers can offer a complete smart home solution
- Fleet data from opt-in customers (battery health, inverter performance)

"We are not asking for exclusivity. We are asking to be the official smart home integration for Victron. You stay open. We build on what you already built. Everybody wins."

**Objection handling:**

| Objection | Response |
|---|---|
| "We are already building our own app." | "Your app is excellent at device management. Ours is for smart home automation -- different use case. We interoperate, we do not compete." |
| "We do not want to support another platform." | "We do the support. We handle users. You review the code once. That is it." |
| "We are concerned about liability." | "The integration is open-source. Users can inspect it. We indemnify Victron against any claims arising from the integration itself." |

### 3.2 Sunsynk Pitch

**Target:** CEO or Head of Product, Sunsynk SA
**Format:** In-person, 20 minutes
**Decision timeline:** 2-4 weeks (local SA management)

**Pitch script (word-for-word):**

"You have sold over 500 000 inverters in South Africa. That is an incredible achievement. You own the residential solar market in this country. But you have a problem: your app is not good, and you know it. Your installers spend hours on the phone with homeowners who cannot connect their dongle. Your users are searching GitHub for 'sunsynk home assistant' and finding a community integration with 320 stars that works better than your official app.

"We are not here to criticise. You are a hardware company. Hardware is your strength. Software is ours.

"Citadel Evolve is building an open-source smart home platform that runs on a small, affordable device -- the NeoStronghold Pro+. Plug it into your home network, and it discovers Sunsynk inverters automatically. Homeowners get a beautiful energy dashboard. Automations. Alerts when the battery is low or the grid goes down. Installers get a remote monitoring portal with fleet-wide data.

"We want to co-brand an official Sunsynk integration. This is what we propose:

"Phase 1 -- Tier 1 Partnership (Month 1-3):
- We build the integration using the documented Deye/Sunsynk protocol
- Sunsynk branding throughout the integration
- Installer-focused setup wizard (installer scans QR, homeowner never touches config)
- Joint blog post and social media announcement

"Phase 2 -- Tier 2 Partnership (Month 3-6):
- Sunsynk logo pre-installed on NeoStronghold Pro+ units
- Bundled pricing for Sunsynk + Citadel Evolve kits
- Joint installer training program (online, 30 minutes)

"Phase 3 -- Tier 3 Partnership (Month 6-12):
- Revenue share on Citadel Evolve subscriptions sold through Sunsynk channel
- Joint installer certification program
- Co-branded hardware bundles (inverter + NeoStronghold Pro+ + sensors)
- Fleet data agreement for aggregate analytics

"What we need from you:

- Protocol documentation access (or introduce us to your Deye counterparts)
- Branding approval for the integration
- A co-marketing commitment (blog post, installer newsletter, social)
- Optional: API key system for cloud-connected features

"What you get:

- The #1 Home Assistant integration built and maintained by professionals, not volunteers
- Reduced support tickets (installers point to our docs instead of debugging WiFi dongles)
- Competitive differentiation: Deye in other markets does not have this
- Installer loyalty: your installers can sell a complete smart home solution
- Fleet data: understand how your inverters perform in the field

"Your 500 000 installs are a goldmine. Let us unlock the software value."

**Objection handling:**

| Objection | Response |
|---|---|
| "Deye is our parent company. They control the protocol." | "We know. We are happy to work with Deye engineering. Can you facilitate an introduction?" |
| "We already have an app." | "Your app handles device configuration. We handle automation. Different product. Think of it as complementary." |
| "Our installers do not need this." | "Your installers spend 30% of their time on post-install support calls. This eliminates those calls. Your installers will thank you." |
| "We are worried about brand dilution." | "We control the user experience. Sunsynk branding throughout. It looks like a Sunsynk product." |

### 3.3 Rubicon Distribution Pitch

**Target:** Head of Product or Head of Sales, Rubicon
**Format:** In-person, 15 minutes
**Decision timeline:** 1-2 weeks

**Pitch script (word-for-word):**

"Rubicon is South Africa's largest solar distributor. You stock Victron, Sunsynk, Deye, Solis, GoodWe, SolaX -- every brand that matters. Your counter staff sell thousands of inverters every month. Every single one of those sales is a missed opportunity.

"Here is what happens today: a homeowner buys a R150 000 Sunsynk inverter from Rubicon. They take it home. An installer connects it. The homeowner uses the Sunsynk app for a week, gets bored, and forgets about it. Rubicon makes zero ongoing revenue from that sale. The homeowner has no reason to come back to Rubicon.

"Here is what we propose: when a customer buys an inverter at Rubicon, the counter staff offers them a NeoStronghold Pro+ for R4 999 -- 'make your inverter smart.' The device comes pre-configured for their inverter brand. They plug it in, scan a QR code, and their entire energy system is on a beautiful dashboard. They can add smart switches, sensors, and automations over time. Rubicon makes margin on the hardware, and we build an ongoing relationship with that homeowner.

"We offer Rubicon:

- **Exclusive South Africa distribution of NeoStronghold Pro+ for 12 months.** No other SA distributor can stock it.
- **Wholesale pricing at 40% below RRP.** Rubicon margin is 40%+.
- **Counter staff training.** We train your sales team in 30 minutes. They know how to upsell.
- **Co-branded point-of-sale materials.** Shelf talkers, flyers, demo unit in your showroom.
- **Installer integration.** Every Rubicon installer gets access to our installer portal for free. They use it to monitor all their customers' systems.

"What we need from Rubicon:

- **Commitment to stock NeoStronghold Pro+ in at least 5 branches (Gauteng, Cape Town, Durban).**
- **Counter staff training attendance.**
- **Introductory email to your installer database (10 000+ installers).**
- **Shelf space and demo setup at your flagship store.**

"Rubicon already moves more solar hardware than anyone in Africa. Now you can move smart home hardware too. Let us turn every inverter sale into an annuity."

**Objection handling:**

| Objection | Response |
|---|---|
| "We already stock smart home devices." | "None of them integrate with the inverters you sell. Ours does, out of the box." |
| "Our installers will not buy from us if they can buy direct." | "We are not selling direct in SA. Rubicon is the exclusive channel." |
| "We need to see it working first." | "We will set up a demo unit in your head office next week. Bring your sales team. They will sell it themselves." |
| "What about support?" | "We handle tier-1 and tier-2 support. Rubicon only handles returns." |

---

## 4. Partnership Tier Framework

### 4.1 Tier 1: Official Integration

| What We Offer | What We Ask |
|---|---|
| Co-branded, officially maintained integration in Citadel Evolve | Branding approval and logo usage rights |
| Integration published in our integration store with partner logo | Technical review and protocol endorsement |
| Installer-friendly setup wizard branded for partner | Engineering introduction (API / protocol access) |
| Dedicated integration support channel (email + docs) | Joint press release / blog post |
| Automated testing against partner firmware releases | Commitment to notify us of breaking firmware changes |
| SLA: critical bugs fixed within 48 hours | Co-marketing budget (in-kind: social, newsletter) |

**Success metric:** Integration live, verified by partner, joint announcement published.

**Typical duration:** Month 1-3.

### 4.2 Tier 2: Pre-Installed OS / Bundled Hardware

| What We Offer | What We Ask |
|---|---|
| NeoStronghold Pro+ with partner-branded UI skin | Volume commitment: minimum 500 units in 6 months |
| Integration pre-installed and pre-configured per partner | Bundled SKU at discounted wholesale pricing |
| Partner logo on device packaging and boot screen | Joint installer training program (co-created content) |
| Joint pricing for inverter + NeoStronghold Pro+ bundles | Installer database access for co-marketing |
| Priority support escalation for bundle customers | Feedback loop: installer-reported issues get 24h response |

**Success metric:** Bundled units shipped, installer training launched.

**Typical duration:** Month 3-6.

### 4.3 Tier 3: Revenue Share & Certification

| What We Offer | What We Ask |
|---|---|
| Revenue share on subscription revenue from partner channel (15-25%) | Subscription pricing approved by partner |
| Joint installer certification program | Partner promotes certification to installer network |
| Co-branded hardware bundles (partner-branded SKU) | Partner shares fleet data (aggregate, anonymised) |
| Partner dashboard: fleet-wide analytics for installer network | Partner data used in joint marketing |
| API access for partner to pull aggregate fleet metrics | Quarterly business review |
| Dedicated partner manager | Partner assigns internal liaison |

**Success metric:** Revenue share agreement signed, certification program launched, fleet data flowing.

**Typical duration:** Month 6-12.

---

## 5. Integration Roadmap

### 5.1 Victron Energy Integration

| Phase | Technical Steps | Effort | Dependencies |
|---|---|---|---|
| **Phase 1: MQTT Discovery** | Implement Victron MQTT auto-discovery (same as Venus OS local MQTT). Map all device types (inverter, MPPT, battery monitor, tank sensor, etc.). Create sensor entities with proper device classes. | 2-3 weeks | Venus OS MQTT docs (published) |
| **Phase 2: Read Entities** | Expose all metrics: PV power, battery SOC, load, grid consumption, battery voltage/current, temperature, AC-in/out, alarm states. | 1-2 weeks | Phase 1 complete |
| **Phase 3: Control Entities** | Implement switch entities for relays (Cerbo GX). Implement select entities for inverter modes (charger only, inverter only, ESS). Implement number entities for current limits. | 2 weeks | Phase 2 complete, protocol confirmation |
| **Phase 4: VRM API** | Optional: Connect to Victron VRM portal for remote access. Fleet data aggregation. | 2 weeks | Victron API key provisioned |
| **Phase 5: Setup Wizard** | Build QR-code-based setup: scan QR on Cerbo GX display, auto-configure MQTT topic prefix, discover all devices. | 1 week | Phase 1-4 complete |
| **Phase 6: Partner Polish** | Victron branding throughout. Installer mode with simplified setup. Testing against current Venus OS firmware. | 1 week | Victron brand approval |
| **Phase 7: Fleet Data** | Aggregate, anonymised fleet dashboard for Victron installer network. | 2-3 weeks | Data agreement signed |

**Total effort:** 10-15 weeks.
**Risk:** Low. Protocol is open. Community integration proves feasibility.

### 5.2 Sunsynk / Deye Integration

| Phase | Technical Steps | Effort | Dependencies |
|---|---|---|---|
| **Phase 1: Protocol Access** | Obtain Deye Modbus protocol documentation. Identify register map for Sunsynk-specific models. | 1-4 weeks | Deye engineering introduction |
| **Phase 2: Local Modbus** | Implement Modbus TCP client. Read all relevant holding registers. Handle connection loss and reconnection. | 2-3 weeks | Phase 1 complete |
| **Phase 3: Read Entities** | Expose: PV power per string, battery SOC/power/voltage, load, grid import/export, temperature, fault codes, system mode. | 1-2 weeks | Phase 2 complete |
| **Phase 4: Control Entities** | Implement write registers: charge/discharge power limits, grid export limit, work mode (battery priority, grid priority, etc.), on/off scheduling. | 2 weeks | Phase 3 complete, write access confirmed |
| **Phase 5: Dongle Alternative** | Optional: If local Modbus is blocked by firmware, implement cloud API polling as fallback (datalogger poll). | 2-3 weeks | Cloud API documented or reverse-engineered |
| **Phase 6: Setup Wizard** | Auto-discover dongle on LAN. QR-code setup. Manual IP config fallback. | 1 week | Phase 2-3 complete |
| **Phase 7: Fleet Data** | Aggregated dashboard for Sunsynk installer network. | 2-3 weeks | Data agreement signed |

**Total effort:** 12-18 weeks (protocol access is the bottleneck).
**Risk:** Medium. Deye may be slow to share protocol docs. Community integration exists as reference.

### 5.3 Rubicon Distribution Integration

| Phase | Technical Steps | Effort | Dependencies |
|---|---|---|---|
| **Phase 1: Inventory API** | Connect to Rubicon's inventory system (or build manual order process). Establish order fulfilment pipeline. | 2 weeks | Rubicon systems access |
| **Phase 2: Installer Portal** | Build Rubicon-branded installer portal for fleet monitoring. | 3-4 weeks | Fleet data infrastructure |
| **Phase 3: Bundled SKU** | Create NeoStronghold Pro+ SKU with Sunsynk/Victron pre-config. Packaging co-branding. | 2 weeks | Partnership agreements signed |
| **Phase 4: POS Materials** | Shelf talkers, flyers, demo unit setup in Rubicon showrooms. | 1 week | Phase 1-2 complete |

---

## 6. Negotiation Strategy

### 6.1 What Each Partner Wants

| Partner | Primary Wants | Secondary Wants | Dealbreakers |
|---|---|---|---|
| **Victron** | No liability. No support burden. Brand integrity. Happy customers. | Fleet data. Installer satisfaction. Competitive differentiation. | Exclusivity requirement. Closed-source integration. Competing app. |
| **Sunsynk** | Reduced support tickets. Installer retention. Competitive story. | Revenue share. Fleet data. Brand presence in smart home. | Public criticism of their app. Deye veto. Upfront payment. |
| **Rubicon** | Exclusivity. Margin. No inventory risk. Installer adoption. | Differentiation from other distributors. Recurring revenue. | Non-exclusive deal. Online direct sales in SA. Complex return process. |

### 6.2 Our Leverage

| Partner | Our Leverage |
|---|---|
| **Victron** | Their community is already using the HA integration. We formalise what exists. If we walk, they get nothing -- but the community integration stays. |
| **Sunsynk** | The community integration exists and is popular. Users already expect it to work. If we do not build it officially, the community version remains unmaintained and unreliable. Sunsynk gets the support calls anyway. |
| **Rubicon** | We offer exclusive distribution of a high-margin product that complements every inverter they sell. No other distributor has this. Alternative: we go direct-to-consumer online. |

### 6.3 Negotiation Positions

**Victron -- our position:**

- We open with: "We want to build the official Citadel Evolve integration for Victron. We write the code. You review it. We handle support. You approve branding. No cost to you."
- We can concede: Branding placement, review timeline, specific UI treatment.
- We cannot concede: Exclusivity (we need Sunsynk too). Closed-source (our platform is open).
- If they ask for exclusivity: "We cannot commit to exclusivity on our platform, but we commit to Victron being our flagship energy integration. You will always be first, best, and most prominent."
- Fallback: If they say no, we build the community integration anyway (we already can). Their users will not know the difference.

**Sunsynk -- our position:**

- We open with: "We want to co-brand an official integration. We build it. You promote it to your installers. Your support tickets go down."
- We can concede: Branding, announcement timing, feature prioritisation.
- We cannot concede: Protocol access requirements (we need this). Exclusivity on energy integrations.
- If Deye blocks protocol access: "Give us one engineering contact at Deye. We will handle the technical relationship. Sunsynk just facilitates."
- Fallback: If they say no, we build the integration using the already-documented community register map. It is not official, but it works. Sunsynk gets no credit.

**Rubicon -- our position:**

- We open with: "Exclusive SA distribution for 12 months. 40% margin. We train your staff. Give us 5 branches, an installer email, and shelf space."
- We can concede: Margin percentage (35% minimum), number of branches (3 minimum), exclusivity duration (18 months max).
- We cannot concede: Direct sales ban in SA (we keep our own web store).
- If they push on direct sales: "We will not undercut you on pricing. Our web store sells at RRP. You can sell at RRP or below. We do not compete on price."
- Fallback: If they say no, we approach Volta, Solar Supply, or ARB Electrical. Rubicon is ideal but not unique.

### 6.4 Red Lines

- We do not do exclusivity on energy integration (we need multiple partners).
- We do not sign NDAs that prevent us from building similar integrations.
- We do not commit to support SLAs we cannot meet.
- We do not accept liability for partner hardware failures.
- We do not pay for partnership (revenue share only, no upfront).

---

## 7. Distribution Strategy

### 7.1 Rubicon Exclusive Deal Terms (Proposed)

| Term | Detail |
|---|---|
| **Exclusivity Scope** | South Africa only |
| **Exclusivity Duration** | 12 months from first stock delivery |
| **Product** | NeoStronghold Pro+ (all variants) |
| **RRP** | R4 999 (VAT incl.) |
| **Wholesale Price** | R2 999 (40% margin for Rubicon) |
| **Minimum Order** | 50 units initial, 25 units quarterly thereafter |
| **Payment Terms** | 30 days from invoice |
| **Returns** | Defective units only (DOA + 7 days). Buyers remorse: 10% restocking fee. |
| **Marketing Support** | Co-branded POS materials, demo unit, counter staff training |
| **Sales Channel** | Rubicon counters, Rubicon online store (no marketplace third parties) |
| **Direct Sales** | NeoParadise retains right to sell directly via citadelevolve.co.za at RRP |

### 7.2 Installer Training Integration

Every inverter partner program includes an installer training component. The format is:

- **Duration:** 30 minutes, online (Zoom or pre-recorded)
- **Content:**
  - What is Citadel Evolve (5 min)
  - Installing NeoStronghold Pro+ with [Partner] inverter (10 min)
  - Configuring the integration (5 min)
  - Using the installer fleet dashboard (5 min)
  - Selling the upgrade to homeowners (5 min)
- **Certification:** Installers who complete training receive a "Citadel Evolve Certified Installer" badge. Displayed in their installer profile. Listed on our website as recommended.
- **Incentive:** Certified installers get a referral fee (R200) for every NeoStronghold Pro+ activated by a customer they referred.

### 7.3 Fleet Data Value Proposition

Aggregate, anonymised fleet data is a significant value driver for partners:

| Data Point | Partner Use |
|---|---|
| Battery SOC patterns | Identify undersized battery banks. Upsell battery expansion. |
| PV generation vs. load | Identify oversized/undersized arrays. Upsell additional panels. |
| Grid import frequency | Identify high-usage homes. Upsell load shedding automation. |
| Inverter fault codes | Predict failures. Proactive maintenance dispatch. |
| System uptime | Identify installers with poor commissioning practices. |

The fleet data dashboard is a Tier 3 deliverable. Partners pay no fee for the data, but the data cannot be sold to third parties without mutual agreement.

---

## 8. Timeline

### Months 1-3: Foundation

| Week | Milestone | Owner |
|---|---|---|
| W1-2 | Rubicon pitch meeting. Agree exclusive terms in principle. | CEO / Head of Sales |
| W1-4 | Victron initial outreach. Request engineering introduction. | CTO |
| W2-4 | Sunsynk pitch meeting. Request protocol access. | CEO / Head of Product |
| W4-6 | Victron technical review begins (Phase 1-2 of integration). | Engineering |
| W4-8 | Rubicon exclusive agreement signed. Initial 50-unit order placed. | CEO / Legal |
| W6-8 | Sunsynk protocol access granted (or fallback to community docs). | Engineering |
| W8-10 | Victron Phase 3-4 (control entities, VRM API). | Engineering |
| W8-12 | Sunsynk Phase 1-2 (Modbus implementation, read entities). | Engineering |
| W10-12 | Rubicon counter staff training delivered. Demo unit installed. | Sales / Ops |

**End of Month 3 deliverables:**
- Rubicon exclusive distribution agreement signed
- Rubicon initial stock delivered, staff trained
- Victron integration: read entities complete, control entities in review
- Sunsynk integration: Modbus communication established, basic read entities live

### Months 4-6: Launch

| Week | Milestone | Owner |
|---|---|---|
| W13-14 | Victron Phase 5-6 (setup wizard, partner polish, testing). | Engineering |
| W14-16 | Sunsynk Phase 3-4 (control entities, write registers). | Engineering |
| W16-18 | Victron integration public launch. Joint press release. | Marketing / CEO |
| W16-20 | Sunsynk Phase 5-6 (dongle alternative, setup wizard). | Engineering |
| W18-20 | Victron Tier 1 deliverables complete. Begin Tier 2 discussions. | CEO / Product |
| W20-22 | Sunsynk integration public launch. Joint blog post. | Marketing / CEO |
| W20-24 | Rubicon bundled SKU live. Installer training launched. | Ops / Sales |

**End of Month 6 deliverables:**
- Victron Tier 1 partnership live (co-branded integration, joint announcement)
- Sunsynk Tier 1 partnership live (co-branded integration, joint announcement)
- Rubicon bundled SKU shipping with inverter kits
- 200+ NeoStronghold Pro+ units sold through Rubicon channel
- Installer training program launched with 50+ certified installers

### Months 7-12: Scale

| Month | Milestone | Owner |
|---|---|---|
| M7 | Victron Tier 2 discussions concluded. Bundled SKU planned. | CEO / Product |
| M7 | Sunsynk installer training program launched. | Sales |
| M8 | Fleet data dashboard v1 (Victron data). | Engineering |
| M8 | Rubicon Phase 2 expansion: additional 5 branches. | Ops |
| M9 | Sunsynk fleet data dashboard v1. | Engineering |
| M9 | Joint installer certification program pilot (Victron + Sunsynk). | Sales / Product |
| M10 | Victron Tier 2 SKU shipping (pre-configured NeoStronghold Pro+). | Ops |
| M10 | Sunsynk Tier 2 SKU shipping. | Ops |
| M11 | Revenue share model agreed with Sunsynk (Tier 3). | CEO / Legal |
| M11 | Joint co-branded hardware bundle with Sunsynk (inverter + NeoStronghold Pro+). | Product / Ops |
| M12 | Partnership review. Tier 3 agreements signed with one partner. | CEO |

**End of Month 12 deliverables:**
- 1 000+ NeoStronghold Pro+ units sold (cumulative)
- Fleet data dashboards live for Victron and Sunsynk partners
- Joint installer certification program launched (100+ certified installers)
- Revenue share agreement signed with at least one partner
- Co-branded hardware bundle shipping (inverter + NeoStronghold Pro+)
- 12-month partnership roadmap for Year 2 agreed with each partner

### Year 2 Objectives

- Expand to GoodWe, Solis, or SolaX (Tier 1 integration)
- Launch direct installer program in neighbouring countries (Namibia, Botswana, Mozambique)
- Partner portal for installers (self-service fleet dashboard, referral tracking, training)
- Fleet data premium tier (paid: predictive maintenance, battery health scoring, installer benchmarking)
- Explore European expansion via Victron's European distributor network

---

## Appendix A: Contact Strategy

| Partner | Contact | Method | Referral |
|---|---|---|---|
| Victron Energy | Product manager via LinkedIn or Venus OS mailing list | Cold email + LinkedIn, reference open-source contributions | Community contact: @jelmer (Victron community manager) |
| Sunsynk SA | CEO via installer network introduction | Warm introduction via installer partner | Rubicon relationship manager can introduce |
| Rubicon | Head of Product or Head of New Business | Direct call, existing relationship | Existing NeoParadise contact at Rubicon |

## Appendix B: Key Metrics Dashboard

| Metric | Month 3 Target | Month 6 Target | Month 12 Target |
|---|---|---|---|
| Partner agreements signed | 1 (Rubicon) | 3 (all) | 3+ |
| Units sold (cumulative) | 50 | 200 | 1 000 |
| Certified installers | 0 | 50 | 100+ |
| Fleet data agreements | 0 | 1 | 2 |
| Revenue share agreements | 0 | 0 | 1 |
| Integration quality score (internal) | Alpha | Live | Mature |
