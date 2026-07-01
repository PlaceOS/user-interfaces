#!/usr/bin/env bash
# Thin orphan build/* branches by dropping redundant deploy snapshots.
#
# Each build commit is a full dist snapshot, so dropping a commit orphans its
# unique blobs -> reclaimed by the host's gc. History is rebuilt as a linear
# chain of the survivors, with each original tree/author/date/message preserved.
# prod/* branches are left untouched.
#
# Retention, relative to each branch's OWN last commit time T:
#   age <= 14d         : keep every commit
#   14d < age <= 60d   : keep the last commit of each DAY
#   60d < age <= 180d  : keep the last commit of each ISO week
#   age > 180d         : keep the last commit of each calendar month
#
# Usage:
#   tools/thin-build-branches.sh                # dry-run, ALL build/* branches
#   tools/thin-build-branches.sh --apply        # rewrite local refs, no push
#   tools/thin-build-branches.sh --push         # rewrite + force-push (implies --apply)
#   tools/thin-build-branches.sh --push build/workplace/dev build/control/dev
#
# Push uses --force-with-lease against the tip we fetched, so a deploy that
# lands mid-run is never clobbered (that branch is just skipped, next run gets it).
#
# ponytail: O(commits) per branch, single rebuild pass; fine for a few k commits.
set -euo pipefail

REMOTE=${REMOTE:-origin}
MODE=dryrun
case "${1:-}" in
  --apply) MODE=apply; shift ;;
  --push)  MODE=push;  shift ;;
esac

# commit-tree needs *some* committer identity present even though we override it
# per-commit below; give git a fallback so it never errors in a bare CI runner.
git config user.name  >/dev/null 2>&1 || git config user.name  'github-actions[bot]'
git config user.email >/dev/null 2>&1 || git config user.email '41898282+github-actions[bot]@users.noreply.github.com'

# Branch list: explicit args, else every build/* on the remote.
BRANCHES=()
if [ "$#" -gt 0 ]; then
  BRANCHES=("$@")
else
  while IFS= read -r b; do BRANCHES+=("$b"); done < <(
    git ls-remote --heads "$REMOTE" 'refs/heads/build/*' | sed 's#.*refs/heads/##')
fi

DAY=86400

thin_one() {
  local branch="$1"
  # Fetch just this branch into a temp ref. --filter=blob:none pulls only
  # commits+trees (no blobs): enough to analyse, rebuild commits, and push
  # (the remote already holds every blob we reference).
  git fetch -q --filter=blob:none "$REMOTE" "refs/heads/$branch:refs/thin/$branch"
  local base_sha
  base_sha=$(git rev-parse "refs/thin/$branch")

  # hash<TAB>epoch<TAB>YYYY-MM-DD<TAB>YYYY-MM<TAB>GGGG-VV (committer date), oldest -> newest
  local log
  log=$(git log --reverse --format='%H%x09%ct%x09%cd' \
        --date='format:%Y-%m-%d%x09%Y-%m%x09%G-%V' "refs/thin/$branch")

  local n_total survivors
  n_total=$(printf '%s\n' "$log" | grep -c . || true)

  # Pick survivors with awk; emit kept hashes in oldest->newest order.
  survivors=$(printf '%s\n' "$log" | awk -F'\t' -v day="$DAY" '
    { hash[NR]=$1; ct[NR]=$2; dy[NR]=$3; mon[NR]=$4; wk[NR]=$5; n=NR }
    END{
      if (n==0) exit
      T=ct[n]
      # Fed oldest->newest, so overwriting a bucket leaves the NEWEST index.
      for(i=1;i<=n;i++){
        age=T-ct[i]
        if(age<=14*day){ keep[i]=1 }             # <=2 weeks: keep all
        else if(age<=60*day){ dyidx[dy[i]]=i }   # 2wk-2mo:  last per day
        else if(age<=180*day){ wkidx[wk[i]]=i }  # 2mo-6mo:  last per week
        else { moidx[mon[i]]=i }                 # >6mo:     last per month
      }
      for(k in dyidx) keep[dyidx[k]]=1
      for(k in wkidx) keep[wkidx[k]]=1
      for(k in moidx) keep[moidx[k]]=1
      for(i=1;i<=n;i++) if(keep[i]) print hash[i]
    }')

  local n_keep
  n_keep=$(printf '%s\n' "$survivors" | grep -c . || true)

  printf '  %-45s %5d -> %5d commits\n' "$branch" "$n_total" "$n_keep"

  if [ "$n_keep" -ge "$n_total" ] || [ "$MODE" = dryrun ]; then
    git update-ref -d "refs/thin/$branch" 2>/dev/null || true
    return
  fi

  # Rebuild a fresh linear chain over the survivor trees.
  local parent="" new_tip="" tree h
  while IFS= read -r h; do
    [ -z "$h" ] && continue
    tree=$(git rev-parse "$h^{tree}")
    export GIT_AUTHOR_NAME GIT_AUTHOR_EMAIL GIT_AUTHOR_DATE
    export GIT_COMMITTER_NAME GIT_COMMITTER_EMAIL GIT_COMMITTER_DATE
    GIT_AUTHOR_NAME=$(git show -s --format='%an' "$h")
    GIT_AUTHOR_EMAIL=$(git show -s --format='%ae' "$h")
    GIT_AUTHOR_DATE=$(git show -s --format='%aI' "$h")
    GIT_COMMITTER_NAME=$(git show -s --format='%cn' "$h")
    GIT_COMMITTER_EMAIL=$(git show -s --format='%ce' "$h")
    GIT_COMMITTER_DATE=$(git show -s --format='%cI' "$h")
    if [ -z "$parent" ]; then
      new_tip=$(git show -s --format='%B' "$h" | git commit-tree "$tree")
    else
      new_tip=$(git show -s --format='%B' "$h" | git commit-tree "$tree" -p "$parent")
    fi
    parent="$new_tip"
  done <<< "$survivors"

  if [ "$MODE" = push ]; then
    # --force-with-lease: refuse if the remote tip moved since we fetched it
    # (a deploy landed mid-run) instead of clobbering it.
    if git push -q --force-with-lease="refs/heads/$branch:$base_sha" \
         "$REMOTE" "$new_tip:refs/heads/$branch"; then
      echo "    pushed: $branch now $n_keep commits (tip $new_tip)"
    else
      echo "    SKIPPED $branch: remote moved since fetch (deploy in flight); next run will catch it"
    fi
  else
    git update-ref "refs/thin/$branch" "$new_tip"
    echo "    rewritten locally at refs/thin/$branch (not pushed)"
    return
  fi
  git update-ref -d "refs/thin/$branch" 2>/dev/null || true
}

echo "mode=$MODE  remote=$REMOTE  branches=${#BRANCHES[@]}"
for b in "${BRANCHES[@]}"; do
  [ -z "$b" ] && continue
  case "$b" in */prod) echo "  $b  (prod, skipped)"; continue ;; esac
  thin_one "$b"
done

if [ "$MODE" = dryrun ]; then
  echo
  echo "DRY RUN. Re-run with --push to apply, or --apply to rewrite locally only."
fi
