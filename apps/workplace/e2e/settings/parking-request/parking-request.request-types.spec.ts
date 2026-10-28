import type { Locator, Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { type Audit, ORIGINS, REQUEST, ROUTE, type Settings, test, untouched } from '../support/settings-harness';
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
async function prepare(page: Page, audit: Audit, settings: Settings) {
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
    // ParkingService.loadBookings: no existing parking booking for today.
    await getOnly(page, audit, 'parking bookings', (url) => url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'parking', () => []);
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
const DEFAULT_TYPES = ['Standard Parking Request', 'P2 Special Needs Request', 'After-hours Private Access Request'];

async function openRequest(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepare(page, audit, { ...REQUEST, ...overrides });
    await page.goto(ROUTE);
    await fixture.ready();
    const root = page.locator('parking-request-form-details');
    await expect(root).toBeVisible();
    await expect(page.locator('parking-request-form button[btn]').filter({ has: page.locator('icon', { hasText: /^\s*send\s*$/ }) })).toBeVisible();
    return root;
}
// Request types are <button role="radio"> rows in the Request Type radiogroup
// (parking-request-form-details.component.ts); name, badge and description sit
// inside the button, which still carries the border-info selection class.
function typeCard(root: Locator, name: string) {
    return root.getByRole('radio').filter({ has: root.page().getByText(name, { exact: true }) });
}

test.describe('parking request form: parking.request_types', () => {

    test('parking.request_types replaces the default request types', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, {
            'app.parking.request_types': [
                { id: 'standard', name: 'E2E Commuter Request', description: 'E2E commuter description', badge: 'E2E Badge' },
                { id: 'e2e-night', name: 'E2E Night Request' },
                { id: 'e2e-hidden', name: 'E2E Group-only Request', groups: ['e2e-no-such-group'] },
            ],
        });
        await expect(typeCard(root, 'E2E Commuter Request')).toContainText('E2E commuter description');
        await expect(typeCard(root, 'E2E Commuter Request')).toContainText('E2E Badge');
        await expect(typeCard(root, 'E2E Night Request')).toHaveCount(1);
        // groups the user lacks filter the type out (request_types in parking-request-form-details.component.ts).
        await expect(typeCard(root, 'E2E Group-only Request')).toHaveCount(0);
        for (const name of DEFAULT_TYPES) await expect(root.getByText(name, { exact: true })).toHaveCount(0);
        await typeCard(root, 'E2E Night Request').click();
        await expect(typeCard(root, 'E2E Night Request')).toHaveClass(/\bborder-info\b/);
        await expect(typeCard(root, 'E2E Commuter Request')).not.toHaveClass(/\bborder-info\b/);
        await untouched(staffPage);
    });

    test('parking.request_types unset shows the three default request types', async ({ staffPage, audit }) => {
        const root = await openRequest(staffPage, audit, { 'app.parking.request_types': null });
        for (const name of DEFAULT_TYPES) await expect(typeCard(root, name)).toHaveCount(1);
        await expect(root.getByText('E2E Commuter Request', { exact: true })).toHaveCount(0);
        await untouched(staffPage);
    });
});
