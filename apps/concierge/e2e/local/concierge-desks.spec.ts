/**
 * CON-DESK-01 / 05 / 07 / 08 / 09 — the concierge desk-bookings and
 * desk-management screens.
 *
 * The first area written after the access specs, and the one that best shows
 * what concierge is FOR: every test here acts on a booking belonging to
 * somebody else. The workplace desk specs assert the opposite rule — that one
 * user cannot see or touch another's booking — so these two suites together
 * describe the boundary from both sides.
 *
 * ## Two things measured on 2026-09-17 that shaped these tests
 *
 * 1. **There is no "cancel" on this screen, so CON-DESK-03 cannot exist.** That
 *    row read "cancelling somebody else's desk booking from concierge removes
 *    it on the backend". The actions column holds exactly one control, "View
 *    Booking History". What the page actually offers against another person's
 *    booking is approve/reject and check-in/check-out.
 *
 *    Those three are NEW scenarios, so they carry new ids — CON-DESK-07, 08 and
 *    09 — rather than being filed under CON-DESK-03. Re-using that id would
 *    have left the plan claiming a cancel test exists when it does not.
 *    CON-DESK-03 is marked *not offered by the UI* in the plan instead.
 *
 * 2. **The listing shows one day, and `?date=` does not work on this route.**
 *    `DesksComponent` reads only `zone_ids` from the query string and returns
 *    early without it; the `date` parameter is handled by
 *    `desks-topbar.component.ts`, which is referenced only by unit tests and is
 *    not rendered here. So these specs book for TODAY.
 *
 * ## Why every assertion ends at the backend
 *
 * A row changing to "Approved" proves the component re-rendered, nothing more.
 * Concierge acts on other people's bookings, so "the screen said so" is exactly
 * the failure mode that matters — each test re-reads the booking through the
 * API and asserts on the stored record.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    createBookingFor,
    cleanUpBookings,
    seededDesks,
} from '../../../../e2e/support/concierge/concierge.api';
import {
    chooseRowAction,
    columnIndex,
    openDeskBookings,
    openDeskManagement,
    readTable,
    waitForAnyRow,
    waitForRow,
} from '../../../../e2e/support/concierge/desks.page';
import { getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { roleFor } from '../../../../e2e/support/env';

/**
 * Today, at a fixed hour.
 *
 * The listing only shows today (see the header), so these cannot use the
 * day-offset slots the other areas use. 16:00 is chosen to sit clear of the
 * workplace desk specs, which work in today +1 to +4 hours from whenever they
 * run. The hour may already have passed on a late run; that is fine, because
 * nothing here depends on the booking being in the future — a past booking is
 * still listed, approved and checked in.
 */
function todayAt(hour: number, minutes = 60) {
    const start = new Date();
    start.setHours(hour, 0, 0, 0);
    const seconds = Math.floor(start.valueOf() / 1000);
    return { start: seconds, end: seconds + minutes * 60 };
}

/**
 * A window that CONTAINS the present moment.
 *
 * Check-in needs this. Measured 2026-09-17: choosing "Check-in" against a
 * FUTURE booking opens the menu and accepts the click, but fires no request at
 * all and the booking stays checked out — the app will only check somebody in
 * while their booking is actually running. A test that booked a tidy future
 * hour therefore failed for a reason that had nothing to do with concierge.
 */
function windowAroundNow(minutes = 30) {
    const now = Math.floor(Date.now() / 1000);
    return { start: now - minutes * 60, end: now + minutes * 60 };
}

/** The holder for these bookings: a plain staff user, never the concierge. */
const HOLDER = roleFor('staff', 0);

