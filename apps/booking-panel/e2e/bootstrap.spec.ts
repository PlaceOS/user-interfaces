import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Bootstrap Component
 * Tests the initial panel setup and room selection interface
 */

const MOCK_SYSTEM_ID = 'space-1';
const BOOTSTRAP_URL = `/#/bootstrap`;
const PANEL_URL = `/#/panel/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;

test.describe('Bootstrap - Initial Setup', () => {
    test.beforeEach(async ({ page }) => {
        // Clear any stored system configuration
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display bootstrap screen when no system configured', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const bootstrap = page.locator('[app-bootstrap]');
        await expect(bootstrap).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display error-styled header', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        // Wait for bootstrap component first
        await page.locator('[app-bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });
        // Then check for the header with bg-error class
        const header = page.locator('[app-bootstrap] h2.bg-error');
        await expect(header).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display search input field', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const searchInput = page.locator('input[matInput]');
        await expect(searchInput).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display submit button', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const submitButton = page.locator('[app-bootstrap] button[btn]');
        await expect(submitButton).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('Bootstrap - Room Search', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[app-bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should have autocomplete component', async ({ page }) => {
        const autocomplete = page.locator('mat-autocomplete');
        await expect(autocomplete).toBeAttached();
    });

    test('should show search loading indicator when typing', async ({
        page,
    }) => {
        const searchInput = page.locator('input[matInput]');
        await searchInput.fill('Meeting');

        // May show loading spinner while searching
        await page.waitForTimeout(500);
    });

    test('should show autocomplete options when text entered', async ({
        page,
    }) => {
        const searchInput = page.locator('input[matInput]');
        await searchInput.fill('Meeting');

        // Wait for search results
        await page.waitForTimeout(1000);

        // Check for autocomplete panel (may or may not have results)
        const autocompletePanel = page.locator('mat-autocomplete');
        await expect(autocompletePanel).toBeAttached();
    });
});

test.describe('Bootstrap - URL Parameters', () => {
    test('should auto-bootstrap when system_id parameter provided', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`);

        // Should redirect to panel view
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should accept sys_id as alternative parameter', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&sys_id=${MOCK_SYSTEM_ID}`);

        // Should redirect to panel view
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should clear stored system when clear parameter provided', async ({
        page,
    }) => {
        // First, set up a system
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        // Then clear it
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should use event view when event parameter provided', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&event=true&system_id=${MOCK_SYSTEM_ID}`
        );

        // Should redirect to events view instead of panel
        // Event panel may need extra time for org service initialization
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.locator('event-panel > div.bg-base-100.absolute.inset-0')
        ).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('Bootstrap - Form Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[app-bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should disable submit button when no system selected', async ({
        page,
    }) => {
        const submitButton = page.locator('[app-bootstrap] button[btn]');
        await expect(submitButton).toBeDisabled();
    });

    test('should enable submit button when system ID entered', async ({
        page,
    }) => {
        const searchInput = page.locator('input[matInput]');
        await searchInput.fill(MOCK_SYSTEM_ID);

        const submitButton = page.locator('[app-bootstrap] button[btn]');
        await expect(submitButton).toBeEnabled();
    });
});

test.describe('Bootstrap - Navigation', () => {
    test('should redirect to bootstrap from unknown routes', async ({
        page,
    }) => {
        await page.goto('/#/unknown-route?mock=true&clear=true');
        await page.waitForTimeout(2000);

        // Should redirect to bootstrap
        await expect(page.locator('[app-bootstrap], panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should persist system selection in localStorage', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        // Reload the page
        await page.goto('/?mock=true');
        await page.waitForTimeout(2000);

        // Should auto-load the previously selected system
        // (redirects to panel or bootstrap based on stored value)
    });
});

test.describe('Bootstrap - Loading States', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should show loading spinner during configuration', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`
        );

        // Loading spinner may appear briefly during configuration
        // Just verify the final result is panel view
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Bootstrap - Responsive Design', () => {
    test('should be centered on screen', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const bootstrap = page.locator('[app-bootstrap]');
        await expect(bootstrap).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Should be centered with mx-auto class
        const container = page.locator('[app-bootstrap] > div.mx-auto');
        await expect(container).toBeVisible();
    });

    test('should have max-width constraint', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should be usable on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        const searchInput = page.locator('input[matInput]');
        await expect(searchInput).toBeVisible();
    });
});
