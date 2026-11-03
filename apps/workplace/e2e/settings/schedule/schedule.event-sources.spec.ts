// Coverage: 1 unique setting, 2 scenarios.
// Setting: schedule.event_sources (docs/settings/workplace.md; source:
//   apps/workplace/src/app/schedule/schedule-state.service.ts).
//
// With app.features containing `spaces`, the schedule can load events. The
// `api` source issues GET /api/staff/v1/events when events.use_bookings is
// false; the `driver` source does not. The page is opened read-only; the events
// API is answered by an empty browser fixture and no event is created.
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type DebugWindow,
    ORIGINS,
    type Settings,
    getOnly,
    prepareSettings,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    // `desks` gives both scenarios an anchor: the desk bookings GET comes from
    // the same debounced query as the events GET (ScheduleStateService
    // _loadBookingType / _loadApiEvents).
    'app.features': ['spaces', 'desks'],
    'app.feature_groups': {},
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.events.use_bookings': false,
    'app.schedule.use_driver': false,
    'app.schedule.use_websocket': false,
};

async function prepare(page: Page, source: 'api' | 'driver') {
    let events_requests = 0;
    let desk_booking_requests = 0;
    const fixture = await prepareSettings(
        page,
        { 'app.schedule.event_sources': [source] },
        {
            base: BASE,
            hidden: 'e2e-schedule-sources',
            landingRooms: false,
            identity: false,
            routes: async () => {
                await page.route(
                    (url) =>
                        ORIGINS.has(url.origin) &&
                        url.pathname === '/api/staff/v1/events',
                    async (route: Route) => {
                        if (route.request().method() !== 'GET')
                            return route.fallback();
                        events_requests += 1;
                        await route.fulfill({ json: [] });
                    },
                );
                await getOnly(
                    page,
                    (url) => url.pathname === '/api/staff/v1/bookings',
                    (url) => {
                        if (url.searchParams.get('type') === 'desk')
                            desk_booking_requests += 1;
                        return [];
                    },
                );
            },
        },
    );
    await page.goto('/#/your-bookings?view=day');
    await expect(page.locator('app-schedule')).toBeVisible({
        timeout: 30_000,
    });
    await fixture.ready({
        loading: false,
        keys: [
            'app.features',
            'app.events.use_bookings',
            'app.schedule.event_sources',
        ],
    });
    return { events: () => events_requests, deskBookings: () => desk_booking_requests };
}

type ScheduleSourceState = { sources: string[]; query_ready: boolean };

/**
 * Read-only probe of ScheduleStateService through the app-schedule
 * component's `_state` (schedule-state.service.ts).
 * GET /api/staff/v1/events is issued only by `_loadApiEvents`, an effect that
 * runs once `_query_params_debounced` has a value and returns early unless
 * `_event_sources` includes `api`. Seeing the debounced query ready with the
 * sources fixed to the scenario's source establishes which branch that effect
 * takes; absence is not inferred from waiting. Fails closed if the signals are
 * unavailable.
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

// The `api` source requests /staff/v1/events; the `driver` source does not.
// Both use the same state probe, so the api scenario is the positive control
// for the driver scenario.
const SCENARIOS = [
    {
        source: 'api' as const,
        events_requested: true,
        message: 'the api source must request /staff/v1/events',
    },
    {
        source: 'driver' as const,
        events_requested: false,
        message: 'the driver source must not request /staff/v1/events',
    },
];

for (const scenario of SCENARIOS) {
    test(`schedule.event_sources ${scenario.source} selects the schedule event source`, async ({
        staffPage,
    }) => {
        const counters = await prepare(staffPage, scenario.source);
        await expect
            .poll(() => scheduleSourceState(staffPage), {
                message: 'schedule event sources and debounced query',
            })
            .toEqual({ sources: [scenario.source], query_ready: true });
        // Anchor: the desk bookings GET for the same debounced query has been
        // sent, so the events effect has already run for it. Only then is the
        // events count meaningful, including its absence for `driver`.
        await expect
            .poll(() => counters.deskBookings(), {
                message: 'desk bookings GET from the same debounced query',
            })
            .toBeGreaterThan(0);
        await expect
            .poll(() => counters.events() > 0, { message: scenario.message })
            .toBe(scenario.events_requested);
        await expect(staffPage.locator('app-schedule')).toBeVisible();
        await expect(staffPage.locator('schedule-day-view')).toBeVisible();
        await expect(staffPage.locator('schedule-success')).toHaveCount(0);
        // Re-checked after the view settled: still no request for `driver`.
        expect(counters.events() > 0, scenario.message).toBe(
            scenario.events_requested,
        );
    });
}
