/**
 * Page object for `/book/desk/form` — the desk booking flow.
 *
 * SELECTOR POLICY, the same one the rest of the suite settled on: nothing here
 * depends on visible text, because every label is translated. The exceptions are
 * called out where they occur.
 *
 * ## What the dev's `bookDeskViaUI` already does, and why this exists anyway
 *
 * `e2e/support/flows.ts` books a desk end to end and is left untouched: it is
 * what the original desk specs use. It also fixes two choices — All Day on,
 * Require locker off — which is right for "prove a desk can be booked" and wrong
 * for everything added here, where the TIMES and the ALL-DAY flag are the
 * subject rather than a means to an end.
 *
 * So this is a page object rather than a flow: it exposes the fields and lets
 * each spec drive them. Anything about the form that was learned the hard way is
 * recorded here.
 *
 * ## The form is rebuilt while it initialises (REG-10 / PPT-2643)
 *
 * When async init completes the form is rebuilt and defaults are restored —
 * title back to "Booking", All Day back off, Require locker back ON. It is a
 * RACE, not a step: on a warm run it lands before anything is typed. Every
 * setter here is therefore used inside a converging block by its callers, the
 * same workaround `bookDeskViaUI` uses, and for the same reason it means these
 * specs cannot DETECT that bug (REG-10 has its own row saying so).
 */
import { Locator, Page, expect } from '@playwright/test';

