import { Page } from '@playwright/test';

/**
 * Shared test utilities for stagehand e2e tests
 */

export const LOAD_TIMEOUT = 30000;
export const ACTION_TIMEOUT = 10000;

// URLs - these are relative hash routes
export const ALERTS_URL = '/#/alerts';
export const REMOTE_SUPPORT_URL = '/#/remote-support';
export const ANALYTICS_URL = '/#/analytics';
export const DASHBOARDS_URL = '/#/dashboards';
export const DASHBOARDS_LIST_URL = '/#/dashboards/list';
export const DASHBOARDS_MANAGE_URL = '/#/dashboards/manage';
export const RECORDER_GRID_URL = '/#/recorder-grid';

/**
 * Initializes the app with mock mode enabled.
 * Must be called before navigating to app pages.
 */
export async function initializeAppWithMock(page: Page): Promise<void> {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page
        .evaluate(() => {
            localStorage.setItem('mock', 'true');
        })
        .catch(() => {
            /* Ignore context errors during navigation */
        });

    await page.goto('/?mock=true');
    await page.waitForLoadState('domcontentloaded');
    await page
        .evaluate(() => {
            localStorage.setItem('mock', 'true');
        })
        .catch(() => {
            /* Ignore context errors during navigation */
        });

    await page
        .locator('app-root')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });

    // Wait for loading overlay to disappear (with shorter timeout, since mock should load fast)
    // Use Promise.race to ensure we don't block forever if loader doesn't appear or hide
    await Promise.race([
        page
            .locator('[loader]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(5000), // Fallback timeout if loader doesn't exist
    ]).catch(() => {
        /* Loader may not exist or already hidden */
    });
}

/**
 * Navigates to a page with mock mode enabled.
 */
