// Setting: visitors.allow_pass_number.
// Runtime: book.routes.ts visitor/:step loads visitor-flow-new (visitor-flow-invites / visitor-flow-success).
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// VisitorFlowInvites renders the pass number field only when visitors.allow_pass_number is true.
for(const enabled of [false,true]){
 test('visitors.allow_pass_number '+enabled+' shows the visitor pass number field',async({staffPage,audit})=>{
  const form=await visitor(staffPage,audit,{'app.visitors.allow_pass_number':enabled});
  await expect(form.visitorName).toBeVisible();
  await expect(form.passNumber).toHaveCount(enabled?1:0);
  if(enabled){await expect(form.passNumber).toBeVisible();await expect(form.passNumber).toBeEditable();}
  // Nothing typed into the pass field; never send.
  await untouchedVisitor(form);
 });
}
