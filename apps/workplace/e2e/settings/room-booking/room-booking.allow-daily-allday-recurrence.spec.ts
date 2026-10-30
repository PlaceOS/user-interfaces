// events.allow_daily_allday_recurrence on the MeetingFlow details step (All Day, recurrence) and options step (confirmBooking).
// Covered active keys: events.allow_daily_allday_recurrence
// Form state and incidental bootstrap fixtures exist only in this browser.
import type { BrowserContext as MigrationContext, Page as MigrationPage, TestInfo as MigrationTestInfo } from '@playwright/test';
import { expect as migrationExpect } from '../../../../../e2e/support/fixtures';
import { APP_URL as MIGRATION_APP_URL, BACKEND_URL as MIGRATION_BACKEND_URL, assertLocalOnly as migrationAssertLocalOnly, staffEmail as migrationStaffEmail } from '../../../../../e2e/support/env';
import { readOnlyTest as migrationReadOnlyBase } from '../../local/wpa-settings-readonly-legacy.fixture';
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { MeetingFlow } from '../../../../../e2e/support/room/meeting-flow.page';
import { ROOM_BOOKINGS_MODE } from '../../../../../e2e/support/room/room.settings';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
// Test-local audit only: no shared fixtures or existing specs are changed.
type MigrationAudit = {
    websocket_attempts: { url: string; classification: string }[];
    blocked_control_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: string[];
    app_errors: string[];
    monitoring_errors: string[];
    blocked_api_requests: string[];
    staff_identities: { email: string; privileged: boolean }[];
};
const migrationOrigins = new Set([new URL(MIGRATION_APP_URL).origin, new URL(MIGRATION_BACKEND_URL).origin]);
const migrationAuditFixture: { migrationAudit: [
    (args: { staffPage: MigrationPage }, use: (audit: MigrationAudit) => Promise<void>, info: MigrationTestInfo) => Promise<void>,
    { auto: true; timeout: number },
] } = {
    migrationAudit: [async ({ staffPage }: { staffPage: MigrationPage }, use: (audit: MigrationAudit) => Promise<void>, info: MigrationTestInfo) => {
        migrationAssertLocalOnly(MIGRATION_APP_URL, MIGRATION_BACKEND_URL);
        const audit: MigrationAudit = {
            websocket_attempts: [], blocked_control_attempts: [], tooling_websockets: [],
            page_errors: [], app_errors: [], monitoring_errors: [], blocked_api_requests: [],
            staff_identities: [],
        };
        const contexts: MigrationContext[] = [];
        const closing: Promise<void>[] = [];
        const identities: Promise<void>[] = [];
        const navigated = new Set<MigrationContext>();
        const identified = new Set<MigrationContext>();
        const origins = new Set([new URL(MIGRATION_APP_URL).origin, new URL(MIGRATION_BACKEND_URL).origin]);
        const register = async (context: MigrationContext) => {
            contexts.push(context);
            const observe = (page: MigrationPage) => {
                page.on('framenavigated', (frame) => {
                    if (frame === page.mainFrame() && frame.url().startsWith(new URL(MIGRATION_APP_URL).origin + '/')) navigated.add(context);
                });
                page.on('pageerror', (error) => audit.page_errors.push(String(error)));
                page.on('console', (message) => {
                    if (message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text())) audit.app_errors.push(message.text().slice(0, 500));
                });
                page.on('response', (response) => {
                    const url = new URL(response.url());
                    if (response.request().method() !== 'GET' || !origins.has(url.origin) || url.pathname !== '/api/engine/v2/users/current') return;
                    identities.push((async () => {
                        migrationExpect(response.ok(), 'staff identity GET must succeed').toBe(true);
                        const user = await response.json();
                        const identity = { email: user.email?.toLowerCase() ?? '', privileged: !!(user.sys_admin || user.support) };
                        audit.staff_identities.push(identity);
                        migrationExpect(identity.email).toBe(migrationStaffEmail(info.parallelIndex).toLowerCase());
                        migrationExpect(identity.privileged, 'staff-only scenario').toBe(false);
                        identified.add(context);
                    })().catch((error: unknown) => { audit.monitoring_errors.push(`Staff identity: ${String(error)}`); }));
                });
            };
            for (const page of context.pages()) observe(page);
            context.on('page', observe);
            await context.route('**/*', async (route) => {
                const request = route.request();
                const url = new URL(request.url());
                const read = ['GET', 'HEAD', 'OPTIONS'].includes(request.method());
                const api = url.pathname.startsWith('/api/');
                const provider = url.pathname.startsWith('/api/staff/v1/calendars') ||
                    url.pathname.startsWith('/api/staff/v1/events');
                // Block every HTTP write, including outside /api/. Exact page-local
                // GET fixtures answer calendar bootstrap before this guard;
                // unrecognised provider reads must never reach an integration.
                if (read && (!api || (origins.has(url.origin) && !provider))) {
                    await route.fallback();
                } else {
                    audit.blocked_api_requests.push(`${request.method()} ${url.origin}${url.pathname}`);
                    await route.abort('blockedbyclient');
                }
            });
            await context.routeWebSocket('**/*', (socket) => {
                try {
                    const url = new URL(socket.url());
                    const app = new URL(MIGRATION_APP_URL);
                    const local = url.host === app.host && url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
                    const tooling = local && url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token';
                    const control = local && url.pathname === '/api/engine/v2/systems/control';
                    for (const key of [...url.searchParams.keys()]) url.searchParams.set(key, '[redacted]');
                    if (tooling) {
                        audit.tooling_websockets.push({ url: url.href, classification: 'dev-server live reload; mocked and held open, never connected' });
                        return;
                    }
                    if (control) audit.blocked_control_attempts.push({ url: url.href,
                        classification: 'known Workplace shell initialization; intercepted and closed before server connection' });
                    else audit.websocket_attempts.push({ url: url.href, classification: 'UNEXPECTED connection; intercepted before server connection' });
                } catch (error) { audit.monitoring_errors.push(`WebSocket interception: ${String(error)}`); }
                // No connectToServer call: all connections remain browser-local.
                closing.push(socket.close().catch((error: unknown) => { audit.monitoring_errors.push(`WebSocket close: ${String(error)}`); }));
            });
        };
        try {
            await register(staffPage.context());
            await use(audit);
        } finally {
            for (const context of contexts) {
                try { await context.close(); }
                catch (error) { audit.monitoring_errors.push(`Context close: ${String(error)}`); }
            }
            await Promise.all(closing);
            await Promise.all(identities);
            for (const context of navigated) {
                if (!identified.has(context)) audit.monitoring_errors.push('A navigated context did not establish staff identity');
            }
            try {
                await info.attach('no-standalone-readonly-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
                });
            } finally {
                migrationExpect({ websocket_attempts: audit.websocket_attempts, page_errors: audit.page_errors,
                    app_errors: audit.app_errors, monitoring_errors: audit.monitoring_errors,
                    blocked_api_requests: audit.blocked_api_requests }, 'migration safety audit must be clean').toEqual({
                    websocket_attempts: [], page_errors: [], app_errors: [], monitoring_errors: [], blocked_api_requests: [],
                });
                migrationExpect(audit.staff_identities.length, 'staff identity must be observed').toBeGreaterThan(0);
            }
        }
    }, { auto: true, timeout: 30_000 }],
};
const migrationReadOnlyTest = migrationReadOnlyBase.extend<{ migrationAudit: MigrationAudit }>(migrationAuditFixture);
// Keep the shared staff-only context and API guard; use UTC for the local seed.
migrationReadOnlyTest.use({ storageState: undefined, readOnlyTimezone: 'Etc/UTC' });

