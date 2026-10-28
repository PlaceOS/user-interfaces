// Setting: visitors.use_building_timezone (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios, with a browser-only building
// timezone applied to every building.
// Consumer: apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts
// and libs/form-fields/src/lib/time-field.component.ts.
// When enabled the time field is labelled with the building's timezone offset;
// when the browser is in the same zone the secondary line is suppressed.
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;

const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const PIXEL =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="24"/%3E';

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

// The building list gets this timezone in this browser only, for every building
// (the isolated E2E building has none; any other stack value is replaced too).
const BUILDING_TIMEZONE = 'Australia/Sydney';

// Deliberately far from the building timezone so the secondary line is
// exercised; the setting is still asserted independently of the label.
readOnlyTest.use({ readOnlyTimezone: 'Pacific/Kiritimati' });

readOnlyTest.describe.configure({ retries: 0, timeout: 120_000 });

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

async function visitor(page: Page, overrides: Settings) {
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
    // OrganisationService.loadBuildings: GET /zones?tags=building. The real GET
    // still runs; every returned building gets BUILDING_TIMEZONE in this browser,
    // whatever the stack stores, so the expected label never depends on stack
    // data. Ids and all other fields are kept. Non-GET requests fall through to
    // the read-only guard.
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('PLACEOS.org.zones')) localStorage.removeItem(key);
        }
    });
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'building',
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const response = await route.fetch();
            const body = await response.json();
            const json = Array.isArray(body)
                ? body.map((zone: { timezone?: string }) => ({
                      ...zone,
                      timezone: BUILDING_TIMEZONE,
                  }))
                : body;
            await route.fulfill({ response, json });
        },
    );
    await useSettings(page, { ...BASE, ...overrides });
    await page.addInitScript(() =>
        localStorage.setItem('APP.locale', 'en-US'),
    );
    const form = new InviteVisitorForm(page);
    await form.open();
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(form.reason).toBeVisible();
    await expect(form.sendButton).toBeVisible();
    return form;
}

// visitor-flow-details renders the start time as <a-time-field name="time">.
const timeField = (form: InviteVisitorForm) =>
    form.root.locator('a-time-field[name="time"]');
const timezoneLabel = (form: InviteVisitorForm) =>
    timeField(form).locator('.text-xs');

readOnlyTest(
    'visitors.use_building_timezone false leaves the time field in the browser zone',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.use_building_timezone': false,
        });
        const timezone = await staffPage.evaluate(() => {
            const element = document.querySelector('visitor-flow-details');
            return element
                ? (window as any).ng.getComponent(element).timezone
                : null;
        });
        expect(timezone).toBe('');
        // Positive anchor first, so the absent label cannot pass vacuously.
        await expect(timeField(form)).toHaveCount(1);
        await expect(timezoneLabel(form)).toHaveCount(0);
    },
);

readOnlyTest(
    'visitors.use_building_timezone true adds the building timezone label',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.use_building_timezone': true,
        });
        const timezone = await staffPage.evaluate(() => {
            const element = document.querySelector('visitor-flow-details');
            return element
                ? (window as any).ng.getComponent(element).timezone
                : null;
        });
        expect(typeof timezone).toBe('string');
        expect(timezone).not.toBe('');
        const label = timezoneLabel(form);
        await expect(label).toHaveCount(1);
        // The label is the date pipe's zone text, e.g. "(GMT+11)". Derive the
        // building's current offset from Intl so the check stays exact.
        const offset = await staffPage.evaluate((zone) =>
            new Intl.DateTimeFormat('en-US', { timeZone: zone, timeZoneName: 'shortOffset' })
                .formatToParts(new Date())
                .find((part) => part.type === 'timeZoneName')?.value ?? '', BUILDING_TIMEZONE);
        expect(offset).toMatch(/^GMT[+-]\d{1,2}(:\d{2})?$/);
        await expect(label).toContainText('(' + offset + ')');
    },
);
