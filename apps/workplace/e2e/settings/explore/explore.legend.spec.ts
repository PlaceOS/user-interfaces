import type { ConsoleMessage, Page, Route, WebSocketRoute } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// explore.show_legend and explore.legend
// (libs/explore/src/lib/explore-map-view.component.ts:106-144, 237, 249-252):
// `@if (show_legend() && legend().length)` renders a [legend] panel; more than
// three [label, colour] pairs give a collapsed toggle button, three or fewer an
// <h3>. It depends on no map, level or WebSocket data. Nothing is clicked except
// the legend's own collapse toggle (UI state only).
//
// Opening /#/explore otherwise has side effects that are answered in the browser:
//  - ExploreSpacesService binds every room the level lists (systems?zone_id&limit=50)
//    -> that list is served empty, so no room binding is attempted.
//  - ExploreLockersService and ParkingService (via ExploreParkingService) resolve
//    hidden asset categories/types and POST/PUT when a GET finds none or a type
//    sits in another category (locker-assets.fn.ts, parking-assets.fn.ts).
//    Every module shares GET asset_categories?hidden=true&limit=500, so one
//    response carries all hidden categories, and each types GET returns
//    matching types with the right category_id. Their asset lists are empty.
//  - EventFormService.newForm reads the calendar provider -> served empty.
//  - Topbar global search is switched off (app.global_search false).
type Settings = Record<string, unknown>;
type DebugWindow = Window & { setting?: (key: string) => unknown };
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const CATEGORIES = [
    { id: 'e2e-draft-cat-lockers', name: '_LOCKERS_', hidden: true },
    { id: 'e2e-draft-cat-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-draft-cat-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-draft-cat-catering', name: '_CATERING_', hidden: true },
];
const TYPES: Record<string, { id: string; name: string }[]> = {
    'e2e-draft-cat-lockers': [
        { id: 'e2e-draft-type-locker-banks', name: '_LOCKER_BANKS_' },
        { id: 'e2e-draft-type-lockers', name: '_LOCKERS_' },
    ],
    'e2e-draft-cat-parking': [
        { id: 'e2e-draft-type-parking-spaces', name: '_PARKING_SPACES_' },
        { id: 'e2e-draft-type-parking-users', name: '_PARKING_USERS_' },
        { id: 'e2e-draft-type-parking-fleet', name: '_PARKING_FLEET_VEHICLES_' },
    ],
    'e2e-draft-cat-desks': [{ id: 'e2e-draft-type-desks', name: '_DESKS_' }],
    // No CATERING: type, so no menu.
    'e2e-draft-cat-catering': [],
};
const TYPE_IDS = Object.values(TYPES).flat().map((type) => type.id);
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['explore'], 'app.chat.enabled': false, 'app.global_search': false,
    'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
    'app.use_region': false, 'app.desks.use_assets': false,
};

// ---------------------------------------------------------------- safety audit
// Same policy as the corrected Batch 2/4/5 drafts. Any binding the page might
// still attempt travels over the shell's control socket, which is intercepted
// and closed before it connects; any other socket fails the test.
type SafetyAudit = {
    websocket_attempts: { url: string; classification: string }[];
    blocked_control_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: { name: string; message: string; stack?: string }[];
    app_errors: string[];
    monitoring_errors: string[];
    fixtures: Record<string, number>;
};

function redact(url: URL) {
    for (const key of [...url.searchParams.keys()]) url.searchParams.set(key, '[redacted]');
    return url.href;
}

/** Only the Angular dev server's Vite client socket (vite client.mjs:856-865, reload on close :993-998). */
function isDevServerSocket(url: URL) {
    const app = new URL(APP_URL);
    return url.host === app.host && url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:') &&
        url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token';
}

function isLocalControlSocket(url: URL) {
    const app = new URL(APP_URL);
    const protocol = app.protocol === 'https:' ? 'wss:' : 'ws:';
    return url.protocol === protocol && url.host === app.host &&
        url.pathname === '/api/engine/v2/systems/control';
}

/** ErrorHandler logs console.error('ERROR', e); Angular runtime errors log NG0xxx. */
function isAppError(message: ConsoleMessage) {
    return message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text());
}

