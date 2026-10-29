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
import { test as playwrightTest } from '@playwright/test';
import { createHash } from 'node:crypto';
import * as fs from 'fs';
import { join } from 'node:path';
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
// Fully synthetic meeting submission (new meeting form, events backend)
// ---------------------------------------------------------------------------
//
// For settings whose only effect is the meeting the app sends. One context
// route is installed before navigation: origin/redirect checks first, exact
// local GET fixtures for a synthetic organisation, user, rooms and sign-in;
// every WebSocket and every mutation is refused except ONE armed
// POST /api/staff/v1/events (no query, JSON) that a test arms, which gets a
// local 201. Nothing reaches a backend. Fresh storage, blocked service workers
// and a strict teardown audit (refused requests, page/console errors, failed
// requests and responses >= 300 all fail the test). Same policy as the
// room-booking strict meeting specs; run with --project=local --no-deps.

/**
 * One armed POST to `path` is accepted only when `query` holds for its URL
 * (no query at all when `query` is absent) and `accepts` holds for its body.
 */
export type MeetingSubmission = {
    path: string;
    query?: (url: URL) => boolean;
    accepts: (body: Record<string, unknown>) => boolean;
    armed: boolean;
    bodies: Record<string, unknown>[];
    completed: boolean;
};

export type MeetingAudit = {
    refused: string[];
    errors: string[];
    monitoring: string[];
    fixtures: Record<string, number>;
    submission?: MeetingSubmission;
};

