import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Migrated unchanged from apps/workplace/e2e/local/claude-wpa-next25-parking-request-draft.spec.ts (accepted: wpa-next25-P1/P5/P6/P7); only this setting's tests.

// Target: 13 parking REQUEST form keys (route /#/book/parking-request/form).
// Consumer: apps/workplace/src/app/book/parking-request-flow/
//   parking-request-form-details.component.ts:1343-1403, 1600-1617 (signals),
//   template :160-1180; parking-request-form.component.ts:153-155 (notes HTML).
// Nothing is submitted: the submit button, plate-number remove buttons and
// favourite icons are never clicked. Clicks only change local form state.
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
async function prepare(page: Page, audit: Audit, settings: Settings) {
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
    // ParkingService.loadBookings: no existing parking booking for today.
    await getOnly(page, audit, 'parking bookings', (url) => url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'parking', () => []);
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

// ------------------------------------------------------------- request form
const ROUTE = '/#/book/parking-request/form';
const PRESETS = [
    { id: 'claude-day', name: 'E2E Day Shift', start_time: 480, end_time: 1020 },
    { id: 'claude-late', name: 'E2E Late Shift', start_time: 600, end_time: 1080 },
];
const REQUEST: Settings = {
    ...COMMON,
    'app.features': ['parking'], 'app.desks.use_assets': false,
    'app.parking.restrict_home_location': false,
    'app.parking.allow_recurrence': false,
    'app.parking.available_period': 14,
    'app.parking.use_building_timezone': false, 'app.bookings.use_building_timezone': false,
    'app.parking.hidden_buildings': [],
    'app.parking.request_types': null,
    'app.parking.request_shift_options': PRESETS,
    'app.parking.hide_custom_shift': false,
    'app.parking.hide_availability_counter': true,
    'app.parking.hide_prefer_toggle': false,
    'app.parking.default_location_from_desk_booking': false,
    'app.parking.require_plate_number': false,
    'app.parking.require_space_restriction': false,
    'app.parking.request_space_restrictions': [],
    'app.parking.extra_space_restrictions': [],
    'app.parking.approver_groups': [],
    'app.parking.auto_approved_groups': [],
    'app.parking.vehicle_types': null,
    'app.parking.request_submission_notes_html': '',
    'app.parking.can_book_for_anyone': false, 'app.bookings.can_book_for_anyone': null,
    'app.parking.can_book_for_others': false, 'app.bookings.can_book_for_others': null,
};
const DEFAULT_TYPES = ['Standard Parking Request', 'P2 Special Needs Request', 'After-hours Private Access Request'];
const DEFAULT_VEHICLES = ['Car', 'Bike', 'Van', 'Truck', 'Other'];
const RESTRICTIONS = [
    { id: 'claude-standard-bay', name: 'E2E Standard Bay' },
    { id: 'claude-accessible-bay', name: 'E2E Accessible Bay' },
];

async function openRequest(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...REQUEST, ...overrides });
    await page.goto(ROUTE);
    await fixture.ready();
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-request-form button[btn]').filter({ has: page.locator('icon', { hasText: /^\s*send\s*$/ }) })).toBeVisible();
    return root;
}
/** Nothing was submitted: still on the form, success view absent. */
async function untouched(page: Page) {
    await expect(page.locator('parking-request-form button[btn]').filter({ has: page.locator('icon', { hasText: /^\s*send\s*$/ }) })).toBeVisible();
    await expect(page.locator('parking-request-success')).toHaveCount(0);
}
// English-label exceptions (APP.locale pinned to en-AU; shared/assets/locale/en-AU.json):
// these mat-selects have no name or id. Scope through the exact sibling label.
function labelledSelect(root: Locator, label: string) {
    return root.locator('label').filter({ hasText: new RegExp('^\\s*' + label + '\\s*\\*?\\s*$') })
        .locator('..').locator('mat-select');
}
function approverSelect(root: Locator) {
    return root.locator('h3').filter({ hasText: 'Approver Group' }).locator('xpath=..').locator('mat-select');
}
function typeCard(root: Locator, name: string) {
    return root.locator('div.cursor-pointer').filter({ has: root.page().getByText(name, { exact: true }) });
}
/** Opens a mat-select, returns option labels, closes it without choosing. */
async function optionLabels(page: Page, select: Locator) {
    await expect(select).toHaveCount(1);
    await select.click();
    const options = page.getByRole('option');
    await expect(options.first()).toBeVisible();
    const labels = (await options.allInnerTexts()).map((text) => text.replace(/\s+/g, ' ').trim());
    await page.keyboard.press('Escape');
    await expect(options).toHaveCount(0);
    return labels;
}

test.describe('WPA next25 DRAFT: parking request form', () => {
    for (const hidden of [false, true]) {
        test('parking.hide_availability_counter ' + hidden + ' controls the location capacity counter',
            async ({ staffPage, audit }) => {
                const root = await openRequest(staffPage, audit, { 'app.parking.hide_availability_counter': hidden });
                await expect(root.getByText(/Location Preference/i)).toBeVisible();
                // Spaces are served empty, so the shown counter settles at 0 of 0 with no lookup.
                const counter = root.locator('icon').filter({ hasText: /^\s*car_lock\s*$/ });
                await expect(counter).toHaveCount(hidden ? 0 : 1);
                await expect(root.getByText('Checking...', { exact: true })).toHaveCount(0);
                if (!hidden) await expect(counter).toBeVisible();
                await untouched(staffPage);
            });
    }
});
