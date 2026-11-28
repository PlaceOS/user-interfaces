import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import {
    events,
    History,
    PlaceCalendarEvent,
    PlaceCalendarEventAttendee,
} from '@placeos/ts-client/staff';
import { RoomBookingHistoryModalComponent } from '../../app/room-manager/room-booking-history-modal.component';

// `@placeos/events` is a workspace lib that gets inlined by the bundling test
// builder, so its exports cannot be intercepted directly. Instead we mock the
// staff API operations that its `queryEvents` / `queryEventHistory` call.
vi.mock('@placeos/ts-client/staff', { spy: true });

const attendee = () => mockData(PlaceCalendarEventAttendee, {});

describe('RoomBookingHistoryModalComponent', () => {
    let spectator: Spectator<RoomBookingHistoryModalComponent>;
    let events_data: PlaceCalendarEvent[];
    let history_data: History[];

    const createComponent = createComponentFactory({
        component: RoomBookingHistoryModalComponent,
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { room: { id: 'sys-1', name: 'Boardroom' } },
            },
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        events_data = [];
        history_data = [];
        vi.mocked(events.query).mockImplementation(async () =>
            mockReply(events_data),
        );
        vi.mocked(events.history).mockImplementation(async () =>
            mockReply(history_data),
        );
        spectator = createComponent({ detectChanges: false });
    });

    it('should map action codes to icons and labels', () => {
        expect(spectator.component.actionIcon('create')).toBe('add_circle');
        expect(spectator.component.actionIcon('mystery')).toBe('history');
        expect(spectator.component.actionLabel('approve')).toBe(
            'APP.CONCIERGE.ROOMS_HISTORY_ACTION_APPROVE',
        );
    });

    it('should sort bookings by date descending and add attendee counts', async () => {
        // `queryEvents` wraps raw payloads in `CalendarEvent`, whose `date` is
        // derived from `event_start` (seconds -> ms).
        events_data = [
            mockData(PlaceCalendarEvent, {
                id: 'e1',
                event_start: 100,
                attendees: [attendee(), attendee()],
            }),
            mockData(PlaceCalendarEvent, { id: 'e2', event_start: 300 }),
            mockData(PlaceCalendarEvent, {
                id: 'e3',
                event_start: 200,
                attendees: [attendee()],
            }),
        ];

        await spectator.component.loadHistory();

        const bookings = spectator.component.bookings();
        expect(bookings.map((b) => b.id)).toEqual(['e2', 'e3', 'e1']);
        expect(bookings[0].attendee_count).toBe(0);
        expect(bookings[2].attendee_count).toBe(2);
    });

    it('should reload events when the period changes', async () => {
        expect(events.query).toHaveBeenCalledTimes(1);
        await spectator.component.setPeriod('month');
        expect(spectator.component.period()).toBe('month');
        expect(events.query).toHaveBeenCalledTimes(2);
    });

    it('should not reload events when re-selecting the current period', async () => {
        await spectator.component.setPeriod('week');
        expect(events.query).toHaveBeenCalledTimes(1);
    });

    it('should load row change history on first expand', async () => {
        // The API sends only `created_at` for a history entry
        history_data = [
            mockData(History, { id: 'c1', created_at: 10 }),
            mockData(History, { id: 'c2', created_at: 30 }),
        ];

        spectator.component.toggleRow({ id: 'e1' });
        await new Promise((r) => setTimeout(r, 5));

        expect(spectator.component.expanded()['e1']).toBe(true);
        expect(events.history).toHaveBeenCalledWith(
            expect.objectContaining({ system_ids: 'sys-1' }),
        );
        expect(spectator.component.histories()['e1'].map((c) => c.id)).toEqual([
            'c2',
            'c1',
        ]);
    });
});
