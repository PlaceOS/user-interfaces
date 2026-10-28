
import { expect } from '../../../../../e2e/support/fixtures';
import { durationOptions, futureDuration, test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for (const step of [30, 45]) {
    test('booking settings: bookings.duration_step ' + step + ' controls visitor fallback duration increments',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.visitors.duration_step': null, 'app.bookings.duration_step': step,
                'app.visitors.min_duration': 30, 'app.visitors.max_duration': 180,
                'app.visitors.custom_duration_options': null, 'app.bookings.custom_duration_options': [],
            });
            await futureDuration(staffPage, form);
            let options = await durationOptions(staffPage, form);
            // Put the current duration on-grid before rebuilding the menu.
            await staffPage.locator('.cdk-overlay-container button[data-duration="30"]').click();
            await form.root.locator('a-time-field[name="time"] button[time-field]').click();
            await staffPage.locator('.cdk-overlay-container button[data-time="11:00"]').click();
            options = await durationOptions(staffPage, form);
            const values = await options.evaluateAll((rows) => rows.map((row) => Number(row.getAttribute('data-duration'))));
            expect(values).toEqual(step === 45 ? [30, 75, 120, 165] : [30, 60, 90, 120, 150, 180]);
            await staffPage.keyboard.press('Escape');
            await expect(form.root.locator('a-duration-field button[duration-field]')).toBeVisible();
            await untouchedVisitor(form);
        });
}
