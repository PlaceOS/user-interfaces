/**
 * The YOUR BOOKINGS page, as its own page object.
 *
 * ## Why this inherits rather than copies, and why it is not the owner
 *
 * The schedule was first built for the visitor specs, so
 * `visitor/your-bookings.page.ts` owns it: opening the list, walking the sidebar
 * calendar, the cards, the details modal, the overflow menu and the confirm
 * dialogs all live there. The rule this suite follows is that a shared element
 * stays in the file that introduced it and other areas inherit — so the room
 * specs extend it, and so does this.
 *
 * What is ADDED here is everything the page's own specs need and no other area
 * did: the five type filters, the filter panel, the empty state, and reading
 * which cards are on screen with their type.
 *
 * If the visitor area is ever retired, this is where the schedule should move
 * to — it is the page's own folder. Until then, moving it would rewrite specs
 * that are already green for no behavioural gain.
 */
import { Locator, expect } from '@playwright/test';
import { YourBookingsPage } from '../visitor/your-bookings.page';

/** The five type filters the schedule offers, by the name in their markup. */
export type ScheduleType = 'event' | 'desk' | 'parking' | 'visitor' | 'locker';

export class SchedulePage extends YourBookingsPage {
    /**
     * A type filter toggle — the VISIBLE one.
     *
     * Every filter is in the DOM more than once: the sidebar renders a set for
     * wide screens and the filter card renders another for narrow ones, and the
     * locker filter appears twice within the card alone. Only one copy is on
     * screen at a time.
     *
     * `:visible` is load-bearing, not tidiness. A plain `.first()` picks
     * whichever copy comes first in the DOM, which is the HIDDEN one for parking
     * and lockers — and clicking a hidden element does not fail fast, it waits.
     * Measured: a spec sat on that click for **16 minutes** until the test
     * timeout, then reported "the filter did not turn off", which is true and
     * says nothing about why.
     */
    filterToggle(type: ScheduleType): Locator {
        return this.page
            .locator(`button[name="schedule-toggle-${type}-filter"]:visible`)
            .first();
    }

    /** Is a type currently being shown? Read from the checkbox, not the class. */
    async isShown(type: ScheduleType): Promise<boolean> {
        const checkbox = this.filterToggle(type).locator('input[type="checkbox"]');
        if (!(await checkbox.count())) return false;
        return checkbox.isChecked().catch(() => false);
    }

    /**
     * Make sure a type is shown, or hidden.
     *
     * ENSURE, never blindly toggle. Clicking a filter that is already in the
     * wanted state inverts it, and the list then looks like the booking is
     * missing — the single most misleading failure this page can produce.
     */
    async setShown(type: ScheduleType, shown: boolean): Promise<void> {
        const toggle = this.filterToggle(type);
        if (!(await toggle.count())) {
            const in_dom = await this.page
                .locator(`button[name="schedule-toggle-${type}-filter"]`)
                .count();
            throw new Error(
                in_dom
                    ? `the ${type} filter is in the DOM ${in_dom} time(s) but none of ` +
                      `them is visible, so it cannot be clicked. The schedule renders ` +
                      `one set of filters for wide screens and another for narrow ones.`
                    : `the schedule has no ${type} filter at all. It is only rendered ` +
                      `when that booking type is enabled for the org ` +
                      `(schedule-state.service.ts: \`_canLoadBookingType\`), so this is ` +
                      `a configuration difference, not a selector problem.`,
            );
        }
        // CONVERGE, do not click once and hope. The schedule re-renders its
        // filters while its per-type requests come back — most visibly right
        // after a reload — and a click that lands mid-render is undone by it.
        // Seen exactly once, on the locker filter after a reload: the click
        // registered and the state was back on a moment later.
        //
        // Clicking again is safe here BECAUSE the click is guarded by the state
        // check: a filter already in the wanted state is never touched.
        await expect(async () => {
            if ((await this.isShown(type)) !== shown) {
                // An explicit timeout, so a control that cannot be clicked says
                // so in seconds rather than sitting until the test times out.
                await toggle.click({ timeout: 10_000 });
            }
            expect(
                await this.isShown(type),
                `the ${type} filter did not stay turned ${shown ? 'on' : 'off'}`,
            ).toBe(shown);
        }).toPass({ timeout: 30_000 });
    }

    /**
     * Show only these types, and nothing else.
     *
     * A type whose filter is not on screen is skipped rather than fatal: which
     * filters exist depends on what the org has enabled, and a spec about desks
     * should not fail because lockers are switched off for this deployment.
     */
    async showOnly(types: ScheduleType[]): Promise<void> {
        const all: ScheduleType[] = ['event', 'desk', 'parking', 'visitor', 'locker'];
        for (const type of all) {
            if (!(await this.filterToggle(type).count())) continue;
            await this.setShown(type, types.includes(type));
        }
    }

    /** The "remove this filter" chip for a type, shown above the list. */
    filterChip(type: ScheduleType): Locator {
        return this.page
            .locator(`button[name="schedule-remove-${type}-filter"]`)
            .first();
    }

    /** Every booking card on screen, whatever its type. */
    get cards(): Locator {
        return this.page.locator('a[name="view-booking-details"]');
    }

