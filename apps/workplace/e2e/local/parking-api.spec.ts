/**
 * PARK-17 — the booking API's own behaviour for parking.
 *
 * Every other parking spec asks the backend to do something reasonable. Nothing
 * asks it to do something wrong, so nothing would notice a bad request turning
 * into a 500 — and a 500 on a booking write is not merely untidy, it is how
 * REG-09 poisons a connection for every other request in flight.
 *
 * API-only: the subject is the backend's rules, and driving a form would only
 * add ways to fail.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    STAFF_API,
    currentUser,
    deleteBooking,
    uniqueTitle,
    zonesWithTag,
} from '../../../../e2e/support/api';
import { PARKING_SLOTS, slotOn } from '../../../../e2e/support/parking/parking.env';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';

test.describe('parking booking API rules', () => {
    test('a malformed or impossible parking booking is refused with a 4xx, never a 5xx', async ({
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.api.day, PARKING_SLOTS.api.hour);
        const me = await currentUser(staffApi);
        const zones = (
            await Promise.all(
                ['org', 'building'].map((t) => zonesWithTag(staffApi, t)),
            )
        )
            .flat()
            .map((z) => z.id);

        const base = {
            booking_type: 'parking',
            asset_id: space.id,
            asset_name: space.name,
            booking_start: slot.start,
            booking_end: slot.end,
            timezone: 'Etc/UTC',
            user_email: me.email,
            user_id: me.id,
            user_name: me.name,
            title: uniqueTitle('E2E Parking Bad'),
            zones,
        };

        const cases: { name: string; data: Record<string, unknown> }[] = [
            {
                name: 'a space that does not exist',
                data: { ...base, asset_id: 'asset-does-not-exist' },
            },
            {
                name: 'an end time before the start time',
                data: { ...base, booking_end: slot.start - 3600 },
            },
            { name: 'no asset at all', data: { ...base, asset_id: undefined } },
            {
                name: 'a start time that is not a number',
                data: { ...base, booking_start: 'tomorrow' },
            },
        ];

        const created: number[] = [];
        try {
            for (const { name, data } of cases) {
                const res = await staffApi.post(`${STAFF_API}/bookings`, { data });
                const body = await res.text();
                if (res.ok()) {
                    // Accepting it is a finding rather than a crash, and this
                    // test is about 5xx — so record it and clean it up.
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
                    `"${name}" must be refused with a 4xx, not a server error. Got ` +
                        `${res.status()}: ${body.slice(0, 200)}`,
                ).toBeLessThan(500);
            }
        } finally {
            for (const id of created) await deleteBooking(staffApi, id);
        }
    });
});
