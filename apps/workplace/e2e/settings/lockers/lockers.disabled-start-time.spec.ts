import type { Locator } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    menuValues,
    pickDay,
    test,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');

test.describe('lockers.disabled_start_time', () => {
    for (const disabled of [true, false]) {
        test('lockers.disabled_start_time ' + disabled + ' locks the start time', async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, { 'app.lockers.disabled_start_time': disabled });
            // Tomorrow, so "no options left today" cannot disable the trigger on its own.
            await pickDay(staffPage, root, 1);
            if (disabled) await expect(lockerStart(root)).toBeDisabled();
            else {
                await expect(lockerStart(root)).toBeEnabled();
                expect((await menuValues(staffPage, lockerStart(root), 'data-time')).length).toBeGreaterThan(0);
            }
            await untouchedLocker(staffPage);
        });
    }
});
