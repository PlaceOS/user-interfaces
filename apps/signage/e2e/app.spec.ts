import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    initializeAppWithMock,
    waitForAppReady,
} from './test-utils';

/**
 * E2E Tests for Signage App Initialization
 * Tests basic application startup and mock mode functionality
 */

test.describe('Signage App Initialization', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

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

    test('should use hash-based routing', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForAppReady(page);

        const url = page.url();
        expect(url).toContain('#');
    });

    test('should load Angular Material controls', async ({ page }) => {
        await initializeAppWithMock(page);
        await waitForAppReady(page);

        await expect(page.locator('mat-select')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should display app root container', async ({ page }) => {
        await initializeAppWithMock(page);

        const app_root = page.locator('app-root');
        await expect(app_root).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});
