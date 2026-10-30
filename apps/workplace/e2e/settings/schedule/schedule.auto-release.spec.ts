// Coverage: 4 unique Settings. Exact keys: app.auto_release.time_after,
// app.auto_release.time_before, app.auto_release.resources,
// app.auto_release.all_day_start.
// Scenarios: 8 (two per Setting).
//   1. time_after 10: booking T (started 20 min ago) is skipped; only the
//      control C prompts. The release query covers 10 minutes.
//   2. time_after 60: T, then C, prompt. The release query covers 60 minutes.
//   3. time_before 0: booking A (starts in 30 min) is skipped; only C prompts.
//      The release query covers 60 minutes.
//   4. time_before 60: A, then C, prompt. The release query covers 120 minutes.
//   5. all_day_start at the current hour: the all-day booking, then C, prompt.
//   6. all_day_start two hours away: the all-day booking is skipped; only C
//      prompts.
//   7. resources ['desk']: the desk release query runs and C prompts.
//   8. resources ['parking']: only the parking release query runs (empty); no
//      desk release query and no prompt.
// Scope: the automatic-release prompt on the day schedule
// (/#/your-bookings?view=day). Every prompt is closed with its cancel button;
// Keep is never pressed and no booking is changed.
// Docs: docs/settings/workplace.md.
//
// Source: apps/workplace/src/app/schedule/schedule-state.service.ts
// runs _checkCancel when the schedule network starts and every 60 s.
// _checkCancel needs a user id, a user location in AWAY_LOCATIONS (`wfh`,
// `aol` or `sick`; an unset work preference reads as `ooo` and disables it),
// time_after or time_before, and `resources` naming a type whose feature is on
// For each type it issues one GET bookings with exactly
// period_start=startOfMinute(now), period_end=now+(time_after||5)+min(60,
// time_before) and type (libs/bookings/src/lib/bookings.fn.ts), which
// is told apart from the schedule listing by the listing's extra flags.
// Each returned booking prompts only while
// 0 <= start + time_after - now <= time_after + min(60, time_before), where an
// all-day booking starts at all_day_start; the loop awaits each prompt before
// checking the next booking. Closing the prompt with its mat-dialog-close
// button resolves without `done` (libs/components/src/lib/confirm-modal.component.ts),
// so the booking is only added to _ignore_cancel; only Keep
// calls setBookingCheckedIn. The bookings are returned in a fixed order with an
// always-eligible control C last, so the expected prompt SEQUENCE proves both
// what prompts and what is skipped, without a timed wait.
//
// Clock: page.clock.setFixedTime fixes Date at a half hour at or just before
// the real time, before the first navigation. Timers still run, so the 60 s
// check interval is real. Being at or before the real time keeps the stored
// token's expiry in the future for the app.
//
// Identity: the real users/current response is fetched unchanged (one local
// GET), and only in this browser gets one work_overrides entry for the fixed
// day: a 0-24 block with location `wfh`. Its id, email, sys_admin and support
// are untouched, so the readOnlyTest identity guard still checks the real staff
// user. The app derives the user's location from work_overrides first, then
// work_preferences (StaffUser.work_preference/location_time), defaulting to
// `ooo`. Each scenario recomputes that location for the fixed time from the
// observed response and fails unless it is in AWAY_LOCATIONS, because the
// check would otherwise be disabled for a reason outside the setting. Nothing
// is written to the backend.
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
// request, including any check-in, cancellation or other booking write, any
// non-GET request to a local non-API path (including /auth/) and any external
// request is recorded and aborted, and fails the scenario.
import type { Page, Route } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly, staffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { BULK_METADATA, clearOrganisationCache, expectSafe, protectNetwork, type Settings, guardedStaffTest as test } from '../support/settings-harness';
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

test.use({ readOnlyTimezone: 'Etc/UTC' });
// The first check can wait for the 60 s interval if the user has not loaded
// when the schedule network starts, so allow for one interval.
test.describe.configure({ timeout: 150_000 });

