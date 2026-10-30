import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, BOOKING, prepareBooking, type Settings, test, untouchedParking } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

async function parkingForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareBooking(page, audit, { ...BOOKING, ...overrides });
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    const root = page.locator('parking-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-flow-form button[confirm]')).toBeVisible();
    return root;
}

test.describe('parking.allow_all_day', () => {

    test('parking.allow_all_day true shows the All day checkbox, which hides the time fields',
        async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, { 'app.parking.allow_all_day': true });
            const box = root.locator('mat-checkbox input[type="checkbox"]');
            await expect(box).toHaveCount(1);
            await expect(box).not.toBeChecked();
            await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(1);
            await box.check({ force: true });
            await expect(box).toBeChecked();
            await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(0);
            await untouchedParking(staffPage);
        });

    test('parking.allow_all_day false (bookings false) removes the All day checkbox', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.allow_all_day': false });
        await expect(root.locator('mat-checkbox')).toHaveCount(0);
        await expect(root.locator('a-time-field[name="start-time"] button[time-field]')).toBeVisible();
        await untouchedParking(staffPage);
    });

    test('parking.allow_all_day false alone removes the checkbox while bookings.allow_all_day is unset',
        async ({ staffPage, audit }) => {
            // Source: parking ?? bookings ?? true -> false ?? null ?? true === false.
            const root = await parkingForm(staffPage, audit, {
                'app.parking.allow_all_day': false, 'app.bookings.allow_all_day': null,
            });
            await expect(root.locator('mat-checkbox')).toHaveCount(0);
            await expect(root.locator('a-time-field[name="start-time"] button[time-field]')).toBeVisible();
            await untouchedParking(staffPage);
        });

    test('parking.allow_all_day false overrides bookings.allow_all_day true and removes the checkbox',
        async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, {
                'app.parking.allow_all_day': false, 'app.bookings.allow_all_day': true,
            });
            await expect(root.locator('mat-checkbox')).toHaveCount(0);
            await expect(root.locator('a-time-field[name="start-time"] button[time-field]')).toBeVisible();
            await untouchedParking(staffPage);
        });

    test('parking.allow_all_day unset falls back to bookings.allow_all_day true and shows the checkbox',
        async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, {
                'app.parking.allow_all_day': null, 'app.bookings.allow_all_day': true,
            });
            await expect(root.locator('mat-checkbox input[type="checkbox"]')).toHaveCount(1);
            await untouchedParking(staffPage);
        });
});
