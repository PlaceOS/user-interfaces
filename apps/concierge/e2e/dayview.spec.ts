import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/#/?mock=true');
    await page.locator('[app-new-dayview]').waitFor();
});

test.describe('Day View Page', () => {
    test('has layout', async ({ page }) => {
        expect(await page.locator('app-topbar')).toBeVisible();
        expect(await page.locator('app-sidebar')).toBeVisible();
        expect(await page.locator('room-bookings > div')).toBeVisible();
    });
});
