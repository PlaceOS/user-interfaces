
import { expect } from '../../../../../e2e/support/fixtures';
import { DESK_DISTINCT_FALLBACKS, durationMenu, futureDesk, openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// DeskFlowDetailsComponent reads desks.min_duration || bookings.min_duration.
// min 30 starts the list at 30; the bookings fallback (15) would start it at 15.
for(const c of [{"value": 30, "min": 30, "max": 120, "step": 30, "custom": [], "expected": [30, 60, 90, 120]}]){
 test('desk settings: desks.min_duration '+c.value+' changes exact duration choices',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.min_duration':c.min,'app.desks.max_duration':c.max,
   'app.desks.duration_step':c.step,'app.desks.custom_duration_options':c.custom},{fallbacks:DESK_DISTINCT_FALLBACKS});
  await futureDesk(staffPage,details);await durationMenu(staffPage,details);
  await staffPage.locator('.cdk-overlay-container button[data-duration="'+c.min+'"]').click();
  await details.locator('time-field[name="time"] button[time-field]').click();
  await staffPage.locator('.cdk-overlay-container button[data-time="11:00"]').click();
  const options=await durationMenu(staffPage,details);
  expect(await options.evaluateAll(rows=>rows.map(r=>Number(r.getAttribute('data-duration'))))).toEqual(c.expected);
  await staffPage.keyboard.press('Escape');await expect(options).toHaveCount(0);await untouchedDesk(staffPage);
 });
}
