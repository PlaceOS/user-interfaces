import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { PlaceSystem, showSystem } from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';
import type { Mock } from 'vitest';

import { AlertsComponent } from '../app/alerts.component';
import { DashboardsService } from '../app/dashboards/dashboards.service';
import { StagehandPageComponent } from '../app/ui/stagehand-page.component';

vi.mock('@placeos/ts-client', { spy: true });

const make_alert = (overrides: Record<string, unknown> = {}) => ({
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
    let dashboard_alerts: ReturnType<typeof signal<unknown[]>>;
    let dashboard_list: ReturnType<typeof signal<unknown[]>>;
    let region_id: ReturnType<typeof signal<string>>;
    let building_id: ReturnType<typeof signal<string>>;
    let router: { navigate: Mock };
    let route: unknown;
    let dashboards_service: any;

    const create_component = createComponentFactory({
        component: AlertsComponent,
        detectChanges: false,
        declarations: [
            MockComponent(StagehandPageComponent),
            MockComponent(SimpleTableComponent),
            MockComponent(IconComponent),
        ],
    });

    const build = (query_params: Record<string, string> = {}, id = null) => {
        vi.mocked(showSystem).mockReturnValue(Promise.resolve(null));
        dashboard_alerts = signal<unknown[]>([]);
        dashboard_list = signal<unknown[]>([]);
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
            applyLocationParams: vi.fn(),
            location_query_params: signal({ region: 'all' }),
        };
        return create_component({
            providers: [
                { provide: Router, useValue: router },
                { provide: ActivatedRoute, useValue: route },
                MockProvider(DashboardsService, dashboards_service),
            ],
        });
    };

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
        expect(spectator.component.open_alerts()).toBe(3);
    });

    it('should filter the alert list by severity, device type and status', () => {
        spectator = build();
        dashboard_alerts.set([
            make_alert({
                id: '1',
                severity: 'critical',
                type: 'display',
                status: 'open',
            }),
            make_alert({
                id: '2',
                severity: 'high',
                type: 'audio',
                status: 'closed',
            }),
            make_alert({
                id: '3',
                severity: 'critical',
                type: 'audio',
                status: 'open',
            }),
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

    it("should name each alert's location after its system", async () => {
        spectator = build();
        vi.mocked(showSystem).mockImplementation((id: string) =>
            Promise.resolve(
                new PlaceSystem(
                    id === 'sys-1'
                        ? { id, name: 'room-1', display_name: 'Room 1' }
                        : { id, name: 'room-2' },
                ),
            ),
        );
        dashboard_alerts.set([
            make_alert({ location: 'sys-1' }),
            make_alert({ id: 'a-2', location: 'sys-2' }),
        ]);
        expect(spectator.component.locationName('sys-1')).toBe('');
        TestBed.tick();
        await vi.waitFor(() =>
            expect(spectator.component.locationName('sys-1')).toBe('Room 1'),
        );
        expect(spectator.component.locationName('sys-2')).toBe('room-2');
    });

    it('should ask for each location name once', async () => {
        spectator = build();
        vi.mocked(showSystem).mockClear();
        dashboard_alerts.set([make_alert()]);
        TestBed.tick();
        dashboard_alerts.set([make_alert(), make_alert({ id: 'a-2' })]);
        TestBed.tick();
        await Promise.resolve();
        dashboard_alerts.set([make_alert()]);
        TestBed.tick();
        expect(showSystem).toHaveBeenCalledTimes(1);
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

    it('should apply the region and building query params on init', () => {
        const params = { region: 'region-1', building: 'building-1' };
        spectator = build(params);
        spectator.component.ngOnInit();
        expect(dashboards_service.applyLocationParams).toHaveBeenCalledWith(
            params,
        );
    });

    it('should keep the filters and location in the URL', () => {
        spectator = build({ search: 'projector' });
        // the first tick runs ngOnInit
        TestBed.tick();
        spectator.component.severity.set('critical');
        TestBed.tick();
        expect(router.navigate).toHaveBeenLastCalledWith([], {
            relativeTo: route,
            queryParams: {
                search: 'projector',
                severity: 'critical',
                device_type: undefined,
                status: undefined,
                region: 'all',
            },
            replaceUrl: true,
        });
    });

    it('should open on the dashboard in the route and listen for its alerts', async () => {
        vi.useFakeTimers();
        spectator = build({}, 'dash-3');
        spectator.component.ngOnInit();
        await vi.advanceTimersByTimeAsync(300);

        expect(dashboards_service.setDashboard).toHaveBeenCalledTimes(1);
        expect(dashboards_service.setDashboard).toHaveBeenCalledWith('dash-3');
        expect(spectator.component.dashboard()).toBe('dash-3');
        expect(
            dashboards_service.listenForDashboardAlerts,
        ).toHaveBeenCalledWith(true);
        vi.clearAllTimers();
        vi.useRealTimers();
    });

    it('should navigate to the selected dashboard route, keeping the filters', () => {
        vi.useFakeTimers();
        spectator = build();
        spectator.component.setDashboard('dash-9');
        vi.advanceTimersByTime(100);
        expect(router.navigate).toHaveBeenCalledWith(['/alerts', 'dash-9'], {
            queryParamsHandling: 'preserve',
        });
        vi.clearAllTimers();
        vi.useRealTimers();
    });
});
