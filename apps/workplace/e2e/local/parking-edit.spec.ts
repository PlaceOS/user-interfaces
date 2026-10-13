/**
 * PARK-11 — changing a parking booking that already exists.
 *
 * An edit is a different code path from a create: it PATCHes rather than POSTs
 * (`saveBooking` branches on the id), so an edit that lost the id would create a
 * SECOND booking and hold two spaces. Moving to another space also has to free
 * the first one.
 *
 * The edit starts on the SCHEDULE, because a parking booking cannot be opened
 * for editing from the form: `schedule.component.ts::editBooking` loads the form
 * and routes to `/book/parking`.
 *
 * ## The spare space
 *
 * `parking.seed.ts` creates one space per worker plus one spare, and test 2
 * moves the booking onto the spare. Because it is shared between workers, the
 * HOUR is staggered by worker index — the day cannot be, since the schedule's
 * sidebar calendar only reaches the displayed month.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    deleteBooking,
    getBooking,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';
import {
    PARKING_SLOTS,
    dayBoundsOn,
    hhmm,
    hourFor,
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import { altSpace, spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import { createParkingBookingViaApi } from '../../../../e2e/support/parking/parking.api';
import {
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';
import { ParkingSchedulePage } from '../../../../e2e/support/parking/parking-schedule.page';

test.describe('editing a parking booking', () => {
    test('a new start time chosen on the form is the one stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const { day, hour, moved_to } = PARKING_SLOTS.edit;
        const from_slot = slotOn(day, hour);
        const to_slot = slotOn(day, moved_to);
        const { from, to } = dayBoundsOn(day);
        let booking_id: number | undefined;

        // The whole day, because the hour being moved INTO has to be free too.
        await releaseAsset(staffApi, 'parking', space.id, from, to);
        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Edit Time'),
                start: from_slot.start,
                end: from_slot.end,
            });
            booking_id = booking.id;

            const schedule = new ParkingSchedulePage(staffPage);
            await schedule.open();
            await schedule.showParking();
            await schedule.showDayOf(from_slot.date_ms);
            await schedule.startEdit(booking_id);

            const form = new ParkingForm(staffPage);
            await expect(
                form.chosenSpaces,
                'the edit form should open with the booked space already on it',
            ).toHaveCount(1, { timeout: 30_000 });

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
            expect(updated.asset_id, 'moving the time must not change the space').toBe(
                space.id,
            );
            expect(
                updated.deleted,
                'an edit must UPDATE the booking, not delete and replace it',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });

    test('a booking moved to another space is stored against that space', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const other = await altSpace();
        const day = PARKING_SLOTS.edit.day;
        // The spare space is shared, so the hour is staggered per worker.
        const slot = slotOn(day, hourFor(8, testInfo.parallelIndex));
        const { from, to } = dayBoundsOn(day);
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, slot.start - 60, slot.end + 60);
        await releaseAsset(staffApi, 'parking', other.id, slot.start - 60, slot.end + 60);
        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Edit Space'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new ParkingSchedulePage(staffPage);
            await schedule.open();
            await schedule.showParking();
            await schedule.showDayOf(slot.date_ms);
            await schedule.startEdit(booking_id);

            const form = new ParkingForm(staffPage);
            await expect(
                form.chosenSpaces,
                'the edit form should open with the booked space already on it',
            ).toHaveCount(1, { timeout: 30_000 });

            // Converged on the NAME, not the count: the count is 1 before and 1
            // after, so it cannot see this swap, and the choice reaches the model
            // asynchronously while the confirm sheet snapshots it when it opens.
            await expect(async () => {
                if (!(await form.chosenSpaceNames()).includes(other.name)) {
                    await form.chooseSpace(other.name);
                }
                expect(await form.chosenSpaceNames()).toContain(other.name);
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
                'moving space must not move the booking in time',
            ).toBe(hhmm(slot.start));
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, slot.start - 60, slot.end + 60);
            await releaseAsset(staffApi, 'parking', other.id, slot.start - 60, slot.end + 60);
        }
    });
});
