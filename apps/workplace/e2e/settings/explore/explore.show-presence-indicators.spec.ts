// Coverage: 1 unique Setting. Exact key: app.show_presence_indicators.
// Scenarios: 2.
//   1. true: with the room's live `presence` value true, the Explore map shows
//      a `sensor_occupied` presence icon on the room, in the success colour.
//   2. false: with the identical live values, no presence icon is shown.
// Scope: the Explore map for one synthetic room. Nothing is clicked or booked.
// Docs: docs/settings/workplace.md.
// Readiness still uses a busy fill: a free fill is the unset-status fallback
// and appeared before any live value arrived.
//
// Source: libs/explore/src/lib/explore-spaces.service.ts subscribes to
// the `bookings`, `status` and `presence` variables of module `Bookings` on
// every room of the level. A `presence` value schedules
// _updateIcons, which returns at once while
// app.show_presence_indicators is off and otherwise publishes one
// ExploreIconComponent (`sensor_occupied`, background var(--success) when
// presence is true) per room in the `spaces-presence` feature group
// (libs/explore/src/lib/explore-icon.component.ts). A `status` value
// schedules the room fill style the same way. The room
// hover card also subscribes to `hide_meeting_details` and
// `hide_meeting_title` (explore-space-info.component.ts).
//
// Synthetic live values (pilot, approved for this spec only): the app's
// control WebSocket (/api/engine/v2/systems/control) is answered entirely
// inside the browser with Playwright routeWebSocket; connectToServer() is
// never called, so no socket reaches the backend. The fixture follows the
// client protocol in @placeos/ts-client src/realtime/functions.ts: the client
// counts as connected on the first server message and sends `ping` at once
// and every 15 s, so `ping` is answered `pong`; requests
// are `{id, cmd, sys, mod, index, name}`; a `bind` is answered
// `{id, type: 'success'}` and the value is delivered as
// `{type: 'notify', value, meta}`. Only bind/unbind of the five
// variables above, on the synthetic room's `Bookings` module index 1
// (module.ts, status-variable.ts), are answered. Every other
// message, every `exec` (module command) and any other bind is refused with
// a recorded refusal and socket close, failing the scenario. The `presence` value is
// delivered before the `status` value, so the room fill appearing proves the
// presence update has already run; absence is never inferred from waiting.
//
// Authentication is synthetic and browser-local: a fresh empty context gets
// a fake bearer and its client-ID/expiry keys. Authority and current-user GETs
// are fulfilled locally. No disk auth, shared staff/admin fixture, token mint,
// refresh or APIRequestContext is imported or used.
// Run with --no-deps: the project's preflight can seed backend rows.
//
// HTTP policy: one context-wide dispatcher validates origin, method and
// redirects BEFORE matching exact local GET fixtures. Non-GET, unknown API/auth,
// unexpected HTTP and external requests are aborted and fail the audit. Only
// allowlisted frontend GET assets use route.fetch with redirects disabled.
// No request uses continue/fallback; no page route can bypass the dispatcher.
// The known Google Fonts CSS reference is fulfilled locally without a fetch.
// Every socket is intercepted before navigation, never forwarded. Binding
// state/deliveries are per connection; unrecognised commands/frames fail.
// Guards remain installed through context close and pending-handler audits.
import { createHash } from 'node:crypto';
import {
    test as base, expect, type Page, type WebSocketRoute,
} from '@playwright/test';
import { BULK_METADATA, clearOrganisationCache, type GetFixture, LIST_METADATA, type Settings, validPeriod } from '../support/settings-harness';
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
/** What the synthetic control socket received and sent. */
type SocketAudit = {
    /** Control sockets opened. */
    connections: number;
    /** Variables bound, in order. */
    binds: string[];
    /** Variables whose value has been delivered, in order. */
    delivered: string[];
    /** Refused messages (no values or arguments recorded). */
    refused: string[];
};
type NetworkAudit = {
    api: string[];
    local_writes: string[];
    external: string[];
    websocket: string[];
    appErrors: string[];
    control: SocketAudit;
    closing: Promise<void>[];
    pending: Set<Promise<void>>;
    monitoring: string[];
    controls: SocketAudit[];
    gets: Record<string, number>;
    stopping: boolean;
};
const APP_URL = process.env.E2E_APP_URL ?? 'http://localhost:4214';
const APP = new URL(APP_URL);
if (!['localhost', '127.0.0.1', '[::1]'].includes(APP.hostname) ||
    !['http:', 'https:'].includes(APP.protocol) || APP.username || APP.password ||
    APP.pathname !== '/' || APP.search || APP.hash) {
    throw new Error('Presence scenarios require a root-path loopback frontend.');
}
const CONTROL_PATH = '/api/engine/v2/systems/control';
const FAKE_BEARER = 'browser-only-presence-not-a-valid-credential';
const USER = { id: 'e2e-presence-user', name: 'Synthetic Presence Staff',
    email: 'presence-staff@example.invalid', groups: [], sys_admin: false, support: false };
