/**
 * YB-01 / YB-04 / YB-13 — the Your Bookings page lists what you booked.
 *
 * The page every booking flow hands off to, and until now the only page in the
 * app that was USED by other specs without being TESTED by any. The visitor and
 * room specs drive it as a means to an end — open it, find a card, press a menu
 * item — so a page that listed the wrong bookings, or listed them on the wrong
 * day, would still let all of them pass.
 *
 * Three questions, in the order they matter:
 *
 *  1. does it list the user's own bookings, of more than one type, on the day
 *     they fall on?
 *  2. does the sidebar calendar really change which day is listed?
 *  3. does it ASK the backend for the right thing — the right window and the
 *     right types?
 *
 * The third is on the wire on purpose. A page that fetched a wide window and
 * filtered in the browser would look identical while being a listing-limit bug
 * waiting to happen; that is precisely how the 100-row problem in the notes
 * hides.
 *
 * ## The bookings here are seeded through the API, not booked through a form
 *
 * The subject is the page. Driving the desk form and the visitor form first
 * would add two unrelated ways to fail before this spec has begun — and both
 * are already covered by their own files.
 *
 * ## Do not assert an exact card count on this page
 *
 * The schedule asks for bookings with **`include_deleted: true`**
 * (`schedule-state.service.ts`) and renders the cancelled ones too, marked
 * "Cancelled". It only hides what the user deleted in the CURRENT session, from
 * `sessionStorage`. So a user's cancelled bookings keep appearing for ever, and
 * the number of cards on any day grows with every run this suite makes.
 *
 * Measured while writing this file: with the backend reporting **zero** live
 * bookings for the day, the page rendered **eight** cards, all of them from
 * earlier runs. That is the same mechanism as the 100-row listing problem in the
 * project notes, seen from the other end.
 *
 * So these tests assert on WHICH bookings are listed, against what the backend
 * says is live, and never on how many cards are on screen.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { deskFor } from '../../../../e2e/support/env';
import {
    SCHEDULE_DAYS,
    dayBoundsOn,
    scheduleVisitorFor,
    slotOn,
} from '../../../../e2e/support/bookings/bookings.env';
import {
    createBookingViaApi,
    deleteGuestByEmail,
    releaseFor,
} from '../../../../e2e/support/bookings/bookings.api';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';

const DAY = 86_400;

/** A window around one seeded day, for sweeping and for listing. */
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

