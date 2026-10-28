import type { Page, Route, WebSocketRoute } from '@playwright/test';
import { ROOM_BOOKINGS_MODE, useSettings } from '../../../../../e2e/support/room/room.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { isAppError, isDevServerSocket, isLocalControlSocket, redact, type Settings } from '../support/settings-harness';
type DebugWindow = Window & { setting?: (key: string) => unknown };
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const CATEGORY = 'e2e-settings-empty-catering';
const ROOM = { id: 'e2e-settings-success-room', email: 'settings-success-room@example.invalid', name: 'Settings success room', zones: [] };

// ---------------------------------------------------------------- safety audit
type SafetyAudit = {
    websocket_attempts: { url: string; classification: string }[];
    blocked_control_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: { name: string; message: string; stack?: string }[];
    app_errors: string[];
    monitoring_errors: string[];
    fixtures: Record<string, number>;
};

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
                        audit.websocket_attempts.push({ url: socket_url, classification: `UNEXPECTED ${kind}; success screen is HTTP-only` });
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
                await info.attach('settings-safety-audit', {
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

for (const [label, features, hidden, shown] of [
    ['desks feature, hide_nearby_desks false', ['spaces', 'desks'], false, true],
    ['desks feature, hide_nearby_desks true', ['spaces', 'desks'], true, false],
    ['no desks feature, hide_nearby_desks false (control)', ['spaces'], false, false],
] as const) {
    test(`events.hide_nearby_desks success screen with ${label}`, async ({ staffPage, safetyAudit }) => {
        assertLocalOnly(APP_URL, BACKEND_URL);
        await staffPage.setViewportSize({ width: 1440, height: 1100 });
        // Browser-local seed of a clearly synthetic, already-"created" meeting.
        const start = new Date(); start.setDate(start.getDate() + 1); start.setHours(10, 0, 0, 0);
        await staffPage.addInitScript((event) => {
            sessionStorage.setItem('PLACEOS.last_modified_event', JSON.stringify(event));
        }, { id: 'e2e-settings-success-event', title: 'Settings success preview', date: start.valueOf(), duration: 60, resources: [ROOM] });
        // SpacePipe._loadSpace: an email id skips showSystem and uses
        // GET /api/engine/v2/systems/with_emails?in=<email>; no match keeps the seeded room.
        await stubGet(staffPage, safetyAudit, 'seeded room lookup', (url) => url.pathname === '/api/engine/v2/systems/with_emails' &&
            url.searchParams.get('in') === ROOM.email, () => []);
        // Form state still initialises: keep the calendar provider and catering bootstrap local.
        await stubGet(staffPage, safetyAudit, 'calendar provider list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
        await stubGet(staffPage, safetyAudit, 'catering hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500',
        () => [{ id: CATEGORY, name: '_CATERING_', hidden: true }]);
        await stubGet(staffPage, safetyAudit, 'catering types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('category_id') === CATEGORY && url.searchParams.get('limit') === '500', () => []);
        const settings: Settings = {
            ...READ_ONLY_SETTINGS, ...ROOM_BOOKINGS_MODE,
            'app.features': [...features], 'app.chat.enabled': false,
            'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
            'app.catering.backend': 'native', 'app.events.hide_nearby_desks': hidden,
            // Desk asset bootstrap (POST of _DESKS_) stays off: metadata desks only.
            'app.desks.use_assets': false,
        };
        await useSettings(staffPage, settings);
        await staffPage.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
        await staffPage.goto('/#/book/meeting/success');
        await expect(staffPage.locator('global-loading [loader]')).toHaveCount(0);
        for (const [key, value] of Object.entries(settings)) {
            await expect.poll(() => staffPage.evaluate((key) => (window as DebugWindow).setting?.(key), key)).toEqual(value);
        }
        const success = staffPage.locator('meeting-flow-success');
        const finished = success.locator('a[name="meeting-created-continue"]');
        // Rendered after the component's 500ms loading delay.
        await expect(finished).toBeVisible();
        // The seeded synthetic meeting (not any real booking) is what is shown.
        await expect(success.locator('main')).toContainText(ROOM.name);
        expect(safetyAudit.fixtures['seeded room lookup'] ?? 0, 'the seeded room lookup must be answered locally').toBeGreaterThan(0);
        // The only <button btn> in <main> is BOOK_NEARBY_DESK; it is never clicked.
        await expect(success.locator('main button[btn]')).toHaveCount(shown ? 1 : 0);
        if (shown) await expect(success.locator('main button[btn]')).toBeVisible();
        await expect(staffPage).toHaveURL(/#\/book\/meeting\/success/);
    });
}
