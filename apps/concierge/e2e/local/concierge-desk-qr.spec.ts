import { seededDesks } from '../../../../e2e/support/concierge/concierge.api';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import { waitForAnyRow } from '../../../../e2e/support/concierge/simple-table.page';

test('CON-DESK-06: the desk QR modal renders a loaded code for a seeded desk', async ({
    adminPage,
    adminApi,
}) => {
    const [desk] = await seededDesks(adminApi);
    await adminPage.goto('/#/book/desks/manage');
    await waitForAnyRow(adminPage);
    await adminPage
        .getByRole('button', { name: 'qr_code', exact: true })
        .first()
        .click();
    const modal = adminPage.locator('desk-qr-code-modal');
    await expect(modal).toBeVisible();
    // The seed repeats each desk on two levels. Both entries must load a code.
    const codes = modal
        .locator('.desk-qr-item')
        .filter({ hasText: desk.name })
        .locator('img');
    await expect(codes.first()).toBeVisible();
    for (const code of await codes.all()) {
        await expect(code).toBeVisible();
        await expect(code).toHaveAttribute('src', /^data:image\//);
        await expect
            .poll(() =>
                code.evaluate(
                    (img: HTMLImageElement) =>
                        img.complete && img.naturalWidth > 0,
                ),
            )
            .toBe(true);
    }
});
