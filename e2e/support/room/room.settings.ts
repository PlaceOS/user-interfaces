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

/** The mode every room spec runs in. See the note at the top of this file. */
export const ROOM_BOOKINGS_MODE = {
    'app.events.use_bookings': true,
};

/**
 * Skip the approval step, so a new booking is stored `approved` rather than
 * `tentative` (`event-form.service.ts`, `_performBooking`).
 *
 * ## NOT in the base settings, on purpose — it makes booking a room 500
 *
 * With this on, the app sends `approved: true`, and staff-api answers **HTTP 500
 * with `syntax error at or near ")" (PQ::PQError)`** for any non-admin. Found
 * while writing the first room spec; minimised to a seven-field request:
 *
 *   staff, no `approved` field .................. 201
 *   staff, `approved: true` ..................... 500   <- SQL syntax error
 *   staff, `approved: false` .................... 201
 *   staff, `approved: true` WITH `zones` ........ 403   <- correctly refused
 *   admin, `approved: true` ..................... 201
 *   staff, `approved: true`, a DESK booking ..... 500   <- not room-specific
 *
 * So the backend's approval permission check blows up instead of refusing when
 * it has no zones to check against, and the meeting form hands it exactly that
 * because it sends `zones: []` for a room booking. Two bugs meeting in the
 * middle; both are written up as ROOM-B1.
 *
 * Left defined rather than deleted so the constant has somewhere to live once
 * the backend is fixed and approval coverage is written.
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
 *   unset ......... a WARNING is rendered next to the room list, and the booking
 *                   goes through regardless.
 *   true .......... `viewConfirm` stops before opening the confirm screen and
 *                   shows a toast. Nothing is sent.
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
 * `events/utilities.ts` accepts either), and the mode changes the picker: the
 * confirm button becomes `space-return` instead of `toggle-space`, which is the
 * trap recorded at the top of `meeting-form.page.ts`.
 */
export const MULTI_SPACE = {
    'app.events.multiple_spaces': true,
};

/**
 * Offer an All Day control on the meeting form.
 *
 * `app.events.allow_all_day`, read in `meeting-form-details.component.ts` —
 * NOT `allow_multiday`, which only widens the date range the room picker
 * offers. A first attempt at the all-day test set the multiday key, found no
 * checkbox, and nearly concluded the app has no all-day meetings at all.
 */
export const ALLOW_ALL_DAY = {
    'app.events.allow_all_day': true,
};

/** Let a meeting span more than one day (widens the picker's dates). */
export const ALLOW_MULTIDAY = {
    'app.events.allow_multiday': true,
};

/**
 * Book a meeting on somebody else's behalf.
 *
 * Two different controls, depending on which key is set
 * (`meeting-form-details.component.ts`): `can_book_for_anyone` renders a user
 * SEARCH field, `can_book_for_others` renders a `host-select-field` of people
 * the user may book for. The search field is the one that behaves like the desk
 * form's, so that is the one these specs use.
 */
export const BOOK_FOR_ANYONE = {
    'app.events.can_book_for_anyone': true,
    // The local user list, not the calendar directory — see the desk settings
    // for why: /api/staff/v1/people 500s on this stack.
    'app.basic_user_search': true,
};

/**
 * Settings shared by every room spec.
 *
 * Just the booking mode. Bookings therefore land as `tentative`, which is the
 * app's default behaviour anyway — and `NO_APPROVAL` cannot be added here until
 * ROOM-B1 is fixed.
 */
export const ROOM_BASE_SETTINGS = {
    ...ROOM_BOOKINGS_MODE,
};
