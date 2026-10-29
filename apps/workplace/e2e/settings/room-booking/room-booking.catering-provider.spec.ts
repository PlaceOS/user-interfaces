// Coverage: 1 unique Setting. Exact key: app.catering_provider.
// Scenarios: 2.
//   1. 'Beta' (not the default caterer): the catering menu offers no caterer
//      choice (caterers() is empty), the menu filter is fixed to Beta, and only
//      the Beta item is listed.
//   2. unset (''): both synthetic caterers are offered; the menu pre-selects
//      the first caterer, so only the Alpha item is listed.
// Beta is used because the app already pre-selects Alpha when the setting is
// unset, so only a non-default provider proves the setting picks the caterer.
// Scope: the catering select modal opened from the meeting options step
// (/#/book/meeting/form?view=2). Nothing is selected or added, and the meeting
// is never submitted.
// Source: libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts
// empties `caterers` whenever app.catering_provider is set, and
// _loadMenu forces filters().caterer to the provider, or to the first
// caterer when several exist and none is set. catering-item-filters.component.ts
// renders the caterer select only while caterers() has more than one
// entry. Two caterers (CATERING:Alpha, CATERING:Beta; catering-assets.fn.ts
// :82-87,195-217) exist in both scenarios, so the setting is the only
// difference. The modal opens from catering-list-field's empty-state button
// (icon add_notes, catering-list-field.component.ts).
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
import {
    request as pwRequest,
    type Locator,
    type Page,
    type Route,
} from '@playwright/test';
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
const PREFIX = 'e2e-catering-provider-';
const ORGANISATION = PREFIX + 'org';
const REGION = PREFIX + 'region';
const BUILDING = PREFIX + 'building';
const LEVEL = PREFIX + 'level';
const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
const CATERING_CATEGORY = PREFIX + 'catering';
/** One menu item per caterer type, on the building. */
const MENU: Record<string, { id: string; name: string }> = {
    [PREFIX + 'type-CATERING:Alpha']: {
        id: PREFIX + 'alpha-item',
        name: 'Alpha prepared item',
    },
    [PREFIX + 'type-CATERING:Beta']: {
        id: PREFIX + 'beta-item',
        name: 'Beta prepared item',
    },
};
const HIDDEN_CATEGORIES = [
    { id: CATERING_CATEGORY, name: '_CATERING_', hidden: true },
    { id: PREFIX + 'desks', name: '_DESKS_', hidden: true },
    { id: PREFIX + 'parking', name: '_PARKING_', hidden: true },
    { id: PREFIX + 'lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    [CATERING_CATEGORY]: ['CATERING:Alpha', 'CATERING:Beta'],
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
    name: 'Catering Provider Room',
    display_name: 'Catering Provider Room',
    email: 'catering-provider-room@example.invalid',
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: [ORGANISATION, REGION, BUILDING, LEVEL],
    level: { id: LEVEL, parent_id: BUILDING },
};

// Controls, not covered settings.
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
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ORGANISATION,
                name: 'Catering Provider Organisation',
                display_name: 'Catering Provider Organisation',
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
                name: 'Catering Provider Region',
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
                name: 'Catering Provider Building',
                display_name: 'Catering Provider Building',
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
                name: 'Catering Provider Level',
                display_name: 'Catering Provider Level',
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
            (hasParams(url, { zone_id: ORGANISATION, limit: '5000' }) ||
                hasParams(url, {
                    zone_id: BUILDING,
                    limit: '500',
                    signage: 'false',
                })),
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
    // queryCateringItems: one item per caterer on the building; every other
    // hidden list is empty.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' && hiddenAssetQuery(url),
        (url) => {
            const type_id = url.searchParams.get('type_id')!;
            const item = MENU[type_id];
            return item && url.searchParams.get('zone_id') === BUILDING
                ? [
                      {
                          id: item.id,
                          name: item.name,
                          identifier: item.name,
                          asset_type_id: type_id,
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
                : [];
        },
    );
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
}

function meetingSettings(provider: string): Settings {
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
        'app.events.multiple_spaces': false,
        'app.catering.backend': 'native',
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.default_building': BUILDING,
        'app.catering_provider': provider,
    };
}

