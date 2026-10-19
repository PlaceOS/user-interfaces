/**
 * Page object for `/landing` — the `landing-new` home page.
 *
 * The home page that this one replaced (`app-landing`, `landing-upcoming`,
 * `landing-quick-book`) has been removed. None of those elements exist
 * here.
 *
 * ## The page shows ONE next booking
 *
 * `landing-upcoming-booking` shows the first booking of TODAY that is not
 * done, and nothing else. A booking on another day never shows on the card,
 * and a second booking today shows only after the first one ends. The other
 * state of the card is the "schedule is clear" panel.
 *
 * ## `landing-new` has no box
 *
 * The host element is not visible to Playwright. Wait for a section, not for
 * the host.
 *
 * ## Selector policy
 *
 * No translated text. Controls with no `name` attribute are matched on their
 * icon ligature, which is not translated.
 */
import { Locator, Page, expect } from '@playwright/test';

export class LandingNewPage {
    constructor(private readonly page: Page) {}

    /** The next-booking card, in the booking state or the clear state. */
    get upcoming(): Locator {
        return this.page.locator('landing-upcoming-booking');
    }

    /**
     * The heading of the card. It is the title of the next booking, or the
     * "schedule is clear" heading: both states of the card have one `h2`.
     */
    get upcomingTitle(): Locator {
        return this.upcoming.locator('h2');
    }

    /**
     * The "starts in" marker, which the card shows only for a booking that
     * has not started. A booking in progress shows `schedule` in its place.
     */
    get upcomingStartsIn(): Locator {
        return this.upcoming.locator('icon', { hasText: 'timelapse' });
    }

    /** The edit control of the next booking. Not present in the clear state. */
    get upcomingEdit(): Locator {
        return this.upcoming.locator('button[name="edit-booking"]');
    }

    /** The delete control of the next booking. */
    get upcomingDelete(): Locator {
        return this.upcoming
            .locator('button')
            .filter({ has: this.page.locator('icon', { hasText: 'delete' }) });
    }

    /** The link from the card to Your Bookings. Both states of the card have it. */
    get viewAllBookings(): Locator {
        return this.upcoming.locator('a[href$="/your-bookings"]');
    }

    /**
     * The "book a desk" link, which only the clear state shows.
     *
     * The clear state is also what the card shows BEFORE its bookings load.
     * After a page load, do not use it as proof that the user has no booking.
     */
    get clearStateDeskLink(): Locator {
        return this.upcoming.locator('a[href$="/book/desk"]');
    }

    get deskWeek(): Locator {
        return this.page.locator('landing-desk-week');
    }

    /**
     * One day of the desk week, by its day of the month.
     *
     * The week is in the DOM three times, one for each screen size, so only
     * visible elements count. The innermost element that holds the day number
     * and a control is the day.
     */
    deskWeekDay(day_of_month: number): Locator {
        return this.deskWeek
            .locator('div:visible')
            .filter({ has: this.page.locator(`span:text-is("${day_of_month}")`) })
            .filter({ has: this.page.locator('button') })
            .last();
    }

    /** The desk booking that a day of the desk week shows. */
    deskWeekBooking(day_of_month: number): Locator {
        return this.deskWeekDay(day_of_month)
            .locator('button')
            .filter({ has: this.page.locator('icon', { hasText: 'location_on' }) });
    }

    /** The "book a desk" control of a day with no desk booking. */
    deskWeekBook(day_of_month: number): Locator {
        return this.deskWeekDay(day_of_month)
            .locator('button')
            .filter({ has: this.page.locator('icon', { hasText: 'add_circle_outline' }) });
    }

    get favourites(): Locator {
        return this.page.locator('landing-favourites-new');
    }

    /**
     * One favourite, by the name it shows. The innermost element that holds
     * the name and the Book control is the row.
     */
    favourite(name: string): Locator {
        const book = this.page.locator('button[name="book-favourite"]');
        return this.favourites.locator('div', { has: book, hasText: name }).last();
    }

    /** The Book control of a favourite. */
    bookFavourite(name: string): Locator {
        return this.favourite(name).locator('button[name="book-favourite"]');
    }

    /** The remove control of a favourite. */
    removeFavourite(name: string): Locator {
        return this.favourite(name).locator('button[name="remove-favourite"]');
    }

