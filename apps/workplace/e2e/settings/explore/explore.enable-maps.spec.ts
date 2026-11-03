// Coverage: 2 unique Settings. Exact keys: app.desks.enable_maps,
// app.parking.enable_maps.
// Scenarios: 4.
//   1. desks.enable_maps false: the desk hover feature stays, no desk action.
//   2. desks.enable_maps true: the same desk publishes four click actions.
//   3. parking.enable_maps false: the bay hover card stays, no parking action.
//   4. parking.enable_maps true: the free bay publishes one click action.
// Scope: the features/actions the Explore map view receives. No overlay is
// clicked, no booking form is opened and nothing is booked.
// Docs: docs/settings/workplace.md.
//
// Source: libs/explore/src/lib/explore-desks.service.ts always
// publishes `desk:hover:<map_id>` features and publishes four actions per
// bookable desk (mousedown, touchstart, mouseup, touchend) only while
// app.desks.enable_maps !== false. explore-parking.service.ts
// always publishes one hover feature per bay and one action per available bay
// only while app.parking.enable_maps !== false. The desk scenarios use a level
// without the `parking` tag and the parking scenarios a level with it and no
// desks, so the two action groups cannot be confused.
//
// Authentication: guardedStaffTest (settings-harness).
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page, Route } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly, staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
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
type MapView = {
    features(): { track_id?: string }[];
    actions(): { id?: string; action?: string }[];
};

test.use({ readOnlyTimezone: 'Etc/UTC' });

type Mode = 'desk' | 'parking';

const ORG = syntheticOrg('e2e-enable-maps-', { params: 'zones' });
const { PREFIX, ORGANISATION, BUILDING, LEVEL, MAP_PATH, hasParams } = ORG;
const SPACES_TYPE = PREFIX + 'type-_PARKING_SPACES_';
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

const DESK_SHAPE = PREFIX + 'desk-shape';
const DESK_TRACK = 'desk:hover:' + DESK_SHAPE;
const DESKS = [
    {
        id: PREFIX + 'desk',
        name: 'Enable Maps Desk',
        map_id: DESK_SHAPE,
        bookable: true,
        assigned_to: '',
        groups: [],
        features: [],
        images: [],
    },
];
const BAY = {
    id: PREFIX + 'bay',
    name: 'Enable Maps Bay',
    shape: PREFIX + 'bay-shape',
};
const SPACES = [
    {
        id: BAY.id,
        identifier: BAY.name,
        name: BAY.name,
        zone_id: LEVEL,
        map_id: BAY.shape,
        bookable: true,
        assigned_to: '',
    },
];

// Controls, not covered settings. show_status_details is pinned true so the
// bay hover card shows "free" whichever enable_maps value is under test.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.desks.use_assets': false,
    'app.parking.show_status_details': true,
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

async function syntheticGets(page: Page, mode: Mode) {
    let desk_list_requests = 0;
    await syntheticOrgRoutes(page, ORG, {
        label: 'Enable Maps',
        zone_metadata: ZONE_METADATA,
        // The level's `desks` list holds the one desk in the desk scenarios
        // and is empty in the parking scenarios.
        zone_details: (id, name) => {
            const desks = id === LEVEL && name === 'desks';
            desk_list_requests += Number(desks);
            return desks && mode === 'desk'
                ? DESKS
                : LIST_METADATA.includes(name)
                  ? []
                  : {};
        },
        user_metadata: ['settings', 'contacts'],
        level: {
            tags: mode === 'parking' ? ['level', 'parking'] : ['level'],
            map_id: new URL(MAP_PATH, APP_URL).href,
        },
    });
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            [ORGANISATION, LEVEL].some((zone_id) =>
                hasParams(url, { zone_id, limit: '50' }),
            ),
        () => [],
    );
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
    // Only the parking scenarios' level returns the bay (parking-assets.fn.ts);
    // syntheticOrgRoutes answers every other hidden asset list with [].
    if (mode === 'parking')
        await getOnly(
            page,
            (url) =>
                url.pathname === '/api/engine/v2/assets' &&
                ORG.hiddenAssetQuery(url) &&
                hasParams(url, {
                    zone_id: LEVEL,
                    type_id: SPACES_TYPE,
                    limit: '500',
                }),
            () => SPACES,
        );
    // Level and user parking bookings: none, so the bay is available.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url, { strict: false }) &&
            ORG.parkingQuery(url, staffEmail(test.info().parallelIndex)),
        () => [],
    );
    const shape = mode === 'parking' ? BAY.shape : DESK_SHAPE;
    await page.route(
        (url) => ORIGINS.has(url.origin) && url.pathname === MAP_PATH,
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({
                contentType: 'image/svg+xml',
                body:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
                    `<rect id="${shape}" x="80" y="60" width="80" height="60" fill="#aaaaaa"/>` +
                    '</svg>',
            });
        },
    );
    return () => desk_list_requests;
}

