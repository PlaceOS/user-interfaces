/**
 * PARK-03 / PARK-04 — a parking space is exclusive for its window.
 *
 * The same reasoning as desks (REG-02) and rooms (ROOM-03): a double-booked
 * space is the failure a user notices fastest, and it is the BACKEND that has to
 * refuse it. The picker's own filtering only decides what is offered; it would
 * be no defence against a second person booking at the same moment, or against
 * any other client.
 *
 * Everything is created through the API, not the form. The subject is the rule,
 * and driving the form twice would add an unrelated way to fail — including
 * hitting the picker's own filtering, which hides busy spaces and would make
 * "the second booking was refused" indistinguishable from "the space was never
 * offered".
 *
 * Attempted as a SECOND user, deliberately: a check that only looked at the
 * caller's own bookings would pass a same-user test and still let two colleagues
 * take one space.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import {
    deleteBooking,
    getBooking,
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
import {
    createParkingBookingViaApi,
    tryParkingBooking,
} from '../../../../e2e/support/parking/parking.api';

async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

test.describe('parking double-booking', () => {
    test('a second person cannot take a space that is already booked', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const space = await spaceForWorker(mine);
        const slot = slotOn(PARKING_SLOTS.clash.day, PARKING_SLOTS.clash.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.clash.day);
        const other = await apiAsOtherUser(theirs);
        let booking_id: number | undefined;
        const other_ids: number[] = [];

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Clash'),
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;
            expect(
                (await getBooking(staffApi, booking_id)).deleted,
                'precondition: the space really is held before anyone else tries',
            ).toBeFalsy();

            // Exactly the same window.
            const same = await tryParkingBooking(other, {
                space,
                title: uniqueTitle('E2E Parking Same'),
                start: slot.start,
                end: slot.end,
            });
            if (same.id) other_ids.push(same.id);
            // 409 specifically, not "any error": a 5xx from an unhealthy backend
            // would satisfy `>= 400` while proving nothing about clash detection,
            // and booking POSTs have a known way of returning 500 under load
            // (REG-09) — exactly the failure this spec must not absorb.
            expect(
                same.status,
                `the same space and window must be refused with 409, got ` +
                    `${same.status}: ${same.body.slice(0, 200)}`,
            ).toBe(409);

            // A partial overlap: the case a naive check misses, because it starts
            // after the existing booking begins and ends after it ends.
            const overlap = await tryParkingBooking(other, {
                space,
                title: uniqueTitle('E2E Parking Overlap'),
                start: slot.start + 1800,
                end: slot.end + 1800,
            });
            if (overlap.id) other_ids.push(overlap.id);
            expect(
                overlap.status,
                `a partly overlapping booking must also be refused with 409, got ` +
                    `${overlap.status}: ${overlap.body.slice(0, 200)}`,
            ).toBe(409);

            // Control: a window that genuinely does not overlap is accepted.
            // Without this, a backend refusing everything would pass both checks
            // above and look like working clash detection.
            const clear = await tryParkingBooking(other, {
                space,
                title: uniqueTitle('E2E Parking Clear'),
                start: slot.end + 3600,
                end: slot.end + 7200,
            });
            if (clear.id) other_ids.push(clear.id);
            expect(
                clear.status,
                `a non-overlapping window must still be accepted, got ${clear.status}: ` +
                    `${clear.body.slice(0, 200)}`,
            ).toBe(201);
        } finally {
            // Their bookings must go BY THEM: `GET /bookings` is caller-scoped,
            // so this worker's sweep cannot see them and the space would stay
            // held by something invisible.
            for (const id of other_ids) await deleteBooking(other, id);
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
            await other.dispose();
        }
    });

    test('the space frees up once the booking is deleted', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const space = await spaceForWorker(mine);
        const slot = slotOn(PARKING_SLOTS.freed.day, PARKING_SLOTS.freed.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.freed.day);
        const other = await apiAsOtherUser(theirs);
        const other_ids: number[] = [];

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        try {
            const booking = await createParkingBookingViaApi(staffApi, {
                space,
                title: uniqueTitle('E2E Parking Freed'),
                start: slot.start,
                end: slot.end,
            });

            const while_held = await tryParkingBooking(other, {
                space,
                title: uniqueTitle('E2E Parking Held'),
                start: slot.start,
                end: slot.end,
            });
            if (while_held.id) other_ids.push(while_held.id);
            expect(
                while_held.status,
                'precondition: the space is refused while it is held',
            ).toBe(409);

            await deleteBooking(staffApi, booking.id);

            const after = await tryParkingBooking(other, {
                space,
                title: uniqueTitle('E2E Parking After'),
                start: slot.start,
                end: slot.end,
            });
            if (after.id) other_ids.push(after.id);
            expect(
                after.status,
                `once the booking is deleted the space must be bookable again, got ` +
                    `${after.status}: ${after.body.slice(0, 200)}. A space that stays ` +
                    `held after a cancellation is invisible to everyone — nobody can ` +
                    `see what is holding it`,
            ).toBe(201);
        } finally {
            for (const id of other_ids) await deleteBooking(other, id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
            await other.dispose();
        }
    });
});
