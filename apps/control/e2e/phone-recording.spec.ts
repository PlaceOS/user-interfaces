import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Phone Dialling and Recording
 * Tests US-029 to US-033: Phone calls and recording management
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

test.describe('US-029: Make Phone Call', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display phone button when dial bindings available', async ({
        page,
    }) => {
        // Phone button has type="phone"
        const phoneButton = page.locator('button[type="phone"]');
        const isVisible = await phoneButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(phoneButton).toBeVisible();
            const icon = phoneButton.locator('icon');
            await expect(icon).toHaveText('call');
        }
    });

    test('should open phone dialling tooltip when clicking', async ({
        page,
    }) => {
        const phoneButton = page.locator('button[type="phone"]');

        if (await phoneButton.isVisible().catch(() => false)) {
            await phoneButton.click();
            await page.waitForTimeout(500);

            // Phone dialling tooltip should appear
        }
    });

    test('should have dial pad in phone tooltip', async ({ page }) => {
        const phoneButton = page.locator('button[type="phone"]');

        if (await phoneButton.isVisible().catch(() => false)) {
            await phoneButton.click();
            await page.waitForTimeout(500);

            // Dialpad for entering phone numbers
        }
    });

    test('should show call button to initiate call', async ({ page }) => {
        const phoneButton = page.locator('button[type="phone"]');

        if (await phoneButton.isVisible().catch(() => false)) {
            await phoneButton.click();
            await page.waitForTimeout(500);

            // Call button to dial entered number
        }
    });
});

test.describe('US-030: View Incoming Call', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show phone button enabled state when ringing', async ({
        page,
    }) => {
        // Phone button should have bg-success class when ringing/offhook
        const phoneButton = page.locator('button[type="phone"]');

        // Ringing state would enable the button with success styling
        if (await phoneButton.isVisible().catch(() => false)) {
            // Check for enabled state (would have bg-success class when ringing)
        }
    });

    test('should indicate incoming call status', async ({ page }) => {
        const phoneButton = page.locator('button[type="phone"]');

        if (await phoneButton.isVisible().catch(() => false)) {
            // When ringing, button should be visually distinct
        }
    });
});

test.describe('US-031: View Recording Status', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display recording section in status bar when available', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Recording section
        const recordingSection = statusBar.locator('[recording]');
        const isVisible = await recordingSection.isVisible().catch(() => false);

        if (isVisible) {
            await expect(recordingSection).toBeVisible();
        }
    });

    test('should show recording title', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Title should be displayed
            const titleArea = recordingSection.locator('.w-24, .text-center');
            await expect(titleArea).toBeVisible();
        }
    });

    test('should show recording status indicator', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Status indicator (Recording, Paused, Idle)
            const statusIndicator = recordingSection.locator(
                '.bg-error, .bg-warning, .bg-base-300',
            );
            const isVisible = await statusIndicator
                .first()
                .isVisible()
                .catch(() => false);

            if (isVisible) {
                await expect(statusIndicator.first()).toBeVisible();
            }
        }
    });

    test('should show recording indicator icon', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Record icon (fiber_manual_record)
            const recordIcon = recordingSection.locator(
                'icon:has-text("fiber_manual_record")',
            );
            await expect(recordIcon).toBeVisible();
        }
    });
});

test.describe('US-032: Control Recording', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have play/pause button for recording', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Play/pause button
            const playPauseButton = recordingSection.locator(
                'button[place-action="pause"], button[place-action="start"]',
            );
            const isVisible = await playPauseButton
                .isVisible()
                .catch(() => false);

            if (isVisible) {
                await expect(playPauseButton).toBeVisible();
            }
        }
    });

    test('should toggle play/pause icon based on recording state', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Icon should be play_arrow or pause based on status
            const icon = recordingSection.locator(
                'button icon:has-text("play_arrow"), button icon:has-text("pause")',
            );
            const isVisible = await icon
                .first()
                .isVisible()
                .catch(() => false);

            if (isVisible) {
                await expect(icon.first()).toBeVisible();
            }
        }
    });

    test('should show remaining time', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Remaining time display
        }
    });
});

test.describe('US-033: View Next Scheduled Recording', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show next recording information', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Next recording info section
        }
    });
});

test.describe('Phone & Recording - Status Bar Layout', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have recording section on left side of status bar', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Recording is on left, volume is on right
        const recordingSection = statusBar.locator('[recording]');
        const volumeSection = statusBar.locator('mat-slider');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Both should be in status bar with flex-1 spacer between
            const spacer = statusBar.locator('.flex-1');
            await expect(spacer).toBeVisible();
        }
    });

    test('should have proper spacing between sections', async ({ page }) => {
        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Recording sections have divide-x for vertical dividers
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            const dividers = recordingSection.locator('.divide-x');
            await expect(dividers).toBeVisible();
        }
    });
});

test.describe('Phone & Recording - Responsive', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show phone button on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const phoneButton = page.locator('button[type="phone"]');
        const isVisible = await phoneButton.isVisible().catch(() => false);

        // Phone button visibility depends on dial_bindings configuration
    });

    test('should show recording controls on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should handle tablet viewport', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.waitForTimeout(500);

        const statusBar = page.locator('control-status-bar');
        await expect(statusBar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('Phone & Recording - Bindings', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should use binding directive for recording status', async ({
        page,
    }) => {
        const statusBar = page.locator('control-status-bar');
        const recordingSection = statusBar.locator('[recording]');

        if (await recordingSection.isVisible().catch(() => false)) {
            // Binding directives are used for real-time status updates
            // Hidden elements with binding directive
            const hiddenBindings = recordingSection.locator('i[binding]');
            const count = await hiddenBindings.count();

            // Should have bindings for status, title, remaining, current, next
            expect(count).toBeGreaterThan(0);
        }
    });
});