const readOnlyTest = migrationReadOnlyTest;
type Settings = Record<string, unknown>;

interface DebugWindow extends Window {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
}

interface OptionsComponent {
    form(): { valid(): boolean };
    form_value(): {
        id: string;
        title: string;
        host: string;
        date: number;
        duration: number;
        resources: unknown[];
        all_day: boolean;
        recurrence: { pattern?: string } | null;
        catering: unknown[];
        assets: unknown[];
    };
    no_standalone(): boolean;
    strict_capacity_check(): boolean;
    booking_unavailable(): boolean;
    loading(): boolean;
}

const BASE_SETTINGS: Settings = {
    // Prevent unrelated preference writes and chat startup.
    'app.chat.enabled': false,
    ...READ_ONLY_SETTINGS,
    'app.features': ['spaces'],
    'app.feature_groups': {},
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.global_search': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    // Keeps theme initialisation from saving a user preference.
    'app.allow_dark_mode': false,
    // PlaceOS bookings path; no calendar directory reads (room.settings.ts).
    ...ROOM_BOOKINGS_MODE,
    'app.catering.backend': 'native',
    'app.catering_provider': '',
    // Pinned so only the key under test changes the form layout.
    'app.events.has_assets': false,
    'app.events.allow_multiday': false,
    'app.events.multiple_spaces': false,
    'app.events.use_building_timezone': false,
    'app.events.allow_visibility': false,
    'app.events.can_book_for_anyone': false,
    'app.events.can_book_for_others': false,
    'app.events.allow_online_meetings': false,
    'app.events.hide_attendees': false,
    'app.events.hide_notes': false,
    'app.events.no_standalone': true,
    'app.events.booking_unavailable': false,
    'app.events.strict_capacity_check': false,
    'app.events.allow_all_day': false,
    'app.events.allow_recurrence': false,
    'app.events.bookable_hours': null,
    'app.events.default_duration': 60,
    'app.events.min_duration': 30,
    'app.events.max_duration': 180,
    'app.events.duration_step': 30,
    'app.events.custom_duration_options': [],
};


