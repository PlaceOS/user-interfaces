
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DeskFlowDetails.allow_all_day uses desks.allow_all_day || bookings.allow_all_day.
// BookingFormService.loadForm: a new booking (no id) takes setting('default_duration'),
// resolved as app.desk.* ?? app.desks.* ?? app.bookings.*. Both values sit on the pinned 30-minute grid.
for(const [minutes,label] of [[90,/1 hour 30 minutes/],[150,/2 hours 30 minutes/]] as const){
 test('desks.default_duration '+minutes+' sets the new desk booking length',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desk.default_duration':null,'app.bookings.default_duration':null,'app.desks.default_duration':minutes});
  await expect.poll(()=>details.evaluate(el=>{const c=(window as Debug).ng?.getComponent(el) as {model():{duration?:number}}|undefined;return c?.model().duration;})).toBe(minutes);
  const button=details.locator('duration-field button[duration-field]');await expect(button).toBeEnabled();await expect(button).toContainText(label);
  await untouchedDesk(staffPage);
 });
}
