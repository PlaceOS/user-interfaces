import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';

import { SpaceTimetableComponent } from '../app/space-timetable.component';
import { SpaceEventDetailsComponent } from '../app/space-event-details.component';
import { TimetableStateService } from '../app/timetable-state.service';

describe('SpaceTimetableComponent', () => {
    let spectator: SpectatorRouting<SpaceTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceTimetableComponent,
        providers: [
            {
                provide: TimetableStateService,
                useValue: { bookingsFor: jest.fn(() => of([{}])) },
            },
        ],
        declarations: [MockComponent(SpaceEventDetailsComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show space column', () => {
        expect('[space]').not.toExist();
        spectator.setInput({ space: { id: '1', display_name: 'Room 1' } as any });
        spectator.detectChanges();
        expect('[space]').toExist();
    });
});
