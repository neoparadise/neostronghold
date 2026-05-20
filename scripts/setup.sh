#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "=== Setting up core (Python backend) ==="
cd "$ROOT_DIR/core"

# Create venv with uv if available, else system python3
if ! [ -x "$(command -v uv)" ]; then
  echo "Installing uv..."
  curl -LsSf https://astral.sh/uv/install.sh | sh
  export PATH="$HOME/.local/bin:$PATH"
fi

if [ ! -d ".venv" ]; then
  uv venv .venv
fi
source .venv/bin/activate

# Install core + test deps (skip optional integration deps that need system packages)
uv pip install -e . -r requirements_test.txt colorlog

# Run remaining setup steps
python3 -m script.translations develop --all
mkdir -p config
prek install 2>/dev/null || true

echo ""
echo "=== Setting up frontend (TypeScript/Lit) ==="
cd "$ROOT_DIR/frontend"

# Ensure node version matches .nvmrc
if [ -f ".nvmrc" ]; then
  DESIRED_NODE=$(cat .nvmrc)
  if command -v nvm &>/dev/null; then
    nvm install "$DESIRED_NODE"
  elif [ "$(node -v 2>/dev/null)" != "v${DESIRED_NODE}" ]; then
    echo "Warning: frontend expects Node $DESIRED_NODE, have $(node -v). Install nvm or the correct version."
  fi
fi

# Ensure yarn is available
if ! command -v yarn &>/dev/null; then
  npm install -g yarn --prefix "$HOME/.local" 2>/dev/null || {
    echo "Error: yarn not found. Install it from https://yarnpkg.com/getting-started/install"
    exit 1
  }
  export PATH="$HOME/.local/bin:$PATH"
fi

script/setup

echo ""
echo "Done. Run ./scripts/dev.sh to start development servers."
