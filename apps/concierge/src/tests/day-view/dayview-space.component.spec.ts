import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { DayviewEventComponent } from '../../app/day-view/dayview-event.component';
import { DayviewSpaceComponent } from '../../app/day-view/dayview-space.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('DayviewSpaceComponent', () => {
    let spectator: Spectator<DayviewSpaceComponent>;
    const createComponent = createComponentFactory({
        component: DayviewSpaceComponent,
        declarations: [MockComponent(DayviewEventComponent)],
        providers: [
            {
                provide: EventsStateService,
                useValue: {
                    filtered: signal([]),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display events', () => {
        expect('dayview-event').not.toExist();
        spectator.setInput({ space: { email: '1@2.3' } as any });
        const events = spectator.inject(EventsStateService);
        (events as any).filtered.set([
            { resources: [{ email: '1@2.3' } as any] },
        ]);
        spectator.detectChanges();
        expect('dayview-event').toExist();
    });
});
