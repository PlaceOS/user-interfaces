/**
 * User-owned Setting: events.force_current_user_for_booking_rules
 * Exact runtime key: app.events.force_current_user_for_booking_rules
 * Coverage: 1 unique Setting / 2 scenarios
 * Status: PASS (2/2, 2026-10-27, browser-only synthetic fixtures; --no-deps,
 *   1 worker; --repeat-each=3 6/6). No booking reached any backend.
 *
 * Two independent submissions keep the SAME delegate as saved host and organiser.
 * True resolves rule checks using signed-in staff (no delegate UserPipe GET).
 * False resolves the delegate through its exact synthetic staff GET.
 * The draft is seeded before navigation, so no unrelated host-picker lookup occurs.
 * Both group identities are permitted by the fixture rules; this covers rule-host
 * resolution and unchanged submission ownership, NOT hidden-rule denial.
 * This avoids exempting expected product errors from strict error capture.
 * The default calendar/event backend is covered, with no native booking POST.
 *
 * SUBMISSION SAFETY: one BrowserContext.route with a catch-all URL pattern is installed before any
 * page navigation. Origin/redirect checks run first. All non-GET requests enter
 * one terminating branch: only armed POST /api/staff/v1/events with NO query
 * and a fully equal expected JSON body receives a synthetic 201. Any mismatch
 * aborts and fails the audit; all other POST/PUT/PATCH/DELETE are refused.
 * The non-GET branch never calls fetch, continue, fallback or another route.
 * Only allowlisted frontend GET assets use route.fetch({ maxRedirects: 0 }).
 * There are no page.route overrides. API/auth GET fixtures are exact and local.
 * No APIRequestContext, disk auth, real bearer, backend booking or WS forwarding.
 * No driver metadata binding exists; all control sockets/commands are refused.
 * Fresh storage, blocked service workers, strict errors and close-then-drain
 * teardown audits are retained. Raw credentials/frames are never logged.
 *
 * Source: libs/events/src/lib/event-form.service.ts:postForm/_performBooking;
 * libs/events/src/lib/events.fn.ts:createEvent/withAppVersion;
 * libs/common/src/lib/types/event.class.ts:constructor/toJSON;
 * libs/common/src/lib/types/user.class.ts:User constructor;
 * meeting-flow-new/meeting-flow-options.component.ts:confirmBooking.
 * VERSION is the pure generated build descriptor, not an auth/config fixture.
 * UI draft seeding stays in this isolated browser's sessionStorage.
 * Run with --no-deps --workers=1.
 */
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import {
    test as base, expect, type Page, type WebSocketRoute,
} from '@playwright/test';

