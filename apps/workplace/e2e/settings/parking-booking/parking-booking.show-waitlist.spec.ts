import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, BOOKING, prepareSettings, type Settings, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// booking-card.component.ts (show_waitlist -> status 'info',
// hide_selected_space -> "Parking" label). The schedule's
// parking list GET (schedule-state.service.ts) returns one synthetic
// row, timed when the GET arrives so it overlaps the day the list shows;
// no card, modal or action is clicked.
async function scheduleCard(page: Page, audit: Audit, overrides: Settings, row: Record<string, unknown>) {
    const fixture = await prepareSettings(page, { ...BOOKING, ...overrides }, {
        audit,
        base: {},
        landingRooms: false,
        bookings: {
            types: ['parking', 'locker'],
            rows: async (type) => {
                if (type !== 'parking') return [];
                await expect.poll(() => fixture.user().then(() => true, () => false),
                    { message: 'the app must read the staff identity' }).toBe(true);
                const me = await fixture.user();
                const start = Math.floor(Date.now() / 1000) - 60;
                return [{
                    id: 'e2e-settings-parking-1', booking_type: 'parking', title: 'E2E Synthetic Reservation',
                    asset_id: 'e2e-settings-bay', asset_name: 'E2E Synthetic Bay 7', description: '',
                    booking_start: start, booking_end: start + 1800,
                    user_id: me.id, user_email: me.email, user_name: me.name,
                    rejected: false, deleted: false, zones: [], extension_data: {}, ...row,
                }];
            },
        },
        bootstrap: true,
    });
    await page.goto('/#/your-bookings?view=list');
    await fixture.ready();
    const card = page.locator('a[name="view-booking-details"]').filter({ hasText: 'E2E Synthetic Reservation' });
    await expect(card).toHaveCount(1);
    expect(audit.fixtures['parking/locker bookings'] ?? 0).toBeGreaterThan(0);
    return card;
}

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
