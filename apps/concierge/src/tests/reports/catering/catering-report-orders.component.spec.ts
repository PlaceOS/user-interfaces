import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTableComponent, IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';

describe('CateringReportOrdersComponent', () => {
    let spectator: Spectator<CateringReportOrdersComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportOrdersComponent,
        declarations: [
            MockComponent(CustomTableComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(CateringReportStateService, {
                catering_orders: new BehaviorSubject({}),
                downloadOrders: jest.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
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
