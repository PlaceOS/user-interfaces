/**
 * PARK-14 — a user denied parking access.
 *
 * Parking is the one booking type with a per-person permission: a
 * `_PARKING_USERS_` asset carries a `deny` flag, and `ParkingService` exposes it
 * as `deny_parking_access`. The flag is how a site says "this person does not
 * get a space", and nothing tests it — so a change that stopped reading it would
 * quietly let denied users book, which is a policy failure rather than a bug
 * anybody would notice from a screenshot.
 *
 * Both halves matter and the second is the control: with the flag cleared the
 * same user can book again, so "the form is broken" cannot pass as "the user was
 * denied".
 *
 * ## The flag is a STRING
 *
 * `toParkingUser` compares `String(data.deny) === 'true'`, so a real boolean
 * never registers. `setParkingDenied` writes the strings, and that is worth
 * knowing before debugging a test that seems to have no effect.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { currentUser, deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import {
    PARKING_SLOTS,
    dayBoundsOn,
    hhmm,
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import {
    clearParkingUser,
    setParkingDenied,
    spaceForWorker,
} from '../../../../e2e/support/parking/parking.seed';
import {
    PARKING_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/parking/parking.settings';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';

test.describe('parking access', () => {
    test('a user marked as denied cannot book, and can again once cleared', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.access.day, PARKING_SLOTS.access.hour);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.access.day);
        const me = await currentUser(staffApi);
        let record_id: string | undefined;
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);
        await useSettings(staffPage, PARKING_BASE_SETTINGS);

        try {
            record_id = await setParkingDenied(me.email, true);

            const form = new ParkingForm(staffPage);
            await form.open();
            await form.pickDate(slot.date_ms);

            // Either the space is not offered at all, or the form refuses to
            // send. Both are acceptable ways to deny access; what must NOT
            // happen is a stored booking.
            const chosen = await (async () => {
                try {
                    await form.setChecked(form.allDay, false);
                    await form.title.fill(uniqueTitle('E2E Parking Denied'));
                    await form.chooseSpace(space.name);
                    return true;
                } catch {
                    return false;
                }
            })();

            if (chosen) {
                await form.setStartTime(hhmm(slot.start));
                await staffPage.waitForTimeout(2_000);
                const sent = staffPage
                    .waitForResponse(
                        (r) =>
                            r.url().includes('/api/staff/v1/bookings') &&
                            r.request().method() === 'POST',
                        { timeout: 15_000 },
                    )
                    .catch(() => null);
                await form.confirmViewButton.click();
                const response = await sent;
                if (response) {
                    const body = await response.text();
                    if (response.status() < 300) booking_id = JSON.parse(body).id;
                    expect(
                        response.status(),
                        `a denied user's booking must not be accepted. Got ` +
                            `${response.status()}: ${body.slice(0, 200)}`,
                    ).toBeGreaterThanOrEqual(400);
                }
            }
            expect(
                booking_id,
                'a user marked `deny` must not end up with a parking booking',
            ).toBeUndefined();

            // CONTROL: clear the flag and the same user can book. Without this,
            // a form that simply never works would pass the half above.
            await setParkingDenied(me.email, false);
            await staffPage.reload();
            const allowed = new ParkingForm(staffPage);
            await allowed.open();
            await allowed.pickDate(slot.date_ms);
            await expect(async () => {
                await allowed.setChecked(allowed.allDay, false);
                await allowed.title.fill(uniqueTitle('E2E Parking Allowed'));
                if ((await allowed.chosenSpaces.count()) === 0) {
                    await allowed.chooseSpace(space.name);
                }
                expect(await allowed.chosenSpaces.count()).toBe(1);
            }).toPass({ timeout: 60_000 });
            await allowed.setStartTime(hhmm(slot.start));
            await staffPage.waitForTimeout(2_000);

            const [ok_response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) =>
                        r.url().includes('/api/staff/v1/bookings') &&
                        r.request().method() === 'POST',
                    { timeout: 30_000 },
                ),
                allowed.confirmAndSend(),
            ]);
            const ok_body = await ok_response.text();
            expect(
                ok_response.status(),
                `with the deny flag cleared the same user must be able to book: ` +
                    `${ok_body.slice(0, 200)}`,
            ).toBeLessThan(300);
            booking_id = JSON.parse(ok_body).id;
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            if (record_id) await clearParkingUser(record_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });
});
