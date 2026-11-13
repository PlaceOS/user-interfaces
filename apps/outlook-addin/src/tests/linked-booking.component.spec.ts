import { signal } from '@angular/core';
import {
    byText,
    createComponentFactory,
    Spectator,
} from '@ngneat/spectator/vitest';
import { Booking } from '@placeos/common';

import {
    BookingLinkService,
    BookingLinkState,
} from '../app/calendar/booking-link.service';
import { LinkedBookingComponent } from '../app/calendar/linked-booking.component';

/** Link service with the state that the component reads */
function fakeLink() {
    return {
        booking: signal<Booking | null>(null),
        state: signal<BookingLinkState>('idle'),
        error: signal(''),
        out_of_sync: signal(false),
        update: vi.fn(),
        remove: vi.fn(),
        clearError: vi.fn(),
    };
}

describe('LinkedBookingComponent', () => {
    let spectator: Spectator<LinkedBookingComponent>;
    let link: ReturnType<typeof fakeLink>;

    const createComponent = createComponentFactory({
        component: LinkedBookingComponent,
        detectChanges: false,
    });

    beforeEach(() => {
        link = fakeLink();
        spectator = createComponent();
        spectator.setInput('link', link as unknown as BookingLinkService);
    });

    it.each([
        [
            'a parking request',
            { asset_id: 'unallocated-abc', approved: true },
            'Parking request',
            'Requested. The parking team assigns a space.',
        ],
        [
            'an approved desk',
            { asset_id: 'desk-1', asset_name: 'Desk 1', approved: true },
            'Desk 1',
            'Reserved',
        ],
        [
            'a desk that needs approval',
            { asset_id: 'desk-1', asset_name: 'Desk 1', approved: false },
            'Desk 1',
            'Reserved. Approval pending.',
        ],
    ])('names %s and shows its status', (_, details, name, status) => {
        link.booking.set(new Booking(details));

        expect(spectator.component.name()).toBe(name);
        expect(spectator.component.status()).toBe(status);
    });

    it('offers Update only when the event time changed', () => {
        link.booking.set(new Booking({ asset_id: 'desk-1' }));
        const update = byText('Update', { selector: 'button' });
        spectator.detectChanges();
        expect(spectator.query(update)).toBeNull();

        link.out_of_sync.set(true);
        spectator.detectChanges();
        spectator.click(update);

        expect(link.update).toHaveBeenCalledOnce();
    });
});