import { VERSION } from '../../../../../libs/common/src/lib/version';
type Settings = Record<string, unknown>;
type Json = Record<string, unknown>;
type Submission = { expected: Json; armed: boolean; bodies: Json[]; completed: boolean };
type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
};
type Connection = { binds: string[]; delivered: string[]; unbinds: string[] };
type Audit = {
    refused: string[]; errors: string[]; monitoring: string[];
    fixtures: Record<string, number>; connections: Connection[];
    submission?: Submission;
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
const USER = { id: 'browser-meeting-staff', name: 'Synthetic Staff',
    email: 'staff@dev.place.tech', groups: [] as string[], department: '',
    sys_admin: false, support: false };
const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const FIXTURES = new WeakMap<Page, GetFixture[]>();
/** Every synthetic zone and system id starts with this prefix. */
const PREFIX = 'e2e-force-current-rules-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
const GROUP = PREFIX + 'delegate-group';
const DELEGATE = { id: PREFIX + 'delegate', name: 'Synthetic Delegate',
    email: 'delegate@dev.place.tech', groups: [GROUP], department: '' };
const HOST_PATH = '/api/staff/v1/people/' + encodeURIComponent(DELEGATE.email);
const POST_PATH = '/api/staff/v1/events';
const TITLE = 'Browser-only meeting simulation';
const ROOMS = ['a', 'b'].map((suffix) => ({
    id: PREFIX + 'room-' + suffix, name: 'Synthetic Room ' + suffix.toUpperCase(),
    display_name: 'Synthetic Room ' + suffix.toUpperCase(),
    email: 'room-' + suffix + '@dev.place.tech', capacity: 4, bookable: true,
    zones: ZONES, features: [], images: [], map_id: '',
    level: { id: LEVEL, parent_id: BUILDING, name: 'Synthetic Level' },
    response_status: 'accepted', created_at: 1,
}));
// Both hosts are permitted. These scenarios cover rule-host resolution,
// not hidden-rule rejection; every application error remains a test failure.
const RULES: Json[] = [{ zone: '*', conditions: { groups: [GROUP] },
    rules: { hidden: false } }];
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
        // CateringStateService._loadSettings reads the building's catering settings.
        'catering-settings',
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

const BASE: Settings = {
    'app.name': 'Browser Meeting Simulation', 'app.features': ['spaces'],
    'app.feature_groups': {}, 'app.default_building': BUILDING,
    'app.default_route': '/book/meeting/form', 'app.use_region': false,
    'app.use_geolocation': false, 'app.allow_dark_mode': false,
    'app.internal_user_domain': '@dev.place.tech',
    'app.global_search': false, 'app.chat.enabled': false,
    'app.analytics.enabled': false, 'app.sentry_dsn': '',
    'app.has_assets': false, 'app.desks.has_assets': false,
    'app.desks.can_book_lockers': false, 'app.desks.use_assets': false,
    'app.bookings.has_assets': false, 'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'], 'app.schedule.use_websocket': false,
    'app.events.use_bookings': false, 'app.events.has_assets': false,
    'app.events.allow_externals': false, 'app.events.allow_recurrence': false,
    'app.events.allow_multiday': false, 'app.events.allow_all_day': false,
    'app.events.allow_online_meetings': false, 'app.events.allow_visibility': false,
    'app.events.can_book_for_anyone': false, 'app.events.can_book_for_others': true,
    'app.events.use_building_timezone': false, 'app.events.room_as_host': false,
    'app.events.force_host': '', 'app.events.no_standalone': false,
    'app.events.booking_unavailable': false, 'app.events.strict_capacity_check': false,
    'app.events.multiple_spaces': false, 'app.events.hide_attendees': true,
    'app.events.hide_notes': true, 'app.events.bookable_hours': null,
    'app.events.default_duration': 60, 'app.events.min_duration': 30,
    'app.events.max_duration': 180, 'app.events.duration_step': 30,
    'app.events.custom_duration_options': [], 'app.events.setup': 0,
    'app.events.breakdown': 0, 'app.events.overflow': {},
    'app.catering.backend': 'native', 'app.catering_provider': '',
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
    // No driver bindings exist in this fixture. Only Vite is held locally.
    if (local && url.pathname === '/' && url.searchParams.getAll('token').length === 1 &&
        [...url.searchParams.keys()].length === 1) {
        socket.onMessage(() => audit.refused.push('unexpected tooling socket frame'));
        return;
    }
    audit.refused.push('unexpected WebSocket/control attempt');
    const task = socket.close().catch(() => { audit.monitoring.push('socket close failed'); });
    pending.add(task);
    void task.finally(() => pending.delete(task));
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
                    if (req.redirectedFrom() || url.username || url.password || url.hash) {
                        await refuse('redirect/credential-bearing request'); return;
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
                    if (req.method() !== 'GET') {
                        // Every mutation terminates in fulfill/abort. No mutation
                        // can reach continue, fallback or the asset-fetch branch.
                        const capture = audit.submission;
                        if (req.method() !== 'POST' || url.pathname !== POST_PATH ||
                            url.search || !capture?.armed || capture.bodies.length !== 0 ||
                            !/^application\/json(?:;|$)/i.test(req.headers()['content-type'] ?? '')) {
                            await refuse('unexpected or unarmed mutation'); return;
                        }
                        capture.armed = false;
                        const body = req.postDataJSON() as Json;
                        // Recorded first so a mismatch reaches the test as a diff
                        // (expectSimulatedSuccess), not as a swallowed handler error.
                        capture.bodies.push(body);
                        if (!isDeepStrictEqual(body, capture.expected)) {
                            await refuse('outgoing event JSON mismatch'); return;
                        }
                        await route.fulfill({ status: 201, json: {
                            ...capture.expected, id: PREFIX + 'synthetic-created-event',
                        } });
                        capture.completed = true;
                        return;
                    }
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
                    // The app loads Material Symbols fonts from /assets, but the build
                    // does not copy them there (dev server 404s). Serve the package's own file.
                    const symbols = /^\/assets\/(material-symbols-(?:outlined|rounded|sharp)\.woff2)$/
                        .exec(url.pathname);
                    if (symbols) {
                        await route.fulfill({
                            path: require.resolve('material-symbols/' + symbols[1]),
                            contentType: 'font/woff2',
                        });
                        return;
                    }
                    if (document || asset || vite || fetched) {
                        // GET frontend assets only; do not follow redirects.
                        const response = await route.fetch({ maxRedirects: 0 });
                        if (response.status() >= 300 && response.status() < 400) {
                            await refuse('frontend redirect'); return;
                        }
                        await route.fulfill({ response });
                        return;
                    }
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
                await info.attach('browser-meeting-submission-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
                });
            } finally {
                expect({ refused: audit.refused, errors: audit.errors, monitoring: audit.monitoring },
                    'strict teardown audit, including setup/assertion failures').toEqual({
                    refused: [], errors: [], monitoring: [],
                });
                if (audit.submission) {
                    expect(audit.submission.armed).toBe(false);
                    expect(audit.submission.completed).toBe(true);
                    expect(audit.submission.bodies).toEqual([audit.submission.expected]);
                }
            }
        }
    },
});

