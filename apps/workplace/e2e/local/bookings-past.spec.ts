/**
 * YB-09 — a booking that has already finished.
 *
 * The schedule can be walked backwards, so a finished booking is not a
 * hypothetical state — it is what most of a user's history looks like. The thing
 * that must not happen is a finished booking still offering to be used:
 * checking in to yesterday marks a desk occupied for a day nobody can attend,
 * and it is recorded on the backend exactly like a real check-in.
 *
 * `booking-details-modal.component.ts` gates the control on
 * `state === 'upcoming' | 'started' | 'in_progress'`, so a booking whose window
 * has passed should offer nothing. This test is what stops that gate being
 * loosened by accident.
 *
 * Deliberately NOT asserted here: whether a past booking can still be cancelled.
 * The app does still offer it, and whether that is right is a product question
 * rather than a defect — a test either way would be writing down an opinion.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { deskFor } from '../../../../e2e/support/env';
import {
    SCHEDULE_DAYS,
    dayBoundsOn,
    slotOn,
} from '../../../../e2e/support/bookings/bookings.env';
import {
    createBookingViaApi,
    readBooking,
    releaseFor,
} from '../../../../e2e/support/bookings/bookings.api';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

const DAY = 86_400;

test.describe('your bookings — a finished booking', () => {
    test('a booking whose day has passed is listed, and offers no check-in', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const slot = slotOn(SCHEDULE_DAYS.past, 9);
        const from = slot.start - DAY;
        const to = slot.start + DAY;
        const title = uniqueTitle('E2E YB Past');
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'desk', desk.id, from, to);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;
            expect(
                slot.end,
                'precondition: this booking really is in the past',
            ).toBeLessThan(Math.floor(Date.now() / 1000));

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showBooking(booking_id, slot.date_ms, ['desk']);

            // It is still listed — history is not hidden.
            await expect(
                schedule.card(booking_id),
                'a past booking should still be listed on its own day',
            ).toBeVisible({ timeout: 30_000 });

            const modal = await schedule.openDetails(booking_id);
            await expect(
                schedule.checkInButton(modal),
                'a booking that has already finished must NOT offer check-in — ' +
                    'checking in to yesterday marks a desk occupied for a day nobody ' +
                    'can attend, and the backend records it like any other check-in',
            ).toBeHidden({ timeout: 10_000 });

            // And nothing about opening it changed the booking.
            expect(
                (await readBooking(staffApi, booking_id)).checked_in,
                'and it is still not checked in',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, from, to);
        }
    });
});
