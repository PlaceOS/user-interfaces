/**
 * HOME-06 / HOME-07 — the home page shows YOUR bookings and nobody else's.
 *
 * `booking-scoping.spec.ts` proves `GET /bookings` is caller-scoped, and
 * `bookings-scoping.spec.ts` proves the Your Bookings page respects it. This is
 * the third surface, and the one a leak would be most visible on: the home page
 * is what appears the moment anyone signs in.
 *
 * The panel is built from the schedule's booking list filtered to today
 * (`landing-state.service.ts`), so a scope failure anywhere in that chain shows
 * up here.
 *
 * The control is not optional: a panel that showed nothing at all would pass the
 * first test on its own.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import { deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import {
    APP_URL,
    BACKEND_URL,
    WORKERS,
    deskFor,
    roleFor,
} from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import { createBookingViaApi } from '../../../../e2e/support/home/home.api';
import { LandingPage } from '../../../../e2e/support/home/landing.page';

const MINUTE = 60;

async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

/** Still today, locally? The panel shows today and nothing else. */
function stillToday(unix_seconds: number): boolean {
    return new Date(unix_seconds * 1000).toDateString() === new Date().toDateString();
}

test.describe('home page — visibility between users', () => {
    test("another user's booking today is not on your panel", async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const their_desk = deskFor(theirs);
        const start = Math.floor(Date.now() / 1000) + (60 + 20 * mine) * MINUTE;
        test.skip(!stillToday(start), 'this window has crossed midnight');
        const other = await apiAsOtherUser(theirs);
        let their_booking: number | undefined;

        // Their desk, their booking, swept by THEM: `GET /bookings` is
        // caller-scoped, so this worker cannot see or clear it.
        await releaseAsset(other, 'desk', their_desk.id, start - 60, start + 3600);

        try {
            const booking = await createBookingViaApi(other, {
                type: 'desk',
                asset_id: their_desk.id,
                asset_name: their_desk.name,
                title: uniqueTitle('E2E Home Theirs'),
                start,
                end: start + 15 * MINUTE,
            });
            their_booking = booking.id;

            const home = new LandingPage(staffPage);
            await home.open();
            await expect(
                home.upcomingCard(their_booking),
                `booking ${their_booking} belongs to another user and must not appear ` +
                    `on this user's home page`,
            ).toBeHidden({ timeout: 20_000 });

            const showing = await home.upcomingIds();
            expect(
                showing,
                `nothing of theirs should be listed. The panel is showing ` +
                    `[${showing.join(', ')}]`,
            ).not.toContain(their_booking);
        } finally {
            if (their_booking != null) await deleteBooking(other, their_booking);
            await releaseAsset(other, 'desk', their_desk.id, start - 60, start + 3600);
            await other.dispose();
        }
    });

    test('control: your own booking today IS on your panel', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        // The spare desk, so this does not contend with the desk specs, which
        // book the worker's own desk all day today.
        const desk = deskFor(WORKERS);
        // Close enough to now that an evening run still lands inside today, and
        // clear of desk-status (+5 to +45) and home-upcoming (+90 onwards).
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

            const home = new LandingPage(staffPage);
            await home.open();
            const found = await home
                .upcomingCard(booking_id)
                .waitFor({ state: 'visible', timeout: 30_000 })
                .then(() => true)
                .catch(() => false);
            if (!found) {
                const showing = await home.upcomingIds();
                throw new Error(
                    `your own booking ${booking_id} should be on the panel, without ` +
                        `which "nobody sees anything" would pass as success. The panel ` +
                        `is showing ${showing.length}: [${showing.join(', ')}] — and it ` +
                        `holds only five, with cancelled bookings taking slots (HOME-B1).`,
                );
            }
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, start - 60, start + 3600);
        }
    });
});
