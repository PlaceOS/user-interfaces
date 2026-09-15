/**
 * Page object for `/your-bookings` — the schedule list and the booking details
 * modal it opens.
 *
 * SELECTOR POLICY, same as `invite-form.page.ts`: nothing here depends on
 * visible text, because all of it is translated. The awkward one is the
 * "Associate" badge, which is the only marker on a card with no attribute of
 * its own:
 *
 *   <div class="bg-warning/50 absolute top-2 right-2 ...">Associate</div>
 *
 * Its sibling above it DOES have one (`checked-in-badge`), and the only other
 * element that could match the class shape is the `group-event` badge — which a
 * visitor booking can never be, since that is a different `booking_type`. So
 * `.absolute.top-2.right-2:not([checked-in-badge])`, scoped to a card we have
 * already identified by booking id, is unambiguous here even though it would
 * not be in general. If a third badge is ever added to that corner this breaks,
 * which is why the locator carries a failure message saying so.
 *
 * Cards are found by booking id rather than by title: the card anchor renders
 * `routerLink` query params into its href, so `?booking=123` is real data in
 * the DOM and cannot be knocked out by a copy change.
 */
import { Locator, Page, expect } from '@playwright/test';
import {
    calendarDayLabel,
    pickCalendarDay,
    selectedCalendarIndex,
} from './calendar';

export class YourBookingsPage {
    constructor(private readonly page: Page) {}

    /** Open the list and wait for the schedule to render. */
    async open(): Promise<void> {
        await this.page.goto('/#/your-bookings');
        await expect(
            this.page.locator('button[name="schedule-toggle-visitor-filter"]').first(),
            'the schedule filters never rendered — is the `visitor-invite` feature enabled?',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** Make sure visitor bookings are among the types being shown. */
    async showVisitors(): Promise<void> {
        const toggle = this.page
            .locator('button[name="schedule-toggle-visitor-filter"]')
            .first();
        // ENSURE, never blindly toggle: clicking a filter that is already on
        // turns it off, and the list then looks like the booking is missing.
        const checkbox = toggle.locator('input[type="checkbox"]');
        if (await checkbox.count()) {
            if (!(await checkbox.isChecked().catch(() => false))) await toggle.click();
        }
    }

    /**
     * Show the day a given moment falls on, rather than trusting the default.
     *
     * The schedule opens on whatever "today" was when the page loaded and never
     * moves again, so a spec whose booking is not on that day sees an empty
     * list. That is not only a tomorrow problem: a run that starts at 23:58 and
     * loads the page at 00:01 is looking at the NEW day while its booking sits
     * on the old one. The symptom is a missing card, which looks nothing like a
     * clock problem.
     *
     * Driving the sidebar calendar is the only stable way to move the view —
     * there is no date in the URL, and `schedule-mobile-calendar` is `sm:hidden`
     * so it does not exist at the desktop viewport the suite runs at.
     *
     * The grid is 42 consecutive day cells, so ONE known cell fixes every other
     * one by counting. The known cell is the one carrying the "today" ring,
     * which the component renders from its own `today`, captured when the page
     * loaded. Its day-of-month is read back and matched against the clock to
     * work out which real date the ring means — today, or yesterday if the run
     * has just crossed midnight. Counting from there is immune to the clock
     * moving underneath us afterwards.
     */
    async showDayOf(timestamp_ms: number): Promise<void> {
        const calendar = this.page.locator('schedule-sidebar date-calendar');
        // Twice, if needed. Under a loaded parallel run the schedule has been
        // seen back on today after the click — the component rebinds its date
        // from the service while the first query is still in flight, and the
        // selection goes with it. Re-picking is cheap; a missing card that
        // actually means "wrong day" costs a 30s timeout and looks like a bug
        // in the app.
        for (let attempt = 1; attempt <= 2; attempt++) {
            const wanted = await pickCalendarDay(this.page, calendar, timestamp_ms);
            // The list re-queries on a 300ms debounce and blanks itself while
            // loading, so settle before judging anything.
            await this.page.waitForTimeout(500);
            await expect(
                this.page.locator('mat-progress-bar'),
                'the schedule never finished reloading after the day changed',
            ).toHaveCount(0, { timeout: 30_000 });

            if ((await selectedCalendarIndex(calendar)) === wanted) return;
        }
        const selected = await selectedCalendarIndex(calendar);
        throw new Error(
            `the schedule would not stay on ${new Date(timestamp_ms).toDateString()}. ` +
                `After two attempts it is showing day ` +
                `"${await calendarDayLabel(calendar, selected)}" instead.`,
        );
    }

    /**
     * Accept the app's confirmation dialog ("are you sure?").
     *
     * Used by check-out, which asks before releasing the booking. The dialog is
     * the shared `confirm-modal`, whose accept button carries `name="accept"` —
     * the one control in this flow with a stable attribute, and the reason this
     * does not have to match the translated "Check out" label.
     */
    async acceptConfirm(): Promise<void> {
        const accept = this.page.locator(
            '.cdk-overlay-container button[name="accept"]',
        );
        await expect(
            accept,
            'the confirmation dialog did not open, so there was nothing to accept',
        ).toBeVisible({ timeout: 15_000 });
        await accept.click();
        await expect(accept, 'the confirmation dialog did not close').toBeHidden({
            timeout: 15_000,
        });
    }

    /** The card for a specific booking, matched on the id in its href. */
    card(bookingId: number): Locator {
        return this.page.locator(`a[name="view-booking-details"][href*="booking=${bookingId}"]`);
    }

    /**
     * The "Associate" badge — shown when the booking's HOST is not the signed-in
     * user, which for a visitor invite means somebody booked it on their behalf.
     */
    associateBadge(bookingId: number): Locator {
        return this.card(bookingId).locator(
            'div.absolute.top-2.right-2:not([checked-in-badge])',
        );
    }

    /** The green badge that replaces the Associate one once checked in. */
    checkedInBadge(bookingId: number): Locator {
        return this.card(bookingId).locator('div[checked-in-badge]');
    }

    /** The "For {name}" line, shown only when the host is somebody else. */
    bookedForLine(bookingId: number): Locator {
        return this.card(bookingId).locator('div[booked-for]');
    }

    /** The booking ids of every card currently rendered, for failure messages. */
    async renderedBookingIds(): Promise<number[]> {
        const hrefs = await this.page
            .locator('a[name="view-booking-details"]')
            .evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''));
        return hrefs
            .map((h) => Number(/booking=(\d+)/.exec(h)?.[1]))
            .filter((n) => Number.isFinite(n));
    }

