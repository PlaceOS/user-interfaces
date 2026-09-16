/**
 * DESK-09 / DESK-10 — changing a desk booking that already exists.
 *
 * Nothing in the desk suite has ever changed a booking, and an edit is a
 * different code path in two ways that matter:
 *
 *  - it PATCHes rather than POSTs (`saveBooking` branches on the id), so an edit
 *    that lost the id silently creates a SECOND booking and holds two desks;
 *  - moving to another desk has to free the first one, or a desk stays held by a
 *    booking that no longer claims it.
 *
 * ## Where the edit starts, and why that is not this page
 *
 * A desk booking cannot be opened for editing from the desk form directly: the
 * schedule loads the form with the booking (`editBooking`) and then routes to
 * `/book/desk`. So these tests begin on the schedule, through
 * `DeskSchedulePage` — which inherits it rather than copying it.
 *
 * What is tested where:
 *   bookings-edit.spec.ts ... that Edit ROUTES here with the booking loaded.
 *   this file .............. that a change SAVES.
 *
 * ## The second desk
 *
 * `seed.ts` creates WORKERS + 1 desks, so there is always one desk no worker
 * owns; `altDesk()` returns it. Because it is shared, every worker books it on
 * its OWN day (`dayFor`) — otherwise two workers would clash on it and the
 * failure would read as a backend refusal.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    deleteBooking,
    getBooking,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { deskFor } from '../../../../e2e/support/env';
import {
    DESK_SLOTS,
    altDesk,
    dayBoundsOn,
    hhmm,
    hourFor,
    slotOn,
} from '../../../../e2e/support/desk/desk.env';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';
import { DeskSchedulePage } from '../../../../e2e/support/desk/desk-schedule.page';
import { createDeskBookingViaApi } from '../../../../e2e/support/desk/desk.api';

test.describe('editing a desk booking', () => {
    test('a new start time chosen on the form is the one stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const { day, hour, moved_to } = DESK_SLOTS.edit_time;
        const from_slot = slotOn(day, hour);
        const to_slot = slotOn(day, moved_to);
        const { from, to } = dayBoundsOn(day);
        const title = uniqueTitle('E2E Desk Edit Time');
        let booking_id: number | undefined;

        // The whole day, because the hour being moved INTO has to be free too —
        // otherwise the app refuses the edit for a perfectly good reason and the
        // test reads as a bug.
        await releaseAsset(staffApi, 'desk', desk.id, from, to);

        try {
            const booking = await createDeskBookingViaApi(staffApi, {
                desk,
                title,
                start: from_slot.start,
                end: from_slot.end,
            });
            booking_id = booking.id;

            const schedule = new DeskSchedulePage(staffPage);
            await schedule.open();
            await schedule.showDesks();
            await schedule.showDayOf(from_slot.date_ms);
            await schedule.startEdit(booking_id);

            const form = new DeskForm(staffPage);
            await expect(
                form.chosenDesks,
                'the edit form should open with the booked desk already on it',
            ).toHaveCount(1, { timeout: 30_000 });

            // Only the time changes. The fields reach the model asynchronously
            // and the confirm dialog snapshots the model when it opens, so set
            // and settle before confirming.
            await form.setStartTime(hhmm(to_slot.start));
            await staffPage.waitForTimeout(3_000);
            await form.confirmAndSend();

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(
                    hhmm(updated.booking_start),
                    `the booking should now start at ${hhmm(to_slot.start)}`,
                ).toBe(hhmm(to_slot.start));
            }).toPass({ timeout: 45_000 });

            const updated = await getBooking(staffApi, booking_id);
            expect(updated.asset_id, 'moving the time must not change the desk').toBe(
                desk.id,
            );
            expect(
                updated.deleted,
                'an edit must UPDATE the booking, not delete and replace it — a new row ' +
                    'would mean the id the user holds is dead',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, from, to);
        }
    });

    test('a booking moved to another desk is stored against that desk', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const other = altDesk();
        // The spare desk is shared between workers, so the HOUR is staggered by
        // worker index — the day cannot be, because the schedule's sidebar
        // calendar only reaches the displayed month.
        const { day, hour } = DESK_SLOTS.edit_desk;
        const slot = slotOn(day, hourFor(hour, testInfo.parallelIndex));
        const { from, to } = dayBoundsOn(day);
        const title = uniqueTitle('E2E Desk Edit Desk');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        await releaseAsset(staffApi, 'desk', other.id, from, to);

        try {
            const booking = await createDeskBookingViaApi(staffApi, {
                desk,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new DeskSchedulePage(staffPage);
            await schedule.open();
            await schedule.showDesks();
            await schedule.showDayOf(slot.date_ms);
            await schedule.startEdit(booking_id);

            const form = new DeskForm(staffPage);
            await expect(
                form.chosenDesks,
                'the edit form should open with the booked desk already on it',
            ).toHaveCount(1, { timeout: 30_000 });

            // The form holds one desk, so the old one comes off before the new
            // one goes on. Converged on the NAME rather than the count: the
            // count is 1 before and 1 after, so it cannot see this swap, and the
            // choice reaches the model asynchronously while the confirm dialog
            // snapshots the model when it opens.
            await expect(async () => {
                if (!(await form.chosenDeskNames()).includes(other.name)) {
                    await form.removeDesk();
                    await form.chooseDesk(other.name);
                }
                expect(await form.chosenDeskNames()).toEqual([other.name]);
            }).toPass({ timeout: 45_000 });
            await staffPage.waitForTimeout(3_000);
            await form.confirmAndSend();

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(
                    updated.asset_id,
                    `the booking should now be held against ${other.name}`,
                ).toBe(other.id);
            }).toPass({ timeout: 45_000 });

            const updated = await getBooking(staffApi, booking_id);
            expect(
                hhmm(updated.booking_start),
                'moving desk must not move the booking in time',
            ).toBe(hhmm(slot.start));
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, from, to);
            await releaseAsset(staffApi, 'desk', other.id, from, to);
        }
    });
});
