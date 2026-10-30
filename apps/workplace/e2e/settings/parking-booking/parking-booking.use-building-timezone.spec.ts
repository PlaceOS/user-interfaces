import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, BOOKING, prepareBooking, type Settings, test, timezoneBuildings, untouchedParking } from '../support/settings-harness';

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

test.describe('parking.use_building_timezone', () => {
    for (const enabled of [true, false]) {
        test('parking.use_building_timezone ' + enabled + ' gates the building-time label', async ({ staffPage, audit }) => {
            await timezoneBuildings(staffPage, audit);
            const root = await parkingForm(staffPage, audit, { 'app.parking.use_building_timezone': enabled });
            expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
            const secondary = root.locator('a-time-field[name="start-time"] button[time-field] div.truncate.text-xs');
            await expect(root.locator('a-time-field[name="start-time"] button[time-field]')).toBeVisible();
            await expect(secondary).toHaveCount(enabled ? 1 : 0);
            if (enabled) await expect(secondary).toContainText(/GMT-10|HST|-10/);
            await untouchedParking(staffPage);
        });
    }

    test('parking.use_building_timezone false overrides bookings.use_building_timezone true and hides the building-time label',
        async ({ staffPage, audit }) => {
            test.fail(true, 'parking-form-details reads bookings || parking for use_building_timezone; no ticket yet');
            await timezoneBuildings(staffPage, audit);
            const root = await parkingForm(staffPage, audit, {
                'app.parking.use_building_timezone': false, 'app.bookings.use_building_timezone': true,
            });
            expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
            await expect(root.locator('a-time-field[name="start-time"] button[time-field]')).toBeVisible();
            await expect(root.locator('a-time-field[name="start-time"] button[time-field] div.truncate.text-xs'))
                .toHaveCount(0);
            await untouchedParking(staffPage);
        });
});
