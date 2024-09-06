import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringOrderListComponent } from '../lib/catering-order-list.component';
import { CateringOrdersService } from '../lib/catering-orders.service';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';

describe('CateringOrderListComponent', () => {
    let spectator: Spectator<CateringOrderListComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderListComponent,
        declarations: [MockComponent(SimpleTableComponent)],
        providers: [
            MockProvider(CateringOrdersService, {
                filtered: new BehaviorSubject([]),
                loading: new BehaviorSubject(false),
                startPolling: jest.fn(),
                stopPolling: jest.fn(),
            }),
        ],
        imports: [MockModule(MatProgressBarModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show loading bar', () => {
        expect('mat-progress-bar').toExist();
    });

    it('should show table', () => {
        expect('simple-table').toExist();
    });
});
