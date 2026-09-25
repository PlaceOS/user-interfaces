/**
 * VIS-16 / VIS-17 — cancelling an invite FROM THE APP.
 *
 * Every other spec here tears its invite down through the API, which is right
 * for a teardown and useless as coverage: it means the Cancel button a real user
 * presses, and the confirmation box in front of it, were never once exercised.
 * A broken confirm dialog would have gone unnoticed by the whole suite.
 *
 * The pair is deliberate. Cancelling and NOT cancelling are equally important:
 * a dialog whose decline button also deletes is a worse bug than one that fails
 * to delete, and only the second test can catch it.
 *
 * Both read the backend afterwards. The card leaving the screen proves nothing
 * on its own — the app removes it optimistically.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { listBookings, deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor } from '../../../../e2e/support/visitor/visitor.api';
import {
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { inviteVisitorViaUI } from '../../../../e2e/support/visitor/visitor.flows';
import { YourBookingsPage } from '../../../../e2e/support/visitor/your-bookings.page';
import type { APIRequestContext } from '@playwright/test';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

/** Is this booking still live (present and not soft-deleted) on the backend? */
async function isLive(api: APIRequestContext, id: number): Promise<boolean> {
    const live = await listBookings(api, 'visitor', window_from(), window_to());
    return live.some((b) => Number(b.id) === id && !b.deleted);
}

test.describe('cancelling a visitor invite from the app', () => {
    test('cancelling from the booking menu removes it for real', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.cancel.fromApp);
        const reason = uniqueTitle('E2E Visit Cancel');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;

            const page = new YourBookingsPage(staffPage);
            await page.open();
            await page.showVisitors();
            await page.showDayOf(created.booking_start * 1000);
            expect(
                await isLive(staffApi, booking_id),
                'precondition: the invite is live before we cancel it',
            ).toBe(true);

            await page.startCancel(booking_id);
            await page.acceptConfirm();

            // The backend is the judge. The card disappearing is the app being
            // optimistic, and it does that whether or not the call succeeded.
            await expect(async () => {
                expect(
                    await isLive(staffApi, booking_id!),
                    'the cancelled invite must be gone from the backend, not just the screen',
                ).toBe(false);
            }).toPass({ timeout: 30_000 });

            await expect(
                page.card(booking_id),
                'and its card must leave the schedule',
            ).toBeHidden({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id).catch(() => null);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('declining the confirmation leaves the invite alone', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.cancel.dismissed);
        const reason = uniqueTitle('E2E Visit Keep');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;

            const page = new YourBookingsPage(staffPage);
            await page.open();
            await page.showVisitors();
            await page.showDayOf(created.booking_start * 1000);

            await page.startCancel(booking_id);
            await page.dismissConfirm();

            // Wait before asserting: "still there" a millisecond after the click
            // would pass even if a delete were already on its way.
            await staffPage.waitForTimeout(5_000);
            expect(
                await isLive(staffApi, booking_id),
                'walking away from the confirmation must not cancel anything',
            ).toBe(true);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id).catch(() => null);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
