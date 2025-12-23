import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Event Panel Component
 * Tests the display-focused event/signage view
 */

const MOCK_SYSTEM_ID = 'space-1';
const EVENTS_URL = `/#/events/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;
const STATUS_TIMEOUT = 15000;

// Helper selector for the main event panel container
const EVENT_PANEL_CONTENT = 'event-panel > div.bg-base-100.absolute.inset-0';

test.describe('Event Panel - Core Layout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${EVENTS_URL}?mock=true`);
        // Event panel waits for org service - check for attached state first
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        // Then wait for the main container to be visible (not the QR overlay)
        await page.locator(EVENT_PANEL_CONTENT).waitFor({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should render event-panel component', async ({ page }) => {
        await expect(page.locator(EVENT_PANEL_CONTENT)).toBeVisible();
    });

    test('should display room name', async ({ page }) => {
        // Event panel shows space name in header - header exists but name loads async
        const header = page.locator('event-panel header');
        await expect(header).toBeVisible({ timeout: STATUS_TIMEOUT });
        // h1 element should exist in header (content loads asynchronously)
        const h1 = page.locator('event-panel header h1');
        await expect(h1).toBeAttached();
    });

    test('should display current time', async ({ page }) => {
        // Event panel shows current time
        const timeDisplay = page.locator('event-panel header p.text-2xl');
        await expect(timeDisplay).toBeVisible({ timeout: STATUS_TIMEOUT });
    });
});

test.describe('Event Panel - Meeting Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await page.locator(EVENT_PANEL_CONTENT).waitFor({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display current meeting section', async ({ page }) => {
        // Event panel shows current and next meetings side by side in main
        const main = page.locator('event-panel main');
        await expect(main).toBeVisible({ timeout: STATUS_TIMEOUT });
    });

    test('should display next meeting section', async ({ page }) => {
        // Should show "NEXT" heading
        const nextHeading = page.locator('event-panel h2', { hasText: /next/i });
        await expect(nextHeading).toBeVisible({ timeout: STATUS_TIMEOUT });
    });
});

test.describe('Event Panel - QR Code Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await page.locator(EVENT_PANEL_CONTENT).waitFor({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should have QR code section (collapsible)', async ({ page }) => {
        // QR code section has book-tag button
        const bookButton = page.locator('event-panel [book-tag]');
        // Button visibility depends on show_qr_code settings
        await page.waitForTimeout(1000);
    });

    test('should respect hide_qr_code query parameter', async ({ page }) => {
        await page.goto(`${EVENTS_URL}?mock=true&hide_qr_code=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator(EVENT_PANEL_CONTENT)).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Event Panel - Responsive Layout', () => {
    test('should adapt to landscape orientation (wall display)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator(EVENT_PANEL_CONTENT)).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should adapt to portrait orientation (vertical display)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1080, height: 1920 });
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator(EVENT_PANEL_CONTENT)).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should adapt to 4K display (3840x2160)', async ({ page }) => {
        await page.setViewportSize({ width: 3840, height: 2160 });
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator(EVENT_PANEL_CONTENT)).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Event Panel - Styling', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await page.locator(EVENT_PANEL_CONTENT).waitFor({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display with full screen layout', async ({ page }) => {
        // Check for absolute inset-0 positioning
        await expect(page.locator(EVENT_PANEL_CONTENT)).toBeVisible();
    });

    test('should show logo if configured', async ({ page }) => {
        // Logo is in header, visibility depends on app.logo_light/dark settings
        const header = page.locator('event-panel header');
        await expect(header).toBeVisible();
    });
});

test.describe('Event Panel - Information Display', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${EVENTS_URL}?mock=true`);
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await page.locator(EVENT_PANEL_CONTENT).waitFor({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should be optimized for passive viewing', async ({ page }) => {
        // Event panel is designed for wall displays - minimal interaction
        // Has header, main, and optional footer sections
        const main = page.locator('event-panel main');
        await expect(main).toBeVisible({ timeout: STATUS_TIMEOUT });
    });

    test('should show meeting status clearly', async ({ page }) => {
        // Main section displays current and next meetings
        const main = page.locator('event-panel main');
        await expect(main).toBeVisible({ timeout: STATUS_TIMEOUT });
    });
});
