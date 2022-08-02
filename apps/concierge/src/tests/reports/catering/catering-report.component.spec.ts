import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportOverallComponent } from 'apps/concierge/src/app/reports/catering/catering-report-overall.component';
import { CateringReportComponent } from 'apps/concierge/src/app/reports/catering/catering-report.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';
import { BehaviorSubject } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';

describe('CateringReportComponent', () => {
    let spectator: Spectator<CateringReportComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportComponent,
        declarations: [
            MockComponent(CateringReportOverallComponent),
            MockComponent(CateringReportItemsComponent),
            MockComponent(CateringReportOrdersComponent),
            MockComponent(ReportsOptionsComponent)
        ],
        providers: [
            {
                provide: ReportsStateService,
                useValue: {
                    stats: new BehaviorSubject({ count: 0 }),
                    loading: new BehaviorSubject(true),
                    setOptions: jest.fn(),
                },
            },
            { provide: Router, useValue: {} },
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should set report type to catering', () => {
        expect(
            spectator.inject(ReportsStateService).setOptions
        ).toHaveBeenCalledWith({ type: 'events' });
    });
});
