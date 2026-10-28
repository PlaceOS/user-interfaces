
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DeskFlowDetailsComponent has_assets = bookings.has_assets || desks.has_assets.
for(const enabled of [false,true]){
 test('desks.has_assets '+enabled+' gates the asset request field with generic flag false',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.has_assets':enabled,'app.bookings.has_assets':false});
  await expect(details.locator('asset-list-field')).toHaveCount(enabled?1:0);
  await expect(details.locator('label[for="assets"]')).toHaveCount(enabled?1:0);
  if(enabled)await expect(details.locator('asset-list-field')).toBeVisible();
  await untouchedDesk(staffPage);
 });
}
