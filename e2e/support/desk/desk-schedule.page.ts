/**
 * The schedule, as the DESK specs need it.
 *
 * A desk booking cannot be edited from the desk form directly: the form is
 * loaded with a booking by the schedule (`schedule.component.ts::editBooking`
 * sets the form model and then routes to `/book/desk`). So a spec about SAVING
 * an edited desk booking has to start on the schedule.
 *
 * The schedule itself belongs to `visitor/your-bookings.page.ts`, which
 * introduced it — so this inherits and overrides only the one thing that is
 * desk-shaped: the form that pressing Edit lands on. Nothing is copied.
 *
 * What is tested WHERE, so the two do not drift:
 *
 *   bookings-edit.spec.ts ..... that Edit ROUTES to the desk form with the
 *                               booking loaded. Belongs to the page.
 *   desk-edit.spec.ts ......... that a change SAVES correctly. Belongs to the
 *                               desk form, and uses this to get there.
 */
import { Locator } from '@playwright/test';
import { YourBookingsPage } from '../visitor/your-bookings.page';

export class DeskSchedulePage extends YourBookingsPage {
    protected override get editForm(): Locator {
        return this.page.locator('desk-flow-form');
    }

    protected override get editFormHint(): string {
        return (
            'A desk booking is edited through `schedule.component.ts::editBooking`, ' +
            'which routes to /book/desk with the form model already set. The Edit item ' +
            'is only offered for a booking the user owns; a booking that has finished ' +
            'may not offer it at all.'
        );
    }

    /** Make sure desk bookings are among the types being shown. */
    async showDesks(): Promise<void> {
        const toggle = this.page
            .locator('button[name="schedule-toggle-desk-filter"]:visible')
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
