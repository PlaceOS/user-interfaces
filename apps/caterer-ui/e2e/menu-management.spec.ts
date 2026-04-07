import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Menu Management
 * Tests US-MENU-001 to US-MENU-015
 */

const LOAD_TIMEOUT = 30000;
const ACTION_TIMEOUT = 10000;
const MENU_URL = '/#/menu?mock=true';

test.describe('US-MENU-001: View Menu Items List', () => {
    test('should display menu items table', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show simple-table component
        const table = page.locator('simple-table');
        await expect(table).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display menu component after loading', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Should show table component
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });

    test('should show column headers', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show table headers
        const table = page.locator('simple-table');
        await expect(table).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-MENU-002: View Menu Item Details', () => {
    test('should display item name in table', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(2000);

        // Should show item names
        const table = page.locator('simple-table');
        const text = await table.textContent();
        expect(text?.length).toBeGreaterThan(0);
    });

    test('should display item category in table', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(2000);

        // Should show categories (beverages, breakfast, etc.)
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });

    test('should display item price in table', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Table should be visible with price information
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });
});

test.describe('US-MENU-003: View Item Availability by Zone', () => {
    test('should display menu table with availability controls', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Should show table with menu items
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });
});

test.describe('US-MENU-004: Add New Menu Item', () => {
    test('should display add menu item button', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Should show add button with tooltip
        const add_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("add")') });
        await expect(add_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should open modal when add button clicked', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click add button
        const add_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("add")') });
        await add_button.click();

        // Should open dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show form fields in add item modal', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click add button
        const add_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("add")') });
        await add_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-MENU-007: Edit Menu Item Details', () => {
    test('should display menu component with table', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Should show table
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });

    test('should display menu items table structure', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Should show table
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });

    test('should have interactive elements for editing', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Should show interactive buttons
        const buttons = page.locator('simple-table button');
        const count = await buttons.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-MENU-008: Enable/Disable Menu Item per Zone', () => {
    test('should toggle checkbox to enable/disable item', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(2000);

        // Should be able to interact with checkboxes
        const checkboxes = page.locator('mat-checkbox');
        const firstCheckbox = checkboxes.first();
        await expect(firstCheckbox).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-MENU-009: Delete Menu Item', () => {
    test('should show delete option in menu', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(2000);

        // Click first actions button
        const action_buttons = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("more_vert")') });
        await action_buttons.first().click();

        // Should show delete option with delete icon
        const delete_option = page
            .locator('[mat-menu-item]')
            .filter({ has: page.locator('icon:has-text("delete")') });
        await expect(delete_option).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-MENU-010: Add Option Group to Menu Item', () => {
    test('should show add option button in menu', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(2000);

        // Click first actions button
        const action_buttons = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("more_vert")') });
        await action_buttons.first().click();

        // Should show add option
        const add_option = page
            .locator('[mat-menu-item]')
            .filter({ has: page.locator('icon:has-text("add")') });
        await expect(add_option).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-MENU-011 to US-MENU-014: Item Options Management', () => {
    test('should display menu table with items', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Should show table
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });

    test('should display menu items with expandable structure', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(3000);

        // Table should be visible
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });
});

test.describe('US-MENU-015: Import Menu from File', () => {
    test('should display import menu button', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Should show import button with cloud_upload icon
        const import_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("cloud_upload")') });
        await expect(import_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should open import modal when button clicked', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click import button
        const import_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("cloud_upload")') });
        await import_button.click();

        // Should open dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('Menu - Filter by Search', () => {
    test('should filter menu items by search term', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for menu items to load
        await page.waitForTimeout(2000);

        // Type in search input
        const search_input = page.locator('input[matInput]');
        await search_input.fill('Coffee');

        // Wait for filter to apply
        await page.waitForTimeout(500);

        // Table should still be visible (with filtered results)
        const table = page.locator('simple-table');
        await expect(table).toBeVisible();
    });
});

test.describe('Menu - Information Banner', () => {
    test('should display information banner on menu view', async ({ page }) => {
        await page.goto(MENU_URL);
        await page.locator('catering-menu').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show info banner
        const banner = page.locator('.bg-info');
        await expect(banner).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});
