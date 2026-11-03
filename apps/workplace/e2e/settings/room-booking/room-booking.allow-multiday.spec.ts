
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowDetailsComponent: multiday swaps duration for explicit end-date/time.
for (const enabled of [false, true]) {
    test('room settings: events.allow_multiday ' + enabled + ' switches duration to explicit end date and time', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.allow_multiday': enabled });
        await expect(details.locator('date-field')).toHaveCount(enabled ? 2 : 1);
        await expect(details.locator('time-field[name="end-time"]')).toHaveCount(enabled ? 1 : 0);
        await expect(details.locator('duration-field')).toHaveCount(enabled ? 0 : 1);
        await expect(details.locator('time-field[name="time"] button[time-field]')).toBeEnabled();
        if (enabled) await expect(details.locator('time-field[name="end-time"] button[time-field]')).toBeEnabled();
        else await expect(details.locator('duration-field button[duration-field]')).toBeEnabled();
        await untouchedRoom(staffPage);
    });
}
