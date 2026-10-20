import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Migrated unchanged from apps/workplace/e2e/local/claude-wpa-next25-parking-booking-draft.spec.ts (accepted: wpa-next25-P1..P4/P7); only this setting's tests.


// CLAUDE OWNED DRAFT. NOT RUN. No accepted coverage credit until a controlled run passes.
// Target: 11 parking booking-form / display keys. Routes: /#/book/parking/form,
// /#/book/parking/success, /#/book/parking-request/success, /#/your-bookings.
// Nothing is submitted. Synthetic data is served only by GET browser routes or
// a sessionStorage seed; no backend record is created or changed.
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
            await route.abort('failed').catch(() => undefined);
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
            await route.abort('failed').catch(() => undefined);
        }
    });
}
const HH = (h: number, m = 0) => h * 60 + m;

// ------------------------------------------------------------- parking booking form
// Consumer: apps/workplace/src/app/book/parking-flow/parking-form-details.component.ts
// getters :190-258 (`parking || bookings` fallbacks), template :66-136.
const BOOKING: Settings = {
    ...COMMON,
    'app.features': ['parking'], 'app.desks.use_assets': false,
    'app.parking.restrict_home_location': false, 'app.parking.require_space_restriction': false,
    'app.parking.default_duration': 60,
    'app.bookings.all_day_default': false, 'app.parking.all_day_default': null,
    'app.bookings.allow_all_day': false, 'app.parking.allow_all_day': false,
    'app.bookings.bookable_hours': null, 'app.parking.bookable_hours': null,
    'app.bookings.max_duration': null, 'app.parking.max_duration': null,
    'app.bookings.min_duration': null, 'app.parking.min_duration': null,
    'app.bookings.custom_duration_options': null, 'app.parking.custom_duration_options': null,
    'app.bookings.can_book_for_others': null, 'app.parking.can_book_for_others': false,
    'app.bookings.use_building_timezone': false, 'app.parking.use_building_timezone': false,
    'app.parking.available_period': null,
    'app.parking.show_calendar_links': false,
    'app.parking.hide_selected_space': false, 'app.parking.show_waitlist': true,
};
async function parkingForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...BOOKING, ...overrides });
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    const root = page.locator('parking-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-flow-form button[confirm]')).toBeVisible();
    return root;
}
/** Confirm Reservation only changes the view; it is never clicked. */
async function untouchedParking(page: Page) {
    await expect(page.locator('parking-flow-form button[confirm]')).toBeVisible();
    await expect(page.locator('parking-flow-confirm')).toHaveCount(0);
    await expect(page.locator('parking-flow-success')).toHaveCount(0);
}
const startTimes = (page: Page, root: Locator) =>
    menuValues(page, root.locator('a-time-field[name="start-time"] button[time-field]'), 'data-time');
const durations = (page: Page, root: Locator) => menuValues(page, root.locator('button[duration-field]'), 'data-duration');
// ------------------------------------------------------------- your bookings card
// booking-card.component.ts:210-243 (show_waitlist -> status 'info'),
// :214-217,311-324 (hide_selected_space -> "Parking" label). The schedule's
// parking list GET (schedule-state.service.ts:692-720) returns one synthetic
// row; no card, modal or action is clicked.
async function scheduleCard(page: Page, audit: Audit, overrides: Settings, row: Record<string, unknown>) {
    const user = watchIdentity(page);
    const start = Math.floor(Date.now() / 1000) + 120;
    const midnight = Math.floor(new Date().setUTCHours(24, 0, 0, 0) / 1000);
    const end = Math.min(start + 1800, midnight - 60);
    expect(end - start, 'run outside the last minutes of the UTC day so the row stays on today').toBeGreaterThan(300);
    const fixture = await prepare(page, audit, { ...BOOKING, ...overrides }, async (type) => {
        if (type !== 'parking') return [];
        const me = await user();
        return [{
            id: 'claude-next25-parking-1', booking_type: 'parking', title: 'E2E Synthetic Reservation',
            asset_id: 'claude-next25-bay', asset_name: 'E2E Synthetic Bay 7', description: '',
            booking_start: start, booking_end: end, user_id: me.id, user_email: me.email, user_name: me.name,
            rejected: false, deleted: false, zones: [], extension_data: {}, ...row,
        }];
    });
    await page.goto('/#/your-bookings?view=list');
    await fixture.ready();
    const card = page.locator('a[name="view-booking-details"]').filter({ hasText: 'E2E Synthetic Reservation' });
    await expect(card).toHaveCount(1);
    expect(audit.fixtures['parking/locker bookings'] ?? 0).toBeGreaterThan(0);
    return card;
}

test.describe('WPA next25 DRAFT: parking booking card', () => {
    for (const shown of [true, false]) {
        test('parking.show_waitlist ' + shown + ' colours a wait-listed request', async ({ staffPage, audit }) => {
            // parkingRequestStatus (booking.utilities.ts:34-43): unapproved, not manual, process_state wait_list.
            const card = await scheduleCard(staffPage, audit, { 'app.parking.show_waitlist': shown },
                { approved: false, process_state: 'wait_list' });
            const pill = card.locator('status-pill > div');
            await expect(pill).toHaveClass(shown ? /\bbg-info-light\b/ : /\bbg-warning-light\b/);
            await expect(pill).not.toHaveClass(shown ? /\bbg-warning-light\b/ : /\bbg-info-light\b/);
        });
    }
});
