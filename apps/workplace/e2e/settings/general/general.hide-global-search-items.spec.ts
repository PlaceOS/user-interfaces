// WPA Settings Batch 1 + 2 (PR #595). Repository-ready copy of the reviewed
// external draft reviewed-codex/general/hide-global-search-items.spec.ts.
// Exact setting key(s): app.hide_global_search_items
// Unique settings: 1. Scenarios: 3.
// Evidence: external draft run 2026-10-26, 3/3 PASS. Repository run PENDING.
// Repository adaptation: repository imports and readOnlyTest only; the external
// draft adapter is not used. Its held setting controls are inlined as CONTROLS
// and its app-error capture and non-local network block (Google Fonts answered
// locally) are folded into the wsAudit fixture below.
//
// Setting: general.hide_global_search_items (source:
//   libs/explore/src/lib/explore-search.service.ts:426 spaces, :499 users and
//   :610-614 hideItem, which reads `app.hide_global_search_items`;
//   apps/workplace/src/app/components/global-search.component.ts renders one
//   row per result with the raw option type as the badge).
//
// Scenarios: 3
//   1. [] (baseline) shows both the matching user and the matching space.
//   2. ['users'] hides the user result and leaves the space result intact.
//   3. ['spaces'] hides the space result and leaves the user result intact
//      (the list is per-result-type, not an all-or-nothing switch).
// Preconditions/fixtures: readOnlyTest (local read-only legacy fixture) with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call) and the REAL organisation, on /#/landing with
//   app.global_search true. GET-only stubs serve: one `/api/staff/v1/people`
//   result (E2E User, e2e.user@example.com) because app.basic_user_search is
//   false; one `/api/engine/v2/systems?q=` result (E2E Space, map_id
//   `e2e-space-shape`, capacity 8); empty `children?name=desks` and
//   `children?name=map_features`; empty points-of-interest / emergency-contacts
//   metadata; an empty zone-scoped asset_categories list (no asset-based
//   contacts); empty /api/staff/v1/bookings and /api/staff/v1/calendars; and the
//   hidden asset category/type bootstrap so no POST is attempted. Local backend
//   only (assertLocalOnly).
// Expected behaviour: results need a query longer than two characters and a
//   400 ms debounce. Each result group is included only while hideItem(type) is
//   false; hiding `users` does not touch `spaces` and vice versa. Rows are `a`
//   elements inside the results panel and their badge text is the raw lowercase
//   option type (`user` / `space`, capitalised by CSS only). Nothing is opened
//   or submitted, and the read-only fixture fails the test on any non-GET /api
//   request.
//
// Notes:
// - The query must be `e2e` (3 characters). `_user_search` / `_space_search`
//   resolve to [] at 2 characters or fewer, so a shorter string would make the
//   baseline scenario fail with no signal.
// - The results panel exists only while the filter is non-empty; select it with
//   `div[search].bottom-0` because `global-search` also renders the input panel
//   as `div[search]`.
// - Hiding a type must be anchored on the other type, so scenario 2 and 3 each
//   prove the visible row is the one that was NOT hidden.
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

// The landing page bootstraps the hidden parking/locker/desk categories and
// creates them when a GET finds none, so serve those GETs from fixtures.
const HIDDEN_CATEGORIES = [
    { id: 'e2e-search-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-search-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-search-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-search-lockers', name: '_LOCKERS_', hidden: true },
];
const HIDDEN_TYPES: Record<string, string[]> = {
    'e2e-search-catering': [],
    'e2e-search-desks': ['_DESKS_'],
    'e2e-search-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-search-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};

const QUERY = 'e2e';
const USER = {
    id: 'e2e-search-user',
    name: 'E2E User',
    email: 'e2e.user@example.com',
    username: 'e2e.user',
    organisation: 'E2E Org',
    department: 'E2E',
};
const SPACE = {
    id: 'e2e-search-space',
    name: 'E2E Space',
    display_name: 'E2E Space',
    map_id: 'e2e-space-shape',
    capacity: 8,
    bookable: true,
    zones: [],
};

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['parking'],
    'app.show_quick_book': false,
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
    'app.global_search': true,
    'app.basic_user_search': false,
    'app.hide_global_search_items': [],
};

