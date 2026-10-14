/**
 * Per-test app settings for the HOME PAGE specs.
 *
 * The fifth copy of this helper, and deliberately so — one shared settings file
 * could break every area at once, which is the whole point of keeping the
 * folders apart.
 *
 * Home-page settings are mostly ROOT-level keys (`app.show_quick_book`,
 * `app.hide_landing_spaces`) rather than the `app.bookings.*` / `app.events.*`
 * families the forms use. Worth knowing before hunting a setting that appears to
 * do nothing.
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
 * Show the "auto-assign desk" quick action.
 *
 * `landing-quick-actions.component.ts` shows it unless `show_quick_book` is
 * `false`, so on this stack it shows with no setting at all. The preset stays
 * so that the spec does not depend on that default.
 */
export const SHOW_QUICK_BOOK = {
    'app.show_quick_book': true,
};
