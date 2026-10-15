/**
 * The broker stays true while systems change: reordered, renamed, moved
 * between zones, modules removed or deleted, statuses cleared.
 *
 * Each test changes a system the way an admin would and then requires the
 * broker to hold EXACTLY what the source of truth says it should: every topic
 * a fresh client is handed for the system is compared with the topics computed
 * from the system's module list, names, zones and each module's own state
 * (`expectedTopics`). A stale topic, a missing one, or a value at the wrong
 * index all fail the same comparison.
 *
 * These are the cases behind the field reports: alerts for deleted modules,
 * and alerts on the old index after modules were reordered. Stagehand hides
 * both today by re-checking every alert over REST; these hold the broker to
 * the standard that lets that re-check go.
 */
import { APIRequestContext } from '@playwright/test';
import {
    BrokerView,
    retainedForSystem,
    systemFilter,
} from '../../../../e2e/support/mqtt/broker-view';
import { expect, test } from '../../../../e2e/support/stagehand/fixtures';
import {
    HierarchyZones,
    addHarness,
    createSystem,
    deleteModule,
    deleteSystem,
    ensureSecondLevel,
    exec,
    expectedTopics,
    getSystem,
    removeFromSystem,
    renameModule,
    setConnected,
    setSystemModules,
    setSystemZones,
    sweepSystems,
    waitForConnected,
} from '../../../../e2e/support/stagehand/stagehand.api';
import { MQTT_PROPAGATION_MS } from '../../../../e2e/support/stagehand/stagehand.env';

test.beforeAll(async ({ adminApi }) => {
    await sweepSystems(adminApi);
});

/**
 * Where a fresh client's view of a system differs from the truth, one line per
 * topic: `stale` (retained, should not be), `missing` (should be, is not), or
 * `wrong` (both, different values).
 */
async function brokerDiscrepancies(
    api: APIRequestContext,
    token: string,
    zones: HierarchyZones,
    system_id: string,
    levels: string[],
): Promise<string[]> {
    const truth = await expectedTopics(api, system_id, zones, levels);
    const broker = await retainedForSystem(token, zones.org, system_id);
    const out: string[] = [];
    for (const [topic, value] of Object.entries(broker)) {
        if (!(topic in truth))
            out.push(`stale   ${topic} = ${JSON.stringify(value)}`);
        else if (JSON.stringify(truth[topic]) !== JSON.stringify(value)) {
            out.push(
                `wrong   ${topic} = ${JSON.stringify(value)}, module holds ${JSON.stringify(truth[topic])}`,
            );
        }
    }
    for (const [topic, value] of Object.entries(truth)) {
        if (!(topic in broker))
            out.push(`missing ${topic} = ${JSON.stringify(value)}`);
    }
    return out.sort();
}

/** Wait until a fresh client is handed exactly the topics the truth implies. */
async function expectBrokerMatchesTruth(
    api: APIRequestContext,
    token: string,
    zones: HierarchyZones,
    system_id: string,
    levels: string[] = [zones.level],
) {
    await expect
        .poll(() => brokerDiscrepancies(api, token, zones, system_id, levels), {
            message: `the broker's retained topics for ${system_id} against its modules`,
            timeout: MQTT_PROPAGATION_MS,
            intervals: [500, 1_000, 2_000],
        })
        .toEqual([]);
}

/**
 * A system with two harnesses of the same name, `Display_1` (a) and
 * `Display_2` (b), holding different values so a mix up is visible.
 */
