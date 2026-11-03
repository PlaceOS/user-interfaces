import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BehaviorSubject } from 'rxjs';

import { ReportDesksLevelListComponent } from 'apps/concierge/src/app/reports/desks/report-desks-level-list.component';
import { ReportDesksComponent } from 'apps/concierge/src/app/reports/desks/report-desks.component';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportUsageChartsComponent } from 'apps/concierge/src/app/reports/report-usage-charts.component';
import { ReportUsageListComponent } from 'apps/concierge/src/app/reports/report-usage-list.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';
import { MockComponent } from 'ng-mocks';

describe('ReportDesksComponent', () => {
    let spectator: Spectator<ReportDesksComponent>;
    let query_params: BehaviorSubject<unknown>;
    let stats: ReturnType<typeof signal<unknown>>;
    let loading: ReturnType<typeof signal<string>>;
    let set_options: unknown;
    let generate_report: unknown;
    let download_report: unknown;

    const createComponent = createComponentFactory({
        component: ReportDesksComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(ReportUsageChartsComponent),
            MockComponent(ReportDesksLevelListComponent),
            MockComponent(ReportUsageListComponent),
        ],
    });

    beforeEach(() => {
        query_params = new BehaviorSubject(
            convertToParamMap({
                start: '100',
                end: '200',
                zone_ids: 'level-1,level-2',
            }),
        );
        stats = signal({
            total_count: 20,
            count: 12,
            cancelled_count: 3,
            deleted_count: 1,
            utilisation: 0.25,
        });
        loading = signal('');
        set_options = vi.fn();
        generate_report = vi.fn();
        download_report = vi.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: {
                        stats,
                        loading,
                        setOptions: set_options,
                        generateReport: generate_report,
                        downloadReport: download_report,
                    },
                },
                {
                    provide: ActivatedRoute,
                    useValue: { queryParamMap: query_params },
                },
            ],
        });
    });

    it('should set the report type to desks and apply query params', () => {
        expect(set_options).toHaveBeenCalledWith({ type: 'desks' });
        expect(set_options).toHaveBeenCalledWith({
            start: 100,
            end: 200,
            zones: ['level-1', 'level-2'],
        });
    });

    it('should clear zones when query params omit them', () => {
        query_params.next(convertToParamMap({ start: '100', end: '200' }));
        expect(set_options).toHaveBeenCalledWith({
            start: 100,
            end: 200,
            zones: [],
        });
    });

    it('should derive booking counts and utilisation from stats', () => {
        expect(spectator.component.total_count()).toBe(20);
        expect(spectator.component.active_count()).toBe(12);
        expect(spectator.component.cancelled_count()).toBe(3);
        expect(spectator.component.deleted_count()).toBe(1);
        expect(spectator.component.utilisation()).toBe('25.0');
    });

    it('should delegate generate and download actions to the service', () => {
        spectator.component.generateReport();
        spectator.component.downloadReport();
        expect(generate_report).toHaveBeenCalled();
        expect(download_report).toHaveBeenCalled();
    });
});
