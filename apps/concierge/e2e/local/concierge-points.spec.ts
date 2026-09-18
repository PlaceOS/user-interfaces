/** CON-PTS-01, partial: the current app has reward settings stored in
 * localStorage, with no customer balance listing or backend adjustment API. */
import { expect, test } from '../../../../e2e/support/concierge/fixtures';

test('CON-PTS-01 (partial): adjusting a desk reward persists across reload', async ({
    adminPage,
}) => {
    await adminPage.addInitScript(() => {
        if (!sessionStorage.getItem('e2e-points-seeded')) {
            localStorage.setItem(
                'PLACEOS.point_details',
                JSON.stringify({ desk_checkin: 2 }),
            );
            sessionStorage.setItem('e2e-points-seeded', 'true');
        }
    });
    await adminPage.goto('/#/points-management/overview');
    const overview = adminPage.locator('points-overview');
    const counter = overview.locator('a-counter').nth(1).locator('input');
    await expect(counter).toHaveValue('2');
    await counter.fill('7');
    await counter.blur();
    await expect
        .poll(() =>
            adminPage.evaluate(
                () =>
                    JSON.parse(
                        localStorage.getItem('PLACEOS.point_details') || '{}',
                    ).desk_checkin,
            ),
        )
        .toBe(7);
    await adminPage.reload();
    await expect(counter).toHaveValue('7');
});
