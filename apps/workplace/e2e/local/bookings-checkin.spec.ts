/**
 * YB-10 — checking in to a desk booking, and back out again.
 *
 * Desk check-in is the one check-in this stack can actually exercise end to end.
 * The three surfaces differ, and it is worth being explicit about why only this
 * one is here:
 *
 *   desk ....... `POST /bookings/:id/check_in`, a plain staff-api call. Covered
 *                by this test.
 *   visitor .... the same call. Covered by `visitor-checkin.spec.ts`.
 *   room ....... a websocket binding to a `Bookings` DRIVER module on the room's
 *                System. This stack has no such driver, so the control can never
 *                render (ROOM-23 in the coverage doc). Not testable here.
 *
 * ## Why this booking is minutes away and not days
 *
 * The control only exists while a booking is about to start or is running
 * (`booking-details-modal.component.ts` gates it on
 * `state === 'upcoming' | 'started' | 'in_progress'`), so unlike every other
 * spec on this page the booking cannot sit safely days out. It is booked ten
 * minutes from now, which also means this is the one file here that shares TODAY
 * with the desk specs — hence the sweep of today's window before booking.
 *
 * Both halves matter. A check-in that cannot be reversed leaves a desk marked
 * occupied after the person has left, which is worse for a colleague looking for
 * a seat than never checking in at all.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { deskFor } from '../../../../e2e/support/env';
import {
    createBookingViaApi,
    readBooking,
    releaseFor,
} from '../../../../e2e/support/bookings/bookings.api';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

const MINUTE = 60;
const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - DAY;
const window_to = () => Math.floor(Date.now() / 1000) + DAY;

test.describe('your bookings — checking in', () => {
    test('a desk booking can be checked in from the list, and checked back out', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const start = Math.floor(Date.now() / 1000) + 10 * MINUTE;
        const title = uniqueTitle('E2E YB CheckIn');
        let booking_id: number | undefined;

        // TODAY is shared with the desk specs, which book this same desk all day.
        // Sweeping first is what lets this test run after them, and after a run
        // that died holding the desk.
        await releaseFor(staffApi, 'desk', desk.id, window_from(), window_to());

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                start,
                end: start + 60 * MINUTE,
            });
            booking_id = booking.id;
            expect(
                (await readBooking(staffApi, booking_id)).checked_in,
                'precondition: a new booking is not checked in',
            ).toBeFalsy();

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            // The day is set explicitly rather than trusting the page's default —
            // a run that crosses midnight would otherwise look at the wrong day —
            // and `showBooking` also re-checks that the card really arrived.
            await schedule.showBooking(booking_id, start * 1000, ['desk']);

            const modal = await schedule.openDetails(booking_id);
            const control = schedule.checkInButton(modal);
            await expect(
                control,
                'a booking ten minutes from now should offer check-in. If this is ' +
                    'missing, check `bookings.hide_checkin` is not set and that the ' +
                    'booking really is within its window',
            ).toBeVisible({ timeout: 20_000 });
            await control.click();

            // The backend is the assertion. The button turns green either way.
            await expect(async () => {
                expect(
                    (await readBooking(staffApi, booking_id!)).checked_in,
                    'checking in must be recorded on the backend',
                ).toBe(true);
            }).toPass({ timeout: 30_000 });

            // Now back out. Same control — the app flips it rather than
            // rendering a second button.
            await expect(control, 'the control should still be there to check out').toBeVisible(
                { timeout: 10_000 },
            );
            await control.click();
            // Some types confirm the check-out; accept it if a dialog appears,
            // and carry on if it does not.
            const confirmed = await staffPage
                .locator('.cdk-overlay-container footer button[name="accept"]')
                .first()
                .click({ timeout: 5_000 })
                .then(() => true)
                .catch(() => false);
            if (!confirmed) {
                // Nothing to accept — the click above was the check-out itself.
            }

            await expect(async () => {
                const after = await readBooking(staffApi, booking_id!);
                expect(
                    after.checked_in,
                    'checking out must be recorded on the backend too, or a desk stays ' +
                        'marked occupied after the person has left',
                ).toBeFalsy();
            }).toPass({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, window_from(), window_to());
        }
    });
});
