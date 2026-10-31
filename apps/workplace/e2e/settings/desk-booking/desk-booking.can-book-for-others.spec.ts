
import { DeskFlow } from '../../../../../e2e/support/desk/desk-flow.page';
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DeskFlowDetailsComponent can_book_for_others = desks.can_book_for_others ?? bookings.can_book_for_others.
for(const enabled of [false,true]){
 test('desk settings: desks.can_book_for_others '+enabled+' gates delegate mode with an empty host selector',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_for_others':enabled,'app.basic_user_search':true});
  const other=new DeskFlow(staffPage).bookForOtherButton;
  await expect(other).toHaveCount(enabled?1:0);await expect(details.locator('a-user-search-field')).toHaveCount(0);
  if(enabled){await other.click();
   // setActiveForm('other') sets the user to EMPTY_USER; no real delegate is searched or selected.
   await expect(details.locator('a-user-search-field input')).toBeVisible();
   await expect(details.locator('a-user-search-field input')).toHaveValue('');
   await details.getByRole('button',{name:'person Single',exact:true}).click();
   await expect(details.locator('a-user-search-field')).toHaveCount(0);}
  await untouchedDesk(staffPage);
 });
}
test('desk settings: desks.can_book_for_others false overrides bookings.can_book_for_others true and hides delegate mode',async({staffPage,audit})=>{
 const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_for_others':false,'app.bookings.can_book_for_others':true,'app.basic_user_search':true});
 await expect(new DeskFlow(staffPage).bookForOtherButton).toHaveCount(0);
 await expect(details.locator('a-user-search-field')).toHaveCount(0);
 await untouchedDesk(staffPage);
});
test('desk settings: desks.can_book_for_others unset falls back to bookings.can_book_for_others true',async({staffPage,audit})=>{
 const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_for_others':null,'app.bookings.can_book_for_others':true,'app.basic_user_search':true});
 await expect(new DeskFlow(staffPage).bookForOtherButton).toHaveCount(1);
 await expect(details.locator('a-user-search-field')).toHaveCount(0);
 await untouchedDesk(staffPage);
});
