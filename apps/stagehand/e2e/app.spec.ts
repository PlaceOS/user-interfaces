import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    initializeAppWithMock,
    waitForAppReady,
    waitForSidebar,
} from './test-utils';

/**
 * E2E Tests for Stagehand App Initialization
 */

test.describe('Stagehand App Initialization', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display app root component', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForAppReady(page);

        const app_root = page.locator('app-root');
        await expect(app_root).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should load with sidebar visible', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForSidebar(page);

        const sidebar = page.locator('[sidebar]');
        await expect(sidebar).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should redirect to alerts page by default', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForAppReady(page);

        await expect(page).toHaveURL(/alerts/, { timeout: LOAD_TIMEOUT });
    });

    test('should display Stagehand branding', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForSidebar(page);

        const branding = page.locator('[sidebar] >> text=Stagehand');
        await expect(branding).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should have correct page title', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForAppReady(page);

        const title = await page.title();
        expect(title).toBeTruthy();
    });
});

test.describe('Stagehand App - Mock Mode', () => {
    test('should work with mock=true query parameter', async ({ page }) => {
        await page.goto('/?mock=true');

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should persist mock mode in localStorage', async ({ page }) => {
        await initializeAppWithMock(page);

        const mock_value = await page.evaluate(() => {
            return localStorage.getItem('mock');
        });

        expect(mock_value).toBe('true');
    });
});

test.describe('Stagehand App - Hash Routing', () => {
    test('should use hash-based routing', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForAppReady(page);

        const url = page.url();
        expect(url).toContain('#');
    });

    test('should navigate to alerts via hash route', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto('/#/alerts?mock=true');

        // Check for visible content inside the component
        await expect(page.locator('stagehand-alerts h1:has-text("AV Systems Alerts")')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should navigate to remote-support via hash route', async ({
        page,
    }) => {
        await initializeAppWithMock(page);
        await page.goto('/#/remote-support?mock=true');

        // Check for visible content inside the component
        await expect(page.locator('stagehand-remote-support h1:has-text("AV Systems Remote Support")')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should navigate to dashboards via hash route', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto('/#/dashboards?mock=true');

        // Check for visible content inside the component
        await expect(page.locator('stagehand-dashboards header')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Stagehand App - Error Handling', () => {
    test('should handle unknown routes gracefully', async ({ page }) => {
        await initializeAppWithMock(page);
        await page.goto('/#/invalid-route?mock=true');

        // Should redirect to alerts
        await expect(page).toHaveURL(/alerts/, { timeout: LOAD_TIMEOUT });
    });
});
