import { expect, test } from './fixtures';

/**
 * E2E tests for the Explore / Map page.
 * Based on user stories in apps/workplace/USER_STORIES.md (US-040..US-045).
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

    test('US-041: upcoming booking pin action focuses the map when available', async ({
        page,
    }) => {
        await page.goto(EXPLORE_URL);
        await expect(page.locator('app-explore')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        const booking_pill = page.locator('[name="upcoming-booking-map-pill"]');
        if ((await booking_pill.count()) > 0) {
            await booking_pill.locator('button').click();
            await expect(page.getByRole('button', { name: 'Clear Pin' })).toBeVisible(
                { timeout: LOAD_TIMEOUT },
            );
        } else {
            await expect(page.locator('explore-map-view')).toBeVisible();
        }
    });

    test('US-043/044: map can open with a located resource query', async ({
        page,
    }) => {
        await page.goto('/#/explore?mock=true&locate=0.5,0.5&name=Focus');

        await expect(page.locator('app-explore')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.getByRole('button', { name: 'Clear Pin' })).toBeVisible(
            { timeout: LOAD_TIMEOUT },
        );
    });

    test('US-045: map controls and legend render availability context', async ({
        page,
    }) => {
        await page.goto(EXPLORE_URL);

        await expect(page.locator('explore-map-controls')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('explore-map-view [legend]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
