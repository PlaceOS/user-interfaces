/**
 * Per-test app settings for the YOUR BOOKINGS specs.
 *
 * Deliberately a copy of the same twenty-line helper the visitor and room areas
 * each keep, rather than an import from either: the three areas are kept apart
 * on purpose, and a shared settings file is exactly the sort of thing that
 * breaks all three at once. The duplication is the price of that, and it is
 * cheap.
 *
 * Two rules the app imposes on overrides:
 *  - keys MUST start with `app.`, or they are dropped on load and the default
 *    quietly stays in place;
 *  - matching is EXACT — `app.visitors` does not satisfy a read of
 *    `app.visitors.allow_editing`.
 *
 * Applied per BROWSER CONTEXT through the app's debug override rather than
 * seeded onto a zone, so specs needing different settings still run in parallel
 * instead of serialising the suite on shared state.
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
 * Let a visitor invite be edited.
 *
 * Off by default, and its absence is silent: `can_edit` is false for a visitor
 * booking, so the schedule's overflow menu simply has no Edit item. A spec that
 * forgot this reads as "the Edit action is missing", which is true and sounds
 * like a bug. Measured here first, which is why the page object's error message
 * now lists what the menu did contain.
 */
export const ALLOW_VISITOR_EDITING = {
    'app.visitors.allow_editing': true,
};
