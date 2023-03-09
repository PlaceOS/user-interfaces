import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import {
    IconComponent,
    ImageCarouselComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';
import { Booking } from '../lib/booking.class';

describe('BookingDetailsModalComponent', () => {
    let spectator: Spectator<BookingDetailsModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingDetailsModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, new Booking()),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                buildings: [],
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
        ],
        imports: [MockModule(MatMenuModule), MockModule(MatDialogModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show images', () => {
        expect('image-carousel').not.toExist();
        (spectator.component as any).booking = new Booking({
            extension_data: { images: [''] },
        });
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

    it('should show title', () => expect('[title]').toExist());

    it('should show map', () => expect('interactive-map').toExist());
});
