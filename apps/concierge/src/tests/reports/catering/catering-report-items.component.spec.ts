import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTableComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringReportItemsComponent } from 'apps/concierge/src/app/reports/catering/catering-report-items.component';
import { CateringReportStateService } from 'apps/concierge/src/app/reports/catering/catering-report-state.service';
import { Router } from '@angular/router';

describe('CateringReportItemsComponent', () => {
    let spectator: Spectator<CateringReportItemsComponent>;
    const createComponent = createComponentFactory({
        component: CateringReportItemsComponent,
        declarations: [MockComponent(CustomTableComponent)],
        providers: [
            {
                provide: CateringReportStateService,
                useValue: {
                    catering_items: new BehaviorSubject({}),
                    downloadOrders: jest.fn(),
                },
            },
            { provide: Router, useValue: {} },
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
