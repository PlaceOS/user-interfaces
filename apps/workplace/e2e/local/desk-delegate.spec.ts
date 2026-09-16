/**
 * DESK-14 — booking a desk on somebody else's behalf.
 *
 * The visitor equivalent (VIS-09) found a real defect: the host picker rendered
 * from one setting while the choice was only KEPT when a second one was also
 * set, so a booking silently came back owned by whoever filled the form. The
 * desk form has the same shape — a host field rendered from
 * `app.bookings.can_book_for_others` — and nothing has ever checked which user
 * the booking ends up against.
 *
 * It matters beyond bookkeeping: a desk booked "for" a colleague but stored
 * against the booker does not appear on the colleague's schedule, so they have
 * no seat as far as the app is concerned, and the person who booked it holds two.
 *
 * Both halves are asserted, because they are different fields:
 *   user_*      the person the desk is FOR
 *   booked_by_* the person who made the booking
 *
 * ## One setting, not two
 *
 * Unlike visitors, the desk form reads `can_book_for_others` only
 * (`desk-form-details.component.ts`). `can_book_for_anyone` is a visitor-form
 * key; setting it here would look thorough and do nothing.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { WORKERS, deskFor, staffEmail } from '../../../../e2e/support/env';
import {
    DESK_SLOTS,
    dayBoundsOn,
    hhmm,
    slotOn,
} from '../../../../e2e/support/desk/desk.env';
import { BOOK_FOR_OTHERS, useSettings } from '../../../../e2e/support/desk/desk.settings';
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';

test.describe('booking a desk for a colleague', () => {
    test('the chosen colleague is stored as the user, and you as the booker', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const desk = deskFor(mine);
        const colleague = staffEmail(theirs);
        const slot = slotOn(DESK_SLOTS.delegate.day, DESK_SLOTS.delegate.hour);
        const { from, to } = dayBoundsOn(DESK_SLOTS.delegate.day);
        const title = uniqueTitle('E2E Desk ForColleague');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        await useSettings(staffPage, BOOK_FOR_OTHERS);

        try {
            const me = await currentUser(staffApi);
            const form = new DeskForm(staffPage);
            await form.open();

            // The host field only exists with the setting on. Saying so here
            // turns a missing-selector timeout into a sentence about
            // configuration.
            await expect(
                form.userField,
                'the host field is missing — is `app.bookings.can_book_for_others` set?',
            ).toBeVisible({ timeout: 30_000 });

            await form.pickDate(slot.date_ms);

            await expect(async () => {
                await form.setChecked(form.requireLocker, false);
                await form.setChecked(form.allDay, false);
                await form.title.fill(title);
                await form.chooseUser(colleague);
                if ((await form.chosenDesks.count()) === 0) {
                    await form.chooseDesk(desk.name);
                }
                expect(await form.title.inputValue()).toBe(title);
            }).toPass({ timeout: 60_000 });

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

            const stored: any = await getBooking(staffApi, booking_id!);
            expect(
                `${stored.user_email}`.toLowerCase(),
                'the desk must be booked FOR the colleague. If this comes back as the ' +
                    'person who filled the form, the host choice was discarded — which ' +
                    'is exactly what the visitor form used to do (VIS-09)',
            ).toBe(colleague.toLowerCase());
            expect(
                `${stored.booked_by_email}`.toLowerCase(),
                'and BY the person who filled the form',
            ).toBe(me.email.toLowerCase());
            expect(
                `${stored.user_email}`.toLowerCase(),
                'the two must differ, or this proves nothing',
            ).not.toBe(me.email.toLowerCase());
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, from, to);
        }
    });
});
