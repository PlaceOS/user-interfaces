
import { expect } from '../../../../../e2e/support/fixtures';
import { DESK_DISTINCT_FALLBACKS, durationMenu, futureDesk, openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// DeskFlowDetailsComponent reads desks.custom_duration_options ||
// bookings.custom_duration_options; the bookings fallback is [75].
for(const c of [{"value": "[]", "min": 90, "max": 120, "step": 30, "custom": [], "expected": [90, 120]}, {"value": "[45,150]", "min": 90, "max": 120, "step": 30, "custom": [45, 150], "expected": [45, 90, 120, 150]}]){
 test('desk settings: desks.custom_duration_options '+c.value+' changes exact duration choices',async({staffPage,audit})=>{
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
