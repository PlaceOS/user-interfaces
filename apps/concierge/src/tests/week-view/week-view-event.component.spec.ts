import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CalendarEvent } from '@placeos/events';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { WeekViewEventComponent } from '../../app/week-view/week-view-event.component';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

describe('WeekViewEventComponent', () => {
    let spectator: Spectator<WeekViewEventComponent>;
    const createComponent = createComponentFactory({
        component: WeekViewEventComponent,
        providers: [
            MockProvider(EventsStateService, { setEvent: jest.fn() }),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect('[content]').not.toExist();
        spectator.setInput({
            event: new CalendarEvent({ title: 'test', date: 2 }),
        });
        spectator.detectChanges();
        expect('[content]').toExist();
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
