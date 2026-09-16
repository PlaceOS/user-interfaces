/**
 * VIS-25 — a host makes two group invites on the same day.
 *
 * ## `fixme` — VIS-B9, and this test is the guard for the fix
 *
 * A host cannot make two group invites that overlap, whoever the visitors are.
 * The app names a group container `${host_email}[${date the invite was
 * CREATED}]`, so every group invite that host makes on a given day shares ONE
 * asset id — and the backend rightly refuses overlapping bookings on one asset.
 * The second invite fails with `409 Conflicting booking` pointing at a `group`
 * row.
 *
 * What shows it is accidental rather than intended: the same two visits booked
 * at different TIMES, or on different days, are accepted — measured while
 * writing this file, which is why the test overlaps them deliberately. A
 * receptionist booking two nine-o'clock groups for two different teams is an
 * ordinary thing to do, and today the second is refused with a message about a
 * conflicting booking that names nothing the user recognises.
 *
 * The finding has lived in a reproducer since the visitor work
 * (`e2e/support/repro/vis-b9-group-clash.ts`). This is the guard: two
 * non-overlapping group invites on one day, which should both be accepted.
 *
 * API-only: the subject is the container's naming and the backend's rule, and
 * driving the invite form twice would add unrelated ways to fail.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    STAFF_API,
    currentUser,
    deleteBooking,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor } from '../../../../e2e/support/visitor/visitor.api';

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
    test.fixme('a host can make two group invites for the SAME time', async ({
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
        const zones = (
            await Promise.all(
                ['org', 'building', 'level'].map((t) => zonesWithTag(staffApi, t)),
            )
        )
            .flat()
            .map((z) => z.id);
        const ids: number[] = [];

        for (const visitor of [...morning, ...afternoon]) {
            await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        }

        /**
         * A group invite, shaped the way the app builds one: a `group` container
         * named after the host and the day it was created, plus one `visitor`
         * booking per person linked by `parent_id`.
         */
        const groupInvite = async (
            people: { email: string; name: string }[],
            start: number,
            label: string,
        ) => {
            const container_asset = `${me.email}[${new Date().toDateString()}]`;
            const container = await staffApi.post(`${STAFF_API}/bookings`, {
                data: {
                    booking_type: 'group',
                    asset_id: container_asset,
                    asset_name: container_asset,
                    booking_start: start,
                    booking_end: start + 3600,
                    timezone: 'Etc/UTC',
                    user_email: me.email,
                    user_id: me.id,
                    user_name: me.name,
                    title: uniqueTitle(`E2E Group ${label}`),
                    zones,
                },
            });
            const body = await container.text();
            if (container.ok()) ids.push(JSON.parse(body).id);
            return { status: container.status(), body };
        };

        try {
            const first = await groupInvite(morning, tomorrowAt(9), 'AM');
            expect(
                first.status,
                `precondition: the first group invite of the day is accepted. Got ` +
                    `${first.status}: ${first.body.slice(0, 200)}`,
            ).toBe(201);

            // A different set of visitors, the SAME hour, the same host. Two
            // teams arriving at nine is an ordinary thing for a receptionist to
            // book, and this is the case VIS-B9 refuses.
            const second = await groupInvite(afternoon, tomorrowAt(9), 'AM-2');
            expect(
                second.status,
                `a second group invite for the same hour, with DIFFERENT visitors, ` +
                    `must be accepted. Got ${second.status}: ${second.body.slice(0, 200)}. ` +
                    `A 409 here is VIS-B9: the container is named ` +
                    `\`\${host}[\${creation date}]\`, so both invites share one asset id ` +
                    `and the backend refuses the overlap — nothing about the VISITORS ` +
                    `conflicts at all`,
            ).toBe(201);
        } finally {
            for (const id of ids) await deleteBooking(staffApi, id);
            for (const visitor of [...morning, ...afternoon]) {
                await deleteGuest(staffApi, visitor.email);
                await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
            }
        }
    });
});