test.describe('concierge desk bookings', () => {
    const created: number[] = [];

    test.afterEach(async ({ adminApi }) => {
        await cleanUpBookings(adminApi, created.splice(0));
    });

    test('CON-DESK-01: the listing shows another user\'s booking, naming them and the booker', async ({
        adminPage,
        adminApi,
    }) => {
        const desks = await seededDesks(adminApi);
        const desk = desks[desks.length - 1];
        const title = uniqueTitle('CON-DESK-01');
        const { start, end } = todayAt(16);

        const booking = await createBookingFor(adminApi, {
            type: 'desk',
            asset_id: desk.id,
            asset_name: desk.name,
            title,
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        await openDeskBookings(adminPage);
        const row = await waitForRow(adminPage, title);
        const snapshot = await readTable(adminPage);

        // The whole point of a concierge view: the booking belongs to somebody
        // else and is still shown, with BOTH identities on the row.
        expect(
            row[columnIndex(snapshot, 'user_email')],
            'the "Person" column must name the person the desk is booked FOR, not the concierge',
        ).toContain(HOLDER.email);
        expect(
            row[columnIndex(snapshot, 'booked_by_email')],
            'the "Booked By" column must name the concierge who made it',
        ).toContain('support@place.tech');
        expect(
            row[columnIndex(snapshot, 'asset_name')],
            'and the desk it is against',
        ).toContain(desk.name);
    });

    test('CON-DESK-07: approving another user\'s desk booking is stored on the backend', async ({
        adminPage,
        adminApi,
    }) => {
        const desks = await seededDesks(adminApi);
        const desk = desks[desks.length - 1];
        const title = uniqueTitle('CON-DESK-07');
        const { start, end } = todayAt(17);

        const booking = await createBookingFor(adminApi, {
            type: 'desk',
            asset_id: desk.id,
            asset_name: desk.name,
            title,
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        // It starts unapproved — asserted, so a booking that arrived approved
        // could not make the rest of this test pass for free.
        expect(
            (await getBooking(adminApi, booking.id)).approved,
            'a new desk booking should not already be approved',
        ).toBe(false);

        await openDeskBookings(adminPage);
        await waitForRow(adminPage, title);
        await chooseRowAction(adminPage, title, 'status', 'Approve Desk');

        await expect
            .poll(
                async () => {
                    const after = await getBooking(adminApi, booking.id);
                    return { approved: after.approved, rejected: after.rejected };
                },
                {
                    message:
                        'approving from the concierge listing must store the approval. ' +
                        'The row re-rendering as "Approved" is not enough — this reads ' +
                        'the booking back through the API',
                    timeout: 20_000,
                },
            )
            .toEqual({ approved: true, rejected: false });

        expect(
            (await getBooking(adminApi, booking.id)).approver_email,
            'and it should record WHO approved it — the concierge, not the holder',
        ).toBe('support@place.tech');
    });

    test('CON-DESK-08: rejecting another user\'s desk booking is stored on the backend', async ({
        adminPage,
        adminApi,
    }) => {
        const desks = await seededDesks(adminApi);
        const desk = desks[desks.length - 1];
        const title = uniqueTitle('CON-DESK-08');
        const { start, end } = todayAt(18);

        const booking = await createBookingFor(adminApi, {
            type: 'desk',
            asset_id: desk.id,
            asset_name: desk.name,
            title,
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        await openDeskBookings(adminPage);
        await waitForRow(adminPage, title);
        await chooseRowAction(adminPage, title, 'status', 'Reject Desk');

        await expect
            .poll(
                async () => (await getBooking(adminApi, booking.id)).rejected,
                {
                    message:
                        'rejecting from the concierge listing must store the rejection. ' +
                        'This is the closest thing the screen offers to the plan\'s ' +
                        '"cancel somebody else\'s booking" — there is no cancel control here',
                    timeout: 20_000,
                },
            )
            .toBe(true);
    });

    test('CON-DESK-09: checking another user in from concierge is stored', async ({
        adminPage,
        adminApi,
    }) => {
        const desks = await seededDesks(adminApi);
        // A desk of its OWN, unlike the other tests here. This booking spans the
        // present moment, so on a late run it could otherwise overlap the fixed
        // hours the approve/reject tests use, and a desk is exclusive.
        const desk = desks[desks.length - 2] ?? desks[desks.length - 1];
        const title = uniqueTitle('CON-DESK-09');
        const { start, end } = windowAroundNow();

        const booking = await createBookingFor(adminApi, {
            type: 'desk',
            asset_id: desk.id,
            asset_name: desk.name,
            title,
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        expect(
            (await getBooking(adminApi, booking.id)).checked_in,
            'a new booking should not already be checked in',
        ).toBe(false);

        await openDeskBookings(adminPage);
        await waitForRow(adminPage, title);
        await chooseRowAction(adminPage, title, 'checked_in', 'Check-in');

        await expect
            .poll(
                async () => (await getBooking(adminApi, booking.id)).checked_in,
                {
                    message:
                        'a concierge checking somebody in at the front desk is the core ' +
                        'of this app, and it must reach the backend. If this fails, check ' +
                        'the booking window FIRST: check-in silently does nothing for a ' +
                        'booking that is not currently running (no request is sent at ' +
                        'all), so the window must contain now. Worth noting this is ' +
                        'coverage the workplace suite could not get for rooms, where ' +
                        'check-in needs a live Bookings driver module',
                    timeout: 20_000,
                },
            )
            .toBe(true);
    });
});

test.describe('concierge desk management', () => {
    test('CON-DESK-05: desk management lists the seeded desks', async ({
        adminPage,
        adminApi,
    }) => {
        const desks = await seededDesks(adminApi);

        await openDeskManagement(adminPage);
        // Rows arrive after the header on this page — see waitForAnyRow.
        const snapshot = await waitForAnyRow(adminPage);

        expect(
            snapshot.rows.length,
            `desk management showed ${snapshot.rows.length} row(s) but the stack seeds ` +
                `${desks.length} desks. Columns rendered: ${snapshot.column_ids.join(', ')}`,
        ).toBeGreaterThanOrEqual(desks.length);

        // Asserting on the seeded desks by name rather than on a count alone:
        // a page listing the right NUMBER of the wrong things would pass a count.
        const listed = snapshot.rows.flat().join(' | ');
        for (const desk of desks) {
            expect(
                listed,
                `desk management should list the seeded desk "${desk.name}"`,
            ).toContain(desk.name);
        }
    });
});
