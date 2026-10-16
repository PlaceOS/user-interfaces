/**
 * The alerts and remote support pages, on real data: an alert dashboard and
 * its alerts from the engine API, module state from the broker, and rooms from
 * the systems the spec creates.
 *
 * One system holds one harness, `Projector_1`, that reports `connected: false`.
 * That is listed by the built in "Disconnected Devices" view, and by a
 * dashboard alert on exactly that status. The system has a support URL, so the
 * remote support page lists it as a room with the alert against it.
 */
import { Page } from '@playwright/test';
import { readTable } from '../../../../e2e/support/concierge/simple-table.page';
import {
    BrokerView,
    systemFilter,
} from '../../../../e2e/support/mqtt/broker-view';
import {
    addDisconnectedAlert,
    AlertDashboard,
    createAlertDashboard,
    deleteAlertDashboard,
    sweepAlertDashboards,
} from '../../../../e2e/support/stagehand/alert-dashboards.api';
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
    SystemRow,
    waitForConnected,
} from '../../../../e2e/support/stagehand/stagehand.api';
import { MQTT_PROPAGATION_MS } from '../../../../e2e/support/stagehand/stagehand.env';
import { openRemoteSupport } from '../../../../e2e/support/stagehand/support-groups.page';

test.describe.configure({ mode: 'serial' });

const ALERT_NAME = `E2E Projector offline ${Date.now()}`;

let system: SystemRow & { display_name: string };
let dashboard: AlertDashboard;

test.beforeAll(
    async ({ adminApi, stagehandAdminToken, harnessDriverId, zones }) => {
        test.setTimeout(180_000);
        await sweepSystems(adminApi);
        await sweepAlertDashboards(adminApi);

        const display_name = `E2E Stagehand Room ${Date.now()}`;
        const row = await createSystem(adminApi, zones, 'pages', {
            display_name,
            support_url: 'http://localhost/support',
        });
        system = { ...row, display_name };
        const harness = await addHarness(adminApi, system.id, harnessDriverId, {
            custom_name: 'Projector',
        });
        await waitForConnected(adminApi, harness.id, true);
        await setConnected(adminApi, harness.id, false);
        await waitForConnected(adminApi, harness.id, false);
        // on the broker before any page opens, so each page is handed it
        const broker = await BrokerView.open(
            stagehandAdminToken,
            systemFilter(zones.org, system.id),
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

        dashboard = await createAlertDashboard(adminApi, 'pages');
        await addDisconnectedAlert(
            adminApi,
            dashboard.id,
            ALERT_NAME,
            'Projector_1',
            'critical',
        );
    },
);

test.afterAll(async ({ adminApi }) => {
    if (dashboard) await deleteAlertDashboard(adminApi, dashboard.id);
    if (system) await deleteSystem(adminApi, system.id);
});

/** The number on the summary card headed `title` */
async function cardCount(page: Page, title: string): Promise<number> {
    const card = page
        .locator(`div:has(> div > h3:text-is("${title}"))`)
        .first();
    return Number(
        (await card.locator('.text-4xl').first().textContent())?.trim(),
    );
}

test('US-SM-001: the alerts table lists a dashboard alert, with its severity and columns', async ({
    page,
}) => {
    await openHotList(page);

    await test.step('Disconnected Devices lists the module', async () => {
        await expectHotList(page, system.id, ['Projector_1']);
        const [row] = await hotListRows(page, system.id);
        expect(row.cells.join(' ')).toContain('Disconnected Device');
        // the first column is the row's actions, with no heading
        const { headers } = await readTable(page);
        expect(headers.slice(1)).toEqual([
            'Severity',
            'Issue',
            'Device',
            'Location',
        ]);
    });

    await test.step('the dashboard from the API lists its own alert', async () => {
        await page.locator('#alerts-dashboard').click();
        await page.getByRole('option', { name: dashboard.name }).click();
        await expect(page).toHaveURL(new RegExp(`alerts/${dashboard.id}`));
        await expect
            .poll(
                async () =>
                    (await hotListRows(page, system.id)).map((r) =>
                        r.cells.join(' '),
                    ),
                { message: 'the dashboard alert row', timeout: 30_000 },
            )
            .toEqual([
                expect.stringMatching(
                    new RegExp(`Critical.*${ALERT_NAME}.*Projector_1`),
                ),
            ]);
        await expect
            .poll(() => cardCount(page, 'Critical'), { timeout: 10_000 })
            .toBeGreaterThanOrEqual(1);
    });
});

test('US-SM-019: remote support lists the room, with its columns and its alert', async ({
    page,
}) => {
    await openRemoteSupport(page);

    let room: string[] = [];
    await expect
        .poll(
            async () => {
                const table = await readTable(page).catch(() => null);
                room =
                    table?.rows.find((cells) =>
                        cells.some((c) => c.includes(system.display_name)),
                    ) ?? [];
                return room.join(' ');
            },
            { message: 'the room row and its alert', timeout: 30_000 },
        )
        .toContain('Disconnected Device');

    // the first column is the row's actions, with no heading
    const { headers } = await readTable(page);
    expect(headers.slice(1)).toEqual([
        'Room',
        'Schedule',
        'Current Event',
        'Next Event',
        'Feed',
        'Alerts',
    ]);
    expect(await cardCount(page, 'Active Alerts')).toBeGreaterThanOrEqual(1);
});
