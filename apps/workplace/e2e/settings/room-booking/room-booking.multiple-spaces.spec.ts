import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openPreparedRoom, ROOM_ONE, ROOM_TWO, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// MeetingFlowSpaceSelect.toggleSpace uses multipleSpacesEnabled for array vs replacement semantics.
// multipleSpacesEnabled() is true when events.multiple_spaces or its legacy alias
// events.allow_multiple_spaces is true (libs/events/src/lib/utilities.ts).
const SCENARIOS=[
 {multiple:false,legacy:false,expected:[ROOM_TWO.id],key:'events.multiple_spaces',value:false,effect:'replaces'},
 {multiple:true,legacy:false,expected:[ROOM_ONE.id,ROOM_TWO.id],key:'events.multiple_spaces',value:true,effect:'accumulates'},
 {multiple:false,legacy:true,expected:[ROOM_ONE.id,ROOM_TWO.id],key:'events.allow_multiple_spaces legacy alias',value:true,effect:'accumulates'},
];
for(const scenario of SCENARIOS){
 test(scenario.key+' '+scenario.value+' '+scenario.effect+' synthetic room choices',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.multiple_spaces':scenario.multiple,'app.events.allow_multiple_spaces':scenario.legacy},1);
  const list=root.locator('meeting-flow-space-list');await expect(list).toBeVisible();await expect(root.locator('meeting-flow-space-map')).toHaveCount(0);
  const choose=(name:string)=>list.locator('li[space]').filter({hasText:name}).locator('button[name="select-space"]');
  await expect(choose(ROOM_ONE.name)).toBeVisible();await choose(ROOM_ONE.name).click();
  await expect(choose(ROOM_TWO.name)).toBeVisible();await choose(ROOM_TWO.name).click();
  await expect.poll(()=>root.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {model():{resources:{id:string}[]}}|undefined;return c?.model().resources.map(r=>r.id);})).toEqual(scenario.expected);
  expect(audit.fixtures['prepared room list']??0).toBeGreaterThan(0);await expect(staffPage).toHaveURL(/view=1$/);
  // Local synthetic choices only: never Continue or Confirm.
 });
}
