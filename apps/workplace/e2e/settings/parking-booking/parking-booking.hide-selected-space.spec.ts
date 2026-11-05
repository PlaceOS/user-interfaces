// Coverage: 1 unique setting, 4 scenarios.
// Setting: parking.hide_selected_space (docs/settings/workplace.md; source:
//   libs/bookings/src/lib/booking-card.component.ts resource_label and
//   location, libs/bookings/src/lib/booking-details-modal.component.ts
//   display_title and resource_details_label).
//
// With the setting on, a parking booking shows "Parking" instead of the space
// name on the Your Bookings card and in its details pop-up (PPT-2858,
// PPT-2863). The schedule's parking list GET returns one synthetic row
// (settings-harness scheduleCard); the card is only opened to show the
// pop-up, which is closed unchanged. Nothing is submitted and no backend
// record is created or changed.
import { expect } from '../../../../../e2e/support/fixtures';
import { SCHEDULE_CARD, scheduleCard, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** RESOURCE.PARKING (shared/assets/locale). */
const PARKING = 'Parking';

test.describe('parking.hide_selected_space', () => {
    for (const hidden of [true, false]) {
        test('parking.hide_selected_space ' + hidden + ' controls the space name on the card',
            async ({ staffPage, audit }) => {
                const card = await scheduleCard(staffPage, audit,
                    { 'app.parking.hide_selected_space': hidden }, { approved: true });
                // resource_label is "Parking" when hidden, otherwise the space name.
                await expect(card.getByText(PARKING, { exact: true })).toHaveCount(hidden ? 1 : 0);
                if (hidden) await expect(card).not.toContainText(SCHEDULE_CARD.space);
                else await expect(card).toContainText(SCHEDULE_CARD.space);
            });
    }
    for (const hidden of [true, false]) {
        test('parking.hide_selected_space ' + hidden + ' controls the space name in the booking details',
            async ({ staffPage, audit }) => {
                const card = await scheduleCard(staffPage, audit,
                    { 'app.parking.hide_selected_space': hidden }, { approved: true });
                await card.click();
                const details = staffPage.locator('booking-details-modal');
                const title = details.locator('h3[title]');
                await expect(title).toBeVisible();
                await expect(title).toHaveText(SCHEDULE_CARD.title);
                if (hidden) {
                    // resource_details_label falls back to "Parking" (no level on the row).
                    await expect(details).not.toContainText(SCHEDULE_CARD.space);
                    await expect(details).toContainText(PARKING);
                } else await expect(details).toContainText(SCHEDULE_CARD.space);
                await staffPage.keyboard.press('Escape');
                await expect(details).toHaveCount(0);
            });
    }
});
