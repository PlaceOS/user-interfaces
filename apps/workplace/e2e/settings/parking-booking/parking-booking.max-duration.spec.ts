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

test.describe('parking.max_duration', () => {
    for (const max of [120, 360]) {
        test('parking.max_duration ' + max + ' caps the duration choices', async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, { 'app.parking.max_duration': max });
            const values = await durations(staffPage, root);
            expect(Math.max(...values)).toBe(max);
            expect(Math.min(...values)).toBe(30);
            await untouchedParking(staffPage);
        });
    }
});