    /** A tab of the "available now" panel. */
    availableTab(tab: 'desks' | 'rooms' | 'lockers'): Locator {
        return this.page.locator(`landing-available-now button[name="tab-${tab}"]`);
    }

    /**
     * The levels that the active tab of the "available now" panel lists. The
     * panel lists a level only when it has a free resource of the tab.
     */
    get availableLevels(): Locator {
        return this.page.locator('landing-available-now a[name="available-level"]');
    }

    /** The quick action that finds a desk for today. */
    get autoAssignDesk(): Locator {
        return this.page.locator('landing-quick-actions button[name="auto-assign-desk"]');
    }

    /** The modal that shows the desk the quick action found. */
    get autoAssignModal(): Locator {
        return this.page.locator('auto-assigned-desk-modal');
    }

    /**
     * The control of the modal that books the desk. It is the last control of
     * the footer, and it is disabled while the modal looks for a desk.
     */
    get autoAssignConfirm(): Locator {
        return this.autoAssignModal.locator('footer button[btn]').last();
    }

    /** The Cancel control of the modal. It is the first control of the footer. */
    get autoAssignCancel(): Locator {
        return this.autoAssignModal.locator('footer button[btn]').first();
    }

    get colleagues(): Locator {
        return this.page.locator('landing-colleagues-new');
    }

    /**
     * The row of one colleague, by address. The innermost element that holds
     * the avatar and the address is the row.
     */
    colleague(email: string): Locator {
        return this.colleagues
            .locator('div')
            .filter({ has: this.page.locator('a-user-avatar') })
            .filter({ hasText: email })
            .last();
    }

    /**
     * Open the menu of a colleague and return one of its actions.
     *
     * The actions have no `name` attribute. Each has its own icon: `event`
     * (book a meeting), `star` / `star_outline` (favourite), `group_add` /
     * `group_remove` (team) and `person_remove` (remove).
     */
    async colleagueAction(email: string, icon: string): Promise<Locator> {
        await this.colleague(email)
            .locator('button[icon]')
            .filter({ has: this.page.locator('icon', { hasText: 'more_vert' }) })
            .click();
        const action = this.page
            .locator('.cdk-overlay-container button[mat-menu-item]')
            .filter({
                has: this.page.locator('icon', { hasText: new RegExp(`^\\s*${icon}\\s*$`) }),
            });
        await expect(action, `the colleague menu has no "${icon}" action`).toBeVisible({
            timeout: 10_000,
        });
        return action;
    }

    get addColleaguesModal(): Locator {
        return this.page.locator('add-colleagues-modal');
    }

    /**
     * Add one colleague through the modal.
     *
     * The search field needs real key events, and the search is on a part of
     * the address: the modal lists every match, and the row is chosen by the
     * full address.
     */
    async addColleague(email: string): Promise<void> {
        await this.colleagues
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'person_add' }) })
            .click();
        const modal = this.addColleaguesModal;
        const input = modal.locator('input');
        const row = modal.locator('main button').filter({ hasText: email });
        // The modal moves the focus to its close control when it opens. Keys
        // typed before that go nowhere, so type again until the field holds
        // the whole address.
        await expect(async () => {
            await input.click();
            await input.fill('');
            await input.pressSequentially(email, { delay: 30 });
            await expect(input).toHaveValue(email, { timeout: 1_000 });
            await expect(row, `the search should find ${email}`).toBeVisible({
                timeout: 10_000,
            });
        }).toPass({ timeout: 45_000 });
        await row.click();
        await expect(row.locator('icon', { hasText: 'radio_button_unchecked' })).toHaveCount(0);
        // The last control of the footer is Add. The first is Cancel.
        await modal.locator('footer button[btn]').last().click();
        await expect(modal, 'the modal should close after the add').toHaveCount(0);
    }

    async open(): Promise<void> {
        await this.page.goto('/#/landing');
        await expect(this.upcoming).toBeVisible({ timeout: 30_000 });
    }

    /** Accept the shared confirm dialog. Its accept button has a stable name. */
    async acceptConfirm(): Promise<void> {
        const accept = this.page.locator('.cdk-overlay-container button[name="accept"]');
        await expect(
            accept,
            'the confirmation dialog did not open, so there was nothing to accept',
        ).toBeVisible({ timeout: 15_000 });
        await accept.click();
    }
}
