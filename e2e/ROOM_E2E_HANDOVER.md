# Room booking e2e — handover

Working notes for the room-booking coverage, built after the visitor work and in the
same shape. Written to be picked up cold. The coverage contract lives in
[`../E2E_USER_STORIES.md`](../E2E_USER_STORIES.md) (§1b, ROOM-01 … ROOM-14); harness
conventions in [`README.md`](README.md); the visitor equivalent of this file is
[`VISITOR_E2E_HANDOVER.md`](VISITOR_E2E_HANDOVER.md).

**Status: 17 of 22 tests passing, 5 blocked (ROOM-B1 … ROOM-B5).** Ten spec files.
Nothing in the pre-existing desk suite was changed. The only edits to existing files are
in `e2e/support/visitor/your-bookings.page.ts`: the constructor argument became
`protected`, and the form that "Edit" lands on became an overridable hook — both so the
room schedule page can inherit the schedule rather than copy it.

**2026-09-16 added seven tests** covering the scenarios this file used to list as "still
to create": editing the time, editing the room, the capacity check in both its modes,
favourites, and approval — plus catering, which turned out to be broken in this mode
(ROOM-B5, a new finding). The eighth, **checking in, is blocked by the stack itself** and
is written up below rather than left as an open to-do.

## The one thing to understand before reading anything else

`E2E_USER_STORIES.md` had rooms down as **out of scope (external)**, because the meeting
flow talks to Microsoft/Google through `/events` and `/calendars`, and both 500 on this
stack.

That is only true in the **default** mode. With **`app.events.use_bookings = true`** the
same form saves an ordinary PlaceOS booking of type `room`, and availability comes from
the bookings list (`event-form.service.ts`, `book_internal`). No outbound call. Every
room spec runs in that mode.

**Say this out loud in any review:** a green run proves the PlaceOS-native room path
works and says **nothing** about the calendar path. Nobody has yet answered whether real
customers run one, the other, or both — and that answer decides how much this coverage is
worth. It is an open question in the contract, not something a spec can settle.

---

## How to run

```bash
e2e/stack/up.sh                       # colima has to be running first
export E2E_BACKEND_URL=https://localhost:9443
bun run e2e:typecheck                 # nothing else type-checks the specs
bunx playwright test --config apps/workplace/playwright.config.ts
```

Room specs only:

```bash
bunx playwright test --config apps/workplace/playwright.config.ts \
  --project=local apps/workplace/e2e/local/room-*.spec.ts
```

The first room run **creates the rooms** (three engine Systems per worker) and the first
catering run creates the **menu**; both need the admin identity from `seed.ts` to be
present, and both are left in place between runs.

Runs on 2026-09-16 after this work: the **full suite** at 4 workers gave 52 passed,
6 skipped, 1 failed — that one failure being the room-swap race described under *Traps*,
which is now waited on properly. With the fix, the **room files** ran twice back to back at
**18 passed, 5 skipped, 0 failed** (1.3 min, 1.2 min). Eighteen rather than seventeen
because the count includes the preflight check.

---

## What was built

### Support — `e2e/support/room/`

Seven files, ~1,000 lines, sharing nothing with the desk or visitor support code.

| File | Holds |
|---|---|
| `room.env.ts` | **three** rooms per worker (`roomFor(worker, variant)` — `main`, `alt`, `small`), one time slot per spec file (`ROOM_SLOTS`, and `ROOM_SLOTS_2` on `SECOND_DAY` for the later files), `slotFor(hour, daysAhead, minutes)` |
| `room.seed.ts` | creates the rooms as engine **Systems**, on demand, idempotent, cached per process. Needs ADMIN |
| `catering.seed.ts` | creates a catering menu — a hidden `_CATERING_` asset category, a `CATERING:` asset type, one asset on the building. Needs ADMIN, and the asset APIs are on the **engine** api |
| `room.api.ts` | create/sweep room bookings, plus `tryRoomBooking` — which returns the status instead of throwing, because the clash specs assert on `409` |
| `room.settings.ts` | `useSettings()`, `ROOM_BASE_SETTINGS`, `LIMITED_HOURS`, and `NO_APPROVAL` (deliberately **unused** — it triggers ROOM-B1) |
| `meeting-form.page.ts` | the meeting form: date, start time, duration, the room picker, attendees |
| `schedule.page.ts` | `RoomSchedulePage` — **extends** `visitor/your-bookings.page.ts`, overriding only what is room-shaped |
| `room.flows.ts` | `bookRoomViaUI` — form → confirm → success, returning the created booking |

### Specs — `apps/workplace/e2e/local/`

