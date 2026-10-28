// Coverage: 2 unique settings, 4 scenarios (2 per setting).
// Settings: parking.hide_prefer_toggle and parking.hidden_buildings
// (docs/settings/workplace.md).
// Consumer: apps/workplace/src/app/book/parking-request-flow/
//   parking-request-form-details.component.ts.
// The toggle is rendered inside the location-preference block, which only
// exists when at least two buildings have parking levels. The organisation is
// replaced with a browser-only three-building fixture; no backend record is
// created or changed.
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { CATEGORIES, type SafetyAudit, type Settings, TYPES } from '../support/settings-harness';
const test = readOnlyTest.extend<{ safetyAudit: SafetyAudit }>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const context = staffPage.context();
        const origins = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
        const audit: SafetyAudit = { blocked_http: [], unexpected_ws: [] };
        const closing: Promise<void>[] = [];
        await context.route('**/*', async (route) => {
            const request = route.request();
            const url = new URL(request.url());
            const read = ['GET', 'HEAD', 'OPTIONS'].includes(request.method());
            const provider = /^\/api\/staff\/v1\/(calendars|events)(\/|$)/.test(url.pathname);
            if (read && !provider && (!url.pathname.startsWith('/api/') || origins.has(url.origin))) {
                return route.fallback();
            }
            audit.blocked_http.push(request.method() + ' ' + url.pathname);
            await route.abort('blockedbyclient');
        });
        await context.routeWebSocket('**/*', (socket) => {
            const url = new URL(socket.url());
            const app = new URL(APP_URL);
            const local = url.host === app.host &&
                url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
            // Hold Vite's browser-local socket open to prevent reload polling.
            // No socket is ever connected to its server.
            if (local && url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token') return;
            if (!(local && url.pathname === '/api/engine/v2/systems/control')) {
                audit.unexpected_ws.push(url.origin + url.pathname);
            }
            closing.push(socket.close());
        });
        try {
            await use(audit);
        } finally {
            await context.close();
            await Promise.all(closing);
            await info.attach('settings-safety-audit', {
                body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
            });
            expect(audit, 'zero attempted HTTP writes/provider reads or unexpected WebSockets').toEqual({
                blocked_http: [], unexpected_ws: [],
            });
        }
    }, { auto: true, timeout: 30_000 }],
});


const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const REGION = 'e2e-request-parking-region';
const BUILDING_A = 'e2e-request-parking-building-a';
const BUILDING_B = 'e2e-request-parking-building-b';
const BUILDING_C = 'e2e-request-parking-building-c';
const LEVEL_A = 'e2e-request-parking-level-a';
const LEVEL_B = 'e2e-request-parking-level-b';
const LEVEL_C = 'e2e-request-parking-level-c';
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Parking Level A',
        display_name: 'E2E Parking Level A',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Parking Level B',
        display_name: 'E2E Parking Level B',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_C,
        parent_id: BUILDING_C,
        name: 'E2E Parking Level C',
        display_name: 'E2E Parking Level C',
        tags: ['level', 'parking'],
    },
];
const REQUEST: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['parking'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.events.use_bookings': true,
    'app.feature_groups': {},
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
    'app.parking.hide_prefer_toggle': false,
    'app.parking.default_location_from_desk_booking': false,
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

test.use({ readOnlyTimezone: 'Etc/UTC' });

test.describe.configure({ retries: 0, timeout: 120_000 });

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
        sessionStorage.removeItem('PLACEOS.building');
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
                name: 'E2E Parking Region',
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
        () => [
            {
                id: BUILDING_A,
                parent_id: REGION,
                name: 'E2E Parking Building A',
                display_name: 'E2E Parking Building A',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
            {
                id: BUILDING_B,
                parent_id: REGION,
                name: 'E2E Parking Building B',
                display_name: 'E2E Parking Building B',
                tags: ['building'],
                timezone: 'UTC',
                location: '40,40',
            },
            {
                id: BUILDING_C,
                parent_id: REGION,
                name: 'E2E Parking Building C',
                display_name: 'E2E Parking Building C',
                tags: ['building'],
                timezone: 'UTC',
                location: '80,80',
            },
        ],
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
            url
                .searchParams.get('parent_ids')!
                .split(',')
                .every((id) => id.startsWith('e2e-request-parking-')),
        (url) =>
            Object.fromEntries(
                url
                    .searchParams.get('parent_ids')!
                    .split(',')
                    .map((id) => [
                        id,
                        {
                            id,
                            name: decodeURIComponent(url.pathname.split('/')[5]),
                            details: {},
                        },
                    ]),
            ),
    );
}

async function prepare(page: Page, overrides: Settings) {
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
                id: 'e2e-settings-type-' + name,
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
                'e2e-settings-type-',
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
    const settings = { ...REQUEST, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() =>
        localStorage.setItem('APP.locale', 'en-AU'),
    );
    await page.addInitScript(() => {
        for (const key of ['PLACEOS.booking_form', 'PLACEOS.booking_form_options', 'PLACEOS.booking_form_filters']) {
            sessionStorage.removeItem(key);
        }
    });
    await page.goto('/#/book/parking-request/form');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }

    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    return root;
}

const preferToggle = (page: Page) =>
    page
        .locator('parking-request-form-details settings-toggle')
        .filter({ hasText: 'Prefer booked location first' });

test(
    'parking.hidden_buildings empty lists every building with parking levels',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hidden_buildings': [],
            'app.parking.hide_prefer_toggle': true,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building C', { exact: true }),
        ).toBeVisible();
    },
);

test(
    'parking.hidden_buildings removes the listed building from the options',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hidden_buildings': [BUILDING_A],
            'app.parking.hide_prefer_toggle': true,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toHaveCount(0);
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building C', { exact: true }),
        ).toBeVisible();
        // default_building is A, which is now hidden. The form's effect moves
        // the active building to the first listed building (B).
        await expect.poll(() => staffPage.evaluate(() =>
            (window as Window & { app?: { org?: { building?: { id: string } } } })
                .app?.org?.building?.id), { message: 'active building' }).toBe(BUILDING_B);
        const locations = root
            .getByRole('radiogroup', { name: 'Location Preference', exact: true })
            .getByRole('radio');
        await expect(locations).toHaveCount(2);
        await expect(locations.filter({ hasText: 'E2E Parking Building B' }))
            .toHaveAttribute('aria-checked', 'true');
        await expect(locations.filter({ hasText: 'E2E Parking Building C' }))
            .toHaveAttribute('aria-checked', 'false');
    },
);

test(
    'parking.hide_prefer_toggle false shows the location preference toggle',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hide_prefer_toggle': false,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(preferToggle(staffPage)).toHaveCount(1);
        await expect(preferToggle(staffPage)).toBeVisible();
        await expect(
            staffPage.locator('parking-request-success'),
        ).toHaveCount(0);
    },
);

test(
    'parking.hide_prefer_toggle true removes the location preference toggle',
    async ({ staffPage }) => {
        const root = await prepare(staffPage, {
            'app.parking.hide_prefer_toggle': true,
        });
        await expect(
            root.getByText('E2E Parking Building A', { exact: true }),
        ).toBeVisible();
        await expect(
            root.getByText('E2E Parking Building B', { exact: true }),
        ).toBeVisible();
        await expect(preferToggle(staffPage)).toHaveCount(0);
        await expect(
            staffPage.locator('parking-request-success'),
        ).toHaveCount(0);
    },
);
