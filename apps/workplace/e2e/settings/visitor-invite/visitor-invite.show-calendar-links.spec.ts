// Setting: visitors.show_calendar_links.
// Runtime: book.routes.ts visitor/:step loads visitor-flow-new (visitor-flow-invites / visitor-flow-success).
import { expect } from '../../../../../e2e/support/fixtures';
import { prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// VisitorFlowSuccess reads BookingFormService.last_success (sessionStorage PLACEOS.last_booked_booking).
// Browser-only data: never saved, looked up, or clicked.
for(const enabled of [false,true]){
 test('visitors.show_calendar_links '+enabled+' gates links for browser-only success state',async({staffPage,audit})=>{
  const fixture=await prepare(staffPage,audit,{'app.visitors.show_calendar_links':enabled});
  await staffPage.addInitScript(()=>{
   const date=new Date();date.setUTCDate(date.getUTCDate()+1);date.setUTCHours(10,0,0,0);
   sessionStorage.setItem('PLACEOS.last_booked_booking',JSON.stringify({id:99009601,booking_type:'visitor',title:'Prepared visitor preview',
    asset_id:'prepared-visitor@example.invalid',asset_name:'Prepared calendar visitor',date:date.valueOf(),duration:60,all_day:false,
    booking_start:Math.floor(date.valueOf()/1000),booking_end:Math.floor(date.valueOf()/1000)+3600,description:'',attendees:[],
    user_email:'prepared-host@example.invalid',user_name:'Prepared host',zones:[],extension_data:{}}));
   sessionStorage.setItem('PLACEOS.last_booked_count','1');
  });
  await staffPage.goto('/#/book/visitor/success');await fixture.ready();
  const panel=staffPage.locator('visitor-flow-success');await expect(panel).toHaveCount(1);await expect(panel).toBeVisible();
  for(const name of ['outlook','google','ical'])await expect(panel.locator('a[name="visitor-'+name+'-link"]')).toHaveCount(enabled?1:0);
  if(enabled){
   const outlook=panel.locator('a[name="visitor-outlook-link"]');const google=panel.locator('a[name="visitor-google-link"]');
   await expect(outlook).toBeVisible();await expect(google).toBeVisible();
   await expect(outlook).toHaveAttribute('href',/^https:\/\/outlook\.office\.com\/calendar\/deeplink\/compose\?/);
   await expect(google).toHaveAttribute('href',/^https:\/\/calendar\.google\.com\/calendar\/render\?/);
   await expect(panel.locator('a[name="visitor-ical-link"]')).toBeVisible();
   await expect(panel.locator('a[name="visitor-ical-link"]')).toHaveAttribute('href',/^(?:blob:|data:text\/calendar)/);
  }
  await expect(staffPage.locator('visitor-flow-new visitor-flow-invites')).toHaveCount(0);
 });
}
