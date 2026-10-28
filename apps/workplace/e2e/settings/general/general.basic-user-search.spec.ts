
import { expect } from '../../../../../e2e/support/fixtures';
import { getOnly, prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });


// LandingStateService.search_fn selects engine users or staff people; no contact is selected or saved.
const QUERY = 'E2ESettingsColleague';

// Only basic=true: the false/directory path is covered by landing.colleagues-require-auth.spec.ts.
for (const basic of [true]) {
    test('general settings: basic_user_search ' + basic + ' selects the landing colleague search source',
        async ({ staffPage, audit }) => {
            const fixture = await prepare(staffPage, audit, {
                'app.basic_user_search': basic, 'app.colleagues_require_auth': false,
                'app.hide_colleagues': false, 'app.show_quick_book': false, 'app.show_quick_links': false,
            });
            await getOnly(staffPage, audit, 'PlaceOS user list', (url) => url.pathname === '/api/engine/v2/users' &&
                url.searchParams.get('q') === QUERY,
            () => [{ id: 'e2e-settings-user', name: 'E2E Next20 User List', email: 'e2e-settings-user@example.invalid' }]);
            // Provider-backed directory, answered in the browser so it is never contacted.
            await getOnly(staffPage, audit, 'staff directory', (url) => url.pathname === '/api/staff/v1/people' &&
                url.searchParams.get('q') === QUERY,
            () => [{ id: 'e2e-settings-dir', name: 'E2E Next20 Directory', email: 'e2e-settings-dir@example.invalid' }]);
            await staffPage.goto('/#/landing');
            await fixture.ready();
            await expect(staffPage.locator('landing-new')).toHaveCount(1);
            await expect(staffPage.locator('landing-new > div')).toBeVisible();
            const colleagues = staffPage.locator('landing-colleagues-new');
            const open = colleagues.getByRole('button', { name: 'person_add Add Colleagues', exact: true });
            await expect(open).toBeVisible();
            await open.click();
            const modal = staffPage.locator('add-colleagues-modal');
            await expect(modal).toBeVisible();
            const input = modal.locator('input[matInput]');
            await expect(input).toBeEnabled();
            // ngModel -> setOptions -> 500ms debounce. Fill once so no partial
            // query can reach the provider-backed directory between keystrokes.
            await input.fill(QUERY);
            const results = modal.locator('main button');
            const shown = basic ? 'E2E Next20 User List' : 'E2E Next20 Directory';
            const hidden = basic ? 'E2E Next20 Directory' : 'E2E Next20 User List';
            await expect(results.filter({ hasText: shown })).toHaveCount(1);
            await expect(results.filter({ hasText: shown })).toBeVisible();
            await expect(results.filter({ hasText: hidden })).toHaveCount(0);
            expect(audit.fixtures[basic ? 'PlaceOS user list' : 'staff directory'] ?? 0).toBeGreaterThan(0);
            expect(audit.fixtures[basic ? 'staff directory' : 'PlaceOS user list'] ?? 0).toBe(0);
            // Selection stays empty; the save action must remain disabled.
            await expect(modal.locator('footer button').last()).toBeDisabled();
            // Never add a colleague: that writes the user's contacts metadata.
            await modal.getByRole('button', { name: 'Cancel', exact: true }).click();
            await expect(modal).toHaveCount(0);
            await expect(staffPage).toHaveURL(/#\/landing$/);
        });
}
