/**
 * DESK-11 / DESK-12 — when a desk is booked for, and the limits on what may be
 * chosen.
 *
 * The dev's desk specs book ALL DAY, deliberately: an all-day booking cannot
 * drift past the next five-minute boundary mid-run. The side effect is that
 * nothing in this suite has ever picked a desk booking's start time or its
 * length — so a form that ignored both pickers and always booked all day would
 * have passed every desk test ever written here.
 *
 * Test 1 asks the plain question: pick a day, a start time and a length, and are
 * THOSE the times stored?
 *
 * Test 2 covers the two settings that fence the pickers in — a maximum length
 * and the hours a booking may start. Both are unset by default, so nothing else
 * sees them, and both fail quietly in the same way: an out-of-range option is
 * simply ABSENT rather than refused. That is why this asserts on the options
 * OFFERED; "a nine-hour booking is rejected" would be testing something the form
 * never lets you attempt.
 *
 * Settings are `app.bookings.*` for desks, not `app.events.*` — the meeting form
 * reads the other family. Getting that wrong changes nothing and looks right.
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
    dayBoundsOn,
    hhmm,
    slotOn,
} from '../../../../e2e/support/desk/desk.env';
import { LIMITED_HOURS, useSettings } from '../../../../e2e/support/desk/desk.settings';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';

const MINUTES = 60;

test.describe('desk booking times', () => {
    test('the day, start time and length chosen on the form are what get stored', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const slot = slotOn(DESK_SLOTS.times.day, DESK_SLOTS.times.hour);
        const { from, to } = dayBoundsOn(DESK_SLOTS.times.day);
        const title = uniqueTitle('E2E Desk Times');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, from, to);

        try {
            const form = new DeskForm(staffPage);
            await form.open();

            // The date goes first and ONCE. Changing the day resets the
            // duration asynchronously, so a date click repeated inside the
            // converging block below lands after the length is picked and
            // quietly reverts it — the same trap the meeting form has.
            await form.pickDate(slot.date_ms);

            // Converge on the rest: the form is rebuilt when async init
            // finishes and restores its defaults (REG-10).
            await expect(async () => {
                await form.setChecked(form.requireLocker, false);
                await form.setChecked(form.allDay, false);
                await form.title.fill(title);
                if ((await form.chosenDesks.count()) === 0) {
                    await form.chooseDesk(desk.name);
                }
                expect(await form.title.inputValue()).toBe(title);
                expect(await form.allDay.isChecked()).toBe(false);
            }).toPass({ timeout: 45_000 });

            // Times LAST, after the rebuild can no longer undo them, and with a
            // settle before confirming: the fields reach the model
            // asynchronously and the confirm dialog snapshots the model when it
            // opens.
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
            expect(
                response.status(),
                `the booking POST failed: ${await response.text()}`,
            ).toBeLessThan(300);
            booking_id = (await response.json()).id;

            const stored = await getBooking(staffApi, booking_id!);
            expect(
                new Date(stored.booking_start * 1000).toDateString(),
                'the booking must land on the day that was picked',
            ).toBe(new Date(slot.date_ms).toDateString());
            expect(
                hhmm(stored.booking_start),
                'and start at the time that was picked',
            ).toBe(hhmm(slot.start));
            expect(
                (stored.booking_end - stored.booking_start) / MINUTES,
                'and last as long as was picked',
            ).toBe(60);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, from, to);
        }
    });

    test('a maximum length and bookable hours limit what can be chosen', async ({
        staffPage,
    }) => {
        const max = LIMITED_HOURS['app.bookings.max_duration'];
        const hours = LIMITED_HOURS['app.bookings.bookable_hours'];

        await useSettings(staffPage, LIMITED_HOURS);

        const form = new DeskForm(staffPage);
        await form.open();
        await expect(async () => {
            await form.setChecked(form.requireLocker, false);
            await form.setChecked(form.allDay, false);
            expect(await form.allDay.isChecked()).toBe(false);
        }).toPass({ timeout: 45_000 });

        // Lengths: nothing beyond the cap may be on offer. Without the setting
        // the form offers up to eight hours, which is what makes this
        // meaningful.
        const lengths = await form.durationOptions();
        expect(lengths.length, 'the form should offer some lengths').toBeGreaterThan(0);
        expect(
            Math.max(...lengths),
            `no length beyond the ${max} minute cap may be offered, got ` +
                `${JSON.stringify(lengths)}`,
        ).toBeLessThanOrEqual(max);

        // Start times: nothing outside the bookable hours. Compared as minutes
        // past midnight rather than as strings, so 9:00 and 09:00 cannot differ.
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
