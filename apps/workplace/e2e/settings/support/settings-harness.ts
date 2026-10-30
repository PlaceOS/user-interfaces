import type {
    Browser,
    BrowserContext,
    BrowserContextOptions,
    ConsoleMessage,
    Locator,
    Page,
    Route,
    TestInfo,
    WebSocketRoute,
} from '@playwright/test';
import { request as pwRequest, test as playwrightTest } from '@playwright/test';
import { createHash } from 'node:crypto';
import * as fs from 'fs';
import { join } from 'node:path';
import { mintForWorker } from '../../../../../e2e/support/api';
import { clientId, redirectUriFor } from '../../../../../e2e/support/auth';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
    roleFor,
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

/** What `armBookingPost` saw: the POST bodies it received and whether it answered. */
export type ArmedBookingPost = {
    bodies: Record<string, unknown>[];
    completed: boolean;
};

/**
 * Allow exactly one booking save on a read-only page. A page route answers the
 * first POST /api/staff/v1/bookings whose only query is the app's utm_source
 * and whose body passes `accepts`, with a local 201 (the body plus an id).
 * Every other request, including a second POST or a body that fails
 * `accepts`, falls back to the read-only context guard, which aborts it and
 * fails the test. Page routes run before the context route, so the guard
 * itself is unchanged.
 */
export async function armBookingPost(
    page: Page,
    accepts: (body: Record<string, unknown>) => boolean,
): Promise<ArmedBookingPost> {
    const state: ArmedBookingPost = { bodies: [], completed: false };
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) && url.pathname === '/api/staff/v1/bookings',
        async (route: Route) => {
            const request = route.request();
            const url = new URL(request.url());
            if (
                request.method() !== 'POST' ||
                state.bodies.length !== 0 ||
                [...url.searchParams.keys()].join() !== 'utm_source'
            )
                return route.fallback();
            const body = request.postDataJSON() as Record<string, unknown>;
            state.bodies.push(body);
            if (!accepts(body)) return route.fallback();
            await route.fulfill({
                status: 201,
                json: { ...body, id: 'e2e-armed-booking' },
            });
            state.completed = true;
        },
    );
    return state;
}

/** BOOKINGS.CLASH_CURRENT_USER in en-AU (the harness locale), as LocaleService fills it. */
export function clashCurrentUser(email: string) {
    const locale = JSON.parse(
        fs.readFileSync(
            join(__dirname, '../../../../../shared/assets/locale/en-AU.json'),
            'utf8',
        ),
    ) as { BOOKINGS?: Record<string, unknown> };
    const text = locale.BOOKINGS?.CLASH_CURRENT_USER;
    if (typeof text !== 'string' || !text.trim())
        throw new Error('BOOKINGS.CLASH_CURRENT_USER has no en-AU text');
    return text.replace('{{ name }}', email).replace('{{ name }}', email);
}

/**
 * Answer the daily-limit check of BookingFormService._checkResourceAvailable
 * (GET /api/staff/v1/bookings with exactly email, limit=1000, period_end,
 * period_start and type) with ONE active booking of `type` for `email` on
 * `asset_id`, spanning the requested period. Returns the periods served.
 */
export async function oneDailyBooking(
    page: Page,
    audit: Audit,
    booking: { type: string; email: string; asset_id: string },
) {
    const served: { period_start: number; period_end: number }[] = [];
    await getOnly(
        page,
        audit,
        'existing ' + booking.type + ' bookings',
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            [...url.searchParams.keys()].sort().join() ===
                'email,limit,period_end,period_start,type' &&
            url.searchParams.get('type') === booking.type &&
            url.searchParams.get('email') === booking.email &&
            url.searchParams.get('limit') === '1000',
        (url) => {
            const period_start = Number(url.searchParams.get('period_start'));
            const period_end = Number(url.searchParams.get('period_end'));
            served.push({ period_start, period_end });
            return [
                {
                    id: 'e2e-daily-limit-existing-' + booking.type,
                    booking_type: booking.type,
                    asset_id: booking.asset_id,
                    asset_name: 'E2E other ' + booking.type,
                    user_email: booking.email,
                    booking_start: period_start,
                    booking_end: period_end,
                    approved: true,
                    rejected: false,
                    deleted: false,
                    extension_data: {},
                },
            ];
        },
    );
    return served;
}

/** Every booking POST attempt on the page, armed or not. */
export function bookingPosts(page: Page) {
    const posts: string[] = [];
    page.on('request', (request) => {
        const url = new URL(request.url());
        if (
            request.method() === 'POST' &&
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/bookings'
        )
            posts.push(url.pathname);
    });
    return posts;
}

export const LOCKER_BANK_ID = 'e2e-locker-bank-1';
export const LOCKER_ID = 'e2e-locker-1';

/**
 * Browser-only locker inventory for the active building: one _LOCKER_BANKS_
 * asset and one _LOCKERS_ asset whose parent_id is that bank, as
 * loadLockerResources reads them (booking.utilities.ts). Other locker booking
 * lists are empty.
 *
 * The locker picker loads its banks first and attaches lockers to them only
 * when the second query returns; until then `bank.lockers` is undefined.
 * locker-bank-list and locker-map map over `bank.lockers` as soon as the
 * availability list names the bank, so with availability already known the
 * picker logs a TypeError for that window (the earlier `bank.lockers`
 * failure). Opening the picker changes the form options, which restarts the
 * availability check. `hold()` holds that check's
 * GET /api/staff/v1/bookings/booked answer, so a test can wait until the
 * picker has its lockers and then `release()` it. Nothing is written.
 */
export async function lockerInventory(page: Page, audit: Audit) {
    const banks_type = 'e2e-settings-type-_LOCKER_BANKS_';
    const lockers_type = 'e2e-settings-type-_LOCKERS_';
    await getOnly(
        page,
        audit,
        'synthetic locker banks',
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            url.searchParams.get('type_id') === banks_type &&
            !!url.searchParams.get('zone_id'),
        (url) => [
            {
                id: LOCKER_BANK_ID,
                identifier: 'E2E Locker Bank',
                zone_id: url.searchParams.get('zone_id'),
                asset_type_id: banks_type,
                bookable: true,
                other_data: {},
            },
        ],
    );
    await getOnly(
        page,
        audit,
        'synthetic lockers',
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            url.searchParams.get('type_id') === lockers_type &&
            !!url.searchParams.get('zone_id'),
        (url) => [
            {
                id: LOCKER_ID,
                identifier: 'E2E Locker 1',
                parent_id: LOCKER_BANK_ID,
                zone_id: url.searchParams.get('zone_id'),
                asset_type_id: lockers_type,
                bookable: true,
                other_data: {},
            },
        ],
    );
    await getOnly(
        page,
        audit,
        'empty locker bookings',
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            url.searchParams.get('type') === 'locker',
        () => [],
    );
    const gate = { held: false, waiting: [] as (() => void)[], served: 0 };
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/staff/v1/bookings/booked' &&
            url.searchParams.get('type') === 'locker',
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            if (gate.held)
                await new Promise<void>((resolve) => gate.waiting.push(resolve));
            try {
                await route.fulfill({ json: [] });
                gate.served += 1;
                audit.fixtures['locker availability'] = gate.served;
            } catch (error) {
                audit.monitoring_errors.push(
                    'locker availability fixture: ' + String(error),
                );
            }
        },
    );
    return {
        /** Answers given so far (every locker is free). */
        served: () => gate.served,
        /** Hold every later availability answer until `release()`. */
        hold: () => {
            gate.held = true;
        },
        release: () => {
            gate.held = false;
            for (const resolve of gate.waiting.splice(0)) resolve();
        },
    };
}

/** Lockers loaded by the open picker's list or map view, read-only. */
export function pickerLockerCount(page: Page, selector: 'locker-bank-list' | 'locker-map') {
    return page.locator('locker-select-modal ' + selector).evaluate((element) => {
        const view = (window as DebugWindow).ng?.getComponent(element) as
            | { _lockers?: () => unknown[]; lockers?: () => unknown[] }
            | undefined;
        const lockers = view?._lockers ?? view?.lockers;
        if (!lockers) throw new Error('the locker picker is unavailable');
        return lockers.call(view).length;
    });
}

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

/**
 * The calendar cell `offset` days after today, found by date. The grid is built
 * around the form's date, not today (date-calendar.component.ts generateDates),
 * so today may be off-grid when the form date has moved to tomorrow. Each cell's
 * date is displayed_dates()[i].id: local midnight, one cell per day. If the day
 * is past the grid, move one month on: the right chevron (named
 * schedule-previous-month) is disabled once the grid passes `to`, so a later
 * day cannot be selectable and null is returned. Any other miss fails.
 */
export async function dayCell(
    page: Page,
    picker: Locator,
    offset: number,
): Promise<Locator | null> {
    const cells = picker.locator('button[name="schedule-set-date"]');
    await expect(cells.first()).toBeVisible();
    const target = await page.evaluate((days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        date.setHours(0, 0, 0, 0);
        return date.valueOf();
    }, offset);
    const position = () =>
        picker.evaluate((element, id) => {
            const calendar = (window as DebugWindow).ng?.getComponent(
                element,
            ) as { displayed_dates(): { id: number }[] } | undefined;
            if (!calendar) throw new Error('Calendar debug API required');
            return calendar.displayed_dates().findIndex((day) => day.id === id);
        }, target);
    let index = await position();
    if (index < 0) {
        const next = picker.locator('button[name="schedule-previous-month"]');
        if (await next.isDisabled()) return null;
        await next.click();
        await expect
            .poll(position, {
                message: offset + ' days ahead is on the next month grid',
            })
            .toBeGreaterThanOrEqual(0);
        index = await position();
    }
    return cells.nth(index);
}

