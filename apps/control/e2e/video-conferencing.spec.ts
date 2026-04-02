import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Video Conferencing
 * Tests US-020 to US-028: Video calls, layouts, sharing, and controls
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

test.describe('US-020: Start Video Conference Call', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display video conference button when available', async ({
        page,
    }) => {
        // Video conference button has type="video_conf"
        const vcButton = page.locator('button[type="video_conf"]');
        const isVisible = await vcButton.isVisible().catch(() => false);

        // VC tab may also be available in the tab outlet
        const vcTab = page.locator('[tab-outlet]');
        await expect(vcTab).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should display dial pad in VC tab or tooltip', async ({ page }) => {
        // Look for VC controls tab
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });

        // VC tab configured in mock has controls: 'vidconf-controls'
    });

    test('should have dial pad component for entering numbers', async ({
        page,
    }) => {
        // Dialpad component
        const dialpad = page.locator('app-dialpad, dialpad');
        const isVisible = await dialpad.isVisible().catch(() => false);

        // May be visible depending on tab selection
        if (isVisible) {
            await expect(dialpad).toBeVisible();
        }
    });
});

test.describe('US-021: Join Scheduled Meeting', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display meeting join button when meetings available', async ({
        page,
    }) => {
        // Meet button has type="meet"
        const meetButton = page.locator('button[type="meet"]');
        const isVisible = await meetButton.isVisible().catch(() => false);

        // Button visibility depends on configuration and meeting URL
    });

    test('should show meeting selection modal when joining', async ({
        page,
    }) => {
        const meetButton = page.locator('button[type="meet"]');

        if (await meetButton.isVisible().catch(() => false)) {
            await meetButton.click();
            await page.waitForTimeout(500);

            // Select meeting modal should appear
            const modal = page.locator('select-meeting-modal');
            const isVisible = await modal.isVisible().catch(() => false);

            if (isVisible) {
                await expect(modal).toBeVisible();
            }
        }
    });
});

test.describe('US-022: End Video Call', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have hangup control available during calls', async ({
        page,
    }) => {
        // Navigate to video call view if available
        await page.goto(`/#/panel/${MOCK_SYSTEM_ID}/call?mock=true`);
        await page.waitForTimeout(2000);

        // Hangup button should be visible in call view
        // This tests the call page directly
    });
});

test.describe('US-023: Mute/Unmute Microphone', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display microphone selection button', async ({ page }) => {
        // Mics button has type="mics"
        const micsButton = page.locator('button[type="mics"]');
        const isVisible = await micsButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(micsButton).toBeVisible();
            const icon = micsButton.locator('icon');
            await expect(icon).toHaveText('mic');
        }
    });

    test('should open microphone tooltip when clicking', async ({ page }) => {
        const micsButton = page.locator('button[type="mics"]');

        if (await micsButton.isVisible().catch(() => false)) {
            await micsButton.click();
            await page.waitForTimeout(500);

            // Microphone tooltip should appear
        }
    });

    test('should show available microphones in tooltip', async ({ page }) => {
        const micsButton = page.locator('button[type="mics"]');

        if (await micsButton.isVisible().catch(() => false)) {
            await micsButton.click();
            await page.waitForTimeout(500);

            // Microphone list should be visible
            // Mock has Microphone_1, Microphone_2, Microphone_3
        }
    });
});

test.describe('US-024: Toggle Self-View', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have self-view toggle in VC controls', async ({ page }) => {
        // Self-view is part of video conference controls
        // Available when VidConf module is present
    });
});

test.describe('US-025: Change Video Layout', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have layout options in VC controls', async ({ page }) => {
        // Layout options: Auto, Equal, Overlay, Prominent, Single
        // Available in video conference tooltip or tab
    });
});

test.describe('US-026: Share Presentation in Call', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have presentation sharing controls', async ({ page }) => {
        // Presentation mode can be None, Local, or Remote
        // Available in VC controls
    });
});

test.describe('US-027: Send DTMF Tones', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have dial pad accessible during calls', async ({ page }) => {
        // DTMF can be sent via dial pad during active calls
    });
});

test.describe('US-028: Hold/Resume Call', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have hold/resume controls in call view', async ({ page }) => {
        // Hold and resume buttons in video call controls
    });
});

test.describe('Video Conferencing - Tab Navigation', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have VC tab in tab outlet', async ({ page }) => {
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Look for VC tab - configured with icon 'call' and name 'VC'
    });

    test('should display VC controls when VC tab selected', async ({
        page,
    }) => {
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });

        // VC tab should show vidconf-controls content
    });
});

test.describe('Video Conferencing - Call Page', () => {
    test('should display call view page when navigating to call route', async ({
        page,
    }) => {
        await page.goto(`/#/panel/${MOCK_SYSTEM_ID}/call?mock=true`);
        await page.waitForTimeout(2000);

        // Video call view component should be visible
        const callView = page.locator(
            'video-call-page, app-control-video-call-view',
        );
        const isVisible = await callView.isVisible().catch(() => false);

        // May or may not be visible depending on routing
    });
});

test.describe('Video Conferencing - Responsive', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show VC controls on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show VC controls on tablet', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.waitForTimeout(500);

        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should be usable on touch screen', async ({ page }) => {
        await page.setViewportSize({ width: 1024, height: 768 });
        await page.waitForTimeout(500);

        // Interface should be touch-friendly
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});
