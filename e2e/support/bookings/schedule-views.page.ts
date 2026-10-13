/**
 * Page object for `/your-bookings` — the schedule with the day, week and list
 * views.
 *
 * `schedule.page.ts` and `visitor/your-bookings.page.ts` drive the LIST view,
 * where each booking is a card with its id. This file is for what the day and
 * week views add: the page opens on the DAY view, which has no cards.
 *
 * ## Three views, one route
 *
 * The view is the `view` query parameter: `day` (the default), `week` and
 * `list`.
 *
 *  - The day and week views draw each booking as a button with no id on it.
 *    The only handle is the title, so specs give each booking a unique title.
 *  - The list view draws a `booking-card` for each booking, whose link has
 *    the booking id in its `href`.
 *
 * The details modal and its menu are the same as before. For those, use
 * `YourBookingsPage` (`openOverflowMenu`, `menuAction`, `acceptConfirm`).
 *
 * ## Selector policy
 *
 * No translated text. Controls with no `name` attribute are matched on their
 * icon ligature, which is not translated.
 */
import { Locator, Page, expect } from '@playwright/test';

export type ScheduleView = 'day' | 'week' | 'list';

export class ScheduleViewsPage {
    constructor(private readonly page: Page) {}

    get topbar(): Locator {
        return this.page.locator('schedule-topbar');
    }

    get dayView(): Locator {
        return this.page.locator('schedule-day-view');
    }

    get weekView(): Locator {
        return this.page.locator('schedule-week-view');
    }

    get listView(): Locator {
        return this.page.locator('schedule-list-view');
    }

    /** The link of the topbar that changes the view. */
    viewLink(view: ScheduleView): Locator {
        return this.topbar.locator(`a[href*="view=${view}"]`);
    }

    /** The topbar control that moves the day and week views one period on. */
    get nextDate(): Locator {
        return this.topbar
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'keyboard_arrow_right' }) });
    }

    /** The topbar control that goes back to today. It is the first control. */
    get today(): Locator {
        return this.topbar.locator('button[btn]').first();
    }

    /** A booking on the day view, by its title. */
    dayBooking(title: string): Locator {
        return this.dayView.locator('button').filter({ hasText: title });
    }

    /** A booking on the week view, by its title. */
    weekBooking(title: string): Locator {
        return this.weekView.locator('div[body] button').filter({ hasText: title });
    }

    /** The card of a booking on the list view, by its id. */
    listCard(booking_id: number): Locator {
        return this.listView.locator(
            `booking-card a[name="view-booking-details"][href*="booking=${booking_id}"]`,
        );
    }

    /**
     * A type filter of the sidebar, by the icon of the type (`desk`,
     * `meeting_room`, `drive_eta`, `people`, `lock`).
     */
    typeFilter(icon: string): Locator {
        return this.page
            .locator('schedule-sidebar settings-toggle')
            .filter({ has: this.page.locator('icon', { hasText: new RegExp(`^\\s*${icon}\\s*$`) }) });
    }

    async open(view?: ScheduleView): Promise<void> {
        await this.page.goto(`/#/your-bookings${view ? `?view=${view}` : ''}`);
        await expect(this.topbar).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Set a type filter to a state. Reads the real state first: a click on a
     * filter that is already in the target state inverts the intent.
     */
    async setTypeFilter(icon: string, want: boolean): Promise<void> {
        const toggle = this.typeFilter(icon);
        const input = toggle.locator('input[type="checkbox"]');
        if ((await input.isChecked()) !== want) await toggle.locator('button').first().click();
        const check = expect(input, `the ${icon} filter should be ${want ? 'on' : 'off'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }
}