const GET_FIXTURES = new WeakMap<Page, GetFixture[]>();
const READ_ONLY_SETTINGS: Settings = {
    'app.allow_dark_mode': false,
    'app.desks.can_book_lockers': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
};

function createAudit(): NetworkAudit {
    return {
        api: [], local_writes: [], external: [], websocket: [], appErrors: [],
        control: { connections: 0, binds: [], delivered: [], refused: [] },
        closing: [], pending: new Set(), monitoring: [], controls: [],
        gets: {}, stopping: false,
    };
}

// Standalone fixtures: never inherit disk-loading staff/admin authentication.
const test = base.extend<{ staffPage: Page; batchAudit: NetworkAudit }>({
    staffPage: async ({ browser }, use, info) => {
        const context = await browser.newContext({
            baseURL: APP.origin, storageState: { cookies: [], origins: [] },
            serviceWorkers: 'block', timezoneId: 'Etc/UTC',
            ignoreHTTPSErrors: true, viewport: { width: 1440, height: 1000 },
        });
        const audit = createAudit();
        try {
            const page = await context.newPage();
            await protectNetwork(page, audit);
            await use(page);
        } finally {
            audit.stopping = true;
            // The guards remain active until all browser producers stop.
            try { await context.close(); }
            catch { audit.monitoring.push('context close failed'); }
            try {
                while (audit.pending.size) await Promise.all([...audit.pending]);
                await info.attach('settings-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, (_key, value) =>
                        value instanceof Set ? [...value] : value, 2)),
                    contentType: 'application/json',
                });
            } finally {
                await expectSafe(audit);
            }
        }
    },
    batchAudit: [
        async ({ staffPage }, use) => {
            const audit = PAGE_AUDITS.get(staffPage);
            if (!audit) throw new Error('Presence network protection is not installed');
            await use(audit);
        },
        { auto: true },
    ],
});

async function useSettings(page: Page, settings: Settings) {
    if (Object.keys(settings).some((key) => !key.startsWith('app.'))) {
        throw new Error('Settings overrides require exact app.* keys');
    }
    await page.addInitScript((value) => {
        localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(value));
    }, settings);
}

async function syntheticAuthentication(page: Page) {
    // setupPlace derives this redirect URI at a root-path frontend;
    // ts-client uses MD5(redirect_uri) as its storage prefix.
    const cid = createHash('md5').update(APP.origin + '/oauth-resp.html').digest('hex');
    await page.addInitScript(({ origin, cid, bearer }) => {
        if (location.origin !== origin) return;
        localStorage.setItem(cid + '_access_token', bearer);
        localStorage.setItem(cid + '_expires_at', String(Date.now() + 60 * 60_000));
        localStorage.setItem('mock', 'false');
    }, { origin: APP.origin, cid, bearer: FAKE_BEARER });
}

/** Every synthetic zone and system id starts with this prefix. */
const PREFIX = 'e2e-presence-';
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

/** The one synthetic room on the level. */
const ROOM = {
    id: PREFIX + 'room',
    name: 'Presence Room',
    display_name: 'Presence Room',
    email: 'presence-room@example.invalid',
    map_id: PREFIX + 'room-shape',
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
};
/** Module and index the room's live variables are bound on. */
const ROOM_MODULE = 'Bookings';
const ROOM_MODULE_INDEX = 1;
/**
 * The only live variables answered, and their fixed values. Identical in
 * both scenarios: presence true, status busy, no bookings, meeting details
 * hidden (the card's default).
 */
