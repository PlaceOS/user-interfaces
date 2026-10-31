
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, test, timezoneBuildings, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

for (const enabled of [false, true]) {
    test('bookings.use_building_timezone ' + enabled + ' gates the visitor secondary timezone label',
        async ({ staffPage, audit }) => {
            await timezoneBuildings(staffPage, audit);
            const form = await visitor(staffPage, audit, {
                'app.bookings.use_building_timezone': enabled, 'app.visitors.use_building_timezone': false,
            });
            expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
            const field = form.root.locator('a-time-field[name="time"]');
            await expect(field.locator('button[time-field]')).toBeVisible();
            await expect.poll(() => field.evaluate((element) => {
                const c = (window as Debug).ng?.getComponent(element) as { timezone(): string } | undefined;
                return c?.timezone();
            })).toBe(enabled ? 'Pacific/Honolulu' : '');
            const secondary = field.locator('button[time-field] div.truncate.text-xs');
            await expect(secondary).toHaveCount(enabled ? 1 : 0);
            if (enabled) await expect(secondary).toBeVisible();
            await untouchedVisitor(form);
        });
}
