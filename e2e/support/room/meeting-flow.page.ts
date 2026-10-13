/**
 * Page object for `/book/meeting/form` — the `meeting-flow-new` booking flow.
 *
 * This is the page object for the meeting flow. The flow it replaced
 * (`meeting-flow-form` and the room picker modal) is no longer routed.
 *
 * ## Three steps on one route
 *
 * The step is the `view` query parameter, not a route segment:
 *
 *   view=0  `meeting-flow-details`       title, date, time, length, room size
 *   view=1  `meeting-flow-space-select`  filters and the room list
 *   view=2  `meeting-flow-options`       attendees, catering, equipment, Confirm
 *
 * Nothing is sent until Confirm on the last step. There is no separate confirm
 * screen: Confirm sends the request at once. Each step refuses to go forward
 * when its own requirement is missing: a title for step 1, a room for step 2.
 *
 * An edit opens the same flow on step 1, with the booking loaded. The room is
 * not shown there. It shows as selected in the list of step 2 and in the
 * summary of step 3.
 *
 * ## Selector policy
 *
 * No translated text. Controls with no `name` attribute are matched on their
 * icon ligature, which is not translated, or on their position in the
 * template. Text that is test data (a room name, a feature name) is used.
 *
 * ## The room list
 *
 * The list shows TEN rooms a page, sorted by capacity and then by name, and
 * the stack seeds more than ten. A room that is "not offered" can be on the
 * next page. `selectRoom` and `offeredRoomNames` read all pages.
 *
 * The room size on step 1 starts at "any", so the capacity-1 rooms are offered
 * without a change. The picker of the old flow started at four people.
 */
import { Locator, Page, expect } from '@playwright/test';

/** Upper bound on the room list pages that the list helpers read. */
const MAX_LIST_PAGES = 10;

/** Upper bound on the reads that `offeredRoomNames` makes for a stable result. */
const MAX_LIST_READS = 6;

/** Upper bound on the tries of `addAssetRequest`. */
const MAX_ASSET_ATTEMPTS = 3;

/** A pattern that matches an element whose whole text is `text`. */
function wholeText(text: string): RegExp {
    return new RegExp(`^\\s*${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`);
}

export class MeetingFlow {
    constructor(private readonly page: Page) {}

    // ------------------------------------------------------------------ hosts

    get root(): Locator {
        return this.page.locator('meeting-flow-new');
    }

    get details(): Locator {
        return this.page.locator('meeting-flow-details');
    }

    get roomSelect(): Locator {
        return this.page.locator('meeting-flow-space-select');
    }

    get options(): Locator {
        return this.page.locator('meeting-flow-options');
    }

    /**
     * A step of the header, by its `view` number. A click goes to that step.
     *
     * The three links have no name, and their icons change with the step that
     * is shown, so they are matched on their position. The Back link of the
     * room step is the only other link in the flow, and it is a `btn`.
     */
    stepLink(view: 0 | 1 | 2): Locator {
        return this.root.locator('a:not([btn])').nth(view);
    }

    // -------------------------------------------------------- step 1: details

    /** The title input. `name$=".title"` because the name is form-scoped. */
    get title(): Locator {
        return this.details.locator('input[name$=".title"]');
    }

    get dateButton(): Locator {
        return this.details.locator('date-field button').first();
    }

