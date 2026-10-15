/**
 * Page object for `/book/desk/form` — the `desk-flow-new` booking flow.
 *
 * ## One page, no modal
 *
 * The flow that this one replaced had a form, a desk picker modal and a
 * confirm overlay. This flow has one page: `desk-flow-details` holds who and
 * what, `desk-flow-select` holds when and which desk, and the Confirm button
 * sends the booking at once. There is no second confirmation step, so a spec
 * must read the form back BEFORE it clicks Confirm.
 *
 * ## Selector policy
 *
 * The same as the rest of the suite: no translated text. Most controls here
 * have no `name` attribute. They are matched on the element structure and on
 * their icon ligature, which is not translated.
 *
 * ## The filters are in the DOM two times
 *
 * `desk-flow-select` renders a desktop filter column and a mobile filter sheet
 * with the same fields. `desk-flow-details` has a third copy of the date and
 * time fields, which shows below the `sm` breakpoint only. One copy is
 * visible for a viewport, so every filter locator here is limited to visible
 * elements. All copies write to the same form model.
 *
 * ## The page renders after the action returns
 *
 * The app runs without zone.js, so it renders the result of a click a moment
 * after the click returns. After each action, wait on the thing that changes.
 * A read of the page directly after the action can see the old state.
 *
 * ## The desk list has pages
 *
 * The list shows ten desks on a page. Other specs add levels and desks while
 * this one runs, so a desk can be on a later page. `selectDesk` and
 * `deskNames` go through the pages.
 *
 * ## The form reset of the initialisation (REG-10 / PPT-2643)
 *
 * This flow resets its form when the component starts, which is before the
 * first render. The reset comes later only when the signed-in user is not
 * loaded at that time. Then the reset waits for `GET /users/current`, and it
 * keeps the edits that the user made in the meantime. The specs do not
 * converge on the form state. `desk-initialisation.spec.ts` holds that request
 * to put its edits before the reset.
 */
import { Locator, Page, expect } from '@playwright/test';

/** Upper limit for a walk through the pages of the desk list. */
const MAX_LIST_PAGES = 30;

/**
 * The name of a desk, inside its row of the list. The row has no handle for
 * it, and the text of the row starts with icon ligatures.
 */
const ROW_NAME = 'button[name="select-item"] > div:nth-child(2) > div:first-child';

