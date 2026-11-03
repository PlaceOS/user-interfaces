import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, BOOKING, menuValues, prepareBooking, type Settings, test, untouchedParking } from '../support/settings-harness';

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
const durations = (page: Page, root: Locator) => menuValues(page, root.locator('button[duration-field]'), 'data-duration');

test.describe('parking.custom_duration_options', () => {

    test('parking.custom_duration_options adds out-of-step durations', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.custom_duration_options': [20, 600] });
        const values = await durations(staffPage, root);
        // Custom ids skip the min/max filter (duration-field); 600 > default max 480.
        expect(values).toEqual(expect.arrayContaining([20, 30, 480, 600]));
        await untouchedParking(staffPage);
    });

    test('parking.custom_duration_options empty keeps the stepped 30-480 list', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.custom_duration_options': [] });
        const values = await durations(staffPage, root);
        expect(values).not.toContain(20);
        expect(values).not.toContain(600);
        expect(Math.min(...values)).toBe(30);
        expect(Math.max(...values)).toBe(480);
        await untouchedParking(staffPage);
    });
});
