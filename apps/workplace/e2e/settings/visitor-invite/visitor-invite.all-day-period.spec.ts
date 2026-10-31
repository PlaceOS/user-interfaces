// Setting: app.bookings.all_day_period.
// Scenarios:
//   1. all_day_period { start: 9, end: 17 }: turning All Day on sets the
//      unsaved visitor window to 09:00 UTC for 480 minutes.
//   2. all_day_period { start: 8, end: 12 }: the same action sets 08:00 UTC
//      for 240 minutes.
// Scope: the unsaved visitor booking model on the invite page
// (/#/book/visitor/form). Confirm is never pressed; nothing is sent.
// Source: libs/bookings/src/lib/booking-form.service.ts passes
// setting('all_day_period') to the form time sync as all_day_start/end, and
// settingForType resolves app.visitor.all_day_period, then
// app.visitors.all_day_period, then app.bookings.all_day_period. The first two
// are asserted unset. libs/common/src/lib/general.ts applies
// getAllDayTimeRange with that period when All Day turns on. The All Day
// checkbox is shown only while app.visitors.allow_all_day is true
// (visitor-flow-details.component.ts), so that control is pinned true.
// The visit is moved to tomorrow first, so the window is never in the past.
//
// Authentication: guardedStaffTest (settings-harness). Network policy: every
// /api request must match one exact synthetic GET fixture below, except the
// staff identity GET (users/current), which is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly, staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    clearOrganisationCache,
    type DebugWindow,
    expectSafe,
    getOnly,
    PIXEL,
    protectNetwork,
    type Settings,
    syntheticOrg,
    syntheticOrgRoutes,
    guardedStaffTest as test,
    validPeriod,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const ORG = syntheticOrg('e2e-visitor-all-day-', { params: 'zones' });
const { BUILDING, ORGANISATION, hasParams } = ORG;

// Exact single-zone metadata names. BookingFormService loads
// `<type>_booking_rules` for each building (booking-form.service.ts);
// its type starts as `desk` until the visitor flow sets `visitor`,
// so both rule names are read. Both are answered as empty rule lists.
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: ['desk_booking_rules', 'visitor_booking_rules'],
    [ORGANISATION]: [
        'locale_en-AU',
        'locale_en-US',
        'room_alerts',
        'points-of-interest',
    ],
};

// Every other visitor time setting is held, so the configured all-day period
// is the only input to the window.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.logo_light': PIXEL,
    'app.bookings.multiple_visitors': false,
    'app.bookings.all_day_default': false,
    'app.bookings.can_book_for_anyone': false,
    'app.bookings.can_book_for_others': false,
    'app.visitors.can_book_for_anyone': false,
    'app.visitors.can_book_for_others': false,
    'app.visitors.allow_all_day': true,
    'app.bookings.use_building_timezone': false,
    'app.visitors.use_building_timezone': false,
    'app.visitors.bookable_hours': null,
    'app.bookings.bookable_hours': null,
    'app.visitors.reason_required': false,
};

/** The signed-in user's own day lists, by booking type; always empty. */
function ownBookingQuery(url: URL) {
    const period_start = url.searchParams.get('period_start')!;
    const period_end = url.searchParams.get('period_end')!;
    return ['visitor', 'parking'].some((type) => {
        const base = { type, period_start, period_end };
        return (
            hasParams(url, base) ||
            hasParams(url, {
                ...base,
                email: staffEmail(test.info().parallelIndex),
            })
        );
    });
}

/** Exact synthetic GET fixtures for the visitor invite page. */
async function syntheticGets(page: Page) {
    await syntheticOrgRoutes(page, ORG, {
        label: 'Visitor All Day',
        zone_metadata: ZONE_METADATA,
        zone_details: (_id, name) => (name.endsWith('_booking_rules') ? [] : {}),
        user_metadata: ['settings', 'contacts'],
    });
    // BookingFormService checks whether the user has an assigned desk
    // (booking-form.service.ts) by listing the building's child
    // `desks` metadata (booking-resource.loaders.ts). No level
    // carries desks, so the list is empty and no desk is assigned.
    await getOnly(
        page,
        (url) =>
            url.pathname ===
                '/api/engine/v2/metadata/' + BUILDING + '/children' &&
            hasParams(url, { name: 'desks' }),
        () => [],
    );
    // LandingStateService loads the active building's rooms on every route.
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
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url, { strict: false }) &&
            ownBookingQuery(url),
        () => [],
    );
}

type Period = { start: number; end: number };

async function openInvite(page: Page, period: Period) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['visitor-invite'],
        'app.feature_groups': {},
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.bookings.all_day_period': period,
    });
    await syntheticGets(page);
    const form = new InviteVisitorForm(page);
    await form.open();
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect(form.sendButton).toBeVisible();
    return { audit, form };
}

/** The effective all-day period keys, in settingForType order. */
function periodSettings(page: Page) {
    return page.evaluate(() => {
        const setting = (window as DebugWindow).setting;
        return {
            visitor: setting?.('app.visitor.all_day_period') ?? null,
            visitors: setting?.('app.visitors.all_day_period') ?? null,
            bookings: setting?.('app.bookings.all_day_period') ?? null,
            allow_all_day: setting?.('app.visitors.allow_all_day'),
        };
    });
}

type VisitorWindow = {
    all_day: boolean;
    hour: number;
    minute: number;
    duration: number;
};

/**
 * Read-only probe of the unsaved BookingFormService model, as exposed by
 * visitor-flow-details (`model`, visitor-flow-details.component.ts).
 * Fails closed if the component or its model is unavailable.
 */
function visitorWindow(page: Page): Promise<VisitorWindow> {
    return page.locator('visitor-flow-details').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  model?: () => {
                      all_day?: boolean;
                      date?: number;
                      duration?: number;
                  };
              }
            | undefined;
        const value = component?.model?.();
        if (!value) throw new Error('visitor booking model is unavailable');
        const date = new Date(Number(value.date));
        return {
            all_day: !!value.all_day,
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            duration: Number(value.duration),
        };
    });
}

// Two windows, neither of them the app default.
const SCENARIOS: { period: Period; duration: number }[] = [
    { period: { start: 9, end: 17 }, duration: 480 },
    { period: { start: 8, end: 12 }, duration: 240 },
];

for (const scenario of SCENARIOS) {
    test(`bookings.all_day_period ${scenario.period.start}-${scenario.period.end} sets the unsaved all-day visitor window`, async ({
        staffPage,
    }) => {
        const { audit, form } = await openInvite(staffPage, scenario.period);
        await expect
            .poll(() => periodSettings(staffPage), {
                message: 'effective all-day period keys',
            })
            .toStrictEqual({
                visitor: null,
                visitors: null,
                bookings: scenario.period,
                allow_all_day: true,
            });
        await expect(form.allDay).toHaveCount(1);
        await expect(form.allDay).not.toBeChecked();
        // Tomorrow, so the all-day window is never in the past.
        const tomorrow = new Date();
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
        tomorrow.setUTCHours(12, 0, 0, 0);
        await form.setDate(tomorrow.valueOf());
        await form.setCheckbox(form.allDay, true);
        await expect
            .poll(() => visitorWindow(staffPage), {
                message: 'unsaved all-day visitor window',
            })
            .toStrictEqual({
                all_day: true,
                hour: scenario.period.start,
                minute: 0,
                duration: scenario.duration,
            });
        await expect(form.successPanel).toHaveCount(0);
        await expect(staffPage).toHaveURL(/#\/book\/visitor\/form/);
        await expectSafe(audit);
    });
}
