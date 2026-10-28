// Coverage: 1 unique Setting. Exact key: app.bookings.all_day_period.
// Scenarios: 2.
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
// are asserted unset, so the key under test is the one applied.
// libs/common/src/lib/general.ts applies getAllDayTimeRange with that
// period when All Day turns on. The All Day checkbox is shown only while
// app.visitors.allow_all_day is true
// (visitor-flow-details.component.ts), so that control is pinned true.
// The visit is moved to tomorrow first, so the window is never in the past.
//
// Authentication (fail-closed, read-only): the staff bearer is the one already
// stored for this worker under e2e/.auth. The storageState file the inherited
// staffPage loads must hold that same token with at least 15 minutes left, and
// the token is checked with one GET /api/engine/v2/users/current: it must
// belong to this worker's staff address and not be admin/support. This spec
// never mints, refreshes or writes auth files and never changes token expiry;
// any failure stops the worker. The admin auth fixture is blocked. A browser
// token refresh would be a non-GET /auth request, which the network policy
// blocks and reports. The readOnlyTest identity guard is unchanged.
// Run with --no-deps: the local project's preflight dependency seeds shared
// rows through backend writes (e2e/support/preflight.setup.ts).
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import { request as pwRequest, type Page, type Route } from '@playwright/test';
import { clientId, redirectUriFor } from '../../../../../e2e/support/auth';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
    roleFor,
    staffEmail,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';
import { BULK_METADATA, clearOrganisationCache, expectSafe, type NetworkAudit, PIXEL, protectNetwork, readJson, type Settings, watchStaffId } from '../support/settings-harness';
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

/** Minimum lifetime the stored browser token must still have. */
const MIN_TOKEN_LIFETIME_MS = 15 * 60_000;

/**
 * The staff bearer already stored for this worker, checked read-only. Never
 * mints, refreshes or writes: every failure throws, so the worker stops before
 * any browser opens. The inherited staffPage fixture loads the storageState
 * file checked here (e2e/support/fixtures.ts), so it must hold this same
 * token for the app origin with an expiry far enough ahead that the app never
 * attempts a refresh mid-test.
 */
async function storedStaffToken(workerIndex: number): Promise<string> {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const { email, tokenPath, storagePath } = roleFor('staff', workerIndex);
    const rerun =
        'Refresh e2e/.auth with a separate normal local run (its fixtures mint), then retry this spec with --no-deps.';
    const token = readJson(tokenPath)?.accessToken;
    if (typeof token !== 'string' || !token) {
        throw new Error(
            `Missing or unreadable staff token for worker ${workerIndex}. ${rerun}`,
        );
    }
    const cid = clientId(redirectUriFor(APP_URL));
    const origins = readJson(storagePath)?.origins;
    const app = Array.isArray(origins)
        ? (origins as { origin?: string; localStorage?: unknown }[]).find(
              (entry) => entry.origin === new URL(APP_URL).origin,
          )
        : undefined;
    const items = Array.isArray(app?.localStorage)
        ? (app?.localStorage as { name?: string; value?: string }[])
        : [];
    const stored = new Map(items.map((item) => [item.name, item.value]));
    if (stored.get(cid + '_access_token') !== token) {
        throw new Error(
            `Staff storageState for worker ${workerIndex} does not hold the stored token. ${rerun}`,
        );
    }
    const expires_at = Number(stored.get(cid + '_expires_at'));
    if (!(expires_at > Date.now() + MIN_TOKEN_LIFETIME_MS)) {
        throw new Error(
            `Stored staff token for worker ${workerIndex} expires too soon. ${rerun}`,
        );
    }
    const api = await pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${token}` },
    });
    try {
        const response = await api.get('/api/engine/v2/users/current');
        if (!response.ok()) {
            throw new Error(
                `Stored staff token rejected (HTTP ${response.status()}). ${rerun}`,
            );
        }
        const user = (await response.json()) as {
            email?: string;
            sys_admin?: boolean;
            support?: boolean;
        };
        if (user.email?.toLowerCase() !== email.toLowerCase()) {
            throw new Error(`Stored staff token is not ${email}. ${rerun}`);
        }
        if (user.sys_admin || user.support) {
            throw new Error(`${email} is admin/support; staff-only scenario.`);
        }
    } finally {
        await api.dispose();
    }
    return token;
}

// Fail-closed, read-only staff auth (no tokenFor mint/refresh fallback).
// Browser audits always run in teardown, including on an assertion failure.
const test = readOnlyTest.extend<{ batchAudit: NetworkAudit }>({
    batchAudit: [
        async ({ staffPage }, use) => {
            const audit = await protectNetwork(staffPage);
            try {
                await use(audit);
            } finally {
                // Stop all loaders and sockets before the final audit snapshot.
                await staffPage.context().close();
                await expectSafe(audit);
            }
        },
        { auto: true, timeout: 15_000 },
    ],
    staffToken: [
        async ({}, use, info) => {
            await use(await storedStaffToken(info.parallelIndex));
        },
        { scope: 'worker' },
    ],
    // The inherited admin fixture mints (e2e/support/fixtures.ts).
    // readOnlyTest never requests it; fail closed if anything ever does.
    adminStorageState: [
        async () => {
            throw new Error(
                'Admin auth is not allowed in this read-only spec.',
            );
        },
        { scope: 'worker' },
    ],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone id starts with this prefix. */
const PREFIX = 'e2e-visitor-all-day-';
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

// Controls, not covered settings: every other visitor time setting is held so
// the configured all-day period is the only input to the window.
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

/** Exact synthetic GET fixtures for the visitor invite page. */
async function syntheticGets(page: Page) {
    const staff_id = watchStaffId(page);
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Visitor All Day Organisation',
                display_name: 'Visitor All Day Organisation',
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
                name: 'Visitor All Day Region',
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
                name: 'Visitor All Day Building',
                display_name: 'Visitor All Day Building',
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
                name: 'Visitor All Day Level',
                display_name: 'Visitor All Day Level',
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
            if (!id || id !== (await staff_id)) return route.fallback();
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
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url) &&
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

// Two different windows, so neither can pass on a default. Kept as data so
// the test body has no branches.
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
