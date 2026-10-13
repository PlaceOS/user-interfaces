import { test as base, expect } from '@playwright/test';

/**
 * Shared test fixture for the concierge e2e suite.
 *
 * The app only registers its mock API handlers when `localStorage['mock']` is
 * `'true'` at boot (see `PlaceOS_Service.init` -> `_mocks()`). The `?mock=true`
 * URL param sets that key, but only later during `setupPlace`, so on a fresh
 * browser context (as Playwright uses for every test) the handlers are not
 * registered on the first load and organisation data fails to load.
 *
 * Seeding the key via an init script — which runs before the app bootstraps —
 * guarantees the mocks are registered on the very first navigation.
 */
export const test = base.extend({
    page: async ({ page }, use) => {
        await page.addInitScript(() => {
            try {
                window.localStorage.setItem('mock', 'true');
            } catch {
                /* localStorage may be unavailable before navigation */
            }
        });
        await use(page);
    },
});

export { expect };
