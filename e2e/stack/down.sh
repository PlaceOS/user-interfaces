#!/usr/bin/env bash
# Stop the isolated e2e stack. Pass --volumes to destroy its data too.
# The driver binaries volume is kept; `up.sh --fresh` removes it.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
docker compose -p "${E2E_STACK_PROJECT:-placeos-e2e}" down --remove-orphans "$@"