/** Whether the day `offset` days ahead is selectable. Closes the picker unchanged. */
export async function dayEnabled(page: Page, root: Locator, offset: number) {
    const picker = await openCalendar(page, root);
    const cell = await dayCell(page, picker, offset);
    const enabled = cell ? await cell.isEnabled() : false;
    await page.keyboard.press('Escape');
    await expect(picker).toHaveCount(0);
    return enabled;
}

/** Chooses a day in the local form model only. */
export async function pickDay(page: Page, root: Locator, offset: number) {
    const picker = await openCalendar(page, root);
    const cell = await dayCell(page, picker, offset);
    expect(cell, offset + ' days ahead must be reachable').not.toBeNull();
    await expect(cell!).toBeEnabled();
    await cell!.click();
    await expect(picker).toHaveCount(0);
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
// Worker staff token for the read-only specs
// ---------------------------------------------------------------------------

/** Minimum lifetime the stored browser token must still have. */
const MIN_TOKEN_LIFETIME_MS = 15 * 60_000;

/**
 * The token in this worker's staff sidecar when the staff storageState holds
 * the same token for the app origin with at least MIN_TOKEN_LIFETIME_MS left,
 * so the app never attempts a refresh mid-test. Otherwise null.
 */
function storedBrowserToken(workerIndex: number): string | null {
    const { tokenPath, storagePath } = roleFor('staff', workerIndex);
    const token = readJson(tokenPath)?.accessToken;
    if (typeof token !== 'string' || !token) return null;
    const cid = clientId(redirectUriFor(APP_URL));
    const origins = readJson(storagePath)?.origins;
    const app = Array.isArray(origins)
        ? (origins as { origin?: string; localStorage?: unknown }[]).find(
              (entry) => entry.origin === new URL(APP_URL).origin,
          )
        : undefined;
    const items = Array.isArray(app?.localStorage)
        ? (app?.localStorage as { name?: string; value?: string }[])
        : [];
    const stored = new Map(items.map((item) => [item.name, item.value]));
    if (stored.get(cid + '_access_token') !== token) return null;
    const expires_at = Number(stored.get(cid + '_expires_at'));
    return expires_at > Date.now() + MIN_TOKEN_LIFETIME_MS ? token : null;
}

/**
 * This worker's staff bearer. Reuses the token stored under e2e/.auth when
 * `storedBrowserToken` returns it and the backend accepts it as this worker's
 * staff address; otherwise mints one, which rewrites the token sidecar and
 * the storageState that staffPage loads. Throws when the user is admin or
 * support.
 */
export async function settingsStaffToken(workerIndex: number): Promise<string> {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const { email } = roleFor('staff', workerIndex);
    const token = storedBrowserToken(workerIndex);
    if (token) {
        const api = await pwRequest.newContext({
            baseURL: BACKEND_URL,
            ignoreHTTPSErrors: true,
            extraHTTPHeaders: { Authorization: `Bearer ${token}` },
        });
        try {
            const response = await api.get('/api/engine/v2/users/current');
            const user = response.ok()
                ? ((await response.json()) as {
                      email?: string;
                      sys_admin?: boolean;
                      support?: boolean;
                  })
                : null;
            if (user?.email?.toLowerCase() === email.toLowerCase()) {
                if (user.sys_admin || user.support) {
                    throw new Error(`${email} is admin/support; staff-only scenario.`);
                }
                return token;
            }
        } finally {
            await api.dispose();
        }
    }
    return (await mintForWorker('staff', workerIndex)).mint.accessToken;
}

/** readOnlyTest whose worker staff token comes from `settingsStaffToken`. */
export const staffTokenTest = readOnlyTest.extend({
    staffToken: [
        async ({}, use, info) => {
            await use(await settingsStaffToken(info.parallelIndex));
        },
        { scope: 'worker' },
    ],
});

/**
 * staffTokenTest with the strict network guard (protectNetwork) on staffPage.
 * Teardown closes the context, which stops every loader and socket, then runs
 * expectSafe, including after an assertion failure. Admin auth is blocked.
 */
export const guardedStaffTest = staffTokenTest.extend<{ batchAudit: NetworkAudit }>({
    batchAudit: [
        async ({ staffPage }, use) => {
            const audit = await protectNetwork(staffPage);
            try {
                await use(audit);
            } finally {
                await staffPage.context().close();
                await expectSafe(audit);
            }
        },
        { auto: true, timeout: 15_000 },
    ],
    // The inherited admin fixture mints (e2e/support/fixtures.ts) and
    // readOnlyTest never requests it.
    adminStorageState: [
        async () => {
            throw new Error('Admin auth is not allowed in this read-only spec.');
        },
        { scope: 'worker' },
    ],
});

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

// ---------------------------------------------------------------------------
// Browser-only harness (no backend)
// ---------------------------------------------------------------------------
//
// For specs that need no backend at all. The page signs in with a fake bearer
// and one context route, installed before navigation, answers every request in
// the browser: redirect, credential and origin checks first, then the page's
// exact GET fixtures. An API, auth or control GET without a fixture, a non-GET
// that the spec's `mutation` handler does not answer, an external request and
// a WebSocket that the spec's handler does not accept are refused. Fresh
// storage, blocked service workers and a strict teardown audit: refused
// requests, page/console errors, failed requests and responses >= 300 all fail
// the test. These specs run in the settings-browser project, which has no
// preflight dependency.

/** The local frontend the browser-only specs load. */
export const BROWSER_APP = new URL(
    process.env.E2E_APP_URL ?? 'http://localhost:4214',
);
/** The ts-client control WebSocket path. */
export const CONTROL_PATH = '/api/engine/v2/systems/control';

/** Throws unless the frontend is a loopback origin served from the root path. */
export function assertLoopbackFrontend() {
    if (
        !['localhost', '127.0.0.1', '[::1]'].includes(BROWSER_APP.hostname) ||
        !['http:', 'https:'].includes(BROWSER_APP.protocol) ||
        BROWSER_APP.username ||
        BROWSER_APP.password ||
        BROWSER_APP.pathname !== '/' ||
        BROWSER_APP.search ||
        BROWSER_APP.hash
    ) {
        throw new Error('This spec requires a root-path loopback frontend.');
    }
}

/** What every browser-only test records; any refusal or error fails teardown. */
export type BrowserAudit = {
    refused: string[];
    errors: string[];
    monitoring: string[];
    /** Answered fixture requests, by path. */
    fixtures: Record<string, number>;
};

/** What one control socket connection bound, delivered and unbound. */
export type BrowserConnection = {
    binds: string[];
    delivered: string[];
    unbinds: string[];
};

/** A browser-only audit for specs whose page opens a control socket. */
export type ControlAudit = BrowserAudit & { connections: BrowserConnection[] };

/** An empty ControlAudit. */
export function controlAudit(): ControlAudit {
    return { refused: [], errors: [], monitoring: [], fixtures: {}, connections: [] };
}

const BROWSER_FIXTURES = new WeakMap<Page, GetFixture[]>();

/** Starts an empty GET fixture registry for a page whose route the spec installs. */
export function startBrowserFixtures(page: Page) {
    BROWSER_FIXTURES.set(page, []);
}

/** The first GET fixture registered for `page` that matches `url`. */
export function findBrowserFixture(page: Page, url: URL) {
    return BROWSER_FIXTURES.get(page)?.find((fixture) => fixture.match(url));
}

/** Register one GET fixture for a browser-only page. The first match answers. */
export function browserFixture(page: Page, fixture: GetFixture) {
    const list = BROWSER_FIXTURES.get(page);
    if (!list) throw new Error('Fixture registry is unavailable.');
    list.push(fixture);
}

/** Register one JSON GET fixture for a browser-only page. */
export async function browserGet(
    page: Page,
    match: GetFixture['match'],
    body: GetFixture['body'],
) {
    browserFixture(page, { match, body });
}

/** Options for `browserOnlyTest`. */
export type BrowserOnlyOptions<A extends BrowserAudit> = {
    /** A fresh audit for one test. */
    audit: () => A;
    /** Handles every WebSocket the page opens. */
    socket: (
        socket: WebSocketRoute,
        audit: A,
        pending: Set<Promise<void>>,
    ) => void;
    /**
     * Answers a non-GET request. It must fulfill the route or call `refuse`.
     * Without it every non-GET request is refused.
     */
    mutation?: (
        route: Route,
        url: URL,
        audit: A,
        refuse: (reason: string) => Promise<void>,
    ) => Promise<void>;
    /**
     * Frontend assets are fetched with redirects refused when true, and passed
     * to the dev server otherwise.
     */
    fetchAssets?: boolean;
    /** True when an uncaught page error is one the test expects. */
    expectedError?: (error: Error, audit: A) => boolean;
    /** Extra teardown assertions, run after the strict audit. */
    teardown?: (audit: A) => void;
};

/**
 * A test whose `isolated` fixture is a fresh page in its own context with the
 * browser-only route, socket handler and strict teardown audit.
 */
export function browserOnlyTest<A extends BrowserAudit>(
    options: BrowserOnlyOptions<A>,
) {
    return playwrightTest.extend<{ isolated: { page: Page; audit: A } }>({
        isolated: async ({ browser }, use, info) => {
            assertLoopbackFrontend();
            const audit = options.audit();
            // Explicitly fresh: no configured storageState, cookies or disk auth.
            const context = await browser.newContext({
                baseURL: BROWSER_APP.origin,
                storageState: { cookies: [], origins: [] },
                serviceWorkers: 'block',
                viewport: { width: 1440, height: 1000 },
                timezoneId: 'Etc/UTC',
                ignoreHTTPSErrors: true,
            });
            let page: Page | undefined;
            let stopping = false;
            const pending = new Set<Promise<void>>();
            try {
                await context.route('**/*', (route) => {
                    const task = (async () => {
                        const req = route.request();
                        const url = new URL(req.url());
                        const refuse = async (reason: string) => {
                            audit.refused.push(reason);
                            await route.abort('blockedbyclient');
                        };
                        if (req.redirectedFrom()) {
                            await refuse('HTTP redirect');
                            return;
                        }
                        if (url.username || url.password || url.hash) {
                            await refuse('credential-bearing or fragmented HTTP URL');
                            return;
                        }
                        // index.html links Google Fonts; answer locally with empty CSS.
                        if (
                            req.method() === 'GET' &&
                            url.origin === 'https://fonts.googleapis.com' &&
                            url.pathname === '/css2'
                        ) {
                            await route.fulfill({ contentType: 'text/css', body: '' });
                            return;
                        }
                        if (url.origin !== BROWSER_APP.origin)
                            return refuse('external HTTP request');
                        if (req.method() !== 'GET') {
                            if (!options.mutation) return refuse('non-GET HTTP request');
                            // Every mutation terminates in fulfill or abort.
                            await options.mutation(route, url, audit, refuse);
                            return;
                        }
                        const fixture = page ? findBrowserFixture(page, url) : undefined;
                        if (fixture) {
                            audit.fixtures[url.pathname] =
                                (audit.fixtures[url.pathname] ?? 0) + 1;
                            if (fixture.contentType)
                                await route.fulfill({
                                    contentType: fixture.contentType,
                                    body: String(fixture.body(url)),
                                });
                            else await route.fulfill({ json: fixture.body(url) });
                            return;
                        }
                        // Fetch/XHR, auth, control, API and arbitrary navigations never
                        // reach the dev proxy, even when their method is GET.
                        if (/^\/(api|auth|control)(\/|$)/.test(url.pathname))
                            return refuse('unmatched API/auth/control GET');
                        const document =
                            req.resourceType() === 'document' &&
                            url.pathname === '/' &&
                            !url.search;
                        const asset =
                            ['script', 'stylesheet', 'image', 'font'].includes(
                                req.resourceType(),
                            ) &&
                            /\.(?:[cm]?js|ts|css|svg|png|ico|jpe?g|webp|woff2?|ttf)$/.test(
                                url.pathname,
                            );
                        // Dev-server component modules (no file extension) are static GETs.
                        const vite =
                            req.resourceType() === 'script' &&
                            ['/@vite/client', '/@angular/build', '/@ng/component'].includes(
                                url.pathname,
                            );
                        // LocaleService fetches assets/locale/<locale>.json and the app
                        // fetches its logo SVG.
                        const fetched =
                            req.resourceType() === 'fetch' &&
                            /^\/assets\/[\w./-]+\.(?:json|svg)$/.test(url.pathname) &&
                            !url.pathname.includes('..');
                        // The build does not copy the Material Symbols fonts to /assets
                        // (dev server 404s), so serve the package's own file.
                        const symbols =
                            /^\/assets\/(material-symbols-(?:outlined|rounded|sharp)\.woff2)$/.exec(
                                url.pathname,
                            );
                        if (symbols) {
                            await route.fulfill({
                                path: require.resolve('material-symbols/' + symbols[1]),
                                contentType: 'font/woff2',
                            });
                            return;
                        }
                        if (!(document || asset || vite || fetched))
                            return refuse('unmatched frontend GET');
                        if (!options.fetchAssets) return route.continue();
                        const response = await route.fetch({ maxRedirects: 0 });
                        if (response.status() >= 300 && response.status() < 400) {
                            await refuse('frontend redirect');
                            return;
                        }
                        await route.fulfill({ response });
                    })().catch(async () => {
                        audit.monitoring.push('HTTP handler failed');
                        await route.abort('blockedbyclient').catch(() => {
                            audit.monitoring.push('HTTP abort failed');
                        });
                    });
                    pending.add(task);
                    void task.finally(() => pending.delete(task));
                    return task;
                });
                await context.routeWebSocket('**/*', (socket) => {
                    try {
                        options.socket(socket, audit, pending);
                    } catch {
                        audit.monitoring.push('WebSocket handler failed');
                    }
                });
                context.on('page', (opened) => {
                    opened.on('pageerror', (error) => {
                        if (options.expectedError?.(error, audit)) return;
                        audit.errors.push('uncaught page error');
                    });
                    opened.on('console', (message) => {
                        if (message.type() === 'error') audit.errors.push('console error');
                    });
                    opened.on('requestfailed', () => {
                        if (!stopping) audit.errors.push('request failed');
                    });
                    opened.on('response', (response) => {
                        if (response.status() >= 300)
                            audit.errors.push('HTTP failure or redirect');
                    });
                    opened.on('crash', () => audit.errors.push('page crash'));
                    if (page && opened !== page) audit.refused.push('unexpected extra page');
                });
                page = await context.newPage();
                startBrowserFixtures(page);
                await use({ page, audit });
            } finally {
                stopping = true;
                // Guards remain installed until every browser producer is stopped.
                try {
                    await context.close();
                } catch {
                    audit.monitoring.push('context close failed');
                }
                while (pending.size) await Promise.all([...pending]);
                try {
                    await info.attach('settings-safety-audit', {
                        body: Buffer.from(JSON.stringify(audit, null, 2)),
                        contentType: 'application/json',
                    });
                } finally {
                    expect(
                        {
                            refused: audit.refused,
                            errors: audit.errors,
                            monitoring: audit.monitoring,
                        },
                        'strict teardown audit, including setup/assertion failures',
                    ).toEqual({ refused: [], errors: [], monitoring: [] });
                    options.teardown?.(audit);
                }
            }
        },
    });
}

/** True for a WebSocket URL on the local frontend with no credentials or fragment. */
function localSocket(url: URL) {
    return (
        url.host === BROWSER_APP.host &&
        url.protocol === (BROWSER_APP.protocol === 'https:' ? 'wss:' : 'ws:') &&
        !url.username &&
        !url.password &&
        !url.hash
    );
}

/** True for the Vite dev-server socket (one `token` query parameter). */
function viteSocket(url: URL) {
    return (
        localSocket(url) &&
        url.pathname === '/' &&
        url.searchParams.getAll('token').length === 1 &&
        [...url.searchParams.keys()].length === 1
    );
}

/**
 * True for a Vite `vite:forward-console` frame: the Vite client forwards
 * console errors and unhandled rejections to the dev server over its socket.
 * The page's own error listeners record the same errors.
 */
function viteForwardedConsole(message: string | Buffer) {
    try {
        const frame = JSON.parse(String(message)) as { type?: unknown; event?: unknown };
        return frame?.type === 'custom' && frame.event === 'vite:forward-console';
    } catch {
        return false;
    }
}

/** Holds the Vite dev-server socket open and refuses every other WebSocket. */
export function viteOnlySocket(
    socket: WebSocketRoute,
    audit: BrowserAudit,
    pending: Set<Promise<void>>,
) {
    if (viteSocket(new URL(socket.url()))) {
        socket.onMessage((message) => {
            if (!viteForwardedConsole(message))
                audit.refused.push('unexpected tooling socket frame');
        });
        return;
    }
    audit.refused.push('unexpected WebSocket/control attempt');
    const task = socket.close().catch(() => {
        audit.monitoring.push('socket close failed');
    });
    pending.add(task);
    void task.finally(() => pending.delete(task));
}

/** One validated control-socket bind or unbind request. */
export type ControlRequest = {
    id: number;
    cmd: 'bind' | 'unbind';
    sys: string;
    mod: string;
    index: number;
    name: string;
};

/** Options for `controlSocket`. */
export type ControlSocketOptions<A extends ControlAudit> = {
    /** The only `bearer_token` the control socket accepts. */
    bearer: string;
    /** The bindable variables of one module, or undefined when it may not be bound. */
    values: (
        request: Record<string, unknown>,
        audit: A,
    ) => Record<string, unknown> | undefined;
    /** The name a bind, delivery and unbind is recorded under. Default sys:mod:index:name. */
    key?: (request: ControlRequest) => string;
    /** Sends the value for a new bind. Default: one notify with the variable's value. */
    deliver?: (
        request: ControlRequest,
        value: unknown,
        notify: (value: unknown) => void,
        audit: A,
    ) => void;
};

/**
 * A browser-local control socket for the ts-client protocol
 * (@placeos/ts-client src/realtime/functions.ts). `ping` is answered `pong`;
 * a bind or unbind of a variable `values` returns is answered `success`, and
 * a bind also gets the variable's value as a `notify`. Any other socket, frame
 * or command (including `exec`) is refused and closes the socket. The Vite
 * dev-server socket is held open.
 */
export function controlSocket<A extends ControlAudit>(
    options: ControlSocketOptions<A>,
) {
    const key =
        options.key ??
        ((r: ControlRequest) => [r.sys, r.mod, r.index, r.name].join(':'));
    return (socket: WebSocketRoute, audit: A, pending: Set<Promise<void>>) => {
        const url = new URL(socket.url());
        const close = () => {
            const task = socket.close().catch(() => {
                audit.monitoring.push('socket close failed');
            });
            pending.add(task);
            void task.finally(() => pending.delete(task));
            return task;
        };
        // Never record the Vite socket's token or query.
        if (viteSocket(url)) {
            socket.onMessage((message) => {
                if (viteForwardedConsole(message)) return;
                audit.refused.push('unexpected tooling socket message');
                void close();
            });
            return;
        }
        const params = [...url.searchParams.keys()];
        const valid_query =
            params.length === 0 ||
            (params.length === 1 &&
                params[0] === 'bearer_token' &&
                url.searchParams.get('bearer_token') === options.bearer);
        if (!localSocket(url) || url.pathname !== CONTROL_PATH || !valid_query) {
            audit.refused.push('unexpected WebSocket endpoint');
            void close();
            return;
        }
        // State is connection-local. A reconnect replays each newly bound value.
        const connection: BrowserConnection = { binds: [], delivered: [], unbinds: [] };
        audit.connections.push(connection);
        const bound = new Set<string>();
        const ids = new Set<number>();
        socket.onMessage((message) => {
            try {
                if (message === 'ping') {
                    socket.send('pong');
                    return;
                }
                const request: unknown = JSON.parse(String(message));
                if (!request || typeof request !== 'object' || Array.isArray(request))
                    throw new Error();
                const r = request as Record<string, unknown>;
                const keys = ['id', 'cmd', 'sys', 'mod', 'index', 'name'];
                const values = options.values(r, audit);
                if (
                    Object.keys(r).length !== keys.length ||
                    !keys.every((key) => Object.hasOwn(r, key)) ||
                    typeof r.id !== 'number' ||
                    !Number.isSafeInteger(r.id) ||
                    ids.has(r.id) ||
                    !values ||
                    typeof r.name !== 'string' ||
                    !Object.hasOwn(values, r.name) ||
                    !['bind', 'unbind'].includes(String(r.cmd))
                )
                    throw new Error();
                const valid = r as ControlRequest;
                ids.add(valid.id);
                const binding_key = key(valid);
                if (valid.cmd === 'unbind') {
                    if (!bound.delete(binding_key)) throw new Error();
                    connection.unbinds.push(binding_key);
                    socket.send(JSON.stringify({ id: valid.id, type: 'success', value: null }));
                    return;
                }
                // Known-tuple rebinds are idempotent: ts-client can queue its initial
                // bind and reconnect restoration together. Always replay the value.
                bound.add(binding_key);
                connection.binds.push(binding_key);
                socket.send(JSON.stringify({ id: valid.id, type: 'success', value: null }));
                const notify = (value: unknown) =>
                    socket.send(
                        JSON.stringify({
                            type: 'notify',
                            value,
                            meta: {
                                sys: valid.sys,
                                mod: valid.mod,
                                index: valid.index,
                                name: valid.name,
                            },
                        }),
                    );
                if (options.deliver)
                    options.deliver(valid, values[valid.name], notify, audit);
                else notify(values[valid.name]);
                connection.delivered.push(binding_key);
            } catch {
                // Never retain raw frames, arguments, URLs, cookies or credentials.
                audit.refused.push('unexpected control frame/binding/command');
                void close();
            }
        });
        // The client marks connected only after a first server message; waiting for
        // the client's first ping here would deadlock its queued bind requests.
        socket.send('pong');
    };
}

/**
 * Ids, hidden asset data and exact-query matchers for one synthetic
 * organisation, region, building and level. Every id starts with `prefix`.
 */
export function syntheticOrg(prefix: string) {
    const ORGANISATION = prefix + 'org';
    const REGION = prefix + 'region';
    const BUILDING = prefix + 'building';
    const LEVEL = prefix + 'level';
    const ZONES = [ORGANISATION, REGION, BUILDING, LEVEL];
    const HIDDEN_CATEGORIES = [
        { id: prefix + 'catering', name: '_CATERING_', hidden: true },
        { id: prefix + 'desks', name: '_DESKS_', hidden: true },
        { id: prefix + 'parking', name: '_PARKING_', hidden: true },
        { id: prefix + 'lockers', name: '_LOCKERS_', hidden: true },
    ];
    const HIDDEN_TYPES: Record<string, string[]> = {
        [prefix + 'catering']: [],
        [prefix + 'desks']: ['_DESKS_'],
        [prefix + 'parking']: [
            '_PARKING_SPACES_',
            '_PARKING_USERS_',
            '_PARKING_FLEET_VEHICLES_',
        ],
        [prefix + 'lockers']: ['_LOCKER_BANKS_', '_LOCKERS_'],
    };
    const HIDDEN_TYPE_IDS = Object.values(HIDDEN_TYPES)
        .flat()
        .map((name) => prefix + 'type-' + name);
    /** Exact query multiset: duplicates, unknown keys and foreign authority fail. */
    const hasParams = (url: URL, expected: Record<string, string>) => {
        const entries = [...url.searchParams.entries()];
        if (
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.has('authority_id')
        ) {
            if (
                url.searchParams.getAll('authority_id').length !== 1 ||
                url.searchParams.get('authority_id') !== prefix + 'authority'
            )
                return false;
        }
        const keys = entries.filter(
            ([key]) =>
                !(url.pathname === '/api/engine/v2/zones' && key === 'authority_id'),
        );
        return (
            keys.length === Object.keys(expected).length &&
            Object.entries(expected).every(
                ([key, value]) =>
                    url.searchParams.getAll(key).length === 1 &&
                    url.searchParams.get(key) === value,
            )
        );
    };
    /** The parking booking queries the shell makes for the level and `email`. */
    const parkingQuery = (url: URL, email: string) => {
        const period_start = url.searchParams.get('period_start')!;
        const period_end = url.searchParams.get('period_end')!;
        const base = { type: 'parking', period_start, period_end };
        return (
            hasParams(url, base) ||
            hasParams(url, { ...base, zones: LEVEL, rejected: 'false' }) ||
            hasParams(url, { ...base, email })
        );
    };
    /** Hidden assets may only be read in this synthetic organisation. */
    const hiddenAssetQuery = (url: URL) => {
        const type_id = url.searchParams.get('type_id') ?? '';
        const zone_id = url.searchParams.get('zone_id') ?? '';
        return (
            HIDDEN_TYPE_IDS.includes(type_id) &&
            ZONES.includes(zone_id) &&
            hasParams(url, { type_id, zone_id, limit: '500' })
        );
    };
    return {
        PREFIX: prefix,
        ORGANISATION,
        REGION,
        BUILDING,
        LEVEL,
        ZONES,
        MAP_PATH: '/' + prefix + 'map.svg',
        HIDDEN_CATEGORIES,
        HIDDEN_TYPES,
        HIDDEN_TYPE_IDS,
        hasParams,
        parkingQuery,
        hiddenAssetQuery,
    };
}

export type SyntheticOrg = ReturnType<typeof syntheticOrg>;

/** Options for `syntheticOrgGets`. */
export type SyntheticOrgGets = {
    /** The signed-in user, for its metadata and parking queries. */
    user: { id: string; email: string };
    /** The single-zone metadata names each zone may be asked for. */
    zone_metadata: Record<string, string[]>;
    /** Zone metadata details by name. Others are [] for LIST_METADATA, else {}. */
    details?: Record<string, unknown>;
    /** The building's `bindings` details. Every other bulk entry is {}. */
    bindings?: Record<string, unknown>;
    /** The systems listed for the organisation, level and building. Default none. */
    rooms?: unknown[];
    /** The level map, served at MAP_PATH. */
    svg?: string;
    /** First word of the zone names. Default 'Synthetic Zone'. */
    label?: string;
    /** Extra fields on the user's metadata entries. */
    user_metadata?: Record<string, unknown>;
};

/**
 * Exact GET fixtures for the shell's bootstrap in one synthetic organisation:
 * zones, bulk and zone metadata, user metadata, groups, systems, hidden asset
 * categories, types and assets, calendars and parking bookings.
 */
export async function syntheticOrgGets(
    page: Page,
    org: SyntheticOrg,
    options: SyntheticOrgGets,
) {
    const { hasParams } = org;
    const label = options.label ?? 'Synthetic Zone';
    const rooms = options.rooms ?? [];
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: org.ORGANISATION,
                name: label + ' Organisation',
                display_name: label + ' Organisation',
                tags: ['org'],
            },
        ],
    );
    await browserGet(
        page,
        (url) => {
            const match = /^\/api\/engine\/v2\/metadata\/([^/]+)\/bulk$/.exec(
                url.pathname,
            );
            const ids = (url.searchParams.get('parent_ids') ?? '').split(',');
            return (
                !!match &&
                BULK_METADATA.includes(match[1]) &&
                url.searchParams.has('parent_ids') &&
                hasParams(url, {
                    parent_ids: url.searchParams.get('parent_ids')!,
                }) &&
                ids.every((id) => org.ZONES.includes(id))
            );
        },
        (url) =>
            Object.fromEntries(
                url.searchParams
                    .get('parent_ids')!
                    .split(',')
                    .map((id) => [
                        id,
                        {
                            details:
                                options.bindings &&
                                url.pathname === '/api/engine/v2/metadata/bindings/bulk' &&
                                id === org.BUILDING
                                    ? options.bindings
                                    : {},
                        },
                    ]),
            ),
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, {
                tags: 'region',
                parent_id: org.ORGANISATION,
                limit: '200',
            }),
        () => [
            {
                id: org.REGION,
                name: label + ' Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, {
                tags: 'building',
                parent_id: org.REGION,
                limit: '500',
            }),
        () => [
            {
                id: org.BUILDING,
                parent_id: org.REGION,
                name: label + ' Building',
                display_name: label + ' Building',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
        ],
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            hasParams(url, { tags: 'level', limit: '2500' }),
        () => [
            {
                id: org.LEVEL,
                parent_id: org.BUILDING,
                name: label + ' Level',
                display_name: label + ' Level',
                tags: ['level'],
                map_id: new URL(org.MAP_PATH, BROWSER_APP.origin).href,
            },
        ],
    );
    await browserGet(
        page,
        (url) => {
            const id = url.pathname.split('/')[5] ?? '';
            const name = url.searchParams.get('name') ?? '';
            return (
                url.pathname === '/api/engine/v2/metadata/' + id &&
                Object.hasOwn(options.zone_metadata, id) &&
                options.zone_metadata[id].includes(name) &&
                hasParams(url, { name })
            );
        },
        (url) => {
            const id = url.pathname.split('/')[5];
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    id,
                    name,
                    details:
                        options.details && Object.hasOwn(options.details, name)
                            ? options.details[name]
                            : LIST_METADATA.includes(name)
                              ? []
                              : {},
                },
            };
        },
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/metadata/' + options.user.id &&
            ['settings', 'contacts'].some((name) => hasParams(url, { name })),
        (url) => {
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    name,
                    ...options.user_metadata,
                    details: name === 'contacts' ? [] : {},
                },
            };
        },
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/groups/current' &&
            hasParams(url, {}),
        () => [],
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: org.ORGANISATION, limit: '5000' }),
        () => rooms,
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: org.LEVEL, limit: '50' }),
        () => rooms,
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, { zone_id: org.ORGANISATION, limit: '50' }),
        () => [],
    );
    // LandingStateService loads the active building's rooms on every route.
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            hasParams(url, {
                zone_id: org.BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => rooms,
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            hasParams(url, { hidden: 'true', limit: '500' }),
        () => org.HIDDEN_CATEGORIES,
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            Object.hasOwn(
                org.HIDDEN_TYPES,
                url.searchParams.get('category_id') ?? '',
            ) &&
            hasParams(url, {
                category_id: url.searchParams.get('category_id')!,
                limit: '500',
            }),
        (url) =>
            org.HIDDEN_TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: org.PREFIX + 'type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' && org.hiddenAssetQuery(url),
        () => [],
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && hasParams(url, {}),
        () => [],
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/bookings' &&
            validPeriod(url) &&
            org.parkingQuery(url, options.user.email),
        () => [],
    );
    if (options.svg !== undefined) {
        const svg = options.svg;
        browserFixture(page, {
            match: (url) => url.pathname === org.MAP_PATH && hasParams(url, {}),
            contentType: 'image/svg+xml',
            body: () => svg,
        });
    }
}

