// Setting: bookings.allowed_daily_parking_count (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/bookings/src/lib/booking-form.service.ts _checkResourceAvailable
// (the same check as the desk limit, with type 'parking'), run by postForm
// before anything is saved: the user's parking bookings for the booking period
// (GET /api/staff/v1/bookings with period_start, period_end, type=parking,
// email=<user>, limit=1000) are counted, and with
// app.bookings.allowed_daily_parking_count (default 1; 0 = no limit) or more
// the save is refused with BOOKINGS.CLASH_CURRENT_USER.
// Flow: parking-flow-form -> pick a space in parking-select-modal ->
// button[confirm] opens parking-flow-confirm -> its button[confirm] calls
// postForm; a refusal is shown with notifyError and the panel stays open.
//
// Synthetic, browser-only parking inventory (the parking picker lists
// _PARKING_SPACES_ assets on levels tagged 'parking'; loadParkingResources):
// - the real level list GET gains one 'parking' level per building;
// - the parking-space assets GET for that level returns one synthetic space.
// Both scenarios answer the existing-bookings GET with ONE active parking
// booking for the signed-in user in the requested period, for another space.
//   1. limit 1: refused with CLASH_CURRENT_USER; no POST; panel still open.
//   2. limit 2: exactly one parking booking POST, caught and answered in the
//      browser (armBookingPost); the parking success view opens.
// Not tested here: the default (unset = 1) and 0 (no limit).
//
// Safety: the read-only context guard is unchanged and fails any write; only
// scenario 2 arms one booking POST, answered locally. Nothing is saved.
import { expect } from '../../../../../e2e/support/fixtures';
import {
    armBookingPost,
    BOOKING,
    bookingPosts,
    clashCurrentUser,
    getOnly,
    oneDailyBooking,
    ORIGINS,
    prepare,
    test,
} from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

const LEVEL_PREFIX = 'e2e-parking-level-';
const SPACE = 'e2e-parking-space-1';
const OTHER_SPACE = 'e2e-parking-other-space';
const SPACES_TYPE = 'e2e-settings-type-_PARKING_SPACES_';

const SCENARIOS = [
    { label: '1 refuses a second parking booking that day', limit: 1, allowed: false },
    { label: '2 allows a second parking booking that day', limit: 2, allowed: true },
];

for (const scenario of SCENARIOS) {
    test('parking settings: bookings.allowed_daily_parking_count ' + scenario.label, async ({ staffPage, audit }) => {
        const fixture = await prepare(staffPage, audit, {
            ...BOOKING,
            'app.bookings.allowed_daily_parking_count': scenario.limit,
        });
        // One synthetic 'parking' level per real building (browser-only rewrite).
        await staffPage.route((url) => ORIGINS.has(url.origin) &&
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'level', async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            try {
                const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
                if (!response.ok()) return await route.fulfill({ response });
                const body = await response.json();
                const rows: { parent_id?: string }[] = Array.isArray(body) ? body : body?.results ?? [];
                const buildings = [...new Set(rows.map((row) => row.parent_id).filter((id): id is string => !!id))];
                const extra = buildings.map((parent_id) => ({
                    id: LEVEL_PREFIX + parent_id, parent_id,
                    name: 'E2E Parking Level', display_name: 'E2E Parking Level',
                    tags: ['level', 'parking'],
                }));
                audit.fixtures['synthetic parking levels'] = (audit.fixtures['synthetic parking levels'] ?? 0) + extra.length;
                const json = [...rows, ...extra];
                await route.fulfill({ response, json: Array.isArray(body) ? json : { ...body, results: json } });
            } catch (error) {
                audit.monitoring_errors.push('parking level fixture: ' + String(error));
                await route.fallback().catch(() => undefined);
            }
        });
        // The synthetic level's parking spaces: one bookable space.
        await getOnly(staffPage, audit, 'synthetic parking spaces', (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            url.searchParams.get('type_id') === SPACES_TYPE &&
            (url.searchParams.get('zone_id') ?? '').startsWith(LEVEL_PREFIX),
        (url) => [{
            id: SPACE, identifier: 'E2E Parking Space', name: 'E2E Parking Space',
            zone_id: url.searchParams.get('zone_id'), asset_type_id: SPACES_TYPE,
            bookable: true, other_data: {},
        }]);

        await staffPage.goto('/#/book/parking/form');
        await fixture.ready();
        const form = staffPage.locator('parking-flow-form');
        await expect(form.locator('button[confirm]')).toBeVisible();
        const { email } = await fixture.user();

        // The user's existing parking bookings for the requested period.
        const served = await oneDailyBooking(staffPage, audit, { type: 'parking', email, asset_id: OTHER_SPACE });

        // Pick the synthetic space.
        await form.locator('parking-space-list-field button[add-space]').click();
        const picker = staffPage.locator('parking-select-modal');
        await expect(picker).toBeVisible();
        const spaces = picker.locator('parking-space-list li[space]');
        await expect(spaces).toHaveCount(1);
        await spaces.locator('button[select]').click();
        await picker.locator('button[name="toggle-parking"]').click();
        await expect(picker).toHaveCount(0);
        await expect(form.locator('parking-space-list-field div[space]')).toHaveCount(1);

        const posts = bookingPosts(staffPage);
        const armed = scenario.allowed
            ? await armBookingPost(staffPage, (body) =>
                body.booking_type === 'parking' && body.user_email === email && body.asset_id === SPACE)
            : undefined;

        await form.locator('button[confirm]').click();
        const confirm_panel = staffPage.locator('parking-flow-confirm');
        await expect(confirm_panel.locator('button[confirm]')).toBeVisible();
        await confirm_panel.locator('button[confirm]').click();

        await expect.poll(() => served.length, { message: 'existing parking bookings were read' }).toBeGreaterThan(0);
        expect(served[0].period_end).toBeGreaterThan(served[0].period_start);
        if (!scenario.allowed) {
            await expect(staffPage.locator('mat-snack-bar-container')).toContainText(clashCurrentUser(email));
            expect(posts, 'no booking POST is sent').toEqual([]);
            await expect(confirm_panel.locator('button[confirm]')).toBeVisible();
            await expect(staffPage).toHaveURL(/#\/book\/parking\/form$/);
            await expect(staffPage.locator('parking-flow-success')).toHaveCount(0);
        } else {
            await expect.poll(() => armed!.completed, { message: 'the armed booking POST was answered' }).toBe(true);
            expect(posts, 'exactly one booking POST').toHaveLength(1);
            expect(armed!.bodies).toHaveLength(1);
            expect(armed!.bodies[0].asset_id).toBe(SPACE);
            await expect(staffPage).toHaveURL(/#\/book\/parking\/success$/);
            // The success host has no box of its own; check its visible heading.
            await expect(staffPage.locator('parking-flow-success h2')).toBeVisible();
            await expect(confirm_panel).toHaveCount(0);
        }
    });
}
