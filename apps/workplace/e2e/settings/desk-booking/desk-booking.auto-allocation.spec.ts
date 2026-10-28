
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Audit, prepare, type Settings, test, untouchedDesk } from '../support/settings-harness';

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
        'app.bookings.min_duration': 30, 'app.bookings.max_duration': 180,
        'app.bookings.duration_step': 30, 'app.bookings.custom_duration_options': [],
        ...overrides,
    });
    await page.goto('/#/book/desk/form'); await fixture.ready();
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    return { details, fixture };
}
// DeskFlowNewComponent: auto-allocation replaces manual desk selection with an info panel.
for(const enabled of [false,true]){
 test('desks.auto_allocation '+enabled+' switches automatic versus manual selection layout',async({staffPage,audit})=>{
  const {details}=await openDesk(staffPage,audit,{'app.desk.auto_allocation':null,'app.desks.auto_allocation':enabled});
  const flow=staffPage.locator('desk-flow-new');
  await expect(flow.locator('desk-flow-select')).toHaveCount(enabled?0:1);
  if(enabled)await expect(flow.locator('p[class~="bg-info/10"]')).toBeVisible();
  else {
   await expect(flow.locator('desk-flow-select')).toBeVisible();
   // Current DeskFlowSelect defaults to list; never open its map view.
   await expect(flow.locator('desk-flow-select-map')).toHaveCount(0);
  }
  // Source hides the details date controls on desktop during manual selection.
  await expect(details.locator('date-field button').first()).toBeVisible({visible:enabled});
  await untouchedDesk(staffPage);
 });
}
