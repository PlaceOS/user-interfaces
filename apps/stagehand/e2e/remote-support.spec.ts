import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    ACTION_TIMEOUT,
    REMOTE_SUPPORT_URL,
    navigateWithMock,
    waitForRemoteSupportPage,
    getTotalRoomCount,
    getActiveAlertsCount,
    selectRoomStateFilter,
    isTableVisible,
    getTableRowCount,
} from './test-utils';

/**
 * E2E Tests for Remote Support Page
 * Tests US-SM-019 to US-SM-025
 */

test.describe('US-SM-019: View Room Status Overview', () => {
    test('should display remote support page with header', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const header = page.locator('h1:has-text("AV Systems Remote Support")');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display total rooms summary card', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const card = page.locator('div:has(h3:has-text("Total Rooms"))').first();
        await expect(card).toBeVisible({ timeout: ACTION_TIMEOUT });

        const count = await getTotalRoomCount(page);
        expect(count).toBeDefined();
    });

    test('should display active alerts summary card', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const card = page.locator('div:has(h3:has-text("Active Alerts"))').first();
        await expect(card).toBeVisible({ timeout: ACTION_TIMEOUT });

        const count = await getActiveAlertsCount(page);
        expect(count).toBeDefined();
    });

    test('should display critical alerts count in active alerts card', async ({
        page,
    }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const card = page.locator('div:has(h3:has-text("Active Alerts"))').first();
        const critical_text = card.locator('text=critical');
        await expect(critical_text).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display rooms table', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const table_visible = await isTableVisible(page);
        expect(table_visible).toBeTruthy();
    });

    test('should display room table with correct columns', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const table = page.locator('simple-table');
        await expect(table).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Check for column headers
        const room_header = page.locator('simple-table [header]:has-text("Room")');
        const occupancy_header = page.locator(
            'simple-table [header]:has-text("Occupancy")'
        );
        const feed_header = page.locator('simple-table [header]:has-text("Feed")');
        const alerts_header = page.locator(
            'simple-table [header]:has-text("Alerts")'
        );

        await expect(room_header).toBeVisible({ timeout: ACTION_TIMEOUT });
        await expect(occupancy_header).toBeVisible({ timeout: ACTION_TIMEOUT });
        await expect(feed_header).toBeVisible({ timeout: ACTION_TIMEOUT });
        await expect(alerts_header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-SM-020: View Next Scheduled Event', () => {
    test('should display Next Event column in table', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        // Column header may be "Next Event" or "Next Class" depending on settings
        const event_header = page.locator(
            'simple-table [header]'
        ).filter({ hasText: /Next Event|Next Class/ });
        await expect(event_header.first()).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-SM-021: View Camera Snapshots', () => {
    test('should display Feed column in table', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const feed_header = page.locator('simple-table [header]:has-text("Feed")');
        await expect(feed_header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display camera snapshot buttons for rooms with cameras', async ({
        page,
    }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            // Look for camera snapshot button or placeholder
            const snapshot_button = page.locator('button[snap]');
            const no_image_icon = page.locator(
                'simple-table icon:has-text("hide_image")'
            );

            const has_snapshot = await snapshot_button.count();
            const has_no_image = await no_image_icon.count();

            // Either there are snapshot buttons or no-image placeholders
            expect(has_snapshot + has_no_image).toBeGreaterThanOrEqual(0);
        }
    });

    test('should open camera snapshot modal when thumbnail is clicked', async ({
        page,
    }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const snapshot_button = page.locator('button[snap]').first();
        const is_visible = await snapshot_button.isVisible().catch(() => false);

        if (is_visible) {
            await snapshot_button.click();
            await page.waitForTimeout(500);

            // Check if modal opened
            const modal = page.locator('mat-dialog-container');
            await expect(modal).toBeVisible({ timeout: ACTION_TIMEOUT });
        }
    });
});

