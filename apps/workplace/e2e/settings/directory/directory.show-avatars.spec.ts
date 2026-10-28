import type { ConsoleMessage, Page } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

// Setting: users.show_avatars (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumers: directory/user-list.component.ts:
// min_search_length gates its 400ms search (`query.length < min` -> no
// search); show_avatars (show_image) gates a-user-avatar.
// searchStaff (users/staff.fn.ts) GETs people?q=...&fields=... and maps a raw array.
const QUERY = 'DraftDirectory';
const PERSON = { id: 'e2e-draft-directory-person', name: 'Draft Directory Person', email: 'draft-directory@example.invalid' };
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

type SafetyAudit = {
    websocket_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: { name: string; message: string; stack?: string }[];
    app_errors: string[];
    monitoring_errors: string[];
};

/** Query values (tokens in ts-client's URL-authentication mode) never reach artifacts. */
function redact(url: URL) {
    for (const key of [...url.searchParams.keys()]) url.searchParams.set(key, '[redacted]');
    return url.href;
}

/**
 * The Angular dev server's Vite client socket, and nothing else.
 *
 * @angular/build:dev-server keeps liveReload on by default, so the injected
 * Vite client opens `ws(s)://<app host>/?token=<t>` (subprotocol vite-hmr) on
 * every load (vite/dist/client/client.mjs:856-865). Closing it makes the client
 * poll and then location.reload() (:993-998), so it is held open as a mock: it
 * is never connected to the dev server and never closed. PlaceOS sockets use
 * /api/engine/v2/... or /control/... paths and can never match.
 */
function isDevServerSocket(url: URL) {
    const app = new URL(APP_URL);
    return url.host === app.host && url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:') &&
        url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token';
}

/**
 * Exceptions Angular catches never reach `pageerror`: the app's
 * LazySentryErrorHandler falls back to ErrorHandler, which logs
 * console.error('ERROR', error). Angular runtime errors log as NG0xxx.
 */
function isAppError(message: ConsoleMessage) {
    return message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text());
}

// DirectoryUserList, Topbar and FooterMenu require HTTP only. Chat is disabled
// and user controls are never opened, so there are NO expected PlaceOS
// WebSockets. Keep this fixture local: the parent readOnlyTest retains its API
// mutation guard, staff-identity checks and serviceWorkers: 'block' context.
const test = readOnlyTest.extend<{ safetyAudit: SafetyAudit }>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const audit: SafetyAudit = {
            websocket_attempts: [], tooling_websockets: [], page_errors: [], app_errors: [], monitoring_errors: [],
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
            // Context-wide interception also covers any newly opened page.
            // Never call connectToServer: even unexpected sockets stay local.
            await context.routeWebSocket('**/*', (socket) => {
                const url = new URL(socket.url());
                if (isDevServerSocket(url)) {
                    audit.tooling_websockets.push({ url: redact(url),
                        classification: 'dev-server live reload; mocked and held open, never connected' });
                    return;
                }
                const kind = url.pathname.startsWith('/api/engine/v2/chatgpt/chat/') ? 'chat' :
                    ['/api/engine/v2/systems/control', '/control/websocket'].includes(url.pathname) ? 'driver/control' : 'other';
                audit.websocket_attempts.push({ url: redact(url), classification: `UNEXPECTED ${kind}; directory initialization is HTTP-only` });
                closing.push(socket.close().catch((error: unknown) => {
                    audit.monitoring_errors.push(`WebSocket close failed: ${String(error)}`);
                }));
            });
            await use(audit);
        } finally {
            // Runs after the test body whether it passed or failed. Close with
            // listeners still installed, then inspect all observations. The
            // parent's context.close() is idempotent; its guard assertions
            // still run afterwards, including when the test body has failed.
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

async function openDirectory(page: Page, overrides: Record<string, unknown>, audit: SafetyAudit) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1000 });
    const requests: string[] = [];
    await page.route((url) => ORIGINS.has(url.origin) && url.pathname === '/api/staff/v1/people' &&
        !!url.searchParams.get('q') && (QUERY.startsWith(url.searchParams.get('q')!) ||
            url.searchParams.get('q')!.startsWith(QUERY)), async (route) => {
        // Non-GET methods continue to the read-only guard, which blocks them.
        if (route.request().method() !== 'GET') return route.fallback();
        const url = new URL(route.request().url());
        // Recorded before any check, so an unexpected lookup is never hidden.
        requests.push(url.searchParams.get('q')!);
        if (url.searchParams.get('fields') !== 'id,name,email,username,organisation,department') {
            audit.monitoring_errors.push(`people fixture: unexpected fields ${url.searchParams.get('fields')}`);
            return route.fallback();
        }
        await route.fulfill({ json: [PERSON] });
    });
    const settings = { ...READ_ONLY_SETTINGS, 'app.chat.enabled': false,
        'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
        'app.users.min_search_length': 3, 'app.users.show_avatars': false, ...overrides };
    await useSettings(page, settings);
    await page.goto('/#/directory');
    const root = page.locator('[a-directory-user-list]');
    await expect(root).toBeVisible();
    // GlobalLoading uses [loader] until initialisationComplete(), including
    // initialization failures caught internally rather than raised as pageerror.
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    // The only input in the directory search field (user-list.component.ts).
    // The placeholder is translated and its wording changed, so it is not used.
    const input = root.locator('mat-form-field[overlay] input');
    await expect(input).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(key), key)).toEqual(value);
    }
    return { root, input, requests };
}

for (const enabled of [false, true]) {
    test(`users.show_avatars ${enabled} changes directory results without losing identity`, async ({ staffPage, safetyAudit }) => {
        const { root, input } = await openDirectory(staffPage, { 'app.users.show_avatars': enabled }, safetyAudit);
        await input.fill(QUERY);
        const row = root.locator('div[user]');
        await expect(row).toHaveCount(1);
        await expect(row.locator('.name')).toHaveText(PERSON.name);
        await expect(row.locator('a[name="email"]')).toHaveAttribute('href', `mailto:${PERSON.email}`);
        await expect(row.locator('a-user-avatar')).toHaveCount(enabled ? 1 : 0);
        if (enabled) {
            await expect(row).toHaveClass(/\bwith-image\b/);
            // <a-user-avatar> sets no host display style; its inner circle
            // (attr user-id) has a real box and names this person.
            await expect(row.locator(`a-user-avatar [user-id="${PERSON.id}"]`)).toBeVisible();
        } else await expect(row).not.toHaveClass(/\bwith-image\b/);
        // No mailto, Locate or Call link is opened.
    });
}