const MEETING_APP = new URL(process.env.E2E_APP_URL ?? 'http://localhost:4214');
const MEETING_PREFIX = 'e2e-meeting-submission-';
const MEETING_ORGANISATION = MEETING_PREFIX + 'org';
const MEETING_REGION = MEETING_PREFIX + 'region';
const MEETING_BUILDING = MEETING_PREFIX + 'building';
const MEETING_LEVEL = MEETING_PREFIX + 'level';
const MEETING_ZONES = [
    MEETING_ORGANISATION,
    MEETING_REGION,
    MEETING_BUILDING,
    MEETING_LEVEL,
];
const MEETING_MAP_PATH = '/' + MEETING_PREFIX + 'map.svg';
const MEETING_POST_PATH = '/api/staff/v1/events';
/** Native room bookings (events.use_bookings true) are created here. */
export const MEETING_BOOKINGS_PATH = '/api/staff/v1/bookings';
const MEETING_BEARER = 'browser-only-meeting-submission-not-a-valid-credential';
const MEETING_FIXTURES = new WeakMap<Page, GetFixture[]>();

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
/** Internal-domain attendee (app.internal_user_domain), so no externals rule applies. */
export const MEETING_GUEST = {
    id: MEETING_PREFIX + 'guest',
    name: 'Synthetic Guest',
    email: 'guest@dev.place.tech',
    groups: [] as string[],
    department: '',
    is_external: false,
};
export const MEETING_TITLE = 'Browser-only meeting simulation';
export const MEETING_ROOMS = ['a', 'b'].map((suffix) => ({
    id: MEETING_PREFIX + 'room-' + suffix,
    name: 'Synthetic Room ' + suffix.toUpperCase(),
    display_name: 'Synthetic Room ' + suffix.toUpperCase(),
    email: 'room-' + suffix + '@dev.place.tech',
    capacity: 4,
    bookable: true,
    zones: MEETING_ZONES,
    features: [],
    images: [],
    map_id: '',
    level: {
        id: MEETING_LEVEL,
        parent_id: MEETING_BUILDING,
        name: 'Synthetic Level',
    },
    response_status: 'accepted',
    created_at: 1,
}));
const MEETING_HIDDEN_CATEGORIES = [
    { id: MEETING_PREFIX + 'catering', name: '_CATERING_', hidden: true },
    { id: MEETING_PREFIX + 'desks', name: '_DESKS_', hidden: true },
    { id: MEETING_PREFIX + 'parking', name: '_PARKING_', hidden: true },
    { id: MEETING_PREFIX + 'lockers', name: '_LOCKERS_', hidden: true },
];
const MEETING_HIDDEN_TYPES: Record<string, string[]> = {
    [MEETING_PREFIX + 'catering']: [],
    [MEETING_PREFIX + 'desks']: ['_DESKS_'],
    [MEETING_PREFIX + 'parking']: [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    [MEETING_PREFIX + 'lockers']: ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const MEETING_HIDDEN_TYPE_IDS = Object.values(MEETING_HIDDEN_TYPES)
    .flat()
    .map((name) => MEETING_PREFIX + 'type-' + name);
const MEETING_ZONE_METADATA: Record<string, string[]> = {
    [MEETING_BUILDING]: [
        'parking_booking_rules',
        'desk_booking_rules',
        'room_booking_rules',
        // CateringStateService._loadSettings reads the building's catering settings.
        'catering-settings',
    ],
    [MEETING_LEVEL]: ['desks', 'map_regions'],
    [MEETING_ORGANISATION]: [
        'locale_en-AU',
        'locale_en-US',
        'room_alerts',
        'points-of-interest',
    ],
};

/** Settings shared by the meeting-submission specs; each spec overrides its own key. */
export const MEETING_BASE: Settings = {
    'app.name': 'Browser Meeting Simulation',
    'app.features': ['spaces'],
    'app.feature_groups': {},
    'app.default_building': MEETING_BUILDING,
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
    'app.events.can_book_for_others': false,
    'app.events.force_current_user_for_booking_rules': false,
    'app.events.use_building_timezone': false,
    'app.events.room_as_host': false,
    'app.events.force_host': '',
    'app.events.no_standalone': false,
    'app.events.booking_unavailable': false,
    'app.events.strict_capacity_check': false,
    'app.events.multiple_spaces': false,
    'app.events.hide_attendees': false,
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
    'app.events.allow_international': false,
    'app.events.allow_attendee_internal_or_external': false,
};

/** Exact query multiset: duplicates, unknown keys and foreign authority fail. */
function meetingParams(url: URL, expected: Record<string, string>) {
    const entries = [...url.searchParams.entries()];
    if (
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.has('authority_id')
    ) {
        if (
            url.searchParams.getAll('authority_id').length !== 1 ||
            url.searchParams.get('authority_id') !==
                MEETING_PREFIX + 'authority'
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
}

/** Register one exact synthetic GET fixture for a meeting-submission page. */
export function meetingGet(
    page: Page,
    match: GetFixture['match'],
    body: GetFixture['body'],
) {
    const list = MEETING_FIXTURES.get(page);
    if (!list) throw new Error('Fixture registry is unavailable.');
    list.push({ match, body });
}

/** The path the app uses to look up one person (UserPipe). */
export function meetingPersonPath(email: string) {
    return '/api/staff/v1/people/' + encodeURIComponent(email);
}

function meetingSocket(
    socket: WebSocketRoute,
    audit: MeetingAudit,
    pending: Set<Promise<void>>,
) {
    const url = new URL(socket.url());
    const local =
        url.host === MEETING_APP.host &&
        url.protocol === (MEETING_APP.protocol === 'https:' ? 'wss:' : 'ws:') &&
        !url.username &&
        !url.password &&
        !url.hash;
    // No driver bindings exist in this fixture. Only Vite is held locally.
    if (
        local &&
        url.pathname === '/' &&
        url.searchParams.getAll('token').length === 1 &&
        [...url.searchParams.keys()].length === 1
    ) {
        socket.onMessage(() =>
            audit.refused.push('unexpected tooling socket frame'),
        );
        return;
    }
    audit.refused.push('unexpected WebSocket/control attempt');
    const task = socket.close().catch(() => {
        audit.monitoring.push('socket close failed');
    });
    pending.add(task);
    void task.finally(() => pending.delete(task));
}

export const meetingTest = playwrightTest.extend<{
    meeting: { page: Page; audit: MeetingAudit };
}>({
    meeting: async ({ browser }, use, info) => {
        if (
            !['localhost', '127.0.0.1', '[::1]'].includes(MEETING_APP.hostname) ||
            !['http:', 'https:'].includes(MEETING_APP.protocol) ||
            MEETING_APP.username ||
            MEETING_APP.password ||
            MEETING_APP.pathname !== '/' ||
            MEETING_APP.search ||
            MEETING_APP.hash
        ) {
            throw new Error('Meeting submission specs require a root-path loopback frontend.');
        }
        const audit: MeetingAudit = {
            refused: [],
            errors: [],
            monitoring: [],
            fixtures: {},
        };
        // Explicitly fresh: no configured storageState, cookies or disk auth.
        const context = await browser.newContext({
            baseURL: MEETING_APP.origin,
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
                    if (
                        req.redirectedFrom() ||
                        url.username ||
                        url.password ||
                        url.hash
                    ) {
                        await refuse('redirect/credential-bearing request');
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
                    if (url.origin !== MEETING_APP.origin)
                        return refuse('external HTTP request');
                    if (req.method() !== 'GET') {
                        // Every mutation terminates in fulfill/abort. Only the one
                        // armed POST is answered, with the checked body and an id.
                        const capture = audit.submission;
                        if (
                            req.method() !== 'POST' ||
                            !capture ||
                            url.pathname !== capture.path ||
                            (capture.query ? !capture.query(url) : !!url.search) ||
                            !capture.armed ||
                            capture.bodies.length !== 0 ||
                            !/^application\/json(?:;|$)/i.test(
                                req.headers()['content-type'] ?? '',
                            )
                        ) {
                            await refuse('unexpected or unarmed mutation');
                            return;
                        }
                        capture.armed = false;
                        const body = req.postDataJSON() as Record<string, unknown>;
                        // Recorded first so a mismatch reaches the test as a diff.
                        capture.bodies.push(body);
                        if (!capture.accepts(body)) {
                            await refuse('outgoing event JSON mismatch');
                            return;
                        }
                        await route.fulfill({
                            status: 201,
                            json: {
                                ...body,
                                id: MEETING_PREFIX + 'synthetic-created-event',
                            },
                        });
                        capture.completed = true;
                        return;
                    }
                    const fixtures = page ? (MEETING_FIXTURES.get(page) ?? []) : [];
                    const fixture = fixtures.find((f) => f.match(url));
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
                    // API, auth and control requests never reach the dev proxy.
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
                    if (document || asset || vite || fetched) {
                        // GET frontend assets only; do not follow redirects.
                        const response = await route.fetch({ maxRedirects: 0 });
                        if (response.status() >= 300 && response.status() < 400) {
                            await refuse('frontend redirect');
                            return;
                        }
                        await route.fulfill({ response });
                        return;
                    }
                    return refuse('unmatched frontend GET');
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
                    meetingSocket(socket, audit, pending);
                } catch {
                    audit.monitoring.push('WebSocket handler failed');
                }
            });
            context.on('page', (opened) => {
                opened.on('pageerror', () =>
                    audit.errors.push('uncaught page error'),
                );
                opened.on('console', (message) => {
                    if (message.type() === 'error')
                        audit.errors.push('console error');
                });
                opened.on('requestfailed', () => {
                    if (!stopping) audit.errors.push('request failed');
                });
                opened.on('response', (response) => {
                    if (response.status() >= 300)
                        audit.errors.push('HTTP failure or redirect');
                });
                opened.on('crash', () => audit.errors.push('page crash'));
                if (page && opened !== page)
                    audit.refused.push('unexpected extra page');
            });
            page = await context.newPage();
            MEETING_FIXTURES.set(page, []);
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
                if (audit.submission) {
                    expect(audit.submission.armed).toBe(false);
                    expect(audit.submission.completed).toBe(true);
                    expect(audit.submission.bodies).toHaveLength(1);
                }
            }
        }
    },
});

/** Exact synthetic GETs for the organisation, rooms and app bootstrap. */
function meetingGets(page: Page) {
    meetingGet(
        page,
        (url) =>
            MEETING_ROOMS.some(
                (room) => url.pathname === '/api/engine/v2/systems/' + room.id,
            ) && meetingParams(url, {}),
        (url) => MEETING_ROOMS.find((room) => url.pathname.endsWith('/' + room.id))!,
    );
    meetingGet(
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
                ids.every((id) => MEETING_ROOMS.some((room) => room.id === id)) &&
                meetingParams(url, { system_ids, period_start, period_end })
            );
        },
        (url) =>
            url.searchParams
                .get('system_ids')!
                .split(',')
                .map((id) => {
                    const room = MEETING_ROOMS.find((room) => room.id === id)!;
                    return {
                        id,
                        name: room.name,
                        email: room.email,
                        resource: room,
                        availability: [],
                    };
                }),
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            meetingParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: MEETING_ORGANISATION,
                name: 'Synthetic Zone Organisation',
                display_name: 'Synthetic Zone Organisation',
                tags: ['org'],
            },
        ],
    );
    // Bulk metadata is local and contains no live driver binding.
    meetingGet(
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
                meetingParams(url, {
                    parent_ids: url.searchParams.get('parent_ids')!,
                }) &&
                ids.every((id) => MEETING_ZONES.includes(id))
            );
        },
        (url) =>
            Object.fromEntries(
                url.searchParams
                    .get('parent_ids')!
                    .split(',')
                    .map((id) => [id, { details: {} }]),
            ),
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            meetingParams(url, {
                tags: 'region',
                parent_id: MEETING_ORGANISATION,
                limit: '200',
            }),
        () => [
            {
                id: MEETING_REGION,
                name: 'Synthetic Zone Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            meetingParams(url, {
                tags: 'building',
                parent_id: MEETING_REGION,
                limit: '500',
            }),
        () => [
            {
                id: MEETING_BUILDING,
                parent_id: MEETING_REGION,
                name: 'Synthetic Zone Building',
                display_name: 'Synthetic Zone Building',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
        ],
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            meetingParams(url, { tags: 'level', limit: '2500' }),
        () => [
            {
                id: MEETING_LEVEL,
                parent_id: MEETING_BUILDING,
                name: 'Synthetic Zone Level',
                display_name: 'Synthetic Zone Level',
                tags: ['level'],
                map_id: new URL(MEETING_MAP_PATH, MEETING_APP.origin).href,
            },
        ],
    );
    // Room booking rules are empty, so every room is bookable for every host.
    meetingGet(
        page,
        (url) => {
            const id = url.pathname.split('/')[5] ?? '';
            const name = url.searchParams.get('name') ?? '';
            return (
                url.pathname === '/api/engine/v2/metadata/' + id &&
                Object.hasOwn(MEETING_ZONE_METADATA, id) &&
                MEETING_ZONE_METADATA[id].includes(name) &&
                meetingParams(url, { name })
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
                        name === 'map_regions'
                            ? { areas: [] }
                            : LIST_METADATA.includes(name)
                              ? []
                              : {},
                },
            };
        },
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/metadata/' + MEETING_USER.id &&
            ['settings', 'contacts'].some((name) => meetingParams(url, { name })),
        (url) => {
            const name = url.searchParams.get('name')!;
            return { [name]: { name, details: name === 'contacts' ? [] : {} } };
        },
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/groups/current' &&
            meetingParams(url, {}),
        () => [],
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            meetingParams(url, { zone_id: MEETING_ORGANISATION, limit: '5000' }),
        () => MEETING_ROOMS,
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            meetingParams(url, { zone_id: MEETING_LEVEL, limit: '50' }),
        () => MEETING_ROOMS,
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            meetingParams(url, { zone_id: MEETING_ORGANISATION, limit: '50' }),
        () => [],
    );
    // LandingStateService loads the active building's rooms.
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            meetingParams(url, {
                zone_id: MEETING_BUILDING,
                limit: '500',
                signage: 'false',
            }),
        () => MEETING_ROOMS,
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            meetingParams(url, { hidden: 'true', limit: '500' }),
        () => MEETING_HIDDEN_CATEGORIES,
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            Object.hasOwn(
                MEETING_HIDDEN_TYPES,
                url.searchParams.get('category_id') ?? '',
            ) &&
            meetingParams(url, {
                category_id: url.searchParams.get('category_id')!,
                limit: '500',
            }),
        (url) =>
            MEETING_HIDDEN_TYPES[url.searchParams.get('category_id')!].map(
                (name) => ({
                    id: MEETING_PREFIX + 'type-' + name,
                    name,
                    category_id: url.searchParams.get('category_id'),
                    brand: 'PlaceOS',
                }),
            ),
    );
    meetingGet(
        page,
        (url) => {
            const type_id = url.searchParams.get('type_id') ?? '';
            const zone_id = url.searchParams.get('zone_id') ?? '';
            return (
                url.pathname === '/api/engine/v2/assets' &&
                MEETING_HIDDEN_TYPE_IDS.includes(type_id) &&
                MEETING_ZONES.includes(zone_id) &&
                meetingParams(url, { type_id, zone_id, limit: '500' })
            );
        },
        () => [],
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/staff/v1/calendars' && meetingParams(url, {}),
        () => [],
    );
    meetingGet(
        page,
        (url) => {
            const period_start = url.searchParams.get('period_start') ?? '';
            const period_end = url.searchParams.get('period_end') ?? '';
            const base = { type: 'parking', period_start, period_end };
            return (
                url.pathname === MEETING_BOOKINGS_PATH &&
                validPeriod(url) &&
                (meetingParams(url, base) ||
                    meetingParams(url, {
                        ...base,
                        zones: MEETING_LEVEL,
                        rejected: 'false',
                    }) ||
                    meetingParams(url, { ...base, email: MEETING_USER.email }))
            );
        },
        () => [],
    );
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
    const cid = createHash('md5')
        .update(MEETING_APP.origin + '/oauth-resp.html')
        .digest('hex');
    await page.addInitScript(
        ({ origin, cid, bearer, settings, draft }) => {
            if (location.origin !== origin) return;
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem(cid + '_access_token', bearer);
            localStorage.setItem(
                cid + '_expires_at',
                String(Date.now() + 60 * 60_000),
            );
            localStorage.setItem(
                'PLACEOS.setting_overrides',
                JSON.stringify(settings),
            );
            localStorage.setItem('APP.locale', 'en-US');
            localStorage.setItem('PLACEOS.locale', 'en-US');
            localStorage.setItem('mock', 'false');
            sessionStorage.setItem('PLACEOS.event_form', JSON.stringify(draft));
        },
        { origin: MEETING_APP.origin, cid, bearer: MEETING_BEARER, settings, draft },
    );
    meetingGet(
        page,
        (url) => url.pathname === '/auth/authority' && meetingParams(url, {}),
        () => ({
            id: MEETING_PREFIX + 'authority',
            name: 'Browser-only authority',
            domain: MEETING_APP.host,
            version: '3.0.0',
            session: false,
            production: false,
            config: { org_zone: MEETING_ORGANISATION },
        }),
    );
    meetingGet(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/users/current' &&
            meetingParams(url, {}),
        () => ({ ...MEETING_USER, groups: [...(options.groups ?? [])] }),
    );
    meetingGets(page);
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
// For settings that change how Explore shows live zone readings. Same policy
// as explore.show-zone-sensor-info.spec.ts (which keeps its own copy): one
// context route installed before navigation, exact local GET fixtures for a
// synthetic organisation, user, room, map and sign-in; no write is allowed;
// the only WebSocket is a browser-local control socket that accepts exact
// AreaManagement/Bookings bind/unbind tuples and replies with synthetic
// values. The room's area reports 23 degrees and 45% humidity; a separate
// control area (not a room) is drawn as a polygon once the readings arrive.
// Strict teardown: refused requests, page/console errors, failed requests and
// responses >= 300 all fail the test. Run with --project=local --no-deps.

