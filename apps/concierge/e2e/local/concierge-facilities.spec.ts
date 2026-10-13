/** CON-FAC-01, partial: FacilitiesStatusComponent currently renders static
 * people/mood values. This verifies that UI, without calling it seeded data. */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';

test('CON-FAC-01 (partial): the facilities page displays its current status panels', async ({
    adminPage,
}) => {
    await adminPage.goto('/#/facilities');
    const status = adminPage.locator('facilities-status');
    await expect(status).toBeVisible();
    await expect(
        status.getByRole('heading', { name: 'People Count', exact: true }),
    ).toBeVisible();
    await expect(
        status.getByRole('heading', { name: 'Mood', exact: true }),
    ).toBeVisible();
    await expect(status.locator('[name="mood"]')).toContainText(
        '4/5 Satisfied',
    );
    await expect(
        adminPage.locator('facilities-map interactive-map'),
    ).toBeVisible();
});
