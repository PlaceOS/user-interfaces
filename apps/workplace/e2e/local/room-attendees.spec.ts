/**
 * ROOM-09 / ROOM-10 — who is coming to the meeting.
 *
 * A room booking is the only one of the three surfaces with a real attendee
 * list: a desk has nobody, a visitor invite has exactly the visitors. So this is
 * the only place the list itself can go wrong — silently, because a dropped
 * attendee looks identical to a meeting nobody was invited to.
 *
 * Both tests read the backend. The attendee list is stored in the booking's
 * `extension_data`, not as a column: `newBookingFromCalendarEvent` spreads the
 * whole calendar event in there, so the attendees, the real title and the event
 * times all live under that key. Asserting on a top-level `attendees` field
 * finds an empty array on a booking that is perfectly correct.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom, type RoomBooking } from '../../../../e2e/support/room/room.api';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/** Every attendee address on a stored booking, lower-cased. */
function attendeeEmails(booking: RoomBooking): string[] {
    const list = (booking.extension_data?.attendees ?? []) as { email?: string }[];
    return list.map((a) => `${a.email ?? ''}`.toLowerCase()).filter(Boolean);
}

test.describe('room booking attendees', () => {
    test('an attendee added on the form is stored with the booking', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers for a second address');

        const room = await roomForWorker(mine);
        const slot = slotFor(ROOM_SLOTS.attendees.stored);
        const guest = staffEmail(theirs);
        const title = uniqueTitle('E2E Room Attendees');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const me = await currentUser(staffApi);
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                attendees: [guest],
            });
            booking_id = created.id;

            const stored = (await getBooking(staffApi, booking_id)) as RoomBooking;
            const emails = attendeeEmails(stored);
            expect(
                emails,
                `the colleague invited on the form must be stored with the booking. ` +
                    `Stored: ${JSON.stringify(emails)}`,
            ).toContain(guest.toLowerCase());
            expect(
                emails,
                'and the organiser stays on the list — the app adds them itself, and a ' +
                    'meeting without its own host is how a room gets booked by nobody',
            ).toContain(me.email.toLowerCase());

            // The ROOM is an attendee too in a calendar-shaped event. Asserting
            // it keeps the list honest: a payload that had dropped the room
            // would still contain both people and book nothing.
            expect(
                emails,
                'and the room itself is on the list, as a resource',
            ).toContain(room.email.toLowerCase());
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('an attendee removed before sending is not invited', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers for a second address');

        const room = await roomForWorker(mine);
        const slot = slotFor(ROOM_SLOTS.attendees.removed);
        const dropped = staffEmail(theirs);
        const title = uniqueTitle('E2E Room Attendee Removed');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const me = await currentUser(staffApi);
            // Added and then taken off again — the everyday version of this is
            // picking the wrong colleague out of a lookup. The correction
            // happens inside the send flow, so a retry cannot quietly re-add
            // them.
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                attendees: [dropped],
                removeAttendees: [dropped],
            });
            booking_id = created.id;

            const stored = (await getBooking(staffApi, booking_id)) as RoomBooking;
            const emails = attendeeEmails(stored);
            expect(
                emails,
                `the colleague taken off the form must not be invited. ` +
                    `Stored: ${JSON.stringify(emails)}`,
            ).not.toContain(dropped.toLowerCase());
            expect(
                emails,
                'and the booking still belongs to the person who made it',
            ).toContain(me.email.toLowerCase());
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
