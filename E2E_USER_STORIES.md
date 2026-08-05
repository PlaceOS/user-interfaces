# PlaceOS E2E — coverage contract

The single source of truth for what the e2e suite covers, what it does not, and why.
Harness, conventions and gotchas live in [`e2e/README.md`](e2e/README.md).

## CI status: advisory, deliberately

`.github/workflows/e2e-advisory.yml` runs the suite nightly, on demand, and on pushes to
`e2e/**`, on a **self-hosted macOS runner** (see
[`e2e/stack/SELF_HOSTED_RUNNER.md`](e2e/stack/SELF_HOSTED_RUNNER.md)).
**It must not gate merges yet**, and nothing in the workflow file can make it do so —
required status checks are a repository setting, so keeping this advisory is an explicit
human decision rather than a default.

There is deliberately **no `pull_request` trigger**: this repo is public and the runner is
self-hosted, so a fork PR could execute arbitrary code on a machine on an internal
network. Every remaining trigger requires write access to this repo. Do not add it back
without moving the job to `ubuntu-latest` or making the repo private.

### It cannot block or delay builds

Asked for by the frontend team, and true structurally rather than by convention:

- **Different runner pool.** `build.yml` runs on `ubuntu-latest` (GitHub-hosted); this job
  runs on the self-hosted Mac. They never compete for a runner, so an e2e run cannot
  delay a build even when both fire on the same push to `develop`.
- **No dependency, and none possible.** `build.yml`'s jobs only `needs: install_deps`.
  Actions has no cross-workflow `needs`, so this suite can never gate a build or a deploy.
- **Not a required check.** Nothing here can make it one; that is a repository setting.
- The job is named *"workplace e2e (advisory — does not block builds)"* so a red X in the
  Checks list next to the build jobs cannot be misread as a broken build.

### Trigger rollout, in two stages

**Stage 1 (now):** nightly, `workflow_dispatch`, and pushes to `e2e/**`. Nobody sees a new
check on their commits, and the nightly starts accumulating the record — which it can only
do from the default branch, so this is what breaks the chicken-and-egg of "prove it before
merging it".

**Stage 2 (once the record is good):** add `push: develop`, and `release/**` / `rc/**` to
match the branch set `build.yml` deploys from. `develop` is the high-value trigger — it
catches a regression at the moment it lands, when bisecting is cheapest — and with no
`pull_request` trigger it is also how merges get covered. Deferred because enabling it puts
a new check on everyone's commits, which should be earned rather than assumed. It is a
three-line change.

**Never:** feature branches. There is one self-hosted runner and the stack binds fixed host
ports, so runs serialise; a busy trigger set would build a queue that delays or starves the
nightly. Use **Run workflow** for a one-off.

No path filters, on purpose: most real changes touch `libs/**` which workplace depends on,
and the genuinely dangerous ones (`bun.lock`, `tsconfig.base.json`, `config/`) are the
easiest to leave off an include-list. A filter that is 95% right silently skips the run
that mattered. Revisit if `develop` volume makes the queue a problem.

Note also that GitHub only runs `schedule` triggers from the **default branch**, so the
nightly track record does not begin until this workflow is merged to `develop`.

That is on purpose. Before this suite is allowed to block anyone it needs a track record:
no false positives, specs reviewed by humans, and a known flake rate. The nightly run
exists to build exactly that — a fixed codebase run repeatedly is the only way to
separate a real regression from an unstable suite.

The job still reports honest pass/fail and writes a summary that leads on **flaky**
rather than passed, because a spec that only passes on retry is the signal that says
"not yet".

**Before proposing this as a required check**, expect to be able to say: N consecutive
nightly runs green, every `flaky` occurrence explained, and REG-09 either fixed or
consciously accepted.

### Track record so far

Honest log, because "it went green once" is not a track record.

