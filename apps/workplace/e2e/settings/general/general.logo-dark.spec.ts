import type { Page, Route } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { image, isAppError, isDevServerSocket, redact } from '../support/settings-harness';

// Setting: logo_dark (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// SettingsService._applyTheme and topbar.logo select
// light/dark branding. app.component's @defer and ChatComponent.can_show gate
// the chat launcher. No theme control or chat control is clicked.
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const LIGHT = image('white');
const DARK_A = image('navy');
const DARK_B = image('purple');

type SafetyAudit = {
    websocket_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: { name: string; message: string; stack?: string }[];
    app_errors: string[];
    monitoring_errors: string[];
    initialization: { url: string; parent_ids: string[]; fixture: string }[];
};

// No PlaceOS WebSocket URL is exempted. In particular, the shared
// systems/control endpoint can carry BOTH the optional LLM hint bind and driver
// executions; allowing that URL would not distinguish a safe bind from an
// unsafe command.
const test = readOnlyTest.extend<{ safetyAudit: SafetyAudit }>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const audit: SafetyAudit = {
            websocket_attempts: [], tooling_websockets: [], page_errors: [], app_errors: [],
            monitoring_errors: [], initialization: [],
        };
        const context = staffPage.context();
        const observePage = (page: Page) => {
            page.on('pageerror', (error) => {
                audit.page_errors.push({ name: error.name, message: error.message, stack: error.stack });
            });
            page.on('console', (message) => {
                if (isAppError(message)) audit.app_errors.push(message.text().slice(0, 500));
            });
        };
        observePage(staffPage);
        context.on('page', observePage);
        const closing: Promise<void>[] = [];
        try {
            await context.routeWebSocket('**/*', (socket) => {
                const url = new URL(socket.url());
                if (isDevServerSocket(url)) {
                    audit.tooling_websockets.push({ url: redact(url),
                        classification: 'dev-server live reload; mocked and held open, never connected' });
                    return;
                }
                const kind = url.pathname.startsWith('/api/engine/v2/chatgpt/chat/') ? 'chat' :
                    ['/api/engine/v2/systems/control', '/control/websocket'].includes(url.pathname) ? 'driver/control (including LLM hint)' : 'other';
                audit.websocket_attempts.push({ url: redact(url), classification: `UNEXPECTED ${kind}; branding uses HTTP-only initialization` });
                // No connectToServer: the page side is closed before any server connection.
                closing.push(socket.close().catch((error: unknown) => {
                    audit.monitoring_errors.push(`WebSocket close failed: ${String(error)}`);
                }));
            });
            await use(audit);
        } finally {
            // Runs after the test body whether it passed or failed. Listeners
            // and interception stay active until the context is closed. Parent
            // readOnlyTest still runs its unchanged mutation/identity
            // assertions after this auto fixture's teardown.
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
                // One hard assertion, so every category is reported together.
                expect({
                    websocket_attempts: audit.websocket_attempts,
                    page_errors: audit.page_errors,
                    app_errors: audit.app_errors,
                    monitoring_errors: audit.monitoring_errors,
                }, 'no WebSocket attempt, application exception or monitoring failure is permitted').toEqual({
                    websocket_attempts: [], page_errors: [], app_errors: [], monitoring_errors: [],
                });
            }
        }
    }, { auto: true, timeout: 15_000 }],
});

async function isolateChatHint(page: Page, audit: SafetyAudit) {
    // ChatService._chat_system reads OrganisationService.binding('chat_room'),
    // then _bindHint calls getModule(id, 'LLM').variable('user_hint').bind().
    // The launcher (ChatComponent.can_show) reads only chat.enabled and does
    // not need that optional hint. Null ONLY this binding in browser GET
    // responses for organization/building initialization; preserve all other
    // metadata. No backend setting/binding is saved.
    // OrganisationService._bulkMetadataDetails uses bindings/bulk?parent_ids;
    // _individualMetadata is its source-supported 404 fallback.
    await page.addInitScript(() => {
        // Cached copies (copied in with the staff storage state) would skip the request.
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('PLACEOS.org.metadata.') && key.includes('.bindings.')) localStorage.removeItem(key);
        }
    });
    const rewrite = (item: { details?: unknown }) => {
        const details = typeof item.details === 'string' ? JSON.parse(item.details) : item.details ?? {};
        if (typeof details !== 'object' || details === null || Array.isArray(details)) {
            throw new Error('bindings details must be a map');
        }
        return { ...item, details: { ...details, chat_room: null } };
    };
    const handle = async (route: Route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        const url = new URL(route.request().url());
        try {
            const bulk = url.pathname === '/api/engine/v2/metadata/bindings/bulk';
            const parent_ids = bulk ? url.searchParams.get('parent_ids')!.split(',') :
                [decodeURIComponent(url.pathname.split('/')[5])];
            if (!parent_ids.every(Boolean)) throw new Error('binding fixture must identify its requested parents');
            const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
            // Preserve 404 so the client's existing individual-metadata fallback
            // still runs. _individualMetadata maps a missing record to null; that
            // is source-supported absence of a hint, not an application exception.
            if (response.status() === 404) {
                if (!bulk) audit.initialization.push({ url: redact(url), parent_ids,
                    fixture: 'HTTP GET only: missing bindings metadata (404), no optional chat_room hint' });
                return await route.fulfill({ response });
            }
            if (!response.ok()) throw new Error(`bindings initialization GET returned ${response.status()}`);
            const body = await response.json();
            if (typeof body !== 'object' || body === null || Array.isArray(body)) throw new Error('bindings response must be a map');
            // showMetadata(id, name) reads data[name] from GET /metadata/id?name=...;
            // bulkMetadata instead reads a map of parent IDs to metadata records.
            // Only records the server returned are rewritten; none are invented.
            const json = { ...body };
            if (bulk) {
                for (const id of parent_ids) if (body[id]) json[id] = rewrite(body[id]);
            } else if (body.bindings) json.bindings = rewrite(body.bindings);
            audit.initialization.push({ url: redact(url), parent_ids, fixture: 'HTTP GET only: optional chat_room hint binding set to null in browser response' });
            await route.fulfill({ json });
        } catch (error) {
            // Never hide a fixture problem: record it (fails in teardown) and
            // let the unmodified GET continue through the read-only guard.
            audit.monitoring_errors.push(`chat hint fixture: ${String(error)} (${redact(url)})`);
            await route.fallback().catch(() => undefined);
        }
    };
    await page.route((url) => ORIGINS.has(url.origin) &&
        ((url.pathname === '/api/engine/v2/metadata/bindings/bulk' &&
            [...url.searchParams.keys()].length === 1 && !!url.searchParams.get('parent_ids')) ||
        (/^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            [...url.searchParams.keys()].length === 1 && url.searchParams.get('name') === 'bindings')), handle);
}

