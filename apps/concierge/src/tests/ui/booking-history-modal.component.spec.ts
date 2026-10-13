import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking } from '@placeos/common';

import * as ts_client from '@placeos/ts-client';
import { BookingHistoryModalComponent } from '../../app/ui/booking-history-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BookingHistoryModalComponent', () => {
    let spectator: Spectator<BookingHistoryModalComponent>;

    const booking = new Booking({
        id: 'booking-1',
        user_name: 'Jane Smith',
        user_email: 'jane@example.com',
        history: [{ state: 'reserved', time: 100, source: 'desktop' }],
    });

    const createComponent = createComponentFactory({
        component: BookingHistoryModalComponent,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: { booking } }],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        (ts_client.get as any).mockResolvedValue({
            id: 'booking-1',
            user_name: 'Jane Smith',
            user_email: 'jane@example.com',
            history: [
                { state: 'reserved', time: 100, source: 'desktop' },
                { state: 'checked_in', time: 300, source: 'mobile' },
                { state: 'checked_out', time: 200, source: 'kiosk' },
            ],
        });
        spectator = createComponent({ detectChanges: false });
    });

    it('loads the latest booking history and sorts it newest first', async () => {
        await spectator.component.loadHistory();

        expect(ts_client.get).toHaveBeenCalledWith(
            '/api/staff/v1/bookings/booking-1',
        );
        expect(spectator.component.history().map((item) => item.state)).toEqual(
            ['checked_in', 'checked_out', 'reserved'],
        );
        expect(spectator.component.loading()).toBe(false);
    });

    it('maps booking states to history icons and labels', () => {
        expect(spectator.component.stateIcon('no_show')).toBe('person_off');
        expect(spectator.component.stateIcon('unknown')).toBe('history');
        expect(spectator.component.stateLabel('checked_in')).toBe(
            'COMMON.CHECKED_IN',
        );
        expect(spectator.component.stateLabel('no_show')).toBe(
            'APP.CONCIERGE.BOOKING_HISTORY_STATE_NO_SHOW',
        );
    });
});
