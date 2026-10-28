
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for(const days of [7,14]){
 test('desk settings: desks.available_period '+days+' gates the calendar horizon',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.available_period':days});
  await details.locator('date-field button').first().click();
  const calendar=staffPage.locator('.cdk-overlay-container date-calendar');await expect(calendar).toBeVisible();
  const target=new Date();target.setUTCDate(target.getUTCDate()+days);target.setUTCHours(0,0,0,0);
  const indices=()=>calendar.evaluate((el,stamp)=>{
   const c=(window as Debug).ng?.getComponent(el) as {displayed_dates():{id:number}[]}|undefined;
   if(!c)throw new Error('Calendar debug API required');
   return {last:c.displayed_dates().findIndex(d=>d.id===stamp),next:c.displayed_dates().findIndex(d=>d.id===stamp+86400000)};
  },target.valueOf());
  let grid=await indices();
  // Button names are reversed in date-calendar.component.ts: schedule-previous-month calls changeMonth(1) (forward).
  if(grid.last<0||grid.next<0){await calendar.locator('button[name="schedule-previous-month"]').click();
   await expect.poll(async()=>{const g=await indices();return g.last>=0&&g.next>=0;}).toBe(true);grid=await indices();}
  expect(grid.last).toBeGreaterThanOrEqual(0);expect(grid.next).toBeGreaterThanOrEqual(0);
  const cells=calendar.locator('button[name="schedule-set-date"]');
  await expect(cells.nth(grid.last)).toBeEnabled();await expect(cells.nth(grid.next)).toBeDisabled();
  await cells.nth(grid.last).click();await expect(calendar).toHaveCount(0);
  await untouchedDesk(staffPage);
 });
}
