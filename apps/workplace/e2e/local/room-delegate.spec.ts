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
 * ## `fixme` — the new meeting flow cannot name a colleague on this stack
 *
 * The flow that this one replaced rendered a user SEARCH field from
 * `events.can_book_for_anyone`, and this test picked the colleague there.
 * `meeting-flow-new` does not read that setting. Measured 13 Oct 2026:
 *
 *   `can_book_for_anyone` ..... the details step has no host field at all
 *                               (0 `host-select-field`, 0 `a-user-search-field`)
 *   `can_book_for_others` ..... the step has a `host-select-field`. It is a
 *                               select of the signed-in user and the CALENDARS
 *                               that the user can edit. On this stack
 *                               `GET /api/staff/v1/calendars` answers 500, so
 *                               the select holds one option: the signed-in user.
 *
 * So no colleague can be chosen, and the stored owner cannot be tested. The
 * test body drives the `host-select-field`, which is the control that exists.
 * It runs as far as `chooseHost`, which fails with the list that the select
 * offers.
 *
 * To unblock it, one of these has to be true: the flow gets a host search for
 * `events.can_book_for_anyone`, or the stack has a calendar tenant in which the
 * staff user can edit the calendar of a colleague.
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
    BOOK_FOR_OTHERS,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('booking a room for a colleague', () => {
    // See the file header: the flow offers no colleague to choose on this stack.
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
        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...BOOK_FOR_OTHERS });

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
