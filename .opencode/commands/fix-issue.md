---
description: Start a Jira issue workflow for work assigned to the current user and tagged with this repository name.
---

# Work Jira Issue Command

You are the orchestrator for implementing one Jira work item using the Atlassian CLI (`acli`). Follow the workflow end-to-end unless blocked by missing requirements, failing verification that cannot be resolved, or explicit user direction.

## Context

- **Repository Name:** !`basename "$(git rev-parse --show-toplevel)"`
- **Repository Root:** !`git rev-parse --show-toplevel`
- **Current Branch:** !`git branch --show-current`
- **Current Worktree:** !`git rev-parse --show-toplevel`
- **Worktree Directory:** !`printf '%s/.worktrees' "$(git rev-parse --show-toplevel)"`
- **Tester Config:** !`test -f "$(git rev-parse --show-toplevel)/config/testers" && sed -n '1,20p' "$(git rev-parse --show-toplevel)/config/testers" || true`
- **Git Status:** !`git status --short`
- **Raw Arguments:** $ARGUMENTS
- **First Positional Argument:** $1

## Argument Handling

Parse `$ARGUMENTS` as:

- `ISSUE-KEY`: optional Jira issue/work item key, usually matching `[A-Z][A-Z0-9]+-[0-9]+`. Prefer `$1` when it matches this pattern.
- `--status STATUS`: optional in-progress transition status. Default: `In Progress`.
- `--review-status STATUS`: optional final transition status. Default: `Testing`.
- `--commit-behavior ask|source|worktree`: optional commit destination behavior. Default: `ask`.
- Any remaining text is extra user guidance and overrides defaults where it conflicts.

Commit behavior values:

- `ask`: stop after verification and ask the user whether to commit back to the source branch or commit to the working branch/worktree. For small, low-risk changes, auto-select the source-branch cherry-pick strategy and ask only for commit confirmation.
- `source`: after explicit commit confirmation, commit the relevant issue changes in the issue worktree, then cherry-pick that commit onto the recorded source branch from the source worktree when safe.
- `worktree`: after explicit commit confirmation, commit the relevant issue changes on the issue worktree branch and leave the source branch unchanged.

If no `ISSUE-KEY` is provided, select the first Jira work item assigned to the current user and tagged with this repo name.

Use this JQL, replacing `<repo_name>` with the repository name from context:

```jql
assignee = currentUser() AND labels = "<repo_name>" AND statusCategory != Done ORDER BY priority DESC, updated ASC
```

Fetch one result:

```bash
acli jira workitem search --jql '<JQL>' --fields 'key,summary,status,priority,assignee,labels' --limit 1 --json
```

If no work item is found, stop and tell the user the exact JQL used.

## Workflow

### 1. Grab Issue Details

Fetch complete issue context before editing code:

```bash
acli jira workitem view <ISSUE-KEY> --fields '*all' --json
```

Also inspect existing comments if the issue details do not include enough discussion context:

```bash
acli jira workitem comment list --key <ISSUE-KEY> --json
```

Summarize the issue in your own words, including:

- Expected behavior
- Current behavior or gap
- Acceptance criteria
- Affected app/library if identifiable
- Ambiguities or missing decisions

### 2. Decide Whether User Input Is Required

Ask the user before implementing only when the missing detail materially changes the solution, data model, UI behavior, or acceptance criteria.

Do not ask for details if the issue gives enough information and the remaining decisions are implementation details. Make reasonable, minimal choices and document them in the final summary.

If clarification is required, ask concise, targeted questions and pause until answered.

### 3. Prepare Worktree

If the current issue is not already in progress, transition it:

```bash
acli jira workitem transition --key <ISSUE-KEY> --status '<status>' --yes
```

Record the source branch and source worktree path before creating the issue worktree. Do not switch branches in the source worktree.

Create or reuse a dedicated git worktree for the issue under the repository's `.worktrees/` directory. Prefer a worktree path and branch based on the issue key and short summary, for example:

```bash
mkdir -p .worktrees
git worktree add .worktrees/<issue-key-lowercase>-short-summary -b <fix|feat>/<issue-key-lowercase>-short-summary <source-branch>
```

Always create the `.worktrees/` directory from the repository root if it does not already exist. Do not create issue worktrees beside or outside the repository root.

If the worktree or branch already exists, inspect it and continue there only when it clearly belongs to the same Jira issue. Otherwise ask the user before reusing it.

Run all implementation, tests, builds, and git status/diff checks from the issue worktree. Leave unrelated source-worktree changes untouched.

Never overwrite or discard user changes. If unrelated changes exist, leave them alone. If they block this work, ask the user how to proceed.

### 4. Implement Changes

Investigate the codebase first. Prefer the smallest correct change that satisfies the issue.

Follow repository standards:

- Angular standalone patterns where applicable
- `inject()` for dependency injection
- `@if`, `@for`, and `@switch` for Angular control flow
- `snake_case` variables and `camelCase` functions
- Tailwind utilities for styling
- `IconComponent` for icons

Use `apply_patch` for manual edits.

### 5. Implement Tests

Add or update tests for behavior changes.

Prefer tests closest to the changed behavior:

- Unit tests for services, pipes, utility functions, and component behavior
- Existing Jest/Spectator patterns for Angular tests
- Manual playwright tests for user-visible flows with mocks when there is already an e2e surface for the affected app

If a behavior change cannot reasonably be automated, explain why and describe the manual verification performed.

### 6. Verify Locally

Use Nx to identify affected projects and checks. Prefer targeted checks first, then broader affected checks as needed.

Run verification with separate sub-agents:

1. Unit test sub-agent: ask one sub-agent to run the relevant unit tests for affected services, utilities, components, apps, and libraries. It should report exact commands, pass/fail results, failures, and any fixes it made.
2. E2E sub-agent: ask a separate sub-agent to run the relevant Playwright/e2e checks for affected user-visible flows when an e2e surface exists. It should report exact commands, pass/fail results, console/browser issues, failures, and any fixes it made.

Keep the implementation agent responsible for coordinating results and fixing remaining issues after the sub-agents report back.

Run the relevant tests and builds for affected apps/libs. If an Nx command fails with `NX   Failed to start plugin worker.`, retry with:

```bash
NX_ISOLATE_PLUGINS=false <original command>
```

For UI changes, test with mocks and Playwright:

- Serve the affected app in mock mode where possible.
- Use Playwright to load the relevant route and verify the changed behavior.
- Check console errors and visible regressions.
- Verify desktop and mobile when layout is affected.

If mock-mode setup requires a settings change, avoid committing environment changes unless they are part of the issue. Prefer temporary runtime/mock toggles and report what was used.

### 7. Confirm Commit Destination

Before committing or pushing, stop and present:

- Jira issue key and summary
- Source branch and source worktree path
- Working branch and issue worktree path
- Files changed
- Behavior implemented
- Tests/builds/Playwright checks run and results
- Any risks, assumptions, or skipped checks

If `--commit-behavior ask` was used or no commit behavior was provided, auto-select the source-branch cherry-pick strategy for small, low-risk changes, then ask only for commit confirmation.

Treat a change as small and low-risk when it is narrowly scoped to the Jira issue, touches only a small number of files, has no broad refactors, has no schema/config/dependency changes, and verification has passed or has only clearly documented non-blocking gaps.

If the change is not small and low-risk, ask the user which commit destination to use:

1. Commit back to the source branch: commit the relevant issue changes in the issue worktree, then cherry-pick that commit onto the recorded source branch from the source worktree only if it is safe to do so. If the source worktree has conflicting or blocking local changes, stop and ask before proceeding.
2. Commit to the working branch/worktree: commit the relevant issue changes on the issue worktree branch and leave the source branch unchanged.

If `--commit-behavior source` or `--commit-behavior worktree` was provided, present the selected commit destination and ask for commit confirmation without asking the user to choose the destination again.

Ask separately before pushing any branch.

Do not commit or push without explicit user confirmation.

### 8. Commit

After confirmation:

1. Inspect `git status`, `git diff`, and recent commit messages.
2. Stage only files relevant to this issue by explicit path. Do not use `git add .` or `git add -A`.
3. Commit with a concise conventional commit message. Include the Jira issue key only when it begins with `PPT-` or `PROJ-`.
4. If the user chose source-branch commit or `--commit-behavior source` was provided, cherry-pick the issue commit onto the recorded source branch from the source worktree and verify the final build commit hash.
5. If the issue commit was cherry-picked successfully onto the source branch, remove the dedicated issue worktree and branch with `git worktree remove <issue-worktree-path>` only after verifying it has no uncommitted changes.
6. If the user explicitly confirms a push, push the selected branch to the remote.

Never include secrets or unrelated user work.

### 9. Update Jira

After the selected commit path is complete, comment on the Jira work item with only:

- Summary of changes
- Final build commit hash

Do not include branch names, worktree names, source branch details, working branch details, or intermediate commit hashes in the Jira comment.

Use a temporary body file if needed to avoid shell quoting issues:

```bash
acli jira workitem comment create --key <ISSUE-KEY> --body-file <comment-file>
```

Move the issue to the review/testing state:

```bash
acli jira workitem transition --key <ISSUE-KEY> --status '<review-status>' --yes
```

If `<review-status>` is `Testing` case-insensitively, assign the Jira work item to a tester from `config/testers` immediately after the successful transition:

1. Read the first non-empty, non-comment line from `<repo-root>/config/testers`.
2. If the line is in `Name <email@example.com>` format, use the email inside angle brackets as the assignee. Otherwise use the whole line as the assignee value.
3. Assign the issue with:

```bash
acli jira workitem assign --key <ISSUE-KEY> --assignee '<tester-email-or-account-id>' --yes
```

If `config/testers` is missing or contains no usable tester, skip tester assignment silently and continue. Do not ask the user for a tester and do not guess one.

If the transition status is invalid, list the failure and ask the user which Jira status to use. Do not guess repeatedly.

## Safety Rules

- Do not commit or push without explicit user confirmation.
- Do not revert or overwrite unrelated changes.
- Do not use destructive git commands.
- Do not stage secrets or broad unreviewed changes.
- Do not remove a worktree that has uncommitted changes.
- Keep the Jira issue as the source of truth, but ask when requirements are ambiguous enough to affect behavior.
- If implementation reveals the issue is too large, propose a smaller vertical slice and ask before splitting scope.