| File | Tests | State |
|---|---|---|
| `room-booking.spec.ts` | 3 | 2 passing (stored correctly; teardown really tears down); 1 **`fixme`** — zones, ROOM-B2 |
| `room-clash.spec.ts` | 2 | passing — same slot and partial overlap both refused `409` as a second user, with a control; and the room frees up after deletion |
| `room-scoping.spec.ts` | 2 | passing — another user cannot see or delete yours; control that you can see your own |
| `room-times.spec.ts` | 3 | 2 passing (day and start time stored as picked; limits control what is offered); 1 **`fixme`** — length, ROOM-B3 |
| `room-attendees.spec.ts` | 2 | passing — an attendee added is stored; one removed before sending is not invited |
| `room-cancel.spec.ts` | 2 | 1 **`fixme`** — cancelling from the app, ROOM-B4; 1 passing — declining the confirmation leaves it alone |
| `room-edit.spec.ts` | 2 | passing — a new start time is stored; a booking moved to another room is stored against it |
| `room-capacity.spec.ts` | 2 | passing — strict mode refuses before anything is sent (red-checked); the default only warns and still books |
| `room-favourites.spec.ts` | 1 | passing — a favourite is saved to the user's settings and the filter narrows to it |
| `room-approval.spec.ts` | 2 | 1 passing — the default stores the booking unapproved; 1 **`fixme`** — `no_approval`, ROOM-B1 |
| `room-catering.spec.ts` | 1 | **`fixme`** — the order is refused in this mode, ROOM-B5 |

Two tests per file, matching every other spec file in the suite, except where a third is a
`fixme` placeholder for a specific bug (fold it into its sibling when the bug is fixed) or
where the subject is genuinely one thing (favourites, catering).

**Four tests self-skip on a single worker** (clash ×2, scoping, attendees ×2 need a
genuinely different second user). Run with the default worker count.

---

## Findings — four, all reproduced and minimised, none filed

| ID | Finding | Evidence |
|---|---|---|
| **ROOM-B5** | **Catering cannot be ordered with a PlaceOS-native room booking.** The meeting saves (`201`); the catering order that follows is refused **422 `error linking booking to event` / `Could not find metadata for event ARRAY['1138']`**. Orders are linked to a calendar EVENT by `event_id`, and in `use_bookings` mode the id handed over is a *booking* id, so the lookup finds nothing. **The room booking is left behind undeleted and no order exists** — the user sees an error and reasonably believes nothing was booked, while the room is held and the food was never ordered. | `room-catering.spec.ts` (`fixme`). Booked through the app with a seeded menu; the 422 body and the surviving booking were both measured on 2026-09-16 |
| **ROOM-B4** | **Cancelling a room booking from the schedule does nothing.** Confirming fires `DELETE /api/staff/v1/events/<id>` → **500**, and the booking is still live. `schedule.component.ts` deletes whatever it displays as an event (`item instanceof CalendarEvent ? removeEvent : removeBooking`), and a room booking is rebuilt into a `CalendarEvent` for display, so it takes the calendar path. The room stays held by a booking the user believes they cancelled. | `room-cancel.spec.ts` test 1 (`fixme`). Test 2 passes, which is what shows the menu, dialog and wiring are fine and the delete is not |
| **ROOM-B3** | **The meeting length picked is not the length booked.** Ask for 90: field reads "1 hour 30 minutes", confirmation shows 6:00–7:30 PM, request sends `booking_end` 7:00 PM while `extension_data.event_end` says 7:30. `newBookingFromCalendarEvent` takes `event.duration`, still the default. The user sees one range; the room is held for another. | `room-times.spec.ts` test 3 (`fixme`). Not timing and not ordering — both orders tried, and the field still reads 90 four seconds later, immediately before sending |
| **ROOM-B2** | A room booked through the app is stored with **`zones: []`**, where desk and visitor bookings carry org/building/level. Anything scoping by zone cannot see it, and it is what walks the request into ROOM-B1. | `room-booking.spec.ts` test 3 (`fixme`) |
| **ROOM-B1** | A non-admin sending `approved: true` **without** zones gets **500 `syntax error at or near ")" (PQ::PQError)`**. With zones it is correctly refused `403`; an admin gets `201`; desks do it too, so it is not room-specific — the approval permission check dies instead of refusing when it has no zones. Compounds with ROOM-B2, which is why a room booking made through the form reaches it: that booking carries no zones at all. | `room-approval.spec.ts` test 2 (`fixme`). Re-measured through the app on 2026-09-16 by dropping the `fixme`: the booking POST is a `500` with an empty body |

