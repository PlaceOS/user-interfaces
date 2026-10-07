/**
 * ROOM-20 / ROOM-21 — whether a new room booking needs approving.
 *
 * Two states:
 *
 *   default ......................... the app sends `status: 'tentative'` and the
 *                                     booking is stored `approved: false`. A
 *                                     room held by an unapproved booking is
 *                                     still held, so this is not cosmetic.
 *   `app.bookings.no_approval` ...... the app used to send `approved: true` for
 *                                     everyone. staff-api only accepts that from
 *                                     admin, support and zone manager users
 *                                     (PPT-2767), so a standard user's booking
 *                                     was refused with 403. The app now leaves
 *                                     `approved` to the backend for such users,
 *                                     so the booking is stored, pending, for an
 *                                     approver or the auto-approval driver.
 *
 * The first test is the control for the second: it proves the booking path and
 * these assertions work, so the second is about the approval setting and
 * nothing else.
 */
import {
    deleteBooking,
    getBooking,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/fixtures';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    ROOM_SLOTS_2,
    SECOND_DAY,
    slotFor,
} from '../../../../e2e/support/room/room.env';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    NO_APPROVAL,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';

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
            const created = await bookRoomViaUI(
                staffPage,
                staffApi,
                room,
                title,
                {
                    date: slot.date_ms,
                },
            );
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
     * ROOM-21. Measured 7 Oct 2026 on placeos-2.2609.6: with `no_approval` on,
     * a standard user's room booking POST answered HTTP 403, so the setting
     * stopped standard users booking at all. The e2e staff user is neither
     * admin nor support nor a zone manager, so what the app can promise is that
     * the booking is stored and not refused; the stored `approved` flag is the
     * backend's call and false here, where no approval driver runs.
     */
    test('a standard user with approval skipped still gets a stored, pending booking', async ({
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
            const created = await bookRoomViaUI(
                staffPage,
                staffApi,
                room,
                title,
                {
                    date: slot.date_ms,
                },
            );
            booking_id = created.id;
            expect(
                created.id,
                'with `app.bookings.no_approval` set, a standard user must still be ' +
                    'able to book. A 403 here means the app is sending `approved` ' +
                    'for a user staff-api does not accept it from (PPT-2767)',
            ).toBeTruthy();
            const stored: any = await getBooking(staffApi, booking_id);
            expect(
                stored.rejected,
                'the booking must not be rejected',
            ).toBeFalsy();
            expect(stored.deleted, 'and must still exist').toBeFalsy();
            expect(
                stored.approved,
                'a standard user cannot approve, and this stack runs no approval ' +
                    'driver, so the booking is stored pending',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
