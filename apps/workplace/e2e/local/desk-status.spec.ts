/**
 * DESK-20 (REG-04) — a desk booking's status shows on its card.
 *
 * A named past regression — *"status display for desk bookings"* — with no test
 * behind it. The card is where a user answers "am I checked in?", and it is the
 * only place they can: the state lives on the booking, not on the screen, so a
 * card that draws the wrong badge is indistinguishable from a check-in that
 * never happened.
 *
 * The badge is matched on the ATTRIBUTE the template puts on it
 * (`div[checked-in-badge]`), not on its colour or its text, both of which are
 * styling and translation.
 *
 * ## The check-in here is done through the API on purpose
 *
 * `bookings-checkin.spec.ts` covers checking in through the UI. This test is
 * about what the CARD draws for a given state, so the state is set directly and
 * the page is only ever read.
 *
 * ## Why this booking is minutes away, on the spare desk
 *
 * The backend refuses a check-in more than an HOUR before the booking starts
 * (measured: `{"error":"Can only check in an 1.0 hour before the booking
 * start"}`), so this cannot sit days out like the other desk specs. Booking
 * today brings it into contention with two other things, and both are avoided
 * by construction:
 *
 *  - the dev's desk specs book the WORKER'S desk all day today, and
 *    `bookings-checkin.spec.ts` books it for an hour from now — so this uses the
 *    SPARE desk instead;
 *  - the spare desk is shared between workers, so the START is staggered by
 *    worker index, ten minutes apart, with a window of eight minutes. Four
 *    workers therefore fit inside the one-hour check-in gate without overlapping
 *    each other.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { STAFF_API, deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import { altDesk } from '../../../../e2e/support/desk/desk.env';
import { createDeskBookingViaApi } from '../../../../e2e/support/desk/desk.api';
import { DeskSchedulePage } from '../../../../e2e/support/desk/desk-schedule.page';

test.describe('desk booking status on the card', () => {
    test('the checked-in badge appears only once the booking is checked in', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = altDesk();
        const now = Math.floor(Date.now() / 1000);
        // Five minutes out, ten minutes apart per worker, eight minutes long.
        const start = now + (5 + 10 * testInfo.parallelIndex) * 60;
        const end = start + 8 * 60;
        const from = now - 3600;
        const to = now + 6 * 3600;
        const title = uniqueTitle('E2E Desk Status');
        let booking_id: number | undefined;

        // Only this worker's own window, not the whole day: the spare desk is
        // shared, and a day-wide sweep here would delete another worker's
        // booking mid-test.
        await releaseAsset(staffApi, 'desk', desk.id, start - 60, end + 60);

        try {
            const booking = await createDeskBookingViaApi(staffApi, {
                desk,
                title,
                start,
                end,
            });
            booking_id = booking.id;

            const schedule = new DeskSchedulePage(staffPage);
            await schedule.open();
            await schedule.showDesks();
            await schedule.showDayOf(start * 1000);
            await expect(
                schedule.card(booking_id),
                'the booking should be listed on its own day',
            ).toBeVisible({ timeout: 30_000 });

            // Before: no badge. This half is what stops the test passing against
            // a card that always draws one.
            await expect(
                schedule.checkedInBadge(booking_id),
                'a booking nobody has checked in to must not be badged as checked in',
            ).toBeHidden({ timeout: 10_000 });

            // Check in on the backend, then reload and look again.
            const res = await staffApi.post(
                `${STAFF_API}/bookings/${booking_id}/check_in?state=true`,
            );
            expect(
                res.status(),
                `checking in through the API failed: ${await res.text()}`,
            ).toBeLessThan(300);

            await staffPage.reload();
            await schedule.showDesks();
            await schedule.showDayOf(start * 1000);
            await expect(
                schedule.card(booking_id),
                'the booking should still be listed after checking in',
            ).toBeVisible({ timeout: 30_000 });
            await expect(
                schedule.checkedInBadge(booking_id),
                'once checked in, the card must say so — this is the only place a user ' +
                    'can tell',
            ).toBeVisible({ timeout: 20_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, start - 60, end + 60);
        }
    });
});
