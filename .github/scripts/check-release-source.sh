#!/usr/bin/env bash
# Fails unless `develop` or a `hotfix/*` branch on origin contains HEAD.
# Release tags run this, so that they only release commits on those branches.
# It does not check who pushed the commit or the tag.
# Needs a checkout that fetched all branches (`fetch-depth: 0`).

set -euo pipefail

# Read the full list first. With pipefail, `grep -q` can stop the pipe early
# and make `git branch` fail.
branches="$(git branch --remotes --contains HEAD --format='%(refname:short)')"
if grep -Eq '^origin/(develop|hotfix/.+)$' <<< "${branches}"; then
    exit 0
fi

echo '::error::Release tags must be on a commit in develop or a hotfix/* branch.'
exit 1
