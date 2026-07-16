import { Page } from '@playwright/test';

/**
 * Shared test utilities for visitor-kiosk e2e tests
 */

export const LOAD_TIMEOUT = 30000;
export const ACTION_TIMEOUT = 10000;

// URLs - these are relative hash routes
export const WELCOME_URL = '/#/welcome';
export const REGISTER_URL = '/#/register';
export const BOOTSTRAP_URL = '/#/bootstrap';
export const CHECKIN_URL = '/#/checkin';
export const CHECKIN_SCAN_URL = '/#/checkin/scan';
export const CHECKIN_DETAILS_URL = '/#/checkin/details';
export const CHECKIN_PHOTO_URL = '/#/checkin/photo';
export const CHECKIN_PREFERENCES_URL = '/#/checkin/preferences';
export const CHECKIN_RESULTS_URL = '/#/checkin/results';
export const CHECKIN_INDUCTION_URL = '/#/checkin/induction';
export const CHECKIN_ERROR_URL = '/#/checkin/error';
export const CHECKOUT_URL = '/#/checkout/confirm';
export const CHECKOUT_SCAN_URL = '/#/checkout/scan';
export const EXPLORE_URL = '/#/explore';

// Mock guest email from users.data.ts
export const MOCK_GUEST_EMAIL = 'jennifer.adams@techcorp.com';

/**
 * Sets up the kiosk configuration in localStorage so that the app
 * doesn't redirect to the bootstrap page.
 */
export async function setupKioskConfig(page: Page): Promise<void> {
    await page.evaluate(() => {
        localStorage.setItem('KIOSK.building', 'bld-01');
        localStorage.setItem('KIOSK.level', 'lvl-01');
        localStorage.setItem('KIOSK.orientation', 'north');
    });
}

/**
 * Clears the kiosk configuration from localStorage
 */
export async function clearKioskConfig(page: Page): Promise<void> {
    // First go to bootstrap page with clear parameter to clear config
    await page.goto('/#/bootstrap?mock=true&clear=true');
    await page.waitForTimeout(1000);
}

/**
 * Navigates to a page with mock mode enabled and kiosk configuration pre-set.
 * This mimics how the kiosk would work when already bootstrapped.
 */
export async function navigateWithConfig(
    page: Page,
    url: string,
): Promise<void> {
    // First, go to bootstrap to establish the app on the correct origin
    await page.goto('/#/bootstrap?mock=true');
    await page.waitForTimeout(500);

    // Set the localStorage configuration
    await page.evaluate(() => {
        localStorage.setItem('KIOSK.building', 'bld-01');
        localStorage.setItem('KIOSK.level', 'lvl-01');
        localStorage.setItem('KIOSK.orientation', 'north');
    });

    // Now navigate to the target URL with mock mode
    const fullUrl = url.includes('?') ? `${url}&mock=true` : `${url}?mock=true`;
    await page.goto(fullUrl);

    // Wait a bit for the page to render
    await page.waitForTimeout(500);
}

/**
 * Waits for the app to be ready after navigation.
 * The GlobalLoadingComponent shows a loading overlay until auth is complete.
 */
export async function waitForAppReady(page: Page): Promise<void> {
    // Wait for the loading overlay to disappear
    await page
        .locator('[loader]')
        .waitFor({ state: 'hidden', timeout: LOAD_TIMEOUT })
        .catch(() => {});
    await page.waitForLoadState('networkidle');
}
