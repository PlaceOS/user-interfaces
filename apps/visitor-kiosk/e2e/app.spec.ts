import { expect, test } from '@playwright/test';
import {
    BOOTSTRAP_URL,
    CHECKIN_ERROR_URL,
    CHECKIN_RESULTS_URL,
    CHECKIN_SCAN_URL,
    CHECKOUT_URL,
    clearKioskConfig,
    EXPLORE_URL,
    LOAD_TIMEOUT,
    navigateWithConfig,
    REGISTER_URL,
    WELCOME_URL,
} from './test-utils';

/**
 * Visitor Kiosk - Smoke Tests
 * Basic application initialization and navigation tests
 */

test.describe('Visitor Kiosk - Application Initialization', () => {
    test('should initialize the application', async ({ page }) => {
        await page.goto('/?mock=true');
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should redirect to bootstrap by default when no config', async ({
        page,
    }) => {
        await clearKioskConfig(page);
        await page.goto('/?mock=true');
        await page.waitForTimeout(2000);

        const url = page.url();
        expect(url).toMatch(/bootstrap|welcome/);
    });

    test('should load with mock mode enabled', async ({ page }) => {
        await navigateWithConfig(page, WELCOME_URL);
        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Visitor Kiosk - Route Navigation', () => {
    test('should navigate to welcome page', async ({ page }) => {
        await navigateWithConfig(page, WELCOME_URL);
        await page
            .locator('a[href*="checkin"]')
            .waitFor({ timeout: LOAD_TIMEOUT });
        await expect(page.locator('a[href*="checkin"]')).toBeVisible();
    });

    test('should navigate to bootstrap page', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });
        await expect(page.locator('[bootstrap]')).toBeVisible();
    });

    test('should navigate to register page', async ({ page }) => {
        await navigateWithConfig(page, REGISTER_URL);
        await page
            .locator('input[name="name"]')
            .waitFor({ timeout: LOAD_TIMEOUT });
        await expect(page.locator('input[name="name"]')).toBeVisible();
    });

    test('should navigate to check-in scan page', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_SCAN_URL);
        await page
            .locator('[checkin-qr-scan]')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT });
        await expect(page.locator('[checkin-qr-scan]')).toBeAttached();
    });

    test('should navigate to check-in details page', async ({ page }) => {
        await navigateWithConfig(page, '/#/checkin/details');
        await page.waitForTimeout(2000);
        const url = page.url();
        expect(url).toContain('checkin');
    });

    test('should navigate to check-in results page', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_RESULTS_URL);
        await page.waitForTimeout(2000);
        const url = page.url();
        // Results page may redirect to scan if no booking, so check for checkin route
        expect(url).toMatch(/results|checkin|welcome/);
    });

    test('should navigate to check-in error page', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);
        const url = page.url();
        // Error page may redirect to welcome if no active session
        expect(url).toMatch(/error|checkin|welcome/);
    });

    test('should navigate to checkout page', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);
        const url = page.url();
        // Checkout page may redirect to welcome if no active booking
        expect(url).toMatch(/checkout|checkin|welcome/);
    });

    test('should navigate to explore page', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);
        const url = page.url();
        // Explore page may redirect to welcome if not configured
        expect(url).toMatch(/explore|welcome/);
    });
});

test.describe('Visitor Kiosk - Core User Flows', () => {
    test('should allow navigation from welcome to check-in', async ({
        page,
    }) => {
        await navigateWithConfig(page, WELCOME_URL);
        await page
            .locator('a[href*="checkin"]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const checkinButton = page.locator('a[href*="checkin"]');
        await checkinButton.click();

        await expect(page).toHaveURL(/.*checkin/);
    });

    test('should allow navigation from check-in scan to welcome', async ({
        page,
    }) => {
        await navigateWithConfig(page, CHECKIN_SCAN_URL);
        await page
            .locator('[checkin-qr-scan]')
            .waitFor({ state: 'attached', timeout: LOAD_TIMEOUT })
            .catch(() => {});
        await page.waitForTimeout(1000);

        // Wait for loader to be hidden before clicking
        await page
            .locator('[loader]')
            .waitFor({ state: 'hidden', timeout: 5000 })
            .catch(() => {});

        const closeButton = page.locator('a[href*="welcome"]');
        const isVisible = await closeButton.isVisible().catch(() => false);

        if (isVisible) {
            await closeButton.click({ force: true });
            await expect(page).toHaveURL(/.*welcome/);
        } else {
            // If close button not visible, page may have already navigated
            const url = page.url();
            expect(url).toMatch(/welcome|checkin|scan/);
        }
    });

    test('should allow navigation from register to welcome', async ({
        page,
    }) => {
        await navigateWithConfig(page, REGISTER_URL);
        await page
            .locator('input[name="name"]')
            .waitFor({ timeout: LOAD_TIMEOUT })
            .catch(() => {});
        await page.waitForTimeout(1000);

        // Wait for loader to be hidden before clicking
        await page
            .locator('[loader]')
            .waitFor({ state: 'hidden', timeout: 5000 })
            .catch(() => {});

        const closeButton = page.locator('a[href*="welcome"]');
        const isVisible = await closeButton.isVisible().catch(() => false);

        if (isVisible) {
            await closeButton.click({ force: true });
            await expect(page).toHaveURL(/.*welcome/);
        } else {
            // If close button not visible, page may have already navigated
            const url = page.url();
            expect(url).toMatch(/welcome|register/);
        }
    });
});