export class DeskFlow {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('desk-flow-new');
    }

    private get details(): Locator {
        return this.root.locator('desk-flow-details');
    }

    /** The visible copy of a control in the filters of `desk-flow-select`. */
    private filter(selector: string): Locator {
        return this.root
            .locator('desk-flow-select')
            .locator(selector)
            .filter({ visible: true });
    }

    /** An icon, by its ligature. Anchored, so `person` is not `person_add`. */
    private icon(name: string): Locator {
        return this.page.locator('icon', { hasText: new RegExp(`^\\s*${name}\\s*$`) });
    }

    /** The title input. `name$=".title"` because the name is form-scoped. */
    get title(): Locator {
        return this.details.locator('input[name$=".title"]');
    }

    /** The button of the date field in the filters. */
    get dateButton(): Locator {
        return this.filter('date-field button').first();
    }

    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }

    /** Rendered only while All Day is off. */
    get startTimeTrigger(): Locator {
        return this.filter('button[time-field]');
    }

    /** Rendered only while All Day is off. */
    get durationTrigger(): Locator {
        return this.filter('button[duration-field]');
    }

    /**
     * The All Day toggle of the filters: the `settings-toggle` directly after
     * the date field. This flow shows it with or without `allow_all_day`.
     */
    get allDay(): Locator {
        return this.filter('date-field + settings-toggle');
    }

    /** The native checkbox of the All Day toggle. Read the state from this. */
    get allDayInput(): Locator {
        return this.allDay.locator('input[type="checkbox"]');
    }

    /**
     * The native checkbox of the Favorites Only toggle: the other
     * `settings-toggle` of the filter column. The feature toggles are one
     * level down, so the sibling selector does not match them.
     */
    get favouritesOnly(): Locator {
        return this.filter('date-field + settings-toggle ~ settings-toggle').locator(
            'input[type="checkbox"]',
        );
    }

    /**
     * The "Require locker" checkbox, rendered when `desks.can_book_lockers`
     * is on. It defaults to unchecked.
     *
     * It is the only checkbox of the details that has no `name`: the other
     * ones (`all_day`, `update_master`) are bound to a form field, and this
     * one is not.
     */
    get requireLocker(): Locator {
        return this.details.locator('mat-checkbox input[type="checkbox"]:not([name])');
    }

    /**
     * The booking type buttons. They show only when `desks.allow_groups` or
     * `can_book_for_others` is on.
     */
    get groupModeButton(): Locator {
        return this.details.locator('button[btn]').filter({ has: this.icon('group_add') });
    }

    get bookForOtherButton(): Locator {
        return this.details.locator('button[btn]').filter({ has: this.icon('person_add') });
    }

    /** The host field, rendered only while "Book for other" is active. */
    get userField(): Locator {
        return this.details.locator('a-user-search-field');
    }

    /** The member field, rendered only while Group is active. */
    get groupField(): Locator {
        return this.details.locator('a-user-list-field');
    }

    get groupMembers(): Locator {
        return this.groupField.locator('mat-chip-row[user]');
    }

    /** The desk filter for levels. Rendered only in the list view. */
    get levelSelect(): Locator {
        return this.root.locator('mat-select[name="location-multi"]');
    }

    private get list(): Locator {
        return this.root.locator('desk-flow-select-list');
    }

    /** The desks the list offers on the current page. */
    get desks(): Locator {
        return this.list.locator('li[item]');
    }

    /** The placeholder the list shows when it offers no desk. */
    get noDesks(): Locator {
        return this.list.locator('[empty]');
    }

    /**
     * One desk on the current page of the list, by the name it shows.
     *
     * `.first()`, because a long-lived stack can list the same desk id on two
     * levels. Assert the stored `asset_id` when the row is used to book.
     */
    desk(name: string): Locator {
        return this.desks
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .first();
    }

    /** The favourite control of a desk row. */
    favouriteToggle(row: Locator): Locator {
        return row.locator('button[name="toggle-item-favourite"]');
    }

    /** The desks on the current page of the list that show as selected. */
    get chosenDesks(): Locator {
        return this.desks.filter({ has: this.icon('task_alt') });
    }

    private get nextPage(): Locator {
        return this.list.locator('button[icon]').filter({
            has: this.icon('keyboard_arrow_right'),
        });
    }

    private get previousPage(): Locator {
        return this.list.locator('button[icon]').filter({
            has: this.icon('keyboard_arrow_left'),
        });
    }

    /** The Confirm button. It shows a spinner icon while the booking saves. */
    get confirm(): Locator {
        return this.root.locator('button[btn]').filter({ has: this.icon('task_alt') });
    }

    /**
     * The success view. The host element has no box of its own, so use
     * `successContinue` to assert that the view shows.
     */
    get success(): Locator {
        return this.page.locator('desk-flow-success');
    }

    get successContinue(): Locator {
        return this.success.locator('[name="desk-confirm-continue"]');
    }

    async open(query = ''): Promise<void> {
        await this.page.goto(`/#/book/desk/form${query}`);
        await expect(
            this.title,
            'the desk flow never rendered its title field — is the `desks` feature enabled?',
        ).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Set a checkbox to a state. Reads the real state first: a click on a box
     * that is already in the target state inverts the intent.
     *
     * A box that is not in the page is off already, so `false` passes for it.
     * `true` fails for it.
     */
    async setChecked(box: Locator, want: boolean): Promise<void> {
        if (!want && !(await box.count())) return;
        if ((await box.isChecked()) !== want) {
            // A `settings-toggle` takes the click on its button: its checkbox
            // ignores pointer events. A plain `mat-checkbox` takes it on the
            // native input, which lies over the box. Never `force` the click.
            // A forced click goes to the element on top, and while the app
            // starts that is its loading screen.
            const toggle = box.locator('xpath=ancestor::settings-toggle/button');
            await ((await toggle.count()) ? toggle : box).click({ timeout: 20_000 });
        }
        await expect(box, `the box should be ${want ? 'on' : 'off'}`).toBeChecked({
            checked: want,
        });
    }

    async setAllDay(want: boolean): Promise<void> {
        await this.setChecked(this.allDayInput, want);
    }

    /**
     * Turn the page of the desk list with one of its two buttons, and wait
     * for the list to show the new page. Returns false when the list has no
     * such page.
     *
     * The wait is on the bar that holds the buttons: its text has the range
     * of the page. Only a change of that text is used, not the words in it.
     */
    private async turnListPage(button: Locator): Promise<boolean> {
        if (!(await button.isVisible()) || !(await button.isEnabled())) return false;
        const bar = button.locator('xpath=..');
        const before = (await bar.textContent()) ?? '';
        await button.click({ timeout: 5_000 });
        await expect(bar).not.toHaveText(before, { timeout: 5_000 });
        return true;
    }

    /**
     * Run `visit` on each page of the desk list, from the first page. Stops
     * when `visit` returns true or after the last page. Ends on the page of
     * the last visit.
     */
    private async eachListPage(visit: () => Promise<boolean>): Promise<boolean> {
        for (let page = 0; page < MAX_LIST_PAGES; page++) {
            if (!(await this.turnListPage(this.previousPage))) break;
        }
        for (let page = 0; page < MAX_LIST_PAGES; page++) {
            if (await visit()) return true;
            if (!(await this.turnListPage(this.nextPage))) return false;
        }
        return false;
    }

    /**
     * Wait until the list has an answer for the current filters: desks, or
     * the empty placeholder. The list shows a spinner while it loads.
     *
     * The placeholder also shows for a moment after the page opens, before
     * the first desks load. So an empty answer is not final: converge on the
     * desks that a spec expects.
     */
    async waitForDesks(timeout = 20_000): Promise<void> {
        await expect(
            this.desks.first().or(this.noDesks),
            'the desk list did not finish loading',
        ).toBeVisible({ timeout });
    }

    /**
     * The names of all desks the list offers, on all of its pages.
     *
     * Converging, because the list loads again after each change to the date,
     * the time or a filter (debounced by 500 ms), and a walk through the pages
     * cannot continue across a reload. A reload can still fall between two
     * pages and change the result, and the list is empty for a moment after
     * the page opens. So poll this for the names that a spec expects.
     */
    async deskNames(): Promise<string[]> {
        let names: string[] = [];
        await expect(async () => {
            await this.waitForDesks(5_000);
            names = [];
            await this.eachListPage(async () => {
                const page_names = await this.desks.locator(ROW_NAME).allInnerTexts();
                names.push(...page_names.map((name) => name.trim()));
                return false;
            });
        }).toPass({ timeout: 30_000 });
        return names;
    }

    /**
     * Bring the row of a desk onto the current page of the list.
     *
     * Converging, for the same reason as `deskNames`: a walk through the
     * pages that crosses a reload of the list can miss the desk.
     */
    async findDesk(name: string): Promise<Locator> {
        const row = this.desk(name);
        const found = await expect(async () => {
            await this.waitForDesks(5_000);
            expect(await this.eachListPage(() => row.isVisible())).toBe(true);
        })
            .toPass({ timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            // Say what IS offered. "Not found" cannot tell apart a desk that
            // was never seeded, one that a filter hides, and one that is
            // already booked at the chosen time.
            const offered = await this.deskNames();
            throw new Error(
                `no desk called "${name}" in the list. It offers ${offered.length}: ` +
                    `${JSON.stringify(offered)}. Check the desk is seeded (seed.ts ` +
                    `writes WORKERS + 1 of them into the level zone's \`desks\` ` +
                    `metadata), and that it is free at the time chosen — a booked ` +
                    `desk is simply absent.`,
            );
        }
        return row;
    }

    /**
     * Select a desk by name in the list, and wait for the list to show it as
     * selected. The desk is matched on its NAME, which is test data we seeded
     * (`E2E Desk 0`), not app copy.
     *
     * The flow holds one desk (`desks.allow_multiple` is off), so this
     * replaces a desk that was selected before.
     */
    async selectDesk(name: string): Promise<void> {
        const row = await this.findDesk(name);
        await row.locator('button[name="select-item"]').click();
        await expect(
            row.locator('icon', { hasText: 'task_alt' }),
            `desk "${name}" should show as selected`,
        ).toBeVisible();
    }

    /**
     * The names of the desks that show as selected on the current page.
     *
     * `chosenDesks` is enough to know a desk is chosen and NOT enough to know
     * WHICH — and when a booking is moved from one desk to another the count
     * never changes. Asserting on the name is the only way to see the swap
     * land.
     *
     * A locator, so that `toHaveText([...])` waits: the list shows a spinner
     * in place of its rows while it loads again.
     */
    get chosenDeskNames(): Locator {
        return this.chosenDesks.locator(ROW_NAME);
    }

    /**
     * Limit the desk list to one level, by the name the level shows.
     *
     * The filter is a multiple `mat-select`: its panel stays open after a
     * choice, and a click on a chosen option removes it. So this reads
     * `aria-selected` before each click.
     *
     * Converging, because the panel does not always stay open: seen under a
     * full parallel run as a select that has the focus and shows no options.
     * Each step reads the state first, so a second pass is safe.
     *
     * The options are matched in the page and not in `.cdk-overlay-container`:
     * the select renders its panel as a popover inside its own element.
     */
    async chooseLevel(name: string): Promise<void> {
        const options = this.page.locator('mat-option');
        // `.first()`: a run that died before teardown can leave a second
        // level with this name.
        const wanted = options
            .filter({ has: this.page.getByText(name, { exact: true }) })
            .first();
        // The levels that an earlier choice left selected.
        const others = options
            .and(this.page.locator('[aria-selected="true"]'))
            .filter({ hasNot: this.page.getByText(name, { exact: true }) });
        await expect(async () => {
            if ((await this.levelSelect.getAttribute('aria-expanded')) !== 'true') {
                await this.levelSelect.click({ timeout: 5_000 });
            }
            await expect(
                wanted,
                `the level "${name}" is not among the options of the level filter. It ` +
                    `offers the levels of the building that have bookable desks`,
            ).toBeVisible({ timeout: 3_000 });
            for (let left = await others.count(); left > 0; left--) {
                await others.first().click({ timeout: 3_000 });
                await expect(others).toHaveCount(left - 1, { timeout: 3_000 });
            }
            if ((await wanted.getAttribute('aria-selected')) !== 'true') {
                await wanted.click({ timeout: 3_000 });
            }
            await expect(wanted).toHaveAttribute('aria-selected', 'true', { timeout: 3_000 });
        }).toPass({ timeout: 30_000 });
        await this.page.keyboard.press('Escape');
        await expect(options.first()).toBeHidden();
        await expect(this.levelSelect).toContainText(name);
    }

    /** Make "Book for other" the booking type, if it is not already. */
    async bookForOther(): Promise<void> {
        // A second click on the button clears the chosen person, so click
        // only when the host field is not there.
        if (!(await this.userField.isVisible())) await this.bookForOtherButton.click();
        await expect(this.userField).toBeVisible();
    }

    /** Make Group the booking type, if it is not already. */
    async bookForGroup(): Promise<void> {
        if (!(await this.groupField.isVisible())) await this.groupModeButton.click();
        await expect(this.groupField).toBeVisible();
    }

    /**
     * Type an address into a user autocomplete and pick the directory user
     * that has it.
     *
     * ## It has to be TYPED, not filled
     *
     * `fill()` sets the value and dispatches an input event, and these fields
     * ignore it: nothing searched, no panel, no requests to `/users` at all.
     * Measured — the probe that found this saw zero network calls. The search
     * is driven from real key events, so `pressSequentially` is the only
     * thing that works.
     *
     * ## Wait for the PERSON, not for an option
     *
     * The panel opens with a placeholder option ("No users found.", or an
     * "add external" offer) while the search is on its way: the search is
     * debounced by 300 ms and then asks the backend. So this waits for the
     * option of a directory user, which has an avatar, that shows the address.
     * The address is data and each option renders it below the name.
     */
    private async pickDirectoryUser(input: Locator, email: string): Promise<void> {
        const option = this.page
            .locator('mat-option')
            .filter({ has: this.page.locator('a-user-avatar') })
            .filter({ hasText: email })
            .first();

        for (let attempt = 1; attempt <= 3; attempt++) {
            await input.click();
            // Select-all and overwrite, so text from an earlier attempt or an
            // earlier choice cannot stay in front of the search.
            await input.press('ControlOrMeta+a');
            await input.press('Backspace');
            await input.pressSequentially(email, { delay: 30 });
            // The host field selects its text a moment after it gets the
            // focus. When the page is busy that select comes after the first
            // key, and the second key then replaces the first. Type again:
            // the field still has the focus, so it does not select again.
            if ((await input.inputValue()) !== email) continue;
            const appeared = await option
                .waitFor({ state: 'visible', timeout: 10_000 })
                .then(() => true)
                .catch(() => false);
            if (!appeared) continue;
            await option.click();
            return;
        }

        const offered = await this.page.locator('mat-option').allInnerTexts();
        throw new Error(
            `no autocomplete option for ${email} after 3 tries. The panel offered ` +
                `${offered.length}: ${JSON.stringify(
                    offered.map((t) => t.replace(/\s+/g, ' ').trim()).slice(0, 8),
                )}. The user has to exist in the directory — seed.ts creates one staff ` +
                `user per worker — and the field only searches on real key events, so ` +
                `check the typing reached it.`,
        );
    }

    /**
     * Choose who the booking is for, from the host field's autocomplete. The
     * field is there only while "Book for other" is active, see `bookForOther`.
     *
     * The choice only lands when an option is PICKED. Text left in the box is
     * not a person, and the flow then refuses to confirm.
     */
    async chooseUser(email: string): Promise<void> {
        await this.pickDirectoryUser(this.userField.locator('input').first(), email);
        // The field shows the avatar of the person once it holds one.
        await expect(
            this.userField.locator('a-user-avatar'),
            `the host field did not take ${email}`,
        ).toBeVisible();
    }

    /**
     * Add a colleague to the group member list from the user autocomplete.
     * The list is there only while Group is active, see `bookForGroup`.
     */
    async addGroupMember(email: string): Promise<void> {
        const input = this.groupField.locator('input[name="user_email"]');
        await this.pickDirectoryUser(input, email);
        // The component clears search asynchronously after selection.
        await expect(input).toHaveValue('');
    }

    /**
     * Open the date picker. The picker is a `customTooltip` on the date
     * button, and a click on the button of an open picker closes it.
     */
    async openDatePicker(): Promise<void> {
        if (!(await this.datePicker.first().isVisible())) await this.dateButton.click();
        await expect(this.datePicker.first(), 'the date picker did not open').toBeVisible();
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
        const target = new Date(timestamp_ms);
        target.setHours(0, 0, 0, 0);

        await this.openDatePicker();
        const cells = this.datePicker.locator('button[name="schedule-set-date"]');
        await expect(cells.first(), 'the calendar rendered no day cells').toBeVisible();
        const grid = await cells.evaluateAll((els) =>
            els.map((el) => ({
                text: (el.textContent ?? '').trim(),
                disabled: (el as HTMLButtonElement).disabled,
                today: !!el.querySelector('div.border-secondary'),
            })),
        );

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
        await expect(option).toBeHidden();
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
        // CDK places this menu's backdrop immediately before its overlay host.
        const backdrop = await option.evaluateHandle(
            (el) =>
                el.closest('.cdk-overlay-pane')!.parentElement!
                    .previousElementSibling,
        );
        await option.click();
        if (
            (await this.durationTrigger.getAttribute('aria-expanded')) ===
            'true'
        ) {
            await this.page.keyboard.press('Escape');
        }
        await expect(option).toBeHidden();
        await expect
            .poll(() => backdrop.evaluate((el) => el?.isConnected ?? false))
            .toBe(false);
        await backdrop.dispose();
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
        await expect(options.first()).toBeHidden();
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
        await expect(options.first()).toBeHidden();
        return values.filter((v) => Number.isFinite(v));
    }

    /**
     * Send the booking. Confirm saves at once: there is no confirm dialog.
     *
     * A form that is not valid gets an error notice and no request, so a spec
     * that waits for the response of this click times out on that wait.
     */
    async confirmAndSend(): Promise<void> {
        await this.confirm.click();
    }
}