const LIVE_VALUES: Record<string, unknown> = {
    bookings: [],
    status: 'busy',
    presence: true,
    hide_meeting_details: true,
    hide_meeting_title: true,
};
/**
 * The room fill DEFAULT_COLOURS uses for `busy` (explore-spaces.service.ts).
 * Not `free`: handleStatusChange falls back to 'free' for an unset status, so a
 * free fill appears before any live value arrives and proves nothing.
 */
const BUSY_FILL = '#e53935';

// Controls, not covered settings: everything else on the Explore map is held
// off so only the room's live values vary the map.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.analytics.enabled': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.desks.use_assets': false,
    'app.explore.colors': {},
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
    if (url.pathname === '/api/engine/v2/zones' && url.searchParams.has('authority_id')) {
        if (url.searchParams.getAll('authority_id').length !== 1 ||
            url.searchParams.get('authority_id') !== PREFIX + 'authority') return false;
    }
    const keys = [...url.searchParams.keys()].filter((key) =>
        !(url.pathname === '/api/engine/v2/zones' && key === 'authority_id'));
    return keys.length === Object.keys(expected).length &&
        Object.entries(expected).every(([key, value]) =>
            url.searchParams.getAll(key).length === 1 && url.searchParams.get(key) === value);
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

/**
 * Answer one control-socket message, entirely in the browser. Only `ping`
 * and bind/unbind of the room's five live variables are accepted; anything
 * else is refused with an error reply and recorded. The `status` value is
 * held back until the `presence` value has been delivered.
 */
function controlMessage(
    message: string | Buffer,
    send: (data: string) => void,
    socket: SocketAudit,
    state: { bound: Set<string>; ids: Set<number> },
) {
    if (message === 'ping') { send('pong'); return; }
    let request: Record<string, unknown>;
    try {
        const parsed: unknown = JSON.parse(String(message));
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error();
        request = parsed as Record<string, unknown>;
    } catch {
        socket.refused.push('non-object/invalid control frame');
        return;
    }
    const { id, cmd, sys, mod, index, name } = request;
    const keys = ['id', 'cmd', 'sys', 'mod', 'index', 'name'];
    const known = Object.keys(request).length === keys.length &&
        keys.every((key) => Object.hasOwn(request, key)) &&
        typeof id === 'number' && Number.isSafeInteger(id) && id > 0 &&
        !state.ids.has(id) && sys === ROOM.id && mod === ROOM_MODULE &&
        index === ROOM_MODULE_INDEX && typeof name === 'string' &&
        Object.hasOwn(LIVE_VALUES, name) && (cmd === 'bind' || cmd === 'unbind');
    if (!known || typeof id !== 'number' || typeof name !== 'string') {
        socket.refused.push('unexpected control command/binding/frame');
        return;
    }
    state.ids.add(id);
    if (cmd === 'unbind') {
        if (!state.bound.delete(name)) {
            socket.refused.push('unbound variable unbind');
            return;
        }
        send(JSON.stringify({ id, type: 'success', value: null }));
        return;
    }
    state.bound.add(name);
    socket.binds.push(name);
    send(JSON.stringify({ id, type: 'success', value: null }));
    const deliver = (variable: string) => {
        send(JSON.stringify({ type: 'notify', value: LIVE_VALUES[variable],
            meta: { sys: ROOM.id, mod: ROOM_MODULE, index: ROOM_MODULE_INDEX, name: variable } }));
        socket.delivered.push(variable);
    };
    // Fresh deliveries on every known bind/rebind. Preserve the original
    // presence-before-status ordering and its busy-fill readiness guarantee.
    if (name === 'status') {
        if (state.bound.has('presence') && socket.delivered.includes('presence')) deliver('status');
        return;
    }
    deliver(name);
    if (name === 'presence' && state.bound.has('status')) deliver('status');
}

