// Setting: parking.restrict_home_location. Exact key: app.parking.restrict_home_location.
// Coverage: 1 unique setting, 3 scenarios.
// Source: libs/bookings/src/lib/parking.service.ts is_home_location; the scan
//   effect and assignedDeskBuilding in libs/bookings/src/lib/booking-resource.loaders.ts;
//   apps/workplace/src/app/book/parking-flow.component.ts renders the
//   restricted block.
//
// Scenarios:
//   1. true with an assigned desk in the ACTIVE building shows the restriction.
//   2. false with the same assigned desk shows the normal booking form.
//   3. true with the assigned desk in building B while building A is active
//      shows the normal booking form, after both buildings' desk scans ran.
// Preconditions/fixtures: the harness test ('local-only' audit) with the
//   seeded non-admin staff identity read from the app's own
//   GET /api/engine/v2/users/current (no extra identity call).
//   GET-only stubs serve a synthetic region with two buildings (A active via
//   app.default_building) and one level tagged `parking` under A; the hidden
//   `_PARKING_` category with `_PARKING_SPACES_` / `_PARKING_USERS_` /
//   `_PARKING_FLEET_VEHICLES_` types and NO assets, so deny_parking_access stays
//   false; and `GET /api/engine/v2/metadata/<building>/children?name=desks`,
//   which returns one desk carrying `assigned_to` = the current user's email for
//   the chosen building and an empty desk list for the other. Calendar and
//   parking booking lists are empty. Local backend only (assertLocalOnly).
// Expected behaviour: is_home_location() is true only when the setting is on
//   AND the desk building equals the active building; that branch replaces the
//   whole flow with the permission-none image, so parking-flow-form is absent.
//   Otherwise the normal form (parking-flow-form / parking-space-list-field) is
//   rendered. The desk scans are counted per building, so the negative scenario
//   cannot pass because the scan never ran. Nothing is selected or submitted,
//   and the read-only fixture fails the test on any non-GET /api request.
//
// Notes:
// - The restricted image is shared with the deny_parking_access branch, so both
//   the component signals (is_home_location / deny_parking_access) and the
//   parking-flow-form count are asserted alongside the image.
// - ParkingForm.open() waits for the form, which the restricted branch removes,
//   so the restricted scenarios navigate to the page object's own route and wait
//   for placeos-parking-flow instead.
// - assignedDeskBuilding() is reached from an effect that re-runs when the user
//   and the building list arrive, so the desk scans are polled rather than
//   counted once.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { ParkingForm } from '../../../../../e2e/support/parking/parking-form.page';
import {
    BOOKING,
    CONTROLS,
    type DebugWindow,
    ORIGINS,
    organisationRoutes,
    prepareSettings,
    type Settings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'local-only' });

// ------------------------------------------------------------- synthetic org
const REGION = 'e2e-home-region';
const BUILDING_A = 'e2e-home-building-a';
const BUILDING_B = 'e2e-home-building-b';
const LEVEL_A = 'e2e-home-level-a';
const LEVEL_B = 'e2e-home-level-b';
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Home Level A',
        display_name: 'E2E Home Level A',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Home Level B',
        display_name: 'E2E Home Level B',
        tags: ['level'],
    },
];
const BUILDINGS = [
    {
        id: BUILDING_A,
        parent_id: REGION,
        name: 'E2E Home Building A',
        display_name: 'E2E Home Building A',
        tags: ['building'],
        timezone: 'UTC',
        location: '0,0',
    },
    {
        id: BUILDING_B,
        parent_id: REGION,
        name: 'E2E Home Building B',
        display_name: 'E2E Home Building B',
        tags: ['building'],
        timezone: 'UTC',
        location: '40,40',
    },
];

const BASE: Settings = {
    ...BOOKING,
    'app.feature_groups': {},
    'app.events.use_bookings': true,
    'app.default_building': BUILDING_A,
};

/**
 * GET /metadata/<building>/children?name=desks: the source assignedDeskBuilding
 * reads when app.desks.use_assets is false. Only the desk building carries a
 * desk assigned to the current user.
 */
