import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { DashboardAlertListComponent } from '../../app/dashboards/dashboard-alert-list.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';

describe('DashboardAlertListComponent', () => {
    let spectator: SpectatorRouting<DashboardAlertListComponent>;
    let service: any;

    const create_component = createRoutingFactory({
        component: DashboardAlertListComponent,
        shallow: true,
        declarations: [
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
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
        service = {
            dashboard: signal({ id: 'dash-1', name: 'Lobby' }),
            alerts_list: signal([
                { id: 'a-1', name: 'Offline', enabled: true },
                { id: 'a-2', name: 'Overheat', enabled: false },
            ]),
            loading: signal<string[]>([]),
            setDashboard: jest.fn(),
            removeDashboardAlert: jest.fn(),
        };
    });

    it('should select the dashboard from the route id', () => {
        build({ params: { id: 'dash-1' } });

        expect(service.setDashboard).toHaveBeenCalledWith('dash-1');
    });

    it('should not select a dashboard when the route has no id', () => {
        build();

        expect(service.setDashboard).not.toHaveBeenCalled();
    });

    it('should feed the alert list into the table', () => {
        build({ params: { id: 'dash-1' } });
        const table = spectator.query(SimpleTableComponent) as any;

        expect(table.data).toEqual(service.alerts_list());
    });

    it('should delegate alert removal to the service', () => {
        build({ params: { id: 'dash-1' } });
        const alert = { id: 'a-2', name: 'Overheat' };

        spectator.component.remove(alert as any);

        expect(service.removeDashboardAlert).toHaveBeenCalledWith(alert);
    });

    it('should hide the progress bar when nothing is loading', () => {
        build({ params: { id: 'dash-1' } });

        expect(spectator.query('mat-progress-bar')?.classList).toContain(
            'opacity-0',
        );
    });

    it('should reveal the progress bar while loading', () => {
        build({ params: { id: 'dash-1' } });
        service.loading.set(['ALERT_LIST']);
        spectator.detectChanges();

        expect(spectator.query('mat-progress-bar')?.classList).not.toContain(
            'opacity-0',
        );
    });
});
