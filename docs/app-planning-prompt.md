# App Planning Prompt

Use this prompt to plan the `app/` directory — a complete rewrite of the Home Assistant frontend as a modern, AI-first smart home application.

---

## Context

We are building `app/` — the main smart home application for **neostronghold** (a premium open-source smart home platform by NeoParadise, Cape Town). This will be served at `app.neostronghold.com`.

It replaces the Home Assistant frontend (Lit + Polymer) with a modern stack: **pnpm + React + shadcn/ui + Expo**, using the same cosmic theme (deep space, cyan accent, glassmorphism) from `web/`.

The `app/` must include a **complete Lovelace-compatible dashboard** (device cards, entity management, automations) AND an **AI agent workspace** inspired by opencode's multi-turn agent interface and openclaw's multi-agent orchestration.

## Reference Implementations

Three repos exist in `inspiration/` to learn from:

1. **inspiration/frontend/** — Home Assistant frontend (the current reference)
   - Lovelace card system (how cards register, render, manage state)
   - Entity state management (state → UI flow)
   - HACS architecture (community card/store system)
   - Area/device/entity hierarchy
   - WebSocket API transport

2. **inspiration/opencode/** — AI agent interface
   - Message turn UI (user ↔ assistant, tool calls, streaming)
   - `ComputerUse` protocol / tool execution
   - Session management (conversation context)
   - Settings/preferences UX
   - Tool-use permission model

3. **inspiration/openclaw/** — Multi-agent orchestration
   - Agent lifecycle (spawn, monitor, stop)
   - Multi-agent dashboard (status, logs, metrics)
   - Agent-to-agent delegation
   - Resource allocation (memory, context, tools per agent)

## Existing Website

The `web/` directory has the brand website with:
- The design system (colors, glass utilities, fonts, spacing)
- shadcn/ui components already themed
- The cosmic dark theme, gradient effects, glassmorphism
- Constants, utility components, and layout patterns

## What to Research

1. **Home Assistant frontend architecture deeply:**
   - How does the Lovelace card system actually work? Custom element registration? Shadow DOM? How do cards receive state updates?
   - How does the state machine work? Entity state → UI binding?
   - How does the WebSocket connection manage subscriptions, reconnection, and HA version compatibility?
   - How does the area/device/entity/floor hierarchy work? What's the data model for grouping entities?
   - How do automations, scripts, scenes, and blueprints render and edit?
   - How does HACS (community store) integrate? Card discovery, installation, updates?
   - What's the build system? How are translations/languages handled?
   - How does the sidebar navigation work? Dynamic panel registration?

2. **opencode architecture deeply:**
   - How does the chat/message interface render? Virtual scrolling? Streaming text? Tool call rendering?
   - How does the agent execute tools? What's the tool approval flow? Permission model?
   - How are sessions managed? History, context limits, conversation persistence?
   - How does the settings UI work? Model selection, system prompt, tools, keys?
   - What state management pattern is used? How do messages, sessions, and settings flow?
   - How is the Monaco-like code editor integrated (if applicable)?
   - How does the agent communicate with external systems (MCP servers, APIs)?

3. **openclaw architecture deeply:**
   - How are multiple agents managed simultaneously? What's the orchestration model?
   - How does the agent lifecycle dashboard work? Status indicators, logs, metrics?
   - How do agents communicate with each other? Message passing? Event bus?
   - How are resources allocated across agents? Memory, context window, tool access?
   - How does the user monitor and control multiple agents? What's the UX pattern?

## What to Plan

### Architecture

- **Monorepo structure**: What packages/modules? Shared types, UI components, state, pages?
- **State management**: Zustand vs Jotai vs Redux vs React Query — which fits best and why?
- **API/transport layer**: How to communicate with the Home Assistant core? WebSocket? REST? SSE?
- **Auth layer**: How does authentication work? Long-lived tokens? OAuth? Session management?
- **Routing**: File-based (Next.js App Router) or React Router? Nested routes for settings?
- **Build system**: Vite? Next.js? CRA? Expo for native? What's the right bundler?
- **Card/plugin system**: How do third-party cards work? Dynamic imports? Module federation? Registry?

### Component Tree

- **Core UI components**: What's shared vs specific to pages? Button, card, input, dialog, toast?
- **Dashboard/Lovelace**: How do panels, views, cards, and badges relate?
- **Agent workspace**: How does the multi-turn chat UI compose? What sub-components?
- **Multi-agent dashboard**: How is the agent list, detail, and monitoring composed?
- **Settings pages**: How are they organized? What's the component hierarchy?
- **Mobile navigation**: Bottom tabs? Sidebar? Stack navigation?

### Data Flow

- **State → UI binding**: How do entity state changes flow to the UI? WebSocket events → store → components?
- **Optimistic updates**: When to update locally before server confirms? How to handle conflicts?
- **Offline support**: What works without internet? Local HA instance? Cached state?
- **Cross-tab sync**: If open in multiple tabs, how do they stay in sync?

### Mobile Considerations

- **Expo usage**: What parts are native vs web? Push notifications? Camera? Biometrics?
- **Responsive breakpoints**: Same as web/ or different for mobile?
- **Touch gestures**: Swipe to dismiss? Long press for context? Pull to refresh?
- **Bottom sheet navigation**: For settings, device detail, agent detail?

### Design Integration

- **Theme reuse**: How to share the cosmic theme from web/ without duplicating?
- **CSS variables**: Same HSL variable names? Tailwind v4 preset?
- **Component porting**: Which shadcn/ui components from web/ need porting to mobile?
- **Dark/light mode**: Does mobile need light mode? How to handle?

### Agent Workspace Specifics

- **Message rendering**: How to render user messages, assistant messages, tool calls, tool results?
- **Streaming**: How to handle streaming text and tool calls? SSE → text chunks → rendered?
- **Multi-turn context**: How is the conversation history managed? Pagination? Infinite scroll?
- **Agent status**: How to show thinking, waiting, error states?

## Plan Format

After research, produce a detailed plan covering:

1. **Tech stack decision** with rationale for each choice
2. **Monorepo package structure** (packages/, apps/, shared/)
3. **Complete component tree** organised by domain
4. **Data flow diagram** (in text or mermaid)
5. **Route map** (all pages and their URL structure)
6. **State management architecture** (stores, slices, derivations)
7. **File/folder structure** for the app/ directory
8. **Build and deployment** strategy
9. **Milestone plan** (phases, order of implementation)
10. **Key risks and unknowns**

## Before Starting

After completing the research and creating the initial plan, ask me **20 questions** to refine and validate the direction before full implementation begins. The questions should cover areas where:

- Multiple valid approaches exist (trade-offs need owner input)
- The current plan makes assumptions that should be verified
- Preference-based decisions that affect the user experience
- Technical constraints or unknowns that need input

These questions should be specific, actionable, and force a decision — not open-ended "what do you think?" questions. Each question should have clear options with trade-offs explained.
