# Visitor invite e2e — handover

Working notes for the visitor-invite coverage added alongside the existing desk
specs. Written to be picked up cold. Coverage contract lives in
[`../E2E_USER_STORIES.md`](../E2E_USER_STORIES.md); harness conventions in
[`README.md`](README.md).

**Status: 22 of 23 tests passing. 1 blocked on an app bug (VIS-B8).**
Best full suite run 2026-09-15: **36 passed, 1 skipped, 0 failed** in 1.7 min.
Two of four runs that afternoon also showed the PRE-EXISTING desk flake
(REG-10, "Require locker" — inside `bookDeskViaUI`, untouched here). It is
appearing more often as the suite grows, which is a CI problem waiting to happen:
more specs means more parallel load, and that race is won by whoever is faster.
Rows for all of them are in [`../E2E_USER_STORIES.md`](../E2E_USER_STORIES.md) (§1a), along
with the REG-09 correction. The check-in specs no longer depend on the time of day.
Nothing in the pre-existing suite was modified — `git diff` on
`e2e/support/{env,api,flows}.ts` is empty.

### Known flake in the PRE-EXISTING desk suite (not introduced here)

`desk-booking.spec.ts` "a deleted desk booking leaves the listing" failed once
on 2026-09-14 with:

```
Error: "Require locker" should be unchecked
expect(locator).not.toBeChecked() failed
```

That is inside the original `bookDeskViaUI` helper, which this work does not
touch. It is the REG-10 / PPT-2643 form-rebuild race the coverage doc already
describes — the rebuild restores "Require locker" to checked. Mentioned here only
so a red desk test after a visitor run is not misread as collateral damage.

---

## How to run

```bash
e2e/stack/up.sh                       # if the stack is not already up
export E2E_BACKEND_URL=https://localhost:9443
bun run e2e:typecheck                 # NEW — nothing else type-checks the specs
bunx playwright test --config apps/workplace/playwright.config.ts
```

Visitor specs only:

```bash
bunx playwright test --config apps/workplace/playwright.config.ts \
  --project=local apps/workplace/e2e/local/visitor-*.spec.ts
```

---

## What was built

Eight new files, no existing file changed except one line in `package.json`
(the `e2e:typecheck` script) and `e2e/tsconfig.json` (new).

### Support — `e2e/support/visitor/`

