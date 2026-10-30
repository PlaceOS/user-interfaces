
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// DeskFlowNewComponent: auto-allocation replaces manual desk selection with an info panel.
for(const enabled of [false,true]){
 test('desks.auto_allocation '+enabled+' switches automatic versus manual selection layout',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desk.auto_allocation':null,'app.desks.auto_allocation':enabled},{dateReady:false});
  const flow=staffPage.locator('desk-flow-new');
  await expect(flow.locator('desk-flow-select')).toHaveCount(enabled?0:1);
  if(enabled)await expect(flow.locator('p[class~="bg-info/10"]')).toBeVisible();
  else {
   await expect(flow.locator('desk-flow-select')).toBeVisible();
   // Current DeskFlowSelect defaults to list; never open its map view.
   await expect(flow.locator('desk-flow-select-map')).toHaveCount(0);
  }
  // Source hides the details date controls on desktop during manual selection.
  await expect(details.locator('date-field button').first()).toBeVisible({visible:enabled});
  await untouchedDesk(staffPage);
 });
}
