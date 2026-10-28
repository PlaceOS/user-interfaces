import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { SchedulePage } from '../../../../../e2e/support/bookings/schedule.page';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Audit, CATEGORIES, type Debug, getOnly, type Identity, ORIGINS, PIXEL, type Settings, test, TYPES } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['visitor-invite'], 'app.chat.enabled': false, 'app.global_search': false,
    'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true, 'app.use_region': false, 'app.use_geolocation': false,
    'app.allow_dark_mode': false, 'app.logo_light': PIXEL,
    'app.bookings.multiple_visitors': false, 'app.bookings.all_day_default': false,
    'app.bookings.can_book_for_anyone': false, 'app.bookings.can_book_for_others': false,
    'app.visitors.can_book_for_anyone': false, 'app.visitors.can_book_for_others': false,
    'app.visitors.allow_all_day': false, 'app.bookings.use_building_timezone': false,
    'app.visitors.use_building_timezone': false, 'app.visitors.bookable_hours': null,
    'app.bookings.bookable_hours': null, 'app.visitors.reason_required': false,
};
async function prepare(page: Page, audit: Audit, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (ORIGINS.has(url.origin) && url.pathname === '/api/engine/v2/users/current' &&
            response.request().method() === 'GET') identity = response.json();
    });
    // Parking/locker modules are not tested. Their shared bootstrap is read-only:
    // ensure_hidden_category/move_type_to_category must find matching records.
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
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    return {
        settings,
        user: async () => {
            if (!identity) throw new Error('the application must establish staff identity');
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading')).toHaveCount(1);
            await expect(page.locator('global-loading [loader]')).toHaveCount(0);
            await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
            for (const [key, value] of Object.entries(settings)) {
                await expect.poll(() => page.evaluate((name) => (window as Debug).setting?.(name), key),
                    { message: 'effective setting ' + key }).toEqual(value);
            }
        },
    };
}
const VISITOR_BOOKING = 9100211;

for (const required of [true, false]) {
    test('visitors.allow_editing ' + required + ' gates Edit for a synthetic owned visitor booking',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.features': ['visitor-invite'], 'app.visitors.allow_editing': required,
            });
            // Freeze Date.now (timers keep running) so the upcoming window holds.
            await staffPage.clock.install({ time: new Date() });
            await staffPage.clock.setFixedTime(new Date());
            const now = Math.floor(Date.now() / 1000);
            const end_of_day = new Date(); end_of_day.setHours(23, 59, 59, 999);
            test.skip(now + 7200 > end_of_day.valueOf() / 1000, 'synthetic booking would cross local midnight');
            // ScheduleStateService: GET /api/staff/v1/bookings?period_start&period_end&type=visitor&... (raw array).
            await getOnly(staffPage, audit, 'visitor booking listing', (url) =>
                url.pathname === '/api/staff/v1/bookings' && url.searchParams.get('type') === 'visitor', async (url) => {
                const start = Number(url.searchParams.get('period_start'));
                const end = Number(url.searchParams.get('period_end'));
                if (!(start > 0 && end > start)) throw new Error('listing must carry a valid period');
                const user = await fixture.user();
                const booking = {
                    id: VISITOR_BOOKING, booking_type: 'visitor', type: 'visitor', title: 'E2E visitor edit visibility',
                    asset_id: 'e2e-settings-visitor@example.invalid', asset_name: 'E2E Visitor',
                    booking_start: now + 3600, booking_end: now + 7200,
                    user_id: user.id, user_email: user.email, user_name: user.name,
                    booked_by_id: user.id, booked_by_email: user.email,
                    approved: true, checked_in: false, rejected: false, deleted: false,
                    zones: [], extension_data: {},
                };
                return booking.booking_start < end && booking.booking_end > start ? [booking] : [];
            });
            await staffPage.goto('/#/your-bookings?view=list');
            await fixture.ready();
            const schedule = new SchedulePage(staffPage);
            await expect(schedule.card(VISITOR_BOOKING)).toBeVisible();
            // booking-card -> ParkingService resolves hidden parking types from the GET fixture.
            await expect.poll(() => audit.fixtures['hidden types'] ?? 0).toBeGreaterThan(0);
            const modal = await schedule.openDetails(VISITOR_BOOKING);
            await expect(modal).toContainText('E2E visitor edit visibility');
            // The menu always has Cancel (can_cancel), so it opens in both states.
            await schedule.openOverflowMenu(modal);
            const edit = await schedule.menuAction('edit');
            if (required) expect(edit, 'Edit must be offered for a visitor booking').not.toBeNull();
            else expect(edit, 'Edit must not be offered for a visitor booking').toBeNull();
            // Dismiss the menu and wait for its animated overlay to detach.
            // The modal's header close button only closes the dialog; no action runs.
            await staffPage.keyboard.press('Escape');
            await expect(staffPage.locator('.cdk-overlay-container [role="menu"]')).toHaveCount(0);
            await modal.locator('button[mat-dialog-close]').filter({
                has: staffPage.locator('icon', { hasText: /^\s*close\s*$/ }),
            }).click();
            await expect(modal).toHaveCount(0);
        });
}
