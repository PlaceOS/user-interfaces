import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { CateringItem } from '../lib/catering-item.class';

import { CateringOrderItemComponent } from '../lib/catering-order-item.component';

describe('CateringOrderItemComponent', () => {
    let spectator: Spectator<CateringOrderItemComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderItemComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show details', () => {
        expect('[action]').not.toExist();
        spectator.setInput({ item: new CateringItem({ name: 'Test' }) });
        spectator.detectChanges();
        expect('[action]').toExist();
    });
});