| File | Holds |
|---|---|
| `calendar.ts` | driving the shared `date-calendar` widget (schedule sidebar AND the form's date pop-up) |
| `visitor.env.ts` | `visitorFor(worker, slot)` + the `VISITOR_SLOTS` table |
| `visitor.api.ts` | guest search/delete, sweeps, `createBookingViaApi`, `checkInViaApi`, `isReg09` |
| `visitor.settings.ts` | `useSettings()` + named mode presets |
| `invite-form.page.ts` | page object for `/#/book/visitor/form` |
| `your-bookings.page.ts` | page object for `/#/your-bookings` + details modal |
| `visitor.flows.ts` | `inviteVisitorViaUI`, `inviteVisitorsViaUI` |

Kept out of the shared support files deliberately, so nothing visitor-shaped can
break the desk specs.

### Specs — `apps/workplace/e2e/local/`

| File | Tests | State |
|---|---|---|
| `visitor-invite.spec.ts` | 2 | passing |
| `visitor-group.spec.ts` | 2 | passing |
| `visitor-scoping.spec.ts` | 2 | passing |
| `visitor-settings.spec.ts` | 2 | passing |
| `visitor-delegate.spec.ts` | 2 | passing |
| `visitor-checkin.spec.ts` | 2 | passing, at any hour — test 1 now covers check-in **and** check-out |
| `visitor-edit.spec.ts` | 3 | 2 passing (multi-visitor mode, one of them future-dated); 1 **`fixme`** — single-visitor mode, VIS-B8 |
| `visitor-cancel.spec.ts` | 2 | passing — cancelling from the app, and declining the confirmation |
| `visitor-validation.spec.ts` | 2 | passing — a bad address is refused; a visitor removed before sending is not invited |
| `visitor-details.spec.ts` | 2 | passing — pass number + international flag; company + guest record name |
| `visitor-times.spec.ts` | 2 | passing — the chosen start/length are stored; limits control what is offered |

Two tests per file, matching every existing spec file in the suite — except
`visitor-edit`, which carries a third as a placeholder for VIS-B8. Fold it away
when the bug is fixed; it is then the same assertion as test 1 with one setting
changed.

### Reproducers — `e2e/support/repro/`

- `vis-b1-duplicate-visitor.ts` — the same visitor booked twice into one slot
- `vis-b6-burst.ts` — concurrent booking POSTs, no browser; proves REG-09

Both need the suite to have run once first, so the worker token sidecars exist.

---

## Findings — all confirmed against the running stack

| ID | Finding | Evidence |
|---|---|---|
| **VIS-B8** | **In SINGLE-visitor mode, saving an edit throws `_.toJSON is not a function` and sends no request.** Multi-visitor mode — the shipped default — is fine. `Booking` declares `attendees` as `User[]` but assigns raw JSON to it; in single mode the edit path copies that into the form's `assets`, and saving calls `.toJSON()` on each entry. The multi paths rebuild people with `new User(...)` first, so they escape it. | all created and edited through the app: single/1 fails, multi/1 and multi/2 save cleanly; same on a future date. Screenshot: `reports/visitor-edit-probe/` |
| **VIS-B9** | **Two overlapping GROUP invites by one host are refused, whoever the visitors are.** The container is named `${host}[${date the invite was CREATED}]`, so all of a host's group invites that day share one asset id and the backend refuses the overlap. Same two visits booked on different days are accepted — which is what shows it is accidental. Do NOT confuse with VIS-B1. | `vis-b9-group-clash.ts`: 201 / **409 Conflicting booking** / 201 / 201 |
| **VIS-B1** | Same visitor bookable twice into one slot — backend returns 201 both times. Desks refuse this. Product says it should be refused. | `vis-b1-duplicate-visitor.ts` |
| **REG-09** | Group invites are the FIRST thing in this suite that bursts concurrent booking writes, so this suite now trips PPT-2642. `E2E_USER_STORIES.md` still says "nothing here bursts concurrent bookings" — **that line is now wrong and should be corrected.** | `vis-b6-burst.ts`: 4 concurrent POSTs x 12 rounds gave 13x 201, 29x 400, 6x 500, clean early then degrading |
| **Host flags** | `visitors.can_book_for_anyone` renders the host picker, but `sendInvite` keeps your choice only if `visitors.can_book_for_others` is ALSO set. Set one without the other and the picker silently discards the host. | `BOOK_FOR_ANYONE` sets both; documented there |
| **Listing limit** | `GET /bookings` defaults to limit 100 and the schedule passes `include_deleted: true`, so once a user has 100+ soft-deleted bookings, new ones stop appearing in their schedule. Broke the card-dependent specs until 428 stale rows were cleared. | counted in Postgres |
| **Deep link** | `?booking=<id>` never opens the details modal: `booking-card.component.ts` checks `params.has('booking')` then compares the id to `params.get('event')` — a param that is not there. | read from source |

None of these are test defects.

---

## Decisions already taken (so they are not re-litigated)

- **Workplace only.** The desk specs touch neither concierge nor the kiosk (zero
  mentions in `e2e/`), so visitor coverage stays in workplace too.
- **Settings per browser context**, via `localStorage['PLACEOS.setting_overrides']`,
  not seeded on the org zone. Single- and multi-visitor mode are the same setting
  with two values; seeding it would force the whole suite to serialise. Trade-off
  stated in `visitor.settings.ts`.
- **No `seed.ts` change.** A visitor "asset" is just an email, so there is
  nothing to provision. This removes the one file where a mistake could have
  broken the desk specs.
- **Slots, not shared addresses.** Every test owns a slot in `VISITOR_SLOTS`,
  because `releaseVisitor` sweeps by address and two tests sharing one can delete
  each other's data.
- **REG-09 retry lives in the flows, not the config.** Confined to visitor specs
  and easy to delete after the staff-api upgrade. `submitWhenAccepted` rolls back
  a partial group before retrying, since retrying after a partial create would
  leave two containers.
- **Selectors never depend on visible text.** All labels are translated. See the
  policy blocks at the top of both page objects.

---

## Next steps

1. ~~`E2E_USER_STORIES.md` rows~~ — **done 2026-09-15.** §1a holds VIS-01 … VIS-14
   and the six findings; the REG-09 row and the notes bullet now say the suite
   DOES burst concurrent bookings, and point at the retry in
   `visitor.flows.ts` as the thing to delete when the image is updated.
2. ~~`visitor-checkin` time fragility~~ — **done 2026-09-15.** `YourBookingsPage`
   grew `showDayOf(timestamp_ms)`, which drives the sidebar calendar to whatever
   day a booking falls on, so neither test cares what the clock says any more.
   Both skips are gone. Test 2 now books a fixed **10am tomorrow** instead of
   "3 hours from now"; test 1 still has to sit 10 minutes from now, because a
   check-in only works next to its own start time, but it may now cross midnight
   safely. Red-checked: with the `showDayOf` call removed, test 2 fails with
   `no card for booking 568 ... 25 card(s) are rendered`.
   How it works, since it is the non-obvious part: the calendar grid is 42
   consecutive day cells and only one of them is marked (the "today" ring, drawn
   from a value captured at page load). Reading that cell's day-of-month and
   comparing it against the browser clock says whether the ring means today or
   yesterday, and every other cell is then just counting. That is what makes it
   survive the clock crossing midnight mid-test.
3. **File the six findings above.** None are filed yet. Note VIS-B8's priority
   depends on an answer nobody has yet: **does any real deployment run
   single-visitor mode?** If not, it is low.
4. **Stale booking accumulation.** Each run adds soft-deleted rows; past 100 per
   user the card-dependent specs (`delegate`, `checkin`) break again in a way
   that looks nothing like the cause. A run on 2026-09-15 already rendered 25
   cards for one worker, so this is accumulating, not hypothetical. Needs either a backend change or a purge
   step before this goes near CI. **This is an environment decision, not a spec
   change.**

---

## Traps that cost time — do not re-derive

- **`asset_name` is not returned by staff-api.** The UI sets it on a group
  container; the model has no such column. Asserting on it compares against
  `undefined`. Assert on `extension_data` instead.
- **A group container is `booking_type: 'group'`**, so `GET /bookings?type=visitor`
  returns N members, NOT N+1. `visitor-group` test 2 exists to stop that mistake.
- **Guest records outlive their booking** and are created from `attendees`, not
  `asset_id`. Teardown must delete both.
- **Two different check-in gates.** The app hides the button until 15 MINUTES
  before the start (`Booking.state` is `'future'` before that); the backend
  accepts a check-in within 1 HOUR. Easy to conflate.
- **Playwright text selectors do not match the `<icon>` wrapper.** Both
  `icon:text-is("edit")` and `filter({ hasText: /^edit$/ })` silently matched
  nothing while the element was plainly in the DOM. `menuAction` reads trimmed
  `textContent` instead.
- **Two wrong theories about the REG-09 400**, recorded in `visitor.flows.ts`:
  "the app posts an empty body" (it sends ~2 KB) and "the form is rebuilt
  mid-init and loses its model" (the browser-free burst reproduces it with no
  form at all).
- **Add diagnostics before theorising.** Every cause here became obvious in one
  run once the failure message reported what was actually present — rendered card
  ids, menu contents, request sizes. Guessing at selectors cost far more.