None of these are test defects. ROOM-B3 and ROOM-B4 are the two a user would actually be
hurt by — both hold a room against everybody else while showing the person who booked it
something different.

---

## Decisions already taken (so they are not re-litigated)

- **`use_bookings` mode, not the calendar.** The only mode that runs locally at all. The
  cost is stated above and in `room.settings.ts`; it is not hidden in a green run.
- **No `seed.ts` change.** Rooms are the first resource that must genuinely be created,
  and the seeding lives in `room.seed.ts` instead, so a room mistake cannot break the
  desk specs.
- **The schedule page object is inherited, not copied.** The rule being followed: if two
  areas need one element it stays in its original file and the other area inherits. Hence
  the single `private` → `protected` change in `your-bookings.page.ts`.
- **Settings per browser context**, via `localStorage['PLACEOS.setting_overrides']`, the
  same mechanism the visitor specs use — deliberately duplicated rather than imported,
  because a shared file could break both areas.
- **Three rooms per worker, not one** (2026-09-16). `alt` exists so a booking can be moved
  between rooms, and `small` has capacity 1 so a single guest is already over it. Capacity
  is a property of the System, so it cannot be a per-test setting; the alternative was
  adding eight attendees through the autocomplete to overflow a normal room, which is
  slower and gives eight more ways to fail for unrelated reasons.
- **The catering menu is seeded, and kept to one item.** The subject is whether an order
  reaches the backend, not the menu, so `catering.seed.ts` creates exactly one item.
- **One room per worker, one slot per spec file.** A room is exclusive like a desk, so two
  specs on one worker booking the same hour would clash with each other rather than with
  the thing under test.
- **The clash and scoping specs work through the API, not the form.** The picker hides
  busy rooms, so through the UI "refused" and "never offered" are indistinguishable.

---

## Next steps

1. ~~`E2E_USER_STORIES.md` rows~~ — **done 2026-09-16.** §1b holds ROOM-01 … ROOM-23 and
   the five findings; WP-E2E-15 is now **partial** rather than out of scope, split into
   the native path (covered) and the calendar path (still external).
2. ~~The seven scenarios this file used to list~~ — **done 2026-09-16**, as seven tests:
   ROOM-15 … ROOM-22. Two of them land as `fixme` on bugs (ROOM-21 on ROOM-B1, ROOM-22 on
   the new ROOM-B5), and the eighth — check-in, ROOM-23 — is blocked by the stack; see
   below.
3. **Push, and open the PR.** Still not done, and deliberately: the branch has never been
   pushed. Two commits are local.
4. **File the five findings.** Needs a project and an owner. **ROOM-B5, ROOM-B4 and
   ROOM-B3 first** — all three leave a room held while telling the user something else.
5. **Stale booking accumulation** — shared with the visitor work and bigger than either.
   Cancelled bookings pile up per user and the schedule counts them against a 100-row
   limit; past that, card-based specs fail for a reason that has nothing to do with the
   app. Backend change or purge step, and the user's decision.
6. **What is left to write**, now that the original seven are done: equipment/asset
   requests on a meeting (the other half of "catering and equipment", and a separate flow
   from catering) · recurring bookings in `use_bookings` mode · multi-room meetings
   (`multipleSpacesEnabled` changes the picker's confirm button and the form's shape) ·
   the picker's features/facilities filter, which has the same shape as favourites.

## Checking in is blocked by the stack, not by effort

Worth stating properly, because it looks like an oversight. The check-in control in
`event-details-modal.component.ts` is gated on a live websocket **binding**:

```html
<i binding [(model)]="room_status" [sys]="space()?.id" mod="Bookings" bind="status"></i>
```

The button renders only when `room_status()` is set and is not `'free'`, so it needs a
**`Bookings` driver module running on the room's System**. Measured on this stack:
`GET /drivers` returns one (`spec_helper`) and `GET /modules` returns one
(`PrivateHelper`). There is no `Bookings` driver to add, so no room can have that module
and the control can never appear — no selector, no setting and no seeding changes that.

Unblocking it means building and running a real driver inside the e2e stack, which is a
stack change. Contrast VIS-11: visitor check-in is a plain staff-api call, which is why it
is covered and this is not.

**Cannot be tested here at all:** real Outlook/Google invites, free/busy, attendee
availability · email of any kind · room panels and signage · recurring meetings on the
calendar path · checking in to a room (above).

---

## Traps that cost time — do not re-derive

- **`GET /systems` returns a BARE ARRAY**, not `{ results: [] }`. Reading `.results`
  gives `undefined`, the fallback returns `[]`, and it looks exactly like "the search
  index has not caught up". Half an hour went on that theory.
