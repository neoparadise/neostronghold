# Citadel Evolve

**Making smart home accessible to every home in South Africa.**

Citadel Evolve is an open-source smart home platform by **NeoParadise**, forked from [Home Assistant](https://www.home-assistant.io). This repository is the monolith — a single entry point containing both the backend and frontend as git submodules.

## Repository Structure

```
citadelevolve/
├── core/        → citadelevolve-core   (Python/Home Assistant fork)
├── frontend/    → citadelevolve-frontend (TypeScript/Lit web UI)
├── README.md
└── AGENTS.md
```

| Submodule | Description | Language | Remote |
|---|---|---|---|
| **[core](https://github.com/neoparadise/citadelevolve-core)** | Smart home backend: device automation, integrations, API | Python 3.14+ | `git@github.com:neoparadise/citadelevolve-core.git` |
| **[frontend](https://github.com/neoparadise/citadelevolve-frontend)** | Web UI dashboard and control interface | TypeScript 6 / Lit | `git@github.com:neoparadise/citadelevolve-frontend.git` |

### Submodule Branches

Both submodules track the `main` branch. For active development, work on feature branches and merge into `main`.

## Quick Start

### Clone with submodules

```bash
git clone --recurse-submodules git@github.com:neoparadise/citadelevolve.git
cd citadelevolve
```

If you already cloned without `--recurse-submodules`:

```bash
git submodule update --init --recursive
```

### Core (Backend)

See [core/AGENTS.md](core/AGENTS.md) for detailed guidelines.

```bash
cd core
script/setup          # Set up Python venv + deps
uv run pytest         # Run tests
```

Python 3.14+ required.

### Frontend (UI)

See [frontend/AGENTS.md](frontend/AGENTS.md) for detailed guidelines.

```bash
cd frontend
script/setup          # Install Node dependencies
script/develop        # Start dev server
yarn test             # Run tests
```

Node.js 24.15+ required.

## License

Apache 2.0 — see each submodule's `LICENSE.md` for details.
