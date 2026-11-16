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
release_tags="${work_dir}/tags.json"
tag_pattern='^([a-z0-9-]+/)?v[0-9]'
app_paths="${work_dir}/paths.json"

applications=()
while IFS= read -r application; do
    applications+=("${application}")
done < <(jq -r '.[]' <<< "${AFFECTED_APPS}")
if (( ${#applications[@]} == 0 )); then
    exit 0
fi

# The context includes `v<version>` tags and `<app>/v<version>` tags.
# `previous` contains a copy of the earlier release. The template does not use
# it, and it makes the context much larger.
git-cliff --config cliff.toml --tag-pattern "${tag_pattern}" --context |
    jq -c 'map(.previous = null)' > "${context}"
# git-cliff keeps one tag for each commit. Map each commit to all of its
# release tags, so that apps released from the same commit each get a release.
git for-each-ref refs/tags \
    --format='%(if)%(*objectname)%(then)%(*objectname)%(else)%(objectname)%(end) %(refname:short)' |
    jq -R -s -c --arg pattern "${tag_pattern}" '
        split("\n")
        | map(select(length > 0) | split(" ") | select(.[1] | test($pattern)))
        | reduce .[] as [$id, $tag] ({}; .[$id] += [$tag])
    ' > "${release_tags}"
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
    # A release of a different app is not a release of this app, so its commits
    # move to the next newer release of this app, or to the unreleased section.
    # Releases are newest first and commits are oldest first.
    # Releases without app commits are removed.
    git log --format=%H --full-history HEAD -- "${pathspecs[@]}" |
        jq -R -s -c --arg app "${application}" --slurpfile releases "${context}" \
            --slurpfile tags "${release_tags}" '
            (split("\n") | map({ key: ., value: true }) | from_entries) as $ids
            | $releases[0]
            | map(
                # The app tag wins over a `v<version>` tag on the same commit.
                (($tags[0][.commit_id // ""] // [])
                    | map(select(startswith($app + "/")))
                        + map(select(contains("/") | not))
                    | first) as $own
                | if $own then .version = $own else . end
            )
            | reverse
            | reduce .[] as $release ({ releases: [], pending: [] };
                (($release.version // "") | split("/")) as $tag
                | if ($tag | length) == 1 or $tag[0] == $app then
                    .releases += [$release + { commits: (.pending + $release.commits) }]
                    | .pending = []
                else
                    .pending += $release.commits
                    | .last = $release
                end)
            | if .pending == [] then .releases
              else .releases + [.last + { version: null, commits: .pending }]
              end
            | reverse
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
