/**
 * YB-05 — one person's bookings are not another person's business, on the page.
 *
 * `booking-scoping.spec.ts` already proves the API side: `GET /bookings` is
 * caller-scoped and a delete attempt by somebody else is rejected. This is the
 * other half, and it is a different failure: the page asks for several booking
 * types at once and merges them into one list, and a merge that dropped the
 * caller scope — an admin-ish query, a shared cache, an `include_booked_by` that
 * is too generous — would leak a colleague's day into yours while every API test
 * stayed green.
 *
 * The pair here is the usual one, and the control is not optional: a page that
 * listed nothing at all would pass the first test on its own.
 *
 * The second user is real. A token is minted for another seeded identity rather
 * than reusing this worker's bearer, so "another user" means another user rather
 * than the same one twice.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import { deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { APP_URL, BACKEND_URL, WORKERS, deskFor, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import {
    SCHEDULE_DAYS,
    dayBoundsOn,
    slotOn,
} from '../../../../e2e/support/bookings/bookings.env';
import {
    createBookingViaApi,
    releaseFor,
} from '../../../../e2e/support/bookings/bookings.api';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

const DAY = 86_400;

/**
 * The window a spec sweeps and lists over: EXACTLY its own day.
 *
 * Not the day plus or minus one. A wider window reaches into the day another
 * spec file owns, and the sweep that lets a spec recover from its own past
 * failures then clears somebody else's booking instead.
 */
function dayWindow(dayOffset: number) {
    return dayBoundsOn(dayOffset);
}

/** An API context signed in as a DIFFERENT seeded user. */
async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

test.describe('your bookings — visibility between users', () => {
    test('another user\'s booking is not listed on your page', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const their_desk = deskFor(theirs);
        const day = SCHEDULE_DAYS.scoping;
        const slot = slotOn(day, 9);
        const { from, to } = dayWindow(day);
        const other = await apiAsOtherUser(theirs);
        let their_booking: number | undefined;

        // Their desk, their booking, cleared by THEM: `GET /bookings` is
        // caller-scoped, so this worker's sweep cannot see it and the desk would
        // stay held by something invisible.
        await releaseFor(other, 'desk', their_desk.id, from, to);

        try {
            const booking = await createBookingViaApi(other, {
                type: 'desk',
                asset_id: their_desk.id,
                asset_name: their_desk.name,
                title: uniqueTitle('E2E YB Theirs'),
                start: slot.start,
                end: slot.end,
            });
            their_booking = booking.id;

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showOnly(['desk', 'visitor']);
            await schedule.showDayOf(slot.date_ms);
            await schedule.waitForLoaded();

            await expect(
                schedule.card(their_booking),
                `booking ${their_booking} belongs to another user and must not appear ` +
                    `on this user's page`,
            ).toBeHidden({ timeout: 20_000 });

            const rendered = await schedule.renderedBookingIds();
            expect(
                rendered,
                `nothing of theirs should be listed. Rendered: [${rendered.join(', ')}]`,
            ).not.toContain(their_booking);
        } finally {
            if (their_booking != null) await deleteBooking(other, their_booking);
            await releaseFor(other, 'desk', their_desk.id, from, to);
            await other.dispose();
        }
    });

    test('control: your own booking on the same day IS listed', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const day = SCHEDULE_DAYS.scoping;
        const slot = slotOn(day, 14);
        const { from, to } = dayWindow(day);
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'desk', desk.id, from, to);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E YB Mine'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showBooking(booking_id, slot.date_ms, ['desk']);

            await expect(
                schedule.card(booking_id),
                'your own booking must be listed — without this, "nobody sees ' +
                    'anything" would pass as success',
            ).toBeVisible({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, from, to);
        }
    });
});
