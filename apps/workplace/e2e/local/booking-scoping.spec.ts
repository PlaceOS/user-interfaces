/**
 * WP-E2E-08 / AUTH-E2E-05 — one user's bookings are not another user's business.
 *
 * This locks down a property we learned about the hard way. `GET /bookings` is
 * scoped to the caller, which is easy to assume but was not obvious: an early
 * leak-check written as an admin reported zero bookings while the database
 * plainly held one, because the admin was only ever being shown their own.
 *
 * That behaviour is load-bearing in two directions. It is a privacy boundary
 * (your colleagues cannot enumerate where you sit), and it is a trap for anyone
 * writing tooling against the API. Worth a test either way, because a regression
 * here would leak quietly rather than fail loudly.
 */
import { request } from '@playwright/test';
import { test, expect } from '../../../../e2e/support/fixtures';
import { BACKEND_URL, WORKERS, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import { APP_URL } from '../../../../e2e/support/env';
import {
    STAFF_API,
    deleteBooking,
    listBookings,
    releaseAsset,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import type { APIRequestContext } from '@playwright/test';
import { deskFor } from '../../../../e2e/support/env';


/**
 * The org/building/level zone ids a booking carries, matching what the UI sends.
 * Always queried by tag: `GET /zones` with no `tags` parameter comes back empty.
 */
async function bookingZones(api: APIRequestContext): Promise<string[]> {
    const groups = await Promise.all(
        ['org', 'building', 'level'].map((tag) => zonesWithTag(api, tag)),
    );
    return groups.flat().map((z) => z.id);
}

const DAY = 86_400;
// Window comfortably wider than any booking these specs create. Keep it that
// way: a booking placed exactly on the boundary is not returned by the listing,
// which reads as "scoping is broken" rather than "the window was too tight".
const from = () => Math.floor(Date.now() / 1000) - 3 * DAY;
const to = () => Math.floor(Date.now() / 1000) + 3 * DAY;

test.describe('booking visibility between users', () => {
    test('another user cannot see or delete your booking', async ({ staffApi }, testInfo) => {
        const mine = testInfo.parallelIndex;
        // A genuinely different seeded user. With one worker there is nobody else
        // to compare against, so the spec would be meaningless.
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const desk = deskFor(mine);
        const title = uniqueTitle('E2E Scoping');
        await releaseAsset(staffApi, 'desk', desk.id, from(), to());

        // Create as *this* worker's user, through the API rather than the UI —
        // the subject here is authorisation, not the booking form.
        const me = await (await staffApi.get('/api/engine/v2/users/current')).json();
        const zones = await bookingZones(staffApi);
        const start = Math.floor(Date.now() / 1000) + DAY;

        const created = await staffApi.post(`${STAFF_API}/bookings`, {
            data: {
                booking_type: 'desk',
                asset_id: desk.id,
                booking_start: start,
                booking_end: start + 3600,
                timezone: 'Etc/UTC',
                user_email: me.email,
                user_id: me.id,
                user_name: me.name,
                title,
                zones,
            },
        });
        expect(created.ok(), `creating the booking should succeed: ${created.status()}`).toBeTruthy();
        const booking = await created.json();

        // A second, genuinely different user.
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
            // Sanity: the two identities really are different, or everything below
            // would pass for the wrong reason.
            const them = await (await other.get('/api/engine/v2/users/current')).json();
            expect(them.email, 'the second user must be a different person').not.toBe(me.email);

            // The privacy boundary.
            const their_view = await listBookings(other, 'desk', from(), to());
            expect(
                their_view.map((b) => b.id),
                "another user's default listing must not include your booking",
            ).not.toContain(booking.id);

            // And they cannot remove it. A 2xx here would mean anyone can cancel
            // anyone's desk, which is worse than merely being able to see it.
            const their_delete = await other.delete(`${STAFF_API}/bookings/${booking.id}`);
            expect(
                their_delete.status(),
                `another user must not be able to delete your booking ` +
                    `(got ${their_delete.status()})`,
            ).toBeGreaterThanOrEqual(400);

            // Still there afterwards, from the owner's point of view.
            const still_mine = await listBookings(staffApi, 'desk', from(), to());
            expect(
                still_mine.map((b) => b.id),
                'the booking should survive the other user attempting to delete it',
            ).toContain(booking.id);
        } finally {
            await other.dispose();
            await deleteBooking(staffApi, booking.id);
        }
    });

    test('you can see your own booking in the listing', async ({ staffApi }, testInfo) => {
        // The control for the test above. Without it, "they cannot see it" would
        // also pass if nobody could see anything.
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Scoping Control');
        await releaseAsset(staffApi, 'desk', desk.id, from(), to());

        const me = await (await staffApi.get('/api/engine/v2/users/current')).json();
        const zones = await bookingZones(staffApi);
        const start = Math.floor(Date.now() / 1000) + DAY;

        const created = await staffApi.post(`${STAFF_API}/bookings`, {
            data: {
                booking_type: 'desk',
                asset_id: desk.id,
                booking_start: start,
                booking_end: start + 3600,
                timezone: 'Etc/UTC',
                user_email: me.email,
                user_id: me.id,
                user_name: me.name,
                title,
                zones,
            },
        });
        expect(
            created.ok(),
            `creating the booking should succeed: ${created.status()} ${await created.text()}`,
        ).toBeTruthy();
        const booking = await created.json();

        try {
            const mine = await listBookings(staffApi, 'desk', from(), to());
            expect(
                mine.map((b) => b.id),
                'you must be able to see your own booking',
            ).toContain(booking.id);
        } finally {
            await deleteBooking(staffApi, booking.id);
        }
    });
});
