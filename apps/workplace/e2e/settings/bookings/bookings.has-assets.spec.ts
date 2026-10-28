// Coverage: 1 unique setting, 2 scenarios.
// Setting: bookings.has_assets (docs/settings/workplace.md; source:
//   apps/workplace/src/app/book/desk-flow-new/desk-flow-details.component.ts).
//
// The desk flow ORs the generic booking flag with the desk-specific flag:
// `has_assets = bookings.has_assets || desks.has_assets`. The existing
// desks.has-assets specs always hold bookings.has_assets at false, so this file
// proves the generic key independently. No asset is requested, attached or
// submitted; the form is never confirmed.
import type { Page, Route } from '@playwright/test';
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
import { type Settings } from '../support/settings-harness';
type DebugWindow = Window & { setting?: (key: string) => unknown };
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

// Test-local WebSocket guard. The shared readOnlyTest fixture already aborts
// every non-GET / non-local API request. The dev-server socket is held open so
// Vite does not reload; the shell's control socket is closed before it
// connects; every other socket fails the test.
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

const CATEGORIES = [
    { id: 'e2e-booking-assets-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-booking-assets-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-booking-assets-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-booking-assets-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-booking-assets-catering': [],
    'e2e-booking-assets-desks': ['_DESKS_'],
    'e2e-booking-assets-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-booking-assets-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};

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

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.feature_groups': {},
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.basic_user_search': true,
    // Expose the desktop details form without selecting a desk or confirming.
    'app.desk.auto_allocation': true,
    'app.desks.auto_allocation': true,
    'app.desks.hide_title': false,
    'app.desks.allow_groups': false,
    'app.desks.can_book_for_others': false,
    'app.bookings.can_book_for_others': false,
    'app.desks.can_book_lockers': false,
    'app.desks.use_assets': true,
    'app.desks.allow_recurrence': false,
    'app.desks.allow_time_changes': true,
    'app.desks.allow_all_day': false,
    'app.bookings.allow_all_day': false,
    'app.desk.all_day_default': false,
    'app.desks.all_day_default': false,
    'app.bookings.all_day_default': false,
    'app.desks.use_building_timezone': false,
    'app.bookings.use_building_timezone': false,
    'app.desks.available_period': 30,
    'app.desks.bookable_hours': null,
    'app.desk.min_duration': null,
    'app.desk.max_duration': null,
    'app.desk.duration_step': null,
    'app.desk.custom_duration_options': null,
    'app.desks.min_duration': 30,
    'app.desks.max_duration': 180,
    'app.desks.duration_step': 30,
    'app.desks.custom_duration_options': [],
    'app.bookings.min_duration': 30,
    'app.bookings.max_duration': 180,
    'app.bookings.duration_step': 30,
    'app.bookings.custom_duration_options': [],
};

async function prepare(page: Page, enabled: boolean) {
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
                id: 'e2e-booking-assets-type-' + name,
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
                'e2e-booking-assets-type-',
            ),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    const settings = {
        ...BASE,
        'app.desks.has_assets': false,
        'app.bookings.has_assets': enabled,
    };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    await page.goto('/#/book/desk/form');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    for (const [key, value] of [
        ['app.features', settings['app.features']],
        ['app.desks.has_assets', false],
        ['app.bookings.has_assets', enabled],
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
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    return details;
}

// One asset request field and label with the generic flag on, none with it
// off. Kept as data so the test body has no branches.
const SCENARIOS = [
    { enabled: false, fields: 0 },
    { enabled: true, fields: 1 },
];

for (const scenario of SCENARIOS) {
    test(`bookings.has_assets ${scenario.enabled} gates the desk asset request field with desks.has_assets false`, async ({
        staffPage,
    }) => {
        const details = await prepare(staffPage, scenario.enabled);
        await expect(details.locator('asset-list-field')).toHaveCount(
            scenario.fields,
        );
        await expect(details.locator('label[for="assets"]')).toHaveCount(
            scenario.fields,
        );
        // No asset is ever requested. With the field absent this also holds,
        // so it is asserted for both scenarios rather than only when shown.
        await expect(details.locator('asset-list-field [request]')).toHaveCount(
            0,
        );
        await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
        await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
    });
}
