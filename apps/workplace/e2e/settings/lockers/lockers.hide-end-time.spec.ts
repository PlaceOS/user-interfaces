import type { Locator } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    test,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');

test.describe('lockers.hide_end_time', () => {
    for (const hidden of [true, false]) {
        test('lockers.hide_end_time ' + hidden + ' controls the end-time field', async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, { 'app.lockers.hide_end_time': hidden });
            await expect(root.locator('a-duration-field')).toHaveCount(hidden ? 0 : 1);
            await expect(lockerStart(root)).toHaveCount(1);
            await untouchedLocker(staffPage);
        });
    }
});