async function protectNetwork(page: Page, supplied?: NetworkAudit): Promise<NetworkAudit> {
    const existing = PAGE_AUDITS.get(page);
    if (existing) return existing;
    const audit = supplied ?? createAudit();
    PAGE_AUDITS.set(page, audit);
    GET_FIXTURES.set(page, []);
    const context = page.context();
    const track = (task: Promise<void>) => {
        audit.pending.add(task);
        void task.finally(() => audit.pending.delete(task));
        return task;
    };
    const observe = (opened: Page) => {
        opened.on('pageerror', () => audit.appErrors.push('uncaught page error'));
        opened.on('console', (message) => {
            if (message.type() === 'error') audit.appErrors.push('console error');
        });
        opened.on('requestfailed', () => {
            if (!audit.stopping) audit.appErrors.push('failed HTTP request');
        });
        opened.on('response', (response) => {
            if (response.status() >= 300) audit.appErrors.push('HTTP error/redirect');
        });
        opened.on('crash', () => audit.appErrors.push('page crash'));
    };
    observe(page);
    context.on('page', (opened) => {
        audit.websocket.push('unexpected additional page');
        observe(opened);
    });
    await context.route('**/*', (route) => track((async () => {
        const request = route.request();
        const url = new URL(request.url());
        const refuse = async (list: string[], reason: string) => {
            list.push(reason);
            await route.abort('blockedbyclient');
        };
        if (request.redirectedFrom() || url.username || url.password || url.hash) {
            await refuse(audit.external, 'redirect/credential-bearing HTTP request'); return;
        }
        // Known index.html reference, answered locally; never contacts Google.
        if (request.method() === 'GET' && url.origin === 'https://fonts.googleapis.com' &&
            url.pathname === '/css2' && hasParams(url, {
                family: 'Roboto:wght@300;400;500', display: 'swap',
            })) {
            await route.fulfill({ contentType: 'text/css', body: '' }); return;
        }
        if (url.origin !== APP.origin) {
            await refuse(audit.external, 'external HTTP request'); return;
        }
        if (request.method() !== 'GET') {
            await refuse(audit.local_writes, 'non-GET HTTP request'); return;
        }
        const fixture = GET_FIXTURES.get(page)!.find((entry) => entry.match(url));
        if (fixture) {
            if (fixture.contentType) {
                await route.fulfill({ contentType: fixture.contentType, body: String(fixture.body(url)) });
            } else {
                await route.fulfill({ json: fixture.body(url) });
            }
            audit.gets[url.pathname] = (audit.gets[url.pathname] ?? 0) + 1;
            return;
        }
        const pathname = decodeURIComponent(url.pathname);
        if (/^\/(api|auth|control)(\/|$)/.test(pathname)) {
            await refuse(audit.api, 'unmatched API/auth/control GET'); return;
        }
        // Static frontend reads only. Unknown fetch/XHR and navigation requests
        // cannot fall through to the development proxy.
        const document = request.resourceType() === 'document' &&
            url.pathname === '/' && !url.search;
        const asset = ['script', 'stylesheet', 'image', 'font'].includes(request.resourceType()) &&
            /\.(?:[cm]?js|ts|css|svg|png|ico|jpe?g|webp|woff2?|ttf)$/.test(url.pathname);
        const module = request.resourceType() === 'script' &&
            ['/@vite/client', '/@angular/build', '/@ng/component'].includes(url.pathname);
        const fetched_asset = request.resourceType() === 'fetch' && [
            '/assets/locale/en-US.json', '/assets/locale/en-AU.json',
            '/assets/logo-light.svg', '/assets/logo-dark.svg',
        ].includes(url.pathname) && !url.search;
        const symbols = /^\/assets\/(material-symbols-(?:outlined|rounded|sharp)\.woff2)$/
            .exec(url.pathname);
        if (symbols && (asset || fetched_asset)) {
            await route.fulfill({
                path: require.resolve('material-symbols/' + symbols[1]),
                contentType: 'font/woff2',
            });
            return;
        }
        if (!document && !asset && !module && !fetched_asset) {
            await refuse(audit.external, 'unexpected local HTTP GET'); return;
        }
        // Only this GET-only frontend branch can perform a network read.
        // Redirects are not followed, including redirects into API/auth paths.
        const response = await route.fetch({ maxRedirects: 0 });
        if (response.status() >= 300 && response.status() < 400) {
            await refuse(audit.external, 'frontend HTTP redirect'); return;
        }
        await route.fulfill({ response });
    })().catch(async () => {
        audit.monitoring.push('HTTP interception failed');
        await route.abort('blockedbyclient').catch(() => {
            audit.monitoring.push('HTTP abort failed');
        });
    })));
    await context.routeWebSocket('**/*', (socket: WebSocketRoute) => {
        const close = () => {
            const task = Promise.resolve().then(() => socket.close()).catch(() => {
                audit.monitoring.push('WebSocket close failed');
            });
            audit.closing.push(task);
            void track(task);
        };
        try {
            const url = new URL(socket.url());
            const local = url.host === APP.host &&
                url.protocol === (APP.protocol === 'https:' ? 'wss:' : 'ws:') &&
                !url.username && !url.password && !url.hash;
            if (local && url.pathname === '/' && url.searchParams.getAll('token').length === 1 &&
                !!url.searchParams.get('token') && [...url.searchParams.keys()].length === 1) {
                // Vite is held locally too; no message is forwarded.
                socket.onMessage(() => {
                    audit.websocket.push('unexpected tooling WebSocket frame'); close();
                });
                return;
            }
            const keys = [...url.searchParams.keys()];
            const valid_query = keys.length === 0 ||
                (keys.length === 1 && keys[0] === 'bearer_token' &&
                    url.searchParams.get('bearer_token') === FAKE_BEARER);
            if (!local || url.pathname !== CONTROL_PATH || !valid_query) {
                audit.websocket.push('unexpected WebSocket endpoint'); close(); return;
            }
            const connection: SocketAudit = {
                connections: audit.controls.length + 1, binds: [], delivered: [], refused: [],
            };
            audit.controls.push(connection);
            audit.control = connection;
            const state = { bound: new Set<string>(), ids: new Set<number>() };
            socket.onMessage((message) => {
                try {
                    controlMessage(message, (data) => socket.send(data), connection, state);
                    if (connection.refused.length) close();
                } catch {
                    audit.monitoring.push('control handler failed'); close();
                }
            });
            socket.send('pong');
        } catch {
            audit.monitoring.push('WebSocket interception failed'); close();
        }
    });
    return audit;
}

