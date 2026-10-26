// WPA Settings Batch 1 + 2 (PR #595). Repository-ready copy of the reviewed
// external draft reviewed-codex/parking-request/parking-request.auto-approved-groups.spec.ts.
// Exact setting key(s): app.parking.auto_approved_groups
// Unique settings: 1. Scenarios: 3.
// Evidence: external draft run 2026-10-26, 3/3 PASS. Repository run PENDING.
// Repository adaptation: repository imports and readOnlyTest only; the external
// draft adapter is not used. Its held setting controls are inlined as CONTROLS
// and its app-error capture and non-local network block (Google Fonts answered
// locally) are folded into the wsAudit fixture below.
//
// Setting: parking.auto_approved_groups (source:
//   apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts:1527-1533
//   is_auto_approved, consumed by the approver block gate at :1170-1174 and the
//   approver reset at :1932-1949; user_group_names from
//   libs/common/src/lib/user-state.ts:64-66, fed by GET /api/engine/v2/users/current).
//
// Scenarios: 3
//   1. A configured group that the signed-in user holds hides the approver section.
//   2. A configured group the user does not hold keeps the approver section.
//   3. An empty list keeps the approver section even though the user has groups.
// Preconditions/fixtures: readOnlyTest (local read-only legacy fixture). The
//   only mutation is a read-through of GET /api/engine/v2/users/current:
//   route.fetch() + route.fulfill({ json: { ...user, groups } }), so the real
//   identity GET is still a GET and the fixture's email / sys_admin / support
//   assertions keep holding. Hidden asset categories/types/assets,
//   GET /api/staff/v1/calendars and GET /api/staff/v1/bookings?type=parking are
//   stubbed with GET-only handlers. app.parking.approver_groups carries one
//   option so the approver block has something to show when it is not hidden.
// Expected behaviour: is_auto_approved() is true only when the setting is
//   non-empty AND one of its entries appears in user_group_names(); while it is
//   true the approver block is absent and no approver_group reset happens. User
//   groups are never written: the only request to /users/current is the app's
//   own GET, and the read-only fixture fails the test on any non-GET /api call.
//
// Notes:
// - The group name is synthetic ("e2e-approvers"). It is appended to the
//   browser-visible copy of the identity only; the backend record is untouched.
// - Do not add placeos_admin / placeos_support: the parent fixture asserts the
//   scenario runs as a non-privileged staff user.
// - Wait for the identity read (identity_hits) before asserting the positive
//   cases, otherwise the section may not have been evaluated yet.
import type { Locator, Page, Route } from '@playwright/test';
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

// Tenant settings the verified draft run held fixed for every scenario. They
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

const CATEGORIES = [
    { id: 'e2e-auto-approve-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-auto-approve-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-auto-approve-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-auto-approve-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-auto-approve-catering': [],
    'e2e-auto-approve-desks': ['_DESKS_'],
    'e2e-auto-approve-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-auto-approve-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
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
const REQUEST: Settings = {
    ...COMMON,
    'app.features': ['parking'],
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
    'app.parking.approver_groups': [
        { id: 'e2e-approver-a', name: 'E2E Approver A' },
    ],
    'app.parking.auto_approved_groups': [],
    'app.parking.vehicle_types': null,
    'app.parking.request_submission_notes_html': '',
    'app.parking.can_book_for_anyone': false,
    'app.bookings.can_book_for_anyone': null,
    'app.parking.can_book_for_others': false,
    'app.bookings.can_book_for_others': null,
};
const USER_GROUPS = ['e2e-approvers', 'e2e-everyone'];

async function prepare(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    const hits = new Map<string, number>();
    // Read-through only: the real identity GET still happens, the browser copy
    // gains a `groups` array. Never a write, so the parent guard stays happy.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/users/current',
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const response = await route.fetch();
            const user = await response.json();
            hits.set('identity', (hits.get('identity') ?? 0) + 1);
            await route.fulfill({
                response,
                json: { ...user, groups: USER_GROUPS },
            });
        },
    );
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
                id: 'e2e-auto-approve-type-' + name,
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
                'e2e-auto-approve-type-',
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
    await useSettings(page, { ...CONTROLS, ...settings });
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    return {
        identityHits: () => hits.get('identity') ?? 0,
        ready: async () => {
            await expect(page.locator('global-loading [loader]')).toHaveCount(
                0,
            );
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

const ROUTE = '/#/book/parking-request/form';

/** The approver mat-select has no name or id; reach it through its heading. */
function approverHeading(root: Locator) {
    return root.locator('h3').filter({ hasText: 'Approver Group' });
}
function approverSelect(root: Locator) {
    return approverHeading(root).locator('xpath=..').locator('mat-select');
}

async function openRequest(page: Page, overrides: Settings) {
    const fixture = await prepare(page, overrides);
    await page.goto(ROUTE);
    await fixture.ready();
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    await expect(
        page.locator('parking-request-form button[btn]').filter({
            has: page.locator('icon', { hasText: /^\s*send\s*$/ }),
        }),
    ).toBeVisible();
    // The approver gate reads user_group_names(), which fills when the app's own
    // identity GET returns. Wait for that read before judging the section.
    await expect
        .poll(fixture.identityHits, {
            message: 'the app must read the staff identity once',
        })
        .toBeGreaterThan(0);
    return root;
}

async function untouched(page: Page) {
    await expect(
        page.locator('parking-request-form button[btn]').filter({
            has: page.locator('icon', { hasText: /^\s*send\s*$/ }),
        }),
    ).toBeVisible();
    await expect(page.locator('parking-request-success')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/parking-request\/form$/);
}

test.describe('WPA settings: parking request auto-approved groups', () => {
    test('parking.auto_approved_groups matching user group hides the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.auto_approved_groups': ['e2e-approvers'],
        });
        await expect(approverHeading(root)).toHaveCount(0);
        await expect(approverSelect(root)).toHaveCount(0);
        // The form itself still rendered: only the approver block was removed.
        await expect(root.locator('mat-select').first()).toBeVisible();
        await untouched(staffPage);
    });

    test('parking.auto_approved_groups non-matching group keeps the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.auto_approved_groups': ['e2e-other-team'],
        });
        await expect(approverHeading(root)).toHaveCount(1);
        const select = approverSelect(root);
        await expect(select).toHaveCount(1);
        await select.click();
        const options = staffPage.getByRole('option');
        await expect(options.first()).toBeVisible();
        expect(
            (await options.allInnerTexts()).map((text) =>
                text.replace(/\s+/g, ' ').trim(),
            ),
        ).toEqual(['E2E Approver A']);
        await staffPage.keyboard.press('Escape');
        await expect(options).toHaveCount(0);
        await untouched(staffPage);
    });

    test('parking.auto_approved_groups empty keeps the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.auto_approved_groups': [],
        });
        // The user still holds groups (identity fixture), but an empty setting
        // short-circuits is_auto_approved() before any comparison happens.
        await expect(approverHeading(root)).toHaveCount(1);
        await expect(approverSelect(root)).toContainText('E2E Approver A');
        await untouched(staffPage);
    });
});
