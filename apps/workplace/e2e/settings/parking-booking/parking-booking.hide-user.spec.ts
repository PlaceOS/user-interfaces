// Setting: parking.hide_user. Exact keys: app.parking.hide_user (+ legacy alias
// app.parkings.hide_user).
// Coverage: 1 unique setting, 3 scenarios.
// Source: libs/bookings/src/lib/parking-select-modal/parking-map.component.ts
//   features(); legacy spelling fallback `app.parking.hide_user ??
//   app.parkings.hide_user`.
//
// Scenarios:
//   1. false renders one map feature for each loaded parking space.
//   2. true renders no map features, while the list still shows the space.
//   3. The legacy key app.parkings.hide_user alone also suppresses the features.
// Preconditions/fixtures: readOnlyTest (local read-only legacy fixture) with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call). A browser-only region/building/level fixture supplies the
//   active building and a level tagged `parking`; GET-only stubs return one
//   `_PARKING_SPACES_` asset (id/map_id `e2e-bay-1`) on that level, no
//   `_PARKING_USERS_` assets (so deny_parking_access stays false), empty
//   calendar / parking booking lists and an empty bookings/booked list. Local
//   backend only (assertLocalOnly).
// Expected behaviour: features() is [] while hide_user resolves true, so the
//   hidden dynamic-map block renders no div[el-id] at all; otherwise there is one
//   div[el-id] per space, carrying the space's map_id. The parking list is
//   unaffected in both cases. Nothing is selected or submitted, and the read-only
//   fixture fails the test on any non-GET /api request.
//
// Notes:
// - div[el-id] lives inside <div hidden> in dynamic-map.component.ts, so
//   assert COUNT, never visibility.
// - The picker opens on the list view; the map DOM only exists after clicking the
//   map button (view defaults to 'list').
// - Asset type ids come from the hidden `_PARKING_` category stub. Without it
//   the type bootstrap would POST, which the read-only guard rejects.
import type { Page, Route } from '@playwright/test';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { ParkingForm } from '../../../../../e2e/support/parking/parking-form.page';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import {
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';
import { COMMON, CONTROLS, type Settings, type WsAudit } from '../support/settings-harness';
type DebugWindow = Window & { setting?: (key: string) => unknown };
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const test = readOnlyTest.extend<{ wsAudit: WsAudit }>({
    wsAudit: [
        async ({ staffPage }, use) => {
            const audit: WsAudit = {
                unexpected: [],
                control: [],
                app_errors: [],
                external: [],
            };
            // Non-local traffic never leaves the browser. The app shell's Google Fonts
            // stylesheet is answered locally with empty CSS, so no font file is
            // requested either; any other non-local request is aborted and fails the
            // scenario. Local requests fall through to the read-only /api guard.
            await staffPage.context().route('**/*', async (route) => {
                const request = route.request();
                const url = new URL(request.url());
                if (ORIGINS.has(url.origin)) return route.fallback();
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
                audit.external.push(
                    request.method() + ' ' + url.origin + url.pathname,
                );
                await route.abort('blockedbyclient');
            });
            // ErrorHandler logs console.error('ERROR', e); Angular runtime errors
            // log NG0xxx. Either fails the scenario.
            staffPage.on('pageerror', (error) =>
                audit.app_errors.push(
                    'APP ' + error.name + ': ' + error.message,
                ),
            );
            staffPage.on('console', (message) => {
                if (
                    message.type() === 'error' &&
                    /^(ERROR\b|NG0\d+)/.test(message.text())
                ) {
                    audit.app_errors.push(
                        'APP ' + message.text().slice(0, 500),
                    );
                }
            });
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
            expect(audit.app_errors, 'no application errors').toEqual([]);
            expect(audit.external, 'no non-local network traffic').toEqual([]);
        },
        { auto: true, timeout: 15_000 },
    ],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Origin-limited GET-only responses. Non-GET always falls through to the guard. */
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

// ------------------------------------------------------------- synthetic org
const REGION = 'e2e-hide-user-region';
const BUILDING_A = 'e2e-hide-user-building-a';
const BUILDING_B = 'e2e-hide-user-building-b';
const LEVEL_A = 'e2e-hide-user-level-a';
const LEVEL_B = 'e2e-hide-user-level-b';
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
        name: 'E2E Level B',
        display_name: 'E2E Level B',
        tags: ['level'],
    },
];
const BUILDINGS = [
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
];
const BAY_ID = 'e2e-bay-1';
const BAY = {
    id: BAY_ID,
    name: 'E2E Bay 1',
    identifier: 'E2E Bay 1',
    map_id: BAY_ID,
    zone_id: LEVEL_A,
    zones: [LEVEL_A],
    bookable: true,
    other_data: {},
};

const CATEGORIES = [
    { id: 'e2e-hide-user-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-hide-user-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-hide-user-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-hide-user-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-hide-user-catering': [],
    'e2e-hide-user-desks': ['_DESKS_'],
    'e2e-hide-user-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-hide-user-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
// type id -> assets. Spaces live on the parking level; no parking users, so the
// user is never denied access and only the hide_user branch can change the DOM.
const ASSETS: Record<string, unknown[]> = {
    'e2e-hide-user-type-_PARKING_SPACES_': [BAY],
    'e2e-hide-user-type-_PARKING_USERS_': [],
    'e2e-hide-user-type-_PARKING_FLEET_VEHICLES_': [],
};
const BOOKING: Settings = {
    ...COMMON,
    'app.features': ['parking'],
    'app.feature_groups': {},
    'app.events.use_bookings': true,
    'app.default_building': BUILDING_A,
    'app.desks.use_assets': false,
    'app.parking.restrict_home_location': false,
    'app.parking.require_space_restriction': false,
    'app.parking.default_duration': 60,
    'app.bookings.all_day_default': false,
    'app.parking.all_day_default': null,
    'app.bookings.allow_all_day': false,
    'app.parking.allow_all_day': false,
    'app.bookings.bookable_hours': null,
    'app.parking.bookable_hours': null,
    'app.bookings.max_duration': null,
    'app.parking.max_duration': null,
    'app.bookings.min_duration': null,
    'app.parking.min_duration': null,
    'app.bookings.custom_duration_options': null,
    'app.parking.custom_duration_options': null,
    'app.bookings.can_book_for_others': null,
    'app.parking.can_book_for_others': false,
    'app.bookings.use_building_timezone': false,
    'app.parking.use_building_timezone': false,
    'app.parking.available_period': null,
    'app.parking.show_calendar_links': false,
    'app.parking.hide_selected_space': false,
    'app.parking.show_waitlist': true,
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
                .every((id) => id.startsWith('e2e-hide-user-')),
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
        (url) =>
            /^\/api\/engine\/v2\/metadata\/e2e-hide-user-[^/]+$/.test(
                url.pathname,
            ) && !!url.searchParams.get('name'),
        (url) => {
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    id: url.pathname.split('/')[5],
                    name,
                    details: name.endsWith('_booking_rules') ? [] : {},
                },
            };
        },
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
                id: 'e2e-hide-user-type-' + name,
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
                'e2e-hide-user-type-',
            ),
        (url) => ASSETS[url.searchParams.get('type_id')!] ?? [],
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
    // BookingFormService._computeAvailableResources -> bookedResourceList.
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/bookings/booked',
        () => [],
    );
    const settings = { ...BOOKING, ...overrides };
    await useSettings(page, { ...CONTROLS, ...settings });
    return {
        settings,
        ready: async () => {
            await expect(
                page.locator('global-loading [initialisation-error]'),
            ).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect
                    .poll(
                        () =>
                            page.evaluate(
                                (name) =>
                                    (window as DebugWindow).setting?.(name),
                                key,
                            ),
                        { message: 'effective setting ' + key },
                    )
                    .toEqual(value);
            }
        },
    };
}

