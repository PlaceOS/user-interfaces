// Setting: parking.approver_groups (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the wsAudit fixture.
//
// Source: apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
//   (setting signal, normalise + request-type filter, approver template block,
//   auto-select of the first option).
//
// Scenarios: 2
//   1. Two configured options: the first is preselected on load, and the list
//      renders one mat-option each, in setting order.
//   2. An empty list hides the whole approver section.
// Preconditions/fixtures: readOnlyTest (local read-only legacy fixture) with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call), GET-only stubs for the hidden asset categories/types/assets,
//   GET /api/staff/v1/calendars -> [] and GET /api/staff/v1/bookings?type=parking
//   -> []. Local backend only (assertLocalOnly). app.parking.request_types stays
//   null, so the default request types carry no approver_groups and nothing is
//   filtered out of the option list.
// Expected behaviour: the approver block renders only while
//   filtered_approver_group_options() is non-empty and the user is not
//   auto-approved; the mat-select lists every configured option in setting order
//   and holds the first option's id. Nothing is submitted: the form stays on
//   screen, the success view never appears, and the read-only fixture fails the
//   test on any non-GET /api request.
//
// Notes:
// - The approver mat-select has no name or id; it is reached through the section
//   heading, exactly as in parking-request.request-space-restrictions.spec.ts.
// - Labels pass through the translate pipe with APP.locale pinned to en-AU.
//   "E2E Approver A" is not an i18n key, so it renders unchanged.
// - Do NOT submit, and do not change the request type here: setRequestType()
//   re-runs the approver reset, which would mask scenario 3.
import type { Locator, Page, Route } from '@playwright/test';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import {
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';
import { COMMON, CONTROLS, optionLabels, ROUTE, type Settings, type WsAudit } from '../support/settings-harness';
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

// ensure_hidden_category / ensure_type POST when a GET finds nothing and
// move_type_to_category PUTs on a category mismatch (parking-assets.fn.ts,
// locker-assets.fn.ts). One shared response carries every hidden category.
const CATEGORIES = [
    { id: 'e2e-approver-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-approver-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-approver-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-approver-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-approver-catering': [],
    'e2e-approver-desks': ['_DESKS_'],
    'e2e-approver-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-approver-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
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
    'app.parking.approver_groups': [],
    'app.parking.auto_approved_groups': [],
    'app.parking.vehicle_types': null,
    'app.parking.request_submission_notes_html': '',
    'app.parking.can_book_for_anyone': false,
    'app.bookings.can_book_for_anyone': null,
    'app.parking.can_book_for_others': false,
    'app.bookings.can_book_for_others': null,
};
const OPTIONS = [
    { id: 'e2e-approver-a', name: 'E2E Approver A' },
    { id: 'e2e-approver-b', name: 'E2E Approver B' },
];

async function prepare(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
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
                id: 'e2e-approver-type-' + name,
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
                'e2e-approver-type-',
            ),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    // ParkingService._loadBookings: no existing parking booking today.
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
    return root;
}

/** Nothing was submitted: still on the form, success view absent. */
async function untouched(page: Page) {
    await expect(
        page.locator('parking-request-form button[btn]').filter({
            has: page.locator('icon', { hasText: /^\s*send\s*$/ }),
        }),
    ).toBeVisible();
    await expect(page.locator('parking-request-success')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/parking-request\/form$/);
}

/** The approver mat-select has no name or id; reach it through its heading. */
function approverHeading(root: Locator) {
    return root.locator('h3').filter({ hasText: 'Approver Group' });
}
function approverSelect(root: Locator) {
    return approverHeading(root).locator('xpath=..').locator('mat-select');
}

test.describe('WPA settings: parking request approver groups', () => {
    test('parking.approver_groups preselects the first option and renders every configured option in order', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.approver_groups': OPTIONS,
            'app.parking.auto_approved_groups': [],
        });
        await expect(approverHeading(root)).toHaveCount(1);
        const select = approverSelect(root);
        await expect(select).toHaveCount(1);
        // The collapsed select renders the selected option's name.
        await expect(select).toContainText('E2E Approver A');
        await expect(select).not.toContainText('E2E Approver B');
        const labels = await optionLabels(staffPage, select);
        expect(labels, 'the mat-option list follows the setting order').toEqual(
            ['E2E Approver A', 'E2E Approver B'],
        );
        await untouched(staffPage);
    });

    test('parking.approver_groups empty hides the approver section', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.approver_groups': [],
            'app.parking.auto_approved_groups': [],
        });
        await expect(approverHeading(root)).toHaveCount(0);
        await expect(approverSelect(root)).toHaveCount(0);
        // The rest of the request form is unaffected by the empty list.
        await expect(root.locator('mat-select').first()).toBeVisible();
        await untouched(staffPage);
    });
});
