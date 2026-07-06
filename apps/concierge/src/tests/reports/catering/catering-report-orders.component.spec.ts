import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { signal } from '@angular/core';

import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';

import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { CateringReportOrdersComponent } from 'apps/concierge/src/app/reports/catering/catering-report-orders.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';

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
                catering_orders: signal({}),
                downloadOrders: vi.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MockModule(MatTooltipModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow downloading orders', () => {
        const service = spectator.inject(CateringReportStateService);
        expect(service.downloadOrders).not.toHaveBeenCalled();
        spectator.click('button');
        expect(service.downloadOrders).toHaveBeenCalled();
    });
});
