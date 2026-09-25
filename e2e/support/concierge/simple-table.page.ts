/**
 * Reading concierge's `simple-table`.
 *
 * ## Why this needs a page object at all
 *
 * `simple-table` is not a table. It renders a **flat CSS grid**: one `div` per
 * cell, all of them siblings, with no row element and no ARIA roles on the
 * cells. So there is nothing to write `.locator('tr')` against — "the row for my
 * booking" has to be reconstructed by grouping the cells into runs of N, where N
 * is the number of header buttons.
 *
 * Measured on `/#/book/desks/events`, 2026-09-17: `[role=table]` with 10 header
 * children and 560 body children = 56 rows. The header buttons carry
 * `id="column-<field>"`, which is the only stable naming in the whole control —
 * so columns are addressed by that id rather than by position, because the
 * column ORDER is a product decision that may change.
 *
 * One quirk the ids do not fix: two different columns share `id="column-date"`
 * (Date and Period). `columnIndex` returns the FIRST match, which is Date;
 * anything needing Period should ask by index.
 *
 * ## Why rows are read in one page evaluation
 *
 * A row is only meaningful as a group, and these listings routinely carry 50+
 * rows of leftover cancelled bookings. Locating 10 cells per row through
 * separate locator calls would be hundreds of round trips for one assertion.
 * This reads the grid once and does the grouping in the page.
 */
import { Locator, Page, expect } from '@playwright/test';

export interface TableSnapshot {
    /** `column-<field>` ids, in render order. */
    column_ids: string[];
    /** Visible header labels, in render order. */
    headers: string[];
    /** One array of cell texts per row. Newlines become `~`. */
    rows: string[][];
}

/** The grid element itself, for waiting on. */
export function tableOf(page: Page, host = 'simple-table'): Locator {
    return page.locator(`${host} [role=table]`).first();
}

/** Wait until the listing has rendered its header row. */
export async function waitForTable(page: Page, host = 'simple-table'): Promise<void> {
    await expect(
        tableOf(page, host),
        `the ${host} listing never rendered. Check the page's own loading state ` +
            `before assuming the data is missing`,
    ).toBeVisible({ timeout: 45_000 });
    await expect
        .poll(
            async () => tableOf(page, host).locator('[header]').count(),
            {
                message: `${host} rendered no column headers`,
                timeout: 30_000,
            },
        )
        .toBeGreaterThan(0);
}

/** Read the whole grid in one go. */
export async function readTable(
    page: Page,
    host = 'simple-table',
): Promise<TableSnapshot> {
    await waitForTable(page, host);
    return tableOf(page, host).evaluate((table) => {
        const kids = Array.from(table.children) as HTMLElement[];
        const header_cells = kids.filter((el) => el.hasAttribute('header'));
        const body_cells = kids.filter((el) => !el.hasAttribute('header'));
        const width = header_cells.length;
        const rows: string[][] = [];
        if (width > 0) {
            for (let i = 0; i + width <= body_cells.length; i += width) {
                rows.push(
                    body_cells
                        .slice(i, i + width)
                        .map((el) => (el.innerText || '').trim().replace(/\n+/g, '~')),
                );
            }
        }
        return {
            column_ids: header_cells.map((el) => el.id),
            headers: header_cells.map((el) =>
                (el.innerText || '').trim().split('\n')[0],
            ),
            rows,
        };
    });
}

/**
 * Wait until the listing has at least one data row, and return the snapshot.
 *
 * `waitForTable` only waits for the HEADER, and every concierge listing renders
 * its header immediately and fills the body after its request returns. A plain
 * `readTable` therefore races the data and reports an empty listing — which
 * looks exactly like "the page has no rows", the very thing these specs are
 * trying to tell apart. Measured on desk management: headers present, body
 * still empty, rows arriving ~1s later.
 */
