
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly, staffEmail } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { type Audit, BASE, CATEGORIES, type Debug, getOnly, ORIGINS, type Settings, test, TYPES } from '../support/settings-harness';
type Identity = { id: string; email: string; name: string; groups?: string[]; sys_admin?: boolean; support?: boolean };

test.use({ readOnlyTimezone: 'Etc/UTC' });
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
    // requestSpacesForZone: exact GET query; no resource status connections.
    await getOnly(page, audit, 'empty landing rooms', (url) => url.pathname === '/api/engine/v2/systems' &&
        !!url.searchParams.get('zone_id') && url.searchParams.get('limit') === '500' &&
        url.searchParams.get('signage') === 'false' &&
        [...url.searchParams.keys()].every((key) => ['zone_id', 'limit', 'signage'].includes(key)), () => []);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
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


// landing-features.ts landingFeatures/QUICK_LINKS and hasQuickActions.
async function featureLanding(page:Page,audit:Audit,features:string[]){
 const fixture=await prepare(page,audit,{'app.features':features,'app.feature_groups':{},
  'app.show_quick_links':true,'app.show_quick_book':false,'app.hide_landing_customise':true,
  'app.hide_landing_widgets':[],'app.hide_colleagues':true,
  'app.hide_landing_rooms':true,'app.hide_landing_spaces':true});
 await page.goto('/#/landing');await fixture.ready();
 await expect(page.locator('landing-new > div')).toBeVisible();
 return fixture;
}
test('features replacement exposes only each configured booking destination', async ({ staffPage, audit }, info) => {
 const variants = [['desks', 'desk'], ['spaces', 'meeting']] as const;
 for (const [index, [feature, route]] of variants.entries()) {
  // useSettings installs a document-init script. Reusing the same URL keeps
  // SettingsService alive with its initial debug overrides, and installing a
  // second script on that page would also make reload ordering ambiguous.
  // Each variant therefore gets exactly one prepare call on its own page.
  // Both pages share the existing staff-only context: mutation interception,
  // service-worker blocking, WebSocket routing and page/error audits stay active.
  const page = index === 0 ? staffPage : await staffPage.context().newPage();
  try {
   const fixture = await featureLanding(page, audit, [feature]);
   // The parent fixture observes identity on staffPage. Explicitly verify
   // the app's observed identity on every variant, including the added page.
   const user = await fixture.user();
   expect(user.email.toLowerCase()).toBe(staffEmail(info.parallelIndex).toLowerCase());
   expect(user.sys_admin || user.support, 'staff-only feature variant').toBeFalsy();
   const links = page.locator('landing-quick-actions a');
   await expect(links).toHaveCount(1);
   await expect(links).toBeVisible();
   await expect(links).toHaveAttribute('href', '#/book/' + route);
   await expect(page.locator('landing-quick-actions button[name="auto-assign-desk"]')).toHaveCount(0);
  } finally {
   if (page !== staffPage) await page.close();
  }
 }
});
test('features empty list removes the quick-actions booking widget',async({staffPage,audit})=>{
 await featureLanding(staffPage,audit,[]);
 await expect(staffPage.locator('landing-quick-actions')).toHaveCount(0);
 await expect(staffPage.locator('landing-favourites-new')).toHaveCount(1);
});
