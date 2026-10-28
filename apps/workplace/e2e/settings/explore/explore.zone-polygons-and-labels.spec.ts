/**
 * User-owned Settings coverage: 3 unique Settings / 6 scenarios.
 * Exact Setting keys:
 *   explore.use_zone_polygons
 *   explore.show_zone_labels
 *   explore.disable_labels
 * Status: NOT EXECUTED
 *
 * Two independent contexts per Setting: true/false polygons; true/false zone
 * labels; []/['zones'] disabled labels. Only this spec owns these fixtures.
 * Source contracts:
 * - explore-zones.service.ts: init reads map_regions.details.areas; hide_label
 *   must be false; draw_polygon OR use_zone_polygons selects the polygon path.
 *   _bindToLevel reads AreaManagement <level>:areas and <level>; parseData
 *   excludes room-backed areas and publishes zones labels and zones-styles.
 * - explore-desks.service.ts also binds <level> and <level>:desk_bookings.
 * - OrganisationService.module resolves bindings.area_management.id/mod.
 * - ExploreStateService._disabledGroups merges explore.disable_labels.
 * - MapCanvasComponent draws polygons on [map-canvas] canvas; DynamicMapComponent
 *   renders label.map-label. No application methods or renderer calls are patched.
 * - ts-client auth uses MD5(redirect_uri) token/expiry storage keys and
 *   GET /auth/authority; realtime becomes connected on its first server message.
 *
 * Standalone @playwright/test only: no staff/admin/auth fixture imports, disk
 * storage, APIRequestContext, backend calls, token minting or refresh. The fake
 * bearer has no server authority. Every API/auth response is browser-intercepted.
 * One HTTP dispatcher applies origin/method checks BEFORE fixture matching.
 * Only static GET assets reach the loopback frontend; redirects are forbidden.
 * Every WebSocket is intercepted before navigation; none is forwarded. Each
 * control connection gets its own binding state, handshake and fresh deliveries.
 * Unexpected requests/messages fail teardown even after assertion/setup failure.
 * Run only after review, with --no-deps --workers=1 against a local frontend.
 */
import { createHash } from 'node:crypto';
import {
    test as base, expect, type Page, type WebSocketRoute,
} from '@playwright/test';

type Settings = Record<string, unknown>;
type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
};
type Connection = { binds: string[]; delivered: string[]; unbinds: string[] };
type Audit = {
    refused: string[]; errors: string[]; monitoring: string[];
    fixtures: Record<string, number>; connections: Connection[];
};
type GetFixture = {
    match: (url: URL) => boolean;
    body: (url: URL) => unknown;
    contentType?: string;
};
const APP_URL = process.env.E2E_APP_URL ?? 'http://localhost:4214';
const APP = new URL(APP_URL);
if (!['localhost', '127.0.0.1', '[::1]'].includes(APP.hostname) ||
    !['http:', 'https:'].includes(APP.protocol) || APP.username || APP.password ||
    APP.pathname !== '/' || APP.search || APP.hash) {
    throw new Error('This spec requires a root-path loopback frontend.');
}
const USER = { id: 'e2e-zone-settings-user', name: 'Synthetic Staff',
    email: 'zone-settings@example.invalid', groups: [], sys_admin: false, support: false };
const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const CONTROL_PATH = '/api/engine/v2/systems/control';
const FIXTURES = new WeakMap<Page, GetFixture[]>();
/** Every synthetic zone and system id starts with this prefix. */
const PREFIX = 'e2e-user-zone-settings-';
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
const BULK_METADATA = [
    'bindings',
    'settings',
    'workplace_app',
    'booking_rules',
];
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

