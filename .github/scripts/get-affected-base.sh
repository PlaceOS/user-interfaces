#!/usr/bin/env bash
# Prints the commit that CI compares with HEAD to find affected projects.
# Uses the latest successful run of this workflow on this branch, so a push
# with many commits, or a push after a failed run, builds every affected app.
# Falls back to the commit before the push, then to HEAD~1.
# Needs a full clone and a GH_TOKEN with `actions: read`.

set -euo pipefail

: "${GITHUB_WORKFLOW:?GITHUB_WORKFLOW must be set}"
: "${GITHUB_REF_NAME:?GITHUB_REF_NAME must be set}"
: "${GITHUB_SHA:?GITHUB_SHA must be set}"

# A usable base is a different commit that HEAD contains.
# Force pushes can remove old commits from the branch history.
is_usable_base() {
    [[ -n "$1" && "$1" != "$GITHUB_SHA" ]] &&
        git cat-file -e "$1^{commit}" 2>/dev/null &&
        git merge-base --is-ancestor "$1" HEAD
}

successful_shas="$(
    gh run list \
        --workflow "$GITHUB_WORKFLOW" \
        --branch "$GITHUB_REF_NAME" \
        --status success \
        --limit 20 \
        --json headSha \
        --jq '.[].headSha' ||
        echo 'Could not read earlier workflow runs' >&2
)"

while IFS= read -r sha; do
    if is_usable_base "$sha"; then
        echo "$sha"
        exit 0
    fi
done <<< "$successful_shas"

# GitHub sets PUSH_BEFORE to zeros for a new branch.
if is_usable_base "${PUSH_BEFORE:-}"; then
    echo "$PUSH_BEFORE"
    exit 0
fi

echo 'HEAD~1'
