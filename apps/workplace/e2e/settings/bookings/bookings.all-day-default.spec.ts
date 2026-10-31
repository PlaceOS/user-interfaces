
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

for (const enabled of [false, true]) {
    test('bookings.all_day_default ' + enabled + ' initializes the visitor timed or all-day form',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.visitor.all_day_default': null, 'app.visitors.all_day_default': null,
                'app.bookings.all_day_default': enabled, 'app.visitors.allow_all_day': true,
            });
            if (enabled) await expect(form.allDay).toBeChecked();
            else await expect(form.allDay).not.toBeChecked();
            await expect(form.root.locator('a-time-field[name="time"]')).toHaveCount(enabled ? 0 : 1);
            await expect(form.root.locator('a-duration-field')).toHaveCount(enabled ? 0 : 1);
            await expect(form.visitorName).toBeVisible();
            await untouchedVisitor(form);
        });
}
