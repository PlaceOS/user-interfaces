
import { DeskFlow } from '../../../../../e2e/support/desk/desk-flow.page';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DeskFlowDetailsComponent can_book_lockers gates the secondary-resource checkbox.
for(const enabled of [false,true]){
 test('desks.can_book_lockers '+enabled+' gates the local secondary locker option',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_lockers':enabled,'app.desks.allow_all_day':false});
  const box=new DeskFlow(staffPage).requireLocker;await expect(box).toHaveCount(enabled?1:0);
  if(enabled){await expect(box).not.toBeChecked();await box.check();await expect(box).toBeChecked();
   await expect.poll(()=>details.evaluate(el=>{
    const c=(window as Debug).ng?.getComponent(el) as {model():{secondary_resource?:string}}|undefined;
    return c?.model().secondary_resource;
   })).toBe('locker');
   await box.uncheck();await expect.poll(()=>details.evaluate(el=>{
    const c=(window as Debug).ng?.getComponent(el) as {model():{secondary_resource?:string}}|undefined;
    return c?.model().secondary_resource;
   })).toBe('');}
  // Never open a locker selector or confirm the secondary resource.
  await untouchedDesk(staffPage);
 });
}
