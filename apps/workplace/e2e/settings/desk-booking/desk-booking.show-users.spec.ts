// Coverage: 1 unique setting, 3 scenarios.
// Setting: desks.show_users (docs/settings/workplace.md; source:
//   apps/workplace/src/app/book/desk-flow-new/desk-flow-select-map.component.ts;
//   libs/explore/src/lib/explore-desk-info.component.ts).
//
// The desk map only requests desk bookings and builds the per-desk user map
// when desks.show_users is true. The organisation, map asset, desk metadata and
// booking row are browser-only GET fixtures; no desk is selected, no booking is
// created and no backend record is changed.
import type { Locator, Page, Route } from '@playwright/test';
import { DeskFlow } from '../../../../../e2e/support/desk/desk-flow.page';
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
import { type DebugWindow, PIXEL, type Settings } from '../support/settings-harness';
type Audit = {
    fixtures: Record<string, number>;
    unexpected_ws: string[];
    control_ws: string[];
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

const test = readOnlyTest.extend<{ audit: Audit }>({
    audit: [
        async ({ staffPage }, use) => {
            const audit: Audit = {
                fixtures: {},
                unexpected_ws: [],
                control_ws: [],
            };
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
                    audit.control_ws.push(url.pathname);
                } else {
                    audit.unexpected_ws.push(url.href);
                }
                closing.push(socket.close().catch(() => undefined));
            });
            await use(audit);
            await Promise.all(closing);
            expect(
                audit.unexpected_ws,
                'no unexpected WebSocket connections',
            ).toEqual([]);
        },
        { auto: true, timeout: 15_000 },
    ],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

async function getOnly(
    page: Page,
    audit: Audit,
    name: string,
    match: (url: URL) => boolean,
    body: (url: URL) => unknown,
) {
    await page.route(
        (url) => ORIGINS.has(url.origin) && match(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
            await route.fulfill({ json: body(new URL(route.request().url())) });
        },
    );
}

/** How many times a named GET fixture has answered. */
function fixtureHits(audit: Audit, name: string) {
    return audit.fixtures[name] ?? 0;
}

const CATEGORIES = [
    { id: 'e2e-show-users-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-show-users-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-show-users-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-show-users-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-show-users-catering': [],
    'e2e-show-users-desks': ['_DESKS_'],
    'e2e-show-users-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-show-users-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.logo_light': PIXEL,
    'app.basic_user_search': true,
    'app.explore.cisco_maps.enabled': false,
};

const REGION = 'e2e-settings-region';
const BUILDING_A = 'e2e-settings-building-a';
const LEVEL_A = 'e2e-settings-level-a';
const MAP = new URL('/e2e-settings-map.svg', APP_URL).href;
const DESK = 'E2E browser-only desk';
const DESK_ID = 'e2e-settings-desk-' + LEVEL_A;
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Level A',
        display_name: 'E2E Level A',
        tags: ['level'],
        map_id: MAP,
    },
];
const BOOKING = {
    id: 'e2e-show-users-booking',
    booking_type: 'desk',
    user_email: 'prepared-show-users@example.invalid',
    user_name: 'Prepared Show Users',
    booked_by_name: 'Prepared Show Users',
    asset_id: DESK_ID,
    asset_ids: [DESK_ID],
    asset_name: DESK + ' ' + LEVEL_A,
    date: Date.now(),
    date_end: Date.now() + 60 * 60 * 1000,
    duration: 60,
    status: 'approved',
    zones: [LEVEL_A],
    extension_data: {},
};

