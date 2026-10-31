// Setting: logo_light (docs/settings/workplace.md).
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

// TopbarComponent.logo accepts logo?.src || logo. A data SVG exercises the
// rendered image without external requests, uploads or backend fixture data.
test('logo_light loads both string and object image configurations', async ({
    isolated,
}) => {
    // Data SVG is an in-memory image fixture: no upload, file or backend data.
    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="19"><rect width="37" height="19" fill="#123456"/></svg>';
    const image = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
    for (const value of [image, { src: image }]) {
        const page = await isolated.open({ 'app.logo_light': value });
        const logo = page.locator('topbar a[name="nav-logo"] img[alt="Logo"]');
        await expect(logo).toBeVisible();
        await expect(logo).toHaveAttribute('src', image);
        await expect
            .poll(() =>
                logo.evaluate((element: HTMLImageElement) => ({
                    loaded: element.complete,
                    width: element.naturalWidth,
                    height: element.naturalHeight,
                })),
            )
            .toEqual({ loaded: true, width: 37, height: 19 });
    }
});
