// Setting: parking.extra_space_restrictions (docs/settings/workplace.md).
// Coverage: 1 unique setting, 3 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the harness 'local-only' audit.
//
// Source: apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
//   (setting signal, normalise, isExtraRestrictionSelected / setExtraRestriction,
//   and the space-restrictions template: section gate and settings-toggle list).
//
// Scenarios: 3
//   1. Two configured options render one settings-toggle each, in setting order,
//      both unchecked, under the space-restrictions heading.
//   2. The toggles are independent and reversible: A, then A+B, then B.
//   3. An empty list (with an empty request_space_restrictions) removes both the
//      toggle list and the whole space-restrictions section.
// Preconditions/fixtures: the harness test with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call), GET-only stubs for hidden asset categories/types/assets,
//   GET /api/staff/v1/calendars -> [], GET /api/staff/v1/bookings?type=parking
//   -> []. app.parking.request_space_restrictions is [] and
//   app.parking.require_space_restriction is false, so the section renders only
//   for these extra options. app.parking.hide_prefer_toggle is true so the
//   unrelated "prefer booked location" settings-toggle cannot be counted.
// Expected behaviour: one settings-toggle per normalised option, in setting
//   order; the settings-toggle renders a mat-checkbox (no `toggle` input here),
//   so the host button is clicked and the inner checkbox input is asserted.
//   Clicks only change local form state; nothing is submitted, and the read-only
//   fixture fails the test on any non-GET /api request.
//
// Notes:
// - settings-toggle renders mat-checkbox with pointer-events-none; click the
//   host button, never the checkbox.
// - The section heading carries a real id (#parking-space-restrictions-label),
//   the only stable handle in this block.
// - Labels pass through the translate pipe (APP.locale en-AU); the synthetic
//   names are not i18n keys, so they render unchanged.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    CONTROLS,
    type DebugWindow,
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
    // Keep the only settings-toggle on the form in the extra-restrictions list.
    'app.parking.hide_prefer_toggle': true,
};
const RESTRICTIONS = [
    { id: 'e2e-standard-bay', name: 'E2E Standard Bay' },
    { id: 'e2e-accessible-bay', name: 'E2E Accessible Bay' },
];

async function openRequest(page: Page, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-extra-restriction',
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

/** One settings-toggle per configured extra restriction, matched by its label. */
function extraToggle(root: Locator, name: string) {
    return root.locator('settings-toggle').filter({ hasText: name });
}
/** settings-toggle always renders mat-checkbox here (no `toggle` input). */
function toggleBox(toggle: Locator) {
    return toggle.locator('mat-checkbox input[type="checkbox"]');
}
/** The mat-checkbox ignores pointer events; the host button owns the click. */
function toggleButton(toggle: Locator) {
    return toggle.locator('button').first();
}
async function toggleLabels(root: Locator) {
    const texts = await root.locator('settings-toggle').allInnerTexts();
    return texts.map((text) => text.replace(/\s+/g, ' ').trim());
}
/**
 * Read-only view of the parent form model. The debug build exposes
 * ng.getComponent on the parking-request-form-details host; model() is the
 * WritableSignal passed down from parking-request-form.
 */
async function extraRestrictions(root: Locator) {
    return root.evaluate((element) => {
        const ng = (window as DebugWindow).ng;
        if (!ng) {
            throw new Error('Angular debug API ng.getComponent is unavailable');
        }
        const component = ng.getComponent(element) as
            | {
                  model?: () =>
                      | { extra_space_restrictions?: string[] }
                      | undefined;
              }
            | undefined;
        if (!component?.model) {
            throw new Error(
                'parking-request-form-details model() is unavailable',
            );
        }
        return component.model()?.extra_space_restrictions;
    });
}

test.describe('parking.extra_space_restrictions', () => {
    test('parking.extra_space_restrictions renders one toggle per option', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.extra_space_restrictions': RESTRICTIONS,
        });
        await expect(
            root.locator('#parking-space-restrictions-label'),
        ).toBeVisible();
        await expect(root.locator('settings-toggle')).toHaveCount(2);
        expect(await toggleLabels(root)).toEqual([
            'E2E Standard Bay',
            'E2E Accessible Bay',
        ]);
        for (const name of ['E2E Standard Bay', 'E2E Accessible Bay']) {
            const toggle = extraToggle(root, name);
            await expect(toggle).toHaveCount(1);
            await expect(toggleBox(toggle)).toHaveCount(1);
            await expect(toggleBox(toggle)).not.toBeChecked();
        }
        await untouchedForm(staffPage);
    });

    test('parking.extra_space_restrictions toggles independently and is reversible', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.extra_space_restrictions': RESTRICTIONS,
        });
        const standard = extraToggle(root, 'E2E Standard Bay');
        const accessible = extraToggle(root, 'E2E Accessible Bay');
        const standard_box = toggleBox(standard);
        const accessible_box = toggleBox(accessible);

        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model starts with no extra restrictions',
            })
            .toEqual([]);

        await toggleButton(standard).click();
        await expect(standard_box).toBeChecked();
        await expect(accessible_box).not.toBeChecked();
        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model after selecting Standard',
            })
            .toEqual(['e2e-standard-bay']);

        await toggleButton(accessible).click();
        await expect(standard_box).toBeChecked();
        await expect(accessible_box).toBeChecked();
        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model after selecting Accessible',
            })
            .toEqual(['e2e-standard-bay', 'e2e-accessible-bay']);

        await toggleButton(standard).click();
        await expect(standard_box).not.toBeChecked();
        await expect(accessible_box).toBeChecked();
        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model after untoggling Standard',
            })
            .toEqual(['e2e-accessible-bay']);
        await untouchedForm(staffPage);
    });

    test('parking.extra_space_restrictions empty hides the extra list', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.extra_space_restrictions': [],
            'app.parking.request_space_restrictions': [],
            'app.parking.require_space_restriction': false,
        });
        // Both lists empty => the whole section is gated out.
        await expect(
            root.locator('#parking-space-restrictions-label'),
        ).toHaveCount(0);
        await expect(root.locator('settings-toggle')).toHaveCount(0);
        await untouchedForm(staffPage);
    });
});
