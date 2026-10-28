// Setting: desks.auto_checkin (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the audit fixture; the browser clock is frozen
// at the real time (see the test body).
// Desk auto check-in.
//
// Exact setting key(s): app.desks.auto_checkin
//                       (legacy app.desk.auto_checkin is held false as a
//                        control, so only the current key can hide the control)
// Unique settings: 1
// Scenarios: 2
//   1. app.desks.auto_checkin: false — a near-start desk booking still offers
//      the check-in control in the booking details modal.
//   2. app.desks.auto_checkin: true — the same booking offers no check-in
//      control, because a detected person is already treated as checked in.
//
// Omitted scenario (not source-supported by GET fixtures here):
//   The Explore-map half of the setting (an in-use desk painted pending
//   `#ffb300` with the setting off, busy `#e53935` with it on) is NOT covered.
//   `ExploreDesksService` only loads bookings when `options.use_api` is true or
//   the map has a future date; the Workplace Explore page never sets either, so
//   in-use ids arrive solely from the AreaManagement driver binding
//   (`processBindingChange`). A browser-only HTTP fixture cannot populate that
//   binding without a live driver, and the Explore page is not opened here.
//
// Preconditions/fixtures:
//   - Read-only local stack (`readOnlyTest`, GET-only route stubs, no writes).
//   - `/your-bookings?view=list` with one synthetic, owned, approved desk
//     booking starting five minutes from now. `asset_id` uses the desk shape id
//     convention (`codex-auto-checkin-desk-shape`) so the same booking would be
//     the in-use row if the map path were reachable.
//   - `desks.hide_checkin`, `desk.hide_checkin` and `bookings.hide_checkin` are
//     explicitly false so the only thing gating the control is auto_checkin.
//   - Parking bootstrap GETs are answered locally (every booking card injects
//     ParkingService), and no parking assets are listed.
//   - Browser clock is frozen so the booking stays in its "upcoming" window.
//   - Check-in is never clicked; the modal is closed with Escape.
//
// Expected behaviour (source):
//   BookingDetailsModal renders the check-in button only when `auto_checkin()`
//   is false. That computed reads `desks.auto_checkin`, falling back to the
//   legacy `desk.auto_checkin`, and is true when the booking type's key is true.
//
// Source references:
//   libs/bookings/src/lib/booking-details-modal.component.ts:110-160,637-678
//   libs/explore/src/lib/explore-desks.service.ts:124-142,263-266
//   apps/workplace/e2e/settings/desk-booking/desk-booking.hide-checkin.spec.ts
// ---------------------------------------------------------------------------
import type { Page, Route } from '@playwright/test';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
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

type Settings = Record<string, unknown>;
type Identity = { id: string; email: string; name: string };
type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
};
type Audit = {
    fixtures: Record<string, number>;
    unexpected_ws: string[];
    control_ws: string[];
    app_errors: string[];
    external: string[];
};

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

const test = readOnlyTest.extend<{ audit: Audit }>({
    audit: [
        async ({ staffPage }, use) => {
            const audit: Audit = {
                fixtures: {},
                unexpected_ws: [],
                control_ws: [],
                app_errors: [],
                external: [],
            };
            // Non-local traffic never leaves the browser. The app shell's
            // Google Fonts stylesheet is answered locally with empty CSS, so no
            // font file is requested either; any other non-local request is
            // aborted and fails the scenario. Local requests fall through to
            // the read-only /api guard.
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
            // ErrorHandler logs console.error('ERROR', e); Angular runtime
            // errors log NG0xxx. Either fails the scenario.
            staffPage.on('pageerror', (error) =>
                audit.app_errors.push(
                    'APP ' + error.name + ': ' + error.message,
                ),
            );
            staffPage.on('console', (message) => {
                if (
                    message.type() === 'error' &&
                    /^(ERROR\b|NG0\d+)/.test(message.text())
                )
                    audit.app_errors.push(
                        'APP ' + message.text().slice(0, 500),
                    );
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
                    audit.control_ws.push(url.pathname);
                } else {
                    audit.unexpected_ws.push(url.origin + url.pathname);
                }
                closing.push(socket.close().catch(() => undefined));
            });
            await use(audit);
            await Promise.all(closing);
            expect(
                audit.unexpected_ws,
                'no unexpected WebSocket connections',
            ).toEqual([]);
            expect(audit.app_errors, 'no application errors').toEqual([]);
            expect(audit.external, 'no non-local network traffic').toEqual([]);
        },
        { auto: true, timeout: 15_000 },
    ],
});

