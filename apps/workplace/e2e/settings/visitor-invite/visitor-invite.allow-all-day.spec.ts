
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

for (const enabled of [false, true]) {
    test('visitors.allow_all_day ' + enabled + ' gates the unsaved visitor all-day control',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, { 'app.visitors.allow_all_day': enabled });
            await expect(form.visitorName).toBeVisible();
            await expect(form.allDay).toHaveCount(enabled ? 1 : 0);
            if (enabled) {
                await expect(form.allDay).not.toBeChecked();
                await form.allDay.check();
                await expect(form.root.locator('a-time-field[name="time"]')).toHaveCount(0);
                await form.allDay.uncheck();
            }
            await expect(form.root.locator('a-time-field[name="time"]')).toBeVisible();
            await untouchedVisitor(form);
        });
}
