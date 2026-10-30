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

// Setting: chat.enabled (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// SettingsService._applyTheme and topbar.logo select
// light/dark branding. app.component's @defer and ChatComponent.can_show gate
// the chat launcher. No theme control or chat control is clicked.
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const LIGHT = image('white');
const DARK_A = image('navy');

// Every PlaceOS WebSocket fails the test, the shared systems/control endpoint
// included: it carries both the optional LLM hint bind and driver executions.
test.use({ auditSockets: 'block-all' });

// An isolateChatHint handler can still be inside route.fetch when the body
// ends. This waits for running page route handlers before the audit closes
// the context.
test.afterEach(async ({ staffPage }) => {
    await staffPage.unrouteAll({ behavior: 'wait' });
});

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
    test(`chat.enabled ${enabled} gates the chat launcher`, async ({
        staffPage,
        audit,
    }) => {
        await openBranding(
            staffPage,
            { 'app.chat.enabled': enabled },
            audit,
        );
        const launcher = staffPage.locator('global-chat button').filter({
            has: staffPage.locator('icon', { hasText: /^\s*chat\s*$/ }),
        });
        if (enabled) await expect(launcher).toBeVisible();
        else await expect(launcher).toHaveCount(0);
        await expect(staffPage.locator('global-chat textarea')).toHaveCount(0);
        // No chat is opened; any PlaceOS WebSocket is closed before a server connection.
    });
}
