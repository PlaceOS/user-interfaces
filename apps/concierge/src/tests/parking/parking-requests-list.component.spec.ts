import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { defer, of } from 'rxjs';

import { ParkingRequestsListComponent } from '../../app/parking/parking-requests-list.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingRequestsListComponent', () => {
    let spectator: Spectator<ParkingRequestsListComponent>;
    let bookings: Booking[] = [];
    let show_waitlist = true;
    let timezone = 'Australia/Perth';
    let request_filter: 'all' | 'pending' | 'waitlist' = 'all';

    const createComponent = createComponentFactory({
        component: ParkingRequestsListComponent,
        providers: [
            MockProvider(ParkingStateService, {
                bookings: defer(() => of(bookings)),
                options: defer(() =>
                    of({
                        date: Date.now(),
                        search: '',
                        zones: [],
                        period: 'day',
                        request_filter,
                    }),
                ),
                loading: of([]),
                period: of('day'),
                startPolling: jest.fn(() => () => null),
                filterEventSearch: jest.fn((list: Booking[]) => list),
                rejectBooking: jest.fn(),
                approveBooking: jest.fn(),
                editReservation: jest.fn(),
                assignSpace: jest.fn(),
                canApproveBooking: jest.fn(() => true),
                get timezone() {
                    return timezone;
                },
                week_start: 1,
            } as any),
            MockProvider(SettingsService as any, {
                get: jest.fn((name: string) =>
                    name === 'app.parking.show_waitlist'
                        ? show_waitlist
                        : false,
                ),
                signal: jest.fn((_: string, initial: boolean) =>
                    signal(initial),
                ),
                time_format: 'h:mm a',
            }),
        ],
    });

    beforeEach(() => {
        bookings = [];
        show_waitlist = true;
        timezone = 'Australia/Perth';
        request_filter = 'all';
    });

    it('should expose the parking display timezone', () => {
        timezone = 'Australia/Perth';
        spectator = createComponent();

        expect(spectator.component.timezone).toBe('Australia/Perth');
    });

    it('should hide waitlisted status when waitlist display is disabled', () => {
        show_waitlist = false;
        spectator = createComponent();

        expect(
            spectator.component.isVisibleWaitlisted({
                id: 'request-1',
                asset_id: 'unallocated-1',
                status: 'tentative',
                date: Date.now(),
            } as Booking),
        ).toBe(false);
    });

    it('should keep current week tentative requests in pending results when waitlist display is disabled', () => {
        show_waitlist = false;
        request_filter = 'pending';
        bookings = [
            {
                id: 'request-1',
                asset_id: 'unallocated-1',
                status: 'tentative',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
                extension_data: {},
            } as Booking,
        ];

        spectator = createComponent();

        expect(spectator.component.filtered_events()).toHaveLength(1);
        expect(spectator.component.filtered_events()[0].id).toBe('request-1');
    });
});
