import { expect, test } from './fixtures';

/**
 * E2E tests for the Explore / Map page.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-040..US-042).
 */

const EXPLORE_URL = '/#/explore?mock=true';
const LOAD_TIMEOUT = 30000;

test.describe('Explore / Map', () => {
    test('US-040: renders the explore page with the map view', async ({
        page,
    }) => {
        await page.goto(EXPLORE_URL);
        await expect(page.locator('app-explore')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('explore-map-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('topbar')).toBeVisible();
    });

    test('US-042: can open the map focused on a specific user', async ({
        page,
    }) => {
        await page.goto('/#/explore?mock=true&user=user-1');
        await expect(page.locator('app-explore')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('explore-map-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
