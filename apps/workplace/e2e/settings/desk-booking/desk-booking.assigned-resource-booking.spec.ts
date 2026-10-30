// Setting: bookings.assigned_resource_booking (docs/settings/workplace.md).
// Coverage: 1 unique setting, 6 scenarios.
//
// Legacy desk form (3 scenarios): only the legacy desk form shows the
// reserved-desk overlay
// (apps/workplace/src/app/book/desk-flow/desk-flow-form.component.ts:
// has_assigned_desk() && assignedResourceBooking('desk') === 'deny'); the routed
// new flow (desk-flow-new) has no such overlay, so every scenario sets
// app.use_legacy_flows true. desk.* and desks.* are null, so the generic
// bookings.* value is the one that decides.
// The user is given an assigned desk by rewriting the real level desk metadata
// GET in the browser (assigned_to = the signed-in user). Nothing is saved; the
// desk picker is never opened and no desk is selected. The parent read-only
// guard fails any write.
//
// New desk flow, at submission (3 scenarios): BookingFormService
// _checkResourceAvailable refuses a desk booking when the user's bookings for
// the period include one tagged extension_data.is_assigned, unless the setting
// is 'allow' (unset or unknown values act as 'other_only'). The existing-bookings
// GET is answered in the browser with ONE such booking on another desk, and
// bookings.allowed_daily_desk_count is 2 so the daily limit cannot refuse.
//   allow: exactly one desk booking POST, answered in the browser
//     (armBookingPost); the success view opens.
//   other_only, deny: refused with the assigned-desk message; no POST.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL } from '../../../../../e2e/support/env';
import {
    armBookingPost,
    type Audit,
    bookingPosts,
    type DebugWindow,
    getOnly,
    openDesk,
    prepare,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

/** Give the signed-in user one assigned desk on every real level (browser-only GET rewrite). */
async function assignedDesk(page: Page, audit: Audit, user: () => Promise<{ email: string }>) {
    await page.route((url) => ORIGINS.has(url.origin) &&
        /^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(url.pathname) &&
        url.searchParams.get('name') === 'desks', async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const { email } = await user();
            const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
            if (!response.ok()) return await route.fulfill({ response });
            const rows: { zone?: { id?: string }; metadata?: Record<string, unknown> }[] = await response.json();
            if (!Array.isArray(rows)) throw new Error('children metadata must be an array');
            const json = rows.map((row) => !row.zone?.id ? row : { ...row, metadata: { ...row.metadata, desks: {
                name: 'desks', details: [{
                    id: 'e2e-assigned-desk-' + row.zone.id, name: 'E2E assigned desk',
                    map_id: 'e2e-assigned-desk-map-' + row.zone.id, bookable: true,
                    assigned_to: email, groups: [], features: [], images: [],
                }] } } });
            audit.fixtures['assigned desk levels'] = (audit.fixtures['assigned desk levels'] ?? 0) +
                rows.filter((row) => row.zone?.id).length;
            await route.fulfill({ response, json });
        } catch (error) {
            audit.monitoring_errors.push('assigned desk fixture: ' + String(error));
            await route.fallback().catch(() => undefined);
        }
    });
}

/** The legacy form's has_assigned_desk() (read-only). */
function hasAssignedDesk(page: Page) {
    return page.locator('desk-flow-form').evaluate((element) => {
        const form = (window as DebugWindow).ng?.getComponent(element) as
            | { _state?: { has_assigned_desk?: () => boolean } }
            | undefined;
        if (!form?._state?.has_assigned_desk) throw new Error('the legacy desk form state is unavailable');
        return form._state.has_assigned_desk();
    });
}

