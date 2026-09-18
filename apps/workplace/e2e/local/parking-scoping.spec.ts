/**
 * PARK-05 / PARK-06 — one person's parking booking is not another's business.
 *
 * The desk equivalent is `booking-scoping.spec.ts` and this mirrors it: a
 * `GET /bookings` is caller-scoped, and a deletion attempt by somebody else must
 * be REJECTED rather than merely hidden in the UI.
 *
 * ## This does not contradict `parking-clash.spec.ts`
 *
 * Worth saying plainly, because the two look opposed. A space's AVAILABILITY is
 * shared — that is why a second person is refused 409 when the window is taken.
 * What is private is the BOOKING: who booked it, what it is called, and the
 * plate number on it, which is personal data. Somebody else may discover that a
 * space is busy; they may not read the booking or cancel it.
 *
 * Both tests work entirely through the API, because that is where the boundary
 * is. A UI that merely does not display someone else's booking proves nothing
 * about whether the data is reachable.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import {
    STAFF_API,
    deleteBooking,
    getBooking,
    listBookings,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { APP_URL, BACKEND_URL, WORKERS, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import {
    PARKING_SLOTS,
    dayBoundsOn,
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import { createParkingBookingViaApi } from '../../../../e2e/support/parking/parking.api';

async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

test.describe('parking booking visibility between users', () => {
    test('another user cannot see or delete your parking booking', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const space = await spaceForWorker(mine);
        const slot = slotOn(PARKING_SLOTS.scoping.day, PARKING_SLOTS.scoping.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.scoping.day);
        const other = await apiAsOtherUser(theirs);
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Mine'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            // Not in their listing.
            const theirs_list = await listBookings(other, 'parking', from, to);
            expect(
                theirs_list.map((b) => b.id),
                `booking ${booking_id} belongs to another user and must not be in ` +
                    `their listing`,
            ).not.toContain(booking_id);

            // And they cannot delete it. Checked on the backend afterwards,
            // because a refusal that deletes anyway is the failure that matters.
            const attempt = await other.delete(`${STAFF_API}/bookings/${booking_id}`);
            expect(
                attempt.status(),
                `deleting somebody else's booking must be refused, got ` +
                    `${attempt.status()}: ${(await attempt.text()).slice(0, 200)}`,
            ).toBeGreaterThanOrEqual(400);
            expect(
                (await getBooking(staffApi, booking_id)).deleted,
                'and the booking must still be there afterwards',
            ).toBeFalsy();
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
            await other.dispose();
        }
    });

    test('control: you can see your own parking booking', async ({
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(
            PARKING_SLOTS.scoping_control.day,
            PARKING_SLOTS.scoping_control.hour,
        );
        const { from, to } = dayBoundsOn(PARKING_SLOTS.scoping_control.day);
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Own'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            expect(
                (await listBookings(staffApi, 'parking', from, to)).map((b) => b.id),
                'you must be able to see your own booking — without this, "nobody ' +
                    'sees anything" would pass as success',
            ).toContain(booking_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });
});