async function openExplore(page: Page, mode: Mode, overrides: Settings) {
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
        ...overrides,
    });
    const deskLists = await syntheticGets(page, mode);
    await page.goto('/#/explore');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    return { audit, deskLists };
}

function setting(page: Page, key: string) {
    return page.evaluate(
        (name) => (window as DebugWindow).setting?.(name),
        key,
    );
}

/** Read-only probe of the map view's inputs. Throws if unavailable. */
function mapState(page: Page) {
    return page.locator('explore-map-view').evaluate((element) => {
        const view = (window as DebugWindow).ng?.getComponent(element) as
            | MapView
            | undefined;
        if (!view?.features || !view.actions) {
            throw new Error('explore-map-view signals are unavailable');
        }
        return {
            tracks: view.features().map((feature) => feature.track_id ?? ''),
            actions: view.actions().map((action) => action.id ?? ''),
        };
    });
}

const bayCard = (page: Page) =>
    page
        .locator('explore-map-view div.map-overlay-hover explore-parking-info')
        .filter({ hasText: BAY.name });

// Each enabled scenario is the positive control for its disabled one: the
// same fixture, the same probe, and the actions do arrive.
// Desk actions are counted: the source fixes four events per bookable desk,
// not the action ids.
const DESK_SCENARIOS = [
    { enabled: false, actions: 0 },
    { enabled: true, actions: 4 },
];
const PARKING_SCENARIOS = [
    { enabled: false, actions: [] as string[] },
    { enabled: true, actions: [BAY.shape] },
];

for (const scenario of DESK_SCENARIOS) {
    test(`desks.enable_maps ${scenario.enabled} publishes ${scenario.actions} desk map actions`, async ({
        staffPage,
    }) => {
        const { audit, deskLists } = await openExplore(staffPage, 'desk', {
            'app.desks.enable_maps': scenario.enabled,
        });
        await expect
            .poll(() => setting(staffPage, 'app.desks.enable_maps'), {
                message: 'effective app.desks.enable_maps',
            })
            .toBe(scenario.enabled);
        await expect
            .poll(deskLists, { message: 'desk list read from level metadata' })
            .toBeGreaterThan(0);
        // The hover feature is published either way; once it is there the
        // action list for the same desk has been computed.
        await expect
            .poll(
                async () => {
                    const state = await mapState(staffPage);
                    return {
                        hover: state.tracks.includes(DESK_TRACK),
                        actions: state.actions.length,
                    };
                },
                { message: 'desk hover feature and desk action count' },
            )
            .toEqual({ hover: true, actions: scenario.actions });
        await expectSafe(audit);
    });
}

for (const scenario of PARKING_SCENARIOS) {
    test(`parking.enable_maps ${scenario.enabled} publishes ${scenario.actions.length} parking map actions`, async ({
        staffPage,
    }) => {
        const { audit } = await openExplore(staffPage, 'parking', {
            'app.parking.enable_maps': scenario.enabled,
        });
        await expect
            .poll(() => setting(staffPage, 'app.parking.enable_maps'), {
                message: 'effective app.parking.enable_maps',
            })
            .toBe(scenario.enabled);
        await expect(bayCard(staffPage), 'bay hover card').toHaveCount(1);
        await expect(bayCard(staffPage)).toContainText('free');
        await expect
            .poll(async () => (await mapState(staffPage)).actions, {
                message: 'parking map actions',
            })
            .toEqual(scenario.actions);
        await expectSafe(audit);
    });
}