async function openBranding(page: Page, overrides: Record<string, unknown>, audit: SafetyAudit) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1000 });
    if (overrides['app.chat.enabled'] === true) await isolateChatHint(page, audit);
    let identity: Promise<{ id: string }> | undefined;
    page.on('response', (response) => {
        if (response.request().method() === 'GET' &&
            new URL(response.url()).pathname === '/api/engine/v2/users/current') identity = response.json();
    });
    let theme_reads = 0;
    await page.route((url) => ORIGINS.has(url.origin) &&
        /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
        [...url.searchParams.keys()].length === 1 && url.searchParams.get('name') === 'settings', async (route) => {
        if (route.request().method() !== 'GET' || !identity) return route.fallback();
        try {
            const user = await identity;
            const url = new URL(route.request().url());
            if (decodeURIComponent(url.pathname.split('/')[5]) !== user.id) return await route.fallback();
            theme_reads++;
            // SettingsService.init: showMetadata(user.id, 'settings') ->
            // GET /metadata/<user-id>?name=settings, read as data['settings'].
            // A saved theme makes _initDarkMode return before saveUserSetting.
            // This is a browser response only; no user setting is persisted.
            await route.fulfill({ json: { settings: { name: 'settings', details: { theme: 'dark' } } } });
        } catch (error) {
            audit.monitoring_errors.push(`user settings fixture: ${String(error)}`);
            await route.fallback().catch(() => undefined);
        }
    });
    const settings = { ...READ_ONLY_SETTINGS, 'app.chat.enabled': false,
        'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
        'app.logo_light': LIGHT, 'app.logo_dark': DARK_A, ...overrides };
    await useSettings(page, settings);
    await page.goto('/#/directory');
    await expect(page.locator('[a-directory-user-list]')).toBeVisible();
    // GlobalLoading renders [loader] until initialisationComplete(), and keeps
    // it (with [initialisation-error]) when initialization fails internally.
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expect.poll(() => theme_reads, { message: 'the saved-theme user settings fixture must be used' }).toBeGreaterThan(0);
    if (overrides['app.chat.enabled'] === true) {
        await expect.poll(() => audit.initialization.length, { message: 'chat launcher must use its HTTP-only hint initialization fixture' }).toBeGreaterThan(0);
        // OrganisationService exposes app.org in debug mode. Read its PUBLIC
        // state only, after all org/building metadata has finished loading.
        await expect.poll(() => page.evaluate(() => {
            const org = (window as Window & { app?: { org?: {
                initialised(): boolean; binding(name: string): unknown;
            } } }).app?.org;
            return { initialised: org?.initialised() === true, hint: org?.binding('chat_room') ?? null };
        })).toEqual({ initialised: true, hint: null });
    }
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(key), key)).toEqual(value);
    }
    return page.locator('topbar a[name="nav-logo"] img');
}

for (const [label, value, expected] of [
    ['string', DARK_A, DARK_A],
    ['object', { src: DARK_B }, DARK_B],
] as const) {
    test(`logo_dark ${label} renders the configured image in dark mode`, async ({ staffPage, safetyAudit }) => {
        const logo = await openBranding(staffPage, { 'app.allow_dark_mode': true, 'app.logo_dark': value }, safetyAudit);
        await expect(staffPage.locator('body')).toHaveClass(/\btheme-dark\b/);
        await expect(logo).toBeVisible();
        await expect(logo).toHaveAttribute('src', expected);
        await expect.poll(() => logo.evaluate((element: HTMLImageElement) =>
            element.complete && element.naturalWidth === 80 && element.naturalHeight === 24)).toBe(true);
    });
}

