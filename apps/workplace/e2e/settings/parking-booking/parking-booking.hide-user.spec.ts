// Setting: parking.hide_user. Exact keys: app.parking.hide_user (+ legacy alias
// app.parkings.hide_user).
// Coverage: 1 unique setting, 3 scenarios.
// Source: libs/bookings/src/lib/parking-select-modal/parking-map.component.ts
//   features(); legacy spelling fallback `app.parking.hide_user ??
//   app.parkings.hide_user`.
//
// Scenarios:
//   1. false renders one map feature for each loaded parking space.
//   2. true renders no map features, while the list still shows the space.
//   3. The legacy key app.parkings.hide_user alone also suppresses the features.
// Preconditions/fixtures: the harness test ('local-only' audit) with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call). A browser-only region/building/level fixture supplies the
//   active building and a level tagged `parking`; GET-only stubs return one
//   `_PARKING_SPACES_` asset (id/map_id `e2e-bay-1`) on that level, no
//   `_PARKING_USERS_` assets (so deny_parking_access stays false), empty
//   calendar / parking booking lists and an empty bookings/booked list. Local
//   backend only (assertLocalOnly).
// Expected behaviour: features() is [] while hide_user resolves true, so the
//   hidden dynamic-map block renders no div[el-id] at all; otherwise there is one
//   div[el-id] per space, carrying the space's map_id. The parking list is
//   unaffected in both cases. Nothing is selected or submitted, and the read-only
//   fixture fails the test on any non-GET /api request.
//
// Notes:
// - div[el-id] lives inside <div hidden> in dynamic-map.component.ts, so
//   assert COUNT, never visibility.
// - The picker opens on the list view; the map DOM only exists after clicking the
//   map button (view defaults to 'list').
// - Asset type ids come from the hidden `_PARKING_` category stub. Without it
//   the type bootstrap would POST, which the read-only guard rejects.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { ParkingForm } from '../../../../../e2e/support/parking/parking-form.page';
import {
    BOOKING,
    CONTROLS,
    type DebugWindow,
    organisationRoutes,
    prepareSettings,
    type Settings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'local-only' });

const REGION = 'e2e-hide-user-region';
const BUILDING_A = 'e2e-hide-user-building-a';
const BUILDING_B = 'e2e-hide-user-building-b';
const LEVEL_A = 'e2e-hide-user-level-a';
const LEVEL_B = 'e2e-hide-user-level-b';
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Parking Level A',
        display_name: 'E2E Parking Level A',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Level B',
        display_name: 'E2E Level B',
        tags: ['level'],
    },
];
const BUILDINGS = [
    {
        id: BUILDING_A,
        parent_id: REGION,
        name: 'E2E Parking Building A',
        display_name: 'E2E Parking Building A',
        tags: ['building'],
        timezone: 'UTC',
        location: '0,0',
    },
    {
        id: BUILDING_B,
        parent_id: REGION,
        name: 'E2E Parking Building B',
        display_name: 'E2E Parking Building B',
        tags: ['building'],
        timezone: 'UTC',
        location: '40,40',
    },
];
const BAY_ID = 'e2e-bay-1';
const BAY = {
    id: BAY_ID,
    name: 'E2E Bay 1',
    identifier: 'E2E Bay 1',
    map_id: BAY_ID,
    zone_id: LEVEL_A,
    zones: [LEVEL_A],
    bookable: true,
    other_data: {},
};

// type id -> assets. Spaces live on the parking level; no parking users, so the
// user is never denied access and only the hide_user branch can change the DOM.
const ASSETS: Record<string, unknown[]> = {
    'e2e-hide-user-type-_PARKING_SPACES_': [BAY],
    'e2e-hide-user-type-_PARKING_USERS_': [],
    'e2e-hide-user-type-_PARKING_FLEET_VEHICLES_': [],
};
const BASE: Settings = {
    ...BOOKING,
    'app.feature_groups': {},
    'app.events.use_bookings': true,
    'app.default_building': BUILDING_A,
};

