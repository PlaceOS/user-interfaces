/**
 * HOME-06 / HOME-07 — the home page shows YOUR bookings and nobody else's.
 *
 * `booking-scoping.spec.ts` proves `GET /bookings` is caller-scoped, and
 * `bookings-scoping.spec.ts` proves the Your Bookings page respects it. This is
 * the third surface, and the one a leak would be most visible on: the home page
 * is what appears the moment anyone signs in.
 *
 * ## The other user is the ADMIN, not another worker
 *
 * The next-booking card shows the first booking a user has today. A booking
 * made today for the non-admin of another worker would show on THAT worker's
 * card while its own home specs run. The admin has no spec that reads the
 * card, so the admin is the "somebody else" here.
 *
 * ## The control is in the same test
 *
 * The card shows one booking, the earliest of today. The admin's booking
 * starts BEFORE this user's own booking. A leak would put the admin's booking
 * on the card. The correct card shows this user's own booking, which also
 * proves that the card loaded.
 *
 * The admin's booking is on THIS worker's scoping desk (`scopingDeskFor`); no
 * other spec may book it.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { apiFor, deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import { deskFor, scopingDeskFor } from '../../../../e2e/support/env';
import {
    clearToday,
    createBookingViaApi,
    inProgressSlot,
    todayBounds,
} from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

const MINUTE = 60;

/** Still today, locally? The card shows today and nothing else. */
function stillToday(unix_seconds: number): boolean {
    return new Date(unix_seconds * 1000).toDateString() === new Date().toDateString();
}

test.describe('home page — visibility between users', () => {
    test("another user's booking today is not on your card", async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const scoping_desk = scopingDeskFor(testInfo.parallelIndex);
        const own_desk = deskFor(testInfo.parallelIndex);
        const theirs_title = uniqueTitle('E2E Home Theirs');
        const mine_title = uniqueTitle('E2E Home Mine First');
        const { from, to } = todayBounds();
        // Theirs starts first, so a card that leaked would show theirs.
        const theirs = inProgressSlot();
        const mine = { start: theirs.start + MINUTE, end: theirs.end };

        const admin = await apiFor('admin', testInfo.parallelIndex);
        let their_booking: number | undefined;
        let my_booking: number | undefined;

        // Their booking is swept by THEM: `GET /bookings` is caller-scoped, so
        // this worker cannot see or clear it.
        await releaseAsset(admin, 'desk', scoping_desk.id, from, to);
        await clearToday(staffApi);

        try {
            their_booking = (
                await createBookingViaApi(admin, {
                    type: 'desk',
                    asset_id: scoping_desk.id,
                    asset_name: scoping_desk.name,
                    title: theirs_title,
                    ...theirs,
                })
            ).id;
            my_booking = (
                await createBookingViaApi(staffApi, {
                    type: 'desk',
                    asset_id: own_desk.id,
                    asset_name: own_desk.name,
                    title: mine_title,
                    ...mine,
                })
            ).id;

            const home = new LandingNewPage(staffPage);
            await home.open();
            await expect(
                home.upcomingTitle,
                `the card must show this user's own booking. An earlier booking of ` +
                    `another user (${their_booking}) must not take its place`,
            ).toHaveText(mine_title, { timeout: 30_000 });
            await expect(home.upcoming).not.toContainText(theirs_title);
        } finally {
            if (their_booking != null) await deleteBooking(admin, their_booking);
            if (my_booking != null) await deleteBooking(staffApi, my_booking);
            await admin.dispose();
        }
    });

    /**
     * A second control, on a surface that is not limited to one booking: the
     * booking is yours, it exists, and Your Bookings lists it.
     */
    test('control: your own booking today is visible to you', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = scopingDeskFor(testInfo.parallelIndex);
        // Close enough to now that an evening run still lands inside today.
        const start = Math.floor(Date.now() / 1000) + (46 + 10 * testInfo.parallelIndex) * MINUTE;
        test.skip(!stillToday(start), 'this window has crossed midnight');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, start - 60, start + 3600);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E Home Mine'),
                start,
                end: start + 8 * MINUTE,
            });
            booking_id = booking.id;

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showBooking(booking_id, start * 1000, ['desk']);
            await expect(
                schedule.card(booking_id),
                `your own booking ${booking_id} must be visible to you, without which ` +
                    `"nobody sees anything" would pass as success in the test above`,
            ).toBeVisible({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, start - 60, start + 3600);
        }
    });
});
