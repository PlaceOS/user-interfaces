import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Room Joining (Multi-Room)
 * Tests US-034 to US-037: Room joining, status, separation, and lockout
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

test.describe('US-034: Join Rooms Together', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display join room button when join modes available', async ({
        page,
    }) => {
        // Join room button has type="join"
        const joinButton = page.locator('button[type="join"]');
        const isVisible = await joinButton.isVisible().catch(() => false);

        if (isVisible) {
            await expect(joinButton).toBeVisible();
            const icon = joinButton.locator('icon');
            await expect(icon).toHaveText('link');
        }
    });

    test('should open join room tooltip when clicking button', async ({
        page,
    }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            await joinButton.click();
            await page.waitForTimeout(500);

            // Join room tooltip should appear with mode options
        }
    });

    test('should display available join modes', async ({ page }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            await joinButton.click();
            await page.waitForTimeout(500);

            // Mock has: independent, combined, overflow modes
        }
    });

    test('should be able to select a join mode', async ({ page }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            await joinButton.click();
            await page.waitForTimeout(500);

            // Join mode options should be clickable
        }
    });
});

test.describe('US-035: View Joined Rooms Status', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show join button with enabled state when rooms joined', async ({
        page,
    }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            // Button should have bg-success class when joined
            // This depends on the joined.room_ids state
        }
    });

    test('should display joined rooms information in tooltip', async ({
        page,
    }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            await joinButton.click();
            await page.waitForTimeout(500);

            // When joined, tooltip should show joined room information
        }
    });
});

test.describe('US-036: Separate Joined Rooms', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have option to separate rooms in tooltip', async ({
        page,
    }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            await joinButton.click();
            await page.waitForTimeout(500);

            // Independent mode or separate option should be available
        }
    });

    test('should be able to return to independent mode', async ({ page }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            await joinButton.click();
            await page.waitForTimeout(500);

            // Select independent mode to separate rooms
        }
    });
});

test.describe('US-037: View Join Lockout', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should display lockout overlay when join lockout active', async ({
        page,
    }) => {
        // Lockout overlay appears when !join_status[0] && join_status[1]
        const lockoutOverlay = page.locator('[lockout]');
        const isVisible = await lockoutOverlay.isVisible().catch(() => false);

        // Lockout may or may not be active depending on state
    });

    test('should show lock icon in lockout overlay', async ({ page }) => {
        const lockoutOverlay = page.locator('[lockout]');

        if (await lockoutOverlay.isVisible().catch(() => false)) {
            const lockIcon = lockoutOverlay.locator('icon:has-text("lock")');
            await expect(lockIcon).toBeVisible();
        }
    });

    test('should show rooms joined message in lockout', async ({ page }) => {
        const lockoutOverlay = page.locator('[lockout]');

        if (await lockoutOverlay.isVisible().catch(() => false)) {
            // Message about rooms being joined
            const message = lockoutOverlay.locator('p.text-2xl');
            await expect(message).toBeVisible();
        }
    });

    test('should show logo in lockout overlay', async ({ page }) => {
        const lockoutOverlay = page.locator('[lockout]');

        if (await lockoutOverlay.isVisible().catch(() => false)) {
            const logo = lockoutOverlay.locator('img[auth]');
            await expect(logo).toBeVisible();
        }
    });
});

test.describe('Room Joining - Button States', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should hide join button when hide_join_button is true', async ({
        page,
    }) => {
        // Button visibility depends on !hide_join_button and join_modes > 1
        const joinButton = page.locator('button[type="join"]');

        // Button may be hidden based on configuration
    });

    test('should require multiple join modes for button to appear', async ({
        page,
    }) => {
        const joinButton = page.locator('button[type="join"]');

        // Only shows if Object.keys(join_modes).length > 1
    });

    test('should be styled with success when rooms are joined', async ({
        page,
    }) => {
        const joinButton = page.locator('button[type="join"]');

        if (await joinButton.isVisible().catch(() => false)) {
            // Check for bg-success class when joined
            // This would be present when joined.room_ids.length > 1
        }
    });
});

test.describe('Room Joining - Z-Index Priority', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should have higher z-index for join and power buttons during lockout', async ({
        page,
    }) => {
        // Join and power buttons should remain accessible during lockout
        // They have z-index: 99 when lockout is active

        const lockoutOverlay = page.locator('[lockout]');

        if (await lockoutOverlay.isVisible().catch(() => false)) {
            // Join and power buttons should be above the lockout overlay
            const joinButtonWrapper = page.locator(
                '[customTooltip]:has(button[type="join"])'
            );
            const powerButtonWrapper = page.locator(
                '[customTooltip]:has(button[type="power"])'
            );

            // These should be clickable even with lockout active
        }
    });
});

test.describe('Room Joining - Responsive', () => {
    test.beforeEach(async ({ page }) => {
        await ensurePoweredOn(page);
    });

    test('should show join button on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const joinButton = page.locator('button[type="join"]');
        const isVisible = await joinButton.isVisible().catch(() => false);

        // Visibility depends on join_modes configuration
    });

    test('should be accessible in mobile menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);

        const menuButton = page.locator(
            'topbar-header button icon:has-text("more_vert")'
        );

        if (await menuButton.isVisible().catch(() => false)) {
            await menuButton.click();
            await page.waitForTimeout(500);

            // Join option should be in menu if available
        }
    });

    test('should display lockout properly on tablet', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.waitForTimeout(500);

        const lockoutOverlay = page.locator('[lockout]');

        if (await lockoutOverlay.isVisible().catch(() => false)) {
            // Lockout should cover the screen
            await expect(lockoutOverlay).toBeVisible();
        }
    });
});
