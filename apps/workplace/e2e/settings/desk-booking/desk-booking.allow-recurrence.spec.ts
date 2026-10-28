
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for(const enabled of [false,true]){
 test('desk settings: desks.allow_recurrence '+enabled+' gates the unsaved recurrence field',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.allow_recurrence':enabled});
  await expect(details.locator('recurrence-field')).toHaveCount(enabled?1:0);
  if(enabled)await expect(details.locator('recurrence-field mat-select')).toBeVisible();
  await untouchedDesk(staffPage);
 });
}
