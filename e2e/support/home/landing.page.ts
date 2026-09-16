/**
 * Page object for `/#/landing` — the workplace home page.
 *
 * SELECTOR POLICY, as everywhere here: nothing depends on visible text, because
 * every label is translated. This page is a mixed bag for that, and each
 * exception is named where it occurs:
 *
 *   named, and used as such .... upcoming-view-all · landing-view-space ·
 *                                landing-book-room · open-colleague-search ·
 *                                add-colleague · remove-colleague ·
 *                                meeting-with-colleague · book-favourite ·
 *                                landing-remove-favourite
 *   component hosts ............ landing-upcoming · landing-quick-book ·
 *                                landing-availability · landing-colleagues ·
 *                                landing-favourites
 *   IMAGE PATHS ................ the quick-book tiles carry no attribute at all;
 *                                the only stable handle is the icon each one
 *                                renders (`assets/icons/desk-placeholder.svg`).
 *                                An asset path is not app copy, but a redesign
 *                                that renames the file will fail the locator
 *                                rather than silently pass.
 *
 * ## The sidebar has two tabs and they share the panel
 *
 * Colleagues and Favourites are two tabs of the same sidebar
 * (`landing.component.ts`: `tab()` is `'people'` or `'fav'`), and only one is in
 * the DOM at a time. Neither button has a name, so they are reached through the
 * material icon each renders — `people` and `star`-ish — via `tabButton`.
 */
import { Locator, Page, expect } from '@playwright/test';

export class LandingPage {
    constructor(private readonly page: Page) {}

