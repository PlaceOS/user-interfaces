import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { addHours, set } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { OrganisationService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';

import { Booking, SettingsService } from '@placeos/common';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { BookingCardComponent } from '../lib/booking-card.component';
import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';

describe('BookingCardComponent', () => {
    let spectator: SpectatorRouting<BookingCardComponent>;
    const settings_service = createSettingsServiceMock();
    const createComponent = createRoutingFactory({
        component: BookingCardComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(StatusPillComponent),
        ],
        providers: [
            MockProvider(OrganisationService as any, {
                levelWithID: vi.fn(),
                active_building: signal({}),
                level_list: signal([]),
                building_list: signal([]),
                buildingsForRegion: vi.fn(() => []),
            }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService as any, settings_service),
        ],
    });

    beforeEach(() => {
        settings_service.get.mockReset();
        settings_service.get.mockImplementation((_: string) => undefined);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show event details', () => {
        expect('[name="view-booking-details"]').not.toExist();
        spectator.setInput({
            booking: new Booking({
                date: set(1, { hours: 8, minutes: 0 }).valueOf(),
            }),
        });
        spectator.detectChanges();
        expect('[name="view-booking-details"]').toExist();
        expect('[day]').not.toExist();
        spectator.setInput({ show_day: true });
        spectator.detectChanges();
        expect('[day]').toExist();
    });

    it('should show checked-in badge when booking is checked in', () => {
        const future_date = addHours(new Date(), 1).valueOf();
        spectator.setInput({
            booking: new Booking({
                date: future_date,
                checked_in: true,
            }),
        });
        spectator.detectChanges();
        expect('[checked-in-badge]').toExist();
    });

    it('should pass the refresh callback to booking details', () => {
        vi.useFakeTimers();
        const dialog = spectator.inject(MatDialog);
        const refresh_fn = vi.fn();
        spectator.setInput({
            booking: new Booking({ id: 'booking-1' }),
            refresh_fn,
        });

        spectator.component.viewDetails();
        vi.runAllTimers();

        expect(dialog.open).toHaveBeenCalledWith(
            BookingDetailsModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({ refresh_fn }),
            }),
        );
        vi.useRealTimers();
    });

    it('should not show checked-in badge when booking is not checked in', () => {
        const future_date = addHours(new Date(), 1).valueOf();
        spectator.setInput({
            booking: new Booking({
                date: future_date,
                checked_in: false,
            }),
        });
        spectator.detectChanges();
        expect('[checked-in-badge]').not.toExist();
    });

    it('should show visitor name instead of reason when attendee is present', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'visitor',
                type: 'visitor',
                title: 'Vendor Interview',
                description: 'Vendor Interview',
                asset_name: 'Vendor Interview',
                asset_id: 'visitor.one@example.com',
                attendees: [
                    {
                        name: 'Visitor One',
                        email: 'visitor.one@example.com',
                    },
                ],
            } as any),
        });
        spectator.detectChanges();

        expect(spectator.component.resource_label()).toBe('Visitor One');
    });

    it('should show who an associated booking is for', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'desk',
                type: 'desk',
                title: 'Desk booking',
                user_email: 'james.mcmillan@example.com',
                user_name: 'James McMillan',
            } as any),
        });
        spectator.detectChanges();

        expect('[booked-for]').toExist();
        expect(spectator.component.booked_for_label()).toBe('James McMillan');
    });

    it('should show waitlisted status for unapproved parking requests when enabled', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                status: 'tentative',
                process_state: 'unapproved',
            } as any),
        });

        expect(spectator.component.status()).toBe('info');
    });

    it('should not show waiting approval parking requests as waitlisted', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                status: 'tentative',
                process_state: 'waiting_approval',
            } as any),
        });

        expect(spectator.component.status()).toBe('warning');
    });

    it('should hide waitlisted status for parking requests when waitlist display is disabled', () => {
        settings_service.get.mockImplementation((name: string) =>
            name === 'app.parking.show_waitlist' ? false : undefined,
        );
        spectator.setInput({
            booking: new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                status: 'tentative',
                process_state: 'unapproved',
            } as any),
        });

        expect(spectator.component.status()).toBe('warning');
    });

    it('should hide the asset id of unallocated parking bookings', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-123',
            } as any),
        });

        expect(spectator.component.resource_label()).toBe('RESOURCE.PARKING');
    });

    it('should show selected parking space when allocated', () => {
        spectator.setInput({
            booking: new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'parking-1',
                asset_name: 'Parking 1',
            } as any),
        });

        expect(spectator.component.resource_label()).toBe('Parking 1');
    });

    it('should hide selected parking space when enabled', () => {
        settings_service.get.mockImplementation((name: string) =>
            name === 'app.parking.hide_selected_space' ? true : undefined,
        );
        spectator.setInput({
            booking: new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'parking-1',
                asset_name: 'Parking 1',
            } as any),
        });

        expect(spectator.component.resource_label()).toBe('RESOURCE.PARKING');
    });
});
