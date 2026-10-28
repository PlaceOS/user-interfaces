import type {
    Browser,
    BrowserContext,
    BrowserContextOptions,
    ConsoleMessage,
    Locator,
    Page,
    Route,
    TestInfo,
} from '@playwright/test';
import * as fs from 'fs';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
    staffEmail,
} from '../../../../../e2e/support/env';
import { test as baseTest, expect } from '../../../../../e2e/support/fixtures';
import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import {
    READ_ONLY_SETTINGS,
    readOnlyTest,
} from '../../local/wpa-settings-readonly-legacy.fixture';

// ---------------------------------------------------------------------------
// Safety audit and GET fixtures for the read-only specs
// ---------------------------------------------------------------------------

/*
 * Shared harness for the read-only Workplace settings specs.
 *
 * `test` extends the staff-only readOnlyTest with a safety audit. HTTP: the
 * parent guard (wpa-settings-readonly-legacy.fixture.ts) aborts every non-GET
 * or non-local /api request and fails the test in teardown; it does not route
 * non-API assets (the app shell loads Google Fonts). WebSockets: the Vite
 * dev-server socket is held open, the shell's local control socket is closed
 * before it connects and recorded, and any other socket fails the test.
 */

/** What the safety audit records for one test. */
export type Audit = {
    websocket_attempts: string[];
    blocked_control_attempts: string[];
    tooling_websockets: string[];
    page_errors: string[];
    app_errors: string[];
    monitoring_errors: string[];
    fixtures: Record<string, number>;
};

/** The local app and backend origins; fixtures only answer these. */
export const ORIGINS = new Set([
    new URL(APP_URL).origin,
    new URL(BACKEND_URL).origin,
]);

/** The URL with every query value replaced, for audit records. */
export function safeURL(raw: string) {
    const url = new URL(raw);
    for (const key of [...url.searchParams.keys()])
        url.searchParams.set(key, '[redacted]');
    return url.href;
}

export const test = readOnlyTest.extend<{ audit: Audit }>({
    audit: [
        async ({ staffPage }, use, info) => {
            const context = staffPage.context();
            const audit: Audit = {
                websocket_attempts: [],
                blocked_control_attempts: [],
                tooling_websockets: [],
                page_errors: [],
                app_errors: [],
                monitoring_errors: [],
                fixtures: {},
            };
            const observe = (page: Page) => {
                page.on('pageerror', (error) =>
                    audit.page_errors.push(error.name + ': ' + error.message),
                );
                page.on('console', (message) => {
                    if (
                        message.type() === 'error' &&
                        /^(ERROR\b|NG0\d+)/.test(message.text())
                    ) {
                        audit.app_errors.push(message.text().slice(0, 500));
                    }
                });
            };
            observe(staffPage);
            context.on('page', observe);
            const closing: Promise<void>[] = [];
            try {
                await context.routeWebSocket('**/*', (socket) => {
                    let socket_url = '<unparsed URL>';
                    try {
                        const url = new URL(socket.url());
                        socket_url = safeURL(url.href);
                        const app = new URL(APP_URL);
                        const local =
                            url.host === app.host &&
                            url.protocol ===
                                (app.protocol === 'https:' ? 'wss:' : 'ws:');
                        // The Vite client opens this socket; closing it makes the
                        // client poll and reload. Held open, never connected.
                        if (
                            local &&
                            url.pathname === '/' &&
                            [...url.searchParams.keys()].join(',') === 'token'
                        ) {
                            audit.tooling_websockets.push(socket_url);
                            return;
                        }
                        if (
                            local &&
                            url.pathname === '/api/engine/v2/systems/control'
                        ) {
                            audit.blocked_control_attempts.push(socket_url);
                        } else audit.websocket_attempts.push(socket_url);
                    } catch (error) {
                        audit.monitoring_errors.push(
                            'WebSocket interception for ' +
                                socket_url +
                                ': ' +
                                String(error),
                        );
                    }
                    closing.push(
                        socket.close().catch((error: unknown) => {
                            audit.monitoring_errors.push(
                                'WebSocket close for ' +
                                    socket_url +
                                    ': ' +
                                    String(error),
                            );
                        }),
                    );
                });
                await use(audit);
            } finally {
                try {
                    await context.close();
                } catch (error) {
                    audit.monitoring_errors.push(
                        'Context close: ' + String(error),
                    );
                }
                await Promise.all(closing);
                try {
                    await info.attach('settings-safety-audit', {
                        body: Buffer.from(JSON.stringify(audit, null, 2)),
                        contentType: 'application/json',
                    });
                } finally {
                    expect(
                        {
                            ws: audit.websocket_attempts,
                            page: audit.page_errors,
                            app: audit.app_errors,
                            monitoring: audit.monitoring_errors,
                        },
                        'zero unexpected WebSocket, application or monitoring failures',
                    ).toEqual({
                        ws: [],
                        page: [],
                        app: [],
                        monitoring: [],
                    });
                }
            }
        },
        { auto: true, timeout: 15_000 },
    ],
});

/** Origin-limited GET-only responses. Non-GET always falls through to the guard. */
export async function getOnly(
    page: Page,
    audit: Audit,
    name: string,
    match: (url: URL) => boolean,
    body: (url: URL) => unknown | Promise<unknown>,
) {
    await page.route(
        (url) => ORIGINS.has(url.origin) && match(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            try {
                const json = await body(new URL(route.request().url()));
                audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
                await route.fulfill({ json });
            } catch (error) {
                // Recorded (fails in teardown); the unmodified GET continues to the guard.
                audit.monitoring_errors.push(
                    name + ' fixture: ' + String(error),
                );
                await route.fallback().catch(() => undefined);
            }
        },
    );
}

