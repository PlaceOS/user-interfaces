
import { expect } from '../../../../../e2e/support/fixtures';
import { getOnly, openPreparedRoom, ROOM_ONE, ROOM_TWO, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowSpaceSelect lists a Facilities toggle per feature of the available spaces, skipping events.hide_features.
// Browser-only room features are served by a later-registered GET fixture (Playwright runs the newest route first).
for(const hidden of [[],['Prepared Projector']]){
 test('events.hide_features ['+hidden.join(',')+'] hides facility filters',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.hide_features':hidden},1,[],[],async()=>{
   await getOnly(staffPage,audit,'featured room list',url=>url.pathname==='/api/engine/v2/systems'&&!!url.searchParams.get('zone_id')&&url.searchParams.get('limit')==='500'&&url.searchParams.get('signage')==='false'&&[...url.searchParams.keys()].every(k=>['zone_id','limit','signage'].includes(k)),
    url=>[{...ROOM_ONE,features:['Prepared Projector']},{...ROOM_TWO,features:['Prepared Whiteboard']}].map(r=>({...r,zones:[url.searchParams.get('zone_id')]})));
  });
  await expect(root.locator('meeting-flow-space-list button[name="select-space"]')).toHaveCount(2);
  expect(audit.fixtures['featured room list']??0).toBeGreaterThan(0);
  const toggle=(name:string)=>root.locator('settings-toggle').filter({hasText:name});
  // Desktop sidebar renders first; a hidden mobile copy follows it in the DOM.
  await expect(toggle('Prepared Whiteboard').first()).toBeVisible();
  if(hidden.length)await expect(toggle('Prepared Projector')).toHaveCount(0);
  else await expect(toggle('Prepared Projector').first()).toBeVisible();
  // No filter toggled, no space selected, never Continue or Confirm.
  await expect(staffPage).toHaveURL(/view=1$/);
 });
}
