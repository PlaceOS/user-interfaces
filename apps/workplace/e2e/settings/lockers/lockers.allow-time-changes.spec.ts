import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Migrated unchanged from apps/workplace/e2e/local/claude-wpa-next25-lockers-draft.spec.ts (accepted: wpa-next25-L1..L4 (+ reruns)); only this setting's tests.


// Target: 8 lockers.* keys. Routes: /#/book/locker/form, /#/book/locker/success.
// Nothing is submitted; the success page reads a browser-only sessionStorage seed.
type Settings = Record<string, unknown>;
type Debug = Window & { setting?: (key: string) => unknown };
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

function safeURL(raw: string) {
    const url = new URL(raw);
    for (const key of [...url.searchParams.keys()]) url.searchParams.set(key, '[redacted]');
    return url.href;
}
// Same policy as the corrected Batch 2/4/5 drafts. HTTP: the parent
// readOnlyTest guard aborts every non-GET or non-local /api request and fails
// the test in teardown. WebSockets: the Vite dev-server socket is held open,
// the shell's local control socket is closed before it connects and recorded,
// and any other socket fails.
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
                    // Vite client.mjs:856-865; closing it reloads the page (:993-998).
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
                await info.attach('claude-next25-safety-audit', {
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
            audit.monitoring_errors.push(name + ' fixture: ' + String(error));
            await route.fallback().catch(() => undefined);
        }
    });
}
// ensure_hidden_category / ensure_type POST when a GET finds nothing and
// move_type_to_category PUTs on a category mismatch (parking-assets.fn.ts:71-157,
// locker-assets.fn.ts). One shared response carries every hidden category.
const CATEGORIES = [
    { id: 'claude-next25-catering', name: '_CATERING_', hidden: true },
    { id: 'claude-next25-desks', name: '_DESKS_', hidden: true },
    { id: 'claude-next25-parking', name: '_PARKING_', hidden: true },
    { id: 'claude-next25-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'claude-next25-catering': [], 'claude-next25-desks': ['_DESKS_'],
    'claude-next25-parking': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
    'claude-next25-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const COMMON: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.chat.enabled': false, 'app.global_search': false, 'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'], 'app.use_region': false, 'app.use_geolocation': false,
    'app.allow_dark_mode': false, 'app.use_24_hour_time': true,
};
async function prepare(page: Page, audit: Audit, settings: Settings,
    bookings: (type: string) => unknown[] | Promise<unknown[]> = () => []) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await getOnly(page, audit, 'hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500', () => CATEGORIES);
    await getOnly(page, audit, 'hidden types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' && Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''),
    (url) => TYPES[url.searchParams.get('category_id')!].map((name) => ({
        id: 'claude-next25-type-' + name, name, category_id: url.searchParams.get('category_id'), brand: 'PlaceOS',
    })));
    await getOnly(page, audit, 'hidden assets', (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('claude-next25-type-'), () => []);
    await getOnly(page, audit, 'calendar list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    // Parking/locker booking lists (ParkingService.loadBookings, locker flow
    // _loadTodaysBookings, schedule queryAllBookings): empty unless a test
    // supplies a synthetic GET row. Other booking types reach the real backend.
    await getOnly(page, audit, 'parking/locker bookings', (url) => url.pathname === '/api/staff/v1/bookings' &&
        ['parking', 'locker'].includes(url.searchParams.get('type') ?? ''),
    (url) => bookings(url.searchParams.get('type')!));
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    return {
        ready: async (bootstrap = true) => {
            await expect(page.locator('global-loading')).toHaveCount(1);
            await expect(page.locator('global-loading [loader]')).toHaveCount(0);
            await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect.poll(() => page.evaluate((name) => (window as Debug).setting?.(name), key),
                    { message: 'effective setting ' + key }).toEqual(value);
            }
            // Pages that start a hidden-asset bootstrap must read the fixture, never create records.
            if (bootstrap) await expect.poll(() => audit.fixtures['hidden categories'] ?? 0,
                { message: 'hidden-category bootstrap served by the fixture' }).toBeGreaterThan(0);
        },
    };
}


