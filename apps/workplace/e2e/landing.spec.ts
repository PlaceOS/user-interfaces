import { expect, test } from '@playwright/test';

test.describe('Landing Page', () => {
    test('has layout', async ({ page }) => {
        await page.goto('/#/?mock=true');
        await page.locator('app-landing').waitFor({ timeout: 30000 });
        await expect(page.locator('app-landing')).toBeVisible();
        await expect(page.locator('topbar')).toBeVisible();
        await expect(page.locator('landing-colleagues')).toBeVisible();
        await expect(page.locator('landing-upcoming')).toBeVisible();
        await expect(page.locator('landing-availability')).toBeVisible();
    });
});
