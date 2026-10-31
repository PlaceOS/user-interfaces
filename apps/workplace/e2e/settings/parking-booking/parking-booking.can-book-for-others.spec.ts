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

test.describe('parking.can_book_for_others', () => {
    for (const enabled of [true, false]) {
        test('parking.can_book_for_others ' + enabled + ' controls the host selector', async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, { 'app.parking.can_book_for_others': enabled });
            await expect(root.locator('host-select-field')).toHaveCount(enabled ? 1 : 0);
            if (enabled) await expect(root.locator('host-select-field')).toBeVisible();
            await untouchedParking(staffPage);
        });
    }

    test('parking.can_book_for_others false overrides bookings.can_book_for_others true and hides the host selector',
        async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, {
                'app.parking.can_book_for_others': false, 'app.bookings.can_book_for_others': true,
            });
            await expect(root.locator('host-select-field')).toHaveCount(0);
            await untouchedParking(staffPage);
        });

    test('parking.can_book_for_others true overrides bookings.can_book_for_others false and shows the host selector',
        async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, {
                'app.parking.can_book_for_others': true, 'app.bookings.can_book_for_others': false,
            });
            await expect(root.locator('host-select-field')).toBeVisible();
            await untouchedParking(staffPage);
        });
});
