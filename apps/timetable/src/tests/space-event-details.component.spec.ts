import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { SpaceEventDetailsComponent } from '../app/space-event-details.component';

describe('SpaceEventDetailsComponent', () => {
    let spectator: SpectatorRouting<SpaceEventDetailsComponent>;
    const createComponent = createRoutingFactory(SpaceEventDetailsComponent);

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect('[event]').not.toExist();
        spectator.setInput({
            event: { title: 'Event 1', date: 1, duration: 60 } as any,
        });
        spectator.detectChanges();
        expect('[event]').toExist();
    });
});
