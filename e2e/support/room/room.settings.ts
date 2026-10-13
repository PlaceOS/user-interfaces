/**
 * Per-test app settings for the room specs.
 *
 * ## The setting that makes room coverage possible at all
 *
 * Room booking has two completely different back ends:
 *
 *   default                        -> POST /events, and free/busy from /calendars.
 *                                     Both are Microsoft/Google backed and return
 *                                     500 on a stack with placeholder tenant
 *                                     credentials. Untestable locally, which is
 *                                     why `E2E_USER_STORIES.md` had rooms down as
 *                                     "out of scope (external)".
 *   app.events.use_bookings = true -> the room is saved as an ordinary PlaceOS
 *                                     booking of type `room`, and availability
 *                                     comes from the bookings list
 *                                     (`event-form.service.ts`, `book_internal`).
 *                                     No outbound call at all.
 *
 * Everything here runs in the second mode. **State that plainly to anyone reading
 * a green run:** this proves the PlaceOS-native room path works, and says nothing
 * about the calendar path a tenant with real Microsoft credentials would use.
 *
 * Applied per BROWSER CONTEXT through the same debug override the visitor specs
 * use, rather than seeded onto a zone, so specs needing different settings still
 * run in parallel instead of serialising the suite on shared state.
 */
import { Page } from '@playwright/test';

/**
 * Force app settings for ONE page, before its first navigation.
 *
 * Deliberately a copy of the visitor helper rather than an import from it: the
 * two areas are kept apart on purpose, and twenty lines of duplication is a
 * cheaper price than a shared file that can break both.
 *
 * Two rules the app imposes:
 *  - keys MUST start with `app.`, anything else is dropped on load;
 *  - matching is EXACT — `app.events` will not satisfy a read of
 *    `app.events.use_bookings`.
 */
export async function useSettings(
    page: Page,
    overrides: Record<string, unknown>,
): Promise<void> {
    const bad = Object.keys(overrides).filter((k) => !k.startsWith('app.'));
    if (bad.length) {
        throw new Error(
            `setting override keys must start with "app." — the app drops the rest on ` +
                `load, leaving the default quietly in place. Got: ${bad.join(', ')}`,
        );
    }
    await page.addInitScript((value) => {
        localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(value));
    }, overrides);
}

/**
 * Turn on the EQUIPMENT section of the meeting flow — ROOM-24.
 *
 * `app.events.has_assets` is what `meeting-flow-options.component.ts` reads to
 * decide whether to render the section at all, and it is off by default. The
 * setting alone gives a section with nothing in it: the items also have to be
 * seeded, by `asset.seed.ts`. Both are needed, and neither fails loudly without
 * the other.
 */
export const ROOM_ASSETS_MODE = {
    'app.events.has_assets': true,
};

/**
 * Turn on the RECURRENCE control of the meeting flow — ROOM-25.
 *
 * `events.allow_recurrence` is what `meeting-flow-details.component.ts` reads,
 * and it is off by default. Note the component ALSO requires the meeting to be
 * 24 hours or shorter (`allow_recurrence = recurrence_enabled() && duration <=
 * 24 * 60`), so a recurrence test cannot also be a multi-day test.
 */
export const ROOM_RECURRENCE_MODE = {
    'app.events.allow_recurrence': true,
};

/** The mode every room spec runs in. See the note at the top of this file. */
export const ROOM_BOOKINGS_MODE = {
    'app.events.use_bookings': true,
};

/**
 * Skip the approval step (`app.bookings.no_approval`).
 *
 * The app sends `approved: true` only for users that staff-api accepts it
 * from: admin, support and zone manager users (PPT-2767). For a standard user
 * it leaves `approved` to the backend, so the booking is stored pending.
 * Measured through the new meeting flow, 13 Oct 2026: a standard user's
 * booking is stored (`201`) and is not approved. `room-approval.spec.ts` holds
 * that as ROOM-21.
 *
 * ## Why it is not in the base settings
 *
 * The first version of the room specs measured a failure with this setting
 * (ROOM-B1): the old meeting form sent `approved: true` with `zones: []` for
 * every user, and staff-api answered **HTTP 500 `syntax error at or near ")"
 * (PQ::PQError)`** in place of a 403. The new flow sends the zones of the
 * room. The setting stays out of the base settings so that only ROOM-21
 * depends on it.
 */
export const NO_APPROVAL = {
    'app.bookings.no_approval': true,
};

/**
 * Cap the meeting length and confine it to office hours.
 *
 * `app.events.*`, NOT `app.bookings.*`. The meeting form reads its limits from
 * the EVENT settings (`event-form.service.ts`: `app.events.max_duration`,
 * `app.events.bookable_hours`), while the desk and visitor forms read
 * `app.bookings.*`. Setting the bookings keys here changes nothing at all and
 * the form happily offers an 8 hour meeting — which is exactly what happened on
 * the first run of `room-times.spec.ts`.
 */
export const LIMITED_HOURS = {
    'app.events.max_duration': 60,
    'app.events.bookable_hours': { start: 9, end: 17 },
};

/**
 * Refuse a meeting with more people in it than the rooms can hold.
 *
 * OFF by default, and the two states behave completely differently rather than
 * one being a stronger version of the other:
 *
 *   unset ......... a WARNING is rendered under the attendee list of the last
 *                   step, and the booking goes through regardless.
 *   true .......... Confirm (`confirmBooking`) stops with a toast. Nothing is
 *                   sent.
 *
 * Both halves are covered by `room-capacity.spec.ts`, because the one users
 * complain about is the one that lets them book a room nobody fits in.
 */
export const STRICT_CAPACITY = {
    'app.events.strict_capacity_check': true,
};

/**
 * Let a meeting hold more than one room.
 *
 * Two keys mean the same thing (`multipleSpacesEnabled` in
 * `events/utilities.ts` accepts either), and the mode changes the room list: a
 * click on a room adds it to the selection or takes it off, where the default
 * replaces the room that was selected. No active spec uses this mode.
 */
export const MULTI_SPACE = {
    'app.events.multiple_spaces': true,
};

/**
 * Offer an All Day control in the meeting flow.
 *
 * `app.events.allow_all_day`, read in `meeting-flow-details.component.ts` —
 * NOT `allow_multiday`. A first attempt at the all-day test set the multiday
 * key, found no checkbox, and nearly concluded the app has no all-day meetings
 * at all.
 */
export const ALLOW_ALL_DAY = {
    'app.events.allow_all_day': true,
};

/**
 * Let a meeting span more than one day. The details step then shows an end
 * date and an end time in place of the length.
 */
export const ALLOW_MULTIDAY = {
    'app.events.allow_multiday': true,
};

/**
 * Book a meeting on somebody else's behalf.
 *
 * `app.events.can_book_for_others` renders a `host-select-field` on the details
 * step (`meeting-flow-details.component.ts`). It is a select of the signed-in
 * user and the calendars that the user can edit.
 *
 * The flow does not read `events.can_book_for_anyone`, which gave the flow it
 * replaced a user search field. See `room-delegate.spec.ts`.
 */
export const BOOK_FOR_OTHERS = {
    'app.events.can_book_for_others': true,
};

/**
 * Settings shared by every room spec.
 *
 * Just the booking mode. Bookings therefore land as `tentative`, which is the
 * app's default behaviour anyway. See `NO_APPROVAL` for the approval setting.
 */
export const ROOM_BASE_SETTINGS = {
    ...ROOM_BOOKINGS_MODE,
};
