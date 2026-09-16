/**
 * DESK-13 — an all-day desk booking is stored as all-day.
 *
 * The dev's desk specs tick All Day to make their booking stable, and then never
 * check what it produced. So the flag is exercised constantly and asserted
 * nowhere: a form that quietly stored a long timed booking instead of an all-day
 * one would pass every desk test in the suite.
 *
 * It matters because the two are not interchangeable. An all-day booking holds
 * the desk for the building's whole day whatever the user's timezone, while a
 * timed one holds a window — so a "9 to 5" stand-in frees the desk at 5 and
 * leaves it bookable by somebody else for the evening.
 *
 * ## The setting
 *
 * The checkbox only renders when all-day bookings are allowed
 * (`desk-form-details.component.ts`: `allow_all_day`, which also requires
 * `allow_time_changes`). It is `app.bookings.allow_all_day` — the BOOKING
 * family, not the event family the meeting form reads.
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
    slotOn,
} from '../../../../e2e/support/desk/desk.env';
import { ALLOW_ALL_DAY, useSettings } from '../../../../e2e/support/desk/desk.settings';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';

const HOUR = 3600;

test.describe('desk booking settings', () => {
    test('an all-day booking is stored as all-day, not as a long timed booking', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const slot = slotOn(DESK_SLOTS.settings.day, DESK_SLOTS.settings.hour);
        const { from, to } = dayBoundsOn(DESK_SLOTS.settings.day);
        const title = uniqueTitle('E2E Desk AllDay');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        await useSettings(staffPage, ALLOW_ALL_DAY);

        try {
            const form = new DeskForm(staffPage);
            await form.open();
            await form.pickDate(slot.date_ms);

            await expect(async () => {
                await form.setChecked(form.requireLocker, false);
                await form.setChecked(form.allDay, true);
                await form.title.fill(title);
                if ((await form.chosenDesks.count()) === 0) {
                    await form.chooseDesk(desk.name);
                }
                expect(await form.title.inputValue()).toBe(title);
                expect(
                    await form.allDay.isChecked(),
                    'the All Day checkbox should be on — is `app.bookings.allow_all_day` set?',
                ).toBe(true);
            }).toPass({ timeout: 45_000 });

            await staffPage.waitForTimeout(2_000);
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

            const stored: any = await getBooking(staffApi, booking_id!);
            expect(
                stored.all_day,
                'the booking must be stored with the all-day flag set, not merely as a ' +
                    'booking that happens to be long — a timed stand-in frees the desk ' +
                    'at its end time',
            ).toBeTruthy();
            expect(
                new Date(stored.booking_start * 1000).toDateString(),
                'and on the day that was picked',
            ).toBe(new Date(slot.date_ms).toDateString());
            // Long, as well as flagged: whatever the backend does with the flag,
            // the desk has to be held for the working day rather than an hour.
            expect(
                (stored.booking_end - stored.booking_start) / HOUR,
                'an all-day booking should span most of the day',
            ).toBeGreaterThanOrEqual(8);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, from, to);
        }
    });
});
