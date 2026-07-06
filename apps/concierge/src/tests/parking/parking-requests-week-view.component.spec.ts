import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking, SettingsService } from '@placeos/common';
import { isSameDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { ParkingRequestsWeekViewComponent } from '../../app/parking/parking-requests-week-view.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingRequestsWeekViewComponent', () => {
    let spectator: Spectator<ParkingRequestsWeekViewComponent>;
    let bookings: Booking[] = [];
    let show_waitlist = true;
    const options = signal<any>({
        date: Date.now(),
        search: '',
        zones: [],
        period: 'week',
        request_filter: 'all',
    });

    const createComponent = createComponentFactory({
        component: ParkingRequestsWeekViewComponent,
        shallow: true,
        providers: [
            MockProvider(ParkingStateService, {
                loading: signal([]) as any,
                options: options as any,
                bookings: (() => bookings) as any,
                week_start: 1,
                startPolling: vi.fn(() => () => null),
                filterEventSearch: vi.fn((list: Booking[]) => list),
                rejectBooking: vi.fn(),
                approveBooking: vi.fn(),
                editReservation: vi.fn(),
                assignSpace: vi.fn(),
                canApproveBooking: vi.fn(() => true),
                timezone: 'Australia/Perth',
            } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((name: string) =>
                    name === 'app.parking.show_waitlist' ? show_waitlist : false,
                ),
                time_format: 'h:mm a',
            }),
        ],
    });

    beforeEach(() => {
        bookings = [];
        show_waitlist = true;
        options.set({
            date: Date.now(),
            search: '',
            zones: [],
            period: 'week',
            request_filter: 'all',
        });
    });

    it('should only include unallocated request bookings', () => {
        const today = Date.now();
        bookings = [
            {
                id: 'request-1',
                asset_id: 'unallocated-1',
                status: 'tentative',
                date: today,
            } as Booking,
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: today,
            } as Booking,
        ];

        spectator = createComponent();

        const grouped = spectator.component.grouped_requests();
        const all_ids = Object.values(grouped)
            .flat()
            .map((b) => b.id);
        expect(all_ids).toContain('request-1');
        expect(all_ids).not.toContain('booking-1');
    });

    it('should keep only current week tentative requests under the waitlist filter', () => {
        const today = Date.now();
        const long_ago = today - 60 * 24 * 60 * 60 * 1000;
        options.set({ ...options(), request_filter: 'waitlist' });
        bookings = [
            {
                id: 'current-week',
                asset_id: 'unallocated-1',
                status: 'tentative',
                date: today,
            } as Booking,
            {
                id: 'old-request',
                asset_id: 'unallocated-2',
                status: 'tentative',
                date: long_ago,
            } as Booking,
        ];

        spectator = createComponent();

        const all_ids = Object.values(spectator.component.grouped_requests())
            .flat()
            .map((b) => b.id);
        expect(all_ids).toContain('current-week');
        expect(all_ids).not.toContain('old-request');
    });

    it('should surface out-of-week tentative requests under the pending filter', () => {
        const today = Date.now();
        const long_ago = today - 60 * 24 * 60 * 60 * 1000;
        options.set({ ...options(), request_filter: 'pending', date: long_ago });
        bookings = [
            {
                id: 'old-request',
                asset_id: 'unallocated-2',
                status: 'tentative',
                date: long_ago,
            } as Booking,
        ];

        spectator = createComponent();

        const all_ids = Object.values(spectator.component.grouped_requests())
            .flat()
            .map((b) => b.id);
        expect(all_ids).toContain('old-request');
    });

    it('should treat a current week tentative booking as waitlisted', () => {
        spectator = createComponent();
        const booking = { status: 'tentative', date: Date.now() } as Booking;

        expect(spectator.component.isWaitlisted(booking)).toBe(true);
        expect(spectator.component.isVisibleWaitlisted(booking)).toBe(true);
    });

    it('should hide waitlisted styling when the waitlist display is disabled', () => {
        show_waitlist = false;
        spectator = createComponent();
        const booking = { status: 'tentative', date: Date.now() } as Booking;

        expect(spectator.component.isWaitlisted(booking)).toBe(true);
        expect(spectator.component.isVisibleWaitlisted(booking)).toBe(false);
    });
});
