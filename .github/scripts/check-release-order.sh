#!/usr/bin/env bash
# Fails unless HEAD contains the source commit of the current build on BRANCH,
# so that an older release tag cannot replace a newer production build.
# Release jobs run this just before the deploy. A new branch passes.
# Uses the GitHub compare API, because build jobs use a shallow checkout.
# Needs GH_TOKEN with `contents: read`.

set -euo pipefail

: "${BRANCH:?BRANCH must be set}"
: "${GITHUB_REPOSITORY:?GITHUB_REPOSITORY must be set}"

head_sha="$(git rev-parse HEAD)"

# `git ls-remote --exit-code` exits with 2 when the branch does not exist.
status=0
git ls-remote --exit-code --heads origin "refs/heads/${BRANCH}" >/dev/null || status=$?
if (( status == 2 )); then
    echo "${BRANCH} has no build yet."
    exit 0
elif (( status != 0 )); then
    exit "${status}"
fi

# publish-subdir.sh writes the short source commit as `[<sha>]` in the subject.
git fetch --quiet --depth=1 origin "refs/heads/${BRANCH}"
subject="$(git log -1 --format=%s FETCH_HEAD)"
if ! [[ "${subject}" =~ \[([0-9a-f]{7,40})\] ]]; then
    echo "::error::Cannot read the source commit of ${BRANCH} from \"${subject}\"."
    exit 1
fi
build_sha="${BASH_REMATCH[1]}"

comparison="$(
    gh api "repos/${GITHUB_REPOSITORY}/compare/${build_sha}...${head_sha}" \
        --jq '.status'
)"
case "${comparison}" in
    ahead | identical)
        echo "${head_sha:0:7} contains the ${BRANCH} build ${build_sha}."
        ;;
    *)
        echo "::error::${head_sha:0:7} does not contain ${build_sha}, the source of the current ${BRANCH} build (${comparison}). Tag a newer commit."
        exit 1
        ;;
esac
