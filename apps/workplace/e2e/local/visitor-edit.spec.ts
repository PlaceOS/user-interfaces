/**
 * VIS-13 / VIS-14 / VIS-15 — editing an invite that already exists.
 *
 * ## How an edit works
 *
 * Edit, in the booking's menu on the schedule, opens the page that makes an
 * invite (`visitor-flow-new`) with the invite filled in. The Single/Multiple
 * toggle and the recent visitors are not shown: an invite keeps the mode it
 * was made in. Confirm saves with one `PATCH` per booking, and the page then
 * shows the same success view as a new invite.
 *
 * Every test saves through `saveEditViaUI`, which does the edit again when
 * REG-09 refuses the save. The three tests start together on three workers,
 * so their saves are concurrent writes: without it one of them was refused
 * (`PATCH` 400 "Expected BeginObject but was EOF") in most parallel runs.
 *
 * ## Why THREE tests in this file, when every other spec has two
 *
 * The third is the guard for VIS-B8. In the form that this page replaced
 * (`invite-visitor-form`), saving an edit in SINGLE-visitor mode threw
 * `_.toJSON is not a function` and sent no request, while the multi-visitor
 * mode saved cleanly. On this page both modes save. Measured for single mode:
 * the edit sends `PATCH /bookings/:id`, gets a 200, and the new reason is
 * stored. It is the same assertion as the first test in the other mode.
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
import {
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { WORKERS, staffEmail } from '../../../../e2e/support/env';
import { expect, test } from '../../../../e2e/support/fixtures';
import {
    deleteGuest,
    releaseGroupContainers,
    releaseVisitor,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    VISITOR_SLOTS,
    visitorFor,
} from '../../../../e2e/support/visitor/visitor.env';
import {
    inviteVisitorViaUI,
    inviteVisitorsViaUI,
    saveEditViaUI,
} from '../../../../e2e/support/visitor/visitor.flows';
import {
    ALLOW_EDITING,
    BOOK_FOR_ANYONE,
    GROUP_VISITOR_MODE,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
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
        test.skip(
            other === mine,
            'needs at least two workers for a second identity',
        );

        const host = {
            email: staffEmail(other),
            name: `E2E Staff ${other} (non-admin)`,
        };
        const visitor = visitorFor(mine, VISITOR_SLOTS.edit.details);
        const reason = uniqueTitle('E2E Edit Host');
        const new_reason = uniqueTitle('E2E Edit Host Updated');
        // Three days out. A visit worth editing is normally one still to come,
        // and it also proves the edit path does not quietly depend on the
        // booking being today.
        const visit_day = daysAhead(3);
        let booking_id: number | undefined;
        const created_ids: number[] = [];

        await releaseVisitor(
            staffApi,
            visitor.email,
            window_from(),
            window_to(),
        );
        await releaseGroupContainers(staffApi, window_from(), window_to());
        await useSettings(staffPage, {
            ...GROUP_VISITOR_MODE,
            ...BOOK_FOR_ANYONE,
            ...ALLOW_EDITING,
        });

        try {
            const me = await currentUser(staffApi);
            // Multi-visitor mode with one guest. The third test makes the
            // same kind of edit in single mode.
            const created = await inviteVisitorsViaUI(
                staffPage,
                staffApi,
                [visitor],
                reason,
                { host, date: visit_day },
            );
            created_ids.push(...created.map((b) => b.id));
            const member = created.find((b) => b.booking_type === 'visitor');
            expect(
                member,
                'the invite created a visitor booking to edit',
            ).toBeTruthy();
            const member_id = member!.id;
            booking_id = member_id;

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
            await saveEditViaUI(staffPage, async (form) => {
                await bookings_page.open();
                await bookings_page.showVisitors();
                await bookings_page.showDayOf(visit_day);
                await bookings_page.startEdit(member_id);

                // The page opens on the one booking and loads the rest of its
                // group afterwards. Until then it is in single mode, and
                // Confirm saves that booking alone: no request is made for
                // the container.
                await expect(
                    form.chips,
                    'the edit form should load with the visitor listed',
                ).toHaveCount(1, { timeout: 30_000 });
                await expect(async () => {
                    await form.reason.fill(new_reason);
                    await expect(form.reason).toHaveValue(new_reason, { timeout: 1_000 });
                }).toPass({ timeout: 30_000 });
            });

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(updated.title, 'the new reason was saved').toBe(
                    new_reason,
                );
            }).toPass({ timeout: 30_000 });

            const updated = await getBooking(staffApi, booking_id);
            expect(
                updated.user_email,
                'the host must survive the edit — it must NOT become whoever had the ' +
                    'form open, which is the regression this test exists for',
            ).toBe(host.email);
            expect(
                updated.user_email,
                'and still differ from the editor',
            ).not.toBe(me.email);
            expect(
                new Date(updated.booking_start * 1000).toDateString(),
                'and the visit must still be on the day it was booked for',
            ).toBe(new Date(visit_day).toDateString());
        } finally {
            for (const id of created_ids)
                await deleteBooking(staffApi, id).catch(() => null);
            await releaseGroupContainers(staffApi, window_from(), window_to());
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('removing one visitor from a group leaves the others alone', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const kept = visitorFor(
            testInfo.parallelIndex,
            VISITOR_SLOTS.edit.memberA,
        );
        const removed = visitorFor(
            testInfo.parallelIndex,
            VISITOR_SLOTS.edit.memberB,
        );
        const reason = uniqueTitle('E2E Edit Group');
        const created_ids: number[] = [];

        for (const v of [kept, removed]) {
            await releaseVisitor(staffApi, v.email, window_from(), window_to());
        }
        await releaseGroupContainers(staffApi, window_from(), window_to());
        await useSettings(staffPage, {
            ...GROUP_VISITOR_MODE,
            ...ALLOW_EDITING,
        });

        try {
            const bookings = await inviteVisitorsViaUI(
                staffPage,
                staffApi,
                [kept, removed],
                reason,
            );
            created_ids.push(...bookings.map((b) => b.id));

            const members = bookings.filter(
                (b) => b.booking_type === 'visitor',
            );
            const kept_booking = members.find((b) => b.asset_id === kept.email);
            const removed_booking = members.find(
                (b) => b.asset_id === removed.email,
            );
            expect(
                kept_booking,
                'precondition: both visitors were booked',
            ).toBeTruthy();
            expect(
                removed_booking,
                'precondition: both visitors were booked',
            ).toBeTruthy();

            // Edit the group from either member — they share a container.
            const kept_id = kept_booking!.id;
            const bookings_page = new YourBookingsPage(staffPage);
            await saveEditViaUI(staffPage, async (form, attempt) => {
                await bookings_page.open();
                await bookings_page.showVisitors();
                await bookings_page.startEdit(kept_id);

                if (attempt === 1) {
                    await expect(
                        form.chips,
                        'the edit form should load with both visitors already listed',
                    ).toHaveCount(2, { timeout: 30_000 });
                } else {
                    // A save that REG-09 refused part-way can already have
                    // removed the visitor, so a retry can only demand the
                    // one that stays.
                    await expect(async () => {
                        await form.chipIndexFor(kept.email);
                    }, 'the edit form should load with the kept visitor listed').toPass({
                        timeout: 30_000,
                    });
                }

                // Not a `hasText` filter on the address: a chip renders only
                // the part before the @, so that matched nothing and read as a
                // broken remove button. `removeVisitorChip` matches what is
                // really shown.
                const still_listed = await form
                    .chipIndexFor(removed.email)
                    .then(() => true)
                    .catch(() => false);
                if (attempt === 1 || still_listed) await form.removeVisitorChip(removed.email);
                await expect(
                    form.chips,
                    'one visitor was removed from the list',
                ).toHaveCount(1);
            });

            // Read the backend, not the screen. A group edit rewrites several
            // rows and the screen shows only what the form thinks it did.
            await expect(async () => {
                const live = (
                    await listBookings(
                        staffApi,
                        'visitor',
                        window_from(),
                        window_to(),
                    )
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
            for (const v of [kept, removed])
                await deleteGuest(staffApi, v.email);
            await releaseGroupContainers(staffApi, window_from(), window_to());
        }
    });

    /**
     * VIS-15 — the SAME edit, in single-visitor mode. The guard for VIS-B8:
     * the old form threw `_.toJSON is not a function` here, sent no request
     * and saved nothing. See the file header.
     */
    test('an invite made in single-visitor mode can be re-saved', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(
            testInfo.parallelIndex,
            VISITOR_SLOTS.edit.details,
        );
        const reason = uniqueTitle('E2E Edit Single');
        const new_reason = uniqueTitle('E2E Edit Single Updated');
        let booking_id: number | undefined;

        await releaseVisitor(
            staffApi,
            visitor.email,
            window_from(),
            window_to(),
        );
        await useSettings(staffPage, {
            ...SINGLE_VISITOR_MODE,
            ...ALLOW_EDITING,
        });

        try {
            const created = await inviteVisitorViaUI(
                staffPage,
                staffApi,
                visitor,
                reason,
            );
            booking_id = created.id;

            const bookings_page = new YourBookingsPage(staffPage);
            await saveEditViaUI(staffPage, async (form) => {
                await bookings_page.open();
                await bookings_page.showVisitors();
                await bookings_page.startEdit(created.id);

                await expect(async () => {
                    await form.reason.fill(new_reason);
                    await expect(form.reason).toHaveValue(new_reason, { timeout: 1_000 });
                }).toPass({ timeout: 30_000 });
            });

            await expect(async () => {
                const updated = await getBooking(staffApi, booking_id!);
                expect(
                    updated.title,
                    'the edit must reach the backend — in single-visitor mode the ' +
                        'old form threw in the browser and sent nothing (VIS-B8)',
                ).toBe(new_reason);
            }).toPass({ timeout: 30_000 });
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
