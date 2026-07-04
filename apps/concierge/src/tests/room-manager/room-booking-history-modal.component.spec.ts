import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as events_mod from '@placeos/events';
import { RoomBookingHistoryModalComponent } from '../../app/room-manager/room-booking-history-modal.component';

jest.mock('@placeos/events');

describe('RoomBookingHistoryModalComponent', () => {
    let spectator: Spectator<RoomBookingHistoryModalComponent>;

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
        jest.clearAllMocks();
        (events_mod.queryEvents as jest.Mock).mockResolvedValue([]);
        (events_mod.queryEventHistory as jest.Mock).mockResolvedValue([]);
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
        (events_mod.queryEvents as jest.Mock).mockResolvedValue([
            { id: 'e1', date: 100, attendees: [{}, {}] },
            { id: 'e2', date: 300 },
            { id: 'e3', date: 200, attendees: [{}] },
        ]);

        await spectator.component.loadHistory();

        const bookings = spectator.component.bookings();
        expect(bookings.map((b) => b.id)).toEqual(['e2', 'e3', 'e1']);
        expect(bookings[0].attendee_count).toBe(0);
        expect(bookings[2].attendee_count).toBe(2);
    });

    it('should reload events when the period changes', async () => {
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(1);
        await spectator.component.setPeriod('month');
        expect(spectator.component.period()).toBe('month');
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(2);
    });

    it('should not reload events when re-selecting the current period', async () => {
        await spectator.component.setPeriod('week');
        expect(events_mod.queryEvents).toHaveBeenCalledTimes(1);
    });

    it('should load row change history on first expand', async () => {
        (events_mod.queryEventHistory as jest.Mock).mockResolvedValue([
            { id: 'c1', updated_at: 10 },
            { id: 'c2', updated_at: 30 },
        ]);

        spectator.component.toggleRow({ id: 'e1' });
        await new Promise((r) => setTimeout(r, 5));

        expect(spectator.component.expanded()['e1']).toBe(true);
        expect(events_mod.queryEventHistory).toHaveBeenCalledWith(
            expect.objectContaining({ system_ids: 'sys-1' }),
        );
        expect(
            spectator.component.histories()['e1'].map((c) => c.id),
        ).toEqual(['c2', 'c1']);
    });
});
