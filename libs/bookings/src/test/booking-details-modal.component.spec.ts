import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MapsPeopleService, SettingsService } from '@placeos/common';
import {
    IconComponent,
    ImageCarouselComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { BookingDetailsModalComponent } from '../lib/booking-details-modal.component';
import { Booking } from '../lib/booking.class';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { BehaviorSubject } from 'rxjs';
import { IndoorMapsComponent } from 'libs/components/src/lib/indoor-maps.component';

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
        (spectator.component as any).booking = new Booking({
            extension_data: { images: [''] },
        });
        spectator.detectChanges();
        expect('image-carousel').toExist();
    });

    it('should show title', () => expect('[title]').toExist());

    it('should show map', () => expect('interactive-map').toExist());
});
