import { expect, test } from '@playwright/test';

test.describe('Redirect', () => {
    // This app requires PlaceOS API setup and performs immediate redirects,
    // making it unsuitable for standard browser e2e tests. Skipped by default.
    test.skip('should load the application shell', async ({ page }) => {
        await page.goto('/?mock=true', { waitUntil: 'domcontentloaded' });
        await expect(page.locator('app-root')).toBeAttached({ timeout: 10000 });
    });
});
