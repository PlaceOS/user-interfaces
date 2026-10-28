#!/usr/bin/env bash
# Bring up an isolated PlaceOS stack for e2e and seed it.
#
# Safe to run alongside a developer's own PlaceOS/local stack: this is its own
# compose project on its own network with its own volumes, on shifted ports.
# It never touches the `placeos` project.
#
#   ./up.sh              bring up (reuses volumes if present)
#   ./up.sh --fresh      destroy volumes first — a genuine cold start
#                        (this also removes the driver binaries)
#   ./up.sh --pull       pull the current images first (CI does this every run)
#   ./up.sh --pull-only  pull and stop (CI runs this as its own bounded step)
#   ./down.sh            stop
# -E (errtrace) is load-bearing: without it the ERR trap below is NOT inherited by
# shell functions, so a failure inside `dc()` would exit silently and the
# diagnostics would never run. Verified by breaking a service on purpose.
set -euEo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

PROJECT=${E2E_STACK_PROJECT:-placeos-e2e}
# Must match the `core-drivers` volume name in docker-compose.yml.
DRIVERS_VOLUME="${PROJECT}-core-drivers"
HTTPS_PORT=${E2E_HTTPS_PORT:-9443}
export E2E_HTTPS_PORT
export E2E_DOMAIN=${E2E_DOMAIN:-localhost:${HTTPS_PORT}}

# ALWAYS run compose from this directory with an explicit -p. A bare
# `docker compose` elsewhere picks up whatever compose file is nearby under the
# same project name and starts a completely different stack.
dc() { docker compose -p "$PROJECT" "$@"; }

fresh=false
pull=false
pull_only=false
for arg in "$@"; do
    case "$arg" in
        --fresh) fresh=true ;;
        --pull) pull=true ;;
        --pull-only) pull=true; pull_only=true ;;
        *) echo "unknown option: $arg" >&2; exit 64 ;;
    esac
done

step() { printf '\n\033[1m== %s\033[0m\n' "$1"; }

if [[ "$fresh" == true ]]; then
    step "tearing down (volumes included)"
    dc down --volumes --remove-orphans || true
    docker volume rm --force "$DRIVERS_VOLUME" >/dev/null
fi

# The driver binaries volume is external to the compose project, so that
# `down.sh --volumes` keeps it between runs. Compose does not create an external
# volume. Idempotent: an existing volume is kept.
docker volume create "$DRIVERS_VOLUME" >/dev/null

# ---------------------------------------------------------------------------
# Secrets live in .secrets/, generated below and never committed. The env files
# are created empty first: compose refuses to load the project while an
# env_file is missing, and the pull needs the project loaded.
mkdir -p .secrets
touch .secrets/.env.secret_key .secrets/.env.public_key

if [[ "$pull" == true ]]; then
    step "pulling images"
    # Each image pulls on its own: one that fails is reported and the rest still
    # update. The stack then runs on whatever is present, and CI's "Record
    # backend inputs" step shows which images that was.
    dc pull --ignore-pull-failures
    if [[ "$pull_only" == true ]]; then exit 0; fi
fi

# The init image's generator is the same one PlaceOS/local uses, so the key
# material is shaped identically. Idempotent: existing values are kept, not
# rotated.
step "secrets"
if ! grep -q 'JWT_SECRET' .secrets/.env.secret_key 2>/dev/null; then
    printf 'PLACE_EMAIL=%s\nPLACE_PASSWORD=%s\n' \
        "${E2E_ADMIN_EMAIL:-support@place.tech}" \
        "${E2E_ADMIN_PASSWORD:-development}" > .secrets/.env
    docker run --rm -w /tmp/secrets -v "$PWD/.secrets:/tmp/secrets" \
        -e PLACE_EMAIL="${E2E_ADMIN_EMAIL:-support@place.tech}" \
        -e PLACE_PASSWORD="${E2E_ADMIN_PASSWORD:-development}" \
        "placeos/init:${PLACEOS_TAG:-latest}" generate-secrets >/dev/null
    # SECRET_KEY_BASE must be exactly 30 chars — nginx's lua HMAC and auth.cr
    # both key off it, and they disagree with anything longer.
    awk -F'=' '{ if ($1 == "SECRET_KEY_BASE") print $1"="substr($2,1,30); else print }' \
        .secrets/.env.secret_key > .secrets/.tmp && mv .secrets/.tmp .secrets/.env.secret_key
    echo "  generated"
else
    echo "  present (not rotated)"
fi

# ---------------------------------------------------------------------------
# Self-diagnose on failure.
#
# `compose --wait` reports only "container X is unhealthy" and exits. On a CI
# runner that is the whole of the evidence unless something dumps more, and the
# first GitHub Actions run failed with exactly that one line — the reason
# (Elasticsearch refusing to boot without a memlock rlimit) was in a container log
# nobody had collected. Print state and logs for EVERY service here, so the step
# output alone explains the failure.
diagnose() {
    echo
    echo "=== compose ps ==="
    dc ps --all || true
    echo
    echo "=== logs (all services, last 60 lines each) ==="
    dc logs --tail 60 || true
}
trap 'rc=$?; [[ $rc -ne 0 ]] && diagnose; exit $rc' ERR

