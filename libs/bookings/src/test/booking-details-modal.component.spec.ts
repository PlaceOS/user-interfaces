import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    MapsPeopleService,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { Booking } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { IndoorMapsComponent } from 'libs/components/src/lib/indoor-maps.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { BehaviorSubject, of } from 'rxjs';
import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';
import * as bookings_fn from '../lib/bookings.fn';

describe('BookingDetailsModalComponent', () => {
    let spectator: Spectator<BookingDetailsModalComponent>;
    const refresh_fn = jest.fn();
    const createComponent = createComponentFactory({
        component: BookingDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                booking: new Booking({
                    id: 'booking-1',
                    booking_type: 'desk',
                    type: 'desk',
                    asset_id: 'desk-1',
                    asset_name: 'Desk 1',
                    date: Date.now(),
                    duration: 60,
                    status: 'approved',
                } as any),
                edit_fn: jest.fn(),
                remove_fn: jest.fn(),
                end_fn: jest.fn(),
                refresh_fn,
            }),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            }),
            MockProvider(SettingsService, createSettingsServiceMock()),
            MockProvider(MapsPeopleService, {
                use_mapsindoors$: new BehaviorSubject(false),
            } as any),
        ],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
            MockComponent(StatusPillComponent),
            MockComponent(IndoorMapsComponent),
        ],
        imports: [MockModule(MatMenuModule), MockModule(MatDialogModule)],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show images', () => {
        expect('image-carousel').not.toExist();
        (spectator.component as any).booking.set(
            new Booking({
                extension_data: { images: [''] },
            }),
        );
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

    it('should show title', () => expect('[title]').toExist());

    it('should format visitor name nicely in booking details', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'visitor',
                asset_name: 'jane.doe@example.com',
                asset_id: 'jane.doe@example.com',
            }),
        );

        expect(spectator.component.visitor_display_name()).toBe('Jane Doe');
        expect(spectator.component.visitor_email_label()).toBe(
            'jane.doe@example.com',
        );
    });

    it('should show booking title as display title and visitor name separately', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'visitor',
                title: 'Vendor Interview',
                description: 'Vendor Interview',
                asset_name: 'Vendor Interview',
                asset_id: 'visitor.one@example.com',
                attendees: [
                    { name: 'Visitor One', email: 'visitor.one@example.com' },
                ],
            } as any),
        );

        expect(spectator.component.display_title()).toBe('Vendor Interview');
        expect(spectator.component.visitor_display_name()).toBe('Visitor One');
    });

    it('should refresh parent state after toggling checked in', async () => {
        jest.spyOn(bookings_fn, 'checkinBooking').mockReturnValue(
            of(
                new Booking({
                    id: 'booking-1',
                    checked_in: true,
                } as any),
            ),
        );

        await spectator.component.toggleCheckedIn();

        expect(refresh_fn).toHaveBeenCalled();
        expect(spectator.component.booking().checked_in).toBe(true);
    });

    it('should show waitlisted status for current week parking requests when enabled', () => {
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                status: 'tentative',
            } as any),
        );

        expect(spectator.component.booking_status()).toBe('info');
    });

    it('should hide waitlisted status for parking requests when waitlist display is disabled', () => {
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation((name: string) =>
            name === 'app.parking.show_waitlist' ? false : undefined,
        );
        spectator = createComponent();
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'unallocated-1',
                date: Date.now(),
                status: 'tentative',
            } as any),
        );

        expect(spectator.component.booking_status()).toBe('warning');
    });

    it('should hide selected parking space when enabled', () => {
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation((name: string) =>
            name === 'app.parking.hide_selected_space' ? true : undefined,
        );
        spectator = createComponent();
        (spectator.component as any).booking.set(
            new Booking({
                booking_type: 'parking',
                type: 'parking',
                asset_id: 'parking-1',
                asset_name: 'Parking 1',
            } as any),
        );

        expect(spectator.component.resource_details_label()).toBe(
            'RESOURCE.PARKING',
        );
    });
});
