import { expect, test } from './fixtures';
import { gotoMockRoute, waitForHost } from './helpers';

// US-020 / US-023: Viewing desk bookings and managing the desk inventory.
test.describe('Desk Bookings Page', () => {
    test('shows desk bookings view', async ({ page }) => {
        await page.goto('/#/book/desks/events?mock=true');
        await page.locator('[app-desks]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('desk-bookings')).toBeVisible();
    });

    test('shows desk management view', async ({ page }) => {
        await page.goto('/#/book/desks/manage?mock=true');
        await page.locator('[app-desks]').waitFor({ timeout: 30000 });

        await expect(page.locator('desks-manage')).toBeVisible();
    });

    // US-024 / US-025: Desk import/export controls and map route.
    test('shows desk map and management import/export controls', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/book/desks/map');
        await waitForHost(page, '[app-desks]');
        await waitForHost(page, 'desk-map-view');

        await gotoMockRoute(page, '/#/book/desks/manage');
        await waitForHost(page, 'desks-manage');
        await expect(
            page.getByRole('button', { name: /cloud_upload/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('button', { name: /^download$/i }),
        ).toBeVisible();
        await expect(
            page.getByRole('button', { name: /^lock_open$/i }),
        ).toBeVisible();
    });
});
