/**
 * User-owned Setting: events.allow_attendee_internal_or_external
 * Exact runtime key: app.events.allow_attendee_internal_or_external
 * Coverage: 1 unique Setting / 2 scenarios
 * Status: VERIFIED PASS (2/2 scenarios, 2026-10-27, run manually by the user on
 *   test/e2e-workplace-settings after merging develop; browser-only synthetic
 *   fixtures; --project=local --no-deps --workers=1). No booking reached any backend.
 *
 * Scenarios (one synthetic internal-domain attendee, one selected room):
 *   1. true: the "Internal or external" block shows the attendee with an
 *      Internal/External radio group, Internal selected by default; choosing
 *      External and confirming sends extension_data.attendee_flags =
 *      { <email>: { visitor_internal_or_external: 'external' } }.
 *   2. false: the block is absent; confirming sends no attendee_flags.
 * events.allow_international is held false in both.
 *
 * Source (develop d0ae2e306):
 * - libs/form-fields/src/lib/user-list-field.component.ts:
 *   show_internal_or_external = flags() && events.allow_attendee_internal_or_external;
 *   per active_list() user a mat-radio-group (internal/external) whose value is
 *   getAttendeeType() -> toVisitorInternalOrExternal (default 'internal');
 *   setAttendeeType writes extension_data.visitor_internal_or_external.
 * - meeting-flow-new/meeting-flow-options.component.ts passes [flags]="true"
 *   (rendered while events.hide_attendees is false).
 * - libs/events/src/lib/event-form.service.ts postForm: attendeeFlagsFrom()
 *   (libs/events/src/lib/event-form.ts) collects flags keyed by lower-cased
 *   email into ext.attendee_flags, and deletes each attendee's extension_data.
 *
 * Harness copied from the passing room-booking.no-space-resource.spec.ts
 * (test/e2e-workplace-settings): one context route installed before navigation,
 * origin/redirect checks first, exact local GET fixtures, every WebSocket and
 * every mutation refused except ONE armed POST /api/staff/v1/events (no query,
 * JSON) whose body carries this draft's identity; it gets a local 201. Nothing
 * reaches a backend. Fresh storage, blocked service workers, strict teardown.
 * Run with --project=local --no-deps --workers=1 (no backend or preflight needed).
 */
import { createHash } from 'node:crypto';
import {
    test as base, expect, type Page, type WebSocketRoute,
} from '@playwright/test';
import { BULK_METADATA, type DebugWindow, type GetFixture, LIST_METADATA, type Settings, validPeriod } from '../support/settings-harness';
type Json = Record<string, unknown>;
/** One armed POST is accepted only when `accepts` holds for its JSON body. */
type Submission = { accepts: (body: Json) => boolean; armed: boolean; bodies: Json[]; completed: boolean };
type Connection = { binds: string[]; delivered: string[]; unbinds: string[] };
type Audit = {
    refused: string[]; errors: string[]; monitoring: string[];
    fixtures: Record<string, number>; connections: Connection[];
    submission?: Submission;
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
const FAKE_BEARER = 'browser-only-attendee-flags-not-a-valid-credential';
const FIXTURES = new WeakMap<Page, GetFixture[]>();
/** Every synthetic zone and system id starts with this prefix. */
const PREFIX = 'e2e-attendee-type-';
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
/** Internal-domain attendee (app.internal_user_domain), so no externals rule applies. */
const GUEST = { id: PREFIX + 'guest', name: 'Synthetic Guest', email: 'guest@dev.place.tech',
    groups: [] as string[], department: '', is_external: false };
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
    'app.events.multiple_spaces': false, 'app.events.hide_attendees': false,
    'app.events.hide_notes': true, 'app.events.bookable_hours': null,
    'app.events.default_duration': 60, 'app.events.min_duration': 30,
    'app.events.max_duration': 180, 'app.events.duration_step': 30,
    'app.events.custom_duration_options': [], 'app.events.setup': 0,
    'app.events.breakdown': 0, 'app.events.overflow': {},
    'app.catering.backend': 'native', 'app.catering_provider': '',
    'app.events.allow_international': false,
    'app.events.allow_attendee_internal_or_external': false,
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
                        // (submitAndCapture), not as a swallowed handler error.
                        capture.bodies.push(body);
                        if (!capture.accepts(body)) {
                            await refuse('outgoing event JSON mismatch'); return;
                        }
                        // Local response only: the checked body plus a synthetic id.
                        await route.fulfill({ status: 201, json: {
                            ...body, id: PREFIX + 'synthetic-created-event',
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
                await info.attach('settings-safety-audit', {
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
                    expect(audit.submission.bodies).toHaveLength(1);
                }
            }
        }
    },
});

