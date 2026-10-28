
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, getOnly, prepare, type Settings, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });


// Current runtime: desk-flow-new/desk-flow-details.component.ts.
// Auto-allocation is pinned only to expose the desktop details controls. Never
// click the parent's confirmation action, select a resource, or save a booking.
async function openDesk(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, {
        'app.features': ['desks'], 'app.feature_groups': {},
        'app.desk.auto_allocation': true, 'app.desks.auto_allocation': true,
        'app.desks.hide_title': false, 'app.desks.allow_groups': false,
        'app.desks.can_book_for_others': false, 'app.bookings.can_book_for_others': false,
        'app.desks.can_book_lockers': false, 'app.desks.has_assets': false,
        'app.desks.use_assets': true, 'app.desks.allow_recurrence': false,
        'app.desks.allow_time_changes': true, 'app.desks.allow_all_day': false,
        'app.bookings.allow_all_day': false, 'app.desk.all_day_default': false,
        'app.desks.all_day_default': false, 'app.bookings.all_day_default': false,
        'app.desks.use_building_timezone': false,
        'app.desks.available_period': 30, 'app.desks.bookable_hours': null,
        'app.desk.min_duration': null, 'app.desk.max_duration': null,
        'app.desk.duration_step': null, 'app.desk.custom_duration_options': null,
        'app.desks.min_duration': 30, 'app.desks.max_duration': 180,
        'app.desks.duration_step': 30, 'app.desks.custom_duration_options': [],
        'app.bookings.min_duration': 30, 'app.bookings.max_duration': 180,
        'app.bookings.duration_step': 30, 'app.bookings.custom_duration_options': [],
        ...overrides,
    });
    await page.goto('/#/book/desk/form'); await fixture.ready();
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    return { details, fixture };
}
const REGION = 'e2e-settings-region';
const BUILDING_A = 'e2e-settings-building-a';
const BUILDING_B = 'e2e-settings-building-b';
const LEVEL_A = 'e2e-settings-level-a';
const LEVEL_B = 'e2e-settings-level-b';
const LEVELS = [
    { id: LEVEL_A, parent_id: BUILDING_A, name: 'E2E Level A', display_name: 'E2E Level A',
        tags: ['level'] },
    { id: LEVEL_B, parent_id: BUILDING_B, name: 'E2E Level B', display_name: 'E2E Level B',
        tags: ['level'] },
];
const DESK = 'E2E browser-only desk';

