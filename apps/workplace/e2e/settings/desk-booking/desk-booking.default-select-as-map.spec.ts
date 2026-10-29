// Setting: desks.default_select_as_map (docs/settings/workplace.md), legacy
// desk form. Coverage: 1 unique setting, 2 scenarios.
// Only the legacy desk picker reads this setting
// (libs/bookings/src/lib/desk-select-modal/desk-select-modal.component.ts sets
// its first view to 'map' when true, 'list' when false). The routed new flow
// (desk-flow-new desk-flow-select) always starts in list view, so every
// scenario sets app.use_legacy_flows true. The picker is opened from add-desk
// and closed with its close button; no desk is selected and nothing is sent.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** The picker's list/map toggle, matched on its icon ligature. */
function viewToggle(page: Page, picker: Locator, name: 'list' | 'map') {
    return picker.locator('header button').filter({
        has: page.locator('icon', { hasText: new RegExp('^\\s*' + name + '\\s*$') }),
    });
}

for (const enabled of [false, true]) {
    test('desk settings: desks.default_select_as_map ' + enabled + ' sets the legacy desk picker first view', async ({ staffPage, audit }) => {
        const fixture = await prepare(staffPage, audit, {
            'app.use_legacy_flows': true,
            'app.features': ['desks'],
            'app.feature_groups': {},
            'app.desk.auto_allocation': false,
            'app.desks.auto_allocation': false,
            'app.desks.allow_groups': false,
            'app.desks.default_select_as_map': enabled,
        });
        await staffPage.goto('/#/book/desk/form');
        await fixture.ready();
        const form = staffPage.locator('desk-flow-form');
        await expect(form).toBeVisible();
        await expect(staffPage.locator('desk-flow-new')).toHaveCount(0);
        const add = staffPage.locator('button[name="add-desk"]');
        await expect(add, 'manual desk selection must be offered').toBeEnabled();
        await expect(form.locator('desk-list-field div[desk]'), 'no desk pre-selected').toHaveCount(0);

        await add.click();
        const picker = staffPage.locator('desk-select-modal');
        await expect(picker).toHaveCount(1);
        await expect(picker).toBeVisible();
        const [shown, hidden] = enabled ? ['map', 'list'] as const : ['list', 'map'] as const;
        await expect(picker.locator('desk-' + shown), shown + ' view renders first').toHaveCount(1);
        await expect(picker.locator('desk-' + hidden), hidden + ' view not rendered').toHaveCount(0);
        await expect(viewToggle(staffPage, picker, shown)).toHaveClass(/\bbg-secondary\b/);
        await expect(viewToggle(staffPage, picker, hidden)).not.toHaveClass(/\bbg-secondary\b/);

        // Close without a result; the form keeps no desk.
        await picker.locator('header button[mat-dialog-close]').click();
        await expect(picker).toHaveCount(0);
        await expect(form.locator('desk-list-field div[desk]')).toHaveCount(0);
        await expect(staffPage.locator('desk-flow-confirm, desk-flow-success')).toHaveCount(0);
    });
}
