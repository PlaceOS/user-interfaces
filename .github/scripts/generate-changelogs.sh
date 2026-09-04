#!/usr/bin/env bash

set -euo pipefail

: "${AFFECTED_APPS:?AFFECTED_APPS must be set}"
: "${CHANGELOG_DIR:?CHANGELOG_DIR must be set}"

max_parallel="${MAX_PARALLEL:-2}"
if ! [[ "$max_parallel" =~ ^[1-9][0-9]*$ ]]; then
    echo 'MAX_PARALLEL must be a positive integer' >&2
    exit 1
fi

generate_changelog() {
    local application="$1"
    local output="${CHANGELOG_DIR}/${application}/CHANGELOG.md"
    local args=()

    mkdir -p "$(dirname "${output}")"
    while IFS= read -r include_path; do
        args+=(--include-path "${include_path}")
    done < <(node ./tools/get-changelog-paths.js "${application}" | jq -r '.[]')
    git-cliff --config cliff.toml --output "${output}" "${args[@]}"
}

mkdir -p "${CHANGELOG_DIR}"
pids=()
while IFS= read -r application; do
    generate_changelog "${application}" &
    pids+=("$!")

    if (( ${#pids[@]} >= max_parallel )); then
        wait "${pids[0]}"
        pids=("${pids[@]:1}")
    fi
done < <(jq -r '.[]' <<< "${AFFECTED_APPS}")

for pid in "${pids[@]}"; do
    wait "${pid}"
done
