
import { expect } from '../../../../../e2e/support/fixtures';
import { meetingDurations, openPreparedRoom, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const DURATION_BASE={'app.events.bookable_hours':null,'app.events.min_duration':30,'app.events.max_duration':180,'app.events.duration_step':30,'app.events.custom_duration_options':[]};
const range=(from:number,to:number,step:number)=>{const out:number[]=[];for(let t=from;t<=to;t+=step)out.push(t);return out;};
// MeetingFlowDetails passes events.max_duration to DurationField [max]; events.bookable_hours is null so no end-time cap applies.
for(const max of [120,240]){
 test('events.max_duration '+max+' caps the generated meeting durations',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{...DURATION_BASE,'app.events.max_duration':max},0);
  const ids=await meetingDurations(staffPage,root);
  expect(ids.filter(id=>id!==60)).toEqual(range(30,max,30).filter(id=>id!==60));
  expect(Math.max(...ids)).toBe(max);
  await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
 });
}
