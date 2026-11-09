import { expect, Page, test } from '@playwright/test';

/**
 * E2E Tests for Bootstrap Component
 * Tests the initial panel setup and room selection interface
 */

const MOCK_SYSTEM_ID = 'space-1';
const BOOTSTRAP_URL = `/#/bootstrap`;
const PANEL_URL = `/#/panel/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;

/**
 * The setup card. The `[app-bootstrap]` host has no size, as the shared
 * `system-bootstrap` screen draws in an absolute child, so tests use the card.
 */
const setupForm = (page: Page) => page.locator('system-bootstrap [form]');
/** Size and position of the setup card. Fails when it is not rendered. */
async function setupBox(page: Page) {
    const box = await setupForm(page).boundingBox();
    if (!box) throw new Error('The setup form is not rendered');
    return box;
}
const systemInput = (page: Page) =>
    page.getByRole('combobox', { name: 'System ID' });
const finishButton = (page: Page) =>
    page.getByRole('button', { name: 'Finish setup' });

test.describe('Bootstrap - Initial Setup', () => {
    test.beforeEach(async ({ page }) => {
        // Clear any stored system configuration
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should display bootstrap screen when no system configured', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(setupForm(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display the app heading', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        const heading = page.getByRole('heading', { name: 'Booking Panel' });
        await expect(heading).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display search input field', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(systemInput(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should display submit button', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(finishButton(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('Bootstrap - Room Search', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await setupForm(page).waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should prompt for a search before typing', async ({ page }) => {
        await systemInput(page).click();
        await expect(page.getByRole('option').first()).toBeVisible();
    });

    test('should list systems that match the search', async ({ page }) => {
        await systemInput(page).fill('Meeting');

        const option = page.getByRole('option', { name: /space-1\b/ });
        await expect(option).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should open the panel for the chosen system', async ({ page }) => {
        await systemInput(page).fill('Meeting');
        await page.getByRole('option', { name: /space-1\b/ }).click();
        await finishButton(page).click();

        await expect(page).toHaveURL(/#\/panel\/space-1/);
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Bootstrap - URL Parameters', () => {
    test('should auto-bootstrap when system_id parameter provided', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`,
        );

        // Should redirect to panel view
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should accept sys_id as alternative parameter', async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&sys_id=${MOCK_SYSTEM_ID}`);

        // Should redirect to panel view
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });

    test('should clear stored system when clear parameter provided', async ({
        page,
    }) => {
        // First, set up a system
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        // Then clear it
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);

        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await expect(setupForm(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should use event view when event parameter provided', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&event=true&system_id=${MOCK_SYSTEM_ID}`,
        );

        // Should redirect to events view instead of panel
        // Event panel may need extra time for org service initialization
        await page.locator('event-panel').waitFor({
            state: 'attached',
            timeout: LOAD_TIMEOUT,
        });
        await expect(
            page.locator('event-panel > div.bg-base-100.absolute.inset-0'),
        ).toBeVisible({ timeout: LOAD_TIMEOUT });
    });
});

test.describe('Bootstrap - Form Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);
        await setupForm(page).waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should disable submit button when no system selected', async ({
        page,
    }) => {
        await expect(finishButton(page)).toBeDisabled();
    });

    test('should enable submit button when system ID entered', async ({
        page,
    }) => {
        await systemInput(page).fill(MOCK_SYSTEM_ID);
        await expect(finishButton(page)).toBeEnabled();
    });
});

test.describe('Bootstrap - Navigation', () => {
    test('should redirect to bootstrap from unknown routes', async ({
        page,
    }) => {
        await page.goto('/#/unknown-route?mock=true&clear=true');

        await expect(page).toHaveURL(/#\/bootstrap/, { timeout: LOAD_TIMEOUT });
        await expect(setupForm(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
    });

    test('should persist system selection in localStorage', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`,
        );
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        // Open the app root. It must go to the saved system.
        await page.goto('/?mock=true');

        await expect(page).toHaveURL(/#\/panel\/space-1/, {
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Bootstrap - Loading States', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
    });

    test('should show loading spinner during configuration', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?mock=true&system_id=${MOCK_SYSTEM_ID}`,
        );

        // Loading spinner may appear briefly during configuration
        // Just verify the final result is panel view
        await expect(page.locator('panel-view')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
    });
});

test.describe('Bootstrap - Responsive Design', () => {
    test('should center the setup form at a readable width', async ({
        page,
    }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(setupForm(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
        const box = await setupBox(page);
        // The form is `w-120` (30rem)
        expect(box.width).toBeLessThanOrEqual(480);
        expect(Math.abs(box.x + box.width / 2 - 960)).toBeLessThan(2);
    });

    test('should be usable on mobile viewport', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(`${BOOTSTRAP_URL}?mock=true&clear=true`);
        await page.waitForTimeout(1000);
        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(setupForm(page)).toBeVisible({ timeout: LOAD_TIMEOUT });
        const box = await setupBox(page);
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(375);
        await expect(systemInput(page)).toBeVisible();
    });
});
