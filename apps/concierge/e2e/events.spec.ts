import { expect, test } from './fixtures';
import { gotoMockRoute, waitForHost } from './helpers';

// US-080: Browsing entertainment events.
test.describe('Events Page', () => {
    test('shows the events listing', async ({ page }) => {
        await page.goto('/#/entertainment/events?mock=true');
        await page.locator('[app-events]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('event-listing')).toBeVisible();
    });

    // US-081 / US-082: Event create/edit and detail routes.
    test('shows event manage route', async ({ page }) => {
        await gotoMockRoute(page, '/#/entertainment/events/manage');
        await waitForHost(page, 'app-event-manage');
    });
});
