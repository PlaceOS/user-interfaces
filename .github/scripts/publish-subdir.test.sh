#!/usr/bin/env bash

set -euo pipefail

publisher="$(cd "$(dirname "$0")" && pwd)/publish-subdir.sh"
test_root="$(mktemp -d)"
trap 'rm -rf -- "$test_root"' EXIT

git init --bare --quiet "$test_root/remote.git"
git clone --quiet "$test_root/remote.git" "$test_root/source"
cd "$test_root/source"
git config user.name Test
git config user.email test@example.com
git commit --quiet --allow-empty -m source

mkdir build
cp "$publisher" build/index.html
BRANCH=build/app/dev FOLDER=build MESSAGE='build(app): [{sha}] CI build' "$publisher"
before="$(git ls-remote origin refs/heads/build/app/dev | cut -f1)"

cp "$publisher" build/app.js
output="$(DRY_RUN=true BRANCH=build/app/dev FOLDER=build MESSAGE='build(app): [{sha}] CI build' "$publisher")"
after="$(git ls-remote origin refs/heads/build/app/dev | cut -f1)"

[[ "$output" == *'Dry run: would push HEAD to build/app/dev'* ]]
[[ "$output" == *'app.js'* ]]
[[ "$before" == "$after" ]]