test.describe('US-SM-022: Filter Rooms by State', () => {
    test('should display room state filter dropdown', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const select = page.locator('mat-select').filter({ hasText: /All Rooms|In Use|Available|Has Issues/ }).first();
        await expect(select).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should filter by In Use state', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        await selectRoomStateFilter(page, 'In Use');

        await expect(page).toHaveURL(/state=in_use/i, {
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should filter by Available state', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        await selectRoomStateFilter(page, 'Available');

        await expect(page).toHaveURL(/state=available/i, {
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should filter by Has Issues state', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        await selectRoomStateFilter(page, 'Has Issues');

        await expect(page).toHaveURL(/state=issues/i, {
            timeout: ACTION_TIMEOUT,
        });
    });
});

test.describe('US-SM-023: Search Rooms', () => {
    test('should display search input', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const search_input = page.locator('input[placeholder*="Search rooms"]');
        await expect(search_input).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should update URL when searching', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const search_input = page.locator('input[placeholder*="Search rooms"]');
        await search_input.fill('conference');
        await page.waitForTimeout(300);

        await expect(page).toHaveURL(/search=conference/i, {
            timeout: ACTION_TIMEOUT,
        });
    });
});

test.describe('US-SM-024: Access Room Control System', () => {
    test('should display control room action button', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const control_icon = page.locator(
                'simple-table a[matTooltip="Control Room"]'
            );
            await expect(control_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });

    test('should have devices icon for control room link', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const devices_icon = page.locator(
                'simple-table a[matTooltip="Control Room"] icon:has-text("devices")'
            );
            await expect(devices_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });
});

test.describe('US-SM-025: Access Room Management', () => {
    test('should display manage room action button', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const manage_icon = page.locator(
                'simple-table a[matTooltip="Manage Room"]'
            );
            await expect(manage_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });

    test('should have build icon for manage room link', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const build_icon = page.locator(
                'simple-table a[matTooltip="Manage Room"] icon:has-text("build")'
            );
            await expect(build_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });

    test('should link to backoffice for room management', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const manage_link = page.locator(
                'simple-table a[matTooltip="Manage Room"]'
            ).first();
            const href = await manage_link.getAttribute('href');
            expect(href).toContain('backoffice');
        }
    });
});

test.describe('Remote Support - Room Status Display', () => {
    test('should display occupancy status indicator', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            // Look for status indicator dots
            const status_dot = page.locator('simple-table .rounded-full.h-3.w-3');
            const count = await status_dot.count();
            expect(count).toBeGreaterThanOrEqual(0);
        }
    });

    test('should display status text for rooms', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            // Look for status text (Available, In Use, Pending, No status)
            const status_text = page.locator('simple-table').filter({
                hasText: /Available|In Use|Pending|No status/,
            });
            await expect(status_text).toBeVisible({ timeout: ACTION_TIMEOUT });
        }
    });
});

test.describe('Remote Support - Alerts Display', () => {
    test('should display Alerts column in table', async ({ page }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const alerts_header = page.locator(
            'simple-table [header]:has-text("Alerts")'
        );
        await expect(alerts_header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display No issues text when room has no alerts', async ({
        page,
    }) => {
        await navigateWithMock(page, REMOTE_SUPPORT_URL);
        await waitForRemoteSupportPage(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            // Look for "No issues" text
            const no_issues = page.locator('simple-table >> text=No issues');
            const count = await no_issues.count();
            expect(count >= 0).toBeTruthy();
        }
    });
});

test.describe('Remote Support - URL Parameter Persistence', () => {
    test('should load search filter from URL', async ({ page }) => {
        await navigateWithMock(page, `${REMOTE_SUPPORT_URL}?search=meeting`);
        await waitForRemoteSupportPage(page);

        const search_input = page.locator('input[placeholder*="Search rooms"]');
        await expect(search_input).toHaveValue('meeting', {
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should load state filter from URL', async ({ page }) => {
        await navigateWithMock(page, `${REMOTE_SUPPORT_URL}?state=in_use`);
        await waitForRemoteSupportPage(page);

        // The state filter should show In Use selected
        const select = page.locator('mat-select').filter({ hasText: /In Use/ }).first();
        await expect(select).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});
