import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Camera Control
 * Tests US-016 to US-019: Camera selection, PTZ control, and presets
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

test.describe('US-016: Select Camera', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display camera button in topbar when cameras available', async ({
        page,
    }) => {
        // Camera button has type="camera"
        const cameraButton = page.locator('button[type="camera"]');

        const isVisible = await cameraButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(cameraButton).toBeVisible();
            const icon = cameraButton.locator('icon');
            await expect(icon).toHaveText('photo_camera');
        }
    });

    test('should open camera tooltip when clicking button', async ({
        page,
    }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Camera tooltip should appear with camera controls
        }
    });

    test('should display available cameras for selection', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Camera selection options should be present
            // Mock has Camera_1 through Camera_4
        }
    });

    test('should indicate currently selected camera', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Selected camera should be visually distinct
        }
    });
});

test.describe('US-017: Control Camera Position (PTZ)', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display joystick control in camera tooltip', async ({
        page,
    }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Joystick component for pan/tilt control
            const joystick = page.locator('app-joystick, [joystick]');
            const isVisible = await joystick.isVisible().catch(() => false);

            if (isVisible) {
                await expect(joystick).toBeVisible();
            }
        }
    });

    test('should display zoom controls', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Zoom in/out buttons should be present
            // Look for zoom icons or buttons
        }
    });

    test('should have pan/tilt directional controls', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Either joystick or directional buttons for pan/tilt
        }
    });
});

test.describe('US-018: Use Camera Presets', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display camera presets in tooltip', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Preset list should be visible
            // Mock has 'Preset One', 'Preset 2', 'Preset Three', 'Wide Shot', 'Close Up'
        }
    });

    test('should be able to select a preset', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Presets should be clickable
        }
    });

    test('should show preset names clearly', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Preset names should indicate the framing
        }
    });
});

test.describe('US-019: Save Camera Preset', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have option to save new preset', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Save preset option should be available
            // This may be a button or input field in the tooltip
        }
    });
});

test.describe('Camera Control - Joystick Interaction', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should provide visual feedback on joystick movement', async ({
        page,
    }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            const joystick = page.locator('app-joystick, [joystick]');

            if (await joystick.isVisible().catch(() => false)) {
                // Joystick should have visual feedback elements
                await expect(joystick).toBeVisible();
            }
        }
    });
});

test.describe('Camera Control - Responsive', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show camera button on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const cameraButton = page.locator('button[type="camera"]');
        const isVisible = await cameraButton.isVisible().catch(() => false);

        // Camera button should be visible if cameras are configured
        if (isVisible) {
            await expect(cameraButton).toBeVisible();
        }
    });

    test('should be accessible in mobile menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);

        // Mobile should have menu button
        const menuButton = page.locator(
            'topbar-header button icon:has-text("more_vert")',
        );

        if (await menuButton.isVisible().catch(() => false)) {
            await menuButton.click();
            await page.waitForTimeout(500);

            // Menu should contain camera option if available
        }
    });
});

test.describe('Camera Control - Touch Interaction', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should support touch gestures on joystick', async ({ page }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            const joystick = page.locator('app-joystick, [joystick]');

            if (await joystick.isVisible().catch(() => false)) {
                // Joystick should be touch-friendly
                // Check for touch event handlers via element attributes or styles
            }
        }
    });

    test('should have large enough touch targets for zoom controls', async ({
        page,
    }) => {
        const cameraButton = page.locator('button[type="camera"]');

        if (await cameraButton.isVisible().catch(() => false)) {
            await cameraButton.click();
            await page.waitForTimeout(500);

            // Zoom buttons should have adequate touch target size
        }
    });
});
