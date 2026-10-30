// Coverage: 1 unique Setting. Exact key: app.schedule.use_driver.
// Scenarios: 2. use_driver true selects the `driver` source, both on its own and
// with use_websocket also true (use_driver takes priority over use_websocket).
// use_driver false is covered by schedule.use-websocket.spec.ts, whose two
// scenarios pin use_driver false (falling back to `ws` and `api`).
// Scope: which schedule event source is selected and whether
// /staff/v1/events is requested. The driver's LocationServices data is not
// asserted: the synthetic organisation has no location_services binding, so
// the driver loader resolves an empty list without any request.
// Docs: docs/settings/workplace.md.
//
// Source: schedule-state.service.ts uses the legacy flags only while
// app.schedule.event_sources is empty: use_driver -> 'driver', otherwise
// use_websocket -> 'ws', otherwise 'api'. The `driver` loader calls
// the location_services module only; the `api` loader requests
// /staff/v1/events because events.use_bookings is false. event_sources is set
// to [] explicitly so the fallback is always the branch under test; each
// scenario pins use_websocket.
//
// Authentication (read-only): the staff bearer comes from settingsStaffToken
// (settings-harness): the token stored for this worker under e2e/.auth while
// the backend accepts it and the storageState the inherited staffPage loads
// holds it with at least 15 minutes left, otherwise a freshly minted one. It
// must belong to this worker's staff address and not be admin/support. The
// admin auth fixture is blocked. A browser token refresh would be a non-GET
// /auth request, which the network policy blocks and reports. The readOnlyTest
// identity guard is unchanged.
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page, Route } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type DebugWindow,
    ORIGINS,
    type Settings,
    clearOrganisationCache,
    expectSafe,
    guardedStaffTest as test,
    protectNetwork,
    syntheticOrg,
    syntheticOrgRoutes,
    validPeriod,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone id starts with this prefix. */
const ORG = syntheticOrg('e2e-schedule-driver-', { params: 'zones' });
const { BUILDING, ORGANISATION, hasParams } = ORG;
// Exact single-zone metadata names: the organisation's translation overrides
// for the pinned and the default locale (locale.service.ts).
const ZONE_METADATA: Record<string, string[]> = {
    [ORGANISATION]: ['locale_en-AU', 'locale_en-US'],
};
// Controls, not covered settings. global_search and chat keep the topbar's
// loaders off; has_assets=false is the AssetStateService network gate;
// auto_release.resources=[] keeps _checkCancel from querying bookings
// (schedule-state.service.ts).
const CONTROLS: Settings = {
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.has_assets': false,
    'app.auto_release': { resources: [] },
};

/** Exact synthetic GET fixtures for the schedule page. */
async function syntheticGets(page: Page) {
    let event_requests = 0;
    let desk_booking_requests = 0;
    await syntheticOrgRoutes(page, ORG, {
        label: 'Schedule Driver',
        zone_metadata: ZONE_METADATA,
    });
    // The `api` loader's queryEvents (events.use_bookings is false). Counted:
    // only the `api` source issues it.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/events' &&
            validPeriod(url, { strict: false }) &&
            hasParams(url, {
                period_start: url.searchParams.get('period_start')!,
                period_end: url.searchParams.get('period_end')!,
            }),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            event_requests += 1;
            await route.fulfill({ json: [] });
        },
    );
    // The desk bookings GET from the same debounced query as the events GET
    // (_loadBookingType / _loadApiEvents), counted as the anchor.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'desk' &&
            validPeriod(url, { strict: false }),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            desk_booking_requests += 1;
            await route.fulfill({ json: [] });
        },
    );
    return {
        events: () => event_requests,
        deskBookings: () => desk_booking_requests,
    };
}

function scheduleSettings(use_driver: boolean, use_websocket: boolean): Settings {
    return {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        // `desks` adds the desk bookings GET used as the anchor.
        'app.features': ['spaces', 'desks'],
        'app.feature_groups': {},
        'app.events.use_bookings': false,
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        // Empty, so the legacy fallback is the branch under test.
        'app.schedule.event_sources': [],
        'app.schedule.use_websocket': use_websocket,
        'app.schedule.use_driver': use_driver,
    };
}

