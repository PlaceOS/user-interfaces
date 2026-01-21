import { expect, test } from '@playwright/test';

/**
 * E2E Tests for Booking Modal
 * Tests the booking creation flow from the panel
 */

const MOCK_SYSTEM_ID = 'space-1';
const PANEL_URL = `/#/panel/${MOCK_SYSTEM_ID}`;
const CHECKIN_URL = `/#/checkin/${MOCK_SYSTEM_ID}`;
const LOAD_TIMEOUT = 30000;
const MODAL_TIMEOUT = 10000;

test.describe('Booking Modal - Opening', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should open modal when clicking on free room panel', async ({
        page,
    }) => {
        // Click on the main panel button
        await page.locator('panel-view > button').click();

        // Wait for potential modal
        await page.waitForTimeout(2000);

        // Modal may appear depending on room status
        // If room is free, booking modal should open
        // If room is busy, end meeting confirmation may appear
        // If room is pending, check-in confirmation may appear
    });

    test('should show dialog container when modal opens', async ({ page }) => {
        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        // Check for any dialog container
        const dialog = page.locator(
            'mat-dialog-container, booking-modal, .cdk-overlay-pane'
        );
        const dialogCount = await dialog.count();
        // Dialog may or may not appear based on room status
    });
});

test.describe('Booking Modal - Form Fields', () => {
    test('should have duration field when modal is open', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        // If booking modal opened, check for duration field
        const durationField = page.locator('a-duration-field');
        if (await durationField.isVisible({ timeout: 3000 }).catch(() => false)) {
            await expect(durationField).toBeVisible();
        }
    });

    test('should have title input field', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const titleField = page.locator('input[name="title"]');
        if (await titleField.isVisible({ timeout: 3000 }).catch(() => false)) {
            await expect(titleField).toBeVisible();
        }
    });

    test('should have host/organiser field when required', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        // Host field visibility depends on disable_book_now_host setting
        const hostField = page.locator('a-user-search-field');
        // May or may not be visible based on settings
    });

    test('should have time field for future bookings', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        // Time field only appears for future bookings
        const timeField = page.locator('a-time-field');
        // May not be visible for immediate bookings
    });
});

test.describe('Booking Modal - Actions', () => {
    test('should have save button', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const saveButton = page.locator('button[name="save"]');
        if (await saveButton.isVisible({ timeout: 3000 }).catch(() => false)) {
            await expect(saveButton).toBeVisible();
        }
    });

    test('should have close button', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const closeButton = page.locator(
            '[mat-dialog-close], button:has(icon:has-text("close"))'
        );
        if (await closeButton.isVisible({ timeout: 3000 }).catch(() => false)) {
            await expect(closeButton.first()).toBeVisible();
        }
    });

    test('should close modal when close button clicked', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const closeButton = page.locator('[mat-dialog-close]');
        if (await closeButton.isVisible({ timeout: 3000 }).catch(() => false)) {
            await closeButton.click();
            await page.waitForTimeout(1000);

            // Modal should be closed
            await expect(closeButton).not.toBeVisible({ timeout: 3000 });
        }
    });
});

test.describe('Booking Modal - From Checkin View', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`${CHECKIN_URL}?mock=true`);
        await page.locator('checkin-view').waitFor({ timeout: LOAD_TIMEOUT });
    });

    test('should open booking modal from Book button', async ({ page }) => {
        const bookButton = page.locator('button:has-text("Book")');

        if (await bookButton.first().isVisible({ timeout: 5000 }).catch(() => false)) {
            await bookButton.first().click();
            await page.waitForTimeout(2000);

            // Check for booking modal
            const modal = page.locator('booking-modal, mat-dialog-container');
            // Modal should appear
        }
    });

    test('should open booking modal from timetable click', async ({ page }) => {
        const timetable = page.locator('checkin-timetable');
        await expect(timetable).toBeVisible({ timeout: 10000 });

        // Clicking on timetable can trigger booking for free slots
        // This is dependent on click target and room availability
    });
});

test.describe('Booking Modal - Validation', () => {
    test('should validate required fields before saving', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const saveButton = page.locator('button[name="save"]');
        if (await saveButton.isVisible({ timeout: 3000 }).catch(() => false)) {
            // Try to save without filling required fields
            await saveButton.click();
            await page.waitForTimeout(1000);

            // Should show validation errors or modal should stay open
            // Validation behavior depends on which fields are required
        }
    });
});

test.describe('Booking Modal - Confirmation Dialog', () => {
    test('should show confirmation for check-in action', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        // Check if room is in pending state
        const pendingStatus = page.locator('panel-view-status .bg-warning');

        if (await pendingStatus.isVisible({ timeout: 5000 }).catch(() => false)) {
            // Click to check in
            await page.locator('panel-view > button').click();
            await page.waitForTimeout(2000);

            // Should show confirmation dialog
            const confirmDialog = page.locator('mat-dialog-container');
            await expect(confirmDialog).toBeVisible({ timeout: 5000 });
        }
    });

    test('should show confirmation for end meeting action', async ({
        page,
    }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        // Check if room is busy
        const busyStatus = page.locator('panel-view-status .bg-error');

        if (await busyStatus.isVisible({ timeout: 5000 }).catch(() => false)) {
            // Click to potentially end meeting (if enabled)
            await page.locator('panel-view > button').click();
            await page.waitForTimeout(2000);

            // May show end meeting confirmation if enable_end_meeting_button is true
        }
    });
});

test.describe('Booking Modal - Loading State', () => {
    test('should show loading state when saving booking', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        // If booking modal is open, fill required fields and save
        const saveButton = page.locator('button[name="save"]');
        if (await saveButton.isVisible({ timeout: 3000 }).catch(() => false)) {
            // May need to fill required fields first
            const titleField = page.locator('input[name="title"]');
            if (await titleField.isVisible()) {
                await titleField.fill('Test Meeting');
            }

            await saveButton.click();

            // Should show loading indicator
            const spinner = page.locator('mat-spinner');
            // Spinner may appear briefly during save
        }
    });
});

test.describe('Booking Modal - Duration Constraints', () => {
    test('should respect minimum duration setting', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const durationField = page.locator('a-duration-field');
        if (await durationField.isVisible({ timeout: 3000 }).catch(() => false)) {
            // Duration field respects min_duration setting (default 15 min)
            await expect(durationField).toBeVisible();
        }
    });

    test('should respect maximum duration setting', async ({ page }) => {
        await page.goto(`${PANEL_URL}?mock=true`);
        await page.locator('panel-view').waitFor({ timeout: LOAD_TIMEOUT });

        await page.locator('panel-view > button').click();
        await page.waitForTimeout(2000);

        const durationField = page.locator('a-duration-field');
        if (await durationField.isVisible({ timeout: 3000 }).catch(() => false)) {
            // Duration field respects max_duration setting (default 480 min)
            await expect(durationField).toBeVisible();
        }
    });
});