for (const policy of ['deny', 'other_only', 'allow'] as const) {
    test('desk settings: bookings.assigned_resource_booking ' + policy + ' controls the legacy assigned-desk overlay', async ({ staffPage, audit }) => {
        const fixture = await prepare(staffPage, audit, {
            'app.use_legacy_flows': true,
            'app.features': ['desks'],
            'app.feature_groups': {},
            'app.desk.auto_allocation': false,
            'app.desks.auto_allocation': false,
            'app.desks.allow_groups': false,
            'app.desks.use_assets': false,
            'app.desk.assigned_resource_booking': null,
            'app.desks.assigned_resource_booking': null,
            'app.bookings.assigned_resource_booking': policy,
        });
        await assignedDesk(staffPage, audit, fixture.user);
        await staffPage.goto('/#/book/desk/form');
        await fixture.ready();
        const form = staffPage.locator('desk-flow-form');
        await expect(form).toBeVisible();
        await expect(staffPage.locator('desk-flow-new')).toHaveCount(0);
        await expect.poll(() => audit.fixtures['assigned desk levels'] ?? 0,
            { message: 'real level desk metadata is needed for the assigned desk' }).toBeGreaterThan(0);
        // The assigned desk is detected in both scenarios, so only the policy
        // decides the overlay; an absent overlay cannot pass on a slow lookup.
        await expect.poll(() => hasAssignedDesk(staffPage), { message: 'assigned desk detected' }).toBe(true);
        const overlay = form.locator('[name="reserved-desk-overlay"]');
        if (policy === 'deny') {
            await expect(overlay).toBeVisible();
        } else {
            await expect(overlay).toHaveCount(0);
            await expect(staffPage.locator('button[name="add-desk"]')).toBeEnabled();
        }
        await expect(form.locator('desk-list-field div[desk]')).toHaveCount(0);
        await expect(staffPage.locator('desk-flow-confirm, desk-flow-success')).toHaveCount(0);
    });
}

const OTHER_DESK = 'e2e-assigned-other-desk';
const ASSIGNED_REFUSAL = 'You have an assigned desk and cannot book another desk.';

/**
 * Answer the daily-limit check of _checkResourceAvailable (GET
 * /api/staff/v1/bookings with exactly email, limit=1000, period_end,
 * period_start and type=desk) with ONE active desk booking for `email` on
 * OTHER_DESK, tagged extension_data.is_assigned. Returns the periods served.
 */
async function assignedDeskBooking(page: Page, audit: Audit, email: string) {
    const served: { period_start: number; period_end: number }[] = [];
    await getOnly(page, audit, 'existing assigned desk booking', (url) =>
        url.pathname === '/api/staff/v1/bookings' &&
        [...url.searchParams.keys()].sort().join() === 'email,limit,period_end,period_start,type' &&
        url.searchParams.get('type') === 'desk' &&
        url.searchParams.get('email') === email &&
        url.searchParams.get('limit') === '1000', (url) => {
        const period_start = Number(url.searchParams.get('period_start'));
        const period_end = Number(url.searchParams.get('period_end'));
        served.push({ period_start, period_end });
        return [{
            id: 'e2e-assigned-existing-desk', booking_type: 'desk', asset_id: OTHER_DESK,
            asset_name: 'E2E assigned other desk', user_email: email,
            booking_start: period_start, booking_end: period_end,
            approved: true, rejected: false, deleted: false,
            extension_data: { is_assigned: true },
        }];
    });
    return served;
}

for (const policy of ['allow', 'other_only', 'deny'] as const) {
    test('desk settings: bookings.assigned_resource_booking ' + policy + ' decides a new-flow booking beside an assigned one', async ({ staffPage, audit }) => {
        const { fixture } = await openDesk(staffPage, audit, {
            'app.desk.assigned_resource_booking': null,
            'app.desks.assigned_resource_booking': null,
            'app.bookings.assigned_resource_booking': policy,
            'app.bookings.allowed_daily_desk_count': 2,
            // Seeded desks live in level desk metadata.
            'app.desks.use_assets': false,
        });
        const { email } = await fixture.user();
        const served = await assignedDeskBooking(staffPage, audit, email);
        const posts = bookingPosts(staffPage);
        const armed = policy === 'allow'
            ? await armBookingPost(staffPage, (body) =>
                body.booking_type === 'desk' && body.user_email === email &&
                typeof body.asset_id === 'string' && body.asset_id !== OTHER_DESK)
            : undefined;

        const confirm = staffPage.locator('desk-flow-new button[btn]').filter({
            has: staffPage.locator('icon', { hasText: /^\s*task_alt\s*$/ }),
        });
        await expect(confirm).toHaveCount(1);
        await confirm.click();

        await expect.poll(() => served.length, { message: 'existing desk bookings were read' }).toBeGreaterThan(0);
        if (policy !== 'allow') {
            await expect(staffPage.locator('mat-snack-bar-container')).toContainText(ASSIGNED_REFUSAL);
            expect(posts, 'no booking POST is sent').toEqual([]);
            await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
            await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
        } else {
            await expect.poll(() => armed!.completed, { message: 'the armed booking POST was answered' }).toBe(true);
            expect(posts, 'exactly one booking POST').toHaveLength(1);
            expect(armed!.bodies[0].asset_id).not.toBe(OTHER_DESK);
            await expect(staffPage).toHaveURL(/#\/book\/desk\/success$/);
            await expect(staffPage.locator('desk-flow-success h2')).toBeVisible();
        }
    });
}
