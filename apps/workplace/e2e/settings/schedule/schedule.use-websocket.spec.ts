// Coverage: 1 unique Setting. Exact key: app.schedule.use_websocket.
// Scenarios: 2. use_websocket true selects the `ws` source; false falls back
// to the `api` source.
// Scope: which schedule event source is selected and the request that source
// makes. WebSocket-driven event rendering is not asserted: it needs real space
// modules and bindings, and every live socket is refused here.
// Docs: docs/settings/workplace.md.
//
// Source: schedule-state.service.ts uses the legacy flags only while
// app.schedule.event_sources is empty: use_driver -> 'driver', otherwise
// use_websocket -> 'ws', otherwise 'api'. The `ws` loader requests
// the building's bookable spaces; the `api` loader requests
// /staff/v1/events because events.use_bookings is false. event_sources is set
// to [] explicitly so the fallback is always the branch under test, and
// use_driver is pinned false so it cannot win.
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
const ORG = syntheticOrg('e2e-schedule-ws-', { params: 'zones' });
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

type Counters = { spaces: () => number; events: () => number };

/** Exact synthetic GET fixtures for the schedule page. */
async function syntheticGets(page: Page): Promise<Counters> {
    let space_requests = 0;
    let event_requests = 0;
    await syntheticOrgRoutes(page, ORG, {
        label: 'Schedule WS',
        zone_metadata: ZONE_METADATA,
    });
    // The `ws` loader's requestSpacesForZone(building). Counted: only the
    // `ws` source issues it. No space is returned, so no Bookings binding is
    // created.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: BUILDING,
                limit: '500',
                signage: 'false',
            }),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            space_requests += 1;
            await route.fulfill({ json: [] });
        },
    );
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
    return { spaces: () => space_requests, events: () => event_requests };
}

function scheduleSettings(use_websocket: boolean): Settings {
    return {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.events.use_bookings': false,
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        // Empty, so the legacy fallback is the branch under test.
        'app.schedule.event_sources': [],
        'app.schedule.use_driver': false,
        'app.schedule.use_websocket': use_websocket,
    };
}

async function openSchedule(page: Page, use_websocket: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, scheduleSettings(use_websocket));
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

// The `ws` scenario must request the building's spaces and not the events;
// the `api` scenario is its positive control and does the reverse.
const SCENARIOS = [
    { use_websocket: true, source: 'ws', spaces: true, events: false },
    { use_websocket: false, source: 'api', spaces: false, events: true },
];

for (const scenario of SCENARIOS) {
    test(`schedule.use_websocket ${scenario.use_websocket} selects the ${scenario.source} event source`, async ({
        staffPage,
    }) => {
        const { audit, counters } = await openSchedule(
            staffPage,
            scenario.use_websocket,
        );
        await expect
            .poll(() => sourceSettings(staffPage), {
                message: 'effective schedule source settings',
            })
            .toStrictEqual({
                event_sources: [],
                use_driver: false,
                use_websocket: scenario.use_websocket,
            });
        await expect
            .poll(() => scheduleSourceState(staffPage), {
                message: 'schedule event sources and debounced query',
            })
            .toEqual({ sources: [scenario.source], query_ready: true });
        // The positive signal of each source arrives first; the other
        // source's loader returned early once the sources above were set.
        await expect
            .poll(() => counters.spaces() > 0 || counters.events() > 0, {
                message: 'the selected source made its request',
            })
            .toBe(true);
        expect(counters.spaces() > 0, 'building space list request').toBe(
            scenario.spaces,
        );
        expect(counters.events() > 0, '/staff/v1/events request').toBe(
            scenario.events,
        );
        await expect(staffPage.locator('schedule-day-view')).toBeVisible();
        await expect(staffPage.locator('schedule-success')).toHaveCount(0);
        await expectSafe(audit);
    });
}
