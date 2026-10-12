/** Group-specific page actions; ordinary desk tests keep using DeskForm. */
import { type Page, expect } from '@playwright/test';
import { DeskForm } from './desk-form.page';
import { groupDeskSlot } from './desk-group.env';
import { type GroupDeskSeed } from './desk-group.seed';
import { hhmm } from './desk.env';

export class DeskGroupPage {
    readonly form: DeskForm;
    constructor(readonly page: Page) {
        this.form = new DeskForm(page);
    }

    async prepare(
        seed: GroupDeskSeed,
        title: string,
        members: string[],
        slot: ReturnType<typeof groupDeskSlot>,
    ) {
        await this.form.open();
        await this.form.groupModeButton.click();
        await this.form.pickDate(slot.date_ms);
        // Date/init can rebuild the form and restore single mode (REG-10).
        await this.form.groupModeButton.click();
        await expect(this.form.root.locator('a-user-list-field')).toBeVisible();
        await this.form.setChecked(this.form.requireLocker, false);
        await this.form.setChecked(this.form.allDay, false);
        await this.form.title.fill(title);
        for (const member of members) await this.form.addGroupMember(member);
        await this.form.addDeskButton.click();
        // Wait for the initial resource list before narrowing to the test level.
        // Resource updates can rebuild the dropdown while it is open.
        await expect(
            this.page.locator('button[name="select-desk"]').filter({
                hasText: seed.desks[0].name,
            }),
        ).toBeVisible();
        const level = this.page.locator('mat-select[name="location"]').first();
        await expect(async () => {
            if ((await level.innerText()).includes(seed.level_name)) return;
            if ((await level.getAttribute('aria-expanded')) !== 'true')
                await level.click();
            await this.page
                .getByRole('option', { name: seed.level_name, exact: true })
                .click({ timeout: 2_000 });
            await expect(level).toContainText(seed.level_name);
        }).toPass({ timeout: 15_000 });
        await this.page
            .locator('button[name="select-desk"]')
            .filter({ hasText: seed.desks[0].name })
            .click();
        await this.page.locator('button[name="toggle-desk"]').click();
        await this.form.setStartTime(hhmm(slot.start));
        await this.form.setDuration(slot.duration);
        await expect(this.form.title).toHaveValue(title);
        await expect(this.form.groupMembers).toHaveCount(members.length);
    }

    async submit() {
        await this.form.confirmAndSend();
    }
    async expectSuccess() {
        await expect(this.page).toHaveURL(/#\/book\/desk\/success/);
    }
}
