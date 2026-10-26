// Coverage: 1 unique Setting. Exact key: app.events.allow_multiple_spaces.
// Scenarios: 2. The legacy alias is enabled/disabled while the modern key stays false.
// Scope: native, browser-only room selection; neither scenario confirms a meeting.
// Limitations: does not exercise calendar-provider room booking.
//
// Source: libs/events/src/lib/utilities.ts:22-27 multipleSpacesEnabled() is true
// when either app.events.multiple_spaces or app.events.allow_multiple_spaces is
// true; meeting-flow-space-select.component.ts:918-932 toggleSpace() appends
// with it on and replaces the selection with it off. The component's `model`
// getter returns EventFormService.model (a signal) holding `resources`.
//
// Authentication: the staff bearer comes from tokenFor('staff', worker), which
// reuses the stored token while the backend accepts it and checks the user is
// not admin/support (e2e/support/api.ts:130-147). It mints only when the stored
// token is missing or rejected. The readOnlyTest identity guard is unchanged.
//
// Network policy: every /api request must match one exact synthetic GET
// fixture below, except the shared staff identity GET (users/current), which
// the readOnlyTest identity guard observes and is never mocked. Any other /api
// request, any non-GET request to a local non-API path (including /auth/) and
// any external request is recorded and aborted, and fails the scenario.
import type { Page, Route } from '@playwright/test';
import { tokenFor } from '../../../../../e2e/support/api';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
type NetworkAudit = {
    api: string[];
    local_writes: string[];
    external: string[];
    websocket: string[];
    blockedControl: string[];
    appErrors: string[];
    closing: Promise<void>[];
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const READ_METHODS = ['GET', 'HEAD', 'OPTIONS'];

// Reuse the validated stored staff bearer instead of minting for every worker.
const test = readOnlyTest.extend({
    staffToken: [
        async ({}, use, info) => {
            await use(await tokenFor('staff', info.parallelIndex));
        },
        { scope: 'worker' },
    ],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Every synthetic zone id starts with this prefix. */
const PREFIX = 'e2e-legacy-multi-room-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
const ROOM_ONE = {
    id: 'e2e-legacy-room-one',
    name: 'Legacy Alias Room One',
    display_name: 'Legacy Alias Room One',
    email: 'legacy-room-one@example.invalid',
    bookable: true,
    capacity: 2,
    features: [],
    images: [],
    zones: [LEVEL],
    level: { id: LEVEL, parent_id: BUILDING },
};
const ROOM_TWO = {
    ...ROOM_ONE,
    id: 'e2e-legacy-room-two',
    name: 'Legacy Alias Room Two',
    display_name: 'Legacy Alias Room Two',
    email: 'legacy-room-two@example.invalid',
};
const ROOMS = [ROOM_ONE, ROOM_TWO];
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
// Org/region/building metadata blocks read by OrganisationService
// (organisation.service.ts:726-913).
const BULK_METADATA = [
    'bindings',
    'settings',
    'workplace_app',
    'booking_rules',
];
// Exact single-zone metadata names: room_booking_rules for each building
// (event-form.service.ts:262-292), room_alerts on the organisation (:351-366),
// and the organisation's translation overrides. LocaleService requests
// `locale_<locale>` on the organisation once it has loaded
// (placeos.service.ts:471-474, locale.service.ts:181-224) for the current and
// the default locale, pinned below to en-US and en-AU.
const ZONE_METADATA: Record<string, string[]> = {
    [BUILDING]: ['room_booking_rules'],
    [ORGANISATION]: ['room_alerts', 'locale_en-AU', 'locale_en-US'],
};
/** Locale pinned for the app, so only the two locale names above are read. */
const LOCALE = 'en-US';
// Controls, not covered settings. global_search and chat keep the topbar's
// search/chat loaders off; has_assets=false is the AssetStateService network
// gate (libs/assets/src/lib/asset-state.service.ts:82-92,179-181), so no asset,
// asset-category or asset-settings GET is issued for this assets-free flow.
const CONTROLS: Settings = {
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.has_assets': false,
};
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    ...CONTROLS,
    'app.features': ['spaces'],
    'app.feature_groups': {},
    'app.events.use_bookings': true,
    'app.events.allow_all_day': true,
    'app.events.allow_multiday': false,
    'app.events.allow_recurrence': false,
    'app.events.has_assets': false,
    'app.events.hide_attendees': false,
    'app.events.hide_notes': false,
    'app.events.allow_externals': false,
    'app.events.use_building_timezone': false,
    'app.catering.backend': 'native',
    'app.catering_provider': '',
    'app.use_region': false,
    'app.default_building': BUILDING,
};

/**
 * True when the URL carries exactly the expected query parameters. The API
 * client may add `authority_id` to zone queries, which is the only extra key
 * accepted.
 */
function hasParams(url: URL, expected: Record<string, string>) {
    const keys = [...url.searchParams.keys()].filter(
        (key) => key !== 'authority_id',
    );
    return (
        keys.length === Object.keys(expected).length &&
        Object.entries(expected).every(
            ([key, value]) => url.searchParams.get(key) === value,
        )
    );
}

async function protectNetwork(page: Page): Promise<NetworkAudit> {
    const audit: NetworkAudit = {
        api: [],
        local_writes: [],
        external: [],
        websocket: [],
        blockedControl: [],
        appErrors: [],
        closing: [],
    };
    page.on('pageerror', (error) =>
        audit.appErrors.push(error.name + ': ' + error.message),
    );
    page.on('console', (message) => {
        if (
            message.type() === 'error' &&
            /^(ERROR\b|NG0\d+)/.test(message.text())
        ) {
            audit.appErrors.push(message.text().slice(0, 500));
        }
    });
    await page.context().route('**/*', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (ORIGINS.has(url.origin)) {
            if (!url.pathname.startsWith('/api/')) {
                // Page assets and the auth bootstrap are reads; any local
                // non-API write (for example a POST to /auth/) is refused.
                if (READ_METHODS.includes(request.method())) {
                    return route.fallback();
                }
                audit.local_writes.push(request.method() + ' ' + url.pathname);
                return route.abort('blockedbyclient');
            }
            if (
                request.method() === 'GET' &&
                url.pathname === '/api/engine/v2/users/current'
            ) {
                return route.fallback();
            }
            audit.api.push(request.method() + ' ' + url.pathname + url.search);
            return route.abort('blockedbyclient');
        }
        if (
            request.method() === 'GET' &&
            url.origin === 'https://fonts.googleapis.com' &&
            url.pathname === '/css2'
        ) {
            return route.fulfill({
                status: 200,
                contentType: 'text/css',
                body: '',
            });
        }
        audit.external.push(request.method() + ' ' + url.origin + url.pathname);
        return route.abort('blockedbyclient');
    });
    await page.context().routeWebSocket('**/*', (socket) => {
        const url = new URL(socket.url());
        const app = new URL(APP_URL);
        const local =
            url.host === app.host &&
            url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
        if (
            local &&
            url.pathname === '/' &&
            [...url.searchParams.keys()].join(',') === 'token'
        )
            return;
        if (local && url.pathname === '/api/engine/v2/systems/control') {
            audit.blockedControl.push(url.pathname);
        } else {
            audit.websocket.push(url.pathname);
        }
        audit.closing.push(socket.close());
    });
    return audit;
}

async function expectSafe(audit: NetworkAudit) {
    await Promise.all(audit.closing);
    expect(
        audit.api,
        'only synthetic GET API responses, except staff identity',
    ).toEqual([]);
    expect(audit.local_writes, 'no local non-API writes').toEqual([]);
    expect(audit.external, 'no external actions').toEqual([]);
    expect(audit.websocket, 'no live WebSocket bindings').toEqual([]);
    expect(audit.appErrors, 'no application errors').toEqual([]);
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

/**
 * The staff user id from the app's own identity GET, which is never mocked.
 * Resolves to '' when no identity arrives in time, so a fixture waiting on it
 * falls through to the network guard instead of hanging.
 */
function watchStaffId(page: Page): Promise<string> {
    const identity = new Promise<string>((resolve) => {
        page.on('response', (response) => {
            const url = new URL(response.url());
            if (
                ORIGINS.has(url.origin) &&
                url.pathname === '/api/engine/v2/users/current' &&
                response.request().method() === 'GET' &&
                response.ok()
            ) {
                response
                    .json()
                    .then((user: { id?: string }) => {
                        if (user?.id) resolve(user.id);
                    })
                    .catch(() => undefined);
            }
        });
    });
    const timeout = new Promise<string>((resolve) =>
        setTimeout(() => resolve(''), 15_000),
    );
    return Promise.race([identity, timeout]);
}

/**
 * Remove cached organisation data before the app boots. OrganisationService
 * serves zone and metadata responses from `PLACEOS.org.*` localStorage without
 * a request (organisation.service.ts:1130-1189), so a cache written by an
 * earlier session would replace the synthetic organisation with real zone ids
 * and send real-id GETs past the fixtures. The saved region/building selection
 * is cleared for the same reason. The staff identity and token are untouched.
 * The locale is pinned (APP.locale for LocaleService.init, PLACEOS.locale for
 * PlaceOS_Service._initLocale) so the translation overrides read are always
 * the pinned locale and the default en-AU.
 */
async function clearOrganisationCache(page: Page) {
    await page.addInitScript((locale) => {
        localStorage.setItem('APP.locale', locale);
        localStorage.setItem('PLACEOS.locale', locale);
        for (const store of [localStorage, sessionStorage]) {
            for (const key of Object.keys(store)) {
                if (
                    key.startsWith('PLACEOS.org') ||
                    ['PLACEOS.region', 'PLACEOS.building'].includes(key)
                ) {
                    store.removeItem(key);
                }
            }
        }
    }, LOCALE);
}

/** Exact synthetic GET fixtures for the requests the meeting form makes. */
async function syntheticGets(page: Page) {
    const staff_id = watchStaffId(page);
    // Organisation bootstrap (organisation.service.ts:726-891).
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Legacy Alias Organisation',
                display_name: 'Legacy Alias Organisation',
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
                name: 'Legacy Alias Region',
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
                name: 'Legacy Alias Building',
                display_name: 'Legacy Alias Building',
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
                name: 'Legacy Alias Level',
                display_name: 'Legacy Alias Level',
                tags: ['level'],
            },
        ],
    );
    // Only the named blocks expected for each synthetic zone are answered.
    // Translation overrides are empty, so the bundled locale files apply.
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
                    details: name === 'room_booking_rules' ? [] : {},
                },
            };
        },
    );
    // The signed-in user's personal settings (settings.service.ts:239-241),
    // answered only for the id the app's own identity GET returned. Empty
    // details: allow_dark_mode is false, so no theme save follows.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            hasParams(url, { name: 'settings' }),
        async (route: Route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.fallback();
            const id = decodeURIComponent(
                new URL(request.url()).pathname.split('/')[5],
            );
            if (!id || id !== (await staff_id)) return route.fallback();
            await route.fulfill({
                json: {
                    settings: {
                        name: 'settings',
                        description: '',
                        details: {},
                    },
                },
            });
        },
    );
    // Group permissions loaded after the user (user-state.ts:215-232). An empty
    // list is also what the app uses when the request fails.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/groups/current' &&
            hasParams(url, {}),
        () => [],
    );
    // SpacesService.loadSpaces: every system in the organisation
    // (spaces.service.ts:101-119). The bookable list below is what is tested.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: ORGANISATION, limit: '5000' }),
        () => [],
    );
    // Bookable rooms for the active building (space.utilities.ts:145-160).
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => ROOMS.map((room) => ({ ...room, zones: [BUILDING] })),
    );
    // Hidden asset bootstrap: matching categories/types so nothing is created.
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
            url.pathname === '/api/engine/v2/assets' &&
            HIDDEN_TYPE_IDS.includes(url.searchParams.get('type_id') ?? ''),
        () => [],
    );
    // Calendars, events, room bookings and availability.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && hasParams(url, {}),
        () => [],
    );
    await getOnly(
        page,
        (url) => {
            const ids = (url.searchParams.get('system_ids') ?? '').split(',');
            return (
                url.pathname === '/api/staff/v1/calendars/availability' &&
                url.searchParams.has('system_ids') &&
                ids.every((id) => ROOMS.some((room) => room.id === id))
            );
        },
        (url) =>
            url.searchParams
                .get('system_ids')!
                .split(',')
                .map((id) => {
                    const room = ROOMS.find((item) => item.id === id)!;
                    return {
                        id,
                        name: room.name,
                        email: room.email,
                        resource: room,
                        availability: [],
                    };
                }),
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/events' &&
            url.searchParams.has('period_start') &&
            url.searchParams.has('period_end'),
        () => [],
    );
    // Native availability: queryResourceAvailability (bookings.fn.ts:788-808).
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

