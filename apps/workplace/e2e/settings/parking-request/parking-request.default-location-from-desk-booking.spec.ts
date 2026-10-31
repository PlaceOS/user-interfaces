// Setting: parking.default_location_from_desk_booking (docs/settings/workplace.md; source:
//   apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts).
// Scenarios: false and true.
//
// A browser-only three-building organisation and one synthetic desk booking
// are served by GET routes. When the setting is true the form marks the desk
// booking's building with the desk badge and switches the active building;
// when false the default building remains selected. Nothing is submitted.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    type DebugWindow,
    getOnly,
    organisationRoutes,
    PRESETS,
    prepareSettings,
    REQUEST,
    type Settings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const REGION = 'e2e-request-parking-region';
const BUILDING_A = 'e2e-request-parking-building-a';
const BUILDING_B = 'e2e-request-parking-building-b';
const BUILDING_C = 'e2e-request-parking-building-c';
const LEVEL_A = 'e2e-request-parking-level-a';
const LEVEL_B = 'e2e-request-parking-level-b';
const LEVEL_C = 'e2e-request-parking-level-c';
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
        name: 'E2E Parking Level B',
        display_name: 'E2E Parking Level B',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_C,
        parent_id: BUILDING_C,
        name: 'E2E Parking Level C',
        display_name: 'E2E Parking Level C',
        tags: ['level', 'parking'],
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
    {
        id: BUILDING_C,
        parent_id: REGION,
        name: 'E2E Parking Building C',
        display_name: 'E2E Parking Building C',
        tags: ['building'],
        timezone: 'UTC',
        location: '80,80',
    },
];
const BASE: Settings = {
    ...REQUEST,
    'app.feature_groups': {},
    'app.events.use_bookings': true,
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.basic_user_search': true,
    'app.default_building': BUILDING_A,
    'app.parking.request_shift_options': [PRESETS[0]],
    'app.parking.hide_prefer_toggle': true,
};

async function prepare(page: Page, enabled: boolean) {
    let desk_requests = 0;
    await organisationRoutes(page, {
        prefix: 'e2e-request-parking-',
        region: { id: REGION, name: 'E2E Parking Region' },
        buildings: BUILDINGS,
        levels: LEVELS,
        metadata: false,
        clearSession: ['PLACEOS.booking_form', 'PLACEOS.booking_form_options', 'PLACEOS.booking_form_filters'],
        locale: 'en-AU',
    });
    const fixture = await prepareSettings(page, { 'app.parking.default_location_from_desk_booking': enabled }, {
        base: BASE,
        hidden: 'e2e-request-parking-desk',
        landingRooms: false,
        identity: false,
        locale: null,
        bookings: { types: ['parking'] },
        routes: () =>
            getOnly(
                page,
                (url) =>
                    url.pathname === '/api/staff/v1/bookings' &&
                    url.searchParams.get('type') === 'desk',
                (url) => {
                    desk_requests += 1;
                    const email = url.searchParams.get('email') ?? '';
                    const start =
                        Number(url.searchParams.get('period_start') ?? 0) * 1000;
                    const date = start + 10 * 3600 * 1000;
                    return [
                        {
                            id: 'e2e-request-parking-desk-booking',
                            booking_type: 'desk',
                            user_email: email,
                            user_name: 'Prepared Parking Desk User',
                            booked_by_name: 'Prepared Parking Desk User',
                            asset_id: 'e2e-request-parking-desk',
                            asset_name: 'Prepared Parking Desk',
                            date,
                            date_end: date + 3600 * 1000,
                            duration: 60,
                            status: 'approved',
                            zones: [LEVEL_B, BUILDING_B],
                            zone_id: LEVEL_B,
                            extension_data: {},
                        },
                    ];
                },
            ),
    });
    await page.goto('/#/book/parking-request/form');
    await fixture.ready({
        loading: false,
        keys: ['app.features', 'app.parking.default_location_from_desk_booking'],
    });
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    return { root, deskRequests: () => desk_requests };
}

/**
 * Read-only probe of ParkingRequestFormDetailsComponent. ngOnInit creates the
 * desk-lookup effect (building list, form date, user) and only then applies the
 * preset shift, which sets shift_type and the final form date. Seeing the preset
 * shift with all buildings loaded therefore means the effect exists with its
 * final inputs; a broken gate would send the type=desk GET as soon as it runs.
 */
function formState(page: Page) {
    return page.locator('parking-request-form-details').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | { shift_type?: () => string; building_list?: () => unknown[] }
            | undefined;
        if (!component?.shift_type || !component.building_list) {
            throw new Error('parking request form signals are unavailable');
        }
        return {
            shift: component.shift_type(),
            buildings: component.building_list().length,
        };
    });
}

// With the setting on, building B (the desk booking's building) carries the
// desk badge and is the active row; with it off, the default building A stays
// active and B has no badge.
const SCENARIOS = [
    {
        enabled: false,
        title: 'keeps the default building',
        desk_badges: 0,
        active: 'E2E Parking Building A',
        inactive: 'E2E Parking Building B',
    },
    {
        enabled: true,
        title: 'selects the desk-booking building',
        desk_badges: 1,
        active: 'E2E Parking Building B',
        inactive: 'E2E Parking Building A',
    },
];

for (const scenario of SCENARIOS) {
    test(`parking.default_location_from_desk_booking ${scenario.enabled} ${scenario.title}`, async ({
        staffPage,
    }) => {
        const { root, deskRequests } = await prepare(staffPage, scenario.enabled);
        // Anchor: the form has applied its preset shift with all buildings, so
        // the desk-lookup effect has its final inputs. Only then is the type=desk
        // GET count meaningful: sent for true, never for false.
        await expect
            .poll(() => formState(staffPage), {
                message: 'parking request form initialised (preset shift, 3 buildings)',
            })
            .toEqual({ shift: 'e2e-day', buildings: 3 });
        await expect
            .poll(() => deskRequests() > 0, {
                message: 'desk booking lookup (type=desk GET) sent only when enabled',
            })
            .toBe(scenario.enabled);
        // Location preference rows: one radio per building inside the radiogroup
        // labelled BOOKINGS.PARKING_LOCATION_PREFERENCE ("Location Preference").
        // The form also has a "Request Type" radiogroup, so scope by its name.
        // aria-checked marks the active building (building()?.id === bld.id).
        const rows = root
            .getByRole('radiogroup', { name: 'Location Preference', exact: true })
            .getByRole('radio');
        await expect(rows).toHaveCount(3);
        const row_a = rows.filter({ hasText: 'E2E Parking Building A' });
        const row_b = rows.filter({ hasText: 'E2E Parking Building B' });
        await expect(row_a).toHaveCount(1);
        await expect(row_b).toHaveCount(1);
        await expect(
            row_b.locator('icon', { hasText: /^\s*desk\s*$/ }),
        ).toHaveCount(scenario.desk_badges);
        await expect(rows.filter({ hasText: scenario.active })).toHaveAttribute(
            'aria-checked',
            'true',
        );
        await expect(
            rows.filter({ hasText: scenario.inactive }),
        ).toHaveAttribute('aria-checked', 'false');
        await expect(staffPage.locator('parking-request-success')).toHaveCount(
            0,
        );
        await expect(staffPage).toHaveURL(/#\/book\/parking-request\/form$/);
        // Re-checked after the view settled: still no desk lookup for false.
        expect(deskRequests() > 0, 'desk booking lookup sent only when enabled').toBe(
            scenario.enabled,
        );
    });
}
