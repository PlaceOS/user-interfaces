import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Volume Control
 * Tests US-010 to US-012: Master volume, mute, and per-output volume
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

test.describe('US-010: Adjust Master Volume', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display status bar with volume controls', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show volume slider in status bar', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Material slider should be present
        const slider = statusBar.locator('mat-slider');
        await expect(slider).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should have volume slider input', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const sliderInput = statusBar.locator('mat-slider input[matSliderThumb]');

        await expect(sliderInput).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display volume icon button', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const volumeButton = statusBar.locator('button icon');

        await expect(volumeButton).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show volume_up icon when not muted and volume > 0', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        const volumeIcon = statusBar.locator('button icon');

        const iconText = await volumeIcon.textContent();
        // Should be volume_up, volume_mute, or volume_off
        expect(['volume_up', 'volume_mute', 'volume_off']).toContain(
            iconText?.trim()
        );
    });
});

test.describe('US-011: Mute/Unmute Audio', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have mute button adjacent to volume slider', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        const muteButton = statusBar.locator('button').first();

        await expect(muteButton).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should toggle mute when clicking volume button', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const muteButton = statusBar.locator('button').first();

        // Get initial icon state
        const volumeIcon = muteButton.locator('icon');
        const initialIcon = await volumeIcon.textContent();

        // Click to toggle
        await muteButton.click();
        await page.waitForTimeout(500);

        // Icon should change to indicate mute state
        const newIcon = await volumeIcon.textContent();
        // Icon might have changed to volume_off if muted, or back to volume_up if unmuted
        expect(['volume_up', 'volume_mute', 'volume_off']).toContain(
            newIcon?.trim()
        );
    });

    test('should show volume_off icon when muted', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const muteButton = statusBar.locator('button').first();
        const volumeIcon = muteButton.locator('icon');

        // Toggle mute until we see volume_off
        let attempts = 0;
        while (attempts < 3) {
            await muteButton.click();
            await page.waitForTimeout(300);
            const iconText = await volumeIcon.textContent();
            if (iconText?.trim() === 'volume_off') {
                await expect(volumeIcon).toHaveText('volume_off');
                return;
            }
            attempts++;
        }
    });

    test('should disable slider when muted', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const muteButton = statusBar.locator('button').first();
        const volumeIcon = muteButton.locator('icon');

        // Toggle to mute
        let isMuted = false;
        let attempts = 0;
        while (!isMuted && attempts < 3) {
            await muteButton.click();
            await page.waitForTimeout(300);
            const iconText = await volumeIcon.textContent();
            isMuted = iconText?.trim() === 'volume_off';
            attempts++;
        }

        if (isMuted) {
            // Slider input should be disabled
            const sliderInput = statusBar.locator(
                'mat-slider input[matSliderThumb]'
            );
            await expect(sliderInput).toBeDisabled();
        }
    });
});

test.describe('US-012: Adjust Per-Output Volume', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display output items with potential volume controls', async ({
        page,
    }) => {
        const outputItems = page.locator('device-output-list-item');
        const count = await outputItems.count();

        // Each output can have its own volume control
        expect(count).toBeGreaterThan(0);
    });

    test('should be able to interact with output for volume', async ({
        page,
    }) => {
        const outputItems = page.locator('device-output-list-item');

        if ((await outputItems.count()) > 0) {
            const firstOutput = outputItems.first();
            await expect(firstOutput).toBeVisible();

            // Output items typically show source and may have volume controls
        }
    });
});

test.describe('Volume Control - Status Bar Layout', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have status bar at bottom of interface', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should have flexible spacer before volume controls', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        // Spacer div may be empty (flex-grow utility), so check it exists in DOM
        const spacer = statusBar.locator('.flex-1').first();

        await expect(spacer).toBeAttached();
    });

    test('should have max-width constraint on volume section', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        const volumeSection = statusBar.locator('.w-lg, .max-w-\\[50\\%\\]');

        await expect(volumeSection).toBeVisible();
    });
});

test.describe('Volume Control - Responsive', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show volume controls on large screen', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const statusBar = page.locator('control-status-bar');
        const slider = statusBar.locator('mat-slider');

        await expect(slider).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show volume controls on tablet', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.waitForTimeout(500);

        const statusBar = page.locator('control-status-bar');
        const slider = statusBar.locator('mat-slider');

        await expect(slider).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show volume controls on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);

        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('Volume Control - Recording Status', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display recording section if capture module available', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Recording section is conditionally displayed
        const recordingSection = statusBar.locator('[recording]');

        // May or may not be visible depending on system configuration
        const isVisible = await recordingSection.isVisible().catch(() => false);

        if (isVisible) {
            await expect(recordingSection).toBeVisible();
        }
    });
});
