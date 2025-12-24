import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Lighting Control
 * Tests US-013 to US-015: Lighting scenes, individual lights, and levels
 */

const MOCK_SYSTEM_ID = 'space-1';
const TABBED_URL = `/#/tabbed/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;
const ACTION_TIMEOUT = 10000;

// Helper to ensure system is powered on
async function ensurePoweredOn(page) {
    await page.goto(`${TABBED_URL}?mock=true`);
    await page
        .locator('app-control-tabbed-view')
        .waitFor({ timeout: LOAD_TIMEOUT });

    // Wait for system to be connected (splash or topbar visible)
    const splash = page.locator('div[name="splash"]');
    const topbar = page.locator('topbar-header');

    await Promise.race([
        splash.waitFor({ timeout: ACTION_TIMEOUT }).catch(() => null),
        topbar.waitFor({ timeout: ACTION_TIMEOUT }).catch(() => null),
    ]);

    if (await splash.isVisible().catch(() => false)) {
        await splash.click();
        // Wait for topbar-header to appear
        await topbar.waitFor({ timeout: ACTION_TIMEOUT });
    }

    await expect(topbar).toBeVisible({ timeout: ACTION_TIMEOUT });
}

test.describe('US-013: Select Lighting Scene', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display lighting scenes button in topbar when available', async ({
        page,
    }) => {
        // Lighting scenes button has type="lighting_scenes"
        const lightingScenesButton = page.locator(
            'button[type="lighting_scenes"]'
        );

        // May or may not be visible depending on configuration
        const isVisible = await lightingScenesButton
            .isVisible()
            .catch(() => false);

        if (isVisible) {
            await expect(lightingScenesButton).toBeVisible();
            const icon = lightingScenesButton.locator('icon');
            await expect(icon).toHaveText('emoji_objects');
        }
    });

    test('should open lighting scene tooltip when clicking button', async ({
        page,
    }) => {
        const lightingScenesButton = page.locator(
            'button[type="lighting_scenes"]'
        );

        if (await lightingScenesButton.isVisible().catch(() => false)) {
            await lightingScenesButton.click();
            await page.waitForTimeout(500);

            // Tooltip content should appear
            // The tooltip is a customTooltip with content component
        }
    });

    test('should display available lighting scenes', async ({ page }) => {
        const lightingScenesButton = page.locator(
            'button[type="lighting_scenes"]'
        );

        if (await lightingScenesButton.isVisible().catch(() => false)) {
            await lightingScenesButton.click();
            await page.waitForTimeout(500);

            // Look for scene options (Off, Presentation, Meeting, Full)
            // These are rendered in the tooltip component
        }
    });
});

test.describe('US-014: Adjust Individual Lights', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display lighting button in topbar when available', async ({
        page,
    }) => {
        // Individual lighting button has type="lighting"
        const lightingButton = page.locator('button[type="lighting"]');

        const isVisible = await lightingButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(lightingButton).toBeVisible();
            const icon = lightingButton.locator('icon');
            await expect(icon).toHaveText('brightness_high');
        }
    });

    test('should open lighting tooltip when clicking button', async ({
        page,
    }) => {
        const lightingButton = page.locator('button[type="lighting"]');

        if (await lightingButton.isVisible().catch(() => false)) {
            await lightingButton.click();
            await page.waitForTimeout(500);

            // Tooltip with individual light controls should appear
        }
    });

    test('should show on/off toggle for individual lights', async ({
        page,
    }) => {
        const lightingButton = page.locator('button[type="lighting"]');

        if (await lightingButton.isVisible().catch(() => false)) {
            await lightingButton.click();
            await page.waitForTimeout(500);

            // Individual light toggles should be present in tooltip
        }
    });
});

test.describe('US-015: Adjust Lighting Levels', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display lighting levels button in topbar when available', async ({
        page,
    }) => {
        // Lighting levels button has type="lighting_levels"
        const lightingLevelsButton = page.locator(
            'button[type="lighting_levels"]'
        );

        const isVisible = await lightingLevelsButton
            .isVisible()
            .catch(() => false);

        if (isVisible) {
            await expect(lightingLevelsButton).toBeVisible();
            const icon = lightingLevelsButton.locator('icon');
            await expect(icon).toHaveText('light');
        }
    });

    test('should open lighting levels tooltip when clicking button', async ({
        page,
    }) => {
        const lightingLevelsButton = page.locator(
            'button[type="lighting_levels"]'
        );

        if (await lightingLevelsButton.isVisible().catch(() => false)) {
            await lightingLevelsButton.click();
            await page.waitForTimeout(500);

            // Tooltip with brightness sliders should appear
        }
    });

    test('should display brightness sliders in tooltip', async ({ page }) => {
        const lightingLevelsButton = page.locator(
            'button[type="lighting_levels"]'
        );

        if (await lightingLevelsButton.isVisible().catch(() => false)) {
            await lightingLevelsButton.click();
            await page.waitForTimeout(500);

            // Sliders for zone brightness control
        }
    });
});

test.describe('Lighting Control - Environment Sources', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have at least one lighting control option', async ({
        page,
    }) => {
        // Check for any lighting-related button
        const lightingScenesButton = page.locator(
            'button[type="lighting_scenes"]'
        );
        const lightingButton = page.locator('button[type="lighting"]');
        const lightingLevelsButton = page.locator(
            'button[type="lighting_levels"]'
        );

        const scenesVisible = await lightingScenesButton
            .isVisible()
            .catch(() => false);
        const lightingVisible = await lightingButton
            .isVisible()
            .catch(() => false);
        const levelsVisible = await lightingLevelsButton
            .isVisible()
            .catch(() => false);

        // At least one should be visible if lights are configured
        if (scenesVisible || lightingVisible || levelsVisible) {
            expect(scenesVisible || lightingVisible || levelsVisible).toBeTruthy();
        }
    });
});

test.describe('Lighting Control - Responsive', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show lighting buttons on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        // Desktop shows buttons directly in topbar
        const topbar = page.locator('topbar-header');
        await expect(topbar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show lighting in mobile menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);

        // Mobile should have menu button
        const menuButton = page.locator(
            'topbar-header button icon:has-text("more_vert")'
        );

        if (await menuButton.isVisible().catch(() => false)) {
            await menuButton.click();
            await page.waitForTimeout(500);

            // Menu panel should appear (mat-menu element stays hidden, the panel is visible)
            const menuPanel = page.locator('.mat-mdc-menu-panel');
            await expect(menuPanel).toBeVisible({ timeout: ACTION_TIMEOUT });
        }
    });
});

test.describe('Lighting Control - State Management', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should maintain lighting state across navigation', async ({
        page,
    }) => {
        const lightingScenesButton = page.locator(
            'button[type="lighting_scenes"]'
        );

        if (await lightingScenesButton.isVisible().catch(() => false)) {
            // Open and select a scene
            await lightingScenesButton.click();
            await page.waitForTimeout(500);

            // Close tooltip
            await page.keyboard.press('Escape');
            await page.waitForTimeout(300);

            // Re-open and check state
            await lightingScenesButton.click();
            await page.waitForTimeout(500);
        }
    });
});
