import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, BOOKING, openCalendar, ORIGINS, type Settings, test, untouchedParking } from '../support/settings-harness';
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
    const { day, month } = await page.evaluate((days) => {
        const date = new Date(); date.setDate(date.getDate() + days);
        return { day: date.getDate(), month: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }) };
    }, offset);
    await next.click();
    // The grid redraws after the click; until then the old month (whose same
    // day number is in the past) is still in the DOM. The heading is the only
    // unnamed button (date-calendar.component.ts: display_date | date:'LLLL yyyy').
    await expect(picker.locator('button:not([name])').first()).toHaveText(new RegExp('^\\s*' + month + '\\s*$'));
    // Out-of-month cells carry text-base-300!; pick the in-month day.
    const cell = picker.locator('button[name="schedule-set-date"]:not([class*="text-base-300"])')
        .filter({ hasText: new RegExp('^\\s*' + day + '\\s*$') });
    await expect(cell).toHaveCount(1);
    return cell;
}
/** Whether the day `offset` days ahead is selectable. Closes the picker unchanged. */
async function dayEnabled(page: Page, root: Locator, offset: number) {
    const picker = await openCalendar(page, root);
    const cell = await dayCell(page, picker, offset);
    const enabled = cell ? await cell.isEnabled() : false;
    await page.keyboard.press('Escape');
    await expect(picker).toHaveCount(0);
    return enabled;
}
async function parkingForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...BOOKING, ...overrides });
    await page.goto('/#/book/parking/form');
    await fixture.ready();
    const root = page.locator('parking-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-flow-form button[confirm]')).toBeVisible();
    return root;
}

test.describe('parking.available_period', () => {

    test('parking.available_period 7 allows today+7 and blocks today+8', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.available_period': 7 });
        expect(await dayEnabled(staffPage, root, 7)).toBe(true);
        expect(await dayEnabled(staffPage, root, 8)).toBe(false);
        await untouchedParking(staffPage);
    });

    test('parking.available_period 21 extends the window to today+21', async ({ staffPage, audit }) => {
        const root = await parkingForm(staffPage, audit, { 'app.parking.available_period': 21 });
        expect(await dayEnabled(staffPage, root, 8)).toBe(true);
        expect(await dayEnabled(staffPage, root, 21)).toBe(true);
        expect(await dayEnabled(staffPage, root, 22)).toBe(false);
        await untouchedParking(staffPage);
    });
});
