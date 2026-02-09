import { signal, WritableSignal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingCardComponent } from '@placeos/bookings';
import { CalendarEvent } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { EventCardComponent } from '@placeos/events';
import { UpcomingBookingsComponent } from '../app/rooms/upcoming-bookings.component';

import { ScheduleStateService } from 'apps/workplace/src/app/schedule/schedule-state.service';

describe('UpcomingBookingsComponent', () => {
    let spectator: Spectator<UpcomingBookingsComponent>;
    let loading: WritableSignal<boolean>;
    let filtered_bookings: WritableSignal<any[]>;

    const createComponent = createComponentFactory({
        component: UpcomingBookingsComponent,
        imports: [MatProgressSpinnerModule],
        providers: [
            {
                provide: ScheduleStateService,
                useFactory: () => {
                    loading = signal(false);
                    filtered_bookings = signal([]);
                    return {
                        loading,
                        filtered_bookings,
                        toggleType: jest.fn(),
                        startPolling: jest.fn(() => () => {}),
                    };
                },
            },
        ],
        declarations: [
            mockComponent(EventCardComponent),
            mockComponent(BookingCardComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    afterEach(() => {
        loading.set(false);
        filtered_bookings.set([]);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty state', () => {
        expect('[empty]').toExist();
        filtered_bookings.set([new CalendarEvent()]);
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it("should show user's events", () => {
        expect('event-card').not.toExist();
        filtered_bookings.set([new CalendarEvent()]);
        spectator.detectChanges();
        expect('event-card').toExist();
    });
});
