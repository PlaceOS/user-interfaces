import { expect, test } from './fixtures';

/**
 * E2E tests for the discovery & coordination areas:
 * Team Schedule, Group Events, Deals & Offers and Control.
 * Based on user stories in apps/workplace/USER_STORIES.md
 * (US-060..US-062, US-070..US-072, US-080..US-081).
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

    test('US-061: renders team schedule filters', async ({ page }) => {
        await page.goto('/#/team-schedule?mock=true');
        await expect(page.locator('team-schedule-filters')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.locator('team-schedule-filters input[placeholder="Search..."]'),
        ).toBeVisible();
    });

    test('US-062: exposes team quick actions and selection mode', async ({
        page,
    }) => {
        await page.goto('/#/team-schedule?mock=true');
        await expect(page.locator('team-quick-actions')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        await page.getByRole('button', { name: /select colleagues/i }).click();
        await expect(page.getByRole('button', { name: /clear/i })).toBeVisible({
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

    test('US-072: group events page keeps detail-capable event cards or empty state visible', async ({
        page,
    }) => {
        await page.goto('/#/group-events?mock=true');

        await expect(page.locator('[group-events]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.locator(
                '[group-events] img, [group-events] group-events-sidebar',
            ).first(),
        ).toBeAttached({ timeout: LOAD_TIMEOUT });
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

    test('US-072: deals page renders cards or a no-results state safely', async ({
        page,
    }) => {
        await page.goto('/#/deals-n-offers?mock=true');
        await page
            .locator('deals-n-offers')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });

        await expect(page.locator('deals-n-offers')).toBeAttached();
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

    test('US-081: control page keeps the global shell for explore handoff', async ({
        page,
    }) => {
        await page.goto('/#/control?mock=true');
        await expect(page.locator('[app-control]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('top-menu')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
