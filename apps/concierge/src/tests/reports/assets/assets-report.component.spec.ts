import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
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
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';

describe('AssetsReportComponent', () => {
    let spectator: Spectator<AssetsReportComponent>;
    let query_params: BehaviorSubject<any>;
    let stats: ReturnType<typeof signal<any>>;
    let loading: ReturnType<typeof signal<boolean>>;
    let active_building: ReturnType<typeof signal<any>>;
    let set_options: jest.Mock;
    let generate_report: jest.Mock;
    let download_report: jest.Mock;

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
        stats = signal({ total_booked_items: 0 });
        loading = signal(false);
        active_building = signal({ id: 'building-1' });
        set_options = jest.fn();
        generate_report = jest.fn();
        download_report = jest.fn();
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
                    provide: SettingsService,
                    useValue: {
                        theme: 'light',
                        get: jest.fn((key: string) => {
                            if (key === 'app.logo_light')
                                return { src: 'light-logo.svg' };
                            if (key === 'app.logo_dark')
                                return { src: 'dark-logo.svg' };
                            return undefined;
                        }),
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: { active_building },
                },
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

    it('should select the light logo by default', () => {
        expect(spectator.component.logo()).toEqual({ src: 'light-logo.svg' });
    });
});
