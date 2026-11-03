// Coverage: 1 unique Setting. Exact key: app.events.default_duration.
// Scenarios: 2. A configured duration and the documented 60-minute fallback.
// Scope: the selected value in the rendered meeting duration control; no meeting is submitted.
// Limitations: exercises the native booking flow, not external calendar providers.
//
// Source: event-form.service.ts passes
// `setting('app.events.default_duration') ?? 60` to the form time sync, and
// libs/common/src/lib/general.ts applies it when all-day is turned
// off and the saved timed window is on another day. The flow below therefore
// turns all-day on, moves the date by a day, and turns all-day off.
// An unset key reads as null, not undefined: SettingsService.get falls back to
// getItemWithKeys (general.ts), which returns null for a missing key.
//
// Authentication: the staff bearer comes from settingsStaffToken
// (settings-harness), which reuses the token stored for this worker under
// e2e/.auth while it is valid and mints one otherwise, and checks the user is
// this worker's staff address and not admin/support. The readOnlyTest
// identity guard is unchanged.
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page } from '@playwright/test';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type DebugWindow,
    type Settings,
    clearOrganisationCache,
    expectSafe,
    getOnly,
    protectNetwork,
    staffTokenTest as test,
    syntheticOrg,
    syntheticOrgRoutes,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone id starts with this prefix. */
const PREFIX = 'e2e-default-duration-';
const ORG = syntheticOrg(PREFIX, { params: 'any' });
const { ORGANISATION, BUILDING, hasParams } = ORG;
// Exact single-zone metadata names: room_booking_rules for each building
// (event-form.service.ts), room_alerts on the organisation,
// and the organisation's translation overrides. LocaleService requests
// `locale_<locale>` on the organisation once it has loaded
// (placeos.service.ts, locale.service.ts) for the current and
// the default locale, pinned below to en-US and en-AU.
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: ['room_booking_rules'],
    [ORGANISATION]: ['room_alerts', 'locale_en-AU', 'locale_en-US'],
};
// Controls, not covered settings. global_search and chat keep the topbar's
// search/chat loaders off; has_assets=false is the AssetStateService network
// gate (libs/assets/src/lib/asset-state.service.ts), so no asset,
// asset-category or asset-settings GET is issued for this assets-free flow.
const CONTROLS: Settings = {
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.has_assets': false,
};

/** Exact synthetic GET fixtures for the requests the meeting form makes. */
async function syntheticGets(page: Page) {
    // Organisation bootstrap (organisation.service.ts), the organisation's
    // empty translation overrides and the signed-in user's empty settings.
    await syntheticOrgRoutes(page, ORG, {
        label: 'Duration',
        zone_metadata: ZONE_METADATA,
        zone_details: (_id, name) => (name === 'room_booking_rules' ? [] : {}),
    });
    // The bookable list for the building (space.utilities.ts); the
    // organisation list is in syntheticOrgRoutes. This scenario selects no room.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => [],
    );
    // Events and room bookings.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/events' &&
            url.searchParams.has('period_start') &&
            url.searchParams.has('period_end'),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'room',
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/bookings/booked',
        () => [],
    );
}

/** The app settings for a scenario; the key is omitted entirely when unset. */
function durationSettings(configured: number | undefined): Settings {
    const settings: Settings = {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.events.use_bookings': true,
        'app.events.allow_all_day': true,
        'app.events.allow_multiday': false,
        'app.events.allow_recurrence': false,
        'app.events.has_assets': false,
        'app.events.hide_attendees': true,
        'app.events.hide_notes': true,
        'app.events.allow_externals': false,
        'app.events.use_building_timezone': false,
        'app.catering.backend': 'native',
        'app.catering_provider': '',
        'app.use_region': false,
        'app.default_building': BUILDING,
    };
    if (configured !== undefined) {
        settings['app.events.default_duration'] = configured;
    }
    return settings;
}

async function openMeetingDetails(page: Page, configured: number | undefined) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await clearOrganisationCache(page);
    await useSettings(page, durationSettings(configured));
    await page.addInitScript(() => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({
                title: 'Browser-only duration meeting',
                date: date.valueOf(),
                date_end: date.valueOf() + 60 * 60_000,
                duration: 60,
                all_day: false,
                resources: [],
                attendees: [],
            }),
        );
    });
    await syntheticGets(page);
    await page.goto('/#/book/meeting/form?view=0');
    const details = page.locator('meeting-flow-details');
    await expect(details).toBeVisible();
    await expect(
        details.locator('mat-checkbox input[type="checkbox"]'),
    ).toBeVisible();
    return { details, audit };
}

/** Whether the local override is set, and the effective setting value. */
function durationSettingState(page: Page) {
    return page.evaluate((keys) => {
        const overrides = JSON.parse(
            localStorage.getItem('PLACEOS.setting_overrides') || '{}',
        );
        const setting = (window as DebugWindow).setting;
        return {
            override: 'app.events.default_duration' in overrides,
            effective: setting?.('app.events.default_duration'),
            controls: Object.fromEntries(
                keys.map((key) => [key, setting?.(key)]),
            ),
        };
    }, Object.keys(CONTROLS));
}

// The configured scenario sets 45 and expects 45 minutes. The fallback
// scenario leaves the key unset (no override, effective value null) and
// expects the source-supported 60 minutes.
const SCENARIOS = [
    {
        label: '45',
        configured: 45,
        override: true,
        effective: 45,
        expectedDuration: 45,
    },
    {
        label: 'fallback',
        configured: undefined,
        override: false,
        effective: null,
        expectedDuration: 60,
    },
];

for (const scenario of SCENARIOS) {
    test(`events.default_duration ${scenario.label} applies ${scenario.expectedDuration} minutes when leaving a date-shifted all-day meeting`, async ({
        staffPage,
    }) => {
        const { details, audit } = await openMeetingDetails(
            staffPage,
            scenario.configured,
        );
        await expect
            .poll(() => durationSettingState(staffPage), {
                message: 'events.default_duration override and effective value',
            })
            .toStrictEqual({
                override: scenario.override,
                effective: scenario.effective,
                controls: CONTROLS,
            });
        const allDay = details.locator('mat-checkbox input[type="checkbox"]');
        await expect(allDay).not.toBeChecked();
        await allDay.check();
        await expect(allDay).toBeChecked();

        // A different calendar day, so turning all-day off cannot restore
        // the saved timed window and must apply the default duration.
        const nextDay = new Date();
        nextDay.setUTCDate(nextDay.getUTCDate() + 2);
        nextDay.setUTCHours(10, 0, 0, 0);
        await details.locator('date-field button').first().click();
        await pickCalendarDay(
            staffPage,
            staffPage.locator('.cdk-overlay-container date-calendar'),
            nextDay.valueOf(),
            { closes_on_pick: true },
        );
        await allDay.uncheck();
        await expect(allDay).not.toBeChecked();

        const duration = details.locator('duration-field');
        const selectedDuration = () =>
            duration.evaluate((element) => {
                const component = (window as DebugWindow).ng?.getComponent(
                    element,
                ) as { selected(): { id: number } | undefined } | undefined;
                return component?.selected()?.id;
            });
        await expect.poll(selectedDuration).toBe(scenario.expectedDuration);
        await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
        await expect(staffPage).toHaveURL(/view=0$/);
        await expectSafe(audit);
    });
}
