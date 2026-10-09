/**
 * YB-06 / YB-07 — cancelling a booking from Your Bookings.
 *
 * Every desk spec in this suite tears its booking down through the API, which is
 * right for a teardown and useless as coverage: the Cancel item in a desk
 * booking's menu, and the confirmation in front of it, have never been pressed
 * by anything. The equivalent gap for rooms and visitors was worth two bugs
 * between them, one of which (ROOM-B4) still holds a room after the user thinks
 * they cancelled it.
 *
 * The pair is deliberate, and the second test is the important one: a dialog
 * whose DECLINE button also deletes is worse than one that fails to delete, and
 * only "I said no and it is still there" can catch it.
 *
 * Both read the backend afterwards. The card leaves the screen either way —
 * the page removes it optimistically — so the screen is not evidence.
 *
 * ## Why this lives with the page and not with the desk form
 *
 * The cancel control belongs to the schedule, not to the booking form. Keeping
 * it here means the desk specs stay about the desk form, and this file owns
 * every route into the schedule's cancel dialog regardless of booking type.
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
    isLive,
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

test.describe('your bookings — cancelling', () => {
    test('cancelling a desk booking from the list removes it for real', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const day = SCHEDULE_DAYS.cancel;
        const slot = slotOn(day, 9);
        const { from, to } = dayWindow(day);
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'desk', desk.id, from, to);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E YB Cancel'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;
            // POLLED, not read once. Under a full parallel run a booking that
            // was just created has been seen missing from the very next listing
            // call and present a moment later — read-after-write lag on a
            // hammered stack. Asserting immediately turned that into "the
            // booking was not live before anyone pressed Cancel", which is
            // alarming and wrong: the booking existed, the list was behind.
            await expect(async () => {
                const live = await isLive(staffApi, 'desk', booking_id!, from, to);
                if (!live) {
                    const row = await readBooking(staffApi, booking_id!);
                    expect(
                        live,
                        `the new booking is not in the listing yet. By id it reads: ` +
                            `deleted=${row.deleted} start=${row.booking_start} ` +
                            `window=${from}-${to}`,
                    ).toBe(true);
                }
            }).toPass({ timeout: 20_000 });

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            // `showBooking` rather than day-then-filters, because the page's list
            // has been seen going stale under a full parallel run — see the note
            // on the helper.
            await schedule.showBooking(booking_id, slot.date_ms, ['desk'], async () => {
                const now = await readBooking(staffApi, booking_id!);
                return `id ${now.id} deleted=${now.deleted} start=${new Date(
                    now.booking_start * 1000,
                ).toString()}`;
            });

            // Menu -> Cancel -> confirm. `startCancel` opens the details modal,
            // the overflow menu, and picks the item by its ICON, because the
            // labels are translated.
            await schedule.startCancel(booking_id);
            await schedule.acceptConfirm();

            await expect(async () => {
                expect(
                    await isLive(staffApi, 'desk', booking_id!, from, to),
                    'after confirming, the booking must be gone on the BACKEND, not ' +
                        'just off the screen',
                ).toBe(false);
            }).toPass({ timeout: 30_000 });

            // And the desk is free again — which is the thing a user actually
            // cares about after cancelling.
            const still_held = await isLive(staffApi, 'desk', booking_id, from, to);
            expect(still_held, 'the desk must not stay held by a cancelled booking').toBe(
                false,
            );
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, from, to);
        }
    });

    test('declining the confirmation leaves the booking alone', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        // Its own day, not another hour on test 1's day — see SCHEDULE_DAYS.
        const day = SCHEDULE_DAYS.cancel_declined;
        const slot = slotOn(day, 15);
        const { from, to } = dayWindow(day);
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'desk', desk.id, from, to);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title: uniqueTitle('E2E YB Keep'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new SchedulePage(staffPage);
            await schedule.open();
            await schedule.showBooking(booking_id, slot.date_ms, ['desk'], async () => {
                const now = await readBooking(staffApi, booking_id!);
                return `id ${now.id} deleted=${now.deleted}`;
            });

            await schedule.startCancel(booking_id);
            await schedule.dismissConfirm();

            // Give the app the chance to do the wrong thing before believing it
            // did the right one. Asserting immediately would pass against a
            // delete that is merely slow.
            await staffPage.waitForTimeout(3_000);
            expect(
                await isLive(staffApi, 'desk', booking_id, from, to),
                'declining the confirmation must NOT delete the booking',
            ).toBe(true);

            // It is also still on the page, which is the user-visible half.
            //
            // A reload puts the schedule back on TODAY with every filter on —
            // nothing about the view is persisted — so the day and the filter
            // have to be set again before looking for the card. Forgetting that
            // reads as "the booking was deleted after all", which is the
            // opposite of what happened.
            await staffPage.reload();
            await schedule.waitForLoaded();
            await schedule.showBooking(booking_id, slot.date_ms, ['desk'], async () => {
                const now = await readBooking(staffApi, booking_id!);
                return `id ${now.id} deleted=${now.deleted}`;
            });
            await expect(
                schedule.card(booking_id),
                'and it is still listed after a reload',
            ).toBeVisible({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, from, to);
        }
    });
});
