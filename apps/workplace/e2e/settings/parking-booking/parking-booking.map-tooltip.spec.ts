// Coverage: 2 unique Settings. Exact keys: app.parking.show_status_details,
// app.parking.show_users.
// Scenarios: 3.
//   1. show_status_details true, show_users false: the free bay shows "free"
//      with the success colour, the assigned bay shows "reserved" with the
//      warning colour, and no user name.
//   2. show_status_details false (show_users true): no status word, no status
//      colour and no user line on either bay; both bay names remain.
//   3. show_users true (show_status_details true): the assigned bay shows the
//      assigned user's name.
// Scope: the Explore parking hover card (explore-parking-info) for two
// synthetic bays. No bay is clicked and nothing is booked.
//
// Source: libs/explore/src/lib/explore-parking-info.component.ts renders
// the status word and colour only while parking.show_status_details (default
// true) is on, and the user line only inside that block while
// parking.show_users (default false) is on. It shows "reserved" when the
// bay's assigned_to equals its user. explore-parking.service.ts
// publishes one hover feature per bay with user = booking user_email ||
// assigned_to. Both keys are set in every scenario. The user line resolves the name through UserPipe
// (libs/users/src/lib/user.pipe.ts), which is answered by one exact
// synthetic staff record.
//
// Authentication: guardedStaffTest (settings-harness).
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page, Route } from '@playwright/test';
import { APP_URL, BACKEND_URL, assertLocalOnly, staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    clearOrganisationCache,
    type DebugWindow,
    expectSafe,
    getOnly,
    LIST_METADATA,
    ORIGINS,
    protectNetwork,
    type Settings,
    syntheticOrg,
    syntheticOrgRoutes,
    guardedStaffTest as test,
    validPeriod,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const ORG = syntheticOrg('e2e-parking-tooltip-', { params: 'zones' });
const { PREFIX, ORGANISATION, BUILDING, LEVEL, MAP_PATH, hasParams } = ORG;
const SPACES_TYPE = PREFIX + 'type-_PARKING_SPACES_';
// Exact single-zone metadata names: booking rules per resource type on the
// building (explore-booking-rules.ts), the level's desk list and map
// regions, and organisation translation, room-alert and POI metadata.
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: [
        'parking_booking_rules',
        'desk_booking_rules',
        'room_booking_rules',
    ],
    [LEVEL]: ['desks', 'map_regions'],
    [ORGANISATION]: [
        'locale_en-AU',
        'locale_en-US',
        'room_alerts',
        'points-of-interest',
    ],
};

const BAY_A = {
    id: PREFIX + 'bay-a',
    name: 'Tooltip Bay A',
    shape: PREFIX + 'bay-a-shape',
};
const BAY_B = {
    id: PREFIX + 'bay-b',
    name: 'Tooltip Bay B',
    shape: PREFIX + 'bay-b-shape',
};
const DRIVER = {
    email: 'tooltip-driver@example.invalid',
    name: 'Tooltip Driver',
};
const SPACES = [
    {
        id: BAY_A.id,
        identifier: BAY_A.name,
        name: BAY_A.name,
        zone_id: LEVEL,
        map_id: BAY_A.shape,
        bookable: true,
        assigned_to: '',
    },
    {
        id: BAY_B.id,
        identifier: BAY_B.name,
        name: BAY_B.name,
        zone_id: LEVEL,
        map_id: BAY_B.shape,
        bookable: true,
        assigned_to: DRIVER.email,
    },
];

// Controls, not covered settings: everything else on the Explore map is held
// off so only the parking hover cards vary.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.desks.use_assets': false,
    'app.explore.show_legend': false,
    'app.explore.legend': [],
    'app.explore.disable': [],
    'app.explore.disable_features': [],
    'app.explore.disable_actions': [],
    'app.explore.disable_styles': [],
    'app.explore.hide_zones': true,
    'app.explore.hide_devices': true,
    'app.explore.hide_sensors': true,
    'app.explore.cisco_maps.enabled': false,
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
};

