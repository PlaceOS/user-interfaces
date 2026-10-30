// Coverage: 3 unique Settings. Exact keys: app.explore.disable_features,
// app.explore.disable_actions, app.explore.disable_styles.
// Scenarios: 6.
//   1. baseline (all three empty): desk hover feature, four desk actions, the
//      desk fill style and, with Areas on, the zones-canvas feature are shown.
//   2. disable_features ['desks']: only the desk hover feature is dropped.
//   3. disable_features 'desks' (comma string): same result as the array form.
//   4. disable_actions ['desks']: only the four desk actions are dropped.
//   5. disable_styles ['desks']: only the desk fill is dropped; the built-in
//      `text: { display: 'none' }` style remains.
//   6. disable_features ['zones']: zones-canvas stays hidden with Areas on.
// Scope: the features/actions/styles the Explore map view receives for one
// synthetic desk. No desk is clicked and nothing is booked.
// Source: libs/explore/src/lib/explore-state.service.ts filters each
// group through _disabledGroups, which merges the live map options
// with app.explore.disable_<type>, accepting an array or a comma string.
// map_features also drops `zones-canvas` while `zones` is disabled; map_styles
// always keeps `text.display = 'none'`. explore-desks.service.ts
// publishes the `desks` feature, action and style groups; explore-zones.service.ts
// registers the `zones-canvas` feature. reset() disables
// `zones` until the Areas toggle (explore-map-view.component.ts)
// turns it on, so every scenario turns Areas on and the zones-canvas result is
// part of every expectation. Each scenario first waits until the raw, unfiltered
// groups hold the desk feature, actions and style, and (after Areas is on) the
// zones-canvas feature, so an absence is never read before the data exists.
//
// Authentication (read-only): the staff bearer comes from settingsStaffToken
// (settings-harness): the token stored for this worker under e2e/.auth while
// the backend accepts it and the storageState the inherited staffPage loads
// holds it with at least 15 minutes left, otherwise a freshly minted one. It
// must belong to this worker's staff address and not be admin/support. The
// admin auth fixture is blocked. A browser token refresh would be a non-GET
// /auth request, which the network policy blocks and reports. The readOnlyTest
// identity guard is unchanged.
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
import { BULK_METADATA, clearOrganisationCache, expectSafe, LIST_METADATA, protectNetwork, type Settings, watchStaffId, guardedStaffTest as test } from '../support/settings-harness';
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone and asset id starts with this prefix. */
const PREFIX = 'e2e-disable-layers-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
const MAP_PATH = '/' + PREFIX + 'map.svg';
const HIDDEN_CATEGORIES = [
    { id: PREFIX + 'catering', name: '_CATERING_', hidden: true },
    { id: PREFIX + 'desks', name: '_DESKS_', hidden: true },
    { id: PREFIX + 'parking', name: '_PARKING_', hidden: true },
    { id: PREFIX + 'lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    [PREFIX + 'catering']: [],
    [PREFIX + 'desks']: ['_DESKS_'],
    [PREFIX + 'parking']: [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    [PREFIX + 'lockers']: ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const HIDDEN_TYPE_IDS = Object.values(HIDDEN_TYPES)
    .flat()
    .map((name) => PREFIX + 'type-' + name);
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
        name: 'Disable Layers Desk',
        map_id: DESK_SHAPE,
        bookable: true,
        assigned_to: '',
        groups: [],
        features: [],
        images: [],
    },
];

// Controls, not covered settings. hide_zones=false shows the Areas toggle;
// desks.enable_maps=true makes the desk actions exist; app.explore.disable is
// empty so it cannot hide a group on its own.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.desks.use_assets': false,
    'app.desks.enable_maps': true,
    'app.explore.show_legend': false,
    'app.explore.legend': [],
    'app.explore.disable': [],
    'app.explore.disable_labels': [],
    'app.explore.hide_zones': false,
    'app.explore.hide_devices': true,
    'app.explore.hide_sensors': true,
    'app.explore.cisco_maps.enabled': false,
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
};

