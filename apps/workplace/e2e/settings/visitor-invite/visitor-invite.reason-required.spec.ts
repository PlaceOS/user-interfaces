// Setting: visitors.reason_required (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Runtime: the routed visitor-flow-new page (apps/workplace/src/app/book/visitor-flow-new/).
// - VisitorFlowDetailsComponent.ngOnInit starts the reason (booking title)
//   empty when the setting is true, 'Visit' when false, and marks the label.
// - generateBookingForm (libs/bookings/src/lib/booking-form.model.ts) makes
//   the visitor title required, and blank-after-trim invalid, only when true.
// - VisitorFlowNewComponent.confirmBooking stops with
//   BOOKINGS.VISITOR_REASON_REQUIRED before any save when the title is invalid.
// Only the true scenario presses Confirm, with a blank reason; the parent
// read-only guard aborts and fails any write, so a send cannot go unnoticed.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { expect } from '../../../../../e2e/support/fixtures';
import { type DebugWindow, test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/**
 * Whether the booking form's title (the visit reason) is valid. Read from the
 * details component's public `form` (the BookingFormService FieldTree), not
 * inferred from styling. Fails closed if the form is unavailable.
 */
function reasonValid(form: InviteVisitorForm) {
    return form.root.locator('visitor-flow-details').evaluate((element) => {
        const details = (window as DebugWindow).ng?.getComponent(element) as {
            form?: { title?: () => { valid(): boolean } };
        } | undefined;
        if (!details?.form?.title) throw new Error('the visitor booking form is unavailable');
        return details.form.title().valid();
    });
}

/**
 * BOOKINGS.VISITOR_REASON_REQUIRED as LocaleService.get shows it with no
 * plural: the en-AU text (the harness locale and the app default).
 */
function reasonRequiredMessage() {
    const locale = JSON.parse(readFileSync(
        join(__dirname, '../../../../../shared/assets/locale/en-AU.json'), 'utf8',
    )) as { BOOKINGS?: Record<string, unknown> };
    const text = locale.BOOKINGS?.VISITOR_REASON_REQUIRED;
    if (typeof text !== 'string' || !text.trim()) {
        throw new Error('BOOKINGS.VISITOR_REASON_REQUIRED has no en-AU text');
    }
    return text;
}

for (const enabled of [false, true]) {
    test('visitors.reason_required ' + enabled + ' changes the unsent reason validation',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, { 'app.visitors.reason_required': enabled });
            await expect(form.reason).toHaveValue(enabled ? '' : 'Visit');
            await expect(form.root.locator('label[for="reason"] span')).toHaveCount(enabled ? 1 : 0);
            // A blank reason (whitespace only) is invalid only when the setting is true.
            await form.reason.fill(' ');
            await form.reason.press('Tab');
            await expect.poll(() => reasonValid(form), { message: 'reason validity after a blank reason' })
                .toBe(!enabled);
            if (enabled) {
                // Confirm must stop before any save and say why. No write can
                // happen unnoticed: the parent guard aborts it and fails the test.
                await form.sendButton.click();
                await expect(staffPage.locator('mat-snack-bar-container'))
                    .toContainText(reasonRequiredMessage());
                await expect(staffPage).toHaveURL(/#\/book\/visitor\/form/);
                await expect(form.reason).toHaveValue(' ');
                expect(await reasonValid(form)).toBe(false);
            }
            await untouchedVisitor(form);
        });
}
