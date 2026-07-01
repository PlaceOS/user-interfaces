import { expect, test } from './fixtures';

/**
 * E2E tests for the Workplace home/landing page.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-001, US-010..US-015,
 * US-018, US-100).
 *
 * The shared fixture (./fixtures) puts the app in mock mode so it serves
 * deterministic mock data instead of talking to a live PlaceOS backend.
 */

const LANDING_URL = '/#/landing?mock=true';
const ROOT_URL = '/#/?mock=true';
const LOAD_TIMEOUT = 30000;

test.describe('Home / Landing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(LANDING_URL);
        await page
            .locator('landing-new')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });
    });

    test('US-001: renders the home page with navigation chrome', async ({
        page,
    }) => {
        await expect(page.locator('topbar')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('top-menu')).toBeVisible();
        await expect(page.locator('footer-menu')).toBeAttached();
    });

    test('US-001: app root redirects to the home page', async ({ page }) => {
        await page.goto(ROOT_URL);
        await page
            .locator('landing-new')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });
        await expect(page).toHaveURL(/\/landing/, { timeout: LOAD_TIMEOUT });
    });

    test('US-010: shows the upcoming booking section', async ({ page }) => {
        await expect(page.locator('landing-upcoming-booking')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-011: shows the available-now section', async ({ page }) => {
        await expect(page.locator('landing-available-now')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-012: shows quick actions to start a booking', async ({ page }) => {
        await expect(page.locator('landing-quick-actions')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-013: shows the colleagues section', async ({ page }) => {
        await expect(page.locator('landing-colleagues-new')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-014: shows the favourites section', async ({ page }) => {
        await expect(page.locator('landing-favourites-new')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-015: shows the desk week section', async ({ page }) => {
        await expect(page.locator('landing-desk-week')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-018: landing modules stay present when data sections are empty or loading', async ({
        page,
    }) => {
        await expect(page.locator('landing-upcoming-booking')).toBeVisible();
        await expect(page.locator('landing-available-now')).toBeVisible();
        await expect(page.locator('landing-quick-actions')).toBeVisible();
        await expect(page.locator('landing-desk-week')).toBeVisible();
        await expect(page.locator('landing-favourites-new')).toBeVisible();
        await expect(page.locator('landing-colleagues-new')).toBeVisible();
    });

    test('US-100: quick actions preserve booking intent when routing to flows', async ({
        page,
    }) => {
        await page
            .locator('landing-quick-actions a[href*="/book/meeting"]')
            .click();

        await expect(page).toHaveURL(/\/book\/meeting\/form/, {
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('meeting-flow-new')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
