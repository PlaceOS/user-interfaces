/**
 * Page object for `/book/parking/form` — the parking booking flow.
 *
 * SELECTOR POLICY, as everywhere else here: nothing depends on visible text,
 * because every label is translated. This form is the WORST of the four for
 * that — its buttons carry bare attributes (`confirm`, `clear-form`,
 * `add-space`, `select`) rather than names — so the attributes are the handles,
 * and each is written down below with where it lives.
 *
 * Flow shape, which differs from desks and from meetings:
 *
 *   form  ->  confirm  ->  success        (`parking-flow.component.ts`)
 *
 * `Confirm Reservation` on the form only changes the view. Nothing is sent until
 * the confirm screen's own button, so a spec that clicks once and looks for a
 * booking finds none and blames the backend.
 */
import { Locator, Page, expect } from '@playwright/test';

export class ParkingForm {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('parking-flow-form');
    }
    get title(): Locator {
        return this.page.locator('input[name$=".title"]').first();
    }
    /** The plate number field — parking's own, with no equivalent elsewhere. */
    get plate(): Locator {
        return this.page.locator('input[name$=".plate_number"]').first();
    }
    get allDay(): Locator {
        return this.page.locator('input[name$=".all_day"]').first();
    }
    get dateButton(): Locator {
        return this.root.locator('a-date-field button, date-field button').first();
    }
    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }
    /** Scoped to the FORM: the picker modal has its own time fields. */
    get startTimeTrigger(): Locator {
        return this.root.locator('button[time-field]').first();
    }
    get durationTrigger(): Locator {
        return this.root.locator('button[duration-field]').first();
    }
    /** "Add Parking Space" — a bare `add-space` attribute, no name. */
    get addSpaceButton(): Locator {
        return this.page.locator('parking-space-list-field button[add-space]');
    }
    /** The spaces chosen on the form, one row each. */
    get chosenSpaces(): Locator {
        return this.page.locator('parking-space-list-field [space], parking-space-list-field div[space]');
    }
    /** `Confirm Reservation` on the FORM — moves to the confirm screen. */
    get confirmViewButton(): Locator {
        return this.root.locator('button[confirm]').first();
    }
    /**
     * The confirm step's own button — this is what sends the booking.
     *
     * The confirm step is a **bottom sheet**, not a routed view like the desk and
     * meeting flows: `viewConfirm()` calls `_bottom_sheet.open(...)`. So it lives
     * in the CDK overlay, and a spec that waits for it inside the page body
     * waits for ever.
     */
    get confirmButton(): Locator {
        return this.page
            .locator('.cdk-overlay-container parking-flow-confirm button[confirm]')
            .first();
    }
    get successPanel(): Locator {
        return this.page.locator('parking-flow-success');
    }

    async open(): Promise<void> {
        await this.page.goto('/#/book/parking/form');
        await expect(
            this.root,
            'the parking form never rendered — is the `parking` feature enabled for ' +
                'this org, and is there a level tagged `parking`?',
        ).toBeVisible({ timeout: 30_000 });
        await expect(
            this.title,
            'the parking form rendered without its title field',
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
     * Open the date picker, converging.
     *
     * Same reasoning as the desk form: these forms are rebuilt when async init
     * completes, and a click that lands on the old element does nothing at all.
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
     * The calendar is a month grid with exactly one cell carrying the "today"
     * ring, so the only reliable way to reach a date is to count from it. The
     * whole sequence converges, because the picker has been seen opening with an
     * empty grid and being torn down between reading the cells and clicking one.
     */
    async pickDate(timestamp_ms: number): Promise<void> {
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
                `no "today" cell to count from. The grid holds ${grid.length} cells`,
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
                `${target.toDateString()} is outside the month grid the picker shows`,
            ).toBe(true);
            expect(
                grid[index].disabled,
                `${target.toDateString()} is offered but disabled`,
            ).toBe(false);

            await cells.nth(index).click({ timeout: 10_000 });
            await expect(
                this.datePicker.first(),
                'the date picker stayed open after choosing a day',
            ).toBeHidden({ timeout: 10_000 });
        }).toPass({ timeout: 60_000 });
    }

    /**
     * Pick a parking space by name.
     *
     * Three steps: `add-space` opens the modal, `select` on a row previews that
     * space, and `toggle-parking` takes it. The space is matched on its NAME,
     * which is test data we seeded (`E2E Parking 0`), not app copy.
     */
    async chooseSpace(name: string): Promise<void> {
        await this.addSpaceButton.click({ timeout: 10_000 });
        const modal = this.page.locator('parking-select-modal, mat-dialog-container');
        await expect(modal.first(), 'the parking picker did not open').toBeVisible({
            timeout: 20_000,
        });

        const row = this.page.locator('li[space]').filter({ hasText: name }).first();
        const found = await row
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (!found) {
            // Say what IS on offer. "Not found" cannot tell apart a space that
            // was never seeded, one on a level that is not tagged `parking`, and
            // one the picker is hiding because it is already booked.
            const offered = await this.page.locator('li[space]').allInnerTexts();
            throw new Error(
                `no parking space called "${name}" in the picker. It offers ` +
                    `${offered.length}: ` +
                    `${JSON.stringify(offered.map((t) => t.split('\n')[0].trim()))}. ` +
                    `Check parking.seed.ts ran (a level tagged \`parking\`, a ` +
                    `\`_PARKING_SPACES_\` asset type, and one asset per worker), and ` +
                    `that the space is free at the time chosen.`,
            );
        }
        await row.locator('button[select]').first().click();

        const done = this.page.locator('button[name="toggle-parking"]');
        await expect(done, 'the picker has no confirm button').toBeVisible({
            timeout: 10_000,
        });
        await expect(
            done,
            'the picker confirm button is disabled, so no space is previewed',
        ).toBeEnabled({ timeout: 10_000 });
        await done.click();
        await expect(
            this.chosenSpaces,
            `"${name}" was picked but the form shows no space`,
        ).toHaveCount(1, { timeout: 20_000 });
    }

    /** The names of the spaces currently on the form. */
    async chosenSpaceNames(): Promise<string[]> {
        const texts = await this.chosenSpaces.allInnerTexts();
        return texts.map((t) => t.split('\n')[0].trim());
    }

    /** Set the start time from the options offered, as "HH:mm". */
    async setStartTime(time: string): Promise<void> {
        await this.startTimeTrigger.click();
        const option = this.page.locator(`button[data-time="${time}"]`);
        await expect(
            option,
            `no start-time option for ${time} — the form offers times on a fixed step ` +
                `and only inside its bookable hours`,
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    /** Set the length in minutes, from the options offered. */
    async setDuration(minutes: number): Promise<void> {
        await this.durationTrigger.click();
        const option = this.page.locator(`button[data-duration="${minutes}"]`);
        await expect(
            option,
            `no ${minutes} minute option — lengths come on a fixed step up to the ` +
                `maximum duration setting`,
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
     * Move to the confirm step, then send.
     *
     * If the sheet never opens the form was refused locally, and `viewConfirm()`
     * shows a toast naming the invalid fields — so that toast is read and
     * included, rather than reporting a bare selector timeout.
     */
    async confirmAndSend(): Promise<void> {
        await this.confirmViewButton.click();
        const opened = await this.confirmButton
            .waitFor({ state: 'visible', timeout: 20_000 })
            .then(() => true)
            .catch(() => false);
        if (!opened) {
            const message = await this.page
                .locator('.cdk-overlay-container')
                .innerText()
                .catch(() => '');
            throw new Error(
                `the confirm sheet did not open, so the form was refused locally. ` +
                    `On screen: "${message.replace(/\s+/g, ' ').trim().slice(0, 300)}"`,
            );
        }
        await this.confirmButton.click();
    }
}
