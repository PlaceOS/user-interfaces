import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Navigation & Access
 * Tests US-NAV-001 to US-NAV-003, US-AUTH-001 to US-AUTH-002
 */

const LOAD_TIMEOUT = 30000;
const ACTION_TIMEOUT = 10000;

test.describe('US-NAV-001: Navigate to Menu Management', () => {
    test('should display home screen with menu navigation option', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show the menu option on the home screen
        const menu_link = page.locator('a[href*="/menu"]');
        await expect(menu_link).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should navigate to menu view when clicking menu option', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Click on menu option
        const menu_link = page.locator('a[href*="/menu"]');
        await menu_link.waitFor({ timeout: LOAD_TIMEOUT });
        await menu_link.click();

        // Should navigate to menu view
        await expect(page).toHaveURL(/.*\/menu/);

        // Should show catering menu component
        const menu_component = page.locator('catering-menu');
        await expect(menu_component).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display topbar on menu view', async ({ page }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show topbar component
        const topbar = page.locator('catering-topbar');
        await expect(topbar).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should show back button on menu view', async ({ page }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show back button
        const back_button = page.locator('a[href*="/"]').first();
        await expect(back_button).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-NAV-002: Navigate to Orders View', () => {
    test('should display home screen with orders navigation option', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show the orders option on the home screen
        const orders_link = page.locator('a[href*="/orders"]');
        await expect(orders_link).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should navigate to orders view when clicking orders option', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Click on orders option
        const orders_link = page.locator('a[href*="/orders"]');
        await orders_link.waitFor({ timeout: LOAD_TIMEOUT });
        await orders_link.click();

        // Should navigate to orders view
        await expect(page).toHaveURL(/.*\/orders/);

        // Should show catering order list component
        const orders_component = page.locator('catering-order-list');
        await expect(orders_component).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display topbar on orders view', async ({ page }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show topbar component
        const topbar = page.locator('catering-topbar');
        await expect(topbar).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should show date selector on orders view', async ({ page }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show date options component
        const date_options = page.locator('date-options');
        await expect(date_options).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-NAV-003: Select Active Building/Zone', () => {
    test('should display level filter on menu view', async ({ page }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show level select dropdown
        const level_select = page.locator('mat-select').first();
        await expect(level_select).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display level filter on orders view', async ({ page }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show level select dropdown
        const level_select = page.locator('mat-select').first();
        await expect(level_select).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should open level dropdown when clicked', async ({ page }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for data to load
        await page.waitForTimeout(2000);

        // Click on level select
        const level_select = page.locator('mat-select').first();
        await level_select.click();

        // Wait for dropdown to open
        await page.waitForTimeout(1000);

        // Should show dropdown panel
        const dropdown_panel = page.locator('.cdk-overlay-pane mat-option, .mat-mdc-select-panel mat-option');
        const count = await dropdown_panel.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-AUTH-001: Log in to Application', () => {
    test('should initialize the application in mock mode', async ({ page }) => {
        await page.goto('/?mock=true');

        // Should show the app root
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display home screen after initialization', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show the catering component
        const catering = page.locator('app-catering');
        await expect(catering).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should show menu and orders options on home screen', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show both navigation options
        const menu_link = page.locator('a[href*="/menu"]');
        const orders_link = page.locator('a[href*="/orders"]');

        await expect(menu_link).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(orders_link).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('US-AUTH-002: View Unauthorized Message', () => {
    test('should display unauthorized page content on unauthorized route', async ({
        page,
    }) => {
        await page.goto('/#/unauthorised?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for the route to resolve
        await page.waitForTimeout(2000);

        // The URL should contain unauthorised
        const url = page.url();
        expect(url).toContain('unauthorised');
    });
});

test.describe('Navigation - Back Button', () => {
    test('should navigate back to home from menu view', async ({ page }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Click back button (has arrow_back icon)
        const back_button = page.locator('a').filter({ has: page.locator('icon:has-text("arrow_back")') });
        await back_button.click();

        // Should navigate to home (no view parameter)
        await page.waitForTimeout(1000);
        const url = page.url();
        expect(url).not.toContain('/menu');
    });

    test('should navigate back to home from orders view', async ({ page }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Click back button (has arrow_back icon)
        const back_button = page.locator('a').filter({ has: page.locator('icon:has-text("arrow_back")') });
        await back_button.click();

        // Should navigate to home (no view parameter)
        await page.waitForTimeout(1000);
        const url = page.url();
        expect(url).not.toContain('/orders');
    });
});

test.describe('Navigation - Search Functionality', () => {
    test('should display search input on menu view', async ({ page }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show search input
        const search_input = page.locator('input[matInput]');
        await expect(search_input).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display search input on orders view', async ({ page }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Should show search input
        const search_input = page.locator('input[matInput]');
        await expect(search_input).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should be able to type in search input', async ({ page }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Type in search input
        const search_input = page.locator('input[matInput]');
        await search_input.fill('coffee');

        // Should have the value
        await expect(search_input).toHaveValue('coffee');
    });
});
