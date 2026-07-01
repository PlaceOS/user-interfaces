import { expect, test } from './fixtures';

/**
 * E2E tests for the Staff Directory.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-050..US-052).
 */

const DIRECTORY_URL = '/#/directory?mock=true';
const LOAD_TIMEOUT = 30000;

test.describe('Directory', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(DIRECTORY_URL);
        await expect(page.locator('[a-directory-user-list]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('US-050: searching by name returns matching staff', async ({
        page,
    }) => {
        // Mock staff includes "Sarah Chen"; matching is a case-insensitive
        // substring over name/email and requires the minimum search length.
        const search = page.locator(
            'input[placeholder="Search for a person..."]',
        );
        await search.fill('sar');

        const results = page.locator('[a-directory-user-list] div[user]');
        await expect(results.first()).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(results.first().locator('.name')).toContainText(/sar/i);
    });

    test('US-050: search waits for the configured minimum number of characters', async ({
        page,
    }) => {
        const search = page.locator(
            'input[placeholder="Search for a person..."]',
        );
        await search.fill('sa');
        await expect(page.locator('[a-directory-user-list] div[user]')).toHaveCount(
            0,
        );

        await search.fill('sar');
        await expect(
            page.locator('[a-directory-user-list] div[user]').first(),
        ).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('US-051: locate action opens the map focused on the colleague', async ({
        page,
    }) => {
        const search = page.locator(
            'input[placeholder="Search for a person..."]',
        );
        await search.fill('sar');

        const locate = page
            .locator('[a-directory-user-list] div[user] a:has-text("Locate")')
            .first();
        await expect(locate).toBeVisible({ timeout: LOAD_TIMEOUT });
        await locate.click();

        await expect(page).toHaveURL(/\/explore\?.*user=/, {
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('app-explore')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
