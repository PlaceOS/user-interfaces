// Setting: parking.approver_groups (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the harness 'local-only' audit.
//
// Source: apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
//   (setting signal, normalise + request-type filter, approver template block,
//   auto-select of the first option).
//
// Scenarios: 2
//   1. Two configured options: the first is preselected on load, and the list
//      renders one mat-option each, in setting order.
//   2. An empty list hides the whole approver section.
// Preconditions/fixtures: the harness test with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call), GET-only stubs for the hidden asset categories/types/assets,
//   GET /api/staff/v1/calendars -> [] and GET /api/staff/v1/bookings?type=parking
//   -> []. Local backend only (assertLocalOnly). app.parking.request_types stays
//   null, so the default request types carry no approver_groups and nothing is
//   filtered out of the option list.
// Expected behaviour: the approver block renders only while
//   filtered_approver_group_options() is non-empty and the user is not
//   auto-approved; the mat-select lists every configured option in setting order
//   and holds the first option's id. Nothing is submitted: the form stays on
//   screen, the success view never appears, and the read-only fixture fails the
//   test on any non-GET /api request.
//
// Notes:
// - The approver mat-select has no name or id; it is reached through the section
//   heading, exactly as in parking-request.request-space-restrictions.spec.ts.
// - Labels pass through the translate pipe with APP.locale pinned to en-AU.
//   "E2E Approver A" is not an i18n key, so it renders unchanged.
// - Do NOT submit, and do not change the request type here: setRequestType()
//   re-runs the approver reset.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    CONTROLS,
    optionLabels,
    PRESETS,
    prepareSettings,
    REQUEST,
    ROUTE,
    type Settings,
    test,
    untouched,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'local-only' });

const BASE: Settings = {
    ...REQUEST,
    'app.parking.request_shift_options': [PRESETS[0]],
};
const OPTIONS = [
    { id: 'e2e-approver-a', name: 'E2E Approver A' },
    { id: 'e2e-approver-b', name: 'E2E Approver B' },
];

async function openRequest(page: Page, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-approver',
        landingRooms: false,
        identity: false,
        bookings: { types: ['parking'] },
    });
    await page.goto(ROUTE);
    await fixture.ready({ loading: false });
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    await expect(
        page.locator('parking-request-form button[btn]').filter({
            has: page.locator('icon', { hasText: /^\s*send\s*$/ }),
        }),
    ).toBeVisible();
    return root;
}

/** Nothing was submitted: still on the form, success view absent. */
async function untouchedForm(page: Page) {
    await untouched(page);
    await expect(page).toHaveURL(/#\/book\/parking-request\/form$/);
}

/** The approver mat-select has no name or id; reach it through its heading. */
function approverHeading(root: Locator) {
    return root.locator('h3').filter({ hasText: 'Approver Group' });
}
function approverSelect(root: Locator) {
    return approverHeading(root).locator('xpath=..').locator('mat-select');
}

test.describe('parking.approver_groups', () => {
    test('parking.approver_groups preselects the first option and renders every configured option in order', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.approver_groups': OPTIONS,
            'app.parking.auto_approved_groups': [],
        });
        await expect(approverHeading(root)).toHaveCount(1);
        const select = approverSelect(root);
        await expect(select).toHaveCount(1);
        // The collapsed select renders the selected option's name.
        await expect(select).toContainText('E2E Approver A');
        await expect(select).not.toContainText('E2E Approver B');
        const labels = await optionLabels(staffPage, select);
        expect(labels, 'the mat-option list follows the setting order').toEqual(
            ['E2E Approver A', 'E2E Approver B'],
        );
        await untouchedForm(staffPage);
    });

    test('parking.approver_groups empty hides the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.approver_groups': [],
            'app.parking.auto_approved_groups': [],
        });
        await expect(approverHeading(root)).toHaveCount(0);
        await expect(approverSelect(root)).toHaveCount(0);
        // The rest of the request form is unaffected by the empty list.
        await expect(root.locator('mat-select').first()).toBeVisible();
        await untouchedForm(staffPage);
    });
});
