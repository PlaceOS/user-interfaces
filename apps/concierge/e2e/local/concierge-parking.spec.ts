/**
 * CON-PARK-01 / 05 — the concierge parking screens.
 *
 * CON-PARK-05 is a NEW id, not the plan's CON-PARK-04. That row is "parking
 * users and fleet vehicles can be listed and one created", which is a different
 * screen and is still unwritten; listing the SPACES is its own scenario.
 *
 * Same shape as the desk specs, and the same point: every booking here belongs
 * to somebody other than the signed-in concierge, and every assertion ends at
 * the backend rather than at the row.
 *
 * ## The parking listing has no Title column
 *
 * Measured 2026-09-17. Its columns are:
 *
 *     state · date · asset_id · user_name · booked_by_name · plate_number ·
 *     status · actions
 *
 * Every other area in this suite finds its row with `uniqueTitle()`. That does
 * not work here, because the title is never rendered. The only per-test handle
 * left is the SPACE, so these specs book against parking spaces of their own —
 * `E2E Concierge Parking 0…` — created by `ensureParkingSpaces` under a
 * concierge-specific prefix. Sharing `E2E Parking 0..4` with the workplace
 * parking specs would make "the row for my booking" ambiguous the moment both
 * suites had data on the same day.
 *
 * ## Spaces are assets, on a zone tagged BOTH `level` and `parking`
 *
 * `level` is what the org hierarchy reads and `parking` is what
 * `ParkingService.levels` filters on; a zone with one but not the other is
 * invisible to one of them. `ensureParkingSpaces` handles that and is
 * idempotent, so it reuses whatever the workplace parking seeder already built.
 */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    cleanUpBookings,
    createBookingFor,
    ensureParkingSpaces,
} from '../../../../e2e/support/concierge/concierge.api';
import {
    columnIndex,
    LIVE_ONLY,
    readTable,
    waitForAnyRow,
    waitForRow,
} from '../../../../e2e/support/concierge/simple-table.page';
import { roleFor } from '../../../../e2e/support/env';

const PARKING_BOOKINGS_ROUTE = '/#/book/parking/events';
const PARKING_MANAGE_ROUTE = '/#/book/parking/manage';

/** Spaces that belong to the concierge specs alone — see the file header. */
const CONCIERGE_SPACE_PREFIX = 'E2E Concierge Parking';

/** The holder: a plain staff user, never the concierge. */
const HOLDER = roleFor('staff', 1);

/**
 * A window containing now.
 *
 * The listing shows a single day and defaults to today, exactly as the desk one
 * does, so a booking has to be today to be seen at all.
 */
function windowAroundNow(minutes = 45) {
    const now = Math.floor(Date.now() / 1000);
    return { start: now - minutes * 60, end: now + minutes * 60 };
}

test.describe('concierge parking', () => {
    const created: number[] = [];

    test.afterEach(async ({ adminApi }) => {
        await cleanUpBookings(adminApi, created.splice(0));
    });

    test('CON-PARK-01: the parking listing shows another user\'s booking, naming them and the booker', async ({
        adminPage,
        adminApi,
    }) => {
        const { spaces } = await ensureParkingSpaces(
            adminApi,
            1,
            CONCIERGE_SPACE_PREFIX,
        );
        const space = spaces[0];
        const { start, end } = windowAroundNow();

        const booking = await createBookingFor(adminApi, {
            type: 'parking',
            asset_id: space.id,
            asset_name: space.name,
            title: 'CON-PARK-01',
            start,
            end,
            holder: { email: HOLDER.email },
        });
        created.push(booking.id);

        await adminPage.goto(PARKING_BOOKINGS_ROUTE);
        // The space name, not a title — see the file header. `LIVE_ONLY`
        // because cancelled bookings stay on this listing forever, so by the
        // second run the space name matches this booking AND last run's
        // cancelled one, and `waitForRow` refuses to guess between them.
        const row = await waitForRow(adminPage, space.name, { where: LIVE_ONLY });
        const snapshot = await readTable(adminPage);

        expect(
            row[columnIndex(snapshot, 'user_name')],
            'the parking row must name the person the space is booked FOR',
        ).toContain(HOLDER.email);
        expect(
            row[columnIndex(snapshot, 'booked_by_name')],
            'and the concierge who booked it',
        ).toContain('support@place.tech');

        // The row is proof the screen shows it; this is proof it is the booking
        // we made, and that the listing is not showing a stale copy.
        const stored = await adminApi.get(`/api/staff/v1/bookings/${booking.id}`);
        expect(stored.ok(), 'the booking should still exist on the backend').toBe(
            true,
        );
        expect((await stored.json()).user_email).toBe(HOLDER.email);
    });

    test('CON-PARK-05: parking management lists the seeded spaces', async ({
        adminPage,
        adminApi,
    }) => {
        const { spaces } = await ensureParkingSpaces(
            adminApi,
            2,
            CONCIERGE_SPACE_PREFIX,
        );

        await adminPage.goto(PARKING_MANAGE_ROUTE);
        const snapshot = await waitForAnyRow(adminPage);

        // Asserting on the names rather than a count: a page listing the right
        // NUMBER of the wrong things would pass a count check.
        const listed = snapshot.rows.flat().join(' | ');
        for (const space of spaces) {
            expect(
                listed,
                `parking management should list the space "${space.name}". ` +
                    `Columns rendered: ${snapshot.column_ids.join(', ')}`,
            ).toContain(space.name);
        }
    });
});
