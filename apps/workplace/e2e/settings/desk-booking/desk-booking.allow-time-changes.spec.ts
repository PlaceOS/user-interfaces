
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// allow_all_day = allow_time_changes && (desks.allow_all_day ?? bookings.allow_all_day).
// DeskFlowDetails renders the time and duration fields only while
// allow_time_changes is true (PPT-2862).
for(const allowed of [true,false]){
 test('desk settings: desks.allow_time_changes '+allowed+' gates the all-day checkbox, time and duration',async ({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.allow_all_day':true,'app.desks.allow_time_changes':allowed});
  await expect(details.locator('mat-checkbox input[type="checkbox"]')).toHaveCount(allowed?1:0);
  await expect(details.locator('time-field[name="time"]')).toHaveCount(allowed?1:0);
  await expect(details.locator('duration-field')).toHaveCount(allowed?1:0);
  await untouchedDesk(staffPage);
 });
}