/** Every synthetic zone and asset id starts with this prefix. */
const PREFIX = 'e2e-auto-release-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
const HIDDEN_CATEGORIES = [
    { id: PREFIX + 'catering', name: '_CATERING_', hidden: true },
    { id: PREFIX + 'desks', name: '_DESKS_', hidden: true },
    { id: PREFIX + 'parking', name: '_PARKING_', hidden: true },
    { id: PREFIX + 'lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    [PREFIX + 'catering']: [],
    [PREFIX + 'desks']: ['_DESKS_'],
    [PREFIX + 'parking']: [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    [PREFIX + 'lockers']: ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const HIDDEN_TYPE_IDS = Object.values(HIDDEN_TYPES)
    .flat()
    .map((name) => PREFIX + 'type-' + name);
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: ['desk_booking_rules', 'parking_booking_rules'],
    [ORGANISATION]: [
        'locale_en-AU',
        'locale_en-US',
        'room_alerts',
        'points-of-interest',
    ],
};

const MINUTE = 60_000;
/**
 * The fixed browser time: the latest half hour at or before the real time, so
 * the arithmetic below always starts at hh:30 and the time is never ahead of
 * the real clock.
 */
const NOW = (() => {
    const real = Date.now();
    const half = new Date(real);
    half.setUTCMinutes(30, 0, 0);
    return half.valueOf() <= real
        ? half.valueOf()
        : half.valueOf() - 60 * MINUTE;
})();
const NOW_S = NOW / 1000;
/** UTC hour of the fixed time (the browser runs in Etc/UTC). */
const HOUR = new Date(NOW).getUTCHours();
/** An all_day_start that puts the all-day booking outside every window. */
const AWAY_HOUR = HOUR >= 2 ? HOUR - 2 : HOUR + 2;
const DAY_START = Date.UTC(
    new Date(NOW).getUTCFullYear(),
    new Date(NOW).getUTCMonth(),
    new Date(NOW).getUTCDate(),
);

type SyntheticBooking = {
    id: string;
    name: string;
    start: number;
    end: number;
    all_day: boolean;
};
/** Timed desk booking that started 20 minutes ago (60 minutes long). */
const T: SyntheticBooking = {
    id: PREFIX + 'started',
    name: 'Auto Release Started Desk',
    start: NOW - 20 * MINUTE,
    end: NOW + 40 * MINUTE,
    all_day: false,
};
/** Timed desk booking that starts in 30 minutes. */
const A: SyntheticBooking = {
    id: PREFIX + 'ahead',
    name: 'Auto Release Ahead Desk',
    start: NOW + 30 * MINUTE,
    end: NOW + 90 * MINUTE,
    all_day: false,
};
/** All-day desk booking for the fixed day; it starts at all_day_start. */
const AD: SyntheticBooking = {
    id: PREFIX + 'all-day',
    name: 'Auto Release All Day Desk',
    start: DAY_START,
    end: DAY_START + 24 * 60 * MINUTE,
    all_day: true,
};
/** Control: starts now, so it is inside every window used below. */
const C: SyntheticBooking = {
    id: PREFIX + 'control',
    name: 'Auto Release Control Desk',
    start: NOW,
    end: NOW + 60 * MINUTE,
    all_day: false,
};

// Controls, not covered settings. desks and parking are on so both resource
// types can load (schedule-state.service.ts); event_sources api with
// use_bookings false keeps the room source on /staff/v1/events.
const CONTROLS: Settings = {
    'app.has_assets': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.features': ['spaces', 'desks', 'parking'],
    'app.feature_groups': {},
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.default_building': BUILDING,
};

function hasParams(url: URL, expected: Record<string, string>) {
    const keys = [...url.searchParams.keys()].filter(
        (key) =>
            !(
                url.pathname === '/api/engine/v2/zones' &&
                key === 'authority_id'
            ),
    );
    return (
        keys.length === Object.keys(expected).length &&
        Object.entries(expected).every(
            ([key, value]) => url.searchParams.get(key) === value,
        )
    );
}

/** Numeric seconds, in increasing order; no malformed period is hidden. */
function validPeriod(url: URL) {
    const start = url.searchParams.get('period_start') ?? '';
    const end = url.searchParams.get('period_end') ?? '';
    return (
        /^\d+$/.test(start) && /^\d+$/.test(end) && Number(end) > Number(start)
    );
}

/** The release check's query: exactly period and type, starting now. */
function releaseQuery(url: URL) {
    const period_start = url.searchParams.get('period_start')!;
    return (
        Number(period_start) === NOW_S &&
        hasParams(url, {
            period_start,
            period_end: url.searchParams.get('period_end')!,
            type: url.searchParams.get('type') ?? '',
        })
    );
}

/** The schedule's own listing query (schedule-state.service.ts). */
function listingQuery(url: URL) {
    return ['desk', 'parking'].some((type) =>
        hasParams(url, {
            period_start: url.searchParams.get('period_start')!,
            period_end: url.searchParams.get('period_end')!,
            type,
            include_checked_out: 'true',
            include_booked_by: 'true',
            include_deleted: 'true',
            deleted: 'true',
        }),
    );
}

/** ParkingService's own day lists for the user; always empty. */
function parkingQuery(url: URL) {
    const base = {
        type: 'parking',
        period_start: url.searchParams.get('period_start')!,
        period_end: url.searchParams.get('period_end')!,
    };
    return (
        hasParams(url, base) ||
        hasParams(url, {
            ...base,
            email: staffEmail(test.info().parallelIndex),
        })
    );
}

/** Hidden assets may only be read in this synthetic organisation. */
function hiddenAssetQuery(url: URL) {
    const type_id = url.searchParams.get('type_id') ?? '';
    const zone_id = url.searchParams.get('zone_id') ?? '';
    return (
        HIDDEN_TYPE_IDS.includes(type_id) &&
        ZONES.includes(zone_id) &&
        hasParams(url, { type_id, zone_id, limit: '500' })
    );
}

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

type Identity = {
    id?: string;
    work_preferences?: {
        day_of_week?: number;
        blocks?: {
            start_time?: number;
            end_time?: number;
            location?: string;
        }[];
    }[];
    work_overrides?: Record<
        string,
        {
            blocks?: {
                start_time?: number;
                end_time?: number;
                location?: string;
            }[];
        }
    >;
};

/**
 * The app's own identity GET, as served to the app (with the away override
 * from awayIdentity). Resolves to null when no identity arrives in time, so
 * callers fail closed.
 */
function watchIdentity(page: Page): Promise<Identity | null> {
    return page
        .waitForResponse(
            (response) => {
                const url = new URL(response.url());
                return (
                    ORIGINS.has(url.origin) &&
                    url.pathname === '/api/engine/v2/users/current' &&
                    response.request().method() === 'GET' &&
                    response.ok()
                );
            },
            { timeout: 15_000 },
        )
        .then((response) => response.json() as Promise<Identity>)
        .catch(() => null);
}

/**
 * The location the app derives for `user` at `time`, mirroring
 * StaffUser.work_preference/location_time (user.class.ts) in UTC,
 * the browser's timezone here: an override for the date first, then the
 * weekly preference, otherwise `ooo`.
 */
function locationAt(user: Identity, time: number) {
    const date = new Date(time);
    const hours = date.getUTCHours() + date.getUTCMinutes() / 60;
    const day = date.toISOString().slice(0, 10);
    const covers = (block: { start_time?: number; end_time?: number }) =>
        (block.start_time ?? Infinity) <= hours &&
        (block.end_time ?? -Infinity) >= hours;
    const override = (user.work_overrides?.[day]?.blocks ?? []).find(covers);
    if (override) return override.location || 'ooo';
    const weekly = (user.work_preferences ?? [])
        .filter((pref) => pref.day_of_week === date.getUTCDay())
        .flatMap((pref) => pref.blocks ?? [])
        .find(covers);
    return weekly?.location || 'ooo';
}

/** Locations that enable the release check (schedule-state.service.ts AWAY_LOCATIONS). */
const AWAY_LOCATIONS = ['wfh', 'aol', 'sick'];

/**
 * Serve the real identity with one browser-only work override that marks the
 * whole fixed day as `wfh`. The real response is fetched with one local GET
 * (no redirects) and only extended; a failed fetch is passed through, so the
 * precondition fails closed. Nothing is written to the backend.
 */
async function awayIdentity(page: Page) {
    const day = new Date(NOW).toISOString().slice(0, 10);
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/users/current',
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const response = await route.fetch({ maxRedirects: 0 });
            if (!response.ok()) return route.fulfill({ response });
            const user = (await response.json()) as Identity &
                Record<string, unknown>;
            // Status and JSON only: the original Content-Length would not match.
            await route.fulfill({
                status: response.status(),
                json: {
                    ...user,
                    work_overrides: {
                        ...(user.work_overrides ?? {}),
                        [day]: {
                            blocks: [
                                { start_time: 0, end_time: 24, location: 'wfh' },
                            ],
                        },
                    },
                },
            });
        },
    );
}

