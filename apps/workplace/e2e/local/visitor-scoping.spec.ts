/**
 * VIS-05 / VIS-06 — one user's visitor invites are not another user's business.
 *
 * The desk equivalent is `booking-scoping.spec.ts`, and this deliberately
 * mirrors it, because the property it locks down is the same one and it was
 * learned the hard way: `GET /bookings` is scoped to the CALLER. An early
 * leak-check written as an admin reported zero bookings while the database
 * plainly held one, because the admin was only ever being shown their own.
 *
 * Visitors raise the stakes over desks. A desk booking leaks where a colleague
 * sits; a visitor invite leaks WHO IS COMING TO SEE THEM, plus that person's
 * name, email and company. It is also the surface a receptionist-style
 * integration is most likely to be built against, so a regression here would
 * leak quietly rather than fail loudly.
 *
 * Everything is created through the API, not the form: the subject is
 * authorisation, and driving the UI would only add a way for the test to fail
 * for an unrelated reason.
 */
import { request } from '@playwright/test';
import { test, expect } from '../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, WORKERS, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import {
    STAFF_API,
    currentUser,
    deleteBooking,
    listBookings,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    createBookingViaApi,
    deleteGuest,
    releaseVisitor,
    searchGuests,
} from '../../../../e2e/support/visitor/visitor.api';
import type { APIRequestContext } from '@playwright/test';

const DAY = 86_400;
// Window comfortably wider than any invite these specs create. Keep it that
// way: a booking placed exactly on the boundary is not returned by the listing,
// which reads as "scoping is broken" rather than "the window was too tight".
const from = () => Math.floor(Date.now() / 1000) - 3 * DAY;
const to = () => Math.floor(Date.now() / 1000) + 3 * DAY;

/** The org/building/level zone ids an invite carries, as the UI sends them. */
async function bookingZones(api: APIRequestContext): Promise<string[]> {
    const groups = await Promise.all(
        ['org', 'building', 'level'].map((tag) => zonesWithTag(api, tag)),
    );
    return groups.flat().map((z) => z.id);
}

/** Create a visitor invite directly, returning the stored booking. */
async function inviteViaApi(
    api: APIRequestContext,
    visitor: { email: string; name: string },
    title: string,
) {
    const me = await currentUser(api);
    const zones = await bookingZones(api);
    const start = Math.floor(Date.now() / 1000) + DAY;

    // Via the REG-09-tolerant helper: the backend drops concurrent booking
    // writes on this stack, and a scoping spec failing for that reason tells
    // nobody anything about scoping.
    return createBookingViaApi(api, {
        booking_type: 'visitor',
        asset_id: visitor.email,
        asset_name: visitor.name,
        booking_start: start,
        booking_end: start + 3600,
        timezone: 'Etc/UTC',
        user_email: me.email,
        user_id: me.id,
        user_name: me.name,
        title,
        zones,
        attendees: [{ name: visitor.name, email: visitor.email }],
    });
}

test.describe('visitor invite visibility between users', () => {
    test('another user cannot see or delete your visitor invite', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        // A genuinely different seeded user. With one worker there is nobody
        // else to compare against, so the spec would be meaningless.
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const visitor = visitorFor(mine, VISITOR_SLOTS.scoping.own);
        const title = uniqueTitle('E2E Visitor Scoping');
        await releaseVisitor(staffApi, visitor.email, from(), to());

        const me = await currentUser(staffApi);
        const booking = await inviteViaApi(staffApi, visitor, title);

        const other_role = roleFor('staff', theirs);
        const other_mint = await mintToken(
            BACKEND_URL,
            APP_URL,
            other_role.email,
            other_role.password,
        );
        const other = await request.newContext({
            baseURL: BACKEND_URL,
            ignoreHTTPSErrors: true,
            extraHTTPHeaders: { Authorization: `Bearer ${other_mint.accessToken}` },
        });

        try {
            // Sanity: the two identities really are different, or everything
            // below would pass for the wrong reason.
            const them = await currentUser(other);
            expect(them.email, 'the second user must be a different person').not.toBe(
                me.email,
            );

            // The privacy boundary.
            const their_view = await listBookings(other, 'visitor', from(), to());
            expect(
                their_view.map((b) => b.id),
                "another user's listing must not include your visitor invite",
            ).not.toContain(booking.id);

            // And they cannot remove it. A 2xx here would mean anyone can cancel
            // anyone's visitor, which is worse than merely being able to see it.
            const their_delete = await other.delete(`${STAFF_API}/bookings/${booking.id}`);
            expect(
                their_delete.status(),
                `another user must not be able to delete your invite ` +
                    `(got ${their_delete.status()})`,
            ).toBeGreaterThanOrEqual(400);

            // Still there afterwards, from the owner's point of view.
            const still_mine = await listBookings(staffApi, 'visitor', from(), to());
            expect(
                still_mine.map((b) => b.id),
                'the invite should survive the other user attempting to delete it',
            ).toContain(booking.id);
        } finally {
            await other.dispose();
            await deleteBooking(staffApi, booking.id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('you can see your own visitor invite and its guest record', async ({
        staffApi,
    }, testInfo) => {
        // The control for the test above. Without it, "they cannot see it" would
        // also pass if nobody could see anything — which is exactly how an
        // earlier leak-check managed to be reassuring and wrong.
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.scoping.control);
        const title = uniqueTitle('E2E Visitor Scoping Control');
        await releaseVisitor(staffApi, visitor.email, from(), to());

        const booking = await inviteViaApi(staffApi, visitor, title);

        try {
            const mine = await listBookings(staffApi, 'visitor', from(), to());
            expect(
                mine.map((b) => b.id),
                'you must be able to see your own invite',
            ).toContain(booking.id);

            expect(
                (await searchGuests(staffApi, visitor.email)).map((g) => g.email),
                'and the guest record it created',
            ).toContain(visitor.email);
        } finally {
            await deleteBooking(staffApi, booking.id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
