/**
 * VIS-24 — the same visitor cannot be booked twice into one slot.
 *
 * ## `fixme` — VIS-B1, and this test is the guard for the fix
 *
 * The backend accepts the same visitor twice for the same window, returning
 * **201 both times**. A desk refuses this, and product's expectation is that a
 * visitor should too — two invites for one person at one time means reception
 * expects them twice and a pass may be issued twice.
 *
 * The finding has lived in a throwaway reproducer
 * (`e2e/support/repro/vis-b1-duplicate-visitor.ts`) since the visitor work. That
 * script proves the behaviour once; it does not protect the fix. This does: when
 * the backend starts refusing the second invite, this test goes green and stays
 * that way.
 *
 * Written API-only on purpose. The subject is the backend's rule, and driving
 * the invite form twice would add unrelated ways to fail.
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
import {
    createBookingViaApi,
    deleteGuest,
    releaseVisitor,
} from '../../../../e2e/support/visitor/visitor.api';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 3 * DAY;

/** A fixed hour tomorrow, local, as unix seconds. */
function tomorrowAt(hour: number): number {
    const day = new Date();
    day.setDate(day.getDate() + 1);
    day.setHours(hour, 0, 0, 0);
    return Math.floor(day.valueOf() / 1000);
}

test.describe('the same visitor twice', () => {
    test.fixme('a second invite for the same visitor and slot is refused', async ({
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.duplicate.same);
        const start = tomorrowAt(9);
        const me = await currentUser(staffApi);
        const zones = (
            await Promise.all(
                ['org', 'building', 'level'].map((t) => zonesWithTag(staffApi, t)),
            )
        )
            .flat()
            .map((z) => z.id);
        const ids: number[] = [];

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());

        const invite = (title: string) => ({
            booking_type: 'visitor',
            asset_id: visitor.email,
            asset_name: visitor.name,
            booking_start: start,
            booking_end: start + 3600,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title,
            zones,
            attendees: [{ name: visitor.name, email: visitor.email }],
        });

        try {
            const first = await createBookingViaApi(
                staffApi,
                invite(uniqueTitle('E2E Visit Dup 1')),
            );
            ids.push(first.id);

            // The second one, identical in every way that matters.
            const res = await staffApi.post(`${STAFF_API}/bookings`, {
                data: invite(uniqueTitle('E2E Visit Dup 2')),
            });
            const body = await res.text();
            if (res.ok()) ids.push(JSON.parse(body).id);

            expect(
                res.status(),
                `the same visitor in the same window must be refused — a desk is ` +
                    `(REG-02 / 409), and two invites for one person at one time mean ` +
                    `reception expects them twice. Got ${res.status()}: ` +
                    `${body.slice(0, 200)}`,
            ).toBe(409);
        } finally {
            for (const id of ids) await deleteBooking(staffApi, id);
            await deleteGuest(staffApi, visitor.email);
            await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        }
    });
});
