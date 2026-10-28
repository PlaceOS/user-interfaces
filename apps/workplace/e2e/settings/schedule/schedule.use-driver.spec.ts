// Coverage: 1 unique Setting. Exact key: app.schedule.use_driver.
// Scenarios: 2. use_driver true selects the `driver` source; false falls back
// to the `api` source.
// Scope: which schedule event source is selected and whether
// /staff/v1/events is requested. The driver's LocationServices data is not
// asserted: the synthetic organisation has no location_services binding, so
// the driver loader resolves an empty list without any request.
// Docs: docs/settings/workplace.md.
//
// Source: schedule-state.service.ts uses the legacy flags only while
// app.schedule.event_sources is empty: use_driver -> 'driver', otherwise
// use_websocket -> 'ws', otherwise 'api'. The `driver` loader calls
// the location_services module only; the `api` loader requests
// /staff/v1/events because events.use_bookings is false. event_sources is set
// to [] explicitly so the fallback is always the branch under test, and
// use_websocket is pinned false so the fallback is `api` when use_driver is
// false.
//
// Authentication (fail-closed, read-only): the staff bearer is the one already
// stored for this worker under e2e/.auth. The storageState file the inherited
// staffPage loads must hold that same token with at least 15 minutes left, and
// the token is checked with one GET /api/engine/v2/users/current: it must
// belong to this worker's staff address and not be admin/support. This spec
// never mints, refreshes or writes auth files and never changes token expiry;
// any failure stops the worker. The admin auth fixture is blocked. A browser
// token refresh would be a non-GET /auth request, which the network policy
// blocks and reports. The readOnlyTest identity guard is unchanged.
// Run with --no-deps: the local project's preflight dependency seeds shared
// rows through backend writes (e2e/support/preflight.setup.ts).
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import { request as pwRequest, type Page, type Route } from '@playwright/test';
import { clientId, redirectUriFor } from '../../../../../e2e/support/auth';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
    roleFor,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';
import { BULK_METADATA, clearOrganisationCache, expectSafe, type NetworkAudit, protectNetwork, readJson, type Settings, watchStaffId } from '../support/settings-harness';
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

/** Minimum lifetime the stored browser token must still have. */
const MIN_TOKEN_LIFETIME_MS = 15 * 60_000;

/**
 * The staff bearer already stored for this worker, checked read-only. Never
 * mints, refreshes or writes: every failure throws, so the worker stops before
 * any browser opens. The inherited staffPage fixture loads the storageState
 * file checked here (e2e/support/fixtures.ts), so it must hold this same
 * token for the app origin with an expiry far enough ahead that the app never
 * attempts a refresh mid-test.
 */
async function storedStaffToken(workerIndex: number): Promise<string> {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const { email, tokenPath, storagePath } = roleFor('staff', workerIndex);
    const rerun =
        'Refresh e2e/.auth with a separate normal local run (its fixtures mint), then retry this spec with --no-deps.';
    const token = readJson(tokenPath)?.accessToken;
    if (typeof token !== 'string' || !token) {
        throw new Error(
            `Missing or unreadable staff token for worker ${workerIndex}. ${rerun}`,
        );
    }
    const cid = clientId(redirectUriFor(APP_URL));
    const origins = readJson(storagePath)?.origins;
    const app = Array.isArray(origins)
        ? (origins as { origin?: string; localStorage?: unknown }[]).find(
              (entry) => entry.origin === new URL(APP_URL).origin,
          )
        : undefined;
    const items = Array.isArray(app?.localStorage)
        ? (app?.localStorage as { name?: string; value?: string }[])
        : [];
    const stored = new Map(items.map((item) => [item.name, item.value]));
    if (stored.get(cid + '_access_token') !== token) {
        throw new Error(
            `Staff storageState for worker ${workerIndex} does not hold the stored token. ${rerun}`,
        );
    }
    const expires_at = Number(stored.get(cid + '_expires_at'));
    if (!(expires_at > Date.now() + MIN_TOKEN_LIFETIME_MS)) {
        throw new Error(
            `Stored staff token for worker ${workerIndex} expires too soon. ${rerun}`,
        );
    }
    const api = await pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
    try {
        const response = await api.get('/api/engine/v2/users/current');
        if (!response.ok()) {
            throw new Error(
                `Stored staff token rejected (HTTP ${response.status()}). ${rerun}`,
            );
        }
        const user = (await response.json()) as {
            email?: string;
            sys_admin?: boolean;
            support?: boolean;
        };
        if (user.email?.toLowerCase() !== email.toLowerCase()) {
            throw new Error(`Stored staff token is not ${email}. ${rerun}`);
        }
        if (user.sys_admin || user.support) {
            throw new Error(`${email} is admin/support; staff-only scenario.`);
        }
    } finally {
        await api.dispose();
    }
    return token;
}

