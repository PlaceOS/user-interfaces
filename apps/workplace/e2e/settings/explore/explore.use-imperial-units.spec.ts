// Setting: use_imperial_units (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/explore/src/lib/explore-zones.service.ts parseData sets
// temp_unit = use_imperial_units ? 'F' : 'C' and passes it, with the reading
// unchanged, to the sensor feature; explore-sensor-info.component.ts shows
// '<temp>˚<unit>'. The setting only changes the unit label; there is no
// conversion, and the backend may send either scale.
//
// Both scenarios use the same synthetic room reading (23, 45%) from the shared
// zone-sensor harness (settings-harness zoneSensorTest; fully synthetic org,
// user, map and AreaManagement binding; no writes; strict teardown), with
// explore.show_zone_sensor_info on:
//   1. false: the sensor tooltip shows 23˚C.
//   2. true: the same reading shows 23˚F (not converted, e.g. not 73.4).
// The tooltip's warning icon (shown above 82 in either unit) is not asserted.
// Runs in the settings-browser project (no backend).
import { expect } from '@playwright/test';
import {
    type DebugWindow,
    openZoneSensorExplore,
    ZONE_SENSOR_READING,
    ZONE_SENSOR_TARGET,
    zoneSensorTest as test,
} from '../support/settings-harness';

const SCENARIOS = [
    { imperial: false, shown: 'C', other: 'F' },
    { imperial: true, shown: 'F', other: 'C' },
];

for (const scenario of SCENARIOS) {
    test('use_imperial_units ' + scenario.imperial + ' labels the zone temperature ˚' + scenario.shown,
        async ({ zones: { page, audit } }) => {
            await openZoneSensorExplore(page, audit, {
                'app.use_imperial_units': scenario.imperial,
                'app.explore.show_zone_sensor_info': true,
            });
            // The room's sensor feature carries the reading and the unit.
            await expect.poll(() => page.locator('explore-map-view').evaluate((element, id) => {
                const view = (window as DebugWindow).ng?.getComponent(element) as {
                    features(): { track_id?: string; data?: { temp?: number; temp_unit?: string } }[];
                } | undefined;
                if (!view) throw new Error('Read-only map features unavailable');
                const feature = view.features().find((item) => item.track_id === 'sensors:' + id);
                return feature ? { temp: feature.data?.temp, unit: feature.data?.temp_unit } : null;
            }, ZONE_SENSOR_TARGET)).toEqual({ temp: ZONE_SENSOR_READING.temperature, unit: scenario.shown });
            const button = page.locator('explore-map-view explore-sensor-info button');
            await expect(button).toHaveCount(1);
            await expect(button).toBeVisible();
            await button.click();
            const tooltip = page.locator('.cdk-overlay-container [custom-tooltip] > div');
            await expect(tooltip).toHaveCount(1);
            await expect(tooltip).toBeVisible();
            await expect(tooltip).toContainText(ZONE_SENSOR_READING.temperature + '˚' + scenario.shown);
            await expect(tooltip).not.toContainText('˚' + scenario.other);
            await expect(tooltip).toContainText(ZONE_SENSOR_READING.humidity + '%');
            await expect(page.locator('mat-dialog-container')).toHaveCount(0);
            await page.keyboard.press('Escape');
        });
}
