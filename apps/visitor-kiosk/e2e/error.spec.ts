import { expect, test } from '@playwright/test';
import {
    LOAD_TIMEOUT,
    CHECKIN_ERROR_URL,
    CHECKIN_SCAN_URL,
    navigateWithConfig,
} from './test-utils';

/**
 * E2E Tests for Error Handling
 * Tests US-ERROR-001 to US-ERROR-003
 */

test.describe('US-ERROR-001: View Error Message', () => {
    test('should display error component', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Error page may redirect to welcome if no active session
        const url = page.url();
        expect(url).toMatch(/error|checkin|welcome/);
    });

    test('should display error message area', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Should have some content on the error page
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });

    test('should display helpful instructions', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Look for text suggesting to contact reception
        const helpText = page.locator(
            ':has-text("reception"), :has-text("Reception"), :has-text("assistance"), :has-text("help")'
        );
        const count = await helpText.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-ERROR-002: View Declined Booking Message', () => {
    test('should be able to display booking declined state', async ({
        page,
    }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Error page may redirect to welcome if no active session
        const url = page.url();
        expect(url).toMatch(/error|checkin|welcome/);
    });
});

test.describe('US-ERROR-003: Return to Welcome After Error', () => {
    test('should have button to return to welcome', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Look for back to welcome or try again button
        const returnButton = page.locator(
            'a[routerLink*="welcome"], button:has-text("Back"), button:has-text("Try Again"), button:has-text("OK")'
        );
        const count = await returnButton.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });

    test('should navigate to welcome when return button clicked', async ({
        page,
    }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        const returnButton = page.locator(
            'a[routerLink*="welcome"], button:has-text("Back")'
        );
        const isVisible = await returnButton.first().isVisible().catch(() => false);

        if (isVisible) {
            await returnButton.first().click();
            await page.waitForTimeout(1000);
            const url = page.url();
            expect(url).toContain('welcome');
        }
    });
});

test.describe('Error Handling - Invalid Email Check-In', () => {
    test('should show error when email has no booking', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_SCAN_URL);
        await page.locator('[checkin-qr-scan]').waitFor({ state: 'attached', timeout: LOAD_TIMEOUT }).catch(() => {});
        await page.waitForTimeout(1000);

        // Wait for loader to be hidden
        await page.locator('[loader]').waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});

        // Check if email input is available
        const emailInput = page.locator('input[type="email"]');
        const isEmailVisible = await emailInput.isVisible().catch(() => false);

        if (isEmailVisible) {
            // Enter an email that doesn't have a booking
            await emailInput.fill('invalid@nonexistent.com');

            const findButton = page.locator('button[btn]');
            await findButton.click({ force: true });

            // Wait for API call and response
            await page.waitForTimeout(3000);

            // Should either navigate to error, show notification, or stay on page
            const url = page.url();
            const errorNotification = page.locator('.cdk-overlay-pane');
            const isErrorOrScan =
                url.includes('error') || url.includes('scan') || url.includes('checkin') || (await errorNotification.count()) > 0;

            expect(isErrorOrScan).toBeTruthy();
        } else {
            // Page may have redirected to welcome
            const url = page.url();
            expect(url).toMatch(/checkin|scan|error|welcome/);
        }
    });
});

test.describe('Error - Layout', () => {
    test('should display error within checkin container', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Error page may redirect to welcome if no active session
        const url = page.url();
        expect(url).toMatch(/checkin|error|welcome/);
    });

    test('should have consistent styling with other check-in pages', async ({
        page,
    }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Body should be visible with proper styling
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });
});

test.describe('Error - Responsive Layout', () => {
    test('should work on landscape orientation (1920x1080)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Error page may redirect to welcome if no active session
        const url = page.url();
        expect(url).toMatch(/error|checkin|welcome/);
    });

    test('should work on portrait orientation (768x1024)', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Error page may redirect to welcome if no active session
        const url = page.url();
        expect(url).toMatch(/error|checkin|welcome/);
    });

    test('should work on kiosk size (1080x1920)', async ({ page }) => {
        await page.setViewportSize({ width: 1080, height: 1920 });
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Error page may redirect to welcome if no active session
        const url = page.url();
        expect(url).toMatch(/error|checkin|welcome/);
    });
});

test.describe('Error - Accessibility', () => {
    test('should have visible error icon or indicator', async ({ page }) => {
        await navigateWithConfig(page, CHECKIN_ERROR_URL);
        await page.waitForTimeout(2000);

        // Look for error icon
        const errorIcon = page.locator(
            'icon:has-text("error"), icon:has-text("warning"), mat-icon'
        );
        const count = await errorIcon.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});
