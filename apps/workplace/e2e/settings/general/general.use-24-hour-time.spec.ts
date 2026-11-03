import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

// VisitorFlowDetailsComponent binds use_24_hour_time to the visible TimeField.
for (const enabled of [false, true]) {
    test(
        'general settings: use_24_hour_time ' +
            enabled +
            ' formats the 13:00 option and selected value',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.use_24_hour_time': enabled,
            });
            const tomorrow = new Date();
            tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
            tomorrow.setUTCHours(12, 0, 0, 0);
            await form.setDate(tomorrow.valueOf());
            const trigger = form.root.locator(
                'a-time-field[name="time"] button[time-field]',
            );
            await trigger.click();
            const option = staffPage.locator(
                '.cdk-overlay-container button[data-time="13:00"]',
            );
            await expect(option).toBeVisible();
            const expected = enabled ? '13 : 00' : '1 : 00 PM';
            // The active option also shows a "done" icon (time-field.component.ts), so match the label text only.
            await expect(option).toContainText(expected);
            await option.click();
            await expect(option).toHaveCount(0);
            await expect(trigger).toContainText(expected);
            await untouchedVisitor(form);
        },
    );
}
