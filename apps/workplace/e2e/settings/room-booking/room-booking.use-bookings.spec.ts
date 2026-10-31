
import { expect } from '../../../../../e2e/support/fixtures';
import { openPreparedRoom, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// EventFormService availability loader branches between native bookings and calendar availability.
for(const native of [false,true]){
 test('events.use_bookings '+native+' selects the read-only availability backend',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.use_bookings':native},1);
  await expect(root.locator('meeting-flow-space-list')).toBeVisible();
  await expect.poll(()=>audit.fixtures[native?'empty native room bookings':'calendar availability']??0).toBeGreaterThan(0);
  expect(audit.fixtures[native?'calendar availability':'empty native room bookings']??0).toBe(0);
  await expect(root.locator('meeting-flow-space-list button[name="select-space"]')).toHaveCount(2);
  await expect(staffPage).toHaveURL(/view=1$/);
 });
}
