/**
 * Settings coverage: 3 unique Settings / 6 scenarios.
 * Exact Setting keys:
 *   explore.use_zone_polygons
 *   explore.show_zone_labels
 *   explore.disable_labels
 * Two independent contexts per Setting: true/false polygons; true/false zone
 * labels; []/['zones'] disabled labels.
 * Source contracts:
 * - explore-zones.service.ts: init reads map_regions.details.areas; hide_label
 *   must be false; draw_polygon OR use_zone_polygons selects the polygon path.
 *   _bindToLevel reads AreaManagement <level>:areas and <level>; parseData
 *   excludes room-backed areas and publishes zones labels and zones-styles.
 * - explore-desks.service.ts also binds <level> and <level>:desk_bookings.
 * - OrganisationService.module resolves bindings.area_management.id/mod.
 * - ExploreStateService._disabledGroups merges explore.disable_labels.
 * - MapCanvasComponent draws polygons on [map-canvas] canvas; DynamicMapComponent
 *   renders label.map-label. No application methods or renderer calls are patched.
 * - ts-client auth uses MD5(redirect_uri) token/expiry storage keys and
 *   GET /auth/authority; realtime becomes connected on its first server message.
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
    type DebugWindow,
    exploreValues,
    openSyntheticExplore,
    pixel,
    type Settings,
    syntheticExplore,
} from '../support/settings-harness';

const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const EXPLORE = syntheticExplore('e2e-user-zone-settings-');
const { TARGET, COLOUR } = EXPLORE;
const LIVE = EXPLORE.LIVE;
const BASE: Settings = {
    ...EXPLORE.BASE,
    'app.explore.colors': { 'zone-free': COLOUR },
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

function renderedLabels(page: Page) {
    return page.locator('explore-map-view label.map-label').filter({ hasText: '23' });
}
function mapState(page: Page) {
    return page.locator('explore-map-view').evaluate((element, id) => {
        const view = (window as DebugWindow).ng?.getComponent(element) as {
            styles(): Record<string, { fill?: string }>;
            labels(): { content: string }[];
        } | undefined;
        if (!view?.styles || !view.labels) throw new Error('Read-only map signals unavailable');
        return { fill: view.styles()['#' + id]?.fill ?? '',
            labels: view.labels().map((label) => label.content) };
    }, TARGET);
}

for (const enabled of [true, false]) {
    test('explore.use_zone_polygons=' + enabled + ' renders the area using the selected drawing path',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.use_zone_polygons': enabled });
            await expect(renderedLabels(page)).toHaveCount(1);
            await expect(renderedLabels(page)).toBeVisible();
            // A rendered label at this area's explicit location independently
            // proves the same target metadata/live record has been processed.
            await expect.poll(() => pixel(page, 0.25, 0.25)).toEqual(
                enabled ? [18, 52, 86, 128] : [0, 0, 0, 0]);
            await expect.poll(async () => (await mapState(page)).fill).toBe(enabled ? '' : COLOUR);
        });
}
for (const enabled of [true, false]) {
    test('explore.show_zone_labels=' + enabled + ' controls the rendered sensor label',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.show_zone_labels': enabled });
            await expect.poll(() => pixel(page, 0.25, 0.25)).toEqual([18, 52, 86, 128]);
            // Target polygon proves this specific live area was parsed before
            // asserting absence of its label (control polygon alone is insufficient).
            await expect.poll(async () => (await mapState(page)).labels.some((s) => s.includes('23'))).toBe(enabled);
            await expect(renderedLabels(page)).toHaveCount(enabled ? 1 : 0);
            if (enabled) await expect(renderedLabels(page)).toBeVisible();
        });
}
for (const disabled of [false, true]) {
    test('explore.disable_labels=' + (disabled ? '[zones]' : '[]') + ' filters zone labels while retaining the area',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.disable_labels': disabled ? ['zones'] : [] });
            await expect.poll(() => pixel(page, 0.25, 0.25)).toEqual([18, 52, 86, 128]);
            await expect.poll(async () => (await mapState(page)).labels.some((s) => s.includes('23'))).toBe(!disabled);
            await expect(renderedLabels(page)).toHaveCount(disabled ? 0 : 1);
            if (!disabled) await expect(renderedLabels(page)).toBeVisible();
        });
}
