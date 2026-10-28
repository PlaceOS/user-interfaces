// Settings: visitors.min_duration, visitors.max_duration,
// visitors.duration_step, visitors.custom_duration_options
// (docs/settings/workplace.md).
// Coverage: 4 unique settings, 4 scenarios (one per setting).
// Consumer: apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts
// passed to libs/form-fields/src/lib/duration-field.component.ts.
// The visitor form's duration menu is read only. No field is submitted.
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
    // The getters are visitors.x || bookings.x (visitor-flow-details.component.ts).
    // Pin the bookings.* fallbacks to values no scenario expects, so the stack's
    // zone settings cannot change the menu and an ignored visitors.* key fails.
    // An override key wins even when null (SettingsService.get exact-key match);
    // null custom options fall through to the pinned []. Scenario 4 sets its own.
    'app.bookings.min_duration': 15,
    'app.bookings.max_duration': 480,
    'app.bookings.duration_step': 15,
    'app.bookings.custom_duration_options': [],
    'app.visitors.custom_duration_options': null,
};

readOnlyTest.use({ readOnlyTimezone: 'Etc/UTC' });

readOnlyTest.describe.configure({ retries: 0, timeout: 120_000 });

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

async function visitor(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    // The parking and locker modules are not under test, but their shared
    // bootstrap must find the hidden categories/types instead of creating them.
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
            Object.hasOwn(
                TYPES,
                url.searchParams.get('category_id') ?? '',
            ),
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
    await useSettings(page, { ...BASE, ...overrides });
    await page.addInitScript(() =>
        localStorage.setItem('APP.locale', 'en-US'),
    );
    const form = new InviteVisitorForm(page);
    await form.open();
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(form.reason).toBeVisible();
    await expect(form.sendButton).toBeVisible();
    await expect(form.successPanel).toHaveCount(0);
    return form;
}

/** Choose tomorrow at noon, so today's clock cannot bound the options. */
async function setTomorrow(form: InviteVisitorForm) {
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(12, 0, 0, 0);
    await form.setDate(tomorrow.valueOf());
}

readOnlyTest(
    'visitors.min_duration bounds the duration menu and removes shorter options',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.min_duration': 60,
            'app.visitors.max_duration': 180,
            'app.visitors.duration_step': 30,
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toContain(60);
        expect(options).not.toContain(30);
        expect(options).not.toContain(45);
        expect(Math.min(...options)).toBeGreaterThanOrEqual(60);
    },
);

readOnlyTest(
    'visitors.max_duration removes longer options from the duration menu',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.min_duration': 30,
            'app.visitors.max_duration': 120,
            'app.visitors.duration_step': 30,
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toContain(120);
        expect(options).not.toContain(150);
        expect(options).not.toContain(180);
        expect(Math.max(...options)).toBeLessThanOrEqual(120);
    },
);

readOnlyTest(
    'visitors.duration_step changes the spacing of duration options',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.min_duration': 45,
            'app.visitors.max_duration': 225,
            'app.visitors.duration_step': 45,
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toEqual(expect.arrayContaining([45, 90, 135, 180, 225]));
        expect(options).not.toContain(75);
    },
);

readOnlyTest(
    'visitors.custom_duration_options adds exact values outside the generated step',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.min_duration': 30,
            'app.visitors.max_duration': 120,
            'app.visitors.duration_step': 30,
            'app.visitors.custom_duration_options': [45, 200],
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toContain(45);
        expect(options).toContain(200);
        expect(options).not.toContain(75);
    },
);
