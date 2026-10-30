import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    lockerForm,
    test,
    untouchedLocker,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/**
 * Read-only probe of LockerFormDetailsComponent's booking form model. Its async
 * ngOnInit sets all_day = !allow_time_changes || all_day after the org loads, so
 * with all_day_default false, all_day true proves the setting has been applied.
 * Fails closed if the component or model is unavailable.
 */
function lockerAllDay(page: Page) {
    return page.locator('new-locker-form-details').evaluate((element) => {
        const component = (
            window as Window & { ng?: { getComponent(element: Element): unknown } }
        ).ng?.getComponent(element) as { model?: () => { all_day?: boolean } } | undefined;
        if (!component?.model) throw new Error('locker form model is unavailable');
        return !!component.model().all_day;
    });
}

test.describe('lockers.allow_time_changes', () => {
    for (const allowed of [true, false]) {
        test('lockers.allow_time_changes ' + allowed + ' gates the All day option', async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, {
                'app.lockers.allow_time_changes': allowed, 'app.lockers.allow_all_day': true,
            });
            await expect(root.locator('mat-checkbox')).toHaveCount(allowed ? 1 : 0);
            await expect(root.locator('a-date-field')).toBeVisible();
            // Main effect: ngOnInit forces all_day when time changes are not
            // allowed, which removes the time row (start time + duration). Wait
            // for that model state first, so a missing row is not just "not yet
            // rendered" (the date field can render before ngOnInit applies it).
            await expect
                .poll(() => lockerAllDay(staffPage), {
                    message: 'booking form all_day after ngOnInit applies allow_time_changes',
                })
                .toBe(!allowed);
            await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(allowed ? 1 : 0);
            await expect(root.locator('a-duration-field')).toHaveCount(allowed ? 1 : 0);
            await untouchedLocker(staffPage);
            // Re-checked after the view settled: the time row state holds.
            expect(await lockerAllDay(staffPage), 'all_day still matches the setting').toBe(!allowed);
            await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(allowed ? 1 : 0);
        });
    }
});
