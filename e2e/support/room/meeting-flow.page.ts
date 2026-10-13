/**
 * Page object for `/book/meeting/form` — the `meeting-flow-new` booking flow.
 *
 * `meeting-form.page.ts` and `bookRoomViaUI` drive the flow that this one
 * replaced (`meeting-flow-form` and the room picker modal). None of those
 * elements exist here, so this file shares nothing with them.
 *
 * ## Three steps on one route
 *
 * The step is the `view` query parameter, not a route segment:
 *
 *   view=0  `meeting-flow-details`       title, date, time, room size
 *   view=1  `meeting-flow-space-select`  filters and the room list
 *   view=2  `meeting-flow-options`       attendees, catering, notes, Confirm
 *
 * Nothing is sent until Confirm on the last step. Each step refuses to go
 * forward when its own requirement is missing: a title for step 1, a room for
 * step 2.
 *
 * ## Selector policy
 *
 * No translated text. Controls with no `name` attribute are matched on their
 * icon ligature, which is not translated.
 */
import { Locator, Page, expect } from '@playwright/test';

/** Upper bound on the room list pages that `selectRoom` reads. */
const MAX_LIST_PAGES = 10;

export class MeetingFlow {
    constructor(private readonly page: Page) {}

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

    /** The title input. `name$=".title"` because the name is form-scoped. */
    get title(): Locator {
        return this.details.locator('input[name$=".title"]');
    }

    /** The native input of the All Day checkbox on the details step. */
    get allDay(): Locator {
        return this.details.locator('input[name$=".all_day"]');
    }

    /** "Search available rooms" — goes from the details to the room list. */
    get searchRooms(): Locator {
        return this.details
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'search' }) });
    }

    /** The rooms the list offers on the current page. */
    get rooms(): Locator {
        return this.roomSelect.locator('meeting-flow-space-list li[space]');
    }

    /** One room in the list, by the name it shows. */
    room(name: string): Locator {
        return this.rooms.filter({ hasText: name }).first();
    }

    get nextListPage(): Locator {
        return this.roomSelect
            .locator('meeting-flow-space-list button[icon]')
            .filter({ has: this.page.locator('icon', { hasText: 'keyboard_arrow_right' }) });
    }

    /** Continue — the last control of the room step. Back is a link. */
    get continue(): Locator {
        return this.roomSelect.locator('button[btn]').last();
    }

    /** The Confirm button of the last step. */
    get confirm(): Locator {
        return this.options
            .locator('button[btn]')
            .filter({ has: this.page.locator('icon', { hasText: 'task_alt' }) });
    }

    get success(): Locator {
        return this.page.locator('meeting-flow-success');
    }

    get successContinue(): Locator {
        return this.success.locator('[name="meeting-created-continue"]');
    }

    async open(): Promise<void> {
        await this.page.goto('/#/book/meeting/form');
        await expect(this.title).toBeVisible({ timeout: 30_000 });
    }

    /**
     * Set the All Day checkbox to a state. Reads the real state first: a click
     * on a checkbox that is already in the target state inverts the intent.
     */
    async setAllDay(want: boolean): Promise<void> {
        if ((await this.allDay.isChecked()) !== want) {
            await this.details.locator('mat-checkbox:has(input[name$=".all_day"])').click();
        }
        const check = expect(this.allDay, `All Day should be ${want ? 'on' : 'off'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }

    /**
     * Select a room in the list and wait for the list to show it as selected.
     *
     * The list shows ten rooms a page and the stack seeds more than that, so
     * this reads the pages in order until the room shows.
     */
    async selectRoom(name: string): Promise<void> {
        const item = this.room(name);
        await expect(this.rooms.first(), 'the room list should offer rooms').toBeVisible({
            timeout: 20_000,
        });
        for (let page = 1; page < MAX_LIST_PAGES; page++) {
            if (await item.isVisible()) break;
            if (!(await this.nextListPage.isEnabled().catch(() => false))) break;
            await this.nextListPage.click();
        }
        await expect(
            item,
            `room "${name}" should be offered — is it seeded and free for the window?`,
        ).toBeVisible();
        await item.locator('button[name="select-space"]').click();
        await expect(
            item.locator('button[name="select-space"] icon', { hasText: 'task_alt' }),
            `room "${name}" should show as selected`,
        ).toBeVisible();
    }
}
