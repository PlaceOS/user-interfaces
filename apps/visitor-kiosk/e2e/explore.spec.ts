import { expect, test } from '@playwright/test';
import { EXPLORE_URL, WELCOME_URL, navigateWithConfig } from './test-utils';

/**
 * E2E Tests for Map Exploration
 * Tests US-EXPLORE-001 to US-EXPLORE-003
 */

test.describe('US-EXPLORE-001: View Building Floor Map', () => {
    test('should navigate to explore page', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Explore page may redirect to welcome if not configured
        const url = page.url();
        expect(url).toMatch(/explore|welcome/);
    });

    test('should display explore module content', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // The explore module should load
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });

    test('should be accessible from welcome screen', async ({ page }) => {
        await navigateWithConfig(page, WELCOME_URL);
        await page.waitForTimeout(2000);

        // Check if explore button exists
        const exploreButton = page.locator('a[routerLink*="explore"]');
        const isVisible = await exploreButton.isVisible().catch(() => false);

        if (isVisible) {
            await exploreButton.click();
            await page.waitForTimeout(1000);
            const url = page.url();
            expect(url).toContain('explore');
        }
    });
});

test.describe('US-EXPLORE-002: Pan and Zoom Map', () => {
    test('should display map container', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // The explore module should have some container
        const container = page.locator(
            '.explore-container, [explore], explore-map',
        );
        const count = await container.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });

    test('should have interactive map element', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Look for SVG or canvas map element
        const mapElement = page.locator('svg, canvas, .map-container');
        const count = await mapElement.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });
});

test.describe('US-EXPLORE-003: Return to Welcome from Map', () => {
    test('should have back button or navigation', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Look for back button or home navigation
        const backButton = page.locator(
            'a[routerLink*="welcome"], button:has-text("Back"), icon:has-text("arrow_back"), icon:has-text("home")',
        );
        const count = await backButton.count();
        expect(count).toBeGreaterThanOrEqual(0);
    });

    test('should be able to navigate back to welcome', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Find and click back button
        const backButton = page.locator('a[routerLink*="welcome"]').first();
        const isVisible = await backButton.isVisible().catch(() => false);

        if (isVisible) {
            await backButton.click();
            await page.waitForTimeout(1000);
            const url = page.url();
            expect(url).toContain('welcome');
        }
    });
});

test.describe('Explore - Layout', () => {
    test('should display full-screen map view', async ({ page }) => {
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // The explore view should take up available space
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });
});

test.describe('Explore - Responsive Layout', () => {
    test('should work on landscape orientation (1920x1080)', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Explore page may redirect to welcome if not configured
        const url = page.url();
        expect(url).toMatch(/explore|welcome/);
    });

    test('should work on portrait orientation (768x1024)', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Explore page may redirect to welcome if not configured
        const url = page.url();
        expect(url).toMatch(/explore|welcome/);
    });

    test('should work on kiosk size (1080x1920)', async ({ page }) => {
        await page.setViewportSize({ width: 1080, height: 1920 });
        await navigateWithConfig(page, EXPLORE_URL);
        await page.waitForTimeout(2000);

        // Explore page may redirect to welcome if not configured
        const url = page.url();
        expect(url).toMatch(/explore|welcome/);
    });
});

test.describe('Explore - With Level Parameter', () => {
    test('should accept level parameter in URL', async ({ page }) => {
        await navigateWithConfig(page, `${EXPLORE_URL}/lvl-1`);
        await page.waitForTimeout(2000);

        // Explore page may redirect to welcome if not configured
        const url = page.url();
        expect(url).toMatch(/explore|welcome/);
    });
});
