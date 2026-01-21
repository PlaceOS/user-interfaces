import { expect, test } from '@playwright/test';
import { LOAD_TIMEOUT, initializeAppWithMock } from './test-utils';

test.describe('Survey App', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display survey outlet component', async ({ page }) => {
        await initializeAppWithMock(page);
        // Use hash routing format: query params after the hash
        await page.goto('/#/survey/1?mock=true');
        await page.waitForTimeout(1000);
        await expect(page.locator('survey-outlet')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
