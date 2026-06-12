---
name: fix-issue
description: Implement one Jira work item assigned to the current user and tagged with this repository name, using a dedicated git worktree, local verification, explicit commit confirmation, and Jira updates. Use when the user says "fix issue", "work Jira issue", "start Jira issue", invokes "$fix-issue", or provides a Jira key to implement in this repository.
---

# Fix Issue

Use this skill to implement one Jira work item end-to-end with `acli`, git worktrees, Nx verification, and Jira handoff.

## Inputs

Accept these user-provided inputs when present:

- `ISSUE-KEY`: optional Jira issue/work item key, usually matching `[A-Z][A-Z0-9]+-[0-9]+`.
- `--status STATUS`: optional in-progress transition status. Default: `In Progress`.
- `--review-status STATUS`: optional final transition status. Default: `Testing`.
- `--commit-behavior ask|source|worktree`: optional commit destination behavior. Default: `ask`.
- Any remaining text is extra user guidance and overrides defaults where it conflicts.

Commit behavior:

- `ask`: after verification, ask whether to commit back to the source branch or commit only in the issue worktree. For small, low-risk changes, auto-select source-branch cherry-pick and ask only for commit confirmation.
- `source`: after explicit commit confirmation, commit in the issue worktree and cherry-pick that commit onto the recorded source branch when safe.
- `worktree`: after explicit commit confirmation, commit on the issue worktree branch and leave the source branch unchanged.

## Start Context

Before editing, gather:

```bash
basename "$(git rev-parse --show-toplevel)"
git rev-parse --show-toplevel
git branch --show-current
printf '%s/.worktrees\n' "$(git rev-parse --show-toplevel)"
test -f "$(git rev-parse --show-toplevel)/config/testers" && sed -n '1,20p' "$(git rev-parse --show-toplevel)/config/testers" || true
git status --short
```

Record repository name, root, source branch, source worktree path, worktree directory, tester config, git status, and user instructions.

If no issue key is provided, select the first assigned non-done Jira work item tagged with the repo name:

```jql
assignee = currentUser() AND labels = "<repo_name>" AND statusCategory != Done ORDER BY priority DESC, updated ASC
```

```bash
acli jira workitem search --jql '<JQL>' --fields 'key,summary,status,priority,assignee,labels' --limit 1 --json
```

If no work item is found, stop and tell the user the exact JQL used.

## Workflow

1. Fetch complete issue context:

    ```bash
    acli jira workitem view <ISSUE-KEY> --fields '*all' --json
    acli jira workitem comment list --key <ISSUE-KEY> --json
    ```

2. Summarize the issue in your own words: expected behavior, current gap, acceptance criteria, affected app/library, and ambiguities.

3. Ask for clarification only when missing details materially affect behavior, data model, UI behavior, or acceptance criteria.

4. Transition the issue to the in-progress status when it is not already in progress:

    ```bash
    acli jira workitem transition --key <ISSUE-KEY> --status '<status>' --yes
    ```

5. Create or reuse a dedicated worktree under `<repo-root>/.worktrees/`. Record source branch and source worktree before creating it. Do not switch branches in the source worktree.

    ```bash
    mkdir -p .worktrees
    git worktree add .worktrees/<issue-key-lowercase>-short-summary -b codex/<issue-key-lowercase>-short-summary <source-branch>
    ```

6. Run all implementation, tests, builds, and git status/diff checks from the issue worktree. Leave unrelated source-worktree changes untouched.

7. Implement the smallest correct change that satisfies the issue. Follow repo standards: Angular standalone patterns, `inject()`, `@if`/`@for`/`@switch`, `snake_case` variables, `camelCase` functions, Tailwind utilities, and `IconComponent`.

8. Add or update tests closest to the behavior: Jest/Spectator unit tests for logic and components, Playwright/manual checks for user-visible flows when an e2e surface exists.

9. Verify affected apps/libs. Prefer targeted Nx commands first, then broader affected checks as needed. If Nx reports `NX   Failed to start plugin worker.`, retry with `NX_ISOLATE_PLUGINS=false <original command>`.

10. For UI changes, serve the affected app in mock mode where possible and verify with Playwright or the in-app browser. Check console errors and desktop/mobile layout when relevant.

## Commit And Jira Handoff

Before committing or pushing, stop and present:

- Jira issue key and summary
- Source branch and source worktree path
- Working branch and issue worktree path
- Files changed
- Behavior implemented
- Tests/builds/Playwright checks run and results
- Risks, assumptions, or skipped checks

Do not commit or push without explicit user confirmation. After confirmation:

1. Inspect `git status`, `git diff`, and recent commit messages.
2. Stage only relevant files by explicit path. Do not use `git add .` or `git add -A`.
3. Commit with a concise conventional commit message. Include the Jira issue key only when it begins with `PPT-` or `PROJ-`.
4. If committing back to source, cherry-pick the issue commit onto the recorded source branch from the source worktree and verify the final build commit hash.
5. Remove the issue worktree only after a successful source cherry-pick and only after verifying it has no uncommitted changes.
6. Push only after separate explicit confirmation.

After the selected commit path is complete, comment on Jira with only:

- Summary of changes
- Final build commit hash

```bash
acli jira workitem comment create --key <ISSUE-KEY> --body-file <comment-file>
acli jira workitem transition --key <ISSUE-KEY> --status '<review-status>' --yes
```

If `<review-status>` is `Testing`, assign the issue to the first usable tester from `<repo-root>/config/testers`. If the file is missing or empty, skip tester assignment silently.

## Safety Rules

- Do not commit or push without explicit user confirmation.
- Do not revert or overwrite unrelated changes.
- Do not use destructive git commands.
- Do not stage secrets or broad unreviewed changes.
- Do not remove a worktree with uncommitted changes.
- Keep Jira as the source of truth, but ask when ambiguity changes the result.
