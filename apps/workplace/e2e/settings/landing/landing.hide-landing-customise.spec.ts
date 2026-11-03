// Setting: hide_landing_customise (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumer: apps/workplace/src/app/landing-new/landing-new.component.ts.
// When true the "Edit home screen" control is not rendered and a saved layout
// is ignored; when false the control opens the local layout editor.
// The true scenario serves a saved layout (browser-only) that hides favourites
// and expects favourites to stay on the page.
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
    type Settings,
    stubBootstrap,
    test,
} from '../support/settings-harness';

test.describe.configure({ timeout: 120_000 });

test.use({ auditHttp: 'strict' });

/** Saved layout that removes the favourites card when the app applies it */
const SAVED_LAYOUT = { order: [], hidden: ['favourites'] };

/**
 * Browser-only: answers the GET for the signed-in user's own `settings`
 * metadata (SettingsService.init -> showMetadata(user.id, 'settings')) with
 * SAVED_LAYOUT. Other metadata requests and all non-GET requests fall through.
 * Call before the page loads. Returns the number of answered requests.
 */
async function servedSavedLayout(page: Page) {
    const origins = new Set([
        new URL(APP_URL).origin,
        new URL(BACKEND_URL).origin,
    ]);
    const identity = page
        .waitForResponse((response) => {
            const url = new URL(response.url());
            return (
                origins.has(url.origin) &&
                url.pathname === '/api/engine/v2/users/current' &&
                response.request().method() === 'GET'
            );
        })
        .then((response) => response.json() as Promise<{ id: string }>)
        .catch(() => null);
    let served = 0;
    await page.route(
        (url) =>
            origins.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            url.searchParams.get('name') === 'settings',
        async (route) => {
            const id = new URL(route.request().url()).pathname.split('/')[5];
            const user =
                route.request().method() === 'GET' ? await identity : null;
            if (!user || id !== user.id) return route.fallback();
            served++;
            await route.fulfill({
                json: {
                    settings: {
                        id,
                        name: 'settings',
                        details: { landing_layout: SAVED_LAYOUT },
                    },
                },
            });
        },
    );
    return () => served;
}

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [],
    'app.hide_landing_widgets': [],
    'app.hide_colleagues': false,
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
};

async function openLanding(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    await page.goto('/#/landing');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('landing-new')).toHaveCount(1);
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
    await expect(page.locator('landing-new > *').first()).toBeVisible();
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

test('hide_landing_customise false shows the Edit home screen control', async ({
    staffPage,
}) => {
    await openLanding(staffPage, {
        'app.hide_landing_customise': false,
    });
    const edit = staffPage.locator('button[name="edit-home-layout"]');
    await expect(edit).toHaveCount(1);
    await expect(edit).toBeVisible();
    // The control only changes local UI state. Cancel restores the page.
    await edit.click();
    await expect(
        staffPage.locator('button[name="save-home-layout"]'),
    ).toBeVisible();
    await staffPage.locator('button[name="cancel-home-layout"]').click();
    await expect(edit).toBeVisible();
});

test('hide_landing_customise true removes the Edit home screen control and ignores a saved layout', async ({
    staffPage,
}) => {
    const served = await servedSavedLayout(staffPage);
    await openLanding(staffPage, {
        'app.hide_landing_customise': true,
    });
    // Anchor: the saved layout has reached the app's user settings.
    await expect
        .poll(
            () =>
                staffPage.evaluate(() =>
                    (
                        window as Window & {
                            setting?: (key: string) => unknown;
                        }
                    ).setting?.('landing_layout'),
                ),
            { message: 'saved landing_layout loaded' },
        )
        .toEqual(SAVED_LAYOUT);
    expect(
        served(),
        'saved layout served from the user settings GET',
    ).toBeGreaterThan(0);
    // The saved layout hides favourites; with the setting on it is not used.
    await expect(
        staffPage.locator('section[data-widget="favourites"]'),
    ).toHaveCount(1);
    await expect(
        staffPage.locator('button[name="edit-home-layout"]'),
    ).toHaveCount(0);
    await expect(
        staffPage.locator('button[name="save-home-layout"]'),
    ).toHaveCount(0);
});
