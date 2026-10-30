import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, BOOKING, menuValues, pickDay, prepareBooking, type Settings, test, untouchedParking } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const HH = (h: number, m = 0) => h * 60 + m;
async function parkingForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareBooking(page, audit, { ...BOOKING, ...overrides });
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    const root = page.locator('parking-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-flow-form button[confirm]')).toBeVisible();
    return root;
}
const startTimes = (page: Page, root: Locator) =>
    menuValues(page, root.locator('a-time-field[name="start-time"] button[time-field]'), 'data-time');

test.describe('parking.min_duration', () => {
    for (const [min, last] of [[45, HH(16, 15)], [120, HH(15)]] as const) {
        test('parking.min_duration ' + min + ' moves the latest start within 9-17 hours', async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, {
                'app.parking.min_duration': min, 'app.parking.bookable_hours': { start: 9, end: 17 },
            });
            await pickDay(staffPage, root, 1);
            const times = await startTimes(staffPage, root);
            expect(Math.min(...times)).toBe(HH(9));
            expect(Math.max(...times)).toBe(last);
            await untouchedParking(staffPage);
        });
    }
});
