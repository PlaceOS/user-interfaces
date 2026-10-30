
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { staffEmail } from '../../../../../e2e/support/env';
import { type Audit, type Identity, prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
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
  // useSettings installs a document-init script, so each variant gets one
  // prepare call on its own page. Both pages share the staff-only context and
  // its guards and audit.
  const page = index === 0 ? staffPage : await staffPage.context().newPage();
  try {
   const fixture = await featureLanding(page, audit, [feature]);
   // The parent fixture checks identity on staffPage only; this covers the added page.
   const user = (await fixture.user()) as Identity & { sys_admin?: boolean; support?: boolean };
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
