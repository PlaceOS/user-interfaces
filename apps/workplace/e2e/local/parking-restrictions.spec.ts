/**
 * PARK-13 — the space-restriction requirement.
 *
 * ## `fixme` — PARK-B1, and it makes parking unbookable
 *
 * `parking.require_space_restriction` is described by its own schema as
 * belonging to the parking REQUEST flow ("Whether users must select a parking
 * space restriction in the parking request flow",
 * `apps/workplace/src/environments/settings.schema.json`), and the request form
 * does render a control for it.
 *
 * But the validator lives in the SHARED booking form
 * (`libs/bookings/src/lib/booking.utilities.ts`) and fires for any
 * `booking_type === 'parking'`:
 *
 *   validate(p.space_restrictions, ... require_space_restriction() && !value()
 *       ? { kind: 'required' } : undefined)
 *
 * while `parking-form-details.component.ts` never renders a `space_restrictions`
 * control at all — measured, zero mentions. So with the setting on, the ordinary
 * parking booking form cannot be submitted: pressing Confirm Reservation gives
 *
 *   Some fields are invalid. [space_restrictions]
 *
 * and there is no field on screen to satisfy. Measured on this stack with NO
 * overrides, which is how the whole parking area was blocked until the setting
 * was turned off in `PARKING_BASE_SETTINGS`.
 *
 * The test below is what SHOULD happen: with the requirement on, a space can
 * still be booked (whether by rendering the control on this form too, or by
 * scoping the validator to the request flow — that is a product decision). Drop
 * the `fixme` once either is done.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, releaseAsset, uniqueTitle } from '../../../../e2e/support/api';
import {
    PARKING_SLOTS,
    dayBoundsOn,
    slotOn,
} from '../../../../e2e/support/parking/parking.env';
import { spaceForWorker } from '../../../../e2e/support/parking/parking.seed';
import { useSettings } from '../../../../e2e/support/parking/parking.settings';
import { ParkingForm } from '../../../../e2e/support/parking/parking-form.page';

test.describe('parking space restrictions', () => {
    test.fixme('a space can still be booked when a restriction is required', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const space = await spaceForWorker(testInfo.parallelIndex);
        const slot = slotOn(PARKING_SLOTS.api.day, 12);
        const { from, to } = dayBoundsOn(PARKING_SLOTS.api.day);
        const title = uniqueTitle('E2E Parking Restricted');
        let booking_id: number | undefined;

        await releaseAsset(staffApi, 'parking', space.id, from, to);
        // The setting this whole finding is about, switched ON deliberately.
        await useSettings(staffPage, {
            'app.parking.require_space_restriction': true,
        });

        try {
            const form = new ParkingForm(staffPage);
            await form.open();
            await form.pickDate(slot.date_ms);
            await expect(async () => {
                await form.setChecked(form.allDay, false);
                await form.title.fill(title);
                if ((await form.chosenSpaces.count()) === 0) {
                    await form.chooseSpace(space.name);
                }
                expect(await form.title.inputValue()).toBe(title);
            }).toPass({ timeout: 60_000 });

            const [response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) =>
                        r.url().includes('/api/staff/v1/bookings') &&
                        r.request().method() === 'POST',
                    { timeout: 30_000 },
                ),
                form.confirmAndSend(),
            ]);
            const body = await response.text();
            expect(
                response.status(),
                `with a restriction required, the booking should still be possible: ` +
                    `${body}`,
            ).toBeLessThan(300);
            booking_id = JSON.parse(body).id;
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await releaseAsset(staffApi, 'parking', space.id, from, to);
        }
    });
});