/** One release query as received: its type and covered minutes. */
type ReleaseQuery = { type: string; minutes: number };

/** Exact synthetic GET fixtures for the day schedule. */
async function syntheticGets(
    page: Page,
    identity: Promise<Identity | null>,
    desk_bookings: SyntheticBooking[],
) {
    const release_queries: ReleaseQuery[] = [];
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Auto Release Organisation',
                display_name: 'Auto Release Organisation',
                tags: ['org'],
            },
        ],
    );
    await getOnly(
        page,
        (url) => {
            const match = /^\/api\/engine\/v2\/metadata\/([^/]+)\/bulk$/.exec(
                url.pathname,
            );
            const ids = (url.searchParams.get('parent_ids') ?? '').split(',');
            return (
                !!match &&
                BULK_METADATA.includes(match[1]) &&
                url.searchParams.has('parent_ids') &&
                hasParams(url, {
                    parent_ids: url.searchParams.get('parent_ids')!,
                }) &&
                ids.every((id) => ZONES.includes(id))
            );
        },
        (url) =>
            Object.fromEntries(
                url.searchParams
                    .get('parent_ids')!
                    .split(',')
                    .map((id) => [id, { details: {} }]),
            ),
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, {
                tags: 'region',
                parent_id: ORGANISATION,
                limit: '200',
            }),
        () => [
            {
                id: REGION,
                name: 'Auto Release Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, {
                tags: 'building',
                parent_id: REGION,
                limit: '500',
            }),
        () => [
            {
                id: BUILDING,
                parent_id: REGION,
                name: 'Auto Release Building',
                display_name: 'Auto Release Building',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'level', limit: '2500' }),
        () => [
            {
                id: LEVEL,
                parent_id: BUILDING,
                name: 'Auto Release Level',
                display_name: 'Auto Release Level',
                tags: ['level'],
            },
        ],
    );
    await getOnly(
        page,
        (url) => {
            const id = url.pathname.split('/')[5] ?? '';
            const name = url.searchParams.get('name') ?? '';
            return (
                url.pathname === '/api/engine/v2/metadata/' + id &&
                Object.hasOwn(ZONE_METADATA, id) &&
                ZONE_METADATA[id].includes(name) &&
                hasParams(url, { name })
            );
        },
        (url) => {
            const id = url.pathname.split('/')[5];
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    id,
                    name,
                    details: name.endsWith('_booking_rules') ? [] : {},
                },
            };
        },
    );
    await getOnly(
        page,
        (url) =>
            url.pathname ===
                '/api/engine/v2/metadata/' + BUILDING + '/children' &&
            hasParams(url, { name: 'desks' }),
        () => [],
    );
    // The signed-in user's own metadata, answered only for the id the app's
    // own identity GET returned.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            ['settings', 'contacts'].some((name) => hasParams(url, { name })),
        async (route: Route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.fallback();
            const id = decodeURIComponent(
                new URL(request.url()).pathname.split('/')[5],
            );
            if (!id || id !== (await identity)?.id) return route.fallback();
            const name = new URL(request.url()).searchParams.get('name')!;
            await route.fulfill({
                json: {
                    [name]: {
                        name,
                        description: '',
                        details: name === 'contacts' ? [] : {},
                    },
                },
            });
        },
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/groups/current' &&
            hasParams(url, {}),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            (hasParams(url, { zone_id: ORGANISATION, limit: '5000' }) ||
                hasParams(url, {
                    zone_id: BUILDING,
                    limit: '500',
                    signage: 'false',
                })),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            hasParams(url, { hidden: 'true', limit: '500' }),
        () => HIDDEN_CATEGORIES,
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            Object.hasOwn(
                HIDDEN_TYPES,
                url.searchParams.get('category_id') ?? '',
            ) &&
            hasParams(url, {
                category_id: url.searchParams.get('category_id')!,
                limit: '500',
            }),
        (url) =>
            HIDDEN_TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: PREFIX + 'type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' && hiddenAssetQuery(url),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && hasParams(url, {}),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/events' &&
            validPeriod(url) &&
            hasParams(url, {
                period_start: url.searchParams.get('period_start')!,
                period_end: url.searchParams.get('period_end')!,
            }),
        () => [],
    );
    // Bookings: the release query (recorded; desk answers with the scenario's
    // bookings that overlap the queried period, in their fixed order), the
    // schedule listing and ParkingService's own lists (both empty).
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url) &&
            (releaseQuery(url) || listingQuery(url) || parkingQuery(url)),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const url = new URL(route.request().url());
            if (!releaseQuery(url)) return route.fulfill({ json: [] });
            const type = url.searchParams.get('type')!;
            const start = Number(url.searchParams.get('period_start')) * 1000;
            const end = Number(url.searchParams.get('period_end')) * 1000;
            release_queries.push({ type, minutes: (end - start) / MINUTE });
            const list = type === 'desk' ? desk_bookings : [];
            await route.fulfill({
                json: list
                    .filter(
                        (booking) => booking.start < end && booking.end > start,
                    )
                    .map((booking) => ({
                        id: booking.id,
                        booking_type: 'desk',
                        type: 'desk',
                        asset_id: booking.id,
                        asset_name: booking.name,
                        title: booking.name,
                        booking_start: booking.start / 1000,
                        booking_end: booking.end / 1000,
                        all_day: booking.all_day,
                        timezone: 'UTC',
                        approved: true,
                        checked_in: false,
                        rejected: false,
                        deleted: false,
                        zones: [ORGANISATION, REGION, BUILDING, LEVEL],
                        extension_data: {},
                    })),
            });
        },
    );
    return () => [...release_queries];
}

