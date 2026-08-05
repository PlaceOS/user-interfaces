#!/usr/bin/env bash

set -euo pipefail

: "${BRANCH:?BRANCH must be set}"
: "${FOLDER:?FOLDER must be set}"
: "${MESSAGE:?MESSAGE must be set}"

source_sha="$(git rev-parse HEAD)"
message="${MESSAGE//\{sha\}/${source_sha:0:7}}"
temp_dir="$(mktemp -d)"
worktree="$temp_dir/repo"

cleanup() {
    if [[ -e "$worktree/.git" ]]; then
        git worktree remove --force "$worktree"
    fi
    rmdir "$temp_dir" 2>/dev/null || true
}
trap cleanup EXIT

if git ls-remote --exit-code --heads origin "refs/heads/$BRANCH" >/dev/null; then
    git fetch --depth=1 origin "refs/heads/$BRANCH:refs/remotes/origin/$BRANCH"
    git worktree add --detach "$worktree" "refs/remotes/origin/$BRANCH"
else
    git worktree add --detach "$worktree" HEAD
    git -C "$worktree" checkout --orphan "$BRANCH"
fi

git -C "$worktree" rm --quiet -rf --ignore-unmatch .
cp -a "$FOLDER/." "$worktree/"
git -C "$worktree" add -A
git -C "$worktree" \
    -c user.name="${GITHUB_ACTOR:-GitHub Actions}" \
    -c user.email="${GITHUB_ACTOR:-github-actions}@users.noreply.github.com" \
    commit --quiet --allow-empty -m "$message"

if [[ "${DRY_RUN:-false}" == true ]]; then
    echo "Dry run: would push HEAD to $BRANCH"
    git -C "$worktree" show --stat --oneline --summary HEAD
    exit 0
fi

git -C "$worktree" push origin "HEAD:refs/heads/$BRANCH"
