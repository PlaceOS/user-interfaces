// Setting: parking.restrict_home_location. Exact key: app.parking.restrict_home_location.
// Coverage: 1 unique setting, 3 scenarios.
// Source: libs/bookings/src/lib/parking.service.ts is_home_location; the scan
//   effect and assignedDeskBuilding in libs/bookings/src/lib/booking-resource.loaders.ts;
//   apps/workplace/src/app/book/parking-flow.component.ts renders the
//   restricted block.
//
// Scenarios:
//   1. true with an assigned desk in the ACTIVE building shows the restriction.
//   2. false with the same assigned desk shows the normal booking form.
//   3. true with the assigned desk in building B while building A is active
//      shows the normal booking form, after both buildings' desk scans ran.
// Preconditions/fixtures: readOnlyTest (local read-only legacy fixture) with the
//   seeded non-admin staff identity read from the app's own
//   GET /api/engine/v2/users/current (watchIdentity; no extra identity call).
//   GET-only stubs serve a synthetic region with two buildings (A active via
//   app.default_building) and one level tagged `parking` under A; the hidden
//   `_PARKING_` category with `_PARKING_SPACES_` / `_PARKING_USERS_` /
//   `_PARKING_FLEET_VEHICLES_` types and NO assets, so deny_parking_access stays
//   false; and `GET /api/engine/v2/metadata/<building>/children?name=desks`,
//   which returns one desk carrying `assigned_to` = the current user's email for
//   the chosen building and an empty desk list for the other. Calendar and
//   parking booking lists are empty. Local backend only (assertLocalOnly).
// Expected behaviour: is_home_location() is true only when the setting is on
//   AND the desk building equals the active building; that branch replaces the
//   whole flow with the permission-none image, so parking-flow-form is absent.
//   Otherwise the normal form (parking-flow-form / parking-space-list-field) is
//   rendered. The desk scans are counted per building, so the negative scenario
//   cannot pass because the scan never ran. Nothing is selected or submitted,
//   and the read-only fixture fails the test on any non-GET /api request.
//
// Notes:
// - The restricted image is shared with the deny_parking_access branch, so both
//   the component signals (is_home_location / deny_parking_access) and the
//   parking-flow-form count are asserted alongside the image.
// - ParkingForm.open() waits for the form, which the restricted branch removes,
//   so the restricted scenarios navigate to the page object's own route and wait
//   for placeos-parking-flow instead.
// - assignedDeskBuilding() is reached from an effect that re-runs when the user
//   and the building list arrive, so the desk scans are polled rather than
//   counted once.
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
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
type Identity = { id?: string; email?: string; name?: string };
type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

// Tenant settings held fixed for every scenario. They
// are applied before the scenario's own settings, which always win. Controls,
// not additional covered settings.
const CONTROLS: Settings = {
    'app.use_legacy_flows': false,
    'app.schedule.event_sources': [],
    'app.schedule.use_driver': false,
    'app.schedule.use_websocket': false,
    'app.explore.disable': [],
    'app.explore.disable_actions': [],
    'app.explore.disable_features': [],
    'app.explore.disable_styles': [],
    'app.explore.disable_labels': [],
    'app.explore.cisco_maps.enabled': false,
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
    'app.events.multiple_spaces': false,
    'app.events.allow_multiple_spaces': false,
    'app.parking.show_status_details': true,
    'app.parking.show_users': false,
    'app.parking.hide_user': null,
    'app.parkings.hide_user': false,
    'app.desk.auto_checkin': false,
    'app.desks.hide_checkin': false,
    'app.desk.hide_checkin': false,
    'app.bookings.hide_checkin': false,
    'app.visitor.all_day_period': null,
    'app.visitors.all_day_period': null,
};

type WsAudit = {
    unexpected: string[];
    control: string[];
    app_errors: string[];
    external: string[];
};
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

/** The current user's identity, observed on the app's own GET. */
function watchIdentity(page: Page) {
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/users/current' &&
            response.request().method() === 'GET'
        )
            identity = response.json();
    });
    return async () => {
        await expect
            .poll(() => !!identity, {
                message: 'the app must read the staff identity',
            })
            .toBe(true);
        return identity!;
    };
}

// ------------------------------------------------------------- synthetic org
const REGION = 'e2e-home-region';
const BUILDING_A = 'e2e-home-building-a';
const BUILDING_B = 'e2e-home-building-b';
const LEVEL_A = 'e2e-home-level-a';
const LEVEL_B = 'e2e-home-level-b';
const LEVELS = [
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Home Level A',
        display_name: 'E2E Home Level A',
        tags: ['level', 'parking'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Home Level B',
        display_name: 'E2E Home Level B',
        tags: ['level'],
    },
];
const BUILDINGS = [
    {
        id: BUILDING_A,
        parent_id: REGION,
        name: 'E2E Home Building A',
        display_name: 'E2E Home Building A',
        tags: ['building'],
        timezone: 'UTC',
        location: '0,0',
    },
    {
        id: BUILDING_B,
        parent_id: REGION,
        name: 'E2E Home Building B',
        display_name: 'E2E Home Building B',
        tags: ['building'],
        timezone: 'UTC',
        location: '40,40',
    },
];

