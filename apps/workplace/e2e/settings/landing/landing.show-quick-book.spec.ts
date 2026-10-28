// Setting: show_quick_book (docs/settings/workplace.md).
// Coverage: 1 unique setting, 1 scenario (shown and hidden checked in one test).
// Adapted to the current LandingNew UI.
import type { Browser as MigrationBrowser, BrowserContext as MigrationContext, BrowserContextOptions as MigrationContextOptions, Page as MigrationPage, TestInfo as MigrationTestInfo } from '@playwright/test';
import { expect as migrationExpect, test as migrationBase } from '../../../../../e2e/support/fixtures';
import { APP_URL as MIGRATION_APP_URL, BACKEND_URL as MIGRATION_BACKEND_URL, assertLocalOnly as migrationAssertLocalOnly, staffEmail as migrationStaffEmail } from '../../../../../e2e/support/env';
import { readOnlyTest as migrationReadOnlyBase } from '../../local/wpa-settings-readonly-legacy.fixture';
import type { BrowserContext } from '@playwright/test';
import type { Page } from '@playwright/test';
import { APP_URL } from '../../../../../e2e/support/env';
import { BACKEND_URL } from '../../../../../e2e/support/env';
import { assertLocalOnly } from '../../../../../e2e/support/env';
import { staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
// The landing page starts the hidden asset bootstrap (parking, locker and desk
// categories/types). It creates records when a GET finds none, so serve those
// GETs from fixtures. Non-GET requests fall through to the read-only guards.
const HIDDEN_CATEGORIES = [
    { id: 'pr2-hidden-catering', name: '_CATERING_', hidden: true },
    { id: 'pr2-hidden-desks', name: '_DESKS_', hidden: true },
    { id: 'pr2-hidden-parking', name: '_PARKING_', hidden: true },
    { id: 'pr2-hidden-lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    'pr2-hidden-catering': [], 'pr2-hidden-desks': ['_DESKS_'],
    'pr2-hidden-parking': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
    'pr2-hidden-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
async function stubHiddenAssets(page: Page) {
    const origins = [new URL(APP_URL).origin, new URL(BACKEND_URL).origin];
    const paths = ['/api/engine/v2/asset_categories', '/api/engine/v2/asset_types', '/api/engine/v2/assets'];
    await page.route((url) => origins.includes(url.origin) && paths.includes(url.pathname), async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (request.method() !== 'GET') return route.fallback();
        if (url.pathname === paths[0] && url.searchParams.get('hidden') === 'true') {
            if (!migrationActive) throw new Error('Landing fixture requires the safety audit');
            migrationActive.audit.fixtures['hidden categories'] = (migrationActive.audit.fixtures['hidden categories'] ?? 0) + 1;
            return route.fulfill({ json: HIDDEN_CATEGORIES });
        }
        const category = url.searchParams.get('category_id') ?? '';
        if (url.pathname === paths[1] && Object.hasOwn(HIDDEN_TYPES, category)) {
            if (!migrationActive) throw new Error('Landing fixture requires the safety audit');
            migrationActive.audit.fixtures['hidden types'] = (migrationActive.audit.fixtures['hidden types'] ?? 0) + 1;
            return route.fulfill({ json: HIDDEN_TYPES[category].map((name) => ({
                id: 'pr2-type-' + name, name, category_id: category, brand: 'PlaceOS' })) });
        }
        if (url.pathname === paths[2] && (url.searchParams.get('type_id') ?? '').startsWith('pr2-type-')) {
            if (!migrationActive) throw new Error('Landing fixture requires the safety audit');
            migrationActive.audit.fixtures['empty assets'] = (migrationActive.audit.fixtures['empty assets'] ?? 0) + 1;
            return route.fulfill({ json: [] });
        }
        return route.fallback();
    });
}
const MIGRATION_ALLOW_CLASH_QUERY = false;
// Test-local audit only: no shared fixtures or existing specs are changed.
type MigrationAudit = {
    fixtures: Record<string, number>;
    websocket_attempts: { url: string; classification: string }[];
    blocked_control_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: string[];
    app_errors: string[];
    monitoring_errors: string[];
    blocked_api_requests: string[];
    readonly_queries: { method: string; path: string }[];
    staff_identities: { email: string; privileged: boolean }[];
};
let migrationActive: {
    audit: MigrationAudit;
    register(context: MigrationContext): Promise<void>;
} | undefined;

async function migrationNewContext(browser: MigrationBrowser, options: MigrationContextOptions = {}) {
    if (!migrationActive) throw new Error('Migration audit must be active before context creation');
    const context = await browser.newContext({ ...options, serviceWorkers: 'block' });
    await migrationActive.register(context);
    return context;
}

const migrationAuditFixture: { migrationAudit: [
    (args: { staffPage: MigrationPage }, use: (audit: MigrationAudit) => Promise<void>, info: MigrationTestInfo) => Promise<void>,
    { auto: true; timeout: number },
] } = {
    migrationAudit: [async ({ staffPage }: { staffPage: MigrationPage }, use: (audit: MigrationAudit) => Promise<void>, info: MigrationTestInfo) => {
        migrationAssertLocalOnly(MIGRATION_APP_URL, MIGRATION_BACKEND_URL);
        const audit: MigrationAudit = {
            fixtures: {},
            websocket_attempts: [], blocked_control_attempts: [], tooling_websockets: [],
            page_errors: [], app_errors: [], monitoring_errors: [], blocked_api_requests: [],
            readonly_queries: [], staff_identities: [],
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
            await context.route('**/api/**', async (route) => {
                const request = route.request();
                const url = new URL(request.url());
                const read = ['GET', 'HEAD', 'OPTIONS'].includes(request.method());
                // findBookingClashes is a source-supported availability query,
                // not booking creation (libs/bookings/src/lib/bookings.fn.ts).
                // Enabled only for the preserved Batch 21 recurrence scenario.
                const clash = MIGRATION_ALLOW_CLASH_QUERY && request.method() === 'POST' &&
                    url.pathname === '/api/staff/v1/bookings/clashing-assets';
                if (origins.has(url.origin) && (read || clash)) {
                    if (clash) audit.readonly_queries.push({ method: 'POST', path: url.pathname });
                    await route.continue();
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
        migrationActive = { audit, register };
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
            migrationActive = undefined;
            try {
                await info.attach('settings-safety-audit', {
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
const migrationTest = migrationBase.extend<{ migrationAudit: MigrationAudit }>(migrationAuditFixture);
const migrationReadOnlyTest = migrationReadOnlyBase.extend<{ migrationAudit: MigrationAudit }>(migrationAuditFixture);
// Drop the shared default admin state even for legacy staff-auth-only contexts.
migrationTest.use({ storageState: undefined });
migrationReadOnlyTest.use({ storageState: undefined });

{
const base = migrationTest;
type Settings = Record<string, unknown>;

interface Isolated {
    open(overrides: Settings): Promise<Page>;
}

const TIMEZONE = 'Etc/UTC';

const test = base.extend<{ isolated: Isolated }>({
    isolated: async ({ browser, staffPage }, use, info) => {
        assertLocalOnly(APP_URL, BACKEND_URL);
        const auth = await staffPage.context().storageState();
        const contexts: BrowserContext[] = [];
        const blocked: string[] = [];
        const failures: unknown[] = [];
        try {
            await use({
                open: async (overrides) => {
                    const context = await migrationNewContext.bind(null, browser)({
                        storageState: auth,
                        baseURL: APP_URL,
                        ignoreHTTPSErrors: true,
                        timezoneId: TIMEZONE,
                        locale: 'en-AU',
                        viewport: { width: 1440, height: 1100 },
                        serviceWorkers: 'block',
                    });
                    contexts.push(context);
                    // Register before page creation/navigation; service workers cannot
                    // bypass this guard. Auth refresh under /auth remains available.
                    await context.route('**/api/**', async (route) => {
                        const request = route.request();
                        const url = new URL(request.url());
                        if (
                            !['GET', 'HEAD', 'OPTIONS'].includes(
                                request.method(),
                            ) ||
                            ![
                                new URL(APP_URL).origin,
                                new URL(BACKEND_URL).origin,
                            ].includes(url.origin)
                        ) {
                            blocked.push(`${request.method()} ${url.pathname}`);
                            await route.abort('blockedbyclient');
                        } else {
                            await route.fallback();
                        }
                    });
                    const page = await context.newPage();
                    // The app's own read establishes staff identity; no extra API call.
                    const identity = page.waitForResponse(
                        (response) =>
                            response.request().method() === 'GET' &&
                            new URL(response.url()).pathname ===
                                '/api/engine/v2/users/current',
                    );
                    const observed = identity.then(
                        (response) => ({ response }),
                        (error: unknown) => ({ error }),
                    );
                    const settings = { ...BASE_SETTINGS, ...overrides };
                    await useSettings(page, settings);
                    await page.addInitScript(() =>
                        localStorage.setItem('APP.locale', 'en-AU'),
                    );
                    await stubHiddenAssets(page);
                    await page.goto(ROUTE);
                    const result = await observed;
                    if ('error' in result) throw result.error;
                    expect(
                        result.response.ok(),
                        'the app must load the signed-in staff user',
                    ).toBe(true);
                    const user = await result.response.json();
                    expect(user.email?.toLowerCase()).toBe(
                        staffEmail(info.parallelIndex).toLowerCase(),
                    );
                    expect(
                        user.sys_admin || user.support,
                        'staff-only scenario',
                    ).toBeFalsy();
                    expect(new URL(page.url()).origin).toBe(
                        new URL(APP_URL).origin,
                    );
                    expect(
                        await page.evaluate(() =>
                            new Date().getTimezoneOffset(),
                        ),
                    ).toBe(0);
                    expect(['UTC', TIMEZONE]).toContain(
                        await page.evaluate(
                            () =>
                                Intl.DateTimeFormat().resolvedOptions()
                                    .timeZone,
                        ),
                    );
                    const stored = await page.evaluate(() =>
                        localStorage.getItem('PLACEOS.setting_overrides'),
                    );
                    expect(JSON.parse(stored ?? 'null')).toEqual(settings);
                    await expect(page.locator(READY)).toBeVisible();
                    // The LandingNew host has only an absolutely positioned child, so its
                    // own box can be zero-sized. Assert the routed host and visible
                    // template container, preserving the real page-readiness gate.
                    await expect(page.locator('landing-new')).toHaveCount(1);
                    await expect(page.locator('landing-new > div')).toBeVisible();
                    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
                    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
                    await expect.poll(() => migrationActive?.audit.fixtures['hidden categories'] ?? 0, { message: 'hidden-category reads must use the browser fixture' }).toBeGreaterThan(0);
                    await expect.poll(() => migrationActive?.audit.fixtures['hidden types'] ?? 0, { message: 'hidden-type reads must use the browser fixture' }).toBeGreaterThan(0);
                    return page;
                },
            });
        } finally {
            // Fixture teardown is separate from the test body and always checks
            // blocked mutations, including when an earlier UI assertion failed.
            for (const context of contexts) {
                try {
                    await context.close();
                } catch (error) {
                    failures.push(error);
                }
            }
            if (blocked.length)
                failures.push(
                    new Error(
                        `Unexpected API mutation/origin attempts blocked: ${blocked.join(', ')}`,
                    ),
                );
            failures.forEach((error) => console.error(error));
            if (failures.length) throw failures[0];
        }
    },
});

test.use({ storageState: undefined, timezoneId: TIMEZONE });

test.describe.configure({ retries: 0, timeout: 120_000 });

const ROUTE = '/#/landing';

const READY = 'topbar';

const BASE_SETTINGS: Settings = {
    // LandingNewComponent filters these widgets by features and settings.
    // Ignore a saved user layout locally; never open or save layout editing.
    'app.features': ['desks'],
    'app.feature_groups': {},
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': [],
    'app.hide_landing_spaces': false,
    'app.hide_landing_rooms': false,
    'app.hide_colleagues': true,
    'app.show_quick_book': false,
    'app.show_quick_links': false,
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
    'app.desks.use_assets': true,
    'app.desks.can_book_lockers': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
};

// Current quick-book UI is the desk-only auto-assign action in Quick Actions.
// Inspect its enabled state without clicking: clicking opens a booking modal.
test('show_quick_book toggles booking actions without starting a booking', async ({ isolated }) => {
    for (const enabled of [true, false]) {
        const page = await isolated.open({ 'app.show_quick_book': enabled });
        const actions = page.locator('landing-new landing-quick-actions');
        const button = actions.locator('button[name="auto-assign-desk"]');
        await expect(actions).toHaveCount(enabled ? 1 : 0);
        await expect(button).toHaveCount(enabled ? 1 : 0);
        if (enabled) {
            await expect(actions).toBeVisible();
            await expect(button).toBeVisible();
            await expect(button).toBeEnabled();
        }
        await expect(actions.locator('a')).toHaveCount(0);
        await expect(page.locator('landing-new landing-available-now')).toBeVisible();
        await expect(page.locator('landing-new landing-favourites-new')).toBeVisible();
        await expect(page.locator('auto-assigned-desk-modal')).toHaveCount(0);
        await expect(page).toHaveURL(/#\/landing$/);
    }
});
}
