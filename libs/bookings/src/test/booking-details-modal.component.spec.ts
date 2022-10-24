import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    IconComponent,
    ImageCarouselComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule } from 'ng-mocks';

import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';
import { Booking } from '../lib/booking.class';

describe('BookingDetailsModalComponent', () => {
    let spectator: Spectator<BookingDetailsModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingDetailsModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: new Booking() },
            {
                provide: OrganisationService,
                useValue: { levelWithID: jest.fn(), buildings: [] },
            },
        ],
        declarations: [
            MockComponent(ImageCarouselComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent),
        ],
        imports: [MockModule(MatMenuModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show images', () => {
        expect('image-carousel').not.toExist();
        (spectator.component as any).booking = new Booking({ extension_data: { images: [''] } });
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

    it('should show title', () => expect('[title]').toExist());

    it('should show map', () => expect('interactive-map').toExist());
});