type AutoRelease = {
    time_after: number;
    time_before: number;
    resources: string[];
    all_day_start: number;
};

async function openSchedule(
    page: Page,
    auto_release: AutoRelease,
    desk_bookings: SyntheticBooking[],
) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    // Fix Date before the app loads; timers keep running.
    await page.clock.setFixedTime(NOW);
    await clearOrganisationCache(page);
    await useSettings(page, {
        ...READ_ONLY_SETTINGS,
        ...CONTROLS,
        'app.auto_release': auto_release,
    });
    await awayIdentity(page);
    const identity = watchIdentity(page);
    const releaseQueries = await syntheticGets(page, identity, desk_bookings);
    await page.goto('/#/your-bookings?view=day');
    await expect(page.locator('app-schedule')).toBeVisible({
        timeout: 30_000,
    });
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    return { audit, identity, releaseQueries };
}

function releaseSettings(page: Page) {
    return page.evaluate(() => {
        const setting = (window as DebugWindow).setting;
        return {
            auto_release: setting?.('app.auto_release'),
            features: setting?.('app.features'),
            now: Date.now(),
        };
    });
}

type Scenario = {
    label: string;
    auto_release: AutoRelease;
    desk_bookings: SyntheticBooking[];
    /** Prompts in the order they must open, by booking name. */
    prompts: string[];
    /** Release queries in the order they must arrive. */
    queries: ReleaseQuery[];
};

