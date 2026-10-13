/**
 * Page object for `/book/visitor/form` — the `visitor-flow-new` invite flow.
 *
 * `invite-form.page.ts` and `inviteVisitorViaUI` drive the flow that this one
 * replaced (`invite-visitor-form`). That element does not exist here, so this
 * file shares nothing with them.
 *
 * ## One page
 *
 * The recent visitors, the visit details, the visitor fields and the Confirm
 * button are all on one page. Confirm sends the invite at once.
 *
 * ## Selector policy
 *
 * No translated text. Form inputs are matched on the suffix of their
 * form-scoped `name` (`ng.form0.asset_id`). Controls with no `name` attribute
 * are matched on their icon ligature, which is not translated.
 */
import { Locator, Page, expect } from '@playwright/test';

export class VisitorFlow {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('visitor-flow-new');
    }

    /** The reason for the visit. Stored as the booking title. */
    get reason(): Locator {
        return this.root.locator('visitor-flow-details input[name$=".title"]');
    }

    /** The native input of the All Day checkbox. */
    get allDay(): Locator {
        return this.root.locator('visitor-flow-details input[name$=".all_day"]');
    }

    /** Single-visitor fields. The email is the booking's `asset_id`. */
    get name(): Locator {
        return this.root.locator('visitor-flow-invites input[name$=".asset_name"]');
    }

    get email(): Locator {
        return this.root.locator('visitor-flow-invites input[name$=".asset_id"]');
    }

    get company(): Locator {
        return this.root.locator('visitor-flow-invites input[name$=".company"]');
    }

    /** The recent visitors that the quick action panel offers. */
    get recentVisitors(): Locator {
        return this.root.locator('visitor-flow-recent button[type="button"]');
    }

    /** The Confirm button. It shows a spinner icon while the invite saves. */
    get confirm(): Locator {
        return this.root
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'task_alt' }) });
    }

    get success(): Locator {
        return this.page.locator('visitor-flow-success');
    }

    async open(): Promise<void> {
        await this.page.goto('/#/book/visitor/form');
        await expect(this.reason).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Set the All Day checkbox to a state. Reads the real state first: a click
     * on a checkbox that is already in the target state inverts the intent.
     */
    async setAllDay(want: boolean): Promise<void> {
        if ((await this.allDay.isChecked()) !== want) {
            await this.root
                .locator('visitor-flow-details mat-checkbox:has(input[name$=".all_day"])')
                .click();
        }
        const check = expect(this.allDay, `All Day should be ${want ? 'on' : 'off'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }
}
