// Coverage: 1 unique setting, 3 scenarios.
// Setting: css_variables_dark (docs/settings/workplace.md).
// Consumer: libs/common/src/lib/settings.service.ts.
// The dark overrides are emitted as a `body.theme-dark` rule in the shared
// `<style id="css-var-overrides">`. The dark-mode toggle itself saves a user
// preference (a write), so this test only applies the documented theme class
// locally and checks the resulting custom property.
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
    ORIGINS,
    type Settings,
    stubBootstrap,
    test,
} from '../support/settings-harness';
test.use({ auditHttp: 'strict' });

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': [
        'available_now',
        'quick_actions',
        'desk_week',
        'favourites',
        'colleagues',
        'focus_timer',
        'world_clock',
    ],
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

async function openLanding(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    await page.goto('/#/landing');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect
            .poll(
                () =>
                    page.evaluate(
                        (name) =>
                            (
                                window as Window & {
                                    setting?: (key: string) => unknown;
                                }
                            ).setting?.(name),
                        key,
                    ),
                { message: 'effective setting ' + key },
            )
            .toEqual(value);
    }

    await expect(page.locator('landing-new')).toHaveCount(1);
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

test('css_variables_dark emits a dark-theme rule and the property resolves', async ({
    staffPage,
}) => {
    await openLanding(staffPage, {
        // `secondary` is a real theme variable (shared/styles/application.css
        // :root and .theme-dark), so the override must beat the dark default.
        'app.css_variables_dark': { secondary: '#123456' },
    });
    const style = staffPage.locator('style#css-var-overrides');
    await expect(style).toHaveCount(1);
    // Playwright's text matcher excludes STYLE nodes. Read their DOM
    // content directly; retain the actual computed-property check below.
    const stylesheet = () =>
        style.evaluate((element) => element.textContent ?? '');
    await expect.poll(stylesheet).toContain('body.theme-dark');
    await expect.poll(stylesheet).toContain('--secondary: #123456');
    // Computed --secondary on body, with and without the theme class.
    const resolved = await staffPage.evaluate(() => {
        const was_dark = document.body.classList.contains('theme-dark');
        const read = () =>
            getComputedStyle(document.body)
                .getPropertyValue('--secondary')
                .trim();
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
    expect(
        resolved.light,
        'light theme does not get the dark override',
    ).not.toBe('#123456');
});

/** Dark value served as an org-level css_variables_dark setting, in this browser only. */
const ORG_DARK = '#0a1b2c';

/**
 * Answer the org's global `settings` bulk metadata (OrganisationService
 * loadSettings, an override layer below PLACEOS.setting_overrides) with
 * css_variables_dark { secondary: ORG_DARK } added to each zone's details. The
 * real GET runs first and its other details are kept. Clears the cached org
 * metadata so the response is used. Returns the number of answered GETs.
 */
async function orgDarkVariables(page: Page) {
    let served = 0;
    await page.addInitScript(() => {
        for (const store of [localStorage, sessionStorage]) {
            for (const key of Object.keys(store)) {
                if (key.startsWith('PLACEOS.org')) store.removeItem(key);
            }
        }
    });
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
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
            served++;
            await route.fulfill({
                status: 200,
                json: Object.fromEntries(
                    ids.map((id) => [
                        id,
                        {
                            ...(real[id] ?? {}),
                            details: {
                                ...(real[id]?.details ?? {}),
                                css_variables_dark: { secondary: ORG_DARK },
                            },
                        },
                    ]),
                ),
            });
        },
    );
    return () => served;
}

const stylesheet = (page: Page) =>
    page
        .locator('style#css-var-overrides')
        .evaluate((element) => element.textContent ?? '');

test('css_variables_dark from the org settings applies without a local override', async ({
    staffPage,
}) => {
    const served = await orgDarkVariables(staffPage);
    await openLanding(staffPage, {});
    await expect.poll(served).toBeGreaterThan(0);
    await expect.poll(() => stylesheet(staffPage)).toContain('body.theme-dark');
    await expect
        .poll(() => stylesheet(staffPage))
        .toContain('--secondary: ' + ORG_DARK);
});

test('css_variables_dark {} replaces the org dark-theme map', async ({
    staffPage,
}) => {
    const served = await orgDarkVariables(staffPage);
    await openLanding(staffPage, { 'app.css_variables_dark': {} });
    await expect.poll(served).toBeGreaterThan(0);
    const style = staffPage.locator('style#css-var-overrides');
    await expect(style).toHaveCount(1);
    await expect.poll(() => stylesheet(staffPage)).toContain('body.theme-dark');
    await expect.poll(() => stylesheet(staffPage)).not.toContain('--secondary');
});
