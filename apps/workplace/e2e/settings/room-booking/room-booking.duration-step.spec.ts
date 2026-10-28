
import { expect } from '../../../../../e2e/support/fixtures';
import { meetingDurations, openPreparedRoom, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const DURATION_BASE={'app.events.bookable_hours':null,'app.events.min_duration':30,'app.events.max_duration':180,'app.events.duration_step':30,'app.events.custom_duration_options':[]};
const range=(from:number,to:number,step:number)=>{const out:number[]=[];for(let t=from;t<=to;t+=step)out.push(t);return out;};
// MeetingFlowDetails passes events.duration_step to DurationField [step].
for(const step of [15,60]){
 test('events.duration_step '+step+' spaces the generated meeting durations',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{...DURATION_BASE,'app.events.duration_step':step},0);
  const ids=await meetingDurations(staffPage,root);
  expect(ids.filter(id=>id!==60)).toEqual(range(30,180,step).filter(id=>id!==60));
  expect(ids.includes(45)).toBe(step===15);
  await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
 });
}
