/**
 * REG-02 — two people cannot hold the same desk at the same time.
 *
 * Maps to a real shipped fix: "Fix rejecting overlapping bookings on desk
 * assignment" (release 2607.1). Double-booking is the kind of regression that
 * doesn't announce itself. Nothing errors, nobody notices, and two people turn up
 * to the same desk on Tuesday.
 *
 * Deliberately attempted as a SECOND user, because that's the real scenario and
 * because a clash check that only looked at your own bookings would still pass a
 * single-user version of this test.
 */
import { request } from '@playwright/test';
import { test, expect } from '../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, WORKERS, deskFor, roleFor } from '../../../../e2e/support/env';
import { mintToken } from '../../../../e2e/support/auth';
import {
    STAFF_API,
    deleteBooking,
    releaseAsset,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import type { APIRequestContext } from '@playwright/test';

const DAY = 86_400;
const from = () => Math.floor(Date.now() / 1000) - 3 * DAY;
const to = () => Math.floor(Date.now() / 1000) + 3 * DAY;

async function bookingZones(api: APIRequestContext): Promise<string[]> {
    const groups = await Promise.all(
        ['org', 'building', 'level'].map((tag) => zonesWithTag(api, tag)),
    );
    return groups.flat().map((z) => z.id);
}

async function book(
    api: APIRequestContext,
    asset_id: string,
    start: number,
    end: number,
    zones: string[],
) {
    const me = await (await api.get('/api/engine/v2/users/current')).json();
    return api.post(`${STAFF_API}/bookings`, {
        data: {
            booking_type: 'desk',
            asset_id,
            booking_start: start,
            booking_end: end,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title: uniqueTitle('E2E Clash'),
            zones,
        },
    });
}

test.describe('desk double-booking', () => {
    test('a second person cannot book a desk that is already taken', async ({
        staffApi,
    }, testInfo) => {
        const mine = testInfo.parallelIndex;
        const theirs = (mine + 1) % WORKERS;
        test.skip(theirs === mine, 'needs at least two workers to have two distinct users');

        const desk = deskFor(mine);
        const zones = await bookingZones(staffApi);
        await releaseAsset(staffApi, 'desk', desk.id, from(), to());

        // A fixed, future window. Not "now", so the test can't be tripped by the
        // clock crossing a boundary mid-run.
        const start = Math.floor(Date.now() / 1000) + DAY;
        const end = start + 3600;

        const first = await book(staffApi, desk.id, start, end, zones);
        expect(
            first.ok(),
            `the first booking should succeed: ${first.status()} ${await first.text()}`,
        ).toBeTruthy();
        const booking = await first.json();

        const other_role = roleFor('staff', theirs);
        const other_mint = await mintToken(
            BACKEND_URL,
            APP_URL,
            other_role.email,
            other_role.password,
        );
        const other = await request.newContext({
            baseURL: BACKEND_URL,
            ignoreHTTPSErrors: true,
            extraHTTPHeaders: { Authorization: `Bearer ${other_mint.accessToken}` },
        });

        try {
            // Exactly the same slot.
            const exact = await book(other, desk.id, start, end, zones);
            expect(
                exact.status(),
                `an identical slot must be refused, got ${exact.status()}`,
            ).toBeGreaterThanOrEqual(400);

            // And a partial overlap, which is the case a naive check misses: it
            // starts before the existing booking ends.
            const partial = await book(other, desk.id, start + 1800, end + 1800, zones);
            expect(
                partial.status(),
                `an overlapping slot must be refused, got ${partial.status()}`,
            ).toBeGreaterThanOrEqual(400);

            // Control: a slot that genuinely doesn't overlap is fine. Without this,
            // a backend that rejected everything would pass the two checks above.
            const clear = await book(other, desk.id, end + 3600, end + 7200, zones);
            expect(
                clear.ok(),
                `a non-overlapping slot should be accepted: ${clear.status()} ${await clear.text()}`,
            ).toBeTruthy();
            const clear_booking = await clear.json();
            await deleteBooking(other, clear_booking.id);
        } finally {
            await other.dispose();
            await deleteBooking(staffApi, booking.id);
        }
    });

    test('the desk frees up once the booking is deleted', async ({ staffApi }, testInfo) => {
        // Guards a nastier version of the same bug: a cancelled booking that still
        // blocks the desk. Users would see it as free and be unable to book it,
        // which is harder to diagnose than a straightforward double-booking.
        const desk = deskFor(testInfo.parallelIndex);
        const zones = await bookingZones(staffApi);
        await releaseAsset(staffApi, 'desk', desk.id, from(), to());

        const start = Math.floor(Date.now() / 1000) + 2 * DAY;
        const end = start + 3600;

        const first = await book(staffApi, desk.id, start, end, zones);
        expect(first.ok(), `first booking: ${first.status()}`).toBeTruthy();
        const booking = await first.json();

        const blocked = await book(staffApi, desk.id, start, end, zones);
        expect(blocked.status(), 'the slot is taken while the booking exists').toBeGreaterThanOrEqual(400);

        await deleteBooking(staffApi, booking.id);

        const after = await book(staffApi, desk.id, start, end, zones);
        expect(
            after.ok(),
            `the same slot should be bookable again once freed: ${after.status()} ${await after.text()}`,
        ).toBeTruthy();
        await deleteBooking(staffApi, (await after.json()).id);
    });
});
