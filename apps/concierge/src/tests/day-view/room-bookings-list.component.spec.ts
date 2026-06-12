import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CalendarEvent, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RoomBookingsListComponent } from '../../app/day-view/room-bookings-list.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('RoomBookingsListComponent', () => {
    let spectator: Spectator<RoomBookingsListComponent>;
    const filtered = new BehaviorSubject<CalendarEvent[]>([]);
    const spaces = new BehaviorSubject<any[]>([]);
    const loading = new BehaviorSubject(false);
    const createComponent = createComponentFactory({
        component: RoomBookingsListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EventsStateService, {
                filtered,
                date: of(Date.now()),
                period: of('day'),
                spaces,
                loading,
                setDate: jest.fn(),
                newBooking: jest.fn(),
                removeBooking: jest.fn(),
                replace: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                app_name: 'concierge',
                get: jest.fn(),
                time_format: 'h:mm a',
            } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(convertToParamMap({})),
            }),
        ],
    });

    beforeEach(() => {
        filtered.next([]);
        spaces.next([]);
        loading.next(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should include setup and breakdown events provided by state', () => {
        filtered.next([
            new CalendarEvent({ id: 'booking', title: 'Booking' }),
            new CalendarEvent({
                id: 'setup',
                title: 'Setup',
                body: 'main_event_id=booking',
            }),
        ]);

        expect(spectator.component.bookings().map((event) => event.id)).toEqual([
            'booking',
            'setup',
        ]);
    });

    it('should hide group events', () => {
        filtered.next([
            new CalendarEvent({ id: 'booking', title: 'Booking' }),
            new CalendarEvent({
                id: 'group-event',
                title: 'Group Event',
                extension_data: { shared_event: true },
            }),
        ]);

        expect(spectator.component.bookings().map((event) => event.id)).toEqual([
            'booking',
        ]);
    });

    it('should expose the state loading value', () => {
        expect(spectator.component.loading()).toBe(false);

        loading.next(true);

        expect(spectator.component.loading()).toBe(true);
    });
});
