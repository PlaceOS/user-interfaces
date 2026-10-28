
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, roomView, test, timezoneBuildings } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
async function untouchedRoom(page: Page) {
    await expect(page.locator('meeting-flow-success, meeting-flow-confirm-modal, event-link-modal')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=[02]$/);
}
// MeetingFlowDetailsComponent binds events.use_building_timezone to DurationField.
// Its start TimeField currently has no timezone binding; do not claim otherwise.
for(const enabled of [false,true]){
 test('events.use_building_timezone '+enabled+' gates the duration secondary timezone',async({staffPage,audit})=>{
  await timezoneBuildings(staffPage,audit);
  const {root}=await roomView(staffPage,audit,{'app.events.use_building_timezone':enabled},0);
  expect(audit.fixtures['timezone buildings']??0).toBeGreaterThan(0);
  const field=root.locator('duration-field');await expect(field.locator('button[duration-field]')).toBeVisible();
  await expect.poll(()=>field.evaluate(el=>{
   const c=(window as Debug).ng?.getComponent(el) as {timezone():string}|undefined;return c?.timezone();
  })).toBe(enabled?'Pacific/Honolulu':'');
  const secondary=field.locator('button[duration-field] div.truncate.text-xs');
  await expect(secondary).toHaveCount(enabled?1:0);
  if(enabled)await expect(secondary).toBeVisible();
  await untouchedRoom(staffPage);
 });
}
