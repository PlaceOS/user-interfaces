// Setting: parking.auto_approved_groups (docs/settings/workplace.md).
// Coverage: 1 unique setting, 3 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the harness 'local-only' audit.
//
// Source: apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
//   (is_auto_approved, consumed by the approver block gate and the approver
//   reset); user_group_names from libs/common/src/lib/user-state.ts, fed by
//   GET /api/engine/v2/users/current.
//
// Scenarios: 3
//   1. A configured group that the signed-in user holds hides the approver section.
//   2. A configured group the user does not hold keeps the approver section.
//   3. An empty list keeps the approver section even though the user has groups.
// Preconditions/fixtures: the harness test. The only mutation is a read-through of GET /api/engine/v2/users/current:
//   route.fetch() + route.fulfill({ json: { ...user, groups } }), so the real
//   identity GET is still a GET and the fixture's email / sys_admin / support
//   assertions keep holding. Hidden asset categories/types/assets,
//   GET /api/staff/v1/calendars and GET /api/staff/v1/bookings?type=parking are
//   stubbed with GET-only handlers. app.parking.approver_groups carries one
//   option so the approver block has something to show when it is not hidden.
// Expected behaviour: is_auto_approved() is true only when the setting is
//   non-empty AND one of its entries appears in user_group_names(); while it is
//   true the approver block is absent and no approver_group reset happens. User
//   groups are never written: the only request to /users/current is the app's
//   own GET, and the read-only fixture fails the test on any non-GET /api call.
//
// Notes:
// - The group name is synthetic ("e2e-approvers"). It is appended to the
//   browser-visible copy of the identity only; the backend record is untouched.
// - Do not add placeos_admin / placeos_support: the parent fixture asserts the
//   scenario runs as a non-privileged staff user.
// - The approver gate reads user_group_names(), which fills when the app's
//   own identity GET returns, so openRequest waits for that read.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    CONTROLS,
    PRESETS,
    prepareSettings,
    REQUEST,
    ROUTE,
    type Settings,
    test,
    untouched,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'local-only' });

const USER_GROUPS = ['e2e-approvers', 'e2e-everyone'];
const BASE: Settings = {
    ...REQUEST,
    'app.parking.request_shift_options': [PRESETS[0]],
    'app.parking.approver_groups': [{ id: 'e2e-approver-a', name: 'E2E Approver A' }],
};

async function openRequest(page: Page, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-auto-approve',
        landingRooms: false,
        identity: { groups: USER_GROUPS },
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
    await expect
        .poll(fixture.identityHits, {
            message: 'the app must read the staff identity once',
        })
        .toBeGreaterThan(0);
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

test.describe('parking.auto_approved_groups', () => {
    test('parking.auto_approved_groups matching user group hides the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.auto_approved_groups': ['e2e-approvers'],
        });
        await expect(approverHeading(root)).toHaveCount(0);
        await expect(approverSelect(root)).toHaveCount(0);
        // The form itself still rendered: only the approver block was removed.
        await expect(root.locator('mat-select').first()).toBeVisible();
        await untouchedForm(staffPage);
    });

    test('parking.auto_approved_groups non-matching group keeps the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.auto_approved_groups': ['e2e-other-team'],
        });
        await expect(approverHeading(root)).toHaveCount(1);
        const select = approverSelect(root);
        await expect(select).toHaveCount(1);
        await select.click();
        const options = staffPage.getByRole('option');
        await expect(options.first()).toBeVisible();
        expect(
            (await options.allInnerTexts()).map((text) =>
                text.replace(/\s+/g, ' ').trim(),
            ),
        ).toEqual(['E2E Approver A']);
        await staffPage.keyboard.press('Escape');
        await expect(options).toHaveCount(0);
        await untouchedForm(staffPage);
    });

    test('parking.auto_approved_groups empty keeps the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.auto_approved_groups': [],
        });
        // The user still holds groups (identity fixture), but an empty setting
        // short-circuits is_auto_approved() before any comparison happens.
        await expect(approverHeading(root)).toHaveCount(1);
        await expect(approverSelect(root)).toContainText('E2E Approver A');
        await untouchedForm(staffPage);
    });
});
