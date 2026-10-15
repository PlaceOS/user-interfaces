/**
 * ROOM-27 — an all-day meeting.
 *
 * Every other room spec books an hour or two. All-day is a different code path:
 * `event-form.service.ts` replaces the window with `_allDayTimeRange(date)`
 * before the booking is built, so whatever start and length were chosen are
 * discarded on purpose. A form that stored a long TIMED booking instead would
 * look almost identical on screen and behave differently — the room would free
 * up at the end time rather than being held for the day.
 *
 * ## The setting is `events.allow_all_day`
 *
 * Not `allow_multiday`, which replaces the length with an end date and an end
 * time. The checkbox is on the details step
 * (`meeting-flow-details.component.ts`), and without the setting it is not
 * rendered at all.
 *
 * ## ROOM-B7: the all-day flag was ignored
 *
 * Measured on the flow that this one replaced: with the All Day checkbox
 * ticked, and proven still ticked when the meeting was confirmed, the stored
 * booking was **one hour long**. The room was free for the rest of the day
 * while the person who booked it believed they had it all day. It was the same
 * family as ROOM-B3 (the chosen length was not the length booked).
 *
 * Measured on the new flow, 13 Oct 2026: the booking is stored with
 * `all_day: true` and holds the room for the day. This test is the guard.
 *
 * `bookRoomViaUI` checks that the checkbox is still ticked when it leaves the
 * details step. That rules out the control reverting before anything is sent,
 * which would look identical from the outside.
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
    ALLOW_ALL_DAY,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';

const DAY = 86_400;
const HOUR = 3600;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('an all-day meeting', () => {
    test('an all-day meeting holds the room for the day, not for an hour', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS_2.allday.hour, SECOND_DAY);
        const title = uniqueTitle('E2E Room AllDay');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, {
            ...ROOM_BASE_SETTINGS,
            ...ALLOW_ALL_DAY,
        });

        try {
            const created = await bookRoomViaUI(
                staffPage,
                staffApi,
                room,
                title,
                {
                    date: slot.date_ms,
                    allDay: true,
                },
            );
            booking_id = created.id;

            const stored: any = await getBooking(staffApi, booking_id!);
            expect(
                stored.all_day,
                'the backend must record the room booking as all-day',
            ).toBe(true);
            const hours = (stored.booking_end - stored.booking_start) / HOUR;
            expect(
                hours,
                `an all-day meeting must hold the room for the day, not for ${hours} ` +
                    `hour(s). A long TIMED booking looks the same on screen and frees ` +
                    `the room at its end time`,
            ).toBeGreaterThanOrEqual(8);
            expect(
                new Date(stored.booking_start * 1000).toDateString(),
                'and it must be on the day that was chosen',
            ).toBe(new Date(slot.date_ms).toDateString());
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseRoom(staffApi, room.id, window_from(), window_to());
        }
    });
});
