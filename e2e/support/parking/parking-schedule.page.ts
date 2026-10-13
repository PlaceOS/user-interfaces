/**
 * The schedule, as the PARKING specs need it.
 *
 * A parking booking cannot be cancelled or edited from the parking form: the
 * schedule does both (`schedule.component.ts::editBooking` loads the form and
 * routes to `/book/parking`). So the specs for those start on the schedule.
 *
 * The schedule belongs to `visitor/your-bookings.page.ts`, which introduced it,
 * so this inherits and overrides only what is parking-shaped — the form that
 * Edit lands on. Nothing is copied.
 */
import { Locator } from '@playwright/test';
import { YourBookingsPage } from '../visitor/your-bookings.page';

export class ParkingSchedulePage extends YourBookingsPage {
    protected override get editForm(): Locator {
        return this.page.locator('parking-flow-form');
    }

    protected override get editFormHint(): string {
        return (
            'A parking booking is edited through `schedule.component.ts::editBooking`, ' +
            'which routes to /book/parking with the form model already set. The Edit ' +
            'item is only offered for a booking the user owns, and a booking that has ' +
            'finished may not offer it at all.'
        );
    }

    /** Make sure parking bookings are among the types being shown. */
    async showParking(): Promise<void> {
        const toggle = this.page
            .locator('button[name="schedule-toggle-parking-filter"]:visible')
            .first();
        const checkbox = toggle.locator('input[type="checkbox"]');
        if (!(await checkbox.count())) return;
        // ENSURE, never blindly toggle: clicking a filter that is already on
        // turns it off, and the list then looks like the booking is missing.
        if (!(await checkbox.isChecked().catch(() => false))) {
            await toggle.click({ timeout: 10_000 });
        }
    }
}
