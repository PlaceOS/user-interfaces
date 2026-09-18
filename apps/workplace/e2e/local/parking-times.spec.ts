/**
 * PARK-07 / PARK-08 — when a space is booked for, and the limits on what may be
 * chosen.
 *
 * Test 1 asks the plain question: pick a day, a start time and a length, and are
 * THOSE the times stored? Every other parking spec takes whatever the form
 * offers, so a form that ignored its own pickers would pass the lot.
 *
 * Test 2 covers the two settings that fence the pickers in. Both are unset by
 * default and both fail quietly in the same way — an out-of-range option is
 * simply ABSENT rather than refused — which is why this asserts on the options
 * OFFERED rather than trying to book something out of range.
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
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import {
    LIMITED_HOURS,
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';

const MINUTES = 60;

test.describe('parking booking times', () => {
    test('the day, start time and length chosen on the form are what get stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.times.day, PARKING_SLOTS.times.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.times.day);
        const title = uniqueTitle('E2E Parking Times');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);
        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            const form = new ParkingForm(staffPage);
            await form.open();

            // The date goes first and ONCE: changing the day resets the duration
            // asynchronously, so a date click repeated inside the converging
            // block would land after the length is picked and revert it.
            await form.pickDate(slot.date_ms);

            await expect(async () => {
                await form.setChecked(form.allDay, false);
                await form.title.fill(title);
                if ((await form.chosenSpaces.count()) === 0) {
                    await form.chooseSpace(space.name);
                }
                expect(await form.title.inputValue()).toBe(title);
                expect(await form.chosenSpaces.count()).toBe(1);
            }).toPass({ timeout: 60_000 });

            // Times LAST, then settle: they reach the model asynchronously and
            // the confirm sheet snapshots the model when it opens.
            await form.setDuration(60);
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
            expect(response.status(), `the booking POST failed: ${body}`).toBeLessThan(300);
            booking_id = JSON.parse(body).id;

            const stored = await getBooking(staffApi, booking_id!);
            expect(
                new Date(stored.booking_start * 1000).toDateString(),
                'the booking must land on the day that was picked',
            ).toBe(new Date(slot.date_ms).toDateString());
            expect(hhmm(stored.booking_start), 'and start when it was told to').toBe(
                hhmm(slot.start),
            );
            expect(
                (stored.booking_end - stored.booking_start) / MINUTES,
                'and last as long as was picked — a space held for the wrong window is ' +
                    'either unavailable to somebody who could have used it, or free ' +
                    'when the driver is still parked',
            ).toBe(60);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });

    test('a maximum length and bookable hours limit what can be chosen', async ({
        staffPage,
    }) => {
        const max = LIMITED_HOURS['app.bookings.max_duration'];
        const hours = LIMITED_HOURS['app.bookings.bookable_hours'];

        await useSettings(staffPage, { ...PARKING_BASE_SETTINGS, ...LIMITED_HOURS });

        const form = new ParkingForm(staffPage);
        await form.open();
        await expect(async () => {
            await form.setChecked(form.allDay, false);
            expect(await form.allDay.isChecked()).toBe(false);
        }).toPass({ timeout: 45_000 });

        const lengths = await form.durationOptions();
        expect(lengths.length, 'the form should offer some lengths').toBeGreaterThan(0);
        expect(
            Math.max(...lengths),
            `no length beyond the ${max} minute cap may be offered, got ` +
                `${JSON.stringify(lengths)}`,
        ).toBeLessThanOrEqual(max);

        const times = await form.startTimeOptions();
        expect(times.length, 'the form should offer some start times').toBeGreaterThan(0);
        const minutes = times.map((t) => {
            const [h, m] = t.split(':').map(Number);
            return h * 60 + m;
        });
        expect(
            Math.min(...minutes),
            `no start time before ${hours.start}:00 may be offered, got ` +
                `${JSON.stringify(times)}`,
        ).toBeGreaterThanOrEqual(hours.start * 60);
        expect(
            Math.max(...minutes),
            `no start time after ${hours.end}:00 may be offered, got ` +
                `${JSON.stringify(times)}`,
        ).toBeLessThanOrEqual(hours.end * 60);
    });
});