/** Options for `browserSignIn`. */
export type BrowserSignIn = {
    /** The fake bearer stored as the access token. */
    bearer: string;
    /** Every effective setting, stored as PLACEOS.setting_overrides. */
    settings: Settings;
    /** The signed-in user the current-user GET returns. */
    user: unknown;
    /** Extra sessionStorage entries, as JSON values. */
    session?: Record<string, unknown>;
    /** The authority's display name. Default 'Browser-only authority'. */
    authority?: string;
};

/**
 * Before the app loads: clear storage, store the fake bearer with an expiry
 * an hour ahead, the settings overrides and the en-US locale, and register
 * the authority and current-user GET fixtures for `org`.
 */
export async function browserSignIn(
    page: Page,
    org: SyntheticOrg,
    options: BrowserSignIn,
) {
    const cid = createHash('md5')
        .update(BROWSER_APP.origin + '/oauth-resp.html')
        .digest('hex');
    const session = Object.fromEntries(
        Object.entries(options.session ?? {}).map(([key, value]) => [
            key,
            JSON.stringify(value),
        ]),
    );
    await page.addInitScript(
        ({ origin, cid, bearer, settings, session }) => {
            if (location.origin !== origin) return;
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem(cid + '_access_token', bearer);
            localStorage.setItem(cid + '_expires_at', String(Date.now() + 60 * 60_000));
            localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(settings));
            localStorage.setItem('APP.locale', 'en-US');
            localStorage.setItem('PLACEOS.locale', 'en-US');
            localStorage.setItem('mock', 'false');
            for (const [key, value] of Object.entries(session))
                sessionStorage.setItem(key, value);
        },
        {
            origin: BROWSER_APP.origin,
            cid,
            bearer: options.bearer,
            settings: options.settings,
            session,
        },
    );
    await browserGet(
        page,
        (url) => url.pathname === '/auth/authority' && org.hasParams(url, {}),
        () => ({
            id: org.PREFIX + 'authority',
            name: options.authority ?? 'Browser-only authority',
            domain: BROWSER_APP.host,
            version: '3.0.0',
            session: false,
            production: false,
            config: { org_zone: org.ORGANISATION },
        }),
    );
    await browserGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/users/current' &&
            org.hasParams(url, {}),
        () => options.user,
    );
}

