#!/usr/bin/env bash
# Delete build/* deploy branches whose source branch no longer exists.
#
# Covers build/feat/*, build/fix/* and build/custom/* — each maps to a source
# branch = its path minus the leading "build/" and the trailing app segment
# (e.g. build/feat/foo/workplace -> feat/foo, build/custom/ACME/workplace ->
# custom/ACME). When that source branch is gone the deploy is orphaned and
# removed. Release targets (build/<app>/dev|prod) have no transient source and
# are never touched here — their history is handled by thin-build-branches.sh.
#
# Usage:
#   tools/cleanup-build-branches.sh            # dry-run, report only
#   tools/cleanup-build-branches.sh --delete   # actually delete the orphans
#
# ponytail: one ls-remote, no fetch; pure name matching against the head list.
set -euo pipefail

REMOTE=${REMOTE:-origin}
MODE=dryrun
case "${1:-}" in --delete) MODE=delete ;; esac

# Snapshot every remote head once; membership test is exact-line match.
heads=$(git ls-remote --heads "$REMOTE" | sed 's#.*refs/heads/##')
exists() { printf '%s\n' "$heads" | grep -qxF "$1"; }

to_delete=()
while IFS= read -r b; do
  [ -z "$b" ] && continue
  src="${b#build/}"; src="${src%/*}"   # drop "build/" prefix + trailing app
  if exists "$src"; then
    echo "keep    $b  (source $src exists)"
  else
    echo "ORPHAN  $b  (source $src gone)"
    to_delete+=("$b")
  fi
done < <(printf '%s\n' "$heads" | grep -E '^build/(feat|fix|custom)/' || true)

echo "orphans: ${#to_delete[@]}"

if [ "$MODE" = delete ] && [ "${#to_delete[@]}" -gt 0 ]; then
  git push "$REMOTE" --delete "${to_delete[@]}"
  echo "deleted ${#to_delete[@]} orphaned build branches"
elif [ "$MODE" = dryrun ]; then
  echo "DRY RUN. Re-run with --delete to apply."
fi