async function prepare(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    // Hidden asset bootstrap (parking-assets.fn.ts / locker-assets.fn.ts).
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' &&
            url.searchParams.get('limit') === '500',
        () => HIDDEN_CATEGORIES,
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('limit') === '500' &&
            Object.hasOwn(
                HIDDEN_TYPES,
                url.searchParams.get('category_id') ?? '',
            ),
        (url) =>
            HIDDEN_TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: 'e2e-search-type-' + name,
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
                'e2e-search-type-',
            ),
        () => [],
    );
    // ExploreSearchService user results: searchStaff(q) -> /api/staff/v1/people.
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/people',
        () => [USER],
    );
    // ExploreSearchService space results: querySystems({ q, zone_id }).
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            url.searchParams.get('q') === QUERY,
        () => [SPACE],
    );
    // Session noise loaders, all served empty.
    await getOnly(
        page,
        (url) =>
            /^\/api\/engine\/v2\/metadata\/[^/]+\/children$/.test(
                url.pathname,
            ) &&
            ['desks', 'map_features'].includes(
                url.searchParams.get('name') ?? '',
            ),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            ['points-of-interest', 'emergency_contacts'].includes(
                url.searchParams.get('name') ?? '',
            ),
        (url) => {
            const name = url.searchParams.get('name')!;
            return {
                [name]: { id: url.pathname.split('/')[5], name, details: {} },
            };
        },
    );
    // _asset_based_contacts: no _EMERGENCY_CONTACTS_ category in the building.
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            !!url.searchParams.get('zone_id'),
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/bookings',
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    const settings = { ...BASE, ...overrides };
    await useSettings(page, { ...CONTROLS, ...settings });
    return {
        settings,
        open: async () => {
            await page.goto('/#/landing');
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
            await expect(page.locator('topbar')).toBeVisible();
            return page.locator('topbar global-search');
        },
    };
}

/** The results panel (the second `div[search]`; the first holds the input). */
function resultsPanel(page: Page) {
    return page.locator('global-search div[search].bottom-0');
}
function resultRows(page: Page) {
    return resultsPanel(page).locator('a');
}
/** The badge shows the raw lowercase option type. */
function badge(row: Locator) {
    return row.locator('div.bg-secondary');
}

async function search(page: Page) {
    await page.locator('global-search button[name="global-search"]').click();
    const input = page.locator('global-search div[search] input');
    await expect(input).toBeVisible();
    await input.fill(QUERY);
    // Rows appear after the 400 ms debounce once loading clears.
    await expect
        .poll(() => resultRows(page).count(), { timeout: 20_000 })
        .toBeGreaterThan(0);
    return input;
}

test.describe('WPA settings: hide global search items', () => {
    test('hide_global_search_items [] shows the matching user and space', async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, {
            'app.hide_global_search_items': [],
        });
        const root = await fixture.open();
        await expect(root).toBeVisible();
        await search(staffPage);
        const rows = resultRows(staffPage);
        const user = rows.filter({ hasText: 'E2E User' });
        const space = rows.filter({ hasText: 'E2E Space' });
        await expect(user).toHaveCount(1);
        await expect(space).toHaveCount(1);
        await expect(rows).toHaveCount(2);
        await expect(badge(user)).toHaveText('user');
        await expect(badge(space)).toHaveText('space');
        await expect(user).toContainText('e2e.user@example.com');
        await expect(space).toContainText('Capacity: 8');
        await expect(resultsPanel(staffPage).locator('div[empty]')).toHaveCount(
            0,
        );
    });

    test('hide_global_search_items [users] hides the user but not the space', async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, {
            'app.hide_global_search_items': ['users'],
        });
        await fixture.open();
        await search(staffPage);
        const rows = resultRows(staffPage);
        const space = rows.filter({ hasText: 'E2E Space' });
        // Anchor on the surviving space so a zero user count is meaningful.
        await expect(space).toHaveCount(1);
        await expect(rows.filter({ hasText: 'E2E User' })).toHaveCount(0);
        await expect(rows).toHaveCount(1);
        await expect(badge(space)).toHaveText('space');
        await expect(space).toContainText('Capacity: 8');
        await expect(resultsPanel(staffPage).locator('div[empty]')).toHaveCount(
            0,
        );
    });

    test('hide_global_search_items [spaces] hides the space but not the user', async ({
        staffPage,
    }) => {
        const fixture = await prepare(staffPage, {
            'app.hide_global_search_items': ['spaces'],
        });
        await fixture.open();
        await search(staffPage);
        const rows = resultRows(staffPage);
        const user = rows.filter({ hasText: 'E2E User' });
        await expect(user).toHaveCount(1);
        await expect(rows.filter({ hasText: 'E2E Space' })).toHaveCount(0);
        await expect(rows).toHaveCount(1);
        await expect(badge(user)).toHaveText('user');
        await expect(user).toContainText('e2e.user@example.com');
        await expect(resultsPanel(staffPage).locator('div[empty]')).toHaveCount(
            0,
        );
    });
});
