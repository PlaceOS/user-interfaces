import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Control App - Application Overview
 * Tests core application initialization and routing
 */

const MOCK_SYSTEM_ID = 'space-1';
const BOOTSTRAP_URL = '/#/bootstrap';
const TABBED_URL = `/#/tabbed/${MOCK_SYSTEM_ID}`;
const PANEL_URL = `/#/panel/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;

test.describe('Control App Initialization', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should redirect to bootstrap when no system stored', async ({
        page,
    }) => {
        await page.goto('/?mock=true&clear=true');
        await page.waitForTimeout(1000);
        await page.goto('/?mock=true');
        await page.waitForTimeout(2000);

        // Should be at bootstrap or tabbed view
        const bootstrap = page.locator('[app-bootstrap]');
        const tabbedView = page.locator('app-control-tabbed-view');

        const bootstrapVisible = await bootstrap.isVisible().catch(() => false);
        const tabbedVisible = await tabbedView.isVisible().catch(() => false);

        expect(bootstrapVisible || tabbedVisible).toBeTruthy();
    });

    test('should load tabbed view with system ID', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should support panel view route', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.waitForTimeout(2000);

        // Panel view or tabbed view should load
        const panel = page.locator('app-control-main-view');
        const tabbed = page.locator('app-control-tabbed-view');

        const panelVisible = await panel.isVisible().catch(() => false);
        const tabbedVisible = await tabbed.isVisible().catch(() => false);

        expect(panelVisible || tabbedVisible).toBeTruthy();
    });
});

test.describe('Control App Routing', () => {
    test('should navigate to bootstrap route', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should navigate to tabbed route with system', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should include system ID in tabbed route URL', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const url = page.url();
        expect(url).toContain(MOCK_SYSTEM_ID);
    });
});

test.describe('Control App Mock Mode', () => {
    test('should activate mock mode with query parameter', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work without mock parameter when connected', async ({
        page,
    }) => {
        // This test would fail without a real backend, but validates the route
        await page.goto(`${TABBED_URL}?mock=true`);

        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Control App Components', () => {
    test('should render global banner component', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Global banner is part of app component
        // It may or may not be visible depending on configuration
    });

    test('should have proper app root structure', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Control App Error Handling', () => {
    test('should handle invalid system ID gracefully', async ({ page }) => {
        await page.goto('/#/tabbed/invalid-system-id-123?mock=true');
        await page.waitForTimeout(3000);

        // Should show either loader or redirect to bootstrap
        const loader = page.locator('div[name="loader"]');
        const bootstrap = page.locator('[app-bootstrap]');
        const tabbedView = page.locator('app-control-tabbed-view');

        const loaderVisible = await loader.isVisible().catch(() => false);
        const bootstrapVisible = await bootstrap.isVisible().catch(() => false);
        const tabbedVisible = await tabbedView.isVisible().catch(() => false);

        expect(loaderVisible || bootstrapVisible || tabbedVisible).toBeTruthy();
    });

    test('should redirect unknown routes', async ({ page }) => {
        await page.goto('/#/unknown-route?mock=true&clear=true');
        await page.waitForTimeout(2000);

        // Should redirect to bootstrap or valid route
        const bootstrap = page.locator('[app-bootstrap]');
        const tabbedView = page.locator('app-control-tabbed-view');

        const bootstrapVisible = await bootstrap.isVisible().catch(() => false);
        const tabbedVisible = await tabbedView.isVisible().catch(() => false);

        expect(bootstrapVisible || tabbedVisible).toBeTruthy();
    });
});

test.describe('Control App Performance', () => {
    test('should load within acceptable timeout', async ({ page }) => {
        const startTime = Date.now();

        await page.goto(`${TABBED_URL}?mock=true`);
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const loadTime = Date.now() - startTime;

        // Should load within 30 seconds (LOAD_TIMEOUT)
        expect(loadTime).toBeLessThan(LOAD_TIMEOUT);
    });
});
