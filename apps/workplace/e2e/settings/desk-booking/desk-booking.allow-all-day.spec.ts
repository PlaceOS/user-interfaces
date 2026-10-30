
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// allow_all_day = allow_time_changes && (desks.allow_all_day ?? bookings.allow_all_day).
for (const enabled of [false,true]) {
 test('desk settings: desks.allow_all_day '+enabled+' gates the all-day checkbox',async ({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.allow_all_day':enabled});
  const checkbox=details.locator('mat-checkbox input[type="checkbox"]');
  await expect(checkbox).toHaveCount(enabled?1:0);
  await expect(details.locator('time-field[name="time"] button[time-field]')).toBeEnabled();
  await expect(details.locator('duration-field button[duration-field]')).toBeEnabled();
  if(enabled){
   await expect(checkbox).not.toBeChecked();await checkbox.check();await expect(checkbox).toBeChecked();
   await expect(details.locator('time-field, duration-field')).toHaveCount(0);
   await checkbox.uncheck();await expect(details.locator('time-field[name="time"] button[time-field]')).toBeEnabled();
  }
  await untouchedDesk(staffPage);
 });
}
