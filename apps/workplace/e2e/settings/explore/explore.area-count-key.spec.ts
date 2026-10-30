/**
 * User-owned Setting: explore.area_count_key
 * Exact runtime key: app.explore.area_count_key
 * Coverage: 1 unique Setting / 2 scenarios
 * Independent contexts use identical AreaManagement data: capacity=10,
 * count=2, people_count=8. Only the global count key differs.
 * ExploreZonesService.parseData chooses metadata key > global key > 'count';
 * ratios <0.4 are free, <0.75 pending, otherwise busy. There is no metadata
 * count-key override, room match or at_location override in this fixture.
 * Assert actual polygon pixels; labels do not reflect this setting.
 *
 * Safety: settings-harness browserOnlyTest. Fresh empty storage, synthetic
 * staff and auth (fake bearer), every API/auth GET answered in the browser,
 * no request or socket forwarded to a backend. Only exact AreaManagement
 * bind/unbind tuples are accepted; commands, mutations, redirects and
 * unexpected requests fail the strict teardown audit.
 */
import { expect, type Page } from '@playwright/test';
import {
    browserOnlyTest,
    type ControlAudit,
    controlAudit,
    controlSocket,
    exploreValues,
    openSyntheticExplore,
    pixel,
    type Settings,
    syntheticExplore,
} from '../support/settings-harness';

const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const EXPLORE = syntheticExplore('e2e-area-count-key-');
const { LEVEL, TARGET, CONTROL, COLOUR } = EXPLORE;
// Payloads are the values passed to StatusVariable callbacks, not GeoJSON.
const LIVE: Record<string, unknown> = {
    [LEVEL + ':areas']: { value: [
        { area_id: TARGET, map_id: TARGET, capacity: 10, count: 2, people_count: 8 },
        { area_id: CONTROL, map_id: CONTROL, count: 1 },
    ] },
    [LEVEL]: { value: [] },
    [LEVEL + ':desk_bookings']: {},
    // LandingStateService.init binds AreaManagement overview (level occupancy).
    overview: {},
};
const BASE: Settings = {
    ...EXPLORE.BASE,
    'app.events.has_assets': false, 'app.events.can_book_for_others': false,
    'app.events.bookable_hours': null, 'app.events.booking_unavailable': false,
    'app.explore.colors': { 'zone-free': COLOUR, 'zone-busy': '#654321' },
};

const test = browserOnlyTest<ControlAudit>({
    audit: controlAudit,
    socket: controlSocket<ControlAudit>({
        bearer: FAKE_BEARER,
        values: exploreValues(EXPLORE, LIVE),
        key: (r) => r.name,
    }),
});

async function openExplore(page: Page, audit: ControlAudit, override: Settings) {
    return openSyntheticExplore(page, audit, EXPLORE, {
        settings: { ...BASE, ...override },
        bearer: FAKE_BEARER,
        delivered: Object.keys(LIVE),
    });
}

for (const scenario of [
    { key: 'count', pixel: [18, 52, 86, 128] },
    { key: 'people_count', pixel: [101, 67, 33, 128] },
]) {
    test('explore.area_count_key=' + scenario.key + ' paints the selected occupancy status',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.area_count_key': scenario.key });
            // openExplore has already proved control polygon rendering, metadata
            // and the latest socket's complete live deliveries.
            await expect.poll(async () => {
                const actual = await pixel(page, 0.25, 0.25);
                // Canvas alpha premultiplication can round RGB channels.
                return actual[3] === scenario.pixel[3] &&
                    actual.slice(0, 3).every((channel, index) =>
                        Math.abs(channel - scenario.pixel[index]) <= 2);
            }, {
                message: 'target polygon uses the count selected by the setting',
            }).toBe(true);
            await expect(page.locator('explore-map-view [map-canvas] canvas')).toBeVisible();
        });
}

