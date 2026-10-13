/**
 * Page object for `/your-bookings` — the schedule list and the booking details
 * modal it opens.
 *
 * SELECTOR POLICY, same as `invite-form.page.ts`: nothing here depends on
 * visible text, because all of it is translated. The awkward one is the
 * "Associate" badge, which is the only marker on a card with no attribute of
 * its own:
 *
 *   <div class="bg-warning/50 absolute top-14 right-2 ...">Associate</div>
 *
 * It is one of the card's warning badges, which all have that class shape. The
 * others are the `group-event` badge and the reserved-parking badges — which a
 * visitor booking can never have, since those are different `booking_type`s. So
 * `.absolute.top-14.right-2`, scoped to a card we have already identified by
 * booking id, is unambiguous here even though it would not be in general. The
 * corner above it (`top-2`) holds the type icon of every card and the
 * `checked-in-badge`. If another badge is ever added at `top-14` this breaks,
 * which is why the locator carries a failure message saying so.
 *
 * Cards are found by booking id rather than by title: the card anchor renders
 * `routerLink` query params into its href, so `?booking=123` is real data in
 * the DOM and cannot be knocked out by a copy change.
 */
import { Locator, Page, expect } from '@playwright/test';
import {
    calendarDayLabel,
    calendarIndexForDate,
    pickCalendarDay,
    selectedCalendarIndex,
} from './calendar';

/**
 * The booking types the schedule can filter on, and the icon of each filter.
 *
 * The filter toggles of the sidebar have no `name` attribute. The icon is the
 * only handle that is not translated (`schedule-sidebar.component.ts`,
 * `feature_list`).
 */
export type ScheduleType = 'event' | 'desk' | 'parking' | 'visitor' | 'locker';

const FILTER_ICONS: Record<ScheduleType, string> = {
    event: 'meeting_room',
    desk: 'desk',
    parking: 'drive_eta',
    visitor: 'people',
    locker: 'lock',
};

/**
 * ## The page has three views, and this class uses two of them
 *
 * `/your-bookings` opens on the DAY view, which draws bookings on a timeline
 * with no id on them. The cards that this class finds by booking id are on
 * the LIST view only, so `open` asks for `?view=list`.
 *
 * The list view has no single-day calendar: its sidebar holds a range picker.
 * `showDayOf` therefore goes to the day view, picks the day on the calendar
 * there, and comes back. The day is kept across the view change. A reload
 * puts the list back on today.
 */
export class YourBookingsPage {
    // `protected`, not `private`, so another area can inherit this page rather
    // than copy it. The schedule is not visitor-specific — the room specs need
    // the same list, cards, details modal and overflow menu — so the shared
    // behaviour stays here, its owner, and `room/schedule.page.ts` extends it
    // with what is room-shaped (event cards instead of booking cards).
    constructor(protected readonly page: Page) {}