const CATEGORIES = [
    { id: 'e2e-home-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-home-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-home-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-home-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-home-catering': [],
    'e2e-home-desks': ['_DESKS_'],
    'e2e-home-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-home-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};

const COMMON: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.use_24_hour_time': true,
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
                name: 'E2E Home Region',
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
                .every((id) => id.startsWith('e2e-home-')),
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
            /^\/api\/engine\/v2\/metadata\/e2e-home-[^/]+$/.test(
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

/**
 * GET /metadata/<building>/children?name=desks — the source assignedDeskBuilding
 * reads when app.desks.use_assets is false. Only the desk building carries a
 * desk assigned to the current user.
 */
async function deskFixture(
    page: Page,
    desk_building: string,
    user: () => Promise<Identity>,
    hits: Record<string, number>,
) {
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(
                url.pathname,
            ) &&
            url.searchParams.get('name') === 'desks',
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const id = new URL(route.request().url()).pathname.split('/')[5];
            if (Object.hasOwn(hits, id)) hits[id] += 1;
            const me = await user();
            const details =
                id === desk_building && me?.email
                    ? [
                          {
                              id: 'e2e-home-desk',
                              name: 'E2E Home Desk',
                              map_id: 'e2e-home-desk',
                              bookable: true,
                              assigned_to: me.email,
                              groups: [],
                              features: [],
                              images: [],
                          },
                      ]
                    : [];
            await route.fulfill({
                json: [
                    {
                        zone: { id },
                        metadata: { desks: { name: 'desks', details } },
                    },
                ],
            });
        },
    );
}

async function prepare(page: Page, overrides: Settings, desk_building: string) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await organisationFixture(page);
    const hits: Record<string, number> = { [BUILDING_A]: 0, [BUILDING_B]: 0 };
    /** _PARKING_USERS_ asset GETs per zone (ParkingService._loadUsers). */
    const users: Record<string, number> = {};
    await deskFixture(page, desk_building, watchIdentity(page), hits);
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
                id: 'e2e-home-type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    // No parking spaces and, critically, no _PARKING_USERS_ assets: the deny
    // gate must stay false so only the home-location branch can hide the form.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            (url.searchParams.get('type_id') ?? '').startsWith(
                'e2e-home-type-',
            ),
        (url) => {
            if (url.searchParams.get('type_id') === 'e2e-home-type-_PARKING_USERS_') {
                const zone = url.searchParams.get('zone_id') ?? '';
                users[zone] = (users[zone] ?? 0) + 1;
            }
            return [];
        },
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
        (url) => url.pathname === '/api/staff/v1/bookings/booked',
        () => [],
    );
    const settings = { ...BOOKING, ...overrides };
    await useSettings(page, { ...CONTROLS, ...settings });
    const form = new ParkingForm(page);
    return {
        settings,
        form,
        hits,
        users,
        ready: async () => {
            await expect(page.locator('placeos-parking-flow')).toHaveCount(1);
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

/**
 * Read the flow's own computed state, so the image cannot be blamed on `deny`.
 *
 * `home_building_id` belongs to the injected ParkingService, not to the flow
 * component. Read that signal through the component's `_parking` reference.
 * This is a read-only probe: it invokes only signal getters. Fail closed if the
 * component, service or signal is unavailable rather than treating it as null.
 */
function flowState(page: Page) {
    return page.locator('placeos-parking-flow').evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  _parking?: {
                      home_building_id?: () => string | null;
                  };
                  /** BookingFormService of the flow (read-only signal getter). */
                  _state?: {
                      has_assigned_desk?: () => boolean;
                  };
                  is_home_location?: () => boolean;
                  deny_parking_access?: () => boolean;
              }
            | undefined;
        if (!component) {
            throw new Error('parking flow component is unavailable');
        }
        const parking = component._parking;
        if (!parking) {
            throw new Error(
                'parking service is unavailable on the parking flow component',
            );
        }
        if (typeof parking.home_building_id !== 'function') {
            throw new Error(
                'parking service home_building_id signal is unavailable',
            );
        }
        return {
            restricted: component.is_home_location?.() ?? null,
            home: parking.home_building_id(),
            denied: component.deny_parking_access?.() ?? null,
            // null (not false) when the signal is unavailable, so a wait on
            // true fails closed.
            assigned_desk: component._state?.has_assigned_desk?.() ?? null,
        };
    });
}

function permissionImage(page: Page) {
    return page.locator(
        'placeos-parking-flow img[src="assets/icons/permission-none.svg"]',
    );
}

