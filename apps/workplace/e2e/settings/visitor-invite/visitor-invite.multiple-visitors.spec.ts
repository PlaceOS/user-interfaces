// Setting: bookings.multiple_visitors (docs/settings/workplace.md), legacy
// visitor form. Coverage: 1 unique setting, 2 scenarios.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** The legacy form's `model().asset_id`, read from its public component state. */
function legacyAssetId(page: Page) {
    return page.locator('invite-visitor-form').evaluate((element) => {
        const form = (window as Debug).ng?.getComponent(element) as
            | { model?: () => { asset_id?: string } }
            | undefined;
        if (!form?.model) throw new Error('the legacy visitor form is unavailable');
        return form.model().asset_id ?? '';
    });
}

// Target: bookings.multiple_visitors.
// Only the legacy visitor form reads this setting
// (libs/bookings/src/lib/invite-visitor-form.component.ts), so every scenario
// sets app.use_legacy_flows true; legacyFlowsGuard then routes
// /#/book/visitor/form to it. The new flow (visitor-flow-new) chooses single or
// multiple from its on-page toggle and its success view from the sent count,
// so it cannot show this setting and is not asserted here.
// - false: the name and email fields; asset_id stays empty.
// - true: the visitor list field instead, and asset_id holds the
//   'multiple@place.tech' placeholder (_multipleVisitorEffect).
// The harness prepare supplies the visitor-invite base settings and the
// read-only GET fixtures. Nothing is typed or sent; the parent read-only guard
// fails any write.
for (const enabled of [false, true]) {
    test(
        'bookings.multiple_visitors ' +
            enabled +
            ' selects the legacy visitor fields',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.use_legacy_flows': true,
                'app.bookings.multiple_visitors': enabled,
            });
            await staffPage.goto('/#/book/visitor/form');
            await fixture.ready();
            const form = staffPage.locator('invite-visitor-form');
            await expect(form).toHaveCount(1);
            await expect(form.locator('button[send]')).toBeVisible();
            await expect(staffPage.locator('visitor-flow-new')).toHaveCount(0);
            await expect(form.locator('input#visitor-email')).toHaveCount(enabled ? 0 : 1);
            await expect(form.locator('input#visitor-name')).toHaveCount(enabled ? 0 : 1);
            await expect(form.locator('a-user-list-field')).toHaveCount(enabled ? 1 : 0);
            await expect
                .poll(() => legacyAssetId(staffPage), { message: 'legacy form asset_id' })
                .toBe(enabled ? 'multiple@place.tech' : '');
            await expect(form.locator('[sent]')).toHaveCount(0);
        },
    );
}
