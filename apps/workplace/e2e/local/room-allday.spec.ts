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
 * Not `allow_multiday`, which only widens the range of dates the room picker
 * offers. The control lives in `meeting-form-details.component.ts`, a different
 * component from the flow form — which is why a first attempt found no checkbox
 * and nearly concluded that all-day meetings do not exist in this app.
 *
 * ## `fixme` — ROOM-B7: the all-day flag is ignored
 *
 * Measured: with `app.events.allow_all_day` on, the All Day checkbox ticked, and
 * **the checkbox proven still ticked at the moment the meeting is confirmed**,
 * the stored booking is **one hour long**. The room is free for the rest of the
 * day while the person who booked it believes they have it all day.
 *
 * The "still ticked" check matters: it rules out the form rebuilding itself and
 * reverting the control (REG-10's family), which would look identical from the
 * outside. `bookRoomViaUI` asserts it before sending for exactly this reason.
 *
 * Same family as ROOM-B3 (the chosen length is not the length booked):
 * `postForm` computes an all-day range, and the booking built from it by
 * `newBookingFromCalendarEvent` takes `duration` from the event instead. Fixing
 * ROOM-B3 properly would most likely fix this too.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { ROOM_SLOTS_2, SECOND_DAY, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    ALLOW_ALL_DAY,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';

const DAY = 86_400;
const HOUR = 3600;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

test.describe('an all-day meeting', () => {
    test.fixme('an all-day meeting holds the room for the day, not for an hour', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS_2.allday.hour, SECOND_DAY);
        const title = uniqueTitle('E2E Room AllDay');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...ALLOW_ALL_DAY });

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                allDay: true,
            });
            booking_id = created.id;

            const stored: any = await getBooking(staffApi, booking_id!);
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