async function prepare(page: Page, overrides: Settings) {
    await organisationRoutes(page, {
        prefix: 'e2e-hide-user-',
        region: { id: REGION, name: 'E2E Parking Region' },
        buildings: BUILDINGS,
        levels: LEVELS,
        clearSession: ['PLACEOS.booking_form', 'PLACEOS.booking_form_options', 'PLACEOS.booking_form_filters'],
        locale: 'en-AU',
    });
    // booked: BookingFormService._computeAvailableResources -> bookedResourceList.
    return prepareSettings(page, overrides, {
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-hide-user',
        hiddenAssets: (url) => ASSETS[url.searchParams.get('type_id') ?? ''] ?? [],
        landingRooms: false,
        identity: false,
        locale: null,
        bookings: { types: ['parking'] },
        booked: true,
    });
}

/** The picker's map-layer handle list (hidden DOM, one entry per space). */
function mapHandles(page: Page) {
    return page.locator(
        'parking-select-modal parking-space-map dynamic-map div[el-id]',
    );
}
/** The list/map toggle buttons live in the picker header. */
function mapButton(page: Page) {
    return page
        .locator('parking-select-modal header button')
        .filter({ has: page.locator('icon', { hasText: /^\s*map\s*$/ }) });
}

async function openPicker(page: Page, overrides: Settings) {
    const fixture = await prepare(page, overrides);
    const form = new ParkingForm(page);
    await form.open();
    await fixture.ready({ loading: false });
    await form.addSpaceButton.click();
    const modal = page.locator('parking-select-modal');
    await expect(modal).toBeVisible({ timeout: 20_000 });
    // List view is the default and proves the fixture's space was loaded before
    // the map layer is inspected.
    await expect(
        modal.locator('li[space]').filter({ hasText: 'E2E Bay 1' }),
    ).toHaveCount(1, { timeout: 20_000 });
    await expect(page.locator('parking-flow-success')).toHaveCount(0);
    return { modal, form };
}

test.describe('parking.hide_user', () => {
    test('parking.hide_user false renders a map feature for each parking space', async ({
        staffPage,
    }) => {
        const { modal } = await openPicker(staffPage, {
            'app.parking.hide_user': false,
        });
        await mapButton(staffPage).click();
        await expect(
            modal.locator('parking-space-map dynamic-map'),
        ).toHaveCount(1);
        await expect(mapHandles(staffPage)).toHaveCount(1, { timeout: 20_000 });
        await expect(modal.locator(`[el-id="${BAY_ID}"]`)).toHaveCount(1);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });

    test('parking.hide_user true renders no map features while the list still works', async ({
        staffPage,
    }) => {
        const { modal } = await openPicker(staffPage, {
            'app.parking.hide_user': true,
        });
        await mapButton(staffPage).click();
        // The map component must be mounted: an unmounted map would also give 0.
        await expect(
            modal.locator('parking-space-map dynamic-map'),
        ).toHaveCount(1);
        await expect(mapHandles(staffPage)).toHaveCount(0);
        // The space is still offered in the list: only the map layer is hidden.
        await modal
            .locator('header button')
            .filter({
                has: staffPage.locator('icon', { hasText: /^\s*list\s*$/ }),
            })
            .click();
        await expect(
            modal.locator('li[space]').filter({ hasText: 'E2E Bay 1' }),
        ).toHaveCount(1);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });

    test('parking.hide_user legacy key app.parkings.hide_user still suppresses features', async ({
        staffPage,
    }) => {
        // app.parking.hide_user is held null by CONTROLS: only the legacy key is
        // set, so the `??` fallback is what hides the features.
        const { modal } = await openPicker(staffPage, {
            'app.parkings.hide_user': true,
        });
        await expect
            .poll(
                () =>
                    staffPage.evaluate(() =>
                        (window as DebugWindow).setting?.(
                            'app.parking.hide_user',
                        ),
                    ),
                {
                    message:
                        'the modern key must be null for the legacy fallback',
                },
            )
            .toBeNull();
        await mapButton(staffPage).click();
        await expect(
            modal.locator('parking-space-map dynamic-map'),
        ).toHaveCount(1);
        await expect(mapHandles(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });
});