async function organisationFixture(
    page: Page,
    audit: Audit,
    show_users: boolean,
) {
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (
                key.startsWith('PLACEOS.org') ||
                ['PLACEOS.region', 'PLACEOS.building'].includes(key)
            ) {
                localStorage.removeItem(key);
            }
        }
        sessionStorage.removeItem('PLACEOS.building');
    });
    await getOnly(
        page,
        audit,
        'synthetic regions',
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'region' &&
            url.searchParams.get('limit') === '200',
        (url) => [
            {
                id: REGION,
                parent_id: url.searchParams.get('parent_id'),
                name: 'E2E Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    await getOnly(
        page,
        audit,
        'synthetic buildings',
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'building' &&
            url.searchParams.get('parent_id') === REGION &&
            url.searchParams.get('limit') === '500',
        () => [
            {
                id: BUILDING_A,
                parent_id: REGION,
                name: 'E2E Building A',
                display_name: 'E2E Building A',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
        ],
    );
    await getOnly(
        page,
        audit,
        'synthetic levels',
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'level' &&
            url.searchParams.get('limit') === '2500',
        () => LEVELS,
    );
    await getOnly(
        page,
        audit,
        'synthetic bulk metadata',
        (url) =>
            /^\/api\/engine\/v2\/metadata\/[^/]+\/bulk$/.test(url.pathname) &&
            !!url.searchParams.get('parent_ids') &&
            url.searchParams
                .get('parent_ids')!
                .split(',')
                .every((id) => id.startsWith('e2e-settings-')),
        (url) =>
            Object.fromEntries(
                url.searchParams
                    .get('parent_ids')!
                    .split(',')
                    .map((id) => [
                        id,
                        {
                            id,
                            name: decodeURIComponent(
                                url.pathname.split('/')[5],
                            ),
                            details: {},
                        },
                    ]),
            ),
    );
    await getOnly(
        page,
        audit,
        'synthetic metadata',
        (url) =>
            /^\/api\/engine\/v2\/metadata\/e2e-settings-[^/]+$/.test(
                url.pathname,
            ) && !!url.searchParams.get('name'),
        (url) => {
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    id: url.pathname.split('/')[5],
                    name,
                    details:
                        name.endsWith('_booking_rules') ||
                        name === 'map_regions'
                            ? []
                            : {},
                },
            };
        },
    );
    await getOnly(
        page,
        audit,
        'synthetic desk metadata',
        (url) =>
            /^\/api\/engine\/v2\/metadata\/e2e-settings-building-[ab]\/children$/.test(
                url.pathname,
            ) && url.searchParams.get('name') === 'desks',
        (url) =>
            LEVELS.filter(
                (level) => level.parent_id === url.pathname.split('/')[5],
            ).map((level) => ({
                zone: level,
                metadata: {
                    desks: {
                        name: 'desks',
                        details: [
                            {
                                id: 'e2e-settings-desk-' + level.id,
                                name: DESK + ' ' + level.id,
                                map_id: 'e2e-settings-desk-shape',
                                bookable: true,
                                assigned_to: '',
                                groups: [],
                                features: [],
                                images: [],
                            },
                        ],
                    },
                },
            })),
    );
    await getOnly(
        page,
        audit,
        'desk bookings',
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'desk' &&
            url.searchParams.has('period_start') &&
            url.searchParams.has('period_end'),
        (url) => {
            if (!show_users) return [];
            const start = Number(url.searchParams.get('period_start')) * 1000;
            return [
                {
                    ...BOOKING,
                    date: start + 3600 * 1000,
                    date_end: start + 7200 * 1000,
                },
            ];
        },
    );
    await getOnly(
        page,
        audit,
        'empty booked desk resources',
        (url) =>
            url.pathname === '/api/staff/v1/bookings/booked' &&
            url.searchParams.get('type') === 'desk' &&
            url.searchParams.get('limit') === '200' &&
            url.searchParams.has('zones') &&
            url.searchParams.has('period_start') &&
            url.searchParams.has('period_end'),
        () => [],
    );
    await page.route(
        (url) => url.href === MAP,
        async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            audit.fixtures['synthetic SVG'] =
                (audit.fixtures['synthetic SVG'] ?? 0) + 1;
            await route.fulfill({
                contentType: 'image/svg+xml',
                body:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240" viewBox="0 0 400 240">' +
                    '<rect id="e2e-settings-desk-shape" x="80" y="60" width="80" height="60" fill="#aaaaaa"/></svg>',
            });
        },
    );
}

