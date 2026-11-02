import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';
import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportOverallComponent } from 'apps/concierge/src/app/reports/catering/catering-report-overall.component';
import { CateringReportComponent } from 'apps/concierge/src/app/reports/catering/catering-report.component';
import { ReportsOptionsComponent } from 'apps/concierge/src/app/reports/reports-options.component';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

describe('CateringReportComponent', () => {
    let spectator: SpectatorRouting<CateringReportComponent>;
    const createComponent = createRoutingFactory({
        component: CateringReportComponent,
        declarations: [
            MockComponent(CateringReportOverallComponent),
            MockComponent(CateringReportItemsComponent),
            MockComponent(CateringReportOrdersComponent),
            MockComponent(ReportsOptionsComponent),
        ],
        providers: [
            MockProvider(ReportsStateService, {
                stats: signal({ count: 0 }),
                loading: signal(true),
                setOptions: vi.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should set report type to catering', () => {
        expect(
            spectator.inject(ReportsStateService).setOptions,
        ).toHaveBeenCalledWith({ type: 'events' });
    });
});