/** The picker's map-layer handle list (hidden DOM, one entry per space). */
function mapHandles(page: Page) {
    return page.locator(
        'parking-select-modal parking-space-map dynamic-map div[el-id]',
    );
}
/** The list/map toggle buttons live in the picker header. */
function mapButton(page: Page) {
    return page
        .locator('parking-select-modal header button')
        .filter({ has: page.locator('icon', { hasText: /^\s*map\s*$/ }) });
}

async function openPicker(page: Page, overrides: Settings) {
    const fixture = await prepare(page, overrides);
    const form = new ParkingForm(page);
    await form.open();
    await fixture.ready();
    await form.addSpaceButton.click();
    const modal = page.locator('parking-select-modal');
    await expect(modal).toBeVisible({ timeout: 20_000 });
    // List view is the default and proves the fixture's space was loaded before
    // the map layer is inspected.
    await expect(
        modal.locator('li[space]').filter({ hasText: 'E2E Bay 1' }),
    ).toHaveCount(1, { timeout: 20_000 });
    await expect(page.locator('parking-flow-success')).toHaveCount(0);
    return { modal, form };
}

test.describe('parking.hide_user', () => {
    test('parking.hide_user false renders a map feature for each parking space', async ({
        staffPage,
    }) => {
        const { modal } = await openPicker(staffPage, {
            'app.parking.hide_user': false,
        });
        await mapButton(staffPage).click();
        await expect(
            modal.locator('parking-space-map dynamic-map'),
        ).toHaveCount(1);
        await expect(mapHandles(staffPage)).toHaveCount(1, { timeout: 20_000 });
        await expect(modal.locator(`[el-id="${BAY_ID}"]`)).toHaveCount(1);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });

    test('parking.hide_user true renders no map features while the list still works', async ({
        staffPage,
    }) => {
        const { modal } = await openPicker(staffPage, {
            'app.parking.hide_user': true,
        });
        await mapButton(staffPage).click();
        // The map component must be mounted: an unmounted map would also give 0.
        await expect(
            modal.locator('parking-space-map dynamic-map'),
        ).toHaveCount(1);
        await expect(mapHandles(staffPage)).toHaveCount(0);
        // The space is still offered in the list: only the map layer is hidden.
        await modal
            .locator('header button')
            .filter({
                has: staffPage.locator('icon', { hasText: /^\s*list\s*$/ }),
            })
            .click();
        await expect(
            modal.locator('li[space]').filter({ hasText: 'E2E Bay 1' }),
        ).toHaveCount(1);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });

    test('parking.hide_user legacy key app.parkings.hide_user still suppresses features', async ({
        staffPage,
    }) => {
        // app.parking.hide_user is held null by CONTROLS: only the legacy key is
        // set, so the `??` fallback is what hides the features.
        const { modal } = await openPicker(staffPage, {
            'app.parkings.hide_user': true,
        });
        await expect
            .poll(
                () =>
                    staffPage.evaluate(() =>
                        (window as DebugWindow).setting?.(
                            'app.parking.hide_user',
                        ),
                    ),
                {
                    message:
                        'the modern key must be null for the legacy fallback',
                },
            )
            .toBeNull();
        await mapButton(staffPage).click();
        await expect(
            modal.locator('parking-space-map dynamic-map'),
        ).toHaveCount(1);
        await expect(mapHandles(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });
});
