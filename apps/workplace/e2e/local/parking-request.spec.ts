/**
 * PARK-15 — the parking REQUEST flow.
 *
 * A different route and a different intent from booking a space:
 * `/book/parking-request/form` does not pick a space at all. `submitRequest()`
 * stores a parking booking against **`unallocated-<random>`** with the name
 * "Parking Request", which somebody allocates a real space to later.
 *
 * That makes it worth its own test for a reason the booking specs cannot cover:
 * an unallocated booking is the one kind that holds NO asset, so a change that
 * started validating `asset_id` against real spaces would break requests while
 * every other parking test stayed green.
 *
 * Asserted on the stored booking, not on the success screen.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    STAFF_API,
    currentUser,
    deleteBooking,
    getBooking,
    uniqueTitle,
} from '../../../../e2e/support/api';
import {
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';

test.describe('parking requests', () => {
    test('a submitted request is stored as an unallocated parking booking', async ({
        staffPage,
        staffApi,
    }) => {
        const title = uniqueTitle('E2E Parking Request');
        const plate = `E2E-${Date.now() % 10000}`;
        let booking_id: number | undefined;

        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            const me = await currentUser(staffApi);
            await staffPage.goto('/#/book/parking-request/form');
            const form = staffPage.locator('parking-request-form');
            await expect(
                form,
                'the parking request form never rendered — is the `parking` feature ' +
                    'enabled for this org?',
            ).toBeVisible({ timeout: 30_000 });

            // Fill what the form offers. Both fields are optional depending on
            // settings, so each is set only if it is there.
            const title_input = staffPage.locator('input[name$=".title"]').first();
            if (await title_input.count()) await title_input.fill(title);
            const plate_input = staffPage.locator('input[name$=".plate_number"]').first();
            if (await plate_input.count()) await plate_input.fill(plate);
            await staffPage.waitForTimeout(1_500);

            const sent = staffPage
                .waitForResponse(
                    (r) =>
                        r.url().includes(`${STAFF_API}/bookings`) &&
                        r.request().method() === 'POST',
                    { timeout: 30_000 },
                )
                .catch(() => null);
            await form.locator('button[confirm]').first().click({ timeout: 10_000 });
            const response = await sent;
            if (!response) {
                const message = await staffPage
                    .locator('.cdk-overlay-container')
                    .innerText()
                    .catch(() => '');
                throw new Error(
                    `the request was submitted and nothing was sent. On screen: ` +
                        `"${message.replace(/\s+/g, ' ').trim().slice(0, 250)}"`,
                );
            }
            const body = await response.text();
            expect(
                response.status(),
                `submitting the request failed: ${body.slice(0, 250)}`,
            ).toBeLessThan(300);
            booking_id = JSON.parse(body).id;

            const stored: any = await getBooking(staffApi, booking_id!);
            expect(
                stored.booking_type,
                'a request is stored as a parking booking',
            ).toBe('parking');
            expect(
                `${stored.asset_id}`,
                'and against an UNALLOCATED asset — that is what makes it a request ' +
                    'rather than a booking, and the only parking booking that holds no ' +
                    'real space',
            ).toContain('unallocated');
            expect(
                `${stored.user_email}`.toLowerCase(),
                'for the person who asked',
            ).toBe(me.email.toLowerCase());
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
        }
    });
});
