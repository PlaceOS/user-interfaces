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
 * Show the one-click quick-book tiles.
 *
 * `landing.component.ts` renders the panel only when `show_quick_book` is set,
 * and the setting has NO default — so on a stack with no configuration the
 * tiles simply are not there, and a spec looking for them reports a missing
 * selector rather than a missing setting. Measured: without this, the desk tile
 * never appears.
 */
export const SHOW_QUICK_BOOK = {
    'app.show_quick_book': true,
};
