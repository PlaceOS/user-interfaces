/**
 * Page object for `/book/meeting/form` — the room booking flow.
 *
 * SELECTOR POLICY, the same one the desk and visitor work settled on: nothing
 * here depends on visible text, because every label is translated. The meeting
 * flow is the best-behaved surface of the three for this — the load-bearing
 * controls all carry `name` attributes already:
 *
 *   open-meeting-confirm · confirm-meeting · clear-form-meeting
 *   add-space · select-space · space-return · remove-space
 *   start-time · toggle-attendees-meeting · toggle-spaces-meeting
 *
 * plus the ids `#title`, `#date` and `#end-time` (which is the DURATION field,
 * not a time — a trap worth naming).
 *
 * THE FLOW IS THREE SCREENS, not one: form -> confirm -> success. `Confirm` on
 * the form only changes the view; the request is not sent until `confirm-meeting`
 * on the second screen. A spec that clicks the first and then looks for a
 * booking will find nothing and blame the backend.
 */
import { Locator, Page, expect } from '@playwright/test';

export class MeetingForm {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('meeting-flow-form');
    }
    get title(): Locator {
        return this.page.locator('#title');
    }
    get dateButton(): Locator {
        return this.page.locator('#date button').first();
    }
    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }
    /**
     * Scoped to the FORM, not the page.
     *
     * The room picker carries its own date, start-time and end-time fields, so
     * an unscoped `button[time-field]` can match the modal's copy instead of the
     * form's — and then the click lands somewhere that has no effect on what
     * gets booked.
     */
    get startTimeTrigger(): Locator {
        return this.root.locator('button[time-field]').first();
    }
    /** `#end-time` is the DURATION control, despite the id. */
    get durationTrigger(): Locator {
        return this.root.locator('button[duration-field]').first();
    }
    get addSpaceButton(): Locator {
        return this.page.locator('button[name="add-space"]');
    }
    get chosenSpaces(): Locator {
        return this.root.locator('space-list-field button[name="remove-space"]');
    }
    get confirmViewButton(): Locator {
        return this.page.locator('button[name="open-meeting-confirm"]');
    }
    get confirmButton(): Locator {
        return this.page.locator('button[name="confirm-meeting"]');
    }
    /**
     * The success screen's "done" link.
     *
     * NOT the `meeting-flow-success` host element: its only child is
     * `absolute inset-0`, so the host itself has no box and Playwright reports
     * it as not visible even while the screen is plainly on show. Waiting on it
     * times out after a booking that worked perfectly. This link is inside, has
     * a real box, and carries a stable name.
     */
    get successPanel(): Locator {
        return this.page.locator('a[name="meeting-created-continue"]');
    }
    get attendeeEntry(): Locator {
        return this.page.locator('a-user-list-field input').first();
    }
    get attendeeChips(): Locator {
        return this.page.locator('a-user-list-field mat-chip-row[user]');
    }

    /** Open the form and wait for it to render. */
    async open(): Promise<void> {
        await this.page.goto('/#/book/meeting/form');
        await expect(
            this.root,
            'the meeting form never rendered — is the `spaces` feature enabled?',
        ).toBeVisible({ timeout: 30_000 });
        await expect(
            this.title,
            'the meeting form rendered without its title field',
        ).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Pick a room by name from the space picker.
     *
     * Three steps, all needed: `add-space` opens the modal, `select-space` on a
     * row previews that room, and `toggle-space` — the "Select Item" button —
     * takes it and closes. Closing the modal any other way silently drops the
     * choice.
     *
     * NOT `space-return`, which is the confirm button for MULTI-select and is
     * not rendered at all when the form takes one room. A click on it waits the
     * full timeout against an element that was never in the DOM.
     *
     * The room is matched on its NAME, which is test data we created
     * (`E2E Room 0`), not app copy — so this does not break the no-visible-text
     * rule. There is no id or data- attribute on the row to use instead.
     */
    async chooseRoom(name: string): Promise<void> {
        await this.addSpaceButton.click();
        const modal = this.page.locator('space-select-modal, mat-dialog-container');
        await expect(
            modal.first(),
            'the room picker did not open',
        ).toBeVisible({ timeout: 20_000 });

        const option = this.page
            .locator('button[name="select-space"]')
            .filter({ hasText: name });
        const found = await option
            .first()
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            // Say what IS on offer. "Not found" cannot tell apart a room that was
            // never seeded, one on the wrong zone, and one the picker is filtering
            // out for being unavailable at the chosen time.
            const offered = await this.page
                .locator('button[name="select-space"]')
                .allInnerTexts();
            throw new Error(
                `no room called "${name}" in the picker. It offers ${offered.length}: ` +
                    `${JSON.stringify(offered.map((t) => t.split('\n')[0].trim()))}. ` +
                    `Check the room is seeded (room.seed.ts), sits on the building AND ` +
                    `level zone, is bookable, and is free at the time chosen.`,
            );
        }
        await option.first().click();

        const done = this.page.locator('button[name="toggle-space"]');
        await expect(
            done,
            'the room picker has no "Select Item" button — in multi-select mode the ' +
                'confirm button is `space-return` instead',
        ).toBeVisible({ timeout: 10_000 });
        await expect(
            done,
            'the "Select Item" button is disabled, so no room is previewed — the row ' +
                'click did not register',
        ).toBeEnabled({ timeout: 10_000 });
        await done.click();
        await expect(
            this.chosenSpaces,
            `"${name}" was picked but the form shows no room`,
        ).toHaveCount(1, { timeout: 20_000 });
    }

    /**
     * The names of the rooms currently on the form.
     *
     * `chosenSpaces` counts the remove buttons, which is enough to know a room
     * is chosen and NOT enough to know WHICH — and when a booking is moved from
     * one room to another the count never changes. Asserting on the name is the
     * only way to see the swap land.
     */
    async chosenRoomNames(): Promise<string[]> {
        const rows = this.root.locator('space-list-field div[space]');
        const texts = await rows.allInnerTexts();
        return texts.map((t) => t.split('\n')[0].trim());
    }

    /**
     * Pick SEVERAL rooms, for multi-select mode.
     *
     * The picker behaves differently when `app.events.multiple_spaces` is on:
     * each row is toggled into a selection and the modal stays open, so the
     * rooms are chosen one after another and the whole set is confirmed once —
     * with `space-return`, which is NOT rendered in single-select mode at all.
     *
     * That asymmetry is the trap recorded at the top of this file, seen from the
     * other direction: `chooseRoom` confirms with `toggle-space` and would wait
     * out its timeout here.
     */
    async chooseRooms(names: string[]): Promise<void> {
        await this.addSpaceButton.click();
        const modal = this.page.locator('space-select-modal, mat-dialog-container');
        await expect(modal.first(), 'the room picker did not open').toBeVisible({
            timeout: 20_000,
        });

        for (const name of names) {
            const option = this.page
                .locator('button[name="select-space"]')
                .filter({ hasText: name })
                .first();
            const found = await option
                .waitFor({ state: 'visible', timeout: 20_000 })
                .then(() => true)
                .catch(() => false);
            if (!found) {
                const offered = await this.page
                    .locator('button[name="select-space"]')
                    .allInnerTexts();
                throw new Error(
                    `no room called "${name}" in the picker. It offers ${offered.length}: ` +
                        `${JSON.stringify(offered.map((t) => t.split('\n')[0].trim()))}.`,
                );
            }
            await option.click();
            // Each pick has to be added to the selection before the next row is
            // chosen — and the add button starts DISABLED, becoming enabled only
            // once the row click has registered. Measured: checking `isEnabled`
            // immediately reads false, the add is skipped, and the form ends up
            // with one room instead of two while every step appeared to work.
            const add = this.page.locator('button[name="toggle-space"]');
            await expect(
                add,
                `the picker's add button never enabled after choosing "${name}"`,
            ).toBeEnabled({ timeout: 10_000 });
            await add.click();
        }

        const done = this.page.locator('button[name="space-return"]');
        await expect(
            done,
            'the picker has no `space-return` button — that control only exists in ' +
                'MULTI-select mode, so check `app.events.multiple_spaces` is set',
        ).toBeVisible({ timeout: 10_000 });
        await done.click();
    }
    /**
     * Set the "minimum people" radio above the room list.
     *
     * ## Read this before wondering why a room is "not seeded"
     *
     * The form asks how many people the meeting is for and the picker only
     * offers rooms that hold at least that many. It defaults to **4**, so a
     * room with capacity 1 or 2 is simply absent from the picker until this is
     * changed — and the picker's error then says the room does not exist, which
     * is not what is wrong. Measured: with the default, a capacity-1 room is
     * missing; after clicking "Min. 1 person", all of them are offered.
     *
     * The three options are 1, 4 and 10 (`space-list-field.component.ts`).
     * Matched on the radio's `value` attribute rather than its position or its
     * translated label — "Min. 1 person" is copy.
     *
     * A capacity of 0 escapes the filter altogether, because `Space` maps a
     * falsy capacity to **-1** and the filter lets anything negative through. So
     * a capacity-0 room is always offered and is displayed as "Capacity 2".
     * That is a trap for a spec that wants a room too small to book: use a real
     * small capacity and this control, not 0.
     */
    async setRoomSize(minimum: 1 | 4 | 10): Promise<void> {
        const radio = this.page
            .locator('space-list-field mat-radio-button')
            .filter({ has: this.page.locator(`input[value="${minimum}"]`) });
        await expect(
            radio,
            `no "minimum ${minimum} people" option above the room list — the sizes ` +
                'offered are 1, 4 and 10',
        ).toHaveCount(1, { timeout: 20_000 });
        await radio.click();
        await expect(
            radio.locator('input[type="radio"]'),
            `the minimum-${minimum} option did not take`,
        ).toBeChecked({ timeout: 10_000 });
    }

    /**
     * Take the currently chosen room off the form.
     *
     * Needed before picking a different one: the form holds a single room, and
     * `chooseRoom` on a form that already has one opens the picker with that
     * room selected — so the "Select Item" button toggles it OFF rather than
     * taking the new one. Editing a booking to move it to another room is the
     * only flow that hits this.
     */
    async removeRoom(): Promise<void> {
        const count = await this.chosenSpaces.count();
        if (!count) return;
        await this.chosenSpaces.first().click();
        await expect(
            this.chosenSpaces,
            'the room was not removed from the form',
        ).toHaveCount(count - 1, { timeout: 10_000 });
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

    get addCateringButton(): Locator {
        return this.page.locator('button[name="add-catering-item"]');
    }

    /** The catering orders listed on the form, one row per order. */
    get cateringOrders(): Locator {
        return this.page.locator('catering-list-field [order]');
    }

    /**
     * Order one item from the catering menu.
     *
     * Four steps, and the first one is a trap: **the button is disabled until a
     * room is chosen** (`catering-list-field.component.ts`:
     * `disabled() || !rooms().length`). Catering is delivered to a room, so a
     * meeting without one cannot order — and a spec that adds catering before
     * picking a room waits out the timeout on a button that will never enable.
     *
     *   add-catering-item ....... opens the menu modal
     *   select-catering-item .... opens that item's details, with the quantity
     *   toggle-catering ......... "Add this item" — adds it to the order
     *   catering-return ......... "Confirm Selection" — closes and returns it
     *
     * Nothing is ordered on the backend at this point: catering orders are sent
     * as their own `catering-order` bookings only when the meeting itself is
     * confirmed (`postForm` → `createBookingsForEvent`).
     */
    async addCateringItem(name: string): Promise<void> {
        await expect(
            this.addCateringButton,
            'the catering section is missing — is a catering menu seeded for this ' +
                'building? See `catering.seed.ts`',
        ).toBeVisible({ timeout: 20_000 });
        await expect(
            this.addCateringButton,
            'the "add catering" button is disabled — a room has to be chosen first, ' +
                'because catering is delivered to a room',
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
            `"${name}" was added but the form lists no catering order`,
        ).toHaveCount(1, { timeout: 20_000 });
    }

    /**
     * Tick or clear All Day.
     *
     * Rendered only when `app.events.allow_multiday` is set, and matched by
     * position rather than by label: the checkbox carries no name and its text
     * is translated. It is the only `mat-checkbox` on the form in the default
     * configuration — if that changes, this needs a better handle rather than a
     * different index.
     *
     * ENSURE, never blindly toggle. `force`, because Material hides the real
     * input behind its own markup.
     */
    async setAllDay(want: boolean): Promise<void> {
        // Bound to the form's OWN `all_day` field, so the input's name ends in
        // `.all_day`. Not "the first mat-checkbox on the form": that is
        // "notify new attendees only" when attendees are in play, and ticking it
        // instead leaves the meeting an ordinary one-hour booking while every
        // step appears to have worked.
        const box = this.root.locator('input[name$=".all_day"]').first();
        if (!(await box.count())) {
            throw new Error(
                'no All Day checkbox on the meeting form — it is only rendered when ' +
                    '`app.events.allow_multiday` is set',
            );
        }
        if ((await box.isChecked()) === want) return;
        await box.click({ force: true, timeout: 10_000 });
        await expect(box, `the All Day checkbox did not turn ${want ? 'on' : 'off'}`)
            .toBeChecked({ checked: want, timeout: 10_000 });
    }

    /**
     * Choose who the meeting is for, from the host field's autocomplete.
     *
     * TYPED, not filled: the field is driven from real key events and `fill()`
     * leaves its search untouched — measured on the desk form, where a filled
     * value produced no requests at all. It also arrives pre-filled with the
     * signed-in user, so it is cleared with select-all first rather than
     * `fill('')`, which the model writes straight back.
     *
     * Options show the person's NAME above their address, so matching strips
     * everything but letters and digits from both sides.
     */
    async chooseHost(email: string): Promise<void> {
        const flat = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
        const field = this.root
            .locator('a-user-search-field, host-select-field')
            .first();
        await expect(
            field,
            'no host field on the meeting form — it is only rendered when ' +
                '`app.events.can_book_for_anyone` (or `can_book_for_others`) is set',
        ).toBeVisible({ timeout: 20_000 });

        const input = field.locator('input').first();
        const options = this.page.locator('mat-option');
        for (let attempt = 1; attempt <= 3; attempt++) {
            await input.click();
            await input.press('ControlOrMeta+a');
            await input.press('Backspace');
            // PROVE it is empty before typing. The field arrives pre-filled with
            // the signed-in user and the model writes that value back, so a
            // clear that did not take leaves the old name in place — the search
            // then runs on it and the panel offers the WRONG person, which is
            // exactly what happened on the first run of the room delegate spec.
            const cleared = await expect(input)
                .toHaveValue('', { timeout: 5_000 })
                .then(() => true)
                .catch(() => false);
            if (!cleared) continue;
            await input.pressSequentially(email, { delay: 30 });
            // The search is debounced (~300ms). Reading the options before it
            // fires returns whatever the last term produced.
            await this.page.waitForTimeout(800);
            const appeared = await options
                .first()
                .waitFor({ state: 'visible', timeout: 10_000 })
                .then(() => true)
                .catch(() => false);
            if (!appeared) continue;
            const texts = await options.allInnerTexts();
            const index = texts.findIndex((t) => flat(t).includes(flat(email)));
            if (index < 0) continue;
            await options.nth(index).click();
            return;
        }
        const offered = await options.allInnerTexts();
        throw new Error(
            `no host option for ${email} after 3 tries. The panel offered ` +
                `${offered.length}: ${JSON.stringify(offered.slice(0, 6))}. Without ` +
                `\`app.basic_user_search\` the field searches the calendar directory, ` +
                `which 500s on this stack.`,
        );
    }

    /** Is All Day currently ticked? */
    async isAllDay(): Promise<boolean> {
        const box = this.root.locator('input[name$=".all_day"]').first();
        if (!(await box.count())) return false;
        return box.isChecked();
    }

    /** What the host field currently shows, for proving a choice stuck. */
    async hostValue(): Promise<string> {
        const field = this.root
            .locator('a-user-search-field, host-select-field')
            .first();
        if (!(await field.count())) return '';
        const input = field.locator('input').first();
        if (await input.count()) return (await input.inputValue()) || '';
        return (await field.innerText()).trim();
    }

    /** Set the start time from the options the form offers, as "HH:mm". */
    async setStartTime(hhmm: string): Promise<void> {
        await this.startTimeTrigger.click();
        const option = this.page.locator(`button[data-time="${hhmm}"]`);
        await expect(
            option,
            `no start-time option for ${hhmm} — the form offers times on a fixed step ` +
                `and only inside its bookable hours, so pick one it lists`,
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
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

    /** Every meeting length on offer, in minutes. */
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
     * Move to the confirm screen, then send.
     *
     * Separate from filling the form so a spec can assert on the confirm screen
     * in between — and so the two clicks are never mistaken for one.
     */
    async confirmAndSend(): Promise<void> {
        await this.confirmViewButton.click();
        await expect(
            this.confirmButton,
            'the confirm screen did not appear after pressing Confirm on the form',
        ).toBeVisible({ timeout: 20_000 });
        await this.confirmButton.click();
    }
}