const SYSTEM = PREFIX + 'area-system';
const TARGET = PREFIX + 'target';
const CONTROL = PREFIX + 'control';
const COLOUR = '#123456';
const MAP_REGIONS = { areas: [
    { id: TARGET, map_id: TARGET, properties: {
        capacity: 10, hide_label: false, draw_polygon: false,
        label_location: { x: 0.25, y: 0.25 },
    }, geometry: { coordinates: [[0.1, 0.1], [0.4, 0.1], [0.4, 0.4], [0.1, 0.4]] } },
    { id: CONTROL, map_id: CONTROL, properties: {
        capacity: 10, hide_label: true, draw_polygon: true,
    }, geometry: { coordinates: [[0.6, 0.6], [0.9, 0.6], [0.9, 0.9], [0.6, 0.9]] } },
] };
// Payloads are the values passed to StatusVariable callbacks, not GeoJSON.
const LIVE: Record<string, unknown> = {
    [LEVEL + ':areas']: { value: [
        { area_id: TARGET, map_id: TARGET, count: 2, temperature: 23 },
        { area_id: CONTROL, map_id: CONTROL, count: 1 },
    ] },
    [LEVEL]: { value: [] },
    [LEVEL + ':desk_bookings']: {},
    // LandingStateService.init binds AreaManagement overview (level occupancy).
    overview: {},
};
const BASE: Settings = {
    'app.features': ['explore'], 'app.default_building': BUILDING,
    'app.default_route': '/explore', 'app.use_region': false,
    'app.use_geolocation': false, 'app.allow_dark_mode': false,
    'app.global_search': false, 'app.chat.enabled': false,
    'app.has_assets': false, 'app.desks.has_assets': false,
    'app.bookings.has_assets': false, 'app.desks.can_book_lockers': false,
    'app.desks.use_assets': false, 'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'], 'app.schedule.use_websocket': false,
    'app.analytics.enabled': false, 'app.show_presence_indicators': false,
    'app.explore.hide_zones': false, 'app.explore.hide_devices': true,
    'app.explore.hide_sensors': true, 'app.explore.show_legend': false,
    'app.explore.disable': [], 'app.explore.disable_features': [],
    'app.explore.disable_styles': [], 'app.explore.disable_actions': [],
    'app.explore.disable_labels': [], 'app.explore.use_zone_polygons': true,
    'app.explore.show_zone_labels': true,
    'app.explore.colors': { 'zone-free': COLOUR },
    'app.explore.cisco_maps.enabled': false,
    'app.maps_people.keys': {}, 'app.maps_people.use_zones': [],
};

/** Exact query multiset: duplicates, unknown keys and foreign authority fail. */
function hasParams(url: URL, expected: Record<string, string>) {
    const entries = [...url.searchParams.entries()];
    if (url.pathname === '/api/engine/v2/zones' && url.searchParams.has('authority_id')) {
        if (url.searchParams.getAll('authority_id').length !== 1 ||
            url.searchParams.get('authority_id') !== PREFIX + 'authority') return false;
    }
    const keys = entries.filter(([key]) =>
        !(url.pathname === '/api/engine/v2/zones' && key === 'authority_id'));
    return keys.length === Object.keys(expected).length &&
        Object.entries(expected).every(([key, value]) =>
            url.searchParams.getAll(key).length === 1 && url.searchParams.get(key) === value);
}
function parkingQuery(url: URL) {
    const period_start = url.searchParams.get('period_start')!;
    const period_end = url.searchParams.get('period_end')!;
    const base = { type: 'parking', period_start, period_end };
    return (
        hasParams(url, base) ||
        hasParams(url, { ...base, zones: LEVEL, rejected: 'false' }) ||
        hasParams(url, {
            ...base,
            email: USER.email,
        })
    );
}

