/**
 * Per-test app settings for the parking specs.
 *
 * The fourth copy of this helper (visitor, room, bookings, desk, parking) and
 * deliberately so: one shared settings file could break every area at once.
 *
 * Parking reads BOTH `app.parking.*` and `app.bookings.*` depending on the
 * setting, which is worth knowing before hunting a setting that "does nothing".
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
 * Settings every parking spec runs with.
 *
 * ## PARK-B1: without this, a parking space cannot be booked AT ALL here
 *
 * On this stack, with no overrides at all, pressing "Confirm Reservation"
 * produces:
 *
 *   Some fields are invalid. [space_restrictions]
 *
 * and the sheet never opens. The field it names is **not on the booking form** —
 * `parking-form-details.component.ts` never renders a `space_restrictions`
 * control (measured: zero mentions). The validator lives in the SHARED booking
 * form (`booking.utilities.ts`) and fires for any `booking_type === 'parking'`
 * when `parking.require_space_restriction` is set, while the setting's own
 * schema describes it as belonging to the **parking REQUEST flow**
 * ("Whether users must select a parking space restriction in the parking request
 * flow", `settings.schema.json`), which does render a control for it.
 *
 * So a deployment that switches it on for requests silently makes ordinary
 * parking bookings impossible, with an error naming a field nobody can fill in.
 * That is PARK-B1, and `parking-restrictions.spec.ts` carries it as a `fixme`.
 *
 * Turning it off here is what lets every other parking scenario be covered. It
 * also means these specs say nothing about the restriction feature itself.
 */
export const PARKING_BASE_SETTINGS = {
    'app.parking.require_space_restriction': false,
};

/**
 * Cap the booking length and confine it to office hours.
 *
 * Unset by default, and an out-of-range option is ABSENT rather than refused —
 * so the times spec asserts on what the form offers.
 */
export const LIMITED_HOURS = {
    'app.bookings.max_duration': 60,
    'app.bookings.bookable_hours': { start: 9, end: 17 },
};

/**
 * Restrict parking to the user's home location.
 *
 * `ParkingService` reads this and refuses spaces away from the user's home
 * building (`restrict_home_location` / `deny_parking_access`).
 */
export const RESTRICT_TO_HOME = {
    'app.parking.restrict_home_location': true,
};
