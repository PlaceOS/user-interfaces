// Coverage: 1 unique setting, 2 scenarios.
// Setting: parking.show_calendar_links (source:
//   apps/workplace/src/app/book/parking-flow/parking-flow-success.component.ts:51-96,147-149).
// Status: PASS (2/2, 2026-10-22, isolated local E2E backend).
//
// The parking success panel renders the Outlook/Google/iCal links only when
// parking.show_calendar_links is true. The booked event is a browser-only
// sessionStorage seed; nothing is submitted and no external calendar link is
// clicked.
import type { Page, Route } from '@playwright/test';
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
    { id: 'e2e-parking-links-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-parking-links-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-parking-links-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-parking-links-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-parking-links-catering': [],
    'e2e-parking-links-desks': ['_DESKS_'],
    'e2e-parking-links-parking': [
        '_PARKING_SPACES_',
        '_PARKING_USERS_',
        '_PARKING_FLEET_VEHICLES_',
    ],
    'e2e-parking-links-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['parking'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
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
                id: 'e2e-parking-links-type-' + name,
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
                'e2e-parking-links-type-',
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
        'app.parking.show_calendar_links': enabled,
        'app.parking.show_status_details': true,
    };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
}

/** Browser-only success state for one synthetic parking booking tomorrow. */
async function seedSuccessState(page: Page) {
    const start = Math.floor(Date.now() / 1000) + 24 * 3600;
    await page.addInitScript(
        (value) => sessionStorage.setItem('PLACEOS.last_booked_booking', value),
        JSON.stringify({
            id: 'e2e-parking-links-booking',
            booking_type: 'parking',
            title: 'E2E Synthetic Parking Booking',
            asset_id: 'e2e-parking-links-bay',
            asset_name: 'E2E Synthetic Parking Bay',
            date: start * 1000,
            duration: 60,
            booking_start: start,
            booking_end: start + 3600,
            user_email: 'prepared-parking@example.invalid',
            user_name: 'Prepared Parking User',
            zones: [],
            extension_data: {},
        }),
    );
}

const LINKS = ['desk-outlook-link', 'desk-google-link', 'desk-ical-link'];

// Each calendar link is rendered (and visible) only with the setting on, and
// only then are its targets checked. Kept as data so the test body has no
// branches: `links` is the expected count per link and `hrefs` is empty when
// the links are absent.
type Scenario = {
    enabled: boolean;
    links: number;
    hrefs: [string, RegExp][];
};
const SCENARIOS: Scenario[] = [
    { enabled: false, links: 0, hrefs: [] },
    {
        enabled: true,
        links: 1,
        hrefs: [
            ['desk-outlook-link', /^https:\/\/outlook\./],
            ['desk-google-link', /^https:\/\/calendar\.google\.com\//],
            ['desk-ical-link', /^data:text\/calendar/],
        ],
    },
];

for (const scenario of SCENARIOS) {
    test(`parking.show_calendar_links ${scenario.enabled} gates the parking success links`, async ({
        staffPage,
    }) => {
        await prepare(staffPage, scenario.enabled);
        await seedSuccessState(staffPage);
        await staffPage.goto('/#/book/parking/success');
        await expect(staffPage.locator('global-loading [loader]')).toHaveCount(
            0,
        );
        await expect(
            staffPage.locator('global-loading [initialisation-error]'),
        ).toHaveCount(0);
        for (const [key, value] of [
            ['app.features', ['parking']],
            ['app.parking.show_calendar_links', scenario.enabled],
        ] as const) {
            await expect
                .poll(
                    () =>
                        staffPage.evaluate(
                            (name) => (window as DebugWindow).setting?.(name),
                            key,
                        ),
                    { message: 'effective setting ' + key },
                )
                .toEqual(value);
        }
        const page = staffPage.locator('parking-flow-success');
        await expect(page).toHaveCount(1);
        await expect(page.locator(':scope > div')).toBeVisible();
        await expect(page.getByRole('heading')).toBeVisible();
        await expect(page.locator('main p')).toContainText(
            'E2E Synthetic Parking Bay',
        );
        for (const name of LINKS) {
            const link = page.locator('a[name="' + name + '"]');
            await expect(link).toHaveCount(scenario.links);
            await expect(link.filter({ visible: true })).toHaveCount(
                scenario.links,
            );
        }
        // Never clicked: target=_blank external calendar links.
        for (const [name, href] of scenario.hrefs) {
            await expect(
                page.locator('a[name="' + name + '"]'),
            ).toHaveAttribute('href', href);
        }
        await expect(page.locator('footer a')).toHaveCount(1);
    });
}
