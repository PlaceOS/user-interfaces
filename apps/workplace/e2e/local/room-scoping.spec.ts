/**
 * ROOM-05 / ROOM-06 — one person's room booking is not another's business.
 *
 * The desk equivalent is `booking-scoping.spec.ts`, and this deliberately
 * mirrors it: `GET /bookings` is caller-scoped, and a deletion attempt by
 * somebody else must be rejected rather than merely hidden in the UI.
 *
 * ## This does not contradict `room-clash.spec.ts`
 *
 * Worth saying plainly, because the two look opposed. A room's AVAILABILITY is
 * shared — that is exactly why a second person is refused with 409 when the
 * window is taken. What is private is the BOOKING: who booked it, what the
 * meeting is called, who is attending. Somebody else may discover that the room
 * is busy; they may not read the meeting or cancel it.
 *
 * Both tests work entirely through the API, because that is where the boundary
 * is. A UI that merely does not display someone else's booking proves nothing
 * about whether the data is reachable.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import { STAFF_API, deleteBooking, getBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { APP_URL, BACKEND_URL, WORKERS, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { createRoomBookingViaApi, releaseRoom } from '../../../../e2e/support/room/room.api';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

test.describe('room booking visibility between users', () => {
    test('another user cannot see or delete your room booking', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const room = await roomForWorker(mine);
        const slot = slotFor(ROOM_SLOTS.scoping.own);
        const title = uniqueTitle('E2E Room Private');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        const other = await apiAsOtherUser(theirs);

        try {
            const created = await createRoomBookingViaApi(staffApi, {
                room,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = created.id;

            // Their listing must not contain it.
            const their_list = await listBookings(other, 'room', window_from(), window_to());
            expect(
                their_list.map((b) => b.id),
                "another user's room listing must not contain your booking",
            ).not.toContain(booking_id);

            // ...and a direct delete must be refused, not quietly succeed.
            const attempt = await other.delete(`${STAFF_API}/bookings/${booking_id}`);
            expect(
                attempt.status(),
                `deleting somebody else's room booking must be rejected, got ` +
                    `${attempt.status()}`,
            ).toBeGreaterThanOrEqual(400);

            const still_there = await getBooking(staffApi, booking_id);
            expect(
                still_there.deleted,
                'the booking should survive the other user attempting to delete it',
            ).toBeFalsy();
        } finally {
            await other.dispose();
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('you can see your own room booking in the listing', async ({
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.scoping.control);
        const title = uniqueTitle('E2E Room Mine');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());

        try {
            const created = await createRoomBookingViaApi(staffApi, {
                room,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = created.id;

            // The control for the test above. Without it, a backend that showed
            // NOBODY their bookings would pass as watertight security.
            const my_list = await listBookings(staffApi, 'room', window_from(), window_to());
            expect(
                my_list.map((b) => b.id),
                'you must be able to see your own room booking',
            ).toContain(booking_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