function matchBinding(_url: URL, _id: string) {
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

async function openMeeting(page: Page, audit: Audit, overrides: Settings) {
    const host = USER;
    const selected = true;
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
        resources: selected ? [ROOMS[0]] : [], attendees: [GUEST], assets: [], catering: [],
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
            all_day: false, assets: [], catering: [],
            organiser: { id: host.id, email: host.email, groups: host.groups },
        },
    });
    await expect.poll(async () => (await formSnapshot(page)).raw.resources.length)
        .toBe(selected ? 1 : 0);
    await expect.poll(async () => (await formSnapshot(page)).raw.attendees.map((a) => a.email))
        .toEqual([GUEST.email]);
    // The rendered attendee chip proves the attendee list has drawn its rows.
    await expect(page.locator('meeting-flow-options a-user-list-field mat-chip-row[user]')
        .filter({ hasText: GUEST.name })).toBeVisible();
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
/**
 * Arm exactly one POST /api/staff/v1/events. The body must carry this draft's
 * identity (title, host, the selected room, the one attendee); everything the
 * setting governs is asserted explicitly afterwards.
 */
function armSubmission(audit: Audit) {
    audit.submission = {
        accepts: (body) => body.title === TITLE && body.host === USER.email &&
            Array.isArray(body.resources) &&
            (body.resources as Json[]).map((r) => r.id).join() === ROOMS[0].id &&
            Array.isArray(body.attendees) &&
            (body.attendees as Json[]).some((a) => a.email === GUEST.email),
        armed: true, bodies: [], completed: false,
    };
}
async function submitAndCapture(page: Page, audit: Audit, confirm: ReturnType<Page['locator']>) {
    armSubmission(audit);
    await confirm.click();
    await expect.poll(() => audit.submission?.completed).toBe(true);
    await expect(page).toHaveURL(/#\/book\/meeting\/success$/);
    await expect(page.locator('meeting-flow-success [name="meeting-created-continue"]')).toBeVisible();
    expect(audit.refused, 'no extra mutation or socket attempt').toEqual([]);
    expect(audit.submission?.bodies).toHaveLength(1);
    const body = audit.submission!.bodies[0];
    // postForm strips attendee extension_data before sending; flags live only
    // in the event's extension_data.attendee_flags.
    const guest = (body.attendees as Json[]).find((a) => a.email === GUEST.email)!;
    expect(guest.extension_data ?? {}).not.toHaveProperty('international');
    expect(guest.extension_data ?? {}).not.toHaveProperty('visitor_internal_or_external');
    return (body.extension_data ?? {}) as Json;
}

/** The per-attendee type row (block label BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL). */
const typeRow = (page: Page) => page.locator('meeting-flow-options a-user-list-field div')
    .filter({ has: page.locator('span', { hasText: GUEST.name }) })
    .filter({ has: page.locator('mat-radio-group') });

test('events.allow_attendee_internal_or_external=true marks the attendee external in the saved event',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openMeeting(page, audit,
            { 'app.events.allow_attendee_internal_or_external': true });
        await expect(page.locator('meeting-flow-options a-user-list-field label',
            { hasText: 'Internal or external' })).toBeVisible();
        const row = typeRow(page).last();
        await expect(row).toBeVisible();
        const internal = row.locator('mat-radio-button').filter({ hasText: 'Internal' });
        const external = row.locator('mat-radio-button').filter({ hasText: 'External' });
        await expect(row.locator('mat-radio-button')).toHaveCount(2);
        // toVisitorInternalOrExternal defaults an unset type to 'internal'.
        await expect(internal.locator('input[type="radio"]')).toBeChecked();
        await expect(external.locator('input[type="radio"]')).not.toBeChecked();
        await external.locator('input[type="radio"]').check();
        await expect(external.locator('input[type="radio"]')).toBeChecked();
        await expect.poll(async () => (await formSnapshot(page)).raw.attendees
            .map((a) => (a.extension_data as Json | undefined)?.visitor_internal_or_external))
            .toEqual(['external']);
        const ext = await submitAndCapture(page, audit, confirm);
        expect(ext.attendee_flags).toEqual({ [GUEST.email]: { visitor_internal_or_external: 'external' } });
    });

test('events.allow_attendee_internal_or_external=false hides the type block and saves no flags',
    async ({ isolated: { page, audit } }) => {
        const confirm = await openMeeting(page, audit,
            { 'app.events.allow_attendee_internal_or_external': false });
        // openMeeting has proven the attendee chip is rendered.
        await expect(page.locator('meeting-flow-options')).not.toContainText('Internal or external');
        await expect(page.locator('meeting-flow-options a-user-list-field mat-radio-group')).toHaveCount(0);
        const ext = await submitAndCapture(page, audit, confirm);
        expect(ext).not.toHaveProperty('attendee_flags');
    });
