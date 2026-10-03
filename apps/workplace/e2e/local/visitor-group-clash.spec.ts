/**
 * VIS-25 — a host makes two group invites for the same time through the UI.
 *
 * Each invite must get its own application-generated `grp-` container ID so
 * different visitor groups can overlap without an accidental container clash.
 */
import {
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/fixtures';
import {
    deleteGuest,
    releaseVisitor,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    VISITOR_SLOTS,
    visitorFor,
} from '../../../../e2e/support/visitor/visitor.env';
import { inviteVisitorsViaUI } from '../../../../e2e/support/visitor/visitor.flows';
import {
    GROUP_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 3 * DAY;

function tomorrowAt(hour: number): number {
    const day = new Date();
    day.setDate(day.getDate() + 1);
    day.setHours(hour, 0, 0, 0);
    return Math.floor(day.valueOf() / 1000);
}

test.describe('two group invites on one day', () => {
    test('a host can make two group invites for the SAME time', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const worker = testInfo.parallelIndex;
        const morning = [
            visitorFor(worker, VISITOR_SLOTS.group_clash.morning_a),
            visitorFor(worker, VISITOR_SLOTS.group_clash.morning_b),
        ];
        const afternoon = [
            visitorFor(worker, VISITOR_SLOTS.group_clash.afternoon_a),
            visitorFor(worker, VISITOR_SLOTS.group_clash.afternoon_b),
        ];
        const me = await currentUser(staffApi);
        const start = tomorrowAt(9);
        const reasons = [
            uniqueTitle('E2E Group AM'),
            uniqueTitle('E2E Group AM-2'),
        ];
        const ids: number[] = [];
        const containers: string[] = [];

        for (const visitor of [...morning, ...afternoon]) {
            await releaseVisitor(
                staffApi,
                visitor.email,
                window_from(),
                window_to(),
            );
        }
        await useSettings(staffPage, GROUP_VISITOR_MODE);

        try {
            for (const [index, visitors] of [morning, afternoon].entries()) {
                const bookings = await inviteVisitorsViaUI(
                    staffPage,
                    staffApi,
                    visitors,
                    reasons[index],
                    { date: start * 1000, startTime: '09:00', duration: 60 },
                );
                ids.push(...bookings.map((booking) => booking.id));

                // Read both invites back: reaching the success screen alone
                // does not prove every container and member was persisted.
                const stored = await Promise.all(
                    bookings.map((booking) => getBooking(staffApi, booking.id)),
                );
                const groups = stored.filter(
                    (booking) => booking.booking_type === 'group',
                );
                const members = stored.filter(
                    (booking) => booking.booking_type === 'visitor',
                );
                expect(
                    groups,
                    'each invite creates one group container',
                ).toHaveLength(1);
                expect(
                    members,
                    'each visitor has a persisted booking',
                ).toHaveLength(visitors.length);
                expect(
                    members.map((booking) => booking.asset_id).sort(),
                ).toEqual(visitors.map((visitor) => visitor.email).sort());
                expect(groups[0].asset_id).toMatch(/^grp-/);
                containers.push(groups[0].asset_id);
                for (const booking of stored) {
                    expect(booking.user_email).toBe(me.email);
                    expect(booking.booking_start).toBe(start);
                    expect(booking.booking_end).toBe(start + 3600);
                    expect(booking.deleted).toBeFalsy();
                    expect(booking.rejected).toBeFalsy();
                }
                for (const member of members)
                    expect(member.parent_id).toBe(groups[0].id);
            }
            expect(
                containers,
                'overlapping groups have different container assets',
            ).toHaveLength(2);
            expect(new Set(containers).size).toBe(2);
        } finally {
            // Include partial results if the UI helper failed before returning.
            for (const type of ['visitor', 'group']) {
                const bookings = await listBookings(
                    staffApi,
                    type,
                    window_from(),
                    window_to(),
                );
                ids.push(
                    ...bookings
                        .filter((booking) => reasons.includes(booking.title))
                        .map((booking) => booking.id),
                );
            }
            for (const id of new Set(ids)) await deleteBooking(staffApi, id);
            for (const visitor of [...morning, ...afternoon]) {
                await releaseVisitor(
                    staffApi,
                    visitor.email,
                    window_from(),
                    window_to(),
                );
                await deleteGuest(staffApi, visitor.email);
            }
        }
    });
});
