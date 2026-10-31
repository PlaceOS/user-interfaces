import type { BrowserContext, Page } from '@playwright/test';
import {
    APP_URL,
    assertLocalOnly,
    BACKEND_URL,
    staffEmail,
} from '../../../../../e2e/support/env';
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
                        const context = await migrationNewContext.bind(
                            null,
                            browser,
                        )({
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
                                blocked.push(
                                    `${request.method()} ${url.pathname}`,
                                );
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
                        await hiddenAssetRoutes(page, LANDING_HIDDEN, {
                            limit: false,
                        });
                        await useSettings(page, settings);
                        await page.addInitScript(() =>
                            localStorage.setItem('APP.locale', 'en-AU'),
                        );
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

    test.describe.configure({ timeout: 120_000 });

    test.use({ storageState: undefined, timezoneId: TIMEZONE });

    const ROUTE = '/#/landing';

    const READY = 'topbar';

    const BASE_SETTINGS: Settings = {
        'app.features': ['parking'],
        'app.allow_dark_mode': false,
        'app.show_quick_book': false,
        'app.show_quick_links': false,
        'app.chat.enabled': false,
        'app.menu_embeds': [],
    };

    async function core(page: Page) {
        // /landing renders landing-new, whose host has no header.
        await expect(page.locator('landing-new')).toHaveCount(1);
        await expect(page.locator('landing-new > *').first()).toBeVisible();
        await expect(page.locator('topbar a[name="nav-logo"]')).toBeVisible();
    }

    test('menu_embeds internal items point at the local embedded route and empty list removes them', async ({
        isolated,
    }) => {
        const item = {
            id: 'e2e-local-guide',
            name: 'E2E Local Guide',
            url: 'https://example.invalid/guide',
            external: false,
            icon: 'help',
        };
        const page = await isolated.open({ 'app.menu_embeds': [item] });
        const link = page.locator(`top-menu a[name="nav-embed-${item.id}"]`);
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', `#/embedded/${item.id}`);
        await expect(link.locator('icon').first()).toHaveText(item.icon);
        const empty = await isolated.open({ 'app.menu_embeds': [] });
        await expect(
            empty.locator('top-menu a[name^="nav-embed-"]'),
        ).toHaveCount(0);
        await expect(link).toBeVisible();
        await core(empty);
    });

    test('menu_embeds external items expose a safe new-tab link without navigation', async ({
        isolated,
    }) => {
        const item = {
            id: 'e2e-external-guide',
            name: 'E2E External Guide',
            url: 'https://example.invalid/external',
            external: true,
        };
        const page = await isolated.open({ 'app.menu_embeds': [item] });
        const link = page.locator(`top-menu a[name="nav-embed-${item.id}"]`);
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', item.url);
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        await expect(link.locator('icon').first()).toHaveText(
            'open_in_browser',
        );
        await expect(page).toHaveURL(/#\/landing/);
        await core(page);
    });
}