/** Numeric seconds, in increasing order; no malformed period is hidden. */
function validPeriod(url: URL) {
    const start = url.searchParams.get('period_start') ?? '';
    const end = url.searchParams.get('period_end') ?? '';
    return (
        /^\d+$/.test(start) && /^\d+$/.test(end) && Number.isSafeInteger(Number(start)) && Number(start) > 0 &&
        Number.isSafeInteger(Number(end)) && Number(end) > Number(start)
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


async function getOnly(page: Page, match: GetFixture['match'], body: GetFixture['body']) {
    const list = FIXTURES.get(page);
    if (!list) throw new Error('Fixture registry is unavailable.');
    list.push({ match, body });
}

function socketHandler(socket: WebSocketRoute, audit: Audit, pending: Set<Promise<void>>) {
    const url = new URL(socket.url());
    const local = url.host === APP.host &&
        url.protocol === (APP.protocol === 'https:' ? 'wss:' : 'ws:') &&
        !url.username && !url.password && !url.hash;
    const close = () => {
        const task = socket.close().catch(() => { audit.monitoring.push('socket close failed'); });
        pending.add(task);
        void task.finally(() => pending.delete(task));
        return task;
    };
    // Vite socket stays browser-local too. Never record its token/query.
    if (local && url.pathname === '/' && url.searchParams.getAll('token').length === 1 &&
        [...url.searchParams.keys()].length === 1) {
        socket.onMessage(() => { audit.refused.push('unexpected tooling socket message'); void close(); });
        return;
    }
    const params = [...url.searchParams.keys()];
    const valid_query = params.length === 0 || (params.length === 1 &&
        params[0] === 'bearer_token' && url.searchParams.get('bearer_token') === FAKE_BEARER);
    if (!local || url.pathname !== CONTROL_PATH || !valid_query) {
        audit.refused.push('unexpected WebSocket endpoint'); void close(); return;
    }
    // State is connection-local. A reconnect replays each newly bound value.
    const connection: Connection = { binds: [], delivered: [], unbinds: [] };
    audit.connections.push(connection);
    const bound = new Set<string>();
    const ids = new Set<number>();
    socket.onMessage((message) => {
        try {
            if (message === 'ping') { socket.send('pong'); return; }
            const request: unknown = JSON.parse(String(message));
            if (!request || typeof request !== 'object' || Array.isArray(request)) throw new Error();
            const r = request as Record<string, unknown>;
            const keys = ['id', 'cmd', 'sys', 'mod', 'index', 'name'];
            if (Object.keys(r).length !== keys.length ||
                !keys.every((key) => Object.hasOwn(r, key)) ||
                typeof r.id !== 'number' || !Number.isSafeInteger(r.id) || ids.has(r.id) ||
                r.sys !== SYSTEM || r.mod !== 'AreaManagement' || r.index !== 1 ||
                typeof r.name !== 'string' || !Object.hasOwn(LIVE, r.name) ||
                !['bind', 'unbind'].includes(String(r.cmd))) throw new Error();
            ids.add(r.id);
            if (r.cmd === 'unbind') {
                if (!bound.delete(r.name)) throw new Error();
                connection.unbinds.push(r.name);
                socket.send(JSON.stringify({ id: r.id, type: 'success', value: null }));
                return;
            }
            // Known-tuple rebinds are idempotent: ts-client can queue its initial
            // bind and reconnect restoration together. Always replay the value.
            bound.add(r.name);
            connection.binds.push(r.name);
            socket.send(JSON.stringify({ id: r.id, type: 'success', value: null }));
            socket.send(JSON.stringify({ type: 'notify', value: LIVE[r.name],
                meta: { sys: SYSTEM, mod: 'AreaManagement', index: 1, name: r.name } }));
            connection.delivered.push(r.name);
        } catch {
            // Never retain raw frames, arguments, URLs, cookies or credentials.
            audit.refused.push('unexpected control frame/binding/command'); void close();
        }
    });
    // The client marks connected only after a first server message; waiting for
    // the client's first ping here would deadlock its queued bind requests.
    socket.send('pong');
}

const test = base.extend<{ isolated: { page: Page; audit: Audit } }>({
    isolated: async ({ browser }, use, info) => {
        const audit: Audit = { refused: [], errors: [], monitoring: [], fixtures: {}, connections: [] };
        // Explicitly fresh: no configured storageState, cookies or disk auth.
        const context = await browser.newContext({ baseURL: APP.origin,
            storageState: { cookies: [], origins: [] }, serviceWorkers: 'block',
            viewport: { width: 1440, height: 1000 }, timezoneId: 'Etc/UTC',
            ignoreHTTPSErrors: true });
        let page: Page | undefined;
        let stopping = false;
        const pending = new Set<Promise<void>>();
        try {
            await context.route('**/*', (route) => {
                const task = (async () => {
                    const req = route.request();
                    const url = new URL(req.url());
                    const refuse = async (reason: string) => {
                        audit.refused.push(reason); await route.abort('blockedbyclient');
                    };
                    // index.html links Google Fonts; answer locally with empty CSS.
                    if (req.method() === 'GET' && url.origin === 'https://fonts.googleapis.com' &&
                        url.pathname === '/css2') {
                        await route.fulfill({ contentType: 'text/css', body: '' });
                        return;
                    }
                    // No broad read-method exemption and no page.route overrides.
                    if (url.origin !== APP.origin || url.username || url.password)
                        return refuse('external HTTP request');
                    if (req.method() !== 'GET') return refuse('non-GET HTTP request');
                    if (req.redirectedFrom()) return refuse('HTTP redirect');
                    const fixtures = page ? FIXTURES.get(page) ?? [] : [];
                    const fixture = fixtures.find((f) => f.match(url));
                    if (fixture) {
                        audit.fixtures[url.pathname] = (audit.fixtures[url.pathname] ?? 0) + 1;
                        if (fixture.contentType) await route.fulfill({
                            contentType: fixture.contentType, body: String(fixture.body(url)),
                        });
                        else await route.fulfill({ json: fixture.body(url) });
                        return;
                    }
                    // Fetch/XHR, auth, control, API and arbitrary navigations never
                    // reach the dev proxy, even when their method is GET.
                    if (/^\/(api|auth|control)(\/|$)/.test(url.pathname))
                        return refuse('unmatched API/auth/control GET');
                    const document = req.resourceType() === 'document' && url.pathname === '/' && !url.search;
                    const asset = ['script', 'stylesheet', 'image', 'font'].includes(req.resourceType()) &&
                        /\.(?:[cm]?js|ts|css|svg|png|ico|jpe?g|webp|woff2?|ttf)$/.test(url.pathname);
                    // Dev-server component modules (no file extension) are static GETs.
                    const vite = req.resourceType() === 'script' &&
                        ['/@vite/client', '/@angular/build', '/@ng/component'].includes(url.pathname);
                    // LocaleService fetches assets/locale/<locale>.json (zone labels
                    // render translated text) and the app fetches its logo SVG.
                    const fetched = req.resourceType() === 'fetch' &&
                        /^\/assets\/[\w./-]+\.(?:json|svg)$/.test(url.pathname) && !url.pathname.includes('..');
                    // index.html preloads this font, but the build does not copy it
                    // into /assets (dev server 404s). Serve the package's own file.
                    if (url.pathname === '/assets/material-symbols-rounded.woff2') {
                        await route.fulfill({
                            path: require.resolve('material-symbols/material-symbols-rounded.woff2'),
                            contentType: 'font/woff2',
                        });
                        return;
                    }
                    if (document || asset || vite || fetched) return route.continue();
                    return refuse('unmatched frontend GET');
                })().catch(async () => {
                    audit.monitoring.push('HTTP handler failed');
                    await route.abort('blockedbyclient').catch(() => {
                        audit.monitoring.push('HTTP abort failed');
                    });
                });
                pending.add(task);
                void task.finally(() => pending.delete(task));
                return task;
            });
            await context.routeWebSocket('**/*', (socket) => {
                try { socketHandler(socket, audit, pending); }
                catch { audit.monitoring.push('WebSocket handler failed'); }
            });
            context.on('page', (opened) => {
                opened.on('pageerror', () => audit.errors.push('uncaught page error'));
                opened.on('console', (message) => {
                    if (message.type() === 'error') audit.errors.push('console error');
                });
                opened.on('requestfailed', () => {
                    if (!stopping) audit.errors.push('request failed');
                });
                opened.on('response', (response) => {
                    if (response.status() >= 300) audit.errors.push('HTTP failure or redirect');
                });
                opened.on('crash', () => audit.errors.push('page crash'));
                if (page && opened !== page) audit.refused.push('unexpected extra page');
            });
            page = await context.newPage();
            FIXTURES.set(page, []);
            await use({ page, audit });
        } finally {
            stopping = true;
            // Guards remain installed until every browser producer is stopped.
            try { await context.close(); }
            catch { audit.monitoring.push('context close failed'); }
            await Promise.all([...pending]);
            try {
                await info.attach('settings-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
                });
            } finally {
                expect({ refused: audit.refused, errors: audit.errors, monitoring: audit.monitoring },
                    'strict teardown audit, including setup/assertion failures').toEqual({
                    refused: [], errors: [], monitoring: [],
                });
            }
        }
    },
});

function matchBinding(url: URL, id: string) {
    return url.pathname === '/api/engine/v2/metadata/bindings/bulk' && id === BUILDING
        ? { area_management: { id: SYSTEM, mod: 'AreaManagement' } } : {};
}
async function syntheticGets(page: Page) {
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Synthetic Zone Organisation',
                display_name: 'Synthetic Zone Organisation',
                tags: ['org'],
            },
        ],
    );
    // Bulk bindings identify only the synthetic AreaManagement system.
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
                    .map((id) => [id, { details: matchBinding(url, id) }]),
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
                name: 'Synthetic Zone Region',
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
                name: 'Synthetic Zone Building',
                display_name: 'Synthetic Zone Building',
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
                name: 'Synthetic Zone Level',
                display_name: 'Synthetic Zone Level',
                tags: ['level'],
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
                    details: name === 'map_regions' ? MAP_REGIONS : LIST_METADATA.includes(name) ? [] : {},
                },
            };
        },
    );
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/metadata/' + USER.id &&
        ['settings', 'contacts'].some((name) => hasParams(url, { name })),
    (url) => { const name = url.searchParams.get('name')!;
        return { [name]: { name, details: name === 'contacts' ? [] : {} } }; });
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
    // No room-backed areas: only standalone area data is under test.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: LEVEL, limit: '50' }),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: ORGANISATION, limit: '50' }),
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
    FIXTURES.get(page)!.push({
        match: (url) => url.pathname === MAP_PATH && hasParams(url, {}),
        contentType: 'image/svg+xml',
        body: () => '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
            '<rect width="400" height="400" fill="#ffffff"/>' +
            '<rect id="' + TARGET + '" x="40" y="40" width="120" height="120" fill="#aaaaaa"/>' +
            '<rect id="' + CONTROL + '" x="240" y="240" width="120" height="120" fill="#aaaaaa"/></svg>',
    });
}

