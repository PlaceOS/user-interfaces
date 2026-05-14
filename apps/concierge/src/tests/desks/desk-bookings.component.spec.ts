import { signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActionIconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { Booking, SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { DeskBookingsComponent } from '../../app/desks/desk-bookings.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskBookingsComponent', () => {
    let spectator: Spectator<DeskBookingsComponent>;
    const createComponent = createComponentFactory({
        component: DeskBookingsComponent,
        providers: [
            MockProvider(DesksStateService, {
                setFilters: jest.fn(),
                bookings: signal([]),
                filters: signal({}),
                has_more_pages: signal(false),
                loading: signal(false),
                nextPage: jest.fn(),
            } as any),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
        declarations: [
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show deleted bookings as deleted and disable status actions', () => {
        const booking = {
            status: 'approved',
            deleted: true,
        } as Booking;

        expect(spectator.component.statusLabel(booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_DELETED',
        );
        expect(spectator.component.isStatusActionDisabled(booking)).toBe(true);
    });
});
