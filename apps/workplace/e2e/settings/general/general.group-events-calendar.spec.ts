import type { ConsoleMessage, Page, Route, WebSocketRoute } from '@playwright/test';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Setting: group_events_calendar (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumer: GroupEventsStateService.calendar.
// All fixtures below are browser-only GET responses. No fixture is saved;
// every non-GET request still reaches the read-only guard.
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const ID = 9100047;
const PARKING_CATEGORY = 'e2e-draft-parking-category';
const PARKING_TYPES = ['e2e-draft-parking-spaces-type', 'e2e-draft-parking-users-type'];
type Identity = { id: string; email: string; name: string };
type DebugWindow = Window & { ng?: { getComponent(element: Element): unknown }; setting?: (key: string) => unknown };

// ---------------------------------------------------------------- safety audit
// Adapted from the passing Batch 1 drafts. The desk form (picker not opened),
// your-bookings and group-events make no getModule/bind/execute calls with chat
// off and no location_services module bound, so NO PlaceOS WebSocket is expected.
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
                        audit.websocket_attempts.push({ url: socket_url, classification: `UNEXPECTED ${kind}; these pages are HTTP-only` });
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
    match: (url: URL) => boolean, body: (url: URL) => unknown | Promise<unknown>) {
    await page.route((url) => ORIGINS.has(url.origin) && match(url), async (route: Route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const json = await body(new URL(route.request().url()));
            audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
            await route.fulfill({ json });
        } catch (error) {
            audit.monitoring_errors.push(`${name} fixture: ${String(error)}`);
            await route.fallback().catch(() => undefined);
        }
    });
}

async function preparePage(page: Page, overrides: Record<string, unknown>, audit: SafetyAudit) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        if (response.request().method() === 'GET' &&
            new URL(response.url()).pathname === '/api/engine/v2/users/current') identity = response.json();
    });
    // BookingFormService.loadForm/newForm -> CalendarService.loadCalendars reads
    // the calendar provider (/api/staff/v1/calendars). Keep it local and empty.
    await stubGet(page, audit, 'calendar provider list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    const settings = { ...READ_ONLY_SETTINGS,
        'app.chat.enabled': false, 'app.use_region': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        // Keeps any schedule event listing on PlaceOS bookings, never staff-api /events.
        'app.events.use_bookings': true,
        ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    return {
        user: async () => {
            if (!identity) throw new Error('the app must establish its existing staff identity before loading fixtures');
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading [loader]')).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect.poll(() => page.evaluate((key) => (window as DebugWindow).setting?.(key), key)).toEqual(value);
            }
        },
    };
}

for (const calendar of ['draft-calendar-a@example.invalid', 'draft-calendar-b@example.invalid']) {
    test(`group_events_calendar ${calendar} scopes the calendar lookup`, async ({ staffPage, safetyAudit }) => {
        const fixture = await preparePage(staffPage, {
            'app.features': ['group-events'], 'app.group_events_calendar': calendar,
        }, safetyAudit);
        const lookups: string[] = [];
        // GroupEventsStateService: GET /api/engine/v2/systems/with_emails?in=<calendar>.
        // No resolved system: queryEvents (staff-api /events, the provider) is never called.
        await stubGet(staffPage, safetyAudit, 'calendar system lookup', (url) =>
            url.pathname === '/api/engine/v2/systems/with_emails' && url.searchParams.has('in'), (url) => {
            lookups.push(url.searchParams.get('in')!);
            return [];
        });
        await staffPage.goto('/#/group-events');
        await fixture.ready();
        await expect(staffPage.locator('[group-events] group-events-sidebar')).toBeVisible();
        await expect.poll(() => lookups.length).toBeGreaterThan(0);
        expect([...new Set(lookups)]).toEqual([calendar]);
        await expect(staffPage.locator('[group-events] img[src="assets/icons/no-results.svg"]')).toBeVisible();
        await expect(staffPage.locator('group-event-card')).toHaveCount(0);
    });
}