async function deskFixture(
    page: Page,
    desk_building: string,
    user: () => Promise<{ email?: string }>,
    hits: Record<string, number>,
) {
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(
                url.pathname,
            ) &&
            url.searchParams.get('name') === 'desks',
        async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const id = new URL(route.request().url()).pathname.split('/')[5];
            if (Object.hasOwn(hits, id)) hits[id] += 1;
            await expect
                .poll(() => user().then(() => true, () => false), {
                    message: 'the app must read the staff identity',
                })
                .toBe(true);
            const me = await user();
            const details =
                id === desk_building && me?.email
                    ? [
                          {
                              id: 'e2e-home-desk',
                              name: 'E2E Home Desk',
                              map_id: 'e2e-home-desk',
                              bookable: true,
                              assigned_to: me.email,
                              groups: [],
                              features: [],
                              images: [],
                          },
                      ]
                    : [];
            await route.fulfill({
                json: [
                    {
                        zone: { id },
                        metadata: { desks: { name: 'desks', details } },
                    },
                ],
            });
        },
    );
}

async function prepare(page: Page, overrides: Settings, desk_building: string) {
    await organisationRoutes(page, {
        prefix: 'e2e-home-',
        region: { id: REGION, name: 'E2E Parking Region' },
        buildings: BUILDINGS,
        levels: LEVELS,
        clearSession: ['PLACEOS.booking_form', 'PLACEOS.booking_form_options', 'PLACEOS.booking_form_filters'],
        locale: 'en-AU',
    });
    const hits: Record<string, number> = { [BUILDING_A]: 0, [BUILDING_B]: 0 };
    /** _PARKING_USERS_ asset GETs per zone (ParkingService._loadUsers). */
    const users: Record<string, number> = {};
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        controls: CONTROLS,
        hidden: 'e2e-home',
        // No parking spaces and no _PARKING_USERS_ assets: the deny gate stays
        // false, so only the home-location branch can hide the form.
        hiddenAssets: (url) => {
            if (url.searchParams.get('type_id') === 'e2e-home-type-_PARKING_USERS_') {
                const zone = url.searchParams.get('zone_id') ?? '';
                users[zone] = (users[zone] ?? 0) + 1;
            }
            return [];
        },
        landingRooms: false,
        locale: null,
        bookings: { types: ['parking'] },
        booked: true,
        routes: () => deskFixture(page, desk_building, () => fixture.user(), hits),
    });
    const form = new ParkingForm(page);
    return {
        settings: fixture.settings,
        form,
        hits,
        users,
        ready: async () => {
            await expect(page.locator('placeos-parking-flow')).toHaveCount(1);
            await fixture.ready({ loading: false });
        },
    };
}

/**
 * Read the flow's own computed state, so the image cannot be blamed on `deny`.
 *
 * `home_building_id` belongs to the injected ParkingService, not to the flow
 * component. Read that signal through the component's `_parking` reference.
 * This is a read-only probe: it invokes only signal getters. Throws if the
 * component, service or signal is unavailable.
 */
function flowState(page: Page) {
    return page.locator('placeos-parking-flow').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  _parking?: {
                      home_building_id?: () => string | null;
                  };
                  /** BookingFormService of the flow (read-only signal getter). */
                  _state?: {
                      has_assigned_desk?: () => boolean;
                  };
                  is_home_location?: () => boolean;
                  deny_parking_access?: () => boolean;
              }
            | undefined;
        if (!component) {
            throw new Error('parking flow component is unavailable');
        }
        const parking = component._parking;
        if (!parking) {
            throw new Error(
                'parking service is unavailable on the parking flow component',
            );
        }
        if (typeof parking.home_building_id !== 'function') {
            throw new Error(
                'parking service home_building_id signal is unavailable',
            );
        }
        return {
            restricted: component.is_home_location?.() ?? null,
            home: parking.home_building_id(),
            denied: component.deny_parking_access?.() ?? null,
            // null (not false) when the signal is unavailable.
            assigned_desk: component._state?.has_assigned_desk?.() ?? null,
        };
    });
}

function permissionImage(page: Page) {
    return page.locator(
        'placeos-parking-flow img[src="assets/icons/permission-none.svg"]',
    );
}

/** The restricted branch replaces the form, so ParkingForm.open() cannot be used. */
async function openRestricted(
    page: Page,
    overrides: Settings,
    desk_building: string,
) {
    const fixture = await prepare(page, overrides, desk_building);
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    return fixture;
}

