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

    it('should forget checked items after two days', () => {
        const hour = 60 * 60 * 1000;
        localStorage.setItem(
            'PLACEOS.catering.checked_items',
            JSON.stringify({
                'order-1|old': Date.now() - 49 * hour,
                'order-1|new': Date.now() - hour,
            }),
        );
        const checked = (id: string) =>
            createComponent({
                props: {
                    order_id: 'order-1',
                    item: new CateringItem({ id, name: 'Test' }),
                },
            }).component.active();

        expect(checked('old')).toBe(false);
        expect(checked('new')).toBe(true);
    });

    it('should remove an item from storage when unchecked', () => {
        const props = {
            order_id: 'order-1',
            item: new CateringItem({ id: 'item-1', name: 'Test' }),
        };
        spectator.setInput(props);
        spectator.click('[action]');
        spectator.click('[action]');

        expect(spectator.component.active()).toBe(false);
        expect(
            JSON.parse(
                localStorage.getItem('PLACEOS.catering.checked_items') || '{}',
            ),
        ).toEqual({});
    });
});
