/**
 * ROOM-07 / ROOM-08 / ROOM-14 — when the meeting is, and the limits on what may
 * be chosen.
 *
 * Test 1 asks the plain question nothing else here asks: if a user picks a day,
 * a start time and a length, are THOSE the times that get stored? Everything
 * else in the room specs takes whatever the flow offers, so a flow that ignored
 * the pickers would have passed the lot.
 *
 * Test 2 covers the two settings that fence the pickers in — a maximum meeting
 * length and the hours a meeting may start. Both are unset by default, so
 * nothing else sees them, and both fail quietly in the same way: the option is
 * simply absent rather than refused. That is why this asserts on the options
 * OFFERED. "A three-hour meeting is rejected" would be testing something the
 * flow never lets you attempt.
 *
 * Test 3 asks the same question as test 1 for the LENGTH alone.
 *
 * All three set the day before they read or pick a time. The details step
 * starts on today and offers only the times that are left of it.
 */
import {
    deleteBooking,
    getBooking,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/fixtures';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';
import { releaseRoom } from '../../../../e2e/support/room/room.api';
import { ROOM_SLOTS, slotFor } from '../../../../e2e/support/room/room.env';
import { bookRoomViaUI, setDate } from '../../../../e2e/support/room/room.flows';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import {
    LIMITED_HOURS,
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';

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
            const form = new MeetingFlow(staffPage);
            await form.open();
            await setDate(form, staffPage, slot.date_ms);

            // Pick from what the flow itself offers rather than naming an hour.
            // The second option, so the choice is not the default of the field.
            const times = await form.startTimeOptions();
            expect(
                times.length,
                'the flow offered no start times at all — nothing can be chosen',
            ).toBeGreaterThan(1);
            const lengths = await form.durationOptions();
            const chosen_time = times[1];
            const chosen_length =
                lengths.find((m) => m >= 90) ?? lengths[lengths.length - 1];

            const created = await bookRoomViaUI(
                staffPage,
                staffApi,
                room,
                title,
                {
                    date: slot.date_ms,
                    startTime: chosen_time,
                    duration: chosen_length,
                },
            );
            booking_id = created.id;

            const stored = await getBooking(staffApi, booking_id);
            const start = new Date(stored.booking_start * 1000);
            expect(
                start.toDateString(),
                'the meeting must be on the day picked in the date field',
            ).toBe(new Date(slot.date_ms).toDateString());
            expect(
                start.getHours() * 60 + start.getMinutes(),
                `and start at the ${chosen_time} that was picked, not the flow's default`,
            ).toBe(minutesOfDay(chosen_time));
            expect(
                (stored.booking_end - stored.booking_start) / 60,
                `and run for the ${chosen_length} minutes that were picked`,
            ).toBe(chosen_length);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('a maximum length and bookable hours limit what can be chosen', async ({
        staffPage,
    }) => {
        await useSettings(staffPage, {
            ...ROOM_BASE_SETTINGS,
            ...LIMITED_HOURS,
        });

        const form = new MeetingFlow(staffPage);
        await form.open();
        // A day with all of its hours ahead of it. Today offers only what is
        // left of the bookable hours, which can be nothing.
        await setDate(form, staffPage, slotFor(ROOM_SLOTS.times.limits).date_ms);

        const lengths = await form.durationOptions();
        expect(
            lengths.length,
            'the flow offered no meeting lengths at all, so the cap cannot be judged',
        ).toBeGreaterThan(0);
        expect(
            Math.max(...lengths),
            `with a ${MAX_MINUTES} minute cap nothing longer may be offered — the flow ` +
                `is the only place this is enforced, the backend stores any length`,
        ).toBeLessThanOrEqual(MAX_MINUTES);

        const times = await form.startTimeOptions();
        expect(
            times.length,
            'the flow offered no start times at all, so the hours cannot be judged',
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
     * ROOM-14 — the meeting length chosen on the form is the length booked.
     *
     * The flow that this one replaced booked 60 minutes whatever length was
     * picked (ROOM-B3): the request carried `booking_end` at one hour while
     * `extension_data.event_end` held the length that was asked for. A user
     * was shown one time range and the room was held for another. This test
     * was blocked on it.
     *
     * Measured on the new flow, 13 Oct 2026: a 90 minute meeting is stored as
     * 90 minutes, so the test is active. Test 1 asserts the length too, with a
     * start time picked next to it.
     */
    test('the meeting length chosen on the form is what gets booked', async ({
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
            const created = await bookRoomViaUI(
                staffPage,
                staffApi,
                room,
                title,
                {
                    date: slot.date_ms,
                    duration: 90,
                },
            );
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
