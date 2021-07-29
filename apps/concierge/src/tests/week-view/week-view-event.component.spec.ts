import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CalendarEvent } from '@placeos/events';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { WeekViewEventComponent } from '../../app/week-view/week-view-event.component';

describe('WeekViewEventComponent', () => {
    let spectator: Spectator<WeekViewEventComponent>;
    const createComponent = createComponentFactory({
        component: WeekViewEventComponent,
        providers: [
            { provide: EventsStateService, useValue: { setEvent: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        spectator.setInput({
            event: new CalendarEvent({ title: 'test', date: 2 }),
        });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });

    it('should allow viewing more event details', () => {
        const service = spectator.inject(EventsStateService);
        expect(service.setEvent).not.toBeCalled();
        spectator.setInput({
            event: new CalendarEvent({ title: 'test', date: 2 }),
        });
        spectator.detectChanges();
        spectator.click('[content]');
        expect(service.setEvent).toBeCalled();
    });
});
