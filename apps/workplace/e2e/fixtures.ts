import { test as base, expect } from '@playwright/test';

/**
 * Shared Playwright fixtures for the Workplace e2e suite.
 *
 * The app supports two related "mock" mechanisms (see
 * libs/common/src/lib/placeos.service.ts and libs/common/src/lib/placeos.ts):
 *
 *  - `?mock=true` in the URL only enables mock *mode* (requests are routed to
 *    the in-memory mock dispatcher), but does NOT register any mock endpoints.
 *    On its own every request returns "Mock endpoint not found" (404).
 *  - `localStorage.mock === 'true'` is what actually triggers registration of
 *    the mock endpoints (`mocksInit()`), so the app serves deterministic mock
 *    data for users, bookings, spaces, zones, etc.
 *
 * Setting localStorage via `addInitScript` (before any app script runs) is
 * therefore required for the app to be functional offline in tests. This
 * fixture applies it to every test/page automatically.
 */
export const test = base.extend({
    page: async ({ page }, use) => {
        await page.addInitScript(() =>
            window.localStorage.setItem('mock', 'true'),
        );
        await use(page);
    },
});

export { expect };
