import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    type Debug,
    lockerForm,
    test,
    timezoneBuildings,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');

/** The start TimeField's bound timezone ('' when the building time is off). */
const startTimezone = (root: Locator) =>
    root.locator('a-time-field[name="start-time"]').evaluate((element) => {
        const field = (window as Debug).ng?.getComponent(element) as { timezone(): string } | undefined;
        return field?.timezone();
    });

/** The effective value of a setting, as the app reads it (unset is null). */
const effective = (page: Page, key: string) =>
    page.evaluate((name) => (window as Debug).setting?.(name) ?? null, key);

// Settings: bookings.use_building_timezone and lockers.use_building_timezone
// on the locker form. LockerFormDetails shows the building time when
// lockers.use_building_timezone ?? bookings.use_building_timezone is true
// (locker-form-details.component.ts, PPT-2871), so an explicit lockers value
// overrides bookings and an unset lockers value falls back to it.
const SCENARIOS = [
    { label: 'bookings.use_building_timezone true gates the locker building-time label', bookings: true, lockers: null, shown: true },
    { label: 'bookings.use_building_timezone false gates the locker building-time label', bookings: false, lockers: null, shown: false },
    { label: 'lockers.use_building_timezone true gates the locker building-time label', bookings: false, lockers: true, shown: true },
    // PPT-2871
    {
        label: 'lockers.use_building_timezone false overrides bookings.use_building_timezone true and hides the locker building-time label',
        bookings: true,
        lockers: false,
        shown: false,
    },
];

test.describe('use_building_timezone on the locker form', () => {
    for (const scenario of SCENARIOS) {
        test(`${scenario.label}`, async ({ staffPage, audit }) => {
            await timezoneBuildings(staffPage, audit);
            const root = await lockerForm(staffPage, audit, {
                'app.bookings.use_building_timezone': scenario.bookings,
                'app.lockers.use_building_timezone': scenario.lockers,
            });
            expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
            await expect(lockerStart(root)).toBeVisible();
            await expect
                .poll(() => effective(staffPage, 'app.bookings.use_building_timezone'))
                .toBe(scenario.bookings);
            await expect
                .poll(() => effective(staffPage, 'app.lockers.use_building_timezone'))
                .toBe(scenario.lockers);
            // The bound timezone proves the effective setting, so the label
            // count below is not inferred from waiting.
            await expect
                .poll(() => startTimezone(root), { message: 'locker start time-field timezone' })
                .toBe(scenario.shown ? 'Pacific/Honolulu' : '');
            await expect(lockerStart(root).locator('div.truncate.text-xs')).toHaveCount(scenario.shown ? 1 : 0);
            await untouchedLocker(staffPage);
        });
    }
});
