import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { OrganisationService, SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';
import { ReportSpacesChartsComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-charts.component';
import { ReportSpacesOverallListComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component';
import { ReportSpacesOverallComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-overall.component';
import { ReportSpacesSpaceListingComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component';
import { ReportSpacesUserListingComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component';
import { ReportSpacesComponent } from 'apps/concierge/src/app/reports/spaces/report-spaces.component';

describe('ReportSpacesComponent', () => {
    let spectator: Spectator<ReportSpacesComponent>;
    let query_params: BehaviorSubject<any>;
    let stats: ReturnType<typeof signal<any>>;
    let loading: ReturnType<typeof signal<string>>;
    let set_options: jest.Mock;
    let generate: jest.Mock;
    let download: jest.Mock;

    const createComponent = createComponentFactory({
        component: ReportSpacesComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(ReportSpacesOverallComponent),
            MockComponent(ReportSpacesChartsComponent),
            MockComponent(ReportSpacesOverallListComponent),
            MockComponent(ReportSpacesSpaceListingComponent),
            MockComponent(ReportSpacesUserListingComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        imports: [MatProgressSpinnerModule],
        providers: [
            MockProvider(ReportsStateService, {
                stats: signal<any>({ count: 0 }),
                loading: signal(''),
                setOptions: jest.fn(),
                generateReport: jest.fn(),
                downloadReport: jest.fn(),
            } as any),
            MockProvider(SettingsService, { theme: 'light', get: jest.fn() }),
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
        stats = signal<any>({ count: 0 });
        loading = signal('');
        set_options = jest.fn();
        generate = jest.fn();
        download = jest.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: {
                        stats,
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
                        get: jest.fn((key: string) =>
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

    it('should default the report type to events on init', () => {
        expect(set_options).toHaveBeenCalledWith({ type: 'events' });
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

    it('should derive total_count and has_data from the report stats', () => {
        expect(spectator.component.total_count()).toBe(0);
        expect(spectator.component.has_data()).toBe(false);
        stats.set({ total_count: 12, count: 9 });
        expect(spectator.component.total_count()).toBe(12);
        expect(spectator.component.has_data()).toBe(true);
    });

    it('should fall back to count when total_count is absent', () => {
        stats.set({ count: 5 });
        expect(spectator.component.total_count()).toBe(5);
    });

    it('should select the light logo by default', () => {
        expect(spectator.component.logo()).toEqual({ src: 'light.svg' });
    });

    it('should delegate generate and download to the report state', () => {
        spectator.component.generateReport();
        spectator.component.downloadReport();
        expect(generate).toHaveBeenCalled();
        expect(download).toHaveBeenCalled();
    });
});
