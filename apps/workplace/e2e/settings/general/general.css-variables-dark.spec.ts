// Coverage: 1 unique setting, 2 scenarios.
// Setting: css_variables_dark (docs/settings/workplace.md).
// Consumer: libs/common/src/lib/settings.service.ts.
// The dark overrides are emitted as a `body.theme-dark` rule in the shared
// `<style id="css-var-overrides">`. The dark-mode toggle itself saves a user
// preference (a write), so this test only applies the documented theme class
// locally and checks the resulting custom property.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type SafetyAudit, type Settings, stubBootstrap } from '../support/settings-harness';
const test = readOnlyTest.extend<{ safetyAudit: SafetyAudit }>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const context = staffPage.context();
        const origins = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
        const audit: SafetyAudit = { blocked_http: [], unexpected_ws: [] };
        const closing: Promise<void>[] = [];
        await context.route('**/*', async (route) => {
            const request = route.request();
            const url = new URL(request.url());
            const read = ['GET', 'HEAD', 'OPTIONS'].includes(request.method());
            const provider = /^\/api\/staff\/v1\/(calendars|events)(\/|$)/.test(url.pathname);
            if (read && !provider && (!url.pathname.startsWith('/api/') || origins.has(url.origin))) {
                return route.fallback();
            }
            audit.blocked_http.push(request.method() + ' ' + url.pathname);
            await route.abort('blockedbyclient');
        });
        await context.routeWebSocket('**/*', (socket) => {
            const url = new URL(socket.url());
            const app = new URL(APP_URL);
            const local = url.host === app.host &&
                url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
            // Hold Vite's browser-local socket open to prevent reload polling.
            // No socket is ever connected to its server.
            if (local && url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token') return;
            if (!(local && url.pathname === '/api/engine/v2/systems/control')) {
                audit.unexpected_ws.push(url.origin + url.pathname);
            }
            closing.push(socket.close());
        });
        try {
            await use(audit);
        } finally {
            await context.close();
            await Promise.all(closing);
            await info.attach('settings-safety-audit', {
                body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
            });
            expect(audit, 'zero attempted HTTP writes/provider reads or unexpected WebSockets').toEqual({
                blocked_http: [], unexpected_ws: [],
            });
        }
    }, { auto: true, timeout: 30_000 }],
});


const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': ['available_now', 'quick_actions', 'desk_week', 'favourites', 'colleagues', 'focus_timer', 'world_clock'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.css_variables': {},
};

test.describe.configure({ retries: 0, timeout: 120_000 });

async function openLanding(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    await page.goto('/#/landing');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }

    await expect(page.locator('landing-new')).toHaveCount(1);
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

test(
    'css_variables_dark emits a dark-theme rule and the property resolves',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            // `secondary` is a real theme variable (shared/styles/application.css
            // :root and .theme-dark), so the override must beat the dark default.
            'app.css_variables_dark': { 'secondary': '#123456' },
        });
        const style = staffPage.locator('style#css-var-overrides');
        await expect(style).toHaveCount(1);
        // Playwright's text matcher excludes STYLE nodes. Read their DOM
        // content directly; retain the actual computed-property check below.
        const stylesheet = () => style.evaluate((element) => element.textContent ?? '');
        await expect.poll(stylesheet).toContain('body.theme-dark');
        await expect.poll(stylesheet).toContain('--secondary: #123456');
        // Computed --secondary on body, with and without the theme class.
        const resolved = await staffPage.evaluate(() => {
            const was_dark = document.body.classList.contains('theme-dark');
            const read = () => getComputedStyle(document.body).getPropertyValue('--secondary').trim();
            try {
                document.body.classList.add('theme-dark');
                const dark = read();
                document.body.classList.remove('theme-dark');
                const light = read();
                return { dark, light };
            } finally {
                document.body.classList.toggle('theme-dark', was_dark);
            }
        });
        expect(resolved.dark, 'dark theme uses the override').toBe('#123456');
        // The light theme keeps the stylesheet value (present, not the override).
        expect(resolved.light, 'light theme --secondary is defined').not.toBe('');
        expect(resolved.light, 'light theme does not get the dark override').not.toBe('#123456');
    },
);

test(
    'css_variables_dark {} leaves the dark-theme rule empty',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.css_variables_dark': {},
        });
        const style = staffPage.locator('style#css-var-overrides');
        await expect(style).toHaveCount(1);
        const stylesheet = () => style.evaluate((element) => element.textContent ?? '');
        // Establish stylesheet readiness before checking absence, so an empty
        // or uninitialised element cannot make this scenario pass.
        await expect.poll(stylesheet).toContain('body.theme-dark');
        await expect.poll(stylesheet).not.toContain('--secondary');
    },
);