export async function navigateWithMock(page: Page, url: string): Promise<void> {
    await initializeAppWithMock(page);
    const full_url = url.includes('?')
        ? `${url}&mock=true`
        : `${url}?mock=true`;
    await page.goto(full_url);

    // Wait for loading overlay to disappear after navigation
    await Promise.race([
        page
            .locator('[loader]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(5000), // Fallback timeout if loader doesn't exist
    ]).catch(() => {
        /* Loader may not exist or already hidden */
    });
}

/**
 * Waits for the global loading overlay to disappear.
 */
export async function waitForLoadingComplete(page: Page): Promise<void> {
    // Wait for the loader element to be detached or timeout after 5 seconds
    await Promise.race([
        page
            .locator('[loader]')
            .waitFor({ state: 'detached', timeout: LOAD_TIMEOUT }),
        page.waitForTimeout(5000), // Fallback timeout
    ]).catch(() => {
        /* Loader may not exist */
    });
}

/**
 * Waits for the app to be ready after navigation.
 */
export async function waitForAppReady(page: Page): Promise<void> {
    await page
        .locator('app-root')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
    await waitForLoadingComplete(page);
    await page.waitForLoadState('networkidle');
}

/**
 * Waits for the sidebar to be visible.
 */
export async function waitForSidebar(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    await page
        .locator('[sidebar]')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Waits for the alerts page to load.
 */
export async function waitForAlertsPage(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    // Wait for content inside the alerts page to be visible
    // The component selector may have zero size, so check for actual content
    await page
        .locator('stagehand-alerts h1:has-text("AV Systems Alerts")')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Waits for the remote support page to load.
 */
export async function waitForRemoteSupportPage(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    // Wait for content inside the remote support page to be visible
    await page
        .locator(
            'stagehand-remote-support h1:has-text("AV Systems Remote Support")',
        )
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Waits for the dashboards page to load.
 */
export async function waitForDashboardsPage(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    // Wait for content inside the dashboards page to be visible
    await page
        .locator('stagehand-dashboards header')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Waits for the dashboard list to load.
 */
export async function waitForDashboardList(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    await page
        .locator('stagehand-dashboard-list')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Waits for the analytics page to load.
 */
export async function waitForAnalyticsPage(page: Page): Promise<void> {
    await waitForLoadingComplete(page);
    // Wait for content inside the analytics page to be visible
    await page
        .locator('stagehand-analytics header')
        .waitFor({ state: 'visible', timeout: LOAD_TIMEOUT });
}

/**
 * Clicks on a sidebar navigation link.
 */
export async function clickSidebarLink(
    page: Page,
    route: string,
): Promise<void> {
    const link = page.locator(`[sidebar] a[href*="${route}"]`);
    await link.click();
    await page.waitForTimeout(300);
}

/**
 * Toggles the sidebar compact mode.
 */
export async function toggleSidebarCompact(page: Page): Promise<void> {
    const toggle_button = page.locator(
        '[sidebar] button icon:has-text("menu")',
    );
    const is_compact = await toggle_button.isVisible().catch(() => false);
    if (is_compact) {
        await toggle_button.click();
    } else {
        const close_button = page.locator(
            '[sidebar] button icon:has-text("close")',
        );
        await close_button.click();
    }
    await page.waitForTimeout(300);
}

/**
 * Opens the notification settings dialog.
 */
export async function openNotificationSettings(page: Page): Promise<void> {
    const button = page.locator(
        '[sidebar] button:has(icon:has-text("notifications"))',
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Gets the count of alerts displayed in a summary card.
 */
export async function getAlertCount(
    page: Page,
    type: 'critical' | 'warnings' | 'open',
): Promise<string> {
    const card_text =
        type === 'critical'
            ? 'Critical'
            : type === 'warnings'
              ? 'Warnings'
              : 'Open';
    // Use more specific selector - the card is in stagehand-alerts and has specific structure
    const card = page
        .locator(
            `stagehand-alerts div:has(> div > h3:has-text("${card_text}"))`,
        )
        .first();
    const count = card.locator('.text-4xl').first();
    return (await count.textContent()) || '0';
}

/**
 * Enters a search term in the search input.
 */
export async function enterSearchTerm(page: Page, term: string): Promise<void> {
    const input = page.locator('input[placeholder*="Search"]');
    await input.fill(term);
    await page.waitForTimeout(300);
}

/**
 * Selects a severity filter.
 */
export async function selectSeverityFilter(
    page: Page,
    severity: string,
): Promise<void> {
    // Find the severity filter select by its placeholder or current text
    const select = page
        .locator('stagehand-alerts mat-select')
        .filter({ hasText: /All Severities|Critical|Warning|Info/ })
        .first();
    await select.click();
    await page.waitForTimeout(300);
    const option = page.locator(`mat-option:has-text("${severity}")`);
    await option.click();
    await page.waitForTimeout(300);
}

/**
 * Selects a device type filter.
 */
export async function selectDeviceTypeFilter(
    page: Page,
    device_type: string,
): Promise<void> {
    // Find the device type filter select by its placeholder or current text
    const select = page
        .locator('stagehand-alerts mat-select')
        .filter({
            hasText: /All Devices|Display|Audio|Video|Network|Control System/,
        })
        .first();
    await select.click();
    await page.waitForTimeout(300);
    const option = page.locator(`mat-option:has-text("${device_type}")`);
    await option.click();
    await page.waitForTimeout(300);
}

/**
 * Selects a room state filter.
 */
export async function selectRoomStateFilter(
    page: Page,
    state: string,
): Promise<void> {
    // Find the room state filter select by its placeholder or current text
    const select = page
        .locator('stagehand-remote-support mat-select')
        .filter({ hasText: /All Rooms|In Use|Available|Has Issues/ })
        .first();
    await select.click();
    await page.waitForTimeout(300);
    const option = page.locator(`mat-option:has-text("${state}")`);
    await option.click();
    await page.waitForTimeout(300);
}

/**
 * Gets the total room count from the remote support page.
 */
export async function getTotalRoomCount(page: Page): Promise<string> {
    const card = page.locator('div:has(h3:has-text("Total Rooms"))').first();
    const count = card.locator('.text-4xl').first();
    return (await count.textContent()) || '0';
}

/**
 * Gets the active alerts count from the remote support page.
 */
export async function getActiveAlertsCount(page: Page): Promise<string> {
    const card = page.locator('div:has(h3:has-text("Active Alerts"))').first();
    const count = card.locator('.text-4xl').first();
    return (await count.textContent()) || '0';
}

/**
 * Checks if the simple table is visible.
 */
export async function isTableVisible(page: Page): Promise<boolean> {
    const table = page.locator('simple-table');
    return table.isVisible().catch(() => false);
}

/**
 * Gets the number of rows in the simple table.
 */
export async function getTableRowCount(page: Page): Promise<number> {
    const rows = page.locator('simple-table [table-row]');
    return rows.count();
}

/**
 * Clicks the add button in the dashboards header.
 */
export async function clickAddDashboardButton(page: Page): Promise<void> {
    const button = page.locator(
        'stagehand-dashboards header button icon:has-text("add")',
    );
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Fills in the dashboard form fields.
 */
export async function fillDashboardForm(
    page: Page,
    name: string,
    description?: string,
): Promise<void> {
    const name_input = page.locator('input[placeholder*="name" i]');
    await name_input.fill(name);

    if (description) {
        const desc_input = page.locator(
            'input[placeholder*="description" i], textarea[placeholder*="description" i]',
        );
        await desc_input.fill(description);
    }
}

/**
 * Toggles the enabled switch in a form.
 */
export async function toggleEnabledSwitch(page: Page): Promise<void> {
    const toggle = page.locator('mat-slide-toggle');
    await toggle.click();
    await page.waitForTimeout(200);
}

/**
 * Clicks the save button in a form.
 */
export async function clickSaveButton(page: Page): Promise<void> {
    const button = page.locator('button:has-text("Save")');
    await button.click();
    await page.waitForTimeout(300);
}

/**
 * Checks if the mat-dialog is visible.
 */
export async function isDialogVisible(page: Page): Promise<boolean> {
    const dialog = page.locator('mat-dialog-container');
    return dialog.isVisible().catch(() => false);
}

/**
 * Closes any open mat-dialog.
 */
export async function closeDialog(page: Page): Promise<void> {
    const close_button = page.locator(
        'mat-dialog-container button:has(icon:has-text("close"))',
    );
    const is_visible = await close_button.isVisible().catch(() => false);
    if (is_visible) {
        await close_button.click();
        await page.waitForTimeout(300);
    }
}