async function openRoomSelection(page: Page, legacyAlias: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await clearOrganisationCache(page);
    const settings = {
        ...BASE,
        'app.events.multiple_spaces': false,
        'app.events.allow_multiple_spaces': legacyAlias,
    };
    await useSettings(page, settings);
    await page.addInitScript(() => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({
                title: 'Browser-only legacy alias meeting',
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

    await page.goto('/#/book/meeting/form?view=1');
    const root = page.locator('meeting-flow-space-select');
    await expect(root).toBeVisible();
    await expect
        .poll(() =>
            page.evaluate(
                (keys) => {
                    const setting = (window as DebugWindow).setting;
                    return Object.fromEntries(
                        keys.map((key) => [key, setting?.(key)]),
                    );
                },
                [
                    'app.events.multiple_spaces',
                    'app.events.allow_multiple_spaces',
                    ...Object.keys(CONTROLS),
                ],
            ),
        )
        .toEqual({
            'app.events.multiple_spaces': false,
            'app.events.allow_multiple_spaces': legacyAlias,
            ...CONTROLS,
        });
    const list = root.locator('meeting-flow-space-list');
    const first = list
        .locator('li[space]')
        .filter({ hasText: ROOM_ONE.name })
        .locator('button[name="select-space"]');
    const second = list
        .locator('li[space]')
        .filter({ hasText: ROOM_TWO.name })
        .locator('button[name="select-space"]');
    await expect(first).toBeVisible();
    await expect(second).toBeVisible();
    return { root, first, second, audit };
}

// With the legacy alias on, both rooms stay selected; with it off, the second
// click replaces the first. Kept as data so the test body has no branches.
const SCENARIOS = [
    { legacyAlias: false, verb: 'does not enable', expected: [ROOM_TWO.id] },
    {
        legacyAlias: true,
        verb: 'enables',
        expected: [ROOM_ONE.id, ROOM_TWO.id],
    },
];

for (const scenario of SCENARIOS) {
    test(`events.allow_multiple_spaces legacy alias ${scenario.verb} multi-room selection`, async ({
        staffPage,
    }) => {
        const { root, first, second, audit } = await openRoomSelection(
            staffPage,
            scenario.legacyAlias,
        );
        await first.click();
        await second.click();
        const selected = () =>
            root.evaluate((element) => {
                const component = (window as DebugWindow).ng?.getComponent(
                    element,
                ) as
                    | { model: () => { resources: { id: string }[] } }
                    | undefined;
                return component?.model().resources.map((room) => room.id);
            });
        await expect.poll(selected).toEqual(scenario.expected);
        await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
        await expect(staffPage).toHaveURL(/view=1$/);
        await expectSafe(audit);
    });
}