function matchBinding(url: URL, id: string) {
    // No driver bindings: HTTP-only meeting form.
    return {};
}
async function syntheticGets(page: Page) {
    await getOnly(page, (url) => ROOMS.some((room) =>
        url.pathname === '/api/engine/v2/systems/' + room.id) && hasParams(url, {}),
        (url) => ROOMS.find((room) => url.pathname.endsWith('/' + room.id))!);
    await getOnly(page, (url) => url.pathname === HOST_PATH && hasParams(url, {}),
        () => DELEGATE);
    await getOnly(page, (url) => {
        const system_ids = url.searchParams.get('system_ids') ?? '';
        const period_start = url.searchParams.get('period_start') ?? '';
        const period_end = url.searchParams.get('period_end') ?? '';
        const ids = system_ids.split(',');
        return url.pathname === '/api/staff/v1/calendars/availability' &&
            validPeriod(url) && new Set(ids).size === ids.length &&
            ids.every((id) => ROOMS.some((room) => room.id === id)) &&
            hasParams(url, { system_ids, period_start, period_end });
    }, (url) => url.searchParams.get('system_ids')!.split(',').map((id) => {
        const room = ROOMS.find((room) => room.id === id)!;
        return { id, name: room.name, email: room.email, resource: room, availability: [] };
    }));
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
    // Bulk metadata is local and contains no live driver binding.
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
                    details: name === 'room_booking_rules' ? RULES :
                        name === 'map_regions' ? { areas: [] } : LIST_METADATA.includes(name) ? [] : {},
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
        () => ROOMS,
    );
    // Exact synthetic inventory for consumers that request the active level.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: LEVEL, limit: '50' }),
        () => ROOMS,
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
        () => ROOMS,
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
}

type RawMeeting = Json & {
    id: string; title: string; host: string; creator: string; date: number;
    date_end: number; duration: number; timezone: string; organiser: Json;
    resources: Json[]; attendees: Json[]; assets: Json[]; catering: Json[];
};
type Snapshot = { valid: boolean; loading: boolean; raw: RawMeeting; rooms: Json[] };

/**
 * Independent full-payload expectation, from CalendarEvent constructor/toJSON
 * and createEvent.withAppVersion. No product serializer or submit method is
 * invoked to construct the expectation. Empty nested User strings/false values
 * are retained; JSON removes undefined extension fields just as on the wire.
 */
