
import type { BrowserContext } from '@playwright/test';
import type { Page } from '@playwright/test';
import { APP_URL } from '../../../../../e2e/support/env';
import { BACKEND_URL } from '../../../../../e2e/support/env';
import { assertLocalOnly } from '../../../../../e2e/support/env';
import { staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { migrationNewContext, migrationReadOnlyTest, migrationTest } from '../support/settings-harness';

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
            return route.fulfill({ json: HIDDEN_CATEGORIES });
        }
        const category = url.searchParams.get('category_id') ?? '';
        if (url.pathname === paths[1] && Object.hasOwn(HIDDEN_TYPES, category)) {
            return route.fulfill({ json: HIDDEN_TYPES[category].map((name) => ({
                id: 'pr2-type-' + name, name, category_id: category, brand: 'PlaceOS' })) });
        }
        if (url.pathname === paths[2] && (url.searchParams.get('type_id') ?? '').startsWith('pr2-type-')) {
            return route.fulfill({ json: [] });
        }
        return route.fallback();
    });
}
// Drop the shared default admin state even for legacy staff-auth-only contexts.
migrationTest.use({ storageState: undefined });
migrationReadOnlyTest.use({ storageState: undefined });

{
const base = migrationTest;
type Settings = Record<string, unknown>;

interface Isolated {
    open(overrides: Settings, route?: string): Promise<Page>;
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
                open: async (overrides, route = ROUTE) => {
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
                    await stubHiddenAssets(page);
                    await useSettings(page, settings);
                    await page.addInitScript(() =>
                        localStorage.setItem('APP.locale', 'en-AU'),
                    );
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

test.describe.configure({ retries: 0, timeout: 120_000 });

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

/**
 * The directory page (DirectoryUserListComponent). With an empty search it
 * sends no API request, so only the page itself is checked.
 */
async function directory(page: Page) {
    await expect(page.locator('[a-directory-user-list]')).toHaveCount(1);
    await expect(page.locator('[a-directory-user-list] input[matinput]')).toBeVisible();
    await expect(page.locator('landing-new')).toHaveCount(0);
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

// /landing is the Workplace default_route (apps/workplace/src/environments/settings.ts),
// so RedirectComponent would reach it even if the override were ignored. A
// non-default route proves the setting is applied.
test('default_route redirects the application entry route to the configured route', async ({
    isolated,
}) => {
    const page = await isolated.open(
        { 'app.default_route': '/directory' },
        '/#/-',
    );
    await expect(page).toHaveURL(/#\/directory$/);
    await directory(page);
});
}
