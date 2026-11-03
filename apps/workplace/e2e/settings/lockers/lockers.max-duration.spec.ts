import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    menuValues,
    test,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

test.describe('lockers.max_duration', () => {
    for (const max of [120, 240]) {
        test('lockers.max_duration ' + max + ' caps the hourly duration choices', async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, { 'app.lockers.max_duration': max });
            const values = await menuValues(staffPage, root.locator('button[duration-field]'), 'data-duration');
            // DurationField caps the stepped hours (min and step 60) at max. The
            // locker form's custom durations depend on the weekday and hour and
            // are exempt from max.
            const custom = await root.evaluate((element) => {
                const debug = window as Window & { ng?: { getComponent(element: Element):
                    { custom_durations(): number[] } | undefined } };
                return debug.ng?.getComponent(element)?.custom_durations();
            });
            expect(custom, 'locker component exposes its source-generated custom durations').toBeDefined();
            const hourly = Array.from({ length: max / 60 }, (_, index) => (index + 1) * 60);
            expect(values.filter((value) => value <= max)).toEqual(hourly);
            expect(values).toEqual([...new Set([...hourly, ...custom!])].sort((a, b) => a - b));
            await untouchedLocker(staffPage);
        });
    }
});
