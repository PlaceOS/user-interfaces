
import type { BrowserContext } from '@playwright/test';
import type { Page } from '@playwright/test';
import { APP_URL } from '../../../../../e2e/support/env';
import { BACKEND_URL } from '../../../../../e2e/support/env';
import { assertLocalOnly } from '../../../../../e2e/support/env';
import { staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import {
    hiddenAssetRoutes,
    hiddenAssets,
    migrationNewContext,
    migrationTest,
} from '../support/settings-harness';

const LANDING_HIDDEN = hiddenAssets('e2e-settings-landing');


{
const base = migrationTest;
type Settings = Record<string, unknown>;

interface Isolated {
    /** `prepare` runs on the new page before navigation (browser-only routes). */
    open(overrides: Settings, route?: string, prepare?: (page: Page) => Promise<void>): Promise<Page>;
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
                open: async (overrides, route = ROUTE, prepare) => {
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
                    await hiddenAssetRoutes(page, LANDING_HIDDEN, { limit: false });
                    await useSettings(page, settings);
                    await page.addInitScript(() =>
                        localStorage.setItem('APP.locale', 'en-AU'),
                    );
                    if (prepare) await prepare(page);
                    await page.goto(route);
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

const ROUTE = '/#/landing';

const READY = 'topbar';

const BASE_SETTINGS: Settings = {
    'app.features': [],
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.use_region': false,
};

async function core(page: Page) {
    // /landing renders landing-new, whose host has no header.
    await expect(page.locator('landing-new')).toHaveCount(1);
    await expect(page.locator('landing-new > *').first()).toBeVisible();
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

test('css_variables supplies multiple computed theme values in an isolated page', async ({
    isolated,
}) => {
    const page = await isolated.open({
        'app.css_variables': { 'brand-500': '#123456', 'base-100': '#234567' },
    });
    await expect
        .poll(() =>
            page.locator('body').evaluate((body) => {
                const style = getComputedStyle(body);
                return {
                    brand: style.getPropertyValue('--brand-500').trim(),
                    base: style.getPropertyValue('--base-100').trim(),
                };
            }),
        )
        .toEqual({ brand: '#123456', base: '#234567' });
    await core(page);
});

/** Brand value served as an org-level css_variables setting, in this browser only. */
const ZONE_BRAND = '#0a1b2c';

/**
 * Serve the org's global `settings` metadata (OrganisationService.loadSettings ->
 * bulk metadata 'settings' for the org zone, an override layer below the local
 * PLACEOS.setting_overrides) with css_variables { brand-500: ZONE_BRAND } added
 * to each zone's details, in this browser only. The real GET runs first and its
 * other details are kept. The org metadata cache is cleared so the response is
 * used. Non-GET requests fall through to the read-only guards.
 */
async function zoneCssVariables(page: Page) {
    await page.addInitScript(() => {
        for (const store of [localStorage, sessionStorage]) {
            for (const key of Object.keys(store)) {
                if (key.startsWith('PLACEOS.org')) store.removeItem(key);
            }
        }
    });
    const origins = [new URL(APP_URL).origin, new URL(BACKEND_URL).origin];
    await page.route(
        (url) =>
            origins.includes(url.origin) &&
            url.pathname === '/api/engine/v2/metadata/settings/bulk',
        async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const url = new URL(route.request().url());
            const ids = (url.searchParams.get('parent_ids') ?? '')
                .split(',')
                .filter(Boolean);
            const response = await route.fetch({ maxRedirects: 0 });
            const real: Record<string, { details?: Record<string, unknown> }> =
                response.ok() ? await response.json() : {};
            await route.fulfill({
                status: 200,
                json: Object.fromEntries(
                    ids.map((id) => [
                        id,
                        {
                            ...(real[id] ?? {}),
                            details: {
                                ...(real[id]?.details ?? {}),
                                css_variables: { 'brand-500': ZONE_BRAND },
                            },
                        },
                    ]),
                ),
            });
        },
    );
}

// The org settings supply css_variables; the control page (no local override)
// shows it, and the empty local override must replace it. If the app ignored
// the empty map, the org value would still apply and this test fails.
test('css_variables empty map replaces the configured override map without leaking contexts', async ({
    isolated,
}) => {
    const brand = (page: Page) =>
        page
            .locator('body')
            .evaluate((body) =>
                getComputedStyle(body).getPropertyValue('--brand-500').trim(),
            );
    const configured = await isolated.open({}, ROUTE, zoneCssVariables);
    await expect.poll(() => brand(configured)).toBe(ZONE_BRAND);
    const empty = await isolated.open(
        { 'app.css_variables': {} },
        ROUTE,
        zoneCssVariables,
    );
    // Playwright text matching excludes STYLE elements; read the DOM text directly.
    await expect
        .poll(() => empty.locator('style#css-var-overrides').textContent())
        // The dark-theme rule for css_variables_dark is written too, empty here.
        .toMatch(/^body\s*\{\s*\}(\s*body\.theme-dark\s*\{\s*\})?$/);
    await expect.poll(() => brand(empty)).not.toBe(ZONE_BRAND);
    await expect.poll(() => brand(configured)).toBe(ZONE_BRAND);
    await core(empty);
});
}