// Fail-closed, read-only staff auth (no tokenFor mint/refresh fallback).
// Browser audits always run in teardown, including on an assertion failure.
const test = readOnlyTest.extend<{ batchAudit: NetworkAudit }>({
    batchAudit: [
        async ({ staffPage }, use) => {
            const audit = await protectNetwork(staffPage);
            try {
                await use(audit);
            } finally {
                // Stop all loaders and sockets before the final audit snapshot.
                await staffPage.context().close();
                await expectSafe(audit);
            }
        },
        { auto: true, timeout: 15_000 },
    ],
    staffToken: [
        async ({}, use, info) => {
            await use(await storedStaffToken(info.parallelIndex));
        },
        { scope: 'worker' },
    ],
    // The inherited admin fixture mints (e2e/support/fixtures.ts).
    // readOnlyTest never requests it; fail closed if anything ever does.
    adminStorageState: [
        async () => {
            throw new Error(
                'Admin auth is not allowed in this read-only spec.',
            );
        },
        { scope: 'worker' },
    ],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone id starts with this prefix. */
const PREFIX = 'e2e-schedule-driver-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
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
// Exact single-zone metadata names: the organisation's translation overrides
// for the pinned and the default locale (locale.service.ts).
const ZONE_METADATA: Record<string, string[]> = {
    [ORGANISATION]: ['locale_en-AU', 'locale_en-US'],
};
// Controls, not covered settings. global_search and chat keep the topbar's
// loaders off; has_assets=false is the AssetStateService network gate;
// auto_release.resources=[] keeps _checkCancel from querying bookings
// (schedule-state.service.ts).
const CONTROLS: Settings = {
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.has_assets': false,
    'app.auto_release': { resources: [] },
};

/**
 * True when the URL carries exactly the expected query parameters. The API
 * client may add `authority_id` to zone queries, which is the only extra key
 * accepted.
 */
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

/** Exact synthetic GET fixtures for the schedule page. */
async function syntheticGets(page: Page): Promise<() => number> {
    const staff_id = watchStaffId(page);
    let event_requests = 0;
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Schedule Driver Organisation',
                display_name: 'Schedule Driver Organisation',
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
                name: 'Schedule Driver Region',
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
                name: 'Schedule Driver Building',
                display_name: 'Schedule Driver Building',
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
                name: 'Schedule Driver Level',
                display_name: 'Schedule Driver Level',
                tags: ['level'],
            },
        ],
    );
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
            return { [name]: { id, name, details: {} } };
        },
    );
    // The signed-in user's personal settings, answered only for the id the
    // app's own identity GET returned.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            hasParams(url, { name: 'settings' }),
        async (route: Route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.fallback();
            const id = decodeURIComponent(
                new URL(request.url()).pathname.split('/')[5],
            );
            if (!id || id !== (await staff_id)) return route.fallback();
            await route.fulfill({
                json: {
                    settings: {
                        name: 'settings',
                        description: '',
                        details: {},
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
    // SpacesService.loadSpaces: every system in the organisation.
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
    // The `api` loader's queryEvents (events.use_bookings is false). Counted:
    // only the `api` source issues it.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/events' &&
            validPeriod(url) &&
            hasParams(url, {
                period_start: url.searchParams.get('period_start')!,
                period_end: url.searchParams.get('period_end')!,
            }),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            event_requests += 1;
            await route.fulfill({ json: [] });
        },
    );
    return () => event_requests;
}

function scheduleSettings(use_driver: boolean): Settings {
    return {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.events.use_bookings': false,
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        // Empty, so the legacy fallback is the branch under test.
        'app.schedule.event_sources': [],
        'app.schedule.use_websocket': false,
        'app.schedule.use_driver': use_driver,
    };
}

async function openSchedule(page: Page, use_driver: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, scheduleSettings(use_driver));
    const events = await syntheticGets(page);
    await page.goto('/#/your-bookings?view=day');
    await expect(page.locator('app-schedule')).toBeVisible({
        timeout: 30_000,
    });
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    return { audit, events };
}

/** The effective values of the keys that decide the event source. */
function sourceSettings(page: Page) {
    return page.evaluate(() => {
        const setting = (window as DebugWindow).setting;
        return {
            event_sources: setting?.('app.schedule.event_sources'),
            use_driver: setting?.('app.schedule.use_driver'),
            use_websocket: setting?.('app.schedule.use_websocket'),
        };
    });
}

type ScheduleSourceState = { sources: string[]; query_ready: boolean };

/**
 * Read-only probe of ScheduleStateService through the app-schedule
 * component's `_state` (schedule-state.service.ts).
 * GET /api/staff/v1/events is issued only by `_loadApiEvents`, which runs once
 * `_query_params_debounced` has a value and returns early unless the sources
 * include `api`. Absence is therefore read from this state, not from waiting.
 * Fails closed if the signals are unavailable.
 */
function scheduleSourceState(page: Page): Promise<ScheduleSourceState> {
    return page.locator('app-schedule').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  _state?: {
                      _event_sources?: () => string[];
                      _query_params_debounced?: { value: () => unknown };
                  };
              }
            | undefined;
        const state = component?._state;
        if (!state?._event_sources || !state._query_params_debounced) {
            throw new Error('schedule state signals are unavailable');
        }
        return {
            sources: [...state._event_sources()],
            query_ready: !!state._query_params_debounced.value(),
        };
    });
}

