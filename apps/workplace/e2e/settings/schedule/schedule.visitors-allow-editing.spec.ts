import { expect } from '../../../../../e2e/support/fixtures';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { getOnly, PIXEL, prepareSettings, type Settings, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['visitor-invite'], 'app.chat.enabled': false, 'app.global_search': false,
    'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true, 'app.use_region': false, 'app.use_geolocation': false,
    'app.allow_dark_mode': false, 'app.logo_light': PIXEL,
    'app.bookings.multiple_visitors': false, 'app.bookings.all_day_default': false,
    'app.bookings.can_book_for_anyone': false, 'app.bookings.can_book_for_others': false,
    'app.visitors.can_book_for_anyone': false, 'app.visitors.can_book_for_others': false,
    'app.visitors.allow_all_day': false, 'app.bookings.use_building_timezone': false,
    'app.visitors.use_building_timezone': false, 'app.visitors.bookable_hours': null,
    'app.bookings.bookable_hours': null, 'app.visitors.reason_required': false,
};
const HOUR = 3600_000;
/**
 * The fixed browser time: the latest 10:00 UTC at or before the real time, up
 * to 24 h back. The browser clock is never ahead of the real time, and the
 * synthetic booking (one to two hours later) stays on the same UTC day.
 */
const NOW_MS = (() => {
    const real = Date.now();
    const ten = new Date(real);
    ten.setUTCHours(10, 0, 0, 0);
    return ten.valueOf() <= real ? ten.valueOf() : ten.valueOf() - 24 * HOUR;
})();
const VISITOR_BOOKING = 9100211;

for (const allowed of [true, false]) {
    test('visitors.allow_editing ' + allowed + ' gates Edit for a synthetic owned visitor booking',
        async ({ staffPage, audit }) => {
            const fixture = await prepareSettings(staffPage, {
                'app.features': ['visitor-invite'], 'app.visitors.allow_editing': allowed,
            }, { audit, base: BASE, landingRooms: false, locale: 'en-US' });
            // Freeze Date.now (timers keep running) so the upcoming window holds.
            await staffPage.clock.install({ time: NOW_MS });
            await staffPage.clock.setFixedTime(NOW_MS);
            const now = NOW_MS / 1000;
            // ScheduleStateService: GET /api/staff/v1/bookings?period_start&period_end&type=visitor&... (raw array).
            await getOnly(staffPage, audit, 'visitor booking listing', (url) =>
                url.pathname === '/api/staff/v1/bookings' && url.searchParams.get('type') === 'visitor', async (url) => {
                const start = Number(url.searchParams.get('period_start'));
                const end = Number(url.searchParams.get('period_end'));
                if (!(start > 0 && end > start)) throw new Error('listing must carry a valid period');
                const user = await fixture.user();
                const booking = {
                    id: VISITOR_BOOKING, booking_type: 'visitor', type: 'visitor', title: 'E2E visitor edit visibility',
                    asset_id: 'e2e-settings-visitor@example.invalid', asset_name: 'E2E Visitor',
                    booking_start: now + 3600, booking_end: now + 7200,
                    user_id: user.id, user_email: user.email, user_name: user.name,
                    booked_by_id: user.id, booked_by_email: user.email,
                    approved: true, checked_in: false, rejected: false, deleted: false,
                    zones: [], extension_data: {},
                };
                return booking.booking_start < end && booking.booking_end > start ? [booking] : [];
            });
            await staffPage.goto('/#/your-bookings?view=list');
            await fixture.ready();
            const schedule = new SchedulePage(staffPage);
            await expect(schedule.card(VISITOR_BOOKING)).toBeVisible();
            // booking-card -> ParkingService resolves hidden parking types from the GET fixture.
            await expect.poll(() => audit.fixtures['hidden types'] ?? 0).toBeGreaterThan(0);
            const modal = await schedule.openDetails(VISITOR_BOOKING);
            await expect(modal).toContainText('E2E visitor edit visibility');
            // The menu always has Cancel (can_cancel), so it opens in both states.
            await schedule.openOverflowMenu(modal);
            expect(await schedule.menuAction('delete'), 'Cancel is offered in both states').not.toBeNull();
            const edit = await schedule.menuAction('edit');
            if (allowed) expect(edit, 'Edit must be offered for a visitor booking').not.toBeNull();
            else expect(edit, 'Edit must not be offered for a visitor booking').toBeNull();
            // Dismiss the menu and wait for its animated overlay to detach.
            // The modal's header close button only closes the dialog; no action runs.
            await staffPage.keyboard.press('Escape');
            await expect(staffPage.locator('.cdk-overlay-container [role="menu"]')).toHaveCount(0);
            await modal.locator('button[mat-dialog-close]').filter({
                has: staffPage.locator('icon', { hasText: /^\s*close\s*$/ }),
            }).click();
            await expect(modal).toHaveCount(0);
        });
}
