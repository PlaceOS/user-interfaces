import { expect, test } from '@playwright/test';

test.describe('Outlook Addin', () => {
    // This app requires Office.js runtime (Office.onReady()) which is not available
    // in standard browser tests. This test is skipped by default.
    test.skip('should load the application shell', async ({ page }) => {
        await page.goto('/?mock=true', { waitUntil: 'domcontentloaded' });
        await expect(page.locator('app-root')).toBeAttached({ timeout: 10000 });
    });
});
