import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { DeskFlow } from '../../../../../e2e/support/desk/desk-flow.page';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Setting: explore.colors (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Current routed desk flow with browser-local fixtures.
// Covers space-free and fallback free, not desk-free.
// The existing desk-free product defect remains unresolved.
type Settings = Record<string, unknown>;
type Debug = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
    app?: { org?: { initialised(): boolean; building?: { id: string; name: string }; region?: { id: string } } };
    codexGeoCalls?: number;
};
type Identity = { id: string; email: string; name: string; groups?: string[] };
type Audit = {
    websocket_attempts: string[];
    blocked_control_attempts: string[];
    tooling_websockets: string[];
    page_errors: string[];
    app_errors: string[];
    monitoring_errors: string[];
    fixtures: Record<string, number>;
    blocked_requests: string[];
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const PIXEL = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="24"/%3E';

function safeURL(raw: string) {
    const url = new URL(raw);
    for (const key of [...url.searchParams.keys()]) url.searchParams.set(key, '[redacted]');
    return url.href;
}
// Same policy as the corrected Batch 2/4/5 drafts. HTTP: the parent
// readOnlyTest guard (wpa-settings-readonly-legacy.fixture.ts) aborts every
// non-GET or non-local /api request and fails the test in teardown; it does
// not route non-API assets (the app shell loads Google Fonts). WebSockets:
// the Vite dev-server socket is held open, the shell's local control socket is
// closed before it connects and recorded, and any other socket fails.
const test = readOnlyTest.extend<{ audit: Audit }>({
    audit: [async ({ staffPage }, use, info) => {
        const context = staffPage.context();
        const audit: Audit = { websocket_attempts: [], blocked_control_attempts: [],
            tooling_websockets: [], page_errors: [], app_errors: [], monitoring_errors: [], fixtures: {}, blocked_requests: [] };
        const observe = (page: Page) => {
            page.on('pageerror', (error) => audit.page_errors.push(error.name + ': ' + error.message));
            page.on('console', (message) => {
                if (message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text())) {
                    audit.app_errors.push(message.text().slice(0, 500));
                }
            });
        };
        observe(staffPage);
        context.on('page', observe);
        const closing: Promise<void>[] = [];
        try {
            // Page-local GET fixtures run first. Block every HTTP write and
            // unknown provider read before it can reach a server.
            await context.route('**/*', async (route) => {
                const request = route.request();
                const url = new URL(request.url());
                const read = ['GET', 'HEAD', 'OPTIONS'].includes(request.method());
                const provider = /^\/api\/staff\/v1\/(calendars|events)(\/|$)/.test(url.pathname);
                if (read && !provider && (!url.pathname.startsWith('/api/') || ORIGINS.has(url.origin))) {
                    return route.fallback();
                }
                audit.blocked_requests.push(request.method() + ' ' + url.pathname);
                await route.abort('blockedbyclient');
            });
            await context.routeWebSocket('**/*', (socket) => {
                let socket_url = '<unparsed URL>';
                try {
                    const url = new URL(socket.url());
                    socket_url = safeURL(url.href);
                    const app = new URL(APP_URL);
                    const local = url.host === app.host &&
                        url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
                    // Vite client.mjs:856-865 opens this socket; closing it makes
                    // the client poll and reload (:993-998). Held open, never connected.
                    if (local && url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token') {
                        audit.tooling_websockets.push(socket_url);
                        return;
                    }
                    if (local && url.pathname === '/api/engine/v2/systems/control') {
                        audit.blocked_control_attempts.push(socket_url);
                    } else audit.websocket_attempts.push(socket_url);
                } catch (error) {
                    audit.monitoring_errors.push('WebSocket interception for ' + socket_url + ': ' + String(error));
                }
                closing.push(socket.close().catch((error: unknown) => {
                    audit.monitoring_errors.push('WebSocket close for ' + socket_url + ': ' + String(error));
                }));
            });
            await use(audit);
        } finally {
            try {
                await context.close();
            } catch (error) {
                audit.monitoring_errors.push('Context close: ' + String(error));
            }
            await Promise.all(closing);
            try {
                await info.attach('settings-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
                });
            } finally {
                expect({
                    ws: audit.websocket_attempts, page: audit.page_errors,
                    app: audit.app_errors, monitoring: audit.monitoring_errors, blocked: audit.blocked_requests,
                }, 'zero unexpected WebSocket, application or monitoring failures').toEqual({
                    ws: [], page: [], app: [], monitoring: [], blocked: [],
                });
            }
        }
    }, { auto: true, timeout: 15_000 }],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Origin-limited GET-only responses. Non-GET always falls through to the guard. */
async function getOnly(page: Page, audit: Audit, name: string, match: (url: URL) => boolean,
    body: (url: URL) => unknown | Promise<unknown>) {
    await page.route((url) => ORIGINS.has(url.origin) && match(url), async (route: Route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const json = await body(new URL(route.request().url()));
            audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
            await route.fulfill({ json });
        } catch (error) {
            // Recorded (fails in teardown); the unmodified GET continues to the guard.
            audit.monitoring_errors.push(name + ' fixture: ' + String(error));
            await route.fallback().catch(() => undefined);
        }
    });
}
const CATEGORIES = [
    { id: 'codex-next20-catering', name: '_CATERING_', hidden: true },
    { id: 'codex-next20-desks', name: '_DESKS_', hidden: true },
    { id: 'codex-next20-parking', name: '_PARKING_', hidden: true },
    { id: 'codex-next20-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'codex-next20-catering': [], 'codex-next20-desks': ['_DESKS_'],
    'codex-next20-parking': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
    'codex-next20-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['visitor-invite'], 'app.chat.enabled': false, 'app.global_search': false,
    'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true, 'app.use_region': false, 'app.use_geolocation': false,
    'app.allow_dark_mode': false, 'app.logo_light': PIXEL,
    'app.bookings.multiple_visitors': false, 'app.bookings.all_day_default': false,
    'app.bookings.can_book_for_anyone': false, 'app.bookings.can_book_for_others': false,
    'app.visitors.can_book_for_anyone': false, 'app.visitors.can_book_for_others': false,
    'app.visitors.allow_all_day': false, 'app.bookings.use_building_timezone': false,
    'app.visitors.use_building_timezone': false, 'app.visitors.bookable_hours': null,
    'app.bookings.bookable_hours': null, 'app.visitors.reason_required': false,
};
async function prepare(page: Page, audit: Audit, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/users/current' &&
            response.request().method() === 'GET') identity = response.json();
    });
    // Parking/locker modules are not tested. Their shared bootstrap is read-only:
    // ensure_hidden_category/move_type_to_category must find matching records.
    await getOnly(page, audit, 'hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500', () => CATEGORIES);
    await getOnly(page, audit, 'hidden types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' && Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''),
    (url) => TYPES[url.searchParams.get('category_id')!].map((name) => ({
        id: 'codex-next20-type-' + name, name, category_id: url.searchParams.get('category_id'), brand: 'PlaceOS',
    })));
    await getOnly(page, audit, 'hidden assets', (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('codex-next20-type-'), () => []);
    await getOnly(page, audit, 'calendar list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    return {
        settings,
        user: async () => {
            if (!identity) throw new Error('the application must establish staff identity');
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading')).toHaveCount(1);
            await expect(page.locator('global-loading [loader]')).toHaveCount(0);
            await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect.poll(() => page.evaluate((name) => (window as Debug).setting?.(name), key),
                    { message: 'effective setting ' + key }).toEqual(value);
            }
        },
    };
}
// DeskFlowSelectMapComponent.styles(): space-<status>, then <status>.
const REGION = 'codex-next20-region';
const BUILDING_A = 'codex-next20-building-a';
const BUILDING_B = 'codex-next20-building-b';
const LEVEL_A = 'codex-next20-level-a';
const LEVEL_B = 'codex-next20-level-b';
const MAP = new URL('/codex-next20-map.svg', APP_URL).href;
const LEVELS = [
    { id: LEVEL_A, parent_id: BUILDING_A, name: 'Codex Level A', display_name: 'Codex Level A',
        tags: ['level'], map_id: MAP },
    { id: LEVEL_B, parent_id: BUILDING_B, name: 'Codex Level B', display_name: 'Codex Level B',
        tags: ['level'], map_id: MAP },
];
const DESK = 'Codex browser-only desk';

