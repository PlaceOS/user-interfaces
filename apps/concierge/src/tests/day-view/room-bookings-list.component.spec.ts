import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent, SettingsService, User } from '@placeos/common';
import { UserPipe } from '@placeos/users';
import { MockPipe, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { RoomBookingsListComponent } from '../../app/day-view/room-bookings-list.component';

describe('RoomBookingsListComponent', () => {
    let spectator: Spectator<RoomBookingsListComponent>;
    const filtered = signal<CalendarEvent[]>([]);
    const spaces = signal<any[]>([]);
    const loading = signal(false);
    const user_pipe_transform = vi.fn(
        async (user_id: string, lookup_mode?: string) =>
            new User({
                email: user_id,
                name: lookup_mode === 'email-prefix' ? 'Katherine Savage' : '',
            }),
    );
    const MockUserPipe = MockPipe(UserPipe, user_pipe_transform);
    const createComponent = createComponentFactory({
        component: RoomBookingsListComponent,
        shallow: true,
        detectChanges: false,
        overrideComponents: [
            [
                RoomBookingsListComponent,
                {
                    remove: { imports: [UserPipe] },
                    add: { imports: [MockUserPipe] },
                },
            ],
        ],
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
        vi.clearAllMocks();
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

        expect(spectator.component.bookings().map((event) => event.id)).toEqual(
            ['booking', 'setup'],
        );
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

        expect(spectator.component.bookings().map((event) => event.id)).toEqual(
            ['booking'],
        );
    });

    it('should expose the state loading value', () => {
        expect(spectator.component.loading()).toBe(false);

        loading.set(true);

        expect(spectator.component.loading()).toBe(true);
    });

    it('should resolve an aliased host name by email prefix', async () => {
        filtered.set([
            new CalendarEvent({
                host: 'katherine.savage@royhill.com.au',
            }),
        ]);

        spectator.detectChanges();

        expect(user_pipe_transform).toHaveBeenCalledWith(
            'katherine.savage@royhill.com.au',
            'email-prefix',
        );
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('[role="table"]').toHaveText('Katherine Savage');
        expect('[role="table"]').toHaveText('katherine.savage@royhill.com.au');
    });

    it('should resolve the host name from attendee details when the user lookup has no name', async () => {
        user_pipe_transform.mockResolvedValueOnce(
            new User({ email: 'fallback.host@example.com' }),
        );
        filtered.set([
            new CalendarEvent({
                host: 'fallback.host@example.com',
                attendees: [
                    new User({
                        email: 'FALLBACK.HOST@EXAMPLE.COM',
                        name: 'Fallback Host',
                    }),
                ],
            }),
        ]);

        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();

        expect('[role="table"]').toHaveText('Fallback Host');
        expect('[role="table"]').toHaveText('fallback.host@example.com');
    });
});
