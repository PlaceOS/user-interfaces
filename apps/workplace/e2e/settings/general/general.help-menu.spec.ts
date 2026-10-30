// Coverage: 1 unique setting, 2 scenarios.
// Setting: help (docs/settings/workplace.md).
// Consumer: libs/components/src/lib/help-tooltip.component.ts and
// libs/components/src/lib/user-controls.component.ts.
// The user-controls help button is enabled by the `help` feature; its tooltip
// renders one link per configured tile. Links are only inspected, never opened.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Settings, stubBootstrap, test } from '../support/settings-harness';
test.use({ auditHttp: 'strict' });


const HELP_LINK = 'https://example.invalid/e2e-workplace-help';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['help'],
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

async function openHelp(page: Page, help: unknown[]) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    const settings = { ...BASE, 'app.help': help };
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
    const helpButton = controls.locator('button').filter({
        has: page.locator('icon', { hasText: /^\s*help\s*$/ }),
    });
    await expect(helpButton).toHaveCount(1);
    await helpButton.click();
    await expect(page.locator('help-tooltip')).toBeVisible();
    return page.locator('help-tooltip');
}

test(
    'help renders a configured tile link',
    async ({ staffPage }) => {
        const tooltip = await openHelp(staffPage, [
            {
                name: 'E2E Workplace Help',
                link: HELP_LINK,
                // ApplicationIcon object, as help-tooltip binds [icon]="tile.icon".
                icon: { type: 'icon', class: 'material-symbols-rounded', content: 'help' },
            },
        ]);
        const link = tooltip.locator(`a[href="${HELP_LINK}"]`);
        await expect(link).toHaveCount(1);
        await expect(link).toContainText('E2E Workplace Help');
        await expect(link.locator('icon')).toHaveText(/^\s*help\s*$/);
    },
);

test(
    'help [] leaves the help tooltip without link tiles',
    async ({ staffPage }) => {
        const tooltip = await openHelp(staffPage, []);
        await expect(tooltip.locator('a')).toHaveCount(0);
    },
);
