
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for(const enabled of [false,true]){
 test('desk settings: desks.allow_groups '+enabled+' gates group mode and local member entry',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.allow_groups':enabled});
  const group=details.getByRole('button',{name:'group_add Group',exact:true});
  await expect(group).toHaveCount(enabled?1:0);
  await expect(details.locator('a-user-list-field')).toHaveCount(0);
  if(enabled){await group.click();await expect(details.locator('a-user-list-field input[name="user_email"]')).toBeVisible();
   await expect(details.locator('a-user-list-field mat-chip-row')).toHaveCount(0);
   await details.getByRole('button',{name:'person Single',exact:true}).click();
   await expect(details.locator('a-user-list-field')).toHaveCount(0);}
  await untouchedDesk(staffPage);
 });
}
