import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, BOOKING, ORIGINS, type Settings, test } from '../support/settings-harness';
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


// ------------------------------------------------------------- shared form helpers
type Identity = { id: string; email: string; name: string };
/** The staff identity the app itself reads; no extra API call is made. */
function watchIdentity(page: Page) {
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/users/current' &&
            response.request().method() === 'GET') identity = response.json();
    });
    return async () => {
        await expect.poll(() => !!identity, { message: 'the app must read the staff identity' }).toBe(true);
        return identity!;
    };
}
// ------------------------------------------------------------- your bookings card
// booking-card.component.ts (show_waitlist -> status 'info',
// hide_selected_space -> "Parking" label). The schedule's
// parking list GET (schedule-state.service.ts) returns one synthetic
// row; no card, modal or action is clicked.
async function scheduleCard(page: Page, audit: Audit, overrides: Settings, row: Record<string, unknown>) {
    const user = watchIdentity(page);
    const start = Math.floor(Date.now() / 1000) + 120;
    const midnight = Math.floor(new Date().setUTCHours(24, 0, 0, 0) / 1000);
    const end = Math.min(start + 1800, midnight - 60);
    expect(end - start, 'run outside the last minutes of the UTC day so the row stays on today').toBeGreaterThan(300);
    const fixture = await prepare(page, audit, { ...BOOKING, ...overrides }, async (type) => {
        if (type !== 'parking') return [];
        const me = await user();
        return [{
            id: 'e2e-settings-parking-1', booking_type: 'parking', title: 'E2E Synthetic Reservation',
            asset_id: 'e2e-settings-bay', asset_name: 'E2E Synthetic Bay 7', description: '',
            booking_start: start, booking_end: end, user_id: me.id, user_email: me.email, user_name: me.name,
            rejected: false, deleted: false, zones: [], extension_data: {}, ...row,
        }];
    });
    await page.goto('/#/your-bookings?view=list');
    await fixture.ready();
    const card = page.locator('a[name="view-booking-details"]').filter({ hasText: 'E2E Synthetic Reservation' });
    await expect(card).toHaveCount(1);
    expect(audit.fixtures['parking/locker bookings'] ?? 0).toBeGreaterThan(0);
    return card;
}

test.describe('parking.show_waitlist', () => {
    for (const shown of [true, false]) {
        test('parking.show_waitlist ' + shown + ' colours a wait-listed request', async ({ staffPage, audit }) => {
            // parkingRequestStatus (booking.utilities.ts): unapproved, not manual, process_state wait_list.
            const card = await scheduleCard(staffPage, audit, { 'app.parking.show_waitlist': shown },
                { approved: false, process_state: 'wait_list' });
            const pill = card.locator('status-pill > div');
            await expect(pill).toHaveClass(shown ? /\bbg-info-light\b/ : /\bbg-warning-light\b/);
            await expect(pill).not.toHaveClass(shown ? /\bbg-warning-light\b/ : /\bbg-info-light\b/);
        });
    }
});
