// Setting: explore.colors on the desk booking map (docs/settings/workplace.md).
// Consumer: apps/workplace/src/app/book/desk-flow-new/desk-flow-select-map.component.ts
// styles(): colours['space-' + status] || colours[status]. The Explore map's desk
// layer reads 'desk-' + status instead (libs/explore/src/lib/explore-desks.service.ts)
// and is not covered here.
// Scenarios: space-free alone, free alone, and both keys with space-free winning.
// No desk is selected and the details form is never confirmed.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL } from '../../../../../e2e/support/env';
import { DeskFlow } from '../../../../../e2e/support/desk/desk-flow.page';
import {
    type Audit,
    type Debug,
    getOnly,
    organisationRoutes,
    prepareSettings,
    type Settings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC', auditHttp: 'strict' });

const REGION = 'e2e-settings-region';
const BUILDING_A = 'e2e-settings-building-a';
const BUILDING_B = 'e2e-settings-building-b';
const LEVEL_A = 'e2e-settings-level-a';
const LEVEL_B = 'e2e-settings-level-b';
const MAP = new URL('/e2e-settings-map.svg', APP_URL).href;
const LEVELS = [
    { id: LEVEL_A, parent_id: BUILDING_A, name: 'E2E Level A', display_name: 'E2E Level A',
        tags: ['level'], map_id: MAP },
    { id: LEVEL_B, parent_id: BUILDING_B, name: 'E2E Level B', display_name: 'E2E Level B',
        tags: ['level'], map_id: MAP },
];
const DESK = 'E2E browser-only desk';

const DESK_DETAILS = (level: { id: string }) => [{
    id: 'e2e-settings-desk-' + level.id, name: DESK + ' ' + level.id,
    map_id: 'e2e-settings-desk-shape', bookable: true, assigned_to: '',
    groups: [], features: [], images: [],
}];

async function organisationFixture(page: Page, audit: Audit) {
    await organisationRoutes(page, {
        audit,
        prefix: 'e2e-settings-',
        region: { id: REGION, name: 'E2E Region' },
        regionParent: true,
        buildings: [
            { id: BUILDING_A, parent_id: REGION, name: 'E2E Building A', display_name: 'E2E Building A',
                tags: ['building'], timezone: 'UTC', location: '0,0' },
            { id: BUILDING_B, parent_id: REGION, name: 'E2E Building B', display_name: 'E2E Building B',
                tags: ['building'], timezone: 'UTC', location: '40,40' },
        ],
        levels: LEVELS,
        metadata: (name) => (name.endsWith('_booking_rules') || name === 'map_regions' ? [] : {}),
        desks: DESK_DETAILS,
        deskBookings: true,
    });
    await page.route((url) => url.href === MAP, async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        audit.fixtures['synthetic SVG'] = (audit.fixtures['synthetic SVG'] ?? 0) + 1;
        await route.fulfill({ contentType: 'image/svg+xml',
            body: '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
                '<rect id="e2e-settings-desk-shape" x="80" y="60" width="80" height="60" fill="#aaaaaa"/></svg>' });
    });
}
// BookingFormService._computeAvailableResources -> bookedResourceList uses
// GET /bookings/booked with exactly these five parameters (bookings.fn.ts).
// A JSON string[] is the source-supported response; [] means no booked IDs.
async function bookedDeskResourcesFixture(page: Page, audit: Audit) {
    const zones = new Set([REGION, BUILDING_A, BUILDING_B, ...LEVELS.map((level) => level.id)]);
    const keys = ['type', 'zones', 'period_start', 'period_end', 'limit'];
    await getOnly(page, audit, 'empty booked desk resources', (url) => {
        const query = url.searchParams;
        const start = query.get('period_start') ?? '';
        const end = query.get('period_end') ?? '';
        return url.pathname === '/api/staff/v1/bookings/booked' &&
            [...query.keys()].length === keys.length &&
            keys.every((key) => query.getAll(key).length === 1) &&
            query.get('type') === 'desk' && zones.has(query.get('zones') ?? '') &&
            query.get('limit') === '200' && /^\d+$/.test(start) && /^\d+$/.test(end) &&
            Number.isSafeInteger(Number(start)) && Number(start) > 0 &&
            Number.isSafeInteger(Number(end)) && Number(end) > Number(start);
    }, () => []);
}
const DESK_SETTINGS: Settings = {
    'app.features': ['desks'], 'app.default_building': BUILDING_A,
    'app.desk.auto_allocation': null, 'app.desks.auto_allocation': false,
    'app.desks.can_book_for_others': false, 'app.bookings.can_book_for_others': false,
    'app.desks.allow_groups': false, 'app.desks.has_assets': false,
    'app.bookings.has_assets': false, 'app.desks.can_book_lockers': false,
    'app.desks.use_assets': false, 'app.use_region': false,
    'app.basic_user_search': true, 'app.desks.bookable_hours': null,
    'app.maps_people.keys': {}, 'app.maps_people.use_zones': [],
    'app.explore.cisco_maps.enabled': false,
    'app.desks.allow_recurrence': false, 'app.desks.allow_multiple': false,
};
// Runtime: desk-flow-new/desk-flow-select(-map).component.ts. The
// desk map is reached through the List/Map toggle; no desk is selected and the
// details form is never confirmed.
async function deskForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareSettings(page, { ...DESK_SETTINGS, ...overrides }, {
        audit, landingRooms: false, locale: 'en-US',
    });
    await organisationFixture(page, audit);
    await bookedDeskResourcesFixture(page, audit);
    const flow = new DeskFlow(page);
    await page.goto('/#/book/desk/form');
    await fixture.ready();
    await expect(flow.title).toBeEditable();
    await expect.poll(() => audit.fixtures['synthetic buildings'] ?? 0).toBeGreaterThan(0);
    await expect.poll(() => audit.fixtures['synthetic levels'] ?? 0).toBeGreaterThan(0);
    // setMapView() only offers levels holding a loaded bookable desk, so wait
    // for the debounced desk load before switching views.
    await expect.poll(() => audit.fixtures['synthetic desk metadata'] ?? 0).toBeGreaterThan(0);
    const list = page.locator('desk-flow-select-list');
    await expect(list).toBeVisible();
    await expect(list.locator('mat-spinner')).toHaveCount(0);
    await expect(list.locator('li[item]').filter({ hasText: DESK + ' ' + LEVEL_A })).toHaveCount(1);
    await expect(flow.chosenDesks).toHaveCount(0);
    return { flow, fixture };
}
async function deskMap(page: Page) {
    const select = page.locator('desk-flow-select');
    await expect(select).toBeVisible();
    await expect(select.locator('desk-flow-select-map')).toHaveCount(0);
    // The view toggle's icon ligature is lowercase `map` (desk-flow-select.component.ts).
    await select.locator('button', { has: page.locator('icon', { hasText: /^\s*map\s*$/ }) }).click();
    // The map host has no box of its own (its content is absolutely positioned),
    // so presence rather than visibility proves the map view rendered.
    const map = select.locator('desk-flow-select-map');
    await expect(map).toHaveCount(1);
    await expect(map.locator('interactive-map')).toHaveCount(1);
    return map;
}
async function untouchedDesk(page: Page, flow: DeskFlow) {
    await expect(page).toHaveURL(/#\/book\/desk\/form$/);
    await expect(page.locator('desk-flow-success')).toHaveCount(0);
    await expect(flow.chosenDesks).toHaveCount(0);
}

for (const { name, colors, colour } of [
    { name: 'space-free', colors: { 'space-free': '#123456' }, colour: '#123456' },
    { name: 'free', colors: { free: '#654321' }, colour: '#654321' },
    { name: 'space-free over free', colors: { 'space-free': '#123456', free: '#654321' }, colour: '#123456' },
]) {
    test('explore.colors ' + name + ' paints the free desk ' + colour + ' on the desk booking map',
        async ({ staffPage, audit }) => {
            const { flow } = await deskForm(staffPage, audit, {
                'app.explore.colors': colors,
            });
            const map = await deskMap(staffPage);
            await expect.poll(() => audit.fixtures['synthetic SVG'] ?? 0).toBeGreaterThan(0);
            await expect.poll(() => audit.fixtures['empty booked desk resources'] ?? 0).toBeGreaterThan(0);
            // The renderer is canvas-based, not a DOM SVG. The map component
            // builds the per-desk style map from app.explore.colors and passes
            // it to interactive-map; read its own styles() for the free fixture desk.
            const fill = () => map.evaluate((element) => {
                const c = (window as Debug).ng?.getComponent(element) as {
                    styles(): Record<string, { fill?: string }>;
                } | undefined;
                return c?.styles()['#e2e-settings-desk-shape']?.fill;
            });
            await expect.poll(fill, { message: 'the fixture desk must be styled on the map' }).toBeTruthy();
            await expect.poll(fill, { message: 'explore.colors ' + name + ' must reach the free desk style' }).toBe(colour);
            // Rendered canvas pixels: the SVG holds one grey rectangle, so
            // neither custom colour comes from the fixture asset.
            const canvas = map.locator('interactive-map dynamic-map canvas');
            await expect(canvas).toHaveCount(1);
            await expect(canvas).toBeVisible();
            await expect(map.locator('dynamic-map mat-spinner')).toHaveCount(0);
            const colours = ['#123456', '#654321'];
            const pixels = () => canvas.evaluate((element, values) => {
                const canvas = element as HTMLCanvasElement;
                const context = canvas.getContext('2d');
                if (!context || !canvas.width || !canvas.height) return [0, 0];
                const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
                return values.map((hex) => {
                    const rgb = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
                    let count = 0;
                    for (let i = 0; i < data.length; i += 4) {
                        if (data[i] === rgb[0] && data[i + 1] === rgb[1] &&
                            data[i + 2] === rgb[2] && data[i + 3] === 255) count++;
                    }
                    return count;
                });
            }, colours);
            const expected = colours.indexOf(colour);
            await expect.poll(async () => (await pixels())[expected], {
                message: 'the rendered desk must contain the configured opaque colour',
            }).toBeGreaterThan(100);
            await expect.poll(async () => (await pixels())[1 - expected], {
                message: 'the other configured colour must be absent',
            }).toBe(0);
            expect(audit.blocked_requests, 'zero attempted writes or provider requests').toEqual([]);
            await untouchedDesk(staffPage, flow);
        });
}