async function expectSafe(audit: NetworkAudit) {
    while (audit.pending.size) await Promise.all([...audit.pending]);
    await Promise.all(audit.closing);
    expect(audit.api, 'only exact synthetic API/auth GET fixtures').toEqual([]);
    expect(audit.local_writes, 'no non-GET request, including auth refresh').toEqual([]);
    expect(audit.external, 'no external/unexpected HTTP actions').toEqual([]);
    expect(audit.websocket, 'no other WebSocket or extra page').toEqual([]);
    expect(audit.controls.flatMap((socket) => socket.refused),
        'no unexpected command, binding or frame on any connection').toEqual([]);
    expect(audit.control.binds.filter((name) => !Object.hasOwn(LIVE_VALUES, name)),
        'only room live variables are bound').toEqual([]);
    expect(audit.appErrors, 'no application/HTTP errors').toEqual([]);
    expect(audit.monitoring, 'no interception/teardown failure').toEqual([]);
}

async function getOnly(page: Page, match: GetFixture['match'], body: GetFixture['body']) {
    const fixtures = GET_FIXTURES.get(page);
    if (!fixtures) throw new Error('HTTP guard is not installed');
    fixtures.push({ match, body });
}

/** Exact synthetic GET fixtures for one level with one room on Explore. */
async function syntheticGets(page: Page) {
    await getOnly(page, (url) =>
        url.pathname === '/auth/authority' && hasParams(url, {}),
    () => ({ id: PREFIX + 'authority', name: 'Synthetic Presence Authority',
        domain: APP.host, version: '3.0.0', session: false, production: false,
        config: { org_zone: ORGANISATION } }));
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/users/current' && hasParams(url, {}),
    () => USER);
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Presence Organisation',
                display_name: 'Presence Organisation',
                tags: ['org'],
            },
        ],
    );
    // Bulk metadata, including `bindings`, is empty: no area, location or
    // locker module is bound, so only the room variables reach the socket.
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
                name: 'Presence Region',
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
                name: 'Presence Building',
                display_name: 'Presence Building',
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
                name: 'Presence Level',
                display_name: 'Presence Level',
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
                    details: LIST_METADATA.includes(name) ? [] : {},
                },
            };
        },
    );
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/metadata/' + USER.id &&
        ['settings', 'contacts'].some((name) => hasParams(url, { name })),
    (url) => {
        const name = url.searchParams.get('name')!;
        return { [name]: { name, description: '',
            details: name === 'contacts' ? [] : {} } };
    });
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
    // ExploreStateService rooms (explore-state.service.ts): the one
    // room on the level; none for the organisation before the level is set.
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
    GET_FIXTURES.get(page)!.push({
        match: (url) => url.pathname === MAP_PATH && hasParams(url, {}),
        contentType: 'image/svg+xml',
        body: () =>
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
            `<rect id="${ROOM.map_id}" x="80" y="60" width="120" height="80" fill="#aaaaaa"/>` +
            '</svg>',
    });
}

