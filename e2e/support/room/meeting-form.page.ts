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
