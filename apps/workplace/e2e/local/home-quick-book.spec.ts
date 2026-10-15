/**
 * HOME-09 — the "auto-assign desk" quick action.
 *
 * ## It does not open the form
 *
 * The action opens `auto-assigned-desk-modal`, which finds a free desk for
 * today and shows it. The confirm control of the modal creates the booking
 * and the page goes to `/book/desk/success`. On the page before this one the
 * same story was a quick-book tile and a confirmation dialog.
 *
 * So this asserts on what reached the BACKEND, not on the success screen.
 *
 * ## Why this test cleans up immediately, and its one caveat
 *
 * The action books whatever free desk the app finds — possibly a desk another
 * worker owns — for the whole of today. It cannot be pointed at a particular
 * desk, so the booking is deleted as soon as it has been asserted. Worth
 * knowing if this ever flakes next to another desk spec: a brief 409 in a
 * neighbouring test is this test holding a desk for a second or two.
 *
 * The same race runs the other way. Another worker can take the offered desk
 * between the offer and the confirm, and the backend then answers 409. That
 * refusal is correct, so the test asks for another desk, up to three times.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { STAFF_API, deleteBooking } from '../../../../e2e/support/api';
import { LandingNewPage } from '../../../../e2e/support/home/landing-new.page';
import { SHOW_QUICK_BOOK, useSettings } from '../../../../e2e/support/home/home.settings';

const DAY = 86_400;

/** How many desks the test asks for before it gives up. See the header. */
const MAX_ATTEMPTS = 3;

test.describe('home page — quick book', () => {
    test('auto-assign books a desk after confirmation, and the backend stores it', async ({
        staffPage,
        staffApi,
    }) => {
        await useSettings(staffPage, SHOW_QUICK_BOOK);
        const home = new LandingNewPage(staffPage);
        await home.open();
        await expect(
            home.autoAssignDesk,
            'the quick action is shown when the `desks` feature is enabled for the org',
        ).toBeVisible({ timeout: 20_000 });

        let booking_id: number | undefined;
        try {
            let created: { id: number; booking_type: string; asset_id: string; booking_start: number } | undefined;
            let last = '';
            for (let attempt = 1; attempt <= MAX_ATTEMPTS && !created; attempt++) {
                await home.autoAssignDesk.click();
                // The confirm control is disabled while the modal looks for a desk.
                await expect(
                    home.autoAssignConfirm,
                    'the modal found no desk to offer. It offers a FREE desk, so every ' +
                        'desk being held — by another spec, or by a leftover all-day ' +
                        'booking — leaves it nothing to book',
                ).toBeEnabled({ timeout: 30_000 });

                const [response] = await Promise.all([
                    staffPage.waitForResponse(
                        (r) =>
                            r.url().includes(`${STAFF_API}/bookings`) &&
                            r.request().method() === 'POST',
                        { timeout: 30_000 },
                    ),
                    home.autoAssignConfirm.click(),
                ]);
                const body = await response.text();
                if (response.status() === 409) {
                    last = body.slice(0, 300);
                    console.warn(`  ! the offered desk was taken (attempt ${attempt}/${MAX_ATTEMPTS})`);
                    if (await home.autoAssignModal.isVisible()) await home.autoAssignCancel.click();
                    await expect(home.autoAssignModal).toHaveCount(0);
                    continue;
                }
                expect(
                    response.status(),
                    `the auto-assign booking failed: ${body.slice(0, 300)}`,
                ).toBeLessThan(300);
                created = JSON.parse(body);
            }
            if (!created) {
                throw new Error(
                    `every desk that auto-assign offered was taken before the confirm, ` +
                        `${MAX_ATTEMPTS} times. Last refusal: ${last}`,
                );
            }
            booking_id = created.id;

            expect(
                created.booking_type,
                'the action must book a DESK, whatever resource it picked',
            ).toBe('desk');
            expect(created.asset_id, 'and it must name the desk it booked').toBeTruthy();
            expect(
                Number(created.booking_start),
                'the booking should be for today, not for some default in the past',
            ).toBeGreaterThan(Math.floor(Date.now() / 1000) - DAY);

            await expect(
                staffPage,
                'and the page should land on the success screen',
            ).toHaveURL(/#\/book\/desk\/success/, { timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
