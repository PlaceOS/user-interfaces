/**
 * Page object for `/your-bookings` — what the day and week views add.
 *
 * `schedule.page.ts` and `visitor/your-bookings.page.ts` drive the LIST view,
 * where each booking is a card with its id. This class inherits all of that
 * (the view links, the type filters, the cards, the details modal and its
 * menu) and adds the day and week views. The page opens on the DAY view,
 * which has no cards.
 *
 * ## Three views, one route
 *
 * The view is the `view` query parameter: `day` (the default), `week` and
 * `list`.
 *
 *  - The day and week views draw each booking as a button with no id on it.
 *    The only handle is the title, so specs give each booking a unique title.
 *  - The list view draws a `booking-card` for each booking, whose link has
 *    the booking id in its `href`. Use the inherited `card`.
 *
 * ## Selector policy
 *
 * No translated text. Controls with no `name` attribute are matched on their
 * icon ligature, which is not translated.
 */
import { Locator, expect } from '@playwright/test';
import { SchedulePage } from './schedule.page';

export type ScheduleView = 'day' | 'week' | 'list';

export class ScheduleViewsPage extends SchedulePage {
    get topbar(): Locator {
        return this.page.locator('schedule-topbar');
    }

    get dayView(): Locator {
        return this.page.locator('schedule-day-view');
    }

    get weekView(): Locator {
        return this.page.locator('schedule-week-view');
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

    /**
     * Open the page on a view. With no view the page opens on its default,
     * the day view. The inherited `open` always asks for the list view.
     */
    async openView(view?: ScheduleView): Promise<void> {
        await this.page.goto(`/#/your-bookings${view ? `?view=${view}` : ''}`);
        await expect(this.topbar).toBeVisible({ timeout: 30_000 });
    }
}
