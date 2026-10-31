// Setting: visitors.allow_visitor_internal_or_external.
// Runtime: book.routes.ts visitor/:step loads visitor-flow-new (visitor-flow-invites / visitor-flow-success).
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// VisitorFlowInvites shows an internal/external radio group per named visitor when the setting is true.
for(const enabled of [false,true]){
 test('visitors.allow_visitor_internal_or_external '+enabled+' offers the visitor type choice',async({staffPage,audit})=>{
  const form=await visitor(staffPage,audit,{'app.bookings.multiple_visitors':false,'app.visitors.allow_visitor_internal_or_external':enabled});
  // Single-visitor name is local form state; invited_visitors() needs a non-empty name. No address typed, never send.
  await expect(form.visitorName).toBeVisible();await form.visitorName.fill('Prepared Visitor');await staffPage.keyboard.press('Escape');
  await expect(form.visitorName).toHaveValue('Prepared Visitor');
  const block=staffPage.locator('visitor-flow-new visitor-flow-invites').locator('.visitor-internal-or-external');await expect(block).toHaveCount(enabled?1:0);
  if(enabled){
   await expect(block.locator('.visitor-name')).toHaveText('Prepared Visitor');
   await expect(block.locator('mat-radio-group')).toHaveCount(1);
   await expect(block.locator('mat-radio-button')).toHaveCount(2);
   const external=block.locator('mat-radio-button[value="external"] input[type="radio"]');
   await external.check();await expect(external).toBeChecked();
   await expect(block.locator('mat-radio-button[value="internal"] input[type="radio"]')).not.toBeChecked();
  } else await expect(staffPage.locator('visitor-flow-new visitor-flow-invites').locator('mat-radio-group')).toHaveCount(0);
  await untouchedVisitor(form);
 });
}
