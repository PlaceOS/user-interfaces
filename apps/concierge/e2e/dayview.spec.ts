import { expect, test } from '@playwright/test';

test.describe('Day View Page', () => {
    test('has layout', async ({ page }) => {
        await page.goto('/#/?mock=true');
        await page.locator('[app-new-dayview]').waitFor({ timeout: 30000 });
        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('app-sidebar')).toBeVisible();
        await expect(page.locator('room-bookings > div')).toBeVisible();
    });
});
