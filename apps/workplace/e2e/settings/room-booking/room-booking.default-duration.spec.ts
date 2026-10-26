// Coverage: 1 unique Setting. Exact key: app.events.default_duration.
// Scenarios: 2. A configured duration and the documented 60-minute fallback.
// Scope: the selected value in the rendered meeting duration control; no meeting is submitted.
// Limitations: exercises the native booking flow, not external calendar providers.
//
// Source: event-form.service.ts:558-576 passes
// `setting('app.events.default_duration') ?? 60` to the form time sync, and
// libs/common/src/lib/general.ts:1619-1661 applies it when all-day is turned
// off and the saved timed window is on another day. The flow below therefore
// turns all-day on, moves the date by a day, and turns all-day off.
// An unset key reads as null, not undefined: SettingsService.get falls back to
// getItemWithKeys (general.ts:140-148), which returns null for a missing key.
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
import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
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
const PREFIX = 'e2e-default-duration-';
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
                name: 'Duration Organisation',
                display_name: 'Duration Organisation',
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
                name: 'Duration Region',
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
                name: 'Duration Building',
                display_name: 'Duration Building',
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
                name: 'Duration Level',
                display_name: 'Duration Level',
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
    // (spaces.service.ts:101-119), and the bookable list for the building
    // (space.utilities.ts:145-160). This scenario selects no room.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: ORGANISATION, limit: '5000' }),
        () => [],
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
        () => [],
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
    // Calendars, events and room bookings.
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
// expects the source-supported 60 minutes. Kept as data so the test body has
// no branches.
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
