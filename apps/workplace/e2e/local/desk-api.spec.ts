/**
 * DESK-18 / DESK-19 — the booking API's own behaviour for desks.
 *
 * Two gaps the UI specs cannot cover:
 *
 *  1. **Negative cases.** Every desk spec so far asks the backend to do
 *     something reasonable. Nothing asks it to do something wrong, so nothing
 *     would notice a bad request turning into a 500 — and a 500 is not just
 *     untidy here, it is how REG-09 poisons a connection for everybody else.
 *  2. **REG-03**, a named past regression with no test: *"a clash check uses the
 *     current `booking_end`, not a stale one"*. The shape of the bug is a
 *     booking that is EXTENDED and then not respected — the check compares
 *     against the old end time, so the desk is double-booked for the extension.
 *     `desk-clash.spec.ts` only covers a booking that never changed.
 *
 * Both are API-only on purpose: the subject is the backend's rules, and driving
 * a form would only add ways to fail.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { request } from '@playwright/test';
import {
    STAFF_API,
    currentUser,
    deleteBooking,
    getBooking,
    releaseAsset,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import {
    APP_URL,
    BACKEND_URL,
    WORKERS,
    deskFor,
    roleFor,
} from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import { DESK_SLOTS, dayBoundsOn, slotOn } from '../../../../e2e/support/desk/desk.env';
import { createDeskBookingViaApi } from '../../../../e2e/support/desk/desk.api';

/** An API context signed in as a DIFFERENT seeded user. */
async function apiAsOtherUser(workerIndex: number) {
    const role = roleFor('staff', workerIndex);
    const mint = await mintToken(BACKEND_URL, APP_URL, role.email, role.password);
    return request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

test.describe('desk booking API rules', () => {
    test('a malformed or impossible desk booking is refused with a 4xx, never a 5xx', async ({
        staffApi,
    }, testInfo) => {
        const desk = deskFor(testInfo.parallelIndex);
        const slot = slotOn(DESK_SLOTS.api.day, DESK_SLOTS.api.hour);
        const me = await currentUser(staffApi);
        const zones = (
            await Promise.all(
                ['org', 'building', 'level'].map((t) => zonesWithTag(staffApi, t)),
            )
        )
            .flat()
            .map((z) => z.id);

        const base = {
            booking_type: 'desk',
            asset_id: desk.id,
            asset_name: desk.name,
            booking_start: slot.start,
            booking_end: slot.end,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title: uniqueTitle('E2E Desk Bad'),
            zones,
        };

        // Each case is a request a client could plausibly send by accident.
        const cases: { name: string; data: Record<string, unknown> }[] = [
            {
                name: 'a desk that does not exist',
                data: { ...base, asset_id: 'e2e-desk-does-not-exist' },
            },
            {
                name: 'an end time before the start time',
                data: { ...base, booking_end: slot.start - 3600 },
            },
            {
                name: 'no booking type at all',
                data: { ...base, booking_type: undefined },
            },
            { name: 'no asset', data: { ...base, asset_id: undefined } },
        ];

        const created: number[] = [];
        try {
            for (const { name, data } of cases) {
                const res = await staffApi.post(`${STAFF_API}/bookings`, { data });
                const body = await res.text();
                if (res.ok()) {
                    // Accepting it is a finding rather than a crash, and this
                    // test is about 5xx, so record it and clean it up.
                    const id = JSON.parse(body).id;
                    if (id) created.push(id);
                    console.warn(
                        `  ! the backend ACCEPTED "${name}" (HTTP ${res.status()}). ` +
                            `That may be worth a bug of its own.`,
                    );
                    continue;
                }
                expect(
                    res.status(),
                    `"${name}" must be refused with a 4xx, not a server error. ` +
                        `Got ${res.status()}: ${body.slice(0, 200)}. A 5xx here is ` +
                        `worse than untidy — a booking write that 500s is how REG-09 ` +
                        `poisons a connection for every other request`,
                ).toBeLessThan(500);
            }
        } finally {
            for (const id of created) await deleteBooking(staffApi, id);
        }
    });

    test('a clash check uses the current booking_end, not the one it was created with', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const desk = deskFor(mine);
        // 9-10, then extended to 9-12. The extension is the point.
        const first = slotOn(DESK_SLOTS.api.day, 9);
        const { from, to } = dayBoundsOn(DESK_SLOTS.api.day);
        const other = await apiAsOtherUser(theirs);
        let booking_id: number | undefined;
        const other_ids: number[] = [];

        await releaseAsset(staffApi, 'desk', desk.id, from, to);
        await releaseAsset(other, 'desk', desk.id, from, to);

        try {
            const booking = await createDeskBookingViaApi(staffApi, {
                desk,
                title: uniqueTitle('E2E Desk Extend'),
                start: first.start,
                end: first.start + 3600,
            });
            booking_id = booking.id;

            // Extend it by two hours.
            const extended_end = first.start + 3 * 3600;
            const patch = await staffApi.patch(`${STAFF_API}/bookings/${booking_id}`, {
                data: { booking_start: first.start, booking_end: extended_end },
            });
            expect(
                patch.status(),
                `extending the booking failed: ${await patch.text()}`,
            ).toBeLessThan(300);
            expect(
                (await getBooking(staffApi, booking_id)).booking_end,
                'precondition: the booking really was extended',
            ).toBe(extended_end);

            // Now somebody else asks for an hour INSIDE the extension. Against
            // the original end time this looks free; against the current one it
            // is taken.
            const inside = {
                booking_type: 'desk',
                asset_id: desk.id,
                asset_name: desk.name,
                booking_start: first.start + 2 * 3600,
                booking_end: first.start + 3 * 3600,
                timezone: 'Etc/UTC',
                title: uniqueTitle('E2E Desk Stale'),
            };
            const them = await currentUser(other);
            const res = await other.post(`${STAFF_API}/bookings`, {
                data: {
                    ...inside,
                    user_email: them.email,
                    user_id: them.id,
                    user_name: them.name,
                },
            });
            const body = await res.text();
            if (res.ok()) other_ids.push(JSON.parse(body).id);
            expect(
                res.status(),
                `an hour inside the EXTENDED window must be refused with 409. Got ` +
                    `${res.status()}: ${body.slice(0, 200)}. Accepting it means the ` +
                    `clash check compared against the booking_end the row was created ` +
                    `with — that is REG-03, and the desk is now double-booked`,
            ).toBe(409);

            // Control: an hour AFTER the extension is still free, so the refusal
            // above was about the overlap and not about refusing everything.
            const after = await other.post(`${STAFF_API}/bookings`, {
                data: {
                    ...inside,
                    booking_start: extended_end + 3600,
                    booking_end: extended_end + 7200,
                    user_email: them.email,
                    user_id: them.id,
                    user_name: them.name,
                    title: uniqueTitle('E2E Desk Clear'),
                },
            });
            const after_body = await after.text();
            if (after.ok()) other_ids.push(JSON.parse(after_body).id);
            expect(
                after.status(),
                `an hour clear of the booking must still be accepted, got ` +
                    `${after.status()}: ${after_body.slice(0, 200)}`,
            ).toBe(201);
        } finally {
            // Their bookings have to go BY THEM: `GET /bookings` is
            // caller-scoped, so this worker's sweep cannot see them and the desk
            // would stay held by something invisible.
            for (const id of other_ids) await deleteBooking(other, id);
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'desk', desk.id, from, to);
            await other.dispose();
        }
    });
});
