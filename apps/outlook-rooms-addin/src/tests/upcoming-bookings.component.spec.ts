import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, ngMocks } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { CalendarEvent, EventCardComponent } from '@placeos/events';
import { BookingCardComponent } from '@placeos/bookings';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ScheduleStateService } from 'apps/workplace/src/app/new-schedule/schedule-state.service';
import { UpcomingBookingsComponent } from '../app/rooms/upcoming-bookings/upcoming-bookings.component';

describe('UpcomingBookingsComponent', () => {
    let spectator: Spectator<UpcomingBookingsComponent>;

    const createComponent = createComponentFactory({
        component: UpcomingBookingsComponent,
        imports: [MatProgressSpinnerModule],
        providers: [
            {
                provide: ScheduleStateService,
                useValue: {
                    loading: new BehaviorSubject(false),
                    filtered_bookings: new BehaviorSubject([]),
                    toggleType: jest.fn(),
                    startPolling: jest.fn(),
                },
            },
        ],
        declarations: [
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    afterEach(() => {
        (spectator.inject(ScheduleStateService).loading as any).next(false);
        (spectator.inject(ScheduleStateService).filtered_bookings as any).next(
            []
        );
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        (spectator.inject(ScheduleStateService).loading as any).next(true);
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should show empty state', () => {
        expect('[empty]').toExist();
        (spectator.inject(ScheduleStateService).filtered_bookings as any).next([
            new CalendarEvent(),
        ]);
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it("should show user's events", () => {
        expect('event-card').not.toExist();
        (spectator.inject(ScheduleStateService).filtered_bookings as any).next([
            new CalendarEvent(),
        ]);
        spectator.detectChanges();
        expect('event-card').toExist();
    });
});
