import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { AuthenticatedImageDirective } from '@placeos/components';
import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportOverallComponent } from 'apps/concierge/src/app/reports/catering/catering-report-overall.component';
import { CateringReportComponent } from 'apps/concierge/src/app/reports/catering/catering-report.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';
import { signal } from '@angular/core';

describe('CateringReportComponent', () => {
    let spectator: SpectatorRouting<CateringReportComponent>;
    const createComponent = createRoutingFactory({
        component: CateringReportComponent,
        declarations: [
            MockComponent(CateringReportOverallComponent),
            MockComponent(CateringReportItemsComponent),
            MockComponent(CateringReportOrdersComponent),
            MockComponent(ReportsOptionsComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(ReportsStateService, {
                stats: signal({ count: 0 }),
                loading: signal(true),
                setOptions: jest.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should set report type to catering', () => {
        expect(
            spectator.inject(ReportsStateService).setOptions,
        ).toHaveBeenCalledWith({ type: 'events' });
    });
});