function hasParams(url: URL, expected: Record<string, string>) {
    const keys = [...url.searchParams.keys()].filter(
        (key) =>
            !(
                url.pathname === '/api/engine/v2/zones' &&
                key === 'authority_id'
            ),
    );
    return (
        keys.length === Object.keys(expected).length &&
        Object.entries(expected).every(
            ([key, value]) => url.searchParams.get(key) === value,
        )
    );
}

/** Explore level availability, own-day list, or ParkingService's day list. */
function parkingQuery(url: URL) {
    const period_start = url.searchParams.get('period_start')!;
    const period_end = url.searchParams.get('period_end')!;
    const base = { type: 'parking', period_start, period_end };
    return (
        hasParams(url, base) ||
        hasParams(url, { ...base, zones: LEVEL, rejected: 'false' }) ||
        hasParams(url, {
            ...base,
            email: staffEmail(test.info().parallelIndex),
        })
    );
}

/** Numeric seconds, in increasing order; no malformed period is hidden. */
function validPeriod(url: URL) {
    const start = url.searchParams.get('period_start') ?? '';
    const end = url.searchParams.get('period_end') ?? '';
    return (
        /^\d+$/.test(start) && /^\d+$/.test(end) && Number(end) > Number(start)
    );
}

/** Hidden assets may only be read in this synthetic organisation. */
function hiddenAssetQuery(url: URL) {
    const type_id = url.searchParams.get('type_id') ?? '';
    const zone_id = url.searchParams.get('zone_id') ?? '';
    return (
        HIDDEN_TYPE_IDS.includes(type_id) &&
        ZONES.includes(zone_id) &&
        hasParams(url, { type_id, zone_id, limit: '500' })
    );
}

async function getOnly(
    page: Page,
    match: (url: URL) => boolean,
    body: (url: URL) => unknown,
) {
    await page.route(
        (url) => ORIGINS.has(url.origin) && match(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({ json: body(new URL(route.request().url())) });
        },
    );
}

/** Exact synthetic GET fixtures for one desk level on the Explore map. */
async function syntheticGets(page: Page) {
    const staff_id = watchStaffId(page);
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Disable Layers Organisation',
                display_name: 'Disable Layers Organisation',
                tags: ['org'],
            },
        ],
    );
    await getOnly(
        page,
        (url) => {
            const match = /^\/api\/engine\/v2\/metadata\/([^/]+)\/bulk$/.exec(
                url.pathname,
            );
            const ids = (url.searchParams.get('parent_ids') ?? '').split(',');
            return (
                !!match &&
                BULK_METADATA.includes(match[1]) &&
                url.searchParams.has('parent_ids') &&
                hasParams(url, {
                    parent_ids: url.searchParams.get('parent_ids')!,
                }) &&
                ids.every((id) => ZONES.includes(id))
            );
        },
        (url) =>
            Object.fromEntries(
                url.searchParams
                    .get('parent_ids')!
                    .split(',')
                    .map((id) => [id, { details: {} }]),
            ),
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, {
                tags: 'region',
                parent_id: ORGANISATION,
                limit: '200',
            }),
        () => [
            {
                id: REGION,
                name: 'Disable Layers Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, {
                tags: 'building',
                parent_id: REGION,
                limit: '500',
            }),
        () => [
            {
                id: BUILDING,
                parent_id: REGION,
                name: 'Disable Layers Building',
                display_name: 'Disable Layers Building',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'level', limit: '2500' }),
        () => [
            {
                id: LEVEL,
                parent_id: BUILDING,
                name: 'Disable Layers Level',
                display_name: 'Disable Layers Level',
                tags: ['level'],
                map_id: new URL(MAP_PATH, APP_URL).href,
            },
        ],
    );
    // Named zone metadata. The level's `desks` list holds the one desk.
    await getOnly(
        page,
        (url) => {
            const id = url.pathname.split('/')[5] ?? '';
            const name = url.searchParams.get('name') ?? '';
            return (
                url.pathname === '/api/engine/v2/metadata/' + id &&
                Object.hasOwn(ZONE_METADATA, id) &&
                ZONE_METADATA[id].includes(name) &&
                hasParams(url, { name })
            );
        },
        (url) => {
            const id = url.pathname.split('/')[5];
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    id,
                    name,
                    details:
                        id === LEVEL && name === 'desks'
                            ? DESKS
                            : LIST_METADATA.includes(name)
                              ? []
                              : {},
                },
            };
        },
    );
    // The signed-in user's own metadata, answered only for the id the app's
    // own identity GET returned.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            ['settings', 'contacts'].some((name) => hasParams(url, { name })),
        async (route: Route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.fallback();
            const id = decodeURIComponent(
                new URL(request.url()).pathname.split('/')[5],
            );
            if (!id || id !== (await staff_id)) return route.fallback();
            const name = new URL(request.url()).searchParams.get('name')!;
            await route.fulfill({
                json: {
                    [name]: {
                        name,
                        description: '',
                        details: name === 'contacts' ? [] : {},
                    },
                },
            });
        },
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/groups/current' &&
            hasParams(url, {}),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: ORGANISATION, limit: '5000' }),
        () => [],
    );
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
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            hasParams(url, { hidden: 'true', limit: '500' }),
        () => HIDDEN_CATEGORIES,
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            Object.hasOwn(
                HIDDEN_TYPES,
                url.searchParams.get('category_id') ?? '',
            ) &&
            hasParams(url, {
                category_id: url.searchParams.get('category_id')!,
                limit: '500',
            }),
        (url) =>
            HIDDEN_TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: PREFIX + 'type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' && hiddenAssetQuery(url),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && hasParams(url, {}),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url) &&
            parkingQuery(url),
        () => [],
    );
    await page.route(
        (url) => ORIGINS.has(url.origin) && url.pathname === MAP_PATH,
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({
                contentType: 'image/svg+xml',
                body:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
                    `<rect id="${DESK_SHAPE}" x="80" y="60" width="80" height="60" fill="#aaaaaa"/>` +
                    '</svg>',
            });
        },
    );
}