// ---------------------------------------------------------------------------
// Browser-only Explore: one level map with an AreaManagement binding
// ---------------------------------------------------------------------------

/**
 * A synthetic organisation for Explore. The level map has two areas: TARGET,
 * which is also ROOM's map shape, and CONTROL, an always-drawn polygon at
 * (0.6-0.9, 0.6-0.9) in zone-free COLOUR. The building binds SYSTEM's
 * AreaManagement module, and LIVE is its default variables: a count and a
 * temperature for TARGET and a count for CONTROL. BASE holds the settings
 * every Explore spec pins.
 */
export function syntheticExplore(prefix: string) {
    const org = syntheticOrg(prefix);
    const SYSTEM = prefix + 'area-system';
    const TARGET = prefix + 'target';
    const CONTROL = prefix + 'control';
    const COLOUR = '#123456';
    const ROOM = {
        id: prefix + 'room',
        name: 'Synthetic Settings Room',
        display_name: 'Synthetic Settings Room',
        email: 'settings-room@example.invalid',
        map_id: TARGET,
        bookable: true,
        capacity: 4,
        features: [],
        images: [],
        zones: org.ZONES,
    };
    const MAP_REGIONS = {
        areas: [
            {
                id: TARGET,
                map_id: TARGET,
                properties: {
                    capacity: 10,
                    hide_label: false,
                    draw_polygon: false,
                    label_location: { x: 0.25, y: 0.25 },
                },
                geometry: {
                    coordinates: [[0.1, 0.1], [0.4, 0.1], [0.4, 0.4], [0.1, 0.4]],
                },
            },
            {
                id: CONTROL,
                map_id: CONTROL,
                properties: { capacity: 10, hide_label: true, draw_polygon: true },
                geometry: {
                    coordinates: [[0.6, 0.6], [0.9, 0.6], [0.9, 0.9], [0.6, 0.9]],
                },
            },
        ],
    };
    const ZONE_METADATA: Record<string, string[]> = {
        [org.BUILDING]: [
            'parking_booking_rules',
            'desk_booking_rules',
            'room_booking_rules',
        ],
        [org.LEVEL]: ['desks', 'map_regions'],
        [org.ORGANISATION]: [
            'locale_en-AU',
            'locale_en-US',
            'room_alerts',
            'points-of-interest',
        ],
    };
    // Payloads are the values passed to StatusVariable callbacks, not GeoJSON.
    const LIVE: Record<string, unknown> = {
        [org.LEVEL + ':areas']: {
            value: [
                { area_id: TARGET, map_id: TARGET, count: 2, temperature: 23 },
                { area_id: CONTROL, map_id: CONTROL, count: 1 },
            ],
        },
        [org.LEVEL]: { value: [] },
        [org.LEVEL + ':desk_bookings']: {},
        // LandingStateService.init binds AreaManagement overview (level occupancy).
        overview: {},
    };
    const SVG =
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
        '<rect width="400" height="400" fill="#ffffff"/>' +
        '<rect id="' + TARGET + '" x="40" y="40" width="120" height="120" fill="#aaaaaa"/>' +
        '<rect id="' + CONTROL + '" x="240" y="240" width="120" height="120" fill="#aaaaaa"/></svg>';
    const BASE: Settings = {
        'app.features': ['explore'],
        'app.default_building': org.BUILDING,
        'app.default_route': '/explore',
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.global_search': false,
        'app.chat.enabled': false,
        'app.has_assets': false,
        'app.desks.has_assets': false,
        'app.bookings.has_assets': false,
        'app.desks.can_book_lockers': false,
        'app.desks.use_assets': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        'app.schedule.use_websocket': false,
        'app.analytics.enabled': false,
        'app.show_presence_indicators': false,
        'app.explore.hide_zones': false,
        'app.explore.hide_devices': true,
        'app.explore.hide_sensors': true,
        'app.explore.show_legend': false,
        'app.explore.disable': [],
        'app.explore.disable_features': [],
        'app.explore.disable_styles': [],
        'app.explore.disable_actions': [],
        'app.explore.disable_labels': [],
        'app.explore.use_zone_polygons': true,
        'app.explore.show_zone_labels': true,
        'app.explore.cisco_maps.enabled': false,
        'app.maps_people.keys': {},
        'app.maps_people.use_zones': [],
    };
    return {
        ...org,
        SYSTEM,
        TARGET,
        CONTROL,
        COLOUR,
        ROOM,
        /** The room's fill for both space-free and space-busy. */
        ROOM_FILL: '#2468ac',
        MAP_REGIONS,
        ZONE_METADATA,
        LIVE,
        SVG,
        BASE,
    };
}

