// Coverage: 2 unique Settings. Exact keys: app.parking.show_status_details,
// app.parking.show_users.
// Scenarios: 4.
//   1. show_status_details true (show_users false): the free bay shows "free"
//      with the success colour, the assigned bay shows "reserved" with the
//      warning colour.
//   2. show_status_details false (show_users true): no status word, no status
//      colour and no user line on either bay; both bay names remain.
//   3. show_users true (show_status_details true): the assigned bay shows the
//      assigned user's name.
//   4. show_users false (show_status_details true): the assigned bay shows its
//      status but not the user.
// Scope: the Explore parking hover card (explore-parking-info) for two
// synthetic bays. No bay is clicked and nothing is booked.
//
// Source: libs/explore/src/lib/explore-parking-info.component.ts renders
// the status word and colour only while parking.show_status_details (default
// true) is on, and the user line only inside that block while
// parking.show_users (default false) is on. It shows "reserved" when the
// bay's assigned_to equals its user. explore-parking.service.ts
// publishes one hover feature per bay with user = booking user_email ||
// assigned_to. Both keys are set in every scenario so neither relies on its
// default. The user line resolves the name through UserPipe
// (libs/users/src/lib/user.pipe.ts), which is answered by one exact
// synthetic staff record.
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
import * as fs from 'fs';
import { clientId, redirectUriFor } from '../../../../../e2e/support/auth';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
    roleFor,
    staffEmail,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
type DebugWindow = Window & { setting?: (key: string) => unknown };
type NetworkAudit = {
    api: string[];
    local_writes: string[];
    external: string[];
    websocket: string[];
    blockedControl: string[];
    appErrors: string[];
    closing: Promise<void>[];
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const READ_METHODS = ['GET', 'HEAD', 'OPTIONS'];

/** Minimum lifetime the stored browser token must still have. */
const MIN_TOKEN_LIFETIME_MS = 15 * 60_000;

/** Parse a JSON file, or null when it is missing or unreadable. */
function readJson(file: string): Record<string, unknown> | null {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
        return null;
    }
}

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

/** Every synthetic zone and asset id starts with this prefix. */
const PREFIX = 'e2e-parking-tooltip-';
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
const SPACES_TYPE = PREFIX + 'type-_PARKING_SPACES_';
const BULK_METADATA = [
    'bindings',
    'settings',
    'workplace_app',
    'booking_rules',
];
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
const LIST_METADATA = [
    'parking_booking_rules',
    'desk_booking_rules',
    'room_booking_rules',
    'desks',
    'map_regions',
];
/** Locale pinned for the app, so only the two locale names above are read. */
const LOCALE = 'en-US';

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

const PAGE_AUDITS = new WeakMap<Page, NetworkAudit>();

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

async function protectNetwork(page: Page): Promise<NetworkAudit> {
    const existing = PAGE_AUDITS.get(page);
    if (existing) return existing;
    const audit: NetworkAudit = {
        api: [],
        local_writes: [],
        external: [],
        websocket: [],
        blockedControl: [],
        appErrors: [],
        closing: [],
    };
    page.on('pageerror', (error) =>
        audit.appErrors.push(error.name + ': ' + error.message),
    );
    page.on('console', (message) => {
        if (
            message.type() === 'error' &&
            /^(ERROR\b|NG0\d+)/.test(message.text())
        ) {
            audit.appErrors.push(message.text().slice(0, 500));
        }
    });
    await page.context().route('**/*', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (ORIGINS.has(url.origin)) {
            if (!url.pathname.startsWith('/api/')) {
                if (READ_METHODS.includes(request.method())) {
                    return route.fallback();
                }
                audit.local_writes.push(request.method() + ' ' + url.pathname);
                return route.abort('blockedbyclient');
            }
            if (
                request.method() === 'GET' &&
                url.pathname === '/api/engine/v2/users/current'
            ) {
                return route.fallback();
            }
            audit.api.push(request.method() + ' ' + url.pathname + url.search);
            return route.abort('blockedbyclient');
        }
        if (
            request.method() === 'GET' &&
            url.origin === 'https://fonts.googleapis.com' &&
            url.pathname === '/css2'
        ) {
            return route.fulfill({
                status: 200,
                contentType: 'text/css',
                body: '',
            });
        }
        audit.external.push(request.method() + ' ' + url.origin + url.pathname);
        return route.abort('blockedbyclient');
    });
    await page.context().routeWebSocket('**/*', (socket) => {
        const url = new URL(socket.url());
        const app = new URL(APP_URL);
        const local =
            url.host === app.host &&
            url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
        if (
            local &&
            url.pathname === '/' &&
            [...url.searchParams.keys()].join(',') === 'token'
        )
            return;
        if (local && url.pathname === '/api/engine/v2/systems/control') {
            audit.blockedControl.push(url.pathname);
        } else {
            audit.websocket.push(url.pathname);
        }
        audit.closing.push(socket.close());
    });
    PAGE_AUDITS.set(page, audit);
    return audit;
}

