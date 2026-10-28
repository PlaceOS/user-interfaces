/**
 * User-owned Setting: explore.show_event_details
 * Exact runtime key: app.explore.show_event_details
 * Coverage: 1 unique Setting / 2 scenarios
 * ExploreSpaceInfoComponent requires next() and explicit false privacy values
 * before details can appear. Bookings are a direct event array; date is epoch
 * milliseconds and duration is minutes (CalendarEvent constructor).
 * Each context creates a current synthetic event. Both privacy values stay
 * false in both scenarios; only this Setting changes. Hover only, never click.
 * True displays title/host; false preserves room/status/event timing without
 * title or host. The exact synthetic host GET is intercepted locally.
 * Sources: libs/explore/src/lib/explore-space-info.component.ts;
 * libs/common/src/lib/types/event.class.ts; libs/users/src/lib/staff.fn.ts.
 *
 * Self-contained isolation adapted from explore.zone-polygons-and-labels.spec.ts.
 * Fresh empty storage; synthetic staff/auth only; no disk-auth fixture imports.
 * API/auth GETs are locally fulfilled. No control socket is forwarded.
 * Only exact AreaManagement/Bookings bind/unbind tuples are accepted; all
 * commands, mutations, redirects and unexpected requests fail the final audit.
 * Guards remain active through context close; pending handlers are drained.
 * Read-only Angular probes establish readiness; no product state is patched.
 * Manual execution only after review, with --no-deps --workers=1.
 */
import { createHash } from 'node:crypto';
import {
    test as base, expect, type Page, type WebSocketRoute,
} from '@playwright/test';
import { BULK_METADATA, type DebugWindow, type GetFixture, LIST_METADATA, pixel, roomState, type Settings, USER, validPeriod } from '../support/settings-harness';
type Connection = { binds: string[]; delivered: string[]; unbinds: string[] };
type Audit = {
    refused: string[]; errors: string[]; monitoring: string[];
    fixtures: Record<string, number>; connections: Connection[];
    room_values: Record<string, unknown>;
};
const APP_URL = process.env.E2E_APP_URL ?? 'http://localhost:4214';
const APP = new URL(APP_URL);
if (!['localhost', '127.0.0.1', '[::1]'].includes(APP.hostname) ||
    !['http:', 'https:'].includes(APP.protocol) || APP.username || APP.password ||
    APP.pathname !== '/' || APP.search || APP.hash) {
    throw new Error('This spec requires a root-path loopback frontend.');
}
const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const CONTROL_PATH = '/api/engine/v2/systems/control';
const FIXTURES = new WeakMap<Page, GetFixture[]>();
/** Every synthetic zone and system id starts with this prefix. */
const PREFIX = 'e2e-show-event-details-';
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

