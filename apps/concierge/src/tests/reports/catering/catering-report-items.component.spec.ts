import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTableComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';
import { Router } from '@angular/router';
import { SettingsService } from '@placeos/common';

describe('CateringReportItemsComponent', () => {
    let spectator: Spectator<CateringReportItemsComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportItemsComponent,
        declarations: [MockComponent(CustomTableComponent)],
        providers: [
            MockProvider(CateringReportStateService, {
                catering_items: new BehaviorSubject({}),
                downloadOrders: jest.fn(),
            } as any),
            MockProvider(Router, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