test.describe('your bookings — the listing', () => {
    test('the page lists your own bookings of more than one type on their day', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const visitor = scheduleVisitorFor(testInfo.parallelIndex, 'list');
        const day = SCHEDULE_DAYS.list;
        const desk_slot = slotOn(day, 9);
        const visit_slot = slotOn(day, 14);
        const { from, to } = dayWindow(day);
        const desk_title = uniqueTitle('E2E YB Desk');
        const visit_title = uniqueTitle('E2E YB Visit');
        const ids: { type: string; id: number }[] = [];

        // Sweep this spec's own day first, for both assets. A run that died
        // between seeding and cleanup leaves cards behind, and this test counts
        // cards — so a leftover does not just linger, it fails the next run for
        // a reason that looks nothing like the cause.
        await releaseFor(staffApi, 'desk', desk.id, from, to);
        await releaseFor(staffApi, 'visitor', visitor.email, from, to);

        try {
            const desk_booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: desk_title,
                start: desk_slot.start,
                end: desk_slot.end,
            });
            ids.push({ type: 'desk', id: desk_booking.id });

            const visit = await createBookingViaApi(staffApi, {
                type: 'visitor',
                asset_id: visitor.email,
                asset_name: visitor.name,
                title: visit_title,
                start: visit_slot.start,
                end: visit_slot.end,
                attendees: [{ name: visitor.name, email: visitor.email }],
            });
            ids.push({ type: 'visitor', id: visit.id });

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            // Both types on, and only those two, so the assertions below are
            // about these two bookings rather than whatever else the worker owns.
            await schedule.showBooking(desk_booking.id, desk_slot.date_ms, [
                'desk',
                'visitor',
            ]);

            // Assert on the ids, not on a count. "Two cards are on screen" is
            // true of the wrong two cards.
            await expect(
                schedule.card(desk_booking.id),
                `the desk booking ${desk_booking.id} should be listed on its own day`,
            ).toBeVisible({ timeout: 30_000 });
            await expect(
                schedule.card(visit.id),
                `the visitor booking ${visit.id} should be listed on the same day`,
            ).toBeVisible({ timeout: 30_000 });

            // Nothing LIVE on this day may be missing from the page. Compared
            // against the backend rather than against a number, because the page
            // also carries cancelled cards from previous runs — see the note at
            // the top of this file.
            const rendered = await schedule.renderedBookingIds();
            const day_start = desk_slot.start - 12 * 3600;
            const day_end = desk_slot.start + 12 * 3600;
            const live: number[] = [];
            for (const type of ['desk', 'visitor']) {
                const list = await listBookings(staffApi, type, from, to);
                for (const booking of list) {
                    if (booking.deleted) continue;
                    if (booking.booking_start < day_start) continue;
                    if (booking.booking_start > day_end) continue;
                    live.push(Number(booking.id));
                }
            }
            expect(
                live.length,
                'precondition: the backend has exactly the two bookings this test made',
            ).toBe(2);
            for (const id of live) {
                expect(
                    rendered,
                    `booking ${id} is live on this day but is not on the page. ` +
                        `Rendered: [${rendered.join(', ')}]`,
                ).toContain(id);
            }
        } finally {
            for (const { id } of ids) await deleteBooking(staffApi, id);
            await deleteGuestByEmail(staffApi, visitor.email);
            await releaseFor(staffApi, 'desk', desk.id, from, to);
            await releaseFor(staffApi, 'visitor', visitor.email, from, to);
        }
    });

    test('the sidebar calendar changes which day is listed', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const day = SCHEDULE_DAYS.list;
        const on_day = slotOn(day, 10);
        const next_day = slotOn(day + 1, 10);
        const title = uniqueTitle('E2E YB Day');
        const { from, to } = dayWindow(day);
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'desk', desk.id, from, to + DAY);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                start: on_day.start,
                end: on_day.end,
            });
            booking_id = booking.id;

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showOnly(['desk']);

            // The day it is on: the card is there.
            await schedule.showBooking(booking_id, on_day.date_ms, ['desk']);
            await expect(
                schedule.card(booking_id),
                'the booking should be listed on the day it falls on',
            ).toBeVisible({ timeout: 30_000 });

            // The next day: it is not. This is the half that matters — a page
            // that ignored the calendar and always listed a wide window would
            // pass the first assertion and fail this one.
            await schedule.showDayOf(next_day.date_ms);
            await schedule.waitForLoaded();
            await expect(
                schedule.card(booking_id),
                'the booking must NOT be listed on a day it does not fall on',
            ).toBeHidden({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, from, to + DAY);
        }
    });

    test('the page asks the backend for one day at a time, per type', async ({
        staffPage,
    }) => {
        const day = SCHEDULE_DAYS.list;
        const target = slotOn(day, 10);

        // Every bookings request the page makes, with its window.
        const asked: { type: string; from: number; to: number }[] = [];
        staffPage.on('request', (r) => {
            const url = new URL(r.url());
            if (!url.pathname.endsWith('/api/staff/v1/bookings')) return;
            if (r.method() !== 'GET') return;
            asked.push({
                type: url.searchParams.get('type') ?? '',
                from: Number(url.searchParams.get('period_start')),
                to: Number(url.searchParams.get('period_end')),
            });
        });

        const schedule = new SchedulePage(staffPage);
        await schedule.open();
        await schedule.showOnly(['desk', 'visitor']);
        await schedule.showDayOf(target.date_ms);
        await schedule.waitForLoaded();

        const for_day = asked.filter(
            (a) => a.from >= target.start - DAY && a.to <= target.start + DAY,
        );
        expect(
            for_day.length,
            `the page should request the day being shown; it asked for ` +
                `${JSON.stringify(asked.slice(0, 8))}`,
        ).toBeGreaterThan(0);

        // A day, not a fortnight. The 100-row listing limit in the notes is
        // reachable precisely because a wide window returns more rows than the
        // default limit, so the width of this request is the thing to guard.
        for (const ask of for_day) {
            expect(
                ask.to - ask.from,
                `a listing request should cover about a day, not ${(ask.to - ask.from) / DAY} days`,
            ).toBeLessThanOrEqual(2 * DAY);
        }

        // And it asks per type rather than for everything at once — which is
        // what makes the type filters meaningful on the backend as well as on
        // screen.
        const types = new Set(for_day.map((a) => a.type).filter(Boolean));
        expect(
            [...types].length,
            `the page should ask per booking type, got ${JSON.stringify([...types])}`,
        ).toBeGreaterThan(1);
    });
});