export async function waitForAnyRow(
    page: Page,
    options: { host?: string; timeout?: number } = {},
): Promise<TableSnapshot> {
    const host = options.host ?? 'simple-table';
    let last: TableSnapshot | null = null;
    await expect
        .poll(
            async () => {
                last = await readTable(page, host);
                return last.rows.length;
            },
            {
                message:
                    `the ${host} listing rendered its header but never any rows. ` +
                    `If the page genuinely has no data this is the right failure — ` +
                    `but check the level/zone selector first, because these pages ` +
                    `scope to the selected building.`,
                timeout: options.timeout ?? 45_000,
            },
        )
        .toBeGreaterThan(0);
    return last as unknown as TableSnapshot;
}

/**
 * The index of a column by its `column-<field>` id.
 *
 * Throws rather than returning -1: a spec that silently read column -1 would
 * assert against `undefined` and report a confusing failure about the data.
 */
export function columnIndex(snapshot: TableSnapshot, field: string): number {
    const index = snapshot.column_ids.indexOf(`column-${field}`);
    if (index < 0) {
        throw new Error(
            `No column with id "column-${field}" in this listing. Columns present: ` +
                `${snapshot.column_ids.join(', ')}. The column ids come from the ` +
                `component template, so this usually means the page changed, not the data.`,
        );
    }
    return index;
}

/**
 * Ignore cancelled rows.
 *
 * ## Why this is needed, and why it is not optional for anything reusable
 *
 * Cancelling a booking does NOT take it off these listings — it re-labels it
 * `Cancelled` (desks, parking) or `Canceled` (visitors, one `l`) and leaves it
 * there. Combined with the stale-booking problem recorded in `notes/STATUS.md`
 * §4, a concierge listing accumulates dozens of dead rows: the desk listing had
 * 56, all cancelled, on 2026-09-17.
 *
 * That matters for any test whose handle is not unique per run. The parking
 * listing has no Title column, so its rows are found by SPACE NAME — and the
 * second time that test runs, the space name matches both the live booking and
 * the cancelled one from last time. `rowContaining` refuses to guess between
 * them (correctly), so the test fails on an ambiguity that is really just
 * history.
 *
 * Both spellings are matched deliberately; which one appears depends on the
 * screen, and assuming either would work only on some pages.
 */
export const LIVE_ONLY = (row: string[]): boolean =>
    !row.some((cell) => /cancell?ed/i.test(cell));

/**
 * The one row containing `needle` in any cell.
 *
 * Returns null when absent, so a spec can assert either presence or absence.
 * Throws when it matches more than once, because that means the needle was not
 * unique and any assertion on "the row" would be picking arbitrarily — use
 * `uniqueTitle()` for anything a test needs to find again.
 */
export function rowContaining(
    snapshot: TableSnapshot,
    needle: string,
    where: (row: string[]) => boolean = () => true,
): string[] | null {
    const hits = snapshot.rows.filter(
        (row) => row.some((cell) => cell.includes(needle)) && where(row),
    );
    if (hits.length > 1) {
        throw new Error(
            `"${needle}" matched ${hits.length} rows, so "the row" is ambiguous. ` +
                `Concierge listings are full of leftover bookings from earlier runs — ` +
                `use a unique title per test.`,
        );
    }
    return hits[0] ?? null;
}

/**
 * Poll the listing until `needle` appears, and return its row.
 *
 * These pages load their data after the shell renders, so a single read races
 * the request. Fails with the row count and a sample so the failure says
 * whether the listing was empty or simply did not contain the booking.
 */
export async function waitForRow(
    page: Page,
    needle: string,
    options: {
        host?: string;
        timeout?: number;
        /** Narrow the match further — see `LIVE_ONLY`. */
        where?: (row: string[]) => boolean;
    } = {},
): Promise<string[]> {
    const host = options.host ?? 'simple-table';
    const where = options.where ?? (() => true);
    let last: TableSnapshot | null = null;
    await expect
        .poll(
            async () => {
                last = await readTable(page, host);
                return rowContaining(last, needle, where) !== null;
            },
            {
                message:
                    `"${needle}" never appeared in the ${host} listing. ` +
                    `If the listing has rows but not this one, the usual cause is the ` +
                    `booking's zones: concierge filters by the BUILDING zone, so a ` +
                    `booking created with only a level zone is stored but never shown ` +
                    `(see concierge.api.ts). The other cause is the date — these pages ` +
                    `show ONE day and default to today.`,
                timeout: options.timeout ?? 45_000,
            },
        )
        .toBe(true);
    return rowContaining(
        last as unknown as TableSnapshot,
        needle,
        where,
    ) as string[];
}

