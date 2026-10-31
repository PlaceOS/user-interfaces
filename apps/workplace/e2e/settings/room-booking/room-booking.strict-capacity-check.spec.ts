
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openPreparedRoom, ROOM_ONE, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/**
 * CALENDAR_EVENT.CAPACITY_ERROR as LocaleService.get shows it with no plural:
 * the en-AU text (the harness locale and the app default).
 */
function capacityErrorMessage() {
    const locale = JSON.parse(readFileSync(
        join(__dirname, '../../../../../shared/assets/locale/en-AU.json'), 'utf8',
    )) as { CALENDAR_EVENT?: Record<string, unknown> };
    const text = locale.CALENDAR_EVENT?.CAPACITY_ERROR;
    if (typeof text !== 'string' || !text.trim()) throw new Error('CALENDAR_EVENT.CAPACITY_ERROR has no en-AU text');
    return text;
}

// One-seat room with one attendee plus the signed-in user (2 people).
// false: the nonblocking warning shows (Confirm is never clicked: it would submit).
// true: no warning, and Confirm is refused with CALENDAR_EVENT.CAPACITY_ERROR
// before any request (MeetingFlowOptionsComponent.confirmBooking); the harness
// network guard fails the test if anything is written.
for(const strict of [false,true]){
 test('events.strict_capacity_check '+strict+' gates the nonblocking capacity warning',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.strict_capacity_check':strict},2,[ROOM_ONE],[{id:'prepared-attendee',name:'Prepared Attendee',email:'prepared-attendee@example.invalid'}]);
  await expect.poll(()=>root.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {total_capacity():number;form_value():{attendees:unknown[]}}|undefined;return c?{capacity:c.total_capacity(),attendees:c.form_value().attendees.length}:null;})).toEqual({capacity:1,attendees:1});
  const warning=root.locator('[capacity-warning]');await expect(warning).toHaveCount(strict?0:1);if(!strict)await expect(warning).toBeVisible();
  await expect(root.locator('a-user-list-field')).toHaveCount(1);await expect(staffPage).toHaveURL(/view=2$/);
  if(strict){
   // The Confirm button is the only button on this step with the task_alt icon.
   const confirm=root.locator('button').filter({has:staffPage.locator('icon',{hasText:/^\s*task_alt\s*$/})});
   await expect(confirm).toHaveCount(1);await confirm.click();
   await expect(staffPage.locator('mat-snack-bar-container')).toContainText(capacityErrorMessage());
   await expect(staffPage).toHaveURL(/view=2$/);await expect(root).toBeVisible();
   await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
  }
 });
}
