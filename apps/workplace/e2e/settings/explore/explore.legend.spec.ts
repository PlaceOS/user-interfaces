// Settings: explore.show_legend and explore.legend (docs/settings/workplace.md).
// Consumer: libs/explore/src/lib/explore-map-view.component.ts renders the
// [legend] panel when show_legend is true and legend has pairs; more than three
// pairs collapse behind a toggle. The Explore level has no rooms, so nothing
// binds.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type Audit,
    getOnly,
    hiddenAssets,
    prepareSettings,
    type Settings,
    test,
} from '../support/settings-harness';

const TYPE_IDS: Record<string, string> = {
    _LOCKER_BANKS_: 'e2e-settings-type-locker-banks',
    _LOCKERS_: 'e2e-settings-type-lockers',
    _PARKING_SPACES_: 'e2e-settings-type-parking-spaces',
    _PARKING_USERS_: 'e2e-settings-type-parking-users',
    _PARKING_FLEET_VEHICLES_: 'e2e-settings-type-parking-fleet',
    _DESKS_: 'e2e-settings-type-desks',
};
const HIDDEN = hiddenAssets({
    category: (category) => 'e2e-settings-cat-' + category,
    type: (name) => TYPE_IDS[name],
    order: ['lockers', 'parking', 'desks', 'catering'],
});
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['explore'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.desks.use_assets': false,
};

async function openExplore(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        audit,
        base: BASE,
        hidden: HIDDEN,
        landingRooms: false,
        locale: 'en-US',
        viewport: false,
        bootstrap: true,
        // ExploreStateService: querySystems({ zone_id, limit: 50 }) -> no rooms, so no room bindings.
        routes: () =>
            getOnly(
                page,
                audit,
                'explore level rooms',
                (url) =>
                    url.pathname === '/api/engine/v2/systems' &&
                    [...url.searchParams.keys()].sort().join(',') === 'limit,zone_id' &&
                    url.searchParams.get('limit') === '50',
                () => [],
            ),
    });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/#/explore');
    await fixture.ready();
    await expect(page.locator('explore-map-view')).toHaveCount(1);
    return page.locator('explore-map-view [legend]');
}

const labels = (legend: ReturnType<Page['locator']>) =>
    legend.locator('#explore-map-legend-items > div > div:last-child');

const TWO: [string, string][] = [['E2E Free', '#123456'], ['E2E Busy', '#654321']];
const FOUR: [string, string][] = [...TWO, ['E2E Pending', '#112233'], ['E2E Closed', '#445566']];

test('explore.show_legend false hides a configured legend', async ({ staffPage, audit }) => {
    const legend = await openExplore(staffPage, audit, { 'app.explore.show_legend': false, 'app.explore.legend': TWO });
    await expect(legend).toHaveCount(0);
});

test('explore.show_legend true with explore.legend of two pairs renders labels and colours', async ({ staffPage, audit }) => {
    const legend = await openExplore(staffPage, audit, { 'app.explore.show_legend': true, 'app.explore.legend': TWO });
    await expect(legend).toBeVisible();
    await expect(legend.locator('h3')).toHaveText('Legend');
    await expect(legend.locator('button[aria-controls="explore-map-legend-items"]')).toHaveCount(0);
    const items = legend.locator('#explore-map-legend-items > div');
    await expect(items).toHaveCount(2);
    await expect(labels(legend)).toHaveText(['E2E Free', 'E2E Busy']);
    await expect(items.nth(0).locator('div').first()).toHaveCSS('background-color', 'rgb(18, 52, 86)');
    await expect(items.nth(1).locator('div').first()).toHaveCSS('background-color', 'rgb(101, 67, 33)');
});

test('explore.legend of four pairs collapses behind a toggle', async ({ staffPage, audit }) => {
    const legend = await openExplore(staffPage, audit, { 'app.explore.show_legend': true, 'app.explore.legend': FOUR });
    const toggle = legend.locator('button[aria-controls="explore-map-legend-items"]');
    const items = legend.locator('#explore-map-legend-items');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(items).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(items).toBeVisible();
    await expect(labels(legend)).toHaveText(FOUR.map(([label]) => label));
});

test('explore.legend empty renders no legend even when shown', async ({ staffPage, audit }) => {
    const legend = await openExplore(staffPage, audit, { 'app.explore.show_legend': true, 'app.explore.legend': [] });
    await expect(legend).toHaveCount(0);
});