async function twoDisplays(
    api: APIRequestContext,
    token: string,
    zones: HierarchyZones,
    driver_id: string,
    label: string,
) {
    const system = await createSystem(api, zones, label);
    const a = await addHarness(api, system.id, driver_id);
    const b = await addHarness(api, system.id, driver_id);
    await waitForConnected(api, a.id, true);
    await waitForConnected(api, b.id, true);
    await setConnected(api, a.id, false);
    await exec(api, a.id, 'set_status', ['which', 'a']);
    await exec(api, b.id, 'set_status', ['which', 'b']);
    const view = await BrokerView.open(
        token,
        systemFilter(zones.org, system.id),
    );
    try {
        await view.waitForValue(
            'Display',
            1,
            'which',
            'a',
            MQTT_PROPAGATION_MS,
        );
        await view.waitForValue(
            'Display',
            2,
            'which',
            'b',
            MQTT_PROPAGATION_MS,
        );
    } finally {
        await view.close();
    }
    await expectBrokerMatchesTruth(api, token, zones, system.id);
    return { system, a, b };
}

test('SH-MQTT-10: reordering modules moves their state to the new index', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const { system, a, b } = await twoDisplays(
        adminApi,
        stagehandAdminToken,
        zones,
        harnessDriverId,
        'reorder',
    );
    try {
        await setSystemModules(adminApi, await getSystem(adminApi, system.id), [
            b.id,
            a.id,
        ]);
        // b is Display_1 now and connected; a, still disconnected, is Display_2
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
        );
    } finally {
        await deleteSystem(adminApi, system.id);
    }
});

test('SH-MQTT-11: a module removed from a system leaves nothing under it', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const { system, a, b } = await twoDisplays(
        adminApi,
        stagehandAdminToken,
        zones,
        harnessDriverId,
        'remove',
    );
    try {
        // a was Display_1; b moves up to take its index
        await removeFromSystem(adminApi, system.id, a.id);
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
        );
    } finally {
        await deleteModule(adminApi, a.id);
        await deleteSystem(adminApi, system.id);
    }
});

test('SH-MQTT-12: a deleted module leaves nothing behind', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const { system, b } = await twoDisplays(
        adminApi,
        stagehandAdminToken,
        zones,
        harnessDriverId,
        'delete-module',
    );
    try {
        await deleteModule(adminApi, b.id);
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
        );
    } finally {
        await deleteSystem(adminApi, system.id);
    }
});

test('SH-MQTT-13: a deleted system leaves nothing behind', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const { system } = await twoDisplays(
        adminApi,
        stagehandAdminToken,
        zones,
        harnessDriverId,
        'delete-system',
    );
    await deleteSystem(adminApi, system.id);
    await expect
        .poll(
            () => retainedForSystem(stagehandAdminToken, zones.org, system.id),
            {
                message: `retained topics for deleted ${system.id}`,
                timeout: MQTT_PROPAGATION_MS,
            },
        )
        .toEqual({});
});

test('SH-MQTT-14: renaming a module moves its state to the new name', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const { system, a } = await twoDisplays(
        adminApi,
        stagehandAdminToken,
        zones,
        harnessDriverId,
        'rename',
    );
    try {
        // a becomes Projector_1, and b moves up to Display_1
        await renameModule(adminApi, a.id, 'Projector');
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
        );
    } finally {
        await deleteSystem(adminApi, system.id);
    }
});

test('SH-MQTT-15: moving a system to another level moves its topics', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const level2 = await ensureSecondLevel(adminApi, zones.building);
    const { system } = await twoDisplays(
        adminApi,
        stagehandAdminToken,
        zones,
        harnessDriverId,
        'move',
    );
    try {
        await setSystemZones(adminApi, await getSystem(adminApi, system.id), [
            zones.org,
            zones.building,
            level2,
        ]);
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
            [zones.level, level2],
        );
    } finally {
        await deleteSystem(adminApi, system.id);
    }
});

test('SH-MQTT-17: a status the driver clears is removed from the broker', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'clear');
    try {
        const mod = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, mod.id, true);
        await exec(adminApi, mod.id, 'set_status', ['power', true]);
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
        );

        // redis drops the key; a retained `{value: null}` is not the same thing
        await exec(adminApi, mod.id, 'clear_status', ['power']);
        await expectBrokerMatchesTruth(
            adminApi,
            stagehandAdminToken,
            zones,
            system.id,
        );
    } finally {
        await deleteSystem(adminApi, system.id);
    }
});
