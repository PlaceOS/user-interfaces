/**
 * The MQTT contract stagehand relies on: what source publishes for a module,
 * where, and what a client connecting later is handed.
 *
 * No browser. These assert on the broker itself, because stagehand re-checks
 * every MQTT alert over REST before showing it (`DashboardsService`), so a UI
 * that looks right says nothing about whether the broker is right. Removing
 * that re-check is only safe once these hold.
 *
 * Every value is also read from the module's own state through rest-api, which
 * is the truth the broker is meant to mirror.
 */
import { moduleState } from '../../../../e2e/support/drivers/drivers.api';
import {
    BrokerView,
    parseStateTopic,
    retainedSnapshot,
    systemFilter,
} from '../../../../e2e/support/mqtt/broker-view';
import { expect, test } from '../../../../e2e/support/stagehand/fixtures';
import {
    addHarness,
    createSystem,
    deleteSystem,
    exec,
    setConnected,
    sweepSystems,
    waitForConnected,
} from '../../../../e2e/support/stagehand/stagehand.api';
import { MQTT_PROPAGATION_MS } from '../../../../e2e/support/stagehand/stagehand.env';

test.beforeAll(async ({ adminApi }) => {
    await sweepSystems(adminApi);
});

test('a started module publishes connected: true at its full topic', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'topic');
    const broker = await BrokerView.open(
        stagehandAdminToken,
        systemFilter(zones.org, system.id),
    );
    try {
        const mod = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, mod.id, true);

        const found = await broker.waitForValue(
            'Display',
            1,
            'connected',
            true,
            MQTT_PROPAGATION_MS,
        );

        // Every segment, because stagehand parses topics by position. The
        // system has no area zone, which source writes as `_`.
        expect(found.topic).toBe(
            [
                'placeos',
                zones.org,
                'state',
                zones.region,
                zones.building,
                zones.level,
                '_',
                system.id,
                harnessDriverId,
                'Display',
                '1',
                'connected',
            ].join('/'),
        );
        // Unix seconds, and recent: a stale `time` is how a replayed value looks
        expect(Math.abs(found.time - Date.now() / 1000)).toBeLessThan(120);
    } finally {
        await broker.close();
        await deleteSystem(adminApi, system.id);
    }
});

test('connected follows the module: false, then true again', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'toggle');
    const broker = await BrokerView.open(
        stagehandAdminToken,
        systemFilter(zones.org, system.id),
    );
    try {
        const mod = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, mod.id, true);
        await broker.waitForValue(
            'Display',
            1,
            'connected',
            true,
            MQTT_PROPAGATION_MS,
        );

        await setConnected(adminApi, mod.id, false);
        await waitForConnected(adminApi, mod.id, false);
        await broker.waitForValue(
            'Display',
            1,
            'connected',
            false,
            MQTT_PROPAGATION_MS,
        );

        await setConnected(adminApi, mod.id, true);
        await waitForConnected(adminApi, mod.id, true);
        await broker.waitForValue(
            'Display',
            1,
            'connected',
            true,
            MQTT_PROPAGATION_MS,
        );
    } finally {
        await broker.close();
        await deleteSystem(adminApi, system.id);
    }
});

test('any status is published as the JSON value the driver set', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'values');
    const broker = await BrokerView.open(
        stagehandAdminToken,
        systemFilter(zones.org, system.id),
    );
    try {
        const mod = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, mod.id, true);

        const values: Record<string, unknown> = {
            power: true,
            volume: 42.5,
            input: 'HDMI2',
            inputs: { hdmi: 1, names: ['a', 'b'] },
        };
        for (const [key, value] of Object.entries(values)) {
            await exec(adminApi, mod.id, 'set_status', [key, value]);
        }
        for (const [key, value] of Object.entries(values)) {
            // A value, not a JSON string of one: stagehand compares them
            await broker.waitForValue(
                'Display',
                1,
                key,
                value,
                MQTT_PROPAGATION_MS,
            );
        }

        const state = await moduleState(adminApi, mod.id);
        for (const [key, value] of Object.entries(values)) {
            expect(state[key], `module state ${key}`).toEqual(value);
        }
    } finally {
        await broker.close();
        await deleteSystem(adminApi, system.id);
    }
});

test('a client connecting later is handed the current value of every status', async ({
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'retained');
    const live = await BrokerView.open(
        stagehandAdminToken,
        systemFilter(zones.org, system.id),
    );
    try {
        const mod = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, mod.id, true);
        await exec(adminApi, mod.id, 'set_status', ['power', true]);
        await setConnected(adminApi, mod.id, false);
        await live.waitForValue(
            'Display',
            1,
            'connected',
            false,
            MQTT_PROPAGATION_MS,
        );
        await live.waitForValue(
            'Display',
            1,
            'power',
            true,
            MQTT_PROPAGATION_MS,
        );

        // What a stagehand opened now would load
        const snapshot = await retainedSnapshot(
            stagehandAdminToken,
            systemFilter(zones.org, system.id),
        );
        const retained = Object.fromEntries(
            [...snapshot].map(([topic, v]) => {
                const t = parseStateTopic(topic)!;
                return [`${t.module_name}_${t.index}.${t.status}`, v.value];
            }),
        );
        expect(retained['Display_1.connected']).toBe(false);
        expect(retained['Display_1.power']).toBe(true);

        // ...and nothing the module does not hold
        const state = await moduleState(adminApi, mod.id);
        for (const key of Object.keys(retained)) {
            const status = key.split('.').slice(1).join('.');
            expect(
                state,
                `retained ${key} is not in the module's state`,
            ).toHaveProperty(status);
        }
    } finally {
        await live.close();
        await deleteSystem(adminApi, system.id);
    }
});
