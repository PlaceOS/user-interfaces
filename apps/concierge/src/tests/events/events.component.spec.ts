import { createRoutingFactory } from '@ngneat/spectator/vitest';

import { EventsComponent } from '../../app/events/events.component';

describe('EventsComponent', () => {
    const createComponent = createRoutingFactory({
        component: EventsComponent,
        shallow: true,
    });

    beforeEach(() => createComponent());

    it('should render the shell layout with an outlet', () => {
        expect('app-topbar').toExist();
        expect('app-sidebar').toExist();
        expect('router-outlet').toExist();
    });
});
