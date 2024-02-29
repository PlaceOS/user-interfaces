import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/#/?mock=true');
    await page.locator('app-landing').waitFor();
});

test.describe('Landing Page', () => {
    test('has layout', async ({ page }) => {
        expect(await page.locator('app-landing')).toBeVisible();
        expect(await page.locator('topbar')).toBeVisible();
        expect(await page.locator('landing-colleagues')).toBeVisible();
        expect(await page.locator('landing-upcoming')).toBeVisible();
        expect(await page.locator('landing-availability')).toBeVisible();
    });
});
