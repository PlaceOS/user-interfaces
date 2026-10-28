import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, getOnly, LOCKER, type Settings, test, untouchedLocker } from '../support/settings-harness';
type Debug = Window & { setting?: (key: string) => unknown };

test.use({ readOnlyTimezone: 'Etc/UTC' });

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
async function lockerForm(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...LOCKER, ...overrides });
    await page.goto('/#/book/locker/form');
    await fixture.ready();
    const root = page.locator('new-locker-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('button[name="open-locker-confirm"]')).toBeVisible();
    return root;
}
/**
 * Read-only probe of LockerFormDetailsComponent's booking form model. Its async
 * ngOnInit sets all_day = !allow_time_changes || all_day after the org loads, so
 * with all_day_default false, all_day true proves the setting has been applied.
 * Fails closed if the component or model is unavailable.
 */
function lockerAllDay(page: Page) {
    return page.locator('new-locker-form-details').evaluate((element) => {
        const component = (
            window as Window & { ng?: { getComponent(element: Element): unknown } }
        ).ng?.getComponent(element) as { model?: () => { all_day?: boolean } } | undefined;
        if (!component?.model) throw new Error('locker form model is unavailable');
        return !!component.model().all_day;
    });
}


// locker-flow-success.component.ts; data from sessionStorage
// PLACEOS.last_booked_booking (booking-form.service.ts).

test.describe('lockers.allow_time_changes', () => {
    for (const allowed of [true, false]) {
        test('lockers.allow_time_changes ' + allowed + ' gates the All day option', async ({ staffPage, audit }) => {
            const root = await lockerForm(staffPage, audit, {
                'app.lockers.allow_time_changes': allowed, 'app.lockers.allow_all_day': true,
            });
            await expect(root.locator('mat-checkbox')).toHaveCount(allowed ? 1 : 0);
            await expect(root.locator('a-date-field')).toBeVisible();
            // Main effect: ngOnInit forces all_day when time changes are not
            // allowed, which removes the time row (start time + duration). Wait
            // for that model state first, so a missing row is not just "not yet
            // rendered" (the date field can render before ngOnInit applies it).
            await expect
                .poll(() => lockerAllDay(staffPage), {
                    message: 'booking form all_day after ngOnInit applies allow_time_changes',
                })
                .toBe(!allowed);
            await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(allowed ? 1 : 0);
            await expect(root.locator('a-duration-field')).toHaveCount(allowed ? 1 : 0);
            await untouchedLocker(staffPage);
            // Re-checked after the view settled: the time row state holds.
            expect(await lockerAllDay(staffPage), 'all_day still matches the setting').toBe(!allowed);
            await expect(root.locator('a-time-field[name="start-time"]')).toHaveCount(allowed ? 1 : 0);
        });
    }
});