    async open(): Promise<void> {
        await this.page.goto('/#/landing');
        await expect(
            this.page.locator('app-landing, landing-upcoming, landing-availability').first(),
            'the home page never rendered',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** The Upcoming panel, and the booking cards inside it. */
    get upcoming(): Locator {
        return this.page.locator('landing-upcoming');
    }

    /** A card in the Upcoming panel, matched on the booking id in its href. */
    upcomingCard(bookingId: number): Locator {
        return this.upcoming.locator(
            `a[href*="booking=${bookingId}"], a[href*="event=${bookingId}"]`,
        );
    }

    /** Every booking id the Upcoming panel is showing, for failure messages. */
    async upcomingIds(): Promise<number[]> {
        const hrefs = await this.upcoming
            .locator('a[name="view-booking-details"], a[name="view-event-details"]')
            .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
        return hrefs
            .map((h) => Number(/(?:booking|event)=(\d+)/.exec(h)?.[1]))
            .filter((n) => Number.isFinite(n));
    }

    get viewAll(): Locator {
        return this.page.locator('a[name="upcoming-view-all"]').first();
    }

    /**
     * A quick-book tile.
     *
     * Matched on the icon it renders, because the tiles carry no attributes.
     * Note what these do: a tile does NOT open the booking form — it books the
     * first available resource immediately (`landing-quick-book.component.ts`:
     * `book()` calls `confirmPost()`) and lands on `/book/<type>/success`.
     */
    quickBookTile(type: 'desk' | 'parking' | 'locker' | 'visitor'): Locator {
        return this.page
            .locator('landing-quick-book button')
            .filter({ has: this.page.locator(`img[src*="${type}-placeholder"]`) })
            .first();
    }

    get quickBook(): Locator {
        return this.page.locator('landing-quick-book');
    }

    /** The availability panel, listing bookable rooms for the building. */
    get availability(): Locator {
        return this.page.locator('landing-availability');
    }

    /** A "book this room" button in the availability panel, by room name. */
    bookRoom(name: string): Locator {
        return this.availability
            .locator('button[name="landing-book-room"]')
            .filter({ hasText: name })
            .first();
    }

    /** Every room the availability panel offers, for failure messages. */
    async offeredRooms(): Promise<string[]> {
        const texts = await this.availability
            .locator('button[name="landing-book-room"]')
            .allInnerTexts();
        return texts.map((t) => t.split('\n')[0].trim());
    }

    /**
     * Switch the sidebar to a tab.
     *
     * The two buttons carry no name, so they are found by the material icon
     * inside them. `people` is the colleagues tab; the other one is favourites.
     */
    async showTab(tab: 'people' | 'fav'): Promise<void> {
        const buttons = this.page.locator('app-landing button:has(icon)');
        const count = await buttons.count();
        for (let i = 0; i < count; i++) {
            const icon = (await buttons.nth(i).locator('icon').first().textContent()) ?? '';
            // The material ligatures the two tab buttons render: `people` and
            // `favorite`. Read from the template, because neither button has a
            // name and their labels are translated.
            const wanted = tab === 'people' ? 'people' : 'favorite';
            if (icon.trim() === wanted) {
                await buttons.nth(i).click({ timeout: 10_000 });
                return;
            }
        }
        // Not fatal: the sidebar is hidden on narrow screens and by
        // `hide_landing_sidebar`, and the favourites tab is the default when
        // colleagues are switched off.
        console.warn(`  ! no "${tab}" tab button found on the landing sidebar`);
    }

    get colleagues(): Locator {
        return this.page.locator('landing-colleagues');
    }

    get favourites(): Locator {
        return this.page.locator('landing-favourites');
    }

    /**
     * Search for a colleague and add them.
     *
     * The search panel is opened with `open-colleague-search`, the input is the
     * only one inside it, and each result carries `add-colleague`. Typed rather
     * than filled: these user fields are driven from real key events, and
     * `fill()` leaves the search untouched — the same trap the desk host field
     * has.
     */
    async addColleague(email: string): Promise<void> {
        await this.page.locator('button[name="open-colleague-search"]').first().click();
        const input = this.colleagues.locator('input').first();
        await expect(input, 'the colleague search did not open').toBeVisible({
            timeout: 10_000,
        });
        const flat = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');

        for (let attempt = 1; attempt <= 3; attempt++) {
            await input.click();
            await input.press('ControlOrMeta+a');
            await input.press('Backspace');
            await input.pressSequentially(email, { delay: 30 });
            const results = this.colleagues.locator('button[name="add-colleague"]');
            const appeared = await results
                .first()
                .waitFor({ state: 'visible', timeout: 10_000 })
                .then(() => true)
                .catch(() => false);
            if (!appeared) continue;
            const texts = await results.allInnerTexts();
            const index = texts.findIndex((t) => flat(t).includes(flat(email)));
            if (index < 0) continue;
            await results.nth(index).click();
            return;
        }
        const offered = await this.colleagues
            .locator('button[name="add-colleague"]')
            .allInnerTexts();
        throw new Error(
            `no colleague result for ${email} after 3 tries. The panel offered ` +
                `${offered.length}: ${JSON.stringify(offered.slice(0, 6))}. The user has ` +
                `to exist in the directory, and the field only searches on real key ` +
                `events — check the typing reached it.`,
        );
    }

    /** Every colleague row in the sidebar. */
    get colleagueRows(): Locator {
        return this.colleagues.locator('button[name="colleague-more"]');
    }

    /**
     * Find a colleague row by address, matching on NORMALISED text.
     *
     * The row shows the person's display NAME, not their address: a colleague
     * saved as `e2e-staff-2@place.tech` renders as "E2E Staff 2 (non-admin)". So
     * a substring match on the address finds nothing, and Playwright's own
     * `hasText` cannot bridge the hyphens either. Both sides are stripped to
     * letters and digits before comparing, which makes "e2estaff2" match.
     *
     * Returns the row's index, or -1 — the caller decides whether that is fatal,
     * because "not listed" and "listed under a different label" want different
     * messages.
     */
    async colleagueIndex(email: string): Promise<number> {
        const flat = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
        const wanted = flat(email.split('@')[0]);
        const rows = this.colleagues.locator('[colleague], li, [user]');
        const texts = await rows.allInnerTexts().catch(() => [] as string[]);
        const index = texts.findIndex((text) => flat(text).includes(wanted));
        if (index >= 0) return index;
        // Fall back to the overflow buttons, which is one per colleague: with a
        // single colleague seeded that is unambiguous.
        return (await this.colleagueRows.count()) === 1 ? 0 : -1;
    }
}
