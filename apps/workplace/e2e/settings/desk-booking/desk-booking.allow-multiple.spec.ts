// NOT RUN — awaiting manual validation. Source-only preparation; no execution.
// Setting: desks.allow_multiple. Helpers below are copied unchanged from general/general.use-region.spec.ts.
import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Current UI adaptation. Staff-only readOnlyTest and test-local safety audit. Unrelated specs are unchanged.

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
                await info.attach('codex-next20-safety-audit', {
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


// Current runtime: desk-flow-new/desk-flow-details.component.ts.
// New scenarios below are NOT RUN; existing accepted tests remain unchanged.
// Auto-allocation is pinned only to expose the desktop details controls. Never
// click the parent's confirmation action, select a resource, or save a booking.
async function openDesk(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, {
        'app.features': ['desks'], 'app.feature_groups': {},
        'app.desk.auto_allocation': true, 'app.desks.auto_allocation': true,
        'app.desks.hide_title': false, 'app.desks.allow_groups': false,
        'app.desks.can_book_for_others': false, 'app.bookings.can_book_for_others': false,
        'app.desks.can_book_lockers': false, 'app.desks.has_assets': false,
        'app.desks.use_assets': true, 'app.desks.allow_recurrence': false,
        'app.desks.allow_time_changes': true, 'app.desks.allow_all_day': false,
        'app.bookings.allow_all_day': false, 'app.desk.all_day_default': false,
        'app.desks.all_day_default': false, 'app.bookings.all_day_default': false,
        'app.desks.use_building_timezone': false,
        'app.desks.available_period': 30, 'app.desks.bookable_hours': null,
        'app.desk.min_duration': null, 'app.desk.max_duration': null,
        'app.desk.duration_step': null, 'app.desk.custom_duration_options': null,
        'app.desks.min_duration': 30, 'app.desks.max_duration': 180,
        'app.desks.duration_step': 30, 'app.desks.custom_duration_options': [],
        'app.bookings.min_duration': 30, 'app.bookings.max_duration': 180,
        'app.bookings.duration_step': 30, 'app.bookings.custom_duration_options': [],
        ...overrides,
    });
    await page.goto('/#/book/desk/form'); await fixture.ready();
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    return { details, fixture };
}
async function untouchedDesk(page: Page) {
    await expect(page).toHaveURL(/#\/book\/desk\/form$/);
    await expect(page.locator('desk-flow-success')).toHaveCount(0);
    await expect(page.locator('desk-flow-details input[name$=".title"]')).toBeEditable();
}
async function futureDesk(page: Page, details: ReturnType<Page['locator']>) {
    const date=new Date();date.setUTCDate(date.getUTCDate()+1);date.setUTCHours(12,0,0,0);
    await details.locator('date-field button').first().click();
    await pickCalendarDay(page,page.locator('.cdk-overlay-container date-calendar'),date.valueOf(),{closes_on_pick:true});
    await details.locator('time-field[name="time"] button[time-field]').click();
    await page.locator('.cdk-overlay-container button[data-time="10:00"]').click();
}
async function durationMenu(page: Page, details: ReturnType<Page['locator']>) {
    await details.locator('duration-field button[duration-field]').click();
    const options=page.locator('.cdk-overlay-container button[data-duration]');
    await expect(options.first()).toBeVisible();return options;
}
const REGION = 'codex-next20-region';
const BUILDING_A = 'codex-next20-building-a';
const BUILDING_B = 'codex-next20-building-b';
const LEVEL_A = 'codex-next20-level-a';
const LEVEL_B = 'codex-next20-level-b';
const LEVELS = [
    { id: LEVEL_A, parent_id: BUILDING_A, name: 'Codex Level A', display_name: 'Codex Level A',
        tags: ['level'] },
    { id: LEVEL_B, parent_id: BUILDING_B, name: 'Codex Level B', display_name: 'Codex Level B',
        tags: ['level'] },
];
const GROUP = 'codex-next20-restricted-host';
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
// DeskFlowSelect.use_region selects region vs building controls and level scope.
// DeskFlowSelect.toggleDesk: desks.allow_multiple accumulates resources; otherwise each pick replaces the last.
// Selection is local form state only. Never Continue, Confirm or save.
const MULTI=[{id:'codex-next20-multi-desk-1',name:'Codex multi desk one'},{id:'codex-next20-multi-desk-2',name:'Codex multi desk two'}];
for(const multiple of [false,true]){
 test('remaining draft: desks.allow_multiple '+multiple+' accumulates or replaces local desk picks',async({staffPage,audit})=>{
  await organisationFixture(staffPage,audit);await bookedDeskResourcesFixture(staffPage,audit);
  // Registered after organisationFixture, so it answers building A's desk metadata with two desks on level A.
  await getOnly(staffPage,audit,'two desk metadata',url=>url.pathname==='/api/engine/v2/metadata/'+BUILDING_A+'/children'&&url.searchParams.get('name')==='desks',()=>[{
   zone:LEVELS[0],metadata:{desks:{name:'desks',details:MULTI.map(d=>({...d,map_id:d.id+'-shape',bookable:true,assigned_to:'',groups:[],features:[],images:[]}))}},
  }]);
  await openDesk(staffPage,audit,{'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,
    'app.desks.use_assets':false,'app.default_building':BUILDING_A,'app.use_region':false,'app.desks.allow_multiple':multiple});
  const list=staffPage.locator('desk-flow-select-list');await expect(list).toBeVisible();await expect(list.locator('mat-spinner')).toHaveCount(0);
  // BookingFormService only starts the desk load once _requests_ready() holds and a 300 ms debounce elapses;
  // loading() is '' before that, so "no spinner" does not prove the metadata GET has been answered yet.
  await expect.poll(()=>audit.fixtures['two desk metadata']??0).toBeGreaterThan(0);
  const pick=(name:string)=>list.locator('li[item]').filter({hasText:name}).locator('button[name="select-item"]');
  await expect(pick(MULTI[0].name)).toHaveCount(1);await expect(pick(MULTI[1].name)).toHaveCount(1);
  await pick(MULTI[0].name).click();await pick(MULTI[1].name).click();
  const picker=staffPage.locator('desk-flow-select');
  await expect.poll(()=>picker.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {model():{resources?:{id:string}[]}}|undefined;return c?.model().resources?.map(r=>r.id);}))
   .toEqual(multiple?[MULTI[0].id,MULTI[1].id]:[MULTI[1].id]);
  await untouchedDesk(staffPage);
 });
}
