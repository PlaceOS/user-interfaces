import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, BOOKING, ORIGINS, type Settings, test, untouchedParking } from '../support/settings-harness';
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
/** Real building rows with timezone rewritten. */
async function timezoneBuildings(page: Page, audit: Audit) {
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) if (key.startsWith('PLACEOS.org')) localStorage.removeItem(key);
    });
    await page.route((url) => ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'building' && url.searchParams.get('limit') === '500', async (route) => {
        if (route.request().method() !== 'GET') return route.fallback();
        try {
            const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
            if (!response.ok()) return await route.fulfill({ response });
            const body = await response.json();
            const rows: Record<string, unknown>[] = Array.isArray(body) ? body : body?.results ?? [];
            audit.fixtures['timezone buildings'] = (audit.fixtures['timezone buildings'] ?? 0) + rows.length;
            const patched = rows.map((row) => ({ ...row, timezone: 'Pacific/Honolulu' }));
            await route.fulfill({ response, json: Array.isArray(body) ? patched : { ...body, results: patched } });
        } catch (error) {
            audit.monitoring_errors.push('building timezone fixture: ' + String(error));
            await route.abort('failed').catch(() => undefined);
        }
    });
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

test.describe('parking.use_building_timezone', () => {
    for (const enabled of [true, false]) {
        test('parking.use_building_timezone ' + enabled + ' gates the building-time label', async ({ staffPage, audit }) => {
            await timezoneBuildings(staffPage, audit);
            const root = await parkingForm(staffPage, audit, { 'app.parking.use_building_timezone': enabled });
            expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
            const secondary = root.locator('a-time-field[name="start-time"] button[time-field] div.truncate.text-xs');
            await expect(root.locator('a-time-field[name="start-time"] button[time-field]')).toBeVisible();
            await expect(secondary).toHaveCount(enabled ? 1 : 0);
            if (enabled) await expect(secondary).toContainText(/GMT-10|HST|-10/);
            await untouchedParking(staffPage);
        });
    }
});
