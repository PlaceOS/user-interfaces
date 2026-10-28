import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for(const range of [null,{start:6,end:11},{start:9,end:17}]){
 test('desk settings: desks.bookable_hours '+(range?range.start+'-'+range.end:'unset')+' bounds tomorrow time options',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.bookable_hours':range});
  const date=new Date();date.setUTCDate(date.getUTCDate()+1);date.setUTCHours(12,0,0,0);
  await details.locator('date-field button').first().click();
  await pickCalendarDay(staffPage,staffPage.locator('.cdk-overlay-container date-calendar'),date.valueOf(),{closes_on_pick:true});
  await details.locator('time-field[name="time"] button[time-field]').click();
  const options=staffPage.locator('.cdk-overlay-container button[data-time]');await expect(options.first()).toBeVisible();
  const times=await options.evaluateAll(rows=>rows.map(r=>{const[h,m]=r.getAttribute('data-time')!.split(':').map(Number);return h*60+m;}));
  expect(times.length).toBeGreaterThan(0);
  // Desk details does not bind TimeField.min_duration: closing endpoint is inclusive.
  if(range){expect(Math.min(...times)).toBe(range.start*60);expect(Math.max(...times)).toBe(range.end*60);}
  else{expect(Math.min(...times)).toBe(0);expect(Math.max(...times)).toBeGreaterThan(17*60);}
  await staffPage.keyboard.press('Escape');await expect(options).toHaveCount(0);await untouchedDesk(staffPage);
 });
}
