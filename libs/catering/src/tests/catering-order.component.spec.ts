import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { IconComponent } from '@placeos/components';

import { CateringOrderComponent } from '../lib/catering-order.component';
import { CateringOrderItemComponent } from '../lib/catering-order-item.component';
import { CateringOrdersService } from '../lib/catering-orders.service';
import { CateringOrder } from '../lib/catering-order.class';
import { format } from 'date-fns';
import { SettingsService } from '@placeos/common';

describe('CateringOrderComponent', () => {
    let spectator: Spectator<CateringOrderComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderComponent,
        declarations: [
            MockComponent(CateringOrderItemComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(CateringOrdersService, {
                updateStatus: jest.fn(),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                time_format: 'h:mm a',
            }),
        ],
        imports: [MockModule(MatMenuModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show order details', () => {
        const order = new CateringOrder({ event: { date: 1 } as any });
        spectator.setInput({ order });
        spectator.detectChanges();
        expect('[time]').toContainText(format(1, 'h:mm a'));
    });

    it('should list order items', () => {
        expect('[catering-order-item]').not.toExist();
        let order = new CateringOrder({ items: [{}] as any });
        spectator.setInput({ order });
        spectator.detectChanges();
        expect('[catering-order-item]').toExist();
        order = new CateringOrder({ items: [] });
        spectator.setInput({ order });
        spectator.detectChanges();
        expect('[catering-order-item]').not.toExist();
    });

    it('should allow user to update order status', () => {
        const order = new CateringOrder();
        spectator.setInput({ order });
        spectator.detectChanges();
        spectator.click('button[name="status"]');
        spectator.detectChanges();
        // spectator.click(document.querySelector('mat-option'));
        // spectator.detectChanges();
        spectator.component.updateStatus('pending');
        expect(
            spectator.inject(CateringOrdersService).updateStatus
        ).toHaveBeenCalledWith(order, 'pending');
    });
});
