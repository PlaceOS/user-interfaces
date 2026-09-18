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

**Stage 2 (done 2026-08-06):** `push` now covers `develop`, `release/**` and `rc/**` —
the branch set `build.yml` deploys from. `develop` is the high-value trigger: it catches a
regression at the moment it lands, when bisecting is cheapest, and with no `pull_request`
trigger it is also how merges get covered. It still cannot block anything, and the suite had
run green on every invocation up to that point.

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
| WP-E2E-11 | P2 | Inviting a **visitor** end to end. | **done** — expanded into its own section, [§1a](#1a-workplace--visitor-invites) (VIS-01 … VIS-23) |
| WP-E2E-12 | P2 | Directory / colleagues search returns seeded users. | todo |
| WP-E2E-13 | P2 | The explore/map view renders for a seeded level and reflects availability. | todo — needs map metadata seeded |
| WP-E2E-14 | P2 | Search validation and empty states: no blank page, no console error. | todo |
| WP-E2E-15 | P1 | **Room/meeting** booking end to end. | **partial** — split in two once it turned out only half of it is external. The **PlaceOS-native** path (`app.events.use_bookings = true`) is local and covered: its own section, [§1b](#1b-workplace--room-bookings) (ROOM-01 … ROOM-23). The **calendar** path still needs a real Microsoft/Google tenant — `/events` and `/calendars` 500 here — and stays opt-in, never in the PR gate. |
| WP-E2E-04 | P2 | Mock mode still renders the landing page with no backend at all. | **done** — `landing.spec.ts` (project `mock`) |

## 1a. Workplace — visitor invites

Twenty-three tests in eleven files under `apps/workplace/e2e/local/visitor-*.spec.ts`, with
their own support code in `e2e/support/visitor/` — deliberately separate from
`e2e/support/{env,api,flows}.ts` so nothing visitor-shaped can break the desk specs.
Working notes: [`e2e/VISITOR_E2E_HANDOVER.md`](e2e/VISITOR_E2E_HANDOVER.md).

**Not covered, and why.** A second building cannot be exercised — the local stack
seeds one org, one building, one level, so a building/level selector test would
assert against a list of one. That needs a seeding change, which was deliberately
avoided here (see *Decisions* in the handover). Everything email-shaped is out too:
there is no mail server in the stack and the test identities are not real mailboxes.

**Workplace only.** `concierge` and `visitor-kiosk` also show visitors, but the desk specs
cover neither (zero mentions anywhere in `e2e/`) and neither is in the sparse checkout this
was built in. Extending there is a separate piece of work, not an oversight.

| ID | P | Story | Status |
|----|---|-------|--------|
| VIS-01 | P1 | A **non-admin** invites a visitor through the full UI; the backend stores the booking with the right address, title and zones, **and** a guest record is created from it. | **done** — `local/visitor-invite.spec.ts` |
| VIS-02 | P1 | A deleted visitor invite leaves the listing — and the guest record it created is removed too, since that **outlives the booking**. | **done** — `local/visitor-invite.spec.ts` |
| VIS-03 | P1 | Inviting several visitors at once creates a `group` container plus one `visitor` booking per person, linked by `parent_id`, each carrying its own address. | **done** — `local/visitor-group.spec.ts`. The container-to-member link is what PPT-2638 broke. |
| VIS-04 | P1 | The visitor listing returns the **members**, not the container: `GET /bookings?type=visitor` on an N-person group gives N, not N+1. | **done** — `local/visitor-group.spec.ts` |
| VIS-05 | P1 | One user's visitor invite is **not** visible to another user, and cannot be deleted by them. | **done** — `local/visitor-scoping.spec.ts`. The desk equivalent is WP-E2E-08; a visitor invite leaks a named outside person, not just a seat. |
| VIS-06 | P1 | Control for VIS-05: you *can* see your own invite and its guest record, so "nobody sees anything" cannot pass as success. | **done** — `local/visitor-scoping.spec.ts` |
| VIS-07 | P2 | With all-day invites allowed, an all-day invite is **stored** as all-day rather than as a long timed booking. | **done** — `local/visitor-settings.spec.ts` |
| VIS-08 | P2 | With a reason required, sending without one is refused by the form and nothing reaches the backend. | **done** — `local/visitor-settings.spec.ts` |
| VIS-09 | P1 | Booking on behalf of somebody else stores **them** as the host (`user_*`) and **you** as the booker (`booked_by_*`). | **done** — `local/visitor-delegate.spec.ts`. Needs `visitors.can_book_for_anyone` **and** `visitors.can_book_for_others`: one without the other renders the host picker and then silently discards the choice. |
| VIS-10 | P1 | The booker's schedule flags a delegated invite as **Associate** (and shows "For {name}"); the host's own listing shows it as theirs, unflagged. | **done** — `local/visitor-delegate.spec.ts`. Visibility is asymmetric — the booker only sees it at all because the schedule sends `include_booked_by=true`. |
| VIS-11 | P1 | A visitor is checked **in** and then back **out**, both recorded on the backend; after checking out the control is gone, so one invite cannot be used twice. | **done** — `local/visitor-checkin.spec.ts`. Check-in and check-out are the same button; only the check-out asks for confirmation. |
| VIS-12 | P1 | A booking too far ahead offers no check-in control, **and** the API refuses one for the timing reason — so hiding the button is not the only thing stopping it. | **done** — `local/visitor-checkin.spec.ts`. The two gates are different sizes: the app hides the button until **15 minutes** before the start, the backend accepts within **1 hour**. |
| VIS-13 | P2 | Re-saving a delegated invite **for a future day** keeps the original host, and keeps the day, rather than resetting either to the person editing. | **done** — `local/visitor-edit.spec.ts` |
| VIS-14 | P2 | Removing one visitor from a group invite leaves the other members untouched. | **done** — `local/visitor-edit.spec.ts` (PPT-2634 / PPT-2638) |
| VIS-15 | P2 | The same edit works when the app is in **single-visitor** mode. | **blocked** — `local/visitor-edit.spec.ts`, `test.fixme`. VIS-B8 below. The identical flow in the default mode is green (VIS-13), so this is the mode, not the flow. |
| VIS-16 | P1 | Cancelling an invite **from the app** — the booking menu and its confirmation — really removes it, on the backend and not just on screen. | **done** — `local/visitor-cancel.spec.ts`. Every other spec tears down through the API, so this button was never once pressed. |
| VIS-17 | P1 | Declining that confirmation leaves the invite alone. | **done** — `local/visitor-cancel.spec.ts`. A dialog whose decline button also deletes is worse than one that fails to delete, and only this catches it. |
| VIS-18 | P1 | An address that is not an email is refused **before anything is sent**. | **done** — `local/visitor-validation.spec.ts`. Asserts on the network, not on a message: the backend stores whatever it is given, so the form is the only guard. Includes a control that a valid address does send. |
| VIS-19 | P2 | A visitor taken off the list before sending is not invited, and the rest still are. | **done** — `local/visitor-validation.spec.ts` |
| VIS-20 | P2 | A pass number and the international-visitor flag are stored with the invite. | **done** — `local/visitor-details.spec.ts`. Both behind settings that are off by default. |
| VIS-21 | P2 | The company is stored, and the separate guest record carries the visitor's name. | **done** — `local/visitor-details.spec.ts`. The guest record is what reception reads and it outlives the booking. |
| VIS-22 | P1 | The start time and length chosen on the form are the ones stored. | **done** — `local/visitor-times.spec.ts`. Everything else here takes the default hour, so a form that ignored the picker would have passed the whole suite. |
| VIS-23 | P2 | A maximum visit length and bookable hours limit what the form offers. | **done** — `local/visitor-times.spec.ts`. Asserts on the options offered, because an out-of-range choice is absent rather than refused. Red-checked: without the settings the form offers 240 minutes against a 60 minute cap. |

### Findings from building this coverage

Six, all confirmed against the running stack, **none filed yet** and none of them test
defects. Listed here so the coverage record is honest about what the suite knows.

| ID | Finding |
|---|---|
| **VIS-B8** | **In single-visitor mode only** (`bookings.multiple_visitors: false`), saving an edit throws `_.toJSON is not a function` and sends nothing — the user sees only that raw string. `Booking` declares `attendees` as `User[]` but assigns the raw server JSON to it, the edit path copies that into the form's `assets`, and saving calls `.toJSON()` on every entry. The multi-visitor paths escape it by rebuilding each person with `new User(...)`. Measured both modes, one and two visitors, today and a future day: the **mode** is the only thing that decides it. Blocks VIS-15. |
| **VIS-B9** | **A host cannot make two overlapping group invites, whoever the visitors are.** The app names a group container `${host_email}[${date the invite was CREATED}]`, so every group invite that host makes that day shares one asset id — and the backend rightly refuses overlapping bookings on one asset. The second invite fails with `409 Conflicting booking` pointing at a `group` row. Booking the same two visits on different days is accepted, which is what shows this is accidental. Reproducer: `e2e/support/repro/vis-b9-group-clash.ts`. |
| **VIS-B1** | The same visitor can be booked twice into one slot; the backend returns 201 both times. Desks refuse this, and product says visitors should too. Reproducer: `e2e/support/repro/vis-b1-duplicate-visitor.ts`. |
| **Host flags** | `visitors.can_book_for_anyone` renders the host picker, but `sendInvite` keeps the choice only if `visitors.can_book_for_others` is **also** set. One without the other silently discards the host — no error, no clue. |
| **Listing limit** | `GET /bookings` defaults to `limit=100` and the schedule sends `include_deleted=true`, so past 100 soft-deleted bookings a user stops seeing new ones. This broke the card-dependent specs until 428 stale rows were cleared, and it looks nothing like its cause. See the run-hygiene note in *Notes & blockers*. |
| **Deep link** | `?booking=<id>` never opens the details modal: `booking-card.component.ts` checks `params.has('booking')` and then compares the id against `params.get('event')`, a parameter that is not there. |
| **Dead config** | `bookings.allowed_daily_visitor_count` (default 100) is never read anywhere in this repo. Confirmed with the dev that the limit is not wanted. |

## 1b. Workplace — room bookings

Twenty-two tests in ten files under `apps/workplace/e2e/local/room-*.spec.ts`, with their own
support code in `e2e/support/room/` — separate from both the desk support files and the
visitor ones, so nothing room-shaped can break either. Working notes:
[`e2e/ROOM_E2E_HANDOVER.md`](e2e/ROOM_E2E_HANDOVER.md).

**These rows exist because WP-E2E-15 was only half right.** The calendar path really is
external and stays out (see that row). But with **`app.events.use_bookings = true`** the same
meeting form saves an ordinary PlaceOS booking of type `room` and reads availability from the
bookings list — no outbound call, fully local. Every row here runs in that mode, which has a
consequence that must be said out loud in any review: **a green run proves the PlaceOS-native
room path works and says nothing about the calendar path.** Whether real customers run one, the
other or both is [open question 3](#notes--blockers) and it decides what this coverage is worth.

**Rooms are the first resource that must genuinely be created.** A desk is a row in zone
metadata and a visitor is just an email; a room is an engine **System**. It is seeded by
`e2e/support/room/room.seed.ts` — **three** rooms per worker, on demand, idempotent — rather
than by the shared `seed.ts`, so a room mistake cannot break the desk specs. That needs ADMIN,
and is cached per process. The three are a normal room, an `alt` room to move a booking into
(ROOM-16) and a capacity-**1** `small` room (ROOM-17/18); capacity belongs to the System, so it
has to be test data rather than a setting. `catering.seed.ts` does the same for a catering
menu, which is made of **assets**, not settings — see ROOM-22.

**Not covered, and why.** Real Outlook/Google invites, free/busy and attendee availability need
a real tenant (WP-E2E-15). Email of any kind has no mail server in the stack. Room panels,
signage and recurring meetings are other apps or the calendar path. As with §1a, a second
building cannot be exercised — the stack seeds one org, one building, one level. **Checking in
to a room booking (ROOM-23) is blocked by the stack, not by effort** — it is the one room row
that needs something the local deployment does not have; the reason is in its row.

| ID | P | Story | Status |
|----|---|-------|--------|
| ROOM-01 | P1 | A **non-admin** books a room through the full UI — form, confirmation, success — and the backend stores a `room` booking with the right system, meeting name and window. | **done** — `local/room-booking.spec.ts`. Nothing is sent until the second screen. The real meeting name is in `extension_data.title`; the booking's own `title` is always the literal "Room Booking", so asserting on it fails against a correct booking. |
| ROOM-02 | P1 | A deleted room booking leaves the listing (teardown really tears down). | **done** — `local/room-booking.spec.ts` |
| ROOM-03 | P1 | A room is **exclusive**: a second user is refused `409` for the same window *and* for a partial overlap, with a control that a clear window is still accepted `201`. | **done** — `local/room-clash.spec.ts`. The desk equivalent is REG-02. Created through the API on purpose: the picker hides busy rooms, so through the form "refused" and "never offered" are indistinguishable. Attempted as a *second* user, so a per-user-only check would fail. `409` specifically, not `>= 400` — a REG-09 `500` must not pass as clash detection. |
| ROOM-04 | P1 | The room frees up once the booking is deleted, so a cancelled meeting does not hold a room forever. | **done** — `local/room-clash.spec.ts` |
| ROOM-05 | P1 | One user's room booking is **not** visible to another user, and cannot be deleted by them. | **done** — `local/room-scoping.spec.ts`. Does not contradict ROOM-03: a room's *availability* is shared, which is why someone else gets a 409; the *booking* — who booked it, what the meeting is called, who is coming — is private. |
| ROOM-06 | P1 | Control for ROOM-05: you *can* see your own room booking, so "nobody sees anything" cannot pass as success. | **done** — `local/room-scoping.spec.ts` |
| ROOM-07 | P1 | The day and start time chosen on the form are the ones stored. | **done** — `local/room-times.spec.ts`. Every other room row takes whatever the form offers, so a form that ignored the pickers would have passed the lot. The **length** is a different story — ROOM-14. |
| ROOM-08 | P2 | A maximum meeting length and bookable hours limit what the form offers. | **done** — `local/room-times.spec.ts`. Asserts on the options *offered*, because an out-of-range choice is absent rather than refused. The keys are `app.events.*`, not `app.bookings.*`: set the bookings keys and the form happily offers an 8-hour meeting. |
| ROOM-09 | P2 | An attendee added on the form is stored with the booking. | **done** — `local/room-attendees.spec.ts`. A room booking is the only one of the three surfaces with a real attendee list, so it is the only place the list can go wrong. Stored in `extension_data.attendees`, which also carries the room itself as a resource. |
| ROOM-10 | P2 | An attendee removed before sending is not invited, and the rest still are. | **done** — `local/room-attendees.spec.ts` |
| ROOM-11 | P1 | Cancelling a room booking **from the app** — the booking menu and its confirmation — really removes it on the backend. | **blocked** — `local/room-cancel.spec.ts`, `test.fixme`. ROOM-B4 below. Every other room spec tears down through the API, so this button was never once pressed. |
| ROOM-12 | P1 | Declining that confirmation leaves the booking alone. | **done** — `local/room-cancel.spec.ts`. A dialog whose decline button also deletes is worse than one that fails to delete. It passing while ROOM-11 does not is what shows ROOM-B4 is the delete itself, not the menu or the dialog. |
| ROOM-13 | P1 | A room booking carries its **zone hierarchy** (org, building, level), as desk and visitor bookings do. | **blocked** — `local/room-booking.spec.ts`, `test.fixme`. ROOM-B2 below. Fold it into ROOM-01 once the app populates zones. |
| ROOM-14 | P1 | The meeting **length** chosen on the form is the length the room is held for. | **blocked** — `local/room-times.spec.ts`, `test.fixme`. ROOM-B3 below. Fold it into ROOM-07 once the app carries the choice through. |
| ROOM-15 | P1 | Re-opening a booking and choosing a new **start time** stores the new time, keeps the room, and updates the same booking rather than replacing it. | **done** — `local/room-edit.spec.ts`. The first row here to exercise a `PATCH` rather than a `POST`: `saveBooking` branches on the id, so an edit that lost it would create a second booking and hold the room twice. |
| ROOM-16 | P1 | Moving a booking to **another room** stores it against that room, and does not move it in time. | **done** — `local/room-edit.spec.ts`. Needs the second seeded room — with one room, "the room changed" and "the field was ignored" are the same observation. |
| ROOM-17 | P1 | With `app.events.strict_capacity_check`, a meeting with more people than the room holds is **refused by the form and nothing reaches the backend**. | **done** — `local/room-capacity.spec.ts`. Asserts on the network, not on a message. Carries its own control — one attendee lighter, the same form reaches the confirm screen. Red-checked: without the setting the over-capacity meeting gets straight through. |
| ROOM-18 | P2 | **By default** the same meeting is only **warned** about, and still books. | **done** — `local/room-capacity.spec.ts`. The shipped behaviour, so the one real users get. Only the room changes between the control and the assertion, which is what makes it about capacity. |
| ROOM-19 | P2 | A room marked as a **favourite** is saved to the user's own settings and the "Favorites Only" filter then narrows the picker to it. | **done** — `local/room-favourites.spec.ts`. The one room feature that outlives the booking flow: it is stored in the user's `settings` metadata, debounced ~2.4s, so the spec polls the backend rather than trusting the star. |
| ROOM-20 | P1 | A room booked with the default settings is stored **unapproved** (`tentative`), and still holds the room. | **done** — `local/room-approval.spec.ts`. Also the control for ROOM-21. |
| ROOM-21 | P2 | With `app.bookings.no_approval`, the booking is stored **approved**. | **blocked** — `local/room-approval.spec.ts`, `test.fixme`. ROOM-B1 below, **re-measured 2026-09-16**: the booking POST is still a `500`. |
| ROOM-22 | P1 | **Catering** ordered on the form reaches the backend as its own `catering-order` booking, linked to the meeting. | **blocked** — `local/room-catering.spec.ts`, `test.fixme`. ROOM-B5 below. The menu seeding works and the form offers catering; it is the order that cannot be saved in this mode. |
| ROOM-23 | P1 | **Checking in** to a room booking. | **blocked — by the stack, not by a bug.** No spec, deliberately. The check-in button only renders when a websocket `binding` to a **`Bookings` driver module** on the room's System reports a status (`event-details-modal.component.ts`: `mod="Bookings" bind="status"`, and the button also needs `room_status() !== 'free'`). This stack has one driver (`spec_helper`) and one module (`PrivateHelper`) — measured — so no room can ever have that module, and the control can never appear. Unblocking it means building and running a real driver in the e2e stack, which is a stack change, not a spec. Contrast VIS-11, where visitor check-in is a plain API call and is covered. |

### Findings from building this coverage

Five, all reproduced and minimised, **none filed**. Each has a `fixme` row above waiting on it.

| ID | Finding |
|----|---------|
| **ROOM-B5** | **Catering cannot be ordered with a PlaceOS-native room booking.** The meeting is created (`201`) and the catering order that follows is refused: `POST /bookings` with `booking_type: catering-order` → **422 `{"error":"error linking booking to event","failures":[{"field":"event_id","reason":"Could not find metadata for event ARRAY['1138']"}]}`**. The order is linked to a calendar **event** by `event_id`, and in `use_bookings` mode there is no event — the id handed over is a *booking* id, so the lookup finds nothing. Measured what survives, because that is what decides the severity: **the room booking is left behind undeleted and no catering order exists**, while the user is shown an error on the confirm screen and has every reason to think nothing was booked. `postForm` does call `_removeBookingAfterError` for a catering failure and it did not roll the room back. Blocks ROOM-22. |
| **ROOM-B4** | **Cancelling a room booking from the schedule does nothing.** Confirming the cancel fires `DELETE /api/staff/v1/events/<id>` → **500**, and the booking is still live afterwards. In `use_bookings` mode a room booking *is* a staff-api booking, but `schedule.component.ts` deletes whatever it is displaying as an event (`item instanceof CalendarEvent ? removeEvent : removeBooking`) and a room booking is rebuilt into a `CalendarEvent` for display — so it takes the calendar path and fails. Worse than cosmetic: the room stays held by a booking the user believes they cancelled, refusing everyone else while looking free on their own screen. Blocks ROOM-11. |
| **ROOM-B3** | **The meeting length picked on the form is not the length booked.** Ask for 90 minutes: the field reads "1 hour 30 minutes" and the confirmation shows 6:00–7:30 PM, but the request sends `booking_end` at 7:00 PM while `extension_data.event_end` says 7:30. `newBookingFromCalendarEvent` reads `event.duration`, which is still the default. The user sees one range and the room is held for another, so the last half hour looks free to everybody else. Not timing and not ordering — both orders were tried, and the field still reads 90 four seconds later, immediately before the confirmation is sent. Blocks ROOM-14. |
| **ROOM-B2** | A room booked through the app is stored with **`zones: []`**, where desk and visitor bookings carry org, building and level. Anything scoping by zone cannot see it — and it is what walks the request into ROOM-B1. Blocks ROOM-13. |
| **ROOM-B1** | A non-admin sending `approved: true` **without** zones gets **500 `syntax error at or near ")" (PQ::PQError)`**. With zones it is correctly refused `403`; an admin gets `201`; desks do it too, so this is not room-specific — the approval permission check dies instead of refusing when it has no zones to check against. Reachable from the app via `app.bookings.no_approval = true`, which is why that preset (`NO_APPROVAL` in `room.settings.ts`) is **not** in the base settings. Compounds with ROOM-B2: a room booking made through the form carries no zones at all, which is what walks it into this. Blocks ROOM-21, and **re-measured through the app on 2026-09-16** — still a `500`, with an empty response body. |

### Still to write

The seven scenarios this section was opened with are done or accounted for (ROOM-15 … ROOM-23).
What is left, in rough order of value:

- **Equipment / asset requests** on a meeting — the other half of the "catering and equipment"
  row. The form's asset section is a separate flow from catering (`AssetRequest`,
  `validateAssetRequestsForResource`) and would need its own seeding, like the menu did.
- **Recurring** room bookings in `use_bookings` mode. The calendar path is out of scope, but
  `toBookingRecurrence` suggests the native path takes a pattern, and nothing tests it.
- **Multi-room** meetings. `multipleSpacesEnabled` changes the picker's confirm button and the
  form's whole shape, and every row here books exactly one room.
- **Room features / facilities** filtering in the picker, which has the same shape as ROOM-19's
  favourites filter.

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
| REG-09 | P1 | Concurrent `POST /bookings` do not 500. | **[PPT-2642](https://acaprojects.atlassian.net/browse/PPT-2642)** | **fixed at source, not yet in the image this suite runs against.** Root cause was in pg-orm: crystal-db clears a connection's transaction flag only *after* the COMMIT it issues, so a COMMIT that fails — the serialization failures a booking burst produces — leaves it set, and the one place connections return to the pool could not see it. The connection went back to the pool with its `BEGIN` still open; reads kept working inside the orphaned transaction while every write returned 500 until restart. Fixed in [pg-orm#19](https://github.com/spider-gazelle/pg-orm/pull/19) (v2.2.4) and picked up by staff-api in #386. Measured with images differing only by that version: control stranded a connection in 3 of 4 bursts and ended unable to write; fixed, 0 of 11 and still writable. **`e2e/stack` pulls `placeos/staff-api:latest`, which is a release image — so this suite keeps running the old behaviour until the next platform release.** **Corrected 2026-09-14: this suite now DOES burst concurrent bookings.** The line that used to sit here — "harmless for now, nothing here bursts concurrent bookings" — stopped being true when the group-invite specs (VIS-03/VIS-04) landed: a group invite posts the container and every member at once, which is exactly the burst. Measured with `e2e/support/repro/vis-b6-burst.ts` (no browser, 4 concurrent POSTs x 12 rounds): 13x 201, 29x 400, 6x 500, clean in the early rounds and degrading after. Before a rollback-and-retry was added to the visitor flows the group specs failed about one run in three; with it, 10 of 10 runs clean and the recovery fired twice. That retry is a **workaround living in `e2e/support/visitor/visitor.flows.ts`**, to be deleted once the staff-api image carries pg-orm v2.2.4 — it is also why the suite being green must not be read as REG-09 being gone from the image. Reproducers: `e2e/support/repro/reg09-concurrent-bookings.ts` and `vis-b6-burst.ts`. |
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

- **The room CALENDAR path is the only genuinely external surface — the room itself is not.**
  A placeholder tenant unblocks every PlaceOS-native booking type (desks, lockers, parking,
  visitors) with no outbound call, and `app.events.use_bookings = true` puts **rooms** in that
  same group: the meeting form then saves an ordinary `room` booking locally, which is what §1b
  covers. `/calendars` and `/events` do call Microsoft and fail `AADSTS900023`, so the calendar
  half of WP-E2E-15 stays opt-in and out of the gate.
- **Open, and it decides what §1b is worth: do real customers book rooms through the calendar,
  or through `use_bookings`?** Nobody has answered it. If the answer is "the calendar", the
  green rows in §1b guard a path those customers never take. This needs a product answer, not more
  specs.
- **Nine rows are blocked on product fixes, not on test effort** (REG-08, REG-09, REG-10,
  VIS-15, ROOM-11, ROOM-13, ROOM-14, ROOM-21, ROOM-22). All were found by this suite. Leaving them visible here is the point — a blocked row is coverage
  information, a deleted row is not.
- **Two rows are blocked by the environment rather than by a bug** (AUTH-E2E-08, ROOM-23), and
  both say what would unblock them. ROOM-23 needs a real `Bookings` driver running in the e2e
  stack; there is no amount of spec work that substitutes for it.
- **Run hygiene: cancelled bookings accumulate, and the schedule counts them.** Every run leaves
  soft-deleted rows behind; `GET /bookings` defaults to `limit=100` and the schedule sends
  `include_deleted=true`, so once a user passes 100 their *new* bookings stop appearing and
  every card-based spec fails for a reason that has nothing to do with the app. Measured: a
  serial visitor run hit **106 cards** and failed 5 tests; one worker had **61 cancelled
  bookings on a single day** by mid-afternoon; 428 stale rows had to be cleared by hand once.
  The desk specs also fail more often as the suite grows, because more specs means more
  parallel load. **Nothing should go near CI until this is settled**, and settling it is a
  backend change or a purge step — not a spec change, and the user's decision either way.
- **REG-09 is fixed, and worth reading about.** One burst of concurrent booking POSTs used to
  poison staff-api's connection pool, so booking creation returned 500 for everyone until the
  service restarted — while reads kept working, because they ran inside the orphaned transaction.
  Filed as PPT-2642, root-caused to pg-orm and fixed in v2.2.4. It reaches this suite when the
  next platform release rebuilds `placeos/staff-api:latest`; until then the suite runs the old
  behaviour — and since the group-invite specs landed, **the suite trips it**. Group invites post
  a container plus every member at once, which is the burst; the visitor flows roll back a
  partial group and retry to absorb it. Delete that retry when the image is updated, and do not
  read a green run as evidence the image is fixed.
  Three reproducers are kept next to the finding: `reg09-concurrent-bookings.ts` (the burst),
  `reg09-client-abort.ts` (which ruled out client disconnects) and `vis-b6-burst.ts` (the same
  burst with no browser at all, which is what proved the visitor 400s were REG-09 rather than a
  form bug).
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
