import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { addAlertDashboard, updateAlertDashboard } from '@placeos/ts-client';

import { DashboardManageComponent } from '../../app/dashboards/dashboard-mange.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('DashboardManageComponent', () => {
    let spectator: SpectatorRouting<DashboardManageComponent>;
    let service: any;
    let notify_open: ReturnType<typeof vi.fn>;

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
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        service = {
            dashboard: signal<any>(undefined),
            setDashboard: vi.fn(),
            loadDashboards: vi.fn(),
        };
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should reject saving when the name is missing', async () => {
        build();
        spectator.component.model.set({
            id: '',
            name: '',
            description: '',
            enabled: true,
        });

        await spectator.component.save();

        expect(notify_open).toHaveBeenCalled();
        expect(addAlertDashboard).not.toHaveBeenCalled();
        expect(updateAlertDashboard).not.toHaveBeenCalled();
    });

    it('should create a new dashboard and navigate to it on save', async () => {
        vi.mocked(addAlertDashboard).mockResolvedValue({ id: 'new-1' } as any);
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
        vi.mocked(updateAlertDashboard).mockResolvedValue({ id: 'dash-1' } as any);
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
        vi.mocked(addAlertDashboard).mockRejectedValue(
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