    /** Open a booking's details modal and wait for it. */
    async openDetails(bookingId: number): Promise<Locator> {
        const card = this.card(bookingId);
        const found = await card
            .waitFor({ state: 'visible', timeout: 30_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            // Say what IS on the page. "Element not found" alone cannot
            // distinguish "wrong day", "filter off" and "the list is so full of
            // old bookings that this one is paged out".
            const rendered = await this.renderedBookingIds();
            const calendar = this.page.locator('schedule-sidebar date-calendar');
            const showing = await calendarDayLabel(
                calendar,
                await selectedCalendarIndex(calendar),
            );
            throw new Error(
                `no card for booking ${bookingId} on /your-bookings, which is showing ` +
                    `day "${showing}" of the month. ` +
                    `${rendered.length} card(s) are rendered: [${rendered.join(', ')}]. ` +
                    `Check the day being shown is the booking's own day (\`showDayOf\` ` +
                    `moves it), that the visitor filter is on, and that the list is not ` +
                    `dominated by leftovers from earlier runs.`,
            );
        }
        await card.click();
        const modal = this.page.locator('booking-details-modal');
        await expect(modal, 'the booking details modal did not open').toBeVisible({
            timeout: 20_000,
        });
        return modal;
    }

    /**
     * The check-in button inside an open details modal.
     *
     * `div[actions]` holds exactly two buttons: this one, which carries `btn`,
     * and the overflow menu, which carries `icon`. Selecting on `btn` avoids the
     * translated label. The button is only rendered when check-in is available
     * at all, so a spec should assert on its visibility rather than assume it.
     */
    checkInButton(modal: Locator): Locator {
        // Note: this is ALSO the check-out button. The app flips the same
        // control once you are checked in, so a spec that checks in and then out
        // uses this twice rather than looking for a second button.
        return modal.locator('div[actions] button[btn]');
    }

    /**
     * Open the modal's overflow menu — the "..." next to check-in.
     *
     * It is the `icon` button in `div[actions]`; check-in is the `btn` one. The
     * two are told apart by attribute rather than position, so adding a third
     * control would not silently repoint this at the wrong thing.
     */
    async openOverflowMenu(modal: Locator): Promise<void> {
        await modal.locator('div[actions] button[icon]').click();
        await expect(
            this.page.locator('.cdk-overlay-container [mat-menu-item]').first(),
            'the booking overflow menu did not open',
        ).toBeVisible({ timeout: 10_000 });
    }

    /**
     * A menu action, identified by its MATERIAL ICON rather than its label.
     *
     * The menu items carry no attributes and their labels are translated, but
     * each renders an icon ligature — `edit`, `delete` — which is an icon name
     * in the source, not copy. That is the only stable handle here.
     *
     * Read explicitly rather than matched with a text selector. Two attempts at
     * the latter both silently matched nothing while the item was plainly in the
     * DOM: `icon:text-is("edit")` binds to the innermost element holding the
     * text, so it never matches the <icon> wrapper, and `hasText` with an
     * anchored regex did not match either. Comparing trimmed `textContent` is
     * duller and it works.
     */
    async menuAction(icon: string): Promise<Locator | null> {
        const items = this.page.locator('.cdk-overlay-container button[mat-menu-item]');
        const count = await items.count();
        for (let i = 0; i < count; i++) {
            const item = items.nth(i);
            const label = (await item.locator('icon').first().textContent()) ?? '';
            if (label.trim() === icon) return item;
        }
        return null;
    }

    /** Dismiss a confirmation dialog without accepting it. */
    async dismissConfirm(): Promise<void> {
        // The decline button is the footer button that is NOT `accept`. Its
        // label is translated, so it cannot be matched on text.
        const decline = this.page
            .locator('.cdk-overlay-container footer button:not([name="accept"])')
            .first();
        await expect(
            decline,
            'the confirmation dialog did not open, so there was nothing to dismiss',
        ).toBeVisible({ timeout: 15_000 });
        await decline.click();
        await expect(decline, 'the confirmation dialog did not close').toBeHidden({
            timeout: 15_000,
        });
    }

    /**
     * Start cancelling a booking from the app: details -> overflow -> Cancel.
     *
     * Stops at the confirmation dialog, so a caller can accept it or walk away.
     * The menu item is found by its `delete` icon; every other item in that menu
     * uses a different one. There can be more than one delete-ish action on a
     * booking (remove this one, remove the whole series, remove the group), so
     * this fails loudly rather than picking the first of several — cancelling
     * the wrong thing would look like a passing test.
     */
    async startCancel(bookingId: number): Promise<void> {
        const modal = await this.openDetails(bookingId);
        await this.openOverflowMenu(modal);
        const icons = await this.page
            .locator('.cdk-overlay-container button[mat-menu-item] icon')
            .allTextContents();
        const deletes = icons.filter((i) => i.trim() === 'delete').length;
        if (deletes !== 1) {
            throw new Error(
                `expected exactly one Cancel action in the booking menu, found ` +
                    `${deletes}. The menu holds: ${JSON.stringify(icons.map((i) => i.trim()))}. ` +
                    `More than one means this booking also offers "remove series" or ` +
                    `"remove group", and picking blindly could cancel the wrong thing.`,
            );
        }
        const remove = await this.menuAction('delete');
        if (!remove) throw new Error('no Cancel action in the booking menu');
        await remove.click();
    }

    /**
     * Open a booking for editing and land on the pre-filled invite form.
     *
     * Needs `visitors.allow_editing` — without it `can_edit` is false for a
     * visitor booking and the menu simply has no Edit item, which would look
     * like a broken selector.
     */
    async startEdit(bookingId: number): Promise<void> {
        const modal = await this.openDetails(bookingId);
        await this.openOverflowMenu(modal);
        const edit = await this.menuAction('edit');
        if (!edit) {
            // Say what IS in the menu. "Edit is missing" and "my locator cannot
            // see Edit" look identical as a selector timeout, and only one of
            // them is a problem with the app's configuration.
            const items = await this.page
                .locator('.cdk-overlay-container button[mat-menu-item]')
                .evaluateAll((els) =>
                    els.map((e) => (e.textContent ?? '').replace(/\s+/g, ' ').trim()),
                );
            throw new Error(
                `no Edit action in the booking menu. The menu contains ` +
                    `${items.length} item(s): ${JSON.stringify(items)}. ` +
                    `Visitor bookings need \`app.visitors.allow_editing = true\`, and a ` +
                    `booking that is checked in or already done cannot be edited at all.`,
            );
        }
        await edit.click();
        await expect(
            this.page.locator('invite-visitor-form'),
            'editing did not land on the visitor form',
        ).toBeVisible({ timeout: 30_000 });
    }
}
