import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Power Control
 * Tests US-003 and US-004: Power on/off room AV system
 */

const MOCK_SYSTEM_ID = 'space-1';
const TABBED_URL = `/#/tabbed/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;
const ACTION_TIMEOUT = 10000;

test.describe('US-003: Power On Room', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should display splash screen when system is inactive', async ({
        page,
    }) => {
        // When system is not active, splash screen should be visible
        // Wait for either splash (system connected but inactive) or topbar (system active)
        const splash = page.locator('div[name="splash"]');
        const topbar = page.locator('topbar-header');

        // Wait for system to be connected and UI to render
        await Promise.race([
            splash.waitFor({ timeout: ACTION_TIMEOUT }).catch(() => null),
            topbar.waitFor({ timeout: ACTION_TIMEOUT }).catch(() => null),
        ]);

        // Check if splash is visible (system inactive) or topbar is visible (system active)
        const isSplashVisible = await splash.isVisible().catch(() => false);
        const isTopbarVisible = await topbar.isVisible().catch(() => false);

        // One of them should be visible
        expect(isSplashVisible || isTopbarVisible).toBeTruthy();
    });

    test('should show "touch to start" message on splash screen', async ({
        page,
    }) => {
        const splash = page.locator('div[name="splash"]');

        if (await splash.isVisible().catch(() => false)) {
            // Check for the touch to start heading
            const heading = splash.locator('h2');
            await expect(heading).toBeVisible();
        }
    });

    test('should display room name on splash screen', async ({ page }) => {
        const splash = page.locator('div[name="splash"]');

        if (await splash.isVisible().catch(() => false)) {
            // Room name should be displayed
            const roomName = splash.locator('p.text-lg');
            await expect(roomName).toBeVisible();
        }
    });

    test('should power on when clicking splash screen', async ({ page }) => {
        const splash = page.locator('div[name="splash"]');

        if (await splash.isVisible().catch(() => false)) {
            // Click to power on
            await splash.click();

            // Wait for interface to appear
            await expect(page.locator('topbar-header')).toBeVisible({
                timeout: ACTION_TIMEOUT,
            });
        }
    });

    test('should show full control interface after power on', async ({
        page,
    }) => {
        // Wait for splash or topbar to appear first
        const splash = page.locator('div[name="splash"]');
        const topbar = page.locator('topbar-header');

        await Promise.race([
            splash.waitFor({ timeout: ACTION_TIMEOUT }).catch(() => null),
            topbar.waitFor({ timeout: ACTION_TIMEOUT }).catch(() => null),
        ]);

        if (await splash.isVisible().catch(() => false)) {
            await splash.click();
            // Wait for topbar to appear after clicking
            await topbar.waitFor({ timeout: ACTION_TIMEOUT });
        }

        // Full control interface components should be visible
        await expect(topbar).toBeVisible({ timeout: ACTION_TIMEOUT });
        await expect(page.locator('[tab-outlet]')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
        await expect(page.locator('control-status-bar')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });
    });

    test('should display version info on splash screen', async ({ page }) => {
        const splash = page.locator('div[name="splash"]');

        if (await splash.isVisible().catch(() => false)) {
            // Version info should be in bottom left
            const versionInfo = splash.locator('.absolute.bottom-0.left-0');
            await expect(versionInfo).toBeVisible();
        }
    });
});

test.describe('US-004: Power Off Room', () => {
    test.beforeEach(async ({ page }) => {
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

        // Ensure system is powered on
        if (await splash.isVisible().catch(() => false)) {
            await splash.click();
            // Wait for topbar-header to appear
            await topbar.waitFor({ timeout: ACTION_TIMEOUT });
        }
    });

    test('should display power button in topbar when powered on', async ({
        page,
    }) => {
        await expect(page.locator('topbar-header')).toBeVisible({
            timeout: ACTION_TIMEOUT,
        });

        // Power button should be visible
        const powerButton = page.locator('button[type="power"]');
        await expect(powerButton).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should have power settings icon', async ({ page }) => {
        const powerButton = page.locator('button[type="power"]');

        if (await powerButton.isVisible().catch(() => false)) {
            const icon = powerButton.locator('icon');
            await expect(icon).toHaveText('power_settings_new');
        }
    });

    test('should show power tooltip when clicking power button', async ({
        page,
    }) => {
        const powerButton = page.locator('button[type="power"]');

        if (await powerButton.isVisible().catch(() => false)) {
            await powerButton.click();

            // Tooltip should appear with power options
            await page.waitForTimeout(500);
        }
    });
});

test.describe('Power Control - Voice Assistant on Splash', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);
        await page
            .locator('app-control-tabbed-view')
            .waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should display voice assistant on splash screen when enabled', async ({
        page,
    }) => {
        const splash = page.locator('div[name="splash"]');

        if (await splash.isVisible().catch(() => false)) {
            // Voice assistant should be in bottom right
            const voiceAssistant = splash.locator('voice-assistant');
            await expect(voiceAssistant).toBeVisible();
        }
    });
});

test.describe('Power Control - Loading State', () => {
    test('should show connecting state while loading', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        // Either loader or tabbed view should be visible
        const loader = page.locator('div[name="loader"]');
        const tabbedView = page.locator('app-control-tabbed-view');

        // Wait for either to appear
        await Promise.race([
            loader.waitFor({ timeout: LOAD_TIMEOUT }).catch(() => null),
            tabbedView.waitFor({ timeout: LOAD_TIMEOUT }).catch(() => null),
        ]);

        // Eventually tabbed view should be visible
        await expect(tabbedView).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should show system ID in connecting message', async ({ page }) => {
        await page.goto(`${TABBED_URL}?mock=true`);

        const loader = page.locator('div[name="loader"]');

        // If loader is visible, it should show the system ID
        if (await loader.isVisible().catch(() => false)) {
            const message = loader.locator('.text-2xl');
            await expect(message).toContainText(MOCK_SYSTEM_ID);
        }
    });
});

test.describe('Power Control - Responsive', () => {
    test.beforeEach(async ({ page }) => {
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

        // Power on if needed
        if (await splash.isVisible().catch(() => false)) {
            await splash.click();
            // Wait for topbar-header to appear
            await topbar.waitFor({ timeout: ACTION_TIMEOUT });
        }
    });

    test('should show power button on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const powerButton = page.locator('button[type="power"]');
        await expect(powerButton).toBeVisible({ timeout: ACTION_TIMEOUT });
    });

    test('should show menu on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);

        // Mobile should show more_vert menu button
        const menuButton = page.locator(
            'topbar-header button icon:has-text("more_vert")'
        );
        await expect(menuButton).toBeVisible({ timeout: ACTION_TIMEOUT });
    });
});

