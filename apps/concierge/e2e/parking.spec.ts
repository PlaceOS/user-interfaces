import { expect, test } from './fixtures';
import { gotoMockRoute, waitForHost } from './helpers';

// US-030: Viewing parking bookings.
test.describe('Parking Bookings Page', () => {
    test('shows parking bookings list', async ({ page }) => {
        await page.goto('/#/book/parking/events/list?mock=true');
        await page.locator('app-parking').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('parking-topbar')).toBeVisible();
        await expect(page.locator('parking-bookings-list')).toBeVisible();
    });

    // US-033 / US-035: Request routes fall back safely when requests are disabled.
    test('shows booking list for request routes when parking requests are disabled', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/book/parking/events/requests');
        await waitForHost(page, 'app-parking');
        await waitForHost(page, 'parking-bookings-list');

        await expect(page.locator('parking-requests-list')).toHaveCount(0);
    });

    // US-030 / US-035: Map view uses a single selected level.
    test('shows parking map view', async ({ page }) => {
        await gotoMockRoute(page, '/#/book/parking/events/map');
        await waitForHost(page, 'app-parking');
        await waitForHost(page, 'parking-map');

        expect(page.url()).toContain('/book/parking/events/map');
    });

    // US-032 / US-034: Parking management tabs and CSV controls.
    test('shows parking management views', async ({ page }) => {
        const routes = [
            {
                route: '/#/book/parking/manage/spaces',
                selector: 'parking-space-list',
            },
            {
                route: '/#/book/parking/manage/users',
                selector: 'parking-users-list',
            },
            {
                route: '/#/book/parking/manage/fleet',
                selector: 'parking-fleet-list',
            },
            { route: '/#/book/parking/manage/map', selector: 'parking-map' },
        ];

        for (const { route, selector } of routes) {
            await gotoMockRoute(page, route);
            await waitForHost(page, 'app-parking');
            await waitForHost(page, selector);
        }

        await gotoMockRoute(page, '/#/book/parking/manage/spaces');
        await waitForHost(page, 'parking-space-list');
        await expect(
            page.locator('parking-topbar button icon', { hasText: 'upload' }),
        ).toBeVisible();
        await expect(
            page.locator('parking-topbar button icon', { hasText: 'download' }),
        ).toBeVisible();
        await expect(
            page.locator('parking-topbar button icon', {
                hasText: 'lock_open',
            }),
        ).toBeVisible();
    });
});
