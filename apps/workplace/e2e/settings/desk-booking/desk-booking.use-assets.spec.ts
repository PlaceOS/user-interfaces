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
const CATEGORY='e2e-readonly-desks-category';
const TYPE='e2e-readonly-desks-type';
const METADATA_NAME='E2E metadata source desk';
const ASSET_NAME='E2E assets source desk';
const ENGINE='/api/engine/v2/';
function exactQuery(url: URL, expected: Record<string, string>) {
    return [...url.searchParams].length === Object.keys(expected).length &&
        Object.entries(expected).every(([key, value]) => url.searchParams.get(key) === value);
}

type LevelRow = { zone?: { id?: string }; metadata?: Record<string, unknown> };

async function prepareSources(page: Page, audit: Audit) {
    const seen = { metadata: 0, categories: 0, types: 0, assets: 0 };
    // Page routes run before the context's existing read-only guard. Fallback
    // (never continue) keeps that guard authoritative for all unmatched traffic.
    // Fixture problems are recorded in the audit (failing the test in teardown)
    // and the request is aborted, never passed on to the real backend.
    await page.route('**/api/**', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (request.method() !== 'GET' || !ORIGINS.has(url.origin)) {
            await route.fallback();
            return;
        }
        let body: unknown;
        try {
            if (url.pathname === `${ENGINE}asset_categories` &&
                exactQuery(url, { hidden: 'true', limit: '500' })) {
                seen.categories++;
                body = [{ id: CATEGORY, name: '_DESKS_', hidden: true, created_at: 1 }];
            } else if (url.pathname === `${ENGINE}asset_types` &&
                exactQuery(url, { category_id: CATEGORY, limit: '500' })) {
                seen.types++;
                body = [{ id: TYPE, category_id: CATEGORY, name: '_DESKS_', brand: 'PlaceOS', created_at: 1 }];
            } else if (url.pathname === `${ENGINE}assets` && url.searchParams.get('zone_id') &&
                exactQuery(url, { zone_id: url.searchParams.get('zone_id')!, type_id: TYPE, limit: '500' })) {
                seen.assets++;
                const zone_id = url.searchParams.get('zone_id')!;
                body = [{
                    id: `e2e-readonly-asset-${zone_id}`, asset_type_id: TYPE,
                    zone_id, map_id: `e2e-readonly-asset-map-${zone_id}`,
                    identifier: ASSET_NAME, name: ASSET_NAME, bookable: true,
                    assigned_to: '', place_groups: [], features: [], images: [],
                    security_system_groups: [],
                }];
            } else if (/^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(url.pathname) &&
                exactQuery(url, { name: 'desks' })) {
                // Preserve real level identities from the app's own GET. Replace
                // only desk details in this browser response; never save metadata.
                // The same GET to the same origin-checked URL, with no redirect or
                // retry, so it cannot reach an unchecked origin or change data.
                const response = await route.fetch({ method: 'GET', maxRedirects: 0, maxRetries: 0 });
                const rows: unknown = response.ok() ? await response.json() : undefined;
                const problem = !response.ok() ? 'level metadata GET must succeed (status ' + response.status() + ')'
                    : !Array.isArray(rows) ? 'child metadata must be an array'
                        : rows.length === 0 ? 'fixture requires existing level metadata'
                            : (rows as LevelRow[]).some((row) => !row?.zone?.id) ? 'metadata must identify an existing level'
                                : '';
                if (problem) {
                    audit.monitoring_errors.push('desk metadata fixture: ' + problem);
                    await route.abort('failed');
                    return;
                }
                body = (rows as LevelRow[]).map((row) => ({
                    ...row,
                    metadata: {
                        ...row.metadata,
                        desks: { name: 'desks', details: [{
                            id: `e2e-readonly-metadata-${row.zone!.id}`,
                            map_id: `e2e-readonly-metadata-map-${row.zone!.id}`,
                            name: METADATA_NAME, bookable: true, assigned_to: '',
                            groups: [], features: [], images: [], security: '',
                        }] },
                    },
                }));
                seen.metadata++;
            } else {
                await route.fallback();
                return;
            }
        } catch (error) {
            audit.monitoring_errors.push('desk source fixture: ' + String(error));
            await route.abort('failed').catch(() => undefined);
            return;
        }
        audit.fixtures['desk sources'] = (audit.fixtures['desk sources'] ?? 0) + 1;
        await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
    });
    return seen;
}

for(const enabled of [false,true]){
 test('remaining draft: desks.use_assets '+enabled+' selects assets API versus level metadata',async({staffPage,audit})=>{
  // Register source fixtures after bootstrap helpers, before navigation.
  const prepared=await prepare(staffPage,audit,{'app.features':['desks'],'app.desks.use_assets':enabled,
    'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,'app.desks.can_book_lockers':false});
  const seen=await prepareSources(staffPage,audit);
  await staffPage.goto('/#/book/desk/form');await prepared.ready();
  const list=staffPage.locator('desk-flow-select-list');await expect(list).toBeVisible();
  await expect(staffPage.locator('desk-flow-select-map')).toHaveCount(0);
  const expected=enabled?ASSET_NAME:METADATA_NAME;const other=enabled?METADATA_NAME:ASSET_NAME;
  await expect(list.locator('li[item]').filter({hasText:expected}).first()).toBeVisible();
  await expect(list.locator('li[item]').filter({hasText:other})).toHaveCount(0);
  if(enabled){expect(seen.categories).toBeGreaterThan(0);expect(seen.types).toBeGreaterThan(0);expect(seen.assets).toBeGreaterThan(0);}
  else {expect(seen.metadata).toBeGreaterThan(0);expect(seen.categories).toBe(0);expect(seen.types).toBe(0);expect(seen.assets).toBe(0);}
  await untouchedDesk(staffPage);
 });
}
