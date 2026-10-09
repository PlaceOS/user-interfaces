import { zonesWithTag } from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    metadata,
    removeMetadataEntry,
    runName,
} from '../../../../e2e/support/concierge/management.api';

test('CON-DEAL-01: creating a deal saves building metadata and displays it after reload', async ({
    adminPage,
    adminApi,
}) => {
    const [building] = await zonesWithTag(adminApi, 'building');
    const name = runName('CON-DEAL-01');
    let id: string | undefined;
    await adminPage.goto('/#/deals-n-offers/manage');
    const form = adminPage.locator('deals-manage');
    await form
        .getByPlaceholder('Name of the deal or offer', { exact: true })
        .fill(name);
    await form
        .getByPlaceholder('Type of the deal or offer', { exact: true })
        .fill('E2E offer');
    await form
        .getByPlaceholder('Description of the deal or offer', { exact: true })
        .fill('Local test offer');
    try {
        await form.getByRole('button', { name: 'Save', exact: true }).click();
        await expect
            .poll(async () => {
                const field = await metadata(
                    adminApi,
                    building.id,
                    'deals-n-offers',
                );
                const deal = field?.details?.find(
                    (item: { name: string }) => item.name === name,
                );
                id = deal?.id;
                return deal;
            })
            .toMatchObject({
                name,
                type: 'E2E offer',
                description: 'Local test offer',
            });
        await adminPage.goto('/#/deals-n-offers');
        await expect(
            adminPage.locator('deals-list').getByText(name, { exact: true }),
        ).toBeVisible();
        await adminPage.reload();
        await expect(
            adminPage.locator('deals-list').getByText(name, { exact: true }),
        ).toBeVisible();
    } finally {
        if (id)
            await removeMetadataEntry(
                adminApi,
                building.id,
                'deals-n-offers',
                id,
            );
    }
});