function expectedUser(raw: Json): Json {
    return {
        id: raw.id || raw.email, name: raw.name || '', email: raw.email,
        first_name: raw.first_name || raw.name || '', last_name: raw.last_name || '',
        phone: raw.phone || '', organisation: raw.organisation || '',
        notes: raw.notes || '', photo: raw.photo || '', photo_upload_id: '',
        username: raw.username || '', organizer: false, checked_in: false,
        required: true, resource: false, locatable: false, response_status: '',
        department: raw.department || '', groups: raw.groups || [],
        extension_data: {}, is_external: false, visit_expected: true,
        assistance_required: false,
    };
}
function expectedCalendarBody(raw: RawMeeting, room: Json): Json {
    const organiser = expectedUser(raw.organiser);
    return {
        event_start: Math.floor(raw.date / 1000),
        event_end: Math.floor(raw.date_end / 1000),
        creator: raw.creator, host: raw.host,
        attendees: [organiser, { ...room, resource: true }],
        resources: [room], title: raw.title,
        is_system_event: false, private: false, all_day: false,
        timezone: 'UTC', recurring: false, organiser,
        from_bookings: false, update_master: false,
        system: room,
        // createEvent constructs a second CalendarEvent: old_system defaults
        // to its input system when old_system is null/undefined.
        old_system: room, attachments: [], deleted: false,
        location: raw.location || room.display_name || room.name,
        setup_time: 0, breakdown_time: 0, visibility: 'normal',
        permission: 'OPEN', system_id: room.id,
        extension_data: {
            department: '', needs_space: true, tags: [],
            attendance_type: 'ONSITE', catering: [], assets: [],
            images: [], view_access: 'OPEN',
            // CalendarEvent keeps extension_data.permission in step with
            // permission (event.class.ts:532-534); observed on the wire.
            permission: 'OPEN',
            app_name: 'Browser Meeting Simulation',
            app_version: VERSION.raw || VERSION.version || VERSION.hash,
        },
    };
}

function formSnapshot(page: Page): Promise<Snapshot> {
    return page.locator('meeting-flow-options').evaluate((element) => {
        const c = (window as DebugWindow).ng?.getComponent(element) as {
            form_value(): RawMeeting; form(): { valid(): boolean };
            loading(): boolean;
            _event_form: { spaces(): Json[] };
        } | undefined;
        if (!c) throw new Error('Read-only meeting options unavailable');
        return JSON.parse(JSON.stringify({
            valid: c.form().valid(), loading: c.loading(),
            raw: c.form_value(), rooms: c._event_form.spaces(),
        })) as Snapshot;
    });
}

