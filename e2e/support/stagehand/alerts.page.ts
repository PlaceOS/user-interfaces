/**
 * Stagehand's hot list: the alerts page with the built in "Disconnected
 * Devices" view, which lists every module whose `connected` is false.
 *
 * The table is `simple-table`, so rows are read with the concierge page object
 * that already knows how to regroup its flat grid. A hot list row carries the
 * device as `<module name>_<index>` and the location as the system's name with
 * its id underneath, so a row is attributed to a system by the id.
 *
 * Until the first alert arrives the page shows a spinner instead of the table,
 * for up to 15 seconds. "No row for my module" is therefore only meaningful
 * once some row is showing; the specs hold a disconnected control module for
 * exactly that.
 */
import { Page, expect } from '@playwright/test';
import { readTable } from '../concierge/simple-table.page';

export interface HotListRow {
    device: string;
    cells: string[];
}

export async function openHotList(page: Page): Promise<void> {
    await page.goto('/#/alerts');
    await expect(
        page.getByRole('heading', { name: 'AV Systems Alerts' }),
    ).toBeVisible({
        timeout: 60_000,
    });
}

/** The hot list rows that belong to `system_id`, read once. */
export async function hotListRows(
    page: Page,
    system_id: string,
): Promise<HotListRow[]> {
    if (!(await page.locator('simple-table [role=table]').count())) return [];
    const table = await readTable(page);
    const device_column = table.headers.findIndex((h) => /device/i.test(h));
    return table.rows
        .filter((cells) => cells.some((c) => c.includes(system_id)))
        .map((cells) => ({
            // `Display_1~<icon>~Control System`: the slug comes first
            device: (cells[device_column] ?? '').split('~')[0].trim(),
            cells,
        }));
}

/** The devices in the hot list for `system_id`, sorted, for an exact assertion. */
export async function hotListDevices(
    page: Page,
    system_id: string,
): Promise<string[]> {
    return (await hotListRows(page, system_id)).map((r) => r.device).sort();
}

/** Wait until the hot list for `system_id` is exactly `devices`. */
export async function expectHotList(
    page: Page,
    system_id: string,
    devices: string[],
    timeout = 30_000,
): Promise<void> {
    await expect
        .poll(() => hotListDevices(page, system_id), {
            message: `stagehand's hot list for ${system_id}`,
            timeout,
        })
        .toEqual([...devices].sort());
}
