
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowDetailsComponent: recurrence is available only when enabled and <= 24h.
for (const enabled of [false, true]) {
    test('room settings: events.allow_recurrence ' + enabled + ' gates recurrence for a timed meeting', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.allow_recurrence': enabled });
        await expect(details.locator('recurrence-field')).toHaveCount(enabled ? 1 : 0);
        if (enabled) await expect(details.locator('recurrence-field mat-select')).toBeVisible();
        await expect(details.locator('duration-field button[duration-field]')).toBeEnabled();
        await untouchedRoom(staffPage);
    });
}
