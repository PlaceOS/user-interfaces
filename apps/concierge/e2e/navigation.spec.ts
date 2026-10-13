import { expect, test } from './fixtures';
import { gotoMockRoute, waitForHost } from './helpers';

// US-001 / US-002 / US-003: Application shell, default landing route and sidebar navigation.
test.describe('Application Shell', () => {
    test('lands on room bookings with shell visible', async ({ page }) => {
        // Empty route should redirect to the configured default route (/book/rooms)
        await page.goto('/#/?mock=true');
        await page.locator('[app-new-dayview]').waitFor({ timeout: 30000 });

        await expect(page.locator('app-topbar')).toBeVisible();
        await expect(page.locator('app-sidebar')).toBeVisible();
    });

    test('sidebar links navigate between feature areas', async ({ page }) => {
        await page.goto('/#/?mock=true');
        await page.locator('app-sidebar').waitFor({ timeout: 30000 });

        // Desk bookings is always available in the bookings group.
        await page
            .locator('app-sidebar a[href*="/book/desks"]')
            .first()
            .click();
        await page.locator('[app-desks]').waitFor({ timeout: 30000 });
        expect(page.url()).toContain('/book/desks');

        // Navigating back to room bookings returns to the day view.
        await page
            .locator('app-sidebar a[href*="/book/rooms"]')
            .first()
            .click();
        await page.locator('[app-new-dayview]').waitFor({ timeout: 30000 });
        expect(page.url()).toContain('/book/rooms');
    });

    // US-002 / US-004 / US-160: Sidebar exposes configured feature areas.
    test('shows configured sidebar feature groups and links', async ({
        page,
    }) => {
        await gotoMockRoute(page, '/#/book/rooms');
        await waitForHost(page, 'app-sidebar');

        await expect(
            page.locator('app-sidebar a[href*="/book/rooms"]'),
        ).toBeVisible();
        await expect(
            page.locator('app-sidebar a[href*="/book/desks/events"]'),
        ).toBeVisible();
        await expect(
            page.locator('app-sidebar a[href*="/book/parking/events"]'),
        ).toBeVisible();
        await expect(
            page.locator('app-sidebar a[href*="/reports/attendance"]'),
        ).toBeVisible();
        await expect(
            page.locator('app-sidebar a[href*="/zone-management"]'),
        ).toBeVisible();
    });
});
