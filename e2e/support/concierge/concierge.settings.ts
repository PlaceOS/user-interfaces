/**
 * Per-test app settings for the CONCIERGE specs.
 *
 * The sixth copy of this small helper — `visitor/`, `room/`, `bookings/`,
 * `desk/`, `parking/`, `home/` and now here. Deliberate, and for the same
 * reason as the others: a single shared settings file is the one thing that
 * could break every area at once, and separate folders are what stops that.
 *
 * Overrides are written to `localStorage['PLACEOS.setting_overrides']` on the
 * CONCIERGE origin, which `SettingsService` merges over the app defaults
 * (`libs/common/src/lib/settings.service.ts`, `DEBUG_OVERRIDES_KEY`). They are
 * per-browser-context, so one test configuring an access group cannot leak into
 * the next.
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
 * Turn the access guard ON by naming a group.
 *
 * This is the setting that makes `AuthorisedUserGuard` actually check anything.
 * Read `libs/components/src/lib/authorised-user.guard.ts:103-120`: when
 * `app.allow_access_groups` is EMPTY — the default, and the default on this
 * stack — the guard takes the `!groups.length` branch and sets
 * `can_activate = true` for everybody. Only once a group is named does it
 * compare against `user.groups`.
 *
 * Measured on this stack (2026-09-17): neither seeded identity is in any group
 * at all — `support@place.tech` (sys_admin) and `e2e-staff-0@place.tech` both
 * report `groups: []`. And the group branch has **no sys_admin bypass**, so with
 * this override in place the admin is refused too. That is why it is applied to
 * one context in one test rather than to the whole suite.
 */
export const REQUIRE_ACCESS_GROUP = {
    'app.allow_access_groups': ['concierge_admins'],
};
