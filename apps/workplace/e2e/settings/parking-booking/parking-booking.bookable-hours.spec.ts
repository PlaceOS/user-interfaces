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

test.describe('parking.bookable_hours', () => {
    for (const [hours, first, last] of [
        [{ start: 9, end: 17 }, HH(9), HH(16, 30)],
        [{ start: 6, end: 11 }, HH(6), HH(10, 30)],
    ] as const) {
        test('parking.bookable_hours ' + hours.start + '-' + hours.end + ' bounds tomorrow\'s start times',
            async ({ staffPage, audit }) => {
                const root = await parkingForm(staffPage, audit, { 'app.parking.bookable_hours': hours });
                await pickDay(staffPage, root, 1);
                const times = await startTimes(staffPage, root);
                // Last start leaves the 30-minute default minimum (time-field).
                expect(Math.min(...times)).toBe(first);
                expect(Math.max(...times)).toBe(last);
                await untouchedParking(staffPage);
            });
    }
    test('parking.bookable_hours unset offers the whole of tomorrow', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.bookable_hours': null });
        await pickDay(staffPage, root, 1);
        const times = await startTimes(staffPage, root);
        // time-field.component.ts also lists the field's current time when it
        // is off the 15-minute step; only the regular options define the window.
        const stepped = times.filter((time) => time % 15 === 0);
        expect(stepped.length).toBeGreaterThan(0);
        expect(Math.min(...stepped)).toBe(0);
        expect(Math.max(...stepped)).toBe(HH(23, 45));
        await untouchedParking(staffPage);
    });
});
