
import { expect } from '../../../../../e2e/support/fixtures';
import { durationOptions, futureDuration, test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for (const configured of [false, true]) {
    test('booking settings: bookings.custom_duration_options ' + configured + ' supplies visitor duration exceptions',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.visitors.custom_duration_options': null,
                'app.bookings.custom_duration_options': configured ? [45, 150] : [],
                'app.visitors.min_duration': 90, 'app.visitors.max_duration': 120,
                'app.visitors.duration_step': 30,
            });
            await futureDuration(staffPage, form);
            await durationOptions(staffPage, form);
            await staffPage.locator('.cdk-overlay-container button[data-duration="90"]').click();
            // Rebuild around an in-range current duration, so no stale current
            // value can be mistaken for a configured custom exception.
            await form.root.locator('a-time-field[name="time"] button[time-field]').click();
            await staffPage.locator('.cdk-overlay-container button[data-time="11:00"]').click();
            const options = await durationOptions(staffPage, form);
            expect(await options.evaluateAll((rows) => rows.map((row) => Number(row.getAttribute('data-duration')))))
                .toEqual(configured ? [45, 90, 120, 150] : [90, 120]);
            if (configured) {
                await staffPage.locator('.cdk-overlay-container button[data-duration="45"]').click();
                await expect(form.root.locator('a-duration-field button[duration-field]')).toContainText('45 minutes');
                await durationOptions(staffPage, form);
                await staffPage.locator('.cdk-overlay-container button[data-duration="150"]').click();
                await expect(form.root.locator('a-duration-field button[duration-field]')).toContainText('2 hours 30 minutes');
            } else await staffPage.keyboard.press('Escape');
            await untouchedVisitor(form);
        });
}
