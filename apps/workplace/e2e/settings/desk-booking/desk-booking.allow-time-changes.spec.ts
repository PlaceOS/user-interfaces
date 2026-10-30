
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// allow_all_day = allow_time_changes && (desks.allow_all_day ?? bookings.allow_all_day).
// DeskFlowDetails renders the time and duration fields only while
// allow_time_changes is true (PPT-2862). The true case (allow_all_day true,
// allow_time_changes true) is covered by desk-booking.allow-all-day.spec.ts,
// so only false is tested here.
test('desk settings: desks.allow_time_changes false hides the all-day checkbox, time and duration',async ({staffPage,audit})=>{
 const {details}=await openDesk(staffPage,audit,{'app.desks.allow_all_day':true,'app.desks.allow_time_changes':false});
 await expect(details.locator('mat-checkbox input[type="checkbox"]')).toHaveCount(0);
 await expect(details.locator('time-field[name="time"]')).toHaveCount(0);
 await expect(details.locator('duration-field')).toHaveCount(0);
 await untouchedDesk(staffPage);
});