// ------------------------------------------------------------- shared form helpers
type Identity = { id: string; email: string; name: string };
/** The staff identity the app itself reads; no extra API call is made. */
function watchIdentity(page: Page) {
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/users/current' &&
            response.request().method() === 'GET') identity = response.json();
    });
    return async () => {
        await expect.poll(() => !!identity, { message: 'the app must read the staff identity' }).toBe(true);
        return identity!;
    };
}
async function openCalendar(page: Page, root: Locator) {
    const picker = page.locator('.cdk-overlay-container date-calendar');
    // Forms re-render after async init, so retry until the picker opens.
    await expect(async () => {
        if (!(await picker.isVisible().catch(() => false))) {
            await root.locator('a-date-field button').first().click({ timeout: 5_000 });
        }
        await expect(picker).toBeVisible({ timeout: 5_000 });
    }).toPass({ timeout: 30_000 });
    return picker;
}
/**
 * The calendar cell `offset` days after today. Cells are consecutive days, so
 * the index is counted from the cell carrying today's ring. If the day is past
 * the grid, move one month on: the right chevron (named schedule-previous-month
 * in date-calendar.component.ts) is disabled once the grid's last cell is past
 * `to`, so a later day cannot be selectable and null is returned.
 */
async function dayCell(page: Page, picker: Locator, offset: number): Promise<Locator | null> {
    const cells = picker.locator('button[name="schedule-set-date"]');
    await expect(cells.first()).toBeVisible();
    const today = await cells.evaluateAll((elements) =>
        elements.findIndex((element) => !!element.querySelector('div.border-secondary')));
    expect(today, 'the calendar marks today').toBeGreaterThanOrEqual(0);
    if (today + offset < await cells.count()) return cells.nth(today + offset);
    const next = picker.locator('button[name="schedule-previous-month"]');
    if (await next.isDisabled()) return null;
    const day = await page.evaluate((days) => {
        const date = new Date(); date.setDate(date.getDate() + days); return date.getDate();
    }, offset);
    await next.click();
    // Out-of-month cells carry text-base-300!; pick the in-month day.
    const cell = picker.locator('button[name="schedule-set-date"]:not([class*="text-base-300"])')
        .filter({ hasText: new RegExp('^\\s*' + day + '\\s*$') });
    await expect(cell).toHaveCount(1);
    return cell;
}
/** Whether the day `offset` days ahead is selectable. Closes the picker unchanged. */
async function dayEnabled(page: Page, root: Locator, offset: number) {
    const picker = await openCalendar(page, root);
    const cell = await dayCell(page, picker, offset);
    const enabled = cell ? await cell.isEnabled() : false;
    await page.keyboard.press('Escape');
    await expect(picker).toHaveCount(0);
    return enabled;
}
/** Chooses a day in the local form model only. */
async function pickDay(page: Page, root: Locator, offset: number) {
    const picker = await openCalendar(page, root);
    const cell = await dayCell(page, picker, offset);
    expect(cell, offset + ' days ahead must be reachable').not.toBeNull();
    await expect(cell!).toBeEnabled();
    await cell!.click();
    await expect(picker).toHaveCount(0);
}
/** Values of a time/duration menu (data-time "HH:mm" or data-duration minutes). */
async function menuValues(page: Page, trigger: Locator, attribute: 'data-time' | 'data-duration') {
    await expect(trigger).toBeEnabled();
    await trigger.click();
    const options = page.locator('.cdk-overlay-container button[' + attribute + ']');
    await expect(options.first()).toBeVisible();
    const values = await options.evaluateAll((elements, name) =>
        elements.map((element) => element.getAttribute(name)!), attribute);
    await page.keyboard.press('Escape');
    await expect(options).toHaveCount(0);
    return values.map((value) => {
        if (attribute === 'data-duration') return Number(value);
        const [h, m] = value.split(':').map(Number);
        return h * 60 + m;
    });
}
/** Real building rows with timezone rewritten (as in the accepted next20 draft). */
async function timezoneBuildings(page: Page, audit: Audit) {
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) if (key.startsWith('PLACEOS.org')) localStorage.removeItem(key);
    });
    await page.route((url) => ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'building' && url.searchParams.get('limit') === '500', async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
            if (!response.ok()) return await route.fulfill({ response });
            const body = await response.json();
            const rows: Record<string, unknown>[] = Array.isArray(body) ? body : body?.results ?? [];
            audit.fixtures['timezone buildings'] = (audit.fixtures['timezone buildings'] ?? 0) + rows.length;
            const patched = rows.map((row) => ({ ...row, timezone: 'Pacific/Honolulu' }));
            await route.fulfill({ response, json: Array.isArray(body) ? patched : { ...body, results: patched } });
        } catch (error) {
            audit.monitoring_errors.push('building timezone fixture: ' + String(error));
            await route.fallback().catch(() => undefined);
        }
    });
}
const HH = (h: number, m = 0) => h * 60 + m;


