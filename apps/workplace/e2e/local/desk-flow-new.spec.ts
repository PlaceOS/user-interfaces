/**
 * NEW-DESK-01, NEW-DESK-02 — the `desk-flow-new` booking flow, as a NON-ADMIN,
 * against a real local backend.
 *
 * `desk-booking.spec.ts` covers the same story for the flow this one replaced.
 * That flow is no longer routed, so these are the specs that hold the story
 * for `/book/desk`.
 *
 * Isolation is the same as the other desk specs: each worker books its OWN
 * desk and SWEEPS it before booking, because an all-day booking that leaked
 * from a crashed run holds the desk for the remainder of the day.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import {
    deleteBooking,
    getBooking,
    listBookings,
    releaseAsset,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { DeskFlow } from '../../../../e2e/support/desk/desk-flow.page';

/** Window wide enough to cover an all-day booking made in any timezone. */
const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

const isBookingPost = (url: string, method: string) =>
    url.includes('/api/staff/v1/bookings') && method === 'POST';

test.describe('desk booking — the new flow', () => {
    test('NEW-DESK-01: a non-admin books a desk from the list and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const title = uniqueTitle('E2E New Desk');
        const flow = new DeskFlow(staffPage);
        let booking_id: number | undefined;

        const swept = await releaseAsset(staffApi, 'desk', desk.id, window_from(), window_to());
        if (swept) console.log(`  swept ${swept} stale booking(s) off ${desk.id}`);

        try {
            await flow.open();
            // All Day replaces the default slot, which is the next boundary of
            // the clock and makes the booking depend on how fast the run is.
            await flow.setAllDay(true);
            await flow.selectDesk(desk.name);
            await flow.title.fill(title);

            // Read the form back before the click. The flow has no second
            // step, so this is the last point at which a lost edit is visible.
            await expect(flow.title).toHaveValue(title);
            await expect(flow.allDay.locator('input[type="checkbox"]')).toBeChecked();

            const [response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) => isBookingPost(r.url(), r.request().method()),
                    { timeout: 30_000 },
                ),
                flow.confirm.click(),
            ]);
            const status = response.status();
            const body = await response.text().catch(() => '<body unavailable>');
            expect(response.ok(), `POST /bookings should succeed, got ${status}: ${body}`).toBeTruthy();
            const created = JSON.parse(body);
            booking_id = created.id;

            expect(created.asset_id, 'the booking is against this worker’s desk').toBe(desk.id);
            expect(created.title, 'the title we typed reached the backend').toBe(title);

            // The app reached its own success state, not merely a POST.
            await expect(staffPage).toHaveURL(/#\/book\/desk\/success/);
            await expect(flow.successContinue).toBeVisible();
            await expect(flow.success, 'the success view names the desk').toContainText(desk.name);

            // Read it back independently of the response parsed above.
            const stored = await getBooking(staffApi, created.id);
            expect(stored.booking_type, 'stored as a desk booking').toBe('desk');
            expect(stored.asset_id).toBe(desk.id);
            expect(stored.title).toBe(title);
            expect(stored.deleted, 'not soft-deleted').toBeFalsy();
            expect(
                stored.zones.length,
                'carries its zone hierarchy (org/building/level)',
            ).toBeGreaterThan(0);

            const listed = await listBookings(staffApi, 'desk', window_from(), window_to());
            expect(
                listed.map((b) => b.id),
                'the new booking appears in the desk listing',
            ).toContain(created.id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });

    test('NEW-DESK-02: Confirm with no desk selected is refused and nothing is sent', async ({
        staffPage,
    }) => {
        const flow = new DeskFlow(staffPage);
        const posts: string[] = [];
        staffPage.on('request', (request) => {
            if (isBookingPost(request.url(), request.method())) posts.push(request.url());
        });

        await flow.open();
        await expect(flow.desks.first(), 'the list should offer desks').toBeVisible({
            timeout: 20_000,
        });
        await flow.title.fill(uniqueTitle('E2E New Desk None'));
        await flow.confirm.click();

        // The refusal is an error notice. Assert that it shows, then that the
        // flow is still on the form: a notice alone does not prove no save.
        await expect(staffPage.locator('mat-snack-bar-container')).toBeVisible();
        await expect(staffPage).toHaveURL(/#\/book\/desk\/form/);
        await expect(flow.successContinue).toHaveCount(0);
        expect(posts, 'no booking request may leave the page without a desk').toEqual([]);
    });
});