async function openExplore(page: Page, audit: Audit, override: Settings) {
    const settings = { ...BASE, ...override };
    const cid = createHash('md5').update(APP.origin + '/oauth-resp.html').digest('hex');
    await page.addInitScript(({ origin, cid, bearer, settings }) => {
        if (location.origin !== origin) return;
        localStorage.clear(); sessionStorage.clear();
        localStorage.setItem(cid + '_access_token', bearer);
        localStorage.setItem(cid + '_expires_at', String(Date.now() + 60 * 60_000));
        localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(settings));
        localStorage.setItem('APP.locale', 'en-US');
        localStorage.setItem('PLACEOS.locale', 'en-US');
        localStorage.setItem('mock', 'false');
    }, { origin: APP.origin, cid, bearer: FAKE_BEARER, settings });
    await getOnly(page, (url) => url.pathname === '/auth/authority' && hasParams(url, {}),
        () => ({ id: PREFIX + 'authority', name: 'Browser-only authority',
            domain: APP.host, version: '3.0.0', session: false, production: false,
            config: { org_zone: ORGANISATION } }));
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/users/current' && hasParams(url, {}),
        () => USER);
    await syntheticGets(page);
    await page.goto('/#/explore');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as DebugWindow).setting?.(name), key), { message: 'effective ' + key }).toEqual(value);
    }
    await expect.poll(() => audit.fixtures['/auth/authority'] ?? 0).toBeGreaterThan(0);
    await expect.poll(() => audit.fixtures['/api/engine/v2/users/current'] ?? 0).toBeGreaterThan(0);
    // Idempotent rebinds may repeat a delivery; every LIVE value must arrive.
    await expect.poll(() => [...new Set(audit.connections.at(-1)?.delivered)].sort())
        .toEqual(Object.keys(LIVE).sort());
    // Real UI transition: Areas begins disabled in ExploreMapView.ngOnInit.
    const areas = page.locator('explore-map-view settings-toggle');
    await expect(areas).toHaveCount(1);
    await expect(areas.locator('input[type="checkbox"]')).not.toBeChecked();
    await areas.locator('button').click();
    await expect(areas.locator('input[type="checkbox"]')).toBeChecked();
    const canvas = page.locator('explore-map-view [map-canvas] canvas');
    await expect(canvas).toHaveCount(1);
    await expect(canvas).toBeVisible();
    await expect(page.locator('explore-map-view dynamic-map mat-spinner')).toHaveCount(0);
    await expect.poll(() => audit.fixtures[MAP_PATH] ?? 0).toBeGreaterThan(0);
    // The always-drawn control proves metadata, bindings, status parsing, enabled
    // Areas and canvas painting have all completed. No fixed sleep proves absence.
    await expect.poll(() => pixel(page, 0.75, 0.75)).toEqual([18, 52, 86, 128]);
    return canvas;
}