/**
 * Open the dropdown in `field`'s cell on the row holding `needle`, and choose
 * `option`.
 *
 * Every concierge listing puts its per-row actions behind a `mat-menu` in one
 * of the columns, so this is shared rather than written per area:
 *
 *   desks     status     -> Approve Desk / Reject Desk
 *   desks     checked_in -> Check-in / Check-out
 *   visitors  status     -> Approve Visitor / Decline Visitor
 *   visitors  actions    -> …/ Set Pass Number / Check-in Guest
 *
 * ## The menu items are matched by their English label
 *
 * There is no test id on any of them, so the label is the only handle. That is
 * a deliberate exception to the suite's "never depend on a translated string"
 * rule, and a narrow one: the label is used to DRIVE the app, never to assert
 * an outcome. Every assertion goes to the backend.
 *
 * ## Scoped to the open menu panel, and that matters
 *
 * A bare `getByText('Check-in')` also matches the control's own TOOLTIP —
 * `<div role="tooltip">Check-in or check-out desk</div>` — which is hidden, so
 * the click waits forever on something that will never become visible.
 * Measured: 18 polls, all resolving to the tooltip.
 */
export async function chooseRowMenuItem(
    page: Page,
    needle: string,
    field: string,
    option: string,
    host = 'simple-table',
): Promise<void> {
    const snapshot = await readTable(page, host);
    const width = snapshot.column_ids.length;
    const row = snapshot.rows.findIndex((r) => r.some((c) => c.includes(needle)));
    if (row < 0) {
        throw new Error(
            `"${needle}" is not in the ${host} listing, so "${option}" cannot be ` +
                `chosen. The listing had ${snapshot.rows.length} row(s).`,
        );
    }
    const cell = page
        .locator(`${host} [role=table] > *:not([header])`)
        .nth(row * width + columnIndex(snapshot, field));
    await cell.locator('button, [matripple]').first().click();

    const item = page
        .locator('.mat-mdc-menu-panel, [role="menu"]')
        .getByText(option, { exact: false })
        .first();
    await expect(
        item,
        `the "${option}" item never appeared in the ${field} menu`,
    ).toBeVisible({ timeout: 15_000 });
    await item.click();
}

/**
 * Confirm a "are you sure?" dialog, if one is open.
 *
 * Concierge is inconsistent about these, which is worth knowing before writing
 * a test that acts on a row. Measured 2026-09-17:
 *
 *   desks     Approve Desk / Reject Desk      -> acts immediately, NO dialog
 *   desks     Check-in / Check-out            -> acts immediately, NO dialog
 *   visitors  Approve Visitor / Decline       -> opens "Approve attendance of
 *                                                <email> to their meeting?"
 *                                                with Cancel / Accept
 *
 * So a visitor test that only clicks the menu item fires no request at all and
 * fails on an assertion about the backend, which points at the wrong thing
 * entirely. `required: true` makes the expectation explicit where a dialog is
 * known to appear.
 */
export async function confirmDialog(
    page: Page,
    options: { accept?: string; required?: boolean } = {},
): Promise<void> {
    const accept = options.accept ?? 'Accept';
    const dialog = page.locator('mat-dialog-container, [role="dialog"]').first();
    if (options.required) {
        await expect(
            dialog,
            `expected a confirmation dialog with "${accept}", and none opened`,
        ).toBeVisible({ timeout: 15_000 });
    } else if (!(await dialog.isVisible().catch(() => false))) {
        return;
    }
    await dialog.getByRole('button', { name: accept, exact: false }).first().click();
    await expect(
        dialog,
        'the confirmation dialog never closed after accepting',
    ).toBeHidden({ timeout: 15_000 });
}
