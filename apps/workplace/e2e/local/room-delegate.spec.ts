/**
 * ROOM-28 — booking a room on somebody else's behalf.
 *
 * The visitor equivalent (VIS-09) found a real defect: the host picker rendered
 * from one setting while the choice was only KEPT when a second was also set, so
 * the booking came back owned by whoever filled the form. Rooms had the same
 * defect (ROOM-B8, PPT-2805): the chosen host was discarded.
 *
 * It matters beyond bookkeeping: a room booked "for" a colleague but stored
 * against the booker does not appear on the colleague's schedule, so as far as
 * the app is concerned they have no room, and the booker holds two.
 *
 * The new meeting flow picks the colleague from the host search that
 * `events.can_book_for_anyone` renders (PPT-2873). See `BOOK_FOR_ANYONE`.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    apiFor,
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
    test('the chosen colleague is stored as the host, and you as the booker', async ({
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
            const their_api = await apiFor('staff', theirs);
            const them = await currentUser(their_api).finally(() => their_api.dispose());
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                host: colleague,
            });
            booking_id = created.id;

            const stored = await getBooking(staffApi, booking_id!);
            expect(
                {
                    user_email: `${stored.user_email}`.toLowerCase(),
                    user_id: stored.user_id,
                    user_name: stored.user_name,
                },
                'the room must be booked FOR the colleague. If this comes back as the ' +
                    'person who filled the form, the host choice was discarded — which ' +
                    'is exactly what the visitor form used to do (VIS-09). user_id ' +
                    'must be the user ID, not the address',
            ).toEqual({
                user_email: colleague.toLowerCase(),
                user_id: them.id,
                user_name: them.name,
            });
            expect(
                {
                    booked_by_email: `${stored.booked_by_email}`.toLowerCase(),
                    booked_by_id: stored.booked_by_id,
                    booked_by_name: stored.booked_by_name,
                },
                'and BY the person who filled the form',
            ).toEqual({
                booked_by_email: me.email.toLowerCase(),
                booked_by_id: me.id,
                booked_by_name: me.name,
            });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
