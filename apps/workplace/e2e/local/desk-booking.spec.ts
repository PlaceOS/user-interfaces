/**
 * WP-E2E-05 — book a desk through the full UI, as a NON-ADMIN, against a real
 * local backend.
 *
 * This is the first spec that makes the stack do actual work rather than just
 * answer 200s, and the first to lean on the placeholder-tenant finding: staff-api
 * rejects every /bookings call until a tenant exists, but desks need no calendar
 * credentials, so this flow needs nothing external.
 *
 * Two isolation rules make it safe in parallel:
 *  - Each worker books its OWN desk (a desk is exclusive for a time range).
 *  - Each test SWEEPS that desk before booking, so a previous crashed run cannot
 *    poison it. The bookings are all-day, so a leaked one would otherwise hold
 *    the desk for the remainder of the day and every later run would fail with
 *    something that looks unrelated.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import { bookDeskViaUI } from '../../../../e2e/support/flows';
import {
    deleteBooking,
    getBooking,
    listBookings,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';

/** Window wide enough to cover an all-day booking made in any timezone. */
const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

test.describe('desk booking', () => {
    test('a non-admin books a desk in the UI and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Desk');
        let booking_id: number | undefined;

        const swept = await releaseAsset(staffApi, 'desk', desk.id, window_from(), window_to());
        if (swept) console.log(`  swept ${swept} stale booking(s) off ${desk.id}`);

        try {
            const created = await bookDeskViaUI(staffPage, desk.name, title);
            booking_id = created.id;

            expect(created.id, 'the API returned a booking id').toBeTruthy();
            expect(created.asset_id, 'the booking is against this worker’s desk').toBe(desk.id);
            expect(created.title, 'the title we typed reached the backend').toBe(title);

            // The UI reached its success state — proof the app believed it too,
            // not merely that a POST happened.
            await expect(staffPage).toHaveURL(/#\/book\/desk\/success/);

            // Read it back independently of the response we just parsed.
            const stored = await getBooking(staffApi, booking_id);
            expect(stored.booking_type, 'stored as a desk booking').toBe('desk');
            expect(stored.asset_id).toBe(desk.id);
            expect(stored.title).toBe(title);
            expect(stored.deleted, 'not soft-deleted').toBeFalsy();
            expect(stored.rejected, 'not rejected').toBeFalsy();
            expect(
                stored.zones.length,
                'carries its zone hierarchy (org/building/level)',
            ).toBeGreaterThan(0);

            // ...and that it is discoverable through the listing the app uses,
            // not only by direct id lookup.
            const listed = await listBookings(staffApi, 'desk', window_from(), window_to());
            expect(
                listed.map((b) => b.id),
                'the new booking appears in the desk listing',
            ).toContain(booking_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('a deleted desk booking leaves the listing', async ({ staffPage, staffApi }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Desk Cleanup');

        await releaseAsset(staffApi, 'desk', desk.id, window_from(), window_to());

        const created = await bookDeskViaUI(staffPage, desk.name, title);
        expect(
            (await listBookings(staffApi, 'desk', window_from(), window_to())).map((b) => b.id),
            'precondition: the booking is in the listing before we delete it',
        ).toContain(created.id);

        await deleteBooking(staffApi, created.id);

        expect(
            (await listBookings(staffApi, 'desk', window_from(), window_to())).map((b) => b.id),
            'a deleted booking must not come back in the listing — otherwise every ' +
                'spec teardown silently leaks state into the next run',
        ).not.toContain(created.id);
    });
});
