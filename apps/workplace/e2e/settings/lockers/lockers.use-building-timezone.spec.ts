import type { Locator } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    test,
    timezoneBuildings,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');

// Settings: bookings.use_building_timezone and lockers.use_building_timezone
// on the locker form. LockerFormDetails shows the building time when either
// key is true (bookings || lockers), so each key is set alone.
const SCENARIOS = [
    { label: 'bookings.use_building_timezone true', bookings: true, lockers: null, shown: true },
    { label: 'bookings.use_building_timezone false', bookings: false, lockers: null, shown: false },
    { label: 'lockers.use_building_timezone true', bookings: false, lockers: true, shown: true },
];

test.describe('use_building_timezone on the locker form', () => {
    for (const scenario of SCENARIOS) {
        test(scenario.label + ' gates the locker building-time label', async ({ staffPage, audit }) => {
            await timezoneBuildings(staffPage, audit);
            const root = await lockerForm(staffPage, audit, {
                'app.bookings.use_building_timezone': scenario.bookings,
                'app.lockers.use_building_timezone': scenario.lockers,
            });
            expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
            await expect(lockerStart(root)).toBeVisible();
            await expect(lockerStart(root).locator('div.truncate.text-xs')).toHaveCount(scenario.shown ? 1 : 0);
            await untouchedLocker(staffPage);
        });
    }
});
