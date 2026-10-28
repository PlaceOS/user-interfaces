import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Audit, CATEGORIES, type Debug, getOnly, type Identity, ORIGINS, PIXEL, type Settings, test, TYPES } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [], 'app.feature_groups': {},
    'app.hide_landing_customise': true, 'app.hide_landing_widgets': [], 'app.chat.enabled': false, 'app.global_search': false,
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
    await getOnly(page, audit, 'empty landing rooms', (url) => url.pathname === '/api/engine/v2/systems' &&
        !!url.searchParams.get('zone_id') && url.searchParams.get('limit') === '500' &&
        url.searchParams.get('signage') === 'false' &&
        [...url.searchParams.keys()].every((key) => ['zone_id', 'limit', 'signage'].includes(key)), () => []);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
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
const QUERY = 'E2ESettingsColleague';

for (const required of [true, false]) {
    test('colleagues_require_auth ' + required + ' selects the landing colleague search source',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.basic_user_search': false, 'app.colleagues_require_auth': required,
                'app.hide_colleagues': false, 'app.show_quick_book': false, 'app.show_quick_links': false,
            });
            await getOnly(staffPage, audit, 'PlaceOS user list', (url) => url.pathname === '/api/engine/v2/users' &&
                url.searchParams.get('q') === QUERY,
            () => [{ id: 'e2e-settings-user', name: 'E2E Next20 User List', email: 'e2e-settings-user@example.invalid' }]);
            // Provider-backed directory, answered in the browser so it is never contacted.
            await getOnly(staffPage, audit, 'staff directory', (url) => url.pathname === '/api/staff/v1/people' &&
                url.searchParams.get('q') === QUERY,
            () => [{ id: 'e2e-settings-dir', name: 'E2E Next20 Directory', email: 'e2e-settings-dir@example.invalid' }]);
            await staffPage.goto('/#/landing');
            await fixture.ready();
            await expect(staffPage.locator('landing-new')).toHaveCount(1);
            await expect(staffPage.locator('landing-new > div')).toBeVisible();
            const colleagues = staffPage.locator('landing-colleagues-new');
            const open = colleagues.getByRole('button', { name: 'person_add Add Colleagues', exact: true });
            await expect(open).toBeVisible();
            await open.click();
            const modal = staffPage.locator('add-colleagues-modal');
            await expect(modal).toBeVisible();
            const input = modal.locator('input[matInput]');
            await expect(input).toBeEnabled();
            // ngModel -> setOptions -> 500ms debounce. Fill once so no partial
            // query can reach the provider-backed directory between keystrokes.
            await input.fill(QUERY);
            const results = modal.locator('main button');
            const shown = required ? 'E2E Next20 User List' : 'E2E Next20 Directory';
            const hidden = required ? 'E2E Next20 Directory' : 'E2E Next20 User List';
            await expect(results.filter({ hasText: shown })).toHaveCount(1);
            await expect(results.filter({ hasText: shown })).toBeVisible();
            await expect(results.filter({ hasText: hidden })).toHaveCount(0);
            expect(audit.fixtures[required ? 'PlaceOS user list' : 'staff directory'] ?? 0).toBeGreaterThan(0);
            expect(audit.fixtures[required ? 'staff directory' : 'PlaceOS user list'] ?? 0).toBe(0);
            // Selection stays empty; the save action must remain disabled.
            await expect(modal.locator('footer button').last()).toBeDisabled();
            // Never add a colleague: that writes the user's contacts metadata.
            await modal.getByRole('button', { name: 'Cancel', exact: true }).click();
            await expect(modal).toHaveCount(0);
            await expect(staffPage).toHaveURL(/#\/landing$/);
        });
}
