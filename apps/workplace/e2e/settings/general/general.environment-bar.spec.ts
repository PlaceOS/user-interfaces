// Setting: environment_bar (docs/settings/workplace.md).
// Coverage: 1 unique setting, 1 scenario.
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

// GlobalBannerComponent.environment_bar + its body padding effect.
test('environment_bar renders the configured colour and clears for an empty value', async ({
    isolated,
}) => {
    const shown = await isolated.open({ 'app.environment_bar': '#123456' });
    const bars = shown.locator('global-banner .environment-bar');
    await expect(bars).toHaveCount(2);
    for (const bar of await bars.all()) {
        await expect(bar).toBeVisible();
        await expect(bar).toHaveCSS('background-color', 'rgb(18, 52, 86)');
        await expect(bar).toHaveAttribute('aria-hidden', 'true');
    }
    await expect(shown.locator('body')).toHaveClass(/\bhas-environment-bar\b/);
    const hidden = await isolated.open({ 'app.environment_bar': '' });
    await expect(hidden.locator('global-banner')).toHaveCount(1);
    await expect(hidden.locator('global-banner .environment-bar')).toHaveCount(
        0,
    );
    await expect(hidden.locator('body')).not.toHaveClass(
        /\bhas-environment-bar\b/,
    );
    // The other context's setting remains independent.
    await expect(bars).toHaveCount(2);
});
