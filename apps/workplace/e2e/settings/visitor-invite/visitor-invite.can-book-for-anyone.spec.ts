
import { expect } from '../../../../../e2e/support/fixtures';
import { test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

for (const enabled of [false, true]) {
    test('visitors.can_book_for_anyone ' + enabled + ' selects the visitor host-search branch',
        async ({ staffPage, audit }) => {
            const form = await visitor(staffPage, audit, {
                'app.visitors.can_book_for_anyone': enabled,
                // Opposite generic value proves the specific value takes precedence.
                'app.bookings.can_book_for_anyone': !enabled,
                'app.visitors.can_book_for_others': true,
            });
            await expect(form.root.locator('a-user-search-field')).toHaveCount(enabled ? 1 : 0);
            await expect(form.root.locator('host-select-field')).toHaveCount(enabled ? 0 : 1);
            if (enabled) await expect(form.root.locator('a-user-search-field input')).toBeVisible();
            else await expect(form.root.locator('host-select-field mat-select')).toBeVisible();
            await untouchedVisitor(form); // No host is searched for or changed.
        });
}
