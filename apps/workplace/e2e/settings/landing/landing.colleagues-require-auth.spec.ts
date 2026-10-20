import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Migrated unchanged from apps/workplace/e2e/local/codex-wpa-next20-landing-schedule-draft.spec.ts (accepted: wpa-batch10c (+ visitor rerun)); only this setting's tests.

// CODEX OWNED DRAFT (continued by Claude). NOT RUN. No accepted coverage credit.
// Baseline reconciliation: 45 ledger PASS keys + desks.use_assets + 28 recent
// WPA keys = 74. All target keys below are active ledger entries outside that
// union and outside Copilot's ten room/visitor expansion targets.
// Helpers are deliberately test-local; do not modify shared fixtures.
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
    'app.features': [], 'app.feature_groups': {},
    'app.hide_landing_customise': true, 'app.hide_landing_widgets': [], 'app.chat.enabled': false, 'app.global_search': false,
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

// Targets (active ledger keys, outside the 74 and Copilot's ten):
//   colleagues_require_auth: landing-state.service.ts:89-95 search_fn ->
//     queryUsers (/api/engine/v2/users) when basic_user_search is true OR
//     colleagues_require_auth !== false; otherwise searchStaff
//     (/api/staff/v1/people, the provider-backed directory).
//   visitors.allow_editing: booking-details-modal.component.ts:588-605 can_edit
//     (visitor bookings need it) gates the overflow-menu Edit item (:426-436).
// Nothing is added, edited, cancelled or checked in.
const DRAFT_SETTING_KEYS = ['colleagues_require_auth'] as const;
const QUERY = 'CodexNext20Colleague';
const VISITOR_BOOKING = 9100211;

for (const required of [true, false]) {
    test('WPA next20 DRAFT: colleagues_require_auth ' + required + ' selects the landing colleague search source',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.basic_user_search': false, 'app.colleagues_require_auth': required,
                'app.hide_colleagues': false, 'app.show_quick_book': false, 'app.show_quick_links': false,
            });
            await getOnly(staffPage, audit, 'PlaceOS user list', (url) => url.pathname === '/api/engine/v2/users' &&
                url.searchParams.get('q') === QUERY,
            () => [{ id: 'codex-next20-user', name: 'Codex Next20 User List', email: 'codex-next20-user@example.invalid' }]);
            // Provider-backed directory, answered in the browser so it is never contacted.
            await getOnly(staffPage, audit, 'staff directory', (url) => url.pathname === '/api/staff/v1/people' &&
                url.searchParams.get('q') === QUERY,
            () => [{ id: 'codex-next20-dir', name: 'Codex Next20 Directory', email: 'codex-next20-dir@example.invalid' }]);
            await staffPage.goto('/#/landing');
            await fixture.ready();
            await expect(staffPage.locator('landing-new')).toHaveCount(1);
            await expect(staffPage.locator('landing-new > div')).toBeVisible();
            const colleagues = staffPage.locator('landing-colleagues-new');
            const open = colleagues.getByRole('button', { name: 'person_add Add Colleagues', exact: true });
            await expect(open).toBeVisible();
            await open.click();
            const modal = staffPage.locator('add-colleagues-modal');
            await expect(modal).toBeVisible();
            const input = modal.locator('input[matInput]');
            await expect(input).toBeEnabled();
            // ngModel -> setOptions -> 500ms debounce. Fill once so no partial
            // query can reach the provider-backed directory between keystrokes.
            await input.fill(QUERY);
            const results = modal.locator('main button');
            const shown = required ? 'Codex Next20 User List' : 'Codex Next20 Directory';
            const hidden = required ? 'Codex Next20 Directory' : 'Codex Next20 User List';
            await expect(results.filter({ hasText: shown })).toHaveCount(1);
            await expect(results.filter({ hasText: shown })).toBeVisible();
            await expect(results.filter({ hasText: hidden })).toHaveCount(0);
            expect(audit.fixtures[required ? 'PlaceOS user list' : 'staff directory'] ?? 0).toBeGreaterThan(0);
            expect(audit.fixtures[required ? 'staff directory' : 'PlaceOS user list'] ?? 0).toBe(0);
            // Selection stays empty; the save action must remain disabled.
            await expect(modal.locator('footer button').last()).toBeDisabled();
            // Never add a colleague: that writes the user's contacts metadata.
            await modal.getByRole('button', { name: 'Cancel', exact: true }).click();
            await expect(modal).toHaveCount(0);
            await expect(staffPage).toHaveURL(/#\/landing$/);
        });
}
