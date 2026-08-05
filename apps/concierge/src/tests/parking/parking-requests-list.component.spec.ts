import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

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
                bookings: (() => bookings) as any,
                options: (() => ({
                    date: Date.now(),
                    search: '',
                    zones: [],
                    period: 'day',
                    request_filter,
                })) as any,
                loading: (() => []) as any,
                period: (() => 'day') as any,
                has_more_pages: (() => false) as any,
                last_updated: (() => 0) as any,
                nextPage: vi.fn(),
                refresh: vi.fn(),
                filterEventSearch: vi.fn((list: Booking[]) => list),
                rejectBooking: vi.fn(),
                approveBooking: vi.fn(),
                editReservation: vi.fn(),
                assignSpace: vi.fn(),
                canApproveBooking: vi.fn(() => true),
                get timezone() {
                    return timezone;
                },
                week_start: 1,
            } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((name: string) =>
                    name === 'app.parking.show_waitlist'
                        ? show_waitlist
                        : false,
                ),
                signal: vi.fn((_: string, initial: boolean) => signal(initial)),
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
            spectator.component.statusTone({
                id: 'request-1',
                asset_id: 'unallocated-1',
                status: 'tentative',
                process_state: 'unapproved',
                date: Date.now(),
            } as Booking),
        ).toBe('warning');
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
