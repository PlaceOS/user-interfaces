import { expect, Page, test } from '@playwright/test';
import {
    BOOTSTRAP_URL,
    clearLocalStorage,
    clickBootstrapButton,
    LOAD_TIMEOUT,
    MOCK_BUILDING_ID,
    MOCK_SYSTEM_ID,
    navigateWithConfig,
    selectDisplay,
    SIGNAGE_SYSTEM_URL,
    STORE_BUILDING_KEY,
    STORE_DISPLAY_KEY,
    waitForBootstrapPage,
    waitForSignagePage,
} from './test-utils';

async function openCleanBootstrap(page: Page) {
    await page.goto('/?mock=true');
    await clearLocalStorage(page);
    await page.goto(`${BOOTSTRAP_URL}?clear=true&mock=true`);
    await waitForBootstrapPage(page);
}

test.describe('US-SIG-001: Select a Signage Display', () => {
    test('shows the bootstrap display selector and disables submit until selection', async ({
        page,
    }) => {
        await openCleanBootstrap(page);

        await expect(page.locator('[bootstrap] mat-select')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page.locator('[bootstrap] button[btn]')).toBeDisabled();
    });

    test('lists signage systems with location context when options are available', async ({
        page,
    }) => {
        await openCleanBootstrap(page);

        await page.locator('[bootstrap] mat-select').click();
        const options = page.locator('mat-option');

        await expect(options.first()).toBeVisible({ timeout: LOAD_TIMEOUT });
        await expect(options.first()).toContainText(/.+/);
    });

    test('stores the selected display and navigates to the signage route', async ({
        page,
    }) => {
        await openCleanBootstrap(page);

        await selectDisplay(page);
        await expect(page.locator('[bootstrap] button[btn]')).toBeEnabled();
        await clickBootstrapButton(page);

        await expect(page).toHaveURL(/#\/signage\/.+/);
        const display_id = await page.evaluate(
            (key) => localStorage.getItem(key),
            STORE_DISPLAY_KEY,
        );
        expect(display_id).toBeTruthy();
    });
});

test.describe('US-SIG-002: Reuse Stored Display Configuration', () => {
    test('redirects bootstrap to the stored display', async ({ page }) => {
        await navigateWithConfig(page, SIGNAGE_SYSTEM_URL(MOCK_SYSTEM_ID));
        await waitForSignagePage(page);

        await page.goto(`${BOOTSTRAP_URL}?mock=true`);

        await expect(page).toHaveURL(
            new RegExp(`#\\/signage\\/${MOCK_SYSTEM_ID}`),
            {
                timeout: LOAD_TIMEOUT,
            },
        );
    });

    test('clears current display and legacy building keys with clear=true', async ({
        page,
    }) => {
        await page.goto('/?mock=true');
        await page.evaluate(
            ({ display_key, building_key, system_id, building_id }) => {
                localStorage.setItem(display_key, system_id);
                localStorage.setItem(building_key, building_id);
            },
            {
                display_key: STORE_DISPLAY_KEY,
                building_key: STORE_BUILDING_KEY,
                system_id: MOCK_SYSTEM_ID,
                building_id: MOCK_BUILDING_ID,
            },
        );

        await page.goto(`${BOOTSTRAP_URL}?clear=true&mock=true`);
        await waitForBootstrapPage(page);

        const stored_values = await page.evaluate(
            ({ display_key, building_key }) => ({
                display_id: localStorage.getItem(display_key),
                building_id: localStorage.getItem(building_key),
            }),
            {
                display_key: STORE_DISPLAY_KEY,
                building_key: STORE_BUILDING_KEY,
            },
        );
        expect(stored_values).toEqual({ display_id: null, building_id: null });
    });
});

test.describe('US-SIG-003: Bootstrap via URL Parameters', () => {
    test('bootstraps directly from a display query parameter', async ({
        page,
    }) => {
        await page.goto(`${BOOTSTRAP_URL}?display=${MOCK_SYSTEM_ID}&mock=true`);

        await expect(page).toHaveURL(
            new RegExp(`#\\/signage\\/${MOCK_SYSTEM_ID}`),
            { timeout: LOAD_TIMEOUT },
        );
        const display_id = await page.evaluate(
            (key) => localStorage.getItem(key),
            STORE_DISPLAY_KEY,
        );
        expect(display_id).toBe(MOCK_SYSTEM_ID);
    });

    test('keeps working when legacy building parameter is present', async ({
        page,
    }) => {
        await page.goto(
            `${BOOTSTRAP_URL}?building=${MOCK_BUILDING_ID}&display=${MOCK_SYSTEM_ID}&mock=true`,
        );

        await expect(page.locator('app-root')).toBeVisible({
            timeout: LOAD_TIMEOUT,
        });
        await expect(page).toHaveURL(/#\/signage\/display-1/);
    });
});