async function syntheticGets(page: Page) {
    await syntheticOrgRoutes(page, ORG, {
        label: 'Tooltip Parking',
        zone_metadata: ZONE_METADATA,
        zone_details: (_id, name) => (LIST_METADATA.includes(name) ? [] : {}),
        user_metadata: ['settings', 'contacts'],
        level: {
            tags: ['level', 'parking'],
            map_id: new URL(MAP_PATH, APP_URL).href,
        },
    });
    // LandingStateService loads the active building's rooms even on Explore.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => [],
    );
    // Rooms on the parking level: none.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            [ORGANISATION, LEVEL].some((zone_id) =>
                hasParams(url, { zone_id, limit: '50' }),
            ),
        () => [],
    );
    // queryParkingSpacesForZones (parking-assets.fn.ts): the two bays for the
    // parking level only. syntheticOrgRoutes answers every other hidden asset
    // list (parking users, fleet, desks, lockers) with [], so no user is
    // denied parking access.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            hasParams(url, {
                zone_id: LEVEL,
                type_id: SPACES_TYPE,
                limit: '500',
            }),
        () => SPACES,
    );
    // Level bookings and the user's own parking bookings
    // (explore-parking.service.ts): none, so both bays are available
    // and keep their configured assignment.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url, { strict: false }) &&
            ORG.parkingQuery(url, staffEmail(test.info().parallelIndex)),
        () => [],
    );
    // UserPipe -> showStaff for the assigned address only.
    await getOnly(
        page,
        (url) =>
            decodeURIComponent(url.pathname) ===
                '/api/staff/v1/people/' + DRIVER.email && hasParams(url, {}),
        () => ({
            id: DRIVER.email,
            email: DRIVER.email,
            name: DRIVER.name,
        }),
    );
    // The level map: a local non-API GET.
    await page.route(
        (url) => ORIGINS.has(url.origin) && url.pathname === MAP_PATH,
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({
                contentType: 'image/svg+xml',
                body:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
                    `<rect id="${BAY_A.shape}" x="40" y="40" width="60" height="40" fill="#aaaaaa"/>` +
                    `<rect id="${BAY_B.shape}" x="140" y="40" width="60" height="40" fill="#aaaaaa"/>` +
                    '</svg>',
            });
        },
    );
}

type Scenario = {
    label: string;
    show_status_details: boolean;
    show_users: boolean;
    /** Expected status word per bay, or '' when no status is rendered. */
    status: { a: string; b: string };
    /** Expected status colour classes per bay; empty when none is applied. */
    colour: { a: string[]; b: string[] };
    driver_shown: boolean;
};

async function openExplore(page: Page, scenario: Scenario) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await clearOrganisationCache(page);
    await useSettings(page, {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['explore'],
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.parking.show_status_details': scenario.show_status_details,
        'app.parking.show_users': scenario.show_users,
    });
    await syntheticGets(page);
    await page.goto('/#/explore');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    return audit;
}

function tooltipSettings(page: Page) {
    return page.evaluate(() => {
        const setting = (window as DebugWindow).setting;
        return {
            show_status_details: setting?.('app.parking.show_status_details'),
            show_users: setting?.('app.parking.show_users'),
        };
    });
}

/** The hover card panel of one bay. Its contents stay in the DOM. */
const panel = (page: Page, name: string) =>
    page
        .locator('explore-map-view div.map-overlay-hover explore-parking-info')
        .filter({ hasText: name })
        .locator(':scope > div');

/** The status background classes applied to a card (Tailwind `bg-*!`). */
function statusColours(card: ReturnType<typeof panel>) {
    return card.evaluate((element) =>
        [...element.classList].filter((name) =>
            /^bg-(success|warning|error|neutral)!?$/.test(name),
        ),
    );
}

const SCENARIOS: Scenario[] = [
    {
        label: 'show_status_details true with show_users false',
        show_status_details: true,
        show_users: false,
        status: { a: 'free', b: 'reserved' },
        colour: { a: ['bg-success!'], b: ['bg-warning!'] },
        driver_shown: false,
    },
    {
        label: 'show_status_details false',
        show_status_details: false,
        show_users: true,
        status: { a: '', b: '' },
        colour: { a: [], b: [] },
        driver_shown: false,
    },
    {
        label: 'show_users true',
        show_status_details: true,
        show_users: true,
        status: { a: 'free', b: 'reserved' },
        colour: { a: ['bg-success!'], b: ['bg-warning!'] },
        driver_shown: true,
    },
];

for (const scenario of SCENARIOS) {
    test(`parking.${scenario.label} sets the Explore parking hover card contents`, async ({
        staffPage,
    }) => {
        const audit = await openExplore(staffPage, scenario);
        await expect
            .poll(() => tooltipSettings(staffPage), {
                message: 'effective parking hover card settings',
            })
            .toStrictEqual({
                show_status_details: scenario.show_status_details,
                show_users: scenario.show_users,
            });
        const a = panel(staffPage, BAY_A.name);
        const b = panel(staffPage, BAY_B.name);
        await expect(a, 'the free bay hover card').toHaveCount(1);
        await expect(b, 'the assigned bay hover card').toHaveCount(1);
        // Status word: the second line of the name column, or absent.
        for (const [card, word] of [
            [a, scenario.status.a],
            [b, scenario.status.b],
        ] as const) {
            await expect(card.locator('div.capitalize')).toHaveText(
                word ? [word] : [],
            );
        }
        await expect
            .poll(
                async () => ({
                    a: await statusColours(a),
                    b: await statusColours(b),
                }),
                { message: 'status colour classes per bay' },
            )
            .toStrictEqual(scenario.colour);
        await expect(b.getByText(DRIVER.name, { exact: true })).toHaveCount(
            Number(scenario.driver_shown),
        );
        await expect(a.getByText(DRIVER.name, { exact: true })).toHaveCount(0);
        // Once the name resolves, the raw address is never left on the card.
        await expect(b).not.toContainText(DRIVER.email);
        await expectSafe(audit);
    });
}
