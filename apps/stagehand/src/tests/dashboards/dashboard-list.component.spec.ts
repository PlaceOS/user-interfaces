import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { DashboardListComponent } from '../../app/dashboards/dashboard-list.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';

describe('DashboardListComponent', () => {
    let spectator: SpectatorRouting<DashboardListComponent>;
    let service: any;

    const create_component = createRoutingFactory({
        component: DashboardListComponent,
        shallow: true,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
        providers: [MockProvider(DashboardsService)],
    });

    function build() {
        spectator = create_component({
            providers: [MockProvider(DashboardsService, service)],
        });
        return spectator;
    }

    beforeEach(() => {
        service = {
            dashboard_list: signal([
                { id: 'dash-1', name: 'Lobby', enabled: true },
                { id: 'dash-2', name: 'Cafe', enabled: false },
            ]),
            dashboard_alert_map: signal<Record<string, any[]>>({}),
            loading: signal<string[]>([]),
            loadDashboards: jest.fn(),
            loadDashboardAlerts: jest.fn().mockResolvedValue(undefined),
            removeDashboard: jest.fn(),
            removeDashboardAlert: jest.fn(),
        };
    });

    it('should load the dashboards on init', () => {
        build();

        expect(service.loadDashboards).toHaveBeenCalled();
    });

    it('should feed the dashboard list into the table', () => {
        build();
        const table = spectator.query(SimpleTableComponent) as any;

        expect(table.data).toEqual(service.dashboard_list());
    });

    it('should expand a dashboard row and load its alerts when toggled open', async () => {
        build();

        await spectator.component.toggleChildren({ id: 'dash-1' } as any);

        expect(service.loadDashboardAlerts).toHaveBeenCalledWith('dash-1');
        expect(spectator.component.show_children()).toEqual({ 'dash-1': true });
    });

    it('should collapse an already-open dashboard row without reloading alerts', async () => {
        build();
        spectator.component.show_children.set({ 'dash-1': true });

        await spectator.component.toggleChildren({ id: 'dash-1' } as any);

        expect(service.loadDashboardAlerts).not.toHaveBeenCalled();
        expect(spectator.component.show_children()).toEqual({
            'dash-1': false,
        });
    });

    it('should delegate dashboard removal to the service', () => {
        build();
        const dash = { id: 'dash-2', name: 'Cafe' };

        spectator.component.remove(dash as any);

        expect(service.removeDashboard).toHaveBeenCalledWith(dash);
    });

    it('should delegate alert removal to the service', () => {
        build();
        const alert = { id: 'alert-1', name: 'Offline' };

        spectator.component.removeAlert(alert as any);

        expect(service.removeDashboardAlert).toHaveBeenCalledWith(alert);
    });

    it('should hide the progress bar when nothing is loading', () => {
        build();

        expect(spectator.query('mat-progress-bar')?.classList).toContain(
            'opacity-0',
        );
    });

    it('should show the progress bar while loading', () => {
        build();
        service.loading.set(['DASHBOARD_LIST']);
        spectator.detectChanges();

        expect(spectator.query('mat-progress-bar')?.classList).not.toContain(
            'opacity-0',
        );
    });
});
