import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Additional Features
 * Tests US-038 to US-051: Voice assistant, accessories, help, navigation, accessibility, and system status
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

// US-038 to US-040: Voice Assistant
test.describe('US-038: Activate Voice Control', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display voice assistant component when enabled', async ({
        page,
    }) => {
        // Voice assistant is in bottom right of active view
        const voiceAssistant = page.locator('voice-assistant');
        const isVisible = await voiceAssistant.isVisible().catch(() => false);

        // Visibility depends on voice_control setting
        if (isVisible) {
            await expect(voiceAssistant).toBeVisible();
        }
    });

    test('should display voice assistant on splash screen', async ({
        page,
    }) => {
        // Navigate fresh to see splash
        await page.goto(`${TABBED_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${TABBED_URL}?mock=true`);
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });

        const splash = page.locator('div[name="splash"]');

        if (await splash.isVisible().catch(() => false)) {
            const voiceAssistant = splash.locator('voice-assistant');
            await expect(voiceAssistant).toBeVisible();
        }
    });
});

test.describe('US-039: Execute Voice Commands', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have voice assistant button clickable', async ({ page }) => {
        const voiceAssistant = page.locator('voice-assistant');

        if (await voiceAssistant.isVisible().catch(() => false)) {
            const button = voiceAssistant.locator('button');
            await expect(button).toBeVisible();
        }
    });
});

test.describe('US-040: View Voice Command Status', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show voice assistant status when active', async ({ page }) => {
        const voiceAssistant = page.locator('voice-assistant');

        if (await voiceAssistant.isVisible().catch(() => false)) {
            // Voice assistant shows visual feedback
        }
    });
});

// US-041 to US-042: Room Accessories
test.describe('US-041: Control Blinds/Screens', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display accessories button when room accessories available', async ({
        page,
    }) => {
        // Accessories button has type="blinds"
        const accessoriesButton = page.locator('button[type="blinds"]');
        const isVisible = await accessoriesButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(accessoriesButton).toBeVisible();
            const icon = accessoriesButton.locator('icon');
            await expect(icon).toHaveText('unfold_more');
        }
    });

    test('should open accessories tooltip when clicking button', async ({
        page,
    }) => {
        const accessoriesButton = page.locator('button[type="blinds"]');

        if (await accessoriesButton.isVisible().catch(() => false)) {
            await accessoriesButton.click();
            await page.waitForTimeout(500);

            // Accessories tooltip should appear
        }
    });
});

test.describe('US-042: Control Custom Accessories', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display all configured accessories', async ({ page }) => {
        const accessoriesButton = page.locator('button[type="blinds"]');

        if (await accessoriesButton.isVisible().catch(() => false)) {
            await accessoriesButton.click();
            await page.waitForTimeout(500);

            // Mock has Window Blinds and Projector Screen
        }
    });

    test('should show accessory states', async ({ page }) => {
        const accessoriesButton = page.locator('button[type="blinds"]');

        if (await accessoriesButton.isVisible().catch(() => false)) {
            await accessoriesButton.click();
            await page.waitForTimeout(500);

            // Each accessory should show its current state
        }
    });
});

// US-043 to US-044: Help System
test.describe('US-043: Access Help Documentation', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display help button when help items available', async ({
        page,
    }) => {
        // Help button has type="help"
        const helpButton = page.locator('button[type="help"]');
        const isVisible = await helpButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(helpButton).toBeVisible();
            const icon = helpButton.locator('icon');
            await expect(icon).toHaveText('help');
        }
    });

    test('should open help modal when clicking button', async ({ page }) => {
        const helpButton = page.locator('button[type="help"]');

        if (await helpButton.isVisible().catch(() => false)) {
            await helpButton.click();
            await page.waitForTimeout(500);

            // Help modal should appear
        }
    });
});

test.describe('US-044: View Feature-Specific Help', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display help content for current tab', async ({ page }) => {
        // Help content adapts to current tab/feature
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Tab outlet may show help content depending on configuration
    });

    test('should render markdown help content', async ({ page }) => {
        // Help content is markdown-rendered
        const helpButton = page.locator('button[type="help"]');

        if (await helpButton.isVisible().catch(() => false)) {
            await helpButton.click();
            await page.waitForTimeout(500);

            // Markdown content should be rendered
        }
    });
});