    /** Open the list view and wait for the schedule to render. */
    async open(): Promise<void> {
        await this.page.goto('/#/your-bookings?view=list');
        await expect(
            this.page.locator('schedule-topbar'),
            'the schedule never rendered',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** The link of the topbar that changes the view. */
    protected viewLink(view: 'day' | 'week' | 'list'): Locator {
        return this.page.locator(`schedule-topbar a[href*="view=${view}"]`);
    }

    /**
     * A type filter of the sidebar.
     *
     * The sidebar shows from the `sm` breakpoint up, which covers the desktop
     * size the suite runs at. A filter is only rendered when its booking type
     * is enabled for the org.
     */
    typeFilter(type: ScheduleType): Locator {
        return this.page.locator('schedule-sidebar settings-toggle').filter({
            has: this.page.locator('icon', {
                hasText: new RegExp(`^\\s*${FILTER_ICONS[type]}\\s*$`),
            }),
        });
    }

    /** Is a type currently being shown? Read from the checkbox, not the class. */
    async isShown(type: ScheduleType): Promise<boolean> {
        const checkbox = this.typeFilter(type).locator('input[type="checkbox"]');
        if (!(await checkbox.count())) return false;
        return checkbox.isChecked().catch(() => false);
    }

    /**
     * Turn a type filter on, if the page has it and it is off.
     *
     * ENSURE, never blindly toggle: clicking a filter that is already on turns
     * it off, and the list then looks like the booking is missing.
     */
    protected async ensureShown(type: ScheduleType): Promise<void> {
        const toggle = this.typeFilter(type);
        if (!(await toggle.count())) return;
        if (!(await this.isShown(type))) {
            await toggle.locator('button').first().click({ timeout: 10_000 });
        }
    }

    /** Make sure visitor bookings are among the types being shown. */
    async showVisitors(): Promise<void> {
        await this.ensureShown('visitor');
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
     * Resolve the date from the displayed month and its rendered day-1 position.
     * Recalculate after loading, since selecting an adjacent-month day can
     * rebuild the grid and move the target to a different index. This does not
     * require today to be visible and respects the rendered week ordering.
     */
    async showDayOf(timestamp_ms: number): Promise<void> {
        // The single-day calendar is on the day view only. See the class note.
        await this.viewLink('day').click();
        try {
            await this.pickDayOnDayView(timestamp_ms);
        } finally {
            await this.viewLink('list').click();
            await expect(
                this.page.locator('schedule-day-view'),
                'the schedule did not go back to the list view',
            ).toHaveCount(0, { timeout: 15_000 });
            // The change of view starts a new query on a 300ms debounce, and
            // the list drops its cards while it loads. A card clicked in that
            // gap is destroyed before its details open, so settle first.
            await this.page.waitForTimeout(500);
            await expect(
                this.page.locator('mat-progress-bar'),
                'the schedule never finished loading the list view',
            ).toHaveCount(0, { timeout: 30_000 });
        }
    }

    /** Pick a day on the sidebar calendar of the day view, and check it holds. */
    private async pickDayOnDayView(timestamp_ms: number): Promise<void> {
        const calendar = this.page.locator('schedule-sidebar date-calendar');
        // Twice, if needed. Under a loaded parallel run the schedule has been
        // seen back on today after the click — the component rebinds its date
        // from the service while the first query is still in flight, and the
        // selection goes with it. Re-picking is cheap; a missing card that
        // actually means "wrong day" costs a 30s timeout and looks like a bug
        // in the app.
        for (let attempt = 1; attempt <= 2; attempt++) {
            await pickCalendarDay(this.page, calendar, timestamp_ms);
            // The list re-queries on a 300ms debounce and blanks itself while
            // loading, so settle before judging anything.
            await this.page.waitForTimeout(500);
            await expect(
                this.page.locator('mat-progress-bar'),
                'the schedule never finished reloading after the day changed',
            ).toHaveCount(0, { timeout: 30_000 });

            if (
                (await selectedCalendarIndex(calendar)) ===
                (await calendarIndexForDate(calendar, timestamp_ms))
            )
                return;
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
        return this.card(bookingId).locator('div.absolute.top-14.right-2');
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
            const showing = await this.page.locator('schedule-list-view h3').allInnerTexts();
            throw new Error(
                `no card for booking ${bookingId} on the list view of /your-bookings, ` +
                    `which is showing ${JSON.stringify(showing.map((t) => t.trim()))}. ` +
                    `${rendered.length} card(s) are rendered: [${rendered.join(', ')}]. ` +
                    `Check the day being shown is the booking's own day (\`showDayOf\` ` +
                    `moves it), that the visitor filter is on, and that the list is not ` +
                    `dominated by leftovers from earlier runs.`,
            );
        }
        const modal = this.page.locator('booking-details-modal');
        // The list drops its cards while it loads, and a card that is dropped
        // after the click never opens its details. A late answer for another
        // day can start such a load at any time, so click again if needed.
        await expect(async () => {
            if (!(await modal.isVisible())) await card.click({ timeout: 5_000 });
            await expect(modal).toBeVisible({ timeout: 5_000 });
        }, 'the booking details modal did not open').toPass({ timeout: 30_000 });
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
     * The form that pressing Edit is expected to land on.
     *
     * A hook, not a constant, because `startEdit` below is shared and only this
     * differs by booking type — a room booking lands on the meeting form. See
     * `room/schedule.page.ts`.
     */
    protected get editForm(): Locator {
        return this.page.locator('visitor-flow-new');
    }

    /** What to suggest when the Edit item is missing. Type-specific. */
    protected get editFormHint(): string {
        return (
            'Visitor bookings need `app.visitors.allow_editing = true`, and a booking ' +
            'that is checked in or already done cannot be edited at all.'
        );
    }

    /**
     * Open a booking for editing and land on its pre-filled form.
     *
     * For visitors that needs `visitors.allow_editing` — without it `can_edit`
     * is false and the menu simply has no Edit item, which would look like a
     * broken selector.
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
                    this.editFormHint,
            );
        }
        await edit.click();
        await expect(
            this.editForm,
            `pressing Edit did not land on the expected form. ${this.editFormHint}`,
        ).toBeVisible({ timeout: 30_000 });
    }
}
