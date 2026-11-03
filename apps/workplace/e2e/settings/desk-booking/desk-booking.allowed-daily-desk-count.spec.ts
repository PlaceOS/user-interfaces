// Setting: bookings.allowed_daily_desk_count (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/bookings/src/lib/booking-form.service.ts _checkResourceAvailable,
// run by postForm before anything is saved. It reads the user's desk bookings
// for the booking period (GET /api/staff/v1/bookings with period_start,
// period_end, type=desk, email=<user>, limit=1000), ignores declined,
// cancelled, ended and rejected ones, and refuses with
// BOOKINGS.CLASH_CURRENT_USER when the user already has
// app.bookings.allowed_daily_desk_count (default 1; 0 = no limit) or more.
//
// Both scenarios answer that one GET in the browser with ONE active booking for
// the signed-in user in the requested period, on a different desk id, so only
// the count decides (the earlier same-desk check cannot fire). The new desk
// flow auto-allocates a real seeded desk (level desk metadata, read-only).
//   1. limit 1: Confirm is refused with CLASH_CURRENT_USER; no POST is sent and
//      the form stays open.
//   2. limit 2: the check passes; exactly one desk booking POST is sent, caught
//      and answered in the browser (armBookingPost), and the success view opens.
// Not tested here: the default (unset = 1) and 0 (no limit).
// e2e/local/bookings-limit.spec.ts (YB-12) covers list paging, not this limit.
//
// Safety: the read-only context guard is unchanged and fails any write. Only
// scenario 2 arms a single booking POST, answered locally; nothing is saved.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    armBookingPost,
    bookingPosts,
    clashCurrentUser,
    type Debug,
    oneDailyBooking,
    openDesk,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const OTHER_DESK = 'e2e-daily-limit-other-desk';

/** The desk flow's form asset (the auto-allocated desk), read-only. */
function formAssetId(page: Page) {
    return page.locator('desk-flow-new').evaluate((element) => {
        const flow = (window as Debug).ng?.getComponent(element) as
            | { form_value?: () => { asset_id?: string } }
            | undefined;
        if (!flow?.form_value) throw new Error('the desk flow form is unavailable');
        return flow.form_value().asset_id ?? '';
    });
}

const SCENARIOS = [
    { label: '1 refuses a second desk booking that day', limit: 1, allowed: false },
    { label: '2 allows a second desk booking that day', limit: 2, allowed: true },
];

for (const scenario of SCENARIOS) {
    test('desk settings: bookings.allowed_daily_desk_count ' + scenario.label, async ({ staffPage, audit }) => {
        const { fixture } = await openDesk(staffPage, audit, {
            'app.bookings.allowed_daily_desk_count': scenario.limit,
            // Seeded desks live in level desk metadata.
            'app.desks.use_assets': false,
        });
        const { email } = await fixture.user();
        // The user's existing desk bookings for the requested period: one active
        // booking on another desk, built from the request's own period.
        const served = await oneDailyBooking(staffPage, audit, { type: 'desk', email, asset_id: OTHER_DESK });
        // Every booking POST attempt is counted, armed or not.
        const posts = bookingPosts(staffPage);
        const armed = scenario.allowed
            ? await armBookingPost(staffPage, (body) =>
                body.booking_type === 'desk' && body.user_email === email &&
                typeof body.asset_id === 'string' && body.asset_id !== OTHER_DESK)
            : undefined;

        const confirm = staffPage.locator('desk-flow-new button[btn]').filter({
            has: staffPage.locator('icon', { hasText: /^\s*task_alt\s*$/ }),
        });
        await expect(confirm).toHaveCount(1);
        await confirm.click();

        // The fake booking was read for this user's booking period.
        await expect.poll(() => served.length, { message: 'existing desk bookings were read' }).toBeGreaterThan(0);
        expect(served[0].period_end).toBeGreaterThan(served[0].period_start);
        if (!scenario.allowed) {
            await expect(staffPage.locator('mat-snack-bar-container')).toContainText(clashCurrentUser(email));
            expect(posts, 'no booking POST is sent').toEqual([]);
            await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
            await expect(staffPage.locator('desk-flow-new desk-flow-details input[name$=".title"]')).toBeEditable();
            await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
            // The auto-allocated desk differs from the existing booking's desk.
            const asset = await formAssetId(staffPage);
            expect(asset).toBeTruthy();
            expect(asset).not.toBe(OTHER_DESK);
        } else {
            await expect.poll(() => armed!.completed, { message: 'the armed booking POST was answered' }).toBe(true);
            expect(posts, 'exactly one booking POST').toHaveLength(1);
            expect(armed!.bodies).toHaveLength(1);
            expect(armed!.bodies[0].asset_id).not.toBe(OTHER_DESK);
            await expect(staffPage).toHaveURL(/#\/book\/desk\/success$/);
            // The success host has no box of its own (its content is absolutely
            // positioned), so check its visible heading and continue link.
            const success = staffPage.locator('desk-flow-success');
            await expect(success.locator('h2')).toBeVisible();
            await expect(success.locator('h2')).toContainText(
                String(armed!.bodies[0].asset_name),
            );
            await expect(
                success.locator('a[name="desk-confirm-continue"]'),
            ).toBeVisible();
        }
    });
}
