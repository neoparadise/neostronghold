# AI Developer Guide — Citadel Evolve Monolith

This repository is a **git submodule monolith** for NeoParadise's Citadel Evolve smart home platform. It contains two submodules:

- **`core/`** — Python backend (fork of Home Assistant Core)
- **`frontend/`** — TypeScript/Lit web frontend (fork of Home Assistant Frontend)

Do NOT write substantial code in this repo directly. All code lives in the submodules. This repo exists to provide a unified clone, development, and CI experience.

## Working with Submodules

### First-time setup

```bash
git clone --recurse-submodules git@github.com:neoparadise/citadelevolve.git
```

If already cloned without submodules:

```bash
git submodule update --init --recursive
```

### Pulling latest from submodules

```bash
git submodule update --remote --merge
```

This pulls `main` in both submodules. To update a specific submodule:

```bash
git submodule update --remote --merge core
# or
git submodule update --remote --merge frontend
```

### Committing submodule changes

Changes to core or frontend should be **committed and pushed in their respective repos first**, then the monolith submodule pointer is updated:

```bash
# 1. Work in the submodule
cd core
git checkout -b my-feature
# ... make changes ...
git commit -m "..."
git push origin my-feature

# 2. Open a PR in citadelevolve-core, merge to main

# 3. Update the monolith pointer
cd ..
git add core
git commit -m "chore: update core submodule to latest main"
git push
```

## Submodule-Specific Guidelines

Refer to the AGENTS.md file in each submodule for language-specific coding standards, test commands, and architecture details:

| Submodule | File | Tech Stack |
|---|---|---|
| **core** | [core/AGENTS.md](core/AGENTS.md) | Python 3.14, asyncio, aiohttp, SQLAlchemy |
| **frontend** | [frontend/AGENTS.md](frontend/AGENTS.md) | TypeScript, Lit Web Components, Rspack |

### Core Key Commands

```bash
cd core
script/setup              # One-time: install deps
uv run pytest             # Run tests
script/develop            # Start dev instance
```

### Frontend Key Commands

```bash
cd frontend
script/setup              # One-time: install deps
yarn lint                 # ESLint + Prettier + TypeScript + Lit
yarn test                 # Vitest
script/develop            # Start dev server
```

## Testing

There are no tests at the monolith level. All tests live in the submodules. Run them with the commands above.

## Pull Requests

When a PR touches both submodules (e.g., a backend API change + frontend UI), create separate PRs in each submodule repo and link them cross-referencing the PR numbers.

## Deployment

Deployment is handled per-submodule:
- **core** — Docker image (see `core/Dockerfile`)
- **frontend** — Python wheel published to PyPI (see `frontend/pyproject.toml`), bundled with core for user-facing delivery
