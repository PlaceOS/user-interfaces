/**
 * Page object for the Invite Visitor form (`/#/book/visitor/form`).
 *
 * SELECTOR POLICY, because this form has none of the `name` hooks the desk flow
 * relies on: every locator below is a hardcoded attribute, a fixed id, a form
 * control suffix, or a `data-` attribute. NOT ONE depends on visible text, so a
 * translation change cannot break this file. Each was confirmed against the
 * running app by dumping the DOM, not read off the template and hoped for.
 *
 *   Send button        `button[send]`            bare attribute in the template
 *   Sending spinner    `div[loading]`            bare attribute
 *   Success panel      `div[sent]`               bare attribute
 *   Visitor name       `#visitor-name`           fixed id
 *   Visitor email      `#visitor-email`          fixed id
 *   Reason             `#reason`                 fixed id
 *   Company etc.       `input[name$=".company"]` signal-form control suffix
 *   Visitor chips      `mat-chip-row[user]`      bare attribute
 *   Chip entry         `input[name="user_email"]` hardcoded name
 *   Building           `mat-select[name="building"]` hardcoded name
 *   Time picker        `button[time-field]`      bare attribute
 *   Time option        `button[data-time="HH:mm"]`     real data- attribute
 *   Duration option    `button[data-duration="mins"]`  real data- attribute
 *
 * The form-control names carry a form index (`ng.form0.asset_name`), so match
 * the SUFFIX rather than the whole name. Note the reason lives on a SECOND
 * form (`ng.form1.title`) because it is validated separately — `#reason` is the
 * unambiguous way to reach it.
 */
import { Locator, Page, expect } from '@playwright/test';
import { pickCalendarDay } from './calendar';