async function openExplore(page: Page, overrides: Settings) {
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
        'app.explore.disable_features': [],
        'app.explore.disable_actions': [],
        'app.explore.disable_styles': [],
        ...overrides,
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

function layerSettings(page: Page) {
    return page.evaluate(() => {
        const setting = (window as DebugWindow).setting;
        return {
            features: setting?.('app.explore.disable_features'),
            actions: setting?.('app.explore.disable_actions'),
            styles: setting?.('app.explore.disable_styles'),
            disable: setting?.('app.explore.disable'),
        };
    });
}

type MapState = {
    raw: { feature: boolean; actions: number; style: boolean };
    shown: {
        desk_feature: boolean;
        desk_actions: number;
        desk_style: boolean;
        text_display: string;
        zones_canvas: boolean;
    };
    zones_disabled: boolean;
    /** zones-canvas is registered in the unfiltered groups (any group). */
    zones_registered: boolean;
};

/**
 * Read-only probe of the map view's inputs and of the unfiltered groups held
 * by ExploreStateService (explore-state.service.ts). The raw groups
 * prove the desk data exists before a filtered absence is read. Fails closed
 * if any signal is unavailable.
 */
function mapState(page: Page): Promise<MapState> {
    return page.locator('explore-map-view').evaluate(
        (element, desk) => {
            type Group = Record<string, unknown[]>;
            const view = (window as DebugWindow).ng?.getComponent(element) as
                | {
                      features?: () => { track_id?: string }[];
                      actions?: () => { id?: string }[];
                      styles?: () => Record<string, { display?: string }>;
                      options?: () => { disable?: string[] };
                      _state?: {
                          _features?: () => Group;
                          _actions?: () => Group;
                          _styles?: () => Record<string, object>;
                      };
                  }
                | undefined;
            const state = view?._state;
            if (
                !view?.features ||
                !view.actions ||
                !view.styles ||
                !view.options ||
                !state?._features ||
                !state._actions ||
                !state._styles
            ) {
                throw new Error('explore map signals are unavailable');
            }
            const raw_features = (state._features().desks ?? []) as {
                track_id?: string;
            }[];
            const raw_styles = (state._styles().desks ?? {}) as object;
            const tracks = view.features().map((item) => item.track_id ?? '');
            const styles = view.styles();
            return {
                raw: {
                    feature: raw_features.some(
                        (item) => item.track_id === desk.track,
                    ),
                    actions: (state._actions().desks ?? []).length,
                    style: '#' + desk.shape in raw_styles,
                },
                shown: {
                    desk_feature: tracks.includes(desk.track),
                    desk_actions: view
                        .actions()
                        .filter((item) => item.id === desk.shape).length,
                    desk_style: '#' + desk.shape in styles,
                    text_display: styles.text?.display ?? '',
                    zones_canvas: tracks.includes('zones-canvas'),
                },
                zones_disabled: !!view.options().disable?.includes('zones'),
                zones_registered: Object.values(state._features())
                    .flat()
                    .some((item) => (item as { track_id?: string })?.track_id === 'zones-canvas'),
            };
        },
        { track: DESK_TRACK, shape: DESK_SHAPE },
    );
}

const areasToggle = (page: Page) =>
    page
        .locator('explore-map-view settings-toggle')
        .filter({ hasText: 'Areas' })
        .locator('button')
        .first();

const BASELINE = {
    desk_feature: true,
    desk_actions: 4,
    desk_style: true,
    text_display: 'none',
    zones_canvas: true,
};

// Each scenario changes one key; the baseline is the positive control for
// every absence below. Kept as data so the test body has no branches.
const SCENARIOS = [
    {
        label: 'baseline (all empty)',
        overrides: {},
        shown: BASELINE,
    },
    {
        label: "disable_features ['desks']",
        overrides: { 'app.explore.disable_features': ['desks'] },
        shown: { ...BASELINE, desk_feature: false },
    },
    {
        label: "disable_features 'desks' (comma string)",
        overrides: { 'app.explore.disable_features': 'desks' },
        shown: { ...BASELINE, desk_feature: false },
    },
    {
        label: "disable_actions ['desks']",
        overrides: { 'app.explore.disable_actions': ['desks'] },
        shown: { ...BASELINE, desk_actions: 0 },
    },
    {
        label: "disable_styles ['desks']",
        overrides: { 'app.explore.disable_styles': ['desks'] },
        shown: { ...BASELINE, desk_style: false },
    },
    {
        label: "disable_features ['zones']",
        overrides: { 'app.explore.disable_features': ['zones'] },
        shown: { ...BASELINE, zones_canvas: false },
    },
];

for (const scenario of SCENARIOS) {
    test(`explore.${scenario.label} filters the Explore map groups`, async ({
        staffPage,
    }) => {
        const audit = await openExplore(staffPage, scenario.overrides);
        await expect
            .poll(() => layerSettings(staffPage), {
                message: 'effective explore layer settings',
            })
            .toStrictEqual({
                features: [],
                actions: [],
                styles: [],
                disable: [],
                ...Object.fromEntries(
                    Object.entries(scenario.overrides).map(([key, value]) => [
                        key.replace('app.explore.disable_', ''),
                        value,
                    ]),
                ),
            });
        // Raw desk groups first: one feature, four actions and one style.
        await expect
            .poll(async () => (await mapState(staffPage)).raw, {
                message: 'unfiltered desk feature, actions and style',
            })
            .toStrictEqual({ feature: true, actions: 4, style: true });
        // Turn Areas on, so `zones` leaves the live disabled options.
        const areas = areasToggle(staffPage);
        await expect(areas).toHaveCount(1);
        await expect(areas).toHaveClass(/border-base-300/);
        await areas.click();
        await expect(areas).toHaveClass(/border-info/);
        await expect
            .poll(async () => (await mapState(staffPage)).zones_disabled, {
                message: 'Areas toggle removed zones from the map options',
            })
            .toBe(false);
        // The zones layer must exist before its presence or absence is read.
        await expect
            .poll(async () => (await mapState(staffPage)).zones_registered, {
                message: 'zones-canvas registered in the unfiltered groups',
            })
            .toBe(true);
        await expect
            .poll(async () => (await mapState(staffPage)).shown, {
                message: 'groups the map view receives',
            })
            .toStrictEqual(scenario.shown);
        await expectSafe(audit);
    });
}