export class DeskForm {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('desk-flow-form');
    }

    /** The title input. `name$=".title"` because the name is form-scoped. */
    get title(): Locator {
        return this.page.locator('input[name$=".title"]').first();
    }

    /**
     * The date field's button.
     *
     * NOT `#date button`: that id belongs to the MEETING form's own markup. The
     * desk form uses the shared `a-date-field` component, which renders a bare
     * button with no id and no name — so the field element is the handle and the
     * button is its only child of that kind. Measured; the borrowed meeting
     * selector simply timed out against an element that does not exist here.
     */
    get dateButton(): Locator {
        return this.root.locator('a-date-field button, date-field button').first();
    }

    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }

    /**
     * Scoped to the FORM, not the page.
     *
     * The desk picker modal carries its own date and time fields, so an
     * unscoped `button[time-field]` can match the modal's copy instead — and
     * then the click changes nothing about what gets booked.
     */
    get startTimeTrigger(): Locator {
        return this.root.locator('button[time-field]').first();
    }

    get durationTrigger(): Locator {
        return this.root.locator('button[duration-field]').first();
    }

    /** The All Day checkbox — matched through its label's text, see below. */
    get allDay(): Locator {
        return this.page.locator(
            'mat-checkbox:has-text("All Day") input[type="checkbox"]',
        );
    }

    /**
     * The "Require locker" checkbox.
     *
     * It defaults to CHECKED and no lockers are seeded, which makes the form
     * unsatisfiable with no error shown — the single most confusing thing about
     * this form. Every spec has to clear it.
     *
     * Matched on label text, which breaks the no-visible-text rule and is
     * inherited from the dev's `setCheckbox` helper: these two checkboxes carry
     * no name or id at all. Changing that is an app change, not a test change.
     */
    get requireLocker(): Locator {
        return this.page.locator(
            'mat-checkbox:has-text("Require locker") input[type="checkbox"]',
        );
    }

    /** The user field, rendered only when booking for others is enabled. */
    get userField(): Locator {
        return this.root.locator('a-user-field, a-user-search-field').first();
    }

    /**
     * Choose who the booking is for, from the host field's autocomplete.
     *
     * ## It has to be TYPED, not filled
     *
     * `fill()` sets the value and dispatches an input event, and this field
     * ignores it: nothing searched, no panel, no requests to `/users` at all.
     * Measured — the probe that found this saw zero network calls. The input
     * carries a `keyboard` directive and the search is driven from real key
     * events, so `pressSequentially` is the only thing that works.
     *
     * ## And the option shows the NAME
     *
     * Each option renders the user's name above their email, so an option for
     * `e2e-staff-1@place.tech` reads "E2E Staff 1 (non-admin)". Matching is done
     * on the email, which is in the option too, with punctuation stripped from
     * both sides so a display style like "E2E Staff 1" cannot cause a miss.
     *
     * The choice only lands when an option is PICKED. Leaving the text in the
     * box books the desk for whoever filled the form, silently — the same trap
     * the visitor and attendee fields have.
     */
    async chooseUser(email: string): Promise<void> {
        const flat = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
        const input = this.userField.locator('input').first();
        const options = this.page.locator('mat-option');

        for (let attempt = 1; attempt <= 3; attempt++) {
            await input.click();
            // CLEAR IT PROPERLY. The field arrives pre-filled with the signed-in
            // user's name and `fill('')` does not stick — the model writes it
            // straight back. Typing then APPENDS, and the search goes out as
            // "e2e staff 0 (non-admin)e-staff-1", which finds nobody. Select-all
            // and overwrite is what works.
            await input.press('ControlOrMeta+a');
            await input.press('Backspace');
            await input.pressSequentially(email, { delay: 30 });
            const appeared = await options
                .first()
                .waitFor({ state: 'visible', timeout: 10_000 })
                .then(() => true)
                .catch(() => false);
            if (!appeared) continue;

            const texts = await options.allInnerTexts();
            const index = texts.findIndex((text) => flat(text).includes(flat(email)));
            if (index < 0) continue;
            await options.nth(index).click();
            return;
        }

        const offered = await options.allInnerTexts();
        throw new Error(
            `no autocomplete option for ${email} after 3 tries. The panel offered ` +
                `${offered.length}: ${JSON.stringify(
                    offered.map((t) => t.replace(/\s+/g, ' ').trim()).slice(0, 8),
                )}. The user has to exist in the directory — seed.ts creates one staff ` +
                `user per worker — and the field only searches on real key events, so ` +
                `check the typing reached it.`,
        );
    }

    get addDeskButton(): Locator {
        return this.page.locator('button[name="add-desk"]');
    }

    /** The desks currently chosen on the form. */
    get chosenDesks(): Locator {
        return this.root.locator('[name="remove-desk"], button[name="remove-desk"]');
    }

    get confirmViewButton(): Locator {
        return this.page.locator('button[name="open-desk-confirm"]');
    }

    /** The final confirm, which lives in the overlay rather than in a dialog. */
    get confirmButton(): Locator {
        return this.page.locator('.cdk-overlay-container button[name="confirm-desk"]');
    }

    async open(): Promise<void> {
        await this.page.goto('/#/book/desk/form');
        await expect(
            this.root,
            'the desk form never rendered — is the `desks` feature enabled?',
        ).toBeVisible({ timeout: 30_000 });
        await expect(
            this.title,
            'the desk form rendered without its title field',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** Set a checkbox to a state, never blindly toggling it. */
    async setChecked(box: Locator, want: boolean): Promise<void> {
        if (!(await box.count())) return;
        if ((await box.isChecked()) === want) return;
        // `force`, because Material hides the real input behind its own markup.
        await box.click({ force: true, timeout: 10_000 });
    }

    /**
     * Pick a desk by name from the picker.
     *
     * Three steps: `add-desk` opens it, `select-desk` chooses a row, and
     * `toggle-desk` confirms — the last is only enabled once a row is selected.
     * The desk is matched on its NAME, which is test data we seeded
     * (`E2E Desk 0`), not app copy.
     */
    async chooseDesk(name: string): Promise<void> {
        await this.addDeskButton.click();
        const option = this.page
            .locator('button[name="select-desk"]')
            .filter({ hasText: name })
            .first();
        const found = await option
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            // Say what IS offered. "Not found" cannot tell apart a desk that was
            // never seeded, one on the wrong zone, and one the picker is hiding
            // because it is already booked at the chosen time.
            const offered = await this.page
                .locator('button[name="select-desk"]')
                .allInnerTexts();
            throw new Error(
                `no desk called "${name}" in the picker. It offers ${offered.length}: ` +
                    `${JSON.stringify(offered.map((t) => t.split('\n')[0].trim()))}. ` +
                    `Check the desk is seeded (seed.ts writes WORKERS + 1 of them into ` +
                    `the level zone's \`desks\` metadata), and that it is free at the ` +
                    `time chosen — a booked desk is simply absent.`,
            );
        }
        await option.click();
        const confirm = this.page.locator('button[name="toggle-desk"]');
        await expect(
            confirm,
            'the desk picker has no confirm button',
        ).toBeEnabled({ timeout: 10_000 });
        await confirm.click();
    }

    /**
     * The names of the desks currently on the form.
     *
     * `chosenDesks` counts the remove buttons, which is enough to know a desk is
     * chosen and NOT enough to know WHICH — and when a booking is moved from one
     * desk to another the count never changes. Asserting on the name is the only
     * way to see the swap land.
     */
    async chosenDeskNames(): Promise<string[]> {
        const rows = this.root.locator('desk-list-field div[desk]');
        const texts = await rows.allInnerTexts();
        return texts.map((t) => t.split('\n')[0].trim());
    }

    /**
     * Take the chosen desk off the form, so another can be picked.
     *
     * CONVERGING, because the form is rebuilt while it initialises and a click
     * that lands mid-rebuild does nothing — seen under a full parallel run as
     * "the desk was not removed from the form" on a click that plainly
     * happened. Re-clicking is safe: the loop stops as soon as the row is gone.
     */
    async removeDesk(): Promise<void> {
        const before = await this.chosenDesks.count();
        if (!before) return;
        await expect(async () => {
            if ((await this.chosenDesks.count()) >= before) {
                await this.chosenDesks.first().click({ timeout: 10_000 });
            }
            expect(
                await this.chosenDesks.count(),
                'the desk was not removed from the form',
            ).toBeLessThan(before);
        }).toPass({ timeout: 30_000 });
    }

    /**
     * Open the date picker, and keep trying until it is actually open.
     *
     * The picker is a `customTooltip` attached to the date button, which opens on
     * click — so one click SHOULD be enough. It is not: the desk form is rebuilt
     * when its async initialisation completes (REG-10), and a click that lands on
     * the old element does nothing at all, silently. Measured: the calendar
     * failed to appear about one attempt in two on a cold page, and the failure
     * surfaced later as a timeout clicking a day cell that was never there.
     */
    async openDatePicker(): Promise<void> {
        await expect(async () => {
            if (!(await this.datePicker.first().isVisible().catch(() => false))) {
                await this.dateButton.click({ timeout: 10_000 });
            }
            await expect(
                this.datePicker.first(),
                'the date picker did not open',
            ).toBeVisible({ timeout: 5_000 });
        }).toPass({ timeout: 45_000 });
    }

    /**
     * Drive the date picker to a given day.
     *
     * The calendar is a month grid of day cells with exactly one carrying the
     * "today" ring, so the only reliable way to reach a date is to find that
     * cell and count from it. The ring is drawn from a value captured at page
     * load, which is why its own day-of-month is read back and compared with the
     * browser clock rather than assumed — that is what makes this survive a run
     * crossing midnight.
     *
     * Cells outside the bookable range are DISABLED rather than absent
     * (`date-calendar.component.ts`: `[disabled]="day.id < from() || day.id > to()"`),
     * and for desks the range is 90 days by default (`desks.available_period`).
     * A disabled cell is reported as such instead of timing out on a click.
     */
    async pickDate(timestamp_ms: number): Promise<void> {
        // ONE converging attempt covering open, read, click and close.
        //
        // Every step here has been seen to fail on its own: the picker does not
        // open (the form rebuilt underneath the click), it opens with an EMPTY
        // grid for a tick, or it is torn down and recreated between reading the
        // cells and clicking one — which leaves the locator pointing at a
        // detached node and reports "0 cells" for a calendar that is plainly on
        // screen. Retrying the whole sequence is the only thing that is stable,
        // and it is safe because picking a date is idempotent.
        const target = new Date(timestamp_ms);
        target.setHours(0, 0, 0, 0);

        await expect(async () => {
            await this.openDatePicker();
            const cells = this.datePicker.locator('button[name="schedule-set-date"]');
            const grid = await cells.evaluateAll((els) =>
                els.map((el) => ({
                    text: (el.textContent ?? '').trim(),
                    disabled: (el as HTMLButtonElement).disabled,
                    today: !!el.querySelector('div.border-secondary'),
                })),
            );
            expect(grid.length, 'the calendar rendered no day cells').toBeGreaterThan(0);

            const today_index = grid.findIndex((cell) => cell.today);
            expect(
                today_index,
                `no "today" cell to count from. The grid holds ${grid.length} cells: ` +
                    `${JSON.stringify(grid.map((c) => c.text))}`,
            ).toBeGreaterThanOrEqual(0);

            const label = Number(grid[today_index].text);
            const browser_now = await this.page.evaluate(() => Date.now());
            const anchor = [0, -1]
                .map((offset) => {
                    const day = new Date(browser_now);
                    day.setHours(0, 0, 0, 0);
                    day.setDate(day.getDate() + offset);
                    return day;
                })
                .find((day) => day.getDate() === label);
            expect(
                anchor,
                `the picker marks day ${label} as today, which is neither today nor ` +
                    `yesterday by the browser clock`,
            ).toBeTruthy();

            const days = Math.round((target.valueOf() - anchor!.valueOf()) / 86_400_000);
            const index = today_index + days;
            expect(
                index >= 0 && index < grid.length,
                `${target.toDateString()} is ${days} day(s) from the cell marked today ` +
                    `(index ${today_index} of ${grid.length}), outside the month grid ` +
                    `the picker shows`,
            ).toBe(true);
            expect(
                grid[index].disabled,
                `${target.toDateString()} is offered but DISABLED. Desks can be booked ` +
                    '`desks.available_period` days ahead (90 by default), so the day is ' +
                    'either too far out or in the past',
            ).toBe(false);

            await cells.nth(index).click({ timeout: 10_000 });
            await expect(
                this.datePicker.first(),
                'the date picker stayed open after choosing a day',
            ).toBeHidden({ timeout: 10_000 });
        }).toPass({ timeout: 60_000 });
    }

    /** Set the start time from the options offered, as "HH:mm". */
    async setStartTime(time: string): Promise<void> {
        await this.startTimeTrigger.click();
        const option = this.page.locator(`button[data-time="${time}"]`);
        await expect(
            option,
            `no start-time option for ${time} — the form offers times on a fixed step ` +
                `and only inside its bookable hours, so pick one it lists`,
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    /** Set the length in minutes, from the options offered. */
    async setDuration(minutes: number): Promise<void> {
        await this.durationTrigger.click();
        const option = this.page.locator(`button[data-duration="${minutes}"]`);
        await expect(
            option,
            `no ${minutes} minute option — lengths come on a fixed step up to ` +
                '`max_duration`',
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    /** Every start time on offer, read from `data-time` rather than the label. */
    async startTimeOptions(): Promise<string[]> {
        await this.startTimeTrigger.click();
        const options = this.page.locator('button[data-time]');
        await expect(options.first()).toBeVisible({ timeout: 10_000 });
        const values = await options.evaluateAll((els) =>
            els.map((el) => el.getAttribute('data-time') ?? ''),
        );
        await this.page.keyboard.press('Escape');
        return values.filter(Boolean);
    }

    /** Every length on offer, in minutes. */
    async durationOptions(): Promise<number[]> {
        await this.durationTrigger.click();
        const options = this.page.locator('button[data-duration]');
        await expect(options.first()).toBeVisible({ timeout: 10_000 });
        const values = await options.evaluateAll((els) =>
            els.map((el) => Number(el.getAttribute('data-duration'))),
        );
        await this.page.keyboard.press('Escape');
        return values.filter((v) => Number.isFinite(v));
    }

    /**
     * Move to the confirm dialog and send.
     *
     * If the dialog never appears the form was silently invalid — the message
     * says so rather than reporting a bare selector timeout, because that is
     * what actually happens when "Require locker" is left on.
     */
    async confirmAndSend(): Promise<void> {
        await this.confirmViewButton.click();
        await expect(
            this.confirmButton,
            'the confirm dialog did not open — the form was silently invalid. Check ' +
                '"Require locker" is cleared, a desk is selected, and the time is not ' +
                'in the past',
        ).toBeVisible({ timeout: 20_000 });
        await this.confirmButton.click();
    }
}
