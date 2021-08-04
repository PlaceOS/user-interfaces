import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CalendarEvent } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { EventsStateService } from '../../app/day-view/events-state.service';
import { ViewEventDetailsComponent } from '../../app/ui/view-event-details.component';
import { WeekViewDayComponent } from '../../app/week-view/week-view-day.component';
import { WeekViewTimelineComponent } from '../../app/week-view/week-view-timeline.component';

describe('WeekViewTimelineComponent', () => {
    let spectator: Spectator<WeekViewTimelineComponent>;
    const createComponent = createComponentFactory({
        component: WeekViewTimelineComponent,
        providers: [
            {
                provide: EventsStateService,
                useValue: {
                    options: new BehaviorSubject({}),
                    event: new BehaviorSubject(null),
                    loading: new BehaviorSubject(''),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        declarations: [
            MockComponent(WeekViewDayComponent),
            MockComponent(ViewEventDetailsComponent),
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshots', () => {
        const service = spectator.inject(EventsStateService);
        expect(spectator.element).toMatchSnapshot();
        (service.options as any).next({ show_weekends: true });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
        (service.event as any).next(new CalendarEvent());
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });
});
