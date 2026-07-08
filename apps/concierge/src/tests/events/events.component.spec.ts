import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';

import { EventsComponent } from '../../app/events/events.component';

describe('EventsComponent', () => {
    let spectator: SpectatorRouting<EventsComponent>;
    const createComponent = createRoutingFactory({
        component: EventsComponent,
        shallow: true,
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the shell layout with an outlet', () => {
        expect('app-topbar').toExist();
        expect('app-sidebar').toExist();
        expect('router-outlet').toExist();
    });
});