| Run | Result | What it taught us |
|---|---|---|
| 1 | failed | Elasticsearch would not start. Diagnosed as `memory_lock` — **wrong**, but the fix was harmless. Exposed that log collection used a hand-picked service list which omitted elastic, so the one useful log was the one not captured. |
| 2 | failed | With diagnostics in place: ES 7.17.6 bundles a JDK with the **cgroup v2** NPE bug and its launcher dies before the JVM starts. GitHub runners use cgroup v2; Docker Desktop does not — unreproducible locally. Fixed by moving to 7.17.28. |
| 3 | success, **2 flaky** | Both desk specs failed attempt 1 with "the confirm dialog did not open". Root cause: the booking form is rebuilt when async init completes and restores defaults — a **race**, not a step. Mitigated by converging on the form state in a retrying block. |
| 4 | success, 0 flaky | — |
| 5 (re-run of 4's commit) | success, 0 flaky | Same code twice with no flakes. |

Two clean runs is a start, not a track record. The nightly is what accumulates one.

## How this document works

**It is the mechanism that keeps the suite current.** A suite decays the moment nobody
can tell what it covers, so:

- **Every new feature** adds a story here and a spec, in the same PR.
- **Every bug fix** adds a `REG-*` row citing the ticket or changelog line, plus a spec
  that fails before the fix and passes after. A regression spec that was never seen red
  is a guess, not a guard.
- **Every spec that gets skipped or deleted** updates its row to say so, with a reason.
- A row without a status is a bug in this document.

Priorities: **P0** = smoke gate, must always pass · **P1** = core regression · **P2** = breadth.

Status: **done** = a green spec exists · **partial** = covered in part, gap named ·
**todo** = not written · **blocked** = needs data, access or a fix first.

Everything runs against a **local backend only** — see `e2e/README.md`. Rows that would
require an external service are marked **out of scope (external)** and must never enter
the PR gate.

---

## 1. Workplace — core flows

| ID | P | Story | Status |
|----|---|-------|--------|
| WP-E2E-01 | P0 | An authenticated user lands on the workplace home; the shell renders and org data resolves (**not** `/misconfigured`). | **done** — `local/boot.spec.ts` |
| WP-E2E-02 | P0 | An unauthenticated visit redirects to the authority's login page, real credentials sign in, and the app loads authenticated. | **done** — `local/login.spec.ts` |
| WP-E2E-05 | P0 | A **non-admin** books a desk through the full UI; the backend stores it with the right asset, title and zones. | **done** — `local/desk-booking.spec.ts` |
| WP-E2E-06 | P1 | A deleted booking disappears from the listing (teardown really tears down). | **done** — `local/desk-booking.spec.ts` |
| WP-E2E-03 | P1 | Building/level selectors are populated from seeded zones, and changing them re-scopes what is bookable. | todo |
| WP-E2E-07 | P1 | "Your bookings" lists the user's own booking; cancelling it moves it out of the upcoming list. | todo |
| WP-E2E-08 | P1 | A booking made by one user is **not** visible in another user's listing, and cannot be deleted by them. | **done** — `local/booking-scoping.spec.ts`. Red-checked: the other user's listing really is empty while the booking exists. |
| WP-E2E-09 | P1 | Booking a **locker** end to end. | todo — **more setup than desks**, not the same pattern. Lockers come from locker *banks* then lockers within them (`loadLockerResources`), so seeding is two-level. Budget accordingly. |
| WP-E2E-10 | P1 | Booking a **parking** space end to end. | todo — **more setup than desks**. Needs a level zone tagged `parking` plus spaces created through the parking API (`queryParkingSpacesForZones`), not Zone metadata. |
| WP-E2E-11 | P2 | Inviting a **visitor** end to end. | todo |
| WP-E2E-12 | P2 | Directory / colleagues search returns seeded users. | todo |
| WP-E2E-13 | P2 | The explore/map view renders for a seeded level and reflects availability. | todo — needs map metadata seeded |
| WP-E2E-14 | P2 | Search validation and empty states: no blank page, no console error. | todo |
| WP-E2E-15 | P1 | **Room/meeting** booking end to end. | **out of scope (external)** — the only surface needing a real Microsoft/Google tenant. Opt-in project, never in the PR gate. |
| WP-E2E-04 | P2 | Mock mode still renders the landing page with no backend at all. | **done** — `landing.spec.ts` (project `mock`) |

## 2. Auth & session

Grounded in the auth.cr work (PPT-2536), where every production failure was an
environment, data or real-client gap that unit specs could not see.

| ID | P | Story | Status |
|----|---|-------|--------|
| AUTH-E2E-01 | P0 | Authorization-code + PKCE exchange in a real browser: no `client_secret` anywhere, `S256` challenge, token is a JWT. | **done** — `local/pkce.spec.ts`. Asserts on the wire, not the response: a client that leaked a secret or dropped PKCE would still return a valid-looking token, so the response cannot tell you the handshake was sound. Also checks the password never appears in a URL and only ever reaches `/auth/signin`. Ported from `tasks/PPT-2536/e2e/backoffice-login.spec.js`. |
| AUTH-E2E-02 | P0 | A refreshed token keeps its scope, is rotated, preserves `sub`, and is still accepted by rest-api. | **done** — `login.spec.ts`. This is the exact 2026-07-23 revert (403 on `/oauth_apps` after refresh). |
| AUTH-E2E-03 | P1 | A refresh chain survives N sequential refreshes without degrading scope or access. | todo — covered API-only by `tasks/PPT-2536/integration/` (RF-03); wanted in-browser. |
| AUTH-E2E-04 | P1 | A stale/incompatible session cookie from a previous auth implementation does not break sign-in. | todo — verified manually (SC-01); needs automating. |
| AUTH-E2E-05 | P1 | A non-admin cannot read or mutate another user's bookings. | **done** — `local/booking-scoping.spec.ts`, same spec as WP-E2E-08. Covers both halves: the listing excludes it, and a delete attempt is rejected. Includes a control asserting you *can* see your own, so "nobody sees anything" can't pass as success. |
| AUTH-E2E-06 | P2 | Token expiry mid-session recovers without stranding the SPA. | todo |
| AUTH-E2E-07 | P2 | Malformed and hostile `/auth/*` requests return 4xx, never 5xx and never a backtrace. | todo — covered by auth.cr unit specs (SEC-01); browser-level coverage optional. |
| AUTH-E2E-08 | P1 | `SameSite` behaviour in a genuine third-party/iframe context. | **blocked** — Playwright Chromium cannot create a true third-party context. Known untested incident class (B.7). |

## 3. Regression coverage

Each row maps to something that actually broke. Citations are the changelog line or the
task that found it, so the row can be traced.

| ID | P | Story | Source | Status |
|----|---|-------|--------|--------|
| REG-01 | P0 | Scope is not lost on token refresh; downstream authorisation still passes. | PPT-2536, 2026-07-23 revert | **done** — AUTH-E2E-02 |
| REG-02 | P1 | An overlapping desk booking is rejected rather than silently accepted. | `2607.1` "Fix rejecting overlapping bookings on desk assignment" | **done** — `local/desk-clash.spec.ts`. Identical and partially-overlapping slots both refused (409), attempted as a *second* user so a per-user-only check would fail. Includes a control that a non-overlapping slot is accepted, and that the desk frees up after deletion. Red-checked. |
| REG-03 | P1 | A clash check uses the **current** `booking_end`, not a stale one. | `2607.1` "Fix stale booking_end being used for clash check" | todo |
| REG-04 | P1 | Desk booking status displays correctly in the booking list. | `2606.1` "Fix status display for desk bookings" | todo |
| REG-05 | P2 | The authorised-user check has no race on boot (no flash of unauthorised). | `2607.1` "Fix race condition for authorised check" | todo |
| REG-06 | P2 | Timezone parsing does not error for a building with an unusual timezone. | "Fix error when parsing timezones" | todo |
| REG-07 | P2 | Level selection does not persist once the selector is hidden/disabled. | "Fix level selections persisting when selector is disabled/hidden" | todo |
| REG-08 | P1 | An authority with a **relative** `login_url` still reaches a usable login page. | Found 2026-07-30, this suite | **blocked** — currently worked around in `seed.ts`; ts-client resolves a relative `login_url` against the authority host **without its port**, so any non-443 deployment dead-ends. Needs a ts-client/init fix before a spec can assert the good behaviour. |
| REG-09 | P1 | Concurrent `POST /bookings` do not 500. | **[PPT-2642](https://acaprojects.atlassian.net/browse/PPT-2642)** | **blocked** — staff-api raises `DB::ConnectionLost` under concurrency. Observed ~1 run in 8 **locally at 4 workers**; **not yet observed in CI**, which runs 2 workers, so halving the concurrency may simply be avoiding it rather than the problem being absent. Needs a staff-api fix; do not treat the quiet CI record as evidence it is gone. |
| REG-10 | P1 | The booking form does not discard user input while it is still initialising. | **[PPT-2643](https://acaprojects.atlassian.net/browse/PPT-2643)** | **blocked** — the form is rebuilt when async init completes and restores defaults (title, All Day, Require locker), silently dropping anything typed before that. A real user can hit this; they would just see their title or options revert. `bookDeskViaUI` converges on the state to work around it, which means **the suite no longer detects it** — hence this row. Investigated 2026-08-05 against #478 (`a0360486`): **the bug is still live**, established by reading the code rather than by running this suite, and fixed in **PR #479**. `newForm`'s protected branch is never taken by the flows — the current user is restored from cache ~50ms after bootstrap, while `NewDeskFlowComponent.ngOnInit` calls `loadForm` then `newForm` only after org init plus a 300ms settle — and `loadForm` had no capture at all. The shipped e2e suite meanwhile is stable at 6 consecutive full runs, 8/8, `--retries=0`, which is precisely the problem: **it passes either way**. Removing the block could not be shown to be safe *or* unsafe from here: the race needs initialisation to be slow relative to typing, and this machine wins it every time. Two failed attempts to prove otherwise, both recorded so nobody repeats them: (1) a synthetic "type during init, assert it survives" spec passed with *and* without the fix, even with the API responses held to widen the window; (2) removing the block appeared to prove the bug survived — it did not. That red was a Playwright **strict-mode violation**, not a reverted value: opening the desk-select modal puts a second "All Day" checkbox in the DOM (`desk-filters`, bound to the same field), so an unscoped locator matched two elements and threw, with both checked. Scoping the locator to `desk-flow-form` then broke it a second way, because `setCheckbox` silently returns when its locator matches nothing, turning a narrower scope into a no-op and a genuinely invalid form. Both experiments were reverted. **The block stays and this row stays blocked even once #479 lands** — not because the app is unfixed, but because this suite cannot tell either way on fast hardware. The guard for REG-10 is the unit specs in `libs/bookings/src/test/booking-form.service.spec.ts`; unblocking this row needs artificial slowness (throttled CPU), not another e2e attempt. |

## 4. Platform & configuration

Config gaps caused several production incidents, and they are invisible to UI specs.

| ID | P | Story | Status |
|----|---|-------|--------|
| CFG-01 | P0 | The suite refuses to run against any non-loopback backend. | **done** — `assertLocalOnly`, throws at config load |
| CFG-02 | P0 | A cold stack seeds to a working state in one command. | **done** — `e2e/stack/up.sh --fresh`, verified from destroyed volumes |
| CFG-03 | P1 | staff-api has a tenant for the domain, or every `/bookings` call 500s. | **done** — `seed.ts`; asserted implicitly by WP-E2E-05 |
| CFG-04 | P1 | A missing `org`/parented-`level` zone is caught as `/misconfigured`, not as a blank page. | **partial** — WP-E2E-01 asserts the healthy path; the negative case is unasserted |
| CFG-05 | P2 | Deployment-shaped run: the app served by nginx at `/workplace/` behind the `verified` cookie gate. | todo — a second project; `mintToken` already captures the cookie |

---

## Notes & blockers

- **Room/calendar events are the only genuinely external surface.** A placeholder tenant
  unblocks every PlaceOS-native booking type (desks, lockers, parking, visitors) with no
  outbound call. `/calendars` and `/events` do call Microsoft and fail `AADSTS900023`, so
  WP-E2E-15 stays opt-in and out of the gate.
- **Three rows are blocked on product fixes, not on test effort** (REG-08, REG-09, REG-10). All
  were found by this suite. Leaving them visible here is the point — a blocked row is coverage
  information, a deleted row is not.
- **REG-09 is worse than a flake.** Filed as PPT-2642: one burst of concurrent booking POSTs
  permanently poisons staff-api's connection pool, so booking creation returns 500 for everyone
  until the service restarts. Reproducer kept at `e2e/support/repro/reg09-concurrent-bookings.ts`.
- **REG-10 is invisible to this suite by design.** `bookDeskViaUI` converges on the form state,
  so nothing here will catch it regressing. PPT-2643's fix landed in #478; whether it is
  *complete* is genuinely unresolved, and the honest summary is that this suite cannot answer it
  on hardware this fast. Deleting the converging block passes serially and fails about one full
  parallel run in three, on the symptom rather than on the mechanism.
  Nothing was changed in the flow helper in the end. Two attempts to replace the workaround with
  a real assertion both produced red runs that looked like the app bug and were not — one a
  Playwright strict-mode violation, one a silently no-op `setCheckbox` after over-narrowing a
  locator. The lesson is procedural: when a test goes red, confirm the *shipped* code is green in
  the same environment before concluding anything about the app. Running the unmodified helper
  three times (8/8 each) is what separated "the fix is incomplete" from "my edit is wrong".
  The bug was then found by reading `desk-flow.component.ts` and `booking-form.service.ts`
  instead — which is where this should have started, given the symptom is timing-dependent and
  the hardware is fast.
  **To settle it properly**, the next step is not another e2e attempt — it is to reproduce under
  artificial slowness (throttled CPU, or a unit test that drives the deferred branch directly)
  so the mechanism is observed rather than inferred from a timing-dependent symptom.
- **AUTH-E2E-08 may never be automatable** with Playwright Chromium. Say so rather than
  quietly dropping it.
- The PPT-2536 harnesses (`tasks/PPT-2536/{e2e,integration}`) still hold assertions that
  belong in this suite. Folding them in is tracked as AUTH-E2E-01 and -03.