const SYSTEM = PREFIX + 'area-system';
const TARGET = PREFIX + 'target';
const CONTROL = PREFIX + 'control';
const ROOM = {
    id: PREFIX + 'room', name: 'Synthetic Settings Room',
    display_name: 'Synthetic Settings Room',
    email: 'settings-room@example.invalid', map_id: TARGET,
    bookable: true, capacity: 4, features: [], images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
};
const ROOM_FILL = '#2468ac';
/** Exact Bookings values; regenerated once per isolated browser context. */
function roomValues(): Record<string, unknown> {
    return { bookings: [{
        id: PREFIX + 'event', title: 'Synthetic meeting',
        host: 'meeting-host@example.invalid', date: Date.now(), duration: 30,
    }], status: 'busy', presence: false,
        hide_meeting_details: false, hide_meeting_title: false };
}
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
    'app.events.has_assets': false, 'app.events.can_book_for_others': false,
    'app.events.bookable_hours': null, 'app.events.booking_unavailable': false,
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
    'app.explore.colors': { 'zone-free': COLOUR,
        'space-free': ROOM_FILL, 'space-busy': ROOM_FILL },
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
            const values = r.sys === SYSTEM && r.mod === 'AreaManagement' && r.index === 1
                ? LIVE : r.sys === ROOM.id && r.mod === 'Bookings' && r.index === 1
                  ? audit.room_values : undefined;
            if (Object.keys(r).length !== keys.length ||
                !keys.every((key) => Object.hasOwn(r, key)) ||
                typeof r.id !== 'number' || !Number.isSafeInteger(r.id) || ids.has(r.id) ||
                !values || typeof r.name !== 'string' || !Object.hasOwn(values, r.name) ||
                !['bind', 'unbind'].includes(String(r.cmd))) throw new Error();
            ids.add(r.id);
            const binding_key = [r.sys, r.mod, r.index, r.name].join(':');
            if (r.cmd === 'unbind') {
                if (!bound.delete(binding_key)) throw new Error();
                connection.unbinds.push(binding_key);
                socket.send(JSON.stringify({ id: r.id, type: 'success', value: null }));
                return;
            }
            // Known-tuple rebinds are idempotent: ts-client can queue its initial
            // bind and reconnect restoration together. Always replay the value.
            bound.add(binding_key);
            connection.binds.push(binding_key);
            socket.send(JSON.stringify({ id: r.id, type: 'success', value: null }));
            socket.send(JSON.stringify({ type: 'notify', value: values[r.name],
                meta: { sys: r.sys, mod: r.mod, index: r.index, name: r.name } }));
            connection.delivered.push(binding_key);
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
        const audit: Audit = { refused: [], errors: [], monitoring: [], fixtures: {}, connections: [],
            room_values: roomValues() };
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
                    if (req.redirectedFrom()) {
                        await refuse('HTTP redirect'); return;
                    }
                    if (url.username || url.password || url.hash) {
                        await refuse('credential-bearing or fragmented HTTP URL'); return;
                    }
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
            while (pending.size) await Promise.all([...pending]);
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
    // UserPipe -> showStaff uses this exact email-encoded staff endpoint.
    await getOnly(page, (url) =>
        url.pathname === '/api/staff/v1/people/meeting-host%40example.invalid' &&
        hasParams(url, {}),
    () => ({ id: PREFIX + 'meeting-host', name: 'Synthetic Meeting Host',
        email: 'meeting-host@example.invalid' }));
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
        () => [ROOM],
    );
    // Source-supported room/shape match for Explore and its hover feature.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: LEVEL, limit: '50' }),
        () => [ROOM],
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
        () => [ROOM],
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
    const expected_bindings = [
        ...Object.keys(LIVE).map((name) => [SYSTEM, 'AreaManagement', 1, name].join(':')),
        ...Object.keys(audit.room_values).map((name) => [ROOM.id, 'Bookings', 1, name].join(':')),
    ].sort();
    await expect.poll(() => [...new Set(audit.connections.at(-1)?.delivered)].sort())
        .toEqual(expected_bindings);
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
async function roomReady(page: Page, audit: Audit) {
    const feature = page.locator('explore-map-view explore-space-info [customTooltip]');
    await expect(feature).toHaveCount(1);
    await expect(feature).toBeVisible();
    await expect.poll(() => roomState(page)).toMatchObject({
        name: ROOM.name, status: audit.room_values.status,
        hide_title: audit.room_values.hide_meeting_title,
        hide_details: audit.room_values.hide_meeting_details,
    });
    await expect.poll(() => page.locator('explore-map-view').evaluate((element, shape) => {
        const view = (window as DebugWindow).ng?.getComponent(element) as {
            styles(): Record<string, { fill?: string }>;
        } | undefined;
        if (!view) throw new Error('Read-only map component unavailable');
        return view.styles()['#' + shape]?.fill;
    }, ROOM.map_id)).toBe(ROOM_FILL);
    return feature;
}

for (const enabled of [true, false]) {
    test('explore.show_event_details=' + enabled + ' controls details in the live room tooltip',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.show_event_details': enabled });
            const feature = await roomReady(page, audit);
            // Prove the same current event and both privacy permissions before
            // hovering, so absence cannot pass because Bookings never arrived.
            await expect.poll(async () => (await roomState(page)).events).toHaveLength(1);
            await expect.poll(async () => (await roomState(page)).next).toMatchObject({
                title: 'Synthetic meeting', host: 'meeting-host@example.invalid',
            });
            await feature.hover({ position: { x: 10, y: 10 } });
            const tooltip = page.locator('[custom-tooltip] [name="space-info"]');
            await expect(tooltip).toHaveCount(1);
            await expect(tooltip).toBeVisible();
            await expect(tooltip.locator('h4')).toHaveText(ROOM.name);
            await expect(tooltip.locator('[status]')).toHaveClass(/busy/);
            await expect(tooltip).toContainText(/Free\s+at/);
            const title = tooltip.locator('h3').filter({ hasText: 'Synthetic meeting' });
            const host = tooltip.getByText('Synthetic Meeting Host', { exact: true });
            await expect(title).toHaveCount(enabled ? 1 : 0);
            await expect(host).toHaveCount(enabled ? 1 : 0);
            if (enabled) {
                await expect(title).toBeVisible();
                await expect(host).toBeVisible();
                await expect.poll(() =>
                    audit.fixtures['/api/staff/v1/people/meeting-host%40example.invalid'] ?? 0)
                    .toBeGreaterThan(0);
            } else {
                await expect(tooltip).not.toContainText('meeting-host@example.invalid');
            }
            await expect(page.locator('mat-dialog-container')).toHaveCount(0);
        });
}

