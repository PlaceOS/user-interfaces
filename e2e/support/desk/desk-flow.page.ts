/**
 * Page object for `/book/desk/form` — the `desk-flow-new` booking flow.
 *
 * `desk-form.page.ts` and `bookDeskViaUI` drive the flow that this one
 * replaced (`desk-flow-form`, the desk picker modal and the confirm overlay).
 * None of those elements exist here, so this file shares nothing with them.
 *
 * ## One page, no modal
 *
 * The details, the desk list and the Confirm button are all on one page.
 * Confirm sends the booking at once: there is no second confirmation step.
 *
 * ## Selector policy
 *
 * The same as the rest of the suite: no translated text. Controls with no
 * `name` attribute are matched on their icon ligature, which is not translated.
 *
 * ## The filters are in the DOM two times
 *
 * `desk-flow-select` renders a desktop filter column and a mobile filter sheet
 * with the same fields. Only one is visible for a viewport, so every filter
 * locator here is limited to visible elements.
 */
import { Locator, Page, expect } from '@playwright/test';

export class DeskFlow {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('desk-flow-new');
    }

    /** The title input. `name$=".title"` because the name is form-scoped. */
    get title(): Locator {
        return this.root.locator('desk-flow-details input[name$=".title"]');
    }

    /** The All Day toggle of the visible filter column. */
    get allDay(): Locator {
        return this.root
            .locator('desk-flow-select settings-toggle:visible')
            .filter({ has: this.page.locator('[formfield], input[type="checkbox"]') })
            .first();
    }

    /** One desk in the list, by the name it shows. */
    desk(name: string): Locator {
        return this.root
            .locator('desk-flow-select-list li[item]')
            .filter({ hasText: name })
            .first();
    }

    /** The desks the list offers on the current page. */
    get desks(): Locator {
        return this.root.locator('desk-flow-select-list li[item]');
    }

    /** The Confirm button. It shows a spinner icon while the booking saves. */
    get confirm(): Locator {
        return this.root
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'task_alt' }) });
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
        await expect(this.title).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Set the All Day toggle to a state. Reads the real state first: a click
     * on a toggle that is already in the target state inverts the intent.
     */
    async setAllDay(want: boolean): Promise<void> {
        const input = this.allDay.locator('input[type="checkbox"]');
        if ((await input.isChecked()) !== want) {
            await this.allDay.locator('button').first().click();
        }
        const check = expect(input, `All Day should be ${want ? 'on' : 'off'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }

    /** Select a desk in the list and wait for the list to show it as selected. */
    async selectDesk(name: string): Promise<void> {
        const item = this.desk(name);
        await expect(
            item,
            `desk "${name}" should be offered — is it seeded and free for the window?`,
        ).toBeVisible({ timeout: 20_000 });
        await item.locator('button[name="select-item"]').click();
        await expect(
            item.locator('icon', { hasText: 'task_alt' }),
            `desk "${name}" should show as selected`,
        ).toBeVisible();
    }
}
