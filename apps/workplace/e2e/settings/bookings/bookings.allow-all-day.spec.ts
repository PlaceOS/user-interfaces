
import { expect } from '../../../../../e2e/support/fixtures';
import { futureDesk, openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DeskFlowDetails.allow_all_day uses desks.allow_all_day || bookings.allow_all_day.
for(const enabled of [false,true]){
 test('bookings.allow_all_day '+enabled+' supplies the generic desk all-day option',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.allow_all_day':false,'app.bookings.allow_all_day':enabled});
  const box=details.locator('mat-checkbox input[type="checkbox"]');await expect(box).toHaveCount(enabled?1:0);
  // Tomorrow at 10:00 (local form only), so start times exist at any hour of the run.
  await futureDesk(staffPage,details);
  await expect(details.locator('time-field[name="time"] button[time-field]')).toBeEnabled();
  if(enabled){await box.check();await expect(box).toBeChecked();await expect(details.locator('time-field, duration-field')).toHaveCount(0);
   await box.uncheck();await expect(details.locator('duration-field button[duration-field]')).toBeEnabled();}
  await untouchedDesk(staffPage);
 });
}
