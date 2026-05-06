import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Booking, settingSignal, SettingsService } from '@placeos/common';
import { SimpleTableComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { defer, of } from 'rxjs';

import { ParkingBookingsListComponent } from '../../app/parking/parking-bookings-list.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingBookingsListComponent', () => {
    let spectator: Spectator<ParkingBookingsListComponent>;
    let bookings: Booking[] = [];
    let can_approve = true;
    let show_requests = true;
    let hide_bay_number = false;
    let hide_assign_space = false;
    let show_waitlist = true;
    let request_filter: 'all' | 'bookings' | 'requests' | 'waitlist' = 'all';

    const createComponent = createComponentFactory({
        component: ParkingBookingsListComponent,
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
                filterEventList: jest.fn((list: Booking[]) => list),
                filterEventSearch: jest.fn((list: Booking[]) => list),
                rejectBooking: jest.fn(),
                approveBooking: jest.fn(),
                editReservation: jest.fn(),
                assignSpace: jest.fn(),
                removeBooking: jest.fn(),
                isRequest: jest.fn((booking: Booking) =>
                    booking.asset_id?.startsWith('unallocated'),
                ),
                isManualRequest: jest.fn(
                    (booking: Booking) =>
                        !!booking.extension_data?.approver_group,
                ),
                isWaitlisted: jest.fn(
                    (booking: Booking) => booking.id === 'waitlisted',
                ),
                canApproveBooking: jest.fn(() => can_approve),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((name: string) =>
                    name === 'app.parking.show_requests'
                        ? show_requests
                        : name === 'app.parking.show_waitlist'
                          ? show_waitlist
                          : name === 'app.parking.hide_bay_number'
                            ? hide_bay_number
                            : name === 'app.parking.hide_assign_space'
                               ? hide_assign_space
                               : false,
                ),
                signal: jest.fn((_: string, initial: boolean) => signal(initial)),
                time_format: 'h:mm a',
            }),
        ],
    });

    beforeEach(() => {
        bookings = [];
        can_approve = true;
        show_requests = true;
        hide_bay_number = false;
        hide_assign_space = false;
        show_waitlist = true;
        request_filter = 'all';
        settingSignal('parking.allow_editing', true).set(true);
        settingSignal('parking.allow_deleting', false).set(false);
    });

    it('should show the booking type column when requests are enabled', () => {
        show_requests = true;
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'tentative',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as Booking,
        ];
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toEqual([
            'state',
            'booking_type',
            'date',
            'asset_id',
            'user_name',
            'booked_by_name',
            'plate_number',
            'status',
            'actions',
        ]);
    });

    it('should hide the booking type column when requests are disabled', () => {
        show_requests = false;
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as Booking,
        ];
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(
            table?.active_columns().map((column) => column.key),
        ).not.toContain('booking_type');
    });

    it('should hide the bay number column when viewing requests', () => {
        request_filter = 'requests';
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(
            table?.active_columns().map((column) => column.key),
        ).not.toContain('asset_id');
    });

    it('should hide the bay number column when the setting is enabled', () => {
        hide_bay_number = true;
        request_filter = 'bookings';
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(
            table?.active_columns().map((column) => column.key),
        ).not.toContain('asset_id');
    });

    it('should hide the assign space action when the setting is enabled', () => {
        hide_assign_space = true;
        bookings = [
            {
                id: 'request-1',
                asset_id: 'unallocated-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
                extension_data: {},
            } as Booking,
        ];
        spectator = createComponent();

        expect(
            spectator
                .queryAll('icon')
                .some((icon) => icon.textContent?.includes('add_location')),
        ).toBe(false);
    });

    it('should hide the actions column when no visible actions are available', () => {
        hide_assign_space = true;
        request_filter = 'bookings';
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as Booking,
        ];
        spectator = createComponent();
        spectator.component.can_edit.set(false);
        spectator.detectChanges();

        const table = spectator.query(SimpleTableComponent);
        expect(
            table?.active_columns().map((column) => column.key),
        ).not.toContain('actions');
    });

    it('should show the delete action when deleting is enabled', () => {
        hide_assign_space = true;
        request_filter = 'bookings';
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as Booking,
        ];
        settingSignal('parking.allow_deleting', false).set(true);
        spectator = createComponent();
        spectator.component.can_edit.set(false);
        spectator.detectChanges();

        expect(
            spectator
                .queryAll('icon')
                .some((icon) => icon.textContent?.includes('delete')),
        ).toBe(true);
    });

    it('should map bookings to the expected type labels', () => {
        spectator = createComponent();

        expect(
            spectator.component.bookingTypeLabel({ asset_id: 'bay-1' } as any),
        ).toBe('APP.CONCIERGE.PARKING_BOOKING_TYPE_BOOKED');
        expect(
            spectator.component.bookingTypeLabel({
                asset_id: 'unallocated-1',
                status: 'approved',
            } as any),
        ).toBe('APP.CONCIERGE.PARKING_BOOKING_TYPE_REQUEST');
        expect(
            spectator.component.bookingTypeLabel({
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe('APP.CONCIERGE.PARKING_BOOKING_TYPE_PENDING_MANUAL');
        expect(
            spectator.component.bookingTypeLabel({
                asset_id: 'unallocated-1',
                status: 'approved',
                extension_data: { approver_group: 'parking-team' },
            } as any),
        ).toBe('APP.CONCIERGE.PARKING_BOOKING_TYPE_PENDING_MANUAL');
        expect(
            spectator.component.bookingTypeLabel({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe('APP.CONCIERGE.PARKING_BOOKING_TYPE_WAITLISTED');
    });

    it('should map bookings to the expected type icons', () => {
        spectator = createComponent();

        expect(
            spectator.component.bookingTypeIcon({ asset_id: 'bay-1' } as any),
        ).toBe('event_available');
        expect(
            spectator.component.bookingTypeIcon({
                asset_id: 'unallocated-1',
                status: 'approved',
            } as any),
        ).toBe('outbox');
        expect(
            spectator.component.bookingTypeIcon({
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe('pending_actions');
        expect(
            spectator.component.bookingTypeIcon({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe('hourglass_top');
    });

    it('should hide waitlisted booking indicators when the setting is disabled', () => {
        show_waitlist = false;
        spectator = createComponent();

        expect(
            spectator.component.bookingTypeLabel({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe('APP.CONCIERGE.PARKING_BOOKING_TYPE_PENDING_MANUAL');
        expect(
            spectator.component.bookingTypeIcon({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe('pending_actions');
        expect(
            spectator.component.isVisibleWaitlisted({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe(false);
    });

    it('should map bookings to sortable type values', () => {
        spectator = createComponent();

        expect(
            spectator.component.bookingTypeSortValue({
                asset_id: 'unallocated-1',
                status: 'approved',
            } as any),
        ).toBe(0);
        expect(
            spectator.component.bookingTypeSortValue({
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe(1);
        expect(
            spectator.component.bookingTypeSortValue({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
            } as any),
        ).toBe(2);
        expect(
            spectator.component.bookingTypeSortValue({
                asset_id: 'bay-1',
            } as any),
        ).toBe(3);
    });

    it('should show the status action as disabled when the user cannot approve the booking', () => {
        can_approve = false;
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as Booking,
        ];
        spectator = createComponent();

        const status_button = spectator
            .queryAll('button')
            .find(
                (button) =>
                    button.classList.contains('w-30') &&
                    button.classList.contains('rounded-3xl'),
            );

        expect(status_button).toBeDisabled();
        expect(status_button).toHaveClass('opacity-30');
    });

    it('should show assigned bookings as assigned and disable status actions', () => {
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
                extension_data: { is_assigned: true },
            } as Booking,
        ];
        spectator = createComponent();

        const booking = {
            asset_id: 'bay-1',
            status: 'tentative',
            extension_data: { is_assigned: true },
        } as Booking;
        const status_button = spectator
            .queryAll('button')
            .find(
                (button) =>
                    button.classList.contains('w-30') &&
                    button.classList.contains('rounded-3xl'),
            );

        expect(spectator.component.statusLabel(booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_ASSIGNED',
        );
        expect(spectator.component.isStatusActionDisabled(booking)).toBe(true);
        expect(status_button).toBeDisabled();
        expect(status_button).toHaveClass('bg-secondary!');
        expect(status_button).toHaveClass('text-secondary-content!');
        expect(status_button).not.toHaveClass('bg-success');
        expect(status_button).not.toHaveClass('bg-warning');
        expect(status_button).not.toHaveClass('opacity-30');
        expect(
            spectator
                .queryAll('icon')
                .some((icon) => icon.textContent?.includes('arrow_drop_down')),
        ).toBe(false);
    });

    it('should show deleted bookings as deleted and disable status actions', () => {
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                deleted: true,
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
                extension_data: {},
            } as Booking,
        ];
        spectator = createComponent();

        const booking = {
            asset_id: 'bay-1',
            status: 'approved',
            deleted: true,
            extension_data: {},
        } as Booking;
        const status_button = spectator
            .queryAll('button')
            .find(
                (button) =>
                    button.classList.contains('w-30') &&
                    button.classList.contains('rounded-3xl'),
            );

        expect(spectator.component.statusLabel(booking)).toBe(
            'APP.CONCIERGE.BOOKING_STATUS_DELETED',
        );
        expect(spectator.component.isStatusActionDisabled(booking)).toBe(true);
        expect(status_button).toBeDisabled();
        expect(status_button).toHaveClass('bg-neutral!');
        expect(status_button).toHaveClass('text-neutral-content!');
        expect(status_button).not.toHaveClass('bg-success');
        expect(status_button).not.toHaveClass('opacity-30');
        expect(
            spectator
                .queryAll('icon')
                .some((icon) => icon.textContent?.includes('arrow_drop_down')),
        ).toBe(false);
    });
});
