
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openPreparedRoom, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// EventFormService._applyDurationSettings -> all-day time-sync; current controls stay disabled, not removed.
for(const period of [{start:9,end:17},{start:10,end:16}]){
 test('events.all_day_period '+period.start+'-'+period.end+' sets the unsaved all-day interval',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.events.all_day_period':period},0);
  const box=root.locator('mat-checkbox input[type="checkbox"]');await expect(box).not.toBeChecked();await box.check();
  await expect.poll(()=>root.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {form_value():{all_day:boolean,date:number,duration:number}}|undefined;
   const m=c?.form_value();return m?{all_day:m.all_day,hour:new Date(m.date).getUTCHours(),minute:new Date(m.date).getUTCMinutes(),duration:m.duration}:null;
  })).toEqual({all_day:true,hour:period.start,minute:0,duration:(period.end-period.start)*60});
  await expect(root.locator('time-field[name="time"] button[time-field]')).toBeDisabled();await expect(root.locator('duration-field button[duration-field]')).toBeDisabled();
  await box.uncheck();await expect(root.locator('time-field[name="time"] button[time-field]')).toBeEnabled();
 });
}
