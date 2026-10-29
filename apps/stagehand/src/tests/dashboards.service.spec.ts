import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

import { DashboardsService } from '../app/dashboards/dashboards.service';
import { AlertNotificationService } from '../app/push-notification.service';
import { GroupScope, groupScope } from '../app/support-groups';
import { SupportGroupsService } from '../app/support-groups.service';

const { mock_mqtt_connect } = vi.hoisted(() => {
    const client = {
        options: {} as Record<string, unknown>,
        on: vi.fn(),
        subscribe: vi.fn(),
        unsubscribe: vi.fn(),
        reconnect: vi.fn(),
        end: vi.fn(),
    };
    return {
        mock_mqtt_connect: vi.fn(() => client),
    };
});

vi.mock('mqtt', () => ({
    default: { connect: mock_mqtt_connect },
}));

vi.mock('@placeos/ts-client', { spy: true });

const flush = async () => {
    for (let i = 0; i < 6; i++) await Promise.resolve();
};

const zone = (id: string, parent_id = '', tags: string[] = []) =>
    ({ id, parent_id, tags, name: id }) as any;

describe('DashboardsService', () => {
    let spectator: SpectatorService<DashboardsService>;
    const group_id = signal('');
    const scope = signal<GroupScope | null>(null);
    const scope_ready = signal(true);
    const groups = { group_id, scope, scope_ready } as any;
    let org: unknown;
    let active_region: ReturnType<typeof signal<unknown>>;
    let notify_open: ReturnType<typeof vi.fn>;
    let dialog_close: ReturnType<typeof vi.fn>;
    let confirm_reason: string;
    let dialog: unknown;

    const createService = createServiceFactory({
        service: DashboardsService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(AlertNotificationService, {
                notifyAlert: vi.fn(),
            }),
            MockProvider(OrganisationService),
            MockProvider(SupportGroupsService, groups),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        location.hash = '';
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);

        // Passthrough spies (spy: true) call the real ts-client otherwise, so
        // stub each function the service touches with a safe default.
        vi.mocked(ts_client.showAlert).mockResolvedValue({} as any);
        vi.mocked(ts_client.showAlertDashboard).mockResolvedValue({} as any);
        vi.mocked(ts_client.queryAlertDashboards).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.listDashboardAlerts).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.removeAlertDashboard).mockResolvedValue(undefined);
        vi.mocked(ts_client.removeAlert).mockResolvedValue(undefined);
        vi.mocked(ts_client.queryModules).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.systemModuleState).mockResolvedValue({});
        vi.mocked(ts_client.token).mockReturnValue('jwt-token');
        vi.mocked(ts_client.authorise).mockResolvedValue('jwt-token');
        const broker = mock_mqtt_connect() as any;
        broker.options = {};
        mock_mqtt_connect.mockClear();

        confirm_reason = 'close';
        dialog_close = vi.fn();
        dialog = {
            open: vi.fn(() => ({
                componentInstance: { event: NEVER, loading: { set: vi.fn() } },
                afterClosed: () => of({ reason: confirm_reason }),
                close: dialog_close,
            })),
        };

        group_id.set('');
        scope.set(null);
        scope_ready.set(true);
        active_region = signal<unknown>(undefined);
        org = {
            waitUntilInitialised: vi.fn(() => Promise.resolve()),
            active_region,
            region: undefined,
            organisation: { id: 'org-1' },
        };
        spectator = createService({
            providers: [
                MockProvider(OrganisationService, org),
                MockProvider(AlertNotificationService, {
                    notifyAlert: vi.fn(),
                }),
                MockProvider(MatDialog, dialog),
                MockProvider(SupportGroupsService, groups),
            ],
        });
    });

    afterEach(() => {
        spectator.service.ngOnDestroy?.();
        setNotifyOutlet(null, true);
    });

    it('should create the service', () => {
        expect(spectator.service).toBeTruthy();
    });

    describe('setRegionFromParams', () => {
        it('should set region and building signals from params', () => {
            spectator.service.setRegionFromParams('region-1', 'building-2');
            expect(spectator.service.region_id()).toBe('region-1');
            expect(spectator.service.building_id()).toBe('building-2');
        });

        it('should leave building untouched when omitted', () => {
            spectator.service.building_id.set('existing');
            spectator.service.setRegionFromParams('region-9');
            expect(spectator.service.region_id()).toBe('region-9');
            expect(spectator.service.building_id()).toBe('existing');
        });

        it('should keep the params region even after org initialisation resolves', async () => {
            spectator.service.setRegionFromParams('region-fixed', 'bld-fixed');
            await flush();
            // Constructor's post-init sync should not overwrite params region
            expect(spectator.service.region_id()).toBe('region-fixed');
            expect(spectator.service.building_id()).toBe('bld-fixed');
        });
    });

    describe('setAlert', () => {
        it('should load the alert and clear the loading flag', async () => {
            const alert = { id: 'alert-1', name: 'Alert One' };
            vi.mocked(ts_client.showAlert).mockResolvedValue(alert as any);

            await spectator.service.setAlert('alert-1');

            expect(ts_client.showAlert).toHaveBeenCalledWith('alert-1');
            expect(spectator.service.alert()).toBe(alert);
            expect(spectator.service.loading()).not.toContain('ALERT');
        });
    });

    describe('setDashboard', () => {
        it('should clear dashboard state when no id provided', async () => {
            spectator.service.alerts_list.set([{ id: 'x' } as any]);

            await spectator.service.setDashboard('');

            expect(spectator.service.dashboard()).toBeNull();
            expect(spectator.service.alerts_list()).toEqual([]);
            expect(ts_client.showAlertDashboard).not.toHaveBeenCalled();
        });

        it('should load the dashboard and its alerts', async () => {
            const dashboard = { id: 'dash-1', name: 'Dash' };
            vi.mocked(ts_client.showAlertDashboard).mockResolvedValue(
                dashboard as any,
            );
            vi.mocked(ts_client.listDashboardAlerts).mockResolvedValue({
                data: [{ id: 'a1' }],
            } as any);

            await spectator.service.setDashboard('dash-1');
            await flush();

            expect(ts_client.showAlertDashboard).toHaveBeenCalledWith('dash-1');
            expect(spectator.service.dashboard()).toBe(dashboard);
            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith(
                'dash-1',
            );
            expect(spectator.service.alerts_list()).toEqual([{ id: 'a1' }]);
        });
    });

    describe('loadDashboards', () => {
        it('should query dashboards and populate the list', async () => {
            vi.mocked(ts_client.queryAlertDashboards).mockResolvedValue({
                data: [{ id: 'd1' }, { id: 'd2' }],
            } as any);

            await spectator.service.loadDashboards();

            expect(ts_client.queryAlertDashboards).toHaveBeenCalledWith({
                limit: 100,
            });
            expect(spectator.service.dashboard_list()).toEqual([
                { id: 'd1' },
                { id: 'd2' },
            ]);
            expect(spectator.service.loading()).not.toContain('DASHBOARD_LIST');
        });
    });

    describe('removeDashboard', () => {
        it('should do nothing when the confirmation is dismissed', async () => {
            confirm_reason = 'close';

            await spectator.service.removeDashboard({
                id: 'dash-1',
                name: 'Dash',
            } as any);

            expect(ts_client.removeAlertDashboard).not.toHaveBeenCalled();
            expect(notify_open).not.toHaveBeenCalled();
        });

        it('should remove the dashboard and reload when confirmed', async () => {
            confirm_reason = 'done';

            await spectator.service.removeDashboard({
                id: 'dash-1',
                name: 'Dash',
            } as any);
            await flush();

            expect(ts_client.removeAlertDashboard).toHaveBeenCalledWith(
                'dash-1',
            );
            expect(dialog_close).toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalled();
            expect(ts_client.queryAlertDashboards).toHaveBeenCalled();
        });

        it('should close the confirmation and report a failed removal', async () => {
            confirm_reason = 'done';
            vi.mocked(ts_client.removeAlertDashboard).mockRejectedValue(
                new Error('offline'),
            );

            await spectator.service.removeDashboard({
                id: 'dash-1',
                name: 'Dash',
            } as any);
            await flush();

            expect(dialog_close).toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalled();
            expect(ts_client.queryAlertDashboards).not.toHaveBeenCalled();
        });
    });

    describe('removeDashboardAlert', () => {
        it('should do nothing when the confirmation is dismissed', async () => {
            confirm_reason = 'close';

            await spectator.service.removeDashboardAlert({
                id: 'alert-1',
                name: 'Alert',
            } as any);

            expect(ts_client.removeAlert).not.toHaveBeenCalled();
            expect(notify_open).not.toHaveBeenCalled();
        });

        it('should remove the alert and reload dashboard alerts when confirmed', async () => {
            spectator.service.dashboard.set({ id: 'dash-1' } as any);
            confirm_reason = 'done';

            await spectator.service.removeDashboardAlert({
                id: 'alert-1',
                name: 'Alert',
            } as any);
            await flush();

            expect(ts_client.removeAlert).toHaveBeenCalledWith('alert-1');
            expect(dialog_close).toHaveBeenCalled();
            expect(notify_open).toHaveBeenCalled();
            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith(
                'dash-1',
            );
        });

        it("should refresh the alert's dashboard row in the dashboard list", async () => {
            confirm_reason = 'done';
            spectator.service.dashboard_alert_map.set({
                'dash-2': [{ id: 'alert-1' }] as any,
            });

            await spectator.service.removeDashboardAlert({
                id: 'alert-1',
                name: 'Alert',
                alert_dashboard_id: 'dash-2',
            } as any);
            await flush();

            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith(
                'dash-2',
            );
            expect(spectator.service.dashboard_alert_map()['dash-2']).toEqual(
                [],
            );
        });
    });

    describe('loadDashboardAlerts', () => {
        it('should not query when there is no dashboard and no id', async () => {
            await spectator.service.loadDashboardAlerts();
            expect(ts_client.listDashboardAlerts).not.toHaveBeenCalled();
        });

        it('should populate alerts_list for the active dashboard', async () => {
            spectator.service.dashboard.set({ id: 'dash-1' } as any);
            vi.mocked(ts_client.listDashboardAlerts).mockResolvedValue({
                data: [{ id: 'alert-a' }],
            } as any);

            await spectator.service.loadDashboardAlerts();

            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith(
                'dash-1',
            );
            expect(spectator.service.alerts_list()).toEqual([
                { id: 'alert-a' },
            ]);
        });

        it('should populate the dashboard alert map when an id is provided', async () => {
            vi.mocked(ts_client.listDashboardAlerts).mockResolvedValue({
                data: [{ id: 'alert-b' }],
            } as any);

            await spectator.service.loadDashboardAlerts('dash-2');

            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith(
                'dash-2',
            );
            expect(spectator.service.dashboard_alert_map()['dash-2']).toEqual([
                { id: 'alert-b' },
            ]);
            // alerts_list for the active dashboard should stay untouched
            expect(spectator.service.alerts_list()).toEqual([]);
        });
    });

    describe('listenForDashboardAlerts', () => {
        it('should not connect to the broker when there is no dashboard', async () => {
            await spectator.service.listenForDashboardAlerts();
            expect(mock_mqtt_connect).not.toHaveBeenCalled();
        });

        it('should connect to the broker when forced', async () => {
            await spectator.service.listenForDashboardAlerts(true);
            await flush();

            expect(mock_mqtt_connect).toHaveBeenCalledTimes(1);
            const [, options] = mock_mqtt_connect.mock.calls[0] as any;
            // connections are opened by the service, never by the client
            expect(options).toEqual(
                expect.objectContaining({
                    manualConnect: true,
                    reconnectPeriod: 0,
                }),
            );
            const broker = (mock_mqtt_connect as any)();
            expect(broker.options).toEqual(
                expect.objectContaining({
                    username: 'jwt-token',
                    password: 'jwt-token',
                }),
            );
            expect(broker.reconnect).toHaveBeenCalledTimes(1);
        });
    });

    // The broker checks the token only as a connection opens, so each
    // reconnection needs one that is current, not the one first connected with
    describe('broker reconnection', () => {
        const broker = () => (mock_mqtt_connect as any)();
        const handler = (event: string) =>
            broker().on.mock.calls.find(([name]) => name === event)[1];

        beforeEach(async () => {
            vi.useFakeTimers();
            await spectator.service.listenForDashboardAlerts(true);
            await flush();
            handler('connect')();
            broker().reconnect.mockClear();
        });

        afterEach(() => {
            (spectator.service as any).destroy();
            vi.clearAllTimers();
            vi.useRealTimers();
        });

        it('reconnects with a renewed token once the connection drops', async () => {
            vi.mocked(ts_client.authorise).mockResolvedValue('fresh-token');

            handler('close')();
            await vi.advanceTimersByTimeAsync(1000);

            expect(ts_client.authorise).toHaveBeenCalled();
            expect(broker().options.username).toBe('fresh-token');
            expect(broker().options.password).toBe('fresh-token');
            expect(broker().reconnect).toHaveBeenCalledTimes(1);
        });

        it('does not reconnect before a token is available', async () => {
            let renew: (token: string) => void = () => undefined;
            vi.mocked(ts_client.authorise).mockReturnValue(
                new Promise<string>((resolve) => (renew = resolve)),
            );

            handler('close')();
            await vi.advanceTimersByTimeAsync(5000);
            expect(broker().reconnect).not.toHaveBeenCalled();

            renew('fresh-token');
            await flush();
            expect(broker().options.username).toBe('fresh-token');
            expect(broker().reconnect).toHaveBeenCalledTimes(1);
        });

        it('tries again, backing off, when the token cannot be renewed', async () => {
            vi.mocked(ts_client.authorise)
                .mockRejectedValueOnce('Failed to generate token')
                .mockResolvedValue('fresh-token');

            handler('close')();
            await vi.advanceTimersByTimeAsync(1000);
            expect(broker().reconnect).not.toHaveBeenCalled();

            await vi.advanceTimersByTimeAsync(2000);
            expect(broker().options.username).toBe('fresh-token');
            expect(broker().reconnect).toHaveBeenCalledTimes(1);
        });

        it('stops reconnecting once destroyed', async () => {
            (spectator.service as any).destroy();
            expect(broker().end).toHaveBeenCalledWith(true);

            handler('close')();
            await vi.advanceTimersByTimeAsync(60_000);
            expect(broker().reconnect).not.toHaveBeenCalled();
        });

        it('subscribes again on each new connection', async () => {
            await vi.advanceTimersByTimeAsync(1000);
            broker().subscribe.mockClear();

            handler('close')();
            await vi.advanceTimersByTimeAsync(1000);
            handler('connect')();
            await vi.advanceTimersByTimeAsync(1000);

            expect(broker().subscribe).toHaveBeenCalled();
        });
    });

    // The broker is the source of truth: each topic's latest value raises or
    // clears an alert, and nothing is checked again over REST
    describe('broker messages', () => {
        const topic = (system: string, device: string, index = 1) =>
            `placeos/org-1/state/_/bld/lvl/_/${system}/driver-1/${device}/${index}/connected`;
        const send = (t: string, payload: unknown) =>
            (spectator.service as any)._handleBrokerMessage(
                t,
                Buffer.from(
                    payload === ''
                        ? ''
                        : JSON.stringify({ time: 1, value: payload }),
                ),
            );

        beforeEach(() => vi.useFakeTimers());
        afterEach(() => vi.useRealTimers());

        it('raises an alert from the latest value only', () => {
            spectator.service.alerts_list.set([
                {
                    id: 'alert-1',
                    name: 'Disconnected',
                    conditions: {
                        comparisons: [
                            {
                                left: 'connected',
                                operator: ts_client.TriggerConditionOperator.EQ,
                                right: false,
                            },
                        ],
                    },
                } as any,
            ]);
            send(topic('sys-1', 'Display'), false);
            send(topic('sys-2', 'Display'), false);
            vi.advanceTimersByTime(100);
            expect(
                spectator.service.dashboard_alerts().map((a) => a.location),
            ).toEqual(['sys-1', 'sys-2']);

            // the module reconnects: its earlier value no longer counts
            send(topic('sys-1', 'Display'), true);
            vi.advanceTimersByTime(100);
            expect(
                spectator.service.dashboard_alerts().map((a) => a.location),
            ).toEqual(['sys-2']);

            expect(ts_client.queryModules).not.toHaveBeenCalled();
            expect(ts_client.systemModuleState).not.toHaveBeenCalled();
        });

        it('updates the alerts while messages keep arriving', () => {
            spectator.service.alerts_list.set([
                {
                    id: 'alert-1',
                    name: 'Disconnected',
                    conditions: {
                        comparisons: [
                            {
                                left: 'connected',
                                operator: ts_client.TriggerConditionOperator.EQ,
                                right: false,
                            },
                        ],
                    },
                } as any,
            ]);
            send(topic('sys-1', 'Display'), false);
            // a message every 20ms, faster than the update waits for
            for (let i = 0; i < 5; i++) {
                vi.advanceTimersByTime(20);
                send(topic('sys-2', 'Display'), true);
            }
            expect(
                spectator.service.dashboard_alerts().map((a) => a.location),
            ).toEqual(['sys-1']);
        });

        it('drops the alert of a topic the broker removes', () => {
            spectator.service.alerts_list.set([
                {
                    id: 'alert-1',
                    name: 'Disconnected',
                    conditions: {
                        comparisons: [
                            {
                                left: 'connected',
                                operator: ts_client.TriggerConditionOperator.EQ,
                                right: false,
                            },
                        ],
                    },
                } as any,
            ]);
            send(topic('sys-1', 'Display', 2), false);
            vi.advanceTimersByTime(100);
            expect(spectator.service.dashboard_alerts()).toHaveLength(1);

            // source empties a retained topic when its module is deleted
            send(topic('sys-1', 'Display', 2), '');
            vi.advanceTimersByTime(100);
            expect(spectator.service.dashboard_alerts()).toEqual([]);
        });

        it('ignores a message it cannot read', () => {
            expect(() =>
                (spectator.service as any)._handleBrokerMessage(
                    topic('sys-1', 'Display'),
                    Buffer.from('not json'),
                ),
            ).not.toThrow();
        });
    });

    // A support group limits the hot list to the zones it can see
    describe('support groups', () => {
        const disconnected = {
            id: 'alert-1',
            name: 'Disconnected',
            conditions: {
                comparisons: [
                    {
                        left: 'connected',
                        operator: ts_client.TriggerConditionOperator.EQ,
                        right: false,
                    },
                ],
            },
        } as any;
        const region = zone('rgn-1', 'org-1', ['region']);
        const building = zone('bld-1', 'rgn-1', ['building']);
        const level = zone('lvl-1', 'bld-1', ['level']);
        const denied = zone('lvl-2', 'bld-1', ['level']);
        const other_building = zone('bld-2', 'rgn-1', ['building']);
        const other_level = zone('lvl-9', 'bld-2', ['level']);
        const client = () => (mock_mqtt_connect as any)();
        const subscribed = () =>
            client()
                .subscribe.mock.calls.map(([topic]) => topic)
                .sort();
        const listen = () => {
            const service = spectator.service as any;
            service._mqtt_broker = client();
            service._connected = true;
            spectator.service.alerts_list.set([disconnected]);
            service._listenToAlertTopics();
        };

        beforeEach(() => {
            group_id.set('group-1');
            // granted building 1 (less its second level) and a level of
            // building 2
            scope.set(
                groupScope(
                    [building, level, other_level],
                    [building, denied, other_level],
                    [region, other_building],
                ),
            );
        });

        it('listens on the zones the group was granted, not org wide', () => {
            listen();
            expect(subscribed()).toEqual([
                'placeos/org-1/+/+/+/lvl-9/+/+/+/+/+/connected',
                'placeos/org-1/+/+/bld-1/+/+/+/+/+/+/connected',
            ]);
        });

        it('narrows a picked building above a granted zone to that zone', () => {
            spectator.service.building_id.set('bld-2');
            listen();
            expect(subscribed()).toEqual([
                'placeos/org-1/+/+/+/lvl-9/+/+/+/+/+/connected',
            ]);
        });

        it('listens on a picked building the group can see as a whole', () => {
            spectator.service.building_id.set('bld-1');
            listen();
            expect(subscribed()).toEqual([
                'placeos/org-1/+/+/bld-1/+/+/+/+/+/+/connected',
            ]);
        });

        it('listens on nothing while the group loads', () => {
            scope.set(groupScope([], []));
            listen();
            expect(client().subscribe).not.toHaveBeenCalled();
        });

        it('ignores values from zones the group is denied or cannot see', () => {
            vi.useFakeTimers();
            const send = (zones: string, system: string) =>
                (spectator.service as any)._handleBrokerMessage(
                    `placeos/org-1/state/rgn-1/${zones}/_/${system}/drv/Display/1/connected`,
                    Buffer.from(JSON.stringify({ time: 1, value: false })),
                );
            spectator.service.alerts_list.set([disconnected]);
            send('bld-1/lvl-1', 'sys-in');
            send('bld-1/lvl-2', 'sys-denied');
            send('bld-2/lvl-3', 'sys-other');
            send('bld-2/lvl-9', 'sys-level');
            vi.advanceTimersByTime(100);
            expect(
                spectator.service.dashboard_alerts().map((a) => a.location),
            ).toEqual(['sys-in', 'sys-level']);
            vi.useRealTimers();
        });

        it('resets a region the group cannot see to every region', () => {
            spectator.service.setRegionFromParams('rgn-elsewhere', 'bld-x');
            TestBed.tick();
            expect(spectator.service.region_id()).toBe('');
            expect(spectator.service.building_id()).toBe('');
        });

        it('listens again when the group changes', async () => {
            await spectator.service.listenForDashboardAlerts(true);
            await flush();
            const service = spectator.service as any;
            service._connected = true;
            TestBed.tick();
            client().subscribe.mockClear();

            group_id.set('group-2');
            scope.set(
                groupScope([other_level], [other_level], [other_building]),
            );
            TestBed.tick();
            await vi.waitFor(() =>
                expect(subscribed()).toEqual([
                    'placeos/org-1/+/+/+/lvl-9/+/+/+/+/+/connected',
                ]),
            );
        });
    });
});