// The `api` scenario is the positive control for the `driver` scenario: the
// same probe, and the events request does arrive. Kept as data so the test
// body has no branches.
const SCENARIOS = [
    {
        use_driver: true,
        source: 'driver',
        events: false,
        message: 'the driver source must not request /staff/v1/events',
    },
    {
        use_driver: false,
        source: 'api',
        events: true,
        message: 'the api fallback must request /staff/v1/events',
    },
];

for (const scenario of SCENARIOS) {
    test(`schedule.use_driver ${scenario.use_driver} selects the ${scenario.source} event source`, async ({
        staffPage,
    }) => {
        const { audit, events } = await openSchedule(
            staffPage,
            scenario.use_driver,
        );
        await expect
            .poll(() => sourceSettings(staffPage), {
                message: 'effective schedule source settings',
            })
            .toStrictEqual({
                event_sources: [],
                use_driver: scenario.use_driver,
                use_websocket: false,
            });
        await expect
            .poll(() => scheduleSourceState(staffPage), {
                message: 'schedule event sources and debounced query',
            })
            .toEqual({ sources: [scenario.source], query_ready: true });
        await expect
            .poll(() => events() > 0, { message: scenario.message })
            .toBe(scenario.events);
        await expect(staffPage.locator('schedule-day-view')).toBeVisible();
        await expect(staffPage.locator('schedule-success')).toHaveCount(0);
        // Re-checked after the view settled: still no request for `driver`.
        expect(events() > 0, scenario.message).toBe(scenario.events);
        await expectSafe(audit);
    });
}
