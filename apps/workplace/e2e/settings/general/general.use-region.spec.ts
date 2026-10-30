
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, getOnly, openDesk, organisationRoutes, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });


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
        desks: (level) => [{
            id: 'e2e-settings-desk-' + level.id, name: DESK + ' ' + level.id,
            map_id: 'e2e-settings-desk-shape', bookable: true, assigned_to: '',
            groups: [], features: [], images: [],
        }],
        deskBookings: true,
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
// DeskFlowSelect.use_region selects region vs building controls and level scope.
for(const enabled of [false,true]){
 test('use_region '+enabled+' scopes inline desk levels to region versus building',async({staffPage,audit})=>{
  await organisationFixture(staffPage,audit);await bookedDeskResourcesFixture(staffPage,audit);
  await openDesk(staffPage,audit,{'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,
    'app.desks.use_assets':false,'app.default_building':BUILDING_A,'app.use_region':enabled},{dateReady:false});
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
