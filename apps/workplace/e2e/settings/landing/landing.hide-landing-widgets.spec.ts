// Setting: hide_landing_widgets (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumer: apps/workplace/src/app/landing-new/landing-new.component.ts.
// Hidden ids are removed from `available()` before the layout is rendered, so
// the card is absent and cannot be added. The default layout keeps the other
// non-optional cards.
// The ['favourites'] scenario turns hide_landing_customise off so it can open
// the layout editor and check the add list, then cancels (nothing is saved).
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Settings, stubBootstrap, test } from '../support/settings-harness';
test.use({ auditHttp: 'strict' });


const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_book': false,
    'app.hide_landing_spaces': false,
    'app.hide_landing_rooms': true,
    'app.show_quick_links': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    // Use the default layout so a saved user layout cannot mask the setting.
    'app.hide_landing_customise': true,
    'app.hide_colleagues': false,
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
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }
    await expect(page.locator('landing-new > *').first()).toBeVisible();
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

test(
    'hide_landing_widgets [] renders the default widgets',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.hide_landing_widgets': [],
        });
        await expect(
            staffPage.locator('section[data-widget="favourites"]'),
        ).toHaveCount(1);
        await expect(
            staffPage.locator('section[data-widget="colleagues"]'),
        ).toHaveCount(1);
        await expect(
            staffPage.locator('section[data-widget="available_now"]'),
        ).toHaveCount(1);
    },
);

test(
    'hide_landing_widgets removes exactly the configured cards and cannot be added',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.hide_landing_widgets': ['favourites'],
            // The editor is needed to check the add list (available()).
            'app.hide_landing_customise': false,
        });
        await expect(
            staffPage.locator('section[data-widget="favourites"]'),
        ).toHaveCount(0);
        // Widgets that were not configured stay on the page.
        await expect(
            staffPage.locator('section[data-widget="colleagues"]'),
        ).toHaveCount(1);
        await expect(
            staffPage.locator('section[data-widget="available_now"]'),
        ).toHaveCount(1);
        // Local UI state only: open the editor, read the add list, then Cancel.
        // Each add button shows its widget icon (landing-layout.ts):
        // favourites 'star', colleagues 'groups'.
        const edit = staffPage.locator('button[name="edit-home-layout"]');
        await edit.click();
        const add = staffPage.locator('button[name="add-home-widget"]');
        const addWith = (icon: string) =>
            add.filter({ has: staffPage.locator('icon', { hasText: new RegExp('^\\s*' + icon + '\\s*$') }) });
        // Anchor: the add list is rendered, with a card that is not hidden.
        await expect(addWith('groups')).toHaveCount(1);
        await expect(addWith('star')).toHaveCount(0);
        await staffPage.locator('button[name="cancel-home-layout"]').click();
        await expect(edit).toBeVisible();
        await expect(add).toHaveCount(0);
        await expect(
            staffPage.locator('section[data-widget="favourites"]'),
        ).toHaveCount(0);
    },
);
