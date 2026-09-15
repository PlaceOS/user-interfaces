/**
 * VIS-01 / VIS-02 — invite a visitor through the full UI, as a NON-ADMIN,
 * against a real local backend.
 *
 * Deliberately the same shape as `desk-booking.spec.ts`: two tests, one that
 * creates through the real form and asserts hard against what the backend
 * stored, one that proves teardown really tears down. Assertions are folded
 * into the creating test rather than split across more tests, because what is
 * being guarded is a single flow — splitting it would drive the same form three
 * times to check three fields.
 *
 * Three things make visitors different from desks, each of which produced a
 * wrong assumption before it was checked against the running stack:
 *
 *  - A visitor is NOT an exclusive asset. The backend accepts the same visitor
 *    twice in the same slot (VIS-B1), so a leftover booking cannot block a
 *    later run the way a leaked all-day desk booking does. Per-worker, per-slot
 *    addresses are about keeping sweeps disjoint, not about avoiding a clash.
 *  - A GUEST record is created alongside the booking, from its `attendees`, and
 *    it OUTLIVES the booking. Teardown has to remove both, or "was a guest
 *    created?" starts passing on the last run's data.
 *  - The form has two modes and the app default is the MULTI-visitor one. This
 *    file covers single mode, so it pins the setting per test rather than
 *    trusting a default a settings change could flip underneath it.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    deleteGuest,
    releaseVisitor,
    searchGuests,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { inviteVisitorViaUI } from '../../../../e2e/support/visitor/visitor.flows';

/** Window wide enough to cover an invite made in any timezone. */
const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

test.describe('visitor invite (single)', () => {
    test('a non-admin invites a visitor in the UI and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.invite.stores);
        const reason = uniqueTitle('E2E Visit');
        let booking_id: number | undefined;

        const swept = await releaseVisitor(
            staffApi,
            visitor.email,
            window_from(),
            window_to(),
        );
        if (swept) console.log(`  swept ${swept} stale invite(s) for ${visitor.email}`);

        // Prove the sweep worked before claiming the invite created anything — a
        // guest left over from an earlier run would make the check below pass
        // for free.
        expect(
            await searchGuests(staffApi, visitor.email),
            'precondition: no guest record exists before the invite',
        ).toHaveLength(0);

        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;

            expect(created.id, 'the API returned a booking id').toBeTruthy();

            // Read it back independently of the response we just parsed.
            const stored = await getBooking(staffApi, booking_id);
            const me = await currentUser(staffApi);
            expect(stored.booking_type, 'stored as a visitor booking').toBe('visitor');
            expect(stored.asset_id, 'against this worker’s visitor address').toBe(
                visitor.email,
            );
            expect(stored.title, 'the reason we typed reached the backend').toBe(reason);
            expect(stored.deleted, 'not soft-deleted').toBeFalsy();
            expect(stored.rejected, 'not rejected').toBeFalsy();
            expect(
                stored.zones.length,
                'carries its zone hierarchy (org/building/level)',
            ).toBeGreaterThan(0);
            // With no host chosen the signed-in user is both host and booker.
            // `visitor-delegate.spec.ts` covers the case where they differ.
            expect(stored.user_email, 'the signed-in user is the host').toBe(me.email);
            expect(stored.booked_by_email, 'and also the booker').toBe(me.email);

            // A guest record is the half of this flow that lives outside the
            // booking, and it is what reception actually reads.
            const guests = await searchGuests(staffApi, visitor.email);
            expect(
                guests.map((g) => g.email),
                'a guest record was created for the visitor',
            ).toContain(visitor.email);
            expect(guests[0].name, 'carrying the name we typed').toBe(visitor.name);

            // ...and the booking is discoverable through the listing the app
            // uses, not only by direct id lookup.
            const listed = await listBookings(
                staffApi,
                'visitor',
                window_from(),
                window_to(),
            );
            expect(
                listed.map((b) => b.id),
                'the new invite appears in the visitor listing',
            ).toContain(booking_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('a deleted visitor invite leaves the listing', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.invite.cleanup);
        const reason = uniqueTitle('E2E Visit Cleanup');

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
        try {
            expect(
                (
                    await listBookings(staffApi, 'visitor', window_from(), window_to())
                ).map((b) => b.id),
                'precondition: the invite is in the listing before we delete it',
            ).toContain(created.id);

            await deleteBooking(staffApi, created.id);

            expect(
                (
                    await listBookings(staffApi, 'visitor', window_from(), window_to())
                ).map((b) => b.id),
                'a deleted invite must not come back in the listing — otherwise every ' +
                    'spec teardown silently leaks state into the next run',
            ).not.toContain(created.id);
        } finally {
            await deleteBooking(staffApi, created.id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
