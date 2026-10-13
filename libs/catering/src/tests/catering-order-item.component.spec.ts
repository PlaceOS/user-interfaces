import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { CateringOrderItemComponent } from '../lib/catering-order-item.component';

describe('CateringOrderItemComponent', () => {
    let spectator: Spectator<CateringOrderItemComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderItemComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        localStorage.removeItem('PLACEOS.catering.checked_items');
        spectator = createComponent();
    });

    it('should show details', () => {
        expect('[action]').not.toExist();
        spectator.setInput({ item: new CateringItem({ name: 'Test' }) });
        spectator.detectChanges();
        expect('[action]').toExist();
    });

    it('should keep checked items after the list is created again', () => {
        const props = {
            order_id: 'order-1',
            item: new CateringItem({ id: 'item-1', name: 'Test' }),
        };
        spectator.setInput(props);
        spectator.click('[action]');
        expect(spectator.component.active()).toBe(true);

        const next = createComponent({ props });
        expect(next.component.active()).toBe(true);
    });
});
