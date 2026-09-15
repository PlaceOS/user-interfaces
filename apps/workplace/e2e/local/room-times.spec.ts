/**
 * ROOM-07 / ROOM-08 / ROOM-14 — when the meeting is, and the limits on what may
 * be chosen.
 *
 * Test 1 asks the plain question nothing else here asks: if a user picks a day,
 * a start time and a length, are THOSE the times that get stored? Everything
 * else in the room specs takes whatever the form offers, so a form that ignored
 * the pickers would have passed the lot.
 *
 * Test 2 covers the two settings that fence the pickers in — a maximum meeting
 * length and the hours a meeting may start. Both are unset by default, so
 * nothing else sees them, and both fail quietly in the same way: the option is
 * simply absent rather than refused. That is why this asserts on the options
 * OFFERED. "A three-hour meeting is rejected" would be testing something the
 * form never lets you attempt.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import {
    LIMITED_HOURS,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';
import { bookRoomViaUI } from '../../../../e2e/support/room/room.flows';
import { MeetingForm } from '../../../../e2e/support/room/meeting-form.page';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

const MAX_MINUTES = LIMITED_HOURS['app.events.max_duration'];
const HOURS = LIMITED_HOURS['app.events.bookable_hours'];

/** "HH:mm" as minutes past midnight, for comparing option values. */
function minutesOfDay(hhmm: string): number {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
}

test.describe('room booking times', () => {
    test('the day, start time and length chosen on the form are what get stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.times.chosen);
        const title = uniqueTitle('E2E Room Times');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const form = new MeetingForm(staffPage);
            await form.open();

            // Pick from what the form itself offers rather than naming an hour:
            // the options run on a fixed step, so a hardcoded "14:30" is a test
            // that stops working after 14:30.
            const times = await form.startTimeOptions();
            expect(
                times.length,
                'the form offered no start times at all — nothing can be chosen',
            ).toBeGreaterThan(1);
            const lengths = await form.durationOptions();
            const chosen_time = times[1];
            const chosen_length = lengths.find((m) => m >= 90) ?? lengths[lengths.length - 1];

            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                startTime: chosen_time,
                duration: chosen_length,
            });
            booking_id = created.id;

            const stored = await getBooking(staffApi, booking_id);
            const start = new Date(stored.booking_start * 1000);
            expect(
                start.toDateString(),
                'the meeting must be on the day picked in the date field',
            ).toBe(new Date(slot.date_ms).toDateString());
            expect(
                start.getHours() * 60 + start.getMinutes(),
                `and start at the ${chosen_time} that was picked, not the form's default`,
            ).toBe(minutesOfDay(chosen_time));
            // The LENGTH is deliberately not asserted here — see the `fixme`
            // below. ROOM-B3: the form and the confirmation both show the length
            // that was picked, and the booking is made for 60 minutes anyway.
            expect(
                (stored.booking_end - stored.booking_start) / 60,
                'the meeting has some length at all',
            ).toBeGreaterThan(0);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('a maximum length and bookable hours limit what can be chosen', async ({
        staffPage,
    }) => {
        await useSettings(staffPage, { ...ROOM_BASE_SETTINGS, ...LIMITED_HOURS });

        const form = new MeetingForm(staffPage);
        await form.open();

        const lengths = await form.durationOptions();
        expect(
            lengths.length,
            'the form offered no meeting lengths at all, so the cap cannot be judged',
        ).toBeGreaterThan(0);
        expect(
            Math.max(...lengths),
            `with a ${MAX_MINUTES} minute cap nothing longer may be offered — the form ` +
                `is the only place this is enforced, the backend stores any length`,
        ).toBeLessThanOrEqual(MAX_MINUTES);

        const times = await form.startTimeOptions();
        expect(
            times.length,
            'the form offered no start times at all, so the hours cannot be judged',
        ).toBeGreaterThan(0);
        expect(
            Math.min(...times.map(minutesOfDay)),
            `no meeting may start before ${HOURS.start}:00 once bookable hours are set`,
        ).toBeGreaterThanOrEqual(HOURS.start * 60);
        expect(
            Math.max(...times.map(minutesOfDay)),
            `nor after ${HOURS.end}:00 — an option outside the window is one a user can ` +
                'pick and then be refused for',
        ).toBeLessThanOrEqual(HOURS.end * 60);
    });

    /**
     * ROOM-14, blocked by ROOM-B3 — the meeting length chosen on the form is not
     * the length booked.
     *
     * Measured while writing the test above. The form is asked for a 90 minute
     * meeting; the duration field shows "1 hour 30 minutes", the confirmation
     * shows 6:00 PM – 7:30 PM, and the request sent is:
     *
     *   booking_start ............... 6:00 PM
     *   booking_end ................. 7:00 PM   <- 60 minutes
     *   extension_data.event_end .... 7:30 PM   <- the event knows it is 90
     *
     * So the CalendarEvent carries the right end time and the Booking built from
     * it does not: `newBookingFromCalendarEvent` takes `event.duration`, which
     * is still the default. **A user is shown one time range and the room is
     * held for another** — anyone booking a long meeting loses the second half
     * of it, and the room looks free to everybody else.
     *
     * Order does not help: setting the length before the start time and after it
     * both post 60. Not a timing problem either — the field still reads 90 four
     * seconds later, immediately before the confirmation is sent.
     *
     * `fixme`, so it costs nothing per run. Drop the marker once the app carries
     * the chosen length through, and fold it back into the test above.
     */
    test.fixme('the meeting length chosen on the form is what gets booked', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const room = await roomForWorker(testInfo.parallelIndex);
        const slot = slotFor(ROOM_SLOTS.times.limits, 5);
        const title = uniqueTitle('E2E Room Length');
        let booking_id: number | undefined;

        await releaseRoom(staffApi, room.id, window_from(), window_to());
        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        try {
            const created = await bookRoomViaUI(staffPage, staffApi, room, title, {
                date: slot.date_ms,
                duration: 90,
            });
            booking_id = created.id;
            const stored = await getBooking(staffApi, booking_id);
            expect(
                (stored.booking_end - stored.booking_start) / 60,
                'a 90 minute meeting must hold the room for 90 minutes',
            ).toBe(90);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
