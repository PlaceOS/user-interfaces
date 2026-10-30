// Setting: bookings.hide_checkin (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Read-only: the desk booking is a browser-only GET fixture; check-in is never clicked.
// BookingDetailsModal.can_checkin is false when <type>s.hide_checkin,
// <type>.hide_checkin or bookings.hide_checkin is true; the desk keys are held
// false and auto_checkin is off, so only bookings.hide_checkin can hide it.
// The browser clock is frozen (see frozenInstant) so the synthetic booking
// stays in its upcoming window inside today's listing.
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { getOnly, prepareSettings, type Settings, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const ID = 9100047;

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.chat.enabled': false,
    'app.use_region': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    // Keeps any schedule event listing on PlaceOS bookings, never staff-api /events.
    'app.events.use_bookings': true,
};

/**
 * The real time, never ahead of it (the minted token stays valid), held at
 * least two hours before UTC midnight (the browser runs in Etc/UTC) so a
 * booking 5 to 65 minutes ahead stays inside today's listing.
 */
function frozenInstant() {
    const midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    return new Date(Math.min(Date.now(), midnight.valueOf() - 2 * 3_600_000));
}

for (const hidden of [false, true]) {
    test(`bookings.hide_checkin ${hidden} gates the control on a synthetic owned desk booking`, async ({ staffPage, audit }) => {
        // Every booking-card injects ParkingService, whose constructor effects
        // resolve the hidden asset categories and types (parking-assets.fn.ts);
        // prepareSettings answers those GETs so nothing is created.
        const fixture = await prepareSettings(staffPage, {
            'app.features': ['desks'], 'app.bookings.hide_checkin': hidden,
            'app.desks.hide_checkin': false, 'app.desk.hide_checkin': false,
            'app.desk.auto_checkin': false, 'app.desks.auto_checkin': false,
        }, { audit, base: BASE, locale: 'en-US', landingRooms: false });
        // Freeze Date.now (timers keep running) so the near-start window holds.
        const instant = frozenInstant();
        await staffPage.clock.setFixedTime(instant);
        const now = Math.floor(instant.valueOf() / 1000);
        const booking = async () => {
            const user = await fixture.user();
            return {
                id: ID, booking_type: 'desk', type: 'desk', title: 'Settings check-in visibility',
                asset_id: 'e2e-settings-readonly-desk', asset_name: 'Settings check-in desk',
                booking_start: now + 300, booking_end: now + 3900,
                user_id: user.id, user_email: user.email, user_name: user.name,
                booked_by_id: user.id, booked_by_email: user.email,
                approved: true, checked_in: false, rejected: false, deleted: false,
                zones: [], extension_data: {},
            };
        };
        // ScheduleStateService: GET /api/staff/v1/bookings?period_start&period_end&type=desk&... (raw array).
        // The details modal reuses the card's booking and does not refetch it.
        await getOnly(staffPage, audit, 'desk booking listing', (url) =>
            url.pathname === '/api/staff/v1/bookings' && url.searchParams.get('type') === 'desk', async (url) => {
            const start = Number(url.searchParams.get('period_start'));
            const end = Number(url.searchParams.get('period_end'));
            if (!(start > 0 && end > start)) throw new Error('listing must carry a valid period');
            const data = await booking();
            return data.booking_start < end && data.booking_end > start ? [data] : [];
        });
        // SchedulePage.open assumes visitors; use the existing desk filter and
        // inherited card/modal selectors without enabling unrelated flows.
        await staffPage.goto('/#/your-bookings?view=list');
        const schedule = new SchedulePage(staffPage);
        await fixture.ready();
        await expect(schedule.card(ID)).toBeVisible();
        expect(audit.fixtures['desk booking listing'] ?? 0).toBeGreaterThan(0);
        // A type lookup can come from ParkingService._loadUsers alone;
        // _loadSpaces only runs when the active organisation has parking levels.
        // This proves a bootstrap lookup used the stub, not that spaces exist.
        await expect.poll(() => audit.fixtures['hidden types'] ?? 0,
            { message: 'ParkingService must resolve at least one type from the GET fixture' }).toBeGreaterThan(0);
        const modal = await schedule.openDetails(ID);
        await expect(modal).toContainText('Settings check-in visibility');
        const control = schedule.checkInButton(modal);
        if (hidden) await expect(control).toHaveCount(0);
        else await expect(control).toBeVisible();
        await expect(modal.locator('status-pill')).toBeVisible();
        // Never click check-in, edit, cancel, overflow actions or map controls.
        await staffPage.keyboard.press('Escape');
        await expect(modal).toHaveCount(0);
    });
}
