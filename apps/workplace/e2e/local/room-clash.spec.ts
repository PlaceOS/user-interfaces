/**
 * ROOM-03 / ROOM-04 — a room is exclusive for its window.
 *
 * The room equivalent of `desk-clash.spec.ts`, and the same reasoning: a
 * double-booked room is the failure users notice fastest, and it is the backend
 * that has to refuse it. The UI's own availability check (`queryResourceAvailability`)
 * only filters the picker; it would be no defence against a second person
 * booking at the same moment, or against any other client.
 *
 * Everything is created through the API, not the form. The subject is the rule,
 * and driving the meeting form twice would add an unrelated way to fail —
 * including hitting the picker's own filtering, which hides busy rooms and would
 * make "the second booking was refused" indistinguishable from "the room was
 * never offered".
 *
 * Attempted as a SECOND user, deliberately. A check that only looked at the
 * caller's own bookings would pass a same-user test and still let two colleagues
 * double-book.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { APP_URL, BACKEND_URL, WORKERS, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    createRoomBookingViaApi,
    releaseRoom,
    tryRoomBooking,
} from '../../../../e2e/support/room/room.api';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/**
 * An API context signed in as a DIFFERENT seeded user.
 *
 * The same approach `desk-clash.spec.ts` and `visitor-scoping.spec.ts` take:
 * mint a real token for another worker's identity rather than reusing a
 * sidecar, so the second user is genuinely a second user rather than the same
 * bearer twice.
 */
async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

test.describe('room double-booking', () => {
    test('a second person cannot book a room that is already taken', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const room = await roomForWorker(mine);
        const otherStaffApi = await apiAsOtherUser(theirs);
        const slot = slotFor(ROOM_SLOTS.clash.taken);
        const title = uniqueTitle('E2E Room Clash');
        let booking_id: number | undefined;
        const other_ids: number[] = [];

        await releaseRoom(staffApi, room.id, window_from(), window_to());

        try {
            const mine = await createRoomBookingViaApi(staffApi, {
                room,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = mine.id;
            expect(
                (await getBooking(staffApi, booking_id)).deleted,
                'precondition: the room really is held before anyone else tries',
            ).toBeFalsy();

            // Exactly the same window.
            const same = await tryRoomBooking(otherStaffApi, {
                room,
                title: uniqueTitle('E2E Room Clash Same'),
                start: slot.start,
                end: slot.end,
            });
            if (same.id) other_ids.push(same.id);
            // 409 specifically, not "any error". A 5xx from an unhealthy backend
            // would satisfy `>= 400` while proving nothing about clash detection
            // — and booking POSTs have a known way of returning 500 under load
            // (REG-09), which is exactly the failure this spec must not absorb.
            expect(
                same.status,
                `the same room and window must be refused with 409, got ${same.status}: ` +
                    `${same.body.slice(0, 200)}`,
            ).toBe(409);

            // And a partial overlap — the case a naive check misses, because it
            // starts after the existing booking begins and ends after it ends.
            const overlap = await tryRoomBooking(otherStaffApi, {
                room,
                title: uniqueTitle('E2E Room Clash Overlap'),
                start: slot.start + 1800,
                end: slot.end + 1800,
            });
            if (overlap.id) other_ids.push(overlap.id);
            expect(
                overlap.status,
                `a partly overlapping booking must also be refused with 409, got ` +
                    `${overlap.status}: ${overlap.body.slice(0, 200)}`,
            ).toBe(409);

            // Control: a window that genuinely does not overlap is accepted.
            // Without this, a backend refusing everything would pass both checks
            // above and look like working clash detection.
            const clear = await tryRoomBooking(otherStaffApi, {
                room,
                title: uniqueTitle('E2E Room Clash Clear'),
                start: slot.end + 3600,
                end: slot.end + 7200,
            });
            if (clear.id) other_ids.push(clear.id);
            expect(
                clear.status,
                `a non-overlapping window must still be accepted, got ${clear.status}: ` +
                    `${clear.body.slice(0, 200)}`,
            ).toBe(201);
        } finally {
            // The other user's bookings have to be removed BY THEM: `GET /bookings`
            // is caller-scoped, so the owner's sweep in the next run cannot see
            // them, and the room would stay held by something invisible.
            for (const id of other_ids) await deleteBooking(otherStaffApi, id);
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await otherStaffApi.dispose();
        }
    });

    test('the room frees up once the booking is deleted', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const room = await roomForWorker(mine);
        const otherStaffApi = await apiAsOtherUser(theirs);
        const slot = slotFor(ROOM_SLOTS.clash.freed);
        const other_ids: number[] = [];

        await releaseRoom(staffApi, room.id, window_from(), window_to());

        try {
            const first = await createRoomBookingViaApi(staffApi, {
                room,
                title: uniqueTitle('E2E Room Freed'),
                start: slot.start,
                end: slot.end,
            });

            const blocked = await tryRoomBooking(otherStaffApi, {
                room,
                title: uniqueTitle('E2E Room Freed Blocked'),
                start: slot.start,
                end: slot.end,
            });
            if (blocked.id) other_ids.push(blocked.id);
            expect(
                blocked.status,
                'precondition: the window is taken while the first booking exists',
            ).toBe(409);

            await deleteBooking(staffApi, first.id);

            // Guards a nastier version of the same bug than a plain
            // double-booking: a cancelled booking that still blocks the room.
            // Users would see it as free and be unable to book it, which is far
            // harder to diagnose than being told it is taken.
            const after = await tryRoomBooking(otherStaffApi, {
                room,
                title: uniqueTitle('E2E Room Freed After'),
                start: slot.start,
                end: slot.end,
            });
            if (after.id) other_ids.push(after.id);
            expect(
                after.status,
                `once the booking is deleted the room must be bookable again, got ` +
                    `${after.status}: ${after.body.slice(0, 200)}`,
            ).toBe(201);
        } finally {
            for (const id of other_ids) await deleteBooking(otherStaffApi, id);
            await otherStaffApi.dispose();
        }
    });
});
