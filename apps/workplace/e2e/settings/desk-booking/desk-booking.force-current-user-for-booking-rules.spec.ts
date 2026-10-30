
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, type Debug, getOnly, organisationRoutes, prepare, test, untouchedDesk } from '../support/settings-harness';

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
const GROUP = 'e2e-settings-restricted-host';
type AvailabilityProbe = {
    _form_value_debounced: { status(): string; value(): { user?: { email?: string } } | null };
    _available_resource: { status(): string };
    available_resources(): { id: string }[];
};
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
// BookingFormService._bookingRulesHost picks current user or selected delegate
// during availability/rules evaluation. Never submit or select a resource.
for(const enabled of [false,true]){
 test('bookings.force_current_user_for_booking_rules '+enabled+' selects rules host groups',async({staffPage,audit})=>{
  await organisationFixture(staffPage,audit);await bookedDeskResourcesFixture(staffPage,audit);
  const prepared=await prepare(staffPage,audit,{'app.features':['desks'],'app.desks.use_assets':false,
    'app.desk.auto_allocation':null,'app.desks.auto_allocation':false,'app.default_building':BUILDING_A,
    'app.desks.can_book_for_others':true,'app.basic_user_search':true,'app.bookings.force_current_user_for_booking_rules':enabled});
  await getOnly(staffPage,audit,'host-sensitive desk rules',url=>/^\/api\/engine\/v2\/metadata\/e2e-settings-building-[ab]$/.test(url.pathname)&&url.searchParams.get('name')==='desk_booking_rules',url=>({
    desk_booking_rules:{id:url.pathname.split('/')[5],name:'desk_booking_rules',details:[{zone:'*',conditions:{groups:[GROUP]},rules:{hidden:true}}]}}));
  const delegate={id:'e2e-settings-delegate',name:'E2E Delegate',email:'e2e-delegate@example.invalid',groups:[GROUP]};
  await getOnly(staffPage,audit,'delegated host search',url=>url.pathname==='/api/engine/v2/users'&&url.searchParams.get('q')===delegate.email,()=>[delegate]);
  await staffPage.goto('/#/book/desk/form');await prepared.ready();
  expect((await prepared.user()).groups??[]).not.toContain(GROUP);
  const details=staffPage.locator('desk-flow-details');
  // Establish positive current-staff availability before changing the host.
  await expect(staffPage.locator('desk-flow-select-list li[item]')).toHaveCount(1);
  await expect(staffPage.locator('desk-flow-select-list')).toContainText(DESK);
  await details.getByRole('button',{name:'person_add Book for other',exact:true}).click();
  // UserSearchField (focus)=selectInputText() runs input.select() in a setTimeout, so per-key typing can
  // overwrite the first characters and send a truncated q. Focus first, then set the full term in one input event.
  const host=details.locator('a-user-search-field input');await expect(host).toBeEditable();
  await host.click();await expect(host).toBeFocused();await host.fill(delegate.email);await expect(host).toHaveValue(delegate.email);
  await expect.poll(()=>audit.fixtures['delegated host search']??0).toBeGreaterThan(0);
  const option=staffPage.getByRole('option').filter({hasText:delegate.email});await expect(option).toHaveCount(1);await expect(option).toBeVisible();await option.click();
  await expect.poll(()=>details.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {model():{user?:{email:string}}}|undefined;return c?.model().user?.email;})).toBe(delegate.email);
  // BookingFormService debounces the form value by 500 ms before availability
  // is recomputed. Wait until the debounced value carries the delegate and the
  // availability resource has resolved for it.
  await expect.poll(()=>details.evaluate(el=>{
   const c=(window as Debug).ng?.getComponent(el) as {_booking_form?:AvailabilityProbe}|undefined;
   const s=c?._booking_form;
   if(!s)throw new Error('desk booking form service is unavailable');
   return {user:s._form_value_debounced.status()==='resolved'?s._form_value_debounced.value()?.user?.email:undefined,
    availability:s._available_resource.status(),
    desks:s._available_resource.status()==='resolved'?s.available_resources().map(r=>r.id):undefined};
  }),{message:'availability evaluated with the delegate on the form'}).toEqual({user:delegate.email,availability:'resolved',
   desks:enabled?['e2e-settings-desk-'+LEVEL_A]:[]});
  const list=staffPage.locator('desk-flow-select-list');await expect(list).toBeVisible();
  await expect.poll(()=>audit.fixtures['host-sensitive desk rules']??0).toBeGreaterThan(0);
  await expect.poll(()=>audit.fixtures['synthetic desk metadata']??0).toBeGreaterThan(0);
  await expect.poll(()=>audit.fixtures['empty booked desk resources']??0).toBeGreaterThan(0);
  await expect(list.locator('mat-spinner')).toHaveCount(0);await expect(list.locator('li[item]')).toHaveCount(enabled?1:0);
  if(enabled)await expect(list).toContainText(DESK);
  await untouchedDesk(staffPage);
 });
}
