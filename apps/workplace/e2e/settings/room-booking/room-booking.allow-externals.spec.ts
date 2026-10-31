
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { getOnly, type Identity, ORIGINS, roomView, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
async function untouchedRoom(page: Page) {
    await expect(page.locator('meeting-flow-success, meeting-flow-confirm-modal, event-link-modal')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=[02]$/);
}
// MeetingFlowOptionsComponent binds allow_externals to UserListField.guests.
for (const enabled of [false,true]) {
 test('events.allow_externals '+enabled+' gates browser-fixture guest search results',async({staffPage,audit})=>{
  let identity: Promise<Identity> | undefined;
  staffPage.on('response', response => {
   if(response.request().method()==='GET' && ORIGINS.has(new URL(response.url()).origin) &&
      new URL(response.url()).pathname==='/api/engine/v2/users/current') identity=response.json();
  });
  // Clear only the signed-in user's browser-local settings GET. This keeps
  // saved visitor-invitees from contributing unrelated autocomplete rows.
  await staffPage.route(url=>ORIGINS.has(url.origin)&&/^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname)&&
    url.searchParams.get('name')==='settings'&&[...url.searchParams.keys()].length===1,async route=>{
   if(route.request().method()!=='GET' || !identity)return route.fallback();
   const user=await identity;const url=new URL(route.request().url());
   if(decodeURIComponent(url.pathname.split('/')[5])!==user.id)return route.fallback();
   audit.fixtures['empty own settings']=(audit.fixtures['empty own settings']??0)+1;
   await route.fulfill({json:{settings:{name:'settings',details:{}}}});
  });
  const query='PreparedRoomGuestLookup';
  await getOnly(staffPage,audit,'prepared staff',url=>url.pathname==='/api/engine/v2/users'&&url.searchParams.get('q')===query,
    ()=>[{id:'prepared-room-staff',name:'Prepared Room Staff',email:'prepared-room-staff@example.invalid'}]);
  await getOnly(staffPage,audit,'prepared guest',url=>url.pathname==='/api/staff/v1/guests'&&url.searchParams.get('q')===query,
    ()=>[{id:'prepared-room-guest',name:'Prepared Room External',email:'prepared-room-guest@example.invalid'}]);
  const {root}=await roomView(staffPage,audit,{'app.events.allow_externals':enabled});
  expect(audit.fixtures['empty own settings']??0).toBeGreaterThan(0);
  const input=root.locator('a-user-list-field input[name="user_email"]');await input.fill(query);
  const options=staffPage.getByRole('option');
  await expect(options.filter({hasText:'Prepared Room Staff'})).toBeVisible();
  await expect(options.filter({hasText:'Prepared Room External'})).toHaveCount(enabled?1:0);
  if(enabled)await expect(options.filter({hasText:'Prepared Room External'})).toBeVisible();
  expect(audit.fixtures['prepared staff']??0).toBeGreaterThan(0);
  if(enabled) expect(audit.fixtures['prepared guest']??0).toBeGreaterThan(0);
  else expect(audit.fixtures['prepared guest']??0).toBe(0);
  await expect(root.locator('a-user-list-field mat-chip-row')).toHaveCount(0);
  await input.press('Escape');await untouchedRoom(staffPage);
 });
}
