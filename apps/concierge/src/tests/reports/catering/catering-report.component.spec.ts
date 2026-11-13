import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportOverallComponent } from 'apps/concierge/src/app/reports/catering/catering-report-overall.component';
import { CateringReportComponent } from 'apps/concierge/src/app/reports/catering/catering-report.component';
import { ReportMetricGuideComponent } from 'apps/concierge/src/app/reports/report-metric-guide.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

describe('CateringReportComponent', () => {
    let spectator: Spectator<CateringReportComponent>;
    let use_bookings = false;
    const query_params = () =>
        new BehaviorSubject(
            convertToParamMap({ start: '100', end: '200', zones: 'level-1' }),
        );

    const createComponent = createComponentFactory({
        component: CateringReportComponent,
        declarations: [
            MockComponent(ReportsOptionsComponent),
            MockComponent(ReportMetricGuideComponent),
            MockComponent(CateringReportOverallComponent),
            MockComponent(CateringReportItemsComponent),
            MockComponent(CateringReportOrdersComponent),
        ],
        providers: [
            MockProvider(ReportsStateService, {
                stats: signal({ count: 0 }),
                loading: signal(''),
                setOptions: vi.fn(),
            } as Partial<ReportsStateService>),
            MockProvider(OrganisationService, {
                active_building: signal(new Building({ id: 'bld-1' })),
            } as Partial<OrganisationService>),
            MockProvider(SettingsService, {
                get: ((key: string) =>
                    key === 'app.catering.use_bookings'
                        ? use_bookings
                        : undefined) as SettingsService['get'],
            }),
        ],
        detectChanges: false,
    });

    beforeEach(() => (use_bookings = false));

    const setup = () => {
        spectator = createComponent({
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: { queryParamMap: query_params() },
                },
            ],
        });
        spectator.detectChanges();
        return spectator.inject(ReportsStateService).setOptions;
    };

    it.each([
        ['catering', true],
        ['events', false],
    ] as const)(
        'should use the %s report type when use_bookings is %s',
        (type, setting) => {
            use_bookings = setting;

            expect(setup()).toHaveBeenCalledWith({ type });
        },
    );

    it('should apply the report range and zones from the query params', () => {
        expect(setup()).toHaveBeenCalledWith({
            start: 100,
            end: 200,
            zones: ['level-1'],
        });
    });
});
