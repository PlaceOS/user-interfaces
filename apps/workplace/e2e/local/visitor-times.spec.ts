/**
 * VIS-22 / VIS-23 — when the visit is, and the limits on what may be chosen.
 *
 * Test 1 is the plain question nothing else in this suite asks: if a user picks
 * a start time and a length, are THOSE the times that get stored? Every other
 * spec takes the form's default hour, so a form that quietly ignored the picker
 * would still have passed everywhere.
 *
 * Test 2 covers the two settings that fence the picker in — a maximum visit
 * length, and the hours of the day a visit may start. Both are unset by default
 * so nothing else here sees them, and both fail in the same quiet way: the
 * option is simply absent rather than refused, so there is nothing to click and
 * no error to read. That is why this asserts on the options OFFERED. Checking
 * "a long visit is rejected" would be testing something the form never lets you
 * attempt.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor } from '../../../../e2e/support/visitor/visitor.api';
import {
    LIMITED_HOURS,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { InviteVisitorForm } from '../../../../e2e/support/visitor/invite-form.page';
import { inviteVisitorViaUI } from '../../../../e2e/support/visitor/visitor.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

const MAX_MINUTES = LIMITED_HOURS['app.visitors.max_duration'];
const HOURS = LIMITED_HOURS['app.visitors.bookable_hours'];

/** "HH:mm" as minutes past midnight, for comparing option values. */
function minutesOfDay(hhmm: string): number {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
}

test.describe('visitor invite times', () => {
    test('the start time and length chosen on the form are what get stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.times.chosen);
        const reason = uniqueTitle('E2E Visit Times');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        try {
            const form = new InviteVisitorForm(staffPage);
            await form.open();
            await form.expectSingleMode();

            // Pick from what the form itself offers rather than naming an hour:
            // the options run on a fixed step from the current time, so a
            // hardcoded "14:30" is a test that stops working after 14:30.
            const times = await form.startTimeOptions();
            expect(
                times.length,
                'the form offered no start times at all — nothing can be chosen',
            ).toBeGreaterThan(1);
            // Second option, not the first: the first is usually the default
            // already selected, so choosing it would prove nothing.
            const chosen_time = times[1];
            const lengths = await form.durationOptions();
            const chosen_length = lengths.find((m) => m >= 90) ?? lengths[lengths.length - 1];

            // Set through the flow rather than here, so a REG-09 retry re-picks
            // them instead of falling back to the defaults.
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason, {
                startTime: chosen_time,
                duration: chosen_length,
            });
            booking_id = created.id;

            const stored = await getBooking(staffApi, booking_id);
            const start = new Date(stored.booking_start * 1000);
            const start_minutes = start.getHours() * 60 + start.getMinutes();
            expect(
                start_minutes,
                `the visit must start at the ${chosen_time} that was picked, not at the ` +
                    `form's default`,
            ).toBe(minutesOfDay(chosen_time));
            expect(
                (stored.booking_end - stored.booking_start) / 60,
                `and run for the ${chosen_length} minutes that were picked`,
            ).toBe(chosen_length);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('a maximum length and bookable hours limit what can be chosen', async ({
        staffPage,
    }) => {
        await useSettings(staffPage, { ...SINGLE_VISITOR_MODE, ...LIMITED_HOURS });

        const form = new InviteVisitorForm(staffPage);
        await form.open();
        await form.expectSingleMode();

        const lengths = await form.durationOptions();
        expect(
            lengths.length,
            'the form offered no visit lengths at all, so the cap cannot be judged',
        ).toBeGreaterThan(0);
        expect(
            Math.max(...lengths),
            `with a ${MAX_MINUTES} minute cap, nothing longer may be offered — the form ` +
                `is the only place this is enforced, the backend will store any length`,
        ).toBeLessThanOrEqual(MAX_MINUTES);

        const times = await form.startTimeOptions();
        expect(
            times.length,
            'the form offered no start times at all, so the hours cannot be judged',
        ).toBeGreaterThan(0);
        const earliest = Math.min(...times.map(minutesOfDay));
        const latest = Math.max(...times.map(minutesOfDay));
        expect(
            earliest,
            `no visit may start before ${HOURS.start}:00 once bookable hours are set`,
        ).toBeGreaterThanOrEqual(HOURS.start * 60);
        expect(
            latest,
            `nor after ${HOURS.end}:00 — an option outside the window is one a user ` +
                'can pick and then be turned away at the door for',
        ).toBeLessThanOrEqual(HOURS.end * 60);
    });
});
