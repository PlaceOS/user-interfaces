/**
 * Page object for `/landing` — the `landing-new` home page.
 *
 * `landing.page.ts` drives the home page that this one replaced
 * (`app-landing`, `landing-upcoming`, `landing-quick-book`). None of those
 * elements exist here, so this file shares nothing with it.
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

    /** The title of the next booking. Not present in the clear state. */
    get upcomingTitle(): Locator {
        return this.upcoming.locator('h2');
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

    /** The "book a desk" link, which only the clear state shows. */
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

    /** The Book control of a favourite, by the name the favourite shows. */
    bookFavourite(name: string): Locator {
        const book = this.page.locator('button[name="book-favourite"]');
        // The innermost element that holds the name and the control is the row.
        return this.favourites
            .locator('div', { has: book, hasText: name })
            .last()
            .locator('button[name="book-favourite"]');
    }

    get colleagues(): Locator {
        return this.page.locator('landing-colleagues-new');
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
        await modal.locator('input').pressSequentially(email, { delay: 30 });
        const row = modal.locator('main button').filter({ hasText: email });
        await expect(row, `the search should find ${email}`).toBeVisible({ timeout: 20_000 });
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
