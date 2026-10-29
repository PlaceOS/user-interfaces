// Setting: bookings.assigned_resource_booking (docs/settings/workplace.md),
// legacy desk form. Coverage: 1 unique setting, 2 scenarios.
// Only the legacy desk form shows the reserved-desk overlay
// (apps/workplace/src/app/book/desk-flow/desk-flow-form.component.ts:
// has_assigned_desk() && assignedResourceBooking('desk') === 'deny'); the routed
// new flow (desk-flow-new) has no such overlay, so every scenario sets
// app.use_legacy_flows true. desk.* and desks.* are null, so the generic
// bookings.* value is the one that decides.
// The user is given an assigned desk by rewriting the real level desk metadata
// GET in the browser (assigned_to = the signed-in user). Nothing is saved; the
// desk picker is never opened and no desk is selected. The parent read-only
// guard fails any write.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL } from '../../../../../e2e/support/env';
import { type Audit, type DebugWindow, prepare, test } from '../support/settings-harness';

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

for (const policy of ['deny', 'allow'] as const) {
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