test.describe('parking.restrict_home_location', () => {
    test('parking.restrict_home_location true restricts parking at the assigned building', async ({
        staffPage,
    }) => {
        const fixture = await openRestricted(
            staffPage,
            { 'app.parking.restrict_home_location': true },
            BUILDING_A,
        );
        await expect(permissionImage(staffPage)).toHaveCount(1, {
            timeout: 30_000,
        });
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(0);
        await expect
            .poll(async () => (await flowState(staffPage)).home, {
                message:
                    'the desk scan must resolve the active building as home',
            })
            .toBe(BUILDING_A);
        await expect
            .poll(async () => (await flowState(staffPage)).restricted)
            .toBe(true);
        await expect
            .poll(async () => (await flowState(staffPage)).denied)
            .toBe(false);
        await expect.poll(() => fixture.hits[BUILDING_A]).toBeGreaterThan(0);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });

    test('parking.restrict_home_location false keeps the form at the assigned building', async ({
        staffPage,
    }) => {
        const fixture = await prepare(
            staffPage,
            { 'app.parking.restrict_home_location': false },
            BUILDING_A,
        );
        await fixture.form.open();
        await fixture.ready();
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
        await expect(
            staffPage.locator('parking-space-list-field'),
        ).toBeVisible();
        await expect
            .poll(async () => (await flowState(staffPage)).restricted)
            .toBe(false);
        // Anchor: ParkingService runs its users effect and its home-location scan
        // effect on the same active_building change; _loadUsers awaits the type
        // bootstrap before its _PARKING_USERS_ GET, so that GET for building A
        // comes after the scan effect ran for A.
        await expect
            .poll(() => fixture.users[BUILDING_A] ?? 0, {
                message: '_PARKING_USERS_ GET for the active building A',
            })
            .toBeGreaterThan(0);
        // Desk-list requests cannot tell the home-location scan apart: the
        // booking form's has_assigned_desk check calls the same
        // assignedDeskBuilding (same shared in-flight key) and reads A and B on
        // every load, and its resource list also reads A. Check the scan's own
        // result instead, after a positive anchor from that shared lookup:
        // has_assigned_desk() is true only once assignedDeskBuilding resolved to
        // building A, the result a broken gate would apply as home_building_id
        // (the scan effect ran for the final building list and active building
        // before this lookup could start, or shares its in-flight request).
        await expect
            .poll(async () => (await flowState(staffPage)).assigned_desk, {
                message: 'booking form resolved the assigned desk (building A)',
            })
            .toBe(true);
        // Positive evidence only: the desk lists were read (by any caller).
        expect(fixture.hits[BUILDING_A], 'desk list of building A read').toBeGreaterThan(0);
        expect(fixture.hits[BUILDING_B], 'desk list of building B read').toBeGreaterThan(0);
        const state = await flowState(staffPage);
        expect(state.home, 'no home building').toBeNull();
        expect(state.restricted, 'not restricted').toBe(false);
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
        // Re-checked after the view settled: still no home, still the form.
        const settled = await flowState(staffPage);
        expect(settled.home, 'no home building').toBeNull();
        expect(settled.restricted, 'not restricted').toBe(false);
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
    });

    test('parking.restrict_home_location true away from the assigned building keeps the form', async ({
        staffPage,
    }) => {
        // Active building A, assigned desk in B: both desk lists are scanned,
        // so the zero image count below cannot pass because nothing ran.
        const fixture = await openRestricted(
            staffPage,
            { 'app.parking.restrict_home_location': true },
            BUILDING_B,
        );
        await expect(staffPage.locator('parking-flow-form')).toBeVisible({
            timeout: 30_000,
        });
        await expect
            .poll(() => fixture.hits[BUILDING_A], {
                message: 'building A desks must be scanned',
                timeout: 30_000,
            })
            .toBeGreaterThan(0);
        await expect
            .poll(() => fixture.hits[BUILDING_B], {
                message: 'building B desks must be scanned',
                timeout: 30_000,
            })
            .toBeGreaterThan(0);
        await expect
            .poll(async () => (await flowState(staffPage)).home, {
                message: 'home is building B, which is not the active building',
            })
            .toBe(BUILDING_B);
        await expect
            .poll(async () => (await flowState(staffPage)).restricted)
            .toBe(false);
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
        await expect(
            staffPage.locator('parking-space-list-field'),
        ).toBeVisible();
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });
});