export class InviteVisitorForm {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('invite-visitor-form');
    }
    get sendButton(): Locator {
        return this.root.locator('button[send]');
    }
    get successPanel(): Locator {
        return this.page.locator('div[sent]');
    }
    get visitorName(): Locator {
        return this.page.locator('#visitor-name');
    }
    get visitorEmail(): Locator {
        return this.page.locator('#visitor-email');
    }
    get company(): Locator {
        return this.root.locator('input[name$=".company"]');
    }
    get reason(): Locator {
        return this.page.locator('#reason');
    }
    get passNumber(): Locator {
        return this.root.locator('input[name$=".pass_number"]');
    }
    get allDay(): Locator {
        return this.root.locator('input[name$=".all_day"]');
    }
    get international(): Locator {
        return this.root.locator('input[name$=".international"]');
    }
    get chipEntry(): Locator {
        return this.page.locator('input[name="user_email"]');
    }
    get chips(): Locator {
        return this.page.locator('mat-chip-row[user]');
    }
    /** The button that opens the date picker. */
    get dateButton(): Locator {
        return this.root.locator('a-date-field button').first();
    }
    /** The picker itself, which lives in an overlay once opened. */
    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }

    /**
     * Put the visit on a different day.
     *
     * The form defaults to today, so anything testing a future visit has to say
     * so. Same widget as the schedule's sidebar calendar, hence the shared
     * helper — the only difference is that this one has to be opened first.
     */
    async setDate(timestamp_ms: number): Promise<void> {
        await this.dateButton.click();
        // This picker is a pop-up and shuts itself when a day is clicked, which
        // is also how we know the click landed.
        await pickCalendarDay(this.page, this.datePicker, timestamp_ms, {
            closes_on_pick: true,
        });
    }

    /**
     * The chip for one visitor, in multi-visitor mode.
     *
     * Matched on the part of the address BEFORE the @, because that is all the
     * chip renders: the widget shows `name || email`, and a visitor added by
     * email alone comes back named after the local part. Filtering on the full
     * address matches nothing — silently, which is what an earlier version of
     * the group edit spec did, and it read as a broken remove button.
     *
     * This is test data, not app copy, so matching on it does not break the
     * "never depend on visible text" rule — nothing here is translated.
     */
    async chipIndexFor(email: string): Promise<number> {
        const local = email.split('@')[0];
        const texts = await this.chips.allInnerTexts();
        const index = texts.findIndex((text) => {
            const label = text.split('\n')[0].trim();
            return label === email || label === local;
        });
        if (index < 0) {
            throw new Error(
                `no visitor chip for ${email}. The form shows ` +
                    `${texts.length}: ${JSON.stringify(texts.map((t) => t.split('\n')[0].trim()))}`,
            );
        }
        return index;
    }

    /**
     * Add a visitor to the list, and make sure it actually landed.
     *
     * Typing an address opens an autocomplete offering "add external user", and
     * Enter picks it — but only once that panel has caught up. Fire Enter too
     * early and the address just sits in the box: no chip, no error, and the
     * next step operates on a list that is one person short. Seen for real,
     * which is why this retries rather than pressing once and hoping.
     */
    async addVisitorChip(email: string): Promise<void> {
        for (let attempt = 1; attempt <= 3; attempt++) {
            await this.chipEntry.fill(email);
            await this.chipEntry.press('Enter');
            const landed = await expect(async () => {
                await this.chipIndexFor(email);
            })
                .toPass({ timeout: 5_000 })
                .then(() => true)
                .catch(() => false);
            if (landed) return;
        }
        const texts = await this.chips.allInnerTexts();
        throw new Error(
            `${email} could not be added to the visitor list after 3 tries. The list ` +
                `holds ${texts.length}: ${JSON.stringify(texts.map((t) => t.split('\n')[0].trim()))}. ` +
                `The autocomplete may not be offering "add external user" for this ` +
                `address at all.`,
        );
    }

    /** Take one visitor off the list before sending. */
    async removeVisitorChip(email: string): Promise<void> {
        const before = await this.chips.count();
        const index = await this.chipIndexFor(email);
        await this.chips.nth(index).locator('button[remove]').click();
        await expect(
            this.chips,
            `removing ${email} did not shorten the visitor list`,
        ).toHaveCount(before - 1, { timeout: 10_000 });
    }

    get buildingSelect(): Locator {
        return this.page.locator('mat-select[name="building"]');
    }
    get hostField(): Locator {
        return this.page.locator('a-user-search-field');
    }
    get hostInput(): Locator {
        return this.hostField.locator('input').first();
    }

    /**
     * Pick a different host — "book this visit on behalf of someone else".
     *
     * Needs `visitors.can_book_for_anyone` AND `basic_user_search`. The other
     * host control (`host-select-field`, behind `can_book_for_others`) builds
     * its list from `GET /calendars`, which is 500 on any stack without real
     * Microsoft/Google credentials, so it can never list anyone but yourself
     * here. Likewise the search field's default source is `/people`, also
     * calendar backed; `basic_user_search` swings it to rest-api's `/users`.
     *
     * Once chosen the input shows the host's NAME, not their email
     * (`displayFn` in user-search-field.component.ts) — which is why the name
     * is needed to tell "already set" from "not set yet".
     */
    async chooseHost(email: string, name: string): Promise<void> {
        await expect(
            this.hostField,
            'the host field is missing — this flow needs ' +
                '`app.visitors.can_book_for_anyone = true`',
        ).toBeVisible({ timeout: 30_000 });

        if ((await this.hostInput.inputValue()) === name) return;

        await this.hostInput.fill(email);
        const option = this.page
            .locator('mat-option')
            .filter({ hasText: email })
            .first();
        await expect(
            option,
            `no user matching "${email}" was offered — is that user seeded, and is ` +
                '`app.basic_user_search` on so the search hits rest-api rather than ' +
                'the calendar-backed /people endpoint?',
        ).toBeVisible({ timeout: 20_000 });
        await option.click();
        await expect(this.hostInput).toHaveValue(name);
    }
    get startTimeTrigger(): Locator {
        return this.page.locator('button[time-field]');
    }

    get durationTrigger(): Locator {
        return this.page.locator('button[duration-field]');
    }

    /**
     * Every start time the form is willing to offer, as "HH:mm".
     *
     * Read from the `data-time` attribute, not the rendered label, so a 12/24
     * hour setting or a locale cannot change the answer. Opens the menu and
     * closes it again, leaving the form as it was found.
     */
    async startTimeOptions(): Promise<string[]> {
        await this.startTimeTrigger.click();
        const options = this.page.locator('button[data-time]');
        await expect(
            options.first(),
            'the start-time menu offered nothing at all',
        ).toBeVisible({ timeout: 10_000 });
        const values = await options.evaluateAll((els) =>
            els.map((el) => el.getAttribute('data-time') ?? ''),
        );
        await this.page.keyboard.press('Escape');
        return values.filter(Boolean);
    }

    /** Every visit length the form is willing to offer, in minutes. */
    async durationOptions(): Promise<number[]> {
        await this.durationTrigger.click();
        const options = this.page.locator('button[data-duration]');
        await expect(
            options.first(),
            'the duration menu offered nothing at all',
        ).toBeVisible({ timeout: 10_000 });
        const values = await options.evaluateAll((els) =>
            els.map((el) => Number(el.getAttribute('data-duration'))),
        );
        await this.page.keyboard.press('Escape');
        return values.filter((v) => Number.isFinite(v));
    }

    /** Choose how long the visit lasts, in minutes. */
    async setDuration(minutes: number): Promise<void> {
        await this.durationTrigger.click();
        const option = this.page.locator(`button[data-duration="${minutes}"]`);
        await expect(
            option,
            `no ${minutes} minute option — the form offers lengths on a fixed step and ` +
                'only up to `max_duration`, so pick one it actually lists',
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    /** Open the form and wait for it to render. */
    async open(): Promise<void> {
        await this.page.goto('/#/book/visitor/form');
        await expect(
            this.root,
            'the visitor invite form never rendered — is the `visitor-invite` feature enabled?',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** Fail with a useful message if the form is not in single-visitor mode. */
    async expectSingleMode(): Promise<void> {
        await expect(
            this.visitorEmail,
            'the single-visitor email field is missing — this flow needs ' +
                '`app.bookings.multiple_visitors = false`; the app default is true, ' +
                'which renders the chip list instead',
        ).toBeVisible({ timeout: 30_000 });
    }

    /** Fail with a useful message if the form is not in multi-visitor mode. */
    async expectGroupMode(): Promise<void> {
        await expect(
            this.chipEntry,
            'the multi-visitor entry field is missing — this flow needs ' +
                '`app.bookings.multiple_visitors = true`',
        ).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Pick an exact start time.
     *
     * Uses the option's `data-time` attribute rather than its rendered label,
     * which is formatted with the user's 12/24-hour setting and timezone. Needed
     * by the check-in specs, which must land a booking inside the one-hour
     * window the backend allows a check-in from.
     */
    async setStartTime(hhmm: string): Promise<void> {
        await this.startTimeTrigger.click();
        const option = this.page.locator(`button[data-time="${hhmm}"]`);
        await expect(
            option,
            `no start-time option for ${hhmm} — the form offers times on a fixed step ` +
                `and only within its bookable hours, so pick one it actually lists`,
        ).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    /** Set a Material checkbox to a state, reading the real state off the input. */
    async setCheckbox(input: Locator, want: boolean): Promise<void> {
        if (!(await input.count())) return;
        if ((await input.isChecked().catch(() => false)) === want) return;
        // The visible mat-checkbox is the click target; the input holds `checked`.
        await input.locator('xpath=ancestor::mat-checkbox').click();
        await (want ? expect(input).toBeChecked() : expect(input).not.toBeChecked());
    }
}