test.use({ readOnlyTimezone: 'Etc/UTC' });
test.describe.configure({ retries: 0, timeout: 120_000 });

async function getOnly(
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
            audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
            await route.fulfill({
                json: await body(new URL(route.request().url())),
            });
        },
    );
}

const PARKING_CATEGORY = 'codex-auto-checkin-parking';
const PARKING_TYPES = [
    'codex-auto-checkin-type-_PARKING_SPACES_',
    'codex-auto-checkin-type-_PARKING_USERS_',
    'codex-auto-checkin-type-_PARKING_FLEET_VEHICLES_',
];
const BOOKING_ID = 9400101;
const DESK_ASSET = 'codex-auto-checkin-desk-shape';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.basic_user_search': true,
    'app.desks.auto_allocation': false,
    'app.desks.can_book_for_others': false,
    'app.bookings.can_book_for_others': false,
    'app.desks.allow_groups': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
    'app.desk.auto_checkin': false,
    'app.desks.hide_checkin': false,
    'app.desk.hide_checkin': false,
    'app.bookings.hide_checkin': false,
};

async function preparePage(
    page: Page,
    audit: Audit,
    overrides: Settings,
): Promise<{ user: () => Promise<Identity>; ready: () => Promise<void> }> {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });

    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        if (
            response.request().method() === 'GET' &&
            new URL(response.url()).pathname === '/api/engine/v2/users/current'
        ) {
            identity = response.json();
        }
    });

    // Every booking card injects ParkingService, whose constructor resolves the
    // hidden _PARKING_ category and the _PARKING_* types. Answering these GETs
    // locally keeps that bootstrap read-only.
    await getOnly(
        page,
        audit,
        'parking hidden categories',
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' &&
            url.searchParams.get('limit') === '500',
        () => [{ id: PARKING_CATEGORY, name: '_PARKING_', hidden: true }],
    );
    await getOnly(
        page,
        audit,
        'parking types',
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('category_id') === PARKING_CATEGORY &&
            url.searchParams.get('limit') === '500',
        () => [
            {
                id: PARKING_TYPES[0],
                name: '_PARKING_SPACES_',
                category_id: PARKING_CATEGORY,
                brand: 'PlaceOS',
            },
            {
                id: PARKING_TYPES[1],
                name: '_PARKING_USERS_',
                category_id: PARKING_CATEGORY,
                brand: 'PlaceOS',
            },
            {
                id: PARKING_TYPES[2],
                name: '_PARKING_FLEET_VEHICLES_',
                category_id: PARKING_CATEGORY,
                brand: 'PlaceOS',
            },
        ],
    );
    await getOnly(
        page,
        audit,
        'parking assets',
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            PARKING_TYPES.includes(url.searchParams.get('type_id') ?? ''),
        () => [],
    );
    await getOnly(
        page,
        audit,
        'calendar provider list',
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );

    const settings = { ...BASE, ...overrides };
    await useSettings(page, { ...CONTROLS, ...settings });
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));

    return {
        user: async () => {
            if (!identity)
                throw new Error(
                    'the app must establish its existing staff identity before loading fixtures',
                );
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading [loader]')).toHaveCount(
                0,
            );
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

async function deskBooking(
    fixture: { user: () => Promise<Identity> },
    start: number,
    end: number,
) {
    const user = await fixture.user();
    return {
        id: BOOKING_ID,
        booking_type: 'desk',
        type: 'desk',
        title: 'Draft auto check-in booking',
        asset_id: DESK_ASSET,
        asset_name: 'Draft auto check-in desk',
        booking_start: start,
        booking_end: end,
        user_id: user.id,
        user_email: user.email,
        user_name: user.name,
        booked_by_id: user.id,
        booked_by_email: user.email,
        approved: true,
        checked_in: false,
        rejected: false,
        deleted: false,
        zones: [],
        extension_data: {},
    };
}

/**
 * Freeze Date.now (timers keep running) so the near-start window holds.
 * Frozen at the real time and never ahead of it, so the minted token stays
 * valid; held at least two hours before UTC midnight (the browser runs in
 * Etc/UTC) so the booking stays inside today's listing.
 */
function frozenInstant() {
    const midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    return new Date(Math.min(Date.now(), midnight.valueOf() - 2 * 3_600_000));
}

/** The schedule's desk listing request. */
function isDeskListing(url: URL) {
    return (
        url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'desk'
    );
}

/** The schedule lists one local day for the desk type only. */
function deskListing(fixture: { user: () => Promise<Identity> }, now: number) {
    return async (url: URL) => {
        const start = Number(url.searchParams.get('period_start'));
        const end = Number(url.searchParams.get('period_end'));
        if (!(start > 0 && end > start))
            throw new Error('the desk listing must carry a valid period');
        const booking = await deskBooking(fixture, now + 300, now + 3900);
        return booking.booking_start < end && booking.booking_end > start
            ? [booking]
            : [];
    };
}

function fixtureHits(audit: Audit, name: string) {
    return audit.fixtures[name] ?? 0;
}

// One visible check-in control without auto_checkin, none with it. Kept as
// data so the test body has no branches.
const SCENARIOS = [
    {
        auto_checkin: false,
        verb: 'shows',
        controls: 1,
        message: 'without auto_checkin the check-in control is offered',
    },
    {
        auto_checkin: true,
        verb: 'hides',
        controls: 0,
        message: 'auto_checkin treats the desk as already checked in',
    },
];

for (const scenario of SCENARIOS) {
    test(`desks.auto_checkin ${scenario.auto_checkin} ${scenario.verb} the booking check-in control`, async ({
        staffPage,
        audit,
    }) => {
        const fixture = await preparePage(staffPage, audit, {
            'app.desks.auto_checkin': scenario.auto_checkin,
        });

        const instant = frozenInstant();
        await staffPage.clock.setFixedTime(instant);
        const now = Math.floor(instant.valueOf() / 1000);

        await getOnly(
            staffPage,
            audit,
            'desk booking listing',
            isDeskListing,
            deskListing(fixture, now),
        );

        await staffPage.goto('/#/your-bookings?view=list');
        const schedule = new SchedulePage(staffPage);
        await fixture.ready();
        await expect(schedule.card(BOOKING_ID)).toBeVisible();
        expect(
            fixtureHits(audit, 'desk booking listing'),
            'the desk booking must be read from the GET fixture',
        ).toBeGreaterThan(0);

        const modal = await schedule.openDetails(BOOKING_ID);
        await expect(modal).toContainText('Draft auto check-in booking');
        await expect(modal.locator('status-pill')).toBeVisible();
        const control = schedule.checkInButton(modal);
        // Count, then visible count: for the offered control this is the
        // former toHaveCount(1) + toBeVisible(); for auto_checkin both are 0.
        await expect(control, scenario.message).toHaveCount(scenario.controls);
        await expect(
            control.filter({ visible: true }),
            scenario.message,
        ).toHaveCount(scenario.controls);

        // Never click check-in, checkout, edit, cancel or the overflow menu.
        await staffPage.keyboard.press('Escape');
        await expect(modal).toHaveCount(0);
    });
}
