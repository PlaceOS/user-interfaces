#!/usr/bin/env bash

# Writes ${CHANGELOG_DIR}/<app>/CHANGELOG.md for each app in AFFECTED_APPS.
#
# git-cliff calculates diff statistics for each commit in the history, and this
# is almost all of its run time. So git-cliff reads the history one time. Then
# each changelog uses only the commits that change the app paths.

set -euo pipefail

: "${AFFECTED_APPS:?AFFECTED_APPS must be set}"
: "${CHANGELOG_DIR:?CHANGELOG_DIR must be set}"

max_parallel="${MAX_PARALLEL:-2}"
if ! [[ "$max_parallel" =~ ^[1-9][0-9]*$ ]]; then
    echo 'MAX_PARALLEL must be a positive integer' >&2
    exit 1
fi

work_dir="$(mktemp -d)"
trap 'rm -rf "${work_dir}"' EXIT
context="${work_dir}/context.json"
app_paths="${work_dir}/paths.json"

applications=()
while IFS= read -r application; do
    applications+=("${application}")
done < <(jq -r '.[]' <<< "${AFFECTED_APPS}")
if (( ${#applications[@]} == 0 )); then
    exit 0
fi

# `previous` contains a copy of the earlier release. The template does not use
# it, and it makes the context much larger.
git-cliff --config cliff.toml --context | jq -c 'map(.previous = null)' > "${context}"
node ./tools/get-changelog-paths.js "${applications[@]}" > "${app_paths}"

generate_changelog() {
    local application="$1"
    local output="${CHANGELOG_DIR}/${application}/CHANGELOG.md"
    local app_context="${work_dir}/${application}.json"
    local pathspecs=()

    mkdir -p "$(dirname "${output}")"
    while IFS= read -r include_path; do
        pathspecs+=(":(glob)${include_path}")
    done < <(jq -r --arg app "${application}" '.[$app][]' "${app_paths}")

    # --full-history selects the same commits as git-cliff --include-path.
    # Releases without app commits are removed.
    git log --format=%H --full-history HEAD -- "${pathspecs[@]}" |
        jq -R -s -c --slurpfile releases "${context}" '
            (split("\n") | map({ key: ., value: true }) | from_entries) as $ids
            | $releases[0]
            | map(.commits |= map(select($ids[.id])))
            | map(select(.commits | length > 0))
        ' > "${app_context}"
    git-cliff --config cliff.toml --from-context "${app_context}" --output "${output}"
}

mkdir -p "${CHANGELOG_DIR}"
pids=()
for application in "${applications[@]}"; do
    generate_changelog "${application}" &
    pids+=("$!")

    if (( ${#pids[@]} >= max_parallel )); then
        wait "${pids[0]}"
        pids=("${pids[@]:1}")
    fi
done

for pid in "${pids[@]}"; do
    wait "${pid}"
done
