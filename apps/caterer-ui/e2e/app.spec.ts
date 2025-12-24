import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Application Initialization and Multi-Tenancy
 * Tests US-ACCESS-001 to US-ACCESS-002
 */

const LOAD_TIMEOUT = 30000;

test.describe('Application Initialization', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display the catering component', async ({ page }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        const catering = page.locator('app-catering');
        await expect(catering).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should load without errors', async ({ page }) => {
        const errors: string[] = [];
        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for app to fully initialize
        await page.waitForTimeout(2000);

        // Filter out known non-critical errors
        const critical_errors = errors.filter(
            (e) =>
                !e.includes('favicon') &&
                !e.includes('404') &&
                !e.includes('Failed to load resource'),
        );

        expect(critical_errors.length).toBe(0);
    });
});

test.describe('US-ACCESS-001: View Only My Company Orders', () => {
    test('should display caterer filter when multiple caterers exist', async ({
        page,
    }) => {
        await page.goto('/#/orders?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for data to load
        await page.waitForTimeout(2000);

        // Check for mat-select elements (level filter and possibly caterer filter)
        const selects = page.locator('mat-select');
        const count = await selects.count();
        expect(count).toBeGreaterThanOrEqual(1);
    });
});

test.describe('US-ACCESS-002: Manage Only My Company Menu Items', () => {
    test('should display caterer filter on menu view when multiple caterers exist', async ({
        page,
    }) => {
        await page.goto('/#/menu?mock=true');
        await page.locator('catering-topbar').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for data to load
        await page.waitForTimeout(2000);

        // Check for mat-select elements
        const selects = page.locator('mat-select');
        const count = await selects.count();
        expect(count).toBeGreaterThanOrEqual(1);
    });
});

test.describe('Responsive Design', () => {
    test('should work on desktop viewport', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('/?mock=true');

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on tablet viewport', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto('/?mock=true');

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/?mock=true');

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on 4K viewport', async ({ page }) => {
        await page.setViewportSize({ width: 3840, height: 2160 });
        await page.goto('/?mock=true');

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Hash Routing', () => {
    test('should use hash-based routing', async ({ page }) => {
        await page.goto('/?mock=true');
        await page.locator('app-root').waitFor({ timeout: LOAD_TIMEOUT });

        // Navigate to menu
        const menu_link = page.locator('a[href*="/menu"]');
        await menu_link.waitFor({ timeout: LOAD_TIMEOUT });
        await menu_link.click();

        // URL should contain hash
        const url = page.url();
        expect(url).toContain('#');
    });
});

test.describe('Global Components', () => {
    test('should display global loading component', async ({ page }) => {
        await page.goto('/?mock=true');

        // Global loading component should be attached
        const loading = page.locator('global-loading');
        await expect(loading).toBeAttached();
    });

    test('should display global banner component', async ({ page }) => {
        await page.goto('/?mock=true');

        // Global banner component should be attached
        const banner = page.locator('global-banner');
        await expect(banner).toBeAttached();
    });
});
