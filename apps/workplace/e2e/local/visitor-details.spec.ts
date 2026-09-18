/**
 * VIS-20 / VIS-21 — the details carried alongside the visitor's address.
 *
 * None of these change whether an invite saves, which is exactly why they are
 * worth a spec: a field that silently stops being stored looks completely normal
 * on screen. Reception is the one who finds out, at the door.
 *
 * Where they end up is not uniform, and that is the trap:
 *   `international`  -> written explicitly into `extension_data` for visitor
 *                       bookings (`buildBookingExtensionData`)
 *   `pass_number`,
 *   `company`        -> plain form fields, copied into `extension_data`
 *                       automatically by the `Booking` constructor
 *   the visitor      -> `asset_id` / `attendees`, and a separate guest record
 * So all three are asserted on what came back from the backend, not on the form.
 *
 * Pass number and the international tick are both behind `visitors.allow_pass_number`
 * / `visitors.allow_international`, off by default — the classic "only breaks for
 * the customers who switched it on" shape.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    deleteGuest,
    releaseVisitor,
    searchGuests,
    type VisitorBooking,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    ALLOW_EXTRAS,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { inviteVisitorViaUI } from '../../../../e2e/support/visitor/visitor.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

test.describe('visitor invite details', () => {
    test('a pass number and the international flag are stored with the invite', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.details.extras);
        const reason = uniqueTitle('E2E Visit Extras');
        const pass_number = `E2E-PASS-${testInfo.parallelIndex}-${Date.now() % 100000}`;
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, { ...SINGLE_VISITOR_MODE, ...ALLOW_EXTRAS });

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason, {
                passNumber: pass_number,
                international: true,
            });
            booking_id = created.id;

            // `getBooking` returns the shared `Booking`, whose `extension_data`
            // is typed as empty. `VisitorBooking` is the same row with the
            // visitor keys spelled out — see `visitor.api.ts`.
            const stored = (await getBooking(staffApi, booking_id)) as VisitorBooking;
            expect(
                stored.extension_data?.pass_number,
                'the pass number typed into the form must reach the backend — ' +
                    'reception reads this one',
            ).toBe(pass_number);
            expect(
                stored.extension_data?.international,
                'and the international tick must be stored as a real true, not dropped',
            ).toBe(true);

            // The visitor themselves, alongside the extras, so a booking that
            // stored the flags against the wrong person cannot pass.
            expect(stored.asset_id, 'the invite is still for this visitor').toBe(
                visitor.email,
            );
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('the company is stored, and the guest record carries the visitor name', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.details.company);
        const reason = uniqueTitle('E2E Visit Company');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await deleteGuest(staffApi, visitor.email);
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;

            // `getBooking` returns the shared `Booking`, whose `extension_data`
            // is typed as empty. `VisitorBooking` is the same row with the
            // visitor keys spelled out — see `visitor.api.ts`.
            const stored = (await getBooking(staffApi, booking_id)) as VisitorBooking;
            expect(
                stored.extension_data?.company,
                'the company typed into the form must reach the backend',
            ).toBe(visitor.company);
            expect(
                stored.extension_data?.visitor_name,
                'and so must the visitor name, which is stored separately from the address',
            ).toBe(visitor.name);

            // The guest record is a second, independent copy of who is coming —
            // it is what reception and the kiosk read, and it outlives the
            // booking. A name lost here is a nameless person at the door.
            await expect(async () => {
                const guests = await searchGuests(staffApi, visitor.email);
                const guest = guests.find(
                    (g) => g.email?.toLowerCase() === visitor.email.toLowerCase(),
                );
                expect(guest, 'a guest record was created for the visitor').toBeTruthy();
                expect(guest!.name, 'and it carries their name').toBe(visitor.name);
            }).toPass({ timeout: 20_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
