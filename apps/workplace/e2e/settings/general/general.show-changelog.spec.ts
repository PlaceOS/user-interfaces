// Setting: show_changelog (docs/settings/workplace.md).
// Coverage: 1 unique setting, 1 scenario (button and plain text checked in one test).
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    LANDING_TIMEZONE,
    landingSafetyTest,
    type Settings,
} from '../support/settings-harness';

const BASE_SETTINGS: Settings = {
    'app.features': [],
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.use_region': false,
};
const test = landingSafetyTest(BASE_SETTINGS, 'e2e-settings-landing');
test.use({
    storageState: undefined,
    timezoneId: LANDING_TIMEZONE,
    readOnlyTimezone: LANDING_TIMEZONE,
    locale: 'en-AU',
});

async function controls(page: Page) {
    await page.locator('topbar button[name="user-controls"]').click();
    await expect(
        page.locator('user-controls-sidebar user-controls'),
    ).toBeVisible();
    return page.locator('user-controls-sidebar user-controls');
}

// UserControls only opens the drawer; no version/changelog action is clicked.
test('show_changelog changes the version control between a button and plain text', async ({
    isolated,
}) => {
    for (const enabled of [true, false]) {
        const page = await isolated.open({ 'app.show_changelog': enabled });
        const drawer = await controls(page);
        const version = drawer.getByText(/^\s*Version:/);
        await expect(version).toHaveCount(1);
        await expect(version).toBeVisible();
        await expect(version.locator('button')).toHaveCount(enabled ? 1 : 0);
        if (enabled) await expect(version.locator('button')).not.toHaveText('');
        else await expect(version.locator('span')).not.toHaveText('');
        await expect(
            drawer.getByRole('button', { name: 'Sign Out', exact: true }),
        ).toBeVisible();
    }
});
