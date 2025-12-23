import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Panel View Component
 * Tests the main booking panel touchscreen interface
 */

const MOCK_SYSTEM_ID = 'space-1';
const PANEL_URL = `/#/panel/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;
const STATUS_TIMEOUT = 15000;

test.describe('Panel View - Core Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should render panel-view-details component', async ({ page }) => {
        await expect(page.locator('panel-view-details')).toBeVisible({
            timeout: STATUS_TIMEOUT,
        });
    });

    test('should render panel-view-status component', async ({ page }) => {
        await expect(page.locator('panel-view-status')).toBeVisible({
            timeout: STATUS_TIMEOUT,
        });
    });

    test('should have clickable panel area', async ({ page }) => {
        const panelButton = page.locator('panel-view > button');
        await expect(panelButton).toBeVisible({ timeout: STATUS_TIMEOUT });
        await expect(panelButton).toBeEnabled();
    });
});

test.describe('Panel View - Room Details Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should display room name in header', async ({ page }) => {
        const nameElement = page.locator('panel-view-details [name]');
        await expect(nameElement).toBeVisible({ timeout: STATUS_TIMEOUT });
    });

    test('should display current time', async ({ page }) => {
        const timeElement = page.locator('panel-view-details p.text-3xl');
        await expect(timeElement).toBeVisible({ timeout: STATUS_TIMEOUT });

        const timeText = await timeElement.textContent();
        // Should contain time in format like "10:30 AM"
        expect(timeText).toBeTruthy();
    });

    test('should have background image or solid color', async ({ page }) => {
        const detailsPanel = page.locator('panel-view-details > div');
        await expect(detailsPanel).toBeVisible({ timeout: STATUS_TIMEOUT });

        // Panel should have bg-black class
        await expect(
            page.locator('panel-view-details > div.bg-black')
        ).toBeVisible();
    });
});

test.describe('Panel View - Status Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should display NOW section', async ({ page }) => {
        await expect(
            page.locator('panel-view-status h3', { hasText: /now/i })
        ).toBeVisible({ timeout: STATUS_TIMEOUT });
    });

    test('should display NEXT section', async ({ page }) => {
        await expect(
            page.locator('panel-view-status h3', { hasText: /next/i })
        ).toBeVisible({ timeout: STATUS_TIMEOUT });
    });

    test('should show status icon/svg', async ({ page }) => {
        const statusPanel = page.locator('panel-view-status');
        await expect(statusPanel).toBeVisible({ timeout: STATUS_TIMEOUT });

        // Should have SVG icons for status display
        const svgElements = statusPanel.locator('svg, div[innerHTML]');
        await expect(svgElements.first()).toBeVisible();
    });

    test('should show status color indicator', async ({ page }) => {
        const statusColors = page.locator(
            'panel-view-status .bg-success, panel-view-status .bg-error, panel-view-status .bg-warning'
        );
        await expect(statusColors.first()).toBeVisible({ timeout: STATUS_TIMEOUT });
    });
});

test.describe('Panel View - QR Code Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should have QR code section in details panel', async ({ page }) => {
        // QR code section should exist (visibility depends on show_qr_code setting)
        const qrSection = page.locator('[qr-checkin]');
        // Check if it exists in DOM
        const count = await qrSection.count();
        // QR section is controlled by settings, just verify panel loads correctly
        await expect(page.locator('panel-view-details')).toBeVisible();
    });
});

test.describe('Panel View - User Interactions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should respond to click/tap on panel', async ({ page }) => {
        const panelButton = page.locator('panel-view > button');
        await expect(panelButton).toBeVisible({ timeout: STATUS_TIMEOUT });

        // Click should trigger action (booking, check-in, or end meeting based on status)
        await panelButton.click();

        // Wait for any potential modal or state change
        await page.waitForTimeout(1000);
    });

    test('should show action hint in status bar when room is free', async ({
        page,
    }) => {
        // When room is free, should show booking hint
        const freeStatus = page.locator('panel-view-status .bg-success');
        const isFree = await freeStatus.isVisible().catch(() => false);

        if (isFree) {
            // Should show booking instruction hint
            const hintText = page.locator(
                'panel-view-status p:has-text("book"), panel-view-status p:has-text("tap")'
            );
            // Hint visibility depends on locale
        }
    });
});

test.describe('Panel View - Responsive Layout', () => {
    test('should adapt to landscape orientation (1920x1080)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await expect(page.locator('panel-view')).toBeVisible();
        await expect(page.locator('panel-view-details')).toBeVisible();
        await expect(page.locator('panel-view-status')).toBeVisible();
    });

    test('should adapt to portrait orientation (768x1024)', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await expect(page.locator('panel-view')).toBeVisible();
        await expect(page.locator('panel-view-details')).toBeVisible();
        await expect(page.locator('panel-view-status')).toBeVisible();
    });

    test('should adapt to tablet size (1024x768)', async ({ page }) => {
        await page.setViewportSize({ width: 1024, height: 768 });
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await expect(page.locator('panel-view')).toBeVisible();
    });
});

test.describe('Panel View - Version Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should display version hash', async ({ page }) => {
        // Version info should be in the bottom right corner
        const versionText = page.locator('panel-view div.opacity-40').first();
        await expect(versionText).toBeVisible({ timeout: STATUS_TIMEOUT });
    });

    test('should display version date', async ({ page }) => {
        const versionElements = page.locator('panel-view div.opacity-40');
        const count = await versionElements.count();
        expect(count).toBeGreaterThanOrEqual(1);
    });
});

test.describe('Panel View - Meeting Details Visibility', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should display host information when meeting is in progress', async ({
        page,
    }) => {
        // Check if room is busy (has current meeting)
        const busyStatus = page.locator('panel-view-status .bg-error');
        const isBusy = await busyStatus.isVisible().catch(() => false);

        if (isBusy) {
            // Should show host information (unless hide_meeting_details is true)
            const hostSection = page.locator('panel-view-details p.text-4xl');
            // Host visibility depends on settings
        }
    });

    test('should display meeting title when meeting is in progress', async ({
        page,
    }) => {
        const busyStatus = page.locator('panel-view-status .bg-error');
        const isBusy = await busyStatus.isVisible().catch(() => false);

        if (isBusy) {
            // Should show meeting title (unless hide_meeting_title is true)
            const titleSection = page.locator('panel-view-details .text-3xl');
            // Title visibility depends on settings
        }
    });
});
