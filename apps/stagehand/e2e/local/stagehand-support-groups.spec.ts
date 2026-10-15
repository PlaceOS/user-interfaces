/**
 * Stagehand works in one support group at a time, and shows only what that
 * group can see: the hot list (from MQTT) and the remote support room list
 * (from REST).
 *
 *   building A: level A1 (system A1), level A2 (system A2)
 *   building B: level B1 (system B1)
 *
 *   group A: granted building A, denied level A2 -> sees system A1
 *   group B: granted building B                  -> sees system B1
 *
 * This worker's staff user (not an admin, not support) is in both groups. The
 * admin can also pick "All groups", which sees every system.
 *
 * Every system holds one harness that reports `connected: false`, so each is
 * a hot list row wherever it can be seen. A system that is missing is only
 * meaningful next to one that shows (see e2e/README.md, Conventions), so every
 * "not listed" below is asserted alongside a row that is.
 */
import {
    APIRequestContext,
    Browser,
    Page,
    request as pwRequest,
} from '@playwright/test';
import { BACKEND_URL } from '../../../../e2e/support/env';
import {
    BrokerView,
    systemFilter,
} from '../../../../e2e/support/mqtt/broker-view';
import {
    expectHotList,
    openHotList,
} from '../../../../e2e/support/stagehand/alerts.page';
import { expect, test } from '../../../../e2e/support/stagehand/fixtures';
import {
    addHarness,
    createSystem,
    deleteSystem,
    setConnected,
    SystemRow,
    waitForConnected,
} from '../../../../e2e/support/stagehand/stagehand.api';
import {
    MQTT_PROPAGATION_MS,
    STAGEHAND_URL,
} from '../../../../e2e/support/stagehand/stagehand.env';
import {
    addGroupUser,
    addGroupZone,
    createSupportGroup,
    createZone,
    deleteGroup,
    deleteZone,
    GROUP_SPEC_PREFIX,
    removeGroupUser,
    SupportGroup,
    sweepGroupData,
} from '../../../../e2e/support/stagehand/support-groups.api';
import {
    expectRemoteSupportRooms,
    expectSelectedGroup,
    offeredGroups,
    openRemoteSupport,
    selectGroup,
} from '../../../../e2e/support/stagehand/support-groups.page';

test.describe.configure({ mode: 'serial' });

const ROOM_PREFIX = `${GROUP_SPEC_PREFIX} Room ${Date.now()}`;

let api: APIRequestContext;
let systems: Record<'a1' | 'a2' | 'b1', SystemRow & { display_name: string }>;
let group_a: SupportGroup;
let group_b: SupportGroup;
const zone_ids: string[] = [];

/** A browser session as this worker's staff user */
async function staffPage(browser: Browser, state: string): Promise<Page> {
    const context = await browser.newContext({
        storageState: state,
        baseURL: STAGEHAND_URL,
        ignoreHTTPSErrors: true,
    });
    return context.newPage();
}

test.beforeAll(
    async ({ stagehandAdminToken, harnessDriverId, zones, staffUserId }) => {
        test.setTimeout(240_000);
        api = await pwRequest.newContext({
            baseURL: BACKEND_URL,
            ignoreHTTPSErrors: true,
            extraHTTPHeaders: {
                Authorization: `Bearer ${stagehandAdminToken}`,
            },
        });
        await sweepGroupData(api);

        const building_a = await createZone(api, 'A', 'building', zones.org);
        const level_a1 = await createZone(api, 'A1', 'level', building_a.id);
        const level_a2 = await createZone(api, 'A2', 'level', building_a.id);
        const building_b = await createZone(api, 'B', 'building', zones.org);
        const level_b1 = await createZone(api, 'B1', 'level', building_b.id);
        // levels first: a zone with children can't be deleted
        zone_ids.push(
            level_a1.id,
            level_a2.id,
            level_b1.id,
            building_a.id,
            building_b.id,
        );

        const system = async (
            label: string,
            building: string,
            level: string,
        ) => {
            const display_name = `${ROOM_PREFIX} ${label}`;
            const row = await createSystem(
                api,
                { org: zones.org, building, level },
                `group ${label}`,
                { display_name, support_url: 'http://localhost/support' },
            );
            return { ...row, display_name };
        };
        systems = {
            a1: await system('A1', building_a.id, level_a1.id),
            a2: await system('A2', building_a.id, level_a2.id),
            b1: await system('B1', building_b.id, level_b1.id),
        };

        // One disconnected harness per system, on the broker before any page
        // opens, so each page is handed all three at once
        for (const row of Object.values(systems)) {
            const harness = await addHarness(api, row.id, harnessDriverId, {
                custom_name: 'Projector',
            });
            await waitForConnected(api, harness.id, true);
            await setConnected(api, harness.id, false);
            await waitForConnected(api, harness.id, false);
            const broker = await BrokerView.open(
                stagehandAdminToken,
                systemFilter(zones.org, row.id),
            );
            try {
                await broker.waitForValue(
                    'Projector',
                    1,
                    'connected',
                    false,
                    MQTT_PROPAGATION_MS,
                );
            } finally {
                await broker.close();
            }
        }

        group_a = await createSupportGroup(api, 'A');
        await addGroupZone(api, group_a.id, building_a.id);
        await addGroupZone(api, group_a.id, level_a2.id, true);
        group_b = await createSupportGroup(api, 'B');
        await addGroupZone(api, group_b.id, building_b.id);
        await addGroupUser(api, group_a.id, staffUserId);
        await addGroupUser(api, group_b.id, staffUserId);
    },
);