- **The room picker's confirm button is `toggle-space` ("Select Item").** `space-return`
  only renders in multi-select mode; clicking it waits the full timeout against an
  element that was never in the DOM.
- **`meeting-flow-success` has no box.** Its only child is `absolute inset-0`, so
  Playwright reports the host as not visible while the screen is plainly up. Wait on
  `a[name="meeting-created-continue"]` inside it.
- **Set the date ONCE, before the fill/retry loop.** Changing the date resets the duration
  asynchronously; a repeated date click lands after the duration pick and silently
  reverts it.
- **Time and duration reach the model ~2 seconds late**, and the confirm modal snapshots
  the model when it opens. Set them last, then wait.
- **Limits are `app.events.*`, not `app.bookings.*`.** The meeting form reads the event
  settings; setting the bookings keys changes nothing and the form happily offers an
  8-hour meeting.
- **A room booking renders as an EVENT card** — `a[name="view-event-details"]`,
  `?event=<id>`, `event-details-modal` — not the booking card the desk and visitor specs
  use. This is also the root of ROOM-B4.
- **The booking's own `title` is always the literal "Room Booking".** The real meeting
  name is in `extension_data.title`, and the schedule rebuilds the event from there, so it
  displays correctly. Asserting on `stored.title` fails against a perfectly correct
  booking.
- **Attendees live in `extension_data.attendees`**, not in a column, and the list includes
  the room itself as a resource.
- **The flow has three screens** — form, confirm, success — and nothing is sent until the
  second. A spec that clicks Confirm once and then looks for a booking finds none and
  blames the backend.
- **Rooms ARE exclusive, like desks**: same slot `409`, partial overlap `409`, clear slot
  `201`. Unlike visitors, who can be double-booked (VIS-B1). Assert `409` specifically —
  a REG-09 `500` satisfies `>= 400` while proving nothing.

### Added 2026-09-16, and every one of these cost a failing run first

- **The picker only offers rooms for 4+ people until you say otherwise.** The form has a
  "minimum people" radio (`space-list-field`, values 1 / 4 / 10) that starts at **4**, and
  the picker filters to rooms at least that big. A capacity-1 room is simply absent, and
  the picker's own error says the room does not exist — which sent the first capacity
  attempt looking for a seeding bug. `MeetingForm.setRoomSize(1)` is the fix.
- **A capacity of 0 escapes that filter entirely.** `Space` maps a falsy capacity to
  **-1**, and the filter lets anything negative through — so a capacity-0 room is always
  offered and is displayed as "Capacity 2". Do not reach for 0 to make a room "too small":
  it makes every capacity comparison degenerate.
- **An API-made booking cannot be edited through the form.** The room lives in
  `extension_data`, which is what `newCalendarEventFromBooking` spreads over the event — so
  a booking created by `createRoomBookingViaApi` opens the edit form with **no room on it**
  and looks exactly like the app losing the room. `room-edit.spec.ts` books through the UI
  for that reason, and says so.
- **Assets, asset types and asset categories are on the ENGINE api.**
  `/api/staff/v1/assets` is a `404` here. That matters for anything catering-shaped, since
  a catering menu is made of assets.
- **An asset type needs a `brand`.** Without it, `POST /asset_types` is a `422`
  `"brand: should not be nil"`. The app's own menu editor always sends one, so this only
  bites a seeder.
- **"Add catering" is disabled until a room is chosen**, because catering is delivered to a
  room. A spec that orders food before picking a room waits out the full timeout on a
  button that was never going to enable.
- **A favourite is a USER setting, not a room property.** It goes into the user's
  `settings` metadata as `favourite_spaces`, debounced ~2.4 seconds, written as the WHOLE
  blob — which is shared with the visitor specs' saved invitee list. Read-modify-write, or
  you will wipe their data as collateral. `room.api.ts` does.
- **The chosen ROOM reaches the model late too, not just the times.** Caught by a full
  parallel run, not by the spec in isolation: `room-edit`'s "move to another room" picked
  the new room, the confirm screen snapshotted the model before the change landed, and the
  `PATCH` carried the ORIGINAL room id — so the test failed saying the room had not
  changed, which is exactly what it would say if the app were broken. Worth knowing
  because **the room count cannot see this**: it is 1 before and 1 after, so only the NAME
  shows the swap. `MeetingForm.chosenRoomNames()` exists for that, and the spec waits on it
  before confirming.
- **One flake seen, once**: `room-clash` "the room frees up once the booking is deleted"
  failed on the first run against a freshly started stack and passed on every run since,
  including in isolation. The cause was not captured, because that run used a reporter that
  swallowed it. If it reappears, run with the default reporter and keep the HTML report.
