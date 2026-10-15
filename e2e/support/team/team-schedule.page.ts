/**
 * Page object for `/team-schedule` — where the colleagues of the user are in
 * the week.
 *
 * ## Where the data comes from
 *
 *  - The rows are the user's CONTACTS: the `contacts` metadata document of the
 *    user, the same one that the home page writes. See `home/home.api.ts`.
 *  - A day shows "in office" when the colleague has a DESK booking on it. The
 *    page asks staff-api for the desk bookings of each colleague by address,
 *    and a non-admin gets an answer.
 *  - The favourites are the `favourite_team_members` key of the user settings.
 *
 * ## The week is Monday to Friday
 *
 * The table has five day columns and never shows a weekend. The topbar moves
 * it one week at a time.
 *
 * ## The table is for wide screens
 *
 * `team-schedule-table` shows from the `sm` breakpoint up. Below that the page
 * shows `team-schedule-list`, which this file does not drive.
 *
 * ## Selector policy
 *
 * No translated text. Controls with no `name` attribute are matched on their
 * icon ligature, which is not translated. A row is matched on the name of the
 * colleague, which is data.
 */
import { Locator, Page, expect } from '@playwright/test';

export type TeamView = 'all' | 'favorites' | 'team';

export class TeamSchedulePage {
    constructor(private readonly page: Page) {}

    get filters(): Locator {
        return this.page.locator('team-schedule-filters');
    }

    get table(): Locator {
        return this.page.locator('team-schedule-table');
    }

    /** The link of the filters that changes which colleagues are listed. */
    viewLink(view: TeamView): Locator {
        return this.filters.locator(`a[href*="view=${view}"]`);
    }

    /** The control that moves the table one week on. */
    get nextWeek(): Locator {
        return this.filters
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'keyboard_arrow_right' }) });
    }

    /**
     * The cell that holds the avatar and the name of a colleague. The
     * innermost element that holds both is the cell.
     */
    member(name: string): Locator {
        return this.table
            .locator('div')
            .filter({ has: this.page.locator('a-user-avatar') })
            .filter({ hasText: name })
            .last();
    }

    /**
     * A day of a colleague. `day_index` 0 is Monday, 4 is Friday.
     *
     * The row has no box of its own. Its children are the member cell and
     * then the five days.
     */
    day(name: string, day_index: number): Locator {
        return this.member(name)
            .locator('xpath=..')
            .locator(':scope > div')
            .nth(day_index + 1);
    }

    /** The favourite control of a colleague. Its icon is the state. */
    favourite(name: string): Locator {
        return this.member(name).locator('button').first();
    }

    async open(): Promise<void> {
        await this.page.goto('/#/team-schedule');
        await expect(this.filters).toBeVisible({ timeout: 30_000 });
    }

    /** Move the table a number of weeks on. */
    async goForward(weeks: number): Promise<void> {
        for (let week = 0; week < weeks; week++) await this.nextWeek.click();
    }
}
