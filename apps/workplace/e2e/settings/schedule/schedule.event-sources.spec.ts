// Coverage: 1 unique setting, 2 scenarios.
// Setting: schedule.event_sources (source:
//   apps/workplace/src/app/schedule/schedule-state.service.ts:265-287,438-443,652-674,800-816).
// Status: PASS (2/2, 2026-10-22, isolated local E2E backend).
//
// With app.features containing `spaces`, the schedule can load events. The
// `api` source issues GET /api/staff/v1/events when events.use_bookings is
// false; the `driver` source does not. The page is opened read-only; the events
// API is answered by an empty browser fixture and no event is created.
import type { Page, Route } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

type WsAudit = { unexpected: string[]; control: string[] };
const test = readOnlyTest.extend<{ wsAudit: WsAudit }>({
    wsAudit: [
        async ({ staffPage }, use) => {
            const audit: WsAudit = { unexpected: [], control: [] };
            const closing: Promise<void>[] = [];
            await staffPage.context().routeWebSocket('**/*', (socket) => {
                const url = new URL(socket.url());
                const app = new URL(APP_URL);
                const local =
                    url.host === app.host &&
                    url.protocol ===
                        (app.protocol === 'https:' ? 'wss:' : 'ws:');
                if (
                    local &&
                    url.pathname === '/' &&
                    [...url.searchParams.keys()].join(',') === 'token'
                )
                    return;
                if (
                    local &&
                    url.pathname === '/api/engine/v2/systems/control'
                ) {
                    audit.control.push(url.pathname);
                } else {
                    audit.unexpected.push(url.href);
                }
                closing.push(socket.close().catch(() => undefined));
            });
            await use(audit);
            await Promise.all(closing);
            expect(
                audit.unexpected,
                'no unexpected WebSocket connections',
            ).toEqual([]);
        },
        { auto: true, timeout: 15_000 },
    ],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

async function getOnly(
    page: Page,
    match: (url: URL) => boolean,
    body: (url: URL) => unknown,
) {
    await page.route(
        (url) => ORIGINS.has(url.origin) && match(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({ json: body(new URL(route.request().url())) });
        },
    );
}

const CATEGORIES = [
    { id: 'e2e-schedule-sources-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-schedule-sources-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-schedule-sources-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-schedule-sources-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-schedule-sources-catering': [],
    'e2e-schedule-sources-desks': ['_DESKS_'],
    'e2e-schedule-sources-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-schedule-sources-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['spaces'],
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
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let events_requests = 0;
    let booking_requests = 0;
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' &&
            url.searchParams.get('limit') === '500',
        () => CATEGORIES,
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('limit') === '500' &&
            Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''),
        (url) =>
            TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: 'e2e-schedule-sources-type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            (url.searchParams.get('type_id') ?? '').startsWith(
                'e2e-schedule-sources-type-',
            ),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) && url.pathname === '/api/staff/v1/events',
        async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            events_requests += 1;
            await route.fulfill({ json: [] });
        },
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/bookings',
        () => {
            booking_requests += 1;
            return [];
        },
    );
    const settings = {
        ...BASE,
        'app.schedule.event_sources': [source],
    };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    await page.goto('/#/your-bookings?view=day');
    await expect(page.locator('app-schedule')).toBeVisible({
        timeout: 30_000,
    });
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    for (const [key, value] of [
        ['app.features', settings['app.features']],
        ['app.events.use_bookings', false],
        ['app.schedule.event_sources', [source]],
    ] as const) {
        await expect
            .poll(
                () =>
                    page.evaluate(
                        (name) => (window as DebugWindow).setting?.(name),
                        key,
                    ),
                { message: 'effective setting ' + key },
            )
            .toEqual(value);
    }
    return { events: () => events_requests, bookings: () => booking_requests };
}

type ScheduleSourceState = { sources: string[]; query_ready: boolean };

/**
 * Read-only probe of ScheduleStateService through the app-schedule
 * component's `_state` (schedule-state.service.ts:438-440,652-679,800-816).
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
// for the driver scenario. Kept as data so the test body has no branches.
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
