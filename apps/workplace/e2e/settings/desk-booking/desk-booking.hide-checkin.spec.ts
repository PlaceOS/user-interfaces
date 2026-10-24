// Phase 2 migration: historically accepted (Batch 4, 2 passed); relocated runtime validation PENDING.
// Covered active keys: bookings.hide_checkin
// Read-only: the desk booking is a browser-only GET fixture; check-in is never clicked.
// Its conditional local-midnight skip is preserved, so a run between 22:55 and 24:00
// runner-local time reports both scenarios as skipped, not passed.
// Historical evidence: apps/workplace/reports/wpa-controlled-execution-20261019-150825-batch4/results.json
// Source: apps/workplace/e2e/local/settings-blocked/desk-booking/desk-booking.hide-checkin.spec.ts
// (sha256 7000549a06df16039dcf1dd2344ae1f8045ed24db0de5fd2dbb6482af0d1736c); unchanged except import paths. The parked original is left in place.
import type { ConsoleMessage, Page, Route, WebSocketRoute } from '@playwright/test';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Source: desk-flow-form.show_reserved_desk_overlay;
// BookingFormService.settingForType / assignedResourceBooking;
// BookingDetailsModal.can_checkin; GroupEventsStateService.calendar.
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
                await info.attach('readonly-data-safety-audit', {
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

for (const hidden of [false, true]) {
    test(`WPA draft: bookings.hide_checkin ${hidden} gates the control on a synthetic owned desk booking`, async ({ staffPage, safetyAudit }) => {
        const fixture = await preparePage(staffPage, {
            'app.features': ['desks'], 'app.bookings.hide_checkin': hidden,
            'app.desks.hide_checkin': false, 'app.desk.hide_checkin': false,
            'app.desk.auto_checkin': false,
        }, safetyAudit);
        // Every booking-card injects ParkingService, whose constructor effects
        // resolve the hidden _PARKING_ category and _PARKING_SPACES_/_PARKING_USERS_
        // types (parking-assets.fn.ts). Each create (POST) or move (PUT) runs only
        // when a GET finds nothing or a type has the wrong category; the local
        // backend is known to lack _PARKING_SPACES_ (Batch 8 blocker). Answer
        // those GETs so nothing is created, and list no parking assets.
        await stubGet(staffPage, safetyAudit, 'parking hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500',
        () => [{ id: PARKING_CATEGORY, name: '_PARKING_', hidden: true }]);
        await stubGet(staffPage, safetyAudit, 'parking types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('category_id') === PARKING_CATEGORY && url.searchParams.get('limit') === '500',
        () => [
            { id: PARKING_TYPES[0], name: '_PARKING_SPACES_', category_id: PARKING_CATEGORY, brand: 'PlaceOS' },
            { id: PARKING_TYPES[1], name: '_PARKING_USERS_', category_id: PARKING_CATEGORY, brand: 'PlaceOS' },
        ]);
        await stubGet(staffPage, safetyAudit, 'parking assets', (url) => url.pathname === '/api/engine/v2/assets' &&
            PARKING_TYPES.includes(url.searchParams.get('type_id') ?? '') &&
            url.searchParams.has('zone_id') && url.searchParams.get('limit') === '500', () => []);
        // Freeze Date.now (timers keep running) so the near-start window holds.
        await staffPage.clock.install({ time: new Date() });
        await staffPage.clock.setFixedTime(new Date());
        const now = Math.floor(Date.now() / 1000);
        // The schedule lists one local day; a booking crossing midnight would be
        // outside it, so that window is a precondition, not a product result.
        const end_of_day = new Date(); end_of_day.setHours(23, 59, 59, 999);
        test.skip(now + 3900 > end_of_day.valueOf() / 1000, 'synthetic booking would cross local midnight');
        const booking = async () => {
            const user = await fixture.user();
            return {
                id: ID, booking_type: 'desk', type: 'desk', title: 'Draft check-in visibility',
                asset_id: 'e2e-draft-readonly-desk', asset_name: 'Draft check-in desk',
                booking_start: now + 300, booking_end: now + 3900,
                user_id: user.id, user_email: user.email, user_name: user.name,
                booked_by_id: user.id, booked_by_email: user.email,
                approved: true, checked_in: false, rejected: false, deleted: false,
                zones: [], extension_data: {},
            };
        };
        // ScheduleStateService: GET /api/staff/v1/bookings?period_start&period_end&type=desk&... (raw array).
        // The details modal reuses the card's booking and does not refetch it.
        await stubGet(staffPage, safetyAudit, 'desk booking listing', (url) =>
            url.pathname === '/api/staff/v1/bookings' && url.searchParams.get('type') === 'desk', async (url) => {
            const start = Number(url.searchParams.get('period_start'));
            const end = Number(url.searchParams.get('period_end'));
            if (!(start > 0 && end > start)) throw new Error('listing must carry a valid period');
            const data = await booking();
            return data.booking_start < end && data.booking_end > start ? [data] : [];
        });
        // SchedulePage.open assumes visitors; use the existing desk filter and
        // inherited card/modal selectors without enabling unrelated flows.
        await staffPage.goto('/#/your-bookings?view=list');
        const schedule = new SchedulePage(staffPage);
        await fixture.ready();
        await expect(schedule.card(ID)).toBeVisible();
        expect(safetyAudit.fixtures['desk booking listing'] ?? 0).toBeGreaterThan(0);
        // A type lookup can come from ParkingService._loadUsers alone;
        // _loadSpaces only runs when the active organisation has parking levels.
        // This proves a bootstrap lookup used the stub, not that spaces exist.
        await expect.poll(() => safetyAudit.fixtures['parking types'] ?? 0,
            { message: 'ParkingService must resolve at least one type from the GET fixture' }).toBeGreaterThan(0);
        const modal = await schedule.openDetails(ID);
        await expect(modal).toContainText('Draft check-in visibility');
        const control = schedule.checkInButton(modal);
        if (hidden) await expect(control).toHaveCount(0);
        else await expect(control).toBeVisible();
        await expect(modal.locator('status-pill')).toBeVisible();
        // Never click check-in, edit, cancel, overflow actions or map controls.
        await staffPage.keyboard.press('Escape');
        await expect(modal).toHaveCount(0);
    });
}
