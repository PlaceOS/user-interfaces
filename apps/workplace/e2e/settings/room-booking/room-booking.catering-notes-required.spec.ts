// Coverage: 1 unique Setting. Exact key: app.events.catering_notes_required.
// Scenarios: 2.
//   1. true: with a prepared catering order and empty notes the event form's
//      catering_notes field is invalid with a `required` error; filling the
//      notes makes it valid.
//   2. false: the same order with empty notes leaves the field valid.
// Scope: the unsaved meeting form on the options step
// (/#/book/meeting/form?view=2). No order item is added and nothing is
// submitted.
// Source: libs/events/src/lib/event-form.ts makes catering_notes
// required only while the catering list is non-empty and
// app.events.catering_notes_required (or the runtime require_catering_notes
// value) is truthy. require_catering_notes comes from the building's
// `catering-settings` metadata (catering-order-state.service.ts), which
// is answered with empty details, so it is false in both scenarios.
// meeting-flow-options.component.ts shows the catering section only
// when the building has a menu and the notes textarea only while an
// order is present. Every scenario fills the notes and clears them again, so
// both the required and the not-required paths are exercised without a branch.
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
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
    roleFor,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';
import { BULK_METADATA, clearOrganisationCache, expectSafe, type NetworkAudit, protectNetwork, readJson, type Settings, watchStaffId } from '../support/settings-harness';
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

/** Every synthetic zone and asset id starts with this prefix. */
const PREFIX = 'e2e-catering-notes-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
const CATERING_CATEGORY = PREFIX + 'catering';
const CATERING_TYPE_NAME = 'CATERING:Prepared';
const CATERING_TYPE_ID = PREFIX + 'type-' + CATERING_TYPE_NAME;
const CATERING_ITEM = 'Prepared notes sandwich';
const HIDDEN_CATEGORIES = [
    { id: CATERING_CATEGORY, name: '_CATERING_', hidden: true },
    { id: PREFIX + 'desks', name: '_DESKS_', hidden: true },
    { id: PREFIX + 'parking', name: '_PARKING_', hidden: true },
    { id: PREFIX + 'lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    [CATERING_CATEGORY]: [CATERING_TYPE_NAME],
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
// Exact single-zone metadata names: room rules and the catering settings and
// rules for the building, and the organisation's alerts and translations.
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: ['room_booking_rules', 'catering-settings', 'catering_config'],
    [ORGANISATION]: [
        'room_alerts',
        'locale_en-AU',
        'locale_en-US',
        'points-of-interest',
    ],
};
const LIST_METADATA = ['room_booking_rules', 'catering_config'];

const ROOM = {
    id: PREFIX + 'room',
    name: 'Catering Notes Room',
    display_name: 'Catering Notes Room',
    email: 'catering-notes-room@example.invalid',
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
    level: { id: LEVEL, parent_id: BUILDING },
};

// Controls, not covered settings. global_search and chat keep the topbar's
// loaders off; has_assets keeps the assets step out; catering.backend is the
// native (asset-based) menu.
const CONTROLS: Settings = {
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.has_assets': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
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

/** Exact synthetic GET fixtures for the meeting options step with catering. */
async function syntheticGets(page: Page) {
    const staff_id = watchStaffId(page);
    let catering_item_requests = 0;
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Catering Notes Organisation',
                display_name: 'Catering Notes Organisation',
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
                name: 'Catering Notes Region',
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
                name: 'Catering Notes Building',
                display_name: 'Catering Notes Building',
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
                name: 'Catering Notes Level',
                display_name: 'Catering Notes Level',
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
                    details: LIST_METADATA.includes(name) ? [] : {},
                },
            };
        },
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
            hasParams(url, { zone_id: ORGANISATION, limit: '5000' }),
        () => [ROOM],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => [ROOM],
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
    // queryCateringItems (catering-assets.fn.ts): one item for the
    // building's one caterer; every other hidden list is empty.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/assets' &&
            hiddenAssetQuery(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const url = new URL(route.request().url());
            const menu =
                url.searchParams.get('type_id') === CATERING_TYPE_ID &&
                url.searchParams.get('zone_id') === BUILDING;
            catering_item_requests += Number(menu);
            await route.fulfill({
                json: menu
                    ? [
                          {
                              id: PREFIX + 'item',
                              name: CATERING_ITEM,
                              identifier: CATERING_ITEM,
                              asset_type_id: CATERING_TYPE_ID,
                              zone_id: BUILDING,
                              images: [],
                              other_data: {
                                  unit_price: 1250,
                                  category: 'Prepared meals',
                                  tags: [],
                                  options: [],
                                  hide_for_zones: [],
                              },
                          },
                      ]
                    : [],
            });
        },
    );
    // Calendars, events and native room bookings: all empty.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && hasParams(url, {}),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/events' && validPeriod(url),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'room' &&
            validPeriod(url),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/bookings/booked',
        () => [],
    );
    return () => catering_item_requests;
}

