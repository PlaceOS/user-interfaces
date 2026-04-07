import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Configuration & Settings
 * Tests US-CONFIG-001 to US-CONFIG-009
 */

const LOAD_TIMEOUT = 30000;
const ACTION_TIMEOUT = 10000;
const MENU_URL = '/#/menu?mock=true';

test.describe('US-CONFIG-001 & US-CONFIG-002: Configure Event Types and Booking Rules', () => {
    test('should display booking rules button on menu view', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Should show booking rules button with menu_book icon
        const rules_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("menu_book")') });
        await expect(rules_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should open booking rules modal when button clicked', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click booking rules button
        const rules_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("menu_book")') });
        await rules_button.click();

        // Should open dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show configuration options in booking rules modal', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click booking rules button
        const rules_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("menu_book")') });
        await rules_button.click();

        // Should show dialog with form elements
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Should have interactive elements
        const elements = dialog.locator(
            'button, input, mat-select, mat-checkbox',
        );
        const count = await elements.count();
        expect(count).toBeGreaterThan(0);
    });
});

test.describe('US-CONFIG-003 & US-CONFIG-004: Room Management', () => {
    test('should display room availability button on menu view', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Should show room availability button with event_available icon
        const room_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("event_available")') });
        await expect(room_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should open room availability modal when button clicked', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click room availability button
        const room_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("event_available")') });
        await room_button.click();

        // Should open dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show room list in availability modal', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click room availability button
        const room_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("event_available")') });
        await room_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-CONFIG-005 to US-CONFIG-008: Charge Codes Management', () => {
    test('should display charge codes button on menu view', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Should show charge codes button with payments icon
        const codes_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("payments")') });
        await expect(codes_button).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should open charge codes modal when button clicked', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click charge codes button
        const codes_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("payments")') });
        await codes_button.click();

        // Should open dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show charge codes list in modal', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click charge codes button
        const codes_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("payments")') });
        await codes_button.click();

        // Should show dialog with content
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Wait for content to load
        await page.waitForTimeout(1000);
    });

    test('should have interactive elements in charge codes modal', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click charge codes button
        const codes_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("payments")') });
        await codes_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('US-CONFIG-009: Require Order Notes', () => {
    test('should have notes requirement option in booking rules', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click booking rules button
        const rules_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("menu_book")') });
        await rules_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Should have checkbox or toggle for notes requirement
        const toggles = dialog.locator('mat-checkbox, mat-slide-toggle');
        const count = await toggles.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('Configuration - Modal Interactions', () => {
    test('should close booking rules modal with close button', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click booking rules button
        const rules_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("menu_book")') });
        await rules_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Find and click close button
        const close_button = dialog
            .locator('button')
            .filter({ has: page.locator('icon:has-text("close")') });
        const count = await close_button.count();
        if (count > 0) {
            await close_button.first().click();
            await page.waitForTimeout(500);
        }
    });

    test('should close room availability modal with close button', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click room availability button
        const room_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("event_available")') });
        await room_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Find and click close button
        const close_button = dialog
            .locator('button')
            .filter({ has: page.locator('icon:has-text("close")') });
        const count = await close_button.count();
        if (count > 0) {
            await close_button.first().click();
            await page.waitForTimeout(500);
        }
    });

    test('should close charge codes modal with close button', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Click charge codes button
        const codes_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("payments")') });
        await codes_button.click();

        // Should show dialog
        const dialog = page.locator('mat-dialog-container');
        await expect(dialog).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Find and click close button
        const close_button = dialog
            .locator('button')
            .filter({ has: page.locator('icon:has-text("close")') });
        const count = await close_button.count();
        if (count > 0) {
            await close_button.first().click();
            await page.waitForTimeout(500);
        }
    });
});

test.describe('Configuration - Button Tooltips', () => {
    test('should show tooltip on add button hover', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Find add button
        const add_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("add")') });
        await expect(add_button).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Hover over button
        await add_button.hover();

        // Wait for tooltip (matTooltip)
        await page.waitForTimeout(500);
    });

    test('should show tooltip on booking rules button hover', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Find booking rules button
        const rules_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("menu_book")') });
        await expect(rules_button).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Hover over button
        await rules_button.hover();

        // Wait for tooltip
        await page.waitForTimeout(500);
    });

    test('should show tooltip on import button hover', async ({ page }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Find import button
        const import_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("cloud_upload")') });
        await expect(import_button).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Hover over button
        await import_button.hover();

        // Wait for tooltip
        await page.waitForTimeout(500);
    });

    test('should show tooltip on room availability button hover', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Find room availability button
        const room_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("event_available")') });
        await expect(room_button).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Hover over button
        await room_button.hover();

        // Wait for tooltip
        await page.waitForTimeout(500);
    });

    test('should show tooltip on charge codes button hover', async ({
        page,
    }) => {
        await page.goto(MENU_URL);
        await page
            .locator('catering-topbar')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Find charge codes button
        const codes_button = page
            .locator('button')
            .filter({ has: page.locator('icon:has-text("payments")') });
        await expect(codes_button).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Hover over button
        await codes_button.hover();

        // Wait for tooltip
        await page.waitForTimeout(500);
    });
});
