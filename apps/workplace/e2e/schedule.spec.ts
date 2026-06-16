import { expect, test } from './fixtures';

/**
 * E2E tests for the Schedule / Your Bookings page.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-030..US-032).
 */

const SCHEDULE_URL = '/#/your-bookings?mock=true';
const LOAD_TIMEOUT = 30000;

test.describe('Schedule / Your Bookings', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(SCHEDULE_URL);
        await expect(page.locator('app-schedule')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-030: renders the schedule page', async ({ page }) => {
        await expect(page.locator('topbar')).toBeVisible();
    });

    test('US-031: shows the schedule topbar for switching views/dates', async ({
        page,
    }) => {
        await expect(page.locator('schedule-topbar')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-032: shows booking filters', async ({ page }) => {
        await expect(page.locator('schedule-filters')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
