import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Booking, OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ParkingStateService } from '../../app/parking/parking-state.service';
import { GuestListingComponent } from '../../app/visitors/guest-listing.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

describe('GuestListingComponent', () => {
    let spectator: Spectator<GuestListingComponent>;
    const set_ext = vi.fn();
    const poll = vi.fn();
    const settings = {
        get: vi.fn(),
        time_format: 'h:mm a',
        theme: 'light',
    };
    const filtered_bookings = signal([]);
    const filters = signal({});
    const createComponent = createComponentFactory({
        component: GuestListingComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(VisitorsStateService, {
                filtered_bookings,
                filters,
                search: '',
                downloadVisitorsList: vi.fn(),
                approveVisitor: vi.fn(),
                declineVisitor: vi.fn(),
                setCheckinStateForEvent: vi.fn(),
                setExt: set_ext,
                editVisitorNotes: vi.fn(),
                setCheckinState: vi.fn(),
                emailVisitor: vi.fn(),
                poll,
            } as any),
            MockProvider(ParkingStateService, { editReservation: vi.fn() }),
            MockProvider(SettingsService, settings as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { timezone: 'Australia/Sydney' },
                organisation: { id: 'org-1' },
                module: vi.fn(),
            } as any),
        ],
    });

    beforeEach(() => {
        settings.get.mockReset();
        set_ext.mockReset().mockResolvedValue(undefined);
        poll.mockReset();
        filtered_bookings.set([]);
        filters.set({});
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show cancelled bookings as cancelled', () => {
        expect(
            spectator.component.bookingStatusLabel({
                status: 'cancelled',
            } as any),
        ).toBe('COMMON.TYPE_CANCELLED');
    });

    it('should show all visitor actions from 15 minutes before until 15 minutes after the booking', () => {
        const booking = {
            linked_event: { id: 'event-1' },
            date: new Date('2026-06-15T10:00:00').valueOf(),
            date_end: new Date('2026-06-15T11:00:00').valueOf(),
        } as any;
        const date_now = vi.spyOn(Date, 'now');

        date_now.mockReturnValue(new Date('2026-06-15T09:44:59').valueOf());
        expect(spectator.component.canShowAllVisitorActions(booking)).toBe(
            false,
        );

        date_now.mockReturnValue(new Date('2026-06-15T09:45:00').valueOf());
        expect(spectator.component.canShowAllVisitorActions(booking)).toBe(
            true,
        );

        date_now.mockReturnValue(new Date('2026-06-15T11:15:00').valueOf());
        expect(spectator.component.canShowAllVisitorActions(booking)).toBe(
            true,
        );

        date_now.mockReturnValue(new Date('2026-06-15T11:15:01').valueOf());
        expect(spectator.component.canShowAllVisitorActions(booking)).toBe(
            false,
        );

        date_now.mockRestore();
    });

    it('should hide all visitor actions when the visitor is not linked to an event', () => {
        expect(
            spectator.component.canShowAllVisitorActions({
                date: Date.now(),
                date_end: Date.now(),
            } as any),
        ).toBe(false);
    });

    it('should use the configured all visitor action window', () => {
        settings.get.mockImplementation((name: string) =>
            name === 'app.visitors.all_visitors_action_window' ? 30 : undefined,
        );
        const booking = {
            linked_event: { id: 'event-1' },
            date: new Date('2026-06-15T10:00:00').valueOf(),
            date_end: new Date('2026-06-15T11:00:00').valueOf(),
        } as any;
        const date_now = vi.spyOn(Date, 'now');

        date_now.mockReturnValue(new Date('2026-06-15T09:30:00').valueOf());
        expect(spectator.component.canShowAllVisitorActions(booking)).toBe(
            true,
        );

        date_now.mockReturnValue(new Date('2026-06-15T09:29:59').valueOf());
        expect(spectator.component.canShowAllVisitorActions(booking)).toBe(
            false,
        );

        date_now.mockRestore();
    });

    it('should assign a pass number to the visitor', async () => {
        const booking = new Booking({
            id: 'booking-1',
            extension_data: { notes: 'VIP' },
        });

        await spectator.component.setPass(booking, 'PASS-101');

        expect(set_ext).toHaveBeenCalledWith(
            booking,
            'pass_number',
            'PASS-101',
        );
    });

    it('should remove an assigned pass number from the visitor', async () => {
        const booking = new Booking({
            id: 'booking-1',
            extension_data: { notes: 'VIP', pass_number: 'PASS-101' },
        });

        await spectator.component.setPass(booking);

        expect(set_ext).toHaveBeenCalledWith(booking, 'pass_number', null);
    });
});
