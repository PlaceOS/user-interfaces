// Setting: visitors.bookable_hours (docs/settings/workplace.md:60).
// Coverage: 1 unique setting, 1 scenario. Local execution: 1/1 PASS (2026-10-22).
// Consumer: apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts:296-306
// passed to libs/form-fields/src/lib/time-field.component.ts:178-230.
// The start-time menu must stay inside the configured working window. No field
// is submitted and the menu is closed again.
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
    'app.visitors.min_duration': 60,
    'app.visitors.max_duration': 180,
    'app.visitors.duration_step': 30,
};

readOnlyTest.use({ readOnlyTimezone: 'Etc/UTC' });

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

const toMinutes = (value: string) => {
    const [hours, minutes] = value.split(':').map(Number);
    return hours * 60 + minutes;
};

readOnlyTest(
    'visitors.bookable_hours limits the start times to the configured window',
    async ({ staffPage }) => {
        const form = await visitor(staffPage, {
            'app.visitors.bookable_hours': { start: 10, end: 16 },
        });
        const tomorrow = new Date();
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
        tomorrow.setUTCHours(12, 0, 0, 0);
        await form.setDate(tomorrow.valueOf());
        const options = (await form.startTimeOptions()).map(toMinutes);
        expect(options).toContain(10 * 60);
        expect(options).toContain(15 * 60);
        expect(Math.min(...options)).toBe(10 * 60);
        expect(Math.max(...options)).toBe(15 * 60);
        expect(options).not.toContain(9 * 60 + 45);
        expect(options).not.toContain(15 * 60 + 15);
    },
);
