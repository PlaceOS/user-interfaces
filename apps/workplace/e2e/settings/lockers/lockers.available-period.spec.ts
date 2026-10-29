// Setting: lockers.available_period (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumer: libs/bookings/src/lib/locker-select-modal/locker-filters.component.ts.
// The locker filters date field uses `available_period` as its `to` bound. The
// locker picker is opened, the date menu is inspected, then closed unchanged.
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { CATEGORIES, COMMON, dayEnabled, type Settings, TYPES } from '../support/settings-harness';

const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const LOCKER: Settings = {
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
    'app.lockers.available_period': 90,
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

async function openLockerPicker(page: Page, available_period: number) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    // The filter drawer is only reachable from the mobile layout; this view
    // only exposes the filters and does not create a locker booking.
    await page.setViewportSize({ width: 600, height: 1000 });
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
                id: 'e2e-settings-type-' + name,
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
                'e2e-settings-type-',
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
            ['parking', 'locker'].includes(
                url.searchParams.get('type') ?? '',
            ),
        () => [],
    );
    await useSettings(page, {
        ...LOCKER,
        'app.lockers.available_period': available_period,
    });
    await page.addInitScript(() =>
        localStorage.setItem('APP.locale', 'en-AU'),
    );
    await page.goto('/#/book/locker/form');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    const form = page.locator('new-locker-form-details');
    await expect(form).toBeVisible();
    await form.locator('button[name="add-locker"]').click();
    const modal = page.locator('locker-select-modal');
    await expect(modal).toBeVisible();
    const filters = modal.locator('locker-filters');
    if (!(await filters.isVisible().catch(() => false))) {
        await modal
            .locator('button')
            .filter({
                has: page.locator('icon', {
                    hasText: /^\s*filter_list\s*$/,
                }),
            })
            .click();
    }
    await expect(filters).toBeVisible();
    return filters;
}


readOnlyTest(
    'lockers.available_period 2 disables days past the configured window',
    async ({ staffPage }) => {
        const filters = await openLockerPicker(staffPage, 2);
        expect(await dayEnabled(staffPage, filters, 2)).toBe(true);
        expect(await dayEnabled(staffPage, filters, 3)).toBe(false);
    },
);

// end_date = endOfDay(today + available_period), default 90 when unset
// (locker-filters.component.ts), so a day inside 10 proves nothing on its own:
// assert the boundary day and the first disallowed day.
readOnlyTest(
    'lockers.available_period 10 allows the tenth day and disables the eleventh',
    async ({ staffPage }) => {
        const filters = await openLockerPicker(staffPage, 10);
        expect(await dayEnabled(staffPage, filters, 10)).toBe(true);
        expect(await dayEnabled(staffPage, filters, 11)).toBe(false);
    },
);
