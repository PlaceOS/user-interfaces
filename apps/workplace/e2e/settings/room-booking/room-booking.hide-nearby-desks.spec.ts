import { ROOM_BOOKINGS_MODE, useSettings } from '../../../../../e2e/support/room/room.settings';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type DebugWindow, getOnly, type Settings, test } from '../support/settings-harness';
const CATEGORY = 'e2e-settings-empty-catering';
const ROOM = { id: 'e2e-settings-success-room', email: 'settings-success-room@example.invalid', name: 'Settings success room', zones: [] };

for (const [label, features, hidden, shown] of [
    ['desks feature, hide_nearby_desks false', ['spaces', 'desks'], false, true],
    ['desks feature, hide_nearby_desks true', ['spaces', 'desks'], true, false],
    ['no desks feature, hide_nearby_desks false (control)', ['spaces'], false, false],
] as const) {
    test(`events.hide_nearby_desks success screen with ${label}`, async ({ staffPage, audit }) => {
        assertLocalOnly(APP_URL, BACKEND_URL);
        await staffPage.setViewportSize({ width: 1440, height: 1100 });
        // Browser-local seed of a clearly synthetic, already-"created" meeting.
        const start = new Date(); start.setDate(start.getDate() + 1); start.setHours(10, 0, 0, 0);
        await staffPage.addInitScript((event) => {
            sessionStorage.setItem('PLACEOS.last_modified_event', JSON.stringify(event));
        }, { id: 'e2e-settings-success-event', title: 'Settings success preview', date: start.valueOf(), duration: 60, resources: [ROOM] });
        // SpacePipe._loadSpace: an email id skips showSystem and uses
        // GET /api/engine/v2/systems/with_emails?in=<email>; no match keeps the seeded room.
        await getOnly(staffPage, audit, 'seeded room lookup', (url) => url.pathname === '/api/engine/v2/systems/with_emails' &&
            url.searchParams.get('in') === ROOM.email, () => []);
        // Form state still initialises: keep the calendar provider and catering bootstrap local.
        await getOnly(staffPage, audit, 'calendar provider list', (url) => url.pathname === '/api/staff/v1/calendars', () => []);
        await getOnly(staffPage, audit, 'catering hidden categories', (url) => url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500',
        () => [{ id: CATEGORY, name: '_CATERING_', hidden: true }]);
        await getOnly(staffPage, audit, 'catering types', (url) => url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('category_id') === CATEGORY && url.searchParams.get('limit') === '500', () => []);
        const settings: Settings = {
            ...READ_ONLY_SETTINGS, ...ROOM_BOOKINGS_MODE,
            'app.features': [...features], 'app.chat.enabled': false,
            'app.auto_release': { resources: [] }, 'app.schedule.event_sources': ['api'],
            'app.catering.backend': 'native', 'app.events.hide_nearby_desks': hidden,
            // Desk asset bootstrap (POST of _DESKS_) stays off: metadata desks only.
            'app.desks.use_assets': false,
        };
        await useSettings(staffPage, settings);
        await staffPage.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
        await staffPage.goto('/#/book/meeting/success');
        await expect(staffPage.locator('global-loading [loader]')).toHaveCount(0);
        for (const [key, value] of Object.entries(settings)) {
            await expect.poll(() => staffPage.evaluate((key) => (window as DebugWindow).setting?.(key), key)).toEqual(value);
        }
        const success = staffPage.locator('meeting-flow-success');
        const finished = success.locator('a[name="meeting-created-continue"]');
        // Rendered after the component's 500ms loading delay.
        await expect(finished).toBeVisible();
        // The seeded synthetic meeting (not any real booking) is what is shown.
        await expect(success.locator('main')).toContainText(ROOM.name);
        expect(audit.fixtures['seeded room lookup'] ?? 0, 'the seeded room lookup must be answered locally').toBeGreaterThan(0);
        // The only <button btn> in <main> is BOOK_NEARBY_DESK; it is never clicked.
        await expect(success.locator('main button[btn]')).toHaveCount(shown ? 1 : 0);
        if (shown) await expect(success.locator('main button[btn]')).toBeVisible();
        await expect(staffPage).toHaveURL(/#\/book\/meeting\/success/);
    });
}
