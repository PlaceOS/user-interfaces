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
 * Ordinary parking-booking scenarios do not exercise request restrictions.
 * PARK-13 now validates the required selector in the parking REQUEST flow
 * (parking-restrictions.spec.ts), per developer clarification on 2026-09-22.
 * This request-flow test does not establish the status of the previous
 * ordinary-parking observation (PARK-B1).
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
