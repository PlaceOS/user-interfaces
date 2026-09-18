/**
 * The concierge desk-bookings screen — `/#/book/desks/events`.
 *
 * ## What this page can and cannot do, measured 2026-09-17
 *
 * The row actions are **not** what the test plan assumed. The actions column
 * holds one control, "View Booking History". There is **no cancel** on this
 * screen. What a concierge can actually do to somebody else's desk booking is:
 *
 *   status column      -> Approve Desk / Reject Desk   (POST /bookings/<id>/approve | /reject)
 *   checked-in column  -> Check-in / Check-out         (POST /bookings/<id>/check_in?state=…)
 *
 * That is why the specs cover approve, reject and check-in rather than the
 * "cancel somebody's booking" row in the plan (CON-DESK-03) — the app does not
 * offer it here, so a test for it would have had to invent a control.
 *
 * ## It shows ONE day, and that day is today
 *
 * The listing queries a single local day, defaulting to today. `?date=<ms>` is
 * NOT honoured on this route: the component actually rendered
 * (`DesksComponent`) reads only `zone_ids` from the query and returns early
 * without it. The `date` parameter is handled by `desks-topbar.component.ts`,
 * which is referenced only by unit tests and is not on this route. So the specs
 * book for TODAY, and the date is stepped with the arrow controls when a test
 * needs another day.
 *
 * ## It filters by the BUILDING zone
 *
 * See `concierge.api.ts` — a booking without the full org/building/level chain
 * is stored and never shown here.
 */
import { Page, expect } from '@playwright/test';
import {
    chooseRowMenuItem,
    columnIndex,
    readTable,
    waitForAnyRow,
    waitForRow,
} from './simple-table.page';

export const DESK_BOOKINGS_ROUTE = '/#/book/desks/events';
export const DESK_MANAGE_ROUTE = '/#/book/desks/manage';

/** Open the desk bookings listing and wait for its grid. */
export async function openDeskBookings(page: Page): Promise<void> {
    await page.goto(DESK_BOOKINGS_ROUTE);
    await expect(
        page.locator('desk-bookings'),
        'the desk bookings page never rendered',
    ).toBeVisible({ timeout: 45_000 });
}

/** Open desk management and wait for its grid. */
export async function openDeskManagement(page: Page): Promise<void> {
    await page.goto(DESK_MANAGE_ROUTE);
    await expect(
        page.locator('desks-manage'),
        'the desk management page never rendered',
    ).toBeVisible({ timeout: 45_000 });
}

/**
 * Open the dropdown in `field`'s cell on the row holding `needle`, and choose
 * `option`.
 *
 * Both dropdowns on this page are plain `mat-menu`s whose items are identified
 * by their English label — there are no test ids on them. That is a deliberate
 * exception to the suite's "never assert on a translated string" rule: here the
 * label is the only handle the control offers, and it is used to DRIVE the app,
 * never to assert the outcome. Every assertion goes to the backend.
 */
export async function chooseRowAction(
    page: Page,
    needle: string,
    field: 'status' | 'checked_in',
    option: string,
): Promise<void> {
    await chooseRowMenuItem(page, needle, field, option);
}

export { readTable, waitForRow, waitForAnyRow, columnIndex };
