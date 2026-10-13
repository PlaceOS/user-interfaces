import { createRoutingFactory } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { FlowSuccessComponent } from '../../app/book/flow-success.component';

describe('FlowSuccessComponent', () => {
    const createComponent = createRoutingFactory({
        component: FlowSuccessComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => createComponent());

    it('should link to Schedule', () => {
        expect('a').toContainText('Your Bookings');
    });

    it('should link to new booking', () => {
        expect('a').toContainText('New Booking');
    });
});
