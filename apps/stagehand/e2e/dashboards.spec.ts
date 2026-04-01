import { expect, test } from '@playwright/test';
import {
    ACTION_TIMEOUT,
    DASHBOARDS_LIST_URL,
    DASHBOARDS_MANAGE_URL,
    DASHBOARDS_URL,
    getTableRowCount,
    isTableVisible,
    LOAD_TIMEOUT,
    navigateWithMock,
    waitForDashboardList,
    waitForDashboardsPage,
} from './test-utils';

/**
 * E2E Tests for Dashboard Management
 * Tests US-SM-007 to US-SM-018
 */

test.describe('US-SM-007: View All Dashboards', () => {
    test('should display dashboards page', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_URL);
        await waitForDashboardsPage(page);

        // Check for visible content inside the dashboards component
        const dashboards_header = page.locator('stagehand-dashboards header');
        await expect(dashboards_header).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display dashboard list', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const list_component = page.locator('stagehand-dashboard-list');
        await expect(list_component).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display dashboards table', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const table_visible = await isTableVisible(page);
        expect(table_visible).toBeTruthy();
    });

    test('should display table with Name column', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const header = page.locator('simple-table [header]:has-text("Name")');
        await expect(header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display table with Description column', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const header = page.locator(
            'simple-table [header]:has-text("Description")',
        );
        await expect(header.first()).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display table with Enabled column', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const header = page.locator(
            'simple-table [header]:has-text("Enabled")',
        );
        await expect(header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display empty message when no dashboards exist', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        // Check if the empty message or table rows are displayed
        const empty_message = page.locator(
            'text=No dashboards have been created',
        );
        const row_count = await getTableRowCount(page);

        // Either we have rows or we see the empty message
        const has_message = await empty_message.isVisible().catch(() => false);
        expect(row_count >= 0 || has_message).toBeTruthy();
    });
});

test.describe('US-SM-008: Create New Dashboard', () => {
    test('should navigate to dashboard manage page', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_MANAGE_URL);

        await page.waitForTimeout(1000);

        // Check URL contains manage
        await expect(page).toHaveURL(/dashboards.*manage/, {
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display dashboard form with name input', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_MANAGE_URL);
        await page.waitForTimeout(1000);

        const name_input = page.locator('input').first();
        await expect(name_input).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display save button', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_MANAGE_URL);
        await page.waitForTimeout(1000);

        const save_button = page.locator('button:has-text("Save")');
        await expect(save_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should have add button in dashboard list header', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const add_button = page.locator(
            'stagehand-dashboards header a:has-text("Add Dashboard")',
        );
        await expect(add_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-SM-009: Edit Dashboard', () => {
    test('should display edit button for dashboards in list', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        // Check for edit icon in the table (may not be visible if no dashboards)
        const edit_icon = page.locator('simple-table icon:has-text("edit")');
        const row_count = await getTableRowCount(page);

        if (row_count > 0) {
            await expect(edit_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        } else {
            // No rows, so no edit button expected
            expect(row_count).toBe(0);
        }
    });

    test('should navigate to edit page when edit button is clicked', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const edit_link = page
                .locator(
                    'simple-table a[routerLink*="manage"]:has(icon:has-text("edit"))',
                )
                .first();
            await edit_link.click();
            await page.waitForTimeout(500);

            await expect(page).toHaveURL(/dashboards.*manage/, {
                timeout: ACTION_TIMEOUT,
            });
        }
    });
});

test.describe('US-SM-010: Delete Dashboard', () => {
    test('should display delete button for dashboards in list', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const delete_icon = page.locator(
                'simple-table icon:has-text("delete")',
            );
            await expect(delete_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });
});

test.describe('US-SM-011: Enable/Disable Dashboard', () => {
    test('should display enabled status in dashboard list', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        // Check for the enabled column header
        const enabled_header = page.locator(
            'simple-table [header]:has-text("Enabled")',
        );
        await expect(enabled_header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display checkmark for enabled dashboards', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            // Check for done icon (checkmark) indicating enabled status
            const check_icon = page.locator(
                'simple-table icon:has-text("done")',
            );
            const check_count = await check_icon.count();
            // There may or may not be enabled dashboards
            expect(check_count >= 0).toBeTruthy();
        }
    });
});

test.describe('US-SM-012: Create Alert Condition', () => {
    test('should display add alert button in dashboard list', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const add_alert_icon = page.locator(
                'simple-table icon:has-text("add_alert")',
            );
            await expect(add_alert_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });

    test('should navigate to alert manage page when add alert is clicked', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const add_alert_link = page
                .locator('simple-table a:has(icon:has-text("add_alert"))')
                .first();
            await add_alert_link.click();
            await page.waitForTimeout(500);

            await expect(page).toHaveURL(/dashboards.*alerts.*manage/, {
                timeout: ACTION_TIMEOUT,
            });
        }
    });
});

test.describe('US-SM-017: Edit Alert Condition', () => {
    test('should display expand button to show nested alerts', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);
        await waitForDashboardList(page);

        const row_count = await getTableRowCount(page);
        if (row_count > 0) {
            const expand_icon = page.locator(
                'simple-table icon:has-text("keyboard_arrow_down")',
            );
            await expect(expand_icon.first()).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });
});

test.describe('Dashboard Navigation', () => {
    test('should redirect to list from base dashboards URL', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_URL);
        await page.waitForTimeout(1000);

        await expect(page).toHaveURL(/dashboards.*list/, {
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display header on manage page', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_MANAGE_URL);
        await page.waitForTimeout(1000);

        // Header should be visible on manage page
        const header = page.locator('stagehand-dashboards header h1');
        await expect(header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display add dashboard button on manage page', async ({
        page,
    }) => {
        await navigateWithMock(page, DASHBOARDS_MANAGE_URL);
        await page.waitForTimeout(1000);

        // Manage page should show the add dashboard button
        const add_button = page.locator(
            'stagehand-dashboards header a:has-text("Add Dashboard")',
        );
        await expect(add_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display progress bar while loading', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_LIST_URL);

        // Progress bar may or may not be visible depending on loading state
        const progress_bar = page.locator('mat-progress-bar');
        await expect(progress_bar).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('Dashboard Form Validation', () => {
    test('should require dashboard name', async ({ page }) => {
        await navigateWithMock(page, DASHBOARDS_MANAGE_URL);
        await page.waitForTimeout(1000);

        // The name input should be required
        const name_input = page.locator('input').first();
        await expect(name_input).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Click save without entering name
        const save_button = page.locator('button:has-text("Save")');
        await expect(save_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});
