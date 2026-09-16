/**
 * VIS-13 / VIS-14 / VIS-15 — editing an invite that already exists.
 *
 * ## Which invites can actually be edited
 *
 * Editing works in MULTI-visitor mode, which is what the app ships with
 * (`bookings.multiple_visitors` defaults to true). It is broken in
 * SINGLE-visitor mode: pressing Update throws `_.toJSON is not a function`, no
 * request is sent, and the user sees only that raw string. That is VIS-B8, and
 * the third test here is the placeholder for it.
 *
 * Measured, all three created and edited through the app — multi with one
 * visitor and with two both save cleanly (`PATCH`, "updated successfully");
 * single fails every time, on today's date and on a future one alike. The mode
 * decides it, not the date and not the number of people.
 *
 * Cause: `Booking` declares `attendees` as `User[]` but assigns the raw server
 * JSON to it (`booking.class.ts`), so at runtime they are plain objects. In
 * single-visitor mode the edit path hands that straight to the form's `assets`
 * (`invite-visitor-form.component.ts`), and saving calls `.toJSON()` on every
 * entry (`booking-form.service.ts`). Plain JSON has no such method. The
 * multi-visitor paths escape it because they rebuild each person with
 * `new User(...)` first.
 *
 * ## Why THREE tests in this file, when every other spec has two
 *
 * The third is a deliberate placeholder for VIS-B8 and is `fixme`, so it costs
 * nothing per run. Fold it away once the app is fixed: at that point it is the
 * same assertion as the first test with one setting changed.
 *
 * ## What the first two guard
 *
 *  - Re-saving a DELEGATED invite used to overwrite the host with whoever had
 *    the form open. The booker is usually the one editing, so the bug quietly
 *    reassigned the visit to them. This one is booked for a FUTURE day as well,
 *    since an invite worth editing is usually one that has not happened yet.
 *  - Removing one visitor from a group used to take others with it, or leave the
 *    removed one behind (PPT-2634, PPT-2638). A group edit rewrites several
 *    bookings at once, so "it looked right on screen" is worth nothing here —
 *    every assertion reads the backend.
 *
 * Editing is off by default (`visitors.allow_editing`), which is why the Edit
 * action simply is not in the menu unless a spec turns it on.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    deleteGuest,
    releaseGroupContainers,
    releaseVisitor,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    ALLOW_EDITING,
    BOOK_FOR_ANYONE,
    GROUP_VISITOR_MODE,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import {
    inviteVisitorViaUI,
    inviteVisitorsViaUI,
} from '../../../../e2e/support/visitor/visitor.flows';
import { InviteVisitorForm } from '../../../../e2e/support/visitor/invite-form.page';
import { YourBookingsPage } from '../../../../e2e/support/visitor/your-bookings.page';

const DAY = 86_400;
// Wide enough to sweep the future-dated invite below. A window that only
// reached +2 days would leave a booking from a crashed run sitting on day 3,
// invisible to every later sweep.
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 7 * DAY;

/** A fixed hour, some days out, in local time — the browser shares this clock. */
function daysAhead(days: number, hour = 10): number {
    const day = new Date();
    day.setDate(day.getDate() + days);
    day.setHours(hour, 0, 0, 0);
    return day.valueOf();
}

