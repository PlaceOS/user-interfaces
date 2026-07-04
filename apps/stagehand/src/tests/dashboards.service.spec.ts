import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import * as components_mod from '@placeos/components';
import * as common_mod from '@placeos/common';

import { DashboardsService } from '../app/dashboards/dashboards.service';
import { AlertNotificationService } from '../app/push-notification.service';

const mqtt_client = {
    on: jest.fn(),
    subscribe: jest.fn(),
    unsubscribe: jest.fn(),
    end: jest.fn(),
};

jest.mock('mqtt', () => ({
    __esModule: true,
    default: {
        connect: jest.fn(() => mqtt_client),
    },
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mqtt = require('mqtt').default;

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        showAlert: jest.fn(() => Promise.resolve({})),
        showAlertDashboard: jest.fn(() => Promise.resolve({})),
        queryAlertDashboards: jest.fn(() => Promise.resolve({ data: [] })),
        listDashboardAlerts: jest.fn(() => Promise.resolve({ data: [] })),
        removeAlertDashboard: jest.fn(() => Promise.resolve()),
        removeAlert: jest.fn(() => Promise.resolve()),
        queryModules: jest.fn(() => Promise.resolve({ data: [] })),
        systemModuleState: jest.fn(() => Promise.resolve({})),
        token: jest.fn(() => 'jwt-token'),
    };
});

jest.mock('@placeos/components', () => {
    const actual = jest.requireActual('@placeos/components');
    return {
        ...actual,
        openConfirmModal: jest.fn(),
    };
});

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifySuccess: jest.fn(),
    };
});

const flush = async () => {
    for (let i = 0; i < 6; i++) await Promise.resolve();
};

describe('DashboardsService', () => {
    let spectator: SpectatorService<DashboardsService>;
    let org: any;
    let active_region: ReturnType<typeof signal<any>>;

    const createService = createServiceFactory({
        service: DashboardsService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(AlertNotificationService, {
                notifyAlert: jest.fn(),
            }),
            MockProvider(OrganisationService),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        location.hash = '';
        active_region = signal<any>(undefined);
        org = {
            waitUntilInitialised: jest.fn(() => Promise.resolve()),
            active_region,
            region: undefined,
            organisation: { id: 'org-1' },
        };
        spectator = createService({
            providers: [
                MockProvider(OrganisationService, org),
                MockProvider(AlertNotificationService, {
                    notifyAlert: jest.fn(),
                }),
            ],
        });
    });

    afterEach(() => {
        spectator.service.ngOnDestroy?.();
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
            (ts_client.showAlert as jest.Mock).mockResolvedValue(alert);

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
            (ts_client.showAlertDashboard as jest.Mock).mockResolvedValue(
                dashboard,
            );
            (ts_client.listDashboardAlerts as jest.Mock).mockResolvedValue({
                data: [{ id: 'a1' }],
            });

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
            (ts_client.queryAlertDashboards as jest.Mock).mockResolvedValue({
                data: [{ id: 'd1' }, { id: 'd2' }],
            });

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
            (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
                reason: 'close',
                loading: jest.fn(),
                close: jest.fn(),
            });

            await spectator.service.removeDashboard({
                id: 'dash-1',
                name: 'Dash',
            } as any);

            expect(ts_client.removeAlertDashboard).not.toHaveBeenCalled();
            expect(common_mod.notifySuccess).not.toHaveBeenCalled();
        });

        it('should remove the dashboard and reload when confirmed', async () => {
            const close = jest.fn();
            (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
                reason: 'done',
                loading: jest.fn(),
                close,
            });

            await spectator.service.removeDashboard({
                id: 'dash-1',
                name: 'Dash',
            } as any);
            await flush();

            expect(ts_client.removeAlertDashboard).toHaveBeenCalledWith(
                'dash-1',
            );
            expect(close).toHaveBeenCalled();
            expect(common_mod.notifySuccess).toHaveBeenCalled();
            expect(ts_client.queryAlertDashboards).toHaveBeenCalled();
        });
    });

    describe('removeDashboardAlert', () => {
        it('should do nothing when the confirmation is dismissed', async () => {
            (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
                reason: 'close',
                loading: jest.fn(),
                close: jest.fn(),
            });

            await spectator.service.removeDashboardAlert({
                id: 'alert-1',
                name: 'Alert',
            } as any);

            expect(ts_client.removeAlert).not.toHaveBeenCalled();
            expect(common_mod.notifySuccess).not.toHaveBeenCalled();
        });

        it('should remove the alert and reload dashboard alerts when confirmed', async () => {
            spectator.service.dashboard.set({ id: 'dash-1' } as any);
            const close = jest.fn();
            (components_mod.openConfirmModal as jest.Mock).mockResolvedValue({
                reason: 'done',
                loading: jest.fn(),
                close,
            });

            await spectator.service.removeDashboardAlert({
                id: 'alert-1',
                name: 'Alert',
            } as any);
            await flush();

            expect(ts_client.removeAlert).toHaveBeenCalledWith('alert-1');
            expect(close).toHaveBeenCalled();
            expect(common_mod.notifySuccess).toHaveBeenCalled();
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
            (ts_client.listDashboardAlerts as jest.Mock).mockResolvedValue({
                data: [{ id: 'alert-a' }],
            });

            await spectator.service.loadDashboardAlerts();

            expect(ts_client.listDashboardAlerts).toHaveBeenCalledWith('dash-1');
            expect(spectator.service.alerts_list()).toEqual([{ id: 'alert-a' }]);
        });

        it('should populate the dashboard alert map when an id is provided', async () => {
            (ts_client.listDashboardAlerts as jest.Mock).mockResolvedValue({
                data: [{ id: 'alert-b' }],
            });

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
            expect(mqtt.connect).not.toHaveBeenCalled();
        });

        it('should connect to the broker when forced', async () => {
            await spectator.service.listenForDashboardAlerts(true);
            await flush();

            expect(mqtt.connect).toHaveBeenCalledTimes(1);
            const [, options] = (mqtt.connect as jest.Mock).mock.calls[0];
            expect(options).toEqual(
                expect.objectContaining({
                    username: 'jwt-token',
                    password: 'jwt-token',
                }),
            );
        });
    });
});
