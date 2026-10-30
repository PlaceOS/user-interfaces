
import { expect } from '../../../../../e2e/support/fixtures';
import { meetingDurations, openPreparedRoom, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const DURATION_BASE={'app.events.bookable_hours':null,'app.events.min_duration':30,'app.events.max_duration':180,'app.events.duration_step':30,'app.events.custom_duration_options':[]};
const range=(from:number,to:number,step:number)=>{const out:number[]=[];for(let t=from;t<=to;t+=step)out.push(t);return out;};
// DurationField adds custom_options even outside min/max (25 < min 30, 240 > max 180).
// Neither list is the default ([]).
for(const custom of [[25,240],[45,200]]){
 test('events.custom_duration_options ['+custom.join(',')+'] adds custom meeting durations',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{...DURATION_BASE,'app.events.custom_duration_options':custom},0);
  const ids=await meetingDurations(staffPage,root);
  expect(ids).toEqual([...new Set([...custom,...range(30,180,30)])].sort((a,b)=>a-b));
  for(const id of [25,45,200,240])expect(ids.includes(id)).toBe(custom.includes(id));
  await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
 });
}
