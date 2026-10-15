import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import * as ts_client from '@placeos/ts-client';

import { DashboardsService } from '../app/dashboards/dashboards.service';
import { AlertNotificationService } from '../app/push-notification.service';

const { mock_mqtt_connect } = vi.hoisted(() => {
    const client = {
        on: vi.fn(),
        subscribe: vi.fn(),
        unsubscribe: vi.fn(),
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

describe('DashboardsService', () => {
    let spectator: SpectatorService<DashboardsService>;
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
        vi.mocked(ts_client.removeAlertDashboard).mockResolvedValue(
            undefined,
        );
        vi.mocked(ts_client.removeAlert).mockResolvedValue(undefined);
        vi.mocked(ts_client.queryModules).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.systemModuleState).mockResolvedValue({});
        vi.mocked(ts_client.token).mockReturnValue('jwt-token');

        confirm_reason = 'close';
        dialog_close = vi.fn();
        dialog = {
            open: vi.fn(() => ({
                componentInstance: { event: NEVER, loading: { set: vi.fn() } },
                afterClosed: () => of({ reason: confirm_reason }),
                close: dialog_close,
            })),
        };

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
            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith('dash-1');
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
            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith('dash-1');
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

            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith('dash-1');
            expect(spectator.service.alerts_list()).toEqual([{ id: 'alert-a' }]);
        });

        it('should populate the dashboard alert map when an id is provided', async () => {
            vi.mocked(ts_client.listDashboardAlerts).mockResolvedValue({
                data: [{ id: 'alert-b' }],
            } as any);

            await spectator.service.loadDashboardAlerts('dash-2');

            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith('dash-2');
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
            expect(options).toEqual(
                expect.objectContaining({
                    username: 'jwt-token',
                    password: 'jwt-token',
                }),
            );
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
                    payload === '' ? '' : JSON.stringify({ time: 1, value: payload }),
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
});
