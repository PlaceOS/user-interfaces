/** Group-specific page actions; ordinary desk tests keep using DeskFlow. */
import { type Page, expect } from '@playwright/test';
import { DeskFlow } from './desk-flow.page';
import { groupDeskSlot } from './desk-group.env';
import { type GroupDeskSeed } from './desk-group.seed';
import { hhmm } from './desk.env';

export class DeskGroupPage {
    readonly form: DeskFlow;
    constructor(readonly page: Page) {
        this.form = new DeskFlow(page);
    }

    /** The notices of the app. A refusal and a warning both show as one. */
    get notice() {
        return this.page.locator('mat-snack-bar-container:not([mat-exit])');
    }

    async prepare(
        seed: GroupDeskSeed,
        title: string,
        members: string[],
        slot: ReturnType<typeof groupDeskSlot>,
    ) {
        await this.form.open();
        await this.form.bookForGroup();
        await this.form.pickDate(slot.date_ms);
        await this.form.setChecked(this.form.requireLocker, false);
        await this.form.setAllDay(false);
        await this.form.setStartTime(hhmm(slot.start));
        await this.form.setDuration(slot.duration);
        await this.form.title.fill(title);
        for (const member of members) await this.form.addGroupMember(member);
        // Narrow the list to the test level, then select its first desk. The
        // flow gives the other members the desks nearest to it on the map.
        await this.form.chooseLevel(seed.level_name);
        await this.form.selectDesk(seed.desks[0].name);
        // Read the form back. Confirm saves at once.
        await expect(this.form.groupField).toBeVisible();
        await expect(this.form.title).toHaveValue(title);
        await expect(this.form.groupMembers).toHaveCount(members.length);
        await expect(this.form.allDayInput).not.toBeChecked();
    }

    /** Confirm. The flow saves at once: there is no confirm dialog. */
    async submit() {
        await this.form.confirmAndSend();
    }

    async expectSuccess() {
        await expect(this.page).toHaveURL(/#\/book\/desk\/success/);
        await expect(this.form.successContinue).toBeVisible();
    }

    /** The flow refused the booking: a notice shows and the form stays. */
    async expectRefused() {
        await expect(this.notice).toBeVisible();
        await expect(this.page).toHaveURL(/#\/book\/desk\/form/);
        await expect(this.form.confirm).toBeVisible();
    }
}
