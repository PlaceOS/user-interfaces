import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CateringOrderComponent } from '../lib/catering-order.component';
import { CateringOrderListComponent } from '../lib/catering-order-list.component';
import { CateringOrdersService } from '../lib/catering-orders.service';

describe('CateringOrderListComponent', () => {
    let spectator: Spectator<CateringOrderListComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderListComponent,
        declarations: [MockComponent(CateringOrderComponent)],
        providers: [
            {
                provide: CateringOrdersService,
                useValue: {
                    filtered: new BehaviorSubject([]),
                    loading: new BehaviorSubject(false),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show loading bar', () => {
        expect('mat-progress-bar').not.toExist();
        const service = spectator.inject(CateringOrdersService);
        (service.loading as any).next(true);
        spectator.detectChanges();
        expect('mat-progress-bar').toExist();
        (service.loading as any).next(false);
        spectator.detectChanges();
        expect('mat-progress-bar').not.toExist();
    });

    it('should have an empty state', () => {
        expect('[empty]').toExist();
        const service = spectator.inject(CateringOrdersService);
        (service.filtered as any).next([{}]);
        spectator.detectChanges();
        expect('[empty]').not.toExist();
        (service.filtered as any).next([]);
        spectator.detectChanges();
        expect('[empty]').toExist();
    });

    it('should list orders', () => {
        expect('catering-order').not.toExist();
        const service = spectator.inject(CateringOrdersService);
        (service.filtered as any).next([{}]);
        spectator.detectChanges();
        expect('catering-order').toExist();
        expect('catering-order').toHaveLength(1);
        (service.filtered as any).next([{}, {}]);
        spectator.detectChanges();
        expect('catering-order').toExist();
        expect('catering-order').toHaveLength(2);
        (service.filtered as any).next([]);
        spectator.detectChanges();
        expect('catering-order').not.toExist();
    });
});