function pixel(page: Page, x: number, y: number) {
    return page.locator('explore-map-view [map-canvas] canvas').evaluate((node, point) => {
        const canvas = node as HTMLCanvasElement;
        if (!canvas.width || !canvas.height) throw new Error('Unready polygon canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas context unavailable');
        return Array.from(ctx.getImageData(Math.floor(point.x * canvas.width),
            Math.floor(point.y * canvas.height), 1, 1).data);
    }, { x, y });
}
function renderedLabels(page: Page) {
    return page.locator('explore-map-view label.map-label').filter({ hasText: '23' });
}
function mapState(page: Page) {
    return page.locator('explore-map-view').evaluate((element, id) => {
        const view = (window as DebugWindow).ng?.getComponent(element) as {
            styles(): Record<string, { fill?: string }>;
            labels(): { content: string }[];
        } | undefined;
        if (!view?.styles || !view.labels) throw new Error('Read-only map signals unavailable');
        return { fill: view.styles()['#' + id]?.fill ?? '',
            labels: view.labels().map((label) => label.content) };
    }, TARGET);
}

for (const enabled of [true, false]) {
    test('explore.use_zone_polygons=' + enabled + ' renders the area using the selected drawing path',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.use_zone_polygons': enabled });
            await expect(renderedLabels(page)).toHaveCount(1);
            await expect(renderedLabels(page)).toBeVisible();
            // A rendered label at this area's explicit location independently
            // proves the same target metadata/live record has been processed.
            await expect.poll(() => pixel(page, 0.25, 0.25)).toEqual(
                enabled ? [18, 52, 86, 128] : [0, 0, 0, 0]);
            await expect.poll(async () => (await mapState(page)).fill).toBe(enabled ? '' : COLOUR);
        });
}
for (const enabled of [true, false]) {
    test('explore.show_zone_labels=' + enabled + ' controls the rendered sensor label',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.show_zone_labels': enabled });
            await expect.poll(() => pixel(page, 0.25, 0.25)).toEqual([18, 52, 86, 128]);
            // Target polygon proves this specific live area was parsed before
            // asserting absence of its label (control polygon alone is insufficient).
            await expect.poll(async () => (await mapState(page)).labels.some((s) => s.includes('23'))).toBe(enabled);
            await expect(renderedLabels(page)).toHaveCount(enabled ? 1 : 0);
            if (enabled) await expect(renderedLabels(page)).toBeVisible();
        });
}
for (const disabled of [false, true]) {
    test('explore.disable_labels=' + (disabled ? '[zones]' : '[]') + ' filters zone labels while retaining the area',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.disable_labels': disabled ? ['zones'] : [] });
            await expect.poll(() => pixel(page, 0.25, 0.25)).toEqual([18, 52, 86, 128]);
            await expect.poll(async () => (await mapState(page)).labels.some((s) => s.includes('23'))).toBe(!disabled);
            await expect(renderedLabels(page)).toHaveCount(disabled ? 0 : 1);
            if (!disabled) await expect(renderedLabels(page)).toBeVisible();
        });
}
