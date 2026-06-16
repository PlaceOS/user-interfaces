import { expect, test } from './fixtures';

/**
 * E2E tests for the error / access state pages.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-090, US-091).
 */

const LOAD_TIMEOUT = 30000;

test.describe('Error & access states', () => {
    test('US-090: renders the unauthorised page', async ({ page }) => {
        await page.goto('/#/unauthorised?mock=true');
        await expect(page.locator('app-unauthorised')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-091: renders the misconfigured page', async ({ page }) => {
        await page.goto('/#/misconfigured?mock=true');
        await expect(page.locator('app-misconfigured')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
