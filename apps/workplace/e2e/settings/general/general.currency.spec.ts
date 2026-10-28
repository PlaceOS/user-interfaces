
import { expect } from '../../../../../e2e/support/fixtures';
import { getOnly, openPreparedRoom, ROOM_ONE, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// CurrencyPipe in native CateringItemListItem; inspect prices without selecting an item/order.
const CATEGORY='e2e-settings-catering';const TYPE='prepared-currency-type';const ITEM='Prepared currency tea';
for(const [code,price] of [['EUR',/€\s*12\.50/],['GBP',/£\s*12\.50/]] as const){
 test('currency '+code+' formats browser-only native catering prices',async({staffPage,audit})=>{
  const root=await openPreparedRoom(staffPage,audit,{'app.currency':code},2,[ROOM_ONE],[],async()=>{
   await getOnly(staffPage,audit,'prepared catering types',url=>url.pathname==='/api/engine/v2/asset_types'&&url.searchParams.get('category_id')===CATEGORY&&url.searchParams.get('limit')==='500',()=>[{id:TYPE,category_id:CATEGORY,name:'CATERING:Prepared',brand:'PlaceOS'}]);
   await getOnly(staffPage,audit,'prepared catering item',url=>url.pathname==='/api/engine/v2/assets'&&url.searchParams.get('type_id')===TYPE&&!!url.searchParams.get('zone_id')&&url.searchParams.get('limit')==='500',url=>[{id:'prepared-currency-tea',name:ITEM,identifier:ITEM,asset_type_id:TYPE,zone_id:url.searchParams.get('zone_id'),images:[],other_data:{unit_price:1250,category:'Prepared drinks',tags:[],options:[],hide_for_zones:[]}}]);
   await getOnly(staffPage,audit,'prepared catering rules',url=>/^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname)&&['catering_config','catering-settings'].includes(url.searchParams.get('name')??''),url=>{const n=url.searchParams.get('name')!;return {[n]:{name:n,description:'',details:n==='catering_config'?[]:{}}};});
  });
  // CateringListField: with no orders, the empty state has an unnamed add button (add_notes icon);
  // button[name="add-catering-item"] only renders once an order exists.
  const field=root.locator('catering-list-field');await expect(field).toBeVisible();
  expect(audit.fixtures['prepared catering types']??0).toBeGreaterThan(0);
  await expect(field.locator('button[name="add-catering-item"]')).toHaveCount(0);
  const add=field.getByRole('button').filter({has:staffPage.locator('icon',{hasText:'add_notes'})});
  await expect(add).toHaveCount(1);await expect(add).toBeEnabled();await add.click();
  const modal=staffPage.locator('catering-select-modal');await expect(modal).toBeVisible();
  const item=modal.locator('catering-item-list-item').filter({hasText:ITEM});await expect(item).toHaveCount(1);await expect(item.locator('p')).toHaveText(price);
  expect(audit.fixtures['prepared catering item']??0).toBeGreaterThan(0);
  await modal.locator('header button[mat-dialog-close]').click();await expect(modal).toHaveCount(0);
  await expect(root.locator('catering-list-field div[order]')).toHaveCount(0);
 });
}
