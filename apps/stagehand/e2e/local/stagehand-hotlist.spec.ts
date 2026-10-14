/**
 * Stagehand's hot list, end to end: a module that reports `connected: false`
 * is listed, and one that is connected is not.
 *
 *   start a harness (UDP, so it comes up connected) -> not listed
 *   harness reports connected: false                -> listed
 *   harness reports connected: true                 -> gone again
 *
 * The broker is asserted alongside the page at every step. When stagehand
 * stops re-checking alerts over REST, this spec is what says the page is still
 * right; until then, the broker assertions are what say the data is.
 *
 * "Not listed" needs a control (see e2e/README.md, Conventions): the page shows
 * a spinner, not an empty table, until its first alert. So the system also
 * holds a second harness, `Projector_1`, that is disconnected first.
 * Once the page lists the control, it has the system's state, and a missing
 * `Display_1` row means what it says.
 */
import {
    BrokerView,
    systemFilter,
} from '../../../../e2e/support/mqtt/broker-view';
import {
    expectHotList,
    hotListRows,
    openHotList,
} from '../../../../e2e/support/stagehand/alerts.page';
import { expect, test } from '../../../../e2e/support/stagehand/fixtures';
import {
    addHarness,
    createSystem,
    deleteSystem,
    setConnected,
    sweepSystems,
    waitForConnected,
} from '../../../../e2e/support/stagehand/stagehand.api';
import { MQTT_PROPAGATION_MS } from '../../../../e2e/support/stagehand/stagehand.env';

test.beforeAll(async ({ adminApi }) => {
    await sweepSystems(adminApi);
});

test('a module is listed while it reports connected: false, and only then', async ({
    page,
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'hotlist');
    const broker = await BrokerView.open(
        stagehandAdminToken,
        systemFilter(zones.org, system.id),
    );
    // Stagehand logs why it drops an alert; attached so a failure explains itself
    const app_log: string[] = [];
    page.on('console', (m) => {
        if (/ALERTS/.test(m.text())) app_log.push(m.text());
    });
    try {
        // Stagehand open first, so every change below arrives live
        await openHotList(page);
        await expectHotList(page, system.id, []);

        // Both harnesses start connected, so neither is listed yet
        const control = await addHarness(adminApi, system.id, harnessDriverId, {
            custom_name: 'Projector',
        });
        const display = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, control.id, true);
        await waitForConnected(adminApi, display.id, true);
        await broker.waitForValue(
            'Projector',
            1,
            'connected',
            true,
            MQTT_PROPAGATION_MS,
        );
        await broker.waitForValue(
            'Display',
            1,
            'connected',
            true,
            MQTT_PROPAGATION_MS,
        );

        // NOTE: both modules exist before the system's first alert. Stagehand
        // caches a system's module list on its first alert and never refreshes
        // it, so a module added after that cannot alert until a reload
        // (SH-HOT-02). This spec is about the working path.
        await setConnected(adminApi, control.id, false);
        await broker.waitForValue(
            'Projector',
            1,
            'connected',
            false,
            MQTT_PROPAGATION_MS,
        );

        await test.step('a connected module is not listed', async () => {
            await expectHotList(page, system.id, ['Projector_1']);
        });

        await test.step('it is listed once it reports connected: false', async () => {
            await setConnected(adminApi, display.id, false);
            await broker.waitForValue(
                'Display',
                1,
                'connected',
                false,
                MQTT_PROPAGATION_MS,
            );
            await expectHotList(page, system.id, ['Display_1', 'Projector_1']);

            const [row] = (await hotListRows(page, system.id)).filter(
                (r) => r.device === 'Display_1',
            );
            expect(row.cells.join(' ')).toContain('Disconnected');
        });

        await test.step('and leaves it when it reconnects', async () => {
            await setConnected(adminApi, display.id, true);
            await broker.waitForValue(
                'Display',
                1,
                'connected',
                true,
                MQTT_PROPAGATION_MS,
            );
            await expectHotList(page, system.id, ['Projector_1']);
        });

        await test.step('a stagehand opened now agrees', async () => {
            await page.reload();
            await expectHotList(page, system.id, ['Projector_1']);
        });
    } finally {
        await test
            .info()
            .attach('stagehand ALERTS log', { body: app_log.join('\n') });
        await test
            .info()
            .attach('broker messages', { body: broker.describeLog() });
        await broker.close();
        await deleteSystem(adminApi, system.id);
    }
});

test('SH-HOT-02: a module added after the page loaded the system can still be listed', async ({
    page,
    adminApi,
    stagehandAdminToken,
    harnessDriverId,
    zones,
}) => {
    const system = await createSystem(adminApi, zones, 'late-module');
    const broker = await BrokerView.open(
        stagehandAdminToken,
        systemFilter(zones.org, system.id),
    );
    const app_log: string[] = [];
    page.on('console', (m) => {
        if (/ALERTS/.test(m.text())) app_log.push(m.text());
    });
    try {
        await openHotList(page);

        // The system's first alert, which is when stagehand learns its modules
        const control = await addHarness(adminApi, system.id, harnessDriverId, {
            custom_name: 'Projector',
        });
        await waitForConnected(adminApi, control.id, true);
        await setConnected(adminApi, control.id, false);
        await expectHotList(page, system.id, ['Projector_1']);

        // Added afterwards, then disconnected
        const display = await addHarness(adminApi, system.id, harnessDriverId);
        await waitForConnected(adminApi, display.id, true);
        await setConnected(adminApi, display.id, false);
        await broker.waitForValue(
            'Display',
            1,
            'connected',
            false,
            MQTT_PROPAGATION_MS,
        );

        await expectHotList(page, system.id, ['Display_1', 'Projector_1']);
    } finally {
        await test
            .info()
            .attach('stagehand ALERTS log', { body: app_log.join('\n') });
        await broker.close();
        await deleteSystem(adminApi, system.id);
    }
});
