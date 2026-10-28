
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, durationMenu, futureDesk, prepare, type Settings, test, untouchedDesk } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });


// Current runtime: desk-flow-new/desk-flow-details.component.ts.
// Auto-allocation is pinned only to expose the desktop details controls. Never
// click the parent's confirmation action, select a resource, or save a booking.
async function openDesk(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, {
        'app.features': ['desks'], 'app.feature_groups': {},
        'app.desk.auto_allocation': true, 'app.desks.auto_allocation': true,
        'app.desks.hide_title': false, 'app.desks.allow_groups': false,
        'app.desks.can_book_for_others': false, 'app.bookings.can_book_for_others': false,
        'app.desks.can_book_lockers': false, 'app.desks.has_assets': false,
        'app.desks.use_assets': true, 'app.desks.allow_recurrence': false,
        'app.desks.allow_time_changes': true, 'app.desks.allow_all_day': false,
        'app.bookings.allow_all_day': false, 'app.desk.all_day_default': false,
        'app.desks.all_day_default': false, 'app.bookings.all_day_default': false,
        'app.desks.use_building_timezone': false,
        'app.desks.available_period': 30, 'app.desks.bookable_hours': null,
        'app.desk.min_duration': null, 'app.desk.max_duration': null,
        'app.desk.duration_step': null, 'app.desk.custom_duration_options': null,
        'app.desks.min_duration': 30, 'app.desks.max_duration': 180,
        'app.desks.duration_step': 30, 'app.desks.custom_duration_options': [],
        // desks.x || bookings.x (desk-flow-details.component.ts): fallbacks no
        // case expects, so an ignored desks.* key changes the menu and fails.
        'app.bookings.min_duration': 15, 'app.bookings.max_duration': 480,
        'app.bookings.duration_step': 15, 'app.bookings.custom_duration_options': [75],
        ...overrides,
    });
    await page.goto('/#/book/desk/form'); await fixture.ready();
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    return { details, fixture };
}
// DeskFlowDetailsComponent reads desks.max_duration before the generic bookings fallback.
for(const c of [{"value": 120, "min": 30, "max": 120, "step": 30, "custom": [], "expected": [30, 60, 90, 120]}, {"value": 180, "min": 30, "max": 180, "step": 30, "custom": [], "expected": [30, 60, 90, 120, 150, 180]}]){
 test('desk settings: desks.max_duration '+c.value+' changes exact duration choices',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desks.min_duration':c.min,'app.desks.max_duration':c.max,
   'app.desks.duration_step':c.step,'app.desks.custom_duration_options':c.custom});
  await futureDesk(staffPage,details);await durationMenu(staffPage,details);
  await staffPage.locator('.cdk-overlay-container button[data-duration="'+c.min+'"]').click();
  await details.locator('time-field[name="time"] button[time-field]').click();
  await staffPage.locator('.cdk-overlay-container button[data-time="11:00"]').click();
  const options=await durationMenu(staffPage,details);
  expect(await options.evaluateAll(rows=>rows.map(r=>Number(r.getAttribute('data-duration'))))).toEqual(c.expected);
  await staffPage.keyboard.press('Escape');await expect(options).toHaveCount(0);await untouchedDesk(staffPage);
 });
}
