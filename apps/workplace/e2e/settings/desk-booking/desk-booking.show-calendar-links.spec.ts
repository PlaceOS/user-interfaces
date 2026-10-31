
import { expect } from '../../../../../e2e/support/fixtures';
import { prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });


// BookingFormService reads PLACEOS.last_booked_booking into Booking; success
// uses that state to generate links. Browser-only data: never save or look up this ID.
for(const enabled of [false,true]){
 test('desks.show_calendar_links '+enabled+' gates links for browser-only success state',async({staffPage,audit})=>{
  const fixture=await prepare(staffPage,audit,{'app.features':['desks'],'app.desks.show_calendar_links':enabled});
  await staffPage.addInitScript(()=>{
   const date=new Date();date.setUTCDate(date.getUTCDate()+1);date.setUTCHours(10,0,0,0);
   sessionStorage.setItem('PLACEOS.last_booked_booking',JSON.stringify({id:99009501,booking_type:'desk',title:'Prepared calendar preview',
    asset_id:'prepared-calendar-desk',asset_name:'Prepared calendar desk',date:date.valueOf(),duration:60,all_day:false,
    booking_start:Math.floor(date.valueOf()/1000),booking_end:Math.floor(date.valueOf()/1000)+3600,
    user_email:'prepared-calendar@example.invalid',user_name:'Prepared calendar user',zones:[],extension_data:{}}));
   sessionStorage.setItem('PLACEOS.last_booked_count','1');
  });
  await staffPage.goto('/#/book/desk/success');await fixture.ready();
  const panel=staffPage.locator('desk-flow-success');await expect(panel).toHaveCount(1);
  await expect(panel.locator('main')).toBeVisible();await expect(panel.locator('h2')).toContainText('Prepared calendar desk');
  for(const name of ['outlook','google','ical'])await expect(panel.locator('a[name="desk-'+name+'-link"]')).toHaveCount(enabled?1:0);
  if(enabled){
   const outlook=panel.locator('a[name="desk-outlook-link"]');const google=panel.locator('a[name="desk-google-link"]');
   await expect(outlook).toBeVisible();await expect(google).toBeVisible();
   await expect(outlook).toHaveAttribute('href',/^https:\/\/outlook\.office\.com\/calendar\/deeplink\/compose\?/);
   await expect(google).toHaveAttribute('href',/^https:\/\/calendar\.google\.com\/calendar\/render\?/);
   await expect(panel.locator('a[name="desk-ical-link"]')).toBeVisible();
   await expect(panel.locator('a[name="desk-ical-link"]')).toHaveAttribute('href',/^(?:blob:|data:text\/calendar)/);
  }
  // No calendar links, booking actions, check-in or external integrations clicked.
 });
}
