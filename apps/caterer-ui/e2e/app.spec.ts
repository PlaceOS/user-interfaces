import { expect, test } from '@playwright/test';

test.describe('Caterer UI', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible();
    });
});
