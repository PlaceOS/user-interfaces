/**
 * YB-08 — Edit from Your Bookings opens the right form for the booking.
 *
 * The schedule lists every booking type together and has to route each one to a
 * different place (`schedule.component.ts`): desks, parking, lockers and
 * visitors go to `/book/<type>` through `editBooking`, while room bookings are
 * rebuilt into calendar events and go to the meeting form through `edit`.
 *
 * One routing table, four destinations, and the failure is silent: press Edit on
 * a desk booking, land on an EMPTY desk form, and you have quietly made a second
 * booking instead of changing the first. Nothing else in the suite covers the
 * routing itself — the room specs use the room branch and the visitor specs the
 * visitor branch, each in isolation.
 *
 * So these two tests are about arriving in the right place with the booking
 * loaded, not about saving: what a saved edit stores is the business of
 * `desk-edit`, `visitor-edit` and `room-edit`.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, uniqueTitle } from '../../../../e2e/support/api';
import { deskFor } from '../../../../e2e/support/env';
import {
    SCHEDULE_DAYS,
    dayBoundsOn,
    scheduleVisitorFor,
    slotOn,
} from '../../../../e2e/support/bookings/bookings.env';
import {
    createBookingViaApi,
    readBooking,
    deleteGuestByEmail,
    releaseFor,
} from '../../../../e2e/support/bookings/bookings.api';
import { SchedulePage } from '../../../../e2e/support/bookings/schedule.page';
import {
    ALLOW_VISITOR_EDITING,
    useSettings,
} from '../../../../e2e/support/bookings/bookings.settings';

const DAY = 86_400;

/**
 * The window a spec sweeps and lists over: EXACTLY its own day.
 *
 * Not the day plus or minus one. A wider window reaches into the day another
 * spec file owns, and the sweep that lets a spec recover from its own past
 * failures then clears somebody else's booking instead.
 */
function dayWindow(dayOffset: number) {
    return dayBoundsOn(dayOffset);
}

test.describe('your bookings — editing', () => {
    test('editing a desk booking lands on the desk form, with the booking loaded', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const day = SCHEDULE_DAYS.edit;
        const slot = slotOn(day, 9);
        const { from, to } = dayWindow(day);
        const title = uniqueTitle('E2E YB Edit Desk');
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'desk', desk.id, from, to);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                title,
                start: slot.start,
                end: slot.end,
            });
            booking_id = booking.id;

            const schedule = new SchedulePage(staffPage);
            schedule.expectEditForm('desk-flow-form');
            await schedule.open();
            await schedule.showBooking(booking_id, slot.date_ms, ['desk'], async () => {
                const now = await readBooking(staffApi, booking_id!);
                return `id ${now.id} deleted=${now.deleted} start=${new Date(
                    now.booking_start * 1000,
                ).toString()}`;
            });
            await schedule.startEdit(booking_id);

            // The URL is half the assertion: landing on the desk form by
            // accident from somewhere else would satisfy the element check.
            await expect(
                staffPage,
                'editing a desk booking should route to the desk flow',
            ).toHaveURL(/#\/book\/desk/, { timeout: 30_000 });

            // And the form must have the booking IN it. An empty form is the
            // dangerous outcome: saving it makes a second booking rather than
            // changing this one.
            await expect(
                staffPage.locator('input[name$=".title"]').first(),
                'the desk form should be pre-filled with the booking being edited',
            ).toHaveValue(title, { timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseFor(staffApi, 'desk', desk.id, from, to);
        }
    });

    test('editing a visitor invite lands on the visitor form', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = scheduleVisitorFor(testInfo.parallelIndex, 'edit');
        const day = SCHEDULE_DAYS.edit;
        const slot = slotOn(day, 15);
        const { from, to } = dayWindow(day);
        const title = uniqueTitle('E2E YB Edit Visit');
        let booking_id: number | undefined;

        await releaseFor(staffApi, 'visitor', visitor.email, from, to);
        // Without this the menu has no Edit item at all — `can_edit` is false for
        // a visitor booking unless editing is switched on.
        await useSettings(staffPage, ALLOW_VISITOR_EDITING);

        try {
            const booking = await createBookingViaApi(staffApi, {
                type: 'visitor',
                asset_id: visitor.email,
                asset_name: visitor.name,
                title,
                start: slot.start,
                end: slot.end,
                attendees: [{ name: visitor.name, email: visitor.email }],
            });
            booking_id = booking.id;

            const schedule = new SchedulePage(staffPage);
            schedule.expectEditForm('invite-visitor-form');
            await schedule.open();
            await schedule.showBooking(booking_id, slot.date_ms, ['visitor']);
            await schedule.startEdit(booking_id);

            await expect(
                staffPage,
                'editing a visitor invite should route to the visitor flow',
            ).toHaveURL(/#\/book\/visitor/, { timeout: 30_000 });

            // The visitor is the invite's identity, so the form arriving without
            // them is the same failure as an empty desk form.
            await expect(
                staffPage.locator('invite-visitor-form'),
                'the visitor form should carry the invited visitor',
            ).toContainText(visitor.email.split('@')[0], { timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuestByEmail(staffApi, visitor.email);
            await releaseFor(staffApi, 'visitor', visitor.email, from, to);
        }
    });
});
