/** CON-CAT-03: creating an item is independent of ROOM-B5 (ordering it).
 * Only select the new item in Workplace; do not submit a meeting/order. */
import { request } from '@playwright/test';
import { buildStorageState, mintToken } from '../../../../e2e/support/auth';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import {
    ENGINE,
    runName,
} from '../../../../e2e/support/concierge/management.api';
import { APP_URL, BACKEND_URL, roleFor } from '../../../../e2e/support/env';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';
import {
    ROOM_BASE_SETTINGS,
    useSettings,
} from '../../../../e2e/support/room/room.settings';

/** Does anything answer at this URL? */
async function reachable(url: string): Promise<boolean> {
    const probe = await request.newContext({ ignoreHTTPSErrors: true });
    try {
        await probe.get(url, { timeout: 5_000 });
        return true;
    } catch {
        return false;
    } finally {
        await probe.dispose();
    }
}

test('CON-CAT-03: an item created in concierge is stored and offered on the workplace form', async ({
    adminPage,
    adminApi,
    browser,
}) => {
    test.skip(
        !(await reachable(APP_URL)),
        `nothing is serving the workplace app at ${APP_URL}, and the second half of ` +
            `this row opens its meeting form. Serve it (nx serve workplace) or run the ` +
            `workplace suite alongside.`,
    );
    const name = runName('CON-CAT-03');
    let asset_id: string | undefined;
    await adminPage.goto('/#/book/catering/menu');
    await adminPage
        .locator('catering-topbar')
        .getByRole('button', { name: 'add', exact: true })
        .click();
    const modal = adminPage.locator('catering-item-modal');
    await modal.locator('input[name$=".name"]').fill(name);
    await modal.locator('input[name$=".category"]').fill('E2E');
    await modal.locator('input[name$=".caterer"]').fill('E2E Caterer');
    const price = modal.locator('a-counter').first().locator('input');
    await price.fill('12');
    await price.blur();
    const response = adminPage.waitForResponse(
        (r) =>
            r.request().method() === 'POST' &&
            new URL(r.url()).pathname === `${ENGINE}/assets`,
    );
    try {
        await modal.getByRole('button', { name: 'Save', exact: true }).click();
        const posted = await response;
        expect(posted.ok(), await posted.text()).toBeTruthy();
        asset_id = (await posted.json()).id;
        await expect(modal).toBeHidden();
        const stored = await adminApi.get(`${ENGINE}/assets/${asset_id}`);
        expect(stored.ok()).toBeTruthy();
        expect(await stored.json()).toMatchObject({ identifier: name });

        const role = roleFor('staff', 0);
        const mint = await mintToken(
            BACKEND_URL,
            APP_URL,
            role.email,
            role.password,
        );
        const context = await browser.newContext({
            storageState: buildStorageState(mint, APP_URL),
            ignoreHTTPSErrors: true,
        });
        try {
            const page = await context.newPage();
            await useSettings(page, ROOM_BASE_SETTINGS);
            await page.goto(`${APP_URL}/#/book/meeting/form`);
            const form = new MeetingFlow(page);
            const systems = await adminApi.get(`${ENGINE}/systems`, {
                params: { limit: '500' },
            });
            expect(systems.ok()).toBeTruthy();
            const rooms = await systems.json();
            const room = rooms.find(
                (item: { name: string }) => item.name === 'E2E Room 0',
            );
            expect(room, 'the framework must seed E2E Room 0').toBeTruthy();
            // Catering is on the last step of the meeting flow. The first
            // step needs a title and the second needs a room.
            await form.title.fill(name);
            await form.toRoomStep();
            await form.selectRoom(room.name);
            await form.toOptionsStep();
            await form.addCateringItem(name);
            await expect(form.cateringOrders).toContainText(name);
        } finally {
            await context.close();
        }
    } finally {
        if (asset_id) {
            const deleted = await adminApi.delete(
                `${ENGINE}/assets/${asset_id}`,
            );
            expect(deleted.ok()).toBeTruthy();
        }
    }
});
