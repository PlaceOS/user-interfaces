/**
 * VIS-03 / VIS-04 — invite SEVERAL visitors at once, through the full UI.
 *
 * This is the mode workplace ships with (`bookings.multiple_visitors` defaults
 * to true), and it is not "the single flow, twice". One send produces N+1
 * records:
 *
 *   - a GROUP CONTAINER booking, `booking_type: 'group'`, carrying the shared
 *     group reference in `extension_data`;
 *   - one `booking_type: 'visitor'` booking PER visitor, each with `parent_id`
 *     pointing at that container.
 *
 * Two consequences that shaped this file:
 *
 *  - `GET /bookings?type=visitor` does NOT return the container, because the
 *    container is type `group`. Expecting N+1 from a visitor-typed listing is
 *    the obvious mistake, and the second test exists to stop anyone making it.
 *  - Waiting on a single POST response would assert against the container and
 *    silently ignore every member, so `inviteVisitorsViaUI` collects them all.
 *
 * The container-to-member link is what PPT-2638 broke and fixed, so asserting
 * on `parent_id` rather than merely on "three bookings exist" is the point.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    deleteGuest,
    releaseGroupContainers,
    releaseVisitor,
    searchGuests,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    GROUP_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { inviteVisitorsViaUI } from '../../../../e2e/support/visitor/visitor.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

/**
 * Sweep both halves. `releaseVisitor` lists `type=visitor` and so cannot see a
 * group container; a run that died between creating the container and its
 * members leaves one orphaned (VIS-B7), and without this they accumulate.
 */
async function sweep(api: Parameters<typeof releaseVisitor>[0], emails: string[]) {
    for (const email of emails) {
        await releaseVisitor(api, email, window_from(), window_to());
    }
    await releaseGroupContainers(api, window_from(), window_to());
}

test.describe('visitor invite (group)', () => {
    test('inviting two visitors creates a container plus one booking each', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitors = [
            visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.group.a),
            visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.group.b),
        ];
        const reason = uniqueTitle('E2E Group Visit');
        const created_ids: number[] = [];

        await sweep(staffApi, visitors.map((v) => v.email));
        await useSettings(staffPage, GROUP_VISITOR_MODE);

        try {
            const bookings = await inviteVisitorsViaUI(staffPage, staffApi, visitors, reason);
            created_ids.push(...bookings.map((b) => b.id));

            const containers = bookings.filter((b) => b.booking_type === 'group');
            const members = bookings.filter((b) => b.booking_type === 'visitor');

            expect(containers, 'exactly one group container was created').toHaveLength(1);
            expect(members, 'one visitor booking per invited visitor').toHaveLength(
                visitors.length,
            );

            // Assert on `extension_data`, not `asset_name`. The UI sets
            // `asset_name: 'Group Booking'` when it builds the container, but
            // staff-api's Booking model has no such column and never echoes it
            // back — asserting on it compares against `undefined` and passes or
            // fails for the wrong reason.
            const container = containers[0];
            expect(
                container.extension_data?.group_resource_type,
                'the container records what kind of group it holds',
            ).toBe('visitor');
            expect(
                container.extension_data?.group,
                'the container carries the group reference its members share',
            ).toBeTruthy();

            // The link between members and container is the whole point of a
            // group container — PPT-2638 is exactly this going wrong.
            for (const member of members) {
                expect(
                    member.parent_id,
                    `visitor booking ${member.id} must point at the group container`,
                ).toBe(container.id);
            }

            // Each visitor against THEIR OWN address, not the host's and not the
            // first visitor's (PPT-2635).
            expect(
                members.map((m) => m.asset_id).sort(),
                'every visitor is stored against their own address',
            ).toEqual(visitors.map((v) => v.email).sort());

            // And a guest record each — the half reception actually reads.
            for (const v of visitors) {
                expect(
                    (await searchGuests(staffApi, v.email)).map((g) => g.email),
                    `a guest record was created for ${v.email}`,
                ).toContain(v.email);
            }
        } finally {
            for (const id of created_ids) await deleteBooking(staffApi, id);
            for (const v of visitors) await deleteGuest(staffApi, v.email);
        }
    });

    test('the visitor listing returns the members but not the container', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitors = [
            visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.group.a),
            visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.group.b),
        ];
        const reason = uniqueTitle('E2E Group Listing');
        const created_ids: number[] = [];

        await sweep(staffApi, visitors.map((v) => v.email));
        await useSettings(staffPage, GROUP_VISITOR_MODE);

        try {
            const bookings = await inviteVisitorsViaUI(staffPage, staffApi, visitors, reason);
            created_ids.push(...bookings.map((b) => b.id));

            const [container] = bookings.filter((b) => b.booking_type === 'group');
            const members = bookings.filter((b) => b.booking_type === 'visitor');
            expect(
                container,
                'precondition: the group invite produced a container booking',
            ).toBeTruthy();

            const listed = (
                await listBookings(staffApi, 'visitor', window_from(), window_to())
            ).map((b) => b.id);

            for (const member of members) {
                expect(listed, `member booking ${member.id} is in the listing`).toContain(
                    member.id,
                );
            }
            expect(
                listed,
                'the container is `booking_type: group`, so a visitor-typed listing must ' +
                    'not include it — code that expects N+1 here is counting the ' +
                    'container as a visitor',
            ).not.toContain(container.id);
        } finally {
            for (const id of created_ids) await deleteBooking(staffApi, id);
            for (const v of visitors) await deleteGuest(staffApi, v.email);
        }
    });
});
