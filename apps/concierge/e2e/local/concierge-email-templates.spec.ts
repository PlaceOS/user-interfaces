import { zonesWithTag } from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    metadata,
    removeMetadataEntry,
    runName,
    saveMetadata,
} from '../../../../e2e/support/concierge/management.api';
import {
    chooseRowMenuItem,
    waitForRow,
} from '../../../../e2e/support/concierge/simple-table.page';

test('CON-MAIL-01: editing a template subject persists in metadata and after reopening', async ({
    adminPage,
    adminApi,
}) => {
    const [building] = await zonesWithTag(adminApi, 'building');
    const id = runName('CON-MAIL-01');
    const subject = `${id} edited`;
    const field = await metadata(adminApi, building.id, 'email_templates');
    await saveMetadata(adminApi, building.id, 'email_templates', [
        ...(field?.details || []),
        {
            id,
            subject: id,
            zone_id: building.id,
            category: 'internal',
            trigger: '',
            html: '<p>E2E template body</p>',
            text: 'E2E template body',
        },
    ]);
    try {
        await adminPage.goto('/#/email-templates');
        await waitForRow(adminPage, id);
        await chooseRowMenuItem(adminPage, id, 'actions', 'Edit');
        const form = adminPage.locator('email-template-manage');
        await expect(form.getByPlaceholder('Template Subject')).toHaveValue(id);
        await form.getByPlaceholder('Template Subject').fill(subject);
        await form.getByRole('button', { name: /Save/i }).click();
        await expect
            .poll(async () => {
                const updated = await metadata(
                    adminApi,
                    building.id,
                    'email_templates',
                );
                return updated.details.find(
                    (item: { id: string }) => item.id === id,
                )?.subject;
            })
            .toBe(subject);
        await adminPage.goto('/#/email-templates');
        await waitForRow(adminPage, subject);
        await chooseRowMenuItem(adminPage, subject, 'actions', 'Edit');
        await expect(form.getByPlaceholder('Template Subject')).toHaveValue(
            subject,
        );
    } finally {
        await removeMetadataEntry(adminApi, building.id, 'email_templates', id);
    }
});