/** The restricted branch replaces the form, so ParkingForm.open() cannot be used. */
async function openRestricted(
    page: Page,
    overrides: Settings,
    desk_building: string,
) {
    const fixture = await prepare(page, overrides, desk_building);
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    return fixture;
}

test.describe('parking.restrict_home_location', () => {
    test('parking.restrict_home_location true restricts parking at the assigned building', async ({
        staffPage,
    }) => {
        const fixture = await openRestricted(
            staffPage,
            { 'app.parking.restrict_home_location': true },
            BUILDING_A,
        );
        await expect(permissionImage(staffPage)).toHaveCount(1, {
            timeout: 30_000,
        });
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(0);
        await expect
            .poll(async () => (await flowState(staffPage)).home, {
                message:
                    'the desk scan must resolve the active building as home',
            })
            .toBe(BUILDING_A);
        await expect
            .poll(async () => (await flowState(staffPage)).restricted)
            .toBe(true);
        await expect
            .poll(async () => (await flowState(staffPage)).denied)
            .toBe(false);
        await expect.poll(() => fixture.hits[BUILDING_A]).toBeGreaterThan(0);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });

    test('parking.restrict_home_location false keeps the form at the assigned building', async ({
        staffPage,
    }) => {
        const fixture = await prepare(
            staffPage,
            { 'app.parking.restrict_home_location': false },
            BUILDING_A,
        );
        await fixture.form.open();
        await fixture.ready();
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
        await expect(
            staffPage.locator('parking-space-list-field'),
        ).toBeVisible();
        await expect
            .poll(async () => (await flowState(staffPage)).restricted)
            .toBe(false);
        // Anchor: ParkingService runs its users effect and its home-location scan
        // effect on the same active_building change; _loadUsers awaits the type
        // bootstrap before its _PARKING_USERS_ GET, so that GET for building A
        // comes after the scan effect ran for A.
        await expect
            .poll(() => fixture.users[BUILDING_A] ?? 0, {
                message: '_PARKING_USERS_ GET for the active building A',
            })
            .toBeGreaterThan(0);
        // Desk-list requests cannot tell the home-location scan apart: the
        // booking form's has_assigned_desk check calls the same
        // assignedDeskBuilding (same shared in-flight key) and reads A and B on
        // every load, and its resource list also reads A. Check the scan's own
        // result instead, after a positive anchor from that shared lookup:
        // has_assigned_desk() is true only once assignedDeskBuilding resolved to
        // building A, the result a broken gate would apply as home_building_id
        // (the scan effect ran for the final building list and active building
        // before this lookup could start, or shares its in-flight request).
        await expect
            .poll(async () => (await flowState(staffPage)).assigned_desk, {
                message: 'booking form resolved the assigned desk (building A)',
            })
            .toBe(true);
        // Positive evidence only: the desk lists were read (by any caller).
        expect(fixture.hits[BUILDING_A], 'desk list of building A read').toBeGreaterThan(0);
        expect(fixture.hits[BUILDING_B], 'desk list of building B read').toBeGreaterThan(0);
        const state = await flowState(staffPage);
        expect(state.home, 'no home building').toBeNull();
        expect(state.restricted, 'not restricted').toBe(false);
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
        // Re-checked after the view settled: still no home, still the form.
        const settled = await flowState(staffPage);
        expect(settled.home, 'no home building').toBeNull();
        expect(settled.restricted, 'not restricted').toBe(false);
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
    });

    test('parking.restrict_home_location true away from the assigned building keeps the form', async ({
        staffPage,
    }) => {
        // Active building A, assigned desk in B: both desk lists are scanned,
        // so the zero image count below cannot pass because nothing ran.
        const fixture = await openRestricted(
            staffPage,
            { 'app.parking.restrict_home_location': true },
            BUILDING_B,
        );
        await expect(staffPage.locator('parking-flow-form')).toBeVisible({
            timeout: 30_000,
        });
        await expect
            .poll(() => fixture.hits[BUILDING_A], {
                message: 'building A desks must be scanned',
                timeout: 30_000,
            })
            .toBeGreaterThan(0);
        await expect
            .poll(() => fixture.hits[BUILDING_B], {
                message: 'building B desks must be scanned',
                timeout: 30_000,
            })
            .toBeGreaterThan(0);
        await expect
            .poll(async () => (await flowState(staffPage)).home, {
                message: 'home is building B, which is not the active building',
            })
            .toBe(BUILDING_B);
        await expect
            .poll(async () => (await flowState(staffPage)).restricted)
            .toBe(false);
        await expect(permissionImage(staffPage)).toHaveCount(0);
        await expect(staffPage.locator('parking-flow-form')).toHaveCount(1);
        await expect(
            staffPage.locator('parking-space-list-field'),
        ).toBeVisible();
        await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
    });
});
