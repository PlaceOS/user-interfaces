import { Locator, Page, Response, expect } from '@playwright/test';
import { pickCalendarDay } from '../visitor/calendar';

export class LockerForm {
    constructor(private readonly page: Page) {}

    get root(): Locator {
        return this.page.locator('locker-flow-form');
    }
    get buildingSelect(): Locator {
        return this.page.locator('new-locker-form-details mat-select').first();
    }
    get dateButton(): Locator {
        return this.page
            .locator('new-locker-form-details a-date-field button')
            .first();
    }
    get datePicker(): Locator {
        return this.page.locator('.cdk-overlay-container date-calendar');
    }
    get allDay(): Locator {
        return this.page.locator(
            'new-locker-form-details mat-checkbox input[type="checkbox"]',
        );
    }
    get startTimeTrigger(): Locator {
        return this.page
            .locator(
                'new-locker-form-details a-time-field[name="start-time"] button[time-field]',
            )
            .first();
    }
    get durationTrigger(): Locator {
        return this.page
            .locator('new-locker-form-details button[duration-field]')
            .first();
    }
    get addLockerButton(): Locator {
        return this.page.locator('button[name="add-locker"]');
    }
    get modal(): Locator {
        return this.page.locator('locker-select-modal');
    }
    get bankButtons(): Locator {
        return this.modal.locator('button[name="select-locker_bank"]');
    }
    get lockerButtons(): Locator {
        return this.modal.locator('locker-grid button');
    }
    get toggleLockerButton(): Locator {
        return this.modal.locator('button[name="toggle-locker"]');
    }
    get returnSelectionButton(): Locator {
        return this.modal.locator('button[name="locker-return"]');
    }
    get selectedLocker(): Locator {
        return this.page.locator('locker-list-field [locker]');
    }
    get openConfirmationButton(): Locator {
        return this.page.locator('button[name="open-locker-confirm"]');
    }
    get finalConfirmationButton(): Locator {
        return this.page
            .locator('.cdk-overlay-container button[name="confirm-locker"]')
            .first();
    }
    get successLink(): Locator {
        return this.page.locator('a[name="locker-confirm-continue"]');
    }

    async open(): Promise<void> {
        await this.page.goto('/#/book/locker/form');
        await expect(this.root).toBeVisible({ timeout: 30_000 });
        await expect(this.buildingSelect).toBeVisible({ timeout: 30_000 });
        await expect(this.addLockerButton).toBeVisible({ timeout: 30_000 });
    }

    async setBuilding(name: string): Promise<void> {
        await this.buildingSelect.click();
        await this.page.getByRole('option', { name }).click();
    }

    async setDate(timestamp_ms: number): Promise<void> {
        await this.dateButton.click();
        await pickCalendarDay(this.page, this.datePicker, timestamp_ms, {
            closes_on_pick: true,
        });
    }

    async setAllDay(want: boolean): Promise<void> {
        await expect(this.allDay).toBeVisible();
        if ((await this.allDay.isChecked()) !== want) {
            await this.allDay.click({ force: true });
        }
        await expect(this.allDay).toBeChecked({ checked: want });
    }

    async setStartTime(value: string): Promise<void> {
        await this.startTimeTrigger.click();
        const option = this.page.locator(`button[data-time="${value}"]`);
        await expect(option).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    async setDuration(minutes: number): Promise<void> {
        await this.durationTrigger.click();
        const option = this.page.locator(`button[data-duration="${minutes}"]`);
        await expect(option).toBeVisible({ timeout: 10_000 });
        await option.click();
    }

    async openLockerSelection(): Promise<void> {
        await this.addLockerButton.click();
        await expect(this.modal).toBeVisible({ timeout: 20_000 });
        await expect(this.bankButtons.first()).toBeVisible({ timeout: 20_000 });
    }

    async selectLocker(bankName: string, lockerName: string): Promise<void> {
        await this.openLockerSelection();
        await this.bankButtons.filter({ hasText: bankName }).click();
        const locker = this.lockerButtons.filter({ hasText: lockerName }).first();
        await expect(locker).toBeVisible({ timeout: 20_000 });
        await locker.click();
        await expect(this.toggleLockerButton).toBeEnabled({ timeout: 10_000 });
        await this.toggleLockerButton.click();
        if (await this.modal.isVisible().catch(() => false)) {
            await this.returnSelectionButton.click();
        }
        await expect(this.selectedLocker.filter({ hasText: lockerName })).toBeVisible({
            timeout: 20_000,
        });
    }

    async confirmAndSend(): Promise<Response> {
        await this.openConfirmationButton.click();
        await expect(this.finalConfirmationButton).toBeVisible({ timeout: 20_000 });
        const responsePromise = this.page.waitForResponse(
            (response) =>
                response.url().includes('/api/staff/v1/bookings') &&
                response.request().method() === 'POST',
            { timeout: 30_000 },
        );
        await this.finalConfirmationButton.click();
        const response = await responsePromise;
        await expect(this.successLink).toBeVisible({ timeout: 30_000 });
        return response;
    }
}