async function openSchedule(page: Page, use_driver: boolean, use_websocket: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, scheduleSettings(use_driver, use_websocket));
    const counters = await syntheticGets(page);
    await page.goto('/#/your-bookings?view=day');
    await expect(page.locator('app-schedule')).toBeVisible({
        timeout: 30_000,
    });
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    return { audit, counters };
}

/** The effective values of the keys that decide the event source. */
function sourceSettings(page: Page) {
    return page.evaluate(() => {
        const setting = (window as DebugWindow).setting;
        return {
            event_sources: setting?.('app.schedule.event_sources'),
            use_driver: setting?.('app.schedule.use_driver'),
            use_websocket: setting?.('app.schedule.use_websocket'),
        };
    });
}

type ScheduleSourceState = { sources: string[]; query_ready: boolean };

/**
 * Read-only probe of ScheduleStateService through the app-schedule
 * component's `_state` (schedule-state.service.ts).
 * GET /api/staff/v1/events is issued only by `_loadApiEvents`, which runs once
 * `_query_params_debounced` has a value and returns early unless the sources
 * include `api`. Absence is therefore read from this state, not from waiting.
 * Fails closed if the signals are unavailable.
 */
function scheduleSourceState(page: Page): Promise<ScheduleSourceState> {
    return page.locator('app-schedule').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  _state?: {
                      _event_sources?: () => string[];
                      _query_params_debounced?: { value: () => unknown };
                  };
              }
            | undefined;
        const state = component?._state;
        if (!state?._event_sources || !state._query_params_debounced) {
            throw new Error('schedule state signals are unavailable');
        }
        return {
            sources: [...state._event_sources()],
            query_ready: !!state._query_params_debounced.value(),
        };
    });
}

// use_driver true with and without use_websocket: the source is `driver` either
// way, so use_driver wins over use_websocket. A `ws` result would also request
// the building's spaces, which this spec does not serve, so the network guard
// fails it.
const SCENARIOS = [
    {
        label: 'true',
        use_driver: true,
        use_websocket: false,
        source: 'driver',
        events: false,
        message: 'the driver source must not request /staff/v1/events',
    },
    {
        label: 'true with use_websocket true',
        use_driver: true,
        use_websocket: true,
        source: 'driver',
        events: false,
        message: 'use_driver must take priority over use_websocket',
    },
];

for (const scenario of SCENARIOS) {
    test(`schedule.use_driver ${scenario.label} selects the ${scenario.source} event source`, async ({
        staffPage,
    }) => {
        const { audit, counters } = await openSchedule(
            staffPage,
            scenario.use_driver,
            scenario.use_websocket,
        );
        await expect
            .poll(() => sourceSettings(staffPage), {
                message: 'effective schedule source settings',
            })
            .toStrictEqual({
                event_sources: [],
                use_driver: scenario.use_driver,
                use_websocket: scenario.use_websocket,
            });
        await expect
            .poll(() => scheduleSourceState(staffPage), {
                message: 'schedule event sources and debounced query',
            })
            .toEqual({ sources: [scenario.source], query_ready: true });
        // Anchor: the desk bookings GET for the same debounced query has been
        // sent, so the events effect has already run for it.
        await expect
            .poll(() => counters.deskBookings(), {
                message: 'desk bookings GET from the same debounced query',
            })
            .toBeGreaterThan(0);
        expect(counters.events() > 0, scenario.message).toBe(scenario.events);
        await expect(staffPage.locator('schedule-day-view')).toBeVisible();
        await expect(staffPage.locator('schedule-success')).toHaveCount(0);
        // Re-checked after the view settled: still no request for `driver`.
        expect(counters.events() > 0, scenario.message).toBe(scenario.events);
        await expectSafe(audit);
    });
}
