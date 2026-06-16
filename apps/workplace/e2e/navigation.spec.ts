import { expect, test } from './fixtures';

/**
 * E2E tests for the application shell navigation.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-002, US-003).
 */

const LANDING_URL = '/#/landing?mock=true';
const LOAD_TIMEOUT = 30000;

test.describe('Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(LANDING_URL);
        await expect(page.locator('topbar')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-002: top menu lists the enabled feature areas', async ({
        page,
    }) => {
        const menu = page.locator('top-menu');
        await expect(menu).toBeVisible();
        // At least one navigation link is rendered for an enabled feature
        const links = menu.locator('a[href]');
        expect(await links.count()).toBeGreaterThan(0);
    });

    test('US-002: selecting a menu item routes to that feature', async ({
        page,
    }) => {
        // The global loading overlay intercepts pointer events while the app
        // initialises, so wait for it to clear before interacting.
        await page
            .locator('global-loading [loader]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT })
            .catch(() => undefined);

        // Explore is part of the default feature set, so its nav link is present.
        const explore_link = page
            .locator('top-menu a[href*="explore"]')
            .first();
        await expect(explore_link).toBeVisible({ timeout: LOAD_TIMEOUT });
        await explore_link.click();

        await expect(page).toHaveURL(/\/explore/, { timeout: LOAD_TIMEOUT });
        await expect(page.locator('app-explore')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-002: the active feature is indicated in the menu', async ({
        page,
    }) => {
        // routerLinkActive applies an `active` class to the current route's link.
        await expect(
            page.locator('top-menu a.active').first(),
        ).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('US-002: footer menu is present for small-screen navigation', async ({
        page,
    }) => {
        await expect(page.locator('footer-menu')).toBeAttached({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-003: global search is available in the topbar', async ({
        page,
    }) => {
        await expect(page.locator('global-search')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
