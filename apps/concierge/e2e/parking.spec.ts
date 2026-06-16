import { expect, test } from './fixtures';

// US-030: Viewing parking bookings.
test.describe('Parking Bookings Page', () => {
    test('shows parking bookings list', async ({ page }) => {
        await page.goto('/#/book/parking/events/list?mock=true');
        await page.locator('app-parking').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('parking-topbar')).toBeVisible();
        await expect(page.locator('parking-bookings-list')).toBeVisible();
    });
});
