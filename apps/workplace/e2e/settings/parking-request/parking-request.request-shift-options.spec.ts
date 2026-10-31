import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, labelledSelect, optionLabels, prepareSettings, PRESETS, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

async function openRequest(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareSettings(page, { ...REQUEST, ...overrides }, {
        audit, base: {}, landingRooms: false, identity: false, bookings: { types: ['parking'] }, bootstrap: true,
    });
    await page.goto(ROUTE);
    await fixture.ready();
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-request-form button[btn]').filter({ has: page.locator('icon', { hasText: /^\s*send\s*$/ }) })).toBeVisible();
    return root;
}

test.describe('parking request form: parking.request_shift_options', () => {

    test('parking.request_shift_options supplies selectable presets', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.request_shift_options': PRESETS });
        const select = labelledSelect(root, 'Shift Type');
        const labels = await optionLabels(staffPage, select);
        expect(labels).toEqual([
            expect.stringMatching(/^E2E Day Shift \(08:00 - 17:00\)$/),
            expect.stringMatching(/^E2E Late Shift \(10:00 - 18:00\)$/),
            expect.stringMatching(/^Custom Hours/),
        ]);
        await select.click();
        await staffPage.getByRole('option', { name: /E2E Late Shift/ }).click();
        await expect(select).toContainText('E2E Late Shift');
        await untouched(staffPage);
    });

    test('parking.request_shift_options empty leaves only editable custom times', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.request_shift_options': [] });
        await expect(labelledSelect(root, 'Shift Type')).toHaveCount(0);
        await expect(labelledSelect(root, 'Start time')).toBeVisible();
        await expect(labelledSelect(root, 'End time')).toBeVisible();
        await expect(root.getByText('E2E Day Shift', { exact: false })).toHaveCount(0);
        await untouched(staffPage);
    });
});
