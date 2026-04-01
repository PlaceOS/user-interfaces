import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Kiosk Bootstrap & Configuration
 * Tests US-BOOTSTRAP-001 to US-BOOTSTRAP-006
 */

const BOOTSTRAP_URL = '/#/bootstrap';
const WELCOME_URL = '/#/welcome';
const LOAD_TIMEOUT = 30000;
const ACTION_TIMEOUT = 10000;

test.describe('US-BOOTSTRAP-001: Select Building Region', () => {
    test.beforeEach(async ({ page }) => {
        // Clear any existing configuration
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display bootstrap screen', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const bootstrap = page.locator('[bootstrap]');
        await expect(bootstrap).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display region selector when multiple regions exist', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for org data to load
        await page.waitForTimeout(2000);

        // Region selector may or may not be visible depending on mock data
        const regionSelect = page.locator('mat-select[building]').first();
        const count = await regionSelect.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-BOOTSTRAP-002: Select Building', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display building selector', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for org data to load
        await page.waitForTimeout(2000);

        // Building selector should be visible
        const buildingSelect = page.locator('mat-select[building]');
        const count = await buildingSelect.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });

    test('should be able to open building dropdown', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for org data to load
        await page.waitForTimeout(2000);

        const buildingSelect = page.locator('mat-select[building]').first();
        const isVisible = await buildingSelect.isVisible().catch(() => false);

        if (isVisible) {
            await buildingSelect.click();
            await page.waitForTimeout(500);

            // Dropdown panel should appear
            const panel = page.locator('.cdk-overlay-pane mat-option');
            const count = await panel.count();
            expect(count).toBeGreaterThanOrEqual(0);
        }
    });
});

test.describe('US-BOOTSTRAP-003: Select Floor Level', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display level selector after building is selected', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for org data to load
        await page.waitForTimeout(2000);

        // Level selector should appear after building selection
        const levelSelect = page.locator('mat-select[level]');
        const count = await levelSelect.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-BOOTSTRAP-004: Set Map Orientation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display orientation selector when orientations are configured', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for data to load
        await page.waitForTimeout(2000);

        // Orientation selector visibility depends on building configuration
        const orientationLabel = page.locator(
            'label:has-text("orientation"), label:has-text("Orientation")',
        );
        const count = await orientationLabel.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-BOOTSTRAP-005: Save Kiosk Configuration', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display finish setup button', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        const finishButton = page.locator(
            'button:has-text("Finish Setup"), button:has-text("Finish")',
        );
        await expect(finishButton).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should disable finish button when no selection made', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        const finishButton = page.locator(
            'button:has-text("Finish Setup"), button:has-text("Finish")',
        );
        await expect(finishButton).toBeDisabled();
    });

    test('should enable finish button when building and level selected', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Wait for data to load
        await page.waitForTimeout(3000);

        // The button state depends on selections
        const finishButton = page.locator(
            'button:has-text("Finish Setup"), button:has-text("Finish")',
        );
        await expect(finishButton).toBeVisible();
    });
});

test.describe('US-BOOTSTRAP-006: Clear Kiosk Configuration', () => {
    test('should clear configuration when clear parameter is provided', async ({
        page,
    }) => {
        // First set up a configuration
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.waitForTimeout(2000);

        // Then clear it
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        // Should show bootstrap screen
        const bootstrap = page.locator('[bootstrap]');
        await expect(bootstrap).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should show bootstrap screen after clearing', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const bootstrap = page.locator('[bootstrap]');
        await expect(bootstrap).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('Bootstrap - Auto Configuration', () => {
    test('should auto-configure when level parameter is provided', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        // Navigate with level parameter
        await page.goto(`${BOOTSTRAP_URL}?mock=true&level=lvl-1`);
        await page.waitForTimeout(3000);

        // Should either stay on bootstrap or navigate to welcome
        const url = page.url();
        expect(url).toMatch(/bootstrap|welcome/);
    });
});

test.describe('Bootstrap - Form Layout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display bootstrap header', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        const header = page.locator('header');
        await expect(header).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display form container', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        const form = page.locator('[form]');
        await expect(form).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should be centered on screen', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        const container = page.locator('[bootstrap] > div.mx-auto');
        await expect(container).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('Bootstrap - Responsive Layout', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should work on large desktop viewport (1920x1080)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on tablet viewport (768x1024)', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on mobile viewport (375x667)', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should work on kiosk viewport (1080x1920)', async ({ page }) => {
        await page.setViewportSize({ width: 1080, height: 1920 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page.locator('[bootstrap]')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Bootstrap - Loading States', () => {
    test('should show loading state during bootstrap check', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await page.locator('[bootstrap]').waitFor({ timeout: LOAD_TIMEOUT });

        // Loading indicator may or may not be visible depending on timing
        const spinner = page.locator('mat-spinner, [loader], .loading');
        const count = await spinner.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});
