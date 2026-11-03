
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

for (const enabled of [false, true]) {
    test('bookings.can_book_for_others ' + enabled + ' supplies an unset visitor delegation preference',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.visitors.can_book_for_anyone': null, 'app.visitors.can_book_for_others': null,
                'app.bookings.can_book_for_others': enabled,
            });
            await expect(form.root.locator('host-select-field')).toHaveCount(enabled ? 1 : 0);
            await expect(form.root.locator('a-user-search-field')).toHaveCount(0);
            if (enabled) await expect(form.root.locator('host-select-field mat-select')).toBeVisible();
            await expect(form.visitorName).toBeVisible();
            await untouchedVisitor(form);
        });
}
