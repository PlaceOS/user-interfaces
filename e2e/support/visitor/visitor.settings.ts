/**
 * Per-test app settings for the visitor specs.
 *
 * The app reads a flat, highest-priority override map out of
 * `localStorage['PLACEOS.setting_overrides']`
 * (libs/common/src/lib/settings.service.ts, `loadDebugOverrides`). Because it
 * lives in the browser context rather than on a zone, two specs can demand
 * opposite settings and still run in parallel — which matters here, since one
 * spec limits the bookable hours or shows the All Day checkbox and the next
 * must not, and seeding either on the org zone would force the whole suite to
 * serialise.
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

/**
 * `bookings.multiple_visitors` off, for the specs that invite one visitor.
 *
 * On the `visitor-flow-new` page this does NOT choose the mode. The page has a
 * Single/Multiple toggle and always opens on Single; the flows click the
 * toggle (`useSingleMode` / `useGroupMode`). The setting only changes the
 * wording of the success view. The old form (`invite-visitor-form`, no longer
 * routed) chose its mode from it.
 */
export const SINGLE_VISITOR_MODE = {
    ...VISITOR_BASE_SETTINGS,
    'app.bookings.multiple_visitors': false,
};

/** `bookings.multiple_visitors` on (the app default), for the group specs. */
export const GROUP_VISITOR_MODE = {
    ...VISITOR_BASE_SETTINGS,
    'app.bookings.multiple_visitors': true,
};

/**
 * Let the invite be booked on behalf of any user the search can find.
 *
 * `can_book_for_anyone` is what renders the searchable host field. On the
 * `visitor-flow-new` page it is enough on its own: measured with only that key
 * set, the invite is stored with the chosen host as `user_email`.
 *
 * The old form (`invite-visitor-form`) needed BOTH keys: its `sendInvite` kept
 * the chosen host only if `can_book_for_others` was also set, and otherwise
 * replaced the choice with whoever was signed in — no error, no hint. Both
 * stay in this preset: with both set, the page still shows the search field.
 */
export const BOOK_FOR_ANYONE = {
    'app.visitors.can_book_for_anyone': true,
    'app.visitors.can_book_for_others': true,
};

/** Show the All Day checkbox on the invite form. */
export const ALLOW_ALL_DAY = {
    'app.visitors.allow_all_day': true,
};

/**
 * Show the pass-number and international-visitor controls.
 *
 * The `visitor-flow-new` page reads only `allow_pass_number`. It has no
 * international control, with or without the setting.
 */
export const ALLOW_EXTRAS = {
    'app.visitors.allow_pass_number': true,
    'app.visitors.allow_international': true,
};

/**
 * Make the reason mandatory (PPT-2782).
 *
 * The `visitor-flow-new` page does not read this: the reason starts as
 * "Visit", and an emptied reason is sent as "Visit".
 */
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
