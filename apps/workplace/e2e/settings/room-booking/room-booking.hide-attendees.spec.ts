
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { roomView, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
async function untouchedRoom(page: Page) {
    await expect(page.locator('meeting-flow-success, meeting-flow-confirm-modal, event-link-modal')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=[02]$/);
}
// MeetingFlowOptionsComponent @if (!hide_attendees()) renders UserListField.
for (const hidden of [false,true]) {
 test('events.hide_attendees '+hidden+' gates attendees while notes remain',async({staffPage,audit})=>{
  const {root}=await roomView(staffPage,audit,{'app.events.hide_attendees':hidden});
  await expect(root.locator('a-user-list-field')).toHaveCount(hidden?0:1);
  if(!hidden) await expect(root.locator('a-user-list-field input[name="user_email"]')).toBeVisible();
  await expect(root.locator('rich-text-input')).toHaveCount(1);
  await untouchedRoom(staffPage);
 });
}
