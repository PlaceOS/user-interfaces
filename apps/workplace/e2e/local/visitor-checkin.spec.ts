/**
 * VIS-11 / VIS-12 — checking a visitor in from the booking details modal.
 *
 * Check-in is the one visitor behaviour that is genuinely time-sensitive, and
 * the backend rule is strict:
 *
 *   POST /bookings/:id/check_in?state=true
 *   -> 405 {"error":"Can only check in an 1.0 hour before the booking start"}
 *
 * So these specs pin the start time instead of taking the form's default. They
 * also create their bookings through the API rather than the invite form: the
 * subject is check-in, and driving the form first would only add an unrelated
 * way to fail. The desk suite sidesteps all of this by booking all-day, which is
 * not an option when the window under test is an hour wide.
 *
 * Test 1 walks the whole visit: check in, then check out. They are the same
 * button — the app flips it rather than showing a second one — and only the
 * check-out asks for confirmation. Test 2 owns the other side: the times when
 * check-in must NOT be offered.
 *
 * Neither test trusts the schedule's default day. It opens on whatever "today"
 * was at page load and never moves, so both drive the sidebar calendar to the
 * booking's OWN day with `showDayOf`. An earlier version instead kept both
 * bookings inside today and skipped near midnight; that still failed when a run
 * crossed midnight between creating the booking and loading the page, and it
 * quietly skipped the check-in coverage every evening.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    checkInViaApi,
    createBookingViaApi,
    deleteGuest,
    releaseVisitor,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { YourBookingsPage } from '../../../../e2e/support/visitor/your-bookings.page';
import type { APIRequestContext } from '@playwright/test';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

/**
 * A fixed hour tomorrow, local time, as unix seconds.
 *
 * Local rather than UTC because the schedule groups cards by the browser's own
 * day, and the browser and this process share a clock and a timezone — nothing
 * in the config pins either.
 */
function tomorrowAt(hour: number): number {
    const day = new Date();
    day.setDate(day.getDate() + 1);
    day.setHours(hour, 0, 0, 0);
    return Math.floor(day.valueOf() / 1000);
}

async function inviteAt(
    api: APIRequestContext,
    visitor: { email: string; name: string },
    title: string,
    startSeconds: number,
) {
    const me = await currentUser(api);
    const zones = (
        await Promise.all(['org', 'building', 'level'].map((t) => zonesWithTag(api, t)))
    )
        .flat()
        .map((z) => z.id);

    return createBookingViaApi(api, {
        booking_type: 'visitor',
        asset_id: visitor.email,
        asset_name: visitor.name,
        booking_start: startSeconds,
        booking_end: startSeconds + 3600,
        timezone: 'Etc/UTC',
        user_email: me.email,
        user_id: me.id,
        user_name: me.name,
        title,
        zones,
        attendees: [{ name: visitor.name, email: visitor.email }],
    });
}

test.describe('visitor check-in', () => {
    test('a visitor can be checked in and back out again', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.checkin.checkIn);
        const title = uniqueTitle('E2E Visit CheckIn');
        // Must satisfy BOTH gates, which are different sizes and easy to
        // conflate:
        //   the app shows the button only within 15 MINUTES of the start
        //     (`Booking.state` returns 'future' before that);
        //   the backend accepts a check-in within 1 HOUR of the start.
        // 10 minutes clears the tighter one with margin, and stays in the future
        // so a slow run cannot let the booking start underneath the test. This
        // one cannot move to a fixed hour like its neighbour does — a check-in
        // has to happen next to its own start time.
        // It is deliberately NOT pinned to today either: 10 minutes from now can
        // land on tomorrow, and that is fine, because the view is driven to the
        // booking's own day below.
        const start = Math.floor(Date.now() / 1000) + 10 * 60;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        const booking = await inviteAt(staffApi, visitor, title, start);
        try {
            expect(
                (await getBooking(staffApi, booking.id)).checked_in,
                'precondition: a new invite is not checked in',
            ).toBeFalsy();

            const page = new YourBookingsPage(staffPage);
            await page.open();
            await page.showVisitors();
            await page.showDayOf(start * 1000);
            const modal = await page.openDetails(booking.id);

            const check_in = page.checkInButton(modal);
            await expect(
                check_in,
                'the check-in control is missing — it is hidden by ' +
                    '`bookings.hide_checkin`/`visitors.hide_checkin`, by a booking that ' +
                    'is already done, or by `auto_checkin`',
            ).toBeVisible({ timeout: 20_000 });
            await check_in.click();

            // Assert on the stored record, not on the button turning green.
            await expect(async () => {
                expect((await getBooking(staffApi, booking.id)).checked_in).toBe(true);
            }).toPass({ timeout: 20_000 });

            // ...and back out again. This is the SAME button — the app flips it
            // once you are checked in rather than showing a second one — and it
            // asks for confirmation first, which check-in does not.
            await check_in.click();
            await page.acceptConfirm();

            await expect(async () => {
                const out = await getBooking(staffApi, booking.id);
                expect(
                    out.checked_in,
                    'checking out must clear the flag on the backend, not just on screen',
                ).toBeFalsy();
            }).toPass({ timeout: 20_000 });

            // Once checked out the control disappears altogether: the app keeps
            // `checked_out_at` and hides it, so a visitor cannot be checked in
            // twice off one invite. Without this, a check-out that only redrew
            // the button would still look like a pass.
            await expect(
                check_in,
                'the check-in control must not come back after checking out',
            ).toBeHidden({ timeout: 20_000 });
        } finally {
            await deleteBooking(staffApi, booking.id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('a booking too far ahead offers no check-in, and the backend refuses too', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.checkin.tooEarly);
        const title = uniqueTitle('E2E Visit Too Early');
        // A fixed hour tomorrow, not "3 hours from now": the gates are the
        // subject here, and 10am tomorrow is outside both of them at every hour
        // of the day, so the test behaves the same at 09:00 and at 23:59.
        const start = tomorrowAt(10);

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        const booking = await inviteAt(staffApi, visitor, title, start);
        try {
            const page = new YourBookingsPage(staffPage);
            await page.open();
            await page.showVisitors();
            await page.showDayOf(start * 1000);
            const modal = await page.openDetails(booking.id);

            // The app's own guard: `Booking.state` is 'future' until 15 minutes
            // before the start, and the button is only rendered for
            // upcoming/started/in_progress. So there is nothing to click — an
            // earlier version of this spec expected to click and be refused,
            // which was wrong about the app rather than finding a bug.
            await expect(
                page.checkInButton(modal),
                'a booking 3h away must not offer check-in at all',
            ).toBeHidden();

            // ...and the rule is not client-side only. Without this, hiding the
            // button would be enough to pass while the API accepted a check-in
            // from anyone at any time.
            const refused = await checkInViaApi(staffApi, booking.id);
            expect(
                refused.status,
                `the backend must refuse an early check-in, got ${refused.status} ` +
                    `${refused.body}`,
            ).toBeGreaterThanOrEqual(400);
            expect(
                refused.body,
                'and refuse it for the timing reason, not some unrelated error',
            ).toMatch(/before the booking start/i);

            expect(
                (await getBooking(staffApi, booking.id)).checked_in,
                'a refused check-in must leave the booking not checked in',
            ).toBeFalsy();
        } finally {
            await deleteBooking(staffApi, booking.id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
