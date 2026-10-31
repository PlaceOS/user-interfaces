
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowDetailsComponent: events.can_book_for_others gates host-select-field.
for (const enabled of [false, true]) {
    test('room settings: events.can_book_for_others ' + enabled + ' gates the organiser control', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.can_book_for_others': enabled });
        await expect(details.locator('host-select-field')).toHaveCount(enabled ? 1 : 0);
        if (enabled) {
            await expect(details.locator('host-select-field mat-select')).toBeVisible();
        }
        await untouchedRoom(staffPage);
    });
}
