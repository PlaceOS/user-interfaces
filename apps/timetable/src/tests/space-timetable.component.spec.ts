import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { mockComponent } from '@placeos/common/tests';

import { SpaceEventDetailsComponent } from '../app/space-event-details.component';
import { SpaceTimetableComponent } from '../app/space-timetable.component';

describe('SpaceTimetableComponent', () => {
    let spectator: SpectatorRouting<SpaceTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceTimetableComponent,
        declarations: [mockComponent(SpaceEventDetailsComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show space column', () => {
        expect('[space]').not.toExist();
        spectator.setInput({
            space: { id: '1', display_name: 'Room 1' } as any,
        });
        spectator.detectChanges();
        expect('[space]').toExist();
    });
});
