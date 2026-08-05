#!/usr/bin/env bash
# Stop the isolated e2e stack. Pass --volumes to destroy its data too.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
docker compose -p "${E2E_STACK_PROJECT:-placeos-e2e}" down --remove-orphans "$@"
