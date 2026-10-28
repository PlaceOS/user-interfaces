import type { Page } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    BACKEND_URL,
    assertLocalOnly,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import {
    READ_ONLY_SETTINGS,
} from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Audit, CATEGORIES, getOnly, type Identity, ORIGINS, PIXEL, type Settings, test, TYPES } from '../support/settings-harness';
type Debug = Window & {
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

test.use({ readOnlyTimezone: 'Etc/UTC' });
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['visitor-invite'],
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
async function prepare(page: Page, audit: Audit, overrides: Settings) {
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
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
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

/** Browser-only success state: two prepared visitors, no invite is sent. */
async function seedSuccessState(page: Page) {
    await page.addInitScript(() => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        sessionStorage.setItem(
            'PLACEOS.last_booked_booking',
            JSON.stringify({
                id: 99009602,
                booking_type: 'visitor',
                title: 'Prepared visitor',
                asset_id: 'prepared-multiple@example.invalid',
                asset_name: 'Prepared Multiple Visitor',
                date: date.valueOf(),
                duration: 60,
                all_day: false,
                booking_start: Math.floor(date.valueOf() / 1000),
                booking_end: Math.floor(date.valueOf() / 1000) + 3600,
                description: '',
                attendees: [],
                user_email: 'prepared-host@example.invalid',
                user_name: 'Prepared host',
                zones: [],
                extension_data: {},
            }),
        );
        sessionStorage.setItem('PLACEOS.last_booked_count', '2');
    });
}

// Target: bookings.multiple_visitors.
// Runtime: the new visitor flow chooses its single/multiple controls from the
// on-page toggle, not from this setting. The setting's observable effect is the
// success summary: visitor-flow-success.component.ts. The
// success state is a browser-only sessionStorage seed; no invite is sent.
// The expected wording is kept as data so the test body has no branches.
const SCENARIOS = [
    {
        enabled: false,
        heading: 'Visitor invite sent to Prepared Multiple Visitor',
        summary: 'Invite has been sent',
    },
    {
        enabled: true,
        heading: 'Visitor invite sent to 2 people',
        summary: 'Invites have been sent',
    },
];

for (const scenario of SCENARIOS) {
    test(
        'bookings.multiple_visitors ' +
            scenario.enabled +
            ' selects the visitor success summary',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.bookings.multiple_visitors': scenario.enabled,
            });
            await seedSuccessState(staffPage);
            await staffPage.goto('/#/book/visitor/success');
            await fixture.ready();
            const panel = staffPage.locator('visitor-flow-success');
            await expect(panel).toHaveCount(1);
            await expect(panel).toBeVisible();
            await expect(panel.locator('h2')).toHaveText(scenario.heading);
            await expect(panel).toContainText(scenario.summary);
            await expect(
                staffPage.locator('visitor-flow-new visitor-flow-invites'),
            ).toHaveCount(0);
        },
    );
}
