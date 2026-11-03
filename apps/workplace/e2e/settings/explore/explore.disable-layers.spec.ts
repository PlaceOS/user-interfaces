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

test.use({ readOnlyTimezone: 'Etc/UTC' });

const ORG = syntheticOrg('e2e-disable-layers-', { params: 'zones' });
const { PREFIX, ORGANISATION, BUILDING, LEVEL, MAP_PATH, hasParams } = ORG;
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

/** Exact synthetic GET fixtures for one desk level on the Explore map. */
async function syntheticGets(page: Page) {
    await syntheticOrgRoutes(page, ORG, {
        label: 'Disable Layers',
        zone_metadata: ZONE_METADATA,
        // The level's `desks` list holds the one desk.
        zone_details: (id, name) =>
            id === LEVEL && name === 'desks'
                ? DESKS
                : LIST_METADATA.includes(name)
                  ? []
                  : {},
        user_metadata: ['settings', 'contacts'],
        level: { map_id: new URL(MAP_PATH, APP_URL).href },
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
    // Explore level availability, own-day list, or ParkingService's day list.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url, { strict: false }) &&
            ORG.parkingQuery(url, staffEmail(test.info().parallelIndex)),
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
 * by ExploreStateService (explore-state.service.ts). Throws if any signal is
 * unavailable.
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
// every absence below.
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
        await expect(areas).toHaveAttribute('aria-checked', 'false');
        await areas.click();
        await expect(areas).toHaveAttribute('aria-checked', 'true');
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