async function prepare(page: Page, audit: Audit, show_users: boolean | null) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await getOnly(
        page,
        audit,
        'hidden categories',
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' &&
            url.searchParams.get('limit') === '500',
        () => CATEGORIES,
    );
    await getOnly(
        page,
        audit,
        'hidden types',
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('limit') === '500' &&
            Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''),
        (url) =>
            TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: 'e2e-show-users-type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    await getOnly(
        page,
        audit,
        'hidden assets',
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            (url.searchParams.get('type_id') ?? '').startsWith(
                'e2e-show-users-type-',
            ),
        () => [],
    );
    await getOnly(
        page,
        audit,
        'calendar list',
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    const settings = {
        ...BASE,
        'app.default_building': BUILDING_A,
        'app.desk.auto_allocation': null,
        'app.desks.auto_allocation': false,
        'app.desks.can_book_for_others': false,
        'app.bookings.can_book_for_others': false,
        'app.desks.allow_groups': false,
        'app.desks.has_assets': false,
        'app.bookings.has_assets': false,
        'app.desks.can_book_lockers': false,
        'app.desks.use_assets': false,
        'app.desks.bookable_hours': null,
        'app.desks.allow_recurrence': false,
        'app.desks.allow_multiple': false,
        'app.desks.show_users': show_users,
    };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    await organisationFixture(page, audit, show_users !== false);
    await page.goto('/#/book/desk/form');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    for (const [key, value] of [
        ['app.features', settings['app.features']],
        ['app.desks.show_users', show_users],
        ['app.default_building', BUILDING_A],
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
    return settings;
}

async function deskMap(page: Page, audit: Audit) {
    const flow = new DeskFlow(page);
    await expect(flow.title).toBeEditable();
    await expect
        .poll(() => fixtureHits(audit, 'synthetic buildings'))
        .toBeGreaterThan(0);
    await expect
        .poll(() => fixtureHits(audit, 'synthetic levels'))
        .toBeGreaterThan(0);
    await expect
        .poll(() => fixtureHits(audit, 'synthetic desk metadata'))
        .toBeGreaterThan(0);
    const list = page.locator('desk-flow-select-list');
    await expect(list).toBeVisible();
    await expect(list.locator('mat-spinner')).toHaveCount(0);
    await expect(
        list.locator('li[item]').filter({ hasText: DESK + ' ' + LEVEL_A }),
    ).toHaveCount(1);
    const select = page.locator('desk-flow-select');
    await expect(select).toBeVisible();
    await expect(select.locator('desk-flow-select-map')).toHaveCount(0);
    // The view toggle's icon ligature is lowercase `map`
    // (desk-flow-select.component.ts); the visible "Map" label is a separate div.
    await select
        .locator('button', {
            has: page.locator('icon', { hasText: /^\s*map\s*$/ }),
        })
        .click();
    const map = select.locator('desk-flow-select-map');
    await expect(map).toHaveCount(1);
    await expect(map.locator('interactive-map')).toHaveCount(1);
    await expect
        .poll(() => fixtureHits(audit, 'synthetic SVG'))
        .toBeGreaterThan(0);
    // The only fixture level is selected by the form model on init, which is
    // what gives the map's booking query its zone. Do not toggle the select:
    // opening it here is unnecessary and made the setup depend on overlay
    // timing rather than on the setting under test.
    await expect(map.locator('mat-select')).toContainText('E2E Level A');
    await expect
        .poll(() => map.locator('div[track-id^="desk:hover:"]').count())
        .toBeGreaterThan(0);
    return { flow, map };
}

type MapQueryState = {
    zone: string | null;
    has_date: boolean;
    query: boolean;
    debounced: boolean;
};

/**
 * Read-only probe of the map's own desk-booking query
 * (desk-flow-select-map.component.ts). Desk bookings are requested
 * only by the `_level_bookings` resource, whose params are
 * `_booking_query_debounced`. `_booking_query` is undefined unless
 * desks.show_users is on AND a level and a form date exist. Seeing the level
 * and date present with the query undefined therefore proves the request
 * cannot be issued; it is not inferred from waiting. Fails closed if the
 * signals are unavailable.
 */
function mapQueryState(map: Locator): Promise<MapQueryState> {
    return map.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  level?: () => { id?: string } | null;
                  form_value?: () => { date?: number } | null;
                  _booking_query?: () => unknown;
                  _booking_query_debounced?: { value: () => unknown };
              }
            | undefined;
        if (
            !component?.level ||
            !component.form_value ||
            !component._booking_query ||
            !component._booking_query_debounced
        ) {
            throw new Error('desk map booking query signals are unavailable');
        }
        return {
            zone: component.level()?.id ?? null,
            has_date: (component.form_value()?.date ?? 0) > 0,
            query: component._booking_query() !== undefined,
            debounced: component._booking_query_debounced.value() !== undefined,
        };
    });
}

/** The user label of the first desk feature on the map. */
function deskUserLabel(map: Locator) {
    return map
        .locator('div[track-id^="desk:hover:"] explore-desk-info')
        .first()
        .evaluate((element) => {
            const component = (window as DebugWindow).ng?.getComponent(
                element,
            ) as { display_user?: () => string } | undefined;
            return component?.display_user?.() ?? '';
        });
}

// With show_users on, the map builds a booking query, requests desk bookings
// and labels the desk with the booker; with it off, none of that happens.
// Unset (null) falls back to on: the map reads
// settings.signal('desks.show_users', true), and a null override resolves to
// that default while keeping any stack zone value out.
// Kept as data so the test body has no branches.
const SCENARIOS = [
    {
        show_users: false,
        shown: false,
        user_label: '',
        message: 'show_users false must not request desk bookings',
    },
    {
        show_users: true,
        shown: true,
        user_label: 'Prepared Show Users',
        message: 'show_users must request desk bookings',
    },
    {
        show_users: null,
        shown: true,
        user_label: 'Prepared Show Users',
        message: 'unset show_users must fall back to requesting desk bookings',
    },
];

for (const scenario of SCENARIOS) {
    test(`desks.show_users ${scenario.show_users} gates desk booking user data on the map`, async ({
        staffPage,
        audit,
    }) => {
        await prepare(staffPage, audit, scenario.show_users);
        const { flow, map } = await deskMap(staffPage, audit);
        // Level and date are present in both scenarios, so the only thing
        // deciding whether the booking query exists is the setting.
        await expect
            .poll(() => mapQueryState(map), {
                message: 'the desk map booking query state',
            })
            .toEqual({
                zone: LEVEL_A,
                has_date: true,
                query: scenario.shown,
                debounced: scenario.shown,
            });
        await expect
            .poll(() => fixtureHits(audit, 'desk bookings') > 0, {
                message: scenario.message,
            })
            .toBe(scenario.shown);
        await expect
            .poll(() => deskUserLabel(map), {
                message: 'the desk feature user label',
            })
            .toBe(scenario.user_label);
        // Re-checked after the label settled: still no request when off.
        expect(fixtureHits(audit, 'desk bookings') > 0, scenario.message).toBe(
            scenario.shown,
        );
        await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
        await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
        await expect(flow.chosenDesks).toHaveCount(0);
    });
}