async function openMeeting(page: Page, audit: Audit, overrides: Settings,
    host: typeof USER | typeof DELEGATE, selected: boolean) {
    const settings = { ...BASE, ...overrides };
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 1);
    date.setUTCHours(10, 0, 0, 0);
    const organiser = { id: host.id, name: host.name, email: host.email,
        groups: host.groups, department: '', is_external: false, visit_expected: false };
    const draft = {
        id: '', title: TITLE, creator: USER.email, host: host.email, organiser,
        date: date.valueOf(), date_end: date.valueOf() + 3_600_000, duration: 60,
        all_day: false, private: false, recurring: false, recurrence: null,
        resources: selected ? [ROOMS[0]] : [], attendees: [], assets: [], catering: [],
        meeting_provider: null, timezone: 'UTC', visibility: 'normal',
        needs_space: true, needs_parking: false, attachments: [],
        setup_time: 0, breakdown_time: 0, body: '',
    };
    const cid = createHash('md5').update(APP.origin + '/oauth-resp.html').digest('hex');
    await page.addInitScript(({ origin, cid, bearer, settings, draft }) => {
        if (location.origin !== origin) return;
        localStorage.clear(); sessionStorage.clear();
        localStorage.setItem(cid + '_access_token', bearer);
        localStorage.setItem(cid + '_expires_at', String(Date.now() + 60 * 60_000));
        localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(settings));
        localStorage.setItem('APP.locale', 'en-US');
        localStorage.setItem('PLACEOS.locale', 'en-US');
        localStorage.setItem('mock', 'false');
        sessionStorage.setItem('PLACEOS.event_form', JSON.stringify(draft));
    }, { origin: APP.origin, cid, bearer: FAKE_BEARER, settings, draft });
    await getOnly(page, (url) => url.pathname === '/auth/authority' && hasParams(url, {}),
        () => ({ id: PREFIX + 'authority', name: 'Browser-only authority',
            domain: APP.host, version: '3.0.0', session: false, production: false,
            config: { org_zone: ORGANISATION } }));
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/users/current' && hasParams(url, {}),
        () => USER);
    await syntheticGets(page);
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expect(page.locator('meeting-flow-options')).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as DebugWindow).setting?.(name), key)).toEqual(value);
    }
    await expect.poll(() => formSnapshot(page)).toMatchObject({
        valid: true, loading: false, raw: {
            id: '', title: TITLE, creator: USER.email, host: host.email,
            date: draft.date, date_end: draft.date_end, duration: 60,
            all_day: false, assets: [], catering: [], attendees: [],
            organiser: { id: host.id, email: host.email, groups: host.groups },
        },
    });
    await expect.poll(async () => (await formSnapshot(page)).raw.resources.length)
        .toBe(selected ? 1 : 0);
    await expect.poll(async () => (await formSnapshot(page)).rooms.map((room) => room.id).sort())
        .toEqual(ROOMS.map((room) => room.id).sort());
    await expect.poll(() => audit.fixtures['/api/engine/v2/users/current'] ?? 0)
        .toBeGreaterThan(0);
    const confirm = page.locator('meeting-flow-options button[btn]').filter({
        has: page.locator('icon', { hasText: /^\s*task_alt\s*$/ }),
    });
    await expect(confirm).toHaveCount(1);
    await expect(confirm).toBeEnabled();
    await expect(page.locator('mat-dialog-container')).toHaveCount(0);
    expect(audit.fixtures[HOST_PATH] ?? 0, 'delegate lookup has not happened before submission').toBe(0);
    return confirm;
}
async function armSubmission(page: Page, audit: Audit, room_id: string) {
    const snapshot = await formSnapshot(page);
    const room = (snapshot.raw.resources.length ? snapshot.raw.resources : snapshot.rooms)
        .find((room) => room.id === room_id);
    if (!room) throw new Error('Expected synthetic room is not loaded');
    const fixture_room = ROOMS.find((item) => item.id === room_id)!;
    expect(room).toMatchObject({
        id: room_id, email: fixture_room.email, zones: ZONES,
    });
    // No arbitrary matcher or unchecked payload echo is permitted.
    audit.submission = {
        expected: expectedCalendarBody(snapshot.raw, room),
        armed: true, bodies: [], completed: false,
    };
}
async function expectSimulatedSuccess(page: Page, audit: Audit) {
    await expect.poll(() => audit.submission?.completed).toBe(true);
    expect(audit.submission?.bodies).toEqual([audit.submission?.expected]);
    await expect(page).toHaveURL(/#\/book\/meeting\/success$/);
    await expect(page.locator('meeting-flow-success [name="meeting-created-continue"]')).toBeVisible();
    expect(audit.refused, 'no extra mutation or socket attempt').toEqual([]);
}

for (const enabled of [true, false]) {
    test('events.force_current_user_for_booking_rules=' + enabled + ' resolves the rule host while saving for the delegate',
        async ({ isolated: { page, audit } }) => {
            expect(USER.groups).not.toContain(GROUP);
            expect(DELEGATE.groups).toEqual([GROUP]);
            const confirm = await openMeeting(page, audit, {
                'app.events.force_current_user_for_booking_rules': enabled,
                'app.events.no_space_resource': '',
            }, DELEGATE, true);
            const before = await formSnapshot(page);
            expect(before.raw.resources.map((room) => room.id)).toEqual([ROOMS[0].id]);
            await armSubmission(page, audit, ROOMS[0].id);
            await confirm.click();
            await expectSimulatedSuccess(page, audit);
            // Snapshot was zero before clicking; completion proves rules and
            // availability checks have finished, making this negative reliable.
            expect(audit.fixtures[HOST_PATH] ?? 0).toBe(enabled ? 0 : 1);
            expect(audit.submission?.bodies[0].host).toBe(DELEGATE.email);
            expect((audit.submission?.bodies[0].organiser as Json).email).toBe(DELEGATE.email);
            expect(audit.submission?.bodies).toEqual([audit.submission?.expected]);
        });
}

