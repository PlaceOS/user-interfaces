/**
 * Per-test app settings for the desk specs.
 *
 * The third copy of this twenty-line helper — `visitor/`, `room/`, `bookings/`
 * and now here. Deliberate: a shared settings file is the one thing that could
 * break all four areas at once, and the point of separate folders is that it
 * cannot.
 *
 * Desk settings are `app.bookings.*`, NOT `app.events.*`. The meeting form reads
 * the event keys and the desk form reads the booking keys, and setting the wrong
 * family changes nothing at all while looking right — that cost a run in the
 * room work (see `room.settings.ts`).
 */
import { Page } from '@playwright/test';

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
 * Cap the booking length and confine it to office hours.
 *
 * Both unset by default, so nothing else in the suite sees them, and both fail
 * quietly in the same way: an out-of-range option is simply ABSENT from the
 * picker rather than refused. That is why the times spec asserts on what is
 * offered.
 */
export const LIMITED_HOURS = {
    'app.bookings.max_duration': 60,
    'app.bookings.bookable_hours': { start: 9, end: 17 },
};

/** Allow all-day desk bookings — the form's All Day checkbox. */
export const ALLOW_ALL_DAY = {
    'app.bookings.allow_all_day': true,
};

/**
 * Book a desk on somebody else's behalf.
 *
 * ONE setting, unlike visitors. `can_book_for_anyone` is read only by the
 * visitor forms (`visitor-invite-form.component.ts`); the desk form reads
 * `can_book_for_others` alone (`desk-form-details.component.ts`) and renders its
 * user field from that. Setting the visitor key here as well would look thorough
 * and do nothing, so it is left out on purpose.
 */
export const BOOK_FOR_OTHERS = {
    'app.bookings.can_book_for_others': true,
    // WITHOUT THIS THE FIELD CANNOT FIND ANYBODY HERE.
    //
    // The host field has two search backends (`user-search-field.component.ts`):
    //
    //   basic_user_search ....... `GET /api/engine/v2/users`, the PlaceOS user
    //                             list. Local, and the seeded staff users are in
    //                             it.
    //   otherwise ............... `GET /api/staff/v1/people`, the calendar
    //                             DIRECTORY. Microsoft/Google backed, and a 500
    //                             on this stack — measured, with the panel then
    //                             showing "No users found."
    //
    // So the basic search is forced on. Say this out loud in review: these specs
    // cover booking for a colleague through the PlaceOS user list, and say
    // nothing about the directory-backed picker a tenant with real credentials
    // would use. Same boundary as the room specs' `use_bookings` mode.
    'app.basic_user_search': true,
};
