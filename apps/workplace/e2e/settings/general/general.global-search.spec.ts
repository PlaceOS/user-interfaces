// Setting: global_search (docs/settings/workplace.md).
// Coverage: 1 unique setting, 1 scenario (shown and hidden checked in one test).
import { expect } from '../../../../../e2e/support/fixtures';
import {
    BASE_SETTINGS,
    LANDING_TIMEZONE,
    landingSafetyTest,
} from '../support/settings-harness';

const test = landingSafetyTest(BASE_SETTINGS, 'e2e-settings-landing');

test.describe.configure({ timeout: 120_000 });

test.use({
    storageState: undefined,
    timezoneId: LANDING_TIMEZONE,
    readOnlyTimezone: LANDING_TIMEZONE,
    locale: 'en-AU',
});

// docs/settings/workplace.md; TopbarComponent.search uses !== false.
test('global_search shows and hides the topbar search control', async ({
    isolated,
}) => {
    for (const enabled of [true, false]) {
        const page = await isolated.open({ 'app.global_search': enabled });
        const search = page.locator('topbar global-search');
        await expect(search).toHaveCount(enabled ? 1 : 0);
        if (enabled) await expect(search).toBeVisible();
        await expect(page.locator('topbar a[name="nav-logo"]')).toBeVisible();
        await expect(page.locator('topbar user-controls-sidebar')).toHaveCount(
            1,
        );
    }
});
