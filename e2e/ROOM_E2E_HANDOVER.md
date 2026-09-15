# Room booking e2e — handover

Working notes for the room-booking coverage, built after the visitor work and in the
same shape. Written to be picked up cold. The coverage contract lives in
[`../E2E_USER_STORIES.md`](../E2E_USER_STORIES.md) (§1b, ROOM-01 … ROOM-14); harness
conventions in [`README.md`](README.md); the visitor equivalent of this file is
[`VISITOR_E2E_HANDOVER.md`](VISITOR_E2E_HANDOVER.md).

**Status: 11 of 14 tests passing, 3 blocked on app bugs (ROOM-B2, ROOM-B3, ROOM-B4).**
Six spec files, ~55 seconds. Nothing in the pre-existing suite was changed; the only
edit to an existing file is **one word** in `e2e/support/visitor/your-bookings.page.ts`
(`private` → `protected`), so the room schedule page can inherit it instead of copying it.

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

The first room run **creates the rooms** (one engine System per worker) and needs the
admin identity from `seed.ts` to be present. They are left in place between runs.

---

## What was built

### Support — `e2e/support/room/`

Seven files, ~1,000 lines, sharing nothing with the desk or visitor support code.

| File | Holds |
|---|---|
| `room.env.ts` | one room per worker (`roomFor`), one time slot per spec file (`ROOM_SLOTS`), `slotFor(hour, daysAhead, minutes)` |
| `room.seed.ts` | creates the rooms as engine **Systems**, on demand, idempotent, cached per process. Needs ADMIN |
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

Two tests per file, matching every other spec file in the suite. The two files carrying a
third carry it as a `fixme` placeholder for a specific bug; fold each one into its sibling
test when the bug is fixed.

**Four tests self-skip on a single worker** (clash ×2, scoping, attendees ×2 need a
genuinely different second user). Run with the default worker count.

---

## Findings — four, all reproduced and minimised, none filed

| ID | Finding | Evidence |
|---|---|---|
| **ROOM-B4** | **Cancelling a room booking from the schedule does nothing.** Confirming fires `DELETE /api/staff/v1/events/<id>` → **500**, and the booking is still live. `schedule.component.ts` deletes whatever it displays as an event (`item instanceof CalendarEvent ? removeEvent : removeBooking`), and a room booking is rebuilt into a `CalendarEvent` for display, so it takes the calendar path. The room stays held by a booking the user believes they cancelled. | `room-cancel.spec.ts` test 1 (`fixme`). Test 2 passes, which is what shows the menu, dialog and wiring are fine and the delete is not |
| **ROOM-B3** | **The meeting length picked is not the length booked.** Ask for 90: field reads "1 hour 30 minutes", confirmation shows 6:00–7:30 PM, request sends `booking_end` 7:00 PM while `extension_data.event_end` says 7:30. `newBookingFromCalendarEvent` takes `event.duration`, still the default. The user sees one range; the room is held for another. | `room-times.spec.ts` test 3 (`fixme`). Not timing and not ordering — both orders tried, and the field still reads 90 four seconds later, immediately before sending |
| **ROOM-B2** | A room booked through the app is stored with **`zones: []`**, where desk and visitor bookings carry org/building/level. Anything scoping by zone cannot see it, and it is what walks the request into ROOM-B1. | `room-booking.spec.ts` test 3 (`fixme`) |
| **ROOM-B1** | A non-admin sending `approved: true` **without** zones gets **500 `syntax error at or near ")" (PQ::PQError)`**. With zones it is correctly refused `403`; an admin gets `201`; desks do it too, so it is not room-specific — the approval permission check dies instead of refusing when it has no zones. | reached from the app via `app.bookings.no_approval = true`, which is why `NO_APPROVAL` is not in the base settings. No spec: the approval scenario is blocked on it |

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
- **One room per worker, one slot per spec file.** A room is exclusive like a desk, so two
  specs on one worker booking the same hour would clash with each other rather than with
  the thing under test.
- **The clash and scoping specs work through the API, not the form.** The picker hides
  busy rooms, so through the UI "refused" and "never offered" are indistinguishable.

---

## Next steps

1. ~~`E2E_USER_STORIES.md` rows~~ — **done 2026-09-16.** §1b holds ROOM-01 … ROOM-14 and
   the four findings; WP-E2E-15 is now **partial** rather than out of scope, split into
   the native path (covered) and the calendar path (still external).
2. **Commit and push.** Nothing is committed on `automated-testing` yet — visitor work
   first, then rooms.
3. **File the four findings.** Needs a project and an owner. ROOM-B3 and ROOM-B4 first.
4. **Stale booking accumulation** — shared with the visitor work and bigger than either.
   Cancelled bookings pile up per user and the schedule counts them against a 100-row
   limit; past that, card-based specs fail for a reason that has nothing to do with the
   app. Backend change or purge step, and the user's decision.
5. **Seven room scenarios still to write:** edit the time · edit the room · capacity
   warning · approval (**blocked by ROOM-B1**) · check in · favourite rooms · catering and
   equipment.

**Cannot be tested here at all:** real Outlook/Google invites, free/busy, attendee
availability · email of any kind · room panels and signage · recurring meetings.

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
