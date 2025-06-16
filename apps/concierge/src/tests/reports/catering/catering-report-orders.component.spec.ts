import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';

import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';

describe('CateringReportOrdersComponent', () => {
    let spectator: Spectator<CateringReportOrdersComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportOrdersComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        providers: [
            MockProvider(CateringReportStateService, {
                catering_orders: new BehaviorSubject({}),
                downloadOrders: jest.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MockModule(MatTooltipModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow downloading orders', () => {
        const service = spectator.inject(CateringReportStateService);
        expect(service.downloadOrders).not.toBeCalled();
        spectator.click('button');
        expect(service.downloadOrders).toBeCalled();
    });
});
