import { expect, test } from './fixtures';

/**
 * E2E tests for the discovery & coordination areas:
 * Team Schedule, Group Events, Deals & Offers and Control.
 * Based on user stories in apps/workplace/USER_STORIES.md
 * (US-060, US-070, US-071, US-080).
 */

const LOAD_TIMEOUT = 30000;

test.describe('Team Schedule', () => {
    test('US-060: renders the team schedule', async ({ page }) => {
        await page.goto('/#/team-schedule?mock=true');
        await page
            .locator('team-schedule')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });
        await expect(page.locator('topbar')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Group Events', () => {
    test('US-070: renders the group events page', async ({ page }) => {
        await page.goto('/#/group-events?mock=true');
        await expect(page.locator('[group-events]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('topbar')).toBeVisible();
    });
});

test.describe('Deals & Offers', () => {
    test('US-071: renders the deals & offers page', async ({ page }) => {
        await page.goto('/#/deals-n-offers?mock=true');
        await page
            .locator('deals-n-offers')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });
        await expect(page.locator('topbar')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Control', () => {
    test('US-080: renders the control page', async ({ page }) => {
        await page.goto('/#/control?mock=true');
        await expect(page.locator('[app-control]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('topbar')).toBeVisible();
    });
});
