// Setting: visitors.show_calendar_links. Helpers below are copied unchanged from visitor-invite.multiple-visitors.spec.ts (accepted).
// Runtime: book.routes.ts visitor/:step loads visitor-flow-new (visitor-flow-invites / visitor-flow-success).
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Audit, CATEGORIES, type Debug, getOnly, type Identity, ORIGINS, PIXEL, type Settings, test, TYPES } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['visitor-invite'], 'app.chat.enabled': false, 'app.global_search': false,
    'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true, 'app.use_region': false, 'app.use_geolocation': false,
    'app.allow_dark_mode': false, 'app.logo_light': PIXEL,
    'app.bookings.multiple_visitors': false, 'app.bookings.all_day_default': false,
    'app.bookings.can_book_for_anyone': false, 'app.bookings.can_book_for_others': false,
    'app.visitors.can_book_for_anyone': false, 'app.visitors.can_book_for_others': false,
    'app.visitors.allow_all_day': false, 'app.bookings.use_building_timezone': false,
    'app.visitors.use_building_timezone': false, 'app.visitors.bookable_hours': null,
    'app.bookings.bookable_hours': null, 'app.visitors.reason_required': false,
};
async function prepare(page: Page, audit: Audit, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/users/current' &&
            response.request().method() === 'GET') identity = response.json();
    });
    // Parking/locker modules are not tested. Their shared bootstrap is read-only:
    // ensure_hidden_category/move_type_to_category must find matching records.
    await getOnly(page, audit, 'hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500', () => CATEGORIES);
    await getOnly(page, audit, 'hidden types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' && Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''),
    (url) => TYPES[url.searchParams.get('category_id')!].map((name) => ({
        id: 'e2e-settings-type-' + name, name, category_id: url.searchParams.get('category_id'), brand: 'PlaceOS',
    })));
    await getOnly(page, audit, 'hidden assets', (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('e2e-settings-type-'), () => []);
    await getOnly(page, audit, 'calendar list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    return {
        settings,
        user: async () => {
            if (!identity) throw new Error('the application must establish staff identity');
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading')).toHaveCount(1);
            await expect(page.locator('global-loading [loader]')).toHaveCount(0);
            await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect.poll(() => page.evaluate((name) => (window as Debug).setting?.(name), key),
                    { message: 'effective setting ' + key }).toEqual(value);
            }
        },
    };
}


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