async function expectSafe(audit: NetworkAudit) {
    await Promise.all(audit.closing);
    expect(
        audit.api,
        'only synthetic GET API responses, except staff identity',
    ).toEqual([]);
    expect(audit.local_writes, 'no local non-API writes').toEqual([]);
    expect(audit.external, 'no external actions').toEqual([]);
    expect(audit.websocket, 'no live WebSocket bindings').toEqual([]);
    expect(audit.appErrors, 'no application errors').toEqual([]);
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

function watchStaffId(page: Page): Promise<string> {
    return page
        .waitForResponse(
            (response) => {
                const url = new URL(response.url());
                return (
                    ORIGINS.has(url.origin) &&
                    url.pathname === '/api/engine/v2/users/current' &&
                    response.request().method() === 'GET' &&
                    response.ok()
                );
            },
            { timeout: 15_000 },
        )
        .then(async (response) => {
            const user = (await response.json()) as { id?: string };
            return user?.id || '';
        })
        .catch(() => '');
}

async function clearOrganisationCache(page: Page) {
    await page.addInitScript((locale) => {
        localStorage.setItem('APP.locale', locale);
        localStorage.setItem('PLACEOS.locale', locale);
        for (const store of [localStorage, sessionStorage]) {
            for (const key of Object.keys(store)) {
                if (
                    key.startsWith('PLACEOS.org') ||
                    ['PLACEOS.region', 'PLACEOS.building'].includes(key)
                ) {
                    store.removeItem(key);
                }
            }
        }
    }, LOCALE);
}

/** Exact synthetic GET fixtures for the Explore parking level. */
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
                name: 'Tooltip Organisation',
                display_name: 'Tooltip Organisation',
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
                name: 'Tooltip Region',
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
                name: 'Tooltip Building',
                display_name: 'Tooltip Building',
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
                name: 'Tooltip Parking Level',
                display_name: 'Tooltip Parking Level',
                tags: ['level', 'parking'],
                map_id: new URL(MAP_PATH, APP_URL).href,
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
            return {
                [name]: {
                    id,
                    name,
                    details: LIST_METADATA.includes(name) ? [] : {},
                },
            };
        },
    );
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
    // queryParkingSpacesForZones (parking-assets.fn.ts): the two bays
    // for the parking level only.
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
    // Every other hidden asset list (parking users, fleet, desks, lockers) is
    // empty, so no user is denied parking access.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            hiddenAssetQuery(url) &&
            !(
                url.searchParams.get('type_id') === SPACES_TYPE &&
                url.searchParams.get('zone_id') === LEVEL
            ),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && hasParams(url, {}),
        () => [],
    );
    // Level bookings and the user's own parking bookings
    // (explore-parking.service.ts): none, so both bays are available
    // and keep their configured assignment.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url) &&
            parkingQuery(url),
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
    // The level map: a local non-API GET, answered here so no file is needed.
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
        label: 'show_status_details true',
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
    {
        label: 'show_users false',
        show_status_details: true,
        show_users: false,
        status: { a: 'free', b: 'reserved' },
        colour: { a: ['bg-success!'], b: ['bg-warning!'] },
        driver_shown: false,
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
