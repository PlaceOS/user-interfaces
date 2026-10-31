// Coverage: 1 unique setting, 4 scenarios.
// Setting: bookings.has_assets (docs/settings/workplace.md; source:
//   apps/workplace/src/app/book/desk-flow-new/desk-flow-details.component.ts).
//
// The desk flow reads `desks.has_assets ?? bookings.has_assets`, so an explicit
// desks.has_assets overrides the generic key. With desks.has_assets null the
// generic key alone gates the asset request field; with desks.has_assets set,
// its value wins over bookings.has_assets. No asset is requested, attached or
// submitted; the form is never confirmed.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { prepareSettings, type Settings, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const BASE: Settings = {
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
    'app.basic_user_search': true,
    // Expose the desktop details form without selecting a desk or confirming.
    'app.desk.auto_allocation': true,
    'app.desks.auto_allocation': true,
    'app.desks.hide_title': false,
    'app.desks.allow_groups': false,
    'app.desks.can_book_for_others': false,
    'app.bookings.can_book_for_others': false,
    'app.desks.can_book_lockers': false,
    'app.desks.use_assets': true,
    'app.desks.allow_recurrence': false,
    'app.desks.allow_time_changes': true,
    'app.desks.allow_all_day': false,
    'app.bookings.allow_all_day': false,
    'app.desk.all_day_default': false,
    'app.desks.all_day_default': false,
    'app.bookings.all_day_default': false,
    'app.desks.use_building_timezone': false,
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

async function prepare(page: Page, desks: boolean | null, generic: boolean) {
    const fixture = await prepareSettings(
        page,
        { 'app.desks.has_assets': desks, 'app.bookings.has_assets': generic },
        {
            base: BASE,
            hidden: 'e2e-booking-assets',
            landingRooms: false,
            identity: false,
        },
    );
    await page.goto('/#/book/desk/form');
    await fixture.ready({
        loading: false,
        keys: ['app.features', 'app.desks.has_assets', 'app.bookings.has_assets'],
    });
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    return details;
}

// One asset request field and label when the effective flag is on, none when
// it is off.
const SCENARIOS = [
    { desks: null, generic: false, fields: 0, effect: 'hides' },
    { desks: null, generic: true, fields: 1, effect: 'shows' },
    { desks: false, generic: true, fields: 0, effect: 'hides' },
    { desks: true, generic: false, fields: 1, effect: 'shows' },
];

for (const scenario of SCENARIOS) {
    test(`bookings.has_assets ${scenario.generic} with desks.has_assets ${scenario.desks} ${scenario.effect} the desk asset request field`, async ({
        staffPage,
    }) => {
        const details = await prepare(
            staffPage,
            scenario.desks,
            scenario.generic,
        );
        await expect(details.locator('asset-list-field')).toHaveCount(
            scenario.fields,
        );
        await expect(details.locator('label[for="assets"]')).toHaveCount(
            scenario.fields,
        );
        // No asset is ever requested. With the field absent this also holds,
        // so it is asserted in every scenario.
        await expect(details.locator('asset-list-field [request]')).toHaveCount(
            0,
        );
        await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
        await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
    });
}
