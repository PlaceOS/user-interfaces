import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { DayviewEventComponent } from '../../app/day-view/dayview-event.component';
import { DayviewSpaceComponent } from '../../app/day-view/dayview-space.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('DayviewTimelineComponent', () => {
    let spectator: Spectator<DayviewSpaceComponent>;
    const createComponent = createComponentFactory({
        component: DayviewSpaceComponent,
        declarations: [MockComponent(DayviewEventComponent)],
        providers: [
            {
                provide: EventsStateService,
                useValue: {
                    filtered: new BehaviorSubject([]),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        spectator.setInput({ space: { email: '1@2.3' } as any });
        const events = spectator.inject(EventsStateService);
        (events as any).filtered.next([
            { resources: [{ email: '1@2.3' } as any] },
        ]);
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });

    it('should display events', () => {
        expect('dayview-event').not.toExist();
        spectator.setInput({ space: { email: '1@2.3' } as any });
        const events = spectator.inject(EventsStateService);
        (events as any).filtered.next([
            { resources: [{ email: '1@2.3' } as any] },
        ]);
        spectator.detectChanges();
        expect('dayview-event').toExist();
    });
});
