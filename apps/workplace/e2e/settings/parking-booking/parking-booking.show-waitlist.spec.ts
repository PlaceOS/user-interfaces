import { expect } from '../../../../../e2e/support/fixtures';
import { scheduleCard, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// booking-card.component.ts (show_waitlist -> status 'info'). The schedule's
// parking list GET returns one synthetic row (settings-harness scheduleCard);
// no card, modal or action is clicked.
test.describe('parking.show_waitlist', () => {
    for (const shown of [true, false]) {
        test('parking.show_waitlist ' + shown + ' colours a wait-listed request', async ({ staffPage, audit }) => {
            // parkingRequestStatus (booking.utilities.ts): unapproved, not manual, process_state wait_list.
            const card = await scheduleCard(staffPage, audit, { 'app.parking.show_waitlist': shown },
                { approved: false, process_state: 'wait_list' });
            const pill = card.locator('status-pill > div');
            await expect(pill).toHaveClass(shown ? /\bbg-info-light\b/ : /\bbg-warning-light\b/);
            await expect(pill).not.toHaveClass(shown ? /\bbg-warning-light\b/ : /\bbg-info-light\b/);
        });
    }
});