async function openExplore(page: Page, enabled: boolean) {
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await syntheticAuthentication(page);
    await clearOrganisationCache(page);
    await useSettings(page, {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['explore'],
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.show_presence_indicators': enabled,
    });
    await syntheticGets(page);
    await page.goto('/#/explore');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    await expect.poll(() => audit.gets['/auth/authority'] ?? 0).toBeGreaterThan(0);
    await expect.poll(() => audit.gets['/api/engine/v2/users/current'] ?? 0).toBeGreaterThan(0);
    return audit;
}

function presenceSetting(page: Page) {
    return page.evaluate(() =>
        (window as DebugWindow).setting?.('app.show_presence_indicators'),
    );
}

/**
 * Read-only probe of the map view's inputs (explore-map-view.component.ts
 * :202-215): the room's fill and the presence icon features. Fails closed if
 * the signals are unavailable.
 */
function mapState(page: Page) {
    return page
        .locator('explore-map-view')
        .evaluate((element, map_id) => {
            const view = (window as DebugWindow).ng?.getComponent(element) as
                | {
                      features?: () => {
                          location?: unknown;
                          data?: { icon?: { content?: string }; color?: string };
                      }[];
                      styles?: () => Record<string, { fill?: string }>;
                  }
                | undefined;
            if (!view?.features || !view.styles) {
                throw new Error('explore map signals are unavailable');
            }
            return {
                room_fill: view.styles()['#' + map_id]?.fill ?? '',
                presence_icons: view
                    .features()
                    .filter(
                        (feature) =>
                            feature.location === map_id &&
                            feature.data?.icon?.content === 'sensor_occupied',
                    )
                    .map((feature) => feature.data?.color ?? ''),
            };
        }, ROOM.map_id);
}

/** Presence icons rendered on the map (explore-icon.component.ts). */
const presenceIcons = (page: Page) =>
    page.locator('explore-map-view explore-icon').filter({
        has: page.locator('icon', { hasText: /^\s*sensor_occupied\s*$/ }),
    });

// Identical live values in both scenarios; only the setting differs. Kept as
// data so the test body has no branches.
const SCENARIOS = [
    { enabled: true, icons: ['var(--success)'], rendered: 1 },
    { enabled: false, icons: [] as string[], rendered: 0 },
];

for (const scenario of SCENARIOS) {
    test(`show_presence_indicators ${scenario.enabled} sets the room presence icon on the Explore map`, async ({
        staffPage,
        batchAudit,
    }) => {
        await openExplore(staffPage, scenario.enabled);
        await expect
            .poll(() => presenceSetting(staffPage), {
                message: 'effective app.show_presence_indicators',
            })
            .toBe(scenario.enabled);
        // The synthetic socket delivered presence, then status.
        await expect
            .poll(() => batchAudit.control.delivered.slice(), {
                message: 'live values delivered by the synthetic socket',
            })
            .toEqual(
                expect.arrayContaining(['bookings', 'presence', 'status']),
            );
        expect(
            batchAudit.control.delivered.indexOf('presence'),
            'presence is delivered before status',
        ).toBeLessThan(batchAudit.control.delivered.indexOf('status'));
        // The room fill comes from the later status value, so once it is
        // shown the presence update has already run.
        await expect
            .poll(async () => (await mapState(staffPage)).room_fill, {
                message: 'room fill from the live status',
            })
            .toBe(BUSY_FILL);
        expect((await mapState(staffPage)).presence_icons).toStrictEqual(
            scenario.icons,
        );
        await expect(presenceIcons(staffPage)).toHaveCount(scenario.rendered);
        await expectSafe(batchAudit);
    });
}
