
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowDetailsComponent: allow_all_day gates checkbox; all_day disables time/duration.
for (const enabled of [false, true]) {
    test('room settings: events.allow_all_day ' + enabled + ' gates the local all-day checkbox and timed controls', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.allow_all_day': enabled });
        const checkbox = details.locator('mat-checkbox input[type="checkbox"]');
        const time = details.locator('time-field[name="time"] button[time-field]');
        const duration = details.locator('duration-field button[duration-field]');
        await expect(checkbox).toHaveCount(enabled ? 1 : 0);
        await expect(time).toBeEnabled(); await expect(duration).toBeEnabled();
        if (enabled) {
            await expect(checkbox).not.toBeChecked(); await checkbox.check();
            await expect(checkbox).toBeChecked();
            await expect(time).toBeDisabled(); await expect(duration).toBeDisabled();
            await checkbox.uncheck();
            await expect(time).toBeEnabled(); await expect(duration).toBeEnabled();
        }
        await untouchedRoom(staffPage);
    });
}
