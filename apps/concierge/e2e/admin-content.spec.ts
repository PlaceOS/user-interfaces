import { expect, test } from './fixtures';
import { gotoMockRoute, waitForAppShell, waitForHost } from './helpers';

// US-090 / US-091 / US-092: Staff directory and emergency contacts.
test.describe('Staff and Emergency Contacts', () => {
    test('shows staff directory and emergency contacts routes', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/users/staff');
        await waitForAppShell(page);
        await waitForHost(page, '[app-new-staff]');
        await waitForHost(page, 'staff-topbar');
        await waitForHost(page, 'staff-listings');

        await gotoMockRoute(page, '/#/users/staff/emergency-contacts');
        await waitForAppShell(page);
        await waitForHost(page, '[app-emergency-contacts]');
    });
});

// US-120 / US-121: Points overview and assets.
test.describe('Points Management', () => {
    test('shows points overview and assets tabs', async ({ page }) => {
        await gotoMockRoute(page, '/#/points-management/overview');
        await waitForAppShell(page);
        await waitForHost(page, 'placeos-new-points');
        await waitForHost(page, 'points-overview');

        await gotoMockRoute(page, '/#/points-management/assets');
        await waitForHost(page, 'points-assets');
        await expect(
            page.getByRole('button', { name: /Add|New/i }).first(),
        ).toBeVisible();
    });
});

// US-130 / US-131: Survey list, builder and run outlet.
test.describe('Surveys', () => {
    test('shows survey list and builder routes', async ({ page }) => {
        await gotoMockRoute(page, '/#/surveys');
        await waitForAppShell(page);
        await waitForHost(page, 'app-survey');
        await waitForHost(page, 'building-list');

        await gotoMockRoute(page, '/#/surveys/builder');
        await waitForHost(page, 'survey-builder');
    });
});

// US-140 / US-142 / US-143: Building, zone, POI and settings management.
test.describe('Building Configuration', () => {
    test('shows zone manager and app settings actions', async ({ page }) => {
        await gotoMockRoute(page, '/#/zone-management');
        await waitForAppShell(page);
        await waitForHost(page, '[app-zone-manager]');

        await expect(page.getByRole('tab', { name: /Regions/i })).toBeVisible();
        await expect(
            page.getByRole('tab', { name: /Buildings/i }),
        ).toBeVisible();
        await expect(page.getByRole('tab', { name: /Levels/i })).toBeVisible();
        await page
            .locator('main header button', { hasText: 'more_vert' })
            .click();
        await expect(
            page.getByRole('menuitem', { name: /Concierge/i }),
        ).toBeVisible();
    });

    test('redirects legacy hierarchy routes to zone management', async ({
        page,
    }) => {
        for (const route of [
            '/#/level-management',
            '/#/building-management',
            '/#/region-management',
        ]) {
            await gotoMockRoute(page, route);
            await waitForHost(page, '[app-zone-manager]');
            expect(page.url()).toContain('/zone-management');
        }
    });

    test('shows points of interest manager', async ({ page }) => {
        await gotoMockRoute(page, '/#/points-of-interest');
        await waitForAppShell(page);
        await waitForHost(page, '[app-poi-manager]');
        await waitForHost(page, 'poi-list');
    });
});

// US-150 / US-151 / US-152 / US-153: Content and communications management.
test.describe('Communications and Content', () => {
    test('shows signage media, displays and zones tabs', async ({ page }) => {
        const routes = [
            { route: '/#/signage/media', selector: 'signage-media' },
            { route: '/#/signage/displays', selector: 'signage-displays' },
            { route: '/#/signage/zones', selector: 'signage-zones' },
        ];

        for (const { route, selector } of routes) {
            await gotoMockRoute(page, route);
            await waitForAppShell(page);
            await waitForHost(page, '[app-new-staff]');
            await waitForHost(page, selector);
        }
    });

    test('shows email template list and manage routes', async ({ page }) => {
        await gotoMockRoute(page, '/#/email-templates');
        await waitForAppShell(page);
        await waitForHost(page, '[app-email-templates]');
        await waitForHost(page, 'email-templates-list');

        await gotoMockRoute(page, '/#/email-templates/manage');
        await waitForHost(page, 'email-template-manage');
    });

    test('shows deals list and manage routes', async ({ page }) => {
        await gotoMockRoute(page, '/#/deals-n-offers');
        await waitForAppShell(page);
        await waitForHost(page, '[app-deals]');
        await waitForHost(page, 'deals-list');

        await gotoMockRoute(page, '/#/deals-n-offers/manage');
        await waitForHost(page, 'deals-manage');
    });

    test('shows short URL manager', async ({ page }) => {
        await gotoMockRoute(page, '/#/url-management');
        await waitForAppShell(page);
        await waitForHost(page, '[app-short-url-manager]');
        await waitForHost(page, 'short-url-list');
    });
});
