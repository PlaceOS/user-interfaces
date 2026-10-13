/**
 * HOME-04 / HOME-05 / HOME-08 — the next-booking card on the home page.
 *
 * This card is the first thing a user sees after signing in, and the only
 * place they check "have I got a desk today?".
 *
 * ## How the card works
 *
 * The card shows ONE booking: the first booking of TODAY that is not done,
 * cancelled or declined (`landing-state.service.ts`, `upcoming_events`, and
 * `landing-upcoming-booking.component.ts`, `nextEvent`). Three consequences
 * shaped these tests:
 *
 *  - a booking tomorrow is not on it;
 *  - a booking that has finished is not on it;
 *  - a second booking today is not on it until the first one ends. So each
 *    test starts from an empty day (`clearToday`).
 *
 * The page before this one listed five bookings and kept cancelled ones, which
 * was HOME-B1. This card filters deleted bookings out, and the last test
 * holds that.
 *
 * ## The clear state is not proof of an empty day
 *
 * The clear state is what the card shows BEFORE its bookings load. A test
 * that expects "no booking" after a page load must hold a control: a second
 * booking that the card can only show when it has loaded.
 */
import { deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';
import { deskFor, scopingDeskFor } from '../../../../e2e/support/env';
import { expect, test } from '../../../../e2e/support/fixtures';
import {
    clearToday,
    createBookingViaApi,
    inProgressSlot,
    stillToday,
} from '../../../../e2e/support/home/home.api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';

const MINUTE = 60;

test.describe('home page — the next-booking card', () => {
    test('the card changes from the clear state to the booking of today', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home Upcoming');
        const home = new LandingNewPage(staffPage);
        let booking_id: number | undefined;

        await clearToday(staffApi);

        try {
            await home.open();
            await expect(
                home.clearStateDeskLink,
                'with no booking today the card offers to make one',
            ).toBeVisible();
            await expect(home.upcomingEdit).toHaveCount(0);

            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                ...inProgressSlot(),
            });
            booking_id = booking.id;

            await staffPage.reload();
            await expect(
                home.upcomingTitle,
                'the card should show the booking the user has today',
            ).toHaveText(title, { timeout: 30_000 });
            await expect(home.clearStateDeskLink).toHaveCount(0);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    /**
     * The card has its own branch for a booking that has not started: it
     * shows the time to the start. Every other home spec uses a booking that
     * is in progress, so this is the one test that renders that branch.
     */
    test('a booking that starts later today is on the card', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home Later');
        const start = Math.floor(Date.now() / 1000) + 30 * MINUTE;
        test.skip(
            !stillToday(start),
            'this window has crossed midnight, and the card only shows today',
        );
        const home = new LandingNewPage(staffPage);
        let booking_id: number | undefined;

        await clearToday(staffApi);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                start,
                end: start + 15 * MINUTE,
            });
            booking_id = booking.id;

            await home.open();
            await expect(
                home.upcomingTitle,
                'the card should show a booking of today that has not started',
            ).toHaveText(title, { timeout: 30_000 });
            await expect(
                home.upcomingStartsIn,
                'a booking that has not started shows the time to its start',
            ).toBeVisible();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('View all hands off to Your Bookings, with the booking listed there', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E Home ViewAll');
        const slot = inProgressSlot();
        const home = new LandingNewPage(staffPage);
        let booking_id: number | undefined;

        await clearToday(staffApi);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                ...slot,
            });
            booking_id = booking.id;

            await home.open();
            await expect(home.upcomingTitle).toHaveText(title, { timeout: 30_000 });
            await home.viewAllBookings.click();
            await expect(
                staffPage,
                'View all should land on the Your Bookings page',
            ).toHaveURL(/#\/your-bookings/, { timeout: 30_000 });

            // The handoff is only useful if the booking is findable there.
            // `open` is what puts the page on its list view.
            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showBooking(booking_id, slot.start * 1000, ['desk']);
            await expect(
                schedule.card(booking_id),
                'the same booking should be listed on Your Bookings',
            ).toBeVisible({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    /**
     * HOME-B1 — the page before this one kept showing bookings that the user
     * had cancelled, and they could crowd a live booking out. The card must
     * drop a cancelled booking.
     *
     * The control is a second live booking that starts a minute after the
     * cancelled one. The card shows the earliest booking of today, so it shows
     * the second only when it has loaded AND has dropped the cancelled first.
     * The clear state cannot prove this: see the file header.
     *
     * Red-checked on 2026-10-14. `upcoming_events` drops a cancelled booking
     * twice: on `deleted`, and on the status `cancelled` that a deleted
     * booking gets (`resolveStatus`). The test fails only with BOTH filters
     * removed. With `!i.deleted` alone removed it passes, correctly.
     */
    test('a cancelled booking leaves the card', async ({ staffPage, staffApi }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const next_desk = scopingDeskFor(testInfo.parallelIndex);
        const cancelled_title = uniqueTitle('E2E Home Cancelled');
        const next_title = uniqueTitle('E2E Home Next');
        const first = inProgressSlot();
        const second = { start: first.start + MINUTE, end: first.end };
        const home = new LandingNewPage(staffPage);
        let cancelled_id: number | undefined;
        let next_id: number | undefined;

        await clearToday(staffApi);

        try {
            cancelled_id = (
                await createBookingViaApi(staffApi, {
                    type: 'desk',
                    asset_id: desk.id,
                    asset_name: desk.name,
                    title: cancelled_title,
                    ...first,
                })
            ).id;
            next_id = (
                await createBookingViaApi(staffApi, {
                    type: 'desk',
                    asset_id: next_desk.id,
                    asset_name: next_desk.name,
                    title: next_title,
                    ...second,
                })
            ).id;

            await home.open();
            await expect(
                home.upcomingTitle,
                'precondition: the earlier booking is on the card before it is cancelled',
            ).toHaveText(cancelled_title, { timeout: 30_000 });

            await deleteBooking(staffApi, cancelled_id);
            await staffPage.reload();
            await expect(
                home.upcomingTitle,
                'a cancelled booking must NOT stay on the home page — it tells the user ' +
                    'they have a desk they no longer have. The card must show the next ' +
                    'live booking',
            ).toHaveText(next_title, { timeout: 30_000 });
        } finally {
            if (cancelled_id != null) await deleteBooking(staffApi, cancelled_id);
            if (next_id != null) await deleteBooking(staffApi, next_id);
        }
    });
});
