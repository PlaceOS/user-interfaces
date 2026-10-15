/**
 * Stagehand's support group switcher, in the sidebar, and the remote support
 * page's room list, which the selected group limits.
 *
 * The switcher is a button labelled `Support group: <name>` that opens a list
 * of the user's groups (and "All groups", for admins and support users).
 */
import { Page, expect } from '@playwright/test';
import { readTable } from '../concierge/simple-table.page';

const selector = (page: Page) => page.locator('[group-selector]');

/** Wait until the sidebar names `name` as the selected group. */
export async function expectSelectedGroup(
    page: Page,
    name: string,
): Promise<void> {
    await expect(selector(page)).toHaveAttribute(
        'aria-label',
        `Support group: ${name}`,
        { timeout: 30_000 },
    );
}

/** Switch to the group named `name` (or "All groups"). */
export async function selectGroup(page: Page, name: string): Promise<void> {
    await selector(page).click();
    const dialog = page.getByRole('dialog');
    await dialog.locator('[group-option]', { hasText: name }).click();
    await expect(dialog).toBeHidden();
    await expectSelectedGroup(page, name);
}

/** The groups the switcher offers, in order. */
export async function offeredGroups(page: Page): Promise<string[]> {
    await selector(page).click();
    const dialog = page.getByRole('dialog');
    const options = dialog.locator('[group-option]');
    await expect(options.first()).toBeVisible();
    const names = (await options.allInnerTexts()).map((text) =>
        text
            .replace(/^\S+\s*/, '')
            .split('\n')[0]
            .trim(),
    );
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    return names;
}

export async function openRemoteSupport(page: Page): Promise<void> {
    await page.goto('/#/remote-support');
    await expect(
        page.getByRole('heading', { name: 'AV Systems Remote Support' }),
    ).toBeVisible({ timeout: 60_000 });
}

/** Names of the rooms the remote support page lists, read once. */
export async function remoteSupportRooms(page: Page): Promise<string[]> {
    if (!(await page.locator('simple-table [role=table]').count())) return [];
    const table = await readTable(page);
    const room_column = table.headers.findIndex((h) => /room/i.test(h));
    return table.rows.map((cells) => (cells[room_column] ?? '').trim());
}

/** Wait until the rooms the page lists that start with `prefix` are `rooms`. */
export async function expectRemoteSupportRooms(
    page: Page,
    prefix: string,
    rooms: string[],
    timeout = 30_000,
): Promise<void> {
    await expect
        .poll(
            async () =>
                (await remoteSupportRooms(page))
                    .filter((name) => name.startsWith(prefix))
                    .sort(),
            { message: 'the remote support room list', timeout },
        )
        .toEqual([...rooms].sort());
}
