import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { RoomBookingHistoryModalComponent } from '../../app/room-manager/room-booking-history-modal.component';

// `@placeos/events` is a workspace lib that gets inlined by the bundling test
// builder, so its exports cannot be intercepted directly. Instead we mock the
// `@placeos/ts-client` HTTP boundary (`get`) that its `queryEvents` /
// `queryEventHistory` helpers call underneath.
vi.mock('@placeos/ts-client', { spy: true });

describe('RoomBookingHistoryModalComponent', () => {
    let spectator: Spectator<RoomBookingHistoryModalComponent>;
    let events_data: any[];
    let history_data: any[];

    const createComponent = createComponentFactory({
        component: RoomBookingHistoryModalComponent,
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { room: { id: 'sys-1', name: 'Boardroom' } },
            },
            MockProvider(SettingsService, { time_format: 'h:mm a' } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        events_data = [];
        history_data = [];
        (ts_client.get as any).mockImplementation((url: string) =>
            Promise.resolve(
                url.includes('/history') ? history_data : events_data,
            ),
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
            { id: 'e1', event_start: 100, attendees: [{}, {}] },
            { id: 'e2', event_start: 300 },
            { id: 'e3', event_start: 200, attendees: [{}] },
        ];

        await spectator.component.loadHistory();

        const bookings = spectator.component.bookings();
        expect(bookings.map((b) => b.id)).toEqual(['e2', 'e3', 'e1']);
        expect(bookings[0].attendee_count).toBe(0);
        expect(bookings[2].attendee_count).toBe(2);
    });

    it('should reload events when the period changes', async () => {
        expect(ts_client.get).toHaveBeenCalledTimes(1);
        await spectator.component.setPeriod('month');
        expect(spectator.component.period()).toBe('month');
        expect(ts_client.get).toHaveBeenCalledTimes(2);
    });

    it('should not reload events when re-selecting the current period', async () => {
        await spectator.component.setPeriod('week');
        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });

    it('should load row change history on first expand', async () => {
        history_data = [
            { id: 'c1', updated_at: 10 },
            { id: 'c2', updated_at: 30 },
        ];

        spectator.component.toggleRow({ id: 'e1' });
        await new Promise((r) => setTimeout(r, 5));

        expect(spectator.component.expanded()['e1']).toBe(true);
        expect(ts_client.get).toHaveBeenCalledWith(
            expect.stringContaining('system_ids=sys-1'),
        );
        expect(
            spectator.component.histories()['e1'].map((c) => c.id),
        ).toEqual(['c2', 'c1']);
    });
});
