import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/#/?mock=true');
    await page.locator('[app-new-dayview]').waitFor();
});

test.describe('Day View Page', () => {
    test('has layout', async ({ page }) => {
        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('app-sidebar')).toBeVisible();
        await expect(page.locator('room-bookings > div')).toBeVisible();
    });
});
