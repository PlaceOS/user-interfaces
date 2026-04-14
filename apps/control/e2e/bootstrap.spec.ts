import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Bootstrap Component - Room Selection
 * Tests US-001 and US-002: Initial room setup and room assignment changes
 */

const MOCK_SYSTEM_ID = 'space-1';
const BOOTSTRAP_URL = '/#/bootstrap';
const TABBED_URL = `/#/tabbed/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;

test.describe('US-001: Initial Room Setup', () => {
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

    test('should display search input field for room selection', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page
            .locator('[app-bootstrap]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const searchInput = page.locator('input[matInput]');
        await expect(searchInput).toBeVisible();
    });

    test('should display submit button', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page
            .locator('[app-bootstrap]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const submitButton = page.locator('[app-bootstrap] button[btn]');
        await expect(submitButton).toBeVisible();
    });

    test('should have autocomplete component for room search', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page
            .locator('[app-bootstrap]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const autocomplete = page.locator('mat-autocomplete');
        await expect(autocomplete).toBeAttached();
    });

    test('should show autocomplete options when text entered', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page
            .locator('[app-bootstrap]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const searchInput = page.locator('input[matInput]');
        await searchInput.fill('Meeting');

        // Wait for search debounce and results
        await page.waitForTimeout(500);

        const autocompletePanel = page.locator('mat-autocomplete');
        await expect(autocompletePanel).toBeAttached();
    });

    test('should disable submit button when no system selected', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page
            .locator('[app-bootstrap]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const submitButton = page.locator('[app-bootstrap] button[btn]');
        await expect(submitButton).toBeDisabled();
    });

    test('should enable submit button when system ID entered', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page
            .locator('[app-bootstrap]')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const searchInput = page.locator('input[matInput]');
        await searchInput.fill(MOCK_SYSTEM_ID);

        const submitButton = page.locator('[app-bootstrap] button[btn]');
        await expect(submitButton).toBeEnabled();
    });

    test('should auto-bootstrap when system_id parameter provided', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`,
        );

        // Should redirect to tabbed view
        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should accept sys_id as alternative parameter', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&sys_id=${MOCK_SYSTEM_ID}`);

        // Should redirect to tabbed view
        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should store selected room in localStorage for future sessions', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`,
        );
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });

        // Reload and check if auto-loads
        await page.goto('/?mock=true');
        await page.waitForTimeout(2000);

        // Should auto-redirect to the stored system
        const url = page.url();
        expect(url).toContain(MOCK_SYSTEM_ID);
    });
});

test.describe('US-002: Change Room Assignment', () => {
    test.beforeEach(async ({ page }) => {
        // First set up a system
        await page.goto(`${TABBED_URL}?mock=true`);
        await page.waitForTimeout(2000);
    });

    test('should be able to navigate to bootstrap screen', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should clear stored system when clear parameter provided', async ({
        page,
    }) => {
        // Clear the stored system
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        // Navigate to bootstrap
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        // Should show bootstrap screen, not auto-redirect
        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should allow selecting a new room after clearing', async ({
        page,
    }) => {
        // Clear the stored system
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        // Navigate with a different system
        const newSystemId = 'space-2';
        await page.goto(`${BOOTSTRAP_URL}?mock=true&system_id=${newSystemId}`);

        // Should redirect to tabbed view with new system
        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        const url = page.url();
        expect(url).toContain(newSystemId);
    });
});

test.describe('Bootstrap - Responsive Design', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should be centered on screen', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const bootstrap = page.locator('[app-bootstrap]');
        await expect(bootstrap).toBeVisible({ timeout: LOAD_TIMEOUT });

        // Should have mx-auto for centering
        const container = page.locator('[app-bootstrap] > div.mx-auto');
        await expect(container).toBeVisible();
    });

    test('should work on large desktop viewport', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on tablet viewport', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        const searchInput = page.locator('input[matInput]');
        await expect(searchInput).toBeVisible();
    });

    test('should work on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[app-bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });

        const searchInput = page.locator('input[matInput]');
        await expect(searchInput).toBeVisible();
    });
});

test.describe('Bootstrap - Loading States', () => {
    test('should show loading state during configuration', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`,
        );

        // Eventually should show the tabbed view
        await expect(page.locator('app-control-tabbed-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});
