import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking, settingSignal, SettingsService } from '@placeos/common';
import { SimpleTableComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

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
    let custom_booking_columns: any[] = [];
    let bookable_hours: { start: number; end: number } | undefined;
    let timezone = 'Australia/Perth';
    let selected_date = Date.now();
    let request_filter: 'all' | 'bookings' | 'requests' | 'waitlist' = 'all';

    const createComponent = createComponentFactory({
        component: ParkingBookingsListComponent,
        providers: [
            MockProvider(ParkingStateService, {
                bookings: (() => bookings) as any,
                options: (() => ({
                    date: selected_date,
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
                filterEventList: vi.fn((list: Booking[]) => list),
                filterEventSearch: vi.fn((list: Booking[]) => list),
                rejectBooking: vi.fn(),
                approveBooking: vi.fn(),
                editReservation: vi.fn(),
                assignSpace: vi.fn(),
                removeBooking: vi.fn(),
                viewBookingHistory: vi.fn(),
                isRequest: vi.fn((booking: Booking) =>
                    booking.asset_id?.startsWith('unallocated'),
                ),
                isManualRequest: vi.fn(
                    (booking: Booking) =>
                        !!booking.extension_data?.approver_group,
                ),
                isWaitlisted: vi.fn(
                    (booking: Booking) => booking.id === 'waitlisted',
                ),
                canApproveBooking: vi.fn(() => can_approve),
                get timezone() {
                    return timezone;
                },
            } as any),
            MockProvider(SettingsService as any, {
                get: vi.fn((name: string) =>
                    name === 'app.parking.show_requests'
                        ? show_requests
                        : name === 'app.parking.show_waitlist'
                          ? show_waitlist
                          : name === 'app.parking.hide_bay_number'
                            ? hide_bay_number
                            : name === 'app.parking.hide_assign_space'
                              ? hide_assign_space
                              : name === 'app.parking.custom_booking_columns'
                                ? custom_booking_columns
                                : name === 'app.parking.bookable_hours'
                                  ? bookable_hours
                                  : false,
                ),
                signal: vi.fn((_: string, initial: boolean) => signal(initial)),
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
        custom_booking_columns = [];
        bookable_hours = undefined;
        timezone = 'Australia/Perth';
        selected_date = Date.now();
        request_filter = 'all';
        settingSignal('parking.allow_editing', true).set(true);
        settingSignal('parking.allow_deleting', false).set(false);
    });

    it('should show the vehicle type column when requests are enabled', () => {
        show_requests = true;
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'tentative',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toEqual([
            'state',
            'vehicle_type',
            'date',
            'asset_id',
            'user_name',
            'booked_by_name',
            'plate_number',
            'status',
            'actions',
        ]);
    });

    it('should hide the vehicle type column when requests are disabled', () => {
        show_requests = false;
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(
            table?.active_columns().map((column) => column.key),
        ).not.toContain('vehicle_type');
    });

    it('should expose the parking display timezone', () => {
        timezone = 'Australia/Perth';
        spectator = createComponent();

        expect(spectator.component.timezone).toBe('Australia/Perth');
    });

    it('should show start and end times for all-day bookings', () => {
        selected_date = new Date(2026, 6, 21, 8).valueOf();
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                all_day: true,
                date: new Date(2026, 6, 21, 8).valueOf(),
                date_end: new Date(2026, 6, 21, 17).valueOf(),
                duration: 9 * 60,
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const time = spectator.query('[data-testid="parking-booking-time"]');
        expect(time).toHaveText('8:00 AM - 5:00 PM');
        expect(time).not.toHaveText('All Day');
    });

    it('should show all day when the booking matches the bookable period', () => {
        bookable_hours = { start: 8, end: 17 };
        selected_date = new Date(2026, 6, 21, 8).valueOf();
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                all_day: true,
                date: new Date(2026, 6, 21, 8).valueOf(),
                date_end: new Date(2026, 6, 21, 17).valueOf(),
                duration: 9 * 60,
            } as unknown as Booking,
        ];
        spectator = createComponent();

        expect(spectator.component.isAllDayBooking(bookings[0])).toBe(true);
        expect(
            spectator.query('[data-testid="parking-booking-time"]'),
        ).not.toHaveText(':');
    });

    it('should only show bookings that start on the selected day', () => {
        selected_date = new Date('2026-08-03T12:00:00+08:00').valueOf();
        bookings = [
            {
                id: 'previous-day',
                asset_id: 'bay-1',
                status: 'approved',
                date: new Date('2026-08-02T17:30:00+08:00').valueOf(),
                date_end: new Date('2026-08-03T06:30:00+08:00').valueOf(),
                duration: 13 * 60,
            },
            {
                id: 'selected-day',
                asset_id: 'bay-2',
                status: 'approved',
                date: new Date('2026-08-03T17:30:00+08:00').valueOf(),
                date_end: new Date('2026-08-04T06:30:00+08:00').valueOf(),
                duration: 13 * 60,
            },
        ] as Booking[];
        spectator = createComponent();

        expect(
            spectator.component.filtered_events().map(({ id }) => id),
        ).toEqual(['selected-day']);
    });

    it('should mark overnight booking end times as the next day', () => {
        selected_date = new Date('2026-08-03T12:00:00+08:00').valueOf();
        bookings = [
            {
                id: 'overnight',
                asset_id: 'bay-1',
                status: 'approved',
                date: new Date('2026-08-03T17:30:00+08:00').valueOf(),
                date_end: new Date('2026-08-04T06:30:00+08:00').valueOf(),
                duration: 13 * 60,
            } as Booking,
        ];
        spectator = createComponent();

        expect(spectator.query('sup')).toHaveText('+1');
    });

    it('should add custom extension data columns', () => {
        custom_booking_columns = [
            { field: 'cost_code', name: 'Cost Code' },
            { field: 'vehicle.colour', display_name: 'Vehicle Colour' },
        ];
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'bay-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
                extension_data: {
                    cost_code: 'CC-123',
                    vehicle: { colour: 'Blue' },
                },
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toContain(
            'extension_data.cost_code',
        );
        expect(table?.active_columns().map((column) => column.name)).toContain(
            'Vehicle Colour',
        );
        expect(spectator.component.filtered_events()[0]).toMatchObject({
            'extension_data.cost_code': 'CC-123',
            'extension_data.vehicle.colour': 'Blue',
        });
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

    it('should show parking request notes when bookings include notes', () => {
        bookings = [
            {
                id: 'request-1',
                asset_id: 'unallocated-1',
                status: 'approved',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
                extension_data: { notes: 'After hours access required' },
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toContain(
            'notes',
        );
        expect(spectator.component.filtered_events()[0]).toMatchObject({
            notes: 'After hours access required',
        });
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
            } as unknown as Booking,
        ];
        spectator = createComponent();

        expect(
            spectator
                .queryAll('icon')
                .some((icon) => icon.textContent?.includes('add_location')),
        ).toBe(false);
    });

    it('should keep the history action available when no edit actions are available', () => {
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
            } as unknown as Booking,
        ];
        spectator = createComponent();
        spectator.component.can_edit.set(false);
        spectator.detectChanges();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toContain(
            'actions',
        );
        expect(
            spectator.query('[data-testid="parking-booking-history"]'),
        ).toExist();
    });

    it('should open booking history from the day view action', () => {
        const booking = {
            id: 'booking-1',
            asset_id: 'bay-1',
            status: 'approved',
            date: Date.now(),
            date_end: Date.now() + 60 * 60 * 1000,
            duration: 60,
        } as unknown as Booking;
        bookings = [booking];
        spectator = createComponent();

        spectator.click('[data-testid="parking-booking-history"]');

        expect(
            spectator.inject(ParkingStateService).viewBookingHistory,
        ).toHaveBeenCalledWith(expect.objectContaining({ id: booking.id }));
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
            } as unknown as Booking,
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

    it('should show cancelled bookings in red and disable their mutating actions', () => {
        bookings = [
            {
                id: 'booking-1',
                asset_id: 'unallocated-1',
                status: 'cancelled',
                date: Date.now(),
                date_end: Date.now() + 60 * 60 * 1000,
                duration: 60,
            } as unknown as Booking,
        ];
        settingSignal('parking.allow_deleting', false).set(true);
        spectator = createComponent();

        const status_button = spectator
            .queryAll('button')
            .find(
                (button) =>
                    button.classList.contains('w-30') &&
                    button.classList.contains('rounded-3xl'),
            );
        const action_button = (icon_name: string) =>
            spectator
                .queryAll('icon')
                .find((icon) => icon.textContent?.includes(icon_name))
                ?.closest('button');

        expect(spectator.component.statusLabel(bookings[0])).toBe(
            'COMMON.TYPE_CANCELLED',
        );
        expect(status_button).toBeDisabled();
        expect(status_button).toHaveClass('bg-error!');
        expect(status_button).toHaveClass('text-error-content!');
        expect(action_button('add_location')).toBeDisabled();
        expect(action_button('edit')).toBeDisabled();
        expect(action_button('delete')).toBeDisabled();
        expect(action_button('history')).not.toBeDisabled();
    });

    it('should map bookings to the expected vehicle type labels', () => {
        spectator = createComponent();

        expect(
            spectator.component.vehicleTypeLabel({ asset_id: 'bay-1' } as any),
        ).toBe('BOOKINGS.PARKING_VEHICLE_CAR');
        expect(
            spectator.component.vehicleTypeLabel({
                extension_data: { vehicle_type: 'truck' },
            } as any),
        ).toBe('BOOKINGS.PARKING_VEHICLE_TRUCK');
    });

    it('should map bookings to the expected vehicle type icons', () => {
        spectator = createComponent();

        expect(
            spectator.component.vehicleTypeIcon({ asset_id: 'bay-1' } as any),
        ).toBe('directions_car');
        expect(
            spectator.component.vehicleTypeIcon({
                extension_data: { vehicle_type: 'bike' },
            } as any),
        ).toBe('pedal_bike');
        expect(
            spectator.component.vehicleTypeIcon({
                extension_data: { vehicle_type: 'van' },
            } as any),
        ).toBe('airport_shuttle');
        expect(
            spectator.component.vehicleTypeIcon({
                extension_data: { vehicle_type: 'other' },
            } as any),
        ).toBe('category');
    });

    it('should hide waitlisted state when the setting is disabled', () => {
        show_waitlist = false;
        spectator = createComponent();

        expect(
            spectator.component.statusTone({
                id: 'waitlisted',
                asset_id: 'unallocated-1',
                status: 'tentative',
                process_state: 'unapproved',
            } as any),
        ).toBe('warning');
    });

    it('should map bookings to sortable vehicle type values', () => {
        bookings = [
            {
                asset_id: 'bay-1',
                date: selected_date,
                date_end: selected_date + 60 * 60 * 1000,
                extension_data: { vehicle_type: 'truck' },
            } as unknown as Booking,
        ];
        spectator = createComponent();

        expect(spectator.component.filtered_events()[0]).toMatchObject({
            vehicle_type: 'truck',
        });
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
            } as unknown as Booking,
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
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const booking = {
            asset_id: 'bay-1',
            status: 'tentative',
            extension_data: { is_assigned: true },
        } as unknown as Booking;
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

    it('should show deleted bookings as cancelled in red and disable status actions', () => {
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
            } as unknown as Booking,
        ];
        spectator = createComponent();

        const booking = {
            asset_id: 'bay-1',
            status: 'approved',
            deleted: true,
            extension_data: {},
        } as unknown as Booking;
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
        expect(status_button).toHaveClass('bg-error!');
        expect(status_button).toHaveClass('text-error-content!');
        expect(status_button).not.toHaveClass('bg-success');
        expect(status_button).not.toHaveClass('opacity-30');
        expect(
            spectator
                .queryAll('icon')
                .some((icon) => icon.textContent?.includes('arrow_drop_down')),
        ).toBe(false);
    });
});
