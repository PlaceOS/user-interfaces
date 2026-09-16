/**
 * ROOM-28 — booking a room on somebody else's behalf.
 *
 * The visitor equivalent (VIS-09) found a real defect: the host picker rendered
 * from one setting while the choice was only KEPT when a second was also set, so
 * the booking came back owned by whoever filled the form. Rooms have the same
 * shape — `meeting-form-details.component.ts` renders a host field from
 * `events.can_book_for_anyone` — and nothing has checked which user a room
 * booking ends up against.
 *
 * It matters beyond bookkeeping: a room booked "for" a colleague but stored
 * against the booker does not appear on the colleague's schedule, so as far as
 * the app is concerned they have no room, and the booker holds two.
 *
 * ## The local user list, again
 *
 * `app.basic_user_search` is set with it, for the same reason DESK-14 needs it:
 * without it the field searches `/api/staff/v1/people`, the calendar directory,
 * which 500s on this stack. So this covers the PlaceOS path only.
 *
 * ## `fixme` — ROOM-B8: the chosen host is discarded
 *
 * Measured: the colleague was picked from the host field, **the field was proven
 * to still show them at the moment the meeting was confirmed**, and the stored
 * booking came back owned by the person who filled the form.
 *
 * That "still showing" check is what makes this a finding rather than a test
 * bug — it rules out the form reverting the field before sending, which looks
 * identical from outside. `bookRoomViaUI` asserts it for this reason.
 *
 * The consequence is the same one VIS-09 used to have for visitors: the room
 * does not appear on the colleague's schedule, so as far as the app is concerned
 * they have no room, and the booker holds two. Desks get this right (DESK-14 is
 * green), which is the useful comparison for whoever fixes it.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { ROOM_SLOTS_2, SECOND_DAY, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    BOOK_FOR_ANYONE,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('booking a room for a colleague', () => {
    test.fixme('the chosen colleague is stored as the host, and you as the booker', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const room = await roomForWorker(mine);
        const colleague = staffEmail(theirs);
        const slot = slotFor(ROOM_SLOTS_2.delegate.hour, SECOND_DAY);
        const title = uniqueTitle('E2E Room ForColleague');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...BOOK_FOR_ANYONE });

        try {
            const me = await currentUser(staffApi);
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                host: colleague,
            });
            booking_id = created.id;

            const stored: any = await getBooking(staffApi, booking_id!);
            expect(
                `${stored.user_email}`.toLowerCase(),
                'the room must be booked FOR the colleague. If this comes back as the ' +
                    'person who filled the form, the host choice was discarded — which ' +
                    'is exactly what the visitor form used to do (VIS-09)',
            ).toBe(colleague.toLowerCase());
            expect(
                `${stored.booked_by_email ?? stored.user_email}`.toLowerCase(),
                'and BY the person who filled the form',
            ).toBe(me.email.toLowerCase());
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