step "starting services"
# Bounded so a stuck container fails with a clear message rather than hanging
# until the job timeout.
dc up -d --wait --wait-timeout 300 postgres elastic redis
dc up -d search-ingest frontend-loader auth rest-api staff-api nginx

step "waiting for the API"
for i in $(seq 1 60); do
    code=$(curl -sk -o /dev/null -w '%{http_code}' "https://localhost:${HTTPS_PORT}/api/engine/v2/" || true)
    [[ -n "$code" && "$code" != "000" ]] && break
    sleep 2
done
[[ -n "${code:-}" && "$code" != "000" ]] || { echo "backend never answered on :${HTTPS_PORT}"; exit 1; }
echo "  https://localhost:${HTTPS_PORT} -> HTTP $code"

# ---------------------------------------------------------------------------
# frontend-loader clones PlaceOS/www-core into the shared volume on startup.
# Until it lands, nginx serves a bare 404 at /login and the real-login spec
# dead-ends on a browser error page rather than a form.
step "waiting for the platform login page (frontend-loader -> www volume)"
for i in $(seq 1 60); do
    lcode=$(curl -sk -o /dev/null -w '%{http_code}' "https://localhost:${HTTPS_PORT}/login" || true)
    [[ "$lcode" == "200" ]] && break
    sleep 2
done
[[ "${lcode:-}" == "200" ]] || { echo "/login never became available (got ${lcode:-none}); check: docker compose -p ${PROJECT} logs frontend-loader"; exit 1; }
echo "  /login -> 200"

# `init start` creates the authority, admin user, backoffice OAuth app and the
# placeholder zone hierarchy (org -> building -> level) that workplace needs to
# avoid /misconfigured.
step "seeding platform entities (init)"
dc run --rm init start

# After init: core subscribes to the driver and module tables as it starts, and
# a core that comes up before the migrations have created them stops managing
# drivers for good while still answering HTTP.
step "starting core"
dc up -d core

# Core fails at startup when its image is older than the migrations init ran
# (e.g. "Conflicting CDC update policy"), and Docker restarts it forever. The
# seed's driver wait would then time out after many minutes with no hint why.
step "checking core stays up"
core_id=$(dc ps -q core)
for i in $(seq 1 15); do
    sleep 2
    restarts=$(docker inspect -f '{{.RestartCount}}' "$core_id")
    running=$(docker inspect -f '{{.State.Running}}' "$core_id")
    if [[ "$restarts" != "0" || "$running" != "true" ]]; then
        echo "core is not staying up (restarts=${restarts}, running=${running}). Last log lines:"
        docker logs --tail 40 "$core_id" 2>&1 | grep -v '^  from ???' | tail -15
        echo
        echo "PlaceOS image build dates:"
        dc config --images 2>/dev/null | sort -u | grep '^placeos/' | while read -r image; do
            printf '  %-40s %s\n' "$image" "$(docker image inspect -f '{{.Created}}' "$image" | cut -c1-10)"
        done
        echo
        echo "If the dates differ by weeks, the images are from different releases: rerun with --pull --fresh."
        exit 1
    fi
done
echo "  core up for 30s with no restarts"

# source subscribes to the module tables at startup, so it comes up after init
# for the same reason core does. It publishes nothing until the seed below
# gives it a Broker row.
step "starting source and mosquitto"
dc up -d mosquitto source

# The last step of the seed waits for core to hold the suite's driver binaries.
# A binary already in the drivers volume is used at once. Otherwise a commit the
# build farm has already built for this CPU architecture is a download; one it
# has not takes a few minutes.
step "seeding e2e fixtures"
cd ../..
E2E_BACKEND_URL="https://localhost:${HTTPS_PORT}" bunx tsx e2e/support/seed.ts
E2E_BACKEND_URL="https://localhost:${HTTPS_PORT}" bunx tsx e2e/support/room/room.seed.ts
E2E_BACKEND_URL="https://localhost:${HTTPS_PORT}" bunx tsx e2e/support/mqtt/mqtt.seed.ts
E2E_BACKEND_URL="https://localhost:${HTTPS_PORT}" bunx tsx e2e/support/stagehand/stagehand.seed.ts

printf '\n\033[32mstack ready\033[0m  backend=https://localhost:%s  project=%s\n' "$HTTPS_PORT" "$PROJECT"
printf 'run the suite with:\n  E2E_BACKEND_URL=https://localhost:%s bunx playwright test --config apps/workplace/playwright.config.ts\n' "$HTTPS_PORT"
