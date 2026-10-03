/**
 * HOME-09 — the quick-book tile with confirmation.
 *
 * ## It does not open the form
 *
 * `landing-quick-book.component.ts::book()` picks the first available resource,
 * then `confirmPost()` opens the shared confirmation modal. Accepting creates
 * the booking and navigates to `/book/<type>/success`.
 *
 * So this asserts on what reached the BACKEND, not on the success screen.
 *
 * ## Why this test cleans up immediately, and its one caveat
 *
 * The tile books "the first available desk for this building", which is whatever
 * the app finds — possibly a desk another worker owns. It cannot be pointed at a
 * particular desk, so the booking is deleted as soon as it has been asserted.
 * Worth knowing if this ever flakes next to another desk spec: a brief 409 in a
 * neighbouring test is this test holding a desk for a second or two.
 *
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { STAFF_API, deleteBooking } from '../../../../e2e/support/api';
import { LandingPage } from '../../../../e2e/support/home/landing.page';
import {
    SHOW_QUICK_BOOK,
    useSettings,
} from '../../../../e2e/support/home/home.settings';

const DAY = 86_400;

test.describe('home page — quick book', () => {
    test.fixme('the desk tile books a desk after confirmation, and the backend stores it', async ({
        staffPage,
        staffApi,
    }) => {
        // The panel has no default: without this setting the tiles are not
        // rendered at all, and the failure reads as a missing selector.
        await useSettings(staffPage, SHOW_QUICK_BOOK);

        const home = new LandingPage(staffPage);
        await home.open();

        const tile = home.quickBookTile('desk');
        const present = await tile
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        test.skip(
            !present,
            'no desk quick-book tile even with `app.show_quick_book` on — the panel is ' +
                'also gated on the `desks` feature being enabled for the org',
        );

        let booking_id: number | undefined;
        try {
            await tile.click();
            const confirmation = staffPage.locator('confirm-modal');
            await expect(confirmation).toBeVisible();
            const accept = confirmation.locator('button[name="accept"]');
            await expect(accept).toBeVisible();

            // The booking POST is the assertion. The success screen only tells
            // us the app thinks it worked.
            const sent = staffPage
                .waitForResponse(
                    (r) =>
                        r.url().includes(`${STAFF_API}/bookings`) &&
                        r.request().method() === 'POST',
                    { timeout: 30_000 },
                )
                .catch(() => null);
            await accept.click();
            const response = await sent;
            if (!response) {
                // The flow refuses locally when it can find no free resource,
                // and says so in a toast: "No desk available for the current
                // building". Reading it turns a bare timeout into the reason.
                const message = await staffPage
                    .locator('.cdk-overlay-container')
                    .innerText()
                    .catch(() => '');
                throw new Error(
                    `the confirmation was accepted and no booking was sent. On screen: ` +
                        `"${message.replace(/\s+/g, ' ').trim().slice(0, 300)}". The tile ` +
                        `books the first AVAILABLE desk, so every desk being held — by ` +
                        `another spec, or by a leftover all-day booking — leaves it ` +
                        `nothing to book.`,
                );
            }
            const body = await response.text();
            expect(
                response.status(),
                `quick-book booking failed: ${body.slice(0, 300)}`,
            ).toBeLessThan(300);

            const created = JSON.parse(body);
            booking_id = created.id;
            expect(
                created.booking_type,
                'the desk tile must book a DESK, whatever resource it picked',
            ).toBe('desk');
            expect(
                created.asset_id,
                'and it must name the desk it booked',
            ).toBeTruthy();
            expect(
                Number(created.booking_start),
                'the booking should be for now, not for some default in the past — a ' +
                    'booking that has already started cannot be checked into',
            ).toBeGreaterThan(Math.floor(Date.now() / 1000) - DAY);

            await expect(
                staffPage,
                'and the page should land on the success screen',
            ).toHaveURL(/#\/book\/desk\/success/, { timeout: 30_000 });
        } finally {
            // Immediately, whatever happened: this booking may be holding a desk
            // another worker's spec is about to use.
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
