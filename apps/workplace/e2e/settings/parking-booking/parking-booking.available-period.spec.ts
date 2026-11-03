import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, BOOKING, dayEnabled, prepareBooking, type Settings, test, untouchedParking } from '../support/settings-harness';

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

test.describe('parking.available_period', () => {

    test('parking.available_period 5 allows today+5 and blocks today+6', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.available_period': 5 });
        expect(await dayEnabled(staffPage, root, 5)).toBe(true);
        expect(await dayEnabled(staffPage, root, 6)).toBe(false);
        await untouchedParking(staffPage);
    });

    test('parking.available_period 21 extends the window to today+21', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.available_period': 21 });
        expect(await dayEnabled(staffPage, root, 8)).toBe(true);
        expect(await dayEnabled(staffPage, root, 21)).toBe(true);
        expect(await dayEnabled(staffPage, root, 22)).toBe(false);
        await untouchedParking(staffPage);
    });
});
