#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

usage() {
  cat <<EOF
Usage: dev.sh [core|frontend|all]

Start development servers for Citadel Evolve submodules.
  core      - Python backend (Home Assistant Core fork)
  frontend  - TypeScript/Lit frontend (Home Assistant Frontend fork)
  all       - Run both (default)
EOF
  exit 1
}

start_core() {
  echo "Starting core (Python backend)..."
  cd "$ROOT_DIR/core"
  # Use venv if available, else fall back to system python3
  if [ -f ".venv/bin/activate" ]; then
    source .venv/bin/activate
  fi
  python3 -m script.translations develop --all
  python3 -m homeassistant -c config
}

start_frontend() {
  echo "Starting frontend (TypeScript/Lit)..."
  cd "$ROOT_DIR/frontend"
  script/develop
}

MODE="${1:-all}"

case "$MODE" in
  core)
    start_core
    ;;
  frontend)
    start_frontend
    ;;
  all)
    echo "Starting both core and frontend..."
    start_core &
    PID_CORE=$!
    start_frontend &
    PID_FRONTEND=$!
    trap "kill $PID_CORE $PID_FRONTEND 2>/dev/null" EXIT
    wait
    ;;
  *)
    usage
    ;;
esac
