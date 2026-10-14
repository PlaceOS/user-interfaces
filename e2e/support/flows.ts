/**
 * Multi-step UI flows shared by specs.
 *
 * `bookDeskViaUI` books through `desk-flow-new`, the flow that `/book/desk`
 * routes to. The locators and what was learned about them are in
 * `desk/desk-flow.page.ts`. Two notes apply to any flow added here:
 *
 *  - Do NOT match buttons by accessible name. Buttons render a Material icon
 *    as a text ligature inside the button, so "Confirm" has the accessible
 *    name "task_alt Confirm keyboard_arrow_right". A `getByRole` with an
 *    anchored name never matches. The label is translated too.
 *  - Form control names are generated with a form index (`ng.form0.title`), so
 *    match the suffix (`input[name$=".title"]`) rather than the whole thing.
 */
import { Page, expect } from '@playwright/test';
import { DeskFlow } from './desk/desk-flow.page';

export interface CreatedBooking {
    id: number;
    asset_id: string;
    approved: boolean;
    title: string;
}

/**
 * Book a desk through the full UI and return the booking the API created.
 *
 * The booking id comes from the real `POST /api/staff/v1/bookings` response, not
 * from anything the UI renders — so the assertion is about what the backend
 * actually stored.
 */
export async function bookDeskViaUI(
    page: Page,
    deskName: string,
    title: string,
): Promise<CreatedBooking> {
    const form = new DeskFlow(page);
    await form.open();

    // Set the two controls that gate submission BEFORE the desk is chosen, so
    // the list of free desks is for the window we intend to book.
    //
    //  - "Require locker" defaults to unchecked. It is cleared here as a
    //    safeguard, because no lockers are seeded.
    //  - "All Day" replaces the default slot, which is the next 5-minute boundary.
    //    That default makes the booking implicitly time-sensitive: a slow run
    //    crosses the boundary, the start time falls into the past, and the
    //    flow refuses the form. Same reasoning as pinning fixed times rather
    //    than relative ones anywhere else in a suite.
    //
    // Both setters ENSURE the state; they never blindly toggle.
    await form.setChecked(form.requireLocker, false);
    await form.setAllDay(true);
    await form.selectDesk(deskName);
    await form.title.fill(title);

    // Read the form back before the click. Confirm saves at once, so this is
    // the last point at which a lost edit is visible.
    await expect(form.title).toHaveValue(title);
    await expect(form.allDayInput).toBeChecked();
    await expect(form.chosenDeskNames, 'the desk to book is the one selected').toHaveText([
        deskName,
    ]);

    const [response] = await Promise.all([
        page
            .waitForResponse(
                (r) =>
                    r.url().includes('/api/staff/v1/bookings') &&
                    r.request().method() === 'POST',
                { timeout: 30_000 },
            )
            .catch(async () => {
                // The flow refuses a form that is not valid with a notice and
                // sends nothing. Say so, rather than reporting a bare timeout.
                const notices = await page.locator('mat-snack-bar-container').allInnerTexts();
                throw new Error(
                    'Confirm sent no POST /bookings — the flow refused the form ' +
                        '(check the desk selection and the date/time fields). ' +
                        `Notices on the page: ${JSON.stringify(notices)}`,
                );
            }),
        form.confirmAndSend(),
    ]);

    // Read the body ONCE, before asserting. Building the failure message with an
    // inline `await response.text()` evaluates on every run, including the happy
    // path, and Playwright cannot always re-read a body it has already handed
    // over — which surfaces as an unrelated "Network.getResponseBody: No data
    // found" flake instead of the assertion you wrote.
    const status = response.status();
    const body = await response.text().catch(() => '<body unavailable>');
    expect(response.ok(), `POST /bookings should succeed, got ${status}: ${body}`).toBeTruthy();
    const created = JSON.parse(body);
    return {
        id: created.id,
        asset_id: created.asset_id,
        approved: created.approved,
        title: created.title,
    };
}
