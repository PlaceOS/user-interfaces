/**
 * ROOM-20 / ROOM-21 — whether a new room booking needs approving.
 *
 * Two states, one of which cannot be reached from the app without hitting a
 * backend 500:
 *
 *   default ......................... the app sends `status: 'tentative'` and the
 *                                     booking is stored `approved: false`. A
 *                                     room held by an unapproved booking is
 *                                     still held, so this is not cosmetic.
 *   `app.bookings.no_approval` ...... the app sends `approved: true` and the
 *                                     booking should be stored approved — and
 *                                     instead the request dies with a Postgres
 *                                     syntax error. That is ROOM-B1, and the
 *                                     second test here is `fixme` against it.
 *
 * The first test is the control for the second: it proves the booking path and
 * these assertions work, so the `fixme` below is about the approval setting and
 * nothing else.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { ROOM_SLOTS_2, SECOND_DAY, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    NO_APPROVAL,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('room booking approval', () => {
    test('a room booked with the default settings is stored unapproved', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS_2.approval.approved, SECOND_DAY);
        const title = uniqueTitle('E2E Room Approval');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
            });
            booking_id = created.id;
            const stored: any = await getBooking(staffApi, booking_id);
            expect(
                stored.approved,
                'with no approval setting the app sends `tentative`, so the booking ' +
                    'must be stored unapproved',
            ).toBeFalsy();
            expect(
                stored.rejected,
                'unapproved is not the same as rejected — a rejected booking here would ' +
                    'mean the form sent something quite different',
            ).toBeFalsy();
            expect(
                stored.deleted,
                'and an unapproved booking still exists and still holds the room',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });

    /**
     * ROOM-21, blocked by ROOM-B1 — `no_approval` makes the app send
     * `approved: true`, and staff-api answers **HTTP 500** with
     *
     *   syntax error at or near ")" (PQ::PQError)
     *
     * for any non-admin. Measured three ways, which is what makes it the
     * backend's fault rather than the form's:
     *
     *   non-admin, `approved: true`, NO zones .... 500 (the SQL error)
     *   non-admin, `approved: true`, WITH zones .. 403, correctly refused
     *   admin, `approved: true` ................... 201
     *
     * Desk bookings do it too, so it is not room-specific — but rooms are where
     * the app reaches it, because a room booking made through the form carries
     * no zones at all (ROOM-B2). The permission check dies instead of refusing
     * when it has nothing to check against, and the two bugs compound: fix
     * ROOM-B2 and this becomes an honest 403; fix ROOM-B1 and it becomes a 201.
     *
     * `fixme`, so it costs nothing per run. This is also why `NO_APPROVAL` is
     * not in `ROOM_BASE_SETTINGS` — switching it on breaks every room spec.
     */
    test.fixme('a room booked with approval skipped is stored approved', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS_2.approval.approved, SECOND_DAY, 60);
        const title = uniqueTitle('E2E Room No Approval');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...NO_APPROVAL });

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
            });
            booking_id = created.id;
            const stored: any = await getBooking(staffApi, booking_id);
            expect(
                stored.approved,
                'with `app.bookings.no_approval` set, the booking must be stored approved',
            ).toBeTruthy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
