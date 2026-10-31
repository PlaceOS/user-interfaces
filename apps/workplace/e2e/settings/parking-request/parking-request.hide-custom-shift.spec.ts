import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, labelledSelect, optionLabels, prepareSettings, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';

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

test.describe('parking request form: parking.hide_custom_shift', () => {
    for (const hidden of [false, true]) {
        test('parking.hide_custom_shift ' + hidden + ' controls the Custom Hours shift option',
            async ({ staffPage, audit }) => {
                const root = await openRequest(staffPage, audit, { 'app.parking.hide_custom_shift': hidden });
                const labels = await optionLabels(staffPage, labelledSelect(root, 'Shift Type'));
                expect(labels).toHaveLength(hidden ? 2 : 3);
                expect(labels.some((label) => label.startsWith('E2E Day Shift'))).toBe(true);
                expect(labels.some((label) => label.startsWith('E2E Late Shift'))).toBe(true);
                expect(labels.some((label) => label.startsWith('Custom Hours'))).toBe(!hidden);
                await untouched(staffPage);
            });
    }
    test('parking.hide_custom_shift true with no presets forces the All Day window', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, {
            'app.parking.hide_custom_shift': true, 'app.parking.request_shift_options': [],
        });
        // is_all_day_forced (parking-request-form-details.component.ts) replaces the select with fixed text.
        await expect(labelledSelect(root, 'Shift Type')).toHaveCount(0);
        await expect(root.getByText(/^\s*All Day\s*$/)).toBeVisible();
        await untouched(staffPage);
    });
});
