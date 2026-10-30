// Setting: hide_landing_spaces (docs/settings/workplace.md).
// Coverage: 1 unique setting, 1 scenario (shown and hidden checked in one test).
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
    fixtureHits,
    getOnly,
    hiddenAssetRoutes,
    hiddenAssets,
    migrationCount,
    migrationNewContext,
    migrationTest,
} from '../support/settings-harness';
const LANDING_HIDDEN = hiddenAssets('e2e-settings-landing');

async function stubHiddenAssets(page: Page) {
    await hiddenAssetRoutes(page, LANDING_HIDDEN, {
        limit: false,
        count: migrationCount,
        names: { assets: 'empty assets' },
    });
}

// LandingStateService -> requestSpacesForZone (space.utilities.ts).
// An empty GET result prevents live room-status bindings while testing tabs;
// it does not stand in for room capacity or availability coverage.
async function stubLandingRooms(page: Page) {
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            !!url.searchParams.get('zone_id') &&
            url.searchParams.get('limit') === '500' &&
            url.searchParams.get('signage') === 'false' &&
            [...url.searchParams.keys()].every((key) =>
                ['zone_id', 'limit', 'signage'].includes(key),
            ),
        () => {
            migrationCount('empty landing rooms');
            return [];
        },
    );
}

{
    const base = migrationTest;
    type Settings = Record<string, unknown>;

    interface Isolated {
        open(overrides: Settings): Promise<Page>;
    }

    const TIMEZONE = 'Etc/UTC';

    const test = base.extend<{ isolated: Isolated }>({
        isolated: async ({ browser, staffPage, migrationAudit }, use, info) => {
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
                        await useSettings(page, settings);
                        await page.addInitScript(() =>
                            localStorage.setItem('APP.locale', 'en-AU'),
                        );
                        await stubHiddenAssets(page);
                        await stubLandingRooms(page);
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
                        await expect(page.locator('landing-new')).toHaveCount(
                            1,
                        );
                        await expect(
                            page.locator('landing-new > div'),
                        ).toBeVisible();
                        await expect(
                            page.locator('global-loading [loader]'),
                        ).toHaveCount(0);
                        await expect(
                            page.locator(
                                'global-loading [initialisation-error]',
                            ),
                        ).toHaveCount(0);
                        await expect
                            .poll(
                                () =>
                                    fixtureHits(
                                        migrationAudit,
                                        'hidden categories',
                                    ),
                                {
                                    message:
                                        'hidden-category reads must use the browser fixture',
                                },
                            )
                            .toBeGreaterThan(0);
                        await expect
                            .poll(
                                () =>
                                    fixtureHits(migrationAudit, 'hidden types'),
                                {
                                    message:
                                        'hidden-type reads must use the browser fixture',
                                },
                            )
                            .toBeGreaterThan(0);
                        await expect
                            .poll(
                                () =>
                                    fixtureHits(
                                        migrationAudit,
                                        'empty landing rooms',
                                    ),
                                {
                                    message:
                                        'room lists must be isolated from live status bindings',
                                },
                            )
                            .toBeGreaterThan(0);
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
        // LandingNewComponent filters these widgets by features and settings.
        // Ignore a saved user layout locally; never open or save layout editing.
        'app.features': ['desks', 'spaces'],
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

    // availableNowTabs drops the Desks and Lockers tabs for hide_landing_spaces and
    // keeps the Rooms tab. The empty room GET avoids live driver bindings.
    test('hide_landing_spaces hides the Desks and Lockers tabs while the Rooms tab remains', async ({
        isolated,
    }) => {
        for (const hidden of [false, true]) {
            const page = await isolated.open({
                'app.features': ['desks', 'spaces', 'lockers'],
                'app.hide_landing_spaces': hidden,
                'app.hide_landing_rooms': false,
            });
            const available = page.locator('landing-new landing-available-now');
            await expect(available).toBeVisible();
            await expect(
                page.locator('landing-new [data-widget="available_now"]'),
            ).toHaveCount(1);
            const desks = available.locator('button[name="tab-desks"]');
            const lockers = available.locator('button[name="tab-lockers"]');
            await expect(desks).toHaveCount(hidden ? 0 : 1);
            await expect(lockers).toHaveCount(hidden ? 0 : 1);
            if (!hidden) {
                await expect(desks).toBeVisible();
                await expect(lockers).toBeVisible();
            }
            await expect(
                available.locator('button[name="tab-rooms"]'),
            ).toBeVisible();
            await expect(available.locator('button[name^="tab-"]')).toHaveCount(
                hidden ? 1 : 3,
            );
            await expect(available.locator('mat-spinner')).toHaveCount(0);
            await expect(available.locator('[empty]')).toBeVisible();
            await expect(
                page.locator('landing-new landing-favourites-new'),
            ).toBeVisible();
            await expect(page).toHaveURL(/#\/landing$/);
            // Only visibility is tested; no room or desk is selected or booked.
        }
    });
}
