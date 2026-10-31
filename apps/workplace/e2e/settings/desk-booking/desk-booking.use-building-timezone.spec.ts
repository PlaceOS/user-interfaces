// Coverage: 1 unique setting, 2 scenarios.
// Setting: desks.use_building_timezone (docs/settings/workplace.md; source:
//   apps/workplace/src/app/book/desk-flow-new/desk-flow-details.component.ts,
//   rendered by libs/form-fields/src/lib/duration-field.component.ts).
//
// The details duration field appends a second time line when the desk flow is
// configured to use the active building's timezone. The browser is pinned to
// UTC and the real building rows are rewritten to Pacific/Honolulu, so the
// offset is deterministic without changing any backend record. No desk is
// selected, no asset is attached and no booking is confirmed.
import type { Locator, Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type Audit,
    futureDesk,
    prepareSettings,
    type Settings,
    test,
    timezoneBuildings,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const DESK: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.feature_groups': {},
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.use_24_hour_time': true,
    'app.basic_user_search': true,
    'app.desk.auto_allocation': true,
    'app.desks.auto_allocation': true,
    'app.desks.hide_title': false,
    'app.desks.allow_groups': false,
    'app.desks.can_book_for_others': false,
    'app.bookings.can_book_for_others': false,
    'app.desks.can_book_lockers': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
    'app.desks.allow_recurrence': false,
    'app.desks.allow_time_changes': true,
    'app.desks.allow_all_day': false,
    'app.bookings.allow_all_day': false,
    'app.desk.all_day_default': false,
    'app.desks.all_day_default': false,
    'app.bookings.all_day_default': false,
    'app.bookings.use_building_timezone': false,
    'app.desks.available_period': 30,
    'app.desks.bookable_hours': null,
    'app.desk.min_duration': null,
    'app.desk.max_duration': null,
    'app.desk.duration_step': null,
    'app.desk.custom_duration_options': null,
    'app.desks.min_duration': 30,
    'app.desks.max_duration': 180,
    'app.desks.duration_step': 30,
    'app.desks.custom_duration_options': [],
    'app.bookings.min_duration': 30,
    'app.bookings.max_duration': 180,
    'app.bookings.duration_step': 30,
    'app.bookings.custom_duration_options': [],
};

async function prepare(page: Page, audit: Audit, enabled: boolean) {
    // Real building rows, rewritten to Pacific/Honolulu, which differs from the
    // browser's pinned Etc/UTC. This is a browser GET response only.
    await timezoneBuildings(page, audit);
    const fixture = await prepareSettings(page, {
        'app.desks.use_building_timezone': enabled,
    }, { audit, base: DESK, hidden: 'e2e-desk-timezone', landingRooms: false });
    await page.goto('/#/book/desk/form');
    await fixture.ready({
        keys: ['app.features', 'app.desks.use_building_timezone', 'app.bookings.use_building_timezone'],
    });
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    return details;
}

/** Tomorrow at 10:00 with the first duration offered. */
async function futureDeskWithDuration(page: Page, details: Locator) {
    await futureDesk(page, details);
    await details.locator('duration-field button[duration-field]').click();
    await page.locator('.cdk-overlay-container button[data-duration]').first().click();
}

for (const enabled of [false, true]) {
    test(`desks.use_building_timezone ${enabled} gates the duration secondary time line`,
        async ({ staffPage, audit }) => {
            const details = await prepare(staffPage, audit, enabled);
            expect(audit.fixtures['timezone buildings'] ?? 0, 'building-timezone rows served').toBeGreaterThan(0);
            await futureDeskWithDuration(staffPage, details);
            const secondary = details.locator('duration-field div.opacity-30');
            await expect(secondary).toHaveCount(enabled ? 1 : 0);
            if (enabled) {
                await expect(secondary).toBeVisible();
                await expect(secondary).toContainText(/GMT-10/);
            }
            await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
            await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
        });
}
