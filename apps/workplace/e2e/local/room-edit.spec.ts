/**
 * ROOM-15 / ROOM-16 — changing a room booking that already exists.
 *
 * Every other room spec creates a booking and then deletes it. Nothing so far
 * CHANGES one, and an edit is a different code path in three ways that all
 * matter:
 *
 *  - it PATCHes rather than POSTs (`saveBooking` branches on `data.id`, so an
 *    edit that lost the id would silently create a second booking and leave the
 *    room double-held);
 *  - it goes through `schedule.component.ts::edit`, which for an event whose
 *    `creator` and `mailbox` differ re-queries the CALENDAR — and `/events`
 *    500s on this stack, so that branch would make editing impossible here;
 *  - moving a booking to another room has to free the old one. A booking that
 *    changed its times but kept its room, or its room but kept its times, holds
 *    a room nobody can see is held.
 *
 * ## Why these two book through the UI first, when every other spec does not
 *
 * A room booking made straight through the API has no `extension_data`, and
 * that is where the room lives: the schedule rebuilds a room booking into a
 * CalendarEvent (`newCalendarEventFromBooking`) by spreading `extension_data`
 * over it, so an API-made booking opens the edit form with NO room on it.
 * Measured, and it cost a first draft of this file — the form was empty and it
 * looked like the app losing the room on edit. It is not; it is test data the
 * app would never have produced. So the booking under test here is made by the
 * app, exactly as a user's would be, and only the edit is the subject.
 *
 * Both assert on the BACKEND afterwards. The schedule updates itself
 * optimistically, so the screen showing the new time proves nothing at all.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { ROOM_SLOTS_2, SECOND_DAY, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { RoomSchedulePage } from '../../../../e2e/support/room/schedule.page';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/** "HH:mm" for a slot's start, in the browser's local time. */
function hhmm(unix_seconds: number): string {
    const date = new Date(unix_seconds * 1000);
    return `${`${date.getHours()}`.padStart(2, '0')}:${`${date.getMinutes()}`.padStart(2, '0')}`;
}

test.describe('editing a room booking', () => {
    test('the new start time chosen on the form is the one stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const from = slotFor(ROOM_SLOTS_2.edit.time, SECOND_DAY);
        const to = slotFor(ROOM_SLOTS_2.edit.moved_to, SECOND_DAY);
        const title = uniqueTitle('E2E Room Edit Time');
        let booking_id: number | undefined;

        // Sweep the whole window, not just the hour being moved out of: the
        // hour being moved INTO has to be free as well, or the app refuses the
        // edit for a perfectly good reason and the test reads as a bug.
        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: from.date_ms,
                startTime: hhmm(from.start),
            });
            booking_id = created.id;
            expect(
                (await getBooking(staffApi, booking_id)).booking_start,
                'precondition: the booking starts at the hour it was booked for',
            ).toBe(from.start);

            const schedule = new RoomSchedulePage(staffPage);
            await schedule.open();
            await schedule.showRooms();
            await schedule.showDayOf(from.date_ms);
            await schedule.startEdit(booking_id);

            const form = new MeetingForm(staffPage);
            await expect(
                form.chosenSpaces,
                'the edit form should open with the booked room already on it',
            ).toHaveCount(1, { timeout: 30_000 });

            // Same trap as booking: the time fields reach the model
            // asynchronously and the confirm screen snapshots the model when it
            // opens. Set, settle, then confirm.
            await form.setStartTime(hhmm(to.start));
            await staffPage.waitForTimeout(4_000);
            await form.confirmAndSend();

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(
                    updated.booking_start,
                    `the booking should now start at ${hhmm(to.start)}`,
                ).toBe(to.start);
            }).toPass({ timeout: 45_000 });

            const updated = await getBooking(staffApi, booking_id);
            expect(
                updated.asset_id,
                'moving the time must not change the room',
            ).toBe(room.id);
            expect(
                updated.deleted,
                'an edit must UPDATE the booking, not delete and replace it — a new ' +
                    'row would mean the id the user holds is dead',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });

    test('a booking moved to another room is stored against that room', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const other = await roomForWorker(testInfo.parallelIndex, 'alt');
        const slot = slotFor(ROOM_SLOTS_2.edit.room, SECOND_DAY);
        const title = uniqueTitle('E2E Room Edit Room');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await releaseRoom(staffApi, other.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                startTime: hhmm(slot.start),
            });
            booking_id = created.id;
            expect(
                (await getBooking(staffApi, booking_id)).asset_id,
                'precondition: the booking starts out in the first room',
            ).toBe(room.id);

            const schedule = new RoomSchedulePage(staffPage);
            await schedule.open();
            await schedule.showRooms();
            await schedule.showDayOf(slot.date_ms);
            await schedule.startEdit(booking_id);

            const form = new MeetingForm(staffPage);
            await expect(
                form.chosenSpaces,
                'the edit form should open with the booked room already on it',
            ).toHaveCount(1, { timeout: 30_000 });
            // The form holds one room, so the old one comes off before the new
            // one goes on — otherwise the picker treats the click as unselecting.
            await form.removeRoom();
            await form.chooseRoom(other.name);

            // Wait for the NAME to change, not just for a room to be present.
            // The count is 1 either way, so it cannot see this swap — and the
            // choice reaches the model asynchronously while the confirm screen
            // snapshots the model when it opens. A run under full parallel load
            // saved the ORIGINAL room this way: the room was picked, the
            // snapshot was taken first, and the PATCH carried the old asset id.
            await expect(async () => {
                expect(await form.chosenRoomNames()).toEqual([other.name]);
            }).toPass({ timeout: 30_000 });
            await staffPage.waitForTimeout(4_000);
            await form.confirmAndSend();

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(
                    updated.asset_id,
                    `the booking should now be held against ${other.name}`,
                ).toBe(other.id);
            }).toPass({ timeout: 45_000 });

            const updated = await getBooking(staffApi, booking_id);
            expect(
                updated.booking_start,
                'moving room must not move the meeting in time',
            ).toBe(slot.start);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
            await releaseRoom(staffApi, other.id, window_from(), window_to());
        }
    });
});