const BASE: AutoRelease = {
    time_after: 60,
    time_before: 0,
    resources: ['desk'],
    all_day_start: HOUR,
};

// Each Setting has two scenarios that differ only in that field. The control
// C is eligible in every desk scenario, so the first prompt names the first
// eligible booking and a skipped booking is proven by C prompting first. Kept
// as data so the test body has no branches.
const SCENARIOS: Scenario[] = [
    {
        label: 'time_after 10 skips a booking that started 20 minutes ago',
        auto_release: { ...BASE, time_after: 10 },
        desk_bookings: [T, C],
        prompts: [C.name],
        queries: [{ type: 'desk', minutes: 10 }],
    },
    {
        label: 'time_after 60 prompts for a booking that started 20 minutes ago',
        auto_release: { ...BASE, time_after: 60 },
        desk_bookings: [T, C],
        prompts: [T.name, C.name],
        queries: [{ type: 'desk', minutes: 60 }],
    },
    {
        label: 'time_before 0 skips a booking that starts in 30 minutes',
        auto_release: { ...BASE, time_before: 0 },
        desk_bookings: [A, C],
        prompts: [C.name],
        queries: [{ type: 'desk', minutes: 60 }],
    },
    {
        label: 'time_before 60 prompts for a booking that starts in 30 minutes',
        auto_release: { ...BASE, time_before: 60 },
        desk_bookings: [A, C],
        prompts: [A.name, C.name],
        queries: [{ type: 'desk', minutes: 120 }],
    },
    {
        label: 'all_day_start at the current hour prompts for an all-day booking',
        auto_release: { ...BASE, all_day_start: HOUR },
        desk_bookings: [AD, C],
        prompts: [AD.name, C.name],
        queries: [{ type: 'desk', minutes: 60 }],
    },
    {
        label: 'all_day_start two hours away skips an all-day booking',
        auto_release: { ...BASE, all_day_start: AWAY_HOUR },
        desk_bookings: [AD, C],
        prompts: [C.name],
        queries: [{ type: 'desk', minutes: 60 }],
    },
    {
        label: "resources ['desk'] queries desk bookings and prompts",
        auto_release: { ...BASE, resources: ['desk'] },
        desk_bookings: [C],
        prompts: [C.name],
        queries: [{ type: 'desk', minutes: 60 }],
    },
    {
        label: "resources ['parking'] queries only parking and does not prompt",
        auto_release: { ...BASE, resources: ['parking'] },
        desk_bookings: [C],
        prompts: [],
        queries: [{ type: 'parking', minutes: 60 }],
    },
];

