import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, getOnly, LOCKER, type Settings, test } from '../support/settings-harness';
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


// locker-flow-success.component.ts; data from sessionStorage
// PLACEOS.last_booked_booking (booking-form.service.ts).

test.describe('lockers.show_calendar_links', () => {
    for (const enabled of [true, false]) {
        test('lockers.show_calendar_links ' + enabled + ' on the locker success page', async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, { ...LOCKER, 'app.lockers.show_calendar_links': enabled });
            const start = Math.floor(Date.now() / 1000) + 24 * 3600;
            await staffPage.addInitScript((value) => sessionStorage.setItem('PLACEOS.last_booked_booking', value),
                JSON.stringify({
                    id: 'e2e-settings-locker', booking_type: 'locker', title: 'E2E Synthetic Locker Booking',
                    asset_id: 'e2e-settings-locker-1', asset_name: 'E2E Synthetic Locker 3',
                    booking_start: start, booking_end: start + 3600, zones: [], extension_data: {},
                }));
            await staffPage.goto('/#/book/locker/success');
            await fixture.ready();
            const page = staffPage.locator('locker-flow-success');
            await expect(page).toHaveCount(1);
            // The unstyled host contains an absolute-positioned panel; assert
            // the rendered panel and seeded booking, not the host's empty box.
            await expect(page.locator(':scope > div')).toBeVisible();
            await expect(page.getByRole('heading')).toBeVisible();
            await expect(page.getByRole('heading')).toContainText('E2E Synthetic Locker 3');
            for (const name of ['locker-outlook-link', 'locker-google-link', 'locker-ical-link']) {
                const link = page.locator('a[name="' + name + '"]');
                await expect(link).toHaveCount(enabled ? 1 : 0);
                if (enabled) await expect(link).toBeVisible();
            }
            if (enabled) {
                // Never clicked: target=_blank external calendar links.
                await expect(page.locator('a[name="locker-outlook-link"]')).toHaveAttribute('href', /^https:\/\/outlook\./);
                await expect(page.locator('a[name="locker-google-link"]')).toHaveAttribute('href', /^https:\/\/calendar\.google\.com\//);
                await expect(page.locator('a[name="locker-ical-link"]')).toHaveAttribute('href', /^data:text\/calendar/);
            }
            await expect(page.locator('a[name="locker-confirm-continue"]')).toBeVisible();
        });
    }
});
