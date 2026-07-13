import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { VisitorReportDailyUsageComponent } from 'apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component';
import { VisitorReportListComponent } from 'apps/concierge/src/app/reports/visitors/visitor-report-list.component';
import { VisitorReportOverallComponent } from 'apps/concierge/src/app/reports/visitors/visitor-report-overall.component';
import { VisitorsReportComponent } from 'apps/concierge/src/app/reports/visitors/visitors-report.component';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';

describe('VisitorsReportComponent', () => {
    let spectator: Spectator<VisitorsReportComponent>;
    let query_params: BehaviorSubject<any>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let loading: ReturnType<typeof signal<boolean>>;
    let set_options: any;
    let generate: any;
    let download: any;

    const createComponent = createComponentFactory({
        component: VisitorsReportComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(VisitorReportOverallComponent),
            MockComponent(VisitorReportDailyUsageComponent),
            MockComponent(VisitorReportListComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(VisitorsReportService, {
                bookings: signal<any[]>([]),
                loading: signal(false),
                setOptions: vi.fn(),
                generateReport: vi.fn(),
                downloadReport: vi.fn(),
            } as any),
            MockProvider(SettingsService, { theme: 'light', get: vi.fn() }),
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
        loading = signal(false);
        set_options = vi.fn();
        generate = vi.fn();
        download = vi.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: VisitorsReportService,
                    useValue: {
                        bookings,
                        loading,
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

    it('should expose the booking count and has_data flag', () => {
        expect(spectator.component.total_count()).toBe(0);
        expect(spectator.component.has_data()).toBe(false);
        bookings.set([{ asset_id: 'a' }]);
        expect(spectator.component.total_count()).toBe(1);
        expect(spectator.component.has_data()).toBe(true);
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
