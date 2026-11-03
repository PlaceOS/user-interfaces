import type { Locator } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    pickDay,
    test,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const lockerDate = (root: Locator) => root.locator('a-date-field button').first();
const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');
const lockerEnd = (root: Locator) => root.locator('a-duration-field button[duration-field]');

test.describe('lockers.disabled_date_select', () => {
    test('lockers.disabled_date_select true locks the date, start time and end time and hides All day',
        async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, { 'app.lockers.disabled_date_select': true });
            await expect(root.locator('mat-checkbox')).toHaveCount(0);
            await expect(lockerDate(root)).toBeVisible();
            await expect(lockerDate(root)).toBeDisabled();
            await expect(lockerStart(root)).toBeDisabled();
            await expect(lockerEnd(root)).toBeDisabled();
            await untouchedLocker(staffPage);
        });

    test('lockers.disabled_date_select false leaves the date, start time and end time editable and shows All day',
        async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, { 'app.lockers.disabled_date_select': false });
            await expect(root.locator('mat-checkbox')).toHaveCount(1);
            await expect(lockerDate(root)).toBeEnabled();
            // Tomorrow, so "no options left today" cannot disable the time triggers on its own.
            await pickDay(staffPage, root, 1);
            await expect(lockerStart(root)).toBeEnabled();
            await expect(lockerEnd(root)).toBeEnabled();
            await untouchedLocker(staffPage);
        });
});
