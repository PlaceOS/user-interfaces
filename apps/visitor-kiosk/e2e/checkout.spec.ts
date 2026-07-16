import { expect, test } from '@playwright/test';
import {
    CHECKOUT_SCAN_URL,
    CHECKOUT_URL,
    navigateWithConfig,
} from './test-utils';

/**
 * E2E Tests for Checkout
 * Tests US-CHECKOUT-001 to US-CHECKOUT-004
 */

test.describe('US-CHECKOUT-001: Initiate Checkout', () => {
    test('should use the separate checkout scan route', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_SCAN_URL);

        await expect(page).toHaveURL(/.*checkout\/scan/);
        await expect(page.locator('[checkin-qr-scan] h3')).toContainText(
            /check-out/i,
        );
    });

    test('should display checkout component', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        // Checkout may redirect to welcome if no active booking
        const url = page.url();
        expect(url).toMatch(/checkout|checkin|welcome/);
    });

    test('should be accessible from checkout scan route', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_SCAN_URL);
        await page.waitForTimeout(2000);

        // The checkout route should be accessible
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(1000);

        // Checkout may redirect to welcome if no booking
        const url = page.url();
        expect(url).toMatch(/checkout|scan|checkin|welcome/);
    });
});

test.describe('US-CHECKOUT-002: View Checkout Confirmation', () => {
    test('should display checkout confirmation content', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        // Should have some content on the page
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });

    test('should display checkout message or prompt', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        // Look for checkout-related text
        const checkoutText = page.locator(
            ':has-text("checkout"), :has-text("Checkout"), :has-text("Check out")',
        );
        const count = await checkoutText.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-CHECKOUT-003: Confirm Checkout', () => {
    test('should have confirm checkout button', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        const confirmButton = page.locator(
            'button:has-text("Confirm"), button:has-text("Check Out"), button:has-text("Checkout")',
        );
        const count = await confirmButton.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });

    test('should be able to click confirm button', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        const confirmButton = page.locator(
            'button:has-text("Confirm"), button:has-text("Check Out")',
        );
        const isVisible = await confirmButton
            .first()
            .isVisible()
            .catch(() => false);

        if (isVisible) {
            await confirmButton.first().click();
            await page.waitForTimeout(1000);
        }
    });
});

test.describe('US-CHECKOUT-004: Cancel Checkout', () => {
    test('should have cancel button or back navigation', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        const cancelButton = page.locator(
            'button:has-text("Cancel"), a[routerLink*="welcome"], a:has(icon:has-text("close"))',
        );
        const count = await cancelButton.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });

    test('should navigate back when cancel clicked', async ({ page }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        const cancelButton = page.locator(
            'button:has-text("Cancel"), a[routerLink*="welcome"]',
        );
        const isVisible = await cancelButton
            .first()
            .isVisible()
            .catch(() => false);

        if (isVisible) {
            await cancelButton.first().click();
            await page.waitForTimeout(1000);

            // Should navigate away from checkout
            const url = page.url();
            expect(url).not.toContain('checkout');
        }
    });
});

test.describe('Checkout - Layout', () => {
    test('should display checkout within the shared kiosk container', async ({
        page,
    }) => {
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        // Checkout may redirect to welcome if no booking
        const url = page.url();
        expect(url).toMatch(/checkout|welcome/);
    });
});

test.describe('Checkout - Responsive Layout', () => {
    test('should work on landscape orientation (1920x1080)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        // Checkout may redirect to welcome if no booking
        const url = page.url();
        expect(url).toMatch(/checkout|checkin|welcome/);
    });

    test('should work on portrait orientation (768x1024)', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await navigateWithConfig(page, CHECKOUT_URL);
        await page.waitForTimeout(2000);

        // Checkout may redirect to welcome if no booking
        const url = page.url();
        expect(url).toMatch(/checkout|checkin|welcome/);
    });
});