export type SyntheticExplore = ReturnType<typeof syntheticExplore>;

/**
 * `controlSocket` values: `live` on SYSTEM's AreaManagement module and, when
 * the audit carries `room_values`, those on ROOM's Bookings module.
 */
export function exploreValues(
    explore: SyntheticExplore,
    live: Record<string, unknown>,
) {
    return (
        r: Record<string, unknown>,
        audit: ControlAudit & { room_values?: Record<string, unknown> },
    ) =>
        r.sys === explore.SYSTEM && r.mod === 'AreaManagement' && r.index === 1
            ? live
            : audit.room_values &&
                r.sys === explore.ROOM.id &&
                r.mod === 'Bookings' &&
                r.index === 1
              ? audit.room_values
              : undefined;
}

/** The sys:mod:index:name bindings `exploreValues` delivers. */
export function exploreBindings(
    explore: SyntheticExplore,
    live: Record<string, unknown>,
    room_values: Record<string, unknown> = {},
) {
    return [
        ...Object.keys(live).map((name) =>
            [explore.SYSTEM, 'AreaManagement', 1, name].join(':'),
        ),
        ...Object.keys(room_values).map((name) =>
            [explore.ROOM.id, 'Bookings', 1, name].join(':'),
        ),
    ];
}

/** The Bookings variables of ROOM a control socket answers. */
export function exploreRoomValues(): Record<string, unknown> {
    return {
        bookings: [],
        status: 'free',
        presence: false,
        hide_meeting_details: true,
        hide_meeting_title: true,
    };
}

