/**
 * PARK-09 / PARK-10 — cancelling a parking booking from the app.
 *
 * Every other parking spec tears its booking down through the API, which is
 * right for a teardown and useless as coverage: the Cancel item in the booking
 * menu and the confirmation in front of it are never otherwise pressed. The same
 * gap in the room specs was worth a bug that still holds a room after the user
 * believes they cancelled (ROOM-B4), and a held parking space has the same
 * consequence for whoever is circling the car park.
 *
 * The pair is deliberate: a dialog whose DECLINE button also deletes is worse
 * than one that fails to delete, and only the second test can catch it.
 *
 * Both read the backend afterwards — the card leaves the screen either way,
 * because the page removes it optimistically.
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
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import { createParkingBookingViaApi } from '../../../../e2e/support/parking/parking.api';
import { ParkingSchedulePage } from '../../../../e2e/support/parking/parking-schedule.page';

test.describe('cancelling a parking booking from the app', () => {
    test('cancelling from the booking menu removes it for real', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.cancel.day, PARKING_SLOTS.cancel.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.cancel.day);
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Cancel'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new ParkingSchedulePage(staffPage);
            await schedule.open();
            await schedule.showParking();
            await schedule.showDayOf(slot.date_ms);
            await schedule.startCancel(booking_id);
            await schedule.acceptConfirm();

            await expect(async () => {
                const after = await getBooking(staffApi, booking_id!);
                expect(
                    after.deleted,
                    'after confirming, the booking must be gone on the BACKEND, not ' +
                        'just off the screen — otherwise the space stays held by ' +
                        'something the user believes they cancelled',
                ).toBeTruthy();
            }).toPass({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });

    test('declining the confirmation leaves the booking alone', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(
            PARKING_SLOTS.cancel_declined.day,
            PARKING_SLOTS.cancel_declined.hour,
        );
        const { from, to } = dayBoundsOn(PARKING_SLOTS.cancel_declined.day);
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Keep'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new ParkingSchedulePage(staffPage);
            await schedule.open();
            await schedule.showParking();
            await schedule.showDayOf(slot.date_ms);
            await schedule.startCancel(booking_id);
            await schedule.dismissConfirm();

            // Give the app a chance to do the wrong thing before believing it did
            // the right one: asserting immediately would pass against a delete
            // that is merely slow.
            await staffPage.waitForTimeout(3_000);
            expect(
                (await getBooking(staffApi, booking_id)).deleted,
                'declining the confirmation must NOT delete the booking',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });
});
