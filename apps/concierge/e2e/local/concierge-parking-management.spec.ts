import { getBooking } from '../../../../e2e/support/api';
import {
    cleanUpBookings,
    createBookingFor,
    ensureParkingSpaces,
} from '../../../../e2e/support/concierge/concierge.api';
import { useSettings } from '../../../../e2e/support/concierge/concierge.settings';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    ENGINE,
    runName,
} from '../../../../e2e/support/concierge/management.api';
import {
    LIVE_ONLY,
    columnIndex,
    confirmDialog,
    readTable,
    waitForRow,
} from '../../../../e2e/support/concierge/simple-table.page';
import { roleFor } from '../../../../e2e/support/env';

test('CON-PARK-03: cancelling another user’s parking booking persists', async ({
    adminPage,
    adminApi,
}) => {
    const prefix = runName('CON-PARK-03');
    const { spaces } = await ensureParkingSpaces(adminApi, 1, prefix);
    const now = Math.floor(Date.now() / 1000);
    const booking = await createBookingFor(adminApi, {
        type: 'parking',
        asset_id: spaces[0].id,
        asset_name: spaces[0].name,
        title: prefix,
        start: now + 1800,
        end: now + 3600,
        holder: { email: roleFor('staff', 1).email },
    });
    try {
        await useSettings(adminPage, { 'app.parking.allow_deleting': true });
        await adminPage.goto('/#/book/parking/events');
        await waitForRow(adminPage, spaces[0].name, { where: LIVE_ONLY });
        const table = await readTable(adminPage);
        const row = table.rows.findIndex(
            (r) => LIVE_ONLY(r) && r.some((c) => c.includes(spaces[0].name)),
        );
        await adminPage
            .locator('simple-table [role=table] > *:not([header])')
            .nth(row * table.column_ids.length + columnIndex(table, 'actions'))
            .getByRole('button', { name: 'delete', exact: true })
            .click();
        await confirmDialog(adminPage, { required: true });
        await expect
            .poll(async () => (await getBooking(adminApi, booking.id)).deleted)
            .toBe(true);
        await adminPage.reload();
        const cancelled = await waitForRow(adminPage, spaces[0].name);
        expect(cancelled.some((c) => /cancelled/i.test(c))).toBe(true);
    } finally {
        await cleanUpBookings(adminApi, [booking.id]);
        const response = await adminApi.delete(
            `${ENGINE}/assets/${spaces[0].id}`,
        );
        expect(response.ok()).toBeTruthy();
    }
});

for (const kind of ['users', 'fleet'] as const) {
    test(`CON-PARK-04 (${kind}): a record created through the form persists and is listed`, async ({
        adminPage,
        adminApi,
    }) => {
        const name = runName(`CON-PARK-04-${kind}`);
        let asset_id: string | undefined;
        await adminPage.goto(`/#/book/parking/manage/${kind}`);
        await adminPage
            .locator('parking-topbar button[btn]')
            .filter({ hasText: /Add/i })
            .click();
        const modal = adminPage.locator(
            kind === 'users' ? 'parking-user-modal' : 'parking-fleet-modal',
        );
        await modal.locator('input[name$=".name"]').fill(name);
        if (kind === 'users')
            await modal
                .locator('input[name$=".email"]')
                .fill(`${name.toLowerCase()}@example.com`);
        await modal.locator('input[name$=".plate_number"]').fill('E2E123');
        const response = adminPage.waitForResponse(
            (r) =>
                r.request().method() === 'POST' &&
                new URL(r.url()).pathname === `${ENGINE}/assets`,
        );
        try {
            await modal
                .getByRole('button', { name: 'Save', exact: true })
                .click();
            const posted = await response;
            expect(posted.ok(), await posted.text()).toBeTruthy();
            asset_id = (await posted.json()).id;
            await expect(modal).toBeHidden();
            const stored = await adminApi.get(`${ENGINE}/assets/${asset_id}`);
            expect(stored.ok()).toBeTruthy();
            expect(await stored.json()).toMatchObject({
                identifier: name,
                other_data: { plate_number: 'E2E123' },
            });
            await adminPage.reload();
            await waitForRow(adminPage, name);
        } finally {
            if (asset_id) {
                const deleted = await adminApi.delete(
                    `${ENGINE}/assets/${asset_id}`,
                );
                expect(deleted.ok()).toBeTruthy();
            }
        }
    });
}
