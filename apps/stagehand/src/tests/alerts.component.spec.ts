import type { Mock } from 'vitest';
import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { showSystem } from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AlertsComponent } from '../app/alerts.component';
import { DashboardsService } from '../app/dashboards/dashboards.service';
import { SidebarComponent } from '../app/ui/sidebar.component';

vi.mock('@placeos/ts-client', { spy: true });

const make_alert = (overrides: Record<string, any> = {}) => ({
    id: 'a-1',
    severity: 'critical',
    type: 'display',
    location: 'sys-1',
    device: '',
    subject: 'Issue',
    body: 'Body',
    status: 'open',
    timestamp: 0,
    ...overrides,
});

describe('AlertsComponent', () => {
    let spectator: Spectator<AlertsComponent>;
    let dashboard_alerts: ReturnType<typeof signal<any[]>>;
    let dashboard_list: ReturnType<typeof signal<any[]>>;
    let region_id: ReturnType<typeof signal<string>>;
    let building_id: ReturnType<typeof signal<string>>;
    let router: { navigate: Mock };
    let route: any;
    let dashboards_service: any;
    let org: any;

    const create_component = createComponentFactory({
        component: AlertsComponent,
        detectChanges: false,
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
    });

    const build = (query_params: Record<string, string> = {}, id = null) => {
        vi.mocked(showSystem).mockReturnValue(Promise.resolve(null) as any);
        dashboard_alerts = signal<any[]>([]);
        dashboard_list = signal<any[]>([]);
        region_id = signal('');
        building_id = signal('');
        router = { navigate: vi.fn() };
        route = {
            snapshot: {
                queryParams: query_params,
                paramMap: { get: vi.fn(() => id) },
            },
        };
        dashboards_service = {
            dashboard_alerts,
            dashboard_list,
            region_id,
            building_id,
            loadDashboards: vi.fn(),
            setDashboard: vi.fn(() => Promise.resolve()),
            listenForDashboardAlerts: vi.fn(),
            setRegionFromParams: vi.fn(),
        };
        org = { regions: [], buildings: [], region: null, building: null };
        return create_component({
            providers: [
                { provide: Router, useValue: router },
                { provide: ActivatedRoute, useValue: route },
                MockProvider(DashboardsService, dashboards_service),
                MockProvider(OrganisationService, org),
            ],
        });
    };

    it('should create', () => {
        spectator = build();
        expect(spectator.component).toBeTruthy();
    });

    it('should count alerts by severity and status', () => {
        spectator = build();
        dashboard_alerts.set([
            make_alert({ id: '1', severity: 'critical', status: 'open' }),
            make_alert({ id: '2', severity: 'high', status: 'open' }),
            make_alert({ id: '3', severity: 'medium', status: 'closed' }),
            make_alert({ id: '4', severity: 'low', status: 'open' }),
        ]);
        expect(spectator.component.critical_alerts()).toBe(1);
        expect(spectator.component.warning_alerts()).toBe(1);
        expect(spectator.component.info_alerts()).toBe(2);
        expect(spectator.component.open_alerts()).toBe(3);
    });

    it('should filter the alert list by severity, device type and status', () => {
        spectator = build();
        dashboard_alerts.set([
            make_alert({ id: '1', severity: 'critical', type: 'display', status: 'open' }),
            make_alert({ id: '2', severity: 'high', type: 'audio', status: 'closed' }),
            make_alert({ id: '3', severity: 'critical', type: 'audio', status: 'open' }),
        ]);

        spectator.component.severity.set('critical');
        expect(spectator.component.filtered_alerts().map((a) => a.id)).toEqual([
            '1',
            '3',
        ]);

        spectator.component.device_type.set('audio');
        expect(spectator.component.filtered_alerts().map((a) => a.id)).toEqual([
            '3',
        ]);

        spectator.component.severity.set('');
        spectator.component.device_type.set('');
        spectator.component.status.set('closed');
        expect(spectator.component.filtered_alerts().map((a) => a.id)).toEqual([
            '2',
        ]);
    });

    it('should show the loading state until the first alert arrives', () => {
        spectator = build();
        // waiting for first alert and empty list -> loading
        expect(spectator.component.show_alert_list_loading()).toBe(true);
        dashboard_alerts.set([make_alert()]);
        expect(spectator.component.show_alert_list_loading()).toBe(false);
    });

    it('should return an empty location name when none is cached', () => {
        spectator = build();
        expect(spectator.component.locationName('sys-1')).toBe('');
    });

    it('should load filter values from query parameters on init', () => {
        spectator = build({
            search: 'projector',
            severity: 'critical',
            device_type: 'display',
            status: 'open',
        });
        spectator.component.ngOnInit();
        expect(spectator.component.search()).toBe('projector');
        expect(spectator.component.severity()).toBe('critical');
        expect(spectator.component.device_type()).toBe('display');
        expect(spectator.component.status()).toBe('open');
        expect(dashboards_service.loadDashboards).toHaveBeenCalled();
    });

    it('should apply all-regions scope when the region param is "all"', () => {
        spectator = build({ region: 'all' });
        spectator.component.ngOnInit();
        expect(dashboards_service.setRegionFromParams).toHaveBeenCalledWith(
            '',
            '',
        );
    });

    it('should apply a specific region and building from query params', () => {
        const region = { id: 'region-1' };
        const building = { id: 'building-1' };
        spectator = build({ region: 'region-1', building: 'building-1' });
        const injected_org: any = spectator.inject(OrganisationService);
        injected_org.regions = [region];
        injected_org.buildings = [building];
        spectator.component.ngOnInit();
        expect(injected_org.region).toBe(region);
        expect(dashboards_service.setRegionFromParams).toHaveBeenCalledWith(
            'region-1',
            'building-1',
        );
        expect(injected_org.building).toBe(building);
    });

    it('should navigate to the selected dashboard route', () => {
        vi.useFakeTimers();
        spectator = build();
        spectator.component.setDashboard('dash-9');
        vi.advanceTimersByTime(100);
        expect(router.navigate).toHaveBeenCalledWith(['/alerts', 'dash-9']);
        vi.clearAllTimers();
        vi.useRealTimers();
    });
});
