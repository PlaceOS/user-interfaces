// Settings: explore.hide_zones, explore.hide_devices, explore.hide_sensors,
// explore.disable (docs/settings/workplace.md).
// Consumer: libs/explore/src/lib/explore-map-view.component.ts
// and ExploreStateService.setOptions. Visibility scenarios do not
// click overlays. A group in explore.disable has no overlay toggle and stays
// disabled in the map's applied options; without it, the Show Devices toggle
// turns devices on.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type DebugWindow, getOnly, prepareSettings, type Settings, test } from '../support/settings-harness';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['explore'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.desks.use_assets': false,
    'app.explore.show_legend': false,
    'app.explore.legend': [],
    'app.explore.disable': [],
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
    'app.explore.cisco_maps.enabled': false,
};

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'strict' });

async function openExplore(page: Page, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        base: BASE,
        hidden: 'landing-readonly',
        landingRooms: false,
        identity: false,
        viewport: false,
        // ExploreStateService: querySystems({ zone_id, limit: 50 }) -> no rooms.
        routes: () =>
            getOnly(
                page,
                (url) =>
                    url.pathname === '/api/engine/v2/systems' &&
                    [...url.searchParams.keys()].sort().join(',') === 'limit,zone_id' &&
                    url.searchParams.get('limit') === '50',
                () => [],
            ),
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/#/explore');
    await fixture.ready({ loading: false });
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    return page.locator('explore-map-view');
}

const overlay = (page: Page, label: string) =>
    page
        .locator('explore-map-view settings-toggle')
        .filter({ hasText: label });

/**
 * Whether the Explore map's applied options disable `devices`
 * (ExploreStateService options, which merge app.explore.disable on reset and
 * on every option change). Throws if the signal is unavailable.
 */
function devicesDisabled(page: Page) {
    return page.locator('explore-map-view').evaluate((element) => {
        const view = (window as DebugWindow).ng?.getComponent(element) as { options?: () => { disable?: string[] } } | undefined;
        if (!view?.options) throw new Error('explore map options are unavailable');
        return !!view.options().disable?.includes('devices');
    });
}

test(
    'explore.hide_zones false shows the Areas overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': false,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Areas')).toHaveCount(1);
        await expect(overlay(staffPage, 'Areas')).toBeVisible();
    },
);

test(
    'explore.hide_zones true removes the Areas overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Areas')).toHaveCount(0);
    },
);

test(
    'explore.hide_devices false shows the Show Devices overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': false,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Show Devices')).toHaveCount(1);
        await expect(overlay(staffPage, 'Show Devices')).toBeVisible();
    },
);

test(
    'explore.hide_devices true removes the Show Devices overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Show Devices')).toHaveCount(0);
    },
);

test(
    'explore.hide_sensors false shows the Show Sensors overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': false,
        });
        await expect(overlay(staffPage, 'Show Sensors')).toHaveCount(1);
        await expect(overlay(staffPage, 'Show Sensors')).toBeVisible();
    },
);

test(
    'explore.hide_sensors true removes the Show Sensors overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Show Sensors')).toHaveCount(0);
    },
);

test(
    'explore.disable devices hides the Show Devices toggle and keeps devices disabled',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': false,
            'app.explore.hide_sensors': false,
            'app.explore.disable': ['devices'],
        });
        // Show Sensors renders in the same overlay list, so the list is on screen.
        await expect(overlay(staffPage, 'Show Sensors')).toBeVisible();
        await expect(overlay(staffPage, 'Show Devices')).toHaveCount(0);
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices disabled by explore.disable' })
            .toBe(true);
    },
);

test(
    'explore.disable without devices allows the Show Devices toggle to turn on',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': false,
            'app.explore.hide_sensors': true,
            'app.explore.disable': [],
        });
        const toggle = overlay(staffPage, 'Show Devices').locator('button').first();
        await expect(toggle).toHaveCount(1);
        // Devices start disabled (ExploreStateService.reset); the same click
        // enables them here, which proves the click is handled.
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices disabled before the click' })
            .toBe(true);
        await expect(toggle).toHaveAttribute('aria-checked', 'false');
        await toggle.click();
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices enabled after the click' })
            .toBe(false);
        await expect(toggle).toHaveAttribute('aria-checked', 'true');
    },
);
