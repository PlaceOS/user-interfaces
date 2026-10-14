/**
 * NEW-DESK-02, NEW-DESK-03 — the `desk-flow-new` booking flow, as a NON-ADMIN,
 * against a real local backend.
 *
 * `desk-booking.spec.ts` (WP-E2E-05) holds the story of a booking through this
 * flow, with its success view. These specs drive the page object directly:
 * NEW-DESK-02 checks that Confirm sends nothing when no desk is selected.
 * NEW-DESK-03 is a `fixme` for an app fault, see its comment.
 *
 * There is no NEW-DESK-01. It was a copy of WP-E2E-05 and is merged into it.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deskFor } from '../../../../e2e/support/env';
import { uniqueTitle } from '../../../../e2e/support/api';
import { DeskFlow } from '../../../../e2e/support/desk/desk-flow.page';
import {
    createSecondLevel,
    removeSecondLevel,
} from '../../../../e2e/support/desk/desk.zones';

const isBookingPost = (url: string, method: string) =>
    url.includes('/api/staff/v1/bookings') && method === 'POST';

test.describe('desk booking — the new flow', () => {
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
        await expect(staffPage.locator('mat-snack-bar-container.error')).toBeVisible();
        await expect(staffPage).toHaveURL(/#\/book\/desk\/form/);
        await expect(flow.successContinue).toHaveCount(0);
        expect(posts, 'no booking request may leave the page without a desk').toEqual([]);
    });

    // FIXME (app fault, measured 2026-10-13): one desk whose metadata has no
    // `features` list stops `desk-flow-select` from rendering a selection.
    // The `features` computed of `desk-flow-select.component.ts` calls
    // `.trim()` on the `features` of every desk of the building with no guard,
    // and throws for such a desk. The console shows `TypeError: Cannot read
    // properties of undefined (reading 'trim')` on each render, and the
    // bindings after it in the template do not update. Measured: after a
    // click on a desk the form holds it (`model().asset_id` is the desk id),
    // and no row shows as selected. This test fails at `selectDesk` with
    // `desk "E2E Desk 0" should show as selected`.
    //
    // The flow that this one replaced read the list through
    // `BookingFormService.features`, which has the guard.
    //
    // Do not run this beside the other specs before the app is fixed: the
    // desk it adds breaks the selection in the pages of all workers.
    test.fixme('NEW-DESK-03: a desk with no features list does not break the desk selection', async ({
        staffPage,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const extra = await createSecondLevel(testInfo.parallelIndex, { features: false });
        try {
            const flow = new DeskFlow(staffPage);
            await flow.open();
            // The desk with no list is offered, so the page has it loaded.
            await expect
                .poll(() => flow.deskNames(), { timeout: 30_000 })
                .toContain(extra.desk.name);

            // A desk that has the list must still show as selected.
            await flow.selectDesk(desk.name);
            await expect(flow.chosenDeskNames).toHaveText([desk.name]);
        } finally {
            await removeSecondLevel(extra.zone_id);
        }
    });
});
