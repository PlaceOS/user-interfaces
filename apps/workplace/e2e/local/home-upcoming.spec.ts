/**
 * HOME-04 / HOME-05 / HOME-08 — the Upcoming panel on the home page.
 *
 * This panel is the first thing a user sees after signing in, and the only place
 * they check "have I got a desk today?". Nothing has tested it: `boot.spec.ts`
 * proves the shell renders and org data resolves, which says nothing about
 * whether the panel shows the right bookings — or any.
 *
 * ## How the panel actually works, which is not what its name suggests
 *
 * "Upcoming" means **today**, and nothing else. `landing-state.service.ts`
 * builds it from the SCHEDULE's own booking list:
 *
 *   filtered_bookings().filter(i => i.state !== 'done' && isSameDay(i.date, now))
 *
 * then the template shows the first FIVE (`events | slice: 0 : 5`). Three
 * consequences, all of which shaped these tests:
 *
 *  - a booking tomorrow is not on it. A first draft of this file booked sixteen
 *    days out and spent three failures discovering that;
 *  - a booking that has finished is not on it either;
 *  - it inherits everything the schedule's query does — including
 *    `include_deleted: true`. See HOME-B1 on the third test.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import { WORKERS, deskFor } from '../../../../e2e/support/env';
import { createBookingViaApi } from '../../../../e2e/support/home/home.api';
import { LandingPage } from '../../../../e2e/support/home/landing.page';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

const MINUTE = 60;

/**
 * A short window later TODAY, on the desk no worker owns.
 *
 * The panel only shows today, which puts these specs on the same day as the
 * dev's desk specs (all day, own desk), `bookings-checkin` (an hour from now,
 * own desk) and `desk-status` (minutes from now, spare desk). So: the SPARE
 * desk, and a start well clear of `desk-status`, staggered twenty minutes per
 * worker.
 */
function laterToday(workerIndex: number) {
    const start = Math.floor(Date.now() / 1000) + (90 + 20 * workerIndex) * MINUTE;
    return { start, end: start + 15 * MINUTE };
}

/** Is that window still today, locally? Late-evening runs cannot use it. */
function stillToday(unix_seconds: number): boolean {
    return new Date(unix_seconds * 1000).toDateString() === new Date().toDateString();
}

test.describe('home page — the Upcoming panel', () => {
    test('a booking later today is listed on the panel', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(WORKERS);
        const slot = laterToday(testInfo.parallelIndex);
        test.skip(
            !stillToday(slot.start),
            'this window has crossed midnight, and the panel only shows today',
        );
        let booking_id: number | undefined;

        // Only this worker's own window: the spare desk is shared, so a wider
        // sweep would delete another worker's booking mid-test.
        await releaseAsset(staffApi, 'desk', desk.id, slot.start - 60, slot.end + 60);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E Home Upcoming'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const home = new LandingPage(staffPage);
            await home.open();

            const found = await home
                .upcomingCard(booking_id)
                .waitFor({ state: 'visible', timeout: 30_000 })
                .then(() => true)
                .catch(() => false);
            if (!found) {
                // Say what the panel IS showing, with the reason it might be
                // full: it holds five, and cancelled bookings count (HOME-B1).
                const showing = await home.upcomingIds();
                throw new Error(
                    `booking ${booking_id} is not on the Upcoming panel. It is showing ` +
                        `${showing.length}: [${showing.join(', ')}]. The panel holds five ` +
                        `and CANCELLED bookings take slots too, so a user with five ` +
                        `cancelled bookings today cannot see a real one — that is HOME-B1, ` +
                        `covered by the third test in this file.`,
                );
            }
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, slot.start - 60, slot.end + 60);
        }
    });

    test('View all hands off to Your Bookings, with the booking listed there', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(WORKERS);
        // Well clear of the first test's window, still today.
        const start = Math.floor(Date.now() / 1000) + (200 + 20 * testInfo.parallelIndex) * MINUTE;
        const slot = { start, end: start + 15 * MINUTE };
        test.skip(
            !stillToday(slot.start),
            'this window has crossed midnight, and the panel only shows today',
        );
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, slot.start - 60, slot.end + 60);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E Home ViewAll'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const home = new LandingPage(staffPage);
            await home.open();
            await expect(
                home.viewAll,
                'the Upcoming panel should offer a View all link',
            ).toBeVisible({ timeout: 30_000 });
            await home.viewAll.click();

            await expect(
                staffPage,
                'View all should land on the Your Bookings page',
            ).toHaveURL(/#\/your-bookings/, { timeout: 30_000 });

            // The handoff is only useful if the booking is findable there.
            const schedule = new SchedulePage(staffPage);
            await schedule.showBooking(booking_id, slot.start * 1000, ['desk']);
            await expect(
                schedule.card(booking_id),
                'the same booking should be listed on Your Bookings',
            ).toBeVisible({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, slot.start - 60, slot.end + 60);
        }
    });

    /**
     * HOME-B1 — the home page keeps showing bookings you cancelled.
     *
     * The panel is built from the schedule's booking list, and the schedule asks
     * for bookings with `include_deleted: true` (`schedule-state.service.ts`),
     * hiding only what the user cancelled in the CURRENT session. So a cancelled
     * booking stays on the home page for ever.
     *
     * Measured on this stack: the panel was showing **five bookings, every one
     * of them cancelled** — `deleted: true` on all five, confirmed by id — while
     * a live booking for the same user on the same day was absent. Because the
     * panel holds exactly five, the junk had crowded the real one out entirely.
     *
     * Two separate harms, and the second is the worse one:
     *
     *  1. the page tells a user they have a desk today when they cancelled it;
     *  2. it can HIDE a real booking, because cancelled ones take the slots.
     *
     * This is the same root cause as the 100-row listing problem in the project
     * notes, surfacing on the first screen users see. `fixme` until the panel
     * either excludes deleted bookings or the schedule stops asking for them.
     */
    test.fixme('a cancelled booking leaves the panel', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(WORKERS);
        const start = Math.floor(Date.now() / 1000) + (300 + 20 * testInfo.parallelIndex) * MINUTE;
        const slot = { start, end: start + 15 * MINUTE };
        test.skip(!stillToday(slot.start), 'this window has crossed midnight');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, slot.start - 60, slot.end + 60);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E Home Cancelled'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const home = new LandingPage(staffPage);
            await home.open();
            await expect(
                home.upcomingCard(booking_id),
                'precondition: the booking is on the panel before it is cancelled',
            ).toBeVisible({ timeout: 30_000 });

            await deleteBooking(staffApi, booking_id);
            await staffPage.reload();
            await home.open();

            await expect(
                home.upcomingCard(booking_id),
                'a cancelled booking must NOT stay on the home page — it tells the user ' +
                    'they have a desk they no longer have, and it takes one of the five ' +
                    'slots the panel has',
            ).toBeHidden({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, slot.start - 60, slot.end + 60);
        }
    });
});
