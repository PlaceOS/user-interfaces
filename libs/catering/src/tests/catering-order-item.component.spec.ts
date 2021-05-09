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

    it('should match snapshot', () => {
        spectator.setInput({ item: new CateringItem({ name: 'Test' }) });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
        spectator.click('button');
        expect(spectator.element).toMatchSnapshot();
    });
});