/** Options for `openSyntheticExplore`. */
export type OpenSyntheticExplore = {
    /** Every effective setting. */
    settings: Settings;
    bearer: string;
    /** Systems listed for the organisation, level and building. Default none. */
    rooms?: unknown[];
    /** Spec GET fixtures, registered before the shared ones. */
    gets?: () => Promise<void>;
    /** Every distinct binding the latest control socket must have delivered. */
    delivered: string[];
    /** Open the map controls panel before the Areas toggle. */
    controls?: boolean;
    /** Runs once the map has loaded, before the control polygon is checked. */
    ready?: () => Promise<void>;
};

/**
 * Sign in, register the Explore GET fixtures, open Explore, wait for every
 * setting and live delivery, turn on Areas in the UI and wait until the
 * CONTROL polygon is painted. Returns the map canvas.
 */
export async function openSyntheticExplore(
    page: Page,
    audit: ControlAudit,
    explore: SyntheticExplore,
    options: OpenSyntheticExplore,
) {
    const { settings } = options;
    await browserSignIn(page, explore, {
        bearer: options.bearer,
        settings,
        user: USER,
    });
    await options.gets?.();
    await syntheticOrgGets(page, explore, {
        user: USER,
        zone_metadata: explore.ZONE_METADATA,
        details: { map_regions: explore.MAP_REGIONS },
        bindings: {
            area_management: { id: explore.SYSTEM, mod: 'AreaManagement' },
        },
        rooms: options.rooms,
        svg: explore.SVG,
    });
    await page.goto('/#/explore');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expect(page.locator('explore-map-view')).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
        await expect
            .poll(
                () =>
                    page.evaluate(
                        (name) => (window as DebugWindow).setting?.(name),
                        key,
                    ),
                { message: 'effective ' + key },
            )
            .toEqual(value);
    }
    await expect.poll(() => audit.fixtures['/auth/authority'] ?? 0).toBeGreaterThan(0);
    await expect
        .poll(() => audit.fixtures['/api/engine/v2/users/current'] ?? 0)
        .toBeGreaterThan(0);
    // Idempotent rebinds may repeat a delivery; every value must arrive.
    await expect
        .poll(() => [...new Set(audit.connections.at(-1)?.delivered)].sort())
        .toEqual([...options.delivered].sort());
    // Areas begins disabled in ExploreMapView.ngOnInit; turn it on in the UI.
    if (options.controls)
        await page.locator('explore-map-view button[toggle-controls]').click();
    const areas = options.controls
        ? page.locator('explore-map-view settings-toggle').filter({ hasText: /Areas/ })
        : page.locator('explore-map-view settings-toggle');
    await expect(areas).toHaveCount(1);
    await expect(areas.locator('input[type="checkbox"]')).not.toBeChecked();
    await areas.locator('button').click();
    await expect(areas.locator('input[type="checkbox"]')).toBeChecked();
    const canvas = page.locator('explore-map-view [map-canvas] canvas');
    await expect(canvas).toHaveCount(1);
    await expect(canvas).toBeVisible();
    await expect(page.locator('explore-map-view dynamic-map mat-spinner')).toHaveCount(0);
    await expect.poll(() => audit.fixtures[explore.MAP_PATH] ?? 0).toBeGreaterThan(0);
    await options.ready?.();
    // The always-drawn control (COLOUR at alpha 128) proves metadata, bindings,
    // status parsing, enabled Areas and canvas painting have all completed.
    await expect.poll(() => pixel(page, 0.75, 0.75)).toEqual([18, 52, 86, 128]);
    return canvas;
}

/** ROOM's Explore feature, once its synthetic Bookings state and fill apply. */
export async function exploreRoomReady(
    page: Page,
    room_values: Record<string, unknown>,
    explore: SyntheticExplore,
) {
    const feature = page.locator('explore-map-view explore-space-info [customTooltip]');
    await expect(feature).toHaveCount(1);
    await expect(feature).toBeVisible();
    await expect
        .poll(() => roomState(page))
        .toMatchObject({
            name: explore.ROOM.name,
            status: room_values.status,
            hide_title: room_values.hide_meeting_title,
            hide_details: room_values.hide_meeting_details,
        });
    await expect
        .poll(() =>
            page.locator('explore-map-view').evaluate((element, shape) => {
                const view = (window as DebugWindow).ng?.getComponent(element) as
                    | { styles(): Record<string, { fill?: string }> }
                    | undefined;
                if (!view) throw new Error('Read-only map component unavailable');
                return view.styles()['#' + shape]?.fill;
            }, explore.ROOM.map_id),
        )
        .toBe(explore.ROOM_FILL);
    return feature;
}

// ---------------------------------------------------------------------------
// Browser-only meeting form (new meeting form, events backend)
// ---------------------------------------------------------------------------
//
// For settings whose effect is the meeting form or the meeting the app sends.
// Every WebSocket and every mutation is refused except ONE armed POST that a
// test arms with `audit.submission`; it gets a local 201. Frontend assets are
// fetched with redirects refused.

export type Json = Record<string, unknown>;

/**
 * One armed POST to `path` is accepted only when `query` holds for its URL
 * (no query at all when `query` is absent) and `accepts` holds for its body.
 * With `expected`, teardown also checks that the one body equals it.
 */
export type MeetingSubmission = {
    path: string;
    query?: (url: URL) => boolean;
    accepts: (body: Json) => boolean;
    expected?: Json;
    armed: boolean;
    bodies: Json[];
    completed: boolean;
};

export type MeetingAudit = BrowserAudit & {
    submission?: MeetingSubmission;
    /** One uncaught page error a scenario expects; counted, not ignored. */
    expected_error?: { text: string; seen: number };
};

/** The events endpoint the meeting form posts to. */
export const MEETING_POST_PATH = '/api/staff/v1/events';
/** Native room bookings (events.use_bookings true) are created here. */
export const MEETING_BOOKINGS_PATH = '/api/staff/v1/bookings';

/** The synthetic signed-in staff user (not admin or support). */
export const MEETING_USER = {
    id: 'browser-meeting-staff',
    name: 'Synthetic Staff',
    email: 'staff@dev.place.tech',
    groups: [] as string[],
    department: '',
    sys_admin: false,
    support: false,
};
export const MEETING_TITLE = 'Browser-only meeting simulation';

async function meetingMutation(
    route: Route,
    url: URL,
    audit: MeetingAudit,
    refuse: (reason: string) => Promise<void>,
) {
    const req = route.request();
    const capture = audit.submission;
    if (
        req.method() !== 'POST' ||
        !capture ||
        url.pathname !== capture.path ||
        (capture.query ? !capture.query(url) : !!url.search) ||
        !capture.armed ||
        capture.bodies.length !== 0 ||
        !/^application\/json(?:;|$)/i.test(req.headers()['content-type'] ?? '')
    ) {
        await refuse('unexpected or unarmed mutation');
        return;
    }
    capture.armed = false;
    const body = req.postDataJSON() as Json;
    // Recorded first so a mismatch reaches the test as a diff.
    capture.bodies.push(body);
    if (!capture.accepts(body)) {
        await refuse('outgoing event JSON mismatch');
        return;
    }
    await route.fulfill({
        status: 201,
        json: { ...body, id: 'e2e-meeting-synthetic-created-event' },
    });
    capture.completed = true;
}

/** Browser-only test for the meeting form; the fixture is `isolated`. */
export const meetingFormTest = browserOnlyTest<MeetingAudit>({
    audit: () => ({ refused: [], errors: [], monitoring: [], fixtures: {} }),
    socket: viteOnlySocket,
    mutation: meetingMutation,
    fetchAssets: true,
    expectedError: (error, audit) => {
        // Only the first uncaught error containing the expected text is counted;
        // any other or repeated error still fails the audit.
        const expected = audit.expected_error;
        if (expected && expected.seen === 0 && error.message.includes(expected.text)) {
            expected.seen++;
            return true;
        }
        return false;
    },
    teardown: (audit) => {
        if (audit.expected_error) {
            expect(
                audit.expected_error.seen,
                'the expected refusal error is logged exactly once',
            ).toBe(1);
        }
        if (audit.submission) {
            expect(audit.submission.armed).toBe(false);
            expect(audit.submission.completed).toBe(true);
            if (audit.submission.expected)
                expect(audit.submission.bodies).toEqual([audit.submission.expected]);
            else expect(audit.submission.bodies).toHaveLength(1);
        }
    },
});

/** The path the app uses to look up one person (UserPipe). */
export function meetingPersonPath(email: string) {
    return '/api/staff/v1/people/' + encodeURIComponent(email);
}

/**
 * A synthetic organisation for the meeting form: two bookable rooms on the
 * level, an internal guest, and a delegate in GROUP. BASE holds the settings
 * every meeting spec pins.
 */
