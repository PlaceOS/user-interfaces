/**
 * PARK-01 / PARK-02 — book a parking space through the full UI, as a NON-ADMIN.
 *
 * Parking is a whole booking type with no coverage at all until now, and it is
 * the one that needs the most setting up: a space is an ASSET of a
 * `_PARKING_SPACES_` type, on a level zone tagged `parking`, and the local stack
 * seeds none of that. `parking.seed.ts` creates it and explains the shape.
 *
 * Deliberately the same two tests the desk and room suites open with — the happy
 * path reaching the backend intact, and teardown really tearing down — so the
 * three are comparable at a glance.
 *
 * ## What makes parking different from a desk
 *
 *  - the flow has THREE screens (form, confirm, success) like meetings, not two
 *    like desks, and nothing is sent until the second;
 *  - the form has a PLATE NUMBER field, which no other booking type has;
 *  - spaces come from the parking asset API rather than from zone metadata.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    deleteBooking,
    getBooking,
    listBookings,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';
import {
    PARKING_SLOTS,
    dayBoundsOn,
    hhmm,
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';
import {
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';
import { createParkingBookingViaApi } from '../../../../e2e/support/parking/parking.api';

test.describe('parking booking', () => {
    test('a non-admin books a parking space in the UI and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.booking.day, PARKING_SLOTS.booking.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.booking.day);
        const title = uniqueTitle('E2E Parking');
        const plate = `E2E ${testInfo.parallelIndex}${Date.now() % 1000}`;
        let booking_id: number | undefined;

        // Sweep first, not just after: a run that died between booking and
        // cleanup leaves the space held, and every later run then fails with
        // something that looks nothing like the cause.
        await releaseAsset(staffApi, 'parking', space.id, from, to);
        // Without this the form cannot be submitted at all on this stack — see
        // PARK-B1 in `parking.settings.ts`.
        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            const form = new ParkingForm(staffPage);
            await form.open();
            await form.pickDate(slot.date_ms);

            // Converge on the form state: these forms are rebuilt when async
            // init completes and restore their defaults (REG-10's family).
            await expect(async () => {
                await form.setChecked(form.allDay, false);
                await form.title.fill(title);
                if (await form.plate.count()) await form.plate.fill(plate);
                if ((await form.chosenSpaces.count()) === 0) {
                    await form.chooseSpace(space.name);
                }
                expect(await form.title.inputValue()).toBe(title);
                expect(await form.chosenSpaces.count()).toBe(1);
            }).toPass({ timeout: 60_000 });

            // Times last, then settle: the fields reach the model
            // asynchronously and the confirm screen snapshots it when it opens.
            await form.setStartTime(hhmm(slot.start));
            await staffPage.waitForTimeout(3_000);

            const [response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) =>
                        r.url().includes('/api/staff/v1/bookings') &&
                        r.request().method() === 'POST',
                    { timeout: 30_000 },
                ),
                form.confirmAndSend(),
            ]);
            const body = await response.text();
            expect(
                response.status(),
                `the parking booking POST failed: ${body}`,
            ).toBeLessThan(300);
            booking_id = JSON.parse(body).id;

            const stored: any = await getBooking(staffApi, booking_id!);
            expect(
                stored.booking_type,
                'the booking must be stored as a parking booking',
            ).toBe('parking');
            expect(stored.asset_id, 'against the space that was chosen').toBe(space.id);
            expect(
                hhmm(stored.booking_start),
                'at the time that was chosen',
            ).toBe(hhmm(slot.start));
            expect(
                stored.zones?.length ?? 0,
                'and carrying its zones — anything scoping bookings by zone cannot see ' +
                    'a booking that has none (the room form gets this wrong, ROOM-B2)',
            ).toBeGreaterThan(0);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });

    test('a deleted parking booking leaves the listing', async ({
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.cleanup.day, PARKING_SLOTS.cleanup.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.cleanup.day);
        const title = uniqueTitle('E2E Parking Cleanup');

        await releaseAsset(staffApi, 'parking', space.id, from, to);

        const booking = await createParkingBookingViaApi(staffApi, {
            space,
            title,
            start: slot.start,
            end: slot.end,
        });
        expect(
            (await listBookings(staffApi, 'parking', from, to)).map((b) => b.id),
            'precondition: the booking is in the listing before it is deleted',
        ).toContain(booking.id);

        await deleteBooking(staffApi, booking.id);
        expect(
            (await listBookings(staffApi, 'parking', from, to)).map((b) => b.id),
            'a deleted booking must not come back in the listing — otherwise every ' +
                'spec teardown silently leaks state into the next run, and a space is ' +
                'exclusive, so a leak holds it for everyone',
        ).not.toContain(booking.id);
    });
});
