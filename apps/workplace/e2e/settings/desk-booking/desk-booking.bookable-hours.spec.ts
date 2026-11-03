import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
async function tomorrowStartTimes(page:Page,details:Locator){
 const date=new Date();date.setUTCDate(date.getUTCDate()+1);date.setUTCHours(12,0,0,0);
 await details.locator('date-field button').first().click();
 await pickCalendarDay(page,page.locator('.cdk-overlay-container date-calendar'),date.valueOf(),{closes_on_pick:true});
 await details.locator('time-field[name="time"] button[time-field]').click();
 const options=page.locator('.cdk-overlay-container button[data-time]');await expect(options.first()).toBeVisible();
 const times=await options.evaluateAll(rows=>rows.map(r=>{const[h,m]=r.getAttribute('data-time')!.split(':').map(Number);return h*60+m;}));
 await page.keyboard.press('Escape');await expect(options).toHaveCount(0);
 return times;
}
// DeskFlowDetails passes its shortest duration (desks.min_duration or the
// shortest custom option) to TimeField as min_duration, so the last start offered
// is range.end minus that duration, rounded down to the 15-minute step
// (time-field.component.ts).
const STEP=15;
const MIN_DURATION=30;
const durations={'app.desks.min_duration':MIN_DURATION,'app.desks.custom_duration_options':[]};
const lastStart=(end:number)=>Math.floor((end*60-MIN_DURATION)/STEP)*STEP;
for(const range of [null,{start:6,end:11},{start:9,end:17}]){
 test('desk settings: desks.bookable_hours '+(range?range.start+'-'+range.end:'unset')+' bounds tomorrow time options',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.bookable_hours':range,...durations});
  const times=await tomorrowStartTimes(staffPage,details);
  expect(times.length).toBeGreaterThan(0);
  if(range){expect(Math.min(...times)).toBe(range.start*60);expect(Math.max(...times)).toBe(lastStart(range.end));}
  else{expect(Math.min(...times)).toBe(0);expect(Math.max(...times)).toBeGreaterThan(17*60);}
  await untouchedDesk(staffPage);
 });
}
// PPT-2872
test('desk settings: desks.bookable_hours 9-17 does not offer a start at closing time, when no duration fits',async({staffPage,audit})=>{
 const {details}=await openDesk(staffPage,audit,{'app.desks.bookable_hours':{start:9,end:17},...durations});
 const times=await tomorrowStartTimes(staffPage,details);
 expect(times).not.toContain(17*60);
 expect(Math.max(...times)).toBe(lastStart(17));
 await untouchedDesk(staffPage);
});