// ---------------------------------------------------------------------------
// Shared types and settings data
// ---------------------------------------------------------------------------

export type Settings = Record<string, unknown>;

export const PIXEL =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="24"/%3E';

export const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['visitor-invite'],
    'app.feature_groups': {},
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.logo_light': PIXEL,
    'app.bookings.multiple_visitors': false,
    'app.bookings.all_day_default': false,
    'app.bookings.can_book_for_anyone': false,
    'app.bookings.can_book_for_others': false,
    'app.visitors.can_book_for_anyone': false,
    'app.visitors.can_book_for_others': false,
    'app.visitors.allow_all_day': false,
    'app.bookings.use_building_timezone': false,
    'app.visitors.use_building_timezone': false,
    'app.visitors.bookable_hours': null,
    'app.bookings.bookable_hours': null,
    'app.visitors.reason_required': false,
};

export const BASE_SETTINGS: Settings = {
    'app.features': ['parking'],
    'app.show_quick_book': false,
    'app.allow_dark_mode': false,
    'app.chat.enabled': false,
};

export const COMMON: Settings = {
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

export const BOOKING: Settings = {
    ...COMMON,
    'app.features': ['parking'],
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

export const BULK_METADATA = [
    'bindings',
    'settings',
    'workplace_app',
    'booking_rules',
];

export const CATEGORIES = [
    { id: 'e2e-settings-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-settings-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-settings-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-settings-lockers', name: '_LOCKERS_', hidden: true },
];

export const CONTROLS: Settings = {
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

export type Debug = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
    app?: {
        org?: {
            initialised(): boolean;
            building?: { id: string; name: string };
            region?: { id: string };
        };
    };
    geoCalls?: number;
};

export type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
};

export type Identity = {
    id: string;
    email: string;
    name: string;
    groups?: string[];
};

export const LIST_METADATA = [
    'parking_booking_rules',
    'desk_booking_rules',
    'room_booking_rules',
    'desks',
    'map_regions',
];

export const LOCALE = 'en-US';

export const LOCKER: Settings = {
    ...COMMON,
    'app.features': ['lockers'],
    'app.desks.use_assets': false,
    'app.lockers.default_duration': 60,
    'app.lockers.all_day_default': false,
    'app.bookings.all_day_default': false,
    'app.lockers.allow_all_day': true,
    'app.bookings.allow_all_day': null,
    'app.lockers.allow_time_changes': true,
    'app.lockers.disabled_date_select': false,
    'app.lockers.disabled_start_time': false,
    'app.lockers.hide_end_time': false,
    'app.lockers.max_duration': 240,
    'app.bookings.max_duration': null,
    'app.lockers.use_building_timezone': false,
    'app.bookings.use_building_timezone': false,
    'app.lockers.show_calendar_links': false,
};

export const PRESETS = [
    { id: 'e2e-day', name: 'E2E Day Shift', start_time: 480, end_time: 1020 },
    { id: 'e2e-late', name: 'E2E Late Shift', start_time: 600, end_time: 1080 },
];

export const REQUEST: Settings = {
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

export const ROOM_ONE = {
    id: 'prepared-room-one',
    name: 'Prepared Room One',
    display_name: 'Prepared Room One',
    email: 'prepared-room-one@example.invalid',
    bookable: true,
    capacity: 1,
    features: [],
    images: [],
    zones: [],
    level: { id: 'prepared-level', parent_id: 'prepared-building' },
};

export const ROOM_TWO = {
    ...ROOM_ONE,
    id: 'prepared-room-two',
    name: 'Prepared Room Two',
    display_name: 'Prepared Room Two',
    email: 'prepared-room-two@example.invalid',
};

export const ROUTE = '/#/book/parking-request/form';

export const TYPES: Record<string, string[]> = {
    'e2e-settings-catering': [],
    'e2e-settings-desks': ['_DESKS_'],
    'e2e-settings-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-settings-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};

export const USER = {
    id: 'e2e-zone-settings-user',
    name: 'Synthetic Staff',
    email: 'zone-settings@example.invalid',
    groups: [],
    sys_admin: false,
    support: false,
};

// ---------------------------------------------------------------------------
// Page set-up and form helpers
// ---------------------------------------------------------------------------

export async function durationMenu(
    page: Page,
    details: ReturnType<Page['locator']>,
) {
    await details.locator('duration-field button[duration-field]').click();
    const options = page.locator(
        '.cdk-overlay-container button[data-duration]',
    );
    await expect(options.first()).toBeVisible();
    return options;
}

export async function durationOptions(page: Page, form: InviteVisitorForm) {
    await form.root.locator('a-duration-field button[duration-field]').click();
    const options = page.locator(
        '.cdk-overlay-container button[data-duration]',
    );
    await expect(options.first()).toBeVisible();
    return options;
}

export async function futureDesk(
    page: Page,
    details: ReturnType<Page['locator']>,
) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 1);
    date.setUTCHours(12, 0, 0, 0);
    await details.locator('date-field button').first().click();
    await pickCalendarDay(
        page,
        page.locator('.cdk-overlay-container date-calendar'),
        date.valueOf(),
        { closes_on_pick: true },
    );
    await details.locator('time-field[name="time"] button[time-field]').click();
    await page
        .locator('.cdk-overlay-container button[data-time="10:00"]')
        .click();
}

export async function futureDuration(page: Page, form: InviteVisitorForm) {
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(12, 0, 0, 0);
    await form.setDate(tomorrow.valueOf());
    await form.root
        .locator('a-time-field[name="time"] button[time-field]')
        .click();
    await page
        .locator('.cdk-overlay-container button[data-time="10:00"]')
        .click();
}

export const image = (colour: string) =>
    `data:image/svg+xml,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="24"><rect width="80" height="24" fill="${colour}"/></svg>`,
    )}`;

export function labelledSelect(root: Locator, label: string) {
    return root
        .locator('label')
        .filter({ hasText: new RegExp('^\\s*' + label + '\\s*\\*?\\s*$') })
        .locator('..')
        .locator('mat-select');
}

export async function meetingDurations(page: Page, root: Locator) {
    const button = root.locator('duration-field button[duration-field]');
    await expect(button).toBeEnabled();
    await button.click();
    const options = page.locator(
        '.cdk-overlay-container button[data-duration]',
    );
    await expect(options.first()).toBeVisible();
    const ids = await options.evaluateAll((els) =>
        els.map((el) => Number(el.getAttribute('data-duration'))),
    );
    await page.keyboard.press('Escape');
    await expect(options).toHaveCount(0);
    return ids;
}

export async function menuValues(
    page: Page,
    trigger: Locator,
    attribute: 'data-time' | 'data-duration',
) {
    await expect(trigger).toBeEnabled();
    await trigger.click();
    const options = page.locator(
        '.cdk-overlay-container button[' + attribute + ']',
    );
    await expect(options.first()).toBeVisible();
    const values = await options.evaluateAll(
        (elements, name) =>
            elements.map((element) => element.getAttribute(name)!),
        attribute,
    );
    await page.keyboard.press('Escape');
    await expect(options).toHaveCount(0);
    return values.map((value) => {
        if (attribute === 'data-duration') return Number(value);
        const [h, m] = value.split(':').map(Number);
        return h * 60 + m;
    });
}

export async function openCalendar(page: Page, root: Locator) {
    const picker = page.locator('.cdk-overlay-container date-calendar');
    await expect(async () => {
        if (!(await picker.isVisible().catch(() => false))) {
            await root
                .locator('a-date-field button')
                .first()
                .click({ timeout: 5_000 });
        }
        await expect(picker).toBeVisible({ timeout: 5_000 });
    }).toPass({ timeout: 30_000 });
    return picker;
}

export async function prepare(page: Page, audit: Audit, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
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
    // Parking/locker modules are not tested. Their shared bootstrap is read-only:
    // ensure_hidden_category/move_type_to_category must find matching records.
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
                id: 'e2e-settings-type-' + name,
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
                'e2e-settings-type-',
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
    // requestSpacesForZone: exact GET query; no resource status connections.
    await getOnly(
        page,
        audit,
        'empty landing rooms',
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            !!url.searchParams.get('zone_id') &&
            url.searchParams.get('limit') === '500' &&
            url.searchParams.get('signage') === 'false' &&
            [...url.searchParams.keys()].every((key) =>
                ['zone_id', 'limit', 'signage'].includes(key),
            ),
        () => [],
    );
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    return {
        settings,
        user: async () => {
            if (!identity)
                throw new Error(
                    'the application must establish staff identity',
                );
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading')).toHaveCount(1);
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
                                (name) => (window as Debug).setting?.(name),
                                key,
                            ),
                        { message: 'effective setting ' + key },
                    )
                    .toEqual(value);
            }
        },
    };
}

export async function openDesk(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, {
        'app.features': ['desks'],
        'app.feature_groups': {},
        'app.desk.auto_allocation': true,
        'app.desks.auto_allocation': true,
        'app.desks.hide_title': false,
        'app.desks.allow_groups': false,
        'app.desks.can_book_for_others': false,
        'app.bookings.can_book_for_others': false,
        'app.desks.can_book_lockers': false,
        'app.desks.has_assets': false,
        'app.desks.use_assets': true,
        'app.desks.allow_recurrence': false,
        'app.desks.allow_time_changes': true,
        'app.desks.allow_all_day': false,
        'app.bookings.allow_all_day': false,
        'app.desk.all_day_default': false,
        'app.desks.all_day_default': false,
        'app.bookings.all_day_default': false,
        'app.desks.use_building_timezone': false,
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
        ...overrides,
    });
    await page.goto('/#/book/desk/form');
    await fixture.ready();
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    return { details, fixture };
}

export async function roomProviderIsolation(page: Page, audit: Audit) {
    // Any unrecognised provider GET fails closed before a calendar integration can be contacted.
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            (url.pathname.startsWith('/api/staff/v1/calendars') ||
                url.pathname.startsWith('/api/staff/v1/events')),
        async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            audit.monitoring_errors.push(
                'Unmatched calendar provider GET: ' +
                    new URL(route.request().url()).pathname,
            );
            await route.abort('blockedbyclient');
        },
    );
    await getOnly(
        page,
        audit,
        'calendar list',
        (url) =>
            url.pathname === '/api/staff/v1/calendars' &&
            [...url.searchParams].length === 0,
        () => [],
    );
    await getOnly(
        page,
        audit,
        'calendar availability',
        (url) =>
            url.pathname === '/api/staff/v1/calendars/availability' &&
            !!url.searchParams.get('system_ids') &&
            !!url.searchParams.get('period_start') &&
            !!url.searchParams.get('period_end') &&
            url.searchParams
                .get('system_ids')!
                .split(',')
                .every((id) => [ROOM_ONE.id, ROOM_TWO.id].includes(id)),
        (url) =>
            url.searchParams
                .get('system_ids')!
                .split(',')
                .map((id) => {
                    const r = id === ROOM_ONE.id ? ROOM_ONE : ROOM_TWO;
                    return {
                        id: r.id,
                        name: r.name,
                        email: r.email,
                        resource: r,
                        availability: [],
                    };
                }),
    );
    await getOnly(
        page,
        audit,
        'calendar event list',
        (url) =>
            url.pathname === '/api/staff/v1/events' &&
            !!url.searchParams.get('period_start') &&
            !!url.searchParams.get('period_end'),
        () => [],
    );
}

export async function openPreparedRoom(
    page: Page,
    audit: Audit,
    overrides: Settings,
    view: number,
    resources: unknown[] = [],
    attendees: unknown[] = [],
    extra?: () => Promise<void>,
) {
    const fixture = await prepare(page, audit, {
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.events.use_bookings': true,
        'app.events.allow_all_day': true,
        'app.events.allow_multiday': false,
        'app.events.allow_recurrence': false,
        'app.events.has_assets': false,
        'app.events.hide_attendees': false,
        'app.events.hide_notes': false,
        'app.events.allow_externals': false,
        'app.events.use_building_timezone': false,
        'app.catering.backend': 'native',
        'app.catering_provider': '',
        ...overrides,
    });
    await roomProviderIsolation(page, audit);
    await getOnly(
        page,
        audit,
        'prepared room list',
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            !!url.searchParams.get('zone_id') &&
            url.searchParams.get('limit') === '500' &&
            url.searchParams.get('signage') === 'false' &&
            [...url.searchParams.keys()].every((k) =>
                ['zone_id', 'limit', 'signage'].includes(k),
            ),
        (url) =>
            [ROOM_ONE, ROOM_TWO].map((r) => ({
                ...r,
                zones: [url.searchParams.get('zone_id')],
            })),
    );
    await getOnly(
        page,
        audit,
        'empty native room bookings',
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'room' &&
            !!url.searchParams.get('period_start') &&
            !!url.searchParams.get('period_end'),
        () => [],
    );
    await getOnly(
        page,
        audit,
        'prepared empty room rules',
        (url) =>
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            url.searchParams.get('name') === 'room_booking_rules' &&
            [...url.searchParams.keys()].length === 1,
        () => ({
            room_booking_rules: { name: 'room_booking_rules', details: [] },
        }),
    );
    await page.addInitScript(
        ({ resources, attendees }) => {
            const date = new Date();
            date.setUTCDate(date.getUTCDate() + 1);
            date.setUTCHours(10, 0, 0, 0);
            sessionStorage.removeItem('PLACEOS.event');
            sessionStorage.setItem(
                'PLACEOS.event_form',
                JSON.stringify({
                    title: 'Prepared browser-only meeting',
                    date: date.valueOf(),
                    date_end: date.valueOf() + 3600000,
                    duration: 60,
                    all_day: false,
                    resources,
                    attendees,
                }),
            );
        },
        { resources, attendees },
    );
    if (extra) await extra();
    await page.goto('/#/book/meeting/form?view=' + view);
    await fixture.ready();
    const root = page.locator(
        view === 0
            ? 'meeting-flow-details'
            : view === 1
              ? 'meeting-flow-space-select'
              : 'meeting-flow-options',
    );
    await expect(root).toBeVisible();
    await expect(page.locator('meeting-flow-success')).toHaveCount(0);
    return root;
}

export async function openRoom(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, {
        'app.features': ['spaces'],
        'app.events.use_bookings': true,
        'app.events.allow_all_day': false,
        'app.events.allow_multiday': false,
        'app.events.allow_recurrence': false,
        'app.events.can_book_for_others': false,
        'app.events.use_building_timezone': false,
        'app.events.all_day_default': false,
        'app.events.bookable_hours': null,
        'app.events.has_assets': false,
        'app.catering.backend': 'native',
        ...overrides,
    });
    await page.goto('/#/book/meeting/form?view=0');
    await fixture.ready();
    const details = page.locator('meeting-flow-new meeting-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    await expect(
        page.locator(
            'meeting-flow-space-select, meeting-flow-options, meeting-flow-success',
        ),
    ).toHaveCount(0);
    return details;
}

export async function optionLabels(page: Page, select: Locator) {
    await expect(select).toHaveCount(1);
    await select.click();
    const options = page.getByRole('option');
    await expect(options.first()).toBeVisible();
    const labels = (await options.allInnerTexts()).map((text) =>
        text.replace(/\s+/g, ' ').trim(),
    );
    await page.keyboard.press('Escape');
    await expect(options).toHaveCount(0);
    return labels;
}

export function pixel(page: Page, x: number, y: number) {
    return page.locator('explore-map-view [map-canvas] canvas').evaluate(
        (node, point) => {
            const canvas = node as HTMLCanvasElement;
            if (!canvas.width || !canvas.height)
                throw new Error('Unready polygon canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error('Canvas context unavailable');
            return Array.from(
                ctx.getImageData(
                    Math.floor(point.x * canvas.width),
                    Math.floor(point.y * canvas.height),
                    1,
                    1,
                ).data,
            );
        },
        { x, y },
    );
}

export function roomState(page: Page) {
    return page
        .locator('explore-map-view explore-space-info')
        .evaluate((element) => {
            const component = (window as DebugWindow).ng?.getComponent(
                element,
            ) as
                | {
                      space(): { name: string };
                      status(): string;
                      events(): {
                          title: string;
                          host: string;
                          date: number;
                          date_end: number;
                      }[];
                      next(): { title: string; host: string } | undefined;
                      hide_meeting_title(): boolean;
                      hide_meeting_details(): boolean;
                  }
                | undefined;
            if (!component)
                throw new Error('Read-only room component unavailable');
            return {
                name: component.space().name,
                status: component.status(),
                events: component.events(),
                next: component.next() ?? null,
                hide_title: component.hide_meeting_title(),
                hide_details: component.hide_meeting_details(),
            };
        });
}

export async function roomView(
    page: Page,
    audit: Audit,
    overrides: Settings,
    view = 2,
) {
    const fixture = await prepare(page, audit, {
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.events.use_bookings': true,
        'app.events.has_assets': false,
        'app.events.hide_notes': false,
        'app.events.hide_attendees': false,
        'app.events.allow_externals': false,
        'app.events.allow_multiday': false,
        'app.events.allow_all_day': false,
        'app.events.all_day_default': false,
        'app.events.use_building_timezone': false,
        'app.events.allow_recurrence': false,
        'app.catering.backend': 'native',
        'app.catering_provider': '',
        'app.basic_user_search': true,
        ...overrides,
    });
    await page.goto('/#/book/meeting/form?view=' + view);
    await fixture.ready();
    const root = page.locator(
        view === 2 ? 'meeting-flow-options' : 'meeting-flow-details',
    );
    await expect(root).toBeVisible();
    if (view === 2)
        await expect(
            root
                .locator('button')
                .filter({
                    has: page.locator('icon', { hasText: /^\s*task_alt\s*$/ }),
                }),
        ).toHaveCount(1);
    else await expect(root.locator('input[name$=".title"]')).toBeEditable();
    await expect
        .poll(() =>
            root.evaluate((el) => {
                const c = (window as Debug).ng?.getComponent(el) as
                    | { form_value(): { resources?: unknown[] } }
                    | undefined;
                return c?.form_value().resources?.length ?? -1;
            }),
        )
        .toBe(0);
    return { root, fixture };
}

export async function stubBootstrap(page: Page) {
    const origins = new Set([
        new URL(APP_URL).origin,
        new URL(BACKEND_URL).origin,
    ]);
    const types: Record<string, string[]> = {
        catering: [],
        desks: ['_DESKS_'],
        parking: [
            '_PARKING_SPACES_',
            '_PARKING_USERS_',
            '_PARKING_FLEET_VEHICLES_',
        ],
        lockers: ['_LOCKER_BANKS_', '_LOCKERS_'],
    };
    const get = async (match: (url: URL) => boolean, body: unknown) => {
        await page.route(
            (url) => origins.has(url.origin) && match(url),
            async (route) => {
                if (route.request().method() !== 'GET') return route.fallback();
                await route.fulfill({ json: body });
            },
        );
    };
    await get(
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' &&
            url.searchParams.get('limit') === '500',
        Object.keys(types).map((name) => ({
            id: 'landing-readonly-' + name,
            name: '_' + name.toUpperCase() + '_',
            hidden: true,
        })),
    );
    for (const [category, names] of Object.entries(types)) {
        await get(
            (url) =>
                url.pathname === '/api/engine/v2/asset_types' &&
                url.searchParams.get('category_id') ===
                    'landing-readonly-' + category &&
                url.searchParams.get('limit') === '500',
            names.map((name) => ({
                id: 'landing-readonly-type-' + name,
                name,
                category_id: 'landing-readonly-' + category,
                brand: 'PlaceOS',
            })),
        );
    }
    await get(
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            (url.searchParams.get('type_id') ?? '').startsWith(
                'landing-readonly-type-',
            ),
        [],
    );
    await get(
        (url) =>
            url.pathname === '/api/staff/v1/calendars' &&
            [...url.searchParams.keys()].length === 0,
        [],
    );
}

export async function timezoneBuildings(page: Page, audit: Audit) {
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage))
            if (key.startsWith('PLACEOS.org')) localStorage.removeItem(key);
    });
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'building' &&
            url.searchParams.get('limit') === '500',
        async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            try {
                const response = await route.fetch({
                    maxRedirects: 0,
                    maxRetries: 0,
                });
                if (!response.ok()) return await route.fulfill({ response });
                const body = await response.json();
                const rows: Record<string, unknown>[] = Array.isArray(body)
                    ? body
                    : (body?.results ?? []);
                // Counted only; the test asserts at least one existing building was patched.
                audit.fixtures['timezone buildings'] =
                    (audit.fixtures['timezone buildings'] ?? 0) + rows.length;
                const patched = rows.map((row) => ({
                    ...row,
                    timezone: 'Pacific/Honolulu',
                }));
                await route.fulfill({
                    response,
                    json: Array.isArray(body)
                        ? patched
                        : { ...body, results: patched },
                });
            } catch (error) {
                audit.monitoring_errors.push(
                    'building timezone fixture: ' + String(error),
                );
                await route.fallback().catch(() => undefined);
            }
        },
    );
}

export async function untouched(page: Page) {
    await expect(
        page
            .locator('parking-request-form button[btn]')
            .filter({ has: page.locator('icon', { hasText: /^\s*send\s*$/ }) }),
    ).toBeVisible();
    await expect(page.locator('parking-request-success')).toHaveCount(0);
}

export async function untouchedDesk(page: Page) {
    await expect(page).toHaveURL(/#\/book\/desk\/form$/);
    await expect(page.locator('desk-flow-success')).toHaveCount(0);
    await expect(
        page.locator('desk-flow-details input[name$=".title"]'),
    ).toBeEditable();
}

export async function untouchedLocker(page: Page) {
    await expect(
        page.locator('button[name="open-locker-confirm"]'),
    ).toBeVisible();
    await expect(page.locator('locker-flow-confirm')).toHaveCount(0);
    await expect(page.locator('locker-flow-success')).toHaveCount(0);
}

export async function untouchedParking(page: Page) {
    await expect(
        page.locator('parking-flow-form button[confirm]'),
    ).toBeVisible();
    await expect(page.locator('parking-flow-confirm')).toHaveCount(0);
    await expect(page.locator('parking-flow-success')).toHaveCount(0);
}

export async function untouchedRoom(page: Page) {
    await expect(
        page.locator(
            'meeting-flow-new meeting-flow-details input[name$=".title"]',
        ),
    ).toBeEditable();
    await expect(
        page.locator(
            'meeting-flow-space-select, meeting-flow-options, meeting-flow-success',
        ),
    ).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=0$/);
}

export async function untouchedVisitor(form: InviteVisitorForm) {
    await expect(form.sendButton).toBeVisible();
    await expect(form.successPanel).toHaveCount(0);
}

export function validPeriod(url: URL) {
    const start = url.searchParams.get('period_start') ?? '';
    const end = url.searchParams.get('period_end') ?? '';
    return (
        /^\d+$/.test(start) &&
        /^\d+$/.test(end) &&
        Number.isSafeInteger(Number(start)) &&
        Number(start) > 0 &&
        Number.isSafeInteger(Number(end)) &&
        Number(end) > Number(start)
    );
}

export async function visitor(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, overrides);
    const form = new InviteVisitorForm(page);
    await form.open();
    await fixture.ready();
    await expect(form.reason).toBeVisible();
    await expect(form.sendButton).toBeVisible();
    await expect(form.successPanel).toHaveCount(0);
    return form;
}

// ---------------------------------------------------------------------------
// Strict network guard (specs that answer every API request themselves)
// ---------------------------------------------------------------------------

export type GetFixture = {
    match: (url: URL) => boolean;
    body: (url: URL) => unknown;
    contentType?: string;
};

export type NetworkAudit = {
    api: string[];
    local_writes: string[];
    external: string[];
    websocket: string[];
    blockedControl: string[];
    appErrors: string[];
    closing: Promise<void>[];
};

export const PAGE_AUDITS = new WeakMap<Page, NetworkAudit>();

export const READ_METHODS = ['GET', 'HEAD', 'OPTIONS'];

export type SafetyAudit = { blocked_http: string[]; unexpected_ws: string[] };

export type WsAudit = {
    unexpected: string[];
    control: string[];
    app_errors: string[];
    external: string[];
};

export async function clearOrganisationCache(page: Page) {
    await page.addInitScript((locale) => {
        localStorage.setItem('APP.locale', locale);
        localStorage.setItem('PLACEOS.locale', locale);
        for (const store of [localStorage, sessionStorage]) {
            for (const key of Object.keys(store)) {
                if (
                    key.startsWith('PLACEOS.org') ||
                    ['PLACEOS.region', 'PLACEOS.building'].includes(key)
                ) {
                    store.removeItem(key);
                }
            }
        }
    }, LOCALE);
}

export async function expectSafe(audit: NetworkAudit) {
    await Promise.all(audit.closing);
    expect(
        audit.api,
        'only synthetic GET API responses, except staff identity',
    ).toEqual([]);
    expect(audit.local_writes, 'no local non-API writes').toEqual([]);
    expect(audit.external, 'no external actions').toEqual([]);
    expect(audit.websocket, 'no live WebSocket bindings').toEqual([]);
    expect(audit.appErrors, 'no application errors').toEqual([]);
}

export function isAppError(message: ConsoleMessage) {
    return (
        message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text())
    );
}

export function isDevServerSocket(url: URL) {
    const app = new URL(APP_URL);
    return (
        url.host === app.host &&
        url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:') &&
        url.pathname === '/' &&
        [...url.searchParams.keys()].join(',') === 'token'
    );
}

export function isLocalControlSocket(url: URL) {
    const app = new URL(APP_URL);
    const protocol = app.protocol === 'https:' ? 'wss:' : 'ws:';
    return (
        url.protocol === protocol &&
        url.host === app.host &&
        url.pathname === '/api/engine/v2/systems/control'
    );
}

export async function protectNetwork(page: Page): Promise<NetworkAudit> {
    const existing = PAGE_AUDITS.get(page);
    if (existing) return existing;
    const audit: NetworkAudit = {
        api: [],
        local_writes: [],
        external: [],
        websocket: [],
        blockedControl: [],
        appErrors: [],
        closing: [],
    };
    page.on('pageerror', (error) =>
        audit.appErrors.push(error.name + ': ' + error.message),
    );
    page.on('console', (message) => {
        if (
            message.type() === 'error' &&
            /^(ERROR\b|NG0\d+)/.test(message.text())
        ) {
            audit.appErrors.push(message.text().slice(0, 500));
        }
    });
    await page.context().route('**/*', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (ORIGINS.has(url.origin)) {
            if (!url.pathname.startsWith('/api/')) {
                if (READ_METHODS.includes(request.method())) {
                    return route.fallback();
                }
                audit.local_writes.push(request.method() + ' ' + url.pathname);
                return route.abort('blockedbyclient');
            }
            if (
                request.method() === 'GET' &&
                url.pathname === '/api/engine/v2/users/current'
            ) {
                return route.fallback();
            }
            audit.api.push(request.method() + ' ' + url.pathname + url.search);
            return route.abort('blockedbyclient');
        }
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
        audit.external.push(request.method() + ' ' + url.origin + url.pathname);
        return route.abort('blockedbyclient');
    });
    await page.context().routeWebSocket('**/*', (socket) => {
        const url = new URL(socket.url());
        const app = new URL(APP_URL);
        const local =
            url.host === app.host &&
            url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
        if (
            local &&
            url.pathname === '/' &&
            [...url.searchParams.keys()].join(',') === 'token'
        )
            return;
        if (local && url.pathname === '/api/engine/v2/systems/control') {
            audit.blockedControl.push(url.pathname);
        } else {
            audit.websocket.push(url.pathname);
        }
        audit.closing.push(socket.close());
    });
    PAGE_AUDITS.set(page, audit);
    return audit;
}

export function readJson(file: string): Record<string, unknown> | null {
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
        return null;
    }
}

export function redact(url: URL) {
    for (const key of [...url.searchParams.keys()])
        url.searchParams.set(key, '[redacted]');
    return url.href;
}

export function watchStaffId(page: Page): Promise<string> {
    return page
        .waitForResponse(
            (response) => {
                const url = new URL(response.url());
                return (
                    ORIGINS.has(url.origin) &&
                    url.pathname === '/api/engine/v2/users/current' &&
                    response.request().method() === 'GET' &&
                    response.ok()
                );
            },
            { timeout: 15_000 },
        )
        .then(async (response) => {
            const user = (await response.json()) as { id?: string };
            return user?.id || '';
        })
        .catch(() => '');
}

// ---------------------------------------------------------------------------
// Read-only migration audit (meeting form specs)
// ---------------------------------------------------------------------------

export const MIGRATION_ALLOW_CLASH_QUERY = false;

export type MigrationAudit = {
    websocket_attempts: { url: string; classification: string }[];
    blocked_control_attempts: { url: string; classification: string }[];
    tooling_websockets: { url: string; classification: string }[];
    page_errors: string[];
    app_errors: string[];
    monitoring_errors: string[];
    blocked_api_requests: string[];
    readonly_queries: { method: string; path: string }[];
    staff_identities: { email: string; privileged: boolean }[];
};

export let migrationActive:
    | {
          audit: MigrationAudit;
          register(context: BrowserContext): Promise<void>;
      }
    | undefined;

export const migrationAuditFixture: {
    migrationAudit: [
        (
            args: { staffPage: Page },
            use: (audit: MigrationAudit) => Promise<void>,
            info: TestInfo,
        ) => Promise<void>,
        { auto: true; timeout: number },
    ];
} = {
    migrationAudit: [
        async (
            { staffPage }: { staffPage: Page },
            use: (audit: MigrationAudit) => Promise<void>,
            info: TestInfo,
        ) => {
            assertLocalOnly(APP_URL, BACKEND_URL);
            const audit: MigrationAudit = {
                websocket_attempts: [],
                blocked_control_attempts: [],
                tooling_websockets: [],
                page_errors: [],
                app_errors: [],
                monitoring_errors: [],
                blocked_api_requests: [],
                readonly_queries: [],
                staff_identities: [],
            };
            const contexts: BrowserContext[] = [];
            const closing: Promise<void>[] = [];
            const identities: Promise<void>[] = [];
            const navigated = new Set<BrowserContext>();
            const identified = new Set<BrowserContext>();
            const origins = new Set([
                new URL(APP_URL).origin,
                new URL(BACKEND_URL).origin,
            ]);
            const register = async (context: BrowserContext) => {
                contexts.push(context);
                const observe = (page: Page) => {
                    page.on('framenavigated', (frame) => {
                        if (
                            frame === page.mainFrame() &&
                            frame
                                .url()
                                .startsWith(new URL(APP_URL).origin + '/')
                        )
                            navigated.add(context);
                    });
                    page.on('pageerror', (error) =>
                        audit.page_errors.push(String(error)),
                    );
                    page.on('console', (message) => {
                        if (
                            message.type() === 'error' &&
                            /^(ERROR\b|NG0\d+)/.test(message.text())
                        )
                            audit.app_errors.push(message.text().slice(0, 500));
                    });
                    page.on('response', (response) => {
                        const url = new URL(response.url());
                        if (
                            response.request().method() !== 'GET' ||
                            !origins.has(url.origin) ||
                            url.pathname !== '/api/engine/v2/users/current'
                        )
                            return;
                        identities.push(
                            (async () => {
                                expect(
                                    response.ok(),
                                    'staff identity GET must succeed',
                                ).toBe(true);
                                const user = await response.json();
                                const identity = {
                                    email: user.email?.toLowerCase() ?? '',
                                    privileged: !!(
                                        user.sys_admin || user.support
                                    ),
                                };
                                audit.staff_identities.push(identity);
                                expect(identity.email).toBe(
                                    staffEmail(
                                        info.parallelIndex,
                                    ).toLowerCase(),
                                );
                                expect(
                                    identity.privileged,
                                    'staff-only scenario',
                                ).toBe(false);
                                identified.add(context);
                            })().catch((error: unknown) => {
                                audit.monitoring_errors.push(
                                    `Staff identity: ${String(error)}`,
                                );
                            }),
                        );
                    });
                };
                for (const page of context.pages()) observe(page);
                context.on('page', observe);
                await context.route('**/api/**', async (route) => {
                    const request = route.request();
                    const url = new URL(request.url());
                    const read = ['GET', 'HEAD', 'OPTIONS'].includes(
                        request.method(),
                    );
                    // findBookingClashes is a source-supported availability query,
                    // not booking creation (libs/bookings/src/lib/bookings.fn.ts).
                    // Enabled only for the recurrence scenario.
                    const clash =
                        MIGRATION_ALLOW_CLASH_QUERY &&
                        request.method() === 'POST' &&
                        url.pathname ===
                            '/api/staff/v1/bookings/clashing-assets';
                    if (origins.has(url.origin) && (read || clash)) {
                        if (clash)
                            audit.readonly_queries.push({
                                method: 'POST',
                                path: url.pathname,
                            });
                        await route.continue();
                    } else {
                        audit.blocked_api_requests.push(
                            `${request.method()} ${url.origin}${url.pathname}`,
                        );
                        await route.abort('blockedbyclient');
                    }
                });
                await context.routeWebSocket('**/*', (socket) => {
                    try {
                        const url = new URL(socket.url());
                        const app = new URL(APP_URL);
                        const local =
                            url.host === app.host &&
                            url.protocol ===
                                (app.protocol === 'https:' ? 'wss:' : 'ws:');
                        const tooling =
                            local &&
                            url.pathname === '/' &&
                            [...url.searchParams.keys()].join(',') === 'token';
                        const control =
                            local &&
                            url.pathname === '/api/engine/v2/systems/control';
                        for (const key of [...url.searchParams.keys()])
                            url.searchParams.set(key, '[redacted]');
                        if (tooling) {
                            audit.tooling_websockets.push({
                                url: url.href,
                                classification:
                                    'dev-server live reload; mocked and held open, never connected',
                            });
                            return;
                        }
                        if (control)
                            audit.blocked_control_attempts.push({
                                url: url.href,
                                classification:
                                    'known Workplace shell initialization; intercepted and closed before server connection',
                            });
                        else
                            audit.websocket_attempts.push({
                                url: url.href,
                                classification:
                                    'UNEXPECTED connection; intercepted before server connection',
                            });
                    } catch (error) {
                        audit.monitoring_errors.push(
                            `WebSocket interception: ${String(error)}`,
                        );
                    }
                    // No connectToServer call: all connections remain browser-local.
                    closing.push(
                        socket.close().catch((error: unknown) => {
                            audit.monitoring_errors.push(
                                `WebSocket close: ${String(error)}`,
                            );
                        }),
                    );
                });
            };
            migrationActive = { audit, register };
            try {
                await register(staffPage.context());
                await use(audit);
            } finally {
                for (const context of contexts) {
                    try {
                        await context.close();
                    } catch (error) {
                        audit.monitoring_errors.push(
                            `Context close: ${String(error)}`,
                        );
                    }
                }
                await Promise.all(closing);
                await Promise.all(identities);
                for (const context of navigated) {
                    if (!identified.has(context))
                        audit.monitoring_errors.push(
                            'A navigated context did not establish staff identity',
                        );
                }
                migrationActive = undefined;
                try {
                    await info.attach('settings-safety-audit', {
                        body: Buffer.from(JSON.stringify(audit, null, 2)),
                        contentType: 'application/json',
                    });
                } finally {
                    expect(
                        {
                            websocket_attempts: audit.websocket_attempts,
                            page_errors: audit.page_errors,
                            app_errors: audit.app_errors,
                            monitoring_errors: audit.monitoring_errors,
                            blocked_api_requests: audit.blocked_api_requests,
                        },
                        'migration safety audit must be clean',
                    ).toEqual({
                        websocket_attempts: [],
                        page_errors: [],
                        app_errors: [],
                        monitoring_errors: [],
                        blocked_api_requests: [],
                    });
                    expect(
                        audit.staff_identities.length,
                        'staff identity must be observed',
                    ).toBeGreaterThan(0);
                }
            }
        },
        { auto: true, timeout: 30_000 },
    ],
};

export async function migrationNewContext(
    browser: Browser,
    options: BrowserContextOptions = {},
) {
    if (!migrationActive)
        throw new Error(
            'Migration audit must be active before context creation',
        );
    const context = await browser.newContext({
        ...options,
        serviceWorkers: 'block',
    });
    await migrationActive.register(context);
    return context;
}

export const migrationReadOnlyTest = readOnlyTest.extend<{
    migrationAudit: MigrationAudit;
}>(migrationAuditFixture);

export const migrationTest = baseTest.extend<{
    migrationAudit: MigrationAudit;
}>(migrationAuditFixture);