function meetingSettings(required: boolean): Settings {
    return {
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
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.events.catering_notes_required': required,
    };
}

async function openOptions(page: Page, required: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, meetingSettings(required));
    // A prepared, browser-only meeting for tomorrow 10:00 UTC with the room
    // and one empty catering order (wrapped in CateringOrder by
    // catering-list-field.component.ts).
    await page.addInitScript((room) => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({
                title: 'Browser-only catering notes meeting',
                date: date.valueOf(),
                date_end: date.valueOf() + 60 * 60_000,
                duration: 60,
                all_day: false,
                resources: [room],
                attendees: [],
                catering: [{ id: 'prepared-order', items: [] }],
            }),
        );
    }, ROOM);
    const menuRequests = await syntheticGets(page);
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    const root = page.locator('meeting-flow-options');
    await expect(root).toBeVisible();
    return { audit, root, menuRequests };
}

function notesSetting(page: Page) {
    return page.evaluate(() =>
        (window as DebugWindow).setting?.('app.events.catering_notes_required'),
    );
}

type NotesState = { valid: boolean; errors: string[] };

/**
 * Read-only probe of the catering_notes field the setting makes required.
 * The options step exposes the event form as `form`
 * (meeting-flow-options.component.ts), a signal-forms FieldTree
 * (event-form.ts). A FieldTree is a callable Proxy: calling a field
 * returns its FieldState (valid(), errors()), while any property, including
 * `call`, resolves as a child field. So the field is read into a variable and
 * called directly, never through an optional call that compiles to `.call()`.
 * Fails closed if the field or its state is unavailable.
 */
function notesState(root: ReturnType<Page['locator']>): Promise<NotesState> {
    return root.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | { form?: { catering_notes?: unknown } }
            | undefined;
        const field = component?.form?.catering_notes;
        if (typeof field !== 'function') {
            throw new Error('catering_notes field is unavailable');
        }
        const state = field() as {
            valid?: () => boolean;
            errors?: () => { kind?: string }[];
        };
        if (typeof state?.valid !== 'function' || !state.errors) {
            throw new Error('catering_notes field state is unavailable');
        }
        return {
            valid: state.valid(),
            errors: state.errors().map((error) => error.kind ?? ''),
        };
    });
}

const NOTE_OK: NotesState = { valid: true, errors: [] };
const NOTE_REQUIRED: NotesState = { valid: false, errors: ['required'] };

// The true scenario must reject empty notes with a `required` error
// (event-form.ts); the false scenario is its control. Both fill and
// clear the notes. Kept as data so neither the title nor the body branches.
const SCENARIOS = [
    { required: true, verb: 'rejects', empty: NOTE_REQUIRED },
    { required: false, verb: 'accepts', empty: NOTE_OK },
];

for (const scenario of SCENARIOS) {
    test(`events.catering_notes_required ${scenario.required} ${scenario.verb} a catering order without notes`, async ({
        staffPage,
    }) => {
        const { audit, root, menuRequests } = await openOptions(
            staffPage,
            scenario.required,
        );
        await expect
            .poll(() => notesSetting(staffPage), {
                message: 'effective app.events.catering_notes_required',
            })
            .toBe(scenario.required);
        // Positive anchors: the menu loaded, so the catering section and the
        // order's notes control are on the page.
        await expect
            .poll(menuRequests, { message: 'catering menu items requested' })
            .toBeGreaterThan(0);
        await expect(root.locator('catering-list-field')).toBeVisible();
        await expect(
            root.locator('catering-list-field div[order]'),
        ).toHaveCount(1);
        const notes = root.locator('textarea[matInput]');
        await expect(notes).toHaveCount(1);
        await expect(notes).toHaveValue('');
        await expect
            .poll(() => notesState(root), { message: 'empty notes state' })
            .toStrictEqual(scenario.empty);
        await notes.fill('Prepared catering note');
        await expect
            .poll(() => notesState(root), { message: 'filled notes state' })
            .toStrictEqual(NOTE_OK);
        await notes.fill('');
        await expect
            .poll(() => notesState(root), { message: 'cleared notes state' })
            .toStrictEqual(scenario.empty);
        await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
        await expect(staffPage).toHaveURL(/view=2$/);
        await expectSafe(audit);
    });
}
