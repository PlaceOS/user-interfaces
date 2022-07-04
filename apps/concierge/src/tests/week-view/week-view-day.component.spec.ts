import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CalendarEvent } from '@placeos/events';
import { addDays, startOfWeek } from 'date-fns';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { WeekViewDayComponent } from '../../app/week-view/week-view-day.component';
import { WeekViewEventComponent } from '../../app/week-view/week-view-event.component';

describe('WeekViewDayComponent', () => {
    let spectator: Spectator<WeekViewDayComponent>;
    const createComponent = createComponentFactory({
        component: WeekViewDayComponent,
        providers: [
            {
                provide: EventsStateService,
                useValue: {
                    date: new BehaviorSubject(0),
                    filtered: new BehaviorSubject([]),
                },
            },
        ],
        declarations: [MockComponent(WeekViewEventComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display events', async () => {
        expect('week-view-event').toHaveLength(0);
        expect('p').toContainText('No events');
        const date = startOfWeek(0);
        const service = spectator.inject(EventsStateService);
        (service.date as any).next(addDays(date, 1));
        (service.filtered as any).next([
            new CalendarEvent({ id: '1', date: date.valueOf() }),
            new CalendarEvent({
                id: '2',
                date: date.valueOf(),
            }),
            new CalendarEvent({
                id: '3',
                date: addDays(startOfWeek(0), 1).valueOf(),
            }),
        ]);
        spectator.detectChanges();
        expect('week-view-event').toHaveLength(2);
    });
});