async function expectSettings(page: Page, settings: Settings) {
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) =>
            (window as DebugWindow).setting?.(key), key), {
            message: `effective setting ${key} must equal ${JSON.stringify(value)}`,
        }).toEqual(value);
    }
}

async function stubGet(page: Page, match: (url: URL) => boolean, body: unknown) {
    await page.route((url) => migrationOrigins.has(url.origin) && match(url), async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        await route.fulfill({ json: body });
    });
}

async function stubBootstrap(page: Page) {
    // Matching browser-only categories/types prevent automatic POST/PUT bootstrap.
    const types: Record<string, string[]> = {
        catering: [], desks: ['_DESKS_'],
        parking: ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
        lockers: ['_LOCKER_BANKS_', '_LOCKERS_'],
    };
    await stubGet(page, (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true', Object.keys(types).map((name) => ({
            id: `no-standalone-${name}`, name: `_${name.toUpperCase()}_`, hidden: true,
        })));
    for (const [category, names] of Object.entries(types)) {
        await stubGet(page, (url) => url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('category_id') === `no-standalone-${category}`, names.map((name) => ({
                id: `no-standalone-type-${name}`, name,
                category_id: `no-standalone-${category}`, brand: 'PlaceOS',
            })));
    }
    await stubGet(page, (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('no-standalone-type-'), []);
    await stubGet(page, (url) => url.pathname === '/api/staff/v1/calendars' &&
        [...url.searchParams].length === 0, []);
    await stubGet(page, (url) => url.pathname === '/api/engine/v2/systems' &&
        !!url.searchParams.get('zone_id') && url.searchParams.get('signage') === 'false' &&
        url.searchParams.get('limit') === '500' &&
        [...url.searchParams.keys()].every((key) => ['zone_id', 'signage', 'limit'].includes(key)), []);
    await stubGet(page, (url) => url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'room' && url.searchParams.has('period_start') &&
        url.searchParams.has('period_end'), []);
    await stubGet(page, (url) => /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
        url.searchParams.get('name') === 'room_booking_rules' && [...url.searchParams.keys()].length === 1,
    { room_booking_rules: { name: 'room_booking_rules', details: [] } });
}


const DAILY_RECURR_ERROR = 'Daily recurrence for all day meetings are not allowed.';
const STANDALONE_TITLE = 'Make standalone booking';
const TITLE = 'E2E read-only daily all-day recurrence validation';

// Seeds a valid unsaved roomless meeting for tomorrow in this browser only and
// opens the details step, where All Day and recurrence are edited locally.
async function openDetails(page: Page, overrides: Settings, email: string) {
    const settings = { ...BASE_SETTINGS, ...overrides };
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    await useSettings(page, settings);
    await page.addInitScript(({ email, title }) => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        localStorage.setItem('APP.locale', 'en-AU');
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem('PLACEOS.event_form', JSON.stringify({
            id: '', title, host: email, organiser: { email },
            date: date.valueOf(), date_end: date.valueOf() + 3_600_000, duration: 60,
            all_day: false, recurring: false, recurrence: null,
            resources: [], attendees: [], assets: [], catering: [], meeting_provider: null,
        }));
    }, { email, title: TITLE });
    const flow = new MeetingFlow(page);
    await flow.open();
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expectSettings(page, settings);
    return { flow, settings };
}

async function dailyAllDayState(flow: MeetingFlow) {
    return flow.options.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as OptionsComponent | undefined;
        if (!component) return null;
        const value = component.form_value();
        const recurrence = value.recurrence as { pattern?: string; _pattern?: string } | null;
        return {
            valid: component.form().valid(), id: value.id, title: value.title,
            future: value.date > Date.now(), rooms: value.resources.length,
            all_day: value.all_day, pattern: recurrence?.pattern ?? null, chosen: recurrence?._pattern ?? null,
            no_standalone: component.no_standalone(), booking_unavailable: component.booking_unavailable(),
            strict_capacity: component.strict_capacity_check(), loading: component.loading(),
        };
    });
}

