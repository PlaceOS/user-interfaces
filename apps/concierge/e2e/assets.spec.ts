import { expect, test } from './fixtures';
import { gotoMockRoute, waitForAppShell, waitForHost } from './helpers';

// US-050 / US-052 / US-053: Asset listings, item browsing and purchase orders.
test.describe('Asset Bookings Page', () => {
    test('shows asset request, item and purchase order listings', async ({
        page,
    }) => {
        const routes = [
            {
                route: '/#/book/assets/list/requests',
                selector: 'app-asset-request-list',
            },
            {
                route: '/#/book/assets/list/items',
                selector: 'app-asset-item-list',
            },
            {
                route: '/#/book/assets/list/purchase-orders',
                selector: 'app-asset-purchase-order-list',
            },
        ];

        for (const { route, selector } of routes) {
            await gotoMockRoute(page, route);
            await waitForAppShell(page);
            await waitForHost(page, '[asset-manager]');
            await waitForHost(page, 'asset-listing');
            await waitForHost(page, 'asset-manager-topbar');
            await waitForHost(page, selector);
        }
    });

    test('shows grid/list controls for asset items', async ({ page }) => {
        await gotoMockRoute(page, '/#/book/assets/list/items');
        await waitForHost(page, 'app-asset-item-list');

        await expect(
            page.locator('asset-manager-topbar button icon', {
                hasText: 'view_module',
            }),
        ).toBeVisible();
        await expect(
            page.locator('asset-manager-topbar button icon', {
                hasText: 'view_list',
            }),
        ).toBeVisible();
    });
});

// US-051 / US-053: Asset inventory, bulk import and purchase order management.
test.describe('Asset Management Routes', () => {
    test('shows asset management forms', async ({ page }) => {
        const routes = [
            {
                route: '/#/book/assets/manage/group',
                selector: 'asset-group-form',
            },
            {
                route: '/#/book/assets/manage/asset',
                selector: 'asset-form',
            },
            {
                route: '/#/book/assets/manage/asset-bulk',
                selector: 'asset-bulk-form',
            },
            {
                route: '/#/book/assets/manage/category',
                selector: 'asset-category-form',
            },
            {
                route: '/#/book/assets/manage/purchase-order',
                selector: 'asset-purchase-order-form',
            },
        ];

        for (const { route, selector } of routes) {
            await gotoMockRoute(page, route);
            await waitForAppShell(page);
            await waitForHost(page, '[asset-manager]');
            await waitForHost(page, selector);
        }
    });
});