const test = readOnlyTest.extend<{ safetyAudit: SafetyAudit }>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const audit: SafetyAudit = { websocket_attempts: [], blocked_control_attempts: [], tooling_websockets: [], page_errors: [],
            app_errors: [], monitoring_errors: [], fixtures: {} };
        const context = staffPage.context();
        const observePage = (page: Page) => {
            page.on('pageerror', (error) => audit.page_errors.push({ name: error.name, message: error.message, stack: error.stack }));
            page.on('console', (message) => {
                if (isAppError(message)) audit.app_errors.push(message.text().slice(0, 500));
            });
        };
        observePage(staffPage);
        context.on('page', observePage);
        const closing: Promise<void>[] = [];
        const closeSocket = async (socket: WebSocketRoute, url: string) => {
            try {
                await socket.close();
            } catch (error) {
                audit.monitoring_errors.push(`WebSocket close failed for ${url}: ${String(error)}`);
            }
        };
        try {
            await context.routeWebSocket('**/*', (socket) => {
                let socket_url = '<unparsed URL>';
                try {
                    const url = new URL(socket.url());
                    socket_url = redact(url);
                    if (isDevServerSocket(url)) {
                        audit.tooling_websockets.push({ url: socket_url, classification: 'dev-server live reload; mocked and held open, never connected' });
                        return;
                    }
                    if (isLocalControlSocket(url)) {
                        audit.blocked_control_attempts.push({
                            url: socket_url,
                            classification: 'known Workplace shell initialization; intercepted and closed before server connection',
                        });
                    } else {
                        const kind = url.pathname.startsWith('/api/engine/v2/chatgpt/chat/') ? 'chat' :
                            ['/api/engine/v2/systems/control', '/control/websocket'].includes(url.pathname) ? 'driver/control' : 'other';
                        audit.websocket_attempts.push({ url: socket_url, classification: `UNEXPECTED ${kind}; legend scenario expects no other socket` });
                    }
                } catch (error) {
                    audit.monitoring_errors.push(`WebSocket interception failed for ${socket_url}: ${String(error)}`);
                }
                closing.push(closeSocket(socket, socket_url));
            });
            await use(audit);
        } finally {
            try {
                await context.close();
            } catch (error) {
                audit.monitoring_errors.push(`Context close failed: ${String(error)}`);
            }
            await Promise.all(closing);
            try {
                await info.attach('explore-legend-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
                });
            } finally {
                expect({
                    websocket_attempts: audit.websocket_attempts, page_errors: audit.page_errors,
                    app_errors: audit.app_errors, monitoring_errors: audit.monitoring_errors,
                }, 'no WebSocket attempt, application exception or monitoring failure is permitted').toEqual({
                    websocket_attempts: [], page_errors: [], app_errors: [], monitoring_errors: [],
                });
            }
        }
    }, { auto: true, timeout: 15_000 }],
});

/** A named, counted, GET-only browser response. Every other method reaches the read-only guard. */
async function stubGet(page: Page, audit: SafetyAudit, name: string,
    match: (url: URL) => boolean, body: (url: URL) => unknown) {
    await page.route((url) => ORIGINS.has(url.origin) && match(url), async (route: Route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
        await route.fulfill({ json: body(new URL(route.request().url())) });
    });
}

async function openExplore(page: Page, overrides: Settings, audit: SafetyAudit) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await stubGet(page, audit, 'hidden asset categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500', () => CATEGORIES);
    await stubGet(page, audit, 'hidden asset types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' && (url.searchParams.get('category_id') ?? '') in TYPES,
    (url) => {
        const category_id = url.searchParams.get('category_id')!;
        // category_id must match, or move_type_to_category would PUT.
        return TYPES[category_id].map((type) => ({ ...type, brand: 'PlaceOS', category_id }));
    });
    await stubGet(page, audit, 'hidden asset lists', (url) => url.pathname === '/api/engine/v2/assets' &&
        TYPE_IDS.includes(url.searchParams.get('type_id') ?? ''), () => []);
    // ExploreStateService: querySystems({ zone_id, limit: 50 }) -> no rooms, so no room bindings.
    await stubGet(page, audit, 'explore level rooms', (url) => url.pathname === '/api/engine/v2/systems' &&
        [...url.searchParams.keys()].sort().join(',') === 'limit,zone_id' && url.searchParams.get('limit') === '50', () => []);
    await stubGet(page, audit, 'calendar provider list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    await page.goto('/#/explore');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) => (window as DebugWindow).setting?.(key), key)).toEqual(value);
    }
    await expect.poll(() => audit.fixtures['hidden asset categories'] ?? 0,
        { message: 'hidden-category bootstraps must read the browser fixture instead of creating categories' }).toBeGreaterThan(0);
    return page.locator('explore-map-view [legend]');
}

const TWO: [string, string][] = [['E2E Draft Free', '#123456'], ['E2E Draft Busy', '#654321']];
const FOUR: [string, string][] = [...TWO, ['E2E Draft Pending', '#112233'], ['E2E Draft Closed', '#445566']];

test('WPA draft: explore.legend of four pairs collapses behind a toggle', async ({ staffPage, safetyAudit }) => {
    const legend = await openExplore(staffPage, { 'app.explore.show_legend': true, 'app.explore.legend': FOUR }, safetyAudit);
    const toggle = legend.locator('button[aria-controls="explore-map-legend-items"]');
    const items = legend.locator('#explore-map-legend-items');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(items).toHaveClass(/\bhidden\b/);
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(items).toBeVisible();
    await expect(items.locator(':scope > div div.text-sm')).toHaveText(FOUR.map(([label]) => label));
});

test('WPA draft: explore.legend empty renders no legend even when shown', async ({ staffPage, safetyAudit }) => {
    const legend = await openExplore(staffPage, { 'app.explore.show_legend': true, 'app.explore.legend': [] }, safetyAudit);
    await expect(legend).toHaveCount(0);
});
