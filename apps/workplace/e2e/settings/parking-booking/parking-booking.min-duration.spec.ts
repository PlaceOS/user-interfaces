import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, BOOKING, menuValues, openCalendar, ORIGINS, type Settings, test, untouchedParking } from '../support/settings-harness';
type Debug = Window & { setting?: (key: string) => unknown };

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Origin-limited GET-only responses. Non-GET always falls through to the guard. */
async function getOnly(page: Page, audit: Audit, name: string, match: (url: URL) => boolean,
    body: (url: URL) => unknown | Promise<unknown>) {
    await page.route((url) => ORIGINS.has(url.origin) && match(url), async (route: Route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const json = await body(new URL(route.request().url()));
            audit.fixtures[name] = (audit.fixtures[name] ?? 0) + 1;
            await route.fulfill({ json });
        } catch (error) {
            audit.monitoring_errors.push(name + ' fixture: ' + String(error));
            await route.abort('failed').catch(() => undefined);
        }
    });
}
// ensure_hidden_category / ensure_type POST when a GET finds nothing and
// move_type_to_category PUTs on a category mismatch (parking-assets.fn.ts,
// locker-assets.fn.ts). One shared response carries every hidden category.
const CATEGORIES = [
    { id: 'e2e-settings-catering', name: '_CATERING_', hidden: true },
    { id: 'e2e-settings-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-settings-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-settings-lockers', name: '_LOCKERS_', hidden: true },
];
const TYPES: Record<string, string[]> = {
    'e2e-settings-catering': [], 'e2e-settings-desks': ['_DESKS_'],
    'e2e-settings-parking': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
    'e2e-settings-lockers': ['_LOCKER_BANKS_', '_LOCKERS_'],
};
async function prepare(page: Page, audit: Audit, settings: Settings,
    bookings: (type: string) => unknown[] | Promise<unknown[]> = () => []) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await getOnly(page, audit, 'hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500', () => CATEGORIES);
    await getOnly(page, audit, 'hidden types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' && Object.hasOwn(TYPES, url.searchParams.get('category_id') ?? ''),
    (url) => TYPES[url.searchParams.get('category_id')!].map((name) => ({
        id: 'e2e-settings-type-' + name, name, category_id: url.searchParams.get('category_id'), brand: 'PlaceOS',
    })));
    await getOnly(page, audit, 'hidden assets', (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('e2e-settings-type-'), () => []);
    await getOnly(page, audit, 'calendar list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
    // Parking/locker booking lists (ParkingService.loadBookings, locker flow
    // _loadTodaysBookings, schedule queryAllBookings): empty unless a test
    // supplies a synthetic GET row. Other booking types reach the real backend.
    await getOnly(page, audit, 'parking/locker bookings', (url) => url.pathname === '/api/staff/v1/bookings' &&
        ['parking', 'locker'].includes(url.searchParams.get('type') ?? ''),
    (url) => bookings(url.searchParams.get('type')!));
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
    return {
        ready: async (bootstrap = true) => {
            await expect(page.locator('global-loading')).toHaveCount(1);
            await expect(page.locator('global-loading [loader]')).toHaveCount(0);
            await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect.poll(() => page.evaluate((name) => (window as Debug).setting?.(name), key),
                    { message: 'effective setting ' + key }).toEqual(value);
            }
            // Pages that start a hidden-asset bootstrap must read the fixture, never create records.
            if (bootstrap) await expect.poll(() => audit.fixtures['hidden categories'] ?? 0,
                { message: 'hidden-category bootstrap served by the fixture' }).toBeGreaterThan(0);
        },
    };
}
/**
 * The calendar cell `offset` days after today. Cells are consecutive days, so
 * the index is counted from the cell carrying today's ring. If the day is past
 * the grid, move one month on: the right chevron (named schedule-previous-month
 * in date-calendar.component.ts) is disabled once the grid's last cell is past
 * `to`, so a later day cannot be selectable and null is returned.
 */
async function dayCell(page: Page, picker: Locator, offset: number): Promise<Locator | null> {
    const cells = picker.locator('button[name="schedule-set-date"]');
    await expect(cells.first()).toBeVisible();
    const today = await cells.evaluateAll((elements) =>
        elements.findIndex((element) => !!element.querySelector('div.border-secondary')));
    expect(today, 'the calendar marks today').toBeGreaterThanOrEqual(0);
    if (today + offset < await cells.count()) return cells.nth(today + offset);
    const next = picker.locator('button[name="schedule-previous-month"]');
    if (await next.isDisabled()) return null;
    const day = await page.evaluate((days) => {
        const date = new Date(); date.setDate(date.getDate() + days); return date.getDate();
    }, offset);
    await next.click();
    // Out-of-month cells carry text-base-300!; pick the in-month day.
    const cell = picker.locator('button[name="schedule-set-date"]:not([class*="text-base-300"])')
        .filter({ hasText: new RegExp('^\\s*' + day + '\\s*$') });
    await expect(cell).toHaveCount(1);
    return cell;
}
/** Chooses a day in the local form model only. */
async function pickDay(page: Page, root: Locator, offset: number) {
    const picker = await openCalendar(page, root);
    const cell = await dayCell(page, picker, offset);
    expect(cell, offset + ' days ahead must be reachable').not.toBeNull();
    await expect(cell!).toBeEnabled();
    await cell!.click();
    await expect(picker).toHaveCount(0);
}
const HH = (h: number, m = 0) => h * 60 + m;
async function parkingForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...BOOKING, ...overrides });
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    const root = page.locator('parking-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-flow-form button[confirm]')).toBeVisible();
    return root;
}
const startTimes = (page: Page, root: Locator) =>
    menuValues(page, root.locator('a-time-field[name="start-time"] button[time-field]'), 'data-time');

test.describe('parking.min_duration', () => {
    for (const [min, last] of [[30, HH(16, 30)], [120, HH(15)]] as const) {
        test('parking.min_duration ' + min + ' moves the latest start within 9-17 hours', async ({ staffPage, audit }) => {
            const root = await parkingForm(staffPage, audit, {
                'app.parking.min_duration': min, 'app.parking.bookable_hours': { start: 9, end: 17 },
            });
            await pickDay(staffPage, root, 1);
            const times = await startTimes(staffPage, root);
            expect(Math.min(...times)).toBe(HH(9));
            expect(Math.max(...times)).toBe(last);
            await untouchedParking(staffPage);
        });
    }
});
