// Coverage: 1 unique setting, 2 scenarios.
// Setting: desks.height_enabled (docs/settings/workplace.md).
// Consumer: libs/components/src/lib/user-controls.component.ts.
// These scenarios cover the user-menu desk-height control. The preset panel
// is inspected only: sliders are never changed and Save is never clicked.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Settings, stubBootstrap, test } from '../support/settings-harness';

// The strict audit aborts and fails every write, every non-local /api read and
// every calendars or events provider read.
test.use({ auditHttp: 'strict' });

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
};

async function openUserControls(page: Page, overrides: Settings) {
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

    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
    await page.locator('topbar button[name="user-controls"]').click();
    const controls = page.locator('user-controls-sidebar user-controls');
    await expect(controls).toBeVisible();
    return controls;
}

const deskButton = (page: Page, controls: Locator) =>
    controls.locator('button').filter({
        has: page.locator('icon', { hasText: /^\s*desk\s*$/ }),
    });

test(
    'desks.height_enabled false does not add the desk-height control',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, {
            'app.desks.height_enabled': false,
        });
        await expect(deskButton(staffPage, controls)).toHaveCount(0);
    },
);

test(
    'desks.height_enabled true adds the desk-height control and presets',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, {
            'app.desks.height_enabled': true,
        });
        const button = deskButton(staffPage, controls);
        await expect(button).toHaveCount(1);
        await expect(button).toBeVisible();
        await button.click();
        await expect(
            staffPage.locator('desk-height-presets'),
        ).toBeVisible();
    },
);
