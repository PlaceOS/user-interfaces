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


const ROOM_ONE={id:'prepared-room-one',name:'Prepared Room One',display_name:'Prepared Room One',email:'prepared-room-one@example.invalid',bookable:true,capacity:1,features:[],images:[],zones:[],level:{id:'prepared-level',parent_id:'prepared-building'}};
const ROOM_TWO={...ROOM_ONE,id:'prepared-room-two',name:'Prepared Room Two',display_name:'Prepared Room Two',email:'prepared-room-two@example.invalid'};
async function roomProviderIsolation(page:Page,audit:Audit){
 // Any unrecognised provider GET fails closed before a calendar integration can be contacted.
 await page.route(url=>ORIGINS.has(url.origin)&&(url.pathname.startsWith('/api/staff/v1/calendars')||url.pathname.startsWith('/api/staff/v1/events')),async route=>{
  if(route.request().method()!=='GET')return route.fallback();
  audit.monitoring_errors.push('Unmatched calendar provider GET: '+new URL(route.request().url()).pathname);await route.abort('blockedbyclient');
 });
 await getOnly(page,audit,'calendar list',url=>url.pathname==='/api/staff/v1/calendars'&&[...url.searchParams].length===0,()=>[]);
 await getOnly(page,audit,'calendar availability',url=>url.pathname==='/api/staff/v1/calendars/availability'&&!!url.searchParams.get('system_ids')&&!!url.searchParams.get('period_start')&&!!url.searchParams.get('period_end')&&url.searchParams.get('system_ids')!.split(',').every(id=>[ROOM_ONE.id,ROOM_TWO.id].includes(id)),url=>url.searchParams.get('system_ids')!.split(',').map(id=>{const r=id===ROOM_ONE.id?ROOM_ONE:ROOM_TWO;return {id:r.id,name:r.name,email:r.email,resource:r,availability:[]};}));
 await getOnly(page,audit,'calendar event list',url=>url.pathname==='/api/staff/v1/events'&&!!url.searchParams.get('period_start')&&!!url.searchParams.get('period_end'),()=>[]);
}
async function openPreparedRoom(page:Page,audit:Audit,overrides:Settings,view:number,resources:unknown[]=[],attendees:unknown[]=[],extra?:()=>Promise<void>){
 const fixture=await prepare(page,audit,{'app.features':['spaces'],'app.feature_groups':{},'app.events.use_bookings':true,
  'app.events.allow_all_day':true,'app.events.allow_multiday':false,'app.events.allow_recurrence':false,'app.events.has_assets':false,
  'app.events.hide_attendees':false,'app.events.hide_notes':false,'app.events.allow_externals':false,
  'app.events.use_building_timezone':false,'app.catering.backend':'native','app.catering_provider':'',...overrides});
 await roomProviderIsolation(page,audit);
 await getOnly(page,audit,'prepared room list',url=>url.pathname==='/api/engine/v2/systems'&&!!url.searchParams.get('zone_id')&&url.searchParams.get('limit')==='500'&&url.searchParams.get('signage')==='false'&&[...url.searchParams.keys()].every(k=>['zone_id','limit','signage'].includes(k)),url=>[ROOM_ONE,ROOM_TWO].map(r=>({...r,zones:[url.searchParams.get('zone_id')]})));
 await getOnly(page,audit,'empty native room bookings',url=>url.pathname==='/api/staff/v1/bookings'&&url.searchParams.get('type')==='room'&&!!url.searchParams.get('period_start')&&!!url.searchParams.get('period_end'),()=>[]);
 await getOnly(page,audit,'prepared empty room rules',url=>/^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname)&&url.searchParams.get('name')==='room_booking_rules'&&[...url.searchParams.keys()].length===1,()=>({room_booking_rules:{name:'room_booking_rules',details:[]}}));
 await page.addInitScript(({resources,attendees})=>{
  const date=new Date();date.setUTCDate(date.getUTCDate()+1);date.setUTCHours(10,0,0,0);
  sessionStorage.removeItem('PLACEOS.event');
  sessionStorage.setItem('PLACEOS.event_form',JSON.stringify({title:'Prepared browser-only meeting',date:date.valueOf(),date_end:date.valueOf()+3600000,duration:60,all_day:false,resources,attendees}));
 },{resources,attendees});
 if(extra)await extra();
 await page.goto('/#/book/meeting/form?view='+view);await fixture.ready();
 const root=page.locator(view===0?'meeting-flow-details':view===1?'meeting-flow-space-select':'meeting-flow-options');await expect(root).toBeVisible();
 await expect(page.locator('meeting-flow-success')).toHaveCount(0);return root;
}
// EventFormService._applyDurationSettings -> all-day time-sync; current controls stay disabled, not removed.
for(const period of [{start:9,end:17},{start:10,end:16}]){
 test('remaining draft: events.all_day_period '+period.start+'-'+period.end+' sets the unsaved all-day interval',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.all_day_period':period},0);
  const box=root.locator('mat-checkbox input[type="checkbox"]');await expect(box).not.toBeChecked();await box.check();
  await expect.poll(()=>root.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {form_value():{all_day:boolean,date:number,duration:number}}|undefined;
   const m=c?.form_value();return m?{all_day:m.all_day,hour:new Date(m.date).getUTCHours(),minute:new Date(m.date).getUTCMinutes(),duration:m.duration}:null;
  })).toEqual({all_day:true,hour:period.start,minute:0,duration:(period.end-period.start)*60});
  await expect(root.locator('time-field[name="time"] button[time-field]')).toBeDisabled();await expect(root.locator('duration-field button[duration-field]')).toBeDisabled();
  await box.uncheck();await expect(root.locator('time-field[name="time"] button[time-field]')).toBeEnabled();
 });
}
