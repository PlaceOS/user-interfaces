/**
 * Per-test app settings for the visitor specs.
 *
 * The app reads a flat, highest-priority override map out of
 * `localStorage['PLACEOS.setting_overrides']`
 * (libs/common/src/lib/settings.service.ts, `loadDebugOverrides`). Because it
 * lives in the browser context rather than on a zone, two specs can demand
 * opposite settings and still run in parallel — which matters here, since
 * single- and multi-visitor mode are the same setting with two values, and
 * seeding it on the org zone would force the whole suite to serialise.
 *
 * The trade-off, stated plainly because a future reader deserves it: this is a
 * debug hook, so these specs run with an override layer a real user does not
 * have. That is acceptable for exercising form behaviour and would not be for
 * asserting how settings themselves are resolved from zone metadata.
 */
import { Page } from '@playwright/test';

/**
 * Force app settings for ONE page, before its first navigation.
 *
 * Two rules the implementation imposes:
 *  - Keys MUST start with `app.` — anything else is dropped on load.
 *  - Matching is EXACT. `app.visitors` will not satisfy a read of
 *    `app.visitors.allow_all_day`; spell out the full key.
 *
 * Call BEFORE `page.goto`. `addInitScript` runs before the bundle evaluates, so
 * the override is already in localStorage when the service reads it once at
 * module scope.
 */
export async function useSettings(
    page: Page,
    overrides: Record<string, unknown>,
): Promise<void> {
    const bad = Object.keys(overrides).filter((k) => !k.startsWith('app.'));
    if (bad.length) {
        throw new Error(
            `setting override keys must start with "app." — the app drops the rest ` +
                `on load, which would silently leave the default in place and make the ` +
                `spec assert against the wrong mode. Got: ${bad.join(', ')}`,
        );
    }
    await page.addInitScript((value) => {
        localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(value));
    }, overrides);
}

/**
 * Settings every visitor spec needs.
 *
 * `basic_user_search` points the host field at rest-api's `/users`. Its default
 * (`/people`) and the dropdown host field (`/calendars`) are both calendar
 * backed and return 500 on a stack without real Microsoft/Google credentials,
 * so without this the host field silently finds nobody.
 */
export const VISITOR_BASE_SETTINGS = {
    'app.basic_user_search': true,
};

/** Single-visitor mode: name/email/company fields. NOT the app default. */
export const SINGLE_VISITOR_MODE = {
    ...VISITOR_BASE_SETTINGS,
    'app.bookings.multiple_visitors': false,
};

/** Multi-visitor mode: the chip list. This IS the app default. */
export const GROUP_VISITOR_MODE = {
    ...VISITOR_BASE_SETTINGS,
    'app.bookings.multiple_visitors': true,
};

/**
 * Let the invite be booked on behalf of any user the search can find.
 *
 * BOTH keys are required, and that is not obvious. `can_book_for_anyone` is
 * what renders the searchable host field, but `sendInvite` decides whether to
 * KEEP the chosen host by checking `can_book_for_others`
 * (invite-visitor-form.component.ts, "fall back to the signed-in user for a new
 * booking with no host"). Enable only `can_book_for_anyone` and you get a host
 * picker that works right up until you press send, at which point the choice is
 * silently replaced by whoever is signed in — no error, no hint.
 *
 * Worth raising with the dev team: a deployment that sets one flag and not the
 * other gets exactly that silent failure.
 */
export const BOOK_FOR_ANYONE = {
    'app.visitors.can_book_for_anyone': true,
    'app.visitors.can_book_for_others': true,
};

/** Show the All Day checkbox on the invite form. */
export const ALLOW_ALL_DAY = {
    'app.visitors.allow_all_day': true,
};

/** Show the pass-number and international-visitor controls. */
export const ALLOW_EXTRAS = {
    'app.visitors.allow_pass_number': true,
    'app.visitors.allow_international': true,
};

/** Make the reason mandatory (PPT-2782). */
export const REASON_REQUIRED = {
    'app.visitors.reason_required': true,
};

/**
 * Cap how long a visit may be, in minutes, and confine it to office hours.
 *
 * Both are unset by default (`null`), which is why nothing else in this suite
 * sees them. `bookable_hours` is `{ start, end }` in 24-hour decimal hours.
 */
export const LIMITED_HOURS = {
    'app.visitors.max_duration': 60,
    'app.visitors.bookable_hours': { start: 9, end: 17 },
};

/** Allow an existing invite to be edited — off by default, so the Edit button hides. */
export const ALLOW_EDITING = {
    'app.visitors.allow_editing': true,
};
