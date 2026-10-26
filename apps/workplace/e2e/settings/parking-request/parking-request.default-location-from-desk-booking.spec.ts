// Coverage: 1 unique setting, 2 scenarios.
// Setting: parking.default_location_from_desk_booking (source:
//   apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts:885-894,1510-1512,1887-1922).
// Status: PASS (2/2, 2026-10-22, isolated local E2E backend).
//
// A browser-only three-building organisation and one synthetic desk booking
// are served by GET routes. When the setting is true the form marks the desk
// booking's building with the desk badge and switches the active building;
// when false the default building remains selected. Nothing is submitted.
import type { Page, Route } from '@playwright/test';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
type DebugWindow = Window & { setting?: (key: string) => unknown };
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

const REGION = 'codex-parking-region';
const BUILDING_A = 'codex-parking-building-a';
const BUILDING_B = 'codex-parking-building-b';
const BUILDING_C = 'codex-parking-building-c';
const LEVEL_A = 'codex-parking-level-a';
const LEVEL_B = 'codex-parking-level-b';
const LEVEL_C = 'codex-parking-level-c';
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'Codex Parking Level A',
        display_name: 'Codex Parking Level A',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'Codex Parking Level B',
        display_name: 'Codex Parking Level B',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_C,
        parent_id: BUILDING_C,
        name: 'Codex Parking Level C',
        display_name: 'Codex Parking Level C',
        tags: ['level', 'parking'],
    },
];
const BUILDINGS = [
    {
        id: BUILDING_A,
        parent_id: REGION,
        name: 'Codex Parking Building A',
        display_name: 'Codex Parking Building A',
        tags: ['building'],
        timezone: 'UTC',
        location: '0,0',
    },
    {
        id: BUILDING_B,
        parent_id: REGION,
        name: 'Codex Parking Building B',
        display_name: 'Codex Parking Building B',
        tags: ['building'],
        timezone: 'UTC',
        location: '40,40',
    },
    {
        id: BUILDING_C,
        parent_id: REGION,
        name: 'Codex Parking Building C',
        display_name: 'Codex Parking Building C',
        tags: ['building'],
        timezone: 'UTC',
        location: '80,80',
    },
];
const CATEGORIES = [
    { id: 'e2e-parking-desk-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-parking-desk-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-parking-desk-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-parking-desk-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-parking-desk-catering': [],
    'e2e-parking-desk-desks': ['_DESKS_'],
    'e2e-parking-desk-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-parking-desk-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const REQUEST: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['parking'],
    'app.feature_groups': {},
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.events.use_bookings': true,
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.basic_user_search': true,
    'app.use_24_hour_time': true,
    'app.default_building': BUILDING_A,
    'app.desks.use_assets': false,
    'app.parking.restrict_home_location': false,
    'app.parking.allow_recurrence': false,
    'app.parking.available_period': 14,
    'app.parking.use_building_timezone': false,
    'app.bookings.use_building_timezone': false,
    'app.parking.hidden_buildings': [],
    'app.parking.request_types': null,
    'app.parking.request_shift_options': [
        {
            id: 'e2e-day',
            name: 'E2E Day Shift',
            start_time: 480,
            end_time: 1020,
        },
    ],
    'app.parking.hide_custom_shift': false,
    'app.parking.hide_availability_counter': true,
    'app.parking.hide_prefer_toggle': true,
    'app.parking.require_plate_number': false,
    'app.parking.require_space_restriction': false,
    'app.parking.request_space_restrictions': [],
    'app.parking.extra_space_restrictions': [],
    'app.parking.approver_groups': [],
    'app.parking.auto_approved_groups': [],
    'app.parking.vehicle_types': null,
    'app.parking.request_submission_notes_html': '',
    'app.parking.can_book_for_anyone': false,
    'app.bookings.can_book_for_anyone': null,
    'app.parking.can_book_for_others': false,
    'app.bookings.can_book_for_others': null,
};

async function organisationFixture(page: Page) {
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (
                key.startsWith('PLACEOS.org') ||
                ['PLACEOS.region', 'PLACEOS.building'].includes(key)
            ) {
                localStorage.removeItem(key);
            }
        }
        for (const key of [
            'PLACEOS.booking_form',
            'PLACEOS.booking_form_options',
            'PLACEOS.booking_form_filters',
        ]) {
            sessionStorage.removeItem(key);
        }
        sessionStorage.removeItem('PLACEOS.building');
        localStorage.setItem('APP.locale', 'en-AU');
    });
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'region' &&
            url.searchParams.get('limit') === '200',
        () => [
            {
                id: REGION,
                name: 'Codex Parking Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'building' &&
            url.searchParams.get('parent_id') === REGION &&
            url.searchParams.get('limit') === '500',
        () => BUILDINGS,
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'level' &&
            url.searchParams.get('limit') === '2500',
        () => LEVELS,
    );
    await getOnly(
        page,
        (url) =>
            /^\/api\/engine\/v2\/metadata\/[^/]+\/bulk$/.test(url.pathname) &&
            !!url.searchParams.get('parent_ids') &&
            url.searchParams
                .get('parent_ids')!
                .split(',')
                .every((id) => id.startsWith('codex-parking-')),
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
}

async function prepare(page: Page, enabled: boolean) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await organisationFixture(page);
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
                id: 'e2e-parking-desk-type-' + name,
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
                'e2e-parking-desk-type-',
            ),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'parking',
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'desk',
        (url) => {
            const email = url.searchParams.get('email') ?? '';
            const start =
                Number(url.searchParams.get('period_start') ?? 0) * 1000;
            const date = start + 10 * 3600 * 1000;
            return [
                {
                    id: 'e2e-parking-desk-booking',
                    booking_type: 'desk',
                    user_email: email,
                    user_name: 'Prepared Parking Desk User',
                    booked_by_name: 'Prepared Parking Desk User',
                    asset_id: 'e2e-parking-desk',
                    asset_name: 'Prepared Parking Desk',
                    date,
                    date_end: date + 3600 * 1000,
                    duration: 60,
                    status: 'approved',
                    zones: [LEVEL_B, BUILDING_B],
                    zone_id: LEVEL_B,
                    extension_data: {},
                },
            ];
        },
    );
    const settings = {
        ...REQUEST,
        'app.parking.default_location_from_desk_booking': enabled,
    };
    await useSettings(page, settings);
    await page.goto('/#/book/parking-request/form');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    for (const [key, value] of [
        ['app.features', settings['app.features']],
        ['app.parking.default_location_from_desk_booking', enabled],
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
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    return root;
}

// With the setting on, building B (the desk booking's building) carries the
// desk badge and is the active row; with it off, the default building A stays
// active and B has no badge. Kept as data so the test body has no branches.
const SCENARIOS = [
    {
        enabled: false,
        desk_badges: 0,
        active: 'Codex Parking Building A',
        inactive: 'Codex Parking Building B',
    },
    {
        enabled: true,
        desk_badges: 1,
        active: 'Codex Parking Building B',
        inactive: 'Codex Parking Building A',
    },
];

for (const scenario of SCENARIOS) {
    test(`parking.default_location_from_desk_booking ${scenario.enabled} selects the desk-booking building`, async ({
        staffPage,
    }) => {
        const root = await prepare(staffPage, scenario.enabled);
        const rows = root.locator('div.min-h-15');
        await expect(rows).toHaveCount(3);
        const row_a = rows.filter({ hasText: 'Codex Parking Building A' });
        const row_b = rows.filter({ hasText: 'Codex Parking Building B' });
        await expect(row_a).toHaveCount(1);
        await expect(row_b).toHaveCount(1);
        await expect(
            row_b.locator('icon', { hasText: /^\s*desk\s*$/ }),
        ).toHaveCount(scenario.desk_badges);
        await expect(rows.filter({ hasText: scenario.active })).toHaveClass(
            /border-info/,
        );
        await expect(
            rows.filter({ hasText: scenario.inactive }),
        ).not.toHaveClass(/border-info/);
        await expect(staffPage.locator('parking-request-success')).toHaveCount(
            0,
        );
        await expect(staffPage).toHaveURL(/#\/book\/parking-request\/form$/);
    });
}
