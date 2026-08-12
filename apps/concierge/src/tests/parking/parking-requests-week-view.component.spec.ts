import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { parkingRequestStatus } from '@placeos/bookings';
import { Booking, SettingsService } from '@placeos/common';
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
                isWaitlisted: vi.fn(
                    (b: Booking) =>
                        b.status === 'tentative' &&
                        parkingRequestStatus(b) === 'waitlist',
                ),
                isManualRequest: vi.fn(
                    (b: Booking) =>
                        b.status === 'tentative' &&
                        parkingRequestStatus(b) === 'approval_required',
                ),
                timezone: 'Australia/Perth',
            } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((name: string) =>
                    name === 'app.parking.show_waitlist'
                        ? show_waitlist
                        : false,
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

    it('should keep only unapproved requests under the waitlist filter', () => {
        const today = Date.now();
        options.set({ ...options(), request_filter: 'waitlist' });
        bookings = [
            {
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                approved: false,
                status: 'tentative',
                process_state: 'wait_list',
                date: today,
            } as Booking,
            {
                id: 'new-request',
                asset_id: 'unallocated-2',
                status: 'tentative',
                date: today,
            } as Booking,
        ];

        spectator = createComponent();

        const all_ids = Object.values(spectator.component.grouped_requests())
            .flat()
            .map((b) => b.id);
        expect(all_ids).toContain('waitlisted');
        expect(all_ids).not.toContain('new-request');
    });

    it('should surface requests without a process state under the pending filter', () => {
        const today = Date.now();
        options.set({ ...options(), request_filter: 'pending', date: today });
        bookings = [
            {
                id: 'new-request',
                asset_id: 'unallocated-2',
                status: 'tentative',
                date: today,
            } as Booking,
        ];

        spectator = createComponent();

        const all_ids = Object.values(spectator.component.grouped_requests())
            .flat()
            .map((b) => b.id);
        expect(all_ids).toContain('new-request');
    });

    it('should style requests by their request status', () => {
        spectator = createComponent();
        const waitlisted = {
            approved: false,
            status: 'tentative',
            process_state: 'wait_list',
            date: Date.now(),
        } as Booking;
        const manual = {
            approved: false,
            status: 'tentative',
            extension_data: { requires_manual_approval: true },
            date: Date.now(),
        } as any as Booking;
        const pending = { status: 'tentative', date: Date.now() } as Booking;

        expect(spectator.component.statusTone(waitlisted)).toBe('info');
        expect(spectator.component.statusTone(manual)).toBe('approval');
        expect(spectator.component.statusTone(pending)).toBe('warning');
    });

    it('should hide waitlisted styling when the waitlist display is disabled', () => {
        show_waitlist = false;
        spectator = createComponent();
        const booking = {
            approved: false,
            status: 'tentative',
            process_state: 'wait_list',
            date: Date.now(),
        } as Booking;

        expect(spectator.component.statusTone(booking)).toBe('warning');
    });
});