async function openCateringModal(page: Page, provider: string) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await clearOrganisationCache(page);
    await useSettings(page, meetingSettings(provider));
    // A prepared, browser-only meeting for tomorrow 10:00 UTC with the room
    // and no catering order yet.
    await page.addInitScript((room) => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify({
                title: 'Browser-only catering provider meeting',
                date: date.valueOf(),
                date_end: date.valueOf() + 60 * 60_000,
                duration: 60,
                all_day: false,
                resources: [room],
                attendees: [],
                catering: [],
            }),
        );
    }, ROOM);
    await syntheticGets(page);
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    const root = page.locator('meeting-flow-options');
    await expect(root).toBeVisible();
    const field = root.locator('catering-list-field');
    await expect(field).toBeVisible();
    await expect(field.locator('div[order]')).toHaveCount(0);
    const add = field.locator('button[btn]').filter({
        has: page.locator('icon', { hasText: /^\s*add_notes\s*$/ }),
    });
    await expect(add).toHaveCount(1);
    await expect(add).toBeEnabled();
    await add.click();
    const modal = page.locator('catering-select-modal');
    await expect(modal).toBeVisible();
    return { audit, root, modal };
}

function providerSetting(page: Page) {
    return page.evaluate(() =>
        (window as DebugWindow).setting?.('app.catering_provider'),
    );
}

/**
 * Read-only probe of the caterer choice the filters panel offers and the
 * caterer the menu is filtered to (catering-item-filters.component.ts).
 * Fails closed if the signals are unavailable.
 */
function catererState(modal: Locator) {
    return modal.locator('catering-item-filters').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  caterers?: () => string[];
                  filters?: () => { caterer?: string };
              }
            | undefined;
        if (!component?.caterers || !component.filters) {
            throw new Error('catering filter signals are unavailable');
        }
        return {
            caterers: [...component.caterers()],
            filter: component.filters().caterer ?? '',
        };
    });
}

// The provider removes the caterer choice and fixes the filter to itself; unset
// offers both caterers and pre-selects the first (Alpha). Kept as data so the
// test body has no branches.
const SCENARIOS = [
    { label: "'Beta'", provider: 'Beta', caterers: [] as string[], filter: 'Beta',
        listed: 'Beta prepared item', absent: 'Alpha prepared item' },
    { label: 'unset', provider: '', caterers: ['Alpha', 'Beta'], filter: 'Alpha',
        listed: 'Alpha prepared item', absent: 'Beta prepared item' },
];

for (const scenario of SCENARIOS) {
    test(`catering_provider ${scenario.label} sets the caterers the menu offers`, async ({
        staffPage,
    }) => {
        const { audit, root, modal } = await openCateringModal(
            staffPage,
            scenario.provider,
        );
        await expect
            .poll(() => providerSetting(staffPage), {
                message: 'effective app.catering_provider',
            })
            .toBe(scenario.provider);
        await expect
            .poll(() => catererState(modal), {
                message: 'offered caterers and menu filter',
            })
            .toStrictEqual({ caterers: scenario.caterers, filter: scenario.filter });
        const list = modal.locator('catering-item-list');
        await expect(list.getByText(scenario.listed)).toHaveCount(1);
        await expect(list.getByText(scenario.absent)).toHaveCount(0);
        // Close without selecting anything; no order is added.
        await modal.locator('header button[mat-dialog-close]').click();
        await expect(modal).toHaveCount(0);
        await expect(
            root.locator('catering-list-field div[order]'),
        ).toHaveCount(0);
        await expect(staffPage.locator('meeting-flow-success')).toHaveCount(0);
        await expectSafe(audit);
    });
}
