
import { expect } from '../../../../../e2e/support/fixtures';
import { meetingDurations, openPreparedRoom, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const DURATION_BASE={'app.events.bookable_hours':null,'app.events.min_duration':30,'app.events.max_duration':180,'app.events.duration_step':30,'app.events.custom_duration_options':[]};
const range=(from:number,to:number,step:number)=>{const out:number[]=[];for(let t=from;t<=to;t+=step)out.push(t);return out;};
// MeetingFlowDetails passes events.min_duration to DurationField [min]; generated options below min are dropped.
for(const min of [30,90]){
 test('events.min_duration '+min+' sets the lowest generated meeting duration',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{...DURATION_BASE,'app.events.min_duration':min},0);
  const ids=await meetingDurations(staffPage,root);
  expect(ids.filter(id=>id!==60)).toEqual(range(min,180,30).filter(id=>id!==60));
  expect(ids.includes(30)).toBe(min===30);
  await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
 });
}
