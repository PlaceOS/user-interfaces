/**
 * VIS-26 — moving a group invite moves every member.
 *
 * A group invite is not one booking: it is a `group` container plus one
 * `visitor` booking per person, linked by `parent_id` (VIS-03). That shape is
 * exactly why this needs its own test — an edit that updated the container, or
 * only the first member, would look completely correct on screen while leaving
 * half a group expected at the old time. Reception would then turn people away.
 *
 * `visitor-edit.spec.ts` covers editing the REASON of a delegated invite and
 * REMOVING a member. Neither touches the time, and nothing else in the suite
 * moves a multi-person booking.
 *
 * ## Created through the UI, on purpose
 *
 * The container's naming and the member links are the app's own doing, and an
 * API-made group would be my reconstruction of them rather than the real thing
 * (the room edit specs learned that lesson the other way round). So the invite
 * is made with the real form, and only the edit is the subject.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
} from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor } from '../../../../e2e/support/visitor/visitor.api';
import {
    ALLOW_EDITING,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { inviteVisitorsViaUI } from '../../../../e2e/support/visitor/visitor.flows';
import { InviteVisitorForm } from '../../../../e2e/support/visitor/invite-form.page';
import { YourBookingsPage } from '../../../../e2e/support/visitor/your-bookings.page';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 4 * DAY;

/** A fixed hour tomorrow, local, as a ms timestamp. */
function tomorrowAt(hour: number): number {
    const day = new Date();
    day.setDate(day.getDate() + 1);
    day.setHours(hour, 0, 0, 0);
    return day.valueOf();
}

function hhmm(unix_seconds: number): string {
    const date = new Date(unix_seconds * 1000);
    const hh = `${date.getHours()}`.padStart(2, '0');
    const mm = `${date.getMinutes()}`.padStart(2, '0');
    return `${hh}:${mm}`;
}

test.describe('moving a group invite', () => {
    test('changing the time moves every member of the group', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const worker = testInfo.parallelIndex;
        const visitors = [
            visitorFor(worker, VISITOR_SLOTS.group_time.memberA),
            visitorFor(worker, VISITOR_SLOTS.group_time.memberB),
        ];
        // 13:00, not 9:00, and this is VIS-B9 shaping a test rather than a
        // finding: a group container is named `${host}[${creation date}]`, so
        // EVERY group invite this host makes today shares one asset id and any
        // overlap is refused. `visitor-group-clash.spec.ts` owns the 9 o'clock
        // hour for the same host, so this one has to sit elsewhere.
        const visit_day = tomorrowAt(13);
        const moved_to = tomorrowAt(16);
        const ids: number[] = [];

        for (const visitor of visitors) {
            await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        }
        // Sweep this host's GROUP CONTAINERS too, before and after.
        //
        // `inviteVisitorsViaUI` returns the member bookings, not the container,
        // so a test that only deletes what it was handed leaves the container
        // behind — and because every group invite this host makes today shares
        // one asset id (VIS-B9), that leftover blocks the NEXT run of this test
        // with a 409. Learned the hard way: a failed run made the next three
        // attempts impossible.
        const sweepContainers = async () => {
            const me = await currentUser(staffApi);
            const containers = await listBookings(
                staffApi,
                'group',
                window_from(),
                window_to(),
            );
            for (const container of containers) {
                if (container.deleted) continue;
                if (!`${container.asset_id}`.startsWith(me.email)) continue;
                await deleteBooking(staffApi, container.id);
            }
        };
        await sweepContainers();
        await useSettings(staffPage, ALLOW_EDITING);

        try {
            const created = await inviteVisitorsViaUI(
                staffPage,
                staffApi,
                visitors,
                'E2E group time',
                { date: visit_day },
            );
            // The flow hands back the CONTAINER as well as the members — three
            // bookings for two visitors. The members are the ones whose asset is
            // a visitor's address; the container's is
            // `${host}[${creation date}]`.
            for (const booking of created) ids.push(booking.id);
            const addresses = visitors.map((v) => v.email.toLowerCase());
            const members = created.filter((b) =>
                addresses.includes(`${b.asset_id}`.toLowerCase()),
            );
            expect(
                members.length,
                `precondition: one booking per visitor, got ${members.length} from ` +
                    `${JSON.stringify(
                        created.map((m) => ({ id: m.id, asset: m.asset_id })),
                    )}. A 409 while creating means another group invite by this host ` +
                    `overlaps — see VIS-B9 and the note above.`,
            ).toBe(2);
            const member_ids = members.map((m) => m.id);

            // The invite's HOUR is whatever the form offered — the flow's `date`
            // option chooses a day, not a time. So the starting hour is read
            // back rather than assumed, and what matters is that it CHANGES for
            // every member.
            const before = await Promise.all(
                member_ids.map((id) => getBooking(staffApi, id)),
            );
            const starts = before.map((b) => hhmm(b.booking_start));
            expect(
                new Set(starts).size,
                `precondition: every member of a group starts at the same time, got ` +
                    `${JSON.stringify(starts)}`,
            ).toBe(1);
            expect(
                starts[0],
                'precondition: the invite does not already start at the time it will ' +
                    'be moved to',
            ).not.toBe(hhmm(Math.floor(moved_to / 1000)));

            // Re-open the invite from the schedule and change only the time.
            const schedule = new YourBookingsPage(staffPage);
            await schedule.open();
            await schedule.showVisitors();
            await schedule.showDayOf(visit_day);
            await schedule.startEdit(member_ids[0]);

            const form = new InviteVisitorForm(staffPage);
            await expect(
                form.chips,
                'the edit form should open with both visitors listed',
            ).toHaveCount(2, { timeout: 30_000 });
            await form.setStartTime(hhmm(Math.floor(moved_to / 1000)));
            await staffPage.waitForTimeout(3_000);
            await form.sendButton.click();

            // EVERY member, not just the one the edit was opened from.
            await expect(async () => {
                const after = await Promise.all(
                    member_ids.map((id) => getBooking(staffApi, id)),
                );
                for (const booking of after) {
                    expect(
                        hhmm(booking.booking_start),
                        `every member of the group must move: booking ${booking.id} is ` +
                            `still at ${hhmm(booking.booking_start)}. A group left ` +
                            `half-moved means reception expects some of the party at the ` +
                            `old time`,
                    ).toBe(hhmm(Math.floor(moved_to / 1000)));
                }
            }).toPass({ timeout: 45_000 });
        } finally {
            for (const id of ids) await deleteBooking(staffApi, id);
            await sweepContainers();
            for (const visitor of visitors) {
                await deleteGuest(staffApi, visitor.email);
                await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
            }
        }
    });
});