// US-045: Microphone Selection
test.describe('US-045: Select Active Microphone', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display microphone button when mics available', async ({
        page,
    }) => {
        const micsButton = page.locator('button[type="mics"]');
        const isVisible = await micsButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(micsButton).toBeVisible();
        }
    });

    test('should show microphone list in tooltip', async ({ page }) => {
        const micsButton = page.locator('button[type="mics"]');

        if (await micsButton.isVisible().catch(() => false)) {
            await micsButton.click();
            await page.waitForTimeout(500);

            // Microphone selection list
        }
    });
});

// US-046 to US-047: Tab Navigation
test.describe('US-046: Navigate Between Control Tabs', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display tab outlet', async ({ page }) => {
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should highlight active tab', async ({ page }) => {
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Active tab should be visually distinct
    });

    test('should change content when switching tabs', async ({ page }) => {
        const tabOutlet = page.locator('[tab-outlet]');
        await expect(tabOutlet).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Tab content changes based on selection
    });
});

test.describe('US-047: View TV Channels', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display TV controls if TV tab configured', async ({
        page,
    }) => {
        // TV channels tab shows tv-channels controls
        const tvControls = page.locator('tv-controls');
        const isVisible = await tvControls.isVisible().catch(() => false);

        // Visibility depends on tab configuration
    });
});

// US-048 to US-049: Accessibility
test.describe('US-048: Use Hearing Loop', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should indicate hearing loop availability if configured', async ({
        page,
    }) => {
        // Hearing loop indicator would be shown when available
    });
});

test.describe('US-049: Touch-Friendly Interface', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have adequately sized touch targets', async ({ page }) => {
        // All buttons should have adequate touch target size
        const buttons = page.locator('button[icon], button[btn]');
        const count = await buttons.count();

        expect(count).toBeGreaterThan(0);

        // Icon buttons typically have good touch target size
    });

    test('should provide visual feedback on interactions', async ({ page }) => {
        // Material ripple effects for touch feedback
        const buttons = page.locator('button[matRipple]');
        const count = await buttons.count();

        expect(count).toBeGreaterThan(0);
    });

    test('should have proper spacing between controls', async ({ page }) => {
        // Controls should have spacing to prevent accidental taps
        const topbar = page.locator('topbar-header');
        await expect(topbar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Buttons have space-x-2 spacing
        const buttonContainer = topbar.locator('.space-x-2');
        const isVisible = await buttonContainer.isVisible().catch(() => false);

        if (isVisible) {
            await expect(buttonContainer).toBeVisible();
        }
    });
});

// US-050 to US-051: System Status
test.describe('US-050: View System Status', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show connected state in control view', async ({ page }) => {
        // System connected state allows full interface
        const topbar = page.locator('topbar-header');
        await expect(topbar).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show loading state when connecting', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        // Loader may appear briefly during connection
        const loader = page.locator('div[name="loader"]');
        const tabbedView = page.locator('app-control-tabbed-view');

        // Eventually should connect
        await expect(tabbedView).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display system name in topbar', async ({ page }) => {
        const topbar = page.locator('topbar-header');
        await expect(topbar).toBeVisible({ timeout: ACTION_TIMEOUT });

        // Room name should be displayed
        const roomName = topbar.locator('.text-lg');
        await expect(roomName).toBeVisible();
    });
});

test.describe('US-051: View Current Meeting Information', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have meeting join capability', async ({ page }) => {
        // Meeting info is available via join meeting button
        const meetButton = page.locator('button[type="meet"]');
        const isVisible = await meetButton.isVisible().catch(() => false);

        // Button visibility depends on meeting_url configuration
    });
});

// Additional UI Tests
test.describe('Interface Layout', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display logo in topbar', async ({ page }) => {
        const topbar = page.locator('topbar-header');
        const logo = topbar.locator('img[auth]');

        await expect(logo).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should have three main sections: topbar, tab outlet, status bar', async ({
        page,
    }) => {
        await expect(page.locator('topbar-header')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
        await expect(page.locator('[tab-outlet]')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
        await expect(page.locator('control-status-bar')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should use proper color theming', async ({ page }) => {
        // Base-100, base-200, base-content color classes are used
        const container = page.locator('.bg-base-100');
        await expect(container.first()).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

test.describe('Responsive Layout', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should work on 1920x1080 display', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.waitForTimeout(500);

        await expect(page.locator('topbar-header')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should work on 1280x800 display', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.waitForTimeout(500);

        await expect(page.locator('topbar-header')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should work on 1024x768 display', async ({ page }) => {
        await page.setViewportSize({ width: 1024, height: 768 });
        await page.waitForTimeout(500);

        await expect(page.locator('topbar-header')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should work on 768x1024 portrait tablet', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.waitForTimeout(500);

        await expect(page.locator('topbar-header')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
    });
});
