
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// DeskFlowDetailsComponent can_book_for_others = desks.can_book_for_others ?? bookings.can_book_for_others.
for(const enabled of [false,true]){
 test('desk settings: desks.can_book_for_others '+enabled+' gates delegate mode with an empty host selector',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_for_others':enabled,'app.basic_user_search':true});
  const other=details.getByRole('button',{name:'person_add Book for other',exact:true});
  await expect(other).toHaveCount(enabled?1:0);await expect(details.locator('a-user-search-field')).toHaveCount(0);
  if(enabled){await other.click();
   // setActiveForm('other') deliberately uses EMPTY_USER; never select or search a real delegate.
   await expect(details.locator('a-user-search-field input')).toBeVisible();
   await expect(details.locator('a-user-search-field input')).toHaveValue('');
   await details.getByRole('button',{name:'person Single',exact:true}).click();
   await expect(details.locator('a-user-search-field')).toHaveCount(0);}
  await untouchedDesk(staffPage);
 });
}
const OTHER={name:'person_add Book for other',exact:true} as const;
test('desk settings: desks.can_book_for_others false overrides bookings.can_book_for_others true and hides delegate mode',async({staffPage,audit})=>{
 const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_for_others':false,'app.bookings.can_book_for_others':true,'app.basic_user_search':true});
 await expect(details.getByRole('button',OTHER)).toHaveCount(0);
 await expect(details.locator('a-user-search-field')).toHaveCount(0);
 await untouchedDesk(staffPage);
});
test('desk settings: desks.can_book_for_others unset falls back to bookings.can_book_for_others true',async({staffPage,audit})=>{
 const {details}=await openDesk(staffPage,audit,{'app.desks.can_book_for_others':null,'app.bookings.can_book_for_others':true,'app.basic_user_search':true});
 await expect(details.getByRole('button',OTHER)).toHaveCount(1);
 await expect(details.locator('a-user-search-field')).toHaveCount(0);
 await untouchedDesk(staffPage);
});
