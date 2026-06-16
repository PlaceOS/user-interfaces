import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingCardComponent } from '@placeos/bookings';
import { CalendarEvent } from '@placeos/common';
import { EventCardComponent } from '@placeos/events';
import { signal } from '@angular/core';
import { MockComponent } from 'ng-mocks';
import { UpcomingBookingsComponent } from '../app/rooms/upcoming-bookings.component';

import { ScheduleStateService } from 'apps/workplace/src/app/schedule/schedule-state.service';

describe('UpcomingBookingsComponent', () => {
    let spectator: Spectator<UpcomingBookingsComponent>;

    const createComponent = createComponentFactory({
        component: UpcomingBookingsComponent,
        imports: [MatProgressSpinnerModule],
        providers: [
            {
                provide: ScheduleStateService,
                useValue: {
                    loading: signal(false),
                    filtered_bookings: signal([]),
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
        (spectator.inject(ScheduleStateService).loading as any).set(false);
        (spectator.inject(ScheduleStateService).filtered_bookings as any).set(
            [],
        );
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty state', () => {
        expect('[empty]').toExist();
        (spectator.inject(ScheduleStateService).filtered_bookings as any).set([
            new CalendarEvent(),
        ]);
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it("should show user's events", () => {
        expect('event-card').not.toExist();
        (spectator.inject(ScheduleStateService).filtered_bookings as any).set([
            new CalendarEvent(),
        ]);
        spectator.detectChanges();
        expect('event-card').toExist();
    });
});