type ZoneSensorConnection = { binds: string[]; delivered: string[]; unbinds: string[] };

export type ZoneSensorAudit = {
    refused: string[];
    errors: string[];
    monitoring: string[];
    fixtures: Record<string, number>;
    connections: ZoneSensorConnection[];
    room_values: Record<string, unknown>;
    areas_released: boolean;
    publish_areas?: () => void;
};

const ZS_APP = new URL(process.env.E2E_APP_URL ?? 'http://localhost:4214');
const ZS_BEARER = 'browser-only-zone-sensor-not-a-valid-credential';
const ZS_CONTROL_PATH = '/api/engine/v2/systems/control';
const ZS_FIXTURES = new WeakMap<Page, GetFixture[]>();
const ZS_PREFIX = 'e2e-zone-sensor-shared-';
const ZS_ORGANISATION = ZS_PREFIX + 'org';
const ZS_REGION = ZS_PREFIX + 'region';
const ZS_BUILDING = ZS_PREFIX + 'building';
const ZS_LEVEL = ZS_PREFIX + 'level';
const ZS_ZONES = [ZS_ORGANISATION, ZS_REGION, ZS_BUILDING, ZS_LEVEL];
const ZS_MAP_PATH = '/' + ZS_PREFIX + 'map.svg';
const ZS_HIDDEN_TYPES: Record<string, string[]> = {
    [ZS_PREFIX + 'catering']: [],
    [ZS_PREFIX + 'desks']: ['_DESKS_'],
    [ZS_PREFIX + 'parking']: [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    [ZS_PREFIX + 'lockers']: ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const ZS_HIDDEN_CATEGORIES = Object.keys(ZS_HIDDEN_TYPES).map((id) => ({
    id,
    name: '_' + id.slice(ZS_PREFIX.length).toUpperCase() + '_',
    hidden: true,
}));
const ZS_HIDDEN_TYPE_IDS = Object.values(ZS_HIDDEN_TYPES)
    .flat()
    .map((name) => ZS_PREFIX + 'type-' + name);
const ZS_ZONE_METADATA: Record<string, string[]> = {
    [ZS_BUILDING]: [
        'parking_booking_rules',
        'desk_booking_rules',
        'room_booking_rules',
    ],
    [ZS_LEVEL]: ['desks', 'map_regions'],
    [ZS_ORGANISATION]: [
        'locale_en-AU',
        'locale_en-US',
        'room_alerts',
        'points-of-interest',
    ],
};
const ZS_SYSTEM = ZS_PREFIX + 'area-system';
/** The room's map shape and area id; the sensor feature is `sensors:<this>`. */
export const ZONE_SENSOR_TARGET = ZS_PREFIX + 'target';
const ZS_CONTROL = ZS_PREFIX + 'control';
const ZS_ROOM = {
    id: ZS_PREFIX + 'room',
    name: 'Synthetic Settings Room',
    display_name: 'Synthetic Settings Room',
    email: 'settings-room@example.invalid',
    map_id: ZONE_SENSOR_TARGET,
    bookable: true,
    capacity: 4,
    features: [],
    images: [],
    zones: ZS_ZONES,
};
const ZS_ROOM_FILL = '#2468ac';
const ZS_COLOUR = '#123456';
/** The synthetic readings of the room's area. */
export const ZONE_SENSOR_READING = { temperature: 23, humidity: 45 };
const ZS_MAP_REGIONS = {
    areas: [
        {
            id: ZONE_SENSOR_TARGET,
            map_id: ZONE_SENSOR_TARGET,
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
            id: ZS_CONTROL,
            map_id: ZS_CONTROL,
            properties: { capacity: 10, hide_label: true, draw_polygon: true },
            geometry: {
                coordinates: [[0.6, 0.6], [0.9, 0.6], [0.9, 0.9], [0.6, 0.9]],
            },
        },
    ],
};
// Payloads are the values passed to StatusVariable callbacks, not GeoJSON.
const ZS_LIVE: Record<string, unknown> = {
    [ZS_LEVEL + ':areas']: {
        value: [
            { area_id: ZS_ROOM.id, map_id: ZONE_SENSOR_TARGET, ...ZONE_SENSOR_READING },
            { area_id: ZS_CONTROL, map_id: ZS_CONTROL, count: 1 },
        ],
    },
    [ZS_LEVEL]: { value: [] },
    [ZS_LEVEL + ':desk_bookings']: {},
    // LandingStateService.init binds AreaManagement overview (level occupancy).
    overview: {},
};
/** Settings shared by the zone-sensor specs; each spec overrides its own keys. */
export const ZONE_SENSOR_BASE: Settings = {
    'app.features': ['explore'],
    'app.default_building': ZS_BUILDING,
    'app.default_route': '/explore',
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.global_search': false,
    'app.chat.enabled': false,
    'app.events.has_assets': false,
    'app.events.can_book_for_others': false,
    'app.events.bookable_hours': null,
    'app.events.booking_unavailable': false,
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
    'app.explore.hide_sensors': false,
    'app.explore.show_legend': false,
    'app.use_imperial_units': false,
    'app.explore.show_zone_sensor_info': true,
    'app.explore.disable': [],
    'app.explore.disable_features': [],
    'app.explore.disable_styles': [],
    'app.explore.disable_actions': [],
    'app.explore.disable_labels': [],
    'app.explore.use_zone_polygons': true,
    'app.explore.show_zone_labels': true,
    'app.explore.colors': {
        'zone-free': ZS_COLOUR,
        'space-free': ZS_ROOM_FILL,
        'space-busy': ZS_ROOM_FILL,
    },
    'app.explore.cisco_maps.enabled': false,
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
};

function zsRoomValues(): Record<string, unknown> {
    return {
        bookings: [],
        status: 'free',
        presence: false,
        hide_meeting_details: true,
        hide_meeting_title: true,
    };
}

/** Exact query multiset: duplicates, unknown keys and foreign authority fail. */
function zsParams(url: URL, expected: Record<string, string>) {
    const entries = [...url.searchParams.entries()];
    if (
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.has('authority_id')
    ) {
        if (
            url.searchParams.getAll('authority_id').length !== 1 ||
            url.searchParams.get('authority_id') !== ZS_PREFIX + 'authority'
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
}

function zsGet(page: Page, fixture: GetFixture) {
    const list = ZS_FIXTURES.get(page);
    if (!list) throw new Error('Fixture registry is unavailable.');
    list.push(fixture);
}

function zsSocket(
    socket: WebSocketRoute,
    audit: ZoneSensorAudit,
    pending: Set<Promise<void>>,
) {
    const url = new URL(socket.url());
    const local =
        url.host === ZS_APP.host &&
        url.protocol === (ZS_APP.protocol === 'https:' ? 'wss:' : 'ws:') &&
        !url.username &&
        !url.password &&
        !url.hash;
    const close = () => {
        const task = socket.close().catch(() => {
            audit.monitoring.push('socket close failed');
        });
        pending.add(task);
        void task.finally(() => pending.delete(task));
        return task;
    };
    // Vite socket stays browser-local too. Never record its token/query.
    if (
        local &&
        url.pathname === '/' &&
        url.searchParams.getAll('token').length === 1 &&
        [...url.searchParams.keys()].length === 1
    ) {
        socket.onMessage(() => {
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
            url.searchParams.get('bearer_token') === ZS_BEARER);
    if (!local || url.pathname !== ZS_CONTROL_PATH || !valid_query) {
        audit.refused.push('unexpected WebSocket endpoint');
        void close();
        return;
    }
    // State is connection-local. A reconnect replays each newly bound value.
    const connection: ZoneSensorConnection = {
        binds: [],
        delivered: [],
        unbinds: [],
    };
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
            const values =
                r.sys === ZS_SYSTEM && r.mod === 'AreaManagement' && r.index === 1
                    ? ZS_LIVE
                    : r.sys === ZS_ROOM.id && r.mod === 'Bookings' && r.index === 1
                      ? audit.room_values
                      : undefined;
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
            ids.add(r.id);
            const binding_key = [r.sys, r.mod, r.index, r.name].join(':');
            if (r.cmd === 'unbind') {
                if (!bound.delete(binding_key)) throw new Error();
                connection.unbinds.push(binding_key);
                socket.send(JSON.stringify({ id: r.id, type: 'success', value: null }));
                return;
            }
            // Known-tuple rebinds are idempotent; always replay the value.
            bound.add(binding_key);
            connection.binds.push(binding_key);
            socket.send(JSON.stringify({ id: r.id, type: 'success', value: null }));
            const notify = (value: unknown) =>
                socket.send(
                    JSON.stringify({
                        type: 'notify',
                        value,
                        meta: { sys: r.sys, mod: r.mod, index: r.index, name: r.name },
                    }),
                );
            if (r.sys === ZS_SYSTEM && r.name === ZS_LEVEL + ':areas') {
                // Hold the readings until the room list and Bookings feature are
                // ready; the later control polygon proves this frame was parsed.
                const area_value = values[r.name];
                audit.publish_areas = () => {
                    try {
                        audit.areas_released = true;
                        notify(area_value);
                    } catch {
                        audit.monitoring.push('synthetic area delivery failed');
                        throw new Error('Synthetic area delivery failed');
                    }
                };
                notify(audit.areas_released ? area_value : { value: [] });
            } else {
                notify(values[r.name]);
            }
            connection.delivered.push(binding_key);
        } catch {
            // Never retain raw frames, arguments, URLs, cookies or credentials.
            audit.refused.push('unexpected control frame/binding/command');
            void close();
        }
    });
    // The client marks connected only after a first server message.
    socket.send('pong');
}

export const zoneSensorTest = playwrightTest.extend<{
    zones: { page: Page; audit: ZoneSensorAudit };
}>({
    zones: async ({ browser }, use, info) => {
        if (
            !['localhost', '127.0.0.1', '[::1]'].includes(ZS_APP.hostname) ||
            !['http:', 'https:'].includes(ZS_APP.protocol) ||
            ZS_APP.username ||
            ZS_APP.password ||
            ZS_APP.pathname !== '/' ||
            ZS_APP.search ||
            ZS_APP.hash
        ) {
            throw new Error('Zone sensor specs require a root-path loopback frontend.');
        }
        const audit: ZoneSensorAudit = {
            refused: [],
            errors: [],
            monitoring: [],
            fixtures: {},
            connections: [],
            room_values: zsRoomValues(),
            areas_released: false,
        };
        // Explicitly fresh: no configured storageState, cookies or disk auth.
        const context = await browser.newContext({
            baseURL: ZS_APP.origin,
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
                    if (url.origin !== ZS_APP.origin)
                        return refuse('external HTTP request');
                    if (req.method() !== 'GET') return refuse('non-GET HTTP request');
                    const fixtures = page ? (ZS_FIXTURES.get(page) ?? []) : [];
                    const fixture = fixtures.find((f) => f.match(url));
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
                    // API, auth and control GETs never reach the dev proxy.
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
                    const vite =
                        req.resourceType() === 'script' &&
                        ['/@vite/client', '/@angular/build', '/@ng/component'].includes(
                            url.pathname,
                        );
                    const fetched =
                        req.resourceType() === 'fetch' &&
                        /^\/assets\/[\w./-]+\.(?:json|svg)$/.test(url.pathname) &&
                        !url.pathname.includes('..');
                    // The build does not copy this font into /assets (dev server
                    // 404s); serve the package's own file.
                    if (url.pathname === '/assets/material-symbols-rounded.woff2') {
                        await route.fulfill({
                            path: require.resolve(
                                'material-symbols/material-symbols-rounded.woff2',
                            ),
                            contentType: 'font/woff2',
                        });
                        return;
                    }
                    if (document || asset || vite || fetched) return route.continue();
                    return refuse('unmatched frontend GET');
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
                    zsSocket(socket, audit, pending);
                } catch {
                    audit.monitoring.push('WebSocket handler failed');
                }
            });
            context.on('page', (opened) => {
                opened.on('pageerror', () => audit.errors.push('uncaught page error'));
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
            ZS_FIXTURES.set(page, []);
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
            }
        }
    },
});

function zsGets(page: Page) {
    const json = (match: GetFixture['match'], body: GetFixture['body']) =>
        zsGet(page, { match, body });
    json(
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            zsParams(url, { tags: 'org', include_children_count: 'true' }),
        () => [
            {
                id: ZS_ORGANISATION,
                name: 'Synthetic Zone Organisation',
                display_name: 'Synthetic Zone Organisation',
                tags: ['org'],
            },
        ],
    );
    // Bulk bindings identify only the synthetic AreaManagement system.
    json(
        (url) => {
            const match = /^\/api\/engine\/v2\/metadata\/([^/]+)\/bulk$/.exec(
                url.pathname,
            );
            const ids = (url.searchParams.get('parent_ids') ?? '').split(',');
            return (
                !!match &&
                BULK_METADATA.includes(match[1]) &&
                url.searchParams.has('parent_ids') &&
                zsParams(url, { parent_ids: url.searchParams.get('parent_ids')! }) &&
                ids.every((id) => ZS_ZONES.includes(id))
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
                                url.pathname ===
                                    '/api/engine/v2/metadata/bindings/bulk' &&
                                id === ZS_BUILDING
                                    ? {
                                          area_management: {
                                              id: ZS_SYSTEM,
                                              mod: 'AreaManagement',
                                          },
                                      }
                                    : {},
                        },
                    ]),
            ),
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            zsParams(url, { tags: 'region', parent_id: ZS_ORGANISATION, limit: '200' }),
        () => [
            { id: ZS_REGION, name: 'Synthetic Zone Region', tags: ['region'], timezone: 'UTC' },
        ],
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            zsParams(url, { tags: 'building', parent_id: ZS_REGION, limit: '500' }),
        () => [
            {
                id: ZS_BUILDING,
                parent_id: ZS_REGION,
                name: 'Synthetic Zone Building',
                display_name: 'Synthetic Zone Building',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
        ],
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            zsParams(url, { tags: 'level', limit: '2500' }),
        () => [
            {
                id: ZS_LEVEL,
                parent_id: ZS_BUILDING,
                name: 'Synthetic Zone Level',
                display_name: 'Synthetic Zone Level',
                tags: ['level'],
                map_id: new URL(ZS_MAP_PATH, ZS_APP.origin).href,
            },
        ],
    );
    json(
        (url) => {
            const id = url.pathname.split('/')[5] ?? '';
            const name = url.searchParams.get('name') ?? '';
            return (
                url.pathname === '/api/engine/v2/metadata/' + id &&
                Object.hasOwn(ZS_ZONE_METADATA, id) &&
                ZS_ZONE_METADATA[id].includes(name) &&
                zsParams(url, { name })
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
                        name === 'map_regions'
                            ? ZS_MAP_REGIONS
                            : LIST_METADATA.includes(name)
                              ? []
                              : {},
                },
            };
        },
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/metadata/' + USER.id &&
            ['settings', 'contacts'].some((name) => zsParams(url, { name })),
        (url) => {
            const name = url.searchParams.get('name')!;
            return { [name]: { name, details: name === 'contacts' ? [] : {} } };
        },
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/groups/current' && zsParams(url, {}),
        () => [],
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            zsParams(url, { zone_id: ZS_ORGANISATION, limit: '5000' }),
        () => [ZS_ROOM],
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            zsParams(url, { zone_id: ZS_LEVEL, limit: '50' }),
        () => [ZS_ROOM],
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            zsParams(url, { zone_id: ZS_ORGANISATION, limit: '50' }),
        () => [],
    );
    // LandingStateService loads the active building's rooms even on Explore.
    json(
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            zsParams(url, { zone_id: ZS_BUILDING, limit: '500', signage: 'false' }),
        () => [ZS_ROOM],
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            zsParams(url, { hidden: 'true', limit: '500' }),
        () => ZS_HIDDEN_CATEGORIES,
    );
    json(
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            Object.hasOwn(ZS_HIDDEN_TYPES, url.searchParams.get('category_id') ?? '') &&
            zsParams(url, {
                category_id: url.searchParams.get('category_id')!,
                limit: '500',
            }),
        (url) =>
            ZS_HIDDEN_TYPES[url.searchParams.get('category_id')!].map((name) => ({
                id: ZS_PREFIX + 'type-' + name,
                name,
                category_id: url.searchParams.get('category_id'),
                brand: 'PlaceOS',
            })),
    );
    json(
        (url) => {
            const type_id = url.searchParams.get('type_id') ?? '';
            const zone_id = url.searchParams.get('zone_id') ?? '';
            return (
                url.pathname === '/api/engine/v2/assets' &&
                ZS_HIDDEN_TYPE_IDS.includes(type_id) &&
                ZS_ZONES.includes(zone_id) &&
                zsParams(url, { type_id, zone_id, limit: '500' })
            );
        },
        () => [],
    );
    json(
        (url) => url.pathname === '/api/staff/v1/calendars' && zsParams(url, {}),
        () => [],
    );
    json(
        (url) => {
            const period_start = url.searchParams.get('period_start')!;
            const period_end = url.searchParams.get('period_end')!;
            const base = { type: 'parking', period_start, period_end };
            return (
                url.pathname === '/api/staff/v1/bookings' &&
                validPeriod(url) &&
                (zsParams(url, base) ||
                    zsParams(url, { ...base, zones: ZS_LEVEL, rejected: 'false' }) ||
                    zsParams(url, { ...base, email: USER.email }))
            );
        },
        () => [],
    );
    zsGet(page, {
        match: (url) => url.pathname === ZS_MAP_PATH && zsParams(url, {}),
        contentType: 'image/svg+xml',
        body: () =>
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
            '<rect width="400" height="400" fill="#ffffff"/>' +
            '<rect id="' + ZONE_SENSOR_TARGET + '" x="40" y="40" width="120" height="120" fill="#aaaaaa"/>' +
            '<rect id="' + ZS_CONTROL + '" x="240" y="240" width="120" height="120" fill="#aaaaaa"/></svg>',
    });
}

