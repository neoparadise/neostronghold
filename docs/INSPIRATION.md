# Inspiration — Reference Implementations

This directory contains three reference codebases that inform the design of the neostronghold app:

| Repo | Path | Purpose |
|---|---|---|
| Home Assistant Frontend | `inspiration/frontend/` | Reference smart home UI (Lovelace, dashboards, device controls) |
| openclaw | `inspiration/openclaw/` | Multi-agent orchestration, agent lifecycle management |
| opencode (opencode-ai) | `inspiration/opencode/` | AI agent interface design, tool-use patterns, workspace UX |

## Design Goals

The neostronghold `app/` will be a **complete rewrite** of the Home Assistant frontend with:

- **PnPM + React + shadcn/ui** — replacing Lit + Polymer
- **Expo** — for mobile-native experiences
- **Same cosmic theme** as `web/` (deep space, cyan accent, glassmorphism)
- **Multi-agent workspace** — an opencode-like interface for interacting with AI agents
- **Openclaw-like orchestration** — manage multiple agents, their lifecycles, and tool-use permissions

## What to Steal (Architecturally)

### From Home Assistant Frontend
- Lovelace dashboard card system — how cards register, render, and manage state
- Entity state management — how device states flow from backend to UI
- Area/device/entity hierarchy — the data model that powers the smart home
- HACS (community store) pattern — how third-party cards and integrations work

### From opencode
- Agent chat interface — the message turn UI, tool call rendering, streaming responses
- `ComputerUse` / tool execution protocol — how the agent interacts with the system
- Session management — how conversations and context are maintained
- Settings/preferences UX — how users configure agent behavior

### From openclaw
- Multi-agent lifecycle — spawning, monitoring, stopping agents
- Agent-to-agent communication — how agents delegate tasks
- Resource allocation — memory, context window, tool access per agent
- Dashboard for running agents — status, logs, metrics per agent

## Key Architecture Decisions (to Make)

All decisions should be documented here as they are made during the build of `app/`.

| Decision | Considerations |
|---|---|
| **State management** | Zustand vs Jotai vs Redux vs React Query |
| **API transport** | WebSocket (HA-native) vs REST vs SSE |
| **Card system** | Plugin architecture vs hardcoded vs dynamic import |
| **Offline support** | Service worker, IndexedDB, local HA instance |
| **Mobile** | Expo (web + native) vs PWA-only |
| **Backend** | Forked HA core (Python) vs new backend |
