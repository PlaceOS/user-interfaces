
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openPreparedRoom, ROOM_ONE, ROOM_TWO, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowSpaceSelect.toggleSpace uses multipleSpacesEnabled for array vs replacement semantics.
for(const multiple of [false,true]){
 test('events.multiple_spaces '+multiple+' accumulates or replaces synthetic room choices',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.multiple_spaces':multiple,'app.events.allow_multiple_spaces':false},1);
  const list=root.locator('meeting-flow-space-list');await expect(list).toBeVisible();await expect(root.locator('meeting-flow-space-map')).toHaveCount(0);
  const choose=(name:string)=>list.locator('li[space]').filter({hasText:name}).locator('button[name="select-space"]');
  await expect(choose(ROOM_ONE.name)).toBeVisible();await choose(ROOM_ONE.name).click();
  await expect(choose(ROOM_TWO.name)).toBeVisible();await choose(ROOM_TWO.name).click();
  await expect.poll(()=>root.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {model():{resources:{id:string}[]}}|undefined;return c?.model().resources.map(r=>r.id);})).toEqual(multiple?[ROOM_ONE.id,ROOM_TWO.id]:[ROOM_TWO.id]);
  expect(audit.fixtures['prepared room list']??0).toBeGreaterThan(0);await expect(staffPage).toHaveURL(/view=1$/);
  // Local synthetic choices only: never Continue or Confirm.
 });
}