    /** Every room/event card on screen — a different card component entirely. */
    get eventCards(): Locator {
        return this.page.locator('a[name="view-event-details"]');
    }

    /**
     * How many cards of any kind are rendered.
     *
     * Both kinds are counted on purpose: a filter bug that leaves ROOM cards on
     * screen while hiding desks would otherwise read as success.
     */
    async cardCount(): Promise<number> {
        return (await this.cards.count()) + (await this.eventCards.count());
    }

    /**
     * Wait for the list to settle on a count.
     *
     * The schedule loads each booking type in its own request, so the card count
     * climbs for a moment after the page is otherwise ready. Asserting straight
     * away is how a spec ends up measuring the loading state.
     */
    async waitForCards(expected: number, timeout = 20_000): Promise<void> {
        await expect(async () => {
            expect(await this.cardCount()).toBe(expected);
        }).toPass({ timeout });
    }

    /**
     * The empty state shown for a day with nothing on it.
     *
     * Matched on its ILLUSTRATION, because that is the only stable handle: the
     * block carries no attribute and no id, and its message is translated
     * (`APP.WORKPLACE.SCHEDULE_EMPTY`). An image path is not app copy, so this
     * does not break the no-visible-text rule — but it does mean a redesign that
     * renames the asset will fail this locator rather than silently pass.
     */
    get emptyState(): Locator {
        return this.page.locator('img[src*="no-events"]').first();
    }

    /**
     * Which form "Edit" is expected to land on — settable, because on THIS page
     * it depends on the booking, not on the page.
     *
     * Every other area knows its answer up front: a visitor invite always opens
     * the visitor form, a room booking always opens the meeting form. The
     * schedule lists every type at once and routes per booking
     * (`schedule.component.ts`: `edit` for events, `editBooking` for the rest),
     * so the expectation belongs to the test rather than to the class. Setting it
     * lets the inherited `startEdit` be reused as-is instead of copied.
     */
    private _edit_form = 'invite-visitor-form';

    expectEditForm(selector: string): void {
        this._edit_form = selector;
    }

    protected override get editForm(): Locator {
        return this.page.locator(this._edit_form);
    }

    protected override get editFormHint(): string {
        return (
            'The schedule offers Edit per booking type and routes accordingly: desks, ' +
            'parking, lockers and visitors go to /book/<type> via `editBooking`, and ' +
            'room bookings go to the meeting form via `edit`. A booking that has ' +
            'finished, or one somebody else made, may offer no Edit item at all. ' +
            `This test was expecting "${this._edit_form}".`
        );
    }

    /**
     * Put a known booking on screen: right filters, right day, card present.
     *
     * ## Why this reloads rather than just waiting
     *
     * The schedule's list can be STALE. Under a full parallel run — fifteen
     * tests hammering this page at once — a page opened moments after a booking
     * was created has been seen listing a set of cards that did not include it,
     * while the booking was live on the backend and rendered perfectly on the
     * next load. Measured twice, in the cancel specs, with card sets made up
     * entirely of older bookings.
     *
     * Waiting longer does not help, because nothing refetches: the list is built
     * once per day change. So this re-applies the view and reloads if the card is
     * not there, which is what a person would do.
     *
     * It is a WORKAROUND, and it is deliberately confined to this helper rather
     * than hidden inside `card()`, so it is obvious in the specs that use it and
     * easy to delete. If the staleness turns out to be a real defect rather than
     * a side effect of this suite's own load, this is the thing to point at.
     */
    async showBooking(
        bookingId: number,
        date_ms: number,
        types: ScheduleType[],
        /**
         * Optional: what the BACKEND says about this booking right now.
         *
         * Worth the extra argument. "The card is not on screen" has two very
         * different causes — the page cannot see a booking that exists, or the
         * booking no longer exists because something deleted it — and they look
         * identical from the DOM. A spec that passes this gets the answer in the
         * failure message instead of a debugging session.
         */
        probe?: () => Promise<string>,
    ): Promise<void> {
        let attempt = 0;
        await expect(async () => {
            attempt += 1;
            if (attempt > 1) {
                await this.page.reload();
                await this.waitForLoaded();
            }
            await this.showOnly(types);
            await this.showDayOf(date_ms);
            await this.waitForLoaded();
            const rendered = await this.renderedBookingIds();
            if (!rendered.includes(bookingId)) {
                const backend = probe ? await probe().catch((e) => `probe failed: ${e}`) : 'not probed';
                expect(
                    rendered,
                    `booking ${bookingId} is not on screen (attempt ${attempt}). ` +
                        `Rendered: [${rendered.join(', ')}]. Backend says: ${backend}`,
                ).toContain(bookingId);
            }
        }).toPass({ timeout: 90_000 });
    }

    /** The loading bar the schedule shows while its per-type requests are out. */
    get loadingBar(): Locator {
        return this.page.locator('mat-progress-bar');
    }

    /** Wait for the schedule to stop loading, so a count is worth reading. */
    async waitForLoaded(timeout = 30_000): Promise<void> {
        await expect(this.loadingBar, 'the schedule never stopped loading').toHaveCount(
            0,
            { timeout },
        );
    }
}