export function syntheticMeetingOrg(prefix: string) {
    const org = syntheticOrg(prefix);
    const GROUP = prefix + 'delegate-group';
    const DELEGATE = {
        id: prefix + 'delegate',
        name: 'Synthetic Delegate',
        email: 'delegate@dev.place.tech',
        groups: [GROUP],
        department: '',
    };
    const ROOMS = ['a', 'b'].map((suffix) => ({
        id: prefix + 'room-' + suffix,
        name: 'Synthetic Room ' + suffix.toUpperCase(),
        display_name: 'Synthetic Room ' + suffix.toUpperCase(),
        email: 'room-' + suffix + '@dev.place.tech',
        capacity: 4,
        bookable: true,
        zones: org.ZONES,
        features: [],
        images: [],
        map_id: '',
        level: { id: org.LEVEL, parent_id: org.BUILDING, name: 'Synthetic Level' },
        response_status: 'accepted',
        created_at: 1,
    }));
    const ZONE_METADATA: Record<string, string[]> = {
        [org.BUILDING]: [
            'parking_booking_rules',
            'desk_booking_rules',
            'room_booking_rules',
            // CateringStateService._loadSettings reads the building's catering settings.
            'catering-settings',
        ],
        [org.LEVEL]: ['desks', 'map_regions'],
        [org.ORGANISATION]: [
            'locale_en-AU',
            'locale_en-US',
            'room_alerts',
            'points-of-interest',
        ],
    };
    const BASE: Settings = {
        'app.name': 'Browser Meeting Simulation',
        'app.features': ['spaces'],
        'app.feature_groups': {},
        'app.default_building': org.BUILDING,
        'app.default_route': '/book/meeting/form',
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.allow_dark_mode': false,
        'app.internal_user_domain': '@dev.place.tech',
        'app.global_search': false,
        'app.chat.enabled': false,
        'app.analytics.enabled': false,
        'app.sentry_dsn': '',
        'app.has_assets': false,
        'app.desks.has_assets': false,
        'app.desks.can_book_lockers': false,
        'app.desks.use_assets': false,
        'app.bookings.has_assets': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        'app.schedule.use_websocket': false,
        'app.events.use_bookings': false,
        'app.events.has_assets': false,
        'app.events.allow_externals': false,
        'app.events.allow_recurrence': false,
        'app.events.allow_multiday': false,
        'app.events.allow_all_day': false,
        'app.events.allow_online_meetings': false,
        'app.events.allow_visibility': false,
        'app.events.can_book_for_anyone': false,
        'app.events.use_building_timezone': false,
        'app.events.room_as_host': false,
        'app.events.force_host': '',
        'app.events.no_standalone': false,
        'app.events.booking_unavailable': false,
        'app.events.strict_capacity_check': false,
        'app.events.multiple_spaces': false,
        'app.events.hide_notes': true,
        'app.events.bookable_hours': null,
        'app.events.default_duration': 60,
        'app.events.min_duration': 30,
        'app.events.max_duration': 180,
        'app.events.duration_step': 30,
        'app.events.custom_duration_options': [],
        'app.events.setup': 0,
        'app.events.breakdown': 0,
        'app.events.overflow': {},
        'app.catering.backend': 'native',
        'app.catering_provider': '',
    };
    return {
        ...org,
        GROUP,
        DELEGATE,
        /** UserPipe's lookup path for DELEGATE. */
        HOST_PATH: meetingPersonPath(DELEGATE.email),
        /** Internal-domain attendee (app.internal_user_domain), so no externals rule applies. */
        GUEST: {
            id: prefix + 'guest',
            name: 'Synthetic Guest',
            email: 'guest@dev.place.tech',
            groups: [] as string[],
            department: '',
            is_external: false,
        },
        ROOMS,
        ZONE_METADATA,
        BASE,
    };
}

export type SyntheticMeetingOrg = ReturnType<typeof syntheticMeetingOrg>;

/**
 * Exact GET fixtures for the meeting form: each room, room availability (all
 * free), the shell bootstrap with the rooms listed, and `rules` as the
 * building's room_booking_rules. With `delegate`, DELEGATE's person lookup.
 */
export async function meetingFormGets(
    page: Page,
    org: SyntheticMeetingOrg,
    options: { rules?: Json[]; delegate?: boolean } = {},
) {
    const { hasParams, ROOMS } = org;
    await browserGet(
        page,
        (url) =>
            ROOMS.some((room) => url.pathname === '/api/engine/v2/systems/' + room.id) &&
            hasParams(url, {}),
        (url) => ROOMS.find((room) => url.pathname.endsWith('/' + room.id))!,
    );
    if (options.delegate)
        await browserGet(
            page,
            (url) => url.pathname === org.HOST_PATH && hasParams(url, {}),
            () => org.DELEGATE,
        );
    await browserGet(
        page,
        (url) => {
            const system_ids = url.searchParams.get('system_ids') ?? '';
            const period_start = url.searchParams.get('period_start') ?? '';
            const period_end = url.searchParams.get('period_end') ?? '';
            const ids = system_ids.split(',');
            return (
                url.pathname === '/api/staff/v1/calendars/availability' &&
                validPeriod(url) &&
                new Set(ids).size === ids.length &&
                ids.every((id) => ROOMS.some((room) => room.id === id)) &&
                hasParams(url, { system_ids, period_start, period_end })
            );
        },
        (url) =>
            url.searchParams
                .get('system_ids')!
                .split(',')
                .map((id) => {
                    const room = ROOMS.find((room) => room.id === id)!;
                    return {
                        id,
                        name: room.name,
                        email: room.email,
                        resource: room,
                        availability: [],
                    };
                }),
    );
    await syntheticOrgGets(page, org, {
        user: MEETING_USER,
        zone_metadata: org.ZONE_METADATA,
        details: {
            room_booking_rules: options.rules ?? [],
            map_regions: { areas: [] },
        },
        rooms: ROOMS,
    });
}

/** The meeting form value, as RawMeeting from form_value(). */
export type RawMeeting = Json & {
    id: string;
    title: string;
    host: string;
    creator: string;
    date: number;
    date_end: number;
    duration: number;
    timezone: string;
    organiser: Json;
    resources: Json[];
    attendees: Json[];
    assets: Json[];
    catering: Json[];
};

/** A read-only snapshot of the review step's form and loaded rooms. */
export type MeetingSnapshot = {
    valid: boolean;
    loading: boolean;
    raw: RawMeeting;
    rooms: Json[];
};

/** Reads the meeting-flow-options form state through Angular's debug API. */
export function meetingFormSnapshot(page: Page): Promise<MeetingSnapshot> {
    return page.locator('meeting-flow-options').evaluate((element) => {
        const c = (window as DebugWindow).ng?.getComponent(element) as
            | {
                  form_value(): RawMeeting;
                  form(): { valid(): boolean };
                  loading(): boolean;
                  _event_form: { spaces(): Json[] };
              }
            | undefined;
        if (!c) throw new Error('Read-only meeting options unavailable');
        return JSON.parse(
            JSON.stringify({
                valid: c.form().valid(),
                loading: c.loading(),
                raw: c.form_value(),
                rooms: c._event_form.spaces(),
            }),
        ) as MeetingSnapshot;
    });
}

// ---------------------------------------------------------------------------
// Fully synthetic meeting submission (new meeting form, events backend)
// ---------------------------------------------------------------------------
//
// For settings whose only effect is the meeting the app sends: the browser-only
// meeting form (meetingFormTest) with a prepared draft for one room and one
// internal guest, hosted by the signed-in user.

const MEETING = syntheticMeetingOrg('e2e-meeting-submission-');
const MEETING_BEARER = 'browser-only-meeting-submission-not-a-valid-credential';

/** Internal-domain attendee (app.internal_user_domain), so no externals rule applies. */
export const MEETING_GUEST = MEETING.GUEST;
export const MEETING_ROOMS = MEETING.ROOMS;

/** Settings shared by the meeting-submission specs; each spec overrides its own key. */
export const MEETING_BASE: Settings = {
    ...MEETING.BASE,
    'app.events.can_book_for_others': false,
    'app.events.force_current_user_for_booking_rules': false,
    'app.events.hide_attendees': false,
    'app.events.allow_international': false,
    'app.events.allow_attendee_internal_or_external': false,
};

/** Register one exact synthetic GET fixture for a meeting-submission page. */
export function meetingGet(
    page: Page,
    match: GetFixture['match'],
    body: GetFixture['body'],
) {
    browserFixture(page, { match, body });
}

export const meetingTest = meetingFormTest.extend<{
    meeting: { page: Page; audit: MeetingAudit };
}>({
    meeting: async ({ isolated }, use) => use(isolated),
});

/** Exact synthetic GETs for the organisation, rooms and app bootstrap. */
async function meetingGets(page: Page) {
    await meetingFormGets(page, MEETING);
    // Native room bookings (events.use_bookings true): the availability checks
    // read existing room bookings for a period (queryResourceAvailability uses
    // exactly type, period_start and period_end). None exist, so every room is
    // free. Only an exact key set from this list is answered.
    meetingGet(
        page,
        (url) => {
            const keys = [...url.searchParams.keys()];
            return (
                url.pathname === MEETING_BOOKINGS_PATH &&
                url.searchParams.get('type') === 'room' &&
                validPeriod(url) &&
                new Set(keys).size === keys.length &&
                ['type', 'period_start', 'period_end'].every((key) => keys.includes(key)) &&
                keys.every((key) =>
                    ['type', 'period_start', 'period_end', 'zones', 'limit'].includes(key),
                )
            );
        },
        () => [],
    );
}

/**
 * Open the new meeting form's review step (view=2) with a prepared draft: one
 * room (Synthetic Room A), one internal guest, 10:00-11:00 UTC tomorrow, hosted
 * by the signed-in user. Waits for every setting, the draft and the room list,
 * then returns the Confirm button. Nothing is clicked.
 */
