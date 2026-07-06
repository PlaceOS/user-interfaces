import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { RoomBookingsListComponent } from '../../app/day-view/room-bookings-list.component';
import { EventsStateService } from '../../app/day-view/events-state.service';

describe('RoomBookingsListComponent', () => {
    let spectator: Spectator<RoomBookingsListComponent>;
    const filtered = signal<CalendarEvent[]>([]);
    const spaces = signal<any[]>([]);
    const loading = signal(false);
    const createComponent = createComponentFactory({
        component: RoomBookingsListComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EventsStateService, {
                filtered,
                date: signal(Date.now()),
                period: signal<'day' | 'week' | 'month'>('day'),
                spaces,
                loading,
                setDate: vi.fn(),
                newBooking: vi.fn(),
                removeBooking: vi.fn(),
                replace: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                app_name: 'concierge',
                get: vi.fn(),
                time_format: 'h:mm a',
            } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of(convertToParamMap({})),
            }),
        ],
    });

    beforeEach(() => {
        filtered.set([]);
        spaces.set([]);
        loading.set(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should include setup and breakdown events provided by state', () => {
        filtered.set([
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
        filtered.set([
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

        loading.set(true);

        expect(spectator.component.loading()).toBe(true);
    });
});
