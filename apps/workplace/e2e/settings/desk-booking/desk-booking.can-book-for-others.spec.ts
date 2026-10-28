
import { expect } from '../../../../../e2e/support/fixtures';
import { openDesk, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
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