for (const enabled of [false, true]) {
    readOnlyTest(`events.allow_daily_allday_recurrence ${enabled} controls confirmation of an all-day daily meeting`,
        async ({ staffPage, migrationAudit }, info) => {
            const email = migrationStaffEmail(info.parallelIndex);
            const { flow, settings } = await openDetails(staffPage, {
                'app.events.allow_daily_allday_recurrence': enabled,
                'app.events.allow_recurrence': true,
                'app.events.allow_all_day': true,
                'app.events.all_day_period': { start: 9, end: 17 },
                // Later confirmBooking branches; pinned off so only the key under test decides.
                'app.events.no_standalone': false,
                'app.events.booking_unavailable': false,
            }, email);
            await flow.setAllDay(true);
            await expect(flow.recurrence).toBeVisible();
            await flow.recurrence.click();
            await staffPage.getByRole('option', { name: 'Daily', exact: true }).click();
            await expect(flow.recurrence).toContainText('Daily');
            // The header refuses the roomless transition; the supported query
            // route renders the options step without confirming or saving.
            await staffPage.goto('/#/book/meeting/form?view=2');
            await expect(flow.options).toBeVisible();
            // _pattern distinguishes a real daily choice from 'none' (which also
            // stores pattern 'daily' in recurrence.ts).
            await expect.poll(() => dailyAllDayState(flow), {
                message: 'a valid unsaved roomless all-day daily form must reach the recurrence gate',
            }).toEqual({
                valid: true, id: '', title: TITLE, future: true, rooms: 0,
                all_day: true, pattern: 'daily', chosen: 'daily',
                no_standalone: false, booking_unavailable: false, strict_capacity: false, loading: false,
            });
            await expect(flow.confirm).toBeEnabled();
            await flow.confirm.click();
            const toast = staffPage.locator('mat-snack-bar-container');
            const standalone = staffPage.locator('confirm-modal');
            if (enabled) {
                // Past the recurrence gate, a roomless meeting asks before postForm.
                await expect(standalone).toHaveCount(1);
                await expect(standalone.locator('header h2')).toHaveText(STANDALONE_TITLE);
                await expect(toast.filter({ hasText: DAILY_RECURR_ERROR })).toHaveCount(0);
                // Never send: cancel instead of accept.
                await standalone.locator('footer button[mat-dialog-close]').click();
                await expect(standalone).toHaveCount(0);
            } else {
                await expect(toast.getByText(DAILY_RECURR_ERROR, { exact: true })).toBeVisible();
                await expect(standalone).toHaveCount(0);
            }
            await expect(staffPage.locator('event-link-modal')).toHaveCount(0);
            await expect(flow.success).toHaveCount(0);
            await expect(staffPage).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
            await expectSettings(staffPage, settings);
            expect(migrationAudit.blocked_api_requests, 'no write or provider request may be attempted').toEqual([]);
        });
}

readOnlyTest("events.allow_daily_allday_recurrence false allows an all-day meeting set to Daily and back to Doesn't repeat",
    async ({ staffPage, migrationAudit }, info) => {
        const email = migrationStaffEmail(info.parallelIndex);
        const { flow, settings } = await openDetails(staffPage, {
            'app.events.allow_daily_allday_recurrence': false,
            'app.events.allow_recurrence': true,
            'app.events.allow_all_day': true,
            'app.events.all_day_period': { start: 9, end: 17 },
            'app.events.no_standalone': false,
            'app.events.booking_unavailable': false,
        }, email);
        await flow.setAllDay(true);
        await expect(flow.recurrence).toBeVisible();
        await flow.recurrence.click();
        await staffPage.getByRole('option', { name: 'Daily', exact: true }).click();
        await expect(flow.recurrence).toContainText('Daily');
        await flow.recurrence.click();
        await staffPage.getByRole('option', { name: "Doesn't repeat", exact: true }).click();
        await expect(flow.recurrence).toContainText("Doesn't repeat");
        await staffPage.goto('/#/book/meeting/form?view=2');
        await expect(flow.options).toBeVisible();
        // "Doesn't repeat" is stored as pattern 'daily' with _pattern 'none' (recurrence.ts).
        await expect.poll(() => dailyAllDayState(flow), {
            message: 'a valid unsaved roomless all-day form with no recurrence must reach the recurrence gate',
        }).toEqual({
            valid: true, id: '', title: TITLE, future: true, rooms: 0,
            all_day: true, pattern: 'daily', chosen: 'none',
            no_standalone: false, booking_unavailable: false, strict_capacity: false, loading: false,
        });
        await expect(flow.confirm).toBeEnabled();
        await flow.confirm.click();
        const standalone = staffPage.locator('confirm-modal');
        // Past the recurrence gate, a roomless meeting asks before postForm.
        await expect(standalone).toHaveCount(1);
        await expect(standalone.locator('header h2')).toHaveText(STANDALONE_TITLE);
        await expect(staffPage.locator('mat-snack-bar-container').filter({ hasText: DAILY_RECURR_ERROR })).toHaveCount(0);
        // Never send: cancel instead of accept.
        await standalone.locator('footer button[mat-dialog-close]').click();
        await expect(standalone).toHaveCount(0);
        await expect(staffPage.locator('event-link-modal')).toHaveCount(0);
        await expect(flow.success).toHaveCount(0);
        await expect(staffPage).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
        await expectSettings(staffPage, settings);
        expect(migrationAudit.blocked_api_requests, 'no write or provider request may be attempted').toEqual([]);
    });
