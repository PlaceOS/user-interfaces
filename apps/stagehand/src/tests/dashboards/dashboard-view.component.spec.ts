import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { DashboardViewComponent } from '../../app/dashboards/dashboard-view.component';
import { DashboardsService } from '../../app/dashboards/dashboards.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';

describe('DashboardViewComponent', () => {
    let spectator: SpectatorRouting<DashboardViewComponent>;
    let service: any;

    const create_component = createRoutingFactory({
        component: DashboardViewComponent,
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
            dashboard_alerts: signal([
                { id: 'a-1', name: 'Offline', time: 1710000000 },
            ]),
            setDashboard: vi.fn(),
            listenForDashboardAlerts: vi.fn(),
        };
    });

    afterEach(() => vi.useRealTimers());

    it('should select the dashboard from the route id', () => {
        build({ params: { id: 'dash-9' } });

        expect(service.setDashboard).toHaveBeenCalledWith('dash-9');
    });

    it('should do nothing when there is no dashboard id in the route', () => {
        build();

        expect(service.setDashboard).not.toHaveBeenCalled();
    });

    it('should start listening for dashboard alerts after init', () => {
        vi.useFakeTimers();
        build({ params: { id: 'dash-9' } });

        expect(service.listenForDashboardAlerts).not.toHaveBeenCalled();
        vi.advanceTimersByTime(300);

        expect(service.listenForDashboardAlerts).toHaveBeenCalled();
    });

    it('should feed the dashboard alerts into the table', () => {
        build({ params: { id: 'dash-9' } });
        const table = spectator.query(SimpleTableComponent) as any;

        expect(table.data).toEqual(service.dashboard_alerts());
    });

    it('should show the progress bar while the initial load is pending', () => {
        build({ params: { id: 'dash-9' } });

        expect(spectator.component.loading()).toBe(true);
        expect(spectator.query('mat-progress-bar')?.classList).not.toContain(
            'opacity-0',
        );
    });

    it('should hide the progress bar once loading completes', () => {
        build({ params: { id: 'dash-9' } });
        spectator.component.loading.set(false);
        spectator.detectChanges();

        expect(spectator.query('mat-progress-bar')?.classList).toContain(
            'opacity-0',
        );
    });
});