/** The room's Explore feature, once its synthetic Bookings state and fill apply. */
async function zsRoomReady(page: Page, audit: ZoneSensorAudit) {
    const feature = page.locator('explore-map-view explore-space-info [customTooltip]');
    await expect(feature).toHaveCount(1);
    await expect(feature).toBeVisible();
    await expect
        .poll(() => roomState(page))
        .toMatchObject({
            name: ZS_ROOM.name,
            status: audit.room_values.status,
            hide_title: audit.room_values.hide_meeting_title,
            hide_details: audit.room_values.hide_meeting_details,
        });
    await expect
        .poll(() =>
            page.locator('explore-map-view').evaluate((element, shape) => {
                const view = (window as DebugWindow).ng?.getComponent(element) as
                    | { styles(): Record<string, { fill?: string }> }
                    | undefined;
                if (!view) throw new Error('Read-only map component unavailable');
                return view.styles()['#' + shape]?.fill;
            }, ZS_ROOM.map_id),
        )
        .toBe(ZS_ROOM_FILL);
}

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
    const settings = { ...ZONE_SENSOR_BASE, ...overrides };
    const cid = createHash('md5')
        .update(ZS_APP.origin + '/oauth-resp.html')
        .digest('hex');
    await page.addInitScript(
        ({ origin, cid, bearer, settings }) => {
            if (location.origin !== origin) return;
            localStorage.clear();
            sessionStorage.clear();
            localStorage.setItem(cid + '_access_token', bearer);
            localStorage.setItem(cid + '_expires_at', String(Date.now() + 60 * 60_000));
            localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(settings));
            localStorage.setItem('APP.locale', 'en-US');
            localStorage.setItem('PLACEOS.locale', 'en-US');
            localStorage.setItem('mock', 'false');
        },
        { origin: ZS_APP.origin, cid, bearer: ZS_BEARER, settings },
    );
    zsGet(page, {
        match: (url) => url.pathname === '/auth/authority' && zsParams(url, {}),
        body: () => ({
            id: ZS_PREFIX + 'authority',
            name: 'Browser-only authority',
            domain: ZS_APP.host,
            version: '3.0.0',
            session: false,
            production: false,
            config: { org_zone: ZS_ORGANISATION },
        }),
    });
    zsGet(page, {
        match: (url) =>
            url.pathname === '/api/engine/v2/users/current' && zsParams(url, {}),
        body: () => USER,
    });
    zsGets(page);
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
    const expected_bindings = [
        ...Object.keys(ZS_LIVE).map((name) =>
            [ZS_SYSTEM, 'AreaManagement', 1, name].join(':'),
        ),
        ...Object.keys(audit.room_values).map((name) =>
            [ZS_ROOM.id, 'Bookings', 1, name].join(':'),
        ),
    ].sort();
    await expect
        .poll(() => [...new Set(audit.connections.at(-1)?.delivered)].sort())
        .toEqual(expected_bindings);
    // Areas begins disabled in ExploreMapView.ngOnInit; turn it on in the UI.
    await page.locator('explore-map-view button[toggle-controls]').click();
    const areas = page.locator('explore-map-view settings-toggle').filter({ hasText: /Areas/ });
    await expect(areas).toHaveCount(1);
    await expect(areas.locator('input[type="checkbox"]')).not.toBeChecked();
    await areas.locator('button').click();
    await expect(areas.locator('input[type="checkbox"]')).toBeChecked();
    const canvas = page.locator('explore-map-view [map-canvas] canvas');
    await expect(canvas).toHaveCount(1);
    await expect(canvas).toBeVisible();
    await expect(page.locator('explore-map-view dynamic-map mat-spinner')).toHaveCount(0);
    await expect.poll(() => audit.fixtures[ZS_MAP_PATH] ?? 0).toBeGreaterThan(0);
    // Release live readings only after the matching room has been loaded.
    await zsRoomReady(page, audit);
    if (!audit.publish_areas) throw new Error('Synthetic area binding unavailable');
    audit.publish_areas();
    // The control polygon proves the readings frame was processed.
    await expect.poll(() => pixel(page, 0.75, 0.75)).toEqual([18, 52, 86, 128]);
    await zsRoomReady(page, audit);
    const sensors = page.locator('explore-map-view settings-toggle').filter({
        hasText: 'Show Sensors',
    });
    await expect(sensors).toHaveCount(1);
    await expect(sensors.locator('input[type="checkbox"]')).not.toBeChecked();
    await sensors.locator('button').click();
    await expect(sensors.locator('input[type="checkbox"]')).toBeChecked();
}
