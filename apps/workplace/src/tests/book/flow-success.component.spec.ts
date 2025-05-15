import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { FlowSuccessComponent } from '../../app/book/flow-success.component';

describe('FlowSuccessComponent', () => {
    let spectator: SpectatorRouting<FlowSuccessComponent>;
    const createComponent = createRoutingFactory({
        component: FlowSuccessComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should link to Schedule', () => {
        expect('a').toContainText('Your Bookings');
    });

    it('should link to new booking', () => {
        expect('a').toContainText('New Booking');
    });
});