async function organisationFixture(page: Page, audit: Audit) {
    // Preserve the real authority, organisation and authenticated identity.
    // Only browser GETs for the source-supported region/building/level lists
    // and synthetic-zone metadata are replaced. All IDs are fixture-local.
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('PLACEOS.org') || ['PLACEOS.region', 'PLACEOS.building'].includes(key)) {
                localStorage.removeItem(key);
            }
        }
        sessionStorage.removeItem('PLACEOS.building');
    });
    await getOnly(page, audit, 'synthetic regions', (url) => url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'region' && url.searchParams.get('limit') === '200',
    (url) => [{ id: REGION, parent_id: url.searchParams.get('parent_id'), name: 'Codex Region',
        tags: ['region'], timezone: 'UTC' }]);
    await getOnly(page, audit, 'synthetic buildings', (url) => url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'building' && url.searchParams.get('parent_id') === REGION &&
        url.searchParams.get('limit') === '500', () => [
        { id: BUILDING_A, parent_id: REGION, name: 'Codex Building A', display_name: 'Codex Building A',
            tags: ['building'], timezone: 'UTC', location: '0,0' },
        { id: BUILDING_B, parent_id: REGION, name: 'Codex Building B', display_name: 'Codex Building B',
            tags: ['building'], timezone: 'UTC', location: '40,40' },
    ]);
    await getOnly(page, audit, 'synthetic levels', (url) => url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'level' && url.searchParams.get('limit') === '2500', () => LEVELS);
    // OrganisationService bulkMetadata(name,{parent_ids}) returns a map of
    // parent IDs to Metadata records; showMetadata returns { [name]: record }.
    await getOnly(page, audit, 'synthetic bulk metadata', (url) =>
        /^\/api\/engine\/v2\/metadata\/[^/]+\/bulk$/.test(url.pathname) &&
        !!url.searchParams.get('parent_ids') &&
        url.searchParams.get('parent_ids')!.split(',').every((id) => id.startsWith('codex-next20-')),
    (url) => Object.fromEntries(url.searchParams.get('parent_ids')!.split(',').map((id) =>
        [id, { id, name: decodeURIComponent(url.pathname.split('/')[5]), details: {} }])));
    await getOnly(page, audit, 'synthetic metadata', (url) =>
        /^\/api\/engine\/v2\/metadata\/codex-next20-[^/]+$/.test(url.pathname) &&
        !!url.searchParams.get('name'), (url) => {
        const name = url.searchParams.get('name')!;
        return { [name]: { id: url.pathname.split('/')[5], name,
            details: name.endsWith('_booking_rules') || name === 'map_regions' ? [] : {} } };
    });
    await getOnly(page, audit, 'synthetic desk metadata', (url) =>
        /^\/api\/engine\/v2\/metadata\/codex-next20-building-[ab]\/children$/.test(url.pathname) &&
        url.searchParams.get('name') === 'desks', (url) =>
        LEVELS.filter((level) => level.parent_id === url.pathname.split('/')[5]).map((level) => ({
            zone: level,
            metadata: { desks: { name: 'desks', details: [{
                id: 'codex-next20-desk-' + level.id, name: DESK + ' ' + level.id,
                map_id: 'codex-next20-desk-shape', bookable: true, assigned_to: '',
                groups: [], features: [], images: [],
            }] } },
        })));
    await getOnly(page, audit, 'empty desk bookings', (url) => url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'desk' && url.searchParams.has('period_start') &&
        url.searchParams.has('period_end'), () => []);
    await page.route((url) => url.href === MAP, async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        audit.fixtures['synthetic SVG'] = (audit.fixtures['synthetic SVG'] ?? 0) + 1;
        await route.fulfill({ contentType: 'image/svg+xml',
            body: '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
                '<rect id="codex-next20-desk-shape" x="80" y="60" width="80" height="60" fill="#aaaaaa"/></svg>' });
    });
}
// BookingFormService._computeAvailableResources -> bookedResourceList uses
// GET /bookings/booked with exactly these five parameters (bookings.fn.ts).
// A JSON string[] is the source-supported response; [] means no booked IDs.
async function bookedDeskResourcesFixture(page: Page, audit: Audit) {
    const zones = new Set([REGION, BUILDING_A, BUILDING_B, ...LEVELS.map((level) => level.id)]);
    const keys = ['type', 'zones', 'period_start', 'period_end', 'limit'];
    await getOnly(page, audit, 'empty booked desk resources', (url) => {
        const query = url.searchParams;
        const start = query.get('period_start') ?? '';
        const end = query.get('period_end') ?? '';
        return url.pathname === '/api/staff/v1/bookings/booked' &&
            [...query.keys()].length === keys.length &&
            keys.every((key) => query.getAll(key).length === 1) &&
            query.get('type') === 'desk' && zones.has(query.get('zones') ?? '') &&
            query.get('limit') === '200' && /^\d+$/.test(start) && /^\d+$/.test(end) &&
            Number.isSafeInteger(Number(start)) && Number(start) > 0 &&
            Number.isSafeInteger(Number(end)) && Number(end) > Number(start);
    }, () => []);
}
const DESK_SETTINGS: Settings = {
    'app.features': ['desks'], 'app.default_building': BUILDING_A,
    'app.desk.auto_allocation': null, 'app.desks.auto_allocation': false,
    'app.desks.can_book_for_others': false, 'app.bookings.can_book_for_others': false,
    'app.desks.allow_groups': false, 'app.desks.has_assets': false,
    'app.bookings.has_assets': false, 'app.desks.can_book_lockers': false,
    'app.desks.use_assets': false, 'app.use_region': false,
    'app.basic_user_search': true, 'app.desks.bookable_hours': null,
    'app.maps_people.keys': {}, 'app.maps_people.use_zones': [],
    'app.explore.cisco_maps.enabled': false,
    'app.desks.allow_recurrence': false, 'app.desks.allow_multiple': false,
};
// Current runtime: desk-flow-new/desk-flow-select(-map).component.ts. The
// desk map is reached through the List/Map toggle; no desk is selected and the
// details form is never confirmed.
async function deskForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...DESK_SETTINGS, ...overrides });
    await organisationFixture(page, audit);
    await bookedDeskResourcesFixture(page, audit);
    const flow = new DeskFlow(page);
    await page.goto('/#/book/desk/form');
    await fixture.ready();
    await expect(flow.title).toBeEditable();
    await expect.poll(() => audit.fixtures['synthetic buildings'] ?? 0).toBeGreaterThan(0);
    await expect.poll(() => audit.fixtures['synthetic levels'] ?? 0).toBeGreaterThan(0);
    // setMapView() only offers levels holding a loaded bookable desk, so wait
    // for the debounced desk load before switching views.
    await expect.poll(() => audit.fixtures['synthetic desk metadata'] ?? 0).toBeGreaterThan(0);
    const list = page.locator('desk-flow-select-list');
    await expect(list).toBeVisible();
    await expect(list.locator('mat-spinner')).toHaveCount(0);
    await expect(list.locator('li[item]').filter({ hasText: DESK + ' ' + LEVEL_A })).toHaveCount(1);
    await expect(flow.chosenDesks).toHaveCount(0);
    return { flow, fixture };
}
async function deskMap(page: Page) {
    const select = page.locator('desk-flow-select');
    await expect(select).toBeVisible();
    await expect(select.locator('desk-flow-select-map')).toHaveCount(0);
    // The view toggle's icon ligature is lowercase `map` (desk-flow-select.component.ts).
    await select.locator('button', { has: page.locator('icon', { hasText: /^\s*map\s*$/ }) }).click();
    // The map host has no box of its own (its content is absolutely positioned),
    // so presence rather than visibility proves the map view rendered.
    const map = select.locator('desk-flow-select-map');
    await expect(map).toHaveCount(1);
    await expect(map.locator('interactive-map')).toHaveCount(1);
    return map;
}
async function untouchedDesk(page: Page, flow: DeskFlow) {
    await expect(page).toHaveURL(/#\/book\/desk\/form$/);
    await expect(page.locator('desk-flow-success')).toHaveCount(0);
    await expect(flow.chosenDesks).toHaveCount(0);
}

for (const { key, colour } of [
    { key: 'space-free', colour: '#123456' },
    { key: 'free', colour: '#654321' },
]) {
    test('explore.colors ' + key + ' paints the free desk ' + colour,
        async ({ staffPage, audit }) => {
            const { flow } = await deskForm(staffPage, audit, {
                'app.explore.colors': { [key]: colour },
            });
            const map = await deskMap(staffPage);
            await expect.poll(() => audit.fixtures['synthetic SVG'] ?? 0).toBeGreaterThan(0);
            await expect.poll(() => audit.fixtures['empty booked desk resources'] ?? 0).toBeGreaterThan(0);
            // The renderer is canvas-based, not a DOM SVG. The map component
            // builds the per-desk style map from app.explore.colors and passes
            // it to interactive-map; read its own styles() for the free fixture desk.
            const fill = () => map.evaluate((element) => {
                const c = (window as Debug).ng?.getComponent(element) as {
                    styles(): Record<string, { fill?: string }>;
                } | undefined;
                return c?.styles()['#codex-next20-desk-shape']?.fill;
            });
            await expect.poll(fill, { message: 'the fixture desk must be styled on the map' }).toBeTruthy();
            await expect.poll(fill, { message: 'explore.colors ' + key + ' must reach the free desk style' }).toBe(colour);
            // Prove actual renderer output, not only the Angular style input.
            // The SVG contains one grey rectangle; neither custom colour is in
            // the fixture asset. Never patch the renderer or its drawing calls.
            const canvas = map.locator('interactive-map dynamic-map canvas');
            await expect(canvas).toHaveCount(1);
            await expect(canvas).toBeVisible();
            await expect(map.locator('dynamic-map mat-spinner')).toHaveCount(0);
            const colours = ['#123456', '#654321'];
            const pixels = () => canvas.evaluate((element, values) => {
                const canvas = element as HTMLCanvasElement;
                const context = canvas.getContext('2d');
                if (!context || !canvas.width || !canvas.height) return [0, 0];
                const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
                return values.map((hex) => {
                    const rgb = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
                    let count = 0;
                    for (let i = 0; i < data.length; i += 4) {
                        if (data[i] === rgb[0] && data[i + 1] === rgb[1] &&
                            data[i + 2] === rgb[2] && data[i + 3] === 255) count++;
                    }
                    return count;
                });
            }, colours);
            const expected = colours.indexOf(colour);
            await expect.poll(async () => (await pixels())[expected], {
                message: 'the rendered desk must contain the configured opaque colour',
            }).toBeGreaterThan(100);
            await expect.poll(async () => (await pixels())[1 - expected], {
                message: 'the other configured colour must be absent',
            }).toBe(0);
            expect(audit.blocked_requests, 'zero attempted writes or provider requests').toEqual([]);
            await untouchedDesk(staffPage, flow);
        });
}
