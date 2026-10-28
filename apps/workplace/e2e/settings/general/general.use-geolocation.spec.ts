import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Setting: use_geolocation. Coverage: 1 unique setting, 3 scenarios (previously 2).
//   1. false: no geolocation call; the fallback (decoy building C, listed first) is chosen.
//   2. true at (40,40): the nearest building B is chosen.
//   3. true at (10,10): the nearest building A is chosen.
// C has location '0,0', which OrganisationService._closestBuilding skips, so only
// a real distance comparison between A ('10,10') and B ('40,40') picks A or B.
// Current UI adaptation. Staff-only readOnlyTest and test-local safety audit.

// Test-local safety infrastructure reused from the validated Visitor controls.
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
            tooling_websockets: [], page_errors: [], app_errors: [], monitoring_errors: [], fixtures: {} };
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
                    app: audit.app_errors, monitoring: audit.monitoring_errors,
                }, 'zero unexpected WebSocket, application or monitoring failures').toEqual({
                    ws: [], page: [], app: [], monitoring: [],
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
    'app.features': ['visitor-invite'], 'app.feature_groups': {}, 'app.chat.enabled': false, 'app.global_search': false,
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
    // requestSpacesForZone: exact GET query; no resource status connections.
    await getOnly(page, audit, 'empty landing rooms', (url) => url.pathname === '/api/engine/v2/systems' &&
        !!url.searchParams.get('zone_id') && url.searchParams.get('limit') === '500' &&
        url.searchParams.get('signage') === 'false' &&
        [...url.searchParams.keys()].every((key) => ['zone_id', 'limit', 'signage'].includes(key)), () => []);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
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
async function visitor(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, overrides);
    const form = new InviteVisitorForm(page);
    await form.open();
    await fixture.ready();
    await expect(form.reason).toBeVisible();
    await expect(form.sendButton).toBeVisible();
    await expect(form.successPanel).toHaveCount(0);
    return form;
}
async function untouchedVisitor(form: InviteVisitorForm) {
    await expect(form.sendButton).toBeVisible();
    await expect(form.successPanel).toHaveCount(0);
}
/** Public time-field options; calendar helper selects tomorrow without submitting. */
async function visitorTimes(page: Page, form: InviteVisitorForm) {
    const tomorrow = new Date(); tomorrow.setUTCDate(tomorrow.getUTCDate() + 1); tomorrow.setUTCHours(12, 0, 0, 0);
    await form.setDate(tomorrow.valueOf());
    await form.root.locator('a-time-field[name="time"] button[time-field]').click();
    const options = page.locator('.cdk-overlay-container button[data-time]');
    await expect(options.first()).toBeVisible();
    const values = await options.evaluateAll((elements) => elements.map((element) => element.getAttribute('data-time')!));
    await page.keyboard.press('Escape');
    return values.map((value) => {
        const [h, m] = value.split(':').map(Number);
        return h * 60 + m;
    });
}


const REGION = 'codex-next20-region';
const BUILDING_A = 'codex-next20-building-a';
const BUILDING_B = 'codex-next20-building-b';
/**
 * Decoy fallback: listed first, same timezone, location '0,0' (skipped by
 * _closestBuilding). _setDefaultBuilding's timezone match and buildings[0]
 * fallback both select it, never A or B.
 */
const BUILDING_C = 'codex-next20-building-c';
const LEVEL_A = 'codex-next20-level-a';
const LEVEL_B = 'codex-next20-level-b';
const LEVEL_C = 'codex-next20-level-c';
const LEVELS = [
    { id: LEVEL_C, parent_id: BUILDING_C, name: 'Codex Level C', display_name: 'Codex Level C',
        tags: ['level'] },
    { id: LEVEL_A, parent_id: BUILDING_A, name: 'Codex Level A', display_name: 'Codex Level A',
        tags: ['level'] },
    { id: LEVEL_B, parent_id: BUILDING_B, name: 'Codex Level B', display_name: 'Codex Level B',
        tags: ['level'] },
];
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
        { id: BUILDING_C, parent_id: REGION, name: 'Codex Building C', display_name: 'Codex Building C',
            tags: ['building'], timezone: 'UTC', location: '0,0' },
        { id: BUILDING_A, parent_id: REGION, name: 'Codex Building A', display_name: 'Codex Building A',
            tags: ['building'], timezone: 'UTC', location: '10,10' },
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
}
// OrganisationService._setDefaultBuilding -> geolocation only after saved/default restoration fails.
// Kept as data so the test body has no branches. The selected building is a
// positive check (it only settles once _setDefaultBuilding has run, after the
// geolocation step), so the geolocation call count is read after it.
const SCENARIOS = [
    { label: 'false falls back without geolocation', enabled: false, position: { latitude: 40, longitude: 40 },
        building: BUILDING_C, name: 'Codex Building C', calls: 0 },
    { label: 'true at (40,40) chooses the nearest building B', enabled: true, position: { latitude: 40, longitude: 40 },
        building: BUILDING_B, name: 'Codex Building B', calls: 1 },
    { label: 'true at (10,10) chooses the nearest building A', enabled: true, position: { latitude: 10, longitude: 10 },
        building: BUILDING_A, name: 'Codex Building A', calls: 1 },
];
for(const scenario of SCENARIOS){
 test('use_geolocation '+scenario.label,async({staffPage,audit})=>{
  const fixture=await prepare(staffPage,audit,{'app.features':['visitor-invite'],'app.default_building':null,'app.use_geolocation':scenario.enabled});
  await organisationFixture(staffPage,audit);
  await staffPage.addInitScript((position)=>{
   (window as Debug).codexGeoCalls=0;
   Object.defineProperty(navigator,'geolocation',{configurable:true,value:{getCurrentPosition:(success:PositionCallback)=>{
    (window as Debug).codexGeoCalls!++;
    success({coords:{latitude:position.latitude,longitude:position.longitude,accuracy:1,altitude:null,altitudeAccuracy:null,heading:null,speed:null},timestamp:Date.now()} as GeolocationPosition);
   }}});
  },scenario.position);
  await staffPage.goto('/#/book/visitor/form');await fixture.ready();
  await expect.poll(()=>staffPage.evaluate(()=>(window as Debug).app?.org?.building?.id)).toBe(scenario.building);
  await expect.poll(()=>staffPage.evaluate(()=>(window as Debug).codexGeoCalls)).toBe(scenario.calls);
  expect(audit.fixtures['synthetic buildings']??0).toBeGreaterThan(0);
  await expect(staffPage.locator('visitor-flow-details mat-select[name="building"]')).toHaveText(scenario.name);
  await expect(staffPage.locator('visitor-flow-details input[name$=".title"]')).toBeVisible();
  await expect(staffPage.locator('visitor-flow-success')).toHaveCount(0);
  // Re-checked after the view settled: the selection and call count hold.
  expect(await staffPage.evaluate(()=>(window as Debug).app?.org?.building?.id)).toBe(scenario.building);
  expect(await staffPage.evaluate(()=>(window as Debug).codexGeoCalls)).toBe(scenario.calls);
 });
}
