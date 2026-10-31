
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { roomView, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
async function untouchedRoom(page: Page) {
    await expect(page.locator('meeting-flow-success, meeting-flow-confirm-modal, event-link-modal')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=[02]$/);
}
// MeetingFlowOptionsComponent @if(has_assets()) renders the unfilled AssetListField.
for (const enabled of [false,true]) {
 test('events.has_assets '+enabled+' gates the unsaved asset field',async({staffPage,audit})=>{
  const {root}=await roomView(staffPage,audit,{'app.events.has_assets':enabled});
  await expect(root.locator('asset-list-field')).toHaveCount(enabled?1:0);
  if(enabled) await expect(root.locator('asset-list-field')).toBeVisible();
  await expect(root.locator('a-user-list-field input[name="user_email"]')).toBeVisible();
  await untouchedRoom(staffPage);
 });
}