// ------------------------------------------------------------- locker form
// Consumer: apps/workplace/src/app/book/locker-flow/locker-form-details.component.ts
// getters :214-253, template :80-140. allow_all_day = allow_time_changes &&
// (lockers ?? bookings ?? true); disabled_date_select hides only the all-day
// checkbox (:86); disabled_start_time disables the start-time trigger (:116).
const LOCKER: Settings = {
    ...COMMON,
    'app.features': ['lockers'], 'app.desks.use_assets': false,
    'app.lockers.default_duration': 60,
    'app.lockers.all_day_default': false, 'app.bookings.all_day_default': false,
    'app.lockers.allow_all_day': true, 'app.bookings.allow_all_day': null,
    'app.lockers.allow_time_changes': true,
    'app.lockers.disabled_date_select': false, 'app.lockers.disabled_start_time': false,
    'app.lockers.hide_end_time': false,
    'app.lockers.max_duration': 240, 'app.bookings.max_duration': null,
    'app.lockers.use_building_timezone': false, 'app.bookings.use_building_timezone': false,
    'app.lockers.show_calendar_links': false,
};
async function lockerForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...LOCKER, ...overrides });
    await page.goto('/#/book/locker/form');
    await fixture.ready();
    const root = page.locator('new-locker-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('button[name="open-locker-confirm"]')).toBeVisible();
    return root;
}
/** open-locker-confirm only changes the view; it is never clicked. */
async function untouchedLocker(page: Page) {
    await expect(page.locator('button[name="open-locker-confirm"]')).toBeVisible();
    await expect(page.locator('locker-flow-confirm')).toHaveCount(0);
    await expect(page.locator('locker-flow-success')).toHaveCount(0);
}
const allDayBox = (root: Locator) => root.locator('mat-checkbox input[type="checkbox"]');
const lockerStart = (root: Locator) => root.locator('a-time-field[name="start-time"] button[time-field]');


// locker-flow-success.component.ts:62-114,158-160; data from sessionStorage
// PLACEOS.last_booked_booking (booking-form.service.ts:119,227-231).

test.describe('WPA next25 DRAFT: locker form', () => {
    for (const allowed of [true, false]) {
        test('lockers.allow_time_changes ' + allowed + ' gates the All day option', async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, {
                'app.lockers.allow_time_changes': allowed, 'app.lockers.allow_all_day': true,
            });
            await expect(root.locator('mat-checkbox')).toHaveCount(allowed ? 1 : 0);
            await expect(root.locator('a-date-field')).toBeVisible();
            await untouchedLocker(staffPage);
        });
    }
});
