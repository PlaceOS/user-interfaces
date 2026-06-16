import { expect, test } from './fixtures';

// US-080: Browsing entertainment events.
test.describe('Events Page', () => {
    test('shows the events listing', async ({ page }) => {
        await page.goto('/#/entertainment/events?mock=true');
        await page.locator('[app-events]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('event-listing')).toBeVisible();
    });
});
