import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { signal } from '@angular/core';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ParkingStateService } from '../../app/parking/parking-state.service';
import { GuestListingComponent } from '../../app/visitors/guest-listing.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

describe('GuestListingComponent', () => {
    let spectator: Spectator<GuestListingComponent>;
    const settings = {
        get: jest.fn(),
        time_format: 'h:mm a',
        theme: 'light',
    };
    const filtered_bookings = new BehaviorSubject([]);
    const filters = new BehaviorSubject({});
    const createComponent = createComponentFactory({
        component: GuestListingComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(VisitorsStateService, {
                filtered_bookings,
                filters,
                search: '',
                downloadVisitorsList: jest.fn(),
                approveVisitor: jest.fn(),
                declineVisitor: jest.fn(),
                setCheckinStateForEvent: jest.fn(),
                setExt: jest.fn(),
                editVisitorNotes: jest.fn(),
                setCheckinState: jest.fn(),
                emailVisitor: jest.fn(),
                poll: jest.fn(),
            } as any),
            MockProvider(ParkingStateService, { editReservation: jest.fn() }),
            MockProvider(SettingsService, settings as any),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                building: { timezone: 'Australia/Sydney' },
                organisation: { id: 'org-1' },
                module: jest.fn(),
            } as any),
        ],
    });

    beforeEach(() => {
        settings.get.mockReset();
        filtered_bookings.next([]);
        filters.next({});
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show all visitor actions from 15 minutes before until 15 minutes after the booking', () => {
        const booking = {
            linked_event: { id: 'event-1' },
            date: new Date('2026-06-15T10:00:00').valueOf(),
            date_end: new Date('2026-06-15T11:00:00').valueOf(),
        } as any;
        const date_now = jest.spyOn(Date, 'now');

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
        const date_now = jest.spyOn(Date, 'now');

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
});
