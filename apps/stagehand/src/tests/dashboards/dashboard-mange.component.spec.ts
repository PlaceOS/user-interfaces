import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { notifyError } from '@placeos/common';
import { addAlertDashboard, updateAlertDashboard } from '@placeos/ts-client';

import { DashboardManageComponent } from '../../app/dashboards/dashboard-mange.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    addAlertDashboard: jest.fn(),
    updateAlertDashboard: jest.fn(),
}));

describe('DashboardManageComponent', () => {
    let spectator: SpectatorRouting<DashboardManageComponent>;
    let service: any;

    const create_component = createRoutingFactory({
        component: DashboardManageComponent,
        shallow: true,
        detectChanges: false,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SettingsToggleComponent),
        ],
        providers: [MockProvider(DashboardsService)],
    });

    function build(route_options = {}) {
        spectator = create_component({
            providers: [MockProvider(DashboardsService, service)],
            ...route_options,
        });
        return spectator;
    }

    beforeEach(() => {
        jest.clearAllMocks();
        service = {
            dashboard: signal<any>(undefined),
            setDashboard: jest.fn(),
            loadDashboards: jest.fn(),
        };
    });

    it('should reject saving when the name is missing', async () => {
        build();
        spectator.component.model.set({
            id: '',
            name: '',
            description: '',
            enabled: true,
        });

        await spectator.component.save();

        expect(notifyError).toHaveBeenCalled();
        expect(addAlertDashboard).not.toHaveBeenCalled();
        expect(updateAlertDashboard).not.toHaveBeenCalled();
    });

    it('should create a new dashboard and navigate to it on save', async () => {
        (addAlertDashboard as jest.Mock).mockResolvedValue({ id: 'new-1' });
        build();
        spectator.component.model.set({
            id: '',
            name: 'Reception',
            description: 'front desk',
            enabled: true,
        });

        await spectator.component.save();

        expect(addAlertDashboard).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'Reception' }),
        );
        expect(updateAlertDashboard).not.toHaveBeenCalled();
        expect(service.loadDashboards).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/dashboards',
            'new-1',
        ]);
    });

    it('should update an existing dashboard on save', async () => {
        (updateAlertDashboard as jest.Mock).mockResolvedValue({ id: 'dash-1' });
        service.dashboard.set({ id: 'dash-1', name: 'Old' });
        build();
        spectator.component.model.set({
            id: 'dash-1',
            name: 'Renamed',
            description: '',
            enabled: false,
        });

        await spectator.component.save();

        expect(updateAlertDashboard).toHaveBeenCalledWith(
            'dash-1',
            expect.objectContaining({ id: 'dash-1', name: 'Renamed' }),
        );
        expect(addAlertDashboard).not.toHaveBeenCalled();
    });

    it('should not navigate when the save request fails', async () => {
        (addAlertDashboard as jest.Mock).mockRejectedValue(
            new Error('nope'),
        );
        build();
        spectator.component.model.set({
            id: '',
            name: 'Reception',
            description: '',
            enabled: true,
        });

        await spectator.component.save();

        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('should load the routed dashboard into the form on init', async () => {
        service.dashboard.set({
            id: 'dash-7',
            name: 'Loaded',
            description: 'desc',
            enabled: true,
        });
        build({ params: { id: 'dash-7' } });

        spectator.component.ngOnInit();
        await Promise.resolve();

        expect(service.setDashboard).toHaveBeenCalledWith('dash-7');
        expect(spectator.component.model().name).toBe('Loaded');
    });

    it('should not load a dashboard when the route has no id', () => {
        build();

        spectator.component.ngOnInit();

        expect(service.setDashboard).not.toHaveBeenCalled();
    });
});
