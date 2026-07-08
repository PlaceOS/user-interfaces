import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { BehaviorSubject } from 'rxjs';

import { LockersReportChartsComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-charts.component';
import { LockersReportDailyUsageComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component';
import { LockersReportListComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-list.component';
import { LockersReportOverallComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report-overall.component';
import { LockersReportComponent } from 'apps/concierge/src/app/reports/lockers/lockers-report.component';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';

describe('LockersReportComponent', () => {
    let spectator: Spectator<LockersReportComponent>;
    let query_params: BehaviorSubject<any>;
    let bookings: ReturnType<typeof signal<any>>;
    let loading: ReturnType<typeof signal<string>>;
    let active_building: ReturnType<typeof signal<any>>;
    let set_options: any;
    let generate_report: any;
    let download_report: any;

    const createComponent = createComponentFactory({
        component: LockersReportComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(LockersReportChartsComponent),
            MockComponent(LockersReportOverallComponent),
            MockComponent(LockersReportDailyUsageComponent),
            MockComponent(LockersReportListComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [MockProvider(SettingsService, {} as any)],
    });

    beforeEach(() => {
        query_params = new BehaviorSubject(
            convertToParamMap({
                start: '100',
                end: '200',
                zone_ids: 'level-1,level-2',
            }),
        );
        bookings = signal([]);
        loading = signal('');
        active_building = signal({ id: 'building-1' });
        set_options = vi.fn();
        generate_report = vi.fn();
        download_report = vi.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: LockersReportService,
                    useValue: {
                        bookings,
                        loading,
                        setOptions: set_options,
                        generateReport: generate_report,
                        downloadReport: download_report,
                    },
                },
                {
                    provide: SettingsService,
                    useValue: {
                        theme: 'dark',
                        get: vi.fn((key: string) => {
                            if (key === 'app.logo_light')
                                return { src: 'light-logo.svg' };
                            if (key === 'app.logo_dark')
                                return { src: 'dark-logo.svg' };
                            return undefined;
                        }),
                    },
                },
                { provide: OrganisationService, useValue: { active_building } },
                {
                    provide: ActivatedRoute,
                    useValue: { queryParamMap: query_params },
                },
            ],
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should apply query params to report options', () => {
        expect(set_options).toHaveBeenCalledWith({ start: 100 });
        expect(set_options).toHaveBeenCalledWith({ end: 200 });
        expect(set_options).toHaveBeenCalledWith({
            zones: ['level-1', 'level-2'],
        });
    });

    it('should clear zones when query params omit them', () => {
        query_params.next(convertToParamMap({ start: '100', end: '200' }));
        expect(set_options).toHaveBeenCalledWith({ zones: [] });
    });

    it('should expose the booking count from the service', () => {
        expect(spectator.component.total_count()).toBe(0);
        bookings.set([{ id: 'b1' }, { id: 'b2' }]);
        expect(spectator.component.total_count()).toBe(2);
    });

    it('should delegate generate and download actions to the service', () => {
        spectator.component.generateReport();
        spectator.component.downloadReport();
        expect(generate_report).toHaveBeenCalled();
        expect(download_report).toHaveBeenCalled();
    });

    it('should select the dark logo when the theme is dark', () => {
        expect(spectator.component.logo()).toEqual({ src: 'dark-logo.svg' });
    });
});
