import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { DayviewEventComponent } from '../../app/day-view/dayview-event.component';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { SettingsService } from '@placeos/common';

describe('DayviewEventComponent', () => {
    let spectator: Spectator<DayviewEventComponent>;
    const createComponent = createComponentFactory({
        component: DayviewEventComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(EventsStateService, {
                options: new BehaviorSubject({}),
                setEvent: jest.fn(),
            }),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display event details', () => {
        expect('[event]').not.toExist();
        spectator.setInput({
            event: new CalendarEvent({ date: 0, duration: 120 }),
        });
        spectator.detectChanges();
        expect('[event]').toExist();
    });

    it('should allow for showing cleaning status', () => {
        spectator.setInput({
            event: new CalendarEvent({ date: 0, duration: 120 }),
        });
        spectator.detectChanges();
        expect('[cleaning]').not.toExist();
        const events = spectator.inject(EventsStateService);
        (events.options as any).next({ show_cleaning: true });
        spectator.detectChanges();
        expect('[cleaning]').toExist();
    });

    it('should allow for viewing event details', () => {
        spectator.setInput({
            event: new CalendarEvent({ date: 0, duration: 120 }),
        });
        spectator.detectChanges();
        const events = spectator.inject(EventsStateService);
        spectator.click('[event]');
        expect(events.setEvent).toHaveBeenCalled();
    });
});
