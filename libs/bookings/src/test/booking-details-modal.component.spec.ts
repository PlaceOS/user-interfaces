import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    MapsPeopleService,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { Booking } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { IndoorMapsComponent } from 'libs/components/src/lib/indoor-maps.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { BehaviorSubject } from 'rxjs';
import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';

describe('BookingDetailsModalComponent', () => {
    let spectator: Spectator<BookingDetailsModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, { booking: new Booking() }),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                time_format: 'h:mm a',
            }),
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

    beforeEach(() => (spectator = createComponent()));

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
                attendees: [{ name: 'Visitor One', email: 'visitor.one@example.com' }],
            } as any),
        );

        expect(spectator.component.display_title()).toBe('Vendor Interview');
        expect(spectator.component.visitor_display_name()).toBe('Visitor One');
    });
});
