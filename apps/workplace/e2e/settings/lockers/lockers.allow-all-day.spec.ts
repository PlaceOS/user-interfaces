import type { Locator } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    test,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const allDayBox = (root: Locator) => root.locator('mat-checkbox input[type="checkbox"]');
const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');

test.describe('lockers.allow_all_day', () => {

    test('lockers.allow_all_day true shows All day, which hides the time fields', async ({ staffPage, audit }) => {
        const root = await lockerForm(staffPage, audit, { 'app.lockers.allow_all_day': true });
        await expect(allDayBox(root)).toHaveCount(1);
        await expect(root.locator('a-duration-field')).toHaveCount(1);
        await allDayBox(root).check({ force: true });
        await expect(allDayBox(root)).toBeChecked();
        await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(0);
        await expect(root.locator('a-duration-field')).toHaveCount(0);
        await untouchedLocker(staffPage);
    });

    test('lockers.allow_all_day false removes the All day checkbox', async ({ staffPage, audit }) => {
        const root = await lockerForm(staffPage, audit, { 'app.lockers.allow_all_day': false });
        await expect(root.locator('mat-checkbox')).toHaveCount(0);
        await expect(lockerStart(root)).toHaveCount(1);
        await untouchedLocker(staffPage);
    });
});
