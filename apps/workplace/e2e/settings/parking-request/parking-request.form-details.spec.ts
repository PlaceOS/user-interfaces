// Coverage: 3 unique settings, 6 scenarios.
// Local execution: 6/6 PASS, as reported by the user.
// Settings: parking.show_special_needs, parking.request_submission_notes_html,
// parking.can_book_for_anyone (docs/settings/workplace.md:96, 98, 100).
// Consumers: apps/workplace/src/app/book/parking-request-flow/
//   parking-request-form.component.ts:194-212 and
//   parking-request-form-details.component.ts:429-456, 475-500, 1463-1467.
// Opening the request form and switching request type only changes local form
// state. The submit button is never clicked.
import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;

// Test-local only: the shared fixture remains unchanged. Authentication is
// established by that fixture; these guards cover browser activity afterwards.
type SafetyAudit = { blocked_http: string[]; unexpected_ws: string[] };
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
            await info.attach('landing-readonly-safety-audit', {
                body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
            });
            expect(audit, 'zero attempted HTTP writes/provider reads or unexpected WebSockets').toEqual({
                blocked_http: [], unexpected_ws: [],
            });
        }
    }, { auto: true, timeout: 30_000 }],
});



const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const CATEGORIES = [
    { id: 'codex-next20-catering', name: '_CATERING_', hidden: true },
    { id: 'codex-next20-desks', name: '_DESKS_', hidden: true },
    { id: 'codex-next20-parking', name: '_PARKING_', hidden: true },
    { id: 'codex-next20-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'codex-next20-catering': [],
    'codex-next20-desks': ['_DESKS_'],
    'codex-next20-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'codex-next20-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const PRESETS = [
    { id: 'codex-day', name: 'E2E Day Shift', start_time: 480, end_time: 1020 },
    { id: 'codex-late', name: 'E2E Late Shift', start_time: 600, end_time: 1080 },
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
    'app.desks.use_assets': false,
    'app.parking.restrict_home_location': false,
    'app.parking.allow_recurrence': false,
    'app.parking.available_period': 14,
    'app.parking.use_building_timezone': false,
    'app.bookings.use_building_timezone': false,
    'app.parking.hidden_buildings': [],
    'app.parking.request_types': null,
    'app.parking.request_shift_options': PRESETS,
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

async function openRequest(page: Page, overrides: Settings) {
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
                id: 'codex-next20-type-' + name,
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
                'codex-next20-type-',
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

const typeCard = (root: Locator, name: string) =>
    root
        .locator('div.cursor-pointer')
        .filter({ has: root.page().getByText(name, { exact: true }) });

const sendButton = (page: Page) =>
    page
        .locator('parking-request-form button[btn]')
        .filter({
            has: page.locator('icon', { hasText: /^\s*send\s*$/ }),
        });

async function untouched(page: Page) {
    await expect(sendButton(page)).toBeVisible();
    await expect(page.locator('parking-request-success')).toHaveCount(0);
}

test(
    'parking.show_special_needs reveals the special needs details',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.show_special_needs': true,
        });
        await typeCard(root, 'P2 Special Needs Request').click();
        await expect(typeCard(root, 'P2 Special Needs Request')).toHaveClass(/border-info/);
        await expect(
            root.getByText('Special Needs Details', { exact: true }),
        ).toHaveCount(1);
        await untouched(staffPage);
    },
);

test(
    'parking.show_special_needs false hides the special needs details',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.show_special_needs': false,
        });
        await typeCard(root, 'P2 Special Needs Request').click();
        await expect(typeCard(root, 'P2 Special Needs Request')).toHaveClass(/border-info/);
        await expect(
            root.getByText('Special Needs Details', { exact: true }),
        ).toHaveCount(0);
        await untouched(staffPage);
    },
);

test(
    'parking.request_submission_notes_html renders the configured HTML',
    async ({ staffPage }) => {
        await openRequest(staffPage, {
            'app.parking.request_submission_notes_html':
                '<p>E2E submission note</p>',
        });
        const notes = staffPage.locator('parking-request-form div.prose');
        await expect(notes).toHaveCount(1);
        await expect(notes).toContainText('E2E submission note');
        await untouched(staffPage);
    },
);

test(
    'parking.request_submission_notes_html empty renders no notes block',
    async ({ staffPage }) => {
        await openRequest(staffPage, {
            'app.parking.request_submission_notes_html': '',
        });
        await expect(
            staffPage.locator('parking-request-form div.prose'),
        ).toHaveCount(0);
        await untouched(staffPage);
    },
);

test(
    'parking.can_book_for_anyone true shows the request-space user search',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.can_book_for_anyone': true,
        });
        await typeCard(root, 'Standard Parking Request').click();
        await expect(typeCard(root, 'Standard Parking Request')).toHaveClass(/border-info/);
        await expect(root.locator('a-user-search-field')).toHaveCount(1);
        await expect(root.locator('a-user-search-field')).toBeVisible();
        await untouched(staffPage);
    },
);

test(
    'parking.can_book_for_anyone false hides the request-space user search',
    async ({ staffPage }) => {
        const root = await openRequest(staffPage, {
            'app.parking.can_book_for_anyone': false,
        });
        await typeCard(root, 'Standard Parking Request').click();
        await expect(typeCard(root, 'Standard Parking Request')).toHaveClass(/border-info/);
        await expect(root.locator('a-user-search-field')).toHaveCount(0);
        await untouched(staffPage);
    },
);
