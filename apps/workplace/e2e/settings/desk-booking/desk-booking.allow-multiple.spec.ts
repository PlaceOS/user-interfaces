
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, type Debug, getOnly, openDesk, organisationRoutes, test, untouchedDesk } from '../support/settings-harness';

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
// DeskFlowSelect.toggleDesk: desks.allow_multiple accumulates resources; otherwise each pick replaces the last.
// Selection is local form state only. Never Continue, Confirm or save.
const MULTI=[{id:'e2e-settings-multi-desk-1',name:'E2E multi desk one'},{id:'e2e-settings-multi-desk-2',name:'E2E multi desk two'}];
for(const multiple of [false,true]){
 test('desks.allow_multiple '+multiple+' accumulates or replaces local desk picks',async({staffPage,audit})=>{
  await organisationFixture(staffPage,audit);await bookedDeskResourcesFixture(staffPage,audit);
  // Registered after organisationFixture, so it answers building A's desk metadata with two desks on level A.
  await getOnly(staffPage,audit,'two desk metadata',url=>url.pathname==='/api/engine/v2/metadata/'+BUILDING_A+'/children'&&url.searchParams.get('name')==='desks',()=>[{
   zone:LEVELS[0],metadata:{desks:{name:'desks',details:MULTI.map(d=>({...d,map_id:d.id+'-shape',bookable:true,assigned_to:'',groups:[],features:[],images:[]}))}},
  }]);
  await openDesk(staffPage,audit,{'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,
    'app.desks.use_assets':false,'app.default_building':BUILDING_A,'app.use_region':false,'app.desks.allow_multiple':multiple},{dateReady:false});
  const list=staffPage.locator('desk-flow-select-list');await expect(list).toBeVisible();await expect(list.locator('mat-spinner')).toHaveCount(0);
  // BookingFormService only starts the desk load once _requests_ready() holds and a 300 ms debounce elapses;
  // loading() is '' before that, so "no spinner" does not prove the metadata GET has been answered yet.
  await expect.poll(()=>audit.fixtures['two desk metadata']??0).toBeGreaterThan(0);
  const pick=(name:string)=>list.locator('li[item]').filter({hasText:name}).locator('button[name="select-item"]');
  await expect(pick(MULTI[0].name)).toHaveCount(1);await expect(pick(MULTI[1].name)).toHaveCount(1);
  await pick(MULTI[0].name).click();await pick(MULTI[1].name).click();
  const picker=staffPage.locator('desk-flow-select');
  await expect.poll(()=>picker.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {model():{resources?:{id:string}[]}}|undefined;return c?.model().resources?.map(r=>r.id);}))
   .toEqual(multiple?[MULTI[0].id,MULTI[1].id]:[MULTI[1].id]);
  await untouchedDesk(staffPage);
 });
}
