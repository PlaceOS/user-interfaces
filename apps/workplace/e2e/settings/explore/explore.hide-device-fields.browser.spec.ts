/**
 * Setting: explore.hide_device_fields
 * Exact runtime key: app.explore.hide_device_fields
 * Coverage: 1 unique Setting / 2 scenarios
 * Independent contexts with one synthetic wireless device on the level:
 * no hidden fields, and ['mac', 'manufacturer'] hidden.
 * explore-desks.service.ts processBindingChange sends AreaManagement <level>
 * entries whose location is not 'desk'/'booking' to processDevices.
 * explore-device-info.component.ts hides the mac/manufacturer/os/ssid/
 * username/user rows listed in the setting. Hovering a device runs
 * LocationServices.check_ownership_of(mac) on the AreaManagement system
 * (PPT-2868); the tooltip opens from the visible dot (PPT-2865).
 *
 * Safety: settings-harness browserOnlyTest. Fresh empty storage, synthetic
 * staff and auth (fake bearer), every API/auth GET answered in the browser,
 * no request or socket forwarded to a backend. Only exact AreaManagement
 * bind/unbind tuples and the one read-only check_ownership_of exec (answered
 * null in the browser) are accepted; anything else fails the strict teardown
 * audit.
 */
import { expect, type Page } from '@playwright/test';
import {
    browserOnlyTest,
    type ControlAudit,
    controlAudit,
    controlSocket,
    exploreValues,
    fakeBearer,
    openSyntheticExplore,
    type Settings,
    syntheticExplore,
} from '../support/settings-harness';

const BEARER = fakeBearer('desk-device-settings');
const EXPLORE = syntheticExplore('e2e-hide-device-fields-');
const { LEVEL, SYSTEM } = EXPLORE;
const MAC = 'e2:e2:00:00:00:01';
const MANUFACTURER = 'Synthetic Maker';
const OS = 'Synthetic OS';
// Payloads are the values passed to StatusVariable callbacks. One wireless
// device in the middle of the level, away from both area polygons.
const LIVE: Record<string, unknown> = {
    ...EXPLORE.LIVE,
    [LEVEL]: {
        value: [
            {
                location: 'wireless', x: 200, y: 200, map_width: 400, map_height: 400,
                mac: MAC, manufacturer: MANUFACTURER, os: OS, ssid: 'e2e-synthetic-ssid',
                variance: 1.5, last_seen: Math.floor(Date.now() / 1000),
            },
        ],
    },
};
const BASE: Settings = {
    ...EXPLORE.BASE,
    'app.explore.hide_devices': false,
    // openSyntheticExplore proves the map is ready by the control area's colour.
    'app.explore.colors': { 'zone-free': EXPLORE.COLOUR },
};

const test = browserOnlyTest<ControlAudit>({
    audit: controlAudit,
    socket: controlSocket<ControlAudit>({
        bearer: BEARER,
        values: exploreValues(EXPLORE, LIVE),
        key: (r) => r.name,
        // The device hover's ownership lookup; null means no owner (no username row).
        execs: {
            check_ownership_of: (r) =>
                r.sys === SYSTEM && r.mod === 'LocationServices' && r.index === 1 &&
                r.args.length === 1 && r.args[0] === MAC
                    ? { value: null }
                    : undefined,
        },
    }),
});

async function openExplore(page: Page, audit: ControlAudit, override: Settings) {
    await openSyntheticExplore(page, audit, EXPLORE, {
        settings: { ...BASE, ...override },
        bearer: BEARER,
        delivered: Object.keys(LIVE),
        controls: true,
    });
    // Devices begin disabled in ExploreStateService; turn them on in the UI.
    const devices = page
        .locator('explore-map-view settings-toggle')
        .filter({ hasText: /Devices/ });
    await expect(devices).toHaveCount(1);
    await expect(devices.locator('input[type="checkbox"]')).not.toBeChecked();
    await devices.locator('button').click();
    await expect(devices.locator('input[type="checkbox"]')).toBeChecked();
}

for (const hidden of [false, true]) {
    test('explore.hide_device_fields=' + (hidden ? "['mac','manufacturer']" : '[]') +
        ' controls the device tooltip rows',
    async ({ isolated: { page, audit } }) => {
        await openExplore(page, audit, {
            'app.explore.hide_device_fields': hidden ? ['mac', 'manufacturer'] : [],
        });
        const device = page.locator('explore-map-view [explore-device-info]');
        await expect(device).toHaveCount(1);
        // Move the pointer to the centre of the dot a user sees. Whichever
        // element receives the pointer there must open the tooltip.
        const dot = await device.locator('[name="dot"]').boundingBox();
        expect(dot, 'the device dot has a box').not.toBeNull();
        await page.mouse.move(dot!.x + dot!.width / 2, dot!.y + dot!.height / 2);
        const tooltip = page.locator('[name="device-info"]');
        await expect(tooltip).toBeVisible();
        // The OS row is never hidden here, so the tooltip content is proven
        // rendered before the absence of hidden rows is checked.
        await expect(tooltip.locator('p[os]')).toContainText(OS);
        await expect(tooltip.getByText(MAC)).toHaveCount(hidden ? 0 : 1);
        await expect(tooltip.locator('p[type]')).toHaveCount(hidden ? 0 : 1);
        if (!hidden) await expect(tooltip.locator('p[type]')).toContainText(MANUFACTURER);
        await expect
            .poll(() => audit.connections.flatMap((c) => c.execs ?? []))
            .toEqual(['check_ownership_of']);
        // loadUser() shows "Loading..." until the exec answers; the null answer
        // must clear it, so no username row remains.
        await expect(tooltip.locator('p[username]')).toHaveCount(0);
    });
}