async function organisationFixture(page: Page, audit: Audit) {
    // Preserve the real authority, organisation and authenticated identity.
    // Only browser GETs for the source-supported region/building/level lists
    // and synthetic-zone metadata are replaced. All IDs are fixture-local.
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('PLACEOS.org') || ['PLACEOS.region', 'PLACEOS.building'].includes(key)) {
                localStorage.removeItem(key);
            }
        }
        sessionStorage.removeItem('PLACEOS.building');
    });
    await getOnly(page, audit, 'synthetic regions', (url) => url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'region' && url.searchParams.get('limit') === '200',
    (url) => [{ id: REGION, parent_id: url.searchParams.get('parent_id'), name: 'E2E Region',
        tags: ['region'], timezone: 'UTC' }]);
    await getOnly(page, audit, 'synthetic buildings', (url) => url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'building' && url.searchParams.get('parent_id') === REGION &&
        url.searchParams.get('limit') === '500', () => [
        { id: BUILDING_A, parent_id: REGION, name: 'E2E Building A', display_name: 'E2E Building A',
            tags: ['building'], timezone: 'UTC', location: '0,0' },
        { id: BUILDING_B, parent_id: REGION, name: 'E2E Building B', display_name: 'E2E Building B',
            tags: ['building'], timezone: 'UTC', location: '40,40' },
    ]);
    await getOnly(page, audit, 'synthetic levels', (url) => url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'level' && url.searchParams.get('limit') === '2500', () => LEVELS);
    // OrganisationService bulkMetadata(name,{parent_ids}) returns a map of
    // parent IDs to Metadata records; showMetadata returns { [name]: record }.
    await getOnly(page, audit, 'synthetic bulk metadata', (url) =>
        /^\/api\/engine\/v2\/metadata\/[^/]+\/bulk$/.test(url.pathname) &&
        !!url.searchParams.get('parent_ids') &&
        url.searchParams.get('parent_ids')!.split(',').every((id) => id.startsWith('e2e-settings-')),
    (url) => Object.fromEntries(url.searchParams.get('parent_ids')!.split(',').map((id) =>
        [id, { id, name: decodeURIComponent(url.pathname.split('/')[5]), details: {} }])));
    await getOnly(page, audit, 'synthetic metadata', (url) =>
        /^\/api\/engine\/v2\/metadata\/e2e-settings-[^/]+$/.test(url.pathname) &&
        !!url.searchParams.get('name'), (url) => {
        const name = url.searchParams.get('name')!;
        return { [name]: { id: url.pathname.split('/')[5], name,
            details: name.endsWith('_booking_rules') || name === 'map_regions' ? [] : {} } };
    });
    await getOnly(page, audit, 'synthetic desk metadata', (url) =>
        /^\/api\/engine\/v2\/metadata\/e2e-settings-building-[ab]\/children$/.test(url.pathname) &&
        url.searchParams.get('name') === 'desks', (url) =>
        LEVELS.filter((level) => level.parent_id === url.pathname.split('/')[5]).map((level) => ({
            zone: level,
            metadata: { desks: { name: 'desks', details: [{
                id: 'e2e-settings-desk-' + level.id, name: DESK + ' ' + level.id,
                map_id: 'e2e-settings-desk-shape', bookable: true, assigned_to: '',
                groups: [], features: [], images: [],
            }] } },
        })));
    await getOnly(page, audit, 'empty desk bookings', (url) => url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'desk' && url.searchParams.has('period_start') &&
        url.searchParams.has('period_end'), () => []);
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
// DeskFlowSelect.use_region selects region vs building controls and level scope.
for(const enabled of [false,true]){
 test('use_region '+enabled+' scopes inline desk levels to region versus building',async({staffPage,audit})=>{
  await organisationFixture(staffPage,audit);await bookedDeskResourcesFixture(staffPage,audit);
  await openDesk(staffPage,audit,{'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,
    'app.desks.use_assets':false,'app.default_building':BUILDING_A,'app.use_region':enabled});
  const picker=staffPage.locator('desk-flow-select');await expect(picker).toBeVisible();
  await expect(picker.locator('desk-flow-select-map')).toHaveCount(0);
  const region=picker.locator('mat-select[name="region"]').first();
  const building=picker.locator('mat-select[name="building"]').first();
  await expect(region).toHaveCount(enabled?1:0);await expect(building).toHaveCount(enabled?0:1);
  if(enabled)await expect(region).toBeVisible();else await expect(building).toBeVisible();
  // DeskFlowSelect.levels() only lists levels holding a loaded bookable desk (resource.zone.id), and
  // MatSelect._canOpen() refuses to open with zero options. Wait for the debounced desk load first.
  await expect.poll(()=>audit.fixtures['synthetic desk metadata']??0).toBeGreaterThan(0);
  const list=staffPage.locator('desk-flow-select-list');await expect(list).toBeVisible();
  await expect(list.locator('mat-spinner')).toHaveCount(0);
  await expect(list.locator('li[item]').filter({hasText:DESK+' '+LEVEL_A})).toHaveCount(1);
  const level=picker.locator('mat-select[name="location-multi"]').first();await expect(level).toBeVisible();await level.click();
  const panel=staffPage.locator('.mat-mdc-select-panel[role="listbox"]');await expect(panel).toHaveCount(1);
  await expect(panel.getByRole('option')).toHaveCount(enabled?2:1);
  await expect(panel.getByRole('option')).toContainText(enabled?['E2E Level A','E2E Level B']:['E2E Level A']);
  await staffPage.keyboard.press('Escape');await expect(panel).toHaveCount(0);
  expect(audit.fixtures['synthetic levels']??0).toBeGreaterThan(0);await untouchedDesk(staffPage);
 });
}