test.afterAll(async () => {
    if (!api) return;
    for (const group of [group_a, group_b]) {
        if (group) await deleteGroup(api, group.id);
    }
    for (const row of Object.values(systems || {})) {
        await deleteSystem(api, row.id);
    }
    for (const id of zone_ids) await deleteZone(api, id);
    await api.dispose();
});

test("a member works in their first support group, and sees only that group's systems", async ({
    browser,
    stagehandStaffState,
}) => {
    const page = await staffPage(browser, stagehandStaffState);
    try {
        await openHotList(page);
        await expectSelectedGroup(page, group_a.name);
        expect(await offeredGroups(page)).toEqual([group_a.name, group_b.name]);

        // A1 is in group A. A2 is in a level group A is denied, B1 in a
        // building it was never granted.
        await expectHotList(page, systems.a1.id, ['Projector_1']);
        await expectHotList(page, systems.a2.id, []);
        await expectHotList(page, systems.b1.id, []);

        await openRemoteSupport(page);
        await expectRemoteSupportRooms(page, ROOM_PREFIX, [
            systems.a1.display_name,
        ]);
    } finally {
        await page.context().close();
    }
});

test('switching group switches what the hot list and room list show, and is remembered', async ({
    browser,
    stagehandStaffState,
}) => {
    const page = await staffPage(browser, stagehandStaffState);
    try {
        await openHotList(page);
        await expectHotList(page, systems.a1.id, ['Projector_1']);

        await selectGroup(page, group_b.name);
        await expectHotList(page, systems.b1.id, ['Projector_1']);
        await expectHotList(page, systems.a1.id, []);
        await expectHotList(page, systems.a2.id, []);

        await openRemoteSupport(page);
        await expectRemoteSupportRooms(page, ROOM_PREFIX, [
            systems.b1.display_name,
        ]);

        // The choice outlives a reload
        await page.reload();
        await expectSelectedGroup(page, group_b.name);
        await expectRemoteSupportRooms(page, ROOM_PREFIX, [
            systems.b1.display_name,
        ]);
    } finally {
        await page.context().close();
    }
});

test('an admin sees every system in "All groups", and can narrow to one group', async ({
    page,
}) => {
    await openHotList(page);
    await expectSelectedGroup(page, 'All groups');
    await expectHotList(page, systems.a1.id, ['Projector_1']);
    await expectHotList(page, systems.a2.id, ['Projector_1']);
    await expectHotList(page, systems.b1.id, ['Projector_1']);

    await selectGroup(page, group_a.name);
    await expectHotList(page, systems.a1.id, ['Projector_1']);
    await expectHotList(page, systems.a2.id, []);
    await expectHotList(page, systems.b1.id, []);

    await selectGroup(page, 'All groups');
    await expectHotList(page, systems.b1.id, ['Projector_1']);
});

test('a user in no support group is turned away', async ({
    browser,
    stagehandStaffState,
    staffUserId,
}) => {
    await removeGroupUser(api, group_a.id, staffUserId);
    await removeGroupUser(api, group_b.id, staffUserId);
    const page = await staffPage(browser, stagehandStaffState);
    try {
        await page.goto('/#/alerts');
        await expect(page).toHaveURL(/unauthorised/, { timeout: 60_000 });
    } finally {
        await page.context().close();
    }
});
