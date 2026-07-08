import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { ParkingReportChartsComponent } from 'apps/concierge/src/app/reports/parking/parking-report-charts.component';
import { ParkingReportDailyUsageComponent } from 'apps/concierge/src/app/reports/parking/parking-report-daily-usage.component';
import { ParkingReportListComponent } from 'apps/concierge/src/app/reports/parking/parking-report-list.component';
import { ParkingReportOverallComponent } from 'apps/concierge/src/app/reports/parking/parking-report-overall.component';
import { ParkingReportComponent } from 'apps/concierge/src/app/reports/parking/parking-report.component';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';

describe('ParkingReportComponent', () => {
    let spectator: Spectator<ParkingReportComponent>;
    let query_params: BehaviorSubject<any>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let set_options: any;
    let generate: any;
    let download: any;

    const createComponent = createComponentFactory({
        component: ParkingReportComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(ParkingReportOverallComponent),
            MockComponent(ParkingReportChartsComponent),
            MockComponent(ParkingReportListComponent),
            MockComponent(ParkingReportDailyUsageComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(ParkingReportService, {
                bookings: signal<any[]>([]),
                loading: signal(''),
                setOptions: vi.fn(),
                generateReport: vi.fn(),
                downloadReport: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                theme: 'light',
                get: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'building-1' }),
            } as any),
            MockProvider(ActivatedRoute, {
                queryParamMap: new BehaviorSubject(convertToParamMap({})),
            } as any),
        ],
    });

    beforeEach(() => {
        query_params = new BehaviorSubject(
            convertToParamMap({
                start: '100',
                end: '200',
                zone_ids: 'lvl-1,lvl-2',
            }),
        );
        bookings = signal<any[]>([]);
        set_options = vi.fn();
        generate = vi.fn();
        download = vi.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: ParkingReportService,
                    useValue: {
                        bookings,
                        loading: signal(''),
                        setOptions: set_options,
                        generateReport: generate,
                        downloadReport: download,
                    },
                },
                {
                    provide: SettingsService,
                    useValue: {
                        theme: 'light',
                        get: vi.fn((key: string) =>
                            key === 'app.logo_light'
                                ? { src: 'light.svg' }
                                : undefined,
                        ),
                    },
                },
                {
                    provide: ActivatedRoute,
                    useValue: { queryParamMap: query_params },
                },
            ],
        });
    });

    it('should apply query params to the report options', () => {
        expect(set_options).toHaveBeenCalledWith({ start: 100 });
        expect(set_options).toHaveBeenCalledWith({ end: 200 });
        expect(set_options).toHaveBeenCalledWith({
            zones: ['lvl-1', 'lvl-2'],
        });
    });

    it('should clear zones when the query params omit them', () => {
        query_params.next(convertToParamMap({ start: '100', end: '200' }));
        expect(set_options).toHaveBeenCalledWith({ zones: [] });
    });

    it('should expose the booking count as the total', () => {
        bookings.set([{ asset_id: 'a' }, { asset_id: 'b' }]);
        expect(spectator.component.total_count()).toBe(2);
    });

    it('should select the light logo by default', () => {
        expect(spectator.component.logo()).toEqual({ src: 'light.svg' });
    });

    it('should delegate generate and download to the report service', () => {
        spectator.component.generateReport();
        spectator.component.downloadReport();
        expect(generate).toHaveBeenCalled();
        expect(download).toHaveBeenCalled();
    });
});
