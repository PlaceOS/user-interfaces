// Coverage: 1 unique setting, 2 scenarios.
// Setting: desks.use_building_timezone (docs/settings/workplace.md; source:
//   apps/workplace/src/app/book/desk-flow-new/desk-flow-details.component.ts,
//   rendered by libs/form-fields/src/lib/duration-field.component.ts).
//
// The details duration field appends a second time line when the desk flow is
// configured to use the active building's timezone. The browser is pinned to
// UTC and the real building rows are rewritten to Pacific/Honolulu, so the
// offset is deterministic without changing any backend record. No desk is
// selected, no asset is attached and no booking is confirmed.
import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { pickCalendarDay } from '../../../../../e2e/support/visitor/calendar';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;
type DebugWindow = Window & { setting?: (key: string) => unknown };
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);

type WsAudit = { unexpected: string[]; control: string[] };
const test = readOnlyTest.extend<{ wsAudit: WsAudit }>({
    wsAudit: [async ({ staffPage }, use) => {
        const audit: WsAudit = { unexpected: [], control: [] };
        const closing: Promise<void>[] = [];
        await staffPage.context().routeWebSocket('**/*', (socket) => {
            const url = new URL(socket.url());
            const app = new URL(APP_URL);
            const local = url.host === app.host &&
                url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
            if (local && url.pathname === '/' &&
                [...url.searchParams.keys()].join(',') === 'token') return;
            if (local && url.pathname === '/api/engine/v2/systems/control') {
                audit.control.push(url.pathname);
            } else {
                audit.unexpected.push(url.href);
            }
            closing.push(socket.close().catch(() => undefined));
        });
        await use(audit);
        await Promise.all(closing);
        expect(audit.unexpected, 'no unexpected WebSocket connections').toEqual([]);
    }, { auto: true, timeout: 15_000 }],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });

async function getOnly(page: Page, match: (url: URL) => boolean,
    body: (url: URL) => unknown) {
    await page.route((url) => ORIGINS.has(url.origin) && match(url), async (route: Route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        await route.fulfill({ json: body(new URL(route.request().url())) });
    });
}

const CATEGORIES = [
    { id: 'e2e-desk-timezone-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-desk-timezone-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-desk-timezone-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-desk-timezone-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-desk-timezone-catering': [],
    'e2e-desk-timezone-desks': ['_DESKS_'],
    'e2e-desk-timezone-parking': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
    'e2e-desk-timezone-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};

const DESK: Settings = {
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
    'app.use_24_hour_time': true,
    'app.basic_user_search': true,
    'app.desk.auto_allocation': true,
    'app.desks.auto_allocation': true,
    'app.desks.hide_title': false,
    'app.desks.allow_groups': false,
    'app.desks.can_book_for_others': false,
    'app.bookings.can_book_for_others': false,
    'app.desks.can_book_lockers': false,
    'app.desks.has_assets': false,
    'app.bookings.has_assets': false,
    'app.desks.use_assets': false,
    'app.desks.allow_recurrence': false,
    'app.desks.allow_time_changes': true,
    'app.desks.allow_all_day': false,
    'app.bookings.allow_all_day': false,
    'app.desk.all_day_default': false,
    'app.desks.all_day_default': false,
    'app.bookings.all_day_default': false,
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

type Fixtures = { timezone_buildings: number };
async function prepare(page: Page, enabled: boolean, fixtures: Fixtures) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' &&
        url.searchParams.get('limit') === '500', () => CATEGORIES);
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' &&
        Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''), (url) =>
        TYPES[url.searchParams.get('category_id')!].map((name) => ({
            id: 'e2e-desk-timezone-type-' + name,
            name,
            category_id: url.searchParams.get('category_id'),
            brand: 'PlaceOS',
        })));
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('e2e-desk-timezone-type-'),
    () => []);
    await getOnly(page, (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('PLACEOS.org')) localStorage.removeItem(key);
        }
        localStorage.setItem('APP.locale', 'en-AU');
    });
    // Real building rows, rewritten to a timezone that differs from the
    // browser's pinned Etc/UTC. This is a browser GET response only.
    await page.route((url) => ORIGINS.has(url.origin) &&
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'building', async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
            if (!response.ok()) return route.fulfill({ response });
            const body = await response.json();
            const rows: Record<string, unknown>[] = Array.isArray(body) ? body : body?.results ?? [];
            fixtures.timezone_buildings += rows.length;
            const patched = rows.map((row) => ({ ...row, timezone: 'Pacific/Honolulu' }));
            await route.fulfill({
                response,
                json: Array.isArray(body) ? patched : { ...body, results: patched },
            });
        } catch {
            await route.fallback().catch(() => undefined);
        }
    });
    const settings = {
        ...DESK,
        'app.desks.use_building_timezone': enabled,
    };
    await useSettings(page, settings);
    await page.goto('/#/book/desk/form');
    await expect(page.locator('global-loading')).toHaveCount(1);
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of [
        ['app.features', settings['app.features']],
        ['app.desks.use_building_timezone', enabled],
        ['app.bookings.use_building_timezone', false],
    ] as const) {
        await expect.poll(() => page.evaluate((name) =>
            (window as DebugWindow).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }
    const details = page.locator('desk-flow-new desk-flow-details');
    await expect(details.locator('input[name$=".title"]')).toBeEditable();
    await expect(details.locator('date-field button').first()).toBeEnabled();
    return details;
}

async function futureDesk(page: Page, details: Locator) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 1);
    date.setUTCHours(12, 0, 0, 0);
    await details.locator('date-field button').first().click();
    await pickCalendarDay(page, page.locator('.cdk-overlay-container date-calendar'),
        date.valueOf(), { closes_on_pick: true });
    await details.locator('time-field[name="time"] button[time-field]').click();
    await page.locator('.cdk-overlay-container button[data-time="10:00"]').click();
    await details.locator('duration-field button[duration-field]').click();
    await page.locator('.cdk-overlay-container button[data-duration]').first().click();
}

for (const enabled of [false, true]) {
    test(`desks.use_building_timezone ${enabled} gates the duration secondary time line`,
        async ({ staffPage }) => {
            const fixtures: Fixtures = { timezone_buildings: 0 };
            const details = await prepare(staffPage, enabled, fixtures);
            expect(fixtures.timezone_buildings, 'building-timezone rows served').toBeGreaterThan(0);
            await futureDesk(staffPage, details);
            const secondary = details.locator('duration-field div.opacity-30');
            await expect(secondary).toHaveCount(enabled ? 1 : 0);
            if (enabled) {
                await expect(secondary).toBeVisible();
                await expect(secondary).toContainText(/GMT-10/);
            }
            await expect(staffPage).toHaveURL(/#\/book\/desk\/form$/);
            await expect(staffPage.locator('desk-flow-success')).toHaveCount(0);
        });
}
