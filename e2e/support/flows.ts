/**
 * Multi-step UI flows shared by specs.
 *
 * Selector notes, all confirmed against the running app rather than guessed:
 *
 *  - The app DOES carry stable `name` attributes on the load-bearing controls
 *    (`add-desk`, `select-desk`, `toggle-desk`, `open-desk-confirm`,
 *    `confirm-desk`). Prefer those over text or role.
 *  - Do NOT match these by accessible name. Buttons render a Material icon as a
 *    text ligature inside the button, so "Select Desk" has the accessible name
 *    "done Select Desk" and "Add Desk" is "search Add Desk". A `getByRole` with
 *    an anchored name never matches.
 *  - Form control names are generated with a form index (`ng.form0.title`), so
 *    match the suffix (`input[name$=".title"]`) rather than the whole thing.
 *  - The final confirm dialog is NOT a `mat-dialog-container`; it lives directly
 *    in `.cdk-overlay-container`. Scope to the overlay, not to the dialog.
 */
import { Page, expect } from '@playwright/test';

/**
 * Force an Angular Material checkbox to unchecked, reading the real state off the
 * hidden native input rather than assuming a default. The visible `mat-checkbox`
 * is the click target; the `input` is where `checked` actually lives.
 */
async function setCheckbox(page: Page, label: string, want: boolean): Promise<void> {
    const box = page.locator(`mat-checkbox:has-text("${label}")`);
    if (!(await box.count())) return;
    const input = box.first().locator('input[type="checkbox"]');
    const is = await input.isChecked().catch(() => false);
    if (is !== want) {
        await box.first().click();
        const check = expect(input, `"${label}" should be ${want ? 'checked' : 'unchecked'}`);
        await (want ? check.toBeChecked() : check.not.toBeChecked());
    }
}

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
    await page.goto('/#/book/desk/form');

    const title_input = page.locator('input[name$=".title"]').first();
    await expect(title_input).toBeVisible({ timeout: 30_000 });

    // "Require locker" defaults to CHECKED, and no lockers are seeded, so leaving
    // it on makes the form unsatisfiable — the confirm dialog simply never opens,
    // with no error shown.
    //
    // ENSURE the state; never blindly toggle. A toggle is only correct if you
    // already know the starting state, and here it is not guaranteed: toggling a
    // checkbox that happened to start unchecked switches the requirement back ON
    // and the flow dead-ends in a way that looks like a selector problem.
    await setCheckbox(page, 'Require locker', false);

    // Book the whole day rather than the form's default slot.
    //
    // That default is the next 5-minute boundary, which makes the booking
    // implicitly time-sensitive: a run slow enough to cross the boundary ends up
    // with a start time in the past, the form silently becomes invalid, and the
    // confirm dialog never opens. It reproduced at roughly 1-in-6 and only on the
    // slow runs. An all-day booking has no rolling window, so the flake cannot
    // occur at all — the same reasoning as pinning fixed times instead of relative
    // ones anywhere else in a suite.
    await setCheckbox(page, 'All Day', true);

    await page.locator('button[name="add-desk"]').click();
    const desk = page
        .locator('button[name="select-desk"]')
        .filter({ hasText: deskName })
        .first();
    await expect(
        desk,
        `desk "${deskName}" should be offered — is it seeded and bookable?`,
    ).toBeVisible({ timeout: 20_000 });
    await desk.click();

    // Enabled only once a desk is selected.
    const confirm_selection = page.locator('button[name="toggle-desk"]');
    await expect(confirm_selection).toBeEnabled({ timeout: 10_000 });
    await confirm_selection.click();

    // Type the title LAST, deliberately. Attaching a desk rebuilds the form and
    // resets the title to its default ("Booking"), so anything typed earlier is
    // silently discarded — the booking still succeeds, just under the wrong name,
    // which reads as a passing test unless you assert the value. Setting it after
    // desk selection sidesteps the rebuild entirely.
    await title_input.fill(title);
    await expect(title_input, 'title survived to submission').toHaveValue(title);

    await page.locator('button[name="open-desk-confirm"]').click();

    // The final confirm lives directly in the cdk overlay, not in a
    // mat-dialog-container. If it never appears the form was rejected silently —
    // say so, rather than reporting a bare selector timeout.
    const confirm = page.locator('.cdk-overlay-container button[name="confirm-desk"]');
    await expect(
        confirm,
        'the confirm dialog did not open — the form was silently invalid ' +
            '(check "Require locker", the desk selection, and the date/time fields)',
    ).toBeVisible({ timeout: 20_000 });

    const [response] = await Promise.all([
        page.waitForResponse(
            (r) =>
                r.url().includes('/api/staff/v1/bookings') && r.request().method() === 'POST',
            { timeout: 30_000 },
        ),
        confirm.click(),
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
