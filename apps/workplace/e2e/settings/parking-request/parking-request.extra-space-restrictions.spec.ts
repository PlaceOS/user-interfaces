// Setting: parking.extra_space_restrictions (docs/settings/workplace.md).
// Coverage: 1 unique setting, 3 scenarios.
// Held setting controls are listed in CONTROLS; non-local requests (Google
// Fonts) are answered locally by the wsAudit fixture.
//
// Source: apps/workplace/src/app/book/parking-request-flow/parking-request-form-details.component.ts
//   (setting signal, normalise, isExtraRestrictionSelected / setExtraRestriction,
//   and the space-restrictions template: section gate and settings-toggle list).
//
// Scenarios: 3
//   1. Two configured options render one settings-toggle each, in setting order,
//      both unchecked, under the space-restrictions heading.
//   2. The toggles are independent and reversible: A, then A+B, then B.
//   3. An empty list (with an empty request_space_restrictions) removes both the
//      toggle list and the whole space-restrictions section.
// Preconditions/fixtures: readOnlyTest (local read-only legacy fixture) with the
//   seeded non-admin staff identity read from GET /api/engine/v2/users/current
//   (no extra call), GET-only stubs for hidden asset categories/types/assets,
//   GET /api/staff/v1/calendars -> [], GET /api/staff/v1/bookings?type=parking
//   -> []. app.parking.request_space_restrictions is [] and
//   app.parking.require_space_restriction is false, so the section renders only
//   for these extra options. app.parking.hide_prefer_toggle is true so the
//   unrelated "prefer booked location" settings-toggle cannot be counted.
// Expected behaviour: one settings-toggle per normalised option, in setting
//   order; the settings-toggle renders a mat-checkbox (no `toggle` input here),
//   so the host button is clicked and the inner checkbox input is asserted.
//   Clicks only change local form state; nothing is submitted, and the read-only
//   fixture fails the test on any non-GET /api request.
//
// Notes:
// - settings-toggle renders mat-checkbox with pointer-events-none; click the
//   host button, never the checkbox.
// - The section heading carries a real id (#parking-space-restrictions-label),
//   the only stable handle in this block.
// - Labels pass through the translate pipe (APP.locale en-AU); the synthetic
//   names are not i18n keys, so they render unchanged.
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
type DebugWindow = Window & {
    setting?: (key: string) => unknown;
    ng?: { getComponent(element: Element): unknown };
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
    { id: 'e2e-extra-restriction-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-extra-restriction-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-extra-restriction-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-extra-restriction-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-extra-restriction-catering': [],
    'e2e-extra-restriction-desks': ['_DESKS_'],
    'e2e-extra-restriction-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-extra-restriction-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
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
    // Keep the only settings-toggle on the form in the extra-restrictions list.
    'app.parking.hide_prefer_toggle': true,
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
const RESTRICTIONS = [
    { id: 'e2e-standard-bay', name: 'E2E Standard Bay' },
    { id: 'e2e-accessible-bay', name: 'E2E Accessible Bay' },
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
                id: 'e2e-extra-restriction-type-' + name,
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
                'e2e-extra-restriction-type-',
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

async function untouched(page: Page) {
    await expect(
        page.locator('parking-request-form button[btn]').filter({
            has: page.locator('icon', { hasText: /^\s*send\s*$/ }),
        }),
    ).toBeVisible();
    await expect(page.locator('parking-request-success')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/parking-request\/form$/);
}

/** One settings-toggle per configured extra restriction, matched by its label. */
function extraToggle(root: Locator, name: string) {
    return root.locator('settings-toggle').filter({ hasText: name });
}
/** settings-toggle always renders mat-checkbox here (no `toggle` input). */
function toggleBox(toggle: Locator) {
    return toggle.locator('mat-checkbox input[type="checkbox"]');
}
/** The mat-checkbox ignores pointer events; the host button owns the click. */
function toggleButton(toggle: Locator) {
    return toggle.locator('button').first();
}
async function toggleLabels(root: Locator) {
    const texts = await root.locator('settings-toggle').allInnerTexts();
    return texts.map((text) => text.replace(/\s+/g, ' ').trim());
}
/**
 * Read-only view of the parent form model. The debug build exposes
 * ng.getComponent on the parking-request-form-details host; model() is the
 * WritableSignal passed down from parking-request-form.
 */
async function extraRestrictions(root: Locator) {
    return root.evaluate((element) => {
        const ng = (window as DebugWindow).ng;
        if (!ng) {
            throw new Error('Angular debug API ng.getComponent is unavailable');
        }
        const component = ng.getComponent(element) as
            | {
                  model?: () =>
                      | { extra_space_restrictions?: string[] }
                      | undefined;
              }
            | undefined;
        if (!component?.model) {
            throw new Error(
                'parking-request-form-details model() is unavailable',
            );
        }
        return component.model()?.extra_space_restrictions;
    });
}

test.describe('WPA settings: parking request extra space restrictions', () => {
    test('parking.extra_space_restrictions renders one toggle per option', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.extra_space_restrictions': RESTRICTIONS,
        });
        await expect(
            root.locator('#parking-space-restrictions-label'),
        ).toBeVisible();
        await expect(root.locator('settings-toggle')).toHaveCount(2);
        expect(await toggleLabels(root)).toEqual([
            'E2E Standard Bay',
            'E2E Accessible Bay',
        ]);
        for (const name of ['E2E Standard Bay', 'E2E Accessible Bay']) {
            const toggle = extraToggle(root, name);
            await expect(toggle).toHaveCount(1);
            await expect(toggleBox(toggle)).toHaveCount(1);
            await expect(toggleBox(toggle)).not.toBeChecked();
        }
        await untouched(staffPage);
    });

    test('parking.extra_space_restrictions toggles independently and is reversible', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.extra_space_restrictions': RESTRICTIONS,
        });
        const standard = extraToggle(root, 'E2E Standard Bay');
        const accessible = extraToggle(root, 'E2E Accessible Bay');
        const standard_box = toggleBox(standard);
        const accessible_box = toggleBox(accessible);

        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model starts with no extra restrictions',
            })
            .toEqual([]);

        await toggleButton(standard).click();
        await expect(standard_box).toBeChecked();
        await expect(accessible_box).not.toBeChecked();
        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model after selecting Standard',
            })
            .toEqual(['e2e-standard-bay']);

        await toggleButton(accessible).click();
        await expect(standard_box).toBeChecked();
        await expect(accessible_box).toBeChecked();
        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model after selecting Accessible',
            })
            .toEqual(['e2e-standard-bay', 'e2e-accessible-bay']);

        await toggleButton(standard).click();
        await expect(standard_box).not.toBeChecked();
        await expect(accessible_box).toBeChecked();
        await expect
            .poll(() => extraRestrictions(root), {
                message: 'parent model after untoggling Standard',
            })
            .toEqual(['e2e-accessible-bay']);
        await untouched(staffPage);
    });

    test('parking.extra_space_restrictions empty hides the extra list', async ({
        staffPage,
    }) => {
        const root = await openRequest(staffPage, {
            'app.parking.extra_space_restrictions': [],
            'app.parking.request_space_restrictions': [],
            'app.parking.require_space_restriction': false,
        });
        // Both lists empty => the whole section is gated out.
        await expect(
            root.locator('#parking-space-restrictions-label'),
        ).toHaveCount(0);
        await expect(root.locator('settings-toggle')).toHaveCount(0);
        await untouched(staffPage);
    });
});
