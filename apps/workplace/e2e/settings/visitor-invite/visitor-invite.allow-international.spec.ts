// Setting: visitors.allow_international.
// Runtime: book.routes.ts visitor/:step loads visitor-flow-new (visitor-flow-invites / visitor-flow-success).
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// VisitorFlowInvites shows the international-visitors block when allow_international is set and a visitor is named.
for(const enabled of [false,true]){
 test('visitors.allow_international '+enabled+' offers the per-visitor international flag',async({staffPage,audit})=>{
  const form=await visitor(staffPage,audit,{'app.bookings.multiple_visitors':false,'app.visitors.allow_international':enabled});
  await expect(staffPage.locator('visitor-flow-new visitor-flow-invites').locator('.international-visitors')).toHaveCount(0);
  // Single-visitor name is local form state; invited_visitors() needs a non-empty name. No address typed, never send.
  await expect(form.visitorName).toBeVisible();await form.visitorName.fill('Prepared Visitor');await staffPage.keyboard.press('Escape');
  await expect(form.visitorName).toHaveValue('Prepared Visitor');
  const block=staffPage.locator('visitor-flow-new visitor-flow-invites').locator('.international-visitors');await expect(block).toHaveCount(enabled?1:0);
  if(enabled){
   await expect(block.locator('.visitor-name')).toHaveText('Prepared Visitor');
   const box=form.international;await expect(box).toHaveCount(1);await expect(box).not.toBeChecked();
   await box.check();await expect(box).toBeChecked();
  } else await expect(form.international).toHaveCount(0);
  await untouchedVisitor(form);
 });
}