export async function openSubmissionMeeting(
    page: Page,
    audit: MeetingAudit,
    overrides: Settings,
    /** Extra groups on the synthetic signed-in user (browser-only). Default none. */
    options: { groups?: string[] } = {},
) {
    const settings = { ...MEETING_BASE, ...overrides };
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 1);
    date.setUTCHours(10, 0, 0, 0);
    const organiser = {
        id: MEETING_USER.id,
        name: MEETING_USER.name,
        email: MEETING_USER.email,
        groups: MEETING_USER.groups,
        department: '',
        is_external: false,
        visit_expected: false,
    };
    const draft = {
        id: '',
        title: MEETING_TITLE,
        creator: MEETING_USER.email,
        host: MEETING_USER.email,
        organiser,
        date: date.valueOf(),
        date_end: date.valueOf() + 3_600_000,
        duration: 60,
        all_day: false,
        private: false,
        recurring: false,
        recurrence: null,
        resources: [MEETING_ROOMS[0]],
        attendees: [MEETING_GUEST],
        assets: [],
        catering: [],
        meeting_provider: null,
        timezone: 'UTC',
        visibility: 'normal',
        needs_space: true,
        needs_parking: false,
        attachments: [],
        setup_time: 0,
        breakdown_time: 0,
        body: '',
    };
    await browserSignIn(page, MEETING, {
        bearer: MEETING_BEARER,
        settings,
        user: { ...MEETING_USER, groups: [...(options.groups ?? [])] },
        session: { 'PLACEOS.event_form': draft },
    });
    await meetingGets(page);
    await page.goto('/#/book/meeting/form?view=2');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(
        page.locator('global-loading [initialisation-error]'),
    ).toHaveCount(0);
    await expect(page.locator('meeting-flow-options')).toBeVisible();
    for (const [key, value] of Object.entries(settings)) {
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
    // Read-only view of the review step's form model and the loaded rooms.
    const snapshot = () =>
        page.locator('meeting-flow-options').evaluate((element) => {
            const c = (window as DebugWindow).ng?.getComponent(element) as
                | {
                      form_value(): Record<string, unknown>;
                      loading(): boolean;
                      _event_form: { spaces(): { id: string }[] };
                  }
                | undefined;
            if (!c) throw new Error('Read-only meeting options unavailable');
            return JSON.parse(
                JSON.stringify({
                    loading: c.loading(),
                    raw: c.form_value(),
                    rooms: c._event_form.spaces().map((room) => room.id),
                }),
            ) as {
                loading: boolean;
                raw: {
                    title: string;
                    host: string;
                    creator: string;
                    resources: { id: string }[];
                    attendees: { email: string }[];
                };
                rooms: string[];
            };
        });
    await expect
        .poll(async () => {
            const { loading, raw } = await snapshot();
            return {
                loading,
                title: raw.title,
                host: raw.host,
                creator: raw.creator,
                resources: raw.resources.map((room) => room.id),
                attendees: raw.attendees.map((user) => user.email),
            };
        }, { message: 'the prepared draft is loaded' })
        .toEqual({
            loading: false,
            title: MEETING_TITLE,
            host: MEETING_USER.email,
            creator: MEETING_USER.email,
            resources: [MEETING_ROOMS[0].id],
            attendees: [MEETING_GUEST.email],
        });
    await expect
        .poll(async () => (await snapshot()).rooms.sort(), {
            message: 'the synthetic room list is loaded',
        })
        .toEqual(MEETING_ROOMS.map((room) => room.id).sort());
    await expect
        .poll(() => audit.fixtures['/api/engine/v2/users/current'] ?? 0)
        .toBeGreaterThan(0);
    const confirm = page.locator('meeting-flow-options button[btn]').filter({
        has: page.locator('icon', { hasText: /^\s*task_alt\s*$/ }),
    });
    await expect(confirm).toHaveCount(1);
    await expect(confirm).toBeEnabled();
    await expect(page.locator('mat-dialog-container')).toHaveCount(0);
    return confirm;
}

/**
 * Arm exactly one POST, press Confirm and return the sent body. By default the
 * POST is POST /api/staff/v1/events (no query) carrying this draft's title, the
 * selected room and the guest. With `native: true` (events.use_bookings true)
 * it is POST /api/staff/v1/bookings with only the app's utm_source query, and a
 * room booking body with this draft's title for the selected room. What a
 * setting governs is asserted by the spec.
 */
export async function submitMeeting(
    page: Page,
    audit: MeetingAudit,
    confirm: Locator,
    options: { native?: boolean } = {},
) {
    const event_accepts = (body: Record<string, unknown>) =>
        body.title === MEETING_TITLE &&
        Array.isArray(body.resources) &&
        (body.resources as { id?: string }[]).map((r) => r.id).join() ===
            MEETING_ROOMS[0].id &&
        Array.isArray(body.attendees) &&
        (body.attendees as { email?: string }[]).some(
            (a) => a.email === MEETING_GUEST.email,
        );
    const booking_accepts = (body: Record<string, unknown>) =>
        body.title === MEETING_TITLE &&
        body.booking_type === 'room' &&
        body.asset_id === MEETING_ROOMS[0].id;
    // createBooking adds utm_source = <app name>_<build hash>_<user email>.
    const booking_query = (url: URL) =>
        [...url.searchParams.keys()].join() === 'utm_source' &&
        (url.searchParams.get('utm_source') ?? '').endsWith(
            '_' + MEETING_USER.email,
        );
    audit.submission = options.native
        ? {
              path: MEETING_BOOKINGS_PATH,
              query: booking_query,
              accepts: booking_accepts,
              armed: true,
              bodies: [],
              completed: false,
          }
        : {
              path: MEETING_POST_PATH,
              accepts: event_accepts,
              armed: true,
              bodies: [],
              completed: false,
          };
    await confirm.click();
    await expect
        .poll(() => audit.submission?.completed, {
            message: 'the one armed POST was answered',
        })
        .toBe(true);
    await expect(page).toHaveURL(/#\/book\/meeting\/success$/);
    await expect(
        page.locator('meeting-flow-success [name="meeting-created-continue"]'),
    ).toBeVisible();
    expect(audit.refused, 'no extra mutation or socket attempt').toEqual([]);
    expect(audit.submission?.bodies).toHaveLength(1);
    return audit.submission!.bodies[0];
}

// ---------------------------------------------------------------------------
// Fully synthetic Explore zone sensors (AreaManagement binding)
// ---------------------------------------------------------------------------
//
// For settings that change how Explore shows live zone readings: the
// browser-only Explore map (syntheticExplore) with ROOM on the level. The
// control socket accepts exact AreaManagement/Bookings bind/unbind tuples and
// replies with synthetic values. The room's area reports 23 degrees and 45%
// humidity; the control area (not a room) is drawn as a polygon once the
// readings arrive.

const ZS = syntheticExplore('e2e-zone-sensor-shared-');
const ZS_BEARER = 'browser-only-zone-sensor-not-a-valid-credential';

/** The room's map shape and area id; the sensor feature is `sensors:<this>`. */
export const ZONE_SENSOR_TARGET = ZS.TARGET;
/** The synthetic readings of the room's area. */
export const ZONE_SENSOR_READING = { temperature: 23, humidity: 45 };
// Payloads are the values passed to StatusVariable callbacks, not GeoJSON.
const ZS_LIVE: Record<string, unknown> = {
    [ZS.LEVEL + ':areas']: {
        value: [
            { area_id: ZS.ROOM.id, map_id: ZS.TARGET, ...ZONE_SENSOR_READING },
            { area_id: ZS.CONTROL, map_id: ZS.CONTROL, count: 1 },
        ],
    },
    [ZS.LEVEL]: { value: [] },
    [ZS.LEVEL + ':desk_bookings']: {},
    // LandingStateService.init binds AreaManagement overview (level occupancy).
    overview: {},
};
/** Settings shared by the zone-sensor specs; each spec overrides its own keys. */
export const ZONE_SENSOR_BASE: Settings = {
    ...ZS.BASE,
    'app.events.has_assets': false,
    'app.events.can_book_for_others': false,
    'app.events.bookable_hours': null,
    'app.events.booking_unavailable': false,
    'app.explore.hide_sensors': false,
    'app.use_imperial_units': false,
    'app.explore.show_zone_sensor_info': true,
    'app.explore.colors': {
        'zone-free': ZS.COLOUR,
        'space-free': ZS.ROOM_FILL,
        'space-busy': ZS.ROOM_FILL,
    },
};

export type ZoneSensorAudit = ControlAudit & {
    room_values: Record<string, unknown>;
    areas_released: boolean;
    /** Sends the held area readings; set once the areas variable is bound. */
    publish_areas?: () => void;
};

export const zoneSensorTest = browserOnlyTest<ZoneSensorAudit>({
    audit: () => ({
        ...controlAudit(),
        room_values: exploreRoomValues(),
        areas_released: false,
    }),
    socket: controlSocket<ZoneSensorAudit>({
        bearer: ZS_BEARER,
        values: exploreValues(ZS, ZS_LIVE),
        deliver: (r, value, notify, audit) => {
            if (r.sys !== ZS.SYSTEM || r.name !== ZS.LEVEL + ':areas') {
                notify(value);
                return;
            }
            // Hold the readings until the room list and Bookings feature are
            // ready; the later control polygon proves this frame was parsed.
            audit.publish_areas = () => {
                try {
                    audit.areas_released = true;
                    notify(value);
                } catch {
                    audit.monitoring.push('synthetic area delivery failed');
                    throw new Error('Synthetic area delivery failed');
                }
            };
            notify(audit.areas_released ? value : { value: [] });
        },
    }),
}).extend<{ zones: { page: Page; audit: ZoneSensorAudit } }>({
    zones: async ({ isolated }, use) => use(isolated),
});

/**
 * Open Explore on the synthetic level, turn on the Areas overlay, wait for the
 * room, then release the synthetic readings and wait until the control
 * polygon proves they were parsed. Then turn on the Sensors overlay.
 */
export async function openZoneSensorExplore(
    page: Page,
    audit: ZoneSensorAudit,
    overrides: Settings,
) {
    await openSyntheticExplore(page, audit, ZS, {
        settings: { ...ZONE_SENSOR_BASE, ...overrides },
        bearer: ZS_BEARER,
        rooms: [ZS.ROOM],
        delivered: exploreBindings(ZS, ZS_LIVE, audit.room_values),
        controls: true,
        ready: async () => {
            // Release live readings only after the matching room has been loaded.
            await exploreRoomReady(page, audit.room_values, ZS);
            if (!audit.publish_areas) throw new Error('Synthetic area binding unavailable');
            audit.publish_areas();
        },
    });
    await exploreRoomReady(page, audit.room_values, ZS);
    const sensors = page.locator('explore-map-view settings-toggle').filter({
        hasText: 'Show Sensors',
    });
    await expect(sensors).toHaveCount(1);
    await expect(sensors.locator('input[type="checkbox"]')).not.toBeChecked();
    await sensors.locator('button').click();
    await expect(sensors.locator('input[type="checkbox"]')).toBeChecked();
}
