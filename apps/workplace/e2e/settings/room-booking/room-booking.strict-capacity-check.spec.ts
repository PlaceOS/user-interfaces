
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openPreparedRoom, ROOM_ONE, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// UI-only warning branch: this does NOT test submission-time capacity rejection.
for(const strict of [false,true]){
 test('events.strict_capacity_check '+strict+' gates the nonblocking capacity warning',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.strict_capacity_check':strict},2,[ROOM_ONE],[{id:'prepared-attendee',name:'Prepared Attendee',email:'prepared-attendee@example.invalid'}]);
  await expect.poll(()=>root.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {total_capacity():number;form_value():{attendees:unknown[]}}|undefined;return c?{capacity:c.total_capacity(),attendees:c.form_value().attendees.length}:null;})).toEqual({capacity:1,attendees:1});
  const warning=root.locator('[capacity-warning]');await expect(warning).toHaveCount(strict?0:1);if(!strict)await expect(warning).toBeVisible();
  await expect(root.locator('a-user-list-field')).toHaveCount(1);await expect(staffPage).toHaveURL(/view=2$/);
  // Never click the confirmation action (which can submit in this UI).
 });
}
