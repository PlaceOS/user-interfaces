/**
 * The schedule, as the ROOM specs need it.
 *
 * Inherits the shared behaviour from `YourBookingsPage` — opening the list,
 * the day navigation, the details modal, the overflow menu, the confirmation
 * dialogs — and overrides only what a room booking does differently. Nothing is
 * copied.
 *
 * ## Why an override is needed at all
 *
 * A room booking does not render as a booking card. In `use_bookings` mode the
 * schedule loads room bookings, converts them back into calendar events
 * (`newCalendarEventFromBooking`) and renders `event-card`:
 *
 *   visitor / desk ..... <a name="view-booking-details" href="...?booking=123">
 *   room ............... <a name="view-event-details"   href="...?event=123">
 *
 * and the details modal is `event-details-modal`, not `booking-details-modal`.
 * Everything inherited that looks a card up goes through `card()`, so
 * overriding that one method redirects the lot.
 *
 * The filter is different too: rooms sit behind the ROOMS toggle
 * (`schedule-toggle-event-filter`), not the visitor one.
 */
import { Locator, expect } from '@playwright/test';
import { YourBookingsPage } from '../visitor/your-bookings.page';

export class RoomSchedulePage extends YourBookingsPage {
    /** The card for a room booking, matched on the id in its href. */
    override card(bookingId: number): Locator {
        return this.page.locator(
            `a[name="view-event-details"][href*="event=${bookingId}"]`,
        );
    }

    /** The ids of every room/event card on screen, for failure messages. */
    override async renderedBookingIds(): Promise<number[]> {
        const hrefs = await this.page
            .locator('a[name="view-event-details"]')
            .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
        return hrefs
            .map((h) => Number(/event=(\d+)/.exec(h)?.[1]))
            .filter((n) => Number.isFinite(n));
    }

    /** Make sure room bookings are among the types being shown. */
    async showRooms(): Promise<void> {
        const toggle = this.page
            .locator('button[name="schedule-toggle-event-filter"]')
            .first();
        // ENSURE, never blindly toggle: clicking a filter that is already on
        // turns it off, and the list then looks like the booking is missing.
        const checkbox = toggle.locator('input[type="checkbox"]');
        if (await checkbox.count()) {
            if (!(await checkbox.isChecked().catch(() => false))) await toggle.click();
        }
    }

    /** Open a room booking's details and wait for the modal. */
    override async openDetails(bookingId: number): Promise<Locator> {
        const card = this.card(bookingId);
        const found = await card
            .waitFor({ state: 'visible', timeout: 30_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            const rendered = await this.renderedBookingIds();
            throw new Error(
                `no card for room booking ${bookingId} on /your-bookings. ` +
                    `${rendered.length} event card(s) are rendered: ` +
                    `[${rendered.join(', ')}]. Check the booking falls on the day being ` +
                    `shown (\`showDayOf\`), that the ROOMS filter is on (\`showRooms\`), ` +
                    `and that \`app.events.use_bookings\` is set — without it the ` +
                    `schedule asks the calendar instead and lists nothing at all.`,
            );
        }
        await card.click();
        const modal = this.page.locator('event-details-modal');
        await expect(modal, 'the event details modal did not open').toBeVisible({
            timeout: 20_000,
        });
        return modal;
    }
}
