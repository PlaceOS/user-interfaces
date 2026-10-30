// Setting: desks.auto_checkin (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Held setting controls are listed in CONTROLS. The harness audit runs with
// auditHttp 'local-only': Google Fonts css2 is answered with empty CSS and any
// other non-local request fails the test. The browser clock is frozen (see
// frozenInstant).
//
// Exact setting key(s): app.desks.auto_checkin
//                       (legacy app.desk.auto_checkin is held false as a
//                        control, so only the current key can hide the control)
// Unique settings: 1
// Scenarios: 2
//   1. app.desks.auto_checkin false: a near-start desk booking still offers
//      the check-in control in the booking details modal.
//   2. app.desks.auto_checkin true: the same booking offers no check-in
//      control, because a detected person is already treated as checked in.
//
// Omitted scenario (not source-supported by GET fixtures here):
//   The Explore-map half of the setting (an in-use desk painted pending
//   `#ffb300` with the setting off, busy `#e53935` with it on) is NOT covered.
//   `ExploreDesksService` only loads bookings when `options.use_api` is true or
//   the map has a future date; the Workplace Explore page never sets either, so
//   in-use ids arrive solely from the AreaManagement driver binding
//   (`processBindingChange`). A browser-only HTTP fixture cannot populate that
//   binding without a live driver, and the Explore page is not opened here.
//
// Preconditions/fixtures:
//   - Read-only local stack (harness `test`, GET-only route stubs, no writes).
//   - `/your-bookings?view=list` with one synthetic, owned, approved desk
//     booking starting five minutes from now. `asset_id` uses the desk shape id
//     convention (`e2e-auto-checkin-desk-shape`) so the same booking would be
//     the in-use row if the map path were reachable.
//   - `desks.hide_checkin`, `desk.hide_checkin` and `bookings.hide_checkin` are
//     explicitly false so the only thing gating the control is auto_checkin.
//   - Parking bootstrap GETs are answered locally (every booking card injects
//     ParkingService), and no parking assets are listed.
//   - Browser clock is frozen so the booking stays in its "upcoming" window.
//   - Check-in is never clicked; the modal is closed with Escape.
//
// Expected behaviour (source):
//   BookingDetailsModal renders the check-in button only when `auto_checkin()`
//   is false. That computed reads `desks.auto_checkin`, falling back to the
//   legacy `desk.auto_checkin`, and is true when the booking type's key is true.
//
// Source references:
//   libs/bookings/src/lib/booking-details-modal.component.ts
//   libs/explore/src/lib/explore-desks.service.ts
// ---------------------------------------------------------------------------
import type { Page } from '@playwright/test';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type Audit,
    CONTROLS,
    fixtureHits,
    getOnly,
    type Identity,
    prepareSettings,
    type Settings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'local-only' });

const BOOKING_ID = 9400101;
const DESK_ASSET = 'e2e-auto-checkin-desk-shape';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.basic_user_search': true,
    'app.desks.auto_allocation': false,
    'app.desks.can_book_for_others': false,
    'app.bookings.can_book_for_others': false,
    'app.desks.allow_groups': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
    'app.desk.auto_checkin': false,
    'app.desks.hide_checkin': false,
    'app.desk.hide_checkin': false,
    'app.bookings.hide_checkin': false,
};

/**
 * prepareSettings with BASE and CONTROLS, en-US. Every booking card injects
 * ParkingService, whose constructor resolves the hidden asset categories and
 * types; the 'e2e-auto-checkin' catalogue answers them locally.
 */
async function preparePage(page: Page, audit: Audit, overrides: Settings) {
    return prepareSettings(page, overrides, {
        audit,
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-auto-checkin',
        locale: 'en-US',
        landingRooms: false,
    });
}

async function deskBooking(
    fixture: { user: () => Promise<Identity> },
    start: number,
    end: number,
) {
    const user = await fixture.user();
    return {
        id: BOOKING_ID,
        booking_type: 'desk',
        type: 'desk',
        title: 'Settings auto check-in booking',
        asset_id: DESK_ASSET,
        asset_name: 'Settings auto check-in desk',
        booking_start: start,
        booking_end: end,
        user_id: user.id,
        user_email: user.email,
        user_name: user.name,
        booked_by_id: user.id,
        booked_by_email: user.email,
        approved: true,
        checked_in: false,
        rejected: false,
        deleted: false,
        zones: [],
        extension_data: {},
    };
}

/**
 * Freeze Date.now (timers keep running) so the near-start window holds.
 * Frozen at the real time and never ahead of it, so the minted token stays
 * valid; held at least two hours before UTC midnight (the browser runs in
 * Etc/UTC) so the booking stays inside today's listing.
 */
function frozenInstant() {
    const midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    return new Date(Math.min(Date.now(), midnight.valueOf() - 2 * 3_600_000));
}

/** The schedule's desk listing request. */
function isDeskListing(url: URL) {
    return (
        url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'desk'
    );
}

/** The schedule lists one local day for the desk type only. */
function deskListing(fixture: { user: () => Promise<Identity> }, now: number) {
    return async (url: URL) => {
        const start = Number(url.searchParams.get('period_start'));
        const end = Number(url.searchParams.get('period_end'));
        if (!(start > 0 && end > start))
            throw new Error('the desk listing must carry a valid period');
        const booking = await deskBooking(fixture, now + 300, now + 3900);
        return booking.booking_start < end && booking.booking_end > start
            ? [booking]
            : [];
    };
}

// One visible check-in control without auto_checkin, none with it.
const SCENARIOS = [
    {
        auto_checkin: false,
        verb: 'shows',
        controls: 1,
        message: 'without auto_checkin the check-in control is offered',
    },
    {
        auto_checkin: true,
        verb: 'hides',
        controls: 0,
        message: 'auto_checkin treats the desk as already checked in',
    },
];

for (const scenario of SCENARIOS) {
    test(`desks.auto_checkin ${scenario.auto_checkin} ${scenario.verb} the booking check-in control`, async ({
        staffPage,
        audit,
    }) => {
        const fixture = await preparePage(staffPage, audit, {
            'app.desks.auto_checkin': scenario.auto_checkin,
        });

        const instant = frozenInstant();
        await staffPage.clock.setFixedTime(instant);
        const now = Math.floor(instant.valueOf() / 1000);

        await getOnly(
            staffPage,
            audit,
            'desk booking listing',
            isDeskListing,
            deskListing(fixture, now),
            { onError: 'throw' },
        );

        await staffPage.goto('/#/your-bookings?view=list');
        const schedule = new SchedulePage(staffPage);
        await fixture.ready();
        await expect(schedule.card(BOOKING_ID)).toBeVisible();
        expect(
            fixtureHits(audit, 'desk booking listing'),
            'the desk booking must be read from the GET fixture',
        ).toBeGreaterThan(0);

        const modal = await schedule.openDetails(BOOKING_ID);
        await expect(modal).toContainText('Settings auto check-in booking');
        await expect(modal.locator('status-pill')).toBeVisible();
        const control = schedule.checkInButton(modal);
        // The count of matching controls, then of visible ones.
        await expect(control, scenario.message).toHaveCount(scenario.controls);
        await expect(
            control.filter({ visible: true }),
            scenario.message,
        ).toHaveCount(scenario.controls);

        // Never click check-in, checkout, edit, cancel or the overflow menu.
        await staffPage.keyboard.press('Escape');
        await expect(modal).toHaveCount(0);
    });
}
