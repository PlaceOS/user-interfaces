import { signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ActionIconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { Booking, SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { DeskBookingsComponent } from '../../app/desks/desk-bookings.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskBookingsComponent', () => {
    let spectator: Spectator<DeskBookingsComponent>;
    const bookings = signal<Booking[]>([]);
    const createComponent = createComponentFactory({
        component: DeskBookingsComponent,
        providers: [
            MockProvider(DesksStateService, {
                setFilters: vi.fn(),
                bookings,
                filters: signal({}),
                has_more_pages: signal(false),
                last_updated: signal(0),
                loading: signal(false),
                nextPage: vi.fn(),
                refresh: vi.fn(),
                viewBookingHistory: vi.fn(),
            } as any),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
        declarations: [
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => {
        bookings.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should keep the history action available when deleting is disabled', () => {
        bookings.set([new Booking({ id: 'booking-1' })]);
        spectator.detectChanges();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toContain(
            'actions',
        );
        expect(
            spectator.query('[data-testid="desk-booking-history"]'),
        ).toExist();
    });

    it('should open booking history from the list action', () => {
        const booking = new Booking({ id: 'booking-1' });
        bookings.set([booking]);
        spectator.detectChanges();

        spectator.click('[data-testid="desk-booking-history"]');

        expect(
            spectator.inject(DesksStateService).viewBookingHistory,
        ).toHaveBeenCalledWith(expect.objectContaining({ id: booking.id }));
    });
});
