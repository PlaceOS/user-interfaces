import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BehaviorSubject } from 'rxjs';

import { AssetReportDailyUsageComponent } from 'apps/concierge/src/app/reports/assets/asset-report-daily-usage.component';
import { AssetReportExpiredItemsComponent } from 'apps/concierge/src/app/reports/assets/asset-report-expired-items.component';
import { AssetReportOverallComponent } from 'apps/concierge/src/app/reports/assets/asset-report-overall.component';
import { AssetReportProductUsageComponent } from 'apps/concierge/src/app/reports/assets/asset-report-product-usage.component';
import { AssetReportUsersComponent } from 'apps/concierge/src/app/reports/assets/asset-report-users.component';
import { AssetsReportComponent } from 'apps/concierge/src/app/reports/assets/assets-report.component';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { MockComponent } from 'ng-mocks';

describe('AssetsReportComponent', () => {
    let spectator: Spectator<AssetsReportComponent>;
    let query_params: BehaviorSubject<unknown>;
    let stats: ReturnType<typeof signal<unknown>>;
    let loading: ReturnType<typeof signal<boolean>>;
    let set_options: unknown;
    let generate_report: unknown;
    let download_report: unknown;

    const createComponent = createComponentFactory({
        component: AssetsReportComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(AssetReportOverallComponent),
            MockComponent(AssetReportDailyUsageComponent),
            MockComponent(AssetReportProductUsageComponent),
            MockComponent(AssetReportUsersComponent),
            MockComponent(AssetReportExpiredItemsComponent),
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
        stats = signal({ total_booked_items: 0 });
        loading = signal(false);
        set_options = vi.fn();
        generate_report = vi.fn();
        download_report = vi.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: AssetsReportService,
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

    it('should apply query params to report options', () => {
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

    it('should expose total count and has_data from stats', () => {
        expect(spectator.component.total_count()).toBe(0);
        expect(spectator.component.has_data()).toBe(false);
        stats.set({ total_booked_items: 12 });
        expect(spectator.component.total_count()).toBe(12);
        expect(spectator.component.has_data()).toBe(true);
    });

    it('should delegate generate and download actions to the service', () => {
        spectator.component.generateReport();
        spectator.component.downloadReport();
        expect(generate_report).toHaveBeenCalled();
        expect(download_report).toHaveBeenCalled();
    });
});