    /** The calendar that `dateButton` opens. It closes when a day is picked. */
    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }

    /** The native input of the All Day checkbox on the details step. */
    get allDay(): Locator {
        return this.details.locator('input[name$=".all_day"]');
    }

    /**
     * Scoped to the details step, not the page.
     *
     * The room step has its own copies of the date, time and length fields in
     * its filter column, and that column is in the DOM twice.
     */
    get startTimeTrigger(): Locator {
        return this.details.locator('button[time-field]').first();
    }

    get durationTrigger(): Locator {
        return this.details.locator('button[duration-field]').first();
    }

    /**
     * The host field. Rendered only when `app.events.can_book_for_others` is
     * set. It is a select of the calendars that the user can edit.
     */
    get hostField(): Locator {
        return this.details.locator('host-select-field');
    }

    /** The recurrence select. Needs `app.events.allow_recurrence`. */
    get recurrence(): Locator {
        return this.details.locator('recurrence-field mat-select');
    }

    /** "Search available rooms" — goes from the details to the room list. */
    get searchRooms(): Locator {
        return this.details
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'search' }) });
    }

    async open(): Promise<void> {
        await this.page.goto('/#/book/meeting/form');
        await expect(
            this.title,
            'the meeting flow never rendered — is the `spaces` feature enabled?',
        ).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Set the All Day checkbox to a state. Reads the real state first: a click
     * on a checkbox that is already in the target state inverts the intent.
     *
     * The checkbox is rendered only when `app.events.allow_all_day` is set.
     */
    async setAllDay(want: boolean): Promise<void> {
        await expect(
            this.allDay,
            'no All Day checkbox on the details step — it is only rendered when ' +
                '`app.events.allow_all_day` is set',
        ).toHaveCount(1, { timeout: 10_000 });
        if ((await this.allDay.isChecked()) !== want) {
            await this.details.locator('mat-checkbox:has(input[name$=".all_day"])').click();
        }
        const check = expect(this.allDay, `All Day should be ${want ? 'on' : 'off'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }

    /** Is All Day currently ticked? */
    async isAllDay(): Promise<boolean> {
        if (!(await this.allDay.count())) return false;
        return this.allDay.isChecked();
    }

    /** Set the start time from the options the flow offers, as "HH:mm". */
    async setStartTime(hhmm: string): Promise<void> {
        await this.startTimeTrigger.click();
        const option = this.page.locator(`button[data-time="${hhmm}"]`);
        await expect(
            option,
            `no start-time option for ${hhmm} — the flow offers times on a fixed step ` +
                `and only inside its bookable hours, so pick one it lists`,
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
        await expect(option, 'the start-time menu stayed open').toBeHidden({
            timeout: 10_000,
        });
    }

    /** Set how long the meeting runs, in minutes. */
    async setDuration(minutes: number): Promise<void> {
        await this.durationTrigger.click();
        const option = this.page.locator(`button[data-duration="${minutes}"]`);
        await expect(
            option,
            `no ${minutes} minute option — lengths come on a fixed step up to ` +
                '`max_duration`',
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
        await expect(option, 'the length menu stayed open').toBeHidden({
            timeout: 10_000,
        });
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
        await expect(options.first(), 'the start-time menu stayed open').toBeHidden({
            timeout: 10_000,
        });
        return values.filter(Boolean);
    }

    /** Every meeting length on offer, in minutes. */
    async durationOptions(): Promise<number[]> {
        await this.durationTrigger.click();
        const options = this.page.locator('button[data-duration]');
        await expect(options.first()).toBeVisible({ timeout: 10_000 });
        const values = await options.evaluateAll((els) =>
            els.map((el) => Number(el.getAttribute('data-duration'))),
        );
        await this.page.keyboard.press('Escape');
        await expect(options.first(), 'the length menu stayed open').toBeHidden({
            timeout: 10_000,
        });
        return values.filter((v) => Number.isFinite(v));
    }

    /** The people that the host select offers, as the text of each option. */
    async hostOptions(): Promise<string[]> {
        await expect(
            this.hostField,
            'no host field on the details step — it is only rendered when ' +
                '`app.events.can_book_for_others` is set',
        ).toBeVisible({ timeout: 20_000 });
        await this.hostField.locator('mat-select').click();
        const options = this.page.locator('mat-option');
        await expect(options.first(), 'the host select did not open').toBeVisible({
            timeout: 10_000,
        });
        const texts = await options.allInnerTexts();
        await this.page.keyboard.press('Escape');
        await expect(options.first(), 'the host select stayed open').toBeHidden({
            timeout: 10_000,
        });
        return texts.map((t) => t.replace(/\s+/g, ' ').trim());
    }

    /**
     * Choose who the meeting is for, from the host select.
     *
     * Options show the name of the person above the address. The address is
     * test data, so the option is matched on it.
     */
    async chooseHost(email: string): Promise<void> {
        const offered = await this.hostOptions();
        if (!offered.some((text) => text.toLowerCase().includes(email.toLowerCase()))) {
            throw new Error(
                `no host option for ${email}. The select offers ${offered.length}: ` +
                    `${JSON.stringify(offered)}. It lists the signed-in user and the ` +
                    `calendars that the user can edit (\`GET /api/staff/v1/calendars\`).`,
            );
        }
        await this.hostField.locator('mat-select').click();
        await this.page.locator('mat-option').filter({ hasText: email }).first().click();
        await expect(
            this.hostField.locator('mat-select'),
            `the host select does not show ${email}`,
        ).toContainText(email, { timeout: 10_000 });
    }

    /** What the host select currently shows, for proving a choice stuck. */
    async hostValue(): Promise<string> {
        if (!(await this.hostField.count())) return '';
        return (await this.hostField.locator('mat-select').innerText()).trim();
    }

    /** Go from the details to the room list, and wait for the list to load. */
    async toRoomStep(): Promise<void> {
        await this.searchRooms.click();
        await expect(
            this.roomSelect,
            'the flow stayed on the details — a meeting needs a title to go on',
        ).toBeVisible({ timeout: 20_000 });
        await this.listLoaded();
    }

    // ---------------------------------------------------- step 2: room select

    /**
     * The filter column for wide screens.
     *
     * The column is in the DOM twice: this one, and a sheet for narrow
     * screens. The names of the two capacity selects are different, and that
     * is what tells them apart.
     */
    get filters(): Locator {
        return this.roomSelect
            .locator('[cdkscrollable]')
            .filter({ has: this.page.locator('mat-select[name="capacity"]') });
    }

    /**
     * The "Favorites Only" toggle.
     *
     * It has no name and its label is translated. It is the last toggle that
     * is a direct child of the column: the All Day toggle comes before it, and
     * the feature toggles are in a container of their own.
     */
    get favouritesOnly(): Locator {
        return this.filters.locator(':scope > settings-toggle').last();
    }

    /** The toggle of one room feature. The feature name is test data. */
    featureToggle(feature: string): Locator {
        return this.filters
            .locator('settings-toggle')
            .filter({ has: this.page.locator('div', { hasText: wholeText(feature) }) });
    }

    /** The rooms the list offers on the current page. */
    get rooms(): Locator {
        return this.roomSelect.locator('meeting-flow-space-list li[space]');
    }

    /** The element that holds the name of each room on the current page. */
    private get roomNames(): Locator {
        return this.rooms.locator(
            'button[name="select-space"] > div:last-child > div:first-child',
        );
    }

    /** One room in the list, by the name it shows. */
    room(name: string): Locator {
        return this.rooms.filter({
            has: this.page.locator('button[name="select-space"] div', {
                hasText: wholeText(name),
            }),
        });
    }

    /** The favourite button of one room in the list. */
    favouriteButton(name: string): Locator {
        return this.room(name).locator('button[name="toggle-space-favourite"]');
    }

    private listPageButton(icon: string): Locator {
        return this.roomSelect
            .locator('meeting-flow-space-list button[icon]')
            .filter({ has: this.page.locator('icon', { hasText: wholeText(icon) }) });
    }

    get nextListPage(): Locator {
        return this.listPageButton('keyboard_arrow_right');
    }

    get previousListPage(): Locator {
        return this.listPageButton('keyboard_arrow_left');
    }

    /** Continue — the last control of the room step. Back is a link. */
    get continue(): Locator {
        return this.roomSelect.locator('button[btn]').last();
    }

    /**
     * Wait until the list offers at least one room.
     *
     * The empty message is not proof of an answer: the list shows it for a
     * moment before its first query starts. A filter change starts a new
     * query after a 300ms debounce, so the list can also show the old answer
     * for a moment. Poll an assertion that follows a filter change; do not
     * read the list once.
     */
    async listLoaded(): Promise<void> {
        await expect(
            this.rooms.first(),
            'the room list offers no rooms — are the rooms seeded (room.seed.ts)?',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** Set a filter toggle to a state. Reads the real state first. */
    async setToggle(toggle: Locator, want: boolean): Promise<void> {
        await expect(toggle, 'the filter toggle is not in the filter column').toHaveCount(1, {
            timeout: 10_000,
        });
        const box = toggle.locator('input[type="checkbox"]');
        if ((await box.isChecked()) !== want) await toggle.locator('button').first().click();
        const check = expect(box, `the filter toggle should be ${want ? 'on' : 'off'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }

    /**
     * Press a page button of the room list. Returns false when it is disabled.
     *
     * The page buttons are rendered only when the list has more than one page.
     * The list renders the new page a moment after the click, so this waits
     * for the first room to change. A read at once sees the old page.
     *
     * The timeouts are short on purpose. When a new query replaces the list
     * during a read, the buttons can go away, and the read must fail at once.
     */
    private async turnListPage(button: Locator): Promise<boolean> {
        // `count` first: `isEnabled` waits for a button that is not rendered.
        if (!(await button.count()) || !(await button.isEnabled())) return false;
        const first = (await this.roomNames.first().innerText({ timeout: 2_000 })).trim();
        await button.click({ timeout: 2_000 });
        await expect(
            this.roomNames.first(),
            'the room list did not change page',
        ).not.toHaveText(wholeText(first), { timeout: 5_000 });
        return true;
    }

    /** Go to the first page of the room list. */
    private async showFirstListPage(): Promise<void> {
        for (let page = 1; page < MAX_LIST_PAGES; page++) {
            if (!(await this.turnListPage(this.previousListPage))) return;
        }
    }

    /** Go to the next page of the room list. Returns false on the last page. */
    private showNextListPage(): Promise<boolean> {
        return this.turnListPage(this.nextListPage);
    }

    /** Read the room names from every page of the list, once. */
    private async readListPages(): Promise<string[]> {
        await this.listLoaded();
        await this.showFirstListPage();
        const names: string[] = [];
        for (let page = 1; page <= MAX_LIST_PAGES; page++) {
            names.push(...(await this.roomNames.allInnerTexts()).map((t) => t.trim()));
            if (!(await this.showNextListPage())) break;
        }
        await this.showFirstListPage();
        return names;
    }

    /**
     * The names of all rooms on offer, read from every page of the list.
     *
     * A read takes several clicks, and a new query can replace the list
     * between two of them. The result would then mix two answers. So this
     * reads until two reads in a row are the same.
     */
    async offeredRoomNames(): Promise<string[]> {
        await this.listLoaded();
        let previous: string | undefined;
        for (let read = 1; read <= MAX_LIST_READS; read++) {
            // A read that the list interrupts does not count.
            const names = await this.readListPages().catch(() => undefined);
            const current = names && JSON.stringify(names);
            if (names && current === previous) return names;
            previous = current;
        }
        throw new Error(
            `the room list did not hold still for two reads in ${MAX_LIST_READS} tries`,
        );
    }

    /**
     * One try to bring the page of the list that holds a room on screen.
     * Throws when no page holds the room, or when the list changes meanwhile.
     */
    private async findRoom(name: string): Promise<Locator> {
        const item = this.room(name);
        await this.listLoaded();
        await this.showFirstListPage();
        for (let page = 1; page <= MAX_LIST_PAGES; page++) {
            if (await item.isVisible()) return item;
            if (!(await this.showNextListPage())) break;
        }
        throw new Error(`room "${name}" is on no page of the room list`);
    }

    /**
     * Find a room in the list and act on it, and try again when the list
     * changes meanwhile.
     *
     * The list can show an answer and then replace it: a change of the date or
     * the time starts a new query after a 300ms debounce, and the room step can
     * open before that query has an answer. The room can then go off screen,
     * or change page, between the search for it and the action.
     *
     * The room is matched on its NAME, which is test data (`E2E Room 0`), not
     * app copy. The row has no id to use instead.
     */
    private async onRoom(
        name: string,
        action: (item: Locator) => Promise<void>,
    ): Promise<void> {
        const done = await expect(async () => action(await this.findRoom(name)))
            .toPass({ timeout: 30_000 })
            .then(() => true)
            .catch(() => false);
        if (done) return;
        // Say what IS on offer. "Not found" cannot tell apart a room that was
        // never seeded, one on the wrong zone, and one that the list leaves
        // out because it is not free at the chosen time.
        const offered = await this.offeredRoomNames().catch(() => [] as string[]);
        throw new Error(
            `room "${name}" could not be used in the room list. The list offers ` +
                `${offered.length}: ${JSON.stringify(offered)}. Check the room is ` +
                `seeded (room.seed.ts), sits on the building AND level zone, is ` +
                `bookable, and is free at the time chosen.`,
        );
    }

    /** Bring the page of the list that holds a room on screen. */
    async showRoom(name: string): Promise<void> {
        await this.onRoom(name, async () => undefined);
    }

    /**
     * Select a room in the list and wait for the list to show it as selected.
     *
     * With one room per meeting, which is the default, a click on a room takes
     * it in place of the room that was selected before. A room that already
     * shows as selected is not clicked again.
     */
    async selectRoom(name: string): Promise<void> {
        await this.onRoom(name, async (item) => {
            const select = item.locator('button[name="select-space"]');
            const selected = select.locator('icon', { hasText: 'task_alt' });
            if (!(await selected.isVisible())) await select.click({ timeout: 2_000 });
            await expect(selected, `room "${name}" should show as selected`).toBeVisible({
                timeout: 2_000,
            });
        });
    }

    /** Go from the room list to the last step. Needs a room to be selected. */
    async toOptionsStep(): Promise<void> {
        await this.continue.click();
        await expect(
            this.options,
            'the flow stayed on the room list — a meeting needs a room to go on',
        ).toBeVisible({ timeout: 20_000 });
    }

    // -------------------------------------------------------- step 3: options

    /**
     * The names of the rooms in the summary of the last step.
     *
     * This is what Confirm sends. When a booking is moved to another room, the
     * number of rooms does not change, so only the name shows the swap.
     */
    async chosenRoomNames(): Promise<string[]> {
        const names = this.options.locator('icon:has-text("room_preferences") + div');
        return (await names.allInnerTexts()).map((t) => t.trim());
    }

    get attendeeEntry(): Locator {
        return this.options.locator('a-user-list-field input[name="user_email"]');
    }

    get attendeeChips(): Locator {
        return this.options.locator('a-user-list-field mat-chip-row[user]');
    }

    /**
     * The warning that the meeting has more people than the room holds.
     *
     * Rendered only when `app.events.strict_capacity_check` is NOT set.
     */
    get capacityWarning(): Locator {
        return this.options.locator('[capacity-warning]');
    }

    /**
     * Add an attendee, and make sure it actually landed.
     *
     * Typing an address opens an autocomplete offering "add external user", and
     * Enter picks it — but only once that panel has caught up. Fire Enter too
     * early and the address just sits in the box: no chip, no error, and the
     * meeting is booked one person short. Same trap the visitor chip list has,
     * same fix: retry until the chip appears.
     */
    async addAttendee(email: string): Promise<void> {
        const before = await this.attendeeChips.count();
        for (let attempt = 1; attempt <= 3; attempt++) {
            await this.attendeeEntry.fill(email);
            await this.attendeeEntry.press('Enter');
            const landed = await expect(this.attendeeChips)
                .toHaveCount(before + 1, { timeout: 5_000 })
                .then(() => true)
                .catch(() => false);
            if (landed) return;
        }
        const shown = await this.attendeeChips.allInnerTexts();
        throw new Error(
            `${email} could not be added as an attendee after 3 tries. The list holds ` +
                `${shown.length}: ${JSON.stringify(shown.map((t) => t.split('\n')[0].trim()))}.`,
        );
    }

    /** Take an attendee off the list before sending. */
    async removeAttendee(email: string): Promise<void> {
        const local = email.split('@')[0];
        const texts = await this.attendeeChips.allInnerTexts();
        const index = texts.findIndex((text) => {
            const label = text.split('\n')[0].trim();
            return label === email || label === local;
        });
        if (index < 0) {
            throw new Error(
                `no attendee chip for ${email}. The list holds ${texts.length}: ` +
                    `${JSON.stringify(texts.map((t) => t.split('\n')[0].trim()))}. A chip ` +
                    `shows the name or the part before the @, never the full address.`,
            );
        }
        await this.attendeeChips.nth(index).locator('button[remove]').click();
        await expect(
            this.attendeeChips,
            `removing ${email} did not shorten the attendee list`,
        ).toHaveCount(texts.length - 1, { timeout: 10_000 });
    }

    /**
     * The button that opens the catering menu.
     *
     * The field has one `btn` button in each of its two states: the empty
     * state, and the state with orders (`name="add-catering-item"`).
     */
    get addCateringButton(): Locator {
        return this.options.locator('catering-list-field button[btn]');
    }

    /** The catering orders listed on the last step, one row per order. */
    get cateringOrders(): Locator {
        return this.options.locator('catering-list-field [order]');
    }

    /**
     * Order one item from the catering menu.
     *
     * The catering section is on the last step, so a room is always chosen
     * before it shows. The section is rendered only when the building has a
     * menu (`catering.seed.ts`).
     *
     *   the add button .......... opens the menu modal
     *   select-catering-item .... opens that item's details, with the quantity
     *   toggle-catering ......... "Add this item" — adds it to the order
     *   catering-return ......... "Confirm Selection" — closes and returns it
     *
     * Nothing is ordered on the backend at this point: catering orders are sent
     * as their own `catering-order` bookings only when the meeting itself is
     * confirmed (`postForm` → `createBookingsForEvent`).
     */
    async addCateringItem(name: string): Promise<void> {
        const before = await this.cateringOrders.count();
        await expect(
            this.addCateringButton,
            'the catering section is missing — is a catering menu seeded for this ' +
                'building? See `catering.seed.ts`',
        ).toBeVisible({ timeout: 20_000 });
        await expect(
            this.addCateringButton,
            'the "add catering" button is disabled — it needs a room, because ' +
                'catering is delivered to a room',
        ).toBeEnabled({ timeout: 20_000 });
        await this.addCateringButton.click();

        const item = this.page
            .locator('button[name="select-catering-item"]')
            .filter({ hasText: name });
        const found = await item
            .first()
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            const offered = await this.page
                .locator('button[name="select-catering-item"]')
                .allInnerTexts();
            throw new Error(
                `no catering item called "${name}". The menu offers ${offered.length}: ` +
                    `${JSON.stringify(offered.map((t) => t.split('\n')[0].trim()))}. ` +
                    `A menu item is an ASSET of a \`CATERING:\` asset type on the ` +
                    `building zone — see \`catering.seed.ts\`.`,
            );
        }
        await item.first().click();

        const add = this.page.locator('button[name="toggle-catering"]');
        await expect(add, 'the item details did not open').toBeVisible({ timeout: 10_000 });
        await add.click();
        const done = this.page.locator('button[name="catering-return"]');
        await expect(done, 'the catering modal has no confirm button').toBeVisible({
            timeout: 10_000,
        });
        await done.click();
        await expect(
            this.cateringOrders,
            `"${name}" was added but the last step lists no catering order`,
        ).toHaveCount(before + 1, { timeout: 20_000 });
    }

    /** The equipment section. Needs `app.events.has_assets`. */
    get assetField(): Locator {
        return this.options.locator('asset-list-field');
    }

    /** The equipment requests listed on the last step, one row per request. */
    get assetRequests(): Locator {
        return this.assetField.locator('[request]');
    }

    get assetModal(): Locator {
        return this.page.locator('asset-select-modal');
    }

    /**
     * One equipment group in the asset modal, by the name of its asset TYPE.
     *
     * The modal lists groups ("E2E AV Equipment", with the number of units
     * that are free) and the app allocates the units itself
     * (`validateAssetRequestsForResource`).
     */
    assetGroup(type_name: string): Locator {
        return this.assetModal.locator('asset-list li[asset]').filter({ hasText: type_name });
    }

    /**
     * Open the asset modal from the equipment section.
     *
     * ## Two preconditions, neither of which fails loudly
     *
     *  - `app.events.has_assets` must be on, or the section is not rendered at
     *    all (`ROOM_ASSETS_MODE` in `room.settings.ts`).
     *  - requestable assets must be seeded, or the modal opens with no results
     *    (`asset.seed.ts`).
     *
     * Set one without the other and the failure looks like a missing control.
     */
    async openAssetModal(): Promise<Locator> {
        await expect(
            this.assetField,
            'the equipment section is missing — is `app.events.has_assets` set? ' +
                'See ROOM_ASSETS_MODE in `room.settings.ts`',
        ).toBeVisible({ timeout: 20_000 });
        // The field has one `btn` button in each of its two states.
        await this.assetField.locator('button[btn]').click();
        await expect(this.assetModal, 'the asset modal did not open').toBeVisible({
            timeout: 20_000,
        });
        return this.assetModal;
    }

    /**
     * Request a piece of EQUIPMENT on the meeting — ROOM-24.
     *
     *   the add button ...... on the field -> opens `asset-select-modal`
     *   the GROUP row ....... in `asset-list` -> opens `asset-details`
     *   toggle-asset ........ adds one. Its icon changes from `add` to `remove`
     *   asset-return ........ closes the modal and puts the request on the step
     *
     * Nothing reaches the backend here. Asset requests are sent as their own
     * `asset-request` bookings only when the meeting is confirmed.
     *
     * ## The modal sometimes returns nothing, so this tries again
     *
     * An app defect, measured 13 Oct 2026: in 2 of 24 runs the modal closed
     * with the group selected at `quantity: 0`, and `asset-list-field` then
     * dropped the request with no message. In the other runs the quantity was
     * 1 and the request was listed. The list of the modal writes the quantity
     * of each group from its own count (`asset-list.component.ts`, `assets`),
     * and that write competes with the default of 1 that `asset-details`
     * sets. Nothing on screen shows which of the two won.
     *
     * So a request that does not land is made again, with a warning. This
     * does not hide a request that is lost later: the spec reads the stored
     * `asset-request` booking.
     */
    async addAssetRequest(type_name: string): Promise<void> {
        const before = await this.assetRequests.count();
        for (let attempt = 1; attempt <= MAX_ASSET_ATTEMPTS; attempt++) {
            const modal = await this.openAssetModal();

            const group = this.assetGroup(type_name).first();
            const found = await group
                .waitFor({ state: 'visible', timeout: 20_000 })
                .then(() => true)
                .catch(() => false);
            if (!found) {
                const offered = await modal.locator('asset-list').innerText().catch(() => '');
                throw new Error(
                    `no requestable asset group called "${type_name}". The modal shows: ` +
                        `${JSON.stringify(offered.replace(/\n+/g, ' | ').slice(0, 300))}. ` +
                        `A group is an ASSET TYPE in a VISIBLE category, with assets on the ` +
                        `building zone — see \`asset.seed.ts\`. A hidden category leaves ` +
                        `this list empty, because \`queryAssets\` filters those out.`,
                );
            }
            await group.locator('button[select]').click();

            const toggle = modal.locator('button[name="toggle-asset"]');
            await expect(toggle, 'the asset details pane did not open').toBeEnabled({
                timeout: 15_000,
            });
            await toggle.click();
            // The icon of the same button changes to `remove` once one is held,
            // which is the only confirmation the modal gives that the add
            // registered.
            await expect(
                toggle.locator('icon'),
                `"${type_name}" was not added to the booking — the icon of the add ` +
                    `button never changed to \`remove\``,
            ).toHaveText(wholeText('remove'), { timeout: 15_000 });

            await modal.locator('button[name="asset-return"]').click();
            await expect(modal, 'the asset modal did not close').toBeHidden({
                timeout: 20_000,
            });
            const landed = await expect(this.assetRequests)
                .toHaveCount(before + 1, { timeout: 5_000 })
                .then(() => true)
                .catch(() => false);
            if (landed) return;
            console.warn(
                `  ! the asset modal returned no request for "${type_name}" on attempt ` +
                    `${attempt}/${MAX_ASSET_ATTEMPTS} — see \`addAssetRequest\``,
            );
        }
        throw new Error(
            `"${type_name}" was requested ${MAX_ASSET_ATTEMPTS} times and the last step ` +
                `lists no asset request`,
        );
    }

    /**
     * The Confirm button of the last step. It sends the request at once.
     *
     * The icon is `task_alt` only while no request is in flight, so this
     * matches nothing while the flow is sending.
     */
    get confirm(): Locator {
        return this.options
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'task_alt' }) });
    }

    // ---------------------------------------------------------------- success

    get success(): Locator {
        return this.page.locator('meeting-flow-success');
    }

    /**
     * The "done" link of the success screen.
     *
     * NOT the `meeting-flow-success` host element: its only child is
     * `absolute inset-0`, so the host itself has no box and Playwright reports
     * it as not visible even while the screen is plainly on show. This link is
     * inside, has a real box, and carries a stable name.
     */
    get successContinue(): Locator {
        return this.success.locator('[name="meeting-created-continue"]');
    }
}
