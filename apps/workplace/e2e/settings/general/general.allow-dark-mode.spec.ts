import type { Page } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type Audit,
    CHAT_HINT_FIXTURE,
    image,
    isolateChatHint,
    test,
} from '../support/settings-harness';

// Setting: allow_dark_mode (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// SettingsService._applyTheme and topbar.logo select
// light/dark branding. app.component's @defer and ChatComponent.can_show gate
// the chat launcher. No theme control or chat control is clicked.
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const LIGHT = image('white');
const DARK_A = image('navy');

// Every PlaceOS WebSocket fails the test, the shared systems/control endpoint
// included.
test.use({ auditSockets: 'block-all' });

async function openBranding(
    page: Page,
    overrides: Record<string, unknown>,
    audit: Audit,
) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1000 });
    if (overrides['app.chat.enabled'] === true)
        await isolateChatHint(page, audit);
    let identity: Promise<{ id: string }> | undefined;
    page.on('response', (response) => {
        if (
            response.request().method() === 'GET' &&
            new URL(response.url()).pathname === '/api/engine/v2/users/current'
        )
            identity = response.json();
    });
    let theme_reads = 0;
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            [...url.searchParams.keys()].length === 1 &&
            url.searchParams.get('name') === 'settings',
        async (route) => {
            if (route.request().method() !== 'GET' || !identity)
                return route.fallback();
            try {
                const user = await identity;
                const url = new URL(route.request().url());
                if (decodeURIComponent(url.pathname.split('/')[5]) !== user.id)
                    return await route.fallback();
                theme_reads++;
                // SettingsService.init: showMetadata(user.id, 'settings') ->
                // GET /metadata/<user-id>?name=settings, read as data['settings'].
                // A saved theme makes _initDarkMode return before saveUserSetting.
                // This is a browser response only; no user setting is persisted.
                await route.fulfill({
                    json: {
                        settings: {
                            name: 'settings',
                            details: { theme: 'dark' },
                        },
                    },
                });
            } catch (error) {
                audit.monitoring_errors.push(
                    `user settings fixture: ${String(error)}`,
                );
                await route.fallback().catch(() => undefined);
            }
        },
    );
    const settings = {
        ...READ_ONLY_SETTINGS,
        'app.chat.enabled': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        'app.logo_light': LIGHT,
        'app.logo_dark': DARK_A,
        ...overrides,
    };
    await useSettings(page, settings);
    await page.goto('/#/directory');
    await expect(page.locator('[a-directory-user-list]')).toBeVisible();
    // GlobalLoading renders [loader] until initialisationComplete(), and keeps
    // it (with [initialisation-error]) when initialization fails internally.
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect
        .poll(() => theme_reads, {
            message: 'the saved-theme user settings fixture must be used',
        })
        .toBeGreaterThan(0);
    if (overrides['app.chat.enabled'] === true) {
        await expect
            .poll(() => audit.fixtures[CHAT_HINT_FIXTURE] ?? 0, {
                message:
                    'chat launcher must use its HTTP-only hint initialization fixture',
            })
            .toBeGreaterThan(0);
        // OrganisationService exposes app.org in debug mode. Read its PUBLIC
        // state only, after all org/building metadata has finished loading.
        await expect
            .poll(() =>
                page.evaluate(() => {
                    const org = (
                        window as Window & {
                            app?: {
                                org?: {
                                    initialised(): boolean;
                                    binding(name: string): unknown;
                                };
                            };
                        }
                    ).app?.org;
                    return {
                        initialised: org?.initialised() === true,
                        hint: org?.binding('chat_room') ?? null,
                    };
                }),
            )
            .toEqual({ initialised: true, hint: null });
    }
    for (const [key, value] of Object.entries(settings)) {
        await expect
            .poll(() =>
                page.evaluate(
                    (key) =>
                        (
                            window as Window & {
                                setting?: (key: string) => unknown;
                            }
                        ).setting?.(key),
                    key,
                ),
            )
            .toEqual(value);
    }
    return page.locator('topbar a[name="nav-logo"] img');
}

for (const enabled of [false, true]) {
    test(`allow_dark_mode ${enabled} gates a saved dark theme`, async ({
        staffPage,
        audit,
    }) => {
        await staffPage.clock.install();
        const logo = await openBranding(
            staffPage,
            { 'app.allow_dark_mode': enabled },
            audit,
        );
        // SettingsService applies the theme class from setOverrides (after the
        // org settings load, which creates the override style) and from a timer
        // 1000 ms after the user settings load.
        await expect
            .poll(() =>
                staffPage.evaluate(() =>
                    (
                        window as Window & {
                            setting?: (key: string) => unknown;
                        }
                    ).setting?.('theme'),
                ),
            )
            .toBe('dark');
        await expect(staffPage.locator('style#css-var-overrides')).toHaveCount(
            1,
        );
        await staffPage.clock.runFor(1_100);
        if (enabled)
            await expect(staffPage.locator('body')).toHaveClass(
                /\btheme-dark\b/,
            );
        else
            await expect(staffPage.locator('body')).not.toHaveClass(
                /\btheme-dark\b/,
            );
        await expect(logo).toBeVisible();
        await expect(logo).toHaveAttribute('src', enabled ? DARK_A : LIGHT);
    });
}