for (const scenario of SCENARIOS) {
    test(`auto_release.${scenario.label}`, async ({ staffPage }) => {
        const { audit, identity, releaseQueries } = await openSchedule(
            staffPage,
            scenario.auto_release,
            scenario.desk_bookings,
        );
        await expect
            .poll(() => releaseSettings(staffPage), {
                message: 'effective auto_release, features and fixed time',
            })
            .toStrictEqual({
                auto_release: scenario.auto_release,
                features: CONTROLS['app.features'],
                now: NOW,
            });
        // Precondition from the served identity: the check is enabled only
        // while the user is away (AWAY_LOCATIONS) at the fixed time.
        const user = await identity;
        expect(
            user,
            'the app must load the real staff identity',
        ).not.toBeNull();
        expect(
            AWAY_LOCATIONS,
            'staff work location at the fixed time must be wfh, aol or sick',
        ).toContain(locationAt(user ?? {}, NOW));
        // The release check has run once its query arrives (allowing for one
        // 60 s interval if the user was not loaded at network start).
        await expect
            .poll(() => releaseQueries().length, {
                message: 'automatic-release query received',
                timeout: 75_000,
            })
            .toBeGreaterThan(0);
        // The first check's queries, in order. A later 60 s check may repeat
        // them, but never adds another type: every query is one expected.
        expect(
            releaseQueries().slice(0, scenario.queries.length),
        ).toStrictEqual(scenario.queries);
        expect(
            releaseQueries().filter(
                (query) =>
                    !scenario.queries.some(
                        (expected) =>
                            expected.type === query.type &&
                            expected.minutes === query.minutes,
                    ),
            ),
            'no release query for another type or window',
        ).toEqual([]);
        // Prompts open one at a time, in booking order. Each is checked by
        // name and closed with its cancel button; Keep is never pressed.
        const prompt = staffPage.locator('confirm-modal');
        for (const name of scenario.prompts) {
            await expect(prompt.filter({ hasText: name })).toHaveCount(1);
            await expect(prompt).toHaveCount(1);
            await expect(prompt.locator('header h2')).toHaveText(
                'Keep desk booking',
            );
            await prompt.locator('footer button[mat-dialog-close]').click();
            await expect(prompt.filter({ hasText: name })).toHaveCount(0);
        }
        // Every returned booking has been handled, so no prompt remains.
        await expect(prompt).toHaveCount(0);
        await expect(staffPage.locator('schedule-day-view')).toBeVisible();
        await expectSafe(audit);
    });
}
