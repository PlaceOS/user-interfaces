// Phase 2 Group 1: migrated accepted scenario from local/wpa-settings-batch28.spec.ts.
// Source SHA-256: d77779e766076d6b6379d6793c68f7325688469efcbd072f83f0435f2c4c983a
// Original title and functional assertions retained; runtime revalidation pending.
import type { BrowserContext, Page } from '@playwright/test';
import { APP_URL, BACKEND_URL, assertLocalOnly, staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
// The landing page starts the hidden asset bootstrap (parking, locker and desk
// categories/types). It creates records when a GET finds none, so serve those
// GETs from fixtures. Non-GET requests fall through to the read-only guard.
const HIDDEN_CATEGORIES = [
    { id: 'pr1-hidden-catering', name: '_CATERING_', hidden: true },
    { id: 'pr1-hidden-desks', name: '_DESKS_', hidden: true },
    { id: 'pr1-hidden-parking', name: '_PARKING_', hidden: true },
    { id: 'pr1-hidden-lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    'pr1-hidden-catering': [], 'pr1-hidden-desks': ['_DESKS_'],
    'pr1-hidden-parking': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
    'pr1-hidden-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
async function stubHiddenAssets(page: Page) {
    const origins = [new URL(APP_URL).origin, new URL(BACKEND_URL).origin];
    const paths = ['/api/engine/v2/asset_categories', '/api/engine/v2/asset_types', '/api/engine/v2/assets'];
    await page.route((url) => origins.includes(url.origin) && paths.includes(url.pathname), async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (request.method() !== 'GET') return route.fallback();
        if (url.pathname === paths[0] && url.searchParams.get('hidden') === 'true') {
            return route.fulfill({ json: HIDDEN_CATEGORIES });
        }
        const category = url.searchParams.get('category_id') ?? '';
        if (url.pathname === paths[1] && Object.hasOwn(HIDDEN_TYPES, category)) {
            return route.fulfill({ json: HIDDEN_TYPES[category].map((name) => ({
                id: 'pr1-type-' + name, name, category_id: category, brand: 'PlaceOS' })) });
        }
        if (url.pathname === paths[2] && (url.searchParams.get('type_id') ?? '').startsWith('pr1-type-')) {
            return route.fulfill({ json: [] });
        }
        return route.fallback();
    });
}
type Attempt = { url: string; classification: string };
type Audit = {
    websocket_attempts: Attempt[];
    blocked_control_attempts: Attempt[];
    tooling_websockets: Attempt[];
    page_errors: { name: string; message: string; stack?: string }[];
    app_errors: string[];
    monitoring_errors: string[];
    blocked_api_requests: string[];
    staff_identities: { email: string; privileged: boolean }[];
    observe(context: BrowserContext): void;
};
const TIMEZONE = 'Etc/UTC';
// Same exact local control endpoint and Vite socket classification as the
// accepted permanent currency spec. No socket ever calls connectToServer().
const test = readOnlyTest.extend<{
    safetyAudit: Audit;
    isolated: { open(overrides: Settings): Promise<Page> };
}>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const contexts: BrowserContext[] = [];
        const closing: Promise<void>[] = [];
        const audit: Audit = {
            websocket_attempts: [], blocked_control_attempts: [], tooling_websockets: [],
            page_errors: [], app_errors: [], monitoring_errors: [], blocked_api_requests: [], staff_identities: [],
            observe(context) {
                contexts.push(context);
                const observePage = (page: Page) => {
                    page.on('pageerror', (error) => audit.page_errors.push({ name: error.name, message: error.message, stack: error.stack }));
                    page.on('console', (message) => {
                        if (message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text())) {
                            audit.app_errors.push(message.text().slice(0, 500));
                        }
                    });
                };
                for (const page of context.pages()) observePage(page);
                context.on('page', observePage);
            },
        };
        const monitor = async (context: BrowserContext) => {
            audit.observe(context);
            await context.routeWebSocket('**/*', (socket) => {
                try {
                    const url = new URL(socket.url());
                    const app = new URL(APP_URL);
                    const protocol = app.protocol === 'https:' ? 'wss:' : 'ws:';
                    const local = url.protocol === protocol && url.host === app.host;
                    const tooling = local && url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token';
                    const control = local && url.pathname === '/api/engine/v2/systems/control';
                    for (const key of [...url.searchParams.keys()]) url.searchParams.set(key, '[redacted]');
                    if (tooling) {
                        audit.tooling_websockets.push({ url: url.href, classification: 'dev-server live reload; mocked and held open, never connected' });
                        return;
                    }
                    if (control) {
                        audit.blocked_control_attempts.push({ url: url.href,
                            classification: 'known Workplace shell initialization; intercepted and closed before server connection' });
                    } else {
                        audit.websocket_attempts.push({ url: url.href, classification: 'UNEXPECTED socket; these presentation scenarios are HTTP-only' });
                    }
                } catch (error) {
                    audit.monitoring_errors.push(`WebSocket interception failed: ${String(error)}`);
                }
                closing.push(socket.close().catch((error: unknown) => {
                    audit.monitoring_errors.push(`WebSocket close failed: ${String(error)}`);
                }));
            });
        };
        // Expose an async registration hook to isolated.open, before new pages
        // or navigation. Audit data itself remains JSON serializable.
        const registered = new Set<BrowserContext>();
        audit.observe = ((observe) => (context: BrowserContext) => {
            if (!registered.has(context)) { registered.add(context); observe(context); }
        })(audit.observe);
        contextMonitors.set(audit, monitor);
        try {
            await monitor(staffPage.context());
            await use(audit);
        } finally {
            for (const context of contexts) {
                try { await context.close(); }
                catch (error) { audit.monitoring_errors.push(`Context close failed: ${String(error)}`); }
            }
            await Promise.all(closing);
            contextMonitors.delete(audit);
            try {
                await info.attach('legacy-settings-group1-safety-audit', {
                    body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
                });
            } finally {
                expect({ websocket_attempts: audit.websocket_attempts, page_errors: audit.page_errors,
                    app_errors: audit.app_errors, monitoring_errors: audit.monitoring_errors,
                    blocked_api_requests: audit.blocked_api_requests }, 'no unexpected socket, error or API mutation').toEqual({
                    websocket_attempts: [], page_errors: [], app_errors: [], monitoring_errors: [], blocked_api_requests: [],
                });
                expect(audit.staff_identities.length, 'each scenario must verify staff identity').toBeGreaterThan(0);
                for (const identity of audit.staff_identities) {
                    expect(identity.email).toBe(staffEmail(info.parallelIndex).toLowerCase());
                    expect(identity.privileged).toBe(false);
                }
            }
        }
    }, { auto: true, timeout: 30_000 }],
    isolated: async ({ browser, staffPage, safetyAudit }, use, info) => {
        assertLocalOnly(APP_URL, BACKEND_URL);
        const auth = await staffPage.context().storageState();
        let first = true;
        await use({ open: async (overrides) => {
            let page: Page;
            if (first) {
                first = false;
                page = staffPage; // The shared parent guard observes identity and checks teardown.
            } else {
                const context = await browser.newContext({ storageState: auth, baseURL: APP_URL,
                    ignoreHTTPSErrors: true, timezoneId: TIMEZONE, locale: 'en-AU',
                    viewport: { width: 1440, height: 1100 }, serviceWorkers: 'block' });
                await contextMonitors.get(safetyAudit)!(context);
                // Additional isolated contexts retain the legacy API guard;
                // the parent fixture guards the first page independently.
                await context.route('**/api/**', async (route) => {
                    const request = route.request();
                    const url = new URL(request.url());
                    if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method()) ||
                        ![new URL(APP_URL).origin, new URL(BACKEND_URL).origin].includes(url.origin)) {
                        safetyAudit.blocked_api_requests.push(`${request.method()} ${url.pathname}`);
                        await route.abort('blockedbyclient');
                    } else await route.continue();
                });
                page = await context.newPage();
            }
            await page.setViewportSize({ width: 1440, height: 1100 });
            const observed = page.waitForResponse((response) => response.request().method() === 'GET' &&
                new URL(response.url()).pathname === '/api/engine/v2/users/current')
                .then((response) => ({ response }), (error: unknown) => ({ error }));
            await stubHiddenAssets(page);
            const settings = { ...BASE_SETTINGS, ...overrides };
            await useSettings(page, settings);
            await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
            await page.goto('/#/landing');
            const result = await observed;
            if ('error' in result) throw result.error;
            expect(result.response.ok(), 'the app must load the signed-in staff user').toBe(true);
            const user = await result.response.json();
            const identity = { email: user.email?.toLowerCase() ?? '', privileged: !!(user.sys_admin || user.support) };
            safetyAudit.staff_identities.push(identity);
            expect(identity.email).toBe(staffEmail(info.parallelIndex).toLowerCase());
            expect(identity.privileged, 'staff-only scenario').toBeFalsy();
            expect(new URL(page.url()).origin).toBe(new URL(APP_URL).origin);
            expect(await page.evaluate(() => new Date().getTimezoneOffset())).toBe(0);
            expect(['UTC', TIMEZONE]).toContain(await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone));
            const stored = await page.evaluate(() => localStorage.getItem('PLACEOS.setting_overrides'));
            expect(JSON.parse(stored ?? 'null')).toEqual(settings);
            await expect(page.locator('topbar')).toBeVisible();
            return page;
        } });
    },
});
const contextMonitors = new WeakMap<Audit, (context: BrowserContext) => Promise<void>>();
test.use({ storageState: undefined, timezoneId: TIMEZONE, readOnlyTimezone: TIMEZONE, locale: 'en-AU' });
test.describe.configure({ retries: 0, timeout: 120_000 });

const BASE_SETTINGS: Settings = {
    'app.features': ['parking'],
    'app.show_quick_book': false,
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
};

// TopbarComponent.logo accepts logo?.src || logo. A data SVG exercises the
// rendered image without external requests, uploads or backend fixture data.
test('WPA Batch 28: logo_light loads both string and object image configurations', async ({ isolated }) => {
    // Data SVG is an in-memory image fixture: no upload, file or backend data.
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="19"><rect width="37" height="19" fill="#123456"/></svg>';
    const image = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
    for (const value of [image, { src: image }]) {
        const page = await isolated.open({ 'app.logo_light': value });
        const logo = page.locator('topbar a[name="nav-logo"] img[alt="Logo"]');
        await expect(logo).toBeVisible();
        await expect(logo).toHaveAttribute('src', image);
        await expect.poll(() => logo.evaluate((element: HTMLImageElement) => ({
            loaded: element.complete, width: element.naturalWidth, height: element.naturalHeight,
        }))).toEqual({ loaded: true, width: 37, height: 19 });
    }
});
