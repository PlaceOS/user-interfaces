/**
 * User-owned Setting: explore.show_zone_sensor_info
 * Exact runtime key: app.explore.show_zone_sensor_info
 * Coverage: 1 unique Setting / 2 scenarios
 * ExploreZonesService.parseData creates a sensors feature only for a room-
 * matched metadata area with coordinates and temperature/humidity. The target
 * uses the real synthetic room ID/map ID; the separate control area is not a room.
 * Each scenario enables Sensors through the UI with identical readings.
 * True shows 23 C / 45% in the actual tooltip; false omits the sensor button.
 * Source: libs/explore/src/lib/explore-zones.service.ts and
 * libs/explore/src/lib/explore-sensor-info.component.ts.
 * No device data is supplied and LocationServices commands remain forbidden.
 *
 * Safety: settings-harness zoneSensorTest (browser-only). Fresh empty storage,
 * synthetic staff and auth, every API/auth GET answered locally, no control
 * socket forwarded. Only exact AreaManagement/Bookings bind/unbind tuples are
 * accepted; commands, mutations, redirects and unexpected requests fail the
 * final audit. Read-only Angular probes establish readiness.
 */
import { expect } from '@playwright/test';
import {
    type DebugWindow,
    openZoneSensorExplore,
    ZONE_SENSOR_TARGET,
    zoneSensorTest as test,
} from '../support/settings-harness';

for (const enabled of [true, false]) {
    test('explore.show_zone_sensor_info=' + enabled + ' controls the room sensor tooltip',
        async ({ zones: { page, audit } }) => {
            // Waits for the room, then turns Sensors on through the UI.
            await openZoneSensorExplore(page, audit, { 'app.explore.show_zone_sensor_info': enabled });
            // Metadata/live processing, room matching and the enabled overlay
            // are proven before a negative assertion about its sensor feature.
            await expect.poll(() => page.locator('explore-map-view').evaluate((element, id) => {
                const view = (window as DebugWindow).ng?.getComponent(element) as {
                    features(): { track_id?: string }[];
                } | undefined;
                if (!view) throw new Error('Read-only map features unavailable');
                return view.features().some((feature) => feature.track_id === 'sensors:' + id);
            }, ZONE_SENSOR_TARGET)).toBe(enabled);
            const sensor_button = page.locator('explore-map-view explore-sensor-info button');
            await expect(sensor_button).toHaveCount(enabled ? 1 : 0);
            await expect(page.locator('mat-dialog-container')).toHaveCount(0);
            if (enabled) {
                await expect(sensor_button).toBeVisible();
                await sensor_button.click();
                const tooltip = page.locator('.cdk-overlay-container [custom-tooltip] > div');
                await expect(tooltip).toHaveCount(1);
                await expect(tooltip).toBeVisible();
                await expect(tooltip).toContainText('23˚C');
                await expect(tooltip).toContainText('45%');
                await expect(page.locator('mat-dialog-container')).toHaveCount(0);
                await page.keyboard.press('Escape');
            }
        });
}