test.describe('editing a visitor invite', () => {
    test('re-saving a delegated invite for a future day keeps the original host', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const other = (mine + 1) % WORKERS;
        test.skip(other === mine, 'needs at least two workers for a second identity');

        const host = { email: staffEmail(other), name: `E2E Staff ${other} (non-admin)` };
        const visitor = visitorFor(mine, VISITOR_SLOTS.edit.details);
        const reason = uniqueTitle('E2E Edit Host');
        const new_reason = uniqueTitle('E2E Edit Host Updated');
        // Three days out. A visit worth editing is normally one still to come,
        // and it also proves the edit path does not quietly depend on the
        // booking being today.
        const visit_day = daysAhead(3);
        let booking_id: number | undefined;
        const created_ids: number[] = [];

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await releaseGroupContainers(staffApi, window_from(), window_to());
        await useSettings(staffPage, {
            ...GROUP_VISITOR_MODE,
            ...BOOK_FOR_ANYONE,
            ...ALLOW_EDITING,
        });

        try {
            const me = await currentUser(staffApi);
            // Multi-visitor mode with one guest: the mode the app ships with,
            // and the one where saving an edit works at all (VIS-B8).
            const created = await inviteVisitorsViaUI(
                staffPage,
                staffApi,
                [visitor],
                reason,
                { host, date: visit_day },
            );
            created_ids.push(...created.map((b) => b.id));
            const member = created.find((b) => b.booking_type === 'visitor');
            expect(member, 'the invite created a visitor booking to edit').toBeTruthy();
            booking_id = member!.id;

            const stored = await getBooking(staffApi, booking_id);
            expect(
                stored.user_email,
                'precondition: the invite starts out hosted by somebody else',
            ).toBe(host.email);
            expect(
                new Date(stored.booking_start * 1000).toDateString(),
                'precondition: the invite really is on the future day we picked',
            ).toBe(new Date(visit_day).toDateString());

            // Re-open it and change only the reason. The schedule opens on
            // today, so it has to be walked to the visit's own day first.
            const bookings_page = new YourBookingsPage(staffPage);
            await bookings_page.open();
            await bookings_page.showVisitors();
            await bookings_page.showDayOf(visit_day);
            await bookings_page.startEdit(booking_id);

            const form = new InviteVisitorForm(staffPage);
            await expect(async () => {
                await form.reason.fill(new_reason);
                expect(await form.reason.inputValue()).toBe(new_reason);
            }).toPass({ timeout: 30_000 });
            await form.sendButton.click();

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(updated.title, 'the new reason was saved').toBe(new_reason);
            }).toPass({ timeout: 30_000 });

            const updated = await getBooking(staffApi, booking_id);
            expect(
                updated.user_email,
                'the host must survive the edit — it must NOT become whoever had the ' +
                    'form open, which is the regression this test exists for',
            ).toBe(host.email);
            expect(updated.user_email, 'and still differ from the editor').not.toBe(
                me.email,
            );
            expect(
                new Date(updated.booking_start * 1000).toDateString(),
                'and the visit must still be on the day it was booked for',
            ).toBe(new Date(visit_day).toDateString());
        } finally {
            for (const id of created_ids) await deleteBooking(staffApi, id).catch(() => null);
            await releaseGroupContainers(staffApi, window_from(), window_to());
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('removing one visitor from a group leaves the others alone', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const kept = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.edit.memberA);
        const removed = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.edit.memberB);
        const reason = uniqueTitle('E2E Edit Group');
        const created_ids: number[] = [];

        for (const v of [kept, removed]) {
            await releaseVisitor(staffApi, v.email, window_from(), window_to());
        }
        await releaseGroupContainers(staffApi, window_from(), window_to());
        await useSettings(staffPage, { ...GROUP_VISITOR_MODE, ...ALLOW_EDITING });

        try {
            const bookings = await inviteVisitorsViaUI(
                staffPage,
                staffApi,
                [kept, removed],
                reason,
            );
            created_ids.push(...bookings.map((b) => b.id));

            const members = bookings.filter((b) => b.booking_type === 'visitor');
            const kept_booking = members.find((b) => b.asset_id === kept.email);
            const removed_booking = members.find((b) => b.asset_id === removed.email);
            expect(kept_booking, 'precondition: both visitors were booked').toBeTruthy();
            expect(removed_booking, 'precondition: both visitors were booked').toBeTruthy();

            // Edit the group from either member — they share a container.
            const bookings_page = new YourBookingsPage(staffPage);
            await bookings_page.open();
            await bookings_page.showVisitors();
            await bookings_page.startEdit(kept_booking!.id);

            const form = new InviteVisitorForm(staffPage);
            await expect(
                form.chips,
                'the edit form should load with both visitors already listed',
            ).toHaveCount(2, { timeout: 30_000 });

            // Not a `hasText` filter on the address: a chip renders only the
            // part before the @, so that matched nothing and read as a broken
            // remove button. `removeVisitorChip` matches what is really shown.
            await form.removeVisitorChip(removed.email);
            await expect(form.chips, 'one visitor was removed from the list').toHaveCount(1);

            await form.sendButton.click();

            // Read the backend, not the screen. A group edit rewrites several
            // rows and the screen shows only what the form thinks it did.
            await expect(async () => {
                const live = (
                    await listBookings(staffApi, 'visitor', window_from(), window_to())
                ).filter((b) => !b.deleted);
                const addresses = live.map((b) => b.asset_id);
                expect(
                    addresses,
                    'the visitor we removed must no longer hold a booking',
                ).not.toContain(removed.email);
                expect(
                    addresses,
                    'and the one we kept must still have theirs — removing a visitor ' +
                        'must not take the rest of the group with it (PPT-2634)',
                ).toContain(kept.email);
            }).toPass({ timeout: 30_000 });
        } finally {
            const leftovers = await listBookings(
                staffApi,
                'visitor',
                window_from(),
                window_to(),
            );
            for (const b of leftovers) {
                if ([kept.email, removed.email].includes(b.asset_id)) {
                    await deleteBooking(staffApi, b.id);
                }
            }
            for (const id of created_ids) await deleteBooking(staffApi, id);
            for (const v of [kept, removed]) await deleteGuest(staffApi, v.email);
            await releaseGroupContainers(staffApi, window_from(), window_to());
        }
    });

    /**
     * VIS-15 — the SAME edit, in single-visitor mode. This is the one that is
     * broken (VIS-B8): `_.toJSON is not a function`, no request sent, nothing
     * saved. Kept as `fixme` so the bug has a home in the suite rather than
     * only in a document.
     *
     * When the app is fixed, drop the `fixme` and this should pass as written.
     * Evidence it is the mode and not anything else: the first test above does
     * the same thing in multi-visitor mode and is green.
     */
    test.fixme('an invite made in single-visitor mode can be re-saved', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.edit.details);
        const reason = uniqueTitle('E2E Edit Single');
        const new_reason = uniqueTitle('E2E Edit Single Updated');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, { ...SINGLE_VISITOR_MODE, ...ALLOW_EDITING });

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;

            const bookings_page = new YourBookingsPage(staffPage);
            await bookings_page.open();
            await bookings_page.showVisitors();
            await bookings_page.startEdit(booking_id);

            const form = new InviteVisitorForm(staffPage);
            await expect(async () => {
                await form.reason.fill(new_reason);
                expect(await form.reason.inputValue()).toBe(new_reason);
            }).toPass({ timeout: 30_000 });
            await form.sendButton.click();

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(
                    updated.title,
                    'the edit must reach the backend — in single-visitor mode it ' +
                        'currently throws in the browser and sends nothing (VIS-B8)',
                ).toBe(new_reason);
            }).toPass({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
